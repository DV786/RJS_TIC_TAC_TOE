import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from "react-toastify";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer position='top-right' />
    <App />
  </React.StrictMode>
);
