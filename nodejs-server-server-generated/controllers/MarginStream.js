'use strict';

var utils = require('../utils/writer.js');
var MarginStream = require('../service/MarginStreamService');

module.exports.sapiV1UserDataStreamDELETE = function sapiV1UserDataStreamDELETE (req, res, next, listenKey) {
  MarginStream.sapiV1UserDataStreamDELETE(listenKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1UserDataStreamPOST = function sapiV1UserDataStreamPOST (req, res, next) {
  MarginStream.sapiV1UserDataStreamPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1UserDataStreamPUT = function sapiV1UserDataStreamPUT (req, res, next, listenKey) {
  MarginStream.sapiV1UserDataStreamPUT(listenKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
