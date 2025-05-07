import express from 'express';
import cors from 'cors';
import pratoRoutes from './routes/pratoRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import cupomRoutes from './routes/cupomRoutes.js';

const app = express();

// Habilita CORS para todas as origens e métodos
app.use(cors());
app.use(express.json());

// Não é mais necessário; com app.use(cors()) já funciona:
// app.options('*', cors());

// Suas rotas
app.use('/api/pratos',    pratoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/pedidos',    pedidoRoutes);
app.use('/api/cupons', cupomRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
