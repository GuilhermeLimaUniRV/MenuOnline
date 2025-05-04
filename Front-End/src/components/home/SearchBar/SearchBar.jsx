import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchBar.css';

const SearchBar = () => (
  <Input
    placeholder="Pesquisar"
    prefix={<SearchOutlined />}
    className="search-bar"
  />
);

export default SearchBar;