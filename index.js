const toggleVisibility = (className, style) => {
  const element = document.querySelector(className);

  element.classList.value.includes(style)
    ? element.classList.remove(style)
    : element.classList.add(style);
};

const phoneNumberOnBlur = () =>
  setTimeout(() => {
    toggleVisibility(".phone_number", "hidden");
  }, 100);

const temporary_underConstruction = (event) => {
  const mainContainer = document.querySelector(".main");
  const underConstruction = document.querySelector(
    ".under-construction-message"
  );
  const returnLink = document.querySelector(".return_to_main_button");

  document.body.classList.add("display-flex");
  mainContainer.classList.add("display-none");
  underConstruction.classList.remove("display-none");
  underConstruction.classList.add("display-flex");

  event.target.classList.value.includes("learn_more")
    ? returnLink.setAttribute("href", "#services")
    : returnLink.setAttribute("href", "#home");
};

const returnToMain = (event) => {
  const mainContainer = document.querySelector(".main");
  const underConstruction = document.querySelector(
    ".under-construction-message"
  );

  document.body.classList.remove("display-flex");
  mainContainer.classList.remove("display-none");
  underConstruction.classList.add("display-none");
  underConstruction.classList.remove("display-flex");
};
