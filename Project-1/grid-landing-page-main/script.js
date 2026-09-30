let button = document.getElementById("hamburger")
let menu = document.getElementById("menu")

let isOn = false

button.addEventListener("click", ()=>{
  isOn=!isOn
  if (isOn) {
    menu.style.display = "block"
    button.src = "./assets/images/icon-close.svg"
    console.log("This works")
  }else{
    menu.style.display = "none"
    button.src = "./assets/images/icon-menu.svg"
  }
  
})