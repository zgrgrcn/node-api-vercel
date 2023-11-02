'use strict';

var utils = require('../utils/writer.js');
var SpotAlgo = require('../service/SpotAlgoService');

module.exports.sapiV1AlgoSpotHistoricalOrdersGET = function sapiV1AlgoSpotHistoricalOrdersGET (req, res, next, symbol, side, timestamp, signature, startTime, endTime, page, pageSize, recvWindow) {
  SpotAlgo.sapiV1AlgoSpotHistoricalOrdersGET(symbol, side, timestamp, signature, startTime, endTime, page, pageSize, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AlgoSpotNewOrderTwapPOST = function sapiV1AlgoSpotNewOrderTwapPOST (req, res, next, symbol, side, quantity, duration, timestamp, signature, clientAlgoId, limitPrice, recvWindow) {
  SpotAlgo.sapiV1AlgoSpotNewOrderTwapPOST(symbol, side, quantity, duration, timestamp, signature, clientAlgoId, limitPrice, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AlgoSpotOpenOrdersGET = function sapiV1AlgoSpotOpenOrdersGET (req, res, next, timestamp, signature, recvWindow) {
  SpotAlgo.sapiV1AlgoSpotOpenOrdersGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AlgoSpotOrderDELETE = function sapiV1AlgoSpotOrderDELETE (req, res, next, algoId, timestamp, signature, recvWindow) {
  SpotAlgo.sapiV1AlgoSpotOrderDELETE(algoId, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AlgoSpotSubOrdersGET = function sapiV1AlgoSpotSubOrdersGET (req, res, next, algoId, timestamp, signature, page, pageSize, recvWindow) {
  SpotAlgo.sapiV1AlgoSpotSubOrdersGET(algoId, timestamp, signature, page, pageSize, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
