import { useGetInputs } from "../../../utils/featuresList";
import AccessibleMenuListItem from "./list-item.component";
import * as Styled from './list.styles'

export const AccessibleMenuList = () => {
  const itens = useGetInputs();

  return (
    <Styled.AcessibleListContainer>
      {itens.map(({ groupName, content }) => {
        return (
          <AccessibleMenuListItem
            groupName={groupName}
            content={content}
            key={groupName}
          />
        );
      })}
    </Styled.AcessibleListContainer>
  );
};