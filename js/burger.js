setTimeout(function(){
    document.body.className="";
},500); //disabling the slide out animation for burger menu on intial page load

menubar = document.getElementById("menu-bar"); //defining variables
menu = document.getElementById("menu");
bnav = document.getElementById("bnav");
bg = document.getElementById("menu-bg");


var myScrollFunc = function () { //when scrolling, activate these actions
    var y = window.scrollY; //defining variables
    var x = section1.offsetHeight;
    if (y >= x) { //if where you're at in the y-axis is past section 1, show the burger menu and enable cursor when hovering over
        menubar.className="show"
        menu.classList.add("cursor")
        bnav.classList.add("cursor")
        bg.classList.add("cursor")
    } else { //if where you're at in the y-axis is not past section 1, hide the burger menu icon AND the menu, as well as stopping the cursor when hovering over
        menubar.className="hide"
        menu.classList.remove("change", "cursor")
        bnav.classList.remove("change", "cursor")
        bg.classList.remove("change-bg", "cursor")
    }
};

window.addEventListener("scroll", myScrollFunc); //looking for when you are scrolling
