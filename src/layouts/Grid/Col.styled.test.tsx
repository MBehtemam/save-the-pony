import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ThemeProviderForTest, { theme } from "../theme/ThemeProviderForTest";
import Col from "./Col.styled";

describe("Test suits for <Col />", () => {
  it("should have default flex size", () => {
    const MyComponent = () => (
      <ThemeProviderForTest>
        <Col />
      </ThemeProviderForTest>
    );
    const tree = renderer.create(<MyComponent />).toJSON();
    expect(tree).toHaveStyleRule("flex-basis", "1");
  });

  it("should have custom flex size", () => {
    const MyComponent = () => (
      <ThemeProviderForTest>
        <Col size={5} />
      </ThemeProviderForTest>
    );
    const tree = renderer.create(<MyComponent />).toJSON();
    expect(tree).toHaveStyleRule("flex-basis", "20%");
  });
});
