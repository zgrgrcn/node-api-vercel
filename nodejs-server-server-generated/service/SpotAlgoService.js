'use strict';


/**
 * Query Historical Algo Orders
 * Get all historical SPOT TWAP orders  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * side String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * pageSize String Number of pages, minimum 10, maximum 200 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_154
 **/
exports.sapiV1AlgoSpotHistoricalOrdersGET = function(symbol,side,timestamp,signature,startTime,endTime,page,pageSize,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "orders" : [ {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "0.000",
    "totalQty" : "5.000",
    "algoId" : 14517,
    "avgPrice" : "0.00",
    "bookTime" : 1649756817004,
    "urgency" : "LOW",
    "clientAlgoId" : "d7096549481642f8a0bb69e9e2e31f2e",
    "algoStatus" : "WORKING",
    "algoType" : "VP",
    "endTime" : 1649756817004,
    "executedAmt" : "0.000"
  }, {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "0.000",
    "totalQty" : "5.000",
    "algoId" : 14517,
    "avgPrice" : "0.00",
    "bookTime" : 1649756817004,
    "urgency" : "LOW",
    "clientAlgoId" : "d7096549481642f8a0bb69e9e2e31f2e",
    "algoStatus" : "WORKING",
    "algoType" : "VP",
    "endTime" : 1649756817004,
    "executedAmt" : "0.000"
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
 * Time-Weighted Average Price (Twap) New Order
 * Place a new spot TWAP order with Algo service.  Weight(UID): 3000
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * side String 
 * quantity Double 
 * duration Integer 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * clientAlgoId String  (optional)
 * limitPrice Float  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_151
 **/
exports.sapiV1AlgoSpotNewOrderTwapPOST = function(symbol,side,quantity,duration,timestamp,signature,clientAlgoId,limitPrice,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "OK",
  "code" : 0,
  "clientAlgoId" : "65ce1630101a480b85915d7e11fd5078",
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
 * Query Current Algo Open Orders
 * Get all open SPOT TWAP orders  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_153
 **/
exports.sapiV1AlgoSpotOpenOrdersGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "orders" : [ {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "0.000",
    "totalQty" : "5.000",
    "algoId" : 14517,
    "avgPrice" : "0.00",
    "bookTime" : 1649756817004,
    "urgency" : "LOW",
    "clientAlgoId" : "d7096549481642f8a0bb69e9e2e31f2e",
    "algoStatus" : "WORKING",
    "algoType" : "TWAP",
    "endTime" : 1649756817004,
    "executedAmt" : "0.000"
  }, {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "0.000",
    "totalQty" : "5.000",
    "algoId" : 14517,
    "avgPrice" : "0.00",
    "bookTime" : 1649756817004,
    "urgency" : "LOW",
    "clientAlgoId" : "d7096549481642f8a0bb69e9e2e31f2e",
    "algoStatus" : "WORKING",
    "algoType" : "TWAP",
    "endTime" : 1649756817004,
    "executedAmt" : "0.000"
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
 * Cancel Algo Order
 * Cancel an open TWAP order  Weight(IP): 1
 *
 * algoId Long 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_152
 **/
exports.sapiV1AlgoSpotOrderDELETE = function(algoId,timestamp,signature,recvWindow) {
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
 * Query Sub Orders
 * Get respective sub orders for a specified algoId  Weight(IP): 1
 *
 * algoId Long 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * page Integer Default 1 (optional)
 * pageSize String Number of pages, minimum 10, maximum 200 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_155
 **/
exports.sapiV1AlgoSpotSubOrdersGET = function(algoId,timestamp,signature,page,pageSize,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "executedQty" : "1.000",
  "subOrders" : [ {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "0.000",
    "orderId" : 8389765519993909000,
    "algoId" : 14517,
    "avgPrice" : "3229.44",
    "origQty" : "1.000",
    "orderStatus" : "FILLED",
    "bookTime" : 1649319001964,
    "feeAmt" : "-1.61471999",
    "subId" : 1,
    "feeAsset" : "USDT",
    "executedAmt" : "0.000",
    "timeInForce" : "IMMEDIATE_OR_CANCEL"
  }, {
    "symbol" : "ETHUSDT",
    "side" : "SELL",
    "executedQty" : "0.000",
    "orderId" : 8389765519993909000,
    "algoId" : 14517,
    "avgPrice" : "3229.44",
    "origQty" : "1.000",
    "orderStatus" : "FILLED",
    "bookTime" : 1649319001964,
    "feeAmt" : "-1.61471999",
    "subId" : 1,
    "feeAsset" : "USDT",
    "executedAmt" : "0.000",
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

