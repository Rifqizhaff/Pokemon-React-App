import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// import { Button, Navbar, Form } from 'react-bootstrap';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const globalState = {
  pokemonId: 0,
  pokemonName: 'name',
  pokemonType: 'type',
  pokemonHeight: 0,
  pokemonHp: 0,
  pokemonAtt: 0,
  pokemonDef: 0,
  pokemonSpd: 0,
  pokemonImg: 'img'
}

// reducer
function rootReducer (state = globalState, action) {
  return state;
}

// store
const storePoke = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storePoke}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
