interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    containerBackground: string;
    inputBgColor: string;
    inputBorderColor: string;
    success: string;
    warning: string;
    error: string;
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
