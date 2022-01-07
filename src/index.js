import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';


const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();
}
const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1>;

ReactDOM.render(greeting, document.getElementById('root'));


// testing