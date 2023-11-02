let currentScale = 1;
let currentPercentual = 0;

const setScaleByPercentage = (percentage: number) => {
  currentScale = (100 + percentage + currentPercentual) / 100;
  currentPercentual += percentage;
  document.body.style.transformOrigin = "0 0";
  document.body.style.transform = `scale(${currentScale})`;
};

const increaseAllElementSizes = (percentage: number) => {
  const allElements = document.querySelectorAll("*");

  allElements.forEach((element) => {
    const currentWidth = window
      .getComputedStyle(element, null)
      .getPropertyValue("width");
    const currentHeight = window
      .getComputedStyle(element, null)
      .getPropertyValue("height");

    const newWidth = parseFloat(currentWidth) * (1 + percentage / 100);
    const newHeight = parseFloat(currentHeight) * (1 + percentage / 100);

    element.style.width = `${newWidth}px`;
    element.style.height = `${newHeight}px`;
  });
};

const disableAllAnimations = (enabled: boolean) => {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    if (enabled) {
      element.style.animation = "none";
      element.style.transition = "none";
    } else {
      element.style.animation = "";
      element.style.transition = "";
    }
  });
};

export { setScaleByPercentage, increaseAllElementSizes, disableAllAnimations };
