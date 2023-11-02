'use strict';


/**
 * Crypto Loan Adjust LTV (TRADE)
 * Weight(UID): 6000
 *
 * orderId Long Order ID
 * amount Double Amount
 * direction String 'ADDITIONAL', 'REDUCED'
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_198
 **/
exports.sapiV1LoanAdjustLtvPOST = function(orderId,amount,direction,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "5.235",
  "currentLTV" : "0.52",
  "collateralCoin" : "BNB",
  "loanCoin" : "BUSD",
  "direction" : "ADDITIONAL"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Crypto Loans Borrow History (USER_DATA)
 * - If startTime and endTime are not sent, the recent 90-day data will be returned. - The max interval between startTime and endTime is 180 days.  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long orderId in POST /sapi/v1/loan/borrow (optional)
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * limit Long default 10, max 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_194
 **/
exports.sapiV1LoanBorrowHistoryGET = function(timestamp,signature,orderId,loanCoin,collateralCoin,startTime,endTime,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "loanTerm" : "7",
    "initialCollateralAmount" : "49.27565492",
    "initialLoanAmount" : "10000",
    "orderId" : 100000001,
    "collateralCoin" : "BNB",
    "borrowTime" : 1575018510000,
    "loanCoin" : "BUSD",
    "hourlyInterestRate" : "0.000057",
    "status" : "Accruing_Interest, Overdue, Liquidating, Repaying, Repaid, Liquidated, Pending, Failed"
  }, {
    "loanTerm" : "7",
    "initialCollateralAmount" : "49.27565492",
    "initialLoanAmount" : "10000",
    "orderId" : 100000001,
    "collateralCoin" : "BNB",
    "borrowTime" : 1575018510000,
    "loanCoin" : "BUSD",
    "hourlyInterestRate" : "0.000057",
    "status" : "Accruing_Interest, Overdue, Liquidating, Repaying, Repaid, Liquidated, Pending, Failed"
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
 * Crypto Loan Borrow (TRADE)
 * Weight(UID): 6000
 *
 * loanCoin String Coin loaned
 * collateralCoin String Coin used as collateral
 * loanTerm Integer 7/14/30/90/180 days
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanAmount Float Loan amount (optional)
 * collateralAmount Float  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_193
 **/
exports.sapiV1LoanBorrowPOST = function(loanCoin,collateralCoin,loanTerm,timestamp,signature,loanAmount,collateralAmount,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collateralCoin" : "BNB",
  "orderId" : "100000001",
  "collateralAmount" : "50.5",
  "loanCoin" : "BUSD",
  "hourlyInterestRate" : "0.001234",
  "loanAmount" : "100.5"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Collateral Assets Data (USER_DATA)
 * Get LTV information and collateral limit of collateral assets. The collateral limit is shown in USD value.  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * collateralCoin String Coin used as collateral (optional)
 * vipLevel Integer Defaults to user's vip level (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_201
 **/
exports.sapiV1LoanCollateralDataGET = function(timestamp,signature,collateralCoin,vipLevel,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "initialLTV" : "0.65",
    "vipLevel" : 1,
    "collateralCoin" : "BNB",
    "maxLimit" : "1000000",
    "marginCallLTV" : "0.75",
    "liquidationLTV" : "0.83"
  }, {
    "initialLTV" : "0.65",
    "vipLevel" : 1,
    "collateralCoin" : "BNB",
    "maxLimit" : "1000000",
    "marginCallLTV" : "0.75",
    "liquidationLTV" : "0.83"
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
 * Crypto Loan Customize Margin Call (TRADE)
 * Customize margin call for ongoing orders only.  Weight(UID): 6000
 *
 * marginCall Float 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Mandatory when collateralCoin is empty. Send either orderId or collateralCoin, if both parameters are sent, take orderId only. (optional)
 * collateralCoin String Coin used as collateral (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_203
 **/
exports.sapiV1LoanCustomizeMargin_callPOST = function(marginCall,timestamp,signature,orderId,collateralCoin,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "customizeTime" : 1575018510000,
    "orderId" : "100000001",
    "collateralCoin" : "BNB",
    "afterMarginCall" : "0.7",
    "preMarginCall" : "0.8"
  }, {
    "customizeTime" : 1575018510000,
    "orderId" : "100000001",
    "collateralCoin" : "BNB",
    "afterMarginCall" : "0.7",
    "preMarginCall" : "0.8"
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
 * Adjust LTV - Flexible Loan Adjust LTV (TRADE)
 *  Weight(UID): 6000
 *
 * adjustmentAmount Float 
 * direction String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_209
 **/
exports.sapiV1LoanFlexibleAdjustLtvPOST = function(adjustmentAmount,direction,timestamp,signature,loanCoin,collateralCoin,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "currentLTV" : "0.235",
  "collateralCoin" : "BNB",
  "loanCoin" : "BUSD",
  "adjustmentAmount" : "5.235",
  "direction" : "ADDITIONAL",
  "status" : "Succeeds"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Borrow - Get Flexible Loan Borrow History (USER_DATA)
 *  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_206
 **/
exports.sapiV1LoanFlexibleBorrowHistoryGET = function(timestamp,signature,loanCoin,collateralCoin,startTime,endTime,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "initialCollateralAmount" : "49.27565492",
    "initialLoanAmount" : "10000",
    "collateralCoin" : "BNB",
    "borrowTime" : 1575018510000,
    "loanCoin" : "BUSD",
    "status" : "Succeeds"
  }, {
    "initialCollateralAmount" : "49.27565492",
    "initialLoanAmount" : "10000",
    "collateralCoin" : "BNB",
    "borrowTime" : 1575018510000,
    "loanCoin" : "BUSD",
    "status" : "Succeeds"
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
 * Borrow - Flexible Loan Borrow (TRADE)
 *  Weight(UID): 6000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * loanAmount Float Loan amount (optional)
 * collateralCoin String Coin used as collateral (optional)
 * collateralAmount Float  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_204
 **/
exports.sapiV1LoanFlexibleBorrowPOST = function(timestamp,signature,loanCoin,loanAmount,collateralCoin,collateralAmount,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collateralCoin" : "BNB",
  "collateralAmount" : "50.5",
  "loanCoin" : "BUSD",
  "loanAmount" : "100.5",
  "status" : "Succeeds"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Flexible Loan Collateral Assets Data (USER_DATA)
 * Get LTV information and collateral limit of flexible loan's collateral assets. The collateral limit is shown in USD value.  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * collateralCoin String Coin used as collateral (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_212
 **/
exports.sapiV1LoanFlexibleCollateralDataGET = function(timestamp,signature,collateralCoin,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "initialLTV" : "0.01",
    "collateralCoin" : "BNB",
    "maxLimit" : "1000000",
    "marginCallLTV" : "0.7",
    "liquidationLTV" : "0.8"
  }, {
    "initialLTV" : "0.01",
    "collateralCoin" : "BNB",
    "maxLimit" : "1000000",
    "marginCallLTV" : "0.7",
    "liquidationLTV" : "0.8"
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
 * Get Flexible Loan Assets Data (USER_DATA)
 * Get interest rate and borrow limit of flexible loanable assets. The borrow limit is shown in USD value.  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_211
 **/
exports.sapiV1LoanFlexibleLoanableDataGET = function(timestamp,signature,loanCoin,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "flexibleInterestRate" : "0.01",
    "loanCoin" : "BNB",
    "flexibleMinLimit" : "100",
    "flexibleMaxLimit" : "1000000"
  }, {
    "flexibleInterestRate" : "0.01",
    "loanCoin" : "BNB",
    "flexibleMinLimit" : "100",
    "flexibleMaxLimit" : "1000000"
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
 * Adjust LTV - Get Flexible Loan LTV Adjustment History (USER_DATA)
 *  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_210
 **/
exports.sapiV1LoanFlexibleLtvAdjustmentHistoryGET = function(timestamp,signature,loanCoin,collateralCoin,startTime,endTime,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "adjustTime" : 1575018510000,
    "collateralCoin" : "BNB",
    "collateralAmount" : "5.75",
    "afterLTV" : "0.5",
    "loanCoin" : "BNB",
    "direction" : "ADDITIONAL",
    "preLTV" : "0.83"
  }, {
    "adjustTime" : 1575018510000,
    "collateralCoin" : "BNB",
    "collateralAmount" : "5.75",
    "afterLTV" : "0.5",
    "loanCoin" : "BNB",
    "direction" : "ADDITIONAL",
    "preLTV" : "0.83"
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
 * Borrow - Get Flexible Loan Ongoing Orders (USER_DATA)
 *  Weight(IP): 300
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_205
 **/
exports.sapiV1LoanFlexibleOngoingOrdersGET = function(timestamp,signature,loanCoin,collateralCoin,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "currentLTV" : "0.57",
    "collateralCoin" : "BNB",
    "collateralAmount" : "49.27565492",
    "loanCoin" : "BUSD",
    "totalDebt" : "10000"
  }, {
    "currentLTV" : "0.57",
    "collateralCoin" : "BNB",
    "collateralAmount" : "49.27565492",
    "loanCoin" : "BUSD",
    "totalDebt" : "10000"
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
 * Repay - Get Flexible Loan Repayment History (USER_DATA)
 *  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_208
 **/
exports.sapiV1LoanFlexibleRepayHistoryGET = function(timestamp,signature,loanCoin,collateralCoin,startTime,endTime,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "repayTime" : 1575018510000,
    "collateralCoin" : "BNB",
    "loanCoin" : "BUSD",
    "repayAmount" : "10000",
    "collateralReturn" : "100",
    "repayStatus" : "Repaid"
  }, {
    "repayTime" : 1575018510000,
    "collateralCoin" : "BNB",
    "loanCoin" : "BUSD",
    "repayAmount" : "10000",
    "collateralReturn" : "100",
    "repayStatus" : "Repaid"
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
 * Repay - Flexible Loan Repay (TRADE)
 *  Weight(IP): 6000
 *
 * repayAmount Float repay amount of loanCoin
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * collateralReturn Boolean  (optional)
 * fullRepayment Boolean  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_207
 **/
exports.sapiV1LoanFlexibleRepayPOST = function(repayAmount,timestamp,signature,loanCoin,collateralCoin,collateralReturn,fullRepayment,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "currentLTV" : "50.5",
  "collateralCoin" : "BNB",
  "loanCoin" : "BUSD",
  "remainingCollateral" : "50.5",
  "remainingDebt" : "50.5",
  "fullRepayment" : false,
  "repayStatus" : "Repaid"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Crypto Loans Income History (USER_DATA)
 * - If startTime and endTime are not sent, the recent 7-day data will be returned. - The max interval between startTime and endTime is 30 days.  Weight(UID): 6000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * type String All types will be returned by default.   * `borrowIn`   * `collateralSpent`   * `repayAmount`   * `collateralReturn` - Collateral return after repayment   * `addCollateral`   * `removeCollateral`   * `collateralReturnAfterLiquidation` (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer default 20, max 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1LoanIncomeGET = function(timestamp,signature,asset,type,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tranId" : "80423589583",
  "amount" : "100",
  "asset" : "BUSD",
  "type" : "borrowIn",
  "timestamp" : 1633771139847
}, {
  "tranId" : "80423589583",
  "amount" : "100",
  "asset" : "BUSD",
  "type" : "borrowIn",
  "timestamp" : 1633771139847
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Loanable Assets Data (USER_DATA)
 * Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value.  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * vipLevel Integer Defaults to user's vip level (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_200
 **/
exports.sapiV1LoanLoanableDataGET = function(timestamp,signature,loanCoin,vipLevel,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "_30dHourlyInterestRate" : "0.00000567",
    "_14dHourlyInterestRate" : "0.00000491",
    "loanCoin" : "BUSD",
    "_90dDailyInterestRate" : "0.000143",
    "_7dDailyInterestRate" : "0.000118",
    "minLimit" : "100",
    "_14dDailyInterestRate" : "0.000118",
    "_90dHourlyInterestRate" : "0.00000596",
    "vipLevel" : 1,
    "_180dHourlyInterestRate" : "0.00000631",
    "maxLimit" : "1000000",
    "_30dDailyInterestRate" : "0.000136",
    "_7dHourlyInterestRate" : "0.00000491",
    "_180dDailyInterestRate" : "0.000151"
  }, {
    "_30dHourlyInterestRate" : "0.00000567",
    "_14dHourlyInterestRate" : "0.00000491",
    "loanCoin" : "BUSD",
    "_90dDailyInterestRate" : "0.000143",
    "_7dDailyInterestRate" : "0.000118",
    "minLimit" : "100",
    "_14dDailyInterestRate" : "0.000118",
    "_90dHourlyInterestRate" : "0.00000596",
    "vipLevel" : 1,
    "_180dHourlyInterestRate" : "0.00000631",
    "maxLimit" : "1000000",
    "_30dDailyInterestRate" : "0.000136",
    "_7dHourlyInterestRate" : "0.00000491",
    "_180dDailyInterestRate" : "0.000151"
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
 * Get Loan LTV Adjustment History (USER_DATA)
 * If startTime and endTime are not sent, the recent 90-day data will be returned. The max interval between startTime and endTime is 180 days.  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Order ID (optional)
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * limit Long default 10, max 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_199
 **/
exports.sapiV1LoanLtvAdjustmentHistoryGET = function(timestamp,signature,orderId,loanCoin,collateralCoin,startTime,endTime,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "adjustTime" : 1575018510000,
    "amount" : "5.235",
    "collateralCoin" : "BNB",
    "orderId" : 756783308056935400,
    "afterLTV" : "0.56",
    "loanCoin" : "BUSD",
    "direction" : "ADDITIONAL",
    "preLTV" : "0.78"
  }, {
    "adjustTime" : 1575018510000,
    "amount" : "5.235",
    "collateralCoin" : "BNB",
    "orderId" : 756783308056935400,
    "afterLTV" : "0.56",
    "loanCoin" : "BUSD",
    "direction" : "ADDITIONAL",
    "preLTV" : "0.78"
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
 * Get Loan Ongoing Orders (USER_DATA)
 * Weight(IP): 300
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long orderId in POST /sapi/v1/loan/borrow (optional)
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * current Integer Current querying page. Start from 1; default:1, max:1000 (optional)
 * limit Long default 10, max 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_195
 **/
exports.sapiV1LoanOngoingOrdersGET = function(timestamp,signature,orderId,loanCoin,collateralCoin,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "currentLTV" : "0.57",
    "residualInterest" : "10.27687923",
    "orderId" : 100000001,
    "collateralCoin" : "BNB",
    "collateralAmount" : "49.27565492",
    "expirationTime" : 1575018510000,
    "loanCoin" : "BUSD",
    "totalDebt" : "10000"
  }, {
    "currentLTV" : "0.57",
    "residualInterest" : "10.27687923",
    "orderId" : 100000001,
    "collateralCoin" : "BNB",
    "collateralAmount" : "49.27565492",
    "expirationTime" : 1575018510000,
    "loanCoin" : "BUSD",
    "totalDebt" : "10000"
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
 * Check Collateral Repay Rate (USER_DATA)
 * Get the the rate of collateral coin / loan coin when using collateral repay, the rate will be valid within 8 second.  Weight(IP): 6000
 *
 * loanCoin String Coin loaned
 * collateralCoin String Coin used as collateral
 * repayAmount Float repay amount of loanCoin
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_202
 **/
exports.sapiV1LoanRepayCollateralRateGET = function(loanCoin,collateralCoin,repayAmount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collateralCoin" : "BUSD",
  "rate" : "300.36781234",
  "loanCoin" : "BUSD",
  "repayAmount" : "1000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Loan Repayment History (USER_DATA)
 * If startTime and endTime are not sent, the recent 90-day data will be returned. The max interval between startTime and endTime is 180 days.  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Order ID (optional)
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * limit Long default 10, max 100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_197
 **/
exports.sapiV1LoanRepayHistoryGET = function(timestamp,signature,orderId,loanCoin,collateralCoin,startTime,endTime,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "collateralUsed" : "0",
    "repayTime" : 1575018510000,
    "collateralCoin" : "BNB",
    "orderId" : 756783308056935400,
    "loanCoin" : "BUSD",
    "repayAmount" : "10000",
    "collateralReturn" : "49.27565492",
    "repayType" : "1",
    "repayStatus" : "Repaid"
  }, {
    "collateralUsed" : "0",
    "repayTime" : 1575018510000,
    "collateralCoin" : "BNB",
    "orderId" : 756783308056935400,
    "loanCoin" : "BUSD",
    "repayAmount" : "10000",
    "collateralReturn" : "49.27565492",
    "repayType" : "1",
    "repayStatus" : "Repaid"
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
 * Crypto Loan Repay (TRADE)
 * Weight(UID): 6000
 *
 * orderId Long Order ID
 * amount Double Repayment Amount
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * type Integer Default: 1. 1 for 'repay with borrowed coin'; 2 for 'repay with collateral'. (optional)
 * collateralReturn Boolean Default: TRUE. TRUE: Return extra collateral to spot account; FALSE: Keep extra collateral in the order. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_196
 **/
exports.sapiV1LoanRepayPOST = function(orderId,amount,timestamp,signature,type,collateralReturn,recvWindow) {
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

