'use strict';


/**
 * Query all source asset and target asset (USER_DATA)
 * Query all source assets and target assets  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_232
 **/
exports.sapiV1LendingAuto_investAllAssetGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "targetAssets" : [ "[\"BTC\",\"BNB\"]", "[\"BTC\",\"BNB\"]" ],
  "sourceAssets" : [ "[\"BTC\",\"BNB\"]", "[\"BTC\",\"BNB\"]" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query subscription transaction history
 * Query subscription transaction history of a plan  Weight(IP): 1
 *
 * planType String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * planId Long  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * targetAsset BigDecimal  (optional)
 * size Integer Default:10 Max:100 (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1LendingAuto_investHistoryListGET = function(planType,timestamp,signature,planId,startTime,endTime,targetAsset,size,current,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "targetAssetAmount" : "297.12345",
  "planType" : "SINGLE",
  "transactionDateTime" : 1648378800000,
  "transactionStatus" : "SUCCESS",
  "targetAsset" : "BTC",
  "failedType" : "INSUFFICIENT_BALANCE",
  "executionType" : "RECURRING",
  "planName" : "BTC",
  "transactionFee" : "0.002",
  "transactionFeeUnit" : "BUSD",
  "executionPrice" : "2342",
  "subscriptionCycle" : "WEEKLY",
  "sourceAsset" : "BUSD",
  "planId" : 1234,
  "flexibleUsed" : "false",
  "id" : 12345,
  "sourceAssetAmount" : "297.12345",
  "sourceWallet" : "SPOT_WALLET"
}, {
  "targetAssetAmount" : "297.12345",
  "planType" : "SINGLE",
  "transactionDateTime" : 1648378800000,
  "transactionStatus" : "SUCCESS",
  "targetAsset" : "BTC",
  "failedType" : "INSUFFICIENT_BALANCE",
  "executionType" : "RECURRING",
  "planName" : "BTC",
  "transactionFee" : "0.002",
  "transactionFeeUnit" : "BUSD",
  "executionPrice" : "2342",
  "subscriptionCycle" : "WEEKLY",
  "sourceAsset" : "BUSD",
  "planId" : 1234,
  "flexibleUsed" : "false",
  "id" : 12345,
  "sourceAssetAmount" : "297.12345",
  "sourceWallet" : "SPOT_WALLET"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Index Details(USER_DATA)
 * Query index details  Weight(IP): 1
 *
 * indexId Long 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_239
 **/
exports.sapiV1LendingAuto_investIndexInfoGET = function(indexId,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "indexName" : "BINANCE TOP 10 EW",
  "indexId" : 12345,
  "assetAllocation" : [ {
    "allocation" : "10",
    "targetAsset" : "ADA"
  }, {
    "allocation" : "10",
    "targetAsset" : "ADA"
  } ],
  "status" : "RUNNING"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Index Linked Plan Position Details(USER_DATA)
 * Details on users Index-Linked plan position details  Weight(IP): 1
 *
 * indexId Long 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_240
 **/
exports.sapiV1LendingAuto_investIndexUser_summaryGET = function(indexId,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalInvestedInUSD" : "114.555",
  "currentInvestedInUSD" : "101.2",
  "pnlInUSD" : "101.2",
  "indexId" : 12345,
  "details" : [ {
    "availableAmount" : "122.12345678",
    "totalInvestedInUSD" : "222.21",
    "currentInvestedInUSD" : "101.2",
    "redeemedAmount" : "122",
    "targetAsset" : "ADA",
    "pnlInUSD" : "109.2",
    "percentage" : "10",
    "assetValueInUSD" : "101",
    "purchasedAmount" : "122.2",
    "roi" : "0.2",
    "averagePriceInUSD" : "3.4"
  }, {
    "availableAmount" : "122.12345678",
    "totalInvestedInUSD" : "222.21",
    "currentInvestedInUSD" : "101.2",
    "redeemedAmount" : "122",
    "targetAsset" : "ADA",
    "pnlInUSD" : "109.2",
    "percentage" : "10",
    "assetValueInUSD" : "101",
    "purchasedAmount" : "122.2",
    "roi" : "0.2",
    "averagePriceInUSD" : "3.4"
  } ],
  "assetAllocation" : [ {
    "allocation" : "10",
    "targetAsset" : "ADA"
  }, {
    "allocation" : "10",
    "targetAsset" : "ADA"
  } ],
  "roi" : "1.023"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * One Time Transaction(TRADE)
 * One time transaction  Weight(IP): 1
 *
 * sourceType String 
 * subscriptionAmount Float 
 * sourceAsset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * requestId String  (optional)
 * flexibleAllowedToUse Boolean  (optional)
 * planId Long  (optional)
 * indexId Long  (optional)
 * details List  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_241
 **/
exports.sapiV1LendingAuto_investOne_offPOST = function(sourceType,subscriptionAmount,sourceAsset,timestamp,signature,requestId,flexibleAllowedToUse,planId,indexId,details,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "waitSecond" : 2,
  "transactionId" : 12345
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query One-Time Transaction Status (USER_DATA)
 * Transaction status for one-time transaction  Weight(IP): 1
 *
 * transactionId Long 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * requestId String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_242
 **/
exports.sapiV1LendingAuto_investOne_offStatusGET = function(transactionId,timestamp,signature,requestId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transactionId" : 12345,
  "status" : "SUCCESS"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Investment plan creation (USER_DATA)
 * Post an investment plan creation  Weight(IP): 1
 *
 * sourceType String 
 * planType String 
 * subscriptionAmount Float 
 * subscriptionCycle String 
 * subscriptionStartTime Integer 
 * sourceAsset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * requestId String  (optional)
 * indexId Long  (optional)
 * subscriptionStartDay Integer  (optional)
 * subscriptionStartWeekday String  (optional)
 * flexibleAllowedToUse Boolean  (optional)
 * details List  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_234
 **/
exports.sapiV1LendingAuto_investPlanAddPOST = function(sourceType,planType,subscriptionAmount,subscriptionCycle,subscriptionStartTime,sourceAsset,timestamp,signature,requestId,indexId,subscriptionStartDay,subscriptionStartWeekday,flexibleAllowedToUse,details,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "planId" : 12345,
  "nextExecutionDateTime" : 1648378800000
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Investment plan adjustment
 * Query Source Asset to be used for investment  Weight(IP): 1
 *
 * planId Integer 
 * subscriptionAmount Float 
 * subscriptionCycle String 
 * subscriptionStartTime Integer 
 * sourceAsset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * subscriptionStartDay Integer  (optional)
 * subscriptionStartWeekday String  (optional)
 * flexibleAllowedToUse Boolean  (optional)
 * details List  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_234
 **/
exports.sapiV1LendingAuto_investPlanEditPOST = function(planId,subscriptionAmount,subscriptionCycle,subscriptionStartTime,sourceAsset,timestamp,signature,subscriptionStartDay,subscriptionStartWeekday,flexibleAllowedToUse,details,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "planId" : 12345,
  "nextExecutionDateTime" : 1648378800000
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Change Plan Status
 * Change Plan Status  Weight(IP): 1
 *
 * planId Integer 
 * status String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_235
 **/
exports.sapiV1LendingAuto_investPlanEdit_statusPOST = function(planId,status,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "planId" : 12345,
  "nextExecutionDateTime" : 1648378800000,
  "status" : "ONGOING"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query holding details of the plan
 * Query holding details of the plan  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * planId Long  (optional)
 * requestId String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_237
 **/
exports.sapiV1LendingAuto_investPlanIdPOST = function(timestamp,signature,planId,requestId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "planValueInBTC" : "0.1",
  "pnlInUSD" : "120",
  "roi" : "2.3",
  "plan" : [ {
    "planType" : "SINGLE",
    "targetAsset" : "BTC",
    "pnlInUSD" : "101.2",
    "nextExecutionDateTime" : 1648378800000,
    "roi" : "1.02",
    "editAllowed" : "true",
    "totalInvestedInUSD" : "4.555",
    "flexibleAllowedToUse" : "false",
    "sourceAsset" : "BUSD",
    "planId" : 12345,
    "details" : [ {
      "purchasedAmountUnit" : "ADA",
      "redeemedAmoutUnit" : "ADA",
      "targetAsset" : "ADA",
      "pnlInUSD" : "109.2",
      "roi" : "0.1",
      "availableAmount" : "122.12345678",
      "availableAmountUnit" : "ADA",
      "totalInvestedInUSD" : "222.21",
      "percentage" : "50",
      "redeemedAmout" : "122.12345678",
      "assetValueInUSD" : "101.2",
      "purchasedAmount" : "122.12345678",
      "assetStatus" : "ACTIVE",
      "averagePriceInUSD" : "3.4"
    }, {
      "purchasedAmountUnit" : "ADA",
      "redeemedAmoutUnit" : "ADA",
      "targetAsset" : "ADA",
      "pnlInUSD" : "109.2",
      "roi" : "0.1",
      "availableAmount" : "122.12345678",
      "availableAmountUnit" : "ADA",
      "totalInvestedInUSD" : "222.21",
      "percentage" : "50",
      "redeemedAmout" : "122.12345678",
      "assetValueInUSD" : "101.2",
      "purchasedAmount" : "122.12345678",
      "assetStatus" : "ACTIVE",
      "averagePriceInUSD" : "3.4"
    } ],
    "firstExecutionDateTime" : 1648378800000,
    "creationDateTime" : 1648378800000,
    "status" : "ONGOING",
    "planValueInUSD" : "101.2"
  }, {
    "planType" : "SINGLE",
    "targetAsset" : "BTC",
    "pnlInUSD" : "101.2",
    "nextExecutionDateTime" : 1648378800000,
    "roi" : "1.02",
    "editAllowed" : "true",
    "totalInvestedInUSD" : "4.555",
    "flexibleAllowedToUse" : "false",
    "sourceAsset" : "BUSD",
    "planId" : 12345,
    "details" : [ {
      "purchasedAmountUnit" : "ADA",
      "redeemedAmoutUnit" : "ADA",
      "targetAsset" : "ADA",
      "pnlInUSD" : "109.2",
      "roi" : "0.1",
      "availableAmount" : "122.12345678",
      "availableAmountUnit" : "ADA",
      "totalInvestedInUSD" : "222.21",
      "percentage" : "50",
      "redeemedAmout" : "122.12345678",
      "assetValueInUSD" : "101.2",
      "purchasedAmount" : "122.12345678",
      "assetStatus" : "ACTIVE",
      "averagePriceInUSD" : "3.4"
    }, {
      "purchasedAmountUnit" : "ADA",
      "redeemedAmoutUnit" : "ADA",
      "targetAsset" : "ADA",
      "pnlInUSD" : "109.2",
      "roi" : "0.1",
      "availableAmount" : "122.12345678",
      "availableAmountUnit" : "ADA",
      "totalInvestedInUSD" : "222.21",
      "percentage" : "50",
      "redeemedAmout" : "122.12345678",
      "assetValueInUSD" : "101.2",
      "purchasedAmount" : "122.12345678",
      "assetStatus" : "ACTIVE",
      "averagePriceInUSD" : "3.4"
    } ],
    "firstExecutionDateTime" : 1648378800000,
    "creationDateTime" : 1648378800000,
    "status" : "ONGOING",
    "planValueInUSD" : "101.2"
  } ],
  "planValueInUSD" : "123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of plans
 * Query plan lists  Weight(IP): 1
 *
 * planType String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_236
 **/
exports.sapiV1LendingAuto_investPlanListGET = function(planType,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "planValueInBTC" : "0.1",
  "pnlInUSD" : "120",
  "roi" : "2.3",
  "plan" : [ {
    "planType" : "SINGLE",
    "subscriptionStartTime" : "1",
    "totalTargetAmount" : "0.111",
    "targetAsset" : "BTC",
    "pnlInUSD" : "101.2",
    "nextExecutionDateTime" : 1648378800000,
    "roi" : "1.02",
    "subscriptionStartDay" : "1",
    "editAllowed" : "true",
    "totalInvestedInUSD" : "4.555",
    "subscriptionAmount" : "0.1",
    "subscriptionCycle" : "WEEKLY",
    "sourceAsset" : "BUSD",
    "flexibleAllowedToUse" : "false",
    "planId" : 12345,
    "lastUpdatedDateTime" : 1648378800000,
    "subscriptionStartWeekday" : "MON",
    "sourceWallet" : "SPOT_WALLET",
    "firstExecutionDateTime" : 1648378800000,
    "creationDateTime" : 1648378800000,
    "status" : "ONGOING",
    "planValueInUSD" : "101.2"
  }, {
    "planType" : "SINGLE",
    "subscriptionStartTime" : "1",
    "totalTargetAmount" : "0.111",
    "targetAsset" : "BTC",
    "pnlInUSD" : "101.2",
    "nextExecutionDateTime" : 1648378800000,
    "roi" : "1.02",
    "subscriptionStartDay" : "1",
    "editAllowed" : "true",
    "totalInvestedInUSD" : "4.555",
    "subscriptionAmount" : "0.1",
    "subscriptionCycle" : "WEEKLY",
    "sourceAsset" : "BUSD",
    "flexibleAllowedToUse" : "false",
    "planId" : 12345,
    "lastUpdatedDateTime" : 1648378800000,
    "subscriptionStartWeekday" : "MON",
    "sourceWallet" : "SPOT_WALLET",
    "firstExecutionDateTime" : 1648378800000,
    "creationDateTime" : 1648378800000,
    "status" : "ONGOING",
    "planValueInUSD" : "101.2"
  } ],
  "planValueInUSD" : "123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Index Linked Plan Rebalance Details (USER_DATA)
 * Get the history of Index Linked Plan Redemption transactions  Max 30 day difference between startTime and endTime If no startTime and endTime, default to show past 30 day records  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1LendingAuto_investRebalanceHistoryGET = function(timestamp,signature,startTime,endTime,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "transactionDetails" : [ {
    "transactionDateTime" : 1648378800000,
    "rebalanceDirection" : "BUY",
    "asset" : "BTC",
    "rebalanceAmount" : "0.005"
  }, {
    "transactionDateTime" : 1648378800000,
    "rebalanceDirection" : "BUY",
    "asset" : "BTC",
    "rebalanceAmount" : "0.005"
  } ],
  "indexName" : "BINANCE TOP 10 EW",
  "indexId" : 12345,
  "rebalanceFee" : "10",
  "rebalanceFeeUnit" : "USDT",
  "rebalanceId" : 12345,
  "status" : "SUCCESS"
}, {
  "transactionDetails" : [ {
    "transactionDateTime" : 1648378800000,
    "rebalanceDirection" : "BUY",
    "asset" : "BTC",
    "rebalanceAmount" : "0.005"
  }, {
    "transactionDateTime" : 1648378800000,
    "rebalanceDirection" : "BUY",
    "asset" : "BTC",
    "rebalanceAmount" : "0.005"
  } ],
  "indexName" : "BINANCE TOP 10 EW",
  "indexId" : 12345,
  "rebalanceFee" : "10",
  "rebalanceFeeUnit" : "USDT",
  "rebalanceId" : 12345,
  "status" : "SUCCESS"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Index Linked Plan Redemption (USER_DATA)
 * Get the history of Index Linked Plan Redemption transactions  Weight(IP): 1
 *
 * requestId Long 
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1LendingAuto_investRedeemHistoryGET = function(requestId,asset,timestamp,signature,startTime,endTime,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : "0.005",
  "transactionFee" : "0",
  "transactionFeeUnit" : "USDT",
  "indexName" : "BINANCE TOP 10 EW",
  "redemptionId" : 12345,
  "indexId" : 12345,
  "asset" : "BTC",
  "redemptionDateTime" : 1648378800000,
  "status" : "SUCCESS"
}, {
  "amount" : "0.005",
  "transactionFee" : "0",
  "transactionFeeUnit" : "USDT",
  "indexName" : "BINANCE TOP 10 EW",
  "redemptionId" : 12345,
  "indexId" : 12345,
  "asset" : "BTC",
  "redemptionDateTime" : 1648378800000,
  "status" : "SUCCESS"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Index Linked Plan Redemption (TRADE)
 * To redeem index-Linked plan holdings  Weight(IP): 1
 *
 * indexId Long 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * requestId String  (optional)
 * redemptionPercentage Integer  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_243
 **/
exports.sapiV1LendingAuto_investRedeemPOST = function(indexId,timestamp,signature,requestId,redemptionPercentage,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "redemptionId" : 12345
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query source asset list (USER_DATA)
 * Query Source Asset to be used for investment  Weight(IP): 1
 *
 * usageType String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * targetAsset String  (optional)
 * indexId Long  (optional)
 * flexibleAllowedToUse Boolean  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_233
 **/
exports.sapiV1LendingAuto_investSource_assetListGET = function(usageType,timestamp,signature,targetAsset,indexId,flexibleAllowedToUse,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "feeRate" : "0.002",
  "sourceAssets" : [ {
    "flexibleAmount" : "1111",
    "sourceAsset" : "USDT",
    "scale" : "2",
    "assetMaxAmount" : "1000000",
    "assetMinAmount" : "0.1"
  }, {
    "flexibleAmount" : "1111",
    "sourceAsset" : "USDT",
    "scale" : "2",
    "assetMaxAmount" : "1000000",
    "assetMinAmount" : "0.1"
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
 * Get target asset list (USER_DATA)
 * Weight(IP): 1
 *
 * targetAsset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * size Integer Default:10 Max:100 (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_230
 **/
exports.sapiV1LendingAuto_investTarget_assetListGET = function(targetAsset,timestamp,signature,size,current,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "targetAssets" : "BTC",
  "autoInvestAssetList" : [ {
    "roiAndDimensionTypeList" : [ {
      "dimensionValue" : "3",
      "dimensionUnit" : "year",
      "simulateRoi" : "5.004"
    }, {
      "dimensionValue" : "3",
      "dimensionUnit" : "year",
      "simulateRoi" : "5.004"
    } ],
    "targetAsset" : "BTC"
  }, {
    "roiAndDimensionTypeList" : [ {
      "dimensionValue" : "3",
      "dimensionUnit" : "year",
      "simulateRoi" : "5.004"
    }, {
      "dimensionValue" : "3",
      "dimensionUnit" : "year",
      "simulateRoi" : "5.004"
    } ],
    "targetAsset" : "BTC"
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
 * Get target asset ROI data (USER_DATA)
 * ROI return list for target asset  Weight(IP): 1
 *
 * targetAsset String 
 * hisRoiType String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1LendingAuto_investTarget_assetRoiListGET = function(targetAsset,hisRoiType,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "1648378800000",
  "simulateRoi" : "1.75"
}, {
  "date" : "1648378800000",
  "simulateRoi" : "1.75"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

