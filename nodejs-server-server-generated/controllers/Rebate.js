'use strict';

var utils = require('../utils/writer.js');
var Rebate = require('../service/RebateService');

module.exports.sapiV1RebateTaxQueryGET = function sapiV1RebateTaxQueryGET (req, res, next, timestamp, signature, startTime, endTime, page, recvWindow) {
  Rebate.sapiV1RebateTaxQueryGET(timestamp, signature, startTime, endTime, page, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
