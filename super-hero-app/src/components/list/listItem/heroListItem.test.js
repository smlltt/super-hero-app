import React from "react";
import renderer from "react-test-renderer";
import HeroListItem from "./index";

it("changes arrow to cursor on hover", () => {
  const tree = renderer
    .create(
      <HeroListItem hero={{ name: "Batman", image: { url: "example.jpg" } }} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
