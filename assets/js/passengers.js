var SURVEY_FORM; //DOM element

/**
 * Function to check if Datas sent are valid
 */
function areDatasValid(email) {
	var rgpd_checkbox = document.querySelector('#surveyCheckboxRGPD');
	if(SURVEY_FORM.classList.contains("rgpd-error")) {
		SURVEY_FORM.classList.remove("rgpd-error");
	} else if(SURVEY_FORM.classList.contains("email-error")) {
		SURVEY_FORM.classList.remove("email-error");
	}
	if(!rgpd_checkbox.checked) {
		SURVEY_FORM.classList.add("rgpd-error");
	}

	if(!isEmailValid(email)){
		SURVEY_FORM.classList.add("email-error");
	}
	if(SURVEY_FORM.classList.length == 1) return true;
}

/**
 * Main function to send an email to contact sheet
 */
function sendDatasToSheet(email, lines, network, city) {
	if(areDatasValid(email)) {
		var args = "form=passengers_survey&email="+encodeURIComponent(email)+"&lines="+encodeURIComponent(lines)+"&network="+encodeURIComponent(network)+"&city="+encodeURIComponent(city);
		get("https://script.google.com/macros/s/AKfycbzOOFyPsyXzqytgQK8aWzEI1srgCOhKPTCwFwQ5xys8GXEAJiM/exec?"+args).then(function(){
			SURVEY_FORM.classList.add("survey-sent");
		})
		.catch(function(error){
			console.log('error', error.message);
		});
	}
}

/**
 * Function to init the survey results datas
 */
function initSurveyResults() {
	var accsWantedRoutes = [],
		 citiesWithSurvey = [];
	
	for(var i = 0; i < API.accounts.length; i++ ) {
		if(API.accounts[i].hasOwnProperty("wantedRoutes") && API.accounts[i].wantedRoutes.length != 0) {
			accsWantedRoutes.push(API.accounts[i]);
		}
	}
	var sameCity;
	for(var i = 0; i < API.cities.length; i++ ) {
		sameCity = [];
		for(var j = 0; j < API.cities[i].namespaces.length; j++){
			for(var k = 0; k < accsWantedRoutes.length; k++) {
				if(API.cities[i].namespaces[j] == accsWantedRoutes[k].namespace){
					if(sameCity.length == 0) {
						citiesWithSurvey.push(API.cities[i]);
					}
					sameCity.push(accsWantedRoutes[k]);
				}
			}
		}
		if(sameCity.length != 0){
			citiesWithSurvey[citiesWithSurvey.length-1].accounts = sameCity;
		}
		
	}
	
	for(var i = 0; i < citiesWithSurvey.length; i++){
		citiesWithSurvey[i].surveyCount = 0;
		for(var j = 0; j < citiesWithSurvey[i].accounts.length; j++){
			citiesWithSurvey[i].accounts[j].surveyCount = 0;
			for(var k = 0; k < citiesWithSurvey[i].accounts[j].wantedRoutes.length; k++){
				citiesWithSurvey[i].accounts[j].surveyCount += citiesWithSurvey[i].accounts[j].wantedRoutes[k].surveyCount;
			}
			citiesWithSurvey[i].surveyCount += citiesWithSurvey[i].accounts[j].surveyCount;
		}
	}
	console.log(citiesWithSurvey);
}

(function(){
	SURVEY_FORM = document.getElementById('surveyForm');
	SURVEY_FORM.addEventListener("submit", function(evt){
		evt.preventDefault();
		var email = document.getElementById('surveyInputEmail').value,
			 lines = document.getElementById('surveyCheckboxLines').checked ? 'Toutes les lignes' : document.getElementById('surveyInputLines').value,
			 network = document.getElementById('surveyCheckboxNetwork').checked ? 'Je ne connais pas le nom de mon réseau' : document.getElementById('surveyInputNetwork').value,
			 city = document.getElementById('surveyInputCity').value;
			
		sendDatasToSheet(email, lines, network, city);
	});
	
	initSurveyResults();
})();

document.getElementById('surveyCheckboxLines').onchange = function() {
	document.getElementById('surveyInputLines').disabled = this.checked;
};
document.getElementById('surveyCheckboxNetwork').onchange = function() {
	document.getElementById('surveyInputNetwork').disabled = this.checked;
};