function moveToDir(langDir) {
	var root = "/";
	
	if(langDir != "fr"){
		root += langDir ;
	}
	
	window.location.href = root + "/";
	
}
function getLang() {
	return document.documentElement.lang;
}
