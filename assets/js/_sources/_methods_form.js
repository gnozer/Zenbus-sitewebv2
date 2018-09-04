/**
 * Utils to test if email address is well formed
 */
function isEmailValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
}
/**
 * [[Description]]
 */
function areDatasValid(sheet) {
	this.errors[sheet] = []; //TODO refactor
	
	if(sheet == 'newsletter') {
		if(!isEmailValid(this.dataFromForms[sheet].email)){
			this.errors[sheet].push('email');
		}
	} else if(sheet == 'contact') {
		if(!this.dataFromForms[sheet].rgpd) {
			this.errors[sheet].push('rgpd');
		}
		
		if(!isEmailValid(this.dataFromForms[sheet].email)){
			this.errors[sheet].push('email');
		}
	}
	if(!this.errors[sheet].length) return true;
}
/**
 * [[Description]]
 */
function sendDatasToSheet(sheet) {
	if(this.areDatasValid(sheet)) {
		var args = "form="+sheet+"&";
		Object.keys(this.dataFromForms[sheet]).forEach(function(key){
			args+=key+"="+encodeURIComponent(this.dataFromForms[sheet][key])+"&";
		}.bind(this));
		args = args.slice(0, -1);
		this.$http.get("https://script.google.com/macros/s/AKfycbzOOFyPsyXzqytgQK8aWzEI1srgCOhKPTCwFwQ5xys8GXEAJiM/exec?"+args)
		.then(response=>{
			if(sheet == 'newsletter') {
				this.newsletterSent = true;
			} else if(sheet == 'contact') {
				this.contactSent = true;
			}
		})
		.catch(error=>{
			console.log('error', error.message);
		})
	}
}
/**
 * [[Description]]
 */
function privateFormBehaviour(){
	if(this.currentPassword){
		this.errors.map = []; //TODO refactor
		this.$http.get("https://zenbus.net/api?feedinfo="+this.currentPassword)
			.then(response=>{
				var respArray = JSON.parse(response.bodyText);
				if(respArray.length > 0){
					window.open("https://zenbus.net/"+respArray[0].namespace, '_blank');
					window.focus();
				}else{
					this.errors.map.push("account");
					console.log("Account doesn't exist");
				}
			})
			.catch(error=>{
				console.log('error', error.message);
			});
	}else{
		this.errors.map.push("account");
	}
}

function mailto(){
	window.location = "mailto:contact@zenbus.fr";
}