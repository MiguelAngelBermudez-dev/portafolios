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
  hamburgesa.addEventListener("change", () => {
      pageMenu.classList.toggle("hidden");
      pageMenu.classList.toggle("block");
  });
 
  
 
 
  
  
 

  





});
