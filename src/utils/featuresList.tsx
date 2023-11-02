import Capitalize from "../components/Icons/Capitalize";
import LetterHeight from "../components/Icons/LetterHeight";
import LetterSpacing from "../components/Icons/LetterSpacing";
import { FeatureList, InputType } from "../models/Feature";
import { collorAdjustContrast, collorInvert } from "./collorFeatures";
import {
  textIncreaseFontSizeByPercentage,
  textIncreaseLetterHeightByPercentage,
  textIncreaseLetterSpacingByPercentage,
} from "./textFeatures";

export const getInputs = (): FeatureList => {
  return [
    {
      groupName: "Fonte",
      content: [
        {
          name: "Tamanho",
          key: "font-size",
          inputType: InputType.INCREASE,
          icon: <Capitalize className="toolsList-item-icon" />,
          featureFunction: textIncreaseFontSizeByPercentage,
        },
        {
          name: "Espaçamento",
          key: "font-spacing",
          inputType: InputType.INCREASE,
          icon: <LetterSpacing className="toolsList-item-icon" />,
          featureFunction: textIncreaseLetterSpacingByPercentage,
        },
        {
          name: "Altura da linha",
          key: "font-line-height",
          inputType: InputType.INCREASE,
          icon: <LetterHeight className="toolsList-item-icon" />,
          featureFunction: textIncreaseLetterHeightByPercentage,
        },
      ],
    },
    {
      groupName: "Cores",
      content: [
        {
          name: "Aumentar contraste:",
          key: "collor-contrast",
          inputType: InputType.TOGGLE,
          icon: <LetterHeight className="toolsList-item-icon" />,
          featureFunction: collorAdjustContrast,
        },
        {
          name: "Inverter cores:",
          key: "collor-contrast",
          inputType: InputType.TOGGLE,
          icon: <LetterHeight className="toolsList-item-icon" />,
          featureFunction: collorInvert,
        },
      ],
    },
  ];
};
