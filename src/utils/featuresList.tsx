import { useTranslation } from "react-i18next";
import { Capitalize, LetterHeight, LetterSpacing } from "../icons";
import type { FeatureList} from "../models/Feature";
import { InputType } from "../models/Feature";
import { collorAdjustContrast, collorInvert } from "./collorFeatures";
import {
  disableAllAnimations,
  increaseAllElementSizes,
  setScaleByPercentage,
} from "./generalFeatures";
import {
  textIncreaseFontSizeByPercentage,
  textIncreaseLetterHeightByPercentage,
  textIncreaseLetterSpacingByPercentage,
} from "./textFeatures";

export const useGetInputs = (): FeatureList => {
  const { t } = useTranslation();

  return [
    {
      groupName: t('FONT_CONFIG.TITLE'),
      content: [
        {
          name: t('FONT_CONFIG.SIZE'),
          key: "font-size",
          inputType: InputType.INCREASE,
          icon: <Capitalize className="toolsList-item-icon" />,
          featureFunction: textIncreaseFontSizeByPercentage,
        },
        {
          name: t('FONT_CONFIG.SPACING'),
          key: "font-spacing",
          inputType: InputType.INCREASE,
          icon: <LetterSpacing className="toolsList-item-icon" />,
          featureFunction: textIncreaseLetterSpacingByPercentage,
        },
        {
          name: t('FONT_CONFIG.LINE_HEIGHT'),
          key: "font-line-height",
          inputType: InputType.INCREASE,
          icon: <LetterHeight className="toolsList-item-icon" />,
          featureFunction: textIncreaseLetterHeightByPercentage,
        },
      ],
    },
    {
      groupName: t('COLOR_CONFIG.TITLE'),
      content: [
        {
          name: t('COLOR_CONFIG.INCREASE_CONTRAST'),
          key: "color-contrast",
          inputType: InputType.TOGGLE,
          icon: <LetterHeight className="toolsList-item-icon" />,
          featureFunction: collorAdjustContrast,
        },
        {
          name: t('COLOR_CONFIG.INVERT_COLOR'),
          key: "color-invert",
          inputType: InputType.TOGGLE,
          icon: <LetterHeight className="toolsList-item-icon" />,
          featureFunction: collorInvert,
        },
      ],
    },
    {
      groupName: t('OTHER_CONFIG.TITLE'),
      content: [
        {
          name: t('OTHER_CONFIG.ZOOM'),
          key: "zoom",
          inputType: InputType.INCREASE,
          icon: <LetterHeight className="toolsList-item-icon" />,
          featureFunction: setScaleByPercentage,
        },
        {
          name: t('OTHER_CONFIG.INCREASE_ELEMENTS'),
          key: "elements-increase",
          inputType: InputType.INCREASE,
          icon: <LetterHeight className="toolsList-item-icon" />,
          featureFunction: increaseAllElementSizes,
        },
        {
          name: t('OTHER_CONFIG.DISABLE_ANIMATIONS'),
          key: "disable-animation",
          inputType: InputType.TOGGLE,
          icon: <LetterHeight className="toolsList-item-icon" />,
          featureFunction: disableAllAnimations,
        },
      ],
    },
  ];
};
