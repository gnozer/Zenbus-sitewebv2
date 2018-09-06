//linked cities
                    this.cities.forEach(function(city2){
                       if(city !== city2){
	                        if(hasCommonElement(city.namespaces, city2.namespaces)){
	                            console.log("yo");
	                            L.polygon([
	                                [city.lat, city.lng],
	                                [city2.lat, city2.lng],
	                            ]).addTo(this.map);
	                        }
                    	}
                    }.bind(this));

  
        
        
        //TODO remove, will not be used
        toggleCheckBoxes : function(event){
            if(this.checkedTypes.length == 0 || this.checkedTypes.length > 0 && this.checkedTypes.length != this.networkTypes.length){
                this.checkedTypes = [];
                this.networkTypes.forEach(function(type){
                    this.checkedTypes.push(type.value);
                }.bind(this));
            }else if(this.checkedTypes.length > 0){
                this.checkedTypes = [];
            }
        },
            
            
            
        //called when filter has changes, watched properties
        applyFilter: function(){
            var filter = this.currentFilter();
            
            this.filteredCities = [];
            
            this.cities.forEach(function(city){
                if((city.types & filter) >= filter){
                    if(!this.cluster.hasLayer(city.marker)){
                        this.cluster.addLayer(city.marker);
                        this.filteredCities.push(city);
                    }
                }else{
                    this.cluster.removeLayer(city.marker);
                }
            }.bind(this));
        
    },