let menu = document.getElementById("myMenu");
let ham = document.getElementById("ham");
let close = document.getElementById("close");

ham.addEventListener("click", function() {
	menu.style.opacity = "1";
	close.style.display = "block";
	ham.style.display = "none";
});
close.addEventListener("click", function() {
	menu.style.opacity = "0";
	close.style.display = "none";
	ham.style.display = "block";
});
