'use strict';


/**
 * Account Information (USER_DATA)
 * Get current account information.  Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns account
 **/
exports.apiV3AccountGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "makerCommission" : 15,
  "buyerCommission" : 0,
  "canWithdraw" : true,
  "accountType" : "SPOT",
  "sellerCommission" : 0,
  "updateTime" : 123456789,
  "canTrade" : true,
  "brokered" : false,
  "preventSor" : false,
  "uid" : 354937868,
  "balances" : [ {
    "asset" : "BTC",
    "free" : "4723846.89208129",
    "locked" : "0.00000000"
  }, {
    "asset" : "BTC",
    "free" : "4723846.89208129",
    "locked" : "0.00000000"
  } ],
  "permissions" : [ "SPOT", "SPOT" ],
  "commissionRates" : {
    "seller" : "0.00000000",
    "maker" : "0.00150000",
    "taker" : "0.00150000",
    "buyer" : "0.00000000"
  },
  "canDeposit" : true,
  "takerCommission" : 15,
  "requireSelfTradePrevention" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query all OCO (USER_DATA)
 * Retrieves all OCO based on provided optional parameters  Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * fromId Long Trade id to fetch from. Default gets most recent trades. (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.apiV3AllOrderListGET = function(timestamp,signature,fromId,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "contingencyType" : "OCO",
  "symbol" : "LTCBTC",
  "orderListId" : 29,
  "listOrderStatus" : "EXECUTING",
  "listClientOrderId" : "amEEAXryFzFwYF1FeRpUoZ",
  "isIsolated" : true,
  "orders" : [ "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"oD7aesZqjEGlZrbtRpy5zB\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"Jr1h6xirOxgeJOUuYQS7V3\"}]", "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"oD7aesZqjEGlZrbtRpy5zB\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"Jr1h6xirOxgeJOUuYQS7V3\"}]" ],
  "transactionTime" : 1565245913483,
  "listStatusType" : "EXEC_STARTED"
}, {
  "contingencyType" : "OCO",
  "symbol" : "LTCBTC",
  "orderListId" : 29,
  "listOrderStatus" : "EXECUTING",
  "listClientOrderId" : "amEEAXryFzFwYF1FeRpUoZ",
  "isIsolated" : true,
  "orders" : [ "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"oD7aesZqjEGlZrbtRpy5zB\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"Jr1h6xirOxgeJOUuYQS7V3\"}]", "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"oD7aesZqjEGlZrbtRpy5zB\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"Jr1h6xirOxgeJOUuYQS7V3\"}]" ],
  "transactionTime" : 1565245913483,
  "listStatusType" : "EXEC_STARTED"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * All Orders (USER_DATA)
 * Get all account orders; active, canceled, or filled..  - If `orderId` is set, it will get orders >= that `orderId`. Otherwise most recent orders are returned. - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time. - If `startTime` and/or `endTime` provided, `orderId` is not required  Weight(IP): 10
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Order id (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.apiV3AllOrdersGET = function(symbol,timestamp,signature,orderId,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "symbol" : "LTCBTC",
  "cummulativeQuoteQty" : "0.0",
  "side" : "BUY",
  "orderListId" : -1,
  "executedQty" : "0.0",
  "orderId" : 1,
  "origQty" : "1.0",
  "clientOrderId" : "myOrder1",
  "updateTime" : 1499827319559,
  "workingTime" : 1499827319559,
  "type" : "LIMIT",
  "icebergQty" : "0.0",
  "stopPrice" : "0.0",
  "preventedMatchId" : 0,
  "preventedQuantity" : "1.200000",
  "price" : "0.1",
  "selfTradePreventionMode" : "NONE",
  "origQuoteOrderQty" : "0.00000000",
  "time" : 1499827319559,
  "timeInForce" : "GTC",
  "isWorking" : true,
  "status" : "NEW"
}, {
  "symbol" : "LTCBTC",
  "cummulativeQuoteQty" : "0.0",
  "side" : "BUY",
  "orderListId" : -1,
  "executedQty" : "0.0",
  "orderId" : 1,
  "origQty" : "1.0",
  "clientOrderId" : "myOrder1",
  "updateTime" : 1499827319559,
  "workingTime" : 1499827319559,
  "type" : "LIMIT",
  "icebergQty" : "0.0",
  "stopPrice" : "0.0",
  "preventedMatchId" : 0,
  "preventedQuantity" : "1.200000",
  "price" : "0.1",
  "selfTradePreventionMode" : "NONE",
  "origQuoteOrderQty" : "0.00000000",
  "time" : 1499827319559,
  "timeInForce" : "GTC",
  "isWorking" : true,
  "status" : "NEW"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Prevented Matches
 * Displays the list of orders that were expired because of STP.  For additional information on what a Prevented match is, as well as Self Trade Prevention (STP), please refer to our STP FAQ page.  These are the combinations supported:  * symbol + preventedMatchId * symbol + orderId * symbol + orderId + fromPreventedMatchId (limit will default to 500) * symbol + orderId + fromPreventedMatchId + limit  Weight(IP):  Case                            Weight If symbol is invalid:          2 Querying by preventedMatchId:  2 Querying by orderId:            20
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * preventedMatchId Long  (optional)
 * orderId Long Order id (optional)
 * fromPreventedMatchId Long  (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.apiV3MyPreventedMatchesGET = function(symbol,timestamp,signature,preventedMatchId,orderId,fromPreventedMatchId,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "makerPreventedQuantity" : "1.300000",
  "symbol" : "BTCUSDT",
  "preventedMatchId" : 1,
  "tradeGroupId" : 1,
  "price" : "1.100000",
  "transactTime" : 1669101687094,
  "selfTradePreventionMode" : "EXPIRE_MAKER",
  "takerOrderId" : 5,
  "makerOrderId" : 3
}, {
  "makerPreventedQuantity" : "1.300000",
  "symbol" : "BTCUSDT",
  "preventedMatchId" : 1,
  "tradeGroupId" : 1,
  "price" : "1.100000",
  "transactTime" : 1669101687094,
  "selfTradePreventionMode" : "EXPIRE_MAKER",
  "takerOrderId" : 5,
  "makerOrderId" : 3
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Account Trade List (USER_DATA)
 * Get trades for a specific account and symbol.  If `fromId` is set, it will get id >= that `fromId`. Otherwise most recent orders are returned.  The time between startTime and endTime can't be longer than 24 hours. These are the supported combinations of all parameters:    symbol    symbol + orderId    symbol + startTime    symbol + endTime    symbol + fromId    symbol + startTime + endTime    symbol+ orderId + fromId  Weight(IP): 10
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long This can only be used in combination with symbol. (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * fromId Long Trade id to fetch from. Default gets most recent trades. (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.apiV3MyTradesGET = function(symbol,timestamp,signature,orderId,startTime,endTime,fromId,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "symbol" : "BNBBTC",
  "orderListId" : -1,
  "quoteQty" : "48.000012",
  "orderId" : 100234,
  "isBestMatch" : true,
  "isMaker" : false,
  "commissionAsset" : "BNB",
  "isBuyer" : false,
  "price" : "4.00000100",
  "qty" : "12.00000000",
  "commission" : "10.10000000",
  "id" : 28457,
  "time" : 1499865549590
}, {
  "symbol" : "BNBBTC",
  "orderListId" : -1,
  "quoteQty" : "48.000012",
  "orderId" : 100234,
  "isBestMatch" : true,
  "isMaker" : false,
  "commissionAsset" : "BNB",
  "isBuyer" : false,
  "price" : "4.00000100",
  "qty" : "12.00000000",
  "commission" : "10.10000000",
  "id" : 28457,
  "time" : 1499865549590
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Open OCO (USER_DATA)
 * Weight(IP): 3
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.apiV3OpenOrderListGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "contingencyType" : "OCO",
  "symbol" : "LTCBTC",
  "orderListId" : 31,
  "listOrderStatus" : "EXECUTING",
  "listClientOrderId" : "wuB13fmulKj3YjdqWEcsnp",
  "orders" : [ "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"r3EH2N76dHfLoSZWIUw1bT\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"Cv1SnyPD3qhqpbjpYEHbd2\"}]", "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"r3EH2N76dHfLoSZWIUw1bT\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"Cv1SnyPD3qhqpbjpYEHbd2\"}]" ],
  "transactionTime" : 1565246080644,
  "listStatusType" : "EXEC_STARTED"
}, {
  "contingencyType" : "OCO",
  "symbol" : "LTCBTC",
  "orderListId" : 31,
  "listOrderStatus" : "EXECUTING",
  "listClientOrderId" : "wuB13fmulKj3YjdqWEcsnp",
  "orders" : [ "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"r3EH2N76dHfLoSZWIUw1bT\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"Cv1SnyPD3qhqpbjpYEHbd2\"}]", "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"r3EH2N76dHfLoSZWIUw1bT\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"Cv1SnyPD3qhqpbjpYEHbd2\"}]" ],
  "transactionTime" : 1565246080644,
  "listStatusType" : "EXEC_STARTED"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel all Open Orders on a Symbol (TRADE)
 * Cancels all active orders on a symbol. This includes OCO orders.  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.apiV3OpenOrdersDELETE = function(symbol,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Current Open Orders (USER_DATA)
 * Get all open orders on a symbol. Careful when accessing this with no symbol.  Weight(IP): - `3` for a single symbol; - `40` when the symbol parameter is omitted;
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.apiV3OpenOrdersGET = function(timestamp,signature,symbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "symbol" : "LTCBTC",
  "cummulativeQuoteQty" : "0.0",
  "side" : "BUY",
  "orderListId" : -1,
  "executedQty" : "0.0",
  "orderId" : 1,
  "origQty" : "1.0",
  "clientOrderId" : "myOrder1",
  "updateTime" : 1499827319559,
  "workingTime" : 1499827319559,
  "type" : "LIMIT",
  "icebergQty" : "0.0",
  "stopPrice" : "0.0",
  "preventedMatchId" : 0,
  "preventedQuantity" : "1.200000",
  "price" : "0.1",
  "selfTradePreventionMode" : "NONE",
  "origQuoteOrderQty" : "0.00000000",
  "time" : 1499827319559,
  "timeInForce" : "GTC",
  "isWorking" : true,
  "status" : "NEW"
}, {
  "symbol" : "LTCBTC",
  "cummulativeQuoteQty" : "0.0",
  "side" : "BUY",
  "orderListId" : -1,
  "executedQty" : "0.0",
  "orderId" : 1,
  "origQty" : "1.0",
  "clientOrderId" : "myOrder1",
  "updateTime" : 1499827319559,
  "workingTime" : 1499827319559,
  "type" : "LIMIT",
  "icebergQty" : "0.0",
  "stopPrice" : "0.0",
  "preventedMatchId" : 0,
  "preventedQuantity" : "1.200000",
  "price" : "0.1",
  "selfTradePreventionMode" : "NONE",
  "origQuoteOrderQty" : "0.00000000",
  "time" : 1499827319559,
  "timeInForce" : "GTC",
  "isWorking" : true,
  "status" : "NEW"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel an Existing Order and Send a New Order (Trade)
 * Cancels an existing order and places a new order on the same symbol.  Filters and Order Count are evaluated before the processing of the cancellation and order placement occurs.  A new order that was not attempted (i.e. when newOrderResult: NOT_ATTEMPTED), will still increase the order count by 1.  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * side String 
 * type String Order type
 * cancelReplaceMode String - `STOP_ON_FAILURE` If the cancel request fails, the new order placement will not be attempted. - `ALLOW_FAILURES` If new order placement will be attempted even if cancel request fails.
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * cancelRestrictions String  (optional)
 * timeInForce String Order time in force (optional)
 * quantity Double Order quantity (optional)
 * quoteOrderQty Double Quote quantity (optional)
 * price Double Order price (optional)
 * cancelNewClientOrderId String Used to uniquely identify this cancel. Automatically generated by default (optional)
 * cancelOrigClientOrderId String Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence. (optional)
 * cancelOrderId Long Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence. (optional)
 * newClientOrderId String Used to uniquely identify this cancel. Automatically generated by default (optional)
 * strategyId Long  (optional)
 * strategyType Long The value cannot be less than 1000000. (optional)
 * stopPrice Double Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. (optional)
 * trailingDelta Double Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. (optional)
 * icebergQty Double Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. (optional)
 * newOrderRespType String Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. (optional)
 * selfTradePreventionMode String The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_9
 **/
exports.apiV3OrderCancelReplacePOST = function(symbol,side,type,cancelReplaceMode,timestamp,signature,cancelRestrictions,timeInForce,quantity,quoteOrderQty,price,cancelNewClientOrderId,cancelOrigClientOrderId,cancelOrderId,newClientOrderId,strategyId,strategyType,stopPrice,trailingDelta,icebergQty,newOrderRespType,selfTradePreventionMode,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cancelResponse" : {
    "symbol" : "BTCUSDT",
    "cummulativeQuoteQty" : "0.00000000",
    "side" : "SELL",
    "orderListId" : -1,
    "executedQty" : "0.00000000",
    "orderId" : 9,
    "origQty" : "0.000100",
    "clientOrderId" : "osxN3JXAtJvKvCqGeMWMVR",
    "type" : "LIMIT",
    "origClientOrderId" : "DnLo3vTAQcjha43lAZhZ0y",
    "price" : "0.01000000",
    "transactTime" : 1507725176595,
    "selfTradePreventionMode" : "NONE",
    "timeInForce" : "GTC",
    "status" : "CANCELED"
  },
  "newOrderResponse" : {
    "symbol" : "BTCUSDT",
    "cummulativeQuoteQty" : "0.00000000",
    "side" : "BUY",
    "orderListId" : -1,
    "executedQty" : "0.00000000",
    "orderId" : 10,
    "origQty" : "0.040000",
    "clientOrderId" : "wOceeeOzNORyLiQfw7jd8S",
    "workingTime" : 1669277163808,
    "type" : "LIMIT",
    "price" : "0.02000000",
    "transactTime" : 1652928801803,
    "selfTradePreventionMode" : "NONE",
    "timeInForce" : "GTC",
    "fills" : [ ],
    "status" : "NEW"
  },
  "cancelResult" : "SUCCESS",
  "newOrderResult" : "SUCCESS"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel Order (TRADE)
 * Cancel an active order.  Either `orderId` or `origClientOrderId` must be sent.  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Order id (optional)
 * origClientOrderId String Order id from client (optional)
 * newClientOrderId String Used to uniquely identify this cancel. Automatically generated by default (optional)
 * cancelRestrictions String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns order
 **/
exports.apiV3OrderDELETE = function(symbol,timestamp,signature,orderId,origClientOrderId,newClientOrderId,cancelRestrictions,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symbol" : "BNBBTC",
  "cummulativeQuoteQty" : "10.00000000",
  "side" : "SELL",
  "orderListId" : -1,
  "executedQty" : "10.00000000",
  "orderId" : 28,
  "origQty" : "10.00000000",
  "clientOrderId" : "6gCrw2kRUAF9CvJDGP16IP",
  "type" : "LIMIT",
  "origClientOrderId" : "msXkySR3u5uYwpvRMFsi3u",
  "price" : "1.00000000",
  "transactTime" : 1507725176595,
  "selfTradePreventionMode" : "NONE",
  "timeInForce" : "GTC",
  "status" : "FILLED"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Order (USER_DATA)
 * Check an order's status.  - Either `orderId` or `origClientOrderId` must be sent. - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.  Weight(IP): 2
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Order id (optional)
 * origClientOrderId String Order id from client (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns orderDetails
 **/
exports.apiV3OrderGET = function(symbol,timestamp,signature,orderId,origClientOrderId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symbol" : "LTCBTC",
  "cummulativeQuoteQty" : "0.0",
  "side" : "BUY",
  "orderListId" : -1,
  "executedQty" : "0.0",
  "orderId" : 1,
  "origQty" : "1.0",
  "clientOrderId" : "myOrder1",
  "updateTime" : 1499827319559,
  "workingTime" : 1499827319559,
  "type" : "LIMIT",
  "icebergQty" : "0.0",
  "stopPrice" : "0.0",
  "preventedMatchId" : 0,
  "preventedQuantity" : "1.200000",
  "price" : "0.1",
  "selfTradePreventionMode" : "NONE",
  "origQuoteOrderQty" : "0.00000000",
  "time" : 1499827319559,
  "timeInForce" : "GTC",
  "isWorking" : true,
  "status" : "NEW"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel OCO (TRADE)
 * Cancel an entire Order List  Canceling an individual leg will cancel the entire OCO  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderListId Long Order list id (optional)
 * listClientOrderId String A unique Id for the entire orderList (optional)
 * newClientOrderId String Used to uniquely identify this cancel. Automatically generated by default (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns ocoOrder
 **/
exports.apiV3OrderListDELETE = function(symbol,timestamp,signature,orderListId,listClientOrderId,newClientOrderId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contingencyType" : "OCO",
  "symbol" : "BNBBTC",
  "orderListId" : 1929,
  "listOrderStatus" : "ALL_DONE",
  "listClientOrderId" : "C3wyj4WVEktd7u9aVBRXcN",
  "orders" : [ {
    "symbol" : "BNBBTC",
    "orderId" : 2,
    "clientOrderId" : "pO9ufTiFGg3nw2fOdgeOXa"
  }, {
    "symbol" : "BNBBTC",
    "orderId" : 3,
    "clientOrderId" : "TXOvglzXuaubXAaENpaRCB"
  } ],
  "orderReports" : [ {
    "symbol" : "BNBBTC",
    "origClientOrderId" : "pO9ufTiFGg3nw2fOdgeOXa",
    "orderId" : 2,
    "orderListId" : 0,
    "clientOrderId" : "unfWT8ig8i0uj6lPuYLez6",
    "price" : "1.00000000",
    "origQty" : "10.00000000",
    "executedQty" : "0.00000000",
    "cummulativeQuoteQty" : "0.00000000",
    "status" : "CANCELED",
    "timeInForce" : "GTC",
    "type" : "STOP_LOSS_LIMIT",
    "side" : "SELL",
    "stopPrice" : "1.00000000",
    "transactTime" : 1688005070874
  }, {
    "symbol" : "BNBBTC",
    "origClientOrderId" : "TXOvglzXuaubXAaENpaRCB",
    "orderId" : 3,
    "orderListId" : 0,
    "clientOrderId" : "unfWT8ig8i0uj6lPuYLez6",
    "price" : "3.00000000",
    "origQty" : "10.00000000",
    "executedQty" : "0.00000000",
    "cummulativeQuoteQty" : "0.00000000",
    "status" : "CANCELED",
    "timeInForce" : "GTC",
    "type" : "LIMIT_MAKER",
    "side" : "SELL",
    "selfTradePreventionMode" : "NONE",
    "transactTime" : 1688005070874
  } ],
  "transactionTime" : 1574040868128,
  "listStatusType" : "ALL_DONE"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query OCO (USER_DATA)
 * Retrieves a specific OCO based on provided optional parameters  Weight(IP): 2
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderListId Long Order list id (optional)
 * origClientOrderId String Order id from client (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_11
 **/
exports.apiV3OrderListGET = function(timestamp,signature,orderListId,origClientOrderId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contingencyType" : "OCO",
  "symbol" : "LTCBTC",
  "orderListId" : 27,
  "listOrderStatus" : "EXECUTING",
  "listClientOrderId" : "h2USkA5YQpaXHPIrkd96xE",
  "orders" : [ "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"qD1gy3kc3Gx0rihm9Y3xwS\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"ARzZ9I00CPM8i3NhmU9Ega\"}]", "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"qD1gy3kc3Gx0rihm9Y3xwS\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"ARzZ9I00CPM8i3NhmU9Ega\"}]" ],
  "transactionTime" : 1565245656253,
  "listStatusType" : "EXEC_STARTED"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * New OCO (TRADE)
 * Send in a new OCO  - Price Restrictions:   - `SELL`: Limit Price > Last Price > Stop Price   - `BUY`: Limit Price < Last Price < Stop Price - Quantity Restrictions:     - Both legs must have the same quantity     - `ICEBERG` quantities however do not have to be the same - Order Rate Limit     - `OCO` counts as 2 orders against the order rate limit.  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * side String 
 * quantity Double 
 * price Double Order price
 * stopPrice Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * listClientOrderId String A unique Id for the entire orderList (optional)
 * limitClientOrderId String A unique Id for the limit order (optional)
 * limitStrategyId Long  (optional)
 * limitStrategyType Long The value cannot be less than 1000000. (optional)
 * limitIcebergQty Double  (optional)
 * trailingDelta Double  (optional)
 * stopClientOrderId String A unique Id for the stop loss/stop loss limit leg (optional)
 * stopStrategyId Long  (optional)
 * stopStrategyType Long  (optional)
 * stopLimitPrice Double If provided, stopLimitTimeInForce is required. (optional)
 * stopIcebergQty Double  (optional)
 * stopLimitTimeInForce String  (optional)
 * newOrderRespType String Set the response JSON. (optional)
 * selfTradePreventionMode String The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_10
 **/
exports.apiV3OrderOcoPOST = function(symbol,side,quantity,price,stopPrice,timestamp,signature,listClientOrderId,limitClientOrderId,limitStrategyId,limitStrategyType,limitIcebergQty,trailingDelta,stopClientOrderId,stopStrategyId,stopStrategyType,stopLimitPrice,stopIcebergQty,stopLimitTimeInForce,newOrderRespType,selfTradePreventionMode,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contingencyType" : "OCO",
  "symbol" : "LTCBTC",
  "orderListId" : 0,
  "listOrderStatus" : "EXECUTING",
  "listClientOrderId" : "JYVpp3F0f5CAG15DhtrqLp",
  "orders" : [ "[{\"symbol\":\"LTCBTC\",\"orderId\":2,\"clientOrderId\":\"Kk7sqHb9J6mJWTMDVW7Vos\"},{\"symbol\":\"LTCBTC\",\"orderId\":3,\"clientOrderId\":\"xTXKaGYd4bluPVp78IVRvl\"}]", "[{\"symbol\":\"LTCBTC\",\"orderId\":2,\"clientOrderId\":\"Kk7sqHb9J6mJWTMDVW7Vos\"},{\"symbol\":\"LTCBTC\",\"orderId\":3,\"clientOrderId\":\"xTXKaGYd4bluPVp78IVRvl\"}]" ],
  "orderReports" : [ {
    "symbol" : "LTCBTC",
    "orderId" : 2,
    "orderListId" : 0,
    "clientOrderId" : "Kk7sqHb9J6mJWTMDVW7Vos",
    "transactTime" : 1563417480525,
    "price" : "0.000000",
    "origQty" : "0.624363",
    "executedQty" : "0.000000",
    "cummulativeQuoteQty" : "0.000000",
    "status" : "NEW",
    "timeInForce" : "GTC",
    "type" : "STOP_LOSS",
    "side" : "BUY",
    "stopPrice" : "0.960664",
    "workingTime" : -1,
    "selfTradePreventionMode" : "NONE"
  }, {
    "symbol" : "LTCBTC",
    "orderId" : 3,
    "orderListId" : 0,
    "clientOrderId" : "xTXKaGYd4bluPVp78IVRvl",
    "transactTime" : 1563417480525,
    "price" : "0.036435",
    "origQty" : "0.624363",
    "executedQty" : "0.000000",
    "cummulativeQuoteQty" : "0.000000",
    "status" : "NEW",
    "timeInForce" : "GTC",
    "type" : "LIMIT_MAKER",
    "side" : "BUY",
    "workingTime" : 1563417480525,
    "selfTradePreventionMode" : "NONE"
  } ],
  "transactionTime" : 1563417480525,
  "listStatusType" : "EXEC_STARTED"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * New Order (TRADE)
 * Send in a new order.  - `LIMIT_MAKER` are `LIMIT` orders that will be rejected if they would immediately match and trade as a taker. - `STOP_LOSS` and `TAKE_PROFIT` will execute a `MARKET` order when the `stopPrice` is reached. - Any `LIMIT` or `LIMIT_MAKER` type order can be made an iceberg order by sending an `icebergQty`. - Any order with an `icebergQty` MUST have `timeInForce` set to `GTC`. - `MARKET` orders using `quantity` specifies how much a user wants to buy or sell based on the market price. - `MARKET` orders using `quoteOrderQty` specifies the amount the user wants to spend (when buying) or receive (when selling) of the quote asset; the correct quantity will be determined based on the market liquidity and `quoteOrderQty`. - `MARKET` orders using `quoteOrderQty` will not break `LOT_SIZE` filter rules; the order will execute a quantity that will have the notional value as close as possible to `quoteOrderQty`. - same `newClientOrderId` can be accepted only when the previous one is filled, otherwise the order will be rejected.  Trigger order price rules against market price for both `MARKET` and `LIMIT` versions:  - Price above market price: `STOP_LOSS` `BUY`, `TAKE_PROFIT` `SELL` - Price below market price: `STOP_LOSS` `SELL`, `TAKE_PROFIT` `BUY`   Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * side String 
 * type String Order type
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * timeInForce String Order time in force (optional)
 * quantity Double Order quantity (optional)
 * quoteOrderQty Double Quote quantity (optional)
 * price Double Order price (optional)
 * newClientOrderId String Used to uniquely identify this cancel. Automatically generated by default (optional)
 * strategyId Long  (optional)
 * strategyType Long The value cannot be less than 1000000. (optional)
 * stopPrice Double Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. (optional)
 * trailingDelta Double Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. (optional)
 * icebergQty Double Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. (optional)
 * newOrderRespType String Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. (optional)
 * selfTradePreventionMode String The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_8
 **/
exports.apiV3OrderPOST = function(symbol,side,type,timestamp,signature,timeInForce,quantity,quoteOrderQty,price,newClientOrderId,strategyId,strategyType,stopPrice,trailingDelta,icebergQty,newOrderRespType,selfTradePreventionMode,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Test New Order (TRADE)
 * Test new order creation and signature/recvWindow long. Creates and validates a new order but does not send it into the matching engine.  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * side String 
 * type String Order type
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * timeInForce String Order time in force (optional)
 * quantity Double Order quantity (optional)
 * quoteOrderQty Double Quote quantity (optional)
 * price Double Order price (optional)
 * newClientOrderId String Used to uniquely identify this cancel. Automatically generated by default (optional)
 * strategyId Long  (optional)
 * strategyType Long The value cannot be less than 1000000. (optional)
 * stopPrice Double Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. (optional)
 * trailingDelta Double Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. (optional)
 * icebergQty Double Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. (optional)
 * newOrderRespType String Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns Object
 **/
exports.apiV3OrderTestPOST = function(symbol,side,type,timestamp,signature,timeInForce,quantity,quoteOrderQty,price,newClientOrderId,strategyId,strategyType,stopPrice,trailingDelta,icebergQty,newOrderRespType,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Current Order Count Usage (TRADE)
 * Displays the user's current order count usage for all intervals.  Weight(IP): 20
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.apiV3RateLimitOrderGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "rateLimitType" : "ORDERS",
  "interval" : "SECOND",
  "intervalNum" : 10,
  "limit" : 10000,
  "count" : 0
}, {
  "rateLimitType" : "ORDERS",
  "interval" : "DAY",
  "intervalNum" : 1,
  "limit" : 20000,
  "count" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

