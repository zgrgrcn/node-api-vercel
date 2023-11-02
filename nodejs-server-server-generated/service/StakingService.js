'use strict';


/**
 * Get Personal Left Quota of Staking Product (USER_DATA)
 * Weight(IP): 1
 *
 * product String * `STAKING` - for Locked Staking * `F_DEFI` - for flexible DeFi Staking * `L_DEFI` - for locked DeFi Staking
 * productId String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1StakingPersonalLeftQuotaGET = function(product,productId,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "leftPersonalQuota" : "1000"
}, {
  "leftPersonalQuota" : "1000"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Staking Product Position (USER_DATA)
 * Weight(IP): 1
 *
 * product String * `STAKING` - for Locked Staking * `F_DEFI` - for flexible DeFi Staking * `L_DEFI` - for locked DeFi Staking
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * productId String  (optional)
 * asset String  (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1StakingPositionGET = function(product,timestamp,signature,productId,asset,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "rewardAmt" : "5.17181528",
  "partialAmtDeliverDate" : "1651536000000",
  "APY" : "0.2032",
  "type" : "AUTO",
  "extraRewardAsset" : "BNB",
  "duration" : "60",
  "nextInterestPay" : "1.29295383",
  "nextInterestPayDate" : "1646697600000",
  "redeemPeriod" : "1",
  "extraRewardAPY" : "0.0203",
  "payInterestPeriod" : "1",
  "estExtraRewardAmt" : "5.17181528",
  "deliverDate" : "1651536000000",
  "amount" : "122.09202928",
  "interestEndDate" : "1651449600000",
  "rewardAsset" : "AXS",
  "canRedeemEarly" : true,
  "redeemingAmt" : "232.2323",
  "redeemAmountEarly" : "2802.24068892",
  "positionId" : "123123",
  "renewable" : true,
  "purchaseTime" : "1646182276000",
  "accrualDays" : "4",
  "asset" : "AXS",
  "projectId" : "Axs*90",
  "status" : "HOLDING"
}, {
  "rewardAmt" : "5.17181528",
  "partialAmtDeliverDate" : "1651536000000",
  "APY" : "0.2032",
  "type" : "AUTO",
  "extraRewardAsset" : "BNB",
  "duration" : "60",
  "nextInterestPay" : "1.29295383",
  "nextInterestPayDate" : "1646697600000",
  "redeemPeriod" : "1",
  "extraRewardAPY" : "0.0203",
  "payInterestPeriod" : "1",
  "estExtraRewardAmt" : "5.17181528",
  "deliverDate" : "1651536000000",
  "amount" : "122.09202928",
  "interestEndDate" : "1651449600000",
  "rewardAsset" : "AXS",
  "canRedeemEarly" : true,
  "redeemingAmt" : "232.2323",
  "redeemAmountEarly" : "2802.24068892",
  "positionId" : "123123",
  "renewable" : true,
  "purchaseTime" : "1646182276000",
  "accrualDays" : "4",
  "asset" : "AXS",
  "projectId" : "Axs*90",
  "status" : "HOLDING"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Staking Product List (USER_DATA)
 * Get available Staking product list.  Weight(IP): 1
 *
 * product String * `STAKING` - for Locked Staking * `F_DEFI` - for flexible DeFi Staking * `L_DEFI` - for locked DeFi Staking
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1StakingProductListGET = function(product,timestamp,signature,asset,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "quota" : {
    "totalPersonalQuota" : "2",
    "minimum" : "0.001"
  },
  "detail" : {
    "duration" : 90,
    "rewardAsset" : "AXS",
    "renewable" : true,
    "apy" : "1.2069",
    "asset" : "AXS"
  },
  "projectId" : "Axs*90"
}, {
  "quota" : {
    "totalPersonalQuota" : "2",
    "minimum" : "0.001"
  },
  "detail" : {
    "duration" : 90,
    "rewardAsset" : "AXS",
    "renewable" : true,
    "apy" : "1.2069",
    "asset" : "AXS"
  },
  "projectId" : "Axs*90"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Purchase Staking Product (USER_DATA)
 * Weight(IP): 1
 *
 * product String * `STAKING` - for Locked Staking * `F_DEFI` - for flexible DeFi Staking * `L_DEFI` - for locked DeFi Staking
 * productId String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * renewable String true or false, default false. Active if product is `STAKING` or `L_DEFI` (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_126
 **/
exports.sapiV1StakingPurchasePOST = function(product,productId,amount,timestamp,signature,renewable,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "positionId" : "12345",
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
 * Redeem Staking Product (USER_DATA)
 * Redeem Staking product. Locked staking and Locked DeFI staking belong to early redemption, redeeming in advance will result in loss of interest that you have earned.  Weight(IP): 1
 *
 * product String * `STAKING` - for Locked Staking * `F_DEFI` - for flexible DeFi Staking * `L_DEFI` - for locked DeFi Staking
 * productId String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * positionId String Mandatory if product is `STAKING` or `L_DEFI` (optional)
 * amount Double Mandatory if product is `F_DEFI` (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_49
 **/
exports.sapiV1StakingRedeemPOST = function(product,productId,timestamp,signature,positionId,amount,recvWindow) {
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
 * Set Auto Staking (USER_DATA)
 * Set auto staking on Locked Staking or Locked DeFi Staking  Weight(IP): 1
 *
 * product String * `STAKING` - for Locked Staking * `L_DEFI` - for locked DeFi Staking
 * positionId String 
 * renewable String true or false
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_49
 **/
exports.sapiV1StakingSetAutoStakingPOST = function(product,positionId,renewable,timestamp,signature,recvWindow) {
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
 * Get Staking History (USER_DATA)
 * Weight(IP): 1
 *
 * product String * `STAKING` - for Locked Staking * `F_DEFI` - for flexible DeFi Staking * `L_DEFI` - for locked DeFi Staking
 * txnType String `SUBSCRIPTION`, `REDEMPTION`, `INTEREST`
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1StakingStakingRecordGET = function(product,txnType,timestamp,signature,asset,startTime,endTime,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : "21312.23223",
  "lockPeriod" : "30",
  "positionId" : "123123",
  "project" : "BSC",
  "deliverDate" : "1575018510000",
  "time" : 1575018510000,
  "asset" : "BNB",
  "type" : "AUTO",
  "status" : "success"
}, {
  "amount" : "21312.23223",
  "lockPeriod" : "30",
  "positionId" : "123123",
  "project" : "BSC",
  "deliverDate" : "1575018510000",
  "time" : 1575018510000,
  "asset" : "BNB",
  "type" : "AUTO",
  "status" : "success"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

