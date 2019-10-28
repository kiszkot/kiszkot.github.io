var links = ["https://www.youtube.com/embed/dQJEzkLGuOk","https://www.youtube.com/embed/qrFHx5CucsU","https://www.youtube.com/embed/HPXzJ_K0d6g","https://www.youtube.com/embed/5_7S27Q5040"];
var n = 0;

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