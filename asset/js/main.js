//inicio menu hamburguesa

const menu = document.querySelector("ul.nav--menu")
const icon = document.getElementById("menu-icon")

icon.addEventListener("click", toggLeMenu)
function toggLeMenu(){
    menu.classList.toggle("visible")
}

// icon.addEventListener("click", () => menu.classList.toggle("visible") ) / Funcion Flecha

// Fin menu hamburguesa