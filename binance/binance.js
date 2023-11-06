const { Spot } = require('@binance/connector') //WebsocketAPI https://github.com/binance/binance-connector-node/tree/master/examples/websocketAPI/spot/userData, https://github.com/binance/binance-connector-node/blob/master/src/websocketAPI.js
const apiKey = process.env.BINANCE_API_KEY
const apiSecret = process.env.BINANCE_API_SECRET
const isBinanceEnabled = process.env.BINANCE_ENABLED
const client = new Spot(apiKey, apiSecret)

//https://binance.github.io/binance-connector-node/module-Trade.html#newOrder
//https://binance-docs.github.io/apidocs/spot/en/#new-order-trade
const marketOrder = async (data) => {
  const { ticker, side, quantity } = data
  if (!isBinanceEnabled)
    return "NOT sending market request to binance, ticker: " + ticker + ", side: " + side + ", quantity: " + quantity

  console.log("sending market request to binance")
  return await client.newOrder(ticker, side, 'MARKET', {
    quantity: quantity
  }).then(response => {
    // client.logger.log(response.data)
    const result = {
      executedQty: response.data.executedQty, //0.00280000
      cummulativeQuoteQty: response.data.cummulativeQuoteQty, //5.25341600
      status: response.data.status,//FILLED
      side: response.data.side,//BUY
      commission: response.data.fills.map(fill => parseFloat(fill.commission)).reduce((a, b) => a + b, 0),//0.00000280
    }
    return JSON.stringify(result)
  })
    .catch(error => {
      client.logger.error(error)
      return "ERROR -> sent market request to binance, ticker: " + ticker + ", side: " + side + ", quantity: " + quantity + ", error: " + error
    })

}
const limitOrder = async (data) => {
  const { ticker, side, quantity, price } = data
  console.log("NOT sending limit request to binance")
  // await client.newOrder(data.ticker, data.side, 'LIMIT', {
  //   price: '350',
  //   quantity: 1,
  //   timeInForce: 'GTC'
  // }).then(response => client.logger.log(response.data))
  //   .catch(error => client.logger.error(error))
}
const stopLossOrder = async (data) => {
  const { ticker, side, quantity, price } = data
  console.log("sending stop loss request to binance")
  await client.newOrder(data.ticker, data.side, 'STOP_LOSS', {
    stopPrice: '350', //DECIMAL
    quantity: 1, //DECIMAL
    trailingDelta: 'GTC' //LONG
  }).then(response => client.logger.log(response.data))
    .catch(error => client.logger.error(error))
}



const example_data = {
  "e": "24hrTicker",
  "E": 1699270703967,
  "s": "ETHUSDT",
  "p": "4.84000000",
  "P": "0.256",
  "w": "1886.12004228",
  "x": "1890.93000000",
  "c": "1895.78000000",
  "Q": "1.50380000",
  "b": "1895.77000000",
  "B": "59.33240000",
  "a": "1895.78000000",
  "A": "9.73080000",
  "o": "1890.94000000",
  "h": "1912.67000000",
  "l": "1855.45000000",
  "v": "345837.88160000",
  "q": "652291759.86693700",
  "O": 1699184303966,
  "C": 1699270703966,
  "F": 1223795131,
  "L": 1224536626,
  "n": 741496
}


// const callbacks = {
//   open: (client) => {
//     client.logger.log('open')
//     client.avgPrice('ETHUSDT')
//     // client.orderbook('BTCUSDT')
//   },
//   close: () => client.logger.log('closed'),
//   message: data => client.logger.log(data)
// }
// const websocketAPIClient = new WebsocketAPI(apiKey, apiSecret, { callbacks })

// setTimeout(() => websocketAPIClient.disconnect(), 10000)

// support combined stream
// const combinedStreams = client.combinedStreams(['btcusdt@miniTicker', 'ethusdt@tikcer'], callbacks)

module.exports = {
  client, marketOrder
}