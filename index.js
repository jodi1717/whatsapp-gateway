const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.post('/webhook/wa_receive', (req, res) => {
  const { sender, message } = req.body;
  console.log('Pesan diterima dari:', sender);
  console.log('Isi pesan:', message);
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Whatsapp Gateway Aktif');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
