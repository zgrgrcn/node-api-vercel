'use strict';


/**
 * Fiat Deposit/Withdraw History (USER_DATA)
 * - If beginTime and endTime are not sent, the recent 30-day data will be returned.  Weight(UID): 90000
 *
 * transactionType Integer * `0` - deposit * `1` - withdraw
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * beginTime Long  (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * rows Integer Default 100, max 500 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_119
 **/
exports.sapiV1FiatOrdersGET = function(transactionType,timestamp,signature,beginTime,endTime,page,rows,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "code" : "000000",
  "data" : [ {
    "indicatedAmount" : "10.00",
    "amount" : "10.00",
    "orderNo" : "7d76d611-0568-4f43-afb6-24cac7767365",
    "method" : "BankAccount",
    "totalFee" : "0.00",
    "createTime" : 1626144956000,
    "fiatCurrency" : "BRL",
    "updateTime" : 1626400907000,
    "status" : "Expired"
  }, {
    "indicatedAmount" : "10.00",
    "amount" : "10.00",
    "orderNo" : "7d76d611-0568-4f43-afb6-24cac7767365",
    "method" : "BankAccount",
    "totalFee" : "0.00",
    "createTime" : 1626144956000,
    "fiatCurrency" : "BRL",
    "updateTime" : 1626400907000,
    "status" : "Expired"
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


/**
 * Fiat Payments History (USER_DATA)
 * - If beginTime and endTime are not sent, the recent 30-day data will be returned.  Weight(IP): 1
 *
 * transactionType Integer * `0` - deposit * `1` - withdraw
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * beginTime Long  (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * rows Integer Default 100, max 500 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_120
 **/
exports.sapiV1FiatPaymentsGET = function(transactionType,timestamp,signature,beginTime,endTime,page,rows,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "code" : "000000",
  "data" : [ {
    "orderNo" : "353fca443f06466db0c4dc89f94f027a",
    "totalFee" : "0.2",
    "createTime" : 1624529919000,
    "fiatCurrency" : "EUR",
    "price" : "4.437472",
    "sourceAmount" : "20.00",
    "updateTime" : 1624529919000,
    "obtainAmount" : "4.462",
    "cryptoCurrency" : "LUNA",
    "status" : "Failed"
  }, {
    "orderNo" : "353fca443f06466db0c4dc89f94f027a",
    "totalFee" : "0.2",
    "createTime" : 1624529919000,
    "fiatCurrency" : "EUR",
    "price" : "4.437472",
    "sourceAmount" : "20.00",
    "updateTime" : 1624529919000,
    "obtainAmount" : "4.462",
    "cryptoCurrency" : "LUNA",
    "status" : "Failed"
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

