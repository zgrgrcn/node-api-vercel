'use strict';

var utils = require('../utils/writer.js');
var Mining = require('../service/MiningService');

module.exports.sapiV1MiningHash_transferConfigCancelPOST = function sapiV1MiningHash_transferConfigCancelPOST (req, res, next, configId, userName, timestamp, signature, recvWindow) {
  Mining.sapiV1MiningHash_transferConfigCancelPOST(configId, userName, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningHash_transferConfigDetailsListGET = function sapiV1MiningHash_transferConfigDetailsListGET (req, res, next, timestamp, signature, pageIndex, pageSize, recvWindow) {
  Mining.sapiV1MiningHash_transferConfigDetailsListGET(timestamp, signature, pageIndex, pageSize, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningHash_transferConfigPOST = function sapiV1MiningHash_transferConfigPOST (req, res, next, userName, algo, toPoolUser, hashRate, timestamp, signature, startDate, endDate, recvWindow) {
  Mining.sapiV1MiningHash_transferConfigPOST(userName, algo, toPoolUser, hashRate, timestamp, signature, startDate, endDate, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningHash_transferProfitDetailsGET = function sapiV1MiningHash_transferProfitDetailsGET (req, res, next, configId, userName, timestamp, signature, pageIndex, pageSize, recvWindow) {
  Mining.sapiV1MiningHash_transferProfitDetailsGET(configId, userName, timestamp, signature, pageIndex, pageSize, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningPaymentListGET = function sapiV1MiningPaymentListGET (req, res, next, algo, userName, timestamp, signature, coin, startDate, endDate, pageIndex, pageSize, recvWindow) {
  Mining.sapiV1MiningPaymentListGET(algo, userName, timestamp, signature, coin, startDate, endDate, pageIndex, pageSize, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningPaymentOtherGET = function sapiV1MiningPaymentOtherGET (req, res, next, algo, userName, timestamp, signature, coin, startDate, endDate, pageIndex, pageSize, recvWindow) {
  Mining.sapiV1MiningPaymentOtherGET(algo, userName, timestamp, signature, coin, startDate, endDate, pageIndex, pageSize, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningPaymentUidGET = function sapiV1MiningPaymentUidGET (req, res, next, algo, timestamp, signature, startDate, endDate, pageIndex, pageSize, recvWindow) {
  Mining.sapiV1MiningPaymentUidGET(algo, timestamp, signature, startDate, endDate, pageIndex, pageSize, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningPubAlgoListGET = function sapiV1MiningPubAlgoListGET (req, res, next) {
  Mining.sapiV1MiningPubAlgoListGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningPubCoinListGET = function sapiV1MiningPubCoinListGET (req, res, next) {
  Mining.sapiV1MiningPubCoinListGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningStatisticsUserListGET = function sapiV1MiningStatisticsUserListGET (req, res, next, algo, userName, timestamp, signature, recvWindow) {
  Mining.sapiV1MiningStatisticsUserListGET(algo, userName, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningStatisticsUserStatusGET = function sapiV1MiningStatisticsUserStatusGET (req, res, next, algo, userName, timestamp, signature, recvWindow) {
  Mining.sapiV1MiningStatisticsUserStatusGET(algo, userName, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningWorkerDetailGET = function sapiV1MiningWorkerDetailGET (req, res, next, algo, userName, workerName, timestamp, signature, recvWindow) {
  Mining.sapiV1MiningWorkerDetailGET(algo, userName, workerName, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MiningWorkerListGET = function sapiV1MiningWorkerListGET (req, res, next, algo, userName, timestamp, signature, pageIndex, sort, sortColumn, workerStatus, recvWindow) {
  Mining.sapiV1MiningWorkerListGET(algo, userName, timestamp, signature, pageIndex, sort, sortColumn, workerStatus, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
