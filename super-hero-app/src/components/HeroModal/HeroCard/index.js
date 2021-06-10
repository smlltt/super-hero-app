import React from "react";
import {
  Card,
  CardHeader,
  Divider,
  List,
  ListItemText,
} from "@material-ui/core";
import {
  CardContentWrapper,
  CardTextWrapper,
  HeaderWrapper,
  HeroCardMedia,
  StatBioTypography,
} from "../styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const HeroCard = ({ selectedHero, closeSelectedHero }) => {
  const stats = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ];

  const bioFacts = [
    "full-name",
    "alter-egos",
    "aliases",
    "place-of-birth",
    "first-appearance",
    "publisher",
    "alignment",
  ];

  const bioFactsList = bioFacts.map((bioFact, index) => {
    let capitalizedBioFact = bioFact[0].toUpperCase() + bioFact.slice(1);
    capitalizedBioFact = capitalizedBioFact.replace(/-/g, " ");
    return (
      <ListItemText key={index}>
        <StatBioTypography variant={"p"}>
          {capitalizedBioFact}:{" "}
        </StatBioTypography>
        {selectedHero.biography[bioFact]}
      </ListItemText>
    );
  });

  const statsList = stats.map((stat, index) => {
    const capitalizedStat = stat[0].toUpperCase() + stat.slice(1);
    return (
      <ListItemText key={index}>
        <StatBioTypography variant={"p"}>{capitalizedStat}: </StatBioTypography>
        {selectedHero.powerstats[stat]}
      </ListItemText>
    );
  });

  return (
    <Card>
      <HeaderWrapper>
        <CardHeader title={selectedHero.name} />
        <IconButton onClick={closeSelectedHero}>
          <CloseIcon />
        </IconButton>
      </HeaderWrapper>
      <CardContentWrapper>
        <HeroCardMedia
          image={selectedHero.image.url}
          title={selectedHero.name}
        />
        <CardTextWrapper>
          <List>{bioFactsList}</List>
          <Divider />
          <List>{statsList}</List>
        </CardTextWrapper>
      </CardContentWrapper>
    </Card>
  );
};

export default HeroCard;
