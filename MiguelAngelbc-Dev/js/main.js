'use strict';
document.addEventListener("DOMContentLoaded", function () {
  //variables del layout
  const layout = this.querySelector(".layout");
  layout.style.display = "none";
  //index.php
  //variables de index
  let element = this.querySelector("#welcome");

  //efecto typed text
  var typed = new Typed(".auto-type", {
    strings: ["MiguelAngelbc-Dev;"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });

  function fadeOut(element, duration) {
    let opacity = 1;
    let interval = 50;
    let step = interval / duration;

    function decreaseOpacity() {
      opacity -= step;

      if (opacity <= 0) {
        opacity = 0;
        element.style.display = "none";
        clearInterval(fading);
      }

      element.style.opacity = opacity;
    }

    let fading = setInterval(decreaseOpacity, interval);
  }

  fadeOut(element, 5000);
  setTimeout(function () {
    layout.style.display = "block";
  }, 5000);
  //########################################
  //menu
  //variables del menu
  const pageMenu = this.querySelector(".page-menu");
  let proyects = document.querySelectorAll(".proyect");
  let animationImages = document.querySelectorAll(".img-animation");
  const hamburgesa = document.querySelector(".hamburgesa");
  //animacion de linux
  proyects.forEach((proyect, index) => {
    proyect.addEventListener("mouseover", () => {
      animationImages[index].classList.remove("hidden");
      animationImages[index].classList.add("block");
    });

    proyect.addEventListener("mouseout", () => {
      animationImages[index].classList.remove("block");
      animationImages[index].classList.add("hidden");
    });
  });
  //ocultar y mostrar menu
  
  let bool = true;
  hamburgesa.addEventListener("change", () => {
  
    const gitHub = document.querySelector(".GitHub");
    const linkedin = document.querySelector(".linkedin");
    const email = document.querySelector(".email");
    const ocultarCuerpo = document.querySelector("#cuerpo");
    if (bool) {
      ocultarCuerpo.classList.remove("mostrar");
      ocultarCuerpo.classList.add("hidden");
      pageMenu.classList.remove("hidden");
      gitHub.classList.remove("github-ocultar");
      gitHub.classList.add("animacion-GitHub");
      linkedin.classList.remove("linkedin-ocultar");
      linkedin.classList.add("linkedin-animation");
      email.classList.remove("email-ocultar");
      email.classList.add("email-animation");
      bool = false;

    } else {
      ocultarCuerpo.classList.remove("hidden");
      ocultarCuerpo.classList.add("mostrar");
      pageMenu.classList.remove("mostrar");
      email.classList.remove("email-animation");
      email.classList.add("email-ocultar");
      linkedin.classList.remove("linkedin-animation")
      linkedin.classList.add("linkedin-ocultar");
      gitHub.classList.remove("animacion-GitHub")
      gitHub.classList.add("github-ocultar");
    setTimeout(() => {
      pageMenu.classList.add("hidden");
        
      }, 1000);
      bool = true;
     
    }



  });















});
