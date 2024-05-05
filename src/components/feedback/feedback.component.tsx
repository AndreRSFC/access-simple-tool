import { useTranslation } from "react-i18next";
import { Feedback } from "../../icons";
import * as Styled from './feedback.style'

export const FeedbackLine = () => {
    const { t } = useTranslation();

    return (
        <Styled.FeedbackComponent>
            <Styled.FeedbackLink href="https://forms.gle/Jm5YmmeepmExDsBh7" target="_blank" >
                {t("GENERAL.FEEDBACK")}
            </Styled.FeedbackLink>
            <Styled.FeedbackIcon>
                <Feedback />
            </Styled.FeedbackIcon>
        </Styled.FeedbackComponent>
    );
};

