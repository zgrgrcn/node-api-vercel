'use strict';


/**
 * Add Liquidity Preview (USER_DATA)
 * Calculate expected share amount for adding liquidity in single or dual token.  Weight(IP): 150
 *
 * poolId Long 
 * type String * `SINGLE` - for adding a single token * `COMBINATION` - for adding dual tokens
 * quoteAsset String 
 * quoteQty Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_178
 **/
exports.sapiV1BswapAddLiquidityPreviewGET = function(poolId,type,quoteAsset,quoteQty,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Claim rewards (TRADE)
 * Claim swap rewards or liquidity rewards  Weight(UID): 1000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * type Integer 0: Swap rewards, 1: Liquidity rewards, default to 0 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_181
 **/
exports.sapiV1BswapClaimRewardsPOST = function(timestamp,signature,type,recvWindow) {
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
 * Get Claimed History (USER_DATA)
 * Get history of claimed rewards.  Weight(UID): 1000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * poolId Long  (optional)
 * assetRewards String  (optional)
 * type Integer 0: Swap rewards, 1: Liquidity rewards, default to 0 (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 3, max 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1BswapClaimedHistoryGET = function(timestamp,signature,poolId,assetRewards,type,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "assetRewards" : "BNB",
  "poolId" : 52,
  "claimAmount" : 0.00000023,
  "poolName" : "BNB/USDT",
  "claimTime" : 1565769342148,
  "status" : 1
}, {
  "assetRewards" : "BNB",
  "poolId" : 52,
  "claimAmount" : 0.00000023,
  "poolName" : "BNB/USDT",
  "claimTime" : 1565769342148,
  "status" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add Liquidity (TRADE)
 * Add liquidity to a pool.  Weight(UID): 1000 (Additional: 3 times one second)
 *
 * poolId Long 
 * asset String 
 * quantity Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * type String * `Single` - to add a single token * `Combination` - to add dual tokens (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_172
 **/
exports.sapiV1BswapLiquidityAddPOST = function(poolId,asset,quantity,timestamp,signature,type,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "operationId" : 12341
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Liquidity information of a pool (USER_DATA)
 * Get liquidity information and user share of a pool.  Weight(IP): - `1` for one pool; - `10` when the poolId parameter is omitted;
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * poolId Long  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1BswapLiquidityGET = function(timestamp,signature,poolId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "poolNmae" : "BUSD/USDT",
  "poolId" : 2,
  "updateTime" : 1565769342148,
  "liquidity" : {
    "USDT" : 99999245.54,
    "BUSD" : 100000315.79
  },
  "share" : {
    "asset" : {
      "USDT" : 6206.95,
      "BUSD" : 6207.02
    },
    "shareAmount" : 12415,
    "sharePercentage" : 0.00006207
  }
}, {
  "poolNmae" : "BUSD/USDT",
  "poolId" : 2,
  "updateTime" : 1565769342148,
  "liquidity" : {
    "USDT" : 99999245.54,
    "BUSD" : 100000315.79
  },
  "share" : {
    "asset" : {
      "USDT" : 6206.95,
      "BUSD" : 6207.02
    },
    "shareAmount" : 12415,
    "sharePercentage" : 0.00006207
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Liquidity Operation Record (USER_DATA)
 * Get liquidity operation (add/remove) records.  Weight(UID): 3000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * operationId Long  (optional)
 * poolId Long  (optional)
 * operation String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1BswapLiquidityOpsGET = function(timestamp,signature,operationId,poolId,operation,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "poolId" : 2,
  "operationId" : 12341,
  "updateTime" : 1565769342148,
  "operation" : "ADD",
  "shareAmount" : "10.1",
  "poolName" : "BUSD/USDT",
  "status" : 1
}, {
  "poolId" : 2,
  "operationId" : 12341,
  "updateTime" : 1565769342148,
  "operation" : "ADD",
  "shareAmount" : "10.1",
  "poolName" : "BUSD/USDT",
  "status" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove Liquidity (TRADE)
 * Remove liquidity from a pool, `type` include `SINGLE` and `COMBINATION`, asset is mandatory for single asset removal  Weight(UID): 1000 (Additional: 3 times one second)
 *
 * poolId Long 
 * type String * `SINGLE` - for single asset removal * `COMBINATION` - for combination of all coins removal
 * shareAmount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String Mandatory for single asset removal (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_172
 **/
exports.sapiV1BswapLiquidityRemovePOST = function(poolId,type,shareAmount,timestamp,signature,asset,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "operationId" : 12341
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Pool Configure (USER_DATA)
 * Weight(IP): 150
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * poolId Long  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1BswapPoolConfigureGET = function(timestamp,signature,poolId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "assetConfigure" : {
    "BUSD" : {
      "maxAdd" : 20,
      "minAdd" : 10,
      "maxSwap" : 30,
      "minSwap" : 10
    }
  },
  "poolNmae" : "BUSD/USDT",
  "poolId" : 2,
  "updateTime" : 1565769342148,
  "liquidity" : {
    "minRedeemShare" : 0.1,
    "constantA" : 2000,
    "slippageTolerance" : 0.2
  }
}, {
  "assetConfigure" : {
    "BUSD" : {
      "maxAdd" : 20,
      "minAdd" : 10,
      "maxSwap" : 30,
      "minSwap" : 10
    }
  },
  "poolNmae" : "BUSD/USDT",
  "poolId" : 2,
  "updateTime" : 1565769342148,
  "liquidity" : {
    "minRedeemShare" : 0.1,
    "constantA" : 2000,
    "slippageTolerance" : 0.2
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List All Swap Pools (MARKET_DATA)
 * Get metadata about all swap pools.  Weight(IP): 1
 *
 * returns List
 **/
exports.sapiV1BswapPoolsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "assets" : [ "BUSD", "USDT" ],
  "poolId" : 2,
  "poolName" : "BUSD/USDT"
}, {
  "assets" : [ "BUSD", "USDT" ],
  "poolId" : 2,
  "poolName" : "BUSD/USDT"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Request Quote (USER_DATA)
 * Request a quote for swap quote asset (selling asset) for base asset (buying asset), essentially price/exchange rates.  quoteQty is quantity of quote asset (to sell).  Please be noted the quote is for reference only, the actual price will change as the liquidity changes, it's recommended to swap immediate after request a quote for slippage prevention.  Weight(UID): 150
 *
 * quoteAsset String 
 * baseAsset String 
 * quoteQty Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_174
 **/
exports.sapiV1BswapQuoteGET = function(quoteAsset,baseAsset,quoteQty,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quoteQty" : 300000,
  "price" : 1.00008334,
  "fee" : 120,
  "baseQty" : 299975,
  "baseAsset" : "BUSD",
  "slippage" : 0.00007245,
  "quoteAsset" : "USDT"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove Liquidity Preview (USER_DATA)
 * Calculate the expected asset amount of single token redemption or dual token redemption.  Weight(IP): 150
 *
 * poolId Long 
 * type String * `SINGLE` - remove and obtain a single token * `COMBINATION` - remove and obtain dual token
 * quoteAsset String 
 * shareAmount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_179
 **/
exports.sapiV1BswapRemoveLiquidityPreviewGET = function(poolId,type,quoteAsset,shareAmount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Swap History (USER_DATA)
 * Get swap history.  Weight(UID): 3000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * swapId Long  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * status Integer * `0` - pending for swap * `1` - success * `2` - failed (optional)
 * quoteAsset String  (optional)
 * baseAsset String  (optional)
 * limit Integer default 3, max 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1BswapSwapGET = function(timestamp,signature,swapId,startTime,endTime,status,quoteAsset,baseAsset,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "quoteQty" : 300000,
  "swapTime" : 1565770342148,
  "swapId" : 2314,
  "price" : 1.00008334,
  "fee" : 120,
  "baseQty" : 299975,
  "baseAsset" : "BUSD",
  "quoteAsset" : "USDT",
  "status" : 0
}, {
  "quoteQty" : 300000,
  "swapTime" : 1565770342148,
  "swapId" : 2314,
  "price" : 1.00008334,
  "fee" : 120,
  "baseQty" : 299975,
  "baseAsset" : "BUSD",
  "quoteAsset" : "USDT",
  "status" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Swap (TRADE)
 * Swap `quoteAsset` for `baseAsset`.  Weight(UID): 1000 (Additional: 3 times one second)
 *
 * quoteAsset String 
 * baseAsset String 
 * quoteQty Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_176
 **/
exports.sapiV1BswapSwapPOST = function(quoteAsset,baseAsset,quoteQty,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "swapId" : 2314
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Unclaimed Rewards Record (USER_DATA)
 * Get unclaimed rewards record.  Weight(UID): 1000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * type Integer 0: Swap rewards, 1: Liquidity rewards, default to 0 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_180
 **/
exports.sapiV1BswapUnclaimedRewardsGET = function(timestamp,signature,type,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalUnclaimedRewards" : {
    "BNB" : 0.000000010,
    "USDT" : 0.000000020,
    "BUSD" : 100000315.79
  },
  "details" : {
    "BNB/BTC" : {
      "BNB" : 0.000000010
    },
    "BNB/USDT" : {
      "USDT" : 0.000000020,
      "BUSD" : 100000315.79
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

