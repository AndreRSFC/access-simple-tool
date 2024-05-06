import { useTranslation } from "react-i18next";
import { useFeaturesDispatch } from "../../context/FeaturesContext";
import * as Styled from "./reset-button.style";

export const ResetButton = () => {
  const dispatch = useFeaturesDispatch();
  const { t } = useTranslation();

  return (
    <Styled.ResetButtonContainer
      onClick={() => {
        if (dispatch) dispatch({ type: "reset", value: 0 });
      }}
    >
      {t("GENERAL.CLEAR_CONFIG")}
    </Styled.ResetButtonContainer>
  );
};
