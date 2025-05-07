import { Header } from "../components/Header";
import { TopDishes } from "../components/TopDishes";
import { Category } from "../components/Category";

export default function Home() {
    return (
        <div>
            <Header name={"Menu Online"}></Header>
            <TopDishes />
            < Category />
        </div>

    );
}