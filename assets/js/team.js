var 
members,
	 KLASS = {
		 a : "clic",
		 b : "clic2",
		 element: "team-members-member",
		 element2: "member-description-link"
	 };

(function(){
	members = document.getElementsByClassName(KLASS.element);
	linkedinMembers = document.getElementsByClassName(KLASS.element2);

	for(var i = 0 ; i < members.length ; i ++){
		members[i].onclick = debounce(function(){
			if(this.classList.contains(KLASS.a)){
				this.classList.remove(KLASS.a);
				this.classList.add(KLASS.b);
			}else{
				this.classList.remove(KLASS.b);
				this.classList.add(KLASS.a);
			}
		}, 250);
	}

	for(var i = 0 ; i < linkedinMembers.length ; i ++){
		linkedinMembers[i].onclick = function(e){
			e.stopPropagation();
		}
	}
})();

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
