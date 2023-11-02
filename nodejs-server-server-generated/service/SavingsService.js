'use strict';


/**
 * Purchase Fixed/Activity Project (USER_DATA)
 * Weight(IP): 1
 *
 * projectId String 
 * lot String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_122
 **/
exports.sapiV1LendingCustomizedFixedPurchasePOST = function(projectId,lot,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "purchaseId" : "18356"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Change Fixed/Activity Position to Daily Position (USER_DATA)
 * - PositionId is mandatory parameter for fixed position.  Weight(IP): 1
 *
 * projectId String 
 * lot String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * positionId String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_124
 **/
exports.sapiV1LendingPositionChangedPOST = function(projectId,lot,timestamp,signature,positionId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "dailyPurchaseId" : 862290,
  "success" : true,
  "time" : 1577233578000
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Fixed/Activity Project List(USER_DATA)
 * Weight(IP): 1
 *
 * type String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * status String Default `ALL` (optional)
 * isSortAsc Boolean default \"true\" (optional)
 * sortBy String Default `START_TIME` (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1LendingProjectListGET = function(type,timestamp,signature,asset,status,isSortAsc,sortBy,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "interestRate" : "0.05510000",
  "lotSize" : "100.00000000",
  "withAreaLimitation" : true,
  "displayPriority" : 1,
  "interestPerLot" : "1.35810000",
  "type" : "CUSTOMIZED_FIXED",
  "duration" : 90,
  "lotsUpLimit" : 80000,
  "lotsPurchased" : 74155,
  "lotsLowLimit" : 1,
  "maxLotsPerUser" : 2000,
  "needKyc" : true,
  "asset" : "USDT",
  "projectName" : "USDT",
  "projectId" : "CUSDT90DAYSS001",
  "status" : "PURCHASING"
}, {
  "interestRate" : "0.05510000",
  "lotSize" : "100.00000000",
  "withAreaLimitation" : true,
  "displayPriority" : 1,
  "interestPerLot" : "1.35810000",
  "type" : "CUSTOMIZED_FIXED",
  "duration" : 90,
  "lotsUpLimit" : 80000,
  "lotsPurchased" : 74155,
  "lotsLowLimit" : 1,
  "maxLotsPerUser" : 2000,
  "needKyc" : true,
  "asset" : "USDT",
  "projectName" : "USDT",
  "projectId" : "CUSDT90DAYSS001",
  "status" : "PURCHASING"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Fixed/Activity Project Position (USER_DATA)
 * Weight(IP): 1
 *
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * projectId String  (optional)
 * status String Default `ALL` (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1LendingProjectPositionListGET = function(asset,timestamp,signature,projectId,status,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "interestRate" : "0.05201250",
  "canTransfer" : true,
  "type" : "CUSTOMIZED_FIXED",
  "createTimestamp" : 1587010770000,
  "duration" : 14,
  "lot" : 1,
  "principal" : "100.00000000",
  "redeemDate" : "2020-05-01T00:00:00.000+00:00",
  "positionId" : 51724,
  "interest" : "0.19950000",
  "purchaseTime" : 1587010771000,
  "startTime" : 1587081600000,
  "endTime" : 1588291200000,
  "asset" : "USDT",
  "projectName" : "USDT",
  "projectId" : "CUSDT14DAYSS001",
  "status" : "HOLDING"
}, {
  "interestRate" : "0.05201250",
  "canTransfer" : true,
  "type" : "CUSTOMIZED_FIXED",
  "createTimestamp" : 1587010770000,
  "duration" : 14,
  "lot" : 1,
  "principal" : "100.00000000",
  "redeemDate" : "2020-05-01T00:00:00.000+00:00",
  "positionId" : 51724,
  "interest" : "0.19950000",
  "purchaseTime" : 1587010771000,
  "startTime" : 1587081600000,
  "endTime" : 1588291200000,
  "asset" : "USDT",
  "projectName" : "USDT",
  "projectId" : "CUSDT14DAYSS001",
  "status" : "HOLDING"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

