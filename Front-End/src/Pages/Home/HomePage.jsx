import React from 'react';
import { Layout } from 'antd';
import HeaderSection from '../../components/home/HeaderSection';
import PopularItems from '../../components/home/PopularItems';
import Categories from '../../components/home/Categories';
import Section from '../../components/home/Section';
import './HomePage.css';

const { Content } = Layout;

const HomePage = () => {
  return (
    <Layout className="home-layout">
      <HeaderSection />
      
      <Content className="home-content">
        <Section title="Mais Pedidos" icon="fire">
          <PopularItems />
        </Section>
        
        <Section title="Categorias" icon="menu">
          <Categories />
        </Section>
      </Content>
    </Layout>
  );
};

export default HomePage;