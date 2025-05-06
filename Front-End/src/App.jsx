import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';  // Ajuste o caminho conforme necessário
import Cardapio from './Pages/Cardapio';  // Importe o componente Cardapio

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        {/* Outras rotas podem ser adicionadas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
