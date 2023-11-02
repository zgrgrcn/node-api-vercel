'use strict';


/**
 * Portfolio Margin Account (USER_DATA)
 * Get the account info  'Weight(IP): 1'
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_156
 **/
exports.sapiV1PortfolioAccountGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accountStatus" : "NORMAL",
  "uniMMR" : "1.87987800",
  "accountType" : "PM_1",
  "accountEquity" : "122607.35137903",
  "actualEquity" : "142607.35137903",
  "accountMaintMargin" : "23.72469206"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fund Collection by Asset (USER_DATA)
 * Transfers specific asset from Futures Account to Margin account  Weight(IP): 60
 *
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_162
 **/
exports.sapiV1PortfolioAsset_collectionPOST = function(asset,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Portfolio Margin Asset Index Price (MARKET_DATA)
 * Query Portfolio Margin Asset Index Price  Weight(IP): - 1 if send asset - 50 if not send asset
 *
 * asset String  (optional)
 * returns List
 **/
exports.sapiV1PortfolioAsset_index_priceGET = function(asset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "assetIndexPrice" : "28251.9136906",
  "time" : 1683518338121,
  "asset" : "USDT"
}, {
  "assetIndexPrice" : "28251.9136906",
  "time" : 1683518338121,
  "asset" : "USDT"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fund Auto-collection (USER_DATA)
 * Transfers all assets from Futures Account to Margin account  Weight(IP): 1500
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_162
 **/
exports.sapiV1PortfolioAuto_collectionPOST = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * BNB Transfer (USER_DATA)
 * BNB transfer can be between Margin Account and USDM Account  Weight(IP): 1500
 *
 * transferSide String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_144
 **/
exports.sapiV1PortfolioBnb_transferPOST = function(transferSide,amount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 100000001
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Portfolio Margin Collateral Rate (MARKET_DATA)
 * Portfolio Margin Collateral Rate.  Weight(IP): 50
 *
 * returns List
 **/
exports.sapiV1PortfolioCollateralRateGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "collateralRate" : "1.0000",
  "asset" : "USDC"
}, {
  "collateralRate" : "1.0000",
  "asset" : "USDC"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Classic Portfolio Margin Negative Balance Interest History (USER_DATA)
 * Query interest history of negative balance for portfolio margin.  Weight(IP): 50
 *
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1PortfolioInterest_historyGET = function(asset,timestamp,signature,startTime,endTime,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "interestRate" : "0.0001164",
  "principal" : "210000",
  "interestAccruedTime" : 1672801339253,
  "interest" : "24.4440",
  "asset" : "USDT"
}, {
  "interestRate" : "0.0001164",
  "principal" : "210000",
  "interestAccruedTime" : 1672801339253,
  "interest" : "24.4440",
  "asset" : "USDT"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Portfolio Margin Bankruptcy Loan Amount (USER_DATA)
 * Query Portfolio Margin Bankruptcy Loan Amount.  Weight(UID): 500
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_158
 **/
exports.sapiV1PortfolioPmLoanGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "579.45",
  "asset" : "BUSD"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Portfolio Margin Bankruptcy Loan Repay (USER_DATA)
 * Repay Portfolio Margin Bankruptcy Loan.  Weight(UID): 3000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * from String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_159
 **/
exports.sapiV1PortfolioRepayPOST = function(timestamp,signature,from,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 58203331886213500
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Repay futures Negative Balance (USER_DATA)
 * Repay futures Negative Balance  Weight(IP): 1500
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_162
 **/
exports.sapiV1PortfolioRepay_futures_negative_balancePOST = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Auto-repay-futures Status (USER_DATA)
 * Query Auto-repay-futures Status  Weight(IP): 30
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_163
 **/
exports.sapiV1PortfolioRepay_futures_switchGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "autoRepay" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Change Auto-repay-futures Status (USER_DATA)
 * Change Auto-repay-futures Status  Weight(IP): 1500
 *
 * autoRepay Boolean 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_162
 **/
exports.sapiV1PortfolioRepay_futures_switchPOST = function(autoRepay,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

