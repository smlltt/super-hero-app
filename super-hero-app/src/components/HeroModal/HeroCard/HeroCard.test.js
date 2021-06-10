import React from "react";
import renderer from "react-test-renderer";
import HeroCard from "./index";

it("renders with selected hero", () => {
  const tree = renderer
    .create(
      <HeroCard
        selectedHero={{
          id: 1,
          biography: { aliases: "none" },
          powerstats: { intelligence: "none" },
          image: { url: "none" },
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
