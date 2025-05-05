// src/services/api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/api',   // ou onde seu back end roda
  headers: { 'Content-Type': 'application/json' }
});
