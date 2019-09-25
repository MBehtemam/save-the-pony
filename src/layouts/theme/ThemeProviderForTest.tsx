import React from "react";
import styled, { ThemeProvider } from "styled-components";
import MainTheme from "./main.theme";

export const theme = MainTheme;
const ThemeProviderForTest = (props: { children: any }) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default ThemeProviderForTest;
