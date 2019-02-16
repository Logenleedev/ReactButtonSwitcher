import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let visibility = false;
const change = ()=> {
  visibility = !visibility
  render();
}



const render = () => {
  var templateOne = (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick = {change}>{visibility ? "Hide Details" : "Show Details"} </button>
        {
          visibility && <p>Hello! This is a piece of text</p>
        }
      </div>
  );



  const element = document.getElementById("root");
  ReactDOM.render(templateOne, element);
}
render();
