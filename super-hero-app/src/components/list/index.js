import React from "react";
import { ListWrapper, SpinnerWrapper } from "./styles";
import HeroListItem from "./listItem";
import { CircularProgress, Divider } from "@material-ui/core";

const List = ({ heroes, selectHero, loading }) => {
  const heroesList = heroes.map((hero) => (
    <div key={hero.id}>
      <HeroListItem hero={hero} selectHero={selectHero} />
      <Divider />
    </div>
  ));
  return (
    <>
      {loading ? (
        <SpinnerWrapper>
          <CircularProgress />
        </SpinnerWrapper>
      ) : null}
      <ListWrapper>{heroesList}</ListWrapper>
    </>
  );
};

export default React.memo(List);
