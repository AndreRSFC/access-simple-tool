import AccessibleMenuList from "../AccessibleMenuList";
import { Button } from "../Button";
import FeedbackLine from "../FeedbackLine";
import Close from "../Icons/Close";
import "./AccessibleMenu.css";

const AccessibleMenu = () => {
  return (
    <section className="accessibleMenu">
      <header className="accessibleMenu-titleContainer">
        <h1 className="accessibleMenu-title">Menu acessivel</h1>
        <button
          className="accessibleMenu-closeButton"
          id="accessibleMenu-closeButton"
        >
          <Close />
        </button>
      </header>
      <AccessibleMenuList />
      <FeedbackLine />
      <Button>Limpar configuração</Button>
    </section>
  );
};

export default AccessibleMenu;
