import FeedbackIcon from "../Icons/Feedback";

import "./FeedbackLine.css";

const FeedbackLine = () => {
  return (
    <div className="feedbackLine">
      <a href="" className="feedbackLine-text">
        Dê seu feedback aqui!
      </a>
      <FeedbackIcon className="toolsList-item-icon" />
    </div>
  );
};

export default FeedbackLine;
