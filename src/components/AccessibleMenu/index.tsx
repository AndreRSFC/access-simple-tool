import { useTranslation } from "react-i18next";
import AccessibleMenuList from "../AccessibleMenuList";
import { Button } from "../Button";
import FeedbackLine from "../FeedbackLine";
import Close from "../Icons/Close";
import "./AccessibleMenu.css";
import '../../../i18n'
import LanguageSettings from "../LanguageSettings";

const AccessibleMenu = () => {
  const { t } = useTranslation();

  return (
    <section className="accessibleMenu">
      <header className="accessibleMenu-titleContainer">
        <h1 className="accessibleMenu-title">{t("GENERAL.MENU_TITLE")}</h1>
        <button
          className="accessibleMenu-closeButton"
          id="accessibleMenu-closeButton"
        >
          <Close />
        </button>
      </header>
      <AccessibleMenuList />
      <FeedbackLine />
      <LanguageSettings />
      <Button>{t("GENERAL.CLEAR_CONFIG")}</Button>
    </section>
  );
};

export default AccessibleMenu;
