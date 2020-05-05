import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Serach from "containers/Search";
import store from "redux/store";

function App() {
  return (
    <Provider store={store}>
      <Serach />
    </Provider>
  );
}

export default App;
