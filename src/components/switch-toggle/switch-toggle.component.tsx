import { useEffect } from "react";
import {
  useFeatures,
  useFeaturesDispatch,
} from "../../context/FeaturesContext";
import { useTranslation } from "react-i18next";

import * as Styled from './switch-toggle.style'

interface SwitchToggleProps {
  handleToggle: (checked: boolean) => void;
  featureKey: string;
}

export const SwitchToggle = ({ handleToggle, featureKey }: SwitchToggleProps) => {
  const dispatch = useFeaturesDispatch();
  const features = useFeatures();

  const { t } = useTranslation();

  useEffect(() => {
    if (features) {
      handleToggle(!!features[featureKey]);
    }
  }, [features, handleToggle, featureKey]);

  return (
    <Styled.Switch>
      <Styled.SwitchCheckbox
        onChange={() => {
          if (features && dispatch) {
            dispatch({
              type: featureKey,
              value: !features[featureKey],
            });
          }
        }}
        type="checkbox"
        checked={!!features?.[featureKey]}
      />
      <Styled.SwitchButton/>
      <Styled.SwitchLabels>
        <span>{t("GENERAL.NO")}</span>
        <span>{t("GENERAL.YES")}</span>
      </Styled.SwitchLabels>
    </Styled.Switch>
  );
};
