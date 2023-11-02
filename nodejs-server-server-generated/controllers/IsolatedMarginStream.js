'use strict';

var utils = require('../utils/writer.js');
var IsolatedMarginStream = require('../service/IsolatedMarginStreamService');

module.exports.sapiV1UserDataStreamIsolatedDELETE = function sapiV1UserDataStreamIsolatedDELETE (req, res, next, listenKey) {
  IsolatedMarginStream.sapiV1UserDataStreamIsolatedDELETE(listenKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1UserDataStreamIsolatedPOST = function sapiV1UserDataStreamIsolatedPOST (req, res, next) {
  IsolatedMarginStream.sapiV1UserDataStreamIsolatedPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1UserDataStreamIsolatedPUT = function sapiV1UserDataStreamIsolatedPUT (req, res, next, listenKey) {
  IsolatedMarginStream.sapiV1UserDataStreamIsolatedPUT(listenKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
