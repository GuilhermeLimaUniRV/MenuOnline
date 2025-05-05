// No seu componente (ex: src/components/PratosPopulares.jsx)
import { useState, useEffect } from 'react';
import { getPratos } from '../api';

function Pratos() {
  const [pratos, setPratos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPratos() {
      try {
        const dados = await getPratos();
        setPratos(dados);
      } catch (err) {
        setError('Falha ao carregar pratos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadPratos();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Pratos Populares</h2>
      <ul>
        {pratos.map((prato) => (
          <li key={prato.id}>
            {prato.nome} - R$ {prato.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pratos;