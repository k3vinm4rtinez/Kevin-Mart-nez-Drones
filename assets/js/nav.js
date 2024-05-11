const navSobremi = document.querySelector("#nav_sobremi");
const navDrones = document.querySelector("#nav_drones");
const navPortafolio = document.querySelector("#nav_portafolio");

const divSobremi = document.querySelector(".container_sobremi").getBoundingClientRect().top;
const divDrones = document.querySelector(".container_drones").getBoundingClientRect().top;
const divPortafolio = document.querySelector(".container_portfolio").getBoundingClientRect().top;

navSobremi.addEventListener('click', () => window.scrollTo({
    top: divSobremi,
    behavior: "smooth"

}));

navDrones.addEventListener('click', () => window.scrollTo({
    top: divDrones,
    behavior: "smooth"
}));

navPortafolio.addEventListener('click', () => window.scrollTo({
    top: divPortafolio,
    behavior: "smooth"
}));