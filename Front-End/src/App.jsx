import React from 'react';
import { Layout } from 'antd';
import HomePage from './Pages/Home';
import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="app-layout">
      {/* Você pode adicionar componentes globais aqui como Header, Sidebar, etc */}
      <Content>
        <HomePage /> {/* Sua página Home */}
      </Content>
      {/* Footer global pode ser adicionado aqui */}
    </Layout>
  );
};

export default App;