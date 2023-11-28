let currentScale = 1;
let currentPercentual = 0;

const setScaleByPercentage = (percentage: number) => {
  currentScale = (100 + percentage + currentPercentual) / 100;
  currentPercentual += percentage;

  document.body.style.transformOrigin = "0 0";
  document.body.style.transform = `scale(${currentScale})`;

  // Select all elements with the class 'accessibleMenu'
  const accessibleMenus = document.querySelectorAll(".accessibleMenu");

  accessibleMenus.forEach((element) => {
    // Apply inverse scale to counteract the body scaling
    const inverseScale = 1 / currentScale;
    (element  as HTMLDivElement).style.transformOrigin = "0 0";
    (element  as HTMLDivElement).style.transform = `scale(${inverseScale})`;
  });
};

const increaseAllElementSizes = (percentage: number) => {
  // Select all elements except those with class 'accessibleMenu' and their children
  const allElements = document.querySelectorAll(
    "*:not(.accessibleMenu, .accessibleMenu *)"
  );

  allElements.forEach((element) => {
    const currentWidth = window
      .getComputedStyle(element, null)
      .getPropertyValue("width");
    const currentHeight = window
      .getComputedStyle(element, null)
      .getPropertyValue("height");

    // Check if the width and height are in pixels before resizing
    if (currentWidth.endsWith("px") && currentHeight.endsWith("px")) {
      const newWidth = parseFloat(currentWidth) * (1 + percentage / 100);
      const newHeight = parseFloat(currentHeight) * (1 + percentage / 100);

      (element  as HTMLDivElement).style.width = `${newWidth}px`;
      (element  as HTMLDivElement).style.height = `${newHeight}px`;
    }
  });
};

const disableAllAnimations = (enabled: boolean) => {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    if (enabled) {
      (element  as HTMLDivElement).style.animation = "none";
      (element  as HTMLDivElement).style.transition = "none";
    } else {
      (element  as HTMLDivElement).style.animation = "";
      (element  as HTMLDivElement).style.transition = "";
    }
  });
};

export { setScaleByPercentage, increaseAllElementSizes, disableAllAnimations };
