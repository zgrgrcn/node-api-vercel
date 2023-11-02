'use strict';

var utils = require('../utils/writer.js');
var NFT = require('../service/NFTService');

module.exports.sapiV1NftHistoryDepositGET = function sapiV1NftHistoryDepositGET (req, res, next, timestamp, signature, startTime, endTime, limit, page, recvWindow) {
  NFT.sapiV1NftHistoryDepositGET(timestamp, signature, startTime, endTime, limit, page, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1NftHistoryTransactionsGET = function sapiV1NftHistoryTransactionsGET (req, res, next, orderType, timestamp, signature, startTime, endTime, limit, page, recvWindow) {
  NFT.sapiV1NftHistoryTransactionsGET(orderType, timestamp, signature, startTime, endTime, limit, page, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1NftHistoryWithdrawGET = function sapiV1NftHistoryWithdrawGET (req, res, next, timestamp, signature, startTime, endTime, limit, page, recvWindow) {
  NFT.sapiV1NftHistoryWithdrawGET(timestamp, signature, startTime, endTime, limit, page, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1NftUserGetAssetGET = function sapiV1NftUserGetAssetGET (req, res, next, timestamp, signature, limit, page, recvWindow) {
  NFT.sapiV1NftUserGetAssetGET(timestamp, signature, limit, page, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
