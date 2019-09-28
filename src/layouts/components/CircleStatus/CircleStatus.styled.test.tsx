import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ThemeProviderForTest, { theme } from "../../theme/ThemeProviderForTest";
import CircleStatus from "./CircleStatus.styled";
import StatusEnum from "../../../logic/Enums/StatusEnum";

describe("Test suits for <Container />", () => {
  it("should have background property equal to theme", () => {
    const MyContainer = () => (
      <ThemeProviderForTest>
        <CircleStatus status={StatusEnum.NORMAL} />
      </ThemeProviderForTest>
    );
    const tree = renderer.create(<MyContainer />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "#fff");
  });
});
