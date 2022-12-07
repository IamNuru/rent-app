import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";
/* import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { apiService } from './features/api/apiService';
import { postApiService } from './features/api/postApiService'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
