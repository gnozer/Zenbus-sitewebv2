/**
 * [[Description]]
 */
function init(){
	//this.handleLinkedCities();
	this.handleCities();
	this.initMap();
	this.networkTypes.forEach(function(type){
		this.checkedTypes.push(type.value);
	}.bind(this));
	this.runStat();
	this.showLoader = false;
}
/**
 * [[Description]]
 */
function update(){
    this.updateMap();
}
/**
 * Utils to test if two arrays have common elements
 * @param   {[[Type]]} arr1 [[Description]]
 * @param   {[[Type]]} arr2 [[Description]]
 * @returns {boolean}  [[Description]]
 */
function hasCommonElement(arr1,arr2){
    arr1.forEach(function(elt){
      if(arr2.indexOf(elt) > -1){
          return true;
      } 
    });
    return false;
}
/**
 * Returns a string formated number with spaces betweem thousands/millions, etc.. 
 * @param   {number}   number [[Description]]
 * @returns {string}   [[Description]]
 */

/**
 * [[Description]]
 */
function created() {
	this.showLoader = true;
}
