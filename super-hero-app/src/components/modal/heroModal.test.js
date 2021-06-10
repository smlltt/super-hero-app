import React from "react";
import renderer from "react-test-renderer";
import HeroModal from "./index";

it("is open when a hero is selected", () => {
  const tree = renderer
    .create(
      <HeroModal
        selectedHero={({ id: 1 }, { biography: { aliases: "none" } })}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("is closed when no hero is selected", () => {
  const tree = renderer.create(<HeroModal selectedHero={{}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
