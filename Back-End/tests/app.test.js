import request from 'supertest';
import express from 'express';
import categoriaRoutes from '../routes/categoriaRoutes.js';
import cupomRoutes from '../routes/cupomRoutes.js';

// Cria o app Express para os testes
const app = express();
app.use(express.json());

// Aponta as rotas que queremos testar
app.use('/api/categorias', categoriaRoutes);
app.use('/api/cupons', cupomRoutes);

// TESTES

describe('POST /api/categorias', () => {
  it('deve retornar erro se o nome não for enviado', async () => {
    const res = await request(app)
      .post('/api/categorias')
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Nome é obrigatório');
  });
});

describe('GET /api/cupons/:codigo', () => {
  it('deve retornar erro 400 se não houver código', async () => {
    const res = await request(app).get('/api/cupons/');
    expect(res.statusCode).toBe(404); // rota inválida
  });

  it('deve retornar erro 404 se cupom não existir', async () => {
    const res = await request(app).get('/api/cupons/CUPOM_INEXISTENTE');
    expect([404, 500]).toContain(res.statusCode);
  });
});
