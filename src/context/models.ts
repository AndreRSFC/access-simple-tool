export interface FeatureTypes {
  "font-size": number;
  "font-spacing": number;
  "font-line-height": number;
  "color-contrast": boolean;
  "color-invert": boolean;
  zoom: number;
  "elements-increase": number;
  "disable-animation": boolean;
}

export const initialFeatures: FeatureTypes = {
  "font-size": 0,
  "font-spacing": 0,
  "font-line-height": 0,
  "color-contrast": false,
  "color-invert": false,
  zoom: 0,
  "elements-increase": 0,
  "disable-animation": false,
};

export type DispatchType = {
  type: string;
  value: number | boolean;
};
