import { useTranslation } from "react-i18next";
import { AccessibleMenuList } from "./list";
import { FeedbackLine } from "../feedback";
import { Close, Accessibility } from "../../icons";
import "../../../i18n";
import { LanguageSettings } from "../language-settings";
import { useState } from "react";
import { FeaturesProvider } from "../../context/FeaturesContext";
import { ResetButton } from "../reset-button";
import * as Styled from './acessible-menu.style'

export const AccessibleMenu = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const { t } = useTranslation();

    return (
        <FeaturesProvider>
            <Styled.AcessibleMenuContainer>
                {openMenu ? (
                    <>
                        <Styled.AcessibleMenuHeader>
                            <h1 className="title">
                                {t("GENERAL.MENU_TITLE")}
                            </h1>
                            <Styled.AcessibleMenuButtonClose>
                                <Close onClick={() => setOpenMenu(false)} />
                            </Styled.AcessibleMenuButtonClose>
                        </Styled.AcessibleMenuHeader>
                        <AccessibleMenuList />
                        <FeedbackLine />
                        <LanguageSettings />
                        <ResetButton />
                    </>
                ) : (
                    <Styled.AcessibleMenuButtonOpen
                        onClick={() => setOpenMenu(true)}
                    >
                        <Accessibility />
                        {t("GENERAL.OPEN_MENU")}
                    </Styled.AcessibleMenuButtonOpen>
                )}
            </Styled.AcessibleMenuContainer>
        </FeaturesProvider>
    );
};