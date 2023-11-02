'use strict';

var utils = require('../utils/writer.js');
var FuturesAlgo = require('../service/FuturesAlgoService');

module.exports.sapiV1AlgoFuturesHistoricalOrdersGET = function sapiV1AlgoFuturesHistoricalOrdersGET (req, res, next, timestamp, signature, symbol, side, startTime, endTime, page, pageSize, recvWindow) {
  FuturesAlgo.sapiV1AlgoFuturesHistoricalOrdersGET(timestamp, signature, symbol, side, startTime, endTime, page, pageSize, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AlgoFuturesNewOrderTwapPOST = function sapiV1AlgoFuturesNewOrderTwapPOST (req, res, next, symbol, side, quantity, duration, timestamp, signature, positionSide, clientAlgoId, reduceOnly, limitPrice, recvWindow) {
  FuturesAlgo.sapiV1AlgoFuturesNewOrderTwapPOST(symbol, side, quantity, duration, timestamp, signature, positionSide, clientAlgoId, reduceOnly, limitPrice, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AlgoFuturesNewOrderVpPOST = function sapiV1AlgoFuturesNewOrderVpPOST (req, res, next, symbol, side, quantity, urgency, timestamp, signature, positionSide, clientAlgoId, reduceOnly, limitPrice, recvWindow) {
  FuturesAlgo.sapiV1AlgoFuturesNewOrderVpPOST(symbol, side, quantity, urgency, timestamp, signature, positionSide, clientAlgoId, reduceOnly, limitPrice, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AlgoFuturesOpenOrdersGET = function sapiV1AlgoFuturesOpenOrdersGET (req, res, next, timestamp, signature, recvWindow) {
  FuturesAlgo.sapiV1AlgoFuturesOpenOrdersGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AlgoFuturesOrderDELETE = function sapiV1AlgoFuturesOrderDELETE (req, res, next, algoId, timestamp, signature, recvWindow) {
  FuturesAlgo.sapiV1AlgoFuturesOrderDELETE(algoId, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AlgoFuturesSubOrdersGET = function sapiV1AlgoFuturesSubOrdersGET (req, res, next, algoId, timestamp, signature, page, pageSize, recvWindow) {
  FuturesAlgo.sapiV1AlgoFuturesSubOrdersGET(algoId, timestamp, signature, page, pageSize, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
