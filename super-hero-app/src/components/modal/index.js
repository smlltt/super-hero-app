import React from "react";
import { CenteredModal, ModalPaper } from "./styles";
import HeroCard from "./heroCard";

const HeroModal = ({ selectedHero, closeSelectedHero }) => {
  const open = !!selectedHero.id;

  return (
    <CenteredModal open={open} onClose={() => closeSelectedHero()}>
      <ModalPaper>
        {!!selectedHero.id && (
          <HeroCard
            selectedHero={selectedHero}
            closeSelectedHero={closeSelectedHero}
          />
        )}
      </ModalPaper>
    </CenteredModal>
  );
};

export default HeroModal;
