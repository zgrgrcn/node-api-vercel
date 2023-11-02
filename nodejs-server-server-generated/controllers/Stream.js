'use strict';

var utils = require('../utils/writer.js');
var Stream = require('../service/StreamService');

module.exports.apiV3UserDataStreamDELETE = function apiV3UserDataStreamDELETE (req, res, next, listenKey) {
  Stream.apiV3UserDataStreamDELETE(listenKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3UserDataStreamPOST = function apiV3UserDataStreamPOST (req, res, next) {
  Stream.apiV3UserDataStreamPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3UserDataStreamPUT = function apiV3UserDataStreamPUT (req, res, next, listenKey) {
  Stream.apiV3UserDataStreamPUT(listenKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
