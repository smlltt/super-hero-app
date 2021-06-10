import styled from "styled-components";
import { List, ListItem } from "@material-ui/core";

export const ListWrapper = styled(List)({
  width: "100%",
  maxWidth: 360,
});

export const ListItemCursor = styled(ListItem)({
  cursor: "pointer",
});

export const SpinnerWrapper = styled.div`
   {
    display: flex;
    justify-content: center;
  }
`;
