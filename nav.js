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
