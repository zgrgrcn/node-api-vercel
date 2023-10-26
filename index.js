const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook isteği alındı:');
  console.log(req);

  res.status(200).json({ message: 'Webhook isteği alındı.' });
});

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })

// Sunucuyu dinlemeye başla.
app.listen(port, () => {
  console.log(`Webhook sunucusu ${port} numaralı port üzerinden çalışıyor.`);
});


