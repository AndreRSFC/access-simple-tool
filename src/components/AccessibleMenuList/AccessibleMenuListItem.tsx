import { FeatureGroup, InputType } from "../../models/Feature";
import CounterInput from "../CounterInput";
import SwitchToggle from "../SwitchToggle";

const AccessibleMenuListItem = ({ groupName, content }: FeatureGroup) => {
  return (
    <>
      <h3 className="accessibleMenu-subtitle">{groupName}</h3>
      {content.map(({ name, icon, inputType, featureFunction, key }) => {
        return (
          <li className="toolsList-item" key={key}>
            <div className="toolsList-item-textContainer">
              {icon}
              <span className="toolsList-item-text">{name}</span>
            </div>
            {inputType === InputType.INCREASE ? <CounterInput handleClik={featureFunction} /> : <SwitchToggle />}
          </li>
        );
      })}
    </>
  );
};

export default AccessibleMenuListItem;
