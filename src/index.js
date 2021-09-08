import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import SettingsProvider from './context/auth'

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
    <BrowserRouter>
    <App />
    <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
    </BrowserRouter>
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
