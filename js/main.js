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
  const github = document.querySelector(".GitHub");
  const linkedin = document.querySelector(".linkedin");
  const email = document.querySelector(".email");
  const proyecto = document.querySelector(".proyect");
  const formacion = document.querySelector(".formacion");
  const cuerpo = document.querySelector("#cuerpo");
  const pie = document.querySelector("footer");
  hamburgesa.addEventListener("change", () => {
      if(pageMenu.classList.contains("hidden")){
        pageMenu.classList.remove("hidden");
        pageMenu.classList.add("block");
        cuerpo.classList.add("hidden");
        pie.classList.add("hidden");
      }else{
        pageMenu.classList.remove("block")
          //animacion escalera cerrar
        if(!pageMenu.classList.contains("block")){
          setTimeout(() => {
            formacion.classList.remove("opacity-100");
            formacion.classList.add("opacity-0");
          }, 0);
          setTimeout(() => {
            proyecto.classList.remove("opacity-100");
            proyecto.classList.add("opacity-0");
          },300 )
          setTimeout(() => {
           email.classList.remove("opacity-100");
           email.classList.add("opacity-0");
         }, 600);
       
         setTimeout(() => {
           linkedin.classList.remove("opacity-100");
           linkedin.classList.add("opacity-0");
         }, 900);
       
         setTimeout(() => {
           github.classList.remove("opacity-100");
           github.classList.add("opacity-0");
          
         }, 1200);
        setTimeout(() => {
          pageMenu.classList.add("hidden");
          cuerpo.classList.remove("hidden");
          cuerpo.classList.add("block");
          pie.classList.remove("hidden");
          pie.classList.add("block");
        }, 1210);
       }
      
      }
      //animacion escalera abrir
      if (pageMenu.classList.contains("block")){
        setTimeout(() =>{
           github.classList.remove("opacity-0");
           github.classList.add("opacity-100");
        },0);
        setTimeout(() =>{
            linkedin.classList.remove("opacity-0")
            linkedin.classList.add("opacity-100");
              },300);
        setTimeout(() =>{
              email.classList.remove("opacity-0")
              email.classList.add("opacity-100");
                    },600);
        setTimeout(() => {
          proyecto.classList.remove("opacity-0");
          proyecto.classList.add("opacity-100");
        }, 900);
        setTimeout(() => {
          formacion.classList.remove("opacity-0");
          formacion.classList.add("opacity-100");
        }, 1200);
      } 
  });

});
