import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hallo, { Selamat } from './Hallo'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Hallo name="ibnuhajar" />, document.getElementById('root'))
ReactDOM.render(<Selamat name="alex" />, document.getElementById('head'))
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
