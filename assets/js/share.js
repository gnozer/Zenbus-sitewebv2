function sendDatasToSheet(social, article) {
		var args = "form=track_share&social="+encodeURIComponent(social)+"&article="+encodeURIComponent(article);
		get("https://script.google.com/macros/s/AKfycbzOOFyPsyXzqytgQK8aWzEI1srgCOhKPTCwFwQ5xys8GXEAJiM/exec?"+args).then(function(){
			console.log("OK");
		})
		.catch(function(error){
			console.log('error', error.message);
		});
}

