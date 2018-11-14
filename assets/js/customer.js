var CALL_ME_FORM; //DOM element
var ESTIMATE_FORM;

/**
 * Utils to test if email address is well formed
 */
function isEmailValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
}

/**
 * Function to send a phone number to CallMe sheet
 */
function sendPhoneToSheet(phone, pageId) {
	var args = "form=CallMe&phone=" + encodeURIComponent(phone) + "&page=" + encodeURIComponent(pageId);
	get("https://script.google.com/macros/s/AKfycbyAxaPtYwy-Uwp27vEu9uTaiJ1NnevuR4U2CRn5zVNczMnGYTs/exec?"+args).then(function(){
		CALL_ME_FORM.classList.add("phone-sent");
	})
	.catch(function(error){
		console.log('error', error.message);
	});
}

/**
 * Function to check if Datas sent are valid
 */
function areDatasValid(email, phone) {
	var rgpd_checkbox = document.querySelector('#estimateCheckboxRGPD');
	if(ESTIMATE_FORM.classList.contains("rgpd-error")) {
		ESTIMATE_FORM.classList.remove("rgpd-error");
	} else if(ESTIMATE_FORM.classList.contains("contact-error")) {
		ESTIMATE_FORM.classList.remove("contact-error");
	}
	if(!rgpd_checkbox.checked) {
		ESTIMATE_FORM.classList.add("rgpd-error");
	}

	if(email == '' && phone == ''){
		ESTIMATE_FORM.classList.add("contact-error");
	}
	if(ESTIMATE_FORM.classList.length == 1) return true;
}

/**
 * Main function to send an email to contact sheet
 */
function sendDatasToSheet(firstname, lastname, iam, email, message) {
	if(areDatasValid(email)) {
		var args = "form=contact&email="+encodeURIComponent(email)+"&prenom="+encodeURIComponent(firstname)+"&nom="+encodeURIComponent(lastname)+"&type="+encodeURIComponent(iam)+"&message="+encodeURIComponent(message);
		get("https://script.google.com/macros/s/AKfycbzOOFyPsyXzqytgQK8aWzEI1srgCOhKPTCwFwQ5xys8GXEAJiM/exec?"+args).then(function(){
			CONTACT_FORM.classList.add("contact-sent");
		})
		.catch(function(error){
			console.log('error', error.message);
		});
	}
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
		CALL_ME_FORM = document.getElementById('callMeForm');
		CALL_ME_FORM.addEventListener("submit", function(evt){
			evt.preventDefault();
			
			sendPhoneToSheet(document.getElementById("inputPhone").value, document.getElementById("inputPageId").value);
		});
	
		ESTIMATE_FORM = document.getElementById('estimateForm');
		ESTIMATE_FORM.addEventListener("submit", function(evt){
			evt.preventDefault();
			
			var network = document.getElementById('estimateInputNetwork').value,
				 operators= document.getElementById('estimateCheckboxOperators').checked ? 'Pas d\'opérateurs' : document.getElementById('estimateInputOperators').value,
				 firstname = document.getElementById('estimateInputFirstname').value,
				 lastname = document.getElementById('estimateInputLastname').value,
				 email = document.getElementById('estimateInputEmail').value,
				 phone = document.getElementById('estimateInputPhone').value,
				 message = document.getElementById('estimateInputNetwork').value;
			sendDatasToSheet(network, operators, firstname, lastname, email, phone, message);
		});
})();

document.getElementById('estimateCheckboxOperators').onchange = function() {
	document.getElementById('estimateInputOperators').disabled = this.checked;
};