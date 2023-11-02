'use strict';

var utils = require('../utils/writer.js');
var PortfolioMargin = require('../service/PortfolioMarginService');

module.exports.sapiV1PortfolioAccountGET = function sapiV1PortfolioAccountGET (req, res, next, timestamp, signature, recvWindow) {
  PortfolioMargin.sapiV1PortfolioAccountGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioAsset_collectionPOST = function sapiV1PortfolioAsset_collectionPOST (req, res, next, asset, timestamp, signature, recvWindow) {
  PortfolioMargin.sapiV1PortfolioAsset_collectionPOST(asset, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioAsset_index_priceGET = function sapiV1PortfolioAsset_index_priceGET (req, res, next, asset) {
  PortfolioMargin.sapiV1PortfolioAsset_index_priceGET(asset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioAuto_collectionPOST = function sapiV1PortfolioAuto_collectionPOST (req, res, next, timestamp, signature, recvWindow) {
  PortfolioMargin.sapiV1PortfolioAuto_collectionPOST(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioBnb_transferPOST = function sapiV1PortfolioBnb_transferPOST (req, res, next, transferSide, amount, timestamp, signature, recvWindow) {
  PortfolioMargin.sapiV1PortfolioBnb_transferPOST(transferSide, amount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioCollateralRateGET = function sapiV1PortfolioCollateralRateGET (req, res, next) {
  PortfolioMargin.sapiV1PortfolioCollateralRateGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioInterest_historyGET = function sapiV1PortfolioInterest_historyGET (req, res, next, asset, timestamp, signature, startTime, endTime, size, recvWindow) {
  PortfolioMargin.sapiV1PortfolioInterest_historyGET(asset, timestamp, signature, startTime, endTime, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioPmLoanGET = function sapiV1PortfolioPmLoanGET (req, res, next, timestamp, signature, recvWindow) {
  PortfolioMargin.sapiV1PortfolioPmLoanGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioRepayPOST = function sapiV1PortfolioRepayPOST (req, res, next, timestamp, signature, from, recvWindow) {
  PortfolioMargin.sapiV1PortfolioRepayPOST(timestamp, signature, from, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioRepay_futures_negative_balancePOST = function sapiV1PortfolioRepay_futures_negative_balancePOST (req, res, next, timestamp, signature, recvWindow) {
  PortfolioMargin.sapiV1PortfolioRepay_futures_negative_balancePOST(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioRepay_futures_switchGET = function sapiV1PortfolioRepay_futures_switchGET (req, res, next, timestamp, signature, recvWindow) {
  PortfolioMargin.sapiV1PortfolioRepay_futures_switchGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1PortfolioRepay_futures_switchPOST = function sapiV1PortfolioRepay_futures_switchPOST (req, res, next, autoRepay, timestamp, signature, recvWindow) {
  PortfolioMargin.sapiV1PortfolioRepay_futures_switchPOST(autoRepay, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
