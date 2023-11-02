'use strict';

var utils = require('../utils/writer.js');
var BLVT = require('../service/BLVTService');

module.exports.sapiV1BlvtRedeemPOST = function sapiV1BlvtRedeemPOST (req, res, next, tokenName, amount, timestamp, signature, recvWindow) {
  BLVT.sapiV1BlvtRedeemPOST(tokenName, amount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BlvtRedeemRecordGET = function sapiV1BlvtRedeemRecordGET (req, res, next, timestamp, signature, tokenName, id, startTime, endTime, limit, recvWindow) {
  BLVT.sapiV1BlvtRedeemRecordGET(timestamp, signature, tokenName, id, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BlvtSubscribePOST = function sapiV1BlvtSubscribePOST (req, res, next, tokenName, cost, timestamp, signature, recvWindow) {
  BLVT.sapiV1BlvtSubscribePOST(tokenName, cost, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BlvtSubscribeRecordGET = function sapiV1BlvtSubscribeRecordGET (req, res, next, timestamp, signature, tokenName, id, startTime, endTime, limit, recvWindow) {
  BLVT.sapiV1BlvtSubscribeRecordGET(timestamp, signature, tokenName, id, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BlvtTokenInfoGET = function sapiV1BlvtTokenInfoGET (req, res, next, tokenName) {
  BLVT.sapiV1BlvtTokenInfoGET(tokenName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BlvtUserLimitGET = function sapiV1BlvtUserLimitGET (req, res, next, timestamp, signature, tokenName, recvWindow) {
  BLVT.sapiV1BlvtUserLimitGET(timestamp, signature, tokenName, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
