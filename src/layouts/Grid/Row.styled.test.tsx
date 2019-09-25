import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ThemeProviderForTest, { theme } from "../theme/ThemeProviderForTest";
import Row from "./Row.styled";

describe("Test suits for <Row />", () => {
  it("should have correct direction", () => {
    const MyComponent = () => (
      <ThemeProviderForTest>
        <Row />
      </ThemeProviderForTest>
    );
    const tree = renderer.create(<MyComponent />).toJSON();
    expect(tree).toHaveStyleRule("flex-direction", "row");
  });

  it("should have correct flex-direction property", () => {
    const MyComponent = () => (
      <ThemeProviderForTest>
        <Row verticalAlign="center" />
      </ThemeProviderForTest>
    );
    const tree = renderer.create(<MyComponent />).toJSON();
    expect(tree).toHaveStyleRule("align-items", "center");
  });
});
