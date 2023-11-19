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

const AccessibleMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <section className="accessibleMenu">
      {openMenu ? (
        <>
          <header className="accessibleMenu-titleContainer">
            <h1 className="accessibleMenu-title">{t("GENERAL.MENU_TITLE")}</h1>
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
          <Button>{t("GENERAL.CLEAR_CONFIG")}</Button>
        </>
      ) : (
        <Button className="accessibleMenu-open" onClick={() => setOpenMenu(true)}>
          <AccessibilityIcon />
          {t("GENERAL.OPEN_MENU")}
        </Button>
      )}
    </section>
  );
};

export default AccessibleMenu;
