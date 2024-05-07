const menu = document.querySelector(".menu");
const open = document.querySelector(".container_open");
const close = document.querySelector(".container_close");

open.addEventListener("click", function(){

    menu.style.animation = null;
    menu.style.animation = "toleft 0.5s linear";
    menu.style.visibility = "visible";
    open.style.display = "none";
    close.style.display = "flex";
    close.style.animation = "rotateLeft 0.5s linear";

})

close.addEventListener("click", function(){

    menu.style.animation = null;
    menu.style.animation = "toright 0.5s linear"; 
    setTimeout(() => {
        menu.style.visibility = "hidden";
    }, 400);
    open.style.display = "flex";
    close.style.display = "none";
    open.style.animation = "rotateRight 0.5s linear";

})

// DRONES CARDS


