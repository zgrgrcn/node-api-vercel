'use strict';

var utils = require('../utils/writer.js');
var Futures = require('../service/FuturesService');

module.exports.sapiV1FuturesHistDataLinkGET = function sapiV1FuturesHistDataLinkGET (req, res, next, symbol, dataType, timestamp, signature, startTime, endTime, recvWindow) {
  Futures.sapiV1FuturesHistDataLinkGET(symbol, dataType, timestamp, signature, startTime, endTime, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1FuturesTransferGET = function sapiV1FuturesTransferGET (req, res, next, asset, startTime, timestamp, signature, endTime, current, size, recvWindow) {
  Futures.sapiV1FuturesTransferGET(asset, startTime, timestamp, signature, endTime, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1FuturesTransferPOST = function sapiV1FuturesTransferPOST (req, res, next, asset, amount, type, timestamp, signature, recvWindow) {
  Futures.sapiV1FuturesTransferPOST(asset, amount, type, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
