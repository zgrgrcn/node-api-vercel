require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

const { client } = require('./binance');

app.post('/webhook', (req, res) => {
  const data = req.body;

  validateRequest(data, res);

  console.log(data);

  // Get account information
  // client.account().then(response => client.logger.log(response.data))
  // createOrder("BUY", 'ETHBUSD', 1, 1851);
  res.send('200 OK');
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.listen(port, () => {
  console.log(`Trade app listening at http://localhost:${port}`)
});


const validateRequest = (data, res) => {
  if (!data)
    return res.status(400).send('No data received');

  if (!data.key)
    return res.status(400).send('No key received');

  if (process.env.WEBHOOK_KEY == null)
    return res.status(400).send('No webhook key set');

  if (data.key != process.env.WEBHOOK_KEY)
    return res.status(401).end()

  if (data.ticker == null)
    return res.status(400).send('No ticker received');

  if (data.operation == null)
    return res.status(400).send('No operation received');
}

const createOrder = (operation, ticker, quantity, price) => {
  client.newOrderTest(ticker, operation, 'MARKET',{
    quantity: quantity,
  }).then(response => client.logger.log(response.data))
    .catch(error => client.logger.error(error))
}