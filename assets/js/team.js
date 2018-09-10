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
		members[i].onclick = function(){
				if(this.classList.contains(KLASS.a)){
					this.classList.remove(KLASS.a);
					this.classList.add(KLASS.b);
				}else{
					this.classList.remove(KLASS.b);
					this.classList.add(KLASS.a);
				}
			}
	}
	
	for(var i = 0 ; i < linkedinMembers.length ; i ++){
		linkedinMembers[i].onclick = function(e){
			e.stopPropagation();
		}
	}
})();