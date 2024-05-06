export type FeatureTypes = Record<string, number | boolean>;

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

export interface DispatchType {
  type: string;
  value: number | boolean;
}
