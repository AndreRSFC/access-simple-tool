import { useGetInputs } from "../../utils/featuresList";
import AccessibleMenuListItem from "./AccessibleMenuListItem";

import "./AccessibleMenuList.css";

const AccessibleMenuList = () => {
  const itens = useGetInputs();

  return (
    <ul className="toolsList">
      {itens.map(({ groupName, content }) => {
        return (
          <AccessibleMenuListItem
            groupName={groupName}
            content={content}
            key={groupName}
          />
        );
      })}
    </ul>
  );
};

export default AccessibleMenuList;
