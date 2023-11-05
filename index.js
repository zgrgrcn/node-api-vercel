require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

const { client, marketOrder, limitOrder } = require('./binance/binance');
const { bot, telegramSender } = require('./telegram/telegram');
const e = require('express');

app.get('/env', async (req, res) => {
  const result = {
    BINANCE_API_KEY: process.env.BINANCE_API_KEY != null,
    BINANCE_API_SECRET: process.env.BINANCE_API_SECRET != null,
    BINANCE_UID: process.env.BINANCE_UID != null,
    TELEGRAM_GROUP_ID: process.env.TELEGRAM_GROUP_ID != null,
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN != null,
    WEBHOOK_KEY: process.env.WEBHOOK_KEY != null
  }
  res.send(result)
});

app.post('/webhook', async (req, res) => {
  const data = req.body;
  console.log("received webhook request, data: " + JSON.stringify(data))
  try {
    validateRequest(data)
    telegramSender(ticker = data.ticker,
      message = `${data.ticker} - ${data.side}@${data.quantity}x${data.price}=${(data.quantity * data.price).toFixed(4)}$`)

    const orderResult = await createOrder(data)
    telegramSender(ticker = data.ticker, message = orderResult)
    res.status(204).send()
  } catch (error) {
    res.status(500).send(error.message)
  }
});

app.get('/client', (req, res) => {
  client.account()
    .then(response => res.status(response.data.uid == process.env.BINANCE_UID ? 204 : 401).send())
    .catch(error => res.status(500).send(error.message))
});

app.get('/notification', (req, res) => {
  const option = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'Go To Graph at Binance', url: 'https://www.binance.com/en/trade/ETH_USDT?type=spot' }],
        [{ text: 'Go To Graph at Tradingview', url: 'https://www.tradingview.com/chart/?symbol=BINANCE:ETHUSDT' }]
      ]
    })
  };
  bot.sendMessage(process.env.TELEGRAM_GROUP_ID, 'notification at ' + new Date().toLocaleString(), option)
    .then(res.status(204).send())
    .catch(error => res.send(error.message))
});

app.get('/', (req, res) => {
  res.send('pong 200')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});

const validateRequest = (data) => {
  if (!data)
    throw new Error('No data received');

  if (!data.key)
    throw new Error('No key received');

  if (process.env.WEBHOOK_KEY == null)
    throw new Error('No webhook key set');

  if (data.key != process.env.WEBHOOK_KEY)
    throw new Error(401).send()

  if (data.ticker == null)
    throw new Error('No ticker received');

  if (data.side == null)
    throw new Error('No side received');

  if (data.broker == null)
    throw new Error('No broker received');

  if (data.quantity == null)
    throw new Error('No quantity received');

  return data;
}

const createOrder = async (data) => {
  if (data.broker === 'BINANCE') {
    try {
      return await marketOrder(data)
    } catch (error) {
      console.log("error sending request to binance, error: " + error.message)
      return error.message
    }
  } else {
    console.log("Broker not supported")
    throw new Error('Broker not supported')
  }
}