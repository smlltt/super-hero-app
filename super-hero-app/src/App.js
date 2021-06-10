import Search from "./components/search";
import React, { useCallback, useState } from "react";
import List from "./components/list";
import { ContentWrapper, HeaderWrapper, TitleTypography } from "./styles";
import HeroModal from "./components/modal";
const axios = require("axios").default;

function App() {
  const [searchedHero, setSearchedHero] = useState("");
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState("");
  const [selectedHero, setSelectedHero] = useState({});
  const [loading, setLoading] = useState(false);

  const searchHero = (e) => {
    setSearchedHero(e.target.value);
  };

  const getHeroes = async () => {
    setLoading(true);
    setHeroes([]);
    setError("");
    try {
      const callRes = await axios.get(
        `https://www.superheroapi.com/api.php/496270201429073/search/${searchedHero}`
      );
      setLoading(false);
      if (callRes.data.response === "success") {
        setHeroes(callRes.data.results);
      } else {
        setError(callRes.data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const selectHero = useCallback((hero) => {
    setSelectedHero(hero);
  }, []);

  const closeSelectedHero = () => {
    setSelectedHero({});
  };

  return (
    <ContentWrapper>
      <HeaderWrapper>
        <TitleTypography variant={"h4"}>
          Look up your favourite super hero:
        </TitleTypography>
        <Search searchHero={searchHero} getHeroes={getHeroes} error={error} />
      </HeaderWrapper>
      <List heroes={heroes} selectHero={selectHero} loading={loading} />
      <HeroModal
        selectedHero={selectedHero}
        closeSelectedHero={closeSelectedHero}
      />
    </ContentWrapper>
  );
}

export default App;
