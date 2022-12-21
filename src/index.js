import App from './App';
import reportWebVitals from './reportWebVitals';

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import './index.css';
import './assets/css/appointment.css';
import './assets/css/all.css';
import './assets/css/bootstrap.min.css'
import './assets/css/fontawesome.css'
import './assets/css/style.css';
import './assets/css/responsive.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
