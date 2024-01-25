import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.tsx';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { postsApi } from './components/api/api.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApiProvider api={postsApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
