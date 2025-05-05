import React, { useState } from 'react';
import { Header }    from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { MenuList }  from '../components/MenuList';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <MenuList searchTerm={searchTerm} />
    </div>
  );
}
