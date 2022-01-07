import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';


const greeting = React.createElement('h1', {}, 'Hello World!');
ReactDOM.render(greeting, document.getElementById('root'));
