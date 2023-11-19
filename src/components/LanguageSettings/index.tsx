import React from "react";

import "./LanguageSettings.css";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

const LanguageSettings: React.FC = () => {
  const { t } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="languageSettings">
      <span className="languageSettings-title">{t("GENERAL.LANGUAGE")}</span>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSettings;
