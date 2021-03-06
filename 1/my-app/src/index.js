import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subscriber} from './redux/state.js';
import {addPost} from './redux/state.js';
import {updateNewPostText} from './redux/state.js';
import {BrowserRouter} from 'react-router-dom'

export let reLoAd = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <App  state = {state}
          addPost = {addPost}
          updateNewPostText = {updateNewPostText}
     />
  </BrowserRouter>
  , document.getElementById('root')
);
}

reLoAd(state);

subscriber(reLoAd);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
