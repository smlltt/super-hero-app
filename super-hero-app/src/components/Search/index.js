import React, { useState } from "react";
import { IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ getHeroes, error }) => {
  const [hero, setHero] = useState("");
  const checkError = !!error;

  return (
    <div>
      <TextField
        error={checkError}
        helperText={error}
        placeholder={"your hero"}
        onChange={(e) => setHero(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getHeroes(hero);
          }
        }}
      />
      <IconButton onClick={() => getHeroes(hero)}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Search;
