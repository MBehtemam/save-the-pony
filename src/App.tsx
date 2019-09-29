import React from "react";
import { Provider } from "react-redux";
import Store from "./logic/Store";
import { ThemeProvider } from "styled-components";
import MainTheme from "./layouts/theme/main.theme";
import Router from "./pages/Router";

const store = Store();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={MainTheme}>
          <Router />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
