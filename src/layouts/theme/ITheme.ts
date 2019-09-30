interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    containerBackground: string;
    inputBgColor: string;
    inputBorderColor: string;
    success: string;
    successDarken: string;
    warning: string;
    warningDarken: string;
    error: string;
    errorDarken: string;
    textColor: string;
    inputTextColor: string;
    hudBackgroundColor: string;
    boardCellColors: [string, string];
  };
  size: {
    borderRadius: string;
  };
}
export default ITheme;
