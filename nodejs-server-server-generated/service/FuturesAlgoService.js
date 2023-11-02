'use strict';


/**
 * Query Historical Algo Orders (USER_DATA)
 * - You need to enable Futures Trading Permission for the api key which requests this endpoint. - Base URL: https://api.binance.com  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * side String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * pageSize String Page size, minimum 1, maximum 100, default 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_149
 **/
exports.sapiV1AlgoFuturesHistoricalOrdersGET = function(timestamp,signature,symbol,side,startTime,endTime,page,pageSize,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "orders" : [ {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "0.000",
    "totalQty" : "5.00",
    "algoId" : 14517,
    "avgPrice" : "0.00",
    "positionSide" : "SHORT",
    "bookTime" : 1649756817004,
    "urgency" : "LOW",
    "clientAlgoId" : "d7096549481642f8a0bb69e9e2e31f2e",
    "algoStatus" : "WORKING",
    "algoType" : "VP",
    "endTime" : 1649757088101,
    "executedAmt" : "0.00000000"
  }, {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "0.000",
    "totalQty" : "5.00",
    "algoId" : 14517,
    "avgPrice" : "0.00",
    "positionSide" : "SHORT",
    "bookTime" : 1649756817004,
    "urgency" : "LOW",
    "clientAlgoId" : "d7096549481642f8a0bb69e9e2e31f2e",
    "algoStatus" : "WORKING",
    "algoType" : "VP",
    "endTime" : 1649757088101,
    "executedAmt" : "0.00000000"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Time-Weighted Average Price(Twap) New Order (TRADE)
 * Send in a Twap new order. Only support on USDâ“ˆ-M Contracts.  You need to enable Futures Trading Permission for the api key which requests this endpoint. Base URL: https://api.binance.com  - Total Algo open orders max allowed: 10 orders. - Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi. - Receiving \"success\": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive \"success\": true, but the order status will be expired after we check it. - quantity * 60 / duration should be larger than minQty - duration cannot be less than 5 mins or more than 24 hours. - For delivery contracts, TWAP end time should be one hour earlier than the delivery time of the symbol.  Weight(UID): 3000
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * side String 
 * quantity Double Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT
 * duration Long Duration for TWAP orders in seconds. [300, 86400];Less than 5min => defaults to 5 min; Greater than 24h => defaults to 24h
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * positionSide String Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode. (optional)
 * clientAlgoId String A unique id among Algo orders (length should be 32 characters)ï¼Œ If it is not sent, we will give default value (optional)
 * reduceOnly Boolean 'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you open a position (optional)
 * limitPrice Double Limit price of the order; If it is not sent, will place order by market price by default (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_146
 **/
exports.sapiV1AlgoFuturesNewOrderTwapPOST = function(symbol,side,quantity,duration,timestamp,signature,positionSide,clientAlgoId,reduceOnly,limitPrice,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "OK",
  "code" : 0,
  "clientAlgoId" : "00358ce6a268403398bd34eaa36dffe7",
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Volume Participation(VP) New Order (TRADE)
 * Send in a VP new order. Only support on USDâ“ˆ-M Contracts.  - You need to enable `Futures Trading Permission` for the api key which requests this endpoint. - Base URL: https://api.binance.com  - Total Algo open orders max allowed: 10 orders. - Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi. - Receiving \"success\": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive \"success\": true, but the order status will be expired after we check it.  Weight(UID): 3000
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * side String 
 * quantity Double Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT
 * urgency String Represent the relative speed of the current execution; ENUM: LOW, MEDIUM, HIGH
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * positionSide String Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode. (optional)
 * clientAlgoId String A unique id among Algo orders (length should be 32 characters)ï¼Œ If it is not sent, we will give default value (optional)
 * reduceOnly Boolean 'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you open a position (optional)
 * limitPrice Double Limit price of the order; If it is not sent, will place order by market price by default (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_146
 **/
exports.sapiV1AlgoFuturesNewOrderVpPOST = function(symbol,side,quantity,urgency,timestamp,signature,positionSide,clientAlgoId,reduceOnly,limitPrice,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "OK",
  "code" : 0,
  "clientAlgoId" : "00358ce6a268403398bd34eaa36dffe7",
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Current Algo Open Orders (USER_DATA)
 * - You need to enable Futures Trading Permission for the api key which requests this endpoint. - Base URL: https://api.binance.com  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_148
 **/
exports.sapiV1AlgoFuturesOpenOrdersGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "orders" : [ {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "0.000",
    "totalQty" : "5.00",
    "algoId" : 14517,
    "avgPrice" : "0.00",
    "positionSide" : "SHORT",
    "bookTime" : 1649756817004,
    "urgency" : "LOW",
    "clientAlgoId" : "d7096549481642f8a0bb69e9e2e31f2e",
    "algoStatus" : "WORKING",
    "algoType" : "VP",
    "endTime" : 0,
    "executedAmt" : "0.00000000"
  }, {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "0.000",
    "totalQty" : "5.00",
    "algoId" : 14517,
    "avgPrice" : "0.00",
    "positionSide" : "SHORT",
    "bookTime" : 1649756817004,
    "urgency" : "LOW",
    "clientAlgoId" : "d7096549481642f8a0bb69e9e2e31f2e",
    "algoStatus" : "WORKING",
    "algoType" : "VP",
    "endTime" : 0,
    "executedAmt" : "0.00000000"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel Algo Order(TRADE)
 * Cancel an active order. - You need to enable Futures Trading Permission for the api key which requests this endpoint. - Base URL: https://api.binance.com  Weight(IP): 1
 *
 * algoId Long Eg. 14511
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_147
 **/
exports.sapiV1AlgoFuturesOrderDELETE = function(algoId,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "OK",
  "code" : 0,
  "algoId" : 14511,
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Sub Orders (USER_DATA)
 * - You need to enable Futures Trading Permission for the api key which requests this endpoint. - Base URL: https://api.binance.com  Weight(IP): 1
 *
 * algoId Long 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * page Integer Default 1 (optional)
 * pageSize String Page size, minimum 1, maximum 100, default 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_150
 **/
exports.sapiV1AlgoFuturesSubOrdersGET = function(algoId,timestamp,signature,page,pageSize,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "executedQty" : "1.000",
  "subOrders" : [ {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "1.000",
    "orderId" : 8389765519993909000,
    "algoId" : 13723,
    "avgPrice" : "3229.44",
    "origQty" : "1.000",
    "orderStatus" : "FILLED",
    "bookTime" : 1649756817004,
    "feeAmt" : "-1.61471999",
    "subId" : 1,
    "feeAsset" : "USDT",
    "executedAmt" : "3229.44000000",
    "timeInForce" : "IMMEDIATE_OR_CANCEL"
  }, {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "1.000",
    "orderId" : 8389765519993909000,
    "algoId" : 13723,
    "avgPrice" : "3229.44",
    "origQty" : "1.000",
    "orderStatus" : "FILLED",
    "bookTime" : 1649756817004,
    "feeAmt" : "-1.61471999",
    "subId" : 1,
    "feeAsset" : "USDT",
    "executedAmt" : "3229.44000000",
    "timeInForce" : "IMMEDIATE_OR_CANCEL"
  } ],
  "executedAmt" : "3229.44000000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

