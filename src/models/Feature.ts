export enum InputType {
  INCREASE,
  TOGGLE,
}

export interface Feature {
  name: string;
  key: string;
  inputType: InputType;
  icon: React.JSX.Element;
  featureFunction: (params: any) => void;
}

export interface FeatureGroup {
  groupName: string;
  content: Feature[];
}

export enum CssProprety {
  FONT_SIZE = "font-size",
  LETTER_SPACING = "letter-spacing",
  LINE_HEIGHT = "line-height",
}

export type FeatureList = FeatureGroup[];
