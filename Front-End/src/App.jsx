import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';  // Ajuste o caminho conforme necessário
import Cardapio from './Pages/Cardapio';  // Importe o componente Cardapio
import Cart from './Pages/Cart';
import { CarrinhoProvider } from './context/CarrinhoContext';

function App() {
  return (
    <CarrinhoProvider> 
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        {/* Outras rotas podem ser adicionadas conforme necessário */}
      </Routes>
    </Router>
    </CarrinhoProvider> 
  );
}

export default App;
