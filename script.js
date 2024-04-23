const modelController = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const buttonElem = document.querySelector(btnOpen);
  const modelElem = document.querySelector(modal);

  modelElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    z-index: 3;
    transition: opacity ${time}ms ease-in-out;
    `;

  const closeModel = (event) => {
    const target = event.target;

    if (
      target === modelElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === "Escape"
    ) {
      modelElem.style.opacity = 0;

      setTimeout(() => {
        modelElem.style.visibility = "hidden";
      }, time);

      window.removeEventListener("keydown", closeModel);
    }
  };

  const openModel = () => {
    modelElem.style.visibility = "visible";
    modelElem.style.opacity = "1";
    window.addEventListener("keydown", closeModel);
  };

  buttonElem.addEventListener("click", openModel);
  modelElem.addEventListener("click", closeModel);
};

modelController({
  modal: ".model",
  btnOpen: ".callback",
  btnClose: ".btn-close",
});
