'use strict';

var utils = require('../utils/writer.js');
var Savings = require('../service/SavingsService');

module.exports.sapiV1LendingCustomizedFixedPurchasePOST = function sapiV1LendingCustomizedFixedPurchasePOST (req, res, next, projectId, lot, timestamp, signature, recvWindow) {
  Savings.sapiV1LendingCustomizedFixedPurchasePOST(projectId, lot, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingPositionChangedPOST = function sapiV1LendingPositionChangedPOST (req, res, next, projectId, lot, timestamp, signature, positionId, recvWindow) {
  Savings.sapiV1LendingPositionChangedPOST(projectId, lot, timestamp, signature, positionId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingProjectListGET = function sapiV1LendingProjectListGET (req, res, next, type, timestamp, signature, asset, status, isSortAsc, sortBy, current, size, recvWindow) {
  Savings.sapiV1LendingProjectListGET(type, timestamp, signature, asset, status, isSortAsc, sortBy, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingProjectPositionListGET = function sapiV1LendingProjectPositionListGET (req, res, next, asset, timestamp, signature, projectId, status, recvWindow) {
  Savings.sapiV1LendingProjectPositionListGET(asset, timestamp, signature, projectId, status, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
