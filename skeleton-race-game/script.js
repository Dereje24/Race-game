// document.getElementById('red')
// 	//onKeyPress move position by 10px to the right 
// 	element.onKeypress = function redMove() {

// }

//console.log("APP READY")
var redMoveElem = document.getElementById('red');
var blueMoveElem = document.getElementById('blue');
var limit = document.getElementById('raceBox');
var redPosition = 0;
var bluePosition = 0;


// var redMove = function(r){
// 	console.log("CLICK SOMETHING")
// 	if(r === 82){
// 		console.log("you clicked", r.key);
// 	}
// }
document.addEventListener('keydown', function(event) {
	console.log(event);
    if (event.which === 66 && redPosition <= limit.offsetWidth - redMoveElem.offsetWidth) {
    	redPosition += 100;
        redMoveElem.style.left = redPosition + 'px';
    }else{
    	//red wins
    }
     if (event.which === 65 && bluePosition <= limit.offsetWidth - blueMoveElem.offsetWidth) {
    	bluePosition += 100;
        blueMoveElem.style.left = bluePosition + 'px';
    } else {
    	//blue wins
    }

});