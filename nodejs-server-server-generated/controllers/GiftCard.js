'use strict';

var utils = require('../utils/writer.js');
var GiftCard = require('../service/GiftCardService');

module.exports.sapiV1GiftcardBuyCodePOST = function sapiV1GiftcardBuyCodePOST (req, res, next, baseToken, faceToken, baseTokenAmount, timestamp, signature, recvWindow) {
  GiftCard.sapiV1GiftcardBuyCodePOST(baseToken, faceToken, baseTokenAmount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1GiftcardBuyCodeToken_limitGET = function sapiV1GiftcardBuyCodeToken_limitGET (req, res, next, baseToken, timestamp, signature, recvWindow) {
  GiftCard.sapiV1GiftcardBuyCodeToken_limitGET(baseToken, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1GiftcardCreateCodePOST = function sapiV1GiftcardCreateCodePOST (req, res, next, token, amount, timestamp, signature, recvWindow) {
  GiftCard.sapiV1GiftcardCreateCodePOST(token, amount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1GiftcardCryptographyRsa_public_keyGET = function sapiV1GiftcardCryptographyRsa_public_keyGET (req, res, next, timestamp, signature, recvWindow) {
  GiftCard.sapiV1GiftcardCryptographyRsa_public_keyGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1GiftcardRedeemCodePOST = function sapiV1GiftcardRedeemCodePOST (req, res, next, code, timestamp, signature, externalUid, recvWindow) {
  GiftCard.sapiV1GiftcardRedeemCodePOST(code, timestamp, signature, externalUid, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1GiftcardVerifyGET = function sapiV1GiftcardVerifyGET (req, res, next, referenceNo, timestamp, signature, recvWindow) {
  GiftCard.sapiV1GiftcardVerifyGET(referenceNo, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
