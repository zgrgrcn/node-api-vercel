'use strict';


/**
 * Cancel Hashrate Resale configuration (USER_DATA)
 * Weight(IP): 5
 *
 * configId String Mining ID
 * userName String Mining Account
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_139
 **/
exports.sapiV1MiningHash_transferConfigCancelPOST = function(configId,userName,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Hashrate Resale List (USER_DATA)
 * Weight(IP): 5
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * pageIndex Integer Page number, default is first page, start form 1 (optional)
 * pageSize String Number of pages, minimum 10, maximum 200 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_136
 **/
exports.sapiV1MiningHash_transferConfigDetailsListGET = function(timestamp,signature,pageIndex,pageSize,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : {
    "totalNum" : 21,
    "configDetails" : [ {
      "configId" : 168,
      "startDay" : 20201210,
      "endDay" : 20210405,
      "algoName" : "Ethash",
      "toPoolUsername" : "user1",
      "hashRate" : 5000000,
      "poolUsername" : "123",
      "status" : 1
    }, {
      "configId" : 168,
      "startDay" : 20201210,
      "endDay" : 20210405,
      "algoName" : "Ethash",
      "toPoolUsername" : "user1",
      "hashRate" : 5000000,
      "poolUsername" : "123",
      "status" : 1
    } ],
    "pageSize" : 200
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
 * Hashrate Resale Request (USER_DATA)
 * Weight(IP): 5
 *
 * userName String Mining Account
 * algo String Algorithm(sha256)
 * toPoolUser String Mining Account
 * hashRate String Resale hashrate h/s must be transferred (BTC is greater than 500000000000 ETH is greater than 500000)
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startDate String Search date, millisecond timestamp, while empty query all (optional)
 * endDate String Search date, millisecond timestamp, while empty query all (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_138
 **/
exports.sapiV1MiningHash_transferConfigPOST = function(userName,algo,toPoolUser,hashRate,timestamp,signature,startDate,endDate,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : 171
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Hashrate Resale Details (USER_DATA)
 * Weight(IP): 5
 *
 * configId String Mining ID
 * userName String Mining Account
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * pageIndex Integer Page number, default is first page, start form 1 (optional)
 * pageSize String Number of pages, minimum 10, maximum 200 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_137
 **/
exports.sapiV1MiningHash_transferProfitDetailsGET = function(configId,userName,timestamp,signature,pageIndex,pageSize,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : {
    "totalNum" : 8,
    "profitTransferDetails" : [ {
      "amount" : 0.2256872,
      "algoName" : "sha256",
      "toPoolUsername" : "pop",
      "hashRate" : 200000000000,
      "coinName" : "BTC",
      "day" : 20201213,
      "poolUsername" : "test4001"
    }, {
      "amount" : 0.2256872,
      "algoName" : "sha256",
      "toPoolUsername" : "pop",
      "hashRate" : 200000000000,
      "coinName" : "BTC",
      "day" : 20201213,
      "poolUsername" : "test4001"
    } ],
    "pageSize" : 200
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
 * Earnings List (USER_DATA)
 * Weight(IP): 5
 *
 * algo String Algorithm(sha256)
 * userName String Mining Account
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * coin String Coin name (optional)
 * startDate String Search date, millisecond timestamp, while empty query all (optional)
 * endDate String Search date, millisecond timestamp, while empty query all (optional)
 * pageIndex Integer Page number, default is first page, start form 1 (optional)
 * pageSize String Number of pages, minimum 10, maximum 200 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_134
 **/
exports.sapiV1MiningPaymentListGET = function(algo,userName,timestamp,signature,coin,startDate,endDate,pageIndex,pageSize,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : {
    "totalNum" : 3,
    "pageSize" : 20,
    "accountProfits" : [ {
      "profitAmount" : 8.6083060304,
      "transferAmount" : 6.027456183070403,
      "hashTransfer" : 0,
      "dayHashRate" : 129129903378244,
      "time" : 1586188800000,
      "coinName" : "BTC",
      "type" : 31,
      "status" : 2
    }, {
      "profitAmount" : 8.6083060304,
      "transferAmount" : 6.027456183070403,
      "hashTransfer" : 0,
      "dayHashRate" : 129129903378244,
      "time" : 1586188800000,
      "coinName" : "BTC",
      "type" : 31,
      "status" : 2
    } ]
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
 * Extra Bonus List (USER_DATA)
 * Weight(IP): 5
 *
 * algo String Algorithm(sha256)
 * userName String Mining Account
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * coin String Coin name (optional)
 * startDate String Search date, millisecond timestamp, while empty query all (optional)
 * endDate String Search date, millisecond timestamp, while empty query all (optional)
 * pageIndex Integer Page number, default is first page, start form 1 (optional)
 * pageSize String Number of pages, minimum 10, maximum 200 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_135
 **/
exports.sapiV1MiningPaymentOtherGET = function(algo,userName,timestamp,signature,coin,startDate,endDate,pageIndex,pageSize,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : {
    "otherProfits" : [ {
      "profitAmount" : 0.0011859,
      "time" : 1607443200000,
      "coinName" : "BTC",
      "type" : 4,
      "status" : 2
    }, {
      "profitAmount" : 0.0011859,
      "time" : 1607443200000,
      "coinName" : "BTC",
      "type" : 4,
      "status" : 2
    } ],
    "totalNum" : 3,
    "pageSize" : 20
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
 * Mining Account Earning (USER_DATA)
 * Weight(IP): 5
 *
 * algo String Algorithm(sha256)
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * startDate String Search date, millisecond timestamp, while empty query all (optional)
 * endDate String Search date, millisecond timestamp, while empty query all (optional)
 * pageIndex Integer Page number, default is first page, start form 1 (optional)
 * pageSize String Number of pages, minimum 10, maximum 200 (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_142
 **/
exports.sapiV1MiningPaymentUidGET = function(algo,timestamp,signature,startDate,endDate,pageIndex,pageSize,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : {
    "totalNum" : 3,
    "pageSize" : 20,
    "accountProfits" : [ {
      "amount" : 0.09186957,
      "puid" : 59985472,
      "subName" : "vdvaghani",
      "time" : 1607443200000,
      "coinName" : "BTC",
      "type" : 2
    }, {
      "amount" : 0.09186957,
      "puid" : 59985472,
      "subName" : "vdvaghani",
      "time" : 1607443200000,
      "coinName" : "BTC",
      "type" : 2
    } ]
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
 * Acquiring Algorithm (MARKET_DATA)
 * Weight(IP): 1
 *
 * returns inline_response_200_130
 **/
exports.sapiV1MiningPubAlgoListGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : [ {
    "unit" : "h/s",
    "algoId" : 1,
    "algoName" : "sha256",
    "poolIndex" : 0
  }, {
    "unit" : "h/s",
    "algoId" : 1,
    "algoName" : "sha256",
    "poolIndex" : 0
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
 * Acquiring CoinName (MARKET_DATA)
 * Weight(IP): 1
 *
 * returns inline_response_200_131
 **/
exports.sapiV1MiningPubCoinListGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : [ {
    "coinId" : 1,
    "algoId" : 1,
    "algoName" : "sha256",
    "coinName" : "BTC",
    "poolIndex" : 0
  }, {
    "coinId" : 1,
    "algoId" : 1,
    "algoName" : "sha256",
    "coinName" : "BTC",
    "poolIndex" : 0
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
 * Account List (USER_DATA)
 * Weight(IP): 5
 *
 * algo String Algorithm(sha256)
 * userName String Mining Account
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_141
 **/
exports.sapiV1MiningStatisticsUserListGET = function(algo,userName,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : [ {
    "type" : "H_hashrate",
    "userName" : "test",
    "list" : [ {
      "reject" : "0.00000000",
      "time" : 1585267200000,
      "hashrate" : "0.00000000"
    }, {
      "reject" : "0.00000000",
      "time" : 1585267200000,
      "hashrate" : "0.00000000"
    } ]
  }, {
    "type" : "H_hashrate",
    "userName" : "test",
    "list" : [ {
      "reject" : "0.00000000",
      "time" : 1585267200000,
      "hashrate" : "0.00000000"
    }, {
      "reject" : "0.00000000",
      "time" : 1585267200000,
      "hashrate" : "0.00000000"
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
 * Statistic List (USER_DATA)
 * Weight(IP): 5
 *
 * algo String Algorithm(sha256)
 * userName String Mining Account
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_140
 **/
exports.sapiV1MiningStatisticsUserStatusGET = function(algo,userName,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : {
    "invalidNum" : 17562,
    "validNum" : 0,
    "unit" : "h/s",
    "profitToday" : {
      "BTC" : "0.00314332",
      "BSV" : "56.17055953",
      "BCH" : "106.61586001"
    },
    "dayHashRate" : "214289268068874127.65000000",
    "userName" : "test",
    "fifteenMinHashRate" : "457835490067496409.00000000",
    "algo" : "sha256"
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
 * Request for Detail Miner List (USER_DATA)
 * Weight(IP): 5
 *
 * algo String Algorithm(sha256)
 * userName String Mining Account
 * workerName String Minerâ€™s name
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_132
 **/
exports.sapiV1MiningWorkerDetailGET = function(algo,userName,workerName,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : [ {
    "hashrateDatas" : [ {
      "reject" : 0,
      "time" : 1587902400000,
      "hashrate" : "0"
    }, {
      "reject" : 0,
      "time" : 1587902400000,
      "hashrate" : "0"
    } ],
    "workerName" : "bhdc1.16A10404B",
    "type" : "H_hashrate"
  }, {
    "hashrateDatas" : [ {
      "reject" : 0,
      "time" : 1587902400000,
      "hashrate" : "0"
    }, {
      "reject" : 0,
      "time" : 1587902400000,
      "hashrate" : "0"
    } ],
    "workerName" : "bhdc1.16A10404B",
    "type" : "H_hashrate"
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
 * Request for Miner List (USER_DATA)
 * Weight(IP): 5
 *
 * algo String Algorithm(sha256)
 * userName String Mining Account
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * pageIndex Integer Page number, default is first page, start form 1 (optional)
 * sort Integer sort sequence(default=0)0 positive sequence, 1 negative sequence (optional)
 * sortColumn Integer Sort by( default 1): 1: miner name, 2: real-time computing power, 3: daily average computing power, 4: real-time rejection rate, 5: last submission time (optional)
 * workerStatus Integer miners status(default=0)0 all, 1 valid, 2 invalid, 3 failure (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_133
 **/
exports.sapiV1MiningWorkerListGET = function(algo,userName,timestamp,signature,pageIndex,sort,sortColumn,workerStatus,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "",
  "code" : 0,
  "data" : {
    "workerDatas" : [ {
      "rejectRate" : 0,
      "workerId" : "1420554439452400131",
      "lastShareTime" : 1587712919000,
      "hashRate" : 0,
      "dayHashRate" : 0,
      "workerName" : "2X73",
      "status" : 3
    }, {
      "rejectRate" : 0,
      "workerId" : "1420554439452400131",
      "lastShareTime" : 1587712919000,
      "hashRate" : 0,
      "dayHashRate" : 0,
      "workerName" : "2X73",
      "status" : 3
    } ],
    "totalNum" : 18530,
    "pageSize" : 20
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

