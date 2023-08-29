import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; //Store'u kullanacağını bilsin diye bunu ekledik
import "react-toastify/dist/ReactToastify.min.css"

import { configureStore } from './store/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> --> Şimdilik hata almamak için kapattık
  <Provider store={configureStore()}>
      <BrowserRouter>
      <App /> 
  </BrowserRouter>
</Provider>
  //React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
