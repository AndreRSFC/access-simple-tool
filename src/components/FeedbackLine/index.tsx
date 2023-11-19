import { useTranslation } from "react-i18next";
import FeedbackIcon from "../Icons/Feedback";

import "./FeedbackLine.css";

const FeedbackLine = () => {
  const { t } = useTranslation();
  
  return (
    <div className="feedbackLine">
      <a href="" className="feedbackLine-text">
        {t("GENERAL.FEEDBACK")}
      </a>
      <FeedbackIcon className="toolsList-item-icon" />
    </div>
  );
};

export default FeedbackLine;
