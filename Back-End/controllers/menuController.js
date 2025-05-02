const pool = require('./config/db');

const getMenu = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pratos');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar cardápio' });
  }
};

module.exports = { getMenu };
