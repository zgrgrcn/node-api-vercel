'use strict';

var utils = require('../utils/writer.js');
var Fiat = require('../service/FiatService');

module.exports.sapiV1FiatOrdersGET = function sapiV1FiatOrdersGET (req, res, next, transactionType, timestamp, signature, beginTime, endTime, page, rows, recvWindow) {
  Fiat.sapiV1FiatOrdersGET(transactionType, timestamp, signature, beginTime, endTime, page, rows, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1FiatPaymentsGET = function sapiV1FiatPaymentsGET (req, res, next, transactionType, timestamp, signature, beginTime, endTime, page, rows, recvWindow) {
  Fiat.sapiV1FiatPaymentsGET(transactionType, timestamp, signature, beginTime, endTime, page, rows, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
