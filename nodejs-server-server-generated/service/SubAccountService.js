'use strict';


/**
 * Sub-account Spot Assets Summary (For Master Account)
 * Fetch sub-account deposit address  Weight(IP): 1
 *
 * email String Sub-account email
 * coin String Coin name
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * network String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_81
 **/
exports.sapiV1CapitalDepositSubAddressGET = function(email,coin,timestamp,signature,network,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "TDunhSa7jkTNuKrusUTU1MUHtqXoBPKETV",
  "tag" : "",
  "url" : "https://tronscan.org/#/address/TDunhSa7jkTNuKrusUTU1MUHtqXoBPKETV",
  "coin" : "USDT"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sub-account Deposit History (For Master Account)
 * Fetch sub-account deposit history  Weight(IP): 1
 *
 * email String Sub-account email
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * coin String Coin name (optional)
 * status Integer 0(0:pending,6: credited but cannot withdraw, 1:success) (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Long  (optional)
 * offset Integer  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1CapitalDepositSubHisrecGET = function(email,timestamp,signature,coin,status,startTime,endTime,limit,offset,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "insertTime" : 1599621997000,
  "amount" : "0.00999800",
  "address" : "0x788cabe9236ce061e5a892e1a59395a81fc8d62c",
  "confirmTimes" : "12/12",
  "addressTag" : "",
  "txId" : "0xaad4654a3234aa6118af9b4b335f5ae81c360b2394721c019b5d1e75328b09f3",
  "transferType" : 0,
  "coin" : "PAXG",
  "network" : "ETH",
  "status" : 1
}, {
  "insertTime" : 1599621997000,
  "amount" : "0.00999800",
  "address" : "0x788cabe9236ce061e5a892e1a59395a81fc8d62c",
  "confirmTimes" : "12/12",
  "addressTag" : "",
  "txId" : "0xaad4654a3234aa6118af9b4b335f5ae81c360b2394721c019b5d1e75328b09f3",
  "transferType" : 0,
  "coin" : "PAXG",
  "network" : "ETH",
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
 * Managed sub-account snapshot (For Investor Master Account)
 * - The query time period must be less then 30 days - Support query within the last one month only - If `startTime` and `endTime` not sent, return records of the last 7 days by default  Weight(IP): 2400
 *
 * email String Sub-account email
 * type String \"SPOT\", \"MARGIN\"(cross), \"FUTURES\"(UM)
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer min 7, max 30, default 7 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_104
 **/
exports.sapiV1Managed_subaccountAccountSnapshotGET = function(email,type,timestamp,signature,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 200,
  "snapshotVos" : [ {
    "data" : {
      "balances" : [ {
        "asset" : "BTC",
        "free" : "0.09905021",
        "locked" : "0.00000000"
      }, {
        "asset" : "BTC",
        "free" : "0.09905021",
        "locked" : "0.00000000"
      } ],
      "totalAssetOfBtc" : "0.09942700"
    },
    "updateTime" : 1576281599000,
    "type" : "spot"
  }, {
    "data" : {
      "balances" : [ {
        "asset" : "BTC",
        "free" : "0.09905021",
        "locked" : "0.00000000"
      }, {
        "asset" : "BTC",
        "free" : "0.09905021",
        "locked" : "0.00000000"
      } ],
      "totalAssetOfBtc" : "0.09942700"
    },
    "updateTime" : 1576281599000,
    "type" : "spot"
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
 * Managed sub-account asset details(For Investor Master Account)
 * Weight(IP): 1
 *
 * email String Sub-account email
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1Managed_subaccountAssetGET = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "totalBalance" : "0",
  "name" : "Injective Protocol",
  "inOrder" : "0",
  "coin" : "INJ",
  "availableBalance" : "0",
  "btcValue" : "0"
}, {
  "totalBalance" : "0",
  "name" : "Injective Protocol",
  "inOrder" : "0",
  "coin" : "INJ",
  "availableBalance" : "0",
  "btcValue" : "0"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Managed Sub-account Deposit Address (For Investor Master Account)
 * Get investor's managed sub-account deposit address  Weight(UID): 1
 *
 * email String 
 * coin String Coin name
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * network String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_109
 **/
exports.sapiV1Managed_subaccountDepositAddressGET = function(email,coin,timestamp,signature,network,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "0x206c22d833bb0bb2102da6b7c7d4c3eb14bcf73d",
  "tag" : "tag",
  "url" : "https://etherscan.io/address/0x206c22d833bb0bb2102da6b7c7d4c3eb14bcf73d",
  "coin" : "USDT"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deposit assets into the managed sub-account(For Investor Master Account)
 * Weight(IP): 1
 *
 * toEmail String Recipient email
 * asset String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_102
 **/
exports.sapiV1Managed_subaccountDepositPOST = function(toEmail,asset,amount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 66157362489
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Managed Sub-account Futures Asset Details (For Investor Master Account)
 * Investor can use this api to query managed sub account futures asset details
 *
 * email String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_106
 **/
exports.sapiV1Managed_subaccountFetch_future_assetGET = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "snapshotVos" : [ {
    "data" : {
      "assets" : [ {
        "walletBalance" : 100,
        "asset" : "USDT",
        "marginBalance" : 100
      }, {
        "walletBalance" : 100,
        "asset" : "USDT",
        "marginBalance" : 100
      } ],
      "position" : [ {
        "entryPrice" : 17000,
        "symbol" : "BTCUSDT",
        "positionAmt" : 0.1,
        "markPrice" : 17000
      }, {
        "entryPrice" : 17000,
        "symbol" : "BTCUSDT",
        "positionAmt" : 0.1,
        "markPrice" : 17000
      } ]
    },
    "updateTime" : 1626400907000,
    "type" : "FUTURES"
  }, {
    "data" : {
      "assets" : [ {
        "walletBalance" : 100,
        "asset" : "USDT",
        "marginBalance" : 100
      }, {
        "walletBalance" : 100,
        "asset" : "USDT",
        "marginBalance" : 100
      } ],
      "position" : [ {
        "entryPrice" : 17000,
        "symbol" : "BTCUSDT",
        "positionAmt" : 0.1,
        "markPrice" : 17000
      }, {
        "entryPrice" : 17000,
        "symbol" : "BTCUSDT",
        "positionAmt" : 0.1,
        "markPrice" : 17000
      } ]
    },
    "updateTime" : 1626400907000,
    "type" : "FUTURES"
  } ],
  "message" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Managed Sub-account List (For Investor)
 * Get investor's managed sub-account list.  Weight(UID): 60
 *
 * email String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * page Integer Default 1 (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_108
 **/
exports.sapiV1Managed_subaccountInfoGET = function(email,timestamp,signature,page,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 3,
  "managerSubUserInfoVoList" : [ {
    "isUserActive" : true,
    "bindParentEmail" : "wdyw8xsh8pey@test.com",
    "bindParentUserId" : 1000138475669,
    "insertTimeStamp" : 1678435149000,
    "managersubUserId" : 1000137842513,
    "isFutureEnabled" : true,
    "isSubUserEnabled" : true,
    "rootUserId" : 1000138475670,
    "email" : "test_0_virtual@kq3kno9imanagedsub.com",
    "isMarginEnabled" : true,
    "isSignedLVTRiskAgreement" : true
  }, {
    "isUserActive" : true,
    "bindParentEmail" : "wdyw8xsh8pey@test.com",
    "bindParentUserId" : 1000138475669,
    "insertTimeStamp" : 1678435149000,
    "managersubUserId" : 1000137842513,
    "isFutureEnabled" : true,
    "isSubUserEnabled" : true,
    "rootUserId" : 1000138475670,
    "email" : "test_0_virtual@kq3kno9imanagedsub.com",
    "isMarginEnabled" : true,
    "isSignedLVTRiskAgreement" : true
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
 * Query Managed Sub-account Margin Asset Details (For Investor Master Account)
 * Investor can use this api to query managed sub account margin asset details
 *
 * email String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_107
 **/
exports.sapiV1Managed_subaccountMarginAssetGET = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalAssetOfBtc" : "0",
  "totalLiabilityOfBtc" : "0",
  "marginLevel" : "999",
  "totalNetAssetOfBtc" : "0",
  "userAssets" : [ {
    "netAsset" : "0",
    "interest" : "0",
    "asset" : "BTC",
    "free" : "0",
    "locked" : "0",
    "borrowed" : "0"
  }, {
    "netAsset" : "0",
    "interest" : "0",
    "asset" : "BTC",
    "free" : "0",
    "locked" : "0",
    "borrowed" : "0"
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
 * Query Managed Sub Account Transfer Log (For Investor Master Account)
 * Investor can use this api to query managed sub account transfer log. This endpoint is available for investor of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team.  Weight(IP): 1
 *
 * email String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * limit Integer Default 500; max 1000. (optional)
 * transfers String Transfer Direction (FROM/TO) (optional)
 * transferFunctionAccountType String Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE) (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_105
 **/
exports.sapiV1Managed_subaccountQueryTransLogForInvestorGET = function(email,timestamp,signature,startTime,endTime,page,limit,transfers,transferFunctionAccountType,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 2,
  "managerSubTransferHistoryVos" : [ {
    "fromAccountType" : "SPOT",
    "tranId" : 91077779,
    "amount" : "0.01",
    "toAccountType" : "SPOT",
    "scheduledData" : 1626144956000,
    "createTime" : 1626144956000,
    "asset" : "BNB",
    "toEmail" : "wdywl0lddakh@test.com",
    "fromEmail" : "test_0_virtual@kq3kno9imanagedsub.com",
    "status" : "SUCCESS"
  }, {
    "fromAccountType" : "SPOT",
    "tranId" : 91077779,
    "amount" : "0.01",
    "toAccountType" : "SPOT",
    "scheduledData" : 1626144956000,
    "createTime" : 1626144956000,
    "asset" : "BNB",
    "toEmail" : "wdywl0lddakh@test.com",
    "fromEmail" : "test_0_virtual@kq3kno9imanagedsub.com",
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
 * Query Managed Sub Account Transfer Log (For Trading Team Master Account)
 * Trading team can use this api to query managed sub account transfer log. This endpoint is available for trading team of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team  Weight(IP): 60
 *
 * email String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * limit Integer Default 500; max 1000. (optional)
 * transfers String Transfer Direction (FROM/TO) (optional)
 * transferFunctionAccountType String Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE) (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_105
 **/
exports.sapiV1Managed_subaccountQueryTransLogForTradeParentGET = function(email,timestamp,signature,startTime,endTime,page,limit,transfers,transferFunctionAccountType,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 2,
  "managerSubTransferHistoryVos" : [ {
    "fromAccountType" : "SPOT",
    "tranId" : 91077779,
    "amount" : "0.01",
    "toAccountType" : "SPOT",
    "scheduledData" : 1626144956000,
    "createTime" : 1626144956000,
    "asset" : "BNB",
    "toEmail" : "wdywl0lddakh@test.com",
    "fromEmail" : "test_0_virtual@kq3kno9imanagedsub.com",
    "status" : "SUCCESS"
  }, {
    "fromAccountType" : "SPOT",
    "tranId" : 91077779,
    "amount" : "0.01",
    "toAccountType" : "SPOT",
    "scheduledData" : 1626144956000,
    "createTime" : 1626144956000,
    "asset" : "BNB",
    "toEmail" : "wdywl0lddakh@test.com",
    "fromEmail" : "test_0_virtual@kq3kno9imanagedsub.com",
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
 * Query Managed Sub Account Transfer Log (For Trading Team Sub Account)
 * Query Managed Sub Account Transfer Log (For Trading Team Sub Account)  Weight(UID): 60
 *
 * transfers String Transfer Direction
 * transferFunctionAccountType String Transfer function account type
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_110
 **/
exports.sapiV1Managed_subaccountQuery_trans_logGET = function(transfers,transferFunctionAccountType,timestamp,signature,startTime,endTime,page,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 2,
  "managerSubTransferHistoryVos" : [ {
    "fromAccountType" : "SPOT",
    "tranId" : 91077779,
    "amount" : "0.01",
    "toAccountType" : "SPOT",
    "scheduledData" : 1679416673000,
    "createTime" : 1679416673000,
    "asset" : "BNB",
    "toEmail" : "wdywl0lddakh@test.com",
    "fromEmail" : "test_0_virtual@kq3kno9imanagedsub.com",
    "status" : "SUCCESS"
  }, {
    "fromAccountType" : "SPOT",
    "tranId" : 91077779,
    "amount" : "0.01",
    "toAccountType" : "SPOT",
    "scheduledData" : 1679416673000,
    "createTime" : 1679416673000,
    "asset" : "BNB",
    "toEmail" : "wdywl0lddakh@test.com",
    "fromEmail" : "test_0_virtual@kq3kno9imanagedsub.com",
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
 * Withdrawl assets from the managed sub-account(For Investor Master Account)
 * Weight(IP): 1
 *
 * fromEmail String Sender email
 * asset String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * transferDate Long Withdrawals is automatically occur on the transfer date(UTC0). If a date is not selected, the withdrawal occurs right now (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_102
 **/
exports.sapiV1Managed_subaccountWithdrawPOST = function(fromEmail,asset,amount,timestamp,signature,transferDate,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 66157362489
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enable Leverage Token for Sub-account (For Master Account)
 * Weight(IP): 1
 *
 * email String Sub-account email
 * enableBlvt Boolean Only true for now
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_101
 **/
exports.sapiV1Sub_accountBlvtEnablePOST = function(email,enableBlvt,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "enableBlvt" : true,
  "email" : "123@test.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enable Options for Sub-account (For Master Account)
 * Enable Options for Sub-account (For Master Account).  Weight(IP): 1
 *
 * email String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_114
 **/
exports.sapiV1Sub_accountEoptionsEnablePOST = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isEOptionsEnabled" : true,
  "email" : "alice@test.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Detail on Sub-account's Futures Account (For Master Account)
 * Weight(IP): 10
 *
 * email String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_91
 **/
exports.sapiV1Sub_accountFuturesAccountGET = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalOpenOrderInitialMargin" : "0.00000000",
  "totalPositionInitialMargin" : "0.00000000",
  "feeTier" : 2,
  "totalInitialMargin" : "0.00000000",
  "canWithdraw" : true,
  "updateTime" : 1576756674610,
  "canTrade" : true,
  "totalMaintenanceMargin" : "0.00000000",
  "maxWithdrawAmount" : "0.88308000",
  "assets" : [ {
    "maxWithdrawAmount" : "0.88308000",
    "openOrderInitialMargin" : "0.00000000",
    "walletBalance" : "0.88308000",
    "maintenanceMargin" : "0.00000000",
    "positionInitialMargin" : "0.00000000",
    "unrealizedProfit" : "0.00000000",
    "asset" : "USDT",
    "initialMargin" : "0.00000000",
    "marginBalance" : "0.88308000"
  }, {
    "maxWithdrawAmount" : "0.88308000",
    "openOrderInitialMargin" : "0.00000000",
    "walletBalance" : "0.88308000",
    "maintenanceMargin" : "0.00000000",
    "positionInitialMargin" : "0.00000000",
    "unrealizedProfit" : "0.00000000",
    "asset" : "USDT",
    "initialMargin" : "0.00000000",
    "marginBalance" : "0.88308000"
  } ],
  "totalMarginBalance" : "0.88308000",
  "totalUnrealizedProfit" : "0.00000000",
  "totalWalletBalance" : "0.88308000",
  "canDeposit" : true,
  "asset" : "USDT",
  "email" : "abc@test.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Summary of Sub-account's Futures Account (For Master Account)
 * Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_92
 **/
exports.sapiV1Sub_accountFuturesAccountSummaryGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalOpenOrderInitialMargin" : "9.00000000",
  "subAccountList" : [ {
    "totalOpenOrderInitialMargin" : "9.00000000",
    "totalPositionInitialMargin" : "0.00000000",
    "totalInitialMargin" : "9.00000000",
    "totalMarginBalance" : "22.12659734",
    "totalUnrealizedProfit" : "0.00000000",
    "totalWalletBalance" : "22.12659734",
    "asset" : "USD",
    "email" : "123@test.com",
    "totalMaintenanceMargin" : "0.00000000"
  }, {
    "totalOpenOrderInitialMargin" : "9.00000000",
    "totalPositionInitialMargin" : "0.00000000",
    "totalInitialMargin" : "9.00000000",
    "totalMarginBalance" : "22.12659734",
    "totalUnrealizedProfit" : "0.00000000",
    "totalWalletBalance" : "22.12659734",
    "asset" : "USD",
    "email" : "123@test.com",
    "totalMaintenanceMargin" : "0.00000000"
  } ],
  "totalPositionInitialMargin" : "0.83137400",
  "totalInitialMargin" : "9.83137400",
  "totalMarginBalance" : "23.03235621",
  "totalUnrealizedProfit" : "0.03219710",
  "totalWalletBalance" : "22.15879444",
  "asset" : "USD",
  "totalMaintenanceMargin" : "0.41568700"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enable Futures for Sub-account (For Master Account)
 * Weight(IP): 1
 *
 * email String Sub-account email
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_90
 **/
exports.sapiV1Sub_accountFuturesEnablePOST = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isFuturesEnabled" : true,
  "email" : "123@test.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sub-account Futures Asset Transfer History (For Master Account)
 * Weight(IP): 1
 *
 * email String Sub-account email
 * futuresType Integer 1:USDT-margined Futures, 2: Coin-margined Futures
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * limit Integer Default value: 50, Max value: 500 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_77
 **/
exports.sapiV1Sub_accountFuturesInternalTransferGET = function(email,futuresType,timestamp,signature,startTime,endTime,page,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "futuresType" : 2,
  "success" : true,
  "transfers" : [ {
    "tranId" : 11897001102,
    "qty" : "1",
    "from" : "aaa@test.com",
    "to" : "bbb@test.com",
    "time" : 1544433328000,
    "asset" : "BTC"
  }, {
    "tranId" : 11897001102,
    "qty" : "1",
    "from" : "aaa@test.com",
    "to" : "bbb@test.com",
    "time" : 1544433328000,
    "asset" : "BTC"
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
 * Sub-account Futures Asset Transfer (For Master Account)
 * - Master account can transfer max 2000 times a minute  Weight(IP): 1
 *
 * fromEmail String Sender email
 * toEmail String Recipient email
 * futuresType Integer 1:USDT-margined Futures,2: Coin-margined Futures
 * asset String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_78
 **/
exports.sapiV1Sub_accountFuturesInternalTransferPOST = function(fromEmail,toEmail,futuresType,asset,amount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true,
  "txnId" : "2934662589"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Futures Position-Risk of Sub-account (For Master Account)
 * Weight(IP): 10
 *
 * email String Sub-account email
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1Sub_accountFuturesPositionRiskGET = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "entryPrice" : "9975.12000",
  "leverage" : "50",
  "maxNotional" : "1000000",
  "symbol" : "BTCUSDT",
  "markPrice" : "9973.50770517",
  "liquidationPrice" : "7963.54",
  "unrealizedProfit" : "-0.01612295",
  "positionAmount" : "0.010"
}, {
  "entryPrice" : "9975.12000",
  "leverage" : "50",
  "maxNotional" : "1000000",
  "symbol" : "BTCUSDT",
  "markPrice" : "9973.50770517",
  "liquidationPrice" : "7963.54",
  "unrealizedProfit" : "-0.01612295",
  "positionAmount" : "0.010"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Transfer for Sub-account (For Master Account)
 * Weight(IP): 1
 *
 * email String Sub-account email
 * asset String 
 * amount Double 
 * type Integer * `1` - transfer from subaccount's spot account to its USDT-margined futures account * `2` - transfer from subaccount's USDT-margined futures account to its spot account * `3` - transfer from subaccount's spot account to its COIN-margined futures account * `4` - transfer from subaccount's COIN-margined futures account to its spot account
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_94
 **/
exports.sapiV1Sub_accountFuturesTransferPOST = function(email,asset,amount,type,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "txnId" : "2966662589"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Sub-account List (For Master Account)
 * Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * email String Sub-account email (optional)
 * isFreeze String  (optional)
 * page Integer Default 1 (optional)
 * limit Integer Default 1; max 200 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_75
 **/
exports.sapiV1Sub_accountListGET = function(timestamp,signature,email,isFreeze,page,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subAccounts" : [ {
    "isFreeze" : false,
    "isAssetManagementSubAccount" : false,
    "isManagedSubAccount" : false,
    "createTime" : 1544433328000,
    "email" : "testsub@gmail.com"
  }, {
    "isFreeze" : false,
    "isAssetManagementSubAccount" : false,
    "isManagedSubAccount" : false,
    "createTime" : 1544433328000,
    "email" : "testsub@gmail.com"
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
 * Detail on Sub-account's Margin Account (For Master Account)
 * Weight(IP): 10
 *
 * email String Sub-account email
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_88
 **/
exports.sapiV1Sub_accountMarginAccountGET = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "marginUserAssetVoList" : [ {
    "netAsset" : "0.00499500",
    "interest" : "0.00000000",
    "asset" : "BTC",
    "free" : "0.00499500",
    "locked" : "0.00000000",
    "borrowed" : "0.00000000"
  }, {
    "netAsset" : "0.00499500",
    "interest" : "0.00000000",
    "asset" : "BTC",
    "free" : "0.00499500",
    "locked" : "0.00000000",
    "borrowed" : "0.00000000"
  } ],
  "marginTradeCoeffVo" : {
    "normalBar" : "2.00000000",
    "forceLiquidationBar" : "1.10000000",
    "marginCallBar" : "1.50000000"
  },
  "totalAssetOfBtc" : "6.82728457",
  "totalLiabilityOfBtc" : "0.58633215",
  "email" : "123@test.com",
  "marginLevel" : "11.64405625",
  "totalNetAssetOfBtc" : "6.24095242"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Summary of Sub-account's Margin Account (For Master Account)
 * Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_89
 **/
exports.sapiV1Sub_accountMarginAccountSummaryGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subAccountList" : [ {
    "totalAssetOfBtc" : "2.11111111",
    "totalLiabilityOfBtc" : "1.11111111",
    "email" : "123@test.com",
    "totalNetAssetOfBtc" : "1.00000000"
  }, {
    "totalAssetOfBtc" : "2.11111111",
    "totalLiabilityOfBtc" : "1.11111111",
    "email" : "123@test.com",
    "totalNetAssetOfBtc" : "1.00000000"
  } ],
  "totalAssetOfBtc" : "4.33333333",
  "totalLiabilityOfBtc" : "2.11111112",
  "totalNetAssetOfBtc" : "2.22222221"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enable Margin for Sub-account (For Master Account)
 * Weight(IP): 1
 *
 * email String Sub-account email
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_87
 **/
exports.sapiV1Sub_accountMarginEnablePOST = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "email" : "123@test.com",
  "isMarginEnabled" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Margin Transfer for Sub-account (For Master Account)
 * Weight(IP): 1
 *
 * email String Sub-account email
 * asset String 
 * amount Double 
 * type Integer * `1` - transfer from subaccount's spot account to margin account * `2` - transfer from subaccount's margin account to its spot account
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_94
 **/
exports.sapiV1Sub_accountMarginTransferPOST = function(email,asset,amount,type,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "txnId" : "2966662589"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sub-account Spot Assets Summary (For Master Account)
 * Get BTC valued asset summary of subaccounts.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * email String Sub-account email (optional)
 * page Integer Default 1 (optional)
 * size Integer Default:10 Max:20 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_80
 **/
exports.sapiV1Sub_accountSpotSummaryGET = function(timestamp,signature,email,page,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "spotSubUserAssetBtcVoList" : [ {
    "totalAsset" : "9999.00000000",
    "email" : "sub123@test.com"
  }, {
    "totalAsset" : "9999.00000000",
    "email" : "sub123@test.com"
  } ],
  "totalCount" : 1,
  "masterAccountTotalAsset" : "0.23231201"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sub-account's Status on Margin/Futures (For Master Account)
 * - If no `email` sent, all sub-accounts' information will be returned.  Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * email String Sub-account email (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1Sub_accountStatusGET = function(timestamp,signature,email,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isUserActive" : true,
  "insertTime" : 1570791523523,
  "mobile" : 1570791523523,
  "isFutureEnabled" : true,
  "isSubUserEnabled" : true,
  "email" : "123@test.com",
  "isMarginEnabled" : true
}, {
  "isUserActive" : true,
  "insertTime" : 1570791523523,
  "mobile" : 1570791523523,
  "isFutureEnabled" : true,
  "isSubUserEnabled" : true,
  "email" : "123@test.com",
  "isMarginEnabled" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get IP Restriction for a Sub-account API Key (For Master Account)
 * Weight(UID): 3000
 *
 * email String Sub-account email
 * subAccountApiKey String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_111
 **/
exports.sapiV1Sub_accountSubAccountApiIpRestrictionGET = function(email,subAccountApiKey,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apiKey" : "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf",
  "ipRestrict" : "true",
  "updateTime" : 1636369557189,
  "ipList" : [ "69.210.67.14", "8.34.21.10" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete IP List for a Sub-account API Key (For Master Account)
 * Weight(UID): 3000
 *
 * email String Sub-account email
 * subAccountApiKey String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * ipAddress String Can be added in batches, separated by commas (optional)
 * thirdPartyName String third party IP list name (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_112
 **/
exports.sapiV1Sub_accountSubAccountApiIpRestrictionIpListDELETE = function(email,subAccountApiKey,timestamp,signature,ipAddress,thirdPartyName,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apiKey" : "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf",
  "ipRestrict" : "true",
  "updateTime" : 1636369557189,
  "ipList" : [ "69.210.67.14", "thirdPartyName" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sub-account Spot Asset Transfer History (For Master Account)
 * - fromEmail and toEmail cannot be sent at the same time. - Return fromEmail equal master account email by default.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * fromEmail String Sub-account email (optional)
 * toEmail String Sub-account email (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * limit Integer Default 1 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1Sub_accountSubTransferHistoryGET = function(timestamp,signature,fromEmail,toEmail,startTime,endTime,page,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tranId" : 6489943656,
  "qty" : "10",
  "from" : "aaa@test.com",
  "to" : "bbb@test.com",
  "time" : 1544433328000,
  "asset" : "BTC",
  "status" : "SUCCESS"
}, {
  "tranId" : 6489943656,
  "qty" : "10",
  "from" : "aaa@test.com",
  "to" : "bbb@test.com",
  "time" : 1544433328000,
  "asset" : "BTC",
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
 * Query Sub-account Transaction Statistics (For Master Account)
 * Query Sub-account Transaction statistics (For Master Account).  Weight(UID): 60
 *
 * email String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_113
 **/
exports.sapiV1Sub_accountTransaction_statisticsGET = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "recent30BusdFuturesTotal" : "0",
  "tradeInfoVos" : [ {
    "btc" : 0,
    "date" : 1676851200000,
    "btcFutures" : 0,
    "busdFutures" : 0,
    "busdMargin" : 0,
    "btcMargin" : 0,
    "busd" : 0,
    "userId" : 1000138138384
  }, {
    "btc" : 0,
    "date" : 1676851200000,
    "btcFutures" : 0,
    "busdFutures" : 0,
    "busdMargin" : 0,
    "btcMargin" : 0,
    "busd" : 0,
    "userId" : 1000138138384
  } ],
  "recent30BtcTotal" : "0",
  "recent30BtcFuturesTotal" : "0",
  "recent30BusdTotal" : "0",
  "recent30BtcMarginTotal" : "0",
  "recent30BusdMarginTotal" : "0"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Transfer to Master (For Sub-account)
 * Weight(IP): 1
 *
 * asset String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_94
 **/
exports.sapiV1Sub_accountTransferSubToMasterPOST = function(asset,amount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "txnId" : "2966662589"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Transfer to Sub-account of Same Master (For Sub-account)
 * Weight(IP): 1
 *
 * toEmail String Recipient email
 * asset String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_94
 **/
exports.sapiV1Sub_accountTransferSubToSubPOST = function(toEmail,asset,amount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "txnId" : "2966662589"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sub-account Transfer History (For Sub-account)
 * - If `type` is not sent, the records of type 2: transfer out will be returned by default. - If `startTime` and `endTime` are not sent, the recent 30-day data will be returned.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * type Integer * `1` - transfer in * `2` - transfer out (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1Sub_accountTransferSubUserHistoryGET = function(timestamp,signature,asset,type,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "fromAccountType" : "SPOT",
  "tranId" : 11798835829,
  "toAccountType" : "SPOT",
  "qty" : "1",
  "counterParty" : "master",
  "time" : 1544433325000,
  "type" : 1,
  "asset" : "BTC",
  "email" : "master@test.com",
  "status" : "SUCCESS"
}, {
  "fromAccountType" : "SPOT",
  "tranId" : 11798835829,
  "toAccountType" : "SPOT",
  "qty" : "1",
  "counterParty" : "master",
  "time" : 1544433325000,
  "type" : 1,
  "asset" : "BTC",
  "email" : "master@test.com",
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
 * Universal Transfer History (For Master Account)
 * - `fromEmail` and `toEmail` cannot be sent at the same time. - Return `fromEmail` equal master account email by default. - The query time period must be less then 30 days. - If startTime and endTime not sent, return records of the last 30 days by default.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * fromEmail String Sub-account email (optional)
 * toEmail String Sub-account email (optional)
 * clientTranId String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * page Integer Default 1 (optional)
 * limit Integer Default 500, Max 500 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1Sub_accountUniversalTransferGET = function(timestamp,signature,fromEmail,toEmail,clientTranId,startTime,endTime,page,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tranId" : 11945860693,
  "fromAccountType" : "SPOT",
  "amount" : "0.1",
  "toAccountType" : "COIN_FUTURE",
  "createTimeStamp" : 1544433325000,
  "asset" : "BTC",
  "toEmail" : "subaccount1@test.com",
  "clientTranId" : "11945860694",
  "fromEmail" : "master@test.com",
  "status" : "SUCCESS"
}, {
  "tranId" : 11945860693,
  "fromAccountType" : "SPOT",
  "amount" : "0.1",
  "toAccountType" : "COIN_FUTURE",
  "createTimeStamp" : 1544433325000,
  "asset" : "BTC",
  "toEmail" : "subaccount1@test.com",
  "clientTranId" : "11945860694",
  "fromEmail" : "master@test.com",
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
 * Universal Transfer (For Master Account)
 * - You need to enable \"internal transfer\" option for the api key which requests this endpoint. - Transfer from master account by default if fromEmail is not sent. - Transfer to master account by default if toEmail is not sent. - Supported transfer scenarios:   - Master account SPOT transfer to sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN   - Sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN transfer to master account SPOT   - Transfer between two sub-account SPOT accounts  Weight(IP): 1
 *
 * fromAccountType String 
 * toAccountType String 
 * asset String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * fromEmail String Sub-account email (optional)
 * toEmail String Sub-account email (optional)
 * clientTranId String  (optional)
 * symbol String Only supported under ISOLATED_MARGIN type (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_97
 **/
exports.sapiV1Sub_accountUniversalTransferPOST = function(fromAccountType,toAccountType,asset,amount,timestamp,signature,fromEmail,toEmail,clientTranId,symbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 11945860693,
  "clientTranId" : "11945860694"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Virtual Sub-account(For Master Account)
 * - This request will generate a virtual sub account under your master account. - You need to enable \"trade\" option for the api key which requests this endpoint.  Weight(IP): 1
 *
 * subAccountString String Please input a string. We will create a virtual email using that string for you to register
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_74
 **/
exports.sapiV1Sub_accountVirtualSubAccountPOST = function(subAccountString,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "email" : "addsdd_virtual@aasaixwqnoemail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Detail on Sub-account's Futures Account V2 (For Master Account)
 * Weight(IP): 1
 *
 * email String Sub-account email
 * futuresType Integer * `1` - USDT Margined Futures * `2` - COIN Margined Futures
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_98
 **/
exports.sapiV2Sub_accountFuturesAccountGET = function(email,futuresType,timestamp,signature,recvWindow) {
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
 * Summary of Sub-account's Futures Account V2 (For Master Account)
 * Weight(IP): 10
 *
 * futuresType Integer * `1` - USDT Margined Futures * `2` - COIN Margined Futures
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * page Integer Default 1 (optional)
 * limit Integer Default 10, Max 20 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_99
 **/
exports.sapiV2Sub_accountFuturesAccountSummaryGET = function(futuresType,timestamp,signature,page,limit,recvWindow) {
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
 * Futures Position-Risk of Sub-account V2 (For Master Account)
 * Weight(IP): 1
 *
 * email String Sub-account email
 * futuresType Integer * `1` - USDT Margined Futures * `2` - COIN Margined Futures
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_100
 **/
exports.sapiV2Sub_accountFuturesPositionRiskGET = function(email,futuresType,timestamp,signature,recvWindow) {
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
 * Update IP Restriction for Sub-Account API key (For Master Account)
 * Update IP Restriction for Sub-Account API key  Weight(UID): 3000
 *
 * email String Sub-account email
 * subAccountApiKey String 
 * status String IP Restriction status. 1 = IP Unrestricted. 2 = Restrict access to trusted IPs only. 3 = Restrict access to users' trusted third party IPs only
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * thirdPartyName String third party IP list name (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_115
 **/
exports.sapiV2Sub_accountSubAccountApiIpRestrictionPOST = function(email,subAccountApiKey,status,timestamp,signature,thirdPartyName,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apiKey" : "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf",
  "updateTime" : 1636369557189,
  "ipList" : [ "69.210.67.14", "8.34.21.10", "thirdPartyName" ],
  "status" : "2"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sub-account Assets (For Master Account)
 * Fetch sub-account assets  Weight(IP): 1
 *
 * email String Sub-account email
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_79
 **/
exports.sapiV3Sub_accountAssetsGET = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "balances" : [ {
    "asset" : "ADA",
    "free" : 10000,
    "locked" : 0
  }, {
    "asset" : "ADA",
    "free" : 10000,
    "locked" : 0
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
 * Query Sub-account Assets (For Master Account)
 * Fetch sub-account assets  Weight(UID): 60
 *
 * email String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_116
 **/
exports.sapiV4Sub_accountAssetsGET = function(email,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "balances" : [ {
    "asset" : "BNB",
    "free" : "10000",
    "locked" : "0"
  }, {
    "asset" : "BNB",
    "free" : "10000",
    "locked" : "0"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

