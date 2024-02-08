const toggleNavVisibility = (event) => {
  const nav = document.querySelector(".nav");
  const hamburgerIcon = document.querySelector(".fa-bars");

  window.addEventListener(event, () => {
    if (window.innerWidth <= 640) {
      nav.classList.add("display-none");
      hamburgerIcon.classList.remove("display-none");
    }
    if (window.innerWidth > 640 && nav.classList.contains("display-none")) {
      nav.classList.remove("display-none");
      hamburgerIcon.classList.add("display-none");
    }
  });
};

["DOMContentLoaded", "resize"].forEach((item) => toggleNavVisibility(item));

const toggleMobileMenu = () => {
  const mainContainer = document.querySelector(".main");
  const mobileMenu = document.querySelector(".mobile-menu-wrapper");

  mainContainer.classList.value.includes("display-none")
    ? mainContainer.classList.remove("display-none")
    : mainContainer.classList.add("display-none");

  mobileMenu.classList.value.includes("display-none")
    ? mobileMenu.classList.remove("display-none")
    : mobileMenu.classList.add("display-none");
};
