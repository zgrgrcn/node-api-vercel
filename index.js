const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Kullanmak istediğiniz port numarasını seçebilirsiniz.

// JSON verilerini ayrıştırmak için body-parser middleware'i kullanın.
app.use(bodyParser.json());

// POST isteğini dinlemek için bir endpoint oluşturun.
app.post('/webhook', (req, res) => {
  // Gelen isteği loglayabiliriz.
  console.log('Webhook isteği alındı:');
  console.log(req.body); // İstek gövdesini logla

  // Yanıt göndermek isterseniz:
  res.status(200).json({ message: 'Webhook isteği alındı.' });
});

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })

// Sunucuyu dinlemeye başla.
app.listen(port, () => {
  console.log(`Webhook sunucusu ${port} numaralı port üzerinden çalışıyor.`);
});


