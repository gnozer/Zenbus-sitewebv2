(function(){
	var styleProperties = {
		default: "color:red; font-size: large; ",
		bold: "font-weight: bold; "
	};
	
	setTimeout(function(){console.log("%cWe are hiring devs ! Contact-us if you want to join the zenbus core team: %ccontact@zenbus.fr",styleProperties.default , styleProperties.default + styleProperties.bold );}, 1000);
})();
