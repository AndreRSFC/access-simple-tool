import React from "react";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import * as Styled from './language-settings.style'

const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
};

export const LanguageSettings: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Styled.LanguageSettingsContainer>
            <Styled.LanguageSettingsTitle>{t("GENERAL.LANGUAGE")}</Styled.LanguageSettingsTitle>
            <select
                onChange={(e) => changeLanguage(e.target.value)}
                defaultValue={i18n.language}
            >
                <option value="en">English</option>
                <option value="pt">Português</option>
                <option value="es">Español</option>
            </select>
        </Styled.LanguageSettingsContainer>
    );
};
