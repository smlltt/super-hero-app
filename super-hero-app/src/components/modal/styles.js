import styled from "styled-components";
import { CardMedia, Modal, Paper, Typography } from "@material-ui/core";

export const CenteredModal = styled(Modal)({
  "@media (min-width: 600px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "@media (max-width: 600px)": {
    position: "absolute",
    top: "10%",
    left: "10%",
    overflow: "scroll",
    height: "100%",
    maxHeight: 600,
    display: "block",
  },
});

export const CardContentWrapper = styled.div`
@media (min-width: 600px) {
  display: flex;
  align-items: center;
};
@media (max-width: 600px) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
},
`;

export const HeroCardMedia = styled(CardMedia)({
  width: "20rem",
  height: "20rem",
  "@media (max-width: 600px)": {
    maxHeight: "15rem",
    maxWidth: "15rem",
  },
});

export const CardTextWrapper = styled.div`
  width: 20rem;
  height: 20rem;
  overflow-y: scroll;
  padding-left: 2rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StatBioTypography = styled(Typography)({
  fontWeight: "bold",
});

export const ModalPaper = styled(Paper)({
  outline: "none",
});
