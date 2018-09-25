new Vue({
/*
	i18n,
*/
	el: '#app',
	delimiters: ['[%', '%]'], 
	data: {
		//From API
		cities: [],
		accounts: [],
		networkTypes: [],
		//Map
		focusedCity: null,
		checkedTypes: [], //TODO remove it
		checkedFilter: -1,
		search: '',
		map: null,
		cluster: null,
		currentBounds: null,
		isActiveMap: false,
		private: true, //checkbox value
		user: null,
		showPrivateForm: false,
		privateNs: "",
		currentPassword: "",
		showSearchResults: false,
		hasScrolled: false,
		//dev
		//polylines: new Polylines(),
		
		//Statistics
		counterBase: 37000000,
		dateBase: 1525125601,
		currentKms:0,
		numberWithSpaces: numberWithSpaces,
		//newsletter
		dataFromForms: {
			newsletter:{
				email:''
			},
			contact:{
				email:'',
				prenom:'',
				nom:'',
				type:'curieux',
				message:'',
				rgpd:false
			}
		},
		contactSent:false,
		newsletterSent:false,
		//Responsive
		showPanel: false,
		//loading
		showLoader: false,
		errors:{
			contact:[],
			newsletter:[],
			map:[]
		}
	},
	
	methods: {
		//Lang
		moveToDir: moveToDir,
		getLang: getLang,
		filterLabel: filterLabel,
		//Map
		displayUserPosition: displayUserPosition,
		handleLinkedCities: handleLinkedCities,
		handleCities: handleCities,
		locateUser: locateUser,
		initMap: initMap,
		fitBounds: fitBounds,
		belongTo : belongTo,
		searchItemBehaviour: searchItemBehaviour,
		togglePrivateForm: function(){
			this.privateForm = !this.privateForm ;  
		},
		privateFormBehaviour: privateFormBehaviour,
		updateMap: updateMap,
		toggleMap: function(){
			this.isActiveMap = !this.isActiveMap;
			this.displayUserPosition();
		},
		init: init,
		update: update,
		//Statistics
		runStat: runStat,
		//statsVisibilityChanged: statsVisibilityChanged(),
		//Newsletter
		areDatasValid: areDatasValid,
		sendDatasToSheet: sendDatasToSheet,
		//Mailto
		mailto: mailto
	},
	
	created: created, 
	mounted: function(){
		/*this.$http.get("http://404.zenbus.fr/api").then(function(response){
			var data = JSON.parse(response.bodyText);
			this.cities = data.cities;
			this.accounts = data.accounts;
			this.networkTypes = data.networkTypes;
			this.init();
		});*/
		
		this.cities = API.cities;
		this.accounts = API.accounts;
		this.networkTypes = API.networkTypes;
		this.init();
		
		Draggable.create(".products-container-showcase", {
			bounds:"#dragContainer",
			//allowNativeTouchScrolling:false,
			type:"x",
			zIndexBoost:false,
			edgeResistance:0,
			dragResistance:0
		});
		
		if(window.location.hash.substring(1) === "map"){
			this.isActiveMap = true;
		}
		window.onscroll = function() {
			if(document.documentElement.scrollTop != 0){
				this.hasScrolled = true;
			}else{
				this.hasScrolled = false;
			}
		}.bind(this);
		
	},
	watch: {
		private: update,
		checkedFilter: update,
		isActiveMap: fitBounds,
		showSearchResults: function(){
			this.search = '';
		}
	},
	computed: {
		currentFilter: currentFilter,
		filteredAccounts: filteredAccounts, //map
		filteredCities: filteredCities, //map
		searchedAccounts: searchedAccounts, //search
		activeFiltersLabel: activeFiltersLabel //search
	},
	destroyed: function() {
		clearInterval(this.$interval);
	}
}); 