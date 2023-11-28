import { CssProprety } from "../models/Feature";

const DOCUMENT_BODY = document.body;
const CLASS_TO_EXCLUDE = "accessibleMenu";

const adjustCSSProperty = (
  element: Element,
  cssProperty: string,
  percentage: number,
  excludeClass: string
) => {
  if (element.classList.contains(excludeClass)) {
    return;
  }

  const currentPropertyValue = window
    .getComputedStyle(element, null)
    .getPropertyValue(cssProperty);
  const currentValueInPixels = parseFloat(currentPropertyValue) || 1;
  const newPropertyValueInPixels =
    currentValueInPixels * (1 + percentage / 100);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (element  as HTMLDivElement).style[cssProperty as any] = `${newPropertyValueInPixels}px`;

  for (let child of element.children) {
    adjustCSSProperty(child, cssProperty, percentage, excludeClass);
  }
};

const textIncreaseFontSizeByPercentage = (percentage: number) => {
  return adjustCSSProperty(
    DOCUMENT_BODY,
    CssProprety.FONT_SIZE,
    percentage,
    CLASS_TO_EXCLUDE
  );
};

const textIncreaseLetterSpacingByPercentage = (percentage: number) => {
  return adjustCSSProperty(
    DOCUMENT_BODY,
    CssProprety.LETTER_SPACING,
    percentage,
    CLASS_TO_EXCLUDE
  );
};

const textIncreaseLetterHeightByPercentage = (percentage: number) => {
  return adjustCSSProperty(
    DOCUMENT_BODY,
    CssProprety.LINE_HEIGHT,
    percentage,
    CLASS_TO_EXCLUDE
  );
};

export {
  textIncreaseFontSizeByPercentage,
  textIncreaseLetterSpacingByPercentage,
  textIncreaseLetterHeightByPercentage,
};
