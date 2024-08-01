import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './router';
import { UserProvider } from './contexts/UserContext'; // Ajuste o caminho conforme necessário

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RouterPage />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
