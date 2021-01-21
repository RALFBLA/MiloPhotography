function onClickMenu(){ //when click on burger menu, toggle the menu on and animations
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("bnav").classList.toggle("change");

	document.getElementById("menu-bg").classList.toggle("change-bg");
}

function closeMenu(){ //when click on burger menu, toggle the menu off and animations - doesnt account for toggling off when scrolling, fix in burger.js
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("bnav").classList.toggle("change");

	document.getElementById("menu-bg").classList.toggle("change-bg");
}
