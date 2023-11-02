'use strict';


/**
 * Get NFT Deposit History(USER_DATA)
 * - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned.  Weight(UID): 3000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 50, Max 50 (optional)
 * page Integer Default 1 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_222
 **/
exports.sapiV1NftHistoryDepositGET = function(timestamp,signature,startTime,endTime,limit,page,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "list" : [ {
    "contractAdrress" : "0xe507c961ee127d4439977a61af39c34eafee0dc6",
    "tokenId" : "10014",
    "txID" : 0,
    "network" : "ETH",
    "timestamp" : 1629986047000
  }, {
    "contractAdrress" : "0xe507c961ee127d4439977a61af39c34eafee0dc6",
    "tokenId" : "10014",
    "txID" : 0,
    "network" : "ETH",
    "timestamp" : 1629986047000
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
 * Get NFT Transaction History (USER_DATA)
 * - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned.  Weight(UID): 3000
 *
 * orderType Integer 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 50, Max 50 (optional)
 * page Integer Default 1 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_221
 **/
exports.sapiV1NftHistoryTransactionsGET = function(orderType,timestamp,signature,startTime,endTime,limit,page,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "list" : [ {
    "tradeTime" : 1626941236000,
    "tradeAmount" : "19.60000000",
    "orderNo" : "1_470502070600699904",
    "tokens" : [ {
      "tokenId" : "216000000496",
      "contractAddress" : "MYSTERY_BOX0000087",
      "network" : "BSC"
    }, {
      "tokenId" : "216000000496",
      "contractAddress" : "MYSTERY_BOX0000087",
      "network" : "BSC"
    } ],
    "tradeCurrency" : "BNB"
  }, {
    "tradeTime" : 1626941236000,
    "tradeAmount" : "19.60000000",
    "orderNo" : "1_470502070600699904",
    "tokens" : [ {
      "tokenId" : "216000000496",
      "contractAddress" : "MYSTERY_BOX0000087",
      "network" : "BSC"
    }, {
      "tokenId" : "216000000496",
      "contractAddress" : "MYSTERY_BOX0000087",
      "network" : "BSC"
    } ],
    "tradeCurrency" : "BNB"
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
 * Get NFT Withdraw History (USER_DATA)
 * - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned.  Weight(UID): 3000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 50, Max 50 (optional)
 * page Integer Default 1 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_223
 **/
exports.sapiV1NftHistoryWithdrawGET = function(timestamp,signature,startTime,endTime,limit,page,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 178,
  "list" : [ {
    "contractAdrress" : "0xe507c961ee127d4439977a61af39c34eafee0dc6",
    "tokenId" : "1000001247",
    "fee" : 0.1,
    "txID" : "0x2be5eed31d787fdb4880bc631c8e76bdfb6150e137f5cf1732e0416ea206f57f",
    "feeAsset" : "ETH",
    "network" : "ETH",
    "timestamp" : 1633674433000
  }, {
    "contractAdrress" : "0xe507c961ee127d4439977a61af39c34eafee0dc6",
    "tokenId" : "1000001247",
    "fee" : 0.1,
    "txID" : "0x2be5eed31d787fdb4880bc631c8e76bdfb6150e137f5cf1732e0416ea206f57f",
    "feeAsset" : "ETH",
    "network" : "ETH",
    "timestamp" : 1633674433000
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
 * Get NFT Asset (USER_DATA)
 * Weight(UID): 3000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * limit Integer Default 50, Max 50 (optional)
 * page Integer Default 1 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_224
 **/
exports.sapiV1NftUserGetAssetGET = function(timestamp,signature,limit,page,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 347,
  "list" : [ {
    "tokenId" : "100900000017",
    "contractAddress" : "REGULAR11234567891779",
    "network" : "BSC"
  }, {
    "tokenId" : "100900000017",
    "contractAddress" : "REGULAR11234567891779",
    "network" : "BSC"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

