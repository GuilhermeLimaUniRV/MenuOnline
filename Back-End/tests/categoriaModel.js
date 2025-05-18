import dotenv from 'dotenv';
dotenv.config();

import supabase from '../config/db.js';
import cupomModel from '../models/cupomModel.js';

describe('buscarPorCodigo', () => {
  beforeEach(() => {
    supabase.from = jest.fn().mockReturnValue({
      select: jest.fn().mockReturnValue({
        eq: jest.fn().mockReturnValue({
          eq: jest.fn().mockReturnValue({
            maybeSingle: jest.fn().mockResolvedValue({
              data: { codigo: 'PROMO10', ativo: true },
              error: null
            })
          })
        })
      })
    });
  });

  it('deve retornar o cupom quando encontrado', async () => {
    const resultado = await cupomModel.buscarPorCodigo('PROMO10');
    expect(resultado).toEqual({ codigo: 'PROMO10', ativo: true });
  });
});
