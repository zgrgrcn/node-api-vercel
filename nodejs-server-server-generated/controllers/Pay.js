'use strict';

var utils = require('../utils/writer.js');
var Pay = require('../service/PayService');

module.exports.sapiV1PayTransactionsGET = function sapiV1PayTransactionsGET (req, res, next, timestamp, signature, startTime, endTime, limit, recvWindow) {
  Pay.sapiV1PayTransactionsGET(timestamp, signature, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
