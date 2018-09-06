/**
 * [[Description]]
 * @param {object} cityA [[Description]]
 * @param {object} cityB [[Description]]
 */
var CitiesPolyline = function(cityA, cityB){
    this.cityA = cityA;
    this.cityB = cityB;
    this.polyline = L.polyline([[cityA.lat, cityA.lng],[cityB.lat, cityB.lng]]);
};
/**
 * [[Description]]
 * @param   {[[Type]]} city [[Description]]
 * @returns {boolean}  [[Description]]
 */
CitiesPolyline.prototype.hasCity = function(city){
    if(this.cityA === city){
        return true;
    }
    if(this.cityB === city){
        return true;
    }
    return false;
};
/**
 * [[Description]]
 * @param   {[[Type]]} cityA [[Description]]
 * @param   {[[Type]]} cityB [[Description]]
 * @returns {boolean}  [[Description]]
 */
CitiesPolyline.prototype.equals = function(cityA, cityB){
    if(this.hasCity(cityA) || this.hasCity(cityB)){
        return true;
    }
    return false;
};
/**
 * [[Description]]
 * @param {[[Type]]} map [[Description]]
 */
CitiesPolyline.prototype.display = function(map){
    console.log("Display polyline between: "+this.cityA.name + " --- "+ this.cityB.name);
    map.addLayer(this.polyline);
};
/**
 * [[Description]]
 * @param {[[Type]]} map [[Description]]
 */
CitiesPolyline.prototype.hide = function(map){
    map.removeLayer(this.polyline);
};


/**
 * [[Description]]
 */
var Polylines = function(){
    this.array = [];
};
/**
 * [[Description]]
 * @param   {object}  cityA [[Description]]
 * @param   {object}  cityB [[Description]]
 * @returns {boolean} [[Description]]
 */
Polylines.prototype.isLinkedCities = function(cityA, cityB){
    for(var i = 0 ; i < cityA.namespaces.length ; i ++){
        if(cityB.namespaces.indexOf(cityA.namespaces[i]) > -1){
            return true;
        }
    }
    return false;
};
/**
 * [[Description]]
 * @param   {[[Type]]} cityA [[Description]]
 * @param   {[[Type]]} cityB [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
Polylines.prototype.create = function(cityA, cityB){
    if(cityA !== cityB){
        for(var i = 0 ; i < this.array.length ; i++){
            if(this.array[i].equals(cityA, cityB)){
                return this.array[i];
            }
        }
        if(this.isLinkedCities(cityA, cityB)){
            var newPolyline = new CitiesPolyline(cityA, cityB);
            this.array.push(newPolyline);
            return newPolyline;
        }else{
            return null;
        }
    }
    return null;
};
/**
 * [[Description]]
 * @param {[[Type]]} map [[Description]]
 */
Polylines.prototype.display = function(map){
    this.array.forEach(function(p){
        p.display(map);
    });
};
/**
 * [[Description]]
 * @param {[[Type]]} map [[Description]]
 */
Polylines.prototype.hide = function(map){
    this.array.forEach(function(p){
        p.hide(map);
    });
};
/**
 * [[Description]]
 * @param   {[[Type]]} cityA [[Description]]
 * @param   {[[Type]]} cityB [[Description]]
 * @returns {boolean}  [[Description]]
 */
Polylines.prototype.isExisting = function(cityA, cityB){
    for(var i = 0 ; i < this.array.length ; i++){
        if(this.array[i].equals(cityA, cityB)){
            return true;
        }
    }
    return false;
};