// Cierre del Menu Hamburguesa
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector("#navbarSupportedContent"); // Cambia a navbarSupportedContent
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false,
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Cierra el menú al hacer clic en cualquier enlace
      bsCollapse.hide();

      // Obtiene el id del destino desde el href
      const targetId = link.getAttribute("href");

      // Espera a que el menú se cierre y luego hace scroll suave al destino
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 250); // Ajusta el tiempo si es necesario
    });
  });
});

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", () => {
  const menu = document.querySelector(".slider-menu");
  const cards = document.querySelectorAll(".slider-li");
  menu.appendChild(cards[0]);
});

prevBtn.addEventListener("click", () => {
  const menu = document.querySelector(".slider-menu");
  const cards = document.querySelectorAll(".slider-li");
  menu.prepend(cards[cards.length - 1]);
});

// Alternar el modo oscuro y guardar el estado en localStorage
document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    const body = document.body;
    const icon = document.getElementById("mode-icon");
    const button = document.getElementById("darkModeToggle");

    // Alterna la clase 'dark-mode' en el cuerpo de la página
    body.classList.toggle("dark-mode");

    // Cambia el icono dependiendo del estado del modo oscuro
    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      button.classList.remove("btn-light");
      button.classList.add("btn-warning"); // Fondo naranja cuando está activado el modo oscuro
      // Guarda la preferencia en localStorage
      localStorage.setItem("darkMode", "enabled");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      button.classList.remove("btn-warning");
      button.classList.add("btn-light"); // Fondo blanco cuando está desactivado el modo oscuro
      // Guarda la preferencia en localStorage
      localStorage.setItem("darkMode", "disabled");
    }
  });

// Mantener la preferencia al recargar la página
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  document.getElementById("mode-icon").classList.remove("fa-moon");
  document.getElementById("mode-icon").classList.add("fa-sun");
  document.getElementById("darkModeToggle").classList.remove("btn-light");
  document.getElementById("darkModeToggle").classList.add("btn-warning");
}
