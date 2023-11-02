'use strict';


/**
 * Get BNB Burn Status(USER_DATA)
 * Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns bnbBurnStatus
 **/
exports.sapiV1BnbBurnGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "interestBNBBurn" : false,
  "spotBNBBurn" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Toggle BNB Burn On Spot Trade And Margin Interest (USER_DATA)
 * - \"spotBNBBurn\" and \"interestBNBBurn\" should be sent at least one.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * spotBNBBurn String Determines whether to use BNB to pay for trading fees on SPOT (optional)
 * interestBNBBurn String Determines whether to use BNB to pay for margin loan's interest (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns bnbBurnStatus
 **/
exports.sapiV1BnbBurnPOST = function(timestamp,signature,spotBNBBurn,interestBNBBurn,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "interestBNBBurn" : false,
  "spotBNBBurn" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Cross Margin Account Details (USER_DATA)
 * Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_27
 **/
exports.sapiV1MarginAccountGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transferEnabled" : true,
  "totalAssetOfBtc" : "6.82728457",
  "totalLiabilityOfBtc" : "0.58633215",
  "borrowEnabled" : true,
  "tradeEnabled" : true,
  "marginLevel" : "11.64405625",
  "totalNetAssetOfBtc" : "6.24095242",
  "userAssets" : [ {
    "netAsset" : "0.00499500",
    "interest" : "0.00000000",
    "asset" : "BTC",
    "free" : "0.00499500",
    "locked" : "0.00000000",
    "borrowed" : "0.00000000"
  }, {
    "netAsset" : "0.00499500",
    "interest" : "0.00000000",
    "asset" : "BTC",
    "free" : "0.00499500",
    "locked" : "0.00000000",
    "borrowed" : "0.00000000"
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
 * Get All Margin Assets (MARKET_DATA)
 * Weight(IP): 1
 *
 * returns List
 **/
exports.sapiV1MarginAllAssetsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "userMinBorrow" : "0.00000000",
  "assetFullName" : "Binance coin",
  "isMortgageable" : true,
  "assetName" : "BNB",
  "isBorrowable" : true,
  "userMinRepay" : "0.00000000"
}, {
  "userMinBorrow" : "0.00000000",
  "assetFullName" : "Binance coin",
  "isMortgageable" : true,
  "assetName" : "BNB",
  "isBorrowable" : true,
  "userMinRepay" : "0.00000000"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Margin Account's all OCO (USER_DATA)
 * Retrieves all OCO for a specific margin account based on provided optional parameters  Weight(IP): 200
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * symbol String Mandatory for isolated margin, not supported for cross margin (optional)
 * fromId String If supplied, neither `startTime` or `endTime` can be provided (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default Value: 500; Max Value: 1000 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginAllOrderListGET = function(timestamp,signature,isIsolated,symbol,fromId,startTime,endTime,limit,recvWindow) {
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
 * Query Margin Account's All Orders (USER_DATA)
 * - If `orderId` is set, it will get orders >= that orderId. Otherwise most recent orders are returned. - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.  Weight(IP): 200  Request Limit: 60 times/min per IP
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * orderId Long Order id (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginAllOrdersGET = function(symbol,timestamp,signature,isIsolated,orderId,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cummulativeQuoteQty" : "0.00000000",
  "symbol" : "BNBBTC",
  "side" : "SELL",
  "executedQty" : "0.00000000",
  "orderId" : 213205622,
  "origQty" : "0.30000000",
  "clientOrderId" : "ZwfQzuDIGpceVhKW5DvCmO",
  "isIsolated" : true,
  "updateTime" : 1562133008725,
  "icebergQty" : "0.00000000",
  "type" : "LIMIT",
  "stopPrice" : "0.00000000",
  "price" : "0.00493630",
  "selfTradePreventionMode" : "NONE",
  "time" : 1562133008725,
  "timeInForce" : "GTC",
  "isWorking" : true,
  "status" : "NEW"
}, {
  "cummulativeQuoteQty" : "0.00000000",
  "symbol" : "BNBBTC",
  "side" : "SELL",
  "executedQty" : "0.00000000",
  "orderId" : 213205622,
  "origQty" : "0.30000000",
  "clientOrderId" : "ZwfQzuDIGpceVhKW5DvCmO",
  "isIsolated" : true,
  "updateTime" : 1562133008725,
  "icebergQty" : "0.00000000",
  "type" : "LIMIT",
  "stopPrice" : "0.00000000",
  "price" : "0.00493630",
  "selfTradePreventionMode" : "NONE",
  "time" : 1562133008725,
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
 * Get All Cross Margin Pairs (MARKET_DATA)
 * Weight(IP): 1
 *
 * returns List
 **/
exports.sapiV1MarginAllPairsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "symbol" : "BNBBTC",
  "isSellAllowed" : true,
  "quote" : "BTC",
  "id" : 351637150141315840,
  "base" : "BNB",
  "isBuyAllowed" : true,
  "isMarginTrade" : true
}, {
  "symbol" : "BNBBTC",
  "isSellAllowed" : true,
  "quote" : "BTC",
  "id" : 351637150141315840,
  "base" : "BNB",
  "isBuyAllowed" : true,
  "isMarginTrade" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Margin Asset (MARKET_DATA)
 * Weight(IP): 10
 *
 * asset String 
 * returns inline_response_200_19
 **/
exports.sapiV1MarginAssetGET = function(asset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userMinBorrow" : "0.00000000",
  "assetFullName" : "Binance Coin",
  "isMortgageable" : true,
  "assetName" : "BNB",
  "isBorrowable" : false,
  "userMinRepay" : "0.00000000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cross margin collateral ratio (MARKET_DATA)
 *  Weight(IP): 100
 *
 * returns List
 **/
exports.sapiV1MarginCrossMarginCollateralRatioGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "assetNames" : [ "BNX", "BNX" ],
  "collaterals" : [ {
    "discountRate" : "1",
    "minUsdValue" : "0",
    "maxUsdValue" : "13000000"
  }, {
    "discountRate" : "1",
    "minUsdValue" : "0",
    "maxUsdValue" : "13000000"
  } ]
}, {
  "assetNames" : [ "BNX", "BNX" ],
  "collaterals" : [ {
    "discountRate" : "1",
    "minUsdValue" : "0",
    "maxUsdValue" : "13000000"
  }, {
    "discountRate" : "1",
    "minUsdValue" : "0",
    "maxUsdValue" : "13000000"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Cross Margin Fee Data (USER_DATA)
 * Get cross margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee  Weight(IP): 1 when coin is specified; 5 when the coin parameter is omitted
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * vipLevel Integer Defaults to user's vip level (optional)
 * coin String Coin name (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginCrossMarginDataGET = function(timestamp,signature,vipLevel,coin,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "vipLevel" : 0,
  "borrowable" : true,
  "marginablePairs" : [ "BNBBTC", "TRXBTC", "ETHBTC", "BTCUSDT" ],
  "transferIn" : true,
  "dailyInterest" : "0.00026125",
  "borrowLimit" : "180",
  "coin" : "BTC",
  "yearlyInterest" : "0.0953"
}, {
  "vipLevel" : 0,
  "borrowable" : true,
  "marginablePairs" : [ "BNBBTC", "TRXBTC", "ETHBTC", "BTCUSDT" ],
  "transferIn" : true,
  "dailyInterest" : "0.00026125",
  "borrowLimit" : "180",
  "coin" : "BTC",
  "yearlyInterest" : "0.0953"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Margin Dustlog (USER_DATA)
 * Query the historical information of user margin account small-value asset conversion BNB.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_42
 **/
exports.sapiV1MarginDribbletGET = function(timestamp,signature,startTime,endTime,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 8,
  "userAssetDribblets" : [ {
    "totalServiceChargeAmount" : "0.00002699",
    "transId" : 45178372831,
    "operateTime" : 1615985535000,
    "totalTransferedAmount" : "0.00132256",
    "userAssetDribbletDetails" : [ {
      "serviceChargeAmount" : "0.000009",
      "amount" : "0.0009",
      "transId" : 4359321,
      "operateTime" : 1615985535000,
      "transferedAmount" : "0.000441",
      "fromAsset" : "USDT"
    }, {
      "serviceChargeAmount" : "0.000009",
      "amount" : "0.0009",
      "transId" : 4359321,
      "operateTime" : 1615985535000,
      "transferedAmount" : "0.000441",
      "fromAsset" : "USDT"
    } ]
  }, {
    "totalServiceChargeAmount" : "0.00002699",
    "transId" : 45178372831,
    "operateTime" : 1615985535000,
    "totalTransferedAmount" : "0.00132256",
    "userAssetDribbletDetails" : [ {
      "serviceChargeAmount" : "0.000009",
      "amount" : "0.0009",
      "transId" : 4359321,
      "operateTime" : 1615985535000,
      "transferedAmount" : "0.000441",
      "fromAsset" : "USDT"
    }, {
      "serviceChargeAmount" : "0.000009",
      "amount" : "0.0009",
      "transId" : 4359321,
      "operateTime" : 1615985535000,
      "transferedAmount" : "0.000441",
      "fromAsset" : "USDT"
    } ]
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
 * Get Assets That Can Be Converted Into BNB (USER_DATA)
 * Get assets that can be converted into BNB.  Weight(IP): 100
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_47
 **/
exports.sapiV1MarginDustGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "dribbletPercentage" : "0.02",
  "totalTransferBNB" : "0.01777302",
  "details" : [ {
    "toBTC" : "0.00016848",
    "assetFullName" : "ADA",
    "toBNBOffExchange" : "0.01741756",
    "exchange" : "0.00035546",
    "asset" : "BTC",
    "toBNB" : "0.01777302",
    "amountFree" : "6.21"
  }, {
    "toBTC" : "0.00016848",
    "assetFullName" : "ADA",
    "toBNBOffExchange" : "0.01741756",
    "exchange" : "0.00035546",
    "asset" : "BTC",
    "toBNB" : "0.01777302",
    "amountFree" : "6.21"
  } ],
  "totalTransferBtc" : "0.00016848"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Dust Transfer (TRADE)
 * Convert dust assets to BNB  Weight(UID): 3000
 *
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_48
 **/
exports.sapiV1MarginDustPOST = function(asset,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalTransfered" : "1.05127099",
  "transferResult" : [ {
    "tranId" : 1563368549307,
    "serviceChargeAmount" : "0.00500000",
    "amount" : "0.03000000",
    "operateTime" : 1563368549307,
    "transferedAmount" : "0.25000000",
    "fromAsset" : "ETH"
  }, {
    "tranId" : 1563368549307,
    "serviceChargeAmount" : "0.00500000",
    "amount" : "0.03000000",
    "operateTime" : 1563368549307,
    "transferedAmount" : "0.25000000",
    "fromAsset" : "ETH"
  } ],
  "totalServiceCharge" : "0.02102542"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Small Liability Exchange Coin List (USER_DATA)
 * Query the coins which can be small liability exchange  Weight(UID): 100
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginExchange_small_liabilityGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "principal" : "0.001",
  "liabilityQty" : 0.3552,
  "interest" : "0.00083334",
  "liabilityAsset" : "USDT",
  "asset" : "ETH"
}, {
  "principal" : "0.001",
  "liabilityQty" : 0.3552,
  "interest" : "0.00083334",
  "liabilityAsset" : "USDT",
  "asset" : "ETH"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Small Liability Exchange History (USER_DATA)
 * Get Small liability Exchange History  Weight(UID): 100
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_45
 **/
exports.sapiV1MarginExchange_small_liability_historyGET = function(timestamp,signature,current,size,startTime,endTime,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "amount" : "0.00083434",
    "bizType" : "EXCHANGE_SMALL_LIABILITY",
    "targetAmount" : "1.37576819",
    "targetAsset" : "BUSD",
    "asset" : "ETH",
    "timestamp" : 1672801339253
  }, {
    "amount" : "0.00083434",
    "bizType" : "EXCHANGE_SMALL_LIABILITY",
    "targetAmount" : "1.37576819",
    "targetAsset" : "BUSD",
    "asset" : "ETH",
    "timestamp" : 1672801339253
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
 * Get Force Liquidation Record (USER_DATA)
 * - Response in descending order  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * isolatedSymbol String Isolated symbol (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_26
 **/
exports.sapiV1MarginForceLiquidationRecGET = function(timestamp,signature,startTime,endTime,isolatedSymbol,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rows" : [ {
    "avgPrice" : "0.00388359",
    "executedQty" : "31.39000000",
    "orderId" : 180015097,
    "price" : "0.00388110",
    "qty" : "31.39000000",
    "side" : "SELL",
    "symbol" : "BNBBTC",
    "timeInForce" : "GTC",
    "isIsolated" : true,
    "updatedTime" : 1558941374745
  } ],
  "total" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Interest History (USER_DATA)
 * - Response in descending order - If `isolatedSymbol` is not sent, crossed margin data will be returned - Set `archived` to `true` to query data from 6 months ago - `type` in response has 4 enums:   - `PERIODIC` interest charged per hour   - `ON_BORROW` first interest charged on borrow   - `PERIODIC_CONVERTED` interest charged per hour converted into BNB   - `ON_BORROW_CONVERTED` first interest charged on borrow converted into BNB  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * isolatedSymbol String Isolated symbol (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * archived String Default: false. Set to true for archived data from 6 months ago (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_25
 **/
exports.sapiV1MarginInterestHistoryGET = function(timestamp,signature,asset,isolatedSymbol,startTime,endTime,current,size,archived,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "interestRate" : "0.01600000",
    "principal" : "36.22000000",
    "isolatedSymbol" : "BNBUSDT",
    "interest" : "0.01866667",
    "interestAccuredTime" : 1566813600,
    "asset" : "BNB",
    "type" : "ON_BORROW"
  }, {
    "interestRate" : "0.01600000",
    "principal" : "36.22000000",
    "isolatedSymbol" : "BNBUSDT",
    "interest" : "0.01866667",
    "interestAccuredTime" : 1566813600,
    "asset" : "BNB",
    "type" : "ON_BORROW"
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
 * Margin Interest Rate History (USER_DATA)
 * The max interval between startTime and endTime is 30 days.  Weight(IP): 1
 *
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * vipLevel Integer Defaults to user's vip level (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginInterestRateHistoryGET = function(asset,timestamp,signature,vipLevel,startTime,endTime,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "dailyInterestRate" : "0.00025000",
  "vipLevel" : 1,
  "asset" : "BTC",
  "timestamp" : 1611544731000
}, {
  "dailyInterestRate" : "0.00025000",
  "vipLevel" : 1,
  "asset" : "BTC",
  "timestamp" : 1611544731000
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Disable Isolated Margin Account (TRADE)
 * Disable isolated margin account for a specific symbol. Each trading pair can only be deactivated once every 24 hours .  Weight(UID): 300
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_34
 **/
exports.sapiV1MarginIsolatedAccountDELETE = function(symbol,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symbol" : "BTCUSDT",
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
 * Query Isolated Margin Account Info (USER_DATA)
 * - If \"symbols\" is not sent, all isolated assets will be returned. - If \"symbols\" is sent, only the isolated assets of the sent symbols will be returned.  Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * symbols String Max 5 symbols can be sent; separated by ',' (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns isolatedMarginAccountInfo
 **/
exports.sapiV1MarginIsolatedAccountGET = function(timestamp,signature,symbols,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "assets" : [ {
    "symbol" : "BTCUSDT",
    "isolatedCreated" : true,
    "indexPrice" : "10000.00000000",
    "liquidateRate" : "1.00000000",
    "marginRatio" : "0.00000000",
    "liquidatePrice" : "1000.00000000",
    "marginLevelStatus" : "EXCESSIVE",
    "tradeEnabled" : true,
    "baseAsset" : {
      "repayEnabled" : true,
      "netAsset" : "0.00000000",
      "totalAsset" : "0.00000000",
      "interest" : "0.00000000",
      "borrowEnabled" : true,
      "netAssetOfBtc" : "0.00000000",
      "asset" : "BTC",
      "free" : "0.00000000",
      "locked" : "0.00000000",
      "borrowed" : "0.00000000"
    },
    "quoteAsset" : {
      "repayEnabled" : true,
      "netAsset" : "0.00000000",
      "totalAsset" : "0.00000000",
      "interest" : "0.00000000",
      "borrowEnabled" : true,
      "netAssetOfBtc" : "0.00000000",
      "asset" : "USDT",
      "free" : "0.00000000",
      "locked" : "0.00000000",
      "borrowed" : "0.00000000"
    },
    "enabled" : true,
    "marginLevel" : "0.00000000"
  }, {
    "symbol" : "BTCUSDT",
    "isolatedCreated" : true,
    "indexPrice" : "10000.00000000",
    "liquidateRate" : "1.00000000",
    "marginRatio" : "0.00000000",
    "liquidatePrice" : "1000.00000000",
    "marginLevelStatus" : "EXCESSIVE",
    "tradeEnabled" : true,
    "baseAsset" : {
      "repayEnabled" : true,
      "netAsset" : "0.00000000",
      "totalAsset" : "0.00000000",
      "interest" : "0.00000000",
      "borrowEnabled" : true,
      "netAssetOfBtc" : "0.00000000",
      "asset" : "BTC",
      "free" : "0.00000000",
      "locked" : "0.00000000",
      "borrowed" : "0.00000000"
    },
    "quoteAsset" : {
      "repayEnabled" : true,
      "netAsset" : "0.00000000",
      "totalAsset" : "0.00000000",
      "interest" : "0.00000000",
      "borrowEnabled" : true,
      "netAssetOfBtc" : "0.00000000",
      "asset" : "USDT",
      "free" : "0.00000000",
      "locked" : "0.00000000",
      "borrowed" : "0.00000000"
    },
    "enabled" : true,
    "marginLevel" : "0.00000000"
  } ],
  "totalAssetOfBtc" : "0.00000000",
  "totalLiabilityOfBtc" : "0.00000000",
  "totalNetAssetOfBtc" : "0.00000000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Enabled Isolated Margin Account Limit (USER_DATA)
 * Query enabled isolated margin account limit.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_35
 **/
exports.sapiV1MarginIsolatedAccountLimitGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "maxAccount" : 20,
  "enabledAccount" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enable Isolated Margin Account (TRADE)
 * Enable isolated margin account for a specific symbol.  Weight(UID): 300
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_34
 **/
exports.sapiV1MarginIsolatedAccountPOST = function(symbol,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symbol" : "BTCUSDT",
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
 * Get All Isolated Margin Symbol(USER_DATA)
 * Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginIsolatedAllPairsGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "symbol" : "BTCUSDT",
  "isSellAllowed" : true,
  "quote" : "USDT",
  "base" : "BTC",
  "isMarginTrade" : true,
  "isBuyAllowed" : true
}, {
  "symbol" : "BTCUSDT",
  "isSellAllowed" : true,
  "quote" : "USDT",
  "base" : "BTC",
  "isMarginTrade" : true,
  "isBuyAllowed" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Isolated Margin Fee Data (USER_DATA)
 * Get isolated margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee  Weight(IP): 1 when a single is specified; 10 when the symbol parameter is omitted
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * vipLevel Integer Defaults to user's vip level (optional)
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginIsolatedMarginDataGET = function(timestamp,signature,vipLevel,symbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "vipLevel" : 0,
  "symbol" : "BTCUSDT",
  "leverage" : "10",
  "data" : [ {
    "coin" : "BTC",
    "dailyInterest" : "0.00026125",
    "borrowLimit" : "270"
  }, {
    "coin" : "USDT",
    "dailyInterest" : "0.000475",
    "borrowLimit" : "2100000"
  } ]
}, {
  "vipLevel" : 0,
  "symbol" : "BTCUSDT",
  "leverage" : "10",
  "data" : [ {
    "coin" : "BTC",
    "dailyInterest" : "0.00026125",
    "borrowLimit" : "270"
  }, {
    "coin" : "USDT",
    "dailyInterest" : "0.000475",
    "borrowLimit" : "2100000"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Isolated Margin Tier Data (USER_DATA)
 * Get isolated margin tier data collection with any tier as https://www.binance.com/en/margin-data  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * tier String All margin tier data will be returned if tier is omitted (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginIsolatedMarginTierGET = function(symbol,timestamp,signature,tier,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "symbol" : "BTCUSDT",
  "liquidationRiskRatio" : "1.05",
  "effectiveMultiple" : "10",
  "tier" : 1,
  "quoteAssetMaxBorrowable" : "70000",
  "initialRiskRatio" : "1.111",
  "baseAssetMaxBorrowable" : "9"
}, {
  "symbol" : "BTCUSDT",
  "liquidationRiskRatio" : "1.05",
  "effectiveMultiple" : "10",
  "tier" : 1,
  "quoteAssetMaxBorrowable" : "70000",
  "initialRiskRatio" : "1.111",
  "baseAssetMaxBorrowable" : "9"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Isolated Margin Symbol (USER_DATA)
 * Weight(IP): 10
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_36
 **/
exports.sapiV1MarginIsolatedPairGET = function(symbol,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symbol" : "BTCUSDT",
  "isSellAllowed" : true,
  "quote" : "USDT",
  "base" : "BTC",
  "isMarginTrade" : true,
  "isBuyAllowed" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Isolated Margin Transfer History (USER_DATA)
 * Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * type String  (optional)
 * transFrom String  (optional)
 * transTo String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns marginTransferDetails
 **/
exports.sapiV1MarginIsolatedTransferGET = function(symbol,timestamp,signature,asset,type,transFrom,transTo,startTime,endTime,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "amount" : "0.10000000",
    "transTo" : "ISOLATED_MARGIN",
    "txId" : 5240372201,
    "asset" : "BNB",
    "type" : "ROLL_IN",
    "transFrom" : "SPOT",
    "status" : "CONFIRMED",
    "timestamp" : 1566898617000
  }, {
    "amount" : "0.10000000",
    "transTo" : "ISOLATED_MARGIN",
    "txId" : 5240372201,
    "asset" : "BNB",
    "type" : "ROLL_IN",
    "transFrom" : "SPOT",
    "status" : "CONFIRMED",
    "timestamp" : 1566898617000
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
 * Isolated Margin Account Transfer (MARGIN)
 * Weight(UID): 600
 *
 * asset String 
 * symbol String Trading symbol, e.g. BNBUSDT
 * transFrom String 
 * transTo String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns Object
 **/
exports.sapiV1MarginIsolatedTransferPOST = function(asset,symbol,transFrom,transTo,amount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 100000001
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Loan Record (USER_DATA)
 * - `txId` or `startTime` must be sent. `txId` takes precedence. - Response in descending order - If `isolatedSymbol` is not sent, crossed margin data will be returned - Set `archived` to `true` to query data from 6 months ago  Weight(IP): 10
 *
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isolatedSymbol String Isolated symbol (optional)
 * txId Long the tranId in  `POST /sapi/v1/margin/loan` (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * archived String Default: false. Set to true for archived data from 6 months ago (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_17
 **/
exports.sapiV1MarginLoanGET = function(asset,timestamp,signature,isolatedSymbol,txId,startTime,endTime,current,size,archived,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rows" : [ {
    "isolatedSymbol" : "BNBUSDT",
    "txId" : 12807067523,
    "asset" : "BNB",
    "principal" : "0.84624403",
    "timestamp" : 1555056425000,
    "status" : "CONFIRMED"
  } ],
  "total" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Margin Account Borrow (MARGIN)
 * Apply for a loan.  - If \"isIsolated\" = \"TRUE\", \"symbol\" must be sent - \"isIsolated\" = \"FALSE\" for crossed margin loan  Weight(UID): 3000
 *
 * asset String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns transaction
 **/
exports.sapiV1MarginLoanPOST = function(asset,amount,timestamp,signature,isIsolated,symbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 345196462
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Max Borrow (USER_DATA)
 * - If `isolatedSymbol` is not sent, crossed margin data will be sent. - `borrowLimit` is also available from https://www.binance.com/en/margin-fee  Weight(IP): 50
 *
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isolatedSymbol String Isolated symbol (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_31
 **/
exports.sapiV1MarginMaxBorrowableGET = function(asset,timestamp,signature,isolatedSymbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "1.69248805",
  "borrowLimit" : "60"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Max Transfer-Out Amount (USER_DATA)
 * - If `isolatedSymbol` is not sent, crossed margin data will be sent.  Weight(IP): 50
 *
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isolatedSymbol String Isolated symbol (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_32
 **/
exports.sapiV1MarginMaxTransferableGET = function(asset,timestamp,signature,isolatedSymbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "1.69248805",
  "borrowLimit" : "60"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adjust cross margin max leverage (USER_DATA)
 * Adjust cross margin max leverage  Weight(IP): 3000
 *
 * maxLeverage Integer Can only adjust 3 or 5
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_49
 **/
exports.sapiV1MarginMax_leveragePOST = function(maxLeverage,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Query Margin Account's Trade List (USER_DATA)
 * - If `fromId` is set, it will get orders >= that `fromId`. Otherwise most recent trades are returned.  Weight(IP): 10
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * fromId Long Trade id to fetch from. Default gets most recent trades. (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginMyTradesGET = function(symbol,timestamp,signature,isIsolated,startTime,endTime,fromId,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "symbol" : "BNBBTC",
  "orderId" : 28,
  "price" : "0.02000000",
  "isBestMatch" : true,
  "qty" : "1.02000000",
  "commission" : "0.00006000",
  "isIsolated" : false,
  "id" : 28,
  "time" : 1507725176595,
  "isMaker" : true,
  "commissionAsset" : "BTC",
  "isBuyer" : true
}, {
  "symbol" : "BNBBTC",
  "orderId" : 28,
  "price" : "0.02000000",
  "isBestMatch" : true,
  "qty" : "1.02000000",
  "commission" : "0.00006000",
  "isIsolated" : false,
  "id" : 28,
  "time" : 1507725176595,
  "isMaker" : true,
  "commissionAsset" : "BTC",
  "isBuyer" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a future hourly interest rate (USER_DATA)
 * Get user the next hourly estimate interest  Weight(UID): 100
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * assets String List of assets, separated by commas, up to 20 (optional)
 * isIsolated String for isolated margin or not, \"TRUE\", \"FALSE\" (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginNext_hourly_interest_rateGET = function(timestamp,signature,assets,isIsolated,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "asset" : "BTC",
  "nextHourlyInterestRate" : "0.00000571"
}, {
  "asset" : "BTC",
  "nextHourlyInterestRate" : "0.00000571"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Margin Account's Open OCO (USER_DATA)
 * Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * symbol String Mandatory for isolated margin, not supported for cross margin (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginOpenOrderListGET = function(timestamp,signature,isIsolated,symbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "contingencyType" : "OCO",
  "symbol" : "LTCBTC",
  "orderListId" : 31,
  "listOrderStatus" : "EXECUTING",
  "listClientOrderId" : "wuB13fmulKj3YjdqWEcsnp",
  "isIsolated" : false,
  "orders" : [ "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"r3EH2N76dHfLoSZWIUw1bT\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"Cv1SnyPD3qhqpbjpYEHbd2\"}]", "[{\"symbol\":\"LTCBTC\",\"orderId\":4,\"clientOrderId\":\"r3EH2N76dHfLoSZWIUw1bT\"},{\"symbol\":\"LTCBTC\",\"orderId\":5,\"clientOrderId\":\"Cv1SnyPD3qhqpbjpYEHbd2\"}]" ],
  "transactionTime" : 1565246080644,
  "listStatusType" : "EXEC_STARTED"
}, {
  "contingencyType" : "OCO",
  "symbol" : "LTCBTC",
  "orderListId" : 31,
  "listOrderStatus" : "EXECUTING",
  "listClientOrderId" : "wuB13fmulKj3YjdqWEcsnp",
  "isIsolated" : false,
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
 * Margin Account Cancel all Open Orders on a Symbol (TRADE)
 * - Cancels all active orders on a symbol for margin account. - This includes OCO orders.  Weight(IP): 1 
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginOpenOrdersDELETE = function(symbol,timestamp,signature,isIsolated,recvWindow) {
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
 * Query Margin Account's Open Orders (USER_DATA)
 * - If the `symbol` is not sent, orders for all symbols will be returned in an array. - When all symbols are returned, the number of requests counted against the rate limiter is equal to the number of symbols currently trading on the exchange - If isIsolated =\"TRUE\", symbol must be sent.  Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginOpenOrdersGET = function(timestamp,signature,symbol,isIsolated,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cummulativeQuoteQty" : "0.00000000",
  "symbol" : "BNBBTC",
  "side" : "SELL",
  "executedQty" : "0.00000000",
  "orderId" : 213205622,
  "origQty" : "0.30000000",
  "clientOrderId" : "ZwfQzuDIGpceVhKW5DvCmO",
  "isIsolated" : true,
  "updateTime" : 1562133008725,
  "icebergQty" : "0.00000000",
  "type" : "LIMIT",
  "stopPrice" : "0.00000000",
  "price" : "0.00493630",
  "selfTradePreventionMode" : "NONE",
  "time" : 1562133008725,
  "timeInForce" : "GTC",
  "isWorking" : true,
  "status" : "NEW"
}, {
  "cummulativeQuoteQty" : "0.00000000",
  "symbol" : "BNBBTC",
  "side" : "SELL",
  "executedQty" : "0.00000000",
  "orderId" : 213205622,
  "origQty" : "0.30000000",
  "clientOrderId" : "ZwfQzuDIGpceVhKW5DvCmO",
  "isIsolated" : true,
  "updateTime" : 1562133008725,
  "icebergQty" : "0.00000000",
  "type" : "LIMIT",
  "stopPrice" : "0.00000000",
  "price" : "0.00493630",
  "selfTradePreventionMode" : "NONE",
  "time" : 1562133008725,
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
 * Margin Account Cancel Order (TRADE)
 * Cancel an active order for margin account.  Either `orderId` or `origClientOrderId` must be sent.  Weight(IP): 10
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * orderId Long Order id (optional)
 * origClientOrderId String Order id from client (optional)
 * newClientOrderId String Used to uniquely identify this cancel. Automatically generated by default (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns marginOrder
 **/
exports.sapiV1MarginOrderDELETE = function(symbol,timestamp,signature,isIsolated,orderId,origClientOrderId,newClientOrderId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symbol" : "LTCBTC",
  "cummulativeQuoteQty" : "8.00000000",
  "origClientOrderId" : "msXkySR3u5uYwpvRMFsi3u",
  "side" : "SELL",
  "executedQty" : "8.00000000",
  "orderId" : 28,
  "price" : "1.00000000",
  "origQty" : "10.00000000",
  "clientOrderId" : "6gCrw2kRUAF9CvJDGP16IP",
  "type" : "LIMIT",
  "timeInForce" : "GTC",
  "status" : "CANCELED"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Margin Account's Order (USER_DATA)
 * - Either `orderId` or `origClientOrderId` must be sent. - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.  Weight(IP): 10
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * orderId Long Order id (optional)
 * origClientOrderId String Order id from client (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns marginOrderDetail
 **/
exports.sapiV1MarginOrderGET = function(symbol,timestamp,signature,isIsolated,orderId,origClientOrderId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cummulativeQuoteQty" : "0.00000000",
  "symbol" : "BNBBTC",
  "side" : "SELL",
  "executedQty" : "0.00000000",
  "orderId" : 213205622,
  "origQty" : "0.30000000",
  "clientOrderId" : "ZwfQzuDIGpceVhKW5DvCmO",
  "isIsolated" : true,
  "updateTime" : 1562133008725,
  "icebergQty" : "0.00000000",
  "type" : "LIMIT",
  "stopPrice" : "0.00000000",
  "price" : "0.00493630",
  "selfTradePreventionMode" : "NONE",
  "time" : 1562133008725,
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
 * Margin Account Cancel OCO (TRADE)
 * Cancel an entire Order List for a margin account  - Canceling an individual leg will cancel the entire OCO - Either `orderListId` or `listClientOrderId` must be provided  Weight(UID): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * orderListId Long Order list id (optional)
 * listClientOrderId String A unique Id for the entire orderList (optional)
 * newClientOrderId String Used to uniquely identify this cancel. Automatically generated by default (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns marginOcoOrder
 **/
exports.sapiV1MarginOrderListDELETE = function(symbol,timestamp,signature,isIsolated,orderListId,listClientOrderId,newClientOrderId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contingencyType" : "OCO",
  "symbol" : "BNBUSDT",
  "orderListId" : 0,
  "listOrderStatus" : "ALL_DONE",
  "listClientOrderId" : "C3wyj4WVEktd7u9aVBRXcN",
  "isIsolated" : false,
  "orders" : [ "[{\"symbol\":\"BNBUSDT\",\"orderId\":2,\"clientOrderId\":\"pO9ufTiFGg3nw2fOdgeOXa\"},{\"symbol\":\"BNBUSDT\",\"orderId\":3,\"clientOrderId\":\"TXOvglzXuaubXAaENpaRCB\"}]", "[{\"symbol\":\"BNBUSDT\",\"orderId\":2,\"clientOrderId\":\"pO9ufTiFGg3nw2fOdgeOXa\"},{\"symbol\":\"BNBUSDT\",\"orderId\":3,\"clientOrderId\":\"TXOvglzXuaubXAaENpaRCB\"}]" ],
  "orderReports" : [ "[{\"symbol\":\"BNBUSDT\",\"origClientOrderId\":\"pO9ufTiFGg3nw2fOdgeOXa\",\"orderId\":2,\"orderListId\":0,\"clientOrderId\":\"unfWT8ig8i0uj6lPuYLez6\",\"price\":\"1.00000000\",\"origQty\":\"10.00000000\",\"executedQty\":\"0.00000000\",\"cummulativeQuoteQty\":\"0.00000000\",\"status\":\"CANCELED\",\"timeInForce\":\"GTC\",\"type\":\"STOP_LOSS_LIMIT\",\"side\":\"SELL\",\"stopPrice\":\"1.00000000\"},{\"symbol\":\"BNBUSDT\",\"origClientOrderId\":\"TXOvglzXuaubXAaENpaRCB\",\"orderId\":3,\"orderListId\":0,\"clientOrderId\":\"unfWT8ig8i0uj6lPuYLez6\",\"price\":\"3.00000000\",\"origQty\":\"10.00000000\",\"executedQty\":\"0.00000000\",\"cummulativeQuoteQty\":\"0.00000000\",\"status\":\"CANCELED\",\"timeInForce\":\"GTC\",\"type\":\"LIMIT_MAKER\",\"side\":\"SELL\"}]", "[{\"symbol\":\"BNBUSDT\",\"origClientOrderId\":\"pO9ufTiFGg3nw2fOdgeOXa\",\"orderId\":2,\"orderListId\":0,\"clientOrderId\":\"unfWT8ig8i0uj6lPuYLez6\",\"price\":\"1.00000000\",\"origQty\":\"10.00000000\",\"executedQty\":\"0.00000000\",\"cummulativeQuoteQty\":\"0.00000000\",\"status\":\"CANCELED\",\"timeInForce\":\"GTC\",\"type\":\"STOP_LOSS_LIMIT\",\"side\":\"SELL\",\"stopPrice\":\"1.00000000\"},{\"symbol\":\"BNBUSDT\",\"origClientOrderId\":\"TXOvglzXuaubXAaENpaRCB\",\"orderId\":3,\"orderListId\":0,\"clientOrderId\":\"unfWT8ig8i0uj6lPuYLez6\",\"price\":\"3.00000000\",\"origQty\":\"10.00000000\",\"executedQty\":\"0.00000000\",\"cummulativeQuoteQty\":\"0.00000000\",\"status\":\"CANCELED\",\"timeInForce\":\"GTC\",\"type\":\"LIMIT_MAKER\",\"side\":\"SELL\"}]" ],
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
 * Query Margin Account's OCO (USER_DATA)
 * Retrieves a specific OCO based on provided optional parameters  - Either `orderListId` or `origClientOrderId` must be provided  Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * symbol String Mandatory for isolated margin, not supported for cross margin (optional)
 * orderListId Long Order list id (optional)
 * origClientOrderId String Order id from client (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_29
 **/
exports.sapiV1MarginOrderListGET = function(timestamp,signature,isIsolated,symbol,orderListId,origClientOrderId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contingencyType" : "OCO",
  "symbol" : "LTCBTC",
  "orderListId" : 27,
  "listOrderStatus" : "EXECUTING",
  "listClientOrderId" : "h2USkA5YQpaXHPIrkd96xE",
  "isIsolated" : false,
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
 * Margin Account New OCO (TRADE)
 * Send in a new OCO for a margin account  - Price Restrictions:   - SELL: Limit Price > Last Price > Stop Price   - BUY: Limit Price < Last Price < Stop Price - Quantity Restrictions:   - Both legs must have the same quantity   - ICEBERG quantities however do not have to be the same. - Order Rate Limit   - OCO counts as 2 orders against the order rate limit.  Weight(UID): 6
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * side String 
 * quantity Double 
 * price Double Order price
 * stopPrice Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * listClientOrderId String A unique Id for the entire orderList (optional)
 * limitClientOrderId String A unique Id for the limit order (optional)
 * limitIcebergQty Double  (optional)
 * stopClientOrderId String A unique Id for the stop loss/stop loss limit leg (optional)
 * stopLimitPrice Double If provided, stopLimitTimeInForce is required. (optional)
 * stopIcebergQty Double  (optional)
 * stopLimitTimeInForce String  (optional)
 * newOrderRespType String Set the response JSON. (optional)
 * sideEffectType String Default `NO_SIDE_EFFECT` (optional)
 * selfTradePreventionMode String The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_28
 **/
exports.sapiV1MarginOrderOcoPOST = function(symbol,side,quantity,price,stopPrice,timestamp,signature,isIsolated,listClientOrderId,limitClientOrderId,limitIcebergQty,stopClientOrderId,stopLimitPrice,stopIcebergQty,stopLimitTimeInForce,newOrderRespType,sideEffectType,selfTradePreventionMode,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contingencyType" : "OCO",
  "marginBuyBorrowAmount" : "5",
  "symbol" : "LTCBTC",
  "orderListId" : 0,
  "listOrderStatus" : "EXECUTING",
  "listClientOrderId" : "JYVpp3F0f5CAG15DhtrqLp",
  "marginBuyBorrowAsset" : "BTC",
  "isIsolated" : false,
  "orders" : [ {
    "symbol" : "LTCBTC",
    "orderId" : 2,
    "clientOrderId" : "Kk7sqHb9J6mJWTMDVW7Vos"
  }, {
    "symbol" : "LTCBTC",
    "orderId" : 3,
    "clientOrderId" : "xTXKaGYd4bluPVp78IVRvl"
  } ],
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
    "stopPrice" : "0.960664"
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
    "side" : "BUY"
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
 * Margin Account New Order (TRADE)
 * Post a new order for margin account.  Weight(UID): 6
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * side String 
 * type String Order type
 * quantity Double 
 * autoRepayAtCancel Boolean 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * quoteOrderQty Double Quote quantity (optional)
 * price Double Order price (optional)
 * stopPrice Double Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. (optional)
 * newClientOrderId String Used to uniquely identify this cancel. Automatically generated by default (optional)
 * icebergQty Double Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. (optional)
 * newOrderRespType String Set the response JSON. (optional)
 * sideEffectType String Default `NO_SIDE_EFFECT` (optional)
 * timeInForce String Order time in force (optional)
 * selfTradePreventionMode String The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_24
 **/
exports.sapiV1MarginOrderPOST = function(symbol,side,type,quantity,autoRepayAtCancel,timestamp,signature,isIsolated,quoteOrderQty,price,stopPrice,newClientOrderId,icebergQty,newOrderRespType,sideEffectType,timeInForce,selfTradePreventionMode,recvWindow) {
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
 * Query Cross Margin Pair (MARKET_DATA)
 * Weight(IP): 10
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * returns inline_response_200_20
 **/
exports.sapiV1MarginPairGET = function(symbol) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symbol" : "BNBUSDT",
  "isSellAllowed" : true,
  "quote" : "USDT",
  "id" : 323355778339572400,
  "base" : "BTC",
  "isMarginTrade" : true,
  "isBuyAllowed" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Margin PriceIndex (MARKET_DATA)
 * Weight(IP): 10
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * returns inline_response_200_23
 **/
exports.sapiV1MarginPriceIndexGET = function(symbol) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symbol" : "BNBBTC",
  "calcTime" : 1562046418000,
  "price" : "0.00333930"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Current Margin Order Count Usage (TRADE)
 * Displays the user's current margin order count usage for all intervals.  Weight(IP): 20
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * symbol String isolated symbol, mandatory for isolated margin (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1MarginRateLimitOrderGET = function(timestamp,signature,isIsolated,symbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "intervalNum" : 10,
  "limit" : 10000,
  "count" : 0,
  "interval" : "SECOND",
  "rateLimitType" : "ORDERS"
}, {
  "intervalNum" : 10,
  "limit" : 10000,
  "count" : 0,
  "interval" : "SECOND",
  "rateLimitType" : "ORDERS"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Repay Record (USER_DATA)
 * - `txId` or `startTime` must be sent. `txId` takes precedence. - Response in descending order - If `isolatedSymbol` is not sent, crossed margin data will be returned - Set `archived` to `true` to query data from 6 months ago  Weight(IP): 10
 *
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isolatedSymbol String Isolated symbol (optional)
 * txId Long the tranId in  `POST /sapi/v1/margin/repay` (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * archived String Default: false. Set to true for archived data from 6 months ago (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_18
 **/
exports.sapiV1MarginRepayGET = function(asset,timestamp,signature,isolatedSymbol,txId,startTime,endTime,current,size,archived,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "principal" : "13.98133333",
    "isolatedSymbol" : "BNBUSDT",
    "amount" : "14.00000000",
    "interest" : "0.01866667",
    "txId" : 2970933056,
    "asset" : "BNB",
    "status" : "CONFIRMED",
    "timestamp" : 1563438204000
  }, {
    "principal" : "13.98133333",
    "isolatedSymbol" : "BNBUSDT",
    "amount" : "14.00000000",
    "interest" : "0.01866667",
    "txId" : 2970933056,
    "asset" : "BNB",
    "status" : "CONFIRMED",
    "timestamp" : 1563438204000
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
 * Margin Account Repay (MARGIN)
 * Repay loan for margin account.  - If \"isIsolated\" = \"TRUE\", \"symbol\" must be sent - \"isIsolated\" = \"FALSE\" for crossed margin repay  Weight(IP): 3000
 *
 * asset String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * isIsolated String * `TRUE` - For isolated margin * `FALSE` - Default, not for isolated margin (optional)
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns transaction
 **/
exports.sapiV1MarginRepayPOST = function(asset,amount,timestamp,signature,isIsolated,symbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 345196462
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Summary of Margin account (USER_DATA)
 * Get personal margin level information  Weight(IP): 10
 *
 * email String Email Address
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_33
 **/
exports.sapiV1MarginTradeCoeffGET = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "normalBar" : "1.5",
  "forceLiquidationBar" : "1.1",
  "marginCallBar" : "1.3"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Cross Margin Transfer History (USER_DATA)
 * - Response in descending order - Returns data for last 7 days by default - Set `archived` to `true` to query data from 6 months ago  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * type String Transfer Type (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * archived String Default: false. Set to true for archived data from 6 months ago (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_16
 **/
exports.sapiV1MarginTransferGET = function(timestamp,signature,asset,type,startTime,endTime,current,size,archived,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rows" : [ {
    "amount" : "0.10000000",
    "asset" : "BNB",
    "status" : "CONFIRMED",
    "timestamp" : 1566898617,
    "txId" : 5240372201,
    "type" : "ROLL_IN"
  } ],
  "total" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cross Margin Account Transfer (MARGIN)
 * Execute transfer between spot account and cross margin account.  Weight(IP): 600
 *
 * asset String 
 * amount Double 
 * type Integer * `1` - transfer from main account to margin account * `2` - transfer from margin account to main account
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns transaction
 **/
exports.sapiV1MarginTransferPOST = function(asset,amount,type,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 345196462
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

