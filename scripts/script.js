// JavaScript Document
//op het moment dat er iemand op het land klikt komen er meerdere landen te zien
/* function change() {
	var land = document.getElementById('land'); //display section van landen
	var knop = document.getElementById('knop'); //button
		if (land.style.display == "block") {
			land.style.display = "none"; 
			knop.style.padding = "0em 1em 0.3em 1em";
		} else {
			land.style.display = "block";
			knop.style.padding = "0em 1em 1.3em 1em";
		}
}; */

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://codepen.io/shooft/pen/wvGyvRQ

let land = document.querySelector(".land"); //display section van landen
let knop = document.querySelector('.knop'); //button
knop.addEventListener("click", change);
function change() {
		if (land.style.display == "block") {
			land.style.display = "none"; 
			knop.style.padding = "0em 1em 0.3em 1em";
		} else {
			land.style.display = "block";
			knop.style.padding = "0em 1em 1.3em 1em";
		}
};