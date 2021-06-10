import React from "react";
import renderer from "react-test-renderer";
import Search from "./index";

it("shows error when there is an error", () => {
  const tree = renderer.create(<Search error={"error"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("does not show error when there is no error", () => {
  const tree = renderer.create(<Search error={""} />).toJSON();
  expect(tree).toMatchSnapshot();
});
