import cupomModel from '../models/cupomModel.js';

class cupomController {
  static async buscarPorCodigo(req, res) {
    try {
      const { codigo } = req.params;

      if (!codigo) {
        return res.status(400).json({ erro: 'Código do cupom é obrigatório!' });
      }

      const cupom = await cupomModel.buscarPorCodigo(codigo);

      if (!cupom) {
        return res.status(404).json({ erro: 'Cupom não encontrado ou inativo!' });
      }

      res.json(cupom);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

export default cupomController;