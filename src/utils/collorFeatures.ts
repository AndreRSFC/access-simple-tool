const collorAdjustContrast = (enabled: boolean) => {
  const bodyElement = document.body;

  const percentual = enabled ? 50 : 0;

  const contrastValue = 1 + percentual / 100;

  bodyElement.style.filter = `contrast(${contrastValue})`;
};

const collorInvert = (enabled: boolean) => {
  const bodyElement = document.body;
  if (enabled) {
    bodyElement.style.filter = "invert(1)";
  } else {
    bodyElement.style.filter = bodyElement.style.filter.replace(
      "invert(1)",
      ""
    );
  }
};

export { collorAdjustContrast, collorInvert };
