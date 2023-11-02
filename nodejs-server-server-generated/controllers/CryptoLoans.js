'use strict';

var utils = require('../utils/writer.js');
var CryptoLoans = require('../service/CryptoLoansService');

module.exports.sapiV1LoanAdjustLtvPOST = function sapiV1LoanAdjustLtvPOST (req, res, next, orderId, amount, direction, timestamp, signature, recvWindow) {
  CryptoLoans.sapiV1LoanAdjustLtvPOST(orderId, amount, direction, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanBorrowHistoryGET = function sapiV1LoanBorrowHistoryGET (req, res, next, timestamp, signature, orderId, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow) {
  CryptoLoans.sapiV1LoanBorrowHistoryGET(timestamp, signature, orderId, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanBorrowPOST = function sapiV1LoanBorrowPOST (req, res, next, loanCoin, collateralCoin, loanTerm, timestamp, signature, loanAmount, collateralAmount, recvWindow) {
  CryptoLoans.sapiV1LoanBorrowPOST(loanCoin, collateralCoin, loanTerm, timestamp, signature, loanAmount, collateralAmount, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanCollateralDataGET = function sapiV1LoanCollateralDataGET (req, res, next, timestamp, signature, collateralCoin, vipLevel, recvWindow) {
  CryptoLoans.sapiV1LoanCollateralDataGET(timestamp, signature, collateralCoin, vipLevel, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanCustomizeMargin_callPOST = function sapiV1LoanCustomizeMargin_callPOST (req, res, next, marginCall, timestamp, signature, orderId, collateralCoin, recvWindow) {
  CryptoLoans.sapiV1LoanCustomizeMargin_callPOST(marginCall, timestamp, signature, orderId, collateralCoin, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanFlexibleAdjustLtvPOST = function sapiV1LoanFlexibleAdjustLtvPOST (req, res, next, adjustmentAmount, direction, timestamp, signature, loanCoin, collateralCoin, recvWindow) {
  CryptoLoans.sapiV1LoanFlexibleAdjustLtvPOST(adjustmentAmount, direction, timestamp, signature, loanCoin, collateralCoin, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanFlexibleBorrowHistoryGET = function sapiV1LoanFlexibleBorrowHistoryGET (req, res, next, timestamp, signature, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow) {
  CryptoLoans.sapiV1LoanFlexibleBorrowHistoryGET(timestamp, signature, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanFlexibleBorrowPOST = function sapiV1LoanFlexibleBorrowPOST (req, res, next, timestamp, signature, loanCoin, loanAmount, collateralCoin, collateralAmount, recvWindow) {
  CryptoLoans.sapiV1LoanFlexibleBorrowPOST(timestamp, signature, loanCoin, loanAmount, collateralCoin, collateralAmount, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanFlexibleCollateralDataGET = function sapiV1LoanFlexibleCollateralDataGET (req, res, next, timestamp, signature, collateralCoin, recvWindow) {
  CryptoLoans.sapiV1LoanFlexibleCollateralDataGET(timestamp, signature, collateralCoin, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanFlexibleLoanableDataGET = function sapiV1LoanFlexibleLoanableDataGET (req, res, next, timestamp, signature, loanCoin, recvWindow) {
  CryptoLoans.sapiV1LoanFlexibleLoanableDataGET(timestamp, signature, loanCoin, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanFlexibleLtvAdjustmentHistoryGET = function sapiV1LoanFlexibleLtvAdjustmentHistoryGET (req, res, next, timestamp, signature, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow) {
  CryptoLoans.sapiV1LoanFlexibleLtvAdjustmentHistoryGET(timestamp, signature, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanFlexibleOngoingOrdersGET = function sapiV1LoanFlexibleOngoingOrdersGET (req, res, next, timestamp, signature, loanCoin, collateralCoin, current, limit, recvWindow) {
  CryptoLoans.sapiV1LoanFlexibleOngoingOrdersGET(timestamp, signature, loanCoin, collateralCoin, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanFlexibleRepayHistoryGET = function sapiV1LoanFlexibleRepayHistoryGET (req, res, next, timestamp, signature, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow) {
  CryptoLoans.sapiV1LoanFlexibleRepayHistoryGET(timestamp, signature, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanFlexibleRepayPOST = function sapiV1LoanFlexibleRepayPOST (req, res, next, repayAmount, timestamp, signature, loanCoin, collateralCoin, collateralReturn, fullRepayment, recvWindow) {
  CryptoLoans.sapiV1LoanFlexibleRepayPOST(repayAmount, timestamp, signature, loanCoin, collateralCoin, collateralReturn, fullRepayment, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanIncomeGET = function sapiV1LoanIncomeGET (req, res, next, timestamp, signature, asset, type, startTime, endTime, limit, recvWindow) {
  CryptoLoans.sapiV1LoanIncomeGET(timestamp, signature, asset, type, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanLoanableDataGET = function sapiV1LoanLoanableDataGET (req, res, next, timestamp, signature, loanCoin, vipLevel, recvWindow) {
  CryptoLoans.sapiV1LoanLoanableDataGET(timestamp, signature, loanCoin, vipLevel, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanLtvAdjustmentHistoryGET = function sapiV1LoanLtvAdjustmentHistoryGET (req, res, next, timestamp, signature, orderId, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow) {
  CryptoLoans.sapiV1LoanLtvAdjustmentHistoryGET(timestamp, signature, orderId, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanOngoingOrdersGET = function sapiV1LoanOngoingOrdersGET (req, res, next, timestamp, signature, orderId, loanCoin, collateralCoin, current, limit, recvWindow) {
  CryptoLoans.sapiV1LoanOngoingOrdersGET(timestamp, signature, orderId, loanCoin, collateralCoin, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanRepayCollateralRateGET = function sapiV1LoanRepayCollateralRateGET (req, res, next, loanCoin, collateralCoin, repayAmount, timestamp, signature, recvWindow) {
  CryptoLoans.sapiV1LoanRepayCollateralRateGET(loanCoin, collateralCoin, repayAmount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanRepayHistoryGET = function sapiV1LoanRepayHistoryGET (req, res, next, timestamp, signature, orderId, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow) {
  CryptoLoans.sapiV1LoanRepayHistoryGET(timestamp, signature, orderId, loanCoin, collateralCoin, startTime, endTime, current, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LoanRepayPOST = function sapiV1LoanRepayPOST (req, res, next, orderId, amount, timestamp, signature, type, collateralReturn, recvWindow) {
  CryptoLoans.sapiV1LoanRepayPOST(orderId, amount, timestamp, signature, type, collateralReturn, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
