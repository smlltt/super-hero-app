import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ searchHero, getHeroes, error }) => {
  const checkError = error ? true : false;

  return (
    <div>
      <TextField
        error={checkError}
        helperText={error}
        placeholder={"your hero"}
        onChange={searchHero}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getHeroes();
          }
        }}
      ></TextField>
      <IconButton onClick={getHeroes}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Search;
