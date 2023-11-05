const { Spot } = require('@binance/connector')
const apiKey = process.env.BINANCE_API_KEY
const apiSecret = process.env.BINANCE_API_SECRET
const client = new Spot(apiKey, apiSecret)
//https://binance.github.io/binance-connector-node/module-Trade.html#newOrder
//https://binance-docs.github.io/apidocs/spot/en/#new-order-trade
const marketOrder = async (data) => {
  const { ticker, side, quantity } = data
  // return "NOT sending market request to binance, ticker: " + ticker + ", side: " + side + ", quantity: " + quantity

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
  const { symbol, side, type, quantity, price } = data
  console.log("sending limit request to binance")
  await client.newOrder(data.ticker, data.side, 'LIMIT', {
    price: '350',
    quantity: 1,
    timeInForce: 'GTC'
  }).then(response => client.logger.log(response.data))
    .catch(error => client.logger.error(error))
}

module.exports = {
  client, marketOrder, limitOrder
}