// server.js
import express from 'express';
import menuRoutes from './routes/menuRoutes.js'; // .js obrigatório
import supabase from './config/db.js'; // Importe o Supabase

const app = express();
app.use(express.json());

app.use('/api/menu', menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});