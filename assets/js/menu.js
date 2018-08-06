var 
burgerButton;

/**
 * Toggle class showPanel on menu
 * @param {[[Type]]} evt [[Description]]
 */
function managePanel(evt){
	console.log(this);
	if(this.classList.contains("show-panel")){
		this.classList.remove("show-panel")
	}else{
		this.classList.add("show-panel")
	}
}

(function(){
	burgerButton = document.getElementById("burgerButton");
	burgerButton.addEventListener("click", managePanel.bind(burgerButton));
})();