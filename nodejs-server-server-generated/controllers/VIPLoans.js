'use strict';

var utils = require('../utils/writer.js');
var VIPLoans = require('../service/VIPLoansService');

module.exports.sapiV1LoanVipBorrowPOST = function sapiV1LoanVipBorrowPOST (req, res, next, loanAccountId, loanAmount, collateralAccountId, collateralCoin, isFlexibleRate, timestamp, signature, loanCoin, loanTerm, recvWindow) {
  VIPLoans.sapiV1LoanVipBorrowPOST(loanAccountId, loanAmount, collateralAccountId, collateralCoin, isFlexibleRate, timestamp, signature, loanCoin, loanTerm, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanVipCollateralAccountGET = function sapiV1LoanVipCollateralAccountGET (req, res, next, timestamp, signature, orderId, collateralAccountId, recvWindow) {
  VIPLoans.sapiV1LoanVipCollateralAccountGET(timestamp, signature, orderId, collateralAccountId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanVipLoanableDataGET = function sapiV1LoanVipLoanableDataGET (req, res, next, timestamp, signature, loanCoin, vipLevel, recvWindow) {
  VIPLoans.sapiV1LoanVipLoanableDataGET(timestamp, signature, loanCoin, vipLevel, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanVipOngoingOrdersGET = function sapiV1LoanVipOngoingOrdersGET (req, res, next, timestamp, signature, orderId, collateralAccountId, loanCoin, collateralCoin, current, limit, recvWindow) {
  VIPLoans.sapiV1LoanVipOngoingOrdersGET(timestamp, signature, orderId, collateralAccountId, loanCoin, collateralCoin, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanVipRenewPOST = function sapiV1LoanVipRenewPOST (req, res, next, timestamp, signature, orderId, loanTerm, recvWindow) {
  VIPLoans.sapiV1LoanVipRenewPOST(timestamp, signature, orderId, loanTerm, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanVipRepayHistoryGET = function sapiV1LoanVipRepayHistoryGET (req, res, next, timestamp, signature, orderId, loanCoin, startTime, endTime, current, limit, recvWindow) {
  VIPLoans.sapiV1LoanVipRepayHistoryGET(timestamp, signature, orderId, loanCoin, startTime, endTime, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanVipRepayPOST = function sapiV1LoanVipRepayPOST (req, res, next, amount, timestamp, signature, orderId, recvWindow) {
  VIPLoans.sapiV1LoanVipRepayPOST(amount, timestamp, signature, orderId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanVipRequestDataGET = function sapiV1LoanVipRequestDataGET (req, res, next, timestamp, signature, current, limit, recvWindow) {
  VIPLoans.sapiV1LoanVipRequestDataGET(timestamp, signature, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
