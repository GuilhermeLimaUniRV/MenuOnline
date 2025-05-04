import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR'; // Importe o locale para português
import App from './App';
import './assets/styles/global.css';
import 'antd/dist/reset.css';  // Estilos base do Ant Design

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR} theme={{
      token: {
        colorPrimary: '#00b96b', // Cor primária do tema
        borderRadius: 4, // Border radius padrão
      },
    }}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </React.StrictMode>
);