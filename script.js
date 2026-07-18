const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const fadeElements =
document.querySelectorAll(".fade-in");

window.addEventListener("scroll", reveal);

function reveal(){

fadeElements.forEach(function(element){

const position =
element.getBoundingClientRect().top;

const windowHeight =
window.innerHeight;

if(position<windowHeight-100){

element.classList.add("show");

}

});

}

reveal();

const toggle =
document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

const savedTheme =
localStorage.getItem("theme");

if(savedTheme==="dark"){

document.body.classList.add("dark-mode");

}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

});

window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});