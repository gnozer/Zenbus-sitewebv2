var NL_FORM; //DOM element
/**
 * Utils to test if email address is well formed
 */
function isEmailValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
}

/**
 * Main function to send an email to newsletter sheet
 */
function sendEmailToSheet(email) {
	if(isEmailValid(email)) {
		var args = "form=newsletter&email=" + encodeURIComponent(email);
		get("https://script.google.com/macros/s/AKfycbzOOFyPsyXzqytgQK8aWzEI1srgCOhKPTCwFwQ5xys8GXEAJiM/exec?"+args).then(function(){
			NL_FORM.classList.add("email-sent");
		})
		.catch(function(error){
			console.log('error', error.message);
		});
	}else{
		NL_FORM.classList.add("form-error");
	}
}

/**
 * To open mail soft from his machine
 */
function mailto(){
	window.location = "mailto:contact@zenbus.fr";
}

/**
 * Utils to get using promise 
 * @param   {String} url to get
 * @returns {Object} promise
 */
function get(url){
	return new Promise(function(resolve, reject){
		
		var req = new XMLHttpRequest();
		req.open('GET',url);
		req.setRequestHeader("Accept","application/json");
		
		req.onload = function(){
			if(req.status == 200){
				resolve(JSON.parse(req.response));
			}else{
				reject(req.statusText);
			}
		}
		req.send();
	});
}

(function(){
		NL_FORM = document.getElementById('newsletterForm');
		NL_FORM.addEventListener("submit", function(evt){
			evt.preventDefault();
			sendEmailToSheet(document.getElementsByName("email")[0].value);
		});
})();