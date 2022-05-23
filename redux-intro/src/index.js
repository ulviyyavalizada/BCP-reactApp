import React from 'react';
import ReactDOM from 'react-dom';
import App from './root/App';
import reportWebVitals from './reportWebVitals';

//Css import
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/nice-select.css';
import './assets/css/default.css';
import './assets/css/_common.sass';

//Js import
import configureStore from './redux/reducers/configureStore';
import {Provider} from "react-redux"

const Store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
