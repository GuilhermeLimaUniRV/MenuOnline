import React, { useState } from 'react';

const pratosPopulares = [
  { id: 1, nome: "Carbonara", preco: 42 },
  { id: 2, nome: "Carbonara", preco: 42 },
  { id: 3, nome: "Pesto Rosso", preco: 42 },
  { id: 4, nome: "Amatriciana", preco: 42 }
];

const categorias = [
  { id: 1, nome: "Hambúrgueres" },
  { id: 2, nome: "Massas" }
];

export default function MenuOnline() {
  const [busca, setBusca] = useState('');

  return (
    <div style={styles.container}>
      <h1 style={styles.logo}>MenuOnline</h1>

      <input
        type="text"
        placeholder="🔍 Pesquisar"
        value={busca}
        onChange={e => setBusca(e.target.value)}
        style={styles.search}
      />

      <h2 style={styles.subtitulo}>Mais Pedidos</h2>
      <div style={styles.listaHorizontal}>
        {pratosPopulares.map(prato => (
          <div key={prato.id} style={styles.cardPrato}>
            <div style={styles.imgFake}></div>
            <p>{prato.nome}</p>
            <strong>R$ {prato.preco}</strong>
          </div>
        ))}
      </div>

      <h2 style={styles.subtitulo}>Categorias</h2>
      <div style={styles.listaCategorias}>
        {categorias.map(cat => (
          <div key={cat.id} style={styles.cardCategoria}>
            <div style={styles.imgFakeGrande}></div>
            <strong>{cat.nome}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 480,
    margin: 'auto',
    padding: 16,
    fontFamily: 'Arial, sans-serif'
  },
  logo: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 12
  },
  search: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    border: '1px solid #ccc',
    marginBottom: 20,
    fontSize: 16
  },
  subtitulo: {
    fontSize: 18,
    margin: '16px 0 8px 0'
  },
  listaHorizontal: {
    display: 'flex',
    gap: 12,
    overflowX: 'auto',
    paddingBottom: 8
  },
  cardPrato: {
    minWidth: 100,
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 8,
    textAlign: 'center'
  },
  imgFake: {
    width: '100%',
    height: 60,
    backgroundColor: '#eee',
    marginBottom: 8
  },
  listaCategorias: {
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
    marginTop: 10
  },
  cardCategoria: {
    width: '45%',
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 10,
    textAlign: 'center'
  },
  imgFakeGrande: {
    width: '100%',
    height: 80,
    backgroundColor: '#eee',
    marginBottom: 8
  }
};