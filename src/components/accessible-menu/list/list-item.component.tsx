import { FeatureGroup, InputType } from "../../../models/Feature";
import { CounterInput } from "../../counter-input";
import { SwitchToggle } from "../../switch-toggle";
import * as Styled from './list-item.style'

const AccessibleMenuListItem = ({ groupName, content }: FeatureGroup) => {
  return (
    <>
      <Styled.ListItemTitle>{groupName}</Styled.ListItemTitle>
      {content.map(({ name, icon, inputType, featureFunction, key }) => {
        return (
          <Styled.ListItem key={key}>
            <Styled.ListItemTextContainer>
              {icon}
              <Styled.ListItemText>{name}</Styled.ListItemText>
            </Styled.ListItemTextContainer>
            {inputType === InputType.INCREASE ? <CounterInput handleClik={featureFunction} featureKey={key} /> : <SwitchToggle handleToggle={featureFunction} featureKey={key} />}
          </Styled.ListItem>
        );
      })}
    </>
  );
};

export default AccessibleMenuListItem;
