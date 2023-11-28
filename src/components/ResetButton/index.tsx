import { useTranslation } from "react-i18next";
import { useFeaturesDispatch } from "../../context/FeaturesContext";
import { Button } from "../Button";

const ResetButton = () => {
  const dispatch = useFeaturesDispatch();
  const { t } = useTranslation();

  return (
    <Button
      onClick={() => {
        if (dispatch) dispatch({ type: "reset", value:'' });
      }}
    >
      {t("GENERAL.CLEAR_CONFIG")}
    </Button>
  );
};

export default ResetButton;
