'use strict';

var utils = require('../utils/writer.js');
var C2C = require('../service/C2CService');

module.exports.sapiV1C2cOrderMatchListUserOrderHistoryGET = function sapiV1C2cOrderMatchListUserOrderHistoryGET (req, res, next, tradeType, timestamp, signature, startTimestamp, endTimestamp, page, rows, recvWindow) {
  C2C.sapiV1C2cOrderMatchListUserOrderHistoryGET(tradeType, timestamp, signature, startTimestamp, endTimestamp, page, rows, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
