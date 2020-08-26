import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/Game";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import reducer from "./store/reducer";
import { GameState } from "./store/types";

const store: Store<GameState> = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
