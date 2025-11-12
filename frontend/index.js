import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom"
// import { Provider } from 'react-redux';
// import Store from './redux/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <App />
    <ToastContainer
      position="top-center"
      autoClose={2200}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />

  </BrowserRouter>



);


