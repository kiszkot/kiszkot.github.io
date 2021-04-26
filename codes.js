var files = ["Dane.cpp","srednia.cpp","pracownicy.cpp"];
var links = "Codes/"
var tmp = links + files[0];
const fr = new FileReader();
//document.getElementById("code").innerHTML = "banana";


function readFile() {
	let fil = await fetch(tmp);
	//let result = await fil.text();
	
	//links = links + files[0];
	var texts = fr.readAsText(fil);
	var content = document.getElementById("code").innerHTML;
	document.getElementById("code").innerHTML = fil.text();
}