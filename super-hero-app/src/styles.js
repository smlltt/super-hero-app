import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const ContentWrapper = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderWrapper = styled.div`
   {
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleTypography = styled(Typography)({
  padding: "2rem",
});
