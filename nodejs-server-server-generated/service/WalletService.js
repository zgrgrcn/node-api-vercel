'use strict';


/**
 * Get API Key Permission (USER_DATA)
 * Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_72
 **/
exports.sapiV1AccountApiRestrictionsGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "enableSpotAndMarginTrading" : false,
  "tradingAuthorityExpirationTime" : 1628985600000,
  "createTime" : 1623840271000,
  "enableInternalTransfer" : true,
  "permitsUniversalTransfer" : true,
  "enableReading" : true,
  "enableMargin" : false,
  "ipRestrict" : false,
  "enableFutures" : false,
  "enableVanillaOptions" : false,
  "enableWithdrawals" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Account API Trading Status (USER_DATA)
 * Fetch account API trading status with details.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_58
 **/
exports.sapiV1AccountApiTradingStatusGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "triggerCondition" : {
      "UFR" : 300,
      "GCR" : 150,
      "IFER" : 150
    },
    "isLocked" : false,
    "plannedRecoverTime" : 0,
    "updateTime" : 1547630471725,
    "indicators" : {
      "BTCUSDT" : [ {
        "c" : 20,
        "t" : 0.99,
        "v" : 0.05,
        "i" : "UFR"
      }, {
        "c" : 20,
        "t" : 0.99,
        "v" : 0.05,
        "i" : "UFR"
      } ]
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


/**
 * Disable Fast Withdraw Switch (USER_DATA)
 * - This request will disable fastwithdraw switch under your account. - You need to enable \"trade\" option for the api key which requests this endpoint.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns Object
 **/
exports.sapiV1AccountDisableFastWithdrawSwitchPOST = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enable Fast Withdraw Switch (USER_DATA)
 * - This request will enable fastwithdraw switch under your account. You need to enable \"trade\" option for the api key which requests this endpoint. - When Fast Withdraw Switch is on, transferring funds to a Binance account will be done instantly. There is no on-chain transaction, no transaction ID and no withdrawal fee.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns Object
 **/
exports.sapiV1AccountEnableFastWithdrawSwitchPOST = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Daily Account Snapshot (USER_DATA)
 * - The query time period must be less than 30 days - Support query within the last one month only - If startTimeand endTime not sent, return records of the last 7 days by default  Weight(IP): 2400
 *
 * type String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_52
 **/
exports.sapiV1AccountSnapshotGET = function(type,timestamp,signature,startTime,endTime,limit,recvWindow) {
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
 * Account Status (USER_DATA)
 * Fetch account status detail.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_57
 **/
exports.sapiV1AccountStatusGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "Normal"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Asset Detail (USER_DATA)
 * Fetch details of assets supported on Binance.  - Please get network and other deposit or withdraw details from `GET /sapi/v1/capital/config/getall`.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_63
 **/
exports.sapiV1AssetAssetDetailGET = function(timestamp,signature,asset,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "CTR" : {
    "minWithdrawAmount" : "70.00000000",
    "depositStatus" : false,
    "withdrawFee" : 35,
    "withdrawStatus" : true,
    "depositTip" : "Delisted, Deposit Suspended"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Asset Dividend Record (USER_DATA)
 * Query asset Dividend Record  Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_62
 **/
exports.sapiV1AssetAssetDividendGET = function(timestamp,signature,asset,startTime,endTime,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "tranId" : 2968885920,
    "amount" : "10.00000000",
    "id" : 242006910,
    "asset" : "BHFT",
    "divTime" : 1563189166000,
    "enInfo" : "BHFT distribution"
  }, {
    "tranId" : 2968885920,
    "amount" : "10.00000000",
    "id" : 242006910,
    "asset" : "BHFT",
    "divTime" : 1563189166000,
    "enInfo" : "BHFT distribution"
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
 * Convert Transfer (USER_DATA)
 * Convert transfer, convert between BUSD and stablecoins. If the clientId has been used before, will not do the convert transfer, the original transfer will be returned.  Weight(UID): 5
 *
 * clientTranId String The unique flag, the min length is 20
 * asset String 
 * amount Double 
 * targetAsset String Target asset you want to convert
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_69
 **/
exports.sapiV1AssetConvert_transferPOST = function(clientTranId,asset,amount,targetAsset,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 118263407119,
  "status" : "S"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query Convert Transfer (USER_DATA)
 * Weight(UID): 5
 *
 * startTime Long UTC timestamp in ms
 * endTime Long UTC timestamp in ms
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * tranId Long The transaction id (optional)
 * asset String If it is blank, we will match deducted asset and target asset. (optional)
 * accountType String MAIN: main account. CARD: funding account. If it is blank, we will query spot and card wallet, otherwise, we just query the corresponding wallet (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_70
 **/
exports.sapiV1AssetConvert_transferQueryByPageGET = function(startTime,endTime,timestamp,signature,tranId,asset,accountType,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "tranId" : 118263407119,
    "deductedAsset" : "BUSD",
    "targetAmount" : "1",
    "deductedAmount" : "1",
    "targetAsset" : "USDC",
    "accountType" : "MAIN",
    "time" : 1664442078000,
    "type" : 244,
    "status" : "S"
  }, {
    "tranId" : 118263407119,
    "deductedAsset" : "BUSD",
    "targetAmount" : "1",
    "deductedAmount" : "1",
    "targetAsset" : "USDC",
    "accountType" : "MAIN",
    "time" : 1664442078000,
    "type" : 244,
    "status" : "S"
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
 * Query User Delegation History(For Master Account) (USER_DATA)
 * Query User Delegation History  Weight(IP): 60
 *
 * email String 
 * startTime Long 
 * endTime Long 
 * asset String 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * type String  (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_85
 **/
exports.sapiV1AssetCustodyTransfer_historyGET = function(email,startTime,endTime,asset,timestamp,signature,type,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 3316,
  "rows" : [ {
    "amount" : "1",
    "transferType" : "Undelegate",
    "time" : 1695205406000,
    "asset" : "ETH",
    "clientTranId" : "293915932290879488"
  }, {
    "amount" : "1",
    "transferType" : "Undelegate",
    "time" : 1695205406000,
    "asset" : "ETH",
    "clientTranId" : "293915932290879488"
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
 * DustLog(USER_DATA)
 * Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_59
 **/
exports.sapiV1AssetDribbletGET = function(timestamp,signature,startTime,endTime,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 8,
  "userAssetDribblets" : [ {
    "totalServiceChargeAmount" : "0.00002699",
    "transId" : 45178372831,
    "operateTime" : 1615985535000,
    "totalTransferedAmount" : "0.00132256",
    "userAssetDribbletDetails" : [ {
      "serviceChargeAmount" : "0.000009",
      "amount" : "0.0009",
      "transId" : 4359321,
      "operateTime" : 1615985535000,
      "transferedAmount" : "0.000441",
      "fromAsset" : "USDT"
    }, {
      "serviceChargeAmount" : "0.000009",
      "amount" : "0.0009",
      "transId" : 4359321,
      "operateTime" : 1615985535000,
      "transferedAmount" : "0.000441",
      "fromAsset" : "USDT"
    } ]
  }, {
    "totalServiceChargeAmount" : "0.00002699",
    "transId" : 45178372831,
    "operateTime" : 1615985535000,
    "totalTransferedAmount" : "0.00132256",
    "userAssetDribbletDetails" : [ {
      "serviceChargeAmount" : "0.000009",
      "amount" : "0.0009",
      "transId" : 4359321,
      "operateTime" : 1615985535000,
      "transferedAmount" : "0.000441",
      "fromAsset" : "USDT"
    }, {
      "serviceChargeAmount" : "0.000009",
      "amount" : "0.0009",
      "transId" : 4359321,
      "operateTime" : 1615985535000,
      "transferedAmount" : "0.000441",
      "fromAsset" : "USDT"
    } ]
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
 * Dust Transfer (USER_DATA)
 * Convert dust assets to BNB.  Weight(UID): 10
 *
 * asset List The asset being converted. For example, asset=BTC&asset=USDT
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_61
 **/
exports.sapiV1AssetDustPOST = function(asset,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalTransfered" : "1.05127099",
  "transferResult" : [ {
    "tranId" : 2970932918,
    "serviceChargeAmount" : "0.00500000",
    "amount" : "0.03000000",
    "operateTime" : 1563368549307,
    "transferedAmount" : "0.25000000",
    "fromAsset" : "ETH"
  }, {
    "tranId" : 2970932918,
    "serviceChargeAmount" : "0.00500000",
    "amount" : "0.03000000",
    "operateTime" : 1563368549307,
    "transferedAmount" : "0.25000000",
    "fromAsset" : "ETH"
  } ],
  "totalServiceCharge" : "0.02102542"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Assets That Can Be Converted Into BNB (USER_DATA)
 * Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_60
 **/
exports.sapiV1AssetDust_btcPOST = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "dribbletPercentage" : "0.02",
  "totalTransferBNB" : "0.01777302",
  "details" : [ {
    "toBTC" : "0.00016848",
    "assetFullName" : "ADA",
    "toBNBOffExchange" : "0.01741756",
    "exchange" : "0.00035546",
    "asset" : "ADA",
    "toBNB" : "0.01777302",
    "amountFree" : "6.21"
  }, {
    "toBTC" : "0.00016848",
    "assetFullName" : "ADA",
    "toBNBOffExchange" : "0.01741756",
    "exchange" : "0.00035546",
    "asset" : "ADA",
    "toBNB" : "0.01777302",
    "amountFree" : "6.21"
  } ],
  "totalTransferBtc" : "0.00016848"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Funding Wallet (USER_DATA)
 * - Currently supports querying the following business assetsï¼šBinance Pay, Binance Card, Binance Gift Card, Stock Token  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * needBtcValuation String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1AssetGet_funding_assetPOST = function(timestamp,signature,asset,needBtcValuation,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "freeze" : "0",
  "withdrawing" : "0",
  "asset" : "USDT",
  "free" : "1",
  "locked" : "0",
  "btcValuation" : "0.00000091"
}, {
  "freeze" : "0",
  "withdrawing" : "0",
  "asset" : "USDT",
  "free" : "1",
  "locked" : "0",
  "btcValuation" : "0.00000091"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Cloud-Mining payment and refund history (USER_DATA)
 * The query of Cloud-Mining payment and refund history  Weight(UID): 600
 *
 * startTime Long UTC timestamp in ms
 * endTime Long UTC timestamp in ms
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * tranId Long The transaction id (optional)
 * clientTranId String The unique flag (optional)
 * asset String If it is blank, we will query all assets (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_71
 **/
exports.sapiV1AssetLedger_transferCloud_miningQueryByPageGET = function(startTime,endTime,timestamp,signature,tranId,clientTranId,asset,current,size,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "tranId" : 121230610120,
    "amount" : "1",
    "createTime" : 1667880112000,
    "type" : 248,
    "asset" : "USDT",
    "status" : "S"
  }, {
    "tranId" : 121230610120,
    "amount" : "1",
    "createTime" : 1667880112000,
    "type" : 248,
    "asset" : "USDT",
    "status" : "S"
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
 * Trade Fee (USER_DATA)
 * Fetch trade fee  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1AssetTradeFeeGET = function(timestamp,signature,symbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "symbol" : "ADABNB",
  "makerCommission" : "0.001",
  "takerCommission" : "0.001"
}, {
  "symbol" : "ADABNB",
  "makerCommission" : "0.001",
  "takerCommission" : "0.001"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query User Universal Transfer History (USER_DATA)
 * - `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN - `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN - Support query within the last 6 months only - If `startTime` and `endTime` not sent, return records of the last 7 days by default  Weight(IP): 1
 *
 * type String Universal transfer type
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * current Integer Current querying page. Start from 1. Default:1 (optional)
 * size Integer Default:10 Max:100 (optional)
 * fromSymbol String Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN (optional)
 * toSymbol String Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_65
 **/
exports.sapiV1AssetTransferGET = function(type,timestamp,signature,startTime,endTime,current,size,fromSymbol,toSymbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 1,
  "rows" : [ {
    "tranId" : 11415955596,
    "amount" : "1",
    "asset" : "USDT",
    "type" : "MAIN_UMFUTUR",
    "status" : "CONFIRMED",
    "timestamp" : 1544433328000
  }, {
    "tranId" : 11415955596,
    "amount" : "1",
    "asset" : "USDT",
    "type" : "MAIN_UMFUTUR",
    "status" : "CONFIRMED",
    "timestamp" : 1544433328000
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
 * User Universal Transfer (USER_DATA)
 * You need to enable `Permits Universal Transfer` option for the api key which requests this endpoint.  - `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN - `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN  ENUM of transfer types:   - MAIN_UMFUTURE Spot account transfer to USDâ“ˆ-M Futures account   - MAIN_CMFUTURE Spot account transfer to COIN-M Futures account   - MAIN_MARGIN Spot account transfer to Margin(cross)account   - UMFUTURE_MAIN USDâ“ˆ-M Futures account transfer to Spot account   - UMFUTURE_MARGIN USDâ“ˆ-M Futures account transfer to Margin(cross)account   - CMFUTURE_MAIN COIN-M Futures account transfer to Spot account   - CMFUTURE_MARGIN COIN-M Futures account transfer to Margin(cross) account   - MARGIN_MAIN Margin(cross)account transfer to Spot account   - MARGIN_UMFUTURE Margin(cross)account transfer to USDâ“ˆ-M Futures   - MARGIN_CMFUTURE Margin(cross)account transfer to COIN-M Futures   - ISOLATEDMARGIN_MARGIN Isolated margin account transfer to Margin(cross) account   - MARGIN_ISOLATEDMARGIN Margin(cross) account transfer to Isolated margin account   - ISOLATEDMARGIN_ISOLATEDMARGIN Isolated margin account transfer to Isolated margin account   - MAIN_FUNDING Spot account transfer to Funding account   - FUNDING_MAIN Funding account transfer to Spot account   - FUNDING_UMFUTURE Funding account transfer to UMFUTURE account   - UMFUTURE_FUNDING UMFUTURE account transfer to Funding account   - MARGIN_FUNDING MARGIN account transfer to Funding account   - FUNDING_MARGIN Funding account transfer to Margin account   - FUNDING_CMFUTURE Funding account transfer to CMFUTURE account   - CMFUTURE_FUNDING CMFUTURE account transfer to Funding account   - MAIN_OPTION Spot account transfer to Options account   - OPTION_MAIN Options account transfer to Spot account   - UMFUTURE_OPTION USDâ“ˆ-M Futures account transfer to Options account   - OPTION_UMFUTURE Options account transfer to USDâ“ˆ-M Futures account   - MARGIN_OPTION Margin(cross)account transfer to Options account   - OPTION_MARGIN Options account transfer to Margin(cross)account   - FUNDING_OPTION Funding account transfer to Options account   - OPTION_FUNDING Options account transfer to Funding account   - MAIN_PORTFOLIO_MARGIN Spot account transfer to Portfolio Margin account   - PORTFOLIO_MARGIN_MAIN Portfolio Margin account transfer to Spot account   - MAIN_ISOLATED_MARGIN Spot account transfer to Isolated margin account   - ISOLATED_MARGIN_MAIN Isolated margin account transfer to Spot account  Weight(IP): 1
 *
 * type String Universal transfer type
 * asset String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * fromSymbol String Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN (optional)
 * toSymbol String Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_66
 **/
exports.sapiV1AssetTransferPOST = function(type,asset,amount,timestamp,signature,fromSymbol,toSymbol,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tranId" : 13526853623
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query User Wallet Balance (USER_DATA)
 * Query User Wallet Balance  Weight(IP): 60
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1AssetWalletBalanceGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "balance" : "0",
  "walletName" : "Spot",
  "activate" : true
}, {
  "balance" : "0",
  "walletName" : "Spot",
  "activate" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * All Coins' Information (USER_DATA)
 * Get information of coins (available for deposit and withdraw) for user.  Weight(IP): 10
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1CapitalConfigGetallGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "trading" : true,
  "withdrawAllEnable" : true,
  "isLegalMoney" : false,
  "withdrawing" : "0.00000000",
  "storage" : "0.00000000",
  "ipoing" : "0.00000000",
  "freeze" : "0.00000000",
  "ipoable" : "0.00000000",
  "name" : "Bitcoin",
  "depositAllEnable" : true,
  "free" : "0.00000000",
  "locked" : "0.00000000",
  "networkList" : [ {
    "withdrawIntegerMultiple" : "0.00000001",
    "withdrawMax" : "9999999999.99999999",
    "withdrawFee" : "0.00000220",
    "unLockConfirm" : 0,
    "minConfirm" : 1,
    "network" : "ETH",
    "depositDesc" : "Wallet Maintenance, Deposit Suspended",
    "depositEnable" : false,
    "addressRegex" : "^(bnb1)[0-9a-z]{38}$",
    "specialTips" : "Both a MEMO and an Address are required to successfully deposit your BEP2-BTCB tokens to Binance.",
    "isDefault" : false,
    "memoRegex" : "^[0-9A-Za-z\\-_]{1,120}$",
    "withdrawEnable" : false,
    "sameAddress" : true,
    "name" : "BEP2",
    "withdrawMin" : "0.00000440",
    "resetAddressStatus" : false,
    "coin" : "BTC",
    "withdrawDesc" : "Wallet Maintenance, Withdrawal Suspended"
  }, {
    "withdrawIntegerMultiple" : "0.00000001",
    "withdrawMax" : "9999999999.99999999",
    "withdrawFee" : "0.00000220",
    "unLockConfirm" : 0,
    "minConfirm" : 1,
    "network" : "ETH",
    "depositDesc" : "Wallet Maintenance, Deposit Suspended",
    "depositEnable" : false,
    "addressRegex" : "^(bnb1)[0-9a-z]{38}$",
    "specialTips" : "Both a MEMO and an Address are required to successfully deposit your BEP2-BTCB tokens to Binance.",
    "isDefault" : false,
    "memoRegex" : "^[0-9A-Za-z\\-_]{1,120}$",
    "withdrawEnable" : false,
    "sameAddress" : true,
    "name" : "BEP2",
    "withdrawMin" : "0.00000440",
    "resetAddressStatus" : false,
    "coin" : "BTC",
    "withdrawDesc" : "Wallet Maintenance, Withdrawal Suspended"
  } ],
  "coin" : "BTC"
}, {
  "trading" : true,
  "withdrawAllEnable" : true,
  "isLegalMoney" : false,
  "withdrawing" : "0.00000000",
  "storage" : "0.00000000",
  "ipoing" : "0.00000000",
  "freeze" : "0.00000000",
  "ipoable" : "0.00000000",
  "name" : "Bitcoin",
  "depositAllEnable" : true,
  "free" : "0.00000000",
  "locked" : "0.00000000",
  "networkList" : [ {
    "withdrawIntegerMultiple" : "0.00000001",
    "withdrawMax" : "9999999999.99999999",
    "withdrawFee" : "0.00000220",
    "unLockConfirm" : 0,
    "minConfirm" : 1,
    "network" : "ETH",
    "depositDesc" : "Wallet Maintenance, Deposit Suspended",
    "depositEnable" : false,
    "addressRegex" : "^(bnb1)[0-9a-z]{38}$",
    "specialTips" : "Both a MEMO and an Address are required to successfully deposit your BEP2-BTCB tokens to Binance.",
    "isDefault" : false,
    "memoRegex" : "^[0-9A-Za-z\\-_]{1,120}$",
    "withdrawEnable" : false,
    "sameAddress" : true,
    "name" : "BEP2",
    "withdrawMin" : "0.00000440",
    "resetAddressStatus" : false,
    "coin" : "BTC",
    "withdrawDesc" : "Wallet Maintenance, Withdrawal Suspended"
  }, {
    "withdrawIntegerMultiple" : "0.00000001",
    "withdrawMax" : "9999999999.99999999",
    "withdrawFee" : "0.00000220",
    "unLockConfirm" : 0,
    "minConfirm" : 1,
    "network" : "ETH",
    "depositDesc" : "Wallet Maintenance, Deposit Suspended",
    "depositEnable" : false,
    "addressRegex" : "^(bnb1)[0-9a-z]{38}$",
    "specialTips" : "Both a MEMO and an Address are required to successfully deposit your BEP2-BTCB tokens to Binance.",
    "isDefault" : false,
    "memoRegex" : "^[0-9A-Za-z\\-_]{1,120}$",
    "withdrawEnable" : false,
    "sameAddress" : true,
    "name" : "BEP2",
    "withdrawMin" : "0.00000440",
    "resetAddressStatus" : false,
    "coin" : "BTC",
    "withdrawDesc" : "Wallet Maintenance, Withdrawal Suspended"
  } ],
  "coin" : "BTC"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query auto-converting stable coins (USER_DATA)
 * Get a user's auto-conversion settings in deposit/withdrawal  Weight(UID): 600'
 *
 * returns inline_response_200_73
 **/
exports.sapiV1CapitalContractConvertible_coinsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "coins" : [ "USDC", "USDC" ],
  "convertEnabled" : true,
  "exchangeRates" : {
    "TUSD" : "1",
    "USDC" : "1",
    "USDP" : "1"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Switch on/off BUSD and stable coins conversion (USER_DATA) (USER_DATA)
 * User can use it to turn on or turn off the BUSD auto-conversion from/to a specific stable coin.  Weight(UID): 600'
 *
 * coin String Must be USDC, USDP or TUSD
 * enable Boolean true: turn on the auto-conversion. false: turn off the auto-conversion
 * returns Object
 **/
exports.sapiV1CapitalContractConvertible_coinsPOST = function(coin,enable) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deposit Address (supporting network) (USER_DATA)
 * Fetch deposit address with network.  - If network is not send, return with default network of the coin. - You can get network and isDefault in networkList in the response of Get /sapi/v1/capital/config/getall (HMAC SHA256).  Weight(IP): 10
 *
 * coin String Coin name
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * network String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_56
 **/
exports.sapiV1CapitalDepositAddressGET = function(coin,timestamp,signature,network,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "1HPn8Rx2y6nNSfagQBKy27GB99Vbzg89wv",
  "tag" : "",
  "url" : "https://btc.com/1HPn8Rx2y6nNSfagQBKy27GB99Vbzg89wv",
  "coin" : "BTC"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * One click arrival deposit apply (USER_DATA)
 * Apply deposit credit for expired address (One click arrival)  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * depositId Long Deposit record Id, priority use (optional)
 * txId String Deposit txId, used when depositId is not specified (optional)
 * subAccountId Long  (optional)
 * subUserId Long  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_83
 **/
exports.sapiV1CapitalDepositCredit_applyPOST = function(timestamp,signature,depositId,txId,subAccountId,subUserId,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "000000",
  "data" : true,
  "success" : true,
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deposit History(supporting network) (USER_DATA)
 * Fetch deposit history.  - Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days. - If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * coin String Coin name (optional)
 * status Integer * `0` - pending * `6` - credited but cannot withdraw * `1` - success (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * offset Integer  (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1CapitalDepositHisrecGET = function(timestamp,signature,coin,status,startTime,endTime,offset,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "insertTime" : 1599621997000,
  "amount" : "0.00999800",
  "address" : "0x788cabe9236ce061e5a892e1a59395a81fc8d62c",
  "unlockConfirm" : "12/12",
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
  "unlockConfirm" : "12/12",
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
 * Withdraw (USER_DATA)
 * Submit a withdraw request.  - If `network` not send, return with default network of the coin. - You can get `network` and `isDefault` in `networkList` of a coin in the response of `Get /sapi/v1/capital/config/getall (HMAC SHA256)`.  Weight(IP): 1
 *
 * coin String Coin name
 * address String 
 * amount Double 
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * withdrawOrderId String Client id for withdraw (optional)
 * network String  (optional)
 * addressTag String Secondary address identifier for coins like XRP,XMR etc. (optional)
 * transactionFeeFlag Boolean When making internal transfer - `true` ->  returning the fee to the destination account; - `false` -> returning the fee back to the departure account. (optional)
 * name String  (optional)
 * walletType Integer The wallet type for withdrawï¼Œ0-Spot wallet, 1- Funding wallet. Default is Spot wallet (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_53
 **/
exports.sapiV1CapitalWithdrawApplyPOST = function(coin,address,amount,timestamp,signature,withdrawOrderId,network,addressTag,transactionFeeFlag,name,walletType,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "7213fea8e94b4a5593d507237e5a555b"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Withdraw History (supporting network) (USER_DATA)
 * Fetch withdraw history.  - `network` may not be in the response for old withdraw. - Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days. - If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * coin String Coin name (optional)
 * withdrawOrderId String  (optional)
 * status Integer * `0` - Email Sent * `1` - Cancelled * `2` - Awaiting Approval * `3` - Rejected * `4` - Processing * `5` - Failure * `6` - Completed (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * offset Integer  (optional)
 * limit Integer Default 500; max 1000. (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV1CapitalWithdrawHistoryGET = function(timestamp,signature,coin,withdrawOrderId,status,startTime,endTime,offset,limit,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : "8.91000000",
  "address" : "0x94df8b352de7f46f64b01d3666bf6e936e44ce60",
  "txId" : "0xb5ef8c13b968a406cc62a93a8bd80f9e9a906ef1b3fcf20a2e48573c17659268",
  "network" : "ETH",
  "transactionFee" : "0.004",
  "confirmNo" : 3,
  "withdrawOrderId" : "WITHDRAWtest123",
  "transferType" : 0,
  "id" : "b6ae22b3aa844210a7041aee7589627c",
  "applyTime" : "2019-10-12 11:12:02",
  "coin" : "USDT",
  "status" : 6,
  "info" : "The address is not valid. Please confirm with the recipient"
}, {
  "amount" : "8.91000000",
  "address" : "0x94df8b352de7f46f64b01d3666bf6e936e44ce60",
  "txId" : "0xb5ef8c13b968a406cc62a93a8bd80f9e9a906ef1b3fcf20a2e48573c17659268",
  "network" : "ETH",
  "transactionFee" : "0.004",
  "confirmNo" : 3,
  "withdrawOrderId" : "WITHDRAWtest123",
  "transferType" : 0,
  "id" : "b6ae22b3aa844210a7041aee7589627c",
  "applyTime" : "2019-10-12 11:12:02",
  "coin" : "USDT",
  "status" : 6,
  "info" : "The address is not valid. Please confirm with the recipient"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * System Status (System)
 * Fetch system status.  Weight(IP): 1
 *
 * returns inline_response_200_50
 **/
exports.sapiV1SystemStatusGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "normal",
  "status" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * User Asset (USER_DATA)
 * Get user assets, just for positive data.  Weight(IP): 5
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * asset String  (optional)
 * needBtcValuation String  (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns List
 **/
exports.sapiV3AssetGetUserAssetPOST = function(timestamp,signature,asset,needBtcValuation,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "freeze" : "0",
  "ipoable" : "0",
  "withdrawing" : "0",
  "asset" : "AVAX",
  "free" : "1",
  "locked" : "0",
  "btcValuation" : "0"
}, {
  "freeze" : "0",
  "ipoable" : "0",
  "withdrawing" : "0",
  "asset" : "AVAX",
  "free" : "1",
  "locked" : "0",
  "btcValuation" : "0"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

