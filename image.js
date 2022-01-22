var links = ["https://www.youtube.com/embed/HPXzJ_K0d6g","https://www.youtube.com/embed/znOWjJniHpQ"];
var n = 0;
var width = screen.width;
let navOpen = 0;

function next(){
	var change = document.getElementById("link");
	
	n++;
	if(n >= links.length){
		n = 0;
	}
	change.src = links[n];
}

function prev(){
	var change = document.getElementById("link");
	
	n--;
	if(n < 0){
		n = links.length - 1;
	}
	change.src = links[n];
}

function getWidth() {
	var x = String(document.getElementById("width").innerHTML);
	document.getElementById("width").innerHTML = x + String(width) + 'px';
}

function openNav() {
	if(navOpen == 0) {
		openSide();
	}
	else {
		closeSide();
	}
}

	

	function openSide() {
		document.getElementById("left").style.display = "flex";
		document.getElementById("left").style.width = "10vw";
		document.getElementById("left").style.height = "auto";
		navOpen = 1;
	}

	function closeSide() {
		document.getElementById("left").style.display = "none";
		document.getElementById("left").style.width = "0";
		document.getElementById("left").style.height = "0";
		navOpen = 0;
	}
