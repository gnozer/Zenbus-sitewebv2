/**
 * Set the language of the page
 */
function moveToDir(langDir) {
	
	var root = "/";
	
	if(langDir != "fr"){
		root += langDir ;
	}
	
	window.location.href = root + "/";
	
}
/**
 * Helper to fetch current language
 * @returns {[[Type]]} [[Description]]
 */
function getLang() {
	return document.documentElement.lang;
}
