import { useEffect } from "react";
import "./SwitchToggle.css";
import {
  useFeatures,
  useFeaturesDispatch,
} from "../../context/FeaturesContext";
import { useTranslation } from "react-i18next";

interface SwitchToggleProps {
  handleToggle: (checked: boolean) => void;
  featureKey: string;
}

const SwitchToggle = ({ handleToggle, featureKey }: SwitchToggleProps) => {
  const dispatch = useFeaturesDispatch();
  const features = useFeatures();

  const { t } = useTranslation();

  useEffect(() => {
    if (features) {
      handleToggle(!!features[featureKey]);
    }
  }, [features, handleToggle, featureKey]);

  return (
    <label className="react-switch">
      <input
        onChange={() => {
          if (features && dispatch) {
            dispatch({
              type: featureKey,
              value: !features[featureKey],
            });
          }
        }}
        className="react-switch-checkbox"
        type="checkbox"
        checked={!!features?.[featureKey]}
      />
      <div className="react-switch-button" />
      <div className="react-switch-labels">
        <span>{t("GENERAL.NO")}</span>
        <span>{t("GENERAL.YES")}</span>
      </div>
    </label>
  );
};

export default SwitchToggle;
