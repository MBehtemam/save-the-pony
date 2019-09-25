import React from "react";
import { Provider } from "react-redux";
import Store from "./logic/Store";
import { ThemeProvider } from "styled-components";
import MainTheme from "./layouts/theme/main.theme";
import MainPage from "./pages/Main";
const store = Store();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={MainTheme}>
          <MainPage />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
