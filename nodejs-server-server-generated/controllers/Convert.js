'use strict';

var utils = require('../utils/writer.js');
var Convert = require('../service/ConvertService');

module.exports.sapiV1ConvertAcceptQuotePOST = function sapiV1ConvertAcceptQuotePOST (req, res, next, quoteId, timestamp, signature, recvWindow) {
  Convert.sapiV1ConvertAcceptQuotePOST(quoteId, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1ConvertAssetInfoGET = function sapiV1ConvertAssetInfoGET (req, res, next, timestamp, signature, recvWindow) {
  Convert.sapiV1ConvertAssetInfoGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1ConvertExchangeInfoGET = function sapiV1ConvertExchangeInfoGET (req, res, next, fromAsset, toAsset) {
  Convert.sapiV1ConvertExchangeInfoGET(fromAsset, toAsset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1ConvertGetQuotePOST = function sapiV1ConvertGetQuotePOST (req, res, next, fromAsset, toAsset, timestamp, signature, fromAmount, toAmount, validTime, walletType, recvWindow) {
  Convert.sapiV1ConvertGetQuotePOST(fromAsset, toAsset, timestamp, signature, fromAmount, toAmount, validTime, walletType, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1ConvertOrderStatusGET = function sapiV1ConvertOrderStatusGET (req, res, next, timestamp, signature, orderId, quoteId, recvWindow) {
  Convert.sapiV1ConvertOrderStatusGET(timestamp, signature, orderId, quoteId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1ConvertTradeFlowGET = function sapiV1ConvertTradeFlowGET (req, res, next, startTime, endTime, timestamp, signature, limit, recvWindow) {
  Convert.sapiV1ConvertTradeFlowGET(startTime, endTime, timestamp, signature, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
