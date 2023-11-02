'use strict';


/**
 * Get Pay Trade History (USER_DATA)
 * - If startTime and endTime are not sent, the recent 90 days' data will be returned. - The max interval between startTime and endTime is 90 days. - Support for querying orders within the last 18 months.  Weight(UID): 3000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer default 100, max 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_213
 **/
exports.sapiV1PayTransactionsGET = function(timestamp,signature,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "000000",
  "data" : [ {
    "walletTypes" : [ 0, 0 ],
    "orderType" : "C2C",
    "amount" : "23.72469206",
    "payerInfo" : {
      "accountId" : "67736251",
      "name" : "Jack",
      "type" : "USER",
      "binanceId" : "12345678"
    },
    "walletType" : 1,
    "fundsDetail" : [ "[{\"currency\":\"USDT\",\"amount\":\"1.2\"},{\"currency\":\"ETH\",\"amount\":\"0.0001\"}]", "[{\"currency\":\"USDT\",\"amount\":\"1.2\"},{\"currency\":\"ETH\",\"amount\":\"0.0001\"}]" ],
    "receiverInfo" : {
      "extend" : [ {
        "institutionName" : "institutionName",
        "digitalWalletId" : "digitalWalletId",
        "cardNumber" : "cardNumber"
      }, {
        "institutionName" : "institutionName",
        "digitalWalletId" : "digitalWalletId",
        "cardNumber" : "cardNumber"
      } ],
      "accountId" : "21326891",
      "mobileCode" : "US",
      "phoneNumber" : "8057651210",
      "countryCode" : "1",
      "name" : "Alan",
      "type" : "MERCHANT",
      "email" : "alan@test.com",
      "binanceId" : "34355667"
    },
    "currency" : "BNB",
    "transactionTime" : 1610090460133,
    "transactionId" : "M_P_71505104267788288"
  }, {
    "walletTypes" : [ 0, 0 ],
    "orderType" : "C2C",
    "amount" : "23.72469206",
    "payerInfo" : {
      "accountId" : "67736251",
      "name" : "Jack",
      "type" : "USER",
      "binanceId" : "12345678"
    },
    "walletType" : 1,
    "fundsDetail" : [ "[{\"currency\":\"USDT\",\"amount\":\"1.2\"},{\"currency\":\"ETH\",\"amount\":\"0.0001\"}]", "[{\"currency\":\"USDT\",\"amount\":\"1.2\"},{\"currency\":\"ETH\",\"amount\":\"0.0001\"}]" ],
    "receiverInfo" : {
      "extend" : [ {
        "institutionName" : "institutionName",
        "digitalWalletId" : "digitalWalletId",
        "cardNumber" : "cardNumber"
      }, {
        "institutionName" : "institutionName",
        "digitalWalletId" : "digitalWalletId",
        "cardNumber" : "cardNumber"
      } ],
      "accountId" : "21326891",
      "mobileCode" : "US",
      "phoneNumber" : "8057651210",
      "countryCode" : "1",
      "name" : "Alan",
      "type" : "MERCHANT",
      "email" : "alan@test.com",
      "binanceId" : "34355667"
    },
    "currency" : "BNB",
    "transactionTime" : 1610090460133,
    "transactionId" : "M_P_71505104267788288"
  } ],
  "success" : true,
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

