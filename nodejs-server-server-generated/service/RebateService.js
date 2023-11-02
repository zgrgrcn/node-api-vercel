'use strict';


/**
 * Get Spot Rebate History Records (USER_DATA)
 * - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned. - The earliest startTime is supported on June 10, 2020  Weight(UID): 3000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer default 1 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_220
 **/
exports.sapiV1RebateTaxQueryGET = function(timestamp,signature,startTime,endTime,page,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "000000000",
  "data" : {
    "totalRecords" : 2,
    "data" : [ {
      "amount" : "0.0001126",
      "updateTime" : 1637651320000,
      "asset" : "USDT",
      "type" : 1
    }, {
      "amount" : "0.0001126",
      "updateTime" : 1637651320000,
      "asset" : "USDT",
      "type" : 1
    } ],
    "page" : 1,
    "totalPageNum" : 1
  },
  "type" : "GENERAL",
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

