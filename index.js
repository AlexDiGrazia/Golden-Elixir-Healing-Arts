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
