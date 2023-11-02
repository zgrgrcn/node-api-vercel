'use strict';


/**
 * VIP Loan Borrow
 * VIP loan is available for VIP users only.  Weight(UID): 6000
 *
 * loanAccountId Long 
 * loanAmount Float 
 * collateralAccountId String 
 * collateralCoin String 
 * isFlexibleRate String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * loanTerm Integer  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_188
 **/
exports.sapiV1LoanVipBorrowPOST = function(loanAccountId,loanAmount,collateralAccountId,collateralCoin,isFlexibleRate,timestamp,signature,loanCoin,loanTerm,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "loanTerm" : "30",
  "collateralCoin" : "BUSD,USDT,ETH",
  "requestId" : "12345678",
  "collateralAccountId" : "12345678,12345678,12345678",
  "loanAccountId" : "12345678",
  "loanCoin" : "BTC",
  "isFlexibleRate" : "No",
  "loanAmount" : "100.55"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Check Locked Value of VIP Collateral Account (USER_DATA)
 * VIP loan is available for VIP users only.  Weight(IP): 6000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Order id (optional)
 * collateralAccountId Long  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_187
 **/
exports.sapiV1LoanVipCollateralAccountGET = function(timestamp,signature,orderId,collateralAccountId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "collateralCoin" : "BNB,BTC,ETH",
    "collateralAccountId" : "12345678",
    "collateralValue" : "500.27565492"
  }, {
    "collateralCoin" : "BNB,BTC,ETH",
    "collateralAccountId" : "12345678",
    "collateralValue" : "500.27565492"
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
 * Get Loanable Assets Data
 * Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value.  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * loanCoin String Coin loaned (optional)
 * vipLevel Integer Defaults to user's vip level (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_189
 **/
exports.sapiV1LoanVipLoanableDataGET = function(timestamp,signature,loanCoin,vipLevel,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "vipLevel" : 1,
    "_flexibleYearlyInterestRate" : "0.548595",
    "_60dDailyInterestRate" : "0.000145",
    "maxLimit" : "1000000",
    "loanCoin" : "BUSD",
    "_30dYearlyInterestRate" : "0.03450",
    "_60dYearlyInterestRate" : "0.04103",
    "minLimit" : "100",
    "_flexibleDailyInterestRate" : "0.001503",
    "_30dDailyInterestRate" : "0.000136"
  }, {
    "vipLevel" : 1,
    "_flexibleYearlyInterestRate" : "0.548595",
    "_60dDailyInterestRate" : "0.000145",
    "maxLimit" : "1000000",
    "loanCoin" : "BUSD",
    "_30dYearlyInterestRate" : "0.03450",
    "_60dYearlyInterestRate" : "0.04103",
    "minLimit" : "100",
    "_flexibleDailyInterestRate" : "0.001503",
    "_30dDailyInterestRate" : "0.000136"
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
 * Get VIP Loan Ongoing Orders (USER_DATA)
 * VIP loan is available for VIP users only.  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Order id (optional)
 * collateralAccountId Long  (optional)
 * loanCoin String Coin loaned (optional)
 * collateralCoin String Coin used as collateral (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * limit Integer Default 10; max 100. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_184
 **/
exports.sapiV1LoanVipOngoingOrdersGET = function(timestamp,signature,orderId,collateralAccountId,loanCoin,collateralCoin,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "currentLTV" : "0.57",
    "orderId" : 100000001,
    "collateralCoin" : "BNB,BTC,ETH",
    "collateralAccountId" : "12345678, 23456789",
    "loanCoin" : "BUSD",
    "totalDebt" : "10000",
    "loanTerm" : "30days",
    "residualInterest" : "10.27687923",
    "lockedCollateralValue" : "25000.27565492",
    "expirationTime" : 1575018510000,
    "collateralValue" : "25000.27565492",
    "loanDate" : "1676851200000",
    "totalCollateralValueAfterHaircut" : "25000.27565492",
    "loanRate" : "0.0123"
  }, {
    "currentLTV" : "0.57",
    "orderId" : 100000001,
    "collateralCoin" : "BNB,BTC,ETH",
    "collateralAccountId" : "12345678, 23456789",
    "loanCoin" : "BUSD",
    "totalDebt" : "10000",
    "loanTerm" : "30days",
    "residualInterest" : "10.27687923",
    "lockedCollateralValue" : "25000.27565492",
    "expirationTime" : 1575018510000,
    "collateralValue" : "25000.27565492",
    "loanDate" : "1676851200000",
    "totalCollateralValueAfterHaircut" : "25000.27565492",
    "loanRate" : "0.0123"
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
 * VIP Loan Renew
 * VIP loan is available for VIP users only.  Weight(UID): 6000
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Order id (optional)
 * loanTerm Integer  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_191
 **/
exports.sapiV1LoanVipRenewPOST = function(timestamp,signature,orderId,loanTerm,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "loanTerm" : "30",
  "collateralCoin" : "BUSD,USDT,ETH",
  "collateralAccountId" : "12345677,12345678,12345679",
  "loanAccountId" : "12345678",
  "loanCoin" : "BTC",
  "loanAmount" : "100.55"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get VIP Loan Repayment History (USER_DATA)
 * VIP loan is available for VIP users only.  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Order id (optional)
 * loanCoin String Coin loaned (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * limit Integer Default 10; max 100. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_186
 **/
exports.sapiV1LoanVipRepayHistoryGET = function(timestamp,signature,orderId,loanCoin,startTime,endTime,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "repayTime" : "1575018510000",
    "collateralCoin" : "BNB,BTC,ETH",
    "orderId" : "756783308056935434",
    "loanCoin" : "BUSD",
    "repayAmount" : "10000",
    "repayStatus" : "Repaid"
  }, {
    "repayTime" : "1575018510000",
    "collateralCoin" : "BNB,BTC,ETH",
    "orderId" : "756783308056935434",
    "loanCoin" : "BUSD",
    "repayAmount" : "10000",
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
 * VIP Loan Repay (TRADE)
 * VIP loan is available for VIP users only.  Weight(UID): 6000
 *
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * orderId Long Order id (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_185
 **/
exports.sapiV1LoanVipRepayPOST = function(amount,timestamp,signature,orderId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "currentLTV" : "0.25",
  "remainingPrincipal" : "100.5",
  "collateralCoin" : "BNB,BTC,ETH",
  "loanCoin" : "BUSD",
  "repayAmount" : "200.5",
  "remainingInterest" : "0",
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
 * Get Application Data
 * Get Application Data  Weight(IP): 400
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_190
 **/
exports.sapiV1LoanVipRequestDataGET = function(timestamp,signature,current,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "loanTerm" : 30,
    "orderId" : "12345678",
    "collateralCoin" : "BUSD,USDT,ETH",
    "requestId" : "12345678",
    "collateralAccountId" : "12345678,12345678,12345678",
    "loanAccountId" : "12345678",
    "loanCoin" : "BTC",
    "loanAmount" : "100.5",
    "status" : 0
  }, {
    "loanTerm" : 30,
    "orderId" : "12345678",
    "collateralCoin" : "BUSD,USDT,ETH",
    "requestId" : "12345678",
    "collateralAccountId" : "12345678,12345678,12345678",
    "loanAccountId" : "12345678",
    "loanCoin" : "BTC",
    "loanAmount" : "100.5",
    "status" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

