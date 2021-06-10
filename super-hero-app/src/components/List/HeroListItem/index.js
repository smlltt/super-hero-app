import React from "react";
import { Avatar, ListItemAvatar, ListItemText } from "@material-ui/core";
import { ListItemCursor } from "../styles";

const HeroListItem = ({ hero, selectHero }) => {
  return (
    <ListItemCursor onClick={() => selectHero(hero)}>
      <ListItemText>{hero.name}</ListItemText>
      <ListItemAvatar>
        <Avatar alt={hero.name} src={hero.image.url} />
      </ListItemAvatar>
    </ListItemCursor>
  );
};

export default HeroListItem;
