var i = 0;

for (i = 1; i < 4; i++) { 
    document.getElementById("addToListButton" + i).onclick = function() {iconFunction(this.id)};
}

function iconFunction(buttonId) {
    console.log(buttonId);
    var j = 0;
    for (i = 1; i < 4; i++) {
        if (buttonId == ("addToListButton" + i)) {
            if (document.getElementById("icon" + i).className == "fa fa-plus") {
            document.getElementById("icon" + i).className = "fa fa-floppy-o bounce";
            } else {
                document.getElementById("icon" + i).className = "fa fa-plus";
            }
        }
    }
}

//mediaqueries&classlists gebruiken