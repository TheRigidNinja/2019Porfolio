import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import rootReducer from "./Reducers/rootReducer.js";
import Portfolio from './BodyScripts/Portfolio'
import './Sass/index.css'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Portfolio />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

