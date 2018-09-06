/**
 * Name speaks to itself...
 * @returns {[[Type]]} [[Description]]
 */
function initMap(){
    this.map = L.map('mapContainer');
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>', maxZoom: 15}).addTo(this.map); 
    this.cluster = L.markerClusterGroup({
        showCoverageOnHover:false,
        iconCreateFunction: function(cluster) {
          return L.divIcon({ html: cluster.getChildCount(), className: "cluster", iconSize: L.point(50, 50), iconAnchor: L.point(25, 46), autoPan: false });
       }
    });
    this.currentBounds = L.latLngBounds();
    this.cities.forEach(function(city){
        this.currentBounds.extend(city.bounds);
        this.cluster.addLayer(city.marker);
    }.bind(this));
    
    this.map.on('click', mapBehaviours.bind(this));
    this.map.on('zoomstart', mapBehaviours.bind(this));
    this.map.on('dragstart', mapBehaviours.bind(this));
    this.map.addLayer(this.cluster);
    this.fitBounds();
	/*this.handleLinkedCities();
	this.polylines.display(this.map);*/
}
/**
 * Name speaks to itself...
 */
function updateMap(){
    var 
    filter = this.currentFilter;
    this.currentBounds = L.latLngBounds();
    
    //check here if city has at least one filtered network
    this.cities.forEach(function(city){
        if(isFilteredCity(city, this.filteredAccounts, filter)){
            if(!this.cluster.hasLayer(city.marker)){
                this.cluster.addLayer(city.marker);
            }
            this.currentBounds.extend(city.bounds);
        }else{
            this.cluster.removeLayer(city.marker);
        }
        
    }.bind(this));
	
    fitBounds.call(this);
}
/**
 * Compute current filter
 * @param   {[[Type]]} checkedTypes [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function currentFilter(){
    return (this.checkedTypes.length > 0 ? this.checkedTypes.reduce(function(acc, val){
         return acc + val;
     }) :  0);
}
/**
 * Init cities and associated marker
 */
function handleCities(){
    this.cities.forEach(function(city){
        //Compute city types
        city.types = 0; 
        city.bounds = L.latLngBounds();
        city.bounds.extend(L.latLng(city.lat, city.lng), L.latLng(city.lat, city.lng));
        city.namespaces.forEach(function(ns, i){
            //set accounts ref
            this.accounts.forEach(function(acc){
                if(acc.namespace == ns){
                    city.namespaces[i] = acc; //set ref, will be easier to feach city accounts
                }
            }.bind(this));
        }.bind(this));
        //Create city marker and
        city.marker = L.marker([city.lat, city.lng], {'title': city.name,icon: new CityIcon()});
		 
		 city.marker.setBouncingOptions({
				bounceHeight: 40,
        		bounceSpeed: 60
		  });
		  
		  //city.marker.bounce({duration: 500, height: 100});
        city.marker.on('click', onMarkerClickClosure.call(this, city));
    }.bind(this));
}

/**
 * [[Description]]
 */
function handleLinkedCities(){
    for(var i = 0 ; i < this.cities.length; i++){
        var 
        cityA = this.cities[i];
        
        for(var j = 0 ; j < this.cities.length ; j++){
            var cityB = this.cities[j];
            this.polylines.create(cityA, cityB);
        }
    }
}
/**
 * Closure to set marker behaviour
 * @param   {object}   self [[Description]]
 * @param   {object}   city [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function onMarkerClickClosure(city){
    return markerBehaviour.bind(this, city);
}
/**
 * [[Description]]
 * @param {object}   city [[Description]]
 * @param {[[Type]]} self [[Description]]
 */
function markerBehaviour(city){
	this.map.fitBounds(city.bounds);
	this.focusedCity = city;
	city.marker.toggleBouncing();
	setTimeout(function(city){
		this.focusedCity = city;
	}.bind(this, city), 300);
	setTimeout(function(city){
		city.marker.stopBouncing();
	}.bind(this, city), 1000);
}
/**
 * [[Description]]
 * @param {[[Type]]} acc [[Description]]
 */
function searchItemBehaviour(acc){
    this.cities.forEach(function(city){
        city.namespaces.forEach(function(a){
            if(a === acc){
                markerBehaviour.call(this, city);
            }
        }.bind(this));
    }.bind(this));
    
    this.showSearchResults = false;
}
/**
 * Fetch types object of an account
 * @param   {[[Type]]} types [[Description]]
 * @returns {[[Type]]} Returns types object array
 */
function fetchAccTypes(types){
    return this.networkTypes.filter(function(type){
        return (types & type.value) == type.value;
    }.bind(this));
}
/**
 * [[Description]]
 */
function mapBehaviours(){
	 this.focusedCity = null;
	 this.showSearchResults = false;
}
/**
 * Utils to fit map bounds in function of context
 */
function fitBounds(){
    this.focusedCity = null;
    if(this.currentBounds && this.currentBounds.isValid()){
        this.map.fitBounds(this.currentBounds);
    }else{
        this.map.setZoom(0);
    }
}
/**
 * Utils to test if acc is belong to current filter
 * @param   {[[Type]]} a      [[Description]]
 * @param   {[[Type]]} filter [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function belongTo(a){
	//all
	if(this.checkedFilter == -1){
		return true;
	}
	
	//private
	if(this.checkedFilter == 0){
		return a.pRivate;
	}
	
	return (this.checkedFilter & a.types) == this.checkedFilter;
}
/**
 * Utils to test if acc is belong to current filter
 * @param   {object}   city     [[Description]]
 * @param   {[[Type]]} accounts [[Description]]
 * @param   {[[Type]]} filter   [[Description]]
 * @returns {boolean}  [[Description]]
 */
function isFilteredCity(city, accounts, filter){
    for(var i = 0 ; i < city.namespaces.length ; i++){
        if(accounts.indexOf(city.namespaces[i]) > -1){
            return true;
        }
    }
    return false;
}
/**
 * [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function filteredCities(){
    var fc = [];
    
    this.cities.forEach(function(city){
        
        if(city.namespaces.some(function(acc){return (this.filteredAccounts.indexOf(acc) > -1);}.bind(this))){
            fc.push(city);
        }
        
    }.bind(this));
    
    return fc;
}
/**
 * Computed method to keep update current "active" accounts (belong to current filter)
 * @returns {[[Type]]} [[Description]]
 */
function filteredAccounts(){
    var 
    accounts = [];
    
    this.accounts.forEach(function(acc){
        if(belongTo.call(this, acc)){
            accounts.push(acc);
        }
    }.bind(this));
    
    return accounts;
}
/**
 * [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function searchedAccounts(){
    return this.filteredAccounts.sort(compare).filter(function(account){
        return account.pageTitle.toLowerCase().includes(this.search.toLowerCase());
    }.bind(this));
}
/**
 * [[Description]]
 */
function displayUserPosition(){
     if(!this.user && navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(user){
                this.user = {marker:null, bounds:null, active: false };
                this.user.marker = L.marker([user.coords.latitude, user.coords.longitude], {icon: L.icon({
                    iconUrl: '/assets/img/meIcon.png',
                    iconSize: L.point(50, 50),
                    iconAnchor: L.point(25, 46)
                })});
                this.user.bounds = L.latLngBounds([this.user.marker.getLatLng()]); 
                //this.cluster.addLayer(this.userPosition);
                this.map.addLayer(this.user.marker);
            }.bind(this));
    }
}
/**
 * [[Description]]
 */
function locateUser(){
    if(this.user){
        this.focusedCity = null; //TODO refactor
        if(this.user.active){
            this.fitBounds();
        }else if(this.user.bounds){
            this.map.fitBounds(this.user.bounds);
        }
        this.user.active = !this.user.active;
        
    }else{
        this.fitBounds();
    }
}
/**
 * [[Description]]
 * @param   {object}   a [[Description]]
 * @param   {object}   b [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function compare(a, b) {
    if (a.name < b.name){
        return -1;
    }
    if (a.name > b.name){
        return 1;
    }
    return 0;
}
/**
 * [[Description]]
 */
function activeFiltersLabel(){
	var result = [];
			
	if(!this.private){
		result.push(messages[this.getLang()].homepage.map.mapexpand.prive);
	}
	this.networkTypes.forEach(function(type){
		if((type.value & this.currentFilter) != type.value){
			result.push(filterLabel(type.value));
		}
	}.bind(this));

	return result.join();
}
/**
 * [[Description]]
 * @param   {[[Type]]} typeV [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function filterLabel(typeV){
	return messages[this.getLang()].homepage.map.mapexpand.types[typeV];
}