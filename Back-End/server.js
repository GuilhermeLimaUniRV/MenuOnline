import express from 'express';
import pratoRoutes from './routes/pratoRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import 'dotenv/config';

const app = express();
app.use(express.json());

// Rotas
app.use('/api/pratos', pratoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/pedidos', pedidoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});