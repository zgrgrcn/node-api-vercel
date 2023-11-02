'use strict';


/**
 * Get C2C Trade History (USER_DATA)
 * - If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned. - The max interval between startTimestamp and endTimestamp is 30 days.  Weight(IP): 1
 *
 * tradeType String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTimestamp Long UTC timestamp in ms (optional)
 * endTimestamp Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * rows Integer default 100, max 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_183
 **/
exports.sapiV1C2cOrderMatchListUserOrderHistoryGET = function(tradeType,timestamp,signature,startTimestamp,endTimestamp,page,rows,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "code" : "000000",
  "data" : [ {
    "unitPrice" : "6.68",
    "amount" : "5000.00000000",
    "orderNumber" : "20219644646554779648",
    "counterPartNickName" : "ab***",
    "totalPrice" : "33400.00000000",
    "orderStatus" : "COMPLETED",
    "advertisementRole" : "TAKER",
    "advNo" : "11218246497340923904",
    "createTime" : 1619361369000,
    "fiat" : "CNY",
    "fiatSymbol" : "ï¿¥",
    "commission" : "0",
    "asset" : "BUSD",
    "tradeType" : "SELL"
  }, {
    "unitPrice" : "6.68",
    "amount" : "5000.00000000",
    "orderNumber" : "20219644646554779648",
    "counterPartNickName" : "ab***",
    "totalPrice" : "33400.00000000",
    "orderStatus" : "COMPLETED",
    "advertisementRole" : "TAKER",
    "advNo" : "11218246497340923904",
    "createTime" : 1619361369000,
    "fiat" : "CNY",
    "fiatSymbol" : "ï¿¥",
    "commission" : "0",
    "asset" : "BUSD",
    "tradeType" : "SELL"
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

