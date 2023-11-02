import { getInputs } from "../../utils/featuresList";
import AccessibleMenuListItem from "./AccessibleMenuListItem";

import './AccessibleMenuList.css'

const itens = getInputs();

const AccessibleMenuList = () => {
  return (
    <ul className="toolsList">
      {itens.map(({ groupName, content }) => {
        return (
          <AccessibleMenuListItem groupName={groupName} content={content} />
        );
      })}
    </ul>
  );
};

export default AccessibleMenuList;
