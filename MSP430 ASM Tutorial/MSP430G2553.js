//this will be something in the future

var secretStep = 0;

document.addEventListener('keydown', function(event)
{
    if((event.keyCode == 38) && (secretStep == 0)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 38);
    }
    if((event.keyCode == 38) && (secretStep == 2)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 38);
    }
	if((event.keyCode == 40) && (secretStep == 4)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 40);
    }
	if((event.keyCode == 40) && (secretStep == 6)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 40);
    }
	if((event.keyCode == 37) && (secretStep == 8)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 37);
    }
	if((event.keyCode == 39) && (secretStep == 10)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 39);
    }
	if((event.keyCode == 37) && (secretStep == 12)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 37);
    }
	if((event.keyCode == 39) && (secretStep == 14)) {
        document.querySelector(".emuText").style.display = "block";
		console.log("It is done.");
		//while(event.keyCode == 39);
	}
});
document.addEventListener('keyup', function(event)
{
    if((event.keyCode == 38) && (secretStep == 1)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 38);
    }
    if((event.keyCode == 38) && (secretStep == 3)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 38);
    }
	if((event.keyCode == 40) && (secretStep == 5)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 40);
    }
	if((event.keyCode == 40) && (secretStep == 7)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 40);
    }
	if((event.keyCode == 37) && (secretStep == 9)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 37);
    }
	if((event.keyCode == 39) && (secretStep == 11)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 39);
    }
	if((event.keyCode == 37) && (secretStep == 13)) {
        secretStep++;
		console.log(secretStep);
		//while(event.keyCode == 37);
    }
	if((event.keyCode == 39) && (secretStep == 15)) {
        document.querySelector(".emuText").style.display = "block";
		console.log("It is done.");
		//while(event.keyCode == 39);
    }
});

var textareas = document.getElementsByTagName('ol');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}