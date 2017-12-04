var header = document.querySelector(".header header");
var main = document.querySelector("main");

function scrolled(){
	var windowHeight = document.body.clientHeight,
		currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
	
	header.className = (currentScroll >= windowHeight) ? "fixed" : "";
    main.className = (currentScroll >= windowHeight) ? "fixed" : "";
}

addEventListener("scroll", scrolled, false);