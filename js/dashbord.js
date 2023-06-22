let menu = document.getElementById("menu")
menu.addEventListener("click",showNav)
let welcome = document.getElementById("welcome")
let sideBar= document.getElementById("sideBarContent")
let close = document.getElementById("close")
close.addEventListener("click", closeNav)
let body = document.getElementById("body")
function showNav(){
    sideBar.style.width = "500px"
    menu.style.display = "none"
    welcome.style.display = "none"
    close.style.display = "block"
    body.style.overflow = "auto"
}

function closeNav(){
    
    sideBar.style.width = "0px"
    menu.style.display = "block"
    close.style.display = "none"
    welcome.style.display = "block"
    sideBar.style.transition = "0.1"
}


