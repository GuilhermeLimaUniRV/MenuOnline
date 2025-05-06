import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";
import { TopDishes } from "../components/TopDishes";

export default function Home() {
    const [searchTerm, setSearchTerm]     = useState('');
    return (
        <div>
            <Header />
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <TopDishes />
        </div>

    );
}