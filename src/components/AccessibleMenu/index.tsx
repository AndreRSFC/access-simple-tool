import { useTranslation } from "react-i18next";
import AccessibleMenuList from "../AccessibleMenuList";
import { Button } from "../Button";
import FeedbackLine from "../FeedbackLine";
import Close from "../Icons/Close";
import "./AccessibleMenu.css";
import "../../../i18n";
import LanguageSettings from "../LanguageSettings";
import AccessibilityIcon from "../Icons/Accessibility";
import { useState } from "react";
import { FeaturesProvider } from "../../context/FeaturesContext";
import ResetButton from "../ResetButton";

const AccessibleMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <FeaturesProvider>
      <section className="accessibleMenu">
        {openMenu ? (
          <>
            <header className="accessibleMenu-titleContainer">
              <h1 className="accessibleMenu-title">
                {t("GENERAL.MENU_TITLE")}
              </h1>
              <button
                className="accessibleMenu-closeButton"
                id="accessibleMenu-closeButton"
              >
                <Close onClick={() => setOpenMenu(false)} />
              </button>
            </header>
            <AccessibleMenuList />
            <FeedbackLine />
            <LanguageSettings />
            <ResetButton />
          </>
        ) : (
          <Button
            className="accessibleMenu-open"
            onClick={() => setOpenMenu(true)}
          >
            <AccessibilityIcon />
            {t("GENERAL.OPEN_MENU")}
          </Button>
        )}
      </section>
    </FeaturesProvider>
  );
};

export default AccessibleMenu;
