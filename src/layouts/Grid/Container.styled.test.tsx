import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ThemeProviderForTest, { theme } from "../theme/ThemeProviderForTest";
import Container from "./Container.styled";

describe("Test suits for <Container />", () => {
  it("should have background property equal to theme", () => {
    const MyContainer = () => (
      <ThemeProviderForTest>
        <Container useBackground={true} />
      </ThemeProviderForTest>
    );
    const tree = renderer.create(<MyContainer />).toJSON();
    expect(tree).toHaveStyleRule(
      "background-color",
      theme.colors.containerBackground
    );
  });

  it("should have correct flex-direction property", () => {
    const MyContainer = () => (
      <ThemeProviderForTest>
        <Container direction="column" />
      </ThemeProviderForTest>
    );
    const tree = renderer.create(<MyContainer />).toJSON();
    expect(tree).toHaveStyleRule("flex-direction", "column");
  });
});
