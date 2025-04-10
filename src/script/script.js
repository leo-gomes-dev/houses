
const menuMobile = document.querySelector("#menu")
const btnClose = document.querySelector("#btn-close")
const openClose = document.querySelector("#btn-open")

function openMenu(){
  menuMobile.classList.remove("hidden")
  menuMobile.classList.add("flex")
}


function closeMenu(){
  menuMobile.classList.remove("flex")
  menuMobile.classList.add("hidden")
}