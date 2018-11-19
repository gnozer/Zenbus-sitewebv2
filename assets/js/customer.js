var CALL_ME_FORM; //DOM element
var ESTIMATE_FORM;

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="profits-subtypes-content" and hide them
    tabcontent = document.getElementsByClassName("profits-subtypes-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(' visible', '');
    }

    // Get all elements with class="profits-subtypes-tabs-tab" and remove the class "active"
    tablinks = document.getElementsByClassName("profits-subtypes-tabs-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add("visible");
    evt.currentTarget.className += " active";
}

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
	var rgpd_checkbox = document.querySelector('#estimateCheckboxRGPD'),
		 contactError = document.getElementById("contactError"),
		 rgpdError = document.getElementById("rgpdError"),
		 valid = true;
	
	contactError.className = contactError.className.replace(' visible', '');
	rgpdError.className = rgpdError.className.replace(' visible', '');
	
	if(!rgpd_checkbox.checked) {
		rgpdError.classList.add("visible");
		valid = false;
	}

	if(email == '' && phone == ''){
		contactError.classList.add("visible");
		valid = false;
	}
	return valid;
}

/**
 * Main function to send an email to contact sheet
 */
function sendDatasToSheet(network, operators, email, phone, message) {
	if(areDatasValid(email, phone)) {
		var args = "form=Contact_AO&reseau="+encodeURIComponent(network)+"&exploitants="+encodeURIComponent(operators)+"&email="+encodeURIComponent(email)+"&phone="+encodeURIComponent(phone)+"&message="+encodeURIComponent(message);
		get("https://script.google.com/macros/s/AKfycbyAxaPtYwy-Uwp27vEu9uTaiJ1NnevuR4U2CRn5zVNczMnGYTs/exec?"+args).then(function(){
			ESTIMATE_FORM.classList.add("contact-sent");
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
				 email = document.getElementById('estimateInputEmail').value,
				 phone = document.getElementById('estimateInputPhone').value,
				 message = document.getElementById('estimateInputNetwork').value;
			sendDatasToSheet(network, operators, email, phone, message);
		});
})();

document.getElementById('estimateCheckboxOperators').onchange = function() {
	document.getElementById('estimateInputOperators').disabled = this.checked;
};