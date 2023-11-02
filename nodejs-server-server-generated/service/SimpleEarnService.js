'use strict';


/**
 * Simple Account (USER_DATA)
 * Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_253
 **/
exports.sapiV1Simple_earnAccountGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalFlexibleAmountInBTC" : "0.00000000",
  "totalAmountInBTC" : "0.01067982",
  "totalAmountInUSDT" : "77.13289230",
  "totalLockedInUSDT" : "77.13289230",
  "totalLockedInBTC" : "0.01067982",
  "totalFlexibleAmountInUSDT" : "0.00000000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Collateral Record (USER_DATA)
 * Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * productId String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_263
 **/
exports.sapiV1Simple_earnFlexibleHistoryCollateralRecordGET = function(timestamp,signature,productId,startTime,endTime,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "amount" : "100.00000000",
    "productId" : "BUSD001",
    "createTime" : 1575018510000,
    "orderId" : 26055,
    "asset" : "USDT",
    "type" : "REPAY",
    "productName" : "USDT"
  }, {
    "amount" : "100.00000000",
    "productId" : "BUSD001",
    "createTime" : 1575018510000,
    "orderId" : 26055,
    "asset" : "USDT",
    "type" : "REPAY",
    "productName" : "USDT"
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
 * Get Rate History (USER_DATA)
 * Weight(IP): 150
 *
 * productId String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_262
 **/
exports.sapiV1Simple_earnFlexibleHistoryRateHistoryGET = function(productId,timestamp,signature,startTime,endTime,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "productId" : "BUSD001",
    "annualPercentageRate" : "0.00006408",
    "time" : 1577233578000,
    "asset" : "BUSD"
  }, {
    "productId" : "BUSD001",
    "annualPercentageRate" : "0.00006408",
    "time" : 1577233578000,
    "asset" : "BUSD"
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
 * Get Flexible Redemption Record (USER_DATA)
 * Weight(IP): 150
 *
 * productId String  (optional)
 * redeemId String  (optional)
 * asset String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * returns inline_response_200_256
 **/
exports.sapiV1Simple_earnFlexibleHistoryRedemptionRecordGET = function(productId,redeemId,asset,startTime,endTime,current,size) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "amount" : "10.54000000",
    "redeemId" : 40607,
    "destAccount" : "SPOT",
    "time" : 1577257222000,
    "asset" : "USDT",
    "projectId" : "USDT001",
    "status" : "PAID"
  }, {
    "amount" : "10.54000000",
    "redeemId" : 40607,
    "destAccount" : "SPOT",
    "time" : 1577257222000,
    "asset" : "USDT",
    "projectId" : "USDT001",
    "status" : "PAID"
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
 * Get Flexible Rewards History (USER_DATA)
 * Weight(IP): 150
 *
 * type String \"BONUS\", \"REALTIME\", \"REWARDS\"
 * productId String  (optional)
 * asset String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * returns inline_response_200_258
 **/
exports.sapiV1Simple_earnFlexibleHistoryRewardsRecordGET = function(type,productId,asset,startTime,endTime) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 2,
  "rows" : [ {
    "time" : 1577257222000,
    "asset" : "BUSD",
    "type" : "BONUS",
    "projectId" : "USDT001",
    "rewards" : "0.00006408"
  }, {
    "time" : 1577257222000,
    "asset" : "BUSD",
    "type" : "BONUS",
    "projectId" : "USDT001",
    "rewards" : "0.00006408"
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
 * Get Flexible Subscription Record (USER_DATA)
 * Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * productId String  (optional)
 * purchaseId String  (optional)
 * asset String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_254
 **/
exports.sapiV1Simple_earnFlexibleHistorySubscriptionRecordGET = function(timestamp,signature,productId,purchaseId,asset,startTime,endTime,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "amount" : "100.00000000",
    "sourceAccount" : "SPOT",
    "purchaseId" : 26055,
    "amtFromFunding" : "70",
    "time" : 1575018510000,
    "asset" : "USDT",
    "type" : "AUTO",
    "amtFromSpot" : "30",
    "status" : "SUCCESS"
  }, {
    "amount" : "100.00000000",
    "sourceAccount" : "SPOT",
    "purchaseId" : 26055,
    "amtFromFunding" : "70",
    "time" : 1575018510000,
    "asset" : "USDT",
    "type" : "AUTO",
    "amtFromSpot" : "30",
    "status" : "SUCCESS"
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
 * Get Simple Earn Flexible Product List (USER_DATA)
 * Get available Simple Earn flexible product list  Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_246
 **/
exports.sapiV1Simple_earnFlexibleListGET = function(timestamp,signature,asset,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "canPurchase" : true,
    "productId" : "BTC001",
    "tierAnnualPercentageRate" : {
      "0-5BTC" : 0.05,
      "5-10BTC" : 0.03
    },
    "subscriptionStartTime" : "1646182276000",
    "latestAnnualPercentageRate" : "0.05000000",
    "airDropPercentageRate" : "0.05000000",
    "minPurchaseAmount" : "0.01000000",
    "isSoldOut" : true,
    "asset" : "BTC",
    "hot" : true,
    "canRedeem" : true,
    "status" : "PURCHASING"
  }, {
    "canPurchase" : true,
    "productId" : "BTC001",
    "tierAnnualPercentageRate" : {
      "0-5BTC" : 0.05,
      "5-10BTC" : 0.03
    },
    "subscriptionStartTime" : "1646182276000",
    "latestAnnualPercentageRate" : "0.05000000",
    "airDropPercentageRate" : "0.05000000",
    "minPurchaseAmount" : "0.01000000",
    "isSoldOut" : true,
    "asset" : "BTC",
    "hot" : true,
    "canRedeem" : true,
    "status" : "PURCHASING"
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
 * Get Flexible Personal Left Quota (USER_DATA)
 * Weight(IP): 150
 *
 * productId String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_129
 **/
exports.sapiV1Simple_earnFlexiblePersonalLeftQuotaGET = function(productId,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "leftPersonalQuota" : "1000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Flexible Product Position (USER_DATA)
 * Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * productId String  (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_251
 **/
exports.sapiV1Simple_earnFlexiblePositionGET = function(timestamp,signature,asset,productId,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "cumulativeBonusRewards" : "0.22759183",
    "productId" : "USDT001",
    "latestAnnualPercentageRate" : "0.02599895",
    "autoSubscribe" : true,
    "canRedeem" : true,
    "totalAmount" : "75.46000000",
    "cumulativeRealTimeRewards" : "0.22759183",
    "yesterdayAirdropPercentageRate" : "0.02599895",
    "tierAnnualPercentageRate" : {
      "0-5BTC" : 0.05,
      "5-10BTC" : 0.03
    },
    "airDropAsset" : "BETH",
    "collateralAmount" : "232.23123213",
    "asset" : "USDT",
    "yesterdayRealTimeRewards" : "0.10293829",
    "cumulativeTotalRewards" : "0.45459183"
  }, {
    "cumulativeBonusRewards" : "0.22759183",
    "productId" : "USDT001",
    "latestAnnualPercentageRate" : "0.02599895",
    "autoSubscribe" : true,
    "canRedeem" : true,
    "totalAmount" : "75.46000000",
    "cumulativeRealTimeRewards" : "0.22759183",
    "yesterdayAirdropPercentageRate" : "0.02599895",
    "tierAnnualPercentageRate" : {
      "0-5BTC" : 0.05,
      "5-10BTC" : 0.03
    },
    "airDropAsset" : "BETH",
    "collateralAmount" : "232.23123213",
    "asset" : "USDT",
    "yesterdayRealTimeRewards" : "0.10293829",
    "cumulativeTotalRewards" : "0.45459183"
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
 * Redeem Flexible Product (TRADE)
 * Weight(IP): 1  Rate Limit: 1/3s per account
 *
 * productId String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * redeemAll Boolean true or false, default to false (optional)
 * amount Double if redeemAll is false, amount is mandatory (optional)
 * destAccount String SPOT,FUND,ALL, default SPOT (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_250
 **/
exports.sapiV1Simple_earnFlexibleRedeemPOST = function(productId,timestamp,signature,redeemAll,amount,destAccount,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true,
  "redeemId" : 40607
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set Flexible Auto Subscribe (USER_DATA)
 * Weight(IP): 150
 *
 * productId String 
 * autoSubscribe Boolean true or false
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_49
 **/
exports.sapiV1Simple_earnFlexibleSetAutoSubscribePOST = function(productId,autoSubscribe,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Subscribe Flexible Product (TRADE)
 * Weight(IP): 1  Rate Limit: 1/3s per account
 *
 * productId String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * autoSubscribe Boolean true or false, default true. (optional)
 * sourceAccount String SPOT,FUND,ALL, default SPOT (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_248
 **/
exports.sapiV1Simple_earnFlexibleSubscribePOST = function(productId,amount,timestamp,signature,autoSubscribe,sourceAccount,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true,
  "purchaseId" : 40607
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Flexible Subscription Preview (USER_DATA)
 * Weight(IP): 150
 *
 * productId String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_260
 **/
exports.sapiV1Simple_earnFlexibleSubscriptionPreviewGET = function(productId,amount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalAmount" : "1232.32230982",
  "estDailyRealTimeRewards" : "0.22759183",
  "rewardAsset" : "BUSD",
  "airDropAsset" : "BETH",
  "estDailyAirdropRewards" : "0.22759183",
  "estDailyBonusRewards" : "0.22759183"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Locked Redemption Record (USER_DATA)
 * Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * positionId String  (optional)
 * redeemId String  (optional)
 * asset String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_257
 **/
exports.sapiV1Simple_earnLockedHistoryRedemptionRecordGET = function(timestamp,signature,positionId,redeemId,asset,startTime,endTime,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "amount" : "21312.23223",
    "lockPeriod" : "30",
    "positionId" : "123123",
    "redeemId" : 40607,
    "deliverDate" : "1575018510000",
    "time" : 1575018510000,
    "asset" : "BNB",
    "type" : "MATURE",
    "status" : "PAID"
  }, {
    "amount" : "21312.23223",
    "lockPeriod" : "30",
    "positionId" : "123123",
    "redeemId" : 40607,
    "deliverDate" : "1575018510000",
    "time" : 1575018510000,
    "asset" : "BNB",
    "type" : "MATURE",
    "status" : "PAID"
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
 * Get Locked Rewards History (USER_DATA)
 * Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * positionId String  (optional)
 * asset String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_259
 **/
exports.sapiV1Simple_earnLockedHistoryRewardsRecordGET = function(timestamp,signature,positionId,asset,startTime,endTime,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "amount" : "21312.23223",
    "lockPeriod" : "30",
    "positionId" : "123123",
    "time" : 1577257222000,
    "asset" : "BNB"
  }, {
    "amount" : "21312.23223",
    "lockPeriod" : "30",
    "positionId" : "123123",
    "time" : 1577257222000,
    "asset" : "BNB"
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
 * Get Locked Subscription Record (USER_DATA)
 * Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * purchaseId String  (optional)
 * asset String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_255
 **/
exports.sapiV1Simple_earnLockedHistorySubscriptionRecordGET = function(timestamp,signature,purchaseId,asset,startTime,endTime,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "amount" : "21312.23223",
    "lockPeriod" : "30",
    "positionId" : "123123",
    "sourceAccount" : "SPOT",
    "purchaseId" : 26055,
    "amtFromFunding" : "70",
    "time" : 1575018510000,
    "asset" : "BNB",
    "type" : "AUTO",
    "amtFromSpot" : "30",
    "status" : "SUCCESS"
  }, {
    "amount" : "21312.23223",
    "lockPeriod" : "30",
    "positionId" : "123123",
    "sourceAccount" : "SPOT",
    "purchaseId" : 26055,
    "amtFromFunding" : "70",
    "time" : 1575018510000,
    "asset" : "BNB",
    "type" : "AUTO",
    "amtFromSpot" : "30",
    "status" : "SUCCESS"
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
 * Get Simple Earn Locked Product List (USER_DATA)
 * Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_247
 **/
exports.sapiV1Simple_earnLockedListGET = function(timestamp,signature,asset,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "quota" : {
      "totalPersonalQuota" : "2",
      "minimum" : "0.001"
    },
    "detail" : {
      "duration" : 90,
      "apr" : "1.2069",
      "subscriptionStartTime" : "1646182276000",
      "rewardAsset" : "AXS",
      "renewable" : true,
      "isSoldOut" : true,
      "asset" : "AXS",
      "extraRewardAPR" : "0.23",
      "extraRewardAsset" : "BNB",
      "status" : "CREATED"
    },
    "projectId" : "BNB"
  }, {
    "quota" : {
      "totalPersonalQuota" : "2",
      "minimum" : "0.001"
    },
    "detail" : {
      "duration" : 90,
      "apr" : "1.2069",
      "subscriptionStartTime" : "1646182276000",
      "rewardAsset" : "AXS",
      "renewable" : true,
      "isSoldOut" : true,
      "asset" : "AXS",
      "extraRewardAPR" : "0.23",
      "extraRewardAsset" : "BNB",
      "status" : "CREATED"
    },
    "projectId" : "BNB"
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
 * Get Locked Personal Left Quota (USER_DATA)
 * Weight(IP): 150
 *
 * projectId String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_129
 **/
exports.sapiV1Simple_earnLockedPersonalLeftQuotaGET = function(projectId,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "leftPersonalQuota" : "1000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Locked Product Position (USER_DATA)
 * Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * positionId String  (optional)
 * projectId String  (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_252
 **/
exports.sapiV1Simple_earnLockedPositionGET = function(timestamp,signature,asset,positionId,projectId,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "duration" : "60",
    "isAutoRenew" : true,
    "amount" : "122.09202928",
    "redeemDate" : "1732182276000",
    "isRenewable" : true,
    "positionId" : "123123",
    "rewardAsset" : "AXS",
    "purchaseTime" : "1646182276000",
    "accrualDays" : "4",
    "APY" : "0.23",
    "asset" : "AXS",
    "projectId" : "Axs*90"
  }, {
    "duration" : "60",
    "isAutoRenew" : true,
    "amount" : "122.09202928",
    "redeemDate" : "1732182276000",
    "isRenewable" : true,
    "positionId" : "123123",
    "rewardAsset" : "AXS",
    "purchaseTime" : "1646182276000",
    "accrualDays" : "4",
    "APY" : "0.23",
    "asset" : "AXS",
    "projectId" : "Axs*90"
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
 * Redeem Locked Product (TRADE)
 * Weight(IP): 1  Rate Limit: 1/3s per account
 *
 * positionId String 1234
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_250
 **/
exports.sapiV1Simple_earnLockedRedeemPOST = function(positionId,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true,
  "redeemId" : 40607
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set Locked Auto Subscribe (USER_DATA)
 * Weight(IP): 150
 *
 * positionId String 
 * autoSubscribe Boolean true or false
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_49
 **/
exports.sapiV1Simple_earnLockedSetAutoSubscribePOST = function(positionId,autoSubscribe,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Subscribe Locked Product (TRADE)
 * Weight(IP): 1  Rate Limit: 1/3s per account
 *
 * projectId String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * autoSubscribe Boolean true or false, default true. (optional)
 * sourceAccount String SPOT,FUND,ALL, default SPOT (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_249
 **/
exports.sapiV1Simple_earnLockedSubscribePOST = function(projectId,amount,timestamp,signature,autoSubscribe,sourceAccount,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "positionId" : "12345",
  "success" : true,
  "purchaseId" : 40607
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Locked Subscription Preview (USER_DATA)
 * Weight(IP): 150
 *
 * projectId String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * autoSubscribe Boolean true or false, default true. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1Simple_earnLockedSubscriptionPreviewGET = function(projectId,amount,timestamp,signature,autoSubscribe,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "totalRewardAmt" : "5.17181528",
  "estTotalExtraRewardAmt" : "5.17181528",
  "nextPay" : "1.29295383",
  "nextSubscriptionDate" : "1651536000000",
  "rewardAsset" : "AXS",
  "rewardsEndDate" : "1651449600000",
  "deliverDate" : "1651536000000",
  "valueDate" : "1646697600000",
  "extraRewardAsset" : "BNB",
  "nextPayDate" : "1646697600000"
}, {
  "totalRewardAmt" : "5.17181528",
  "estTotalExtraRewardAmt" : "5.17181528",
  "nextPay" : "1.29295383",
  "nextSubscriptionDate" : "1651536000000",
  "rewardAsset" : "AXS",
  "rewardsEndDate" : "1651449600000",
  "deliverDate" : "1651536000000",
  "valueDate" : "1646697600000",
  "extraRewardAsset" : "BNB",
  "nextPayDate" : "1646697600000"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

