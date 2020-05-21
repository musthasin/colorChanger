var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#body");
var btn = document.querySelector(".randomColorBtn");

color1.value = "#FF0900";
color2.value = "#FFFE00";

css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setColor(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}

color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);

function randomColor(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(i=0; i<6; i++){
		color += letters[Math.ceil(Math.random()*16)];
	}
	return color;
}

function setRandomColor(){
	color1.value = randomColor();
	color2.value = randomColor();
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}

btn.addEventListener("click", setRandomColor);
