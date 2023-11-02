'use strict';


/**
 * Accept Quote (TRADE)
 * Accept the offered quote by quote ID.  Weight(UID): 500
 *
 * quoteId String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_217
 **/
exports.sapiV1ConvertAcceptQuotePOST = function(quoteId,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "orderId" : "933256278426274426",
  "createTime" : 1623381330472,
  "orderStatus" : "PROCESS"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query order quantity precision per asset (USER_DATA)
 * Query for supported asset precision information  Weight(IP): 100
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1ConvertAssetInfoGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "asset" : "BTC",
  "fraction" : 8
}, {
  "asset" : "BTC",
  "fraction" : 8
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List All Convert Pairs
 * Query for all convertible token pairs and the tokensâ€™ respective upper/lower limits  Weight(IP): 3000
 *
 * fromAsset String User spends coin (optional)
 * toAsset String User receives coin (optional)
 * returns List
 **/
exports.sapiV1ConvertExchangeInfoGET = function(fromAsset,toAsset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "toAssetMinAmount" : "20",
  "toAsset" : "USDT",
  "fromAssetMaxAmount" : "50",
  "fromAssetMinAmount" : "0.0004",
  "fromAsset" : "BTC",
  "toAssetMaxAmount" : "2500000"
}, {
  "toAssetMinAmount" : "20",
  "toAsset" : "USDT",
  "fromAssetMaxAmount" : "50",
  "fromAssetMinAmount" : "0.0004",
  "fromAsset" : "BTC",
  "toAssetMaxAmount" : "2500000"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send quote request (USER_DATA)
 * Request a quote for the requested token pairs  Weight(UID): 200
 *
 * fromAsset String 
 * toAsset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * fromAmount Float When specified, it is the amount you will be debited after the conversion (optional)
 * toAmount Float When specified, it is the amount you will be debited after the conversion (optional)
 * validTime String 10s, 30s, 1m, 2m, default 10s (optional)
 * walletType String SPOT or FUNDING. Default is SPOT (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_216
 **/
exports.sapiV1ConvertGetQuotePOST = function(fromAsset,toAsset,timestamp,signature,fromAmount,toAmount,validTime,walletType,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "validTimestamp" : 1623319461670,
  "inverseRatio" : "0.0000262",
  "fromAmount" : "0.1",
  "toAmount" : "3816.37",
  "quoteId" : "12415572564",
  "ratio" : "38163.7"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Order status (USER_DATA)
 * Query order status by order ID.  Weight(UID): 100
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId String  (optional)
 * quoteId String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_218
 **/
exports.sapiV1ConvertOrderStatusGET = function(timestamp,signature,orderId,quoteId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "inverseRatio" : "0.00002721",
  "toAsset" : "USDT",
  "orderId" : 933256278426274400,
  "createTime" : 1623381330472,
  "fromAmount" : "0.00054414",
  "toAmount" : "20",
  "orderStatus" : "SUCCESS",
  "fromAsset" : "BTC",
  "ratio" : "36755"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Convert Trade History (USER_DATA)
 * - The max interval between startTime and endTime is 30 days.  Weight(UID): 3000
 *
 * startTime Long UTC timestamp in ms
 * endTime Long UTC timestamp in ms
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * limit Integer default 100, max 1000 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_219
 **/
exports.sapiV1ConvertTradeFlowGET = function(startTime,endTime,timestamp,signature,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "moreData" : false,
  "limit" : 100,
  "startTime" : 1623824139000,
  "endTime" : 1626416139000,
  "list" : [ {
    "inverseRatio" : "324.99",
    "toAsset" : "BNB",
    "orderId" : 940708407462087200,
    "createTime" : 1624248872184,
    "fromAmount" : "20",
    "toAmount" : "0.06154036",
    "orderStatus" : "SUCCESS",
    "quoteId" : "f3b91c525b2644c7bc1e1cd31b6e1aa6",
    "fromAsset" : "USDT",
    "ratio" : "0.00307702"
  }, {
    "inverseRatio" : "324.99",
    "toAsset" : "BNB",
    "orderId" : 940708407462087200,
    "createTime" : 1624248872184,
    "fromAmount" : "20",
    "toAmount" : "0.06154036",
    "orderStatus" : "SUCCESS",
    "quoteId" : "f3b91c525b2644c7bc1e1cd31b6e1aa6",
    "fromAsset" : "USDT",
    "ratio" : "0.00307702"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

