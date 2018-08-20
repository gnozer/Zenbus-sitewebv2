var CONTACT_FORM; //DOM element

/**
 * Function to check if Datas sent are valid
 */
function areDatasValid(email) {
	var rgpd_checkbox = document.querySelector('#classicCheckboxRGPD');
	
	if(!rgpd_checkbox.checked) {
		CONTACT_FORM.classList.add("rgpd-error");
	}

	if(!isEmailValid(email)){
		CONTACT_FORM.classList.add("email-error");
	}
	if(CONTACT_FORM.classList.length == 1) return true;
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

(function(){
		CONTACT_FORM = document.getElementById('contactForm');
		CONTACT_FORM.addEventListener("submit", function(evt){
			evt.preventDefault();
			var firstname = document.getElementById('classicInputFirstname').value,
				 lastname = document.getElementById('classicInputLastname').value,
				 iam = document.getElementById('classicSelectIAm').value,
				 email = document.getElementById('classicInputEmail').value,
				 message = document.getElementById('classicTextareaMessage').value;
			sendDatasToSheet(firstname, lastname, iam, email, message);
		});
})();