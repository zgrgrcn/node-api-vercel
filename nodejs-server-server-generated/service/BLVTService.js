'use strict';


/**
 * Redeem BLVT (USER_DATA)
 * Weight(IP): 1
 *
 * tokenName String BTCDOWN, BTCUP
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_167
 **/
exports.sapiV1BlvtRedeemPOST = function(tokenName,amount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "10.05022099",
  "redeemAmount" : "0.95590905",
  "tokenName" : "LINKUP",
  "id" : 123,
  "status" : "S",
  "timestamp" : 1600250279614
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Redemption Record (USER_DATA)
 * - Only the data of the latest 90 days is available  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * tokenName String BTCDOWN, BTCUP (optional)
 * id Long  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer default 1000, max 1000 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1BlvtRedeemRecordGET = function(timestamp,signature,tokenName,id,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : "0.54216292",
  "nav" : "18.36345064",
  "fee" : "0.00995598",
  "tokenName" : "LINKUP",
  "id" : 1,
  "netProceed" : "9.94602604",
  "timestamp" : 1599128003050
}, {
  "amount" : "0.54216292",
  "nav" : "18.36345064",
  "fee" : "0.00995598",
  "tokenName" : "LINKUP",
  "id" : 1,
  "netProceed" : "9.94602604",
  "timestamp" : 1599128003050
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Subscribe BLVT (USER_DATA)
 * Weight(IP): 1
 *
 * tokenName String BTCDOWN, BTCUP
 * cost Double Spot balance
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_165
 **/
exports.sapiV1BlvtSubscribePOST = function(tokenName,cost,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "0.9559090500",
  "cost" : "9.99999995",
  "tokenName" : "LINKUP",
  "id" : 123,
  "status" : "S",
  "timestamp" : 1600249972899
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Subscription Record (USER_DATA)
 * - Only the data of the latest 90 days is available  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * tokenName String BTCDOWN, BTCUP (optional)
 * id Long  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_166
 **/
exports.sapiV1BlvtSubscribeRecordGET = function(timestamp,signature,tokenName,id,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "0.54216292",
  "nav" : "18.42621386",
  "totalCharge" : "9.99999991",
  "fee" : "0.00999000",
  "tokenName" : "LINKUP",
  "id" : 1,
  "timestamp" : 1599127217916
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * BLVT Info (MARKET_DATA)
 * Weight(IP): 1
 *
 * tokenName String BTCDOWN, BTCUP (optional)
 * returns List
 **/
exports.sapiV1BlvtTokenInfoGET = function(tokenName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "basket" : "-821.474 BTCUSDT Futures",
  "nav" : "4.79",
  "redeemFeePct" : "0.0010",
  "realLeverage" : "-2.316",
  "tokenName" : "BTCDOWN",
  "description" : "3X Short Bitcoin Token",
  "underlying" : "BTC",
  "dailyManagementFee" : "0.0001",
  "dailyRedeemLimit" : "1000000.00",
  "purchaseFeePct" : "0.0010",
  "tokenIssued" : "717953.95",
  "dailyPurchaseLimit" : "100000.00",
  "currentBaskets" : [ {
    "symbol" : "BTCUSDT",
    "amount" : "-1183.984",
    "notionalValue" : "-22871089.96704"
  }, {
    "symbol" : "BTCUSDT",
    "amount" : "-1183.984",
    "notionalValue" : "-22871089.96704"
  } ],
  "fundingRate" : "0.001020",
  "timestamp" : 1583127900000
}, {
  "basket" : "-821.474 BTCUSDT Futures",
  "nav" : "4.79",
  "redeemFeePct" : "0.0010",
  "realLeverage" : "-2.316",
  "tokenName" : "BTCDOWN",
  "description" : "3X Short Bitcoin Token",
  "underlying" : "BTC",
  "dailyManagementFee" : "0.0001",
  "dailyRedeemLimit" : "1000000.00",
  "purchaseFeePct" : "0.0010",
  "tokenIssued" : "717953.95",
  "dailyPurchaseLimit" : "100000.00",
  "currentBaskets" : [ {
    "symbol" : "BTCUSDT",
    "amount" : "-1183.984",
    "notionalValue" : "-22871089.96704"
  }, {
    "symbol" : "BTCUSDT",
    "amount" : "-1183.984",
    "notionalValue" : "-22871089.96704"
  } ],
  "fundingRate" : "0.001020",
  "timestamp" : 1583127900000
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * BLVT User Limit Info (USER_DATA)
 * Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * tokenName String BTCDOWN, BTCUP (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1BlvtUserLimitGET = function(timestamp,signature,tokenName,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "userDailyTotalRedeemLimit" : "1000",
  "tokenName" : "LINKUP",
  "userDailyTotalPurchaseLimit" : "1000"
}, {
  "userDailyTotalRedeemLimit" : "1000",
  "tokenName" : "LINKUP",
  "userDailyTotalPurchaseLimit" : "1000"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

