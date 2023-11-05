const { Spot } = require('@binance/connector')
const apiKey = process.env.BINANCE_API_KEY
const apiSecret = process.env.BINANCE_API_SECRET
const client = new Spot(apiKey, apiSecret)
//https://binance.github.io/binance-connector-node/module-Trade.html#newOrder
//https://binance-docs.github.io/apidocs/spot/en/#new-order-trade
const marketOrder = async (data) => {
  const { ticker, side, quantity } = data
  return "NOT sending market request to binance, ticker: " + ticker + ", side: " + side + ", quantity: " + quantity

  // console.log("sending market request to binance")
  // client.newOrder(data.ticker, data.side, 'MARKET', {
  //   quantity: data.quantity
  // }).then(response => client.logger.log(response.data))
  //   .catch(error => client.logger.error(error))

  // return "sent market request to binance, ticker: " + ticker + ", side: " + side + ", quantity: " + quantity
}

const limitOrder = async (data) => {
  const { symbol, side, type, quantity, price } = data
  console.log("sending limit request to binance")
  client.newOrder(data.ticker, data.side, 'LIMIT', {
    price: '350',
    quantity: 1,
    timeInForce: 'GTC'
  }).then(response => client.logger.log(response.data))
    .catch(error => client.logger.error(error))
}

module.exports = {
  client, marketOrder, limitOrder
}