var save = document.querySelectorAll(".save-button");
var i;

for (i = 0; i < save.length; i++) { 
    save[i].addEventListener('click', addClass);
  }
    
function addClass() {
	    this.classList.toggle("saved");
     };

//mediaqueries&classlists gebruiken

addToListButton