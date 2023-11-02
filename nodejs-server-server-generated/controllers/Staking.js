'use strict';

var utils = require('../utils/writer.js');
var Staking = require('../service/StakingService');

module.exports.sapiV1StakingPersonalLeftQuotaGET = function sapiV1StakingPersonalLeftQuotaGET (req, res, next, product, productId, timestamp, signature, recvWindow) {
  Staking.sapiV1StakingPersonalLeftQuotaGET(product, productId, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1StakingPositionGET = function sapiV1StakingPositionGET (req, res, next, product, timestamp, signature, productId, asset, current, size, recvWindow) {
  Staking.sapiV1StakingPositionGET(product, timestamp, signature, productId, asset, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1StakingProductListGET = function sapiV1StakingProductListGET (req, res, next, product, timestamp, signature, asset, current, size, recvWindow) {
  Staking.sapiV1StakingProductListGET(product, timestamp, signature, asset, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1StakingPurchasePOST = function sapiV1StakingPurchasePOST (req, res, next, product, productId, amount, timestamp, signature, renewable, recvWindow) {
  Staking.sapiV1StakingPurchasePOST(product, productId, amount, timestamp, signature, renewable, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1StakingRedeemPOST = function sapiV1StakingRedeemPOST (req, res, next, product, productId, timestamp, signature, positionId, amount, recvWindow) {
  Staking.sapiV1StakingRedeemPOST(product, productId, timestamp, signature, positionId, amount, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1StakingSetAutoStakingPOST = function sapiV1StakingSetAutoStakingPOST (req, res, next, product, positionId, renewable, timestamp, signature, recvWindow) {
  Staking.sapiV1StakingSetAutoStakingPOST(product, positionId, renewable, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1StakingStakingRecordGET = function sapiV1StakingStakingRecordGET (req, res, next, product, txnType, timestamp, signature, asset, startTime, endTime, current, size, recvWindow) {
  Staking.sapiV1StakingStakingRecordGET(product, txnType, timestamp, signature, asset, startTime, endTime, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
