import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(fab, faTwitter);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
