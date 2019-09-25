import React from "react";
import { Provider } from "react-redux";
import Store from "./logic/Store";
import { ThemeProvider } from "styled-components";
import MainTheme from "./layouts/theme/main.theme";
const store = Store();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={MainTheme}>
        <span>Hope</span>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
