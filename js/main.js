let menuinfo = document.querySelector(".menu-informatique");
var submenu = document.querySelector(".sub-menu-informatique");
submenu.style.display = "none";

document.querySelector(".menu-informatique").addEventListener("mouseenter", handlemouseover);
function handlemouseover(event) {
  submenu.style.display = "flex";
}

window.addEventListener("mousemove", handlehidemenu);
function handlehidemenu(event) {
  let target = event.target;
  if (target === menuinfo) {
    return;
  }
  if (target === submenu) {
    return;
  }
  if (target.parentNode) {
    if (target.parentNode === submenu) {
      return;
    }
    if (target.parentNode.parentNode) {
      if (target.parentNode.parentNode === submenu) {
        return;
      }
    }
  }
  // console.log(event.target);
  submenu.style.display = "none";
}
/*
//on récupère l'élément mainMenu du DOM
const mainMenu = document.querySelector('.main-menu');
//on récvupère l'élément parent du mainMenu
const parent = mainMenu.parentNode;

// création d'une image
const link = document.createElement('a');
link.href = "/index.html";
link.innerHTML = '<img src="/img/logo3.jpg" height="100"/>'

//inject cette image dans le DOM, juste avant le mainMenu
parent.insertBefore(link, mainMenu);*/

var burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  let menu = document.querySelector(".main-menu .menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    submenu.style.display = "none";
  } else {
    menu.style.display = "block";
    submenu.style.display = "block";
  }
  
});
