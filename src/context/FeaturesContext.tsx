
import React from "react";
import type { Dispatch} from "react";
import { createContext, useContext, useReducer } from "react";
import type { DispatchType, FeatureTypes} from "./models";
import { initialFeatures } from "./models";

const FeaturesContext = createContext(initialFeatures);
const FeaturesDispatchContext = createContext(({}) as Dispatch<{
  type: string;
  value: number | boolean;
}>);

const FeaturesProvider = ({ children }: { children: React.ReactNode }) => {
  const [Features, dispatch] = useReducer(FeaturesReducer, initialFeatures);

  return (
    <FeaturesContext.Provider value={Features}>
      <FeaturesDispatchContext.Provider value={dispatch}>
        {children}
      </FeaturesDispatchContext.Provider>
    </FeaturesContext.Provider>
  );
};

const useFeatures = () => {
  return useContext(FeaturesContext);
};

const useFeaturesDispatch = () => {
  return useContext(FeaturesDispatchContext);
};

const FeaturesReducer = (Features: FeatureTypes, action: DispatchType) => {
  switch (action.type) {
    case "reset": {
      return {
        "font-size": 0,
        "font-spacing": 0,
        "font-line-height": 0,
        "color-contrast": false,
        "color-invert": false,
        zoom: 0,
        "elements-increase": 0,
        "disable-animation": false,
      };
    }
    case "font-size": {
      Features["font-size"] = action.value as number;
      return { ...Features };
    }
    case "font-spacing": {
      Features["font-spacing"] = action.value as number;
      return { ...Features };
    }
    case "font-line-height": {
      Features["font-line-height"] = action.value as number;
      return { ...Features };
    }
    case "color-contrast": {
      Features["color-contrast"] = action.value as boolean;
      return { ...Features };
    }
    case "color-invert": {
      Features["color-invert"] = action.value as boolean;
      return { ...Features };
    }
    case "disable-animation": {
      Features["disable-animation"] = action.value as boolean;
      return { ...Features };
    }
    case "zoom": {
      Features.zoom = action.value as number;
      return { ...Features };
    }
    case "elements-increase": {
      Features["elements-increase"] = action.value as number;
      return { ...Features };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export { useFeatures, useFeaturesDispatch, FeaturesProvider };
