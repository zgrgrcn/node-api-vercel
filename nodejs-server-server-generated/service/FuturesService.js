'use strict';


/**
 * Get Future TickLevel Orderbook Historical Data Download Link (USER_DATA)
 * Weight(IP): 1
 *
 * symbol String 
 * dataType String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_145
 **/
exports.sapiV1FuturesHistDataLinkGET = function(symbol,dataType,timestamp,signature,startTime,endTime,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "day" : "2023-06-30",
    "url" : "https://bin-prod-user-rebate-bucket.s3.ap-northeast-1.amazonaws.com/xxx"
  }, {
    "day" : "2023-06-30",
    "url" : "https://bin-prod-user-rebate-bucket.s3.ap-northeast-1.amazonaws.com/xxx"
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
 * Get Future Account Transaction History List (USER_DATA)
 * Weight(IP): 10
 *
 * asset String 
 * startTime Long UTC timestamp in ms
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_143
 **/
exports.sapiV1FuturesTransferGET = function(asset,startTime,timestamp,signature,endTime,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "tranId" : 100000001,
    "amount" : "40.84624400",
    "asset" : "USDT",
    "type" : "1",
    "timestamp" : 1555056425000,
    "status" : "CONFIRMED"
  }, {
    "tranId" : 100000001,
    "amount" : "40.84624400",
    "asset" : "USDT",
    "type" : "1",
    "timestamp" : 1555056425000,
    "status" : "CONFIRMED"
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
 * New Future Account Transfer (USER_DATA)
 * Execute transfer between spot account and futures account.  Weight(IP): 1
 *
 * asset String 
 * amount Double 
 * type Long 1: transfer from spot account to USDT-â“‚ futures account. 2: transfer from USDT-â“‚ futures account to spot account. 3: transfer from spot account to COIN-â“‚ futures account. 4: transfer from COIN-â“‚ futures account to spot account.
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_144
 **/
exports.sapiV1FuturesTransferPOST = function(asset,amount,type,timestamp,signature,recvWindow) {
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

