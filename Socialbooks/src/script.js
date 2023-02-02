
// ---------------- dropdown menu---------------

var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");}
// } აქ წერტილით შეიძლება იმიტომ არაა ეს კლასნეიმი, რომ მხოლოდ css_ში გვაქვს?

// ------------toggle ---------------
darkBtn.onclick= function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme")== "light"){
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

// როცა საიტს დაარეფრეშებ, დარჩენს დარქმოუდი

if (localStorage.getItem("theme")== "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme")== "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme")
}
else {
    localStorage.setItem("theme", "light");
}
