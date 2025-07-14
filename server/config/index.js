// server/config/index.js
import express from 'express';
import connectDatabase from './Database.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Hubungkan ke database
await connectDatabase();

// Routing sederhana
app.get('/', (req, res) => {
  res.send('🚀 WhatsApp Gateway is running!');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server is listening on http://localhost:${PORT}`);
});
