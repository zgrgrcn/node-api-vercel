'use strict';

var utils = require('../utils/writer.js');
var SubAccount = require('../service/SubAccountService');

module.exports.sapiV1CapitalDepositSubAddressGET = function sapiV1CapitalDepositSubAddressGET (req, res, next, email, coin, timestamp, signature, network, recvWindow) {
  SubAccount.sapiV1CapitalDepositSubAddressGET(email, coin, timestamp, signature, network, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1CapitalDepositSubHisrecGET = function sapiV1CapitalDepositSubHisrecGET (req, res, next, email, timestamp, signature, coin, status, startTime, endTime, limit, offset, recvWindow) {
  SubAccount.sapiV1CapitalDepositSubHisrecGET(email, timestamp, signature, coin, status, startTime, endTime, limit, offset, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountAccountSnapshotGET = function sapiV1Managed_subaccountAccountSnapshotGET (req, res, next, email, type, timestamp, signature, startTime, endTime, limit, recvWindow) {
  SubAccount.sapiV1Managed_subaccountAccountSnapshotGET(email, type, timestamp, signature, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountAssetGET = function sapiV1Managed_subaccountAssetGET (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Managed_subaccountAssetGET(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountDepositAddressGET = function sapiV1Managed_subaccountDepositAddressGET (req, res, next, email, coin, timestamp, signature, network, recvWindow) {
  SubAccount.sapiV1Managed_subaccountDepositAddressGET(email, coin, timestamp, signature, network, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountDepositPOST = function sapiV1Managed_subaccountDepositPOST (req, res, next, toEmail, asset, amount, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Managed_subaccountDepositPOST(toEmail, asset, amount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountFetch_future_assetGET = function sapiV1Managed_subaccountFetch_future_assetGET (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Managed_subaccountFetch_future_assetGET(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountInfoGET = function sapiV1Managed_subaccountInfoGET (req, res, next, email, timestamp, signature, page, limit, recvWindow) {
  SubAccount.sapiV1Managed_subaccountInfoGET(email, timestamp, signature, page, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountMarginAssetGET = function sapiV1Managed_subaccountMarginAssetGET (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Managed_subaccountMarginAssetGET(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountQueryTransLogForInvestorGET = function sapiV1Managed_subaccountQueryTransLogForInvestorGET (req, res, next, email, timestamp, signature, startTime, endTime, page, limit, transfers, transferFunctionAccountType, recvWindow) {
  SubAccount.sapiV1Managed_subaccountQueryTransLogForInvestorGET(email, timestamp, signature, startTime, endTime, page, limit, transfers, transferFunctionAccountType, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountQueryTransLogForTradeParentGET = function sapiV1Managed_subaccountQueryTransLogForTradeParentGET (req, res, next, email, timestamp, signature, startTime, endTime, page, limit, transfers, transferFunctionAccountType, recvWindow) {
  SubAccount.sapiV1Managed_subaccountQueryTransLogForTradeParentGET(email, timestamp, signature, startTime, endTime, page, limit, transfers, transferFunctionAccountType, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountQuery_trans_logGET = function sapiV1Managed_subaccountQuery_trans_logGET (req, res, next, transfers, transferFunctionAccountType, timestamp, signature, startTime, endTime, page, limit, recvWindow) {
  SubAccount.sapiV1Managed_subaccountQuery_trans_logGET(transfers, transferFunctionAccountType, timestamp, signature, startTime, endTime, page, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Managed_subaccountWithdrawPOST = function sapiV1Managed_subaccountWithdrawPOST (req, res, next, fromEmail, asset, amount, timestamp, signature, transferDate, recvWindow) {
  SubAccount.sapiV1Managed_subaccountWithdrawPOST(fromEmail, asset, amount, timestamp, signature, transferDate, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountBlvtEnablePOST = function sapiV1Sub_accountBlvtEnablePOST (req, res, next, email, enableBlvt, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountBlvtEnablePOST(email, enableBlvt, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountEoptionsEnablePOST = function sapiV1Sub_accountEoptionsEnablePOST (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountEoptionsEnablePOST(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountFuturesAccountGET = function sapiV1Sub_accountFuturesAccountGET (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountFuturesAccountGET(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountFuturesAccountSummaryGET = function sapiV1Sub_accountFuturesAccountSummaryGET (req, res, next, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountFuturesAccountSummaryGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountFuturesEnablePOST = function sapiV1Sub_accountFuturesEnablePOST (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountFuturesEnablePOST(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountFuturesInternalTransferGET = function sapiV1Sub_accountFuturesInternalTransferGET (req, res, next, email, futuresType, timestamp, signature, startTime, endTime, page, limit, recvWindow) {
  SubAccount.sapiV1Sub_accountFuturesInternalTransferGET(email, futuresType, timestamp, signature, startTime, endTime, page, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountFuturesInternalTransferPOST = function sapiV1Sub_accountFuturesInternalTransferPOST (req, res, next, fromEmail, toEmail, futuresType, asset, amount, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountFuturesInternalTransferPOST(fromEmail, toEmail, futuresType, asset, amount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountFuturesPositionRiskGET = function sapiV1Sub_accountFuturesPositionRiskGET (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountFuturesPositionRiskGET(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountFuturesTransferPOST = function sapiV1Sub_accountFuturesTransferPOST (req, res, next, email, asset, amount, type, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountFuturesTransferPOST(email, asset, amount, type, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountListGET = function sapiV1Sub_accountListGET (req, res, next, timestamp, signature, email, isFreeze, page, limit, recvWindow) {
  SubAccount.sapiV1Sub_accountListGET(timestamp, signature, email, isFreeze, page, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountMarginAccountGET = function sapiV1Sub_accountMarginAccountGET (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountMarginAccountGET(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountMarginAccountSummaryGET = function sapiV1Sub_accountMarginAccountSummaryGET (req, res, next, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountMarginAccountSummaryGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountMarginEnablePOST = function sapiV1Sub_accountMarginEnablePOST (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountMarginEnablePOST(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountMarginTransferPOST = function sapiV1Sub_accountMarginTransferPOST (req, res, next, email, asset, amount, type, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountMarginTransferPOST(email, asset, amount, type, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountSpotSummaryGET = function sapiV1Sub_accountSpotSummaryGET (req, res, next, timestamp, signature, email, page, size, recvWindow) {
  SubAccount.sapiV1Sub_accountSpotSummaryGET(timestamp, signature, email, page, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountStatusGET = function sapiV1Sub_accountStatusGET (req, res, next, timestamp, signature, email, recvWindow) {
  SubAccount.sapiV1Sub_accountStatusGET(timestamp, signature, email, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountSubAccountApiIpRestrictionGET = function sapiV1Sub_accountSubAccountApiIpRestrictionGET (req, res, next, email, subAccountApiKey, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountSubAccountApiIpRestrictionGET(email, subAccountApiKey, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountSubAccountApiIpRestrictionIpListDELETE = function sapiV1Sub_accountSubAccountApiIpRestrictionIpListDELETE (req, res, next, email, subAccountApiKey, timestamp, signature, ipAddress, thirdPartyName, recvWindow) {
  SubAccount.sapiV1Sub_accountSubAccountApiIpRestrictionIpListDELETE(email, subAccountApiKey, timestamp, signature, ipAddress, thirdPartyName, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountSubTransferHistoryGET = function sapiV1Sub_accountSubTransferHistoryGET (req, res, next, timestamp, signature, fromEmail, toEmail, startTime, endTime, page, limit, recvWindow) {
  SubAccount.sapiV1Sub_accountSubTransferHistoryGET(timestamp, signature, fromEmail, toEmail, startTime, endTime, page, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountTransaction_statisticsGET = function sapiV1Sub_accountTransaction_statisticsGET (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountTransaction_statisticsGET(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountTransferSubToMasterPOST = function sapiV1Sub_accountTransferSubToMasterPOST (req, res, next, asset, amount, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountTransferSubToMasterPOST(asset, amount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountTransferSubToSubPOST = function sapiV1Sub_accountTransferSubToSubPOST (req, res, next, toEmail, asset, amount, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountTransferSubToSubPOST(toEmail, asset, amount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountTransferSubUserHistoryGET = function sapiV1Sub_accountTransferSubUserHistoryGET (req, res, next, timestamp, signature, asset, type, startTime, endTime, limit, recvWindow) {
  SubAccount.sapiV1Sub_accountTransferSubUserHistoryGET(timestamp, signature, asset, type, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountUniversalTransferGET = function sapiV1Sub_accountUniversalTransferGET (req, res, next, timestamp, signature, fromEmail, toEmail, clientTranId, startTime, endTime, page, limit, recvWindow) {
  SubAccount.sapiV1Sub_accountUniversalTransferGET(timestamp, signature, fromEmail, toEmail, clientTranId, startTime, endTime, page, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountUniversalTransferPOST = function sapiV1Sub_accountUniversalTransferPOST (req, res, next, fromAccountType, toAccountType, asset, amount, timestamp, signature, fromEmail, toEmail, clientTranId, symbol, recvWindow) {
  SubAccount.sapiV1Sub_accountUniversalTransferPOST(fromAccountType, toAccountType, asset, amount, timestamp, signature, fromEmail, toEmail, clientTranId, symbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Sub_accountVirtualSubAccountPOST = function sapiV1Sub_accountVirtualSubAccountPOST (req, res, next, subAccountString, timestamp, signature, recvWindow) {
  SubAccount.sapiV1Sub_accountVirtualSubAccountPOST(subAccountString, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV2Sub_accountFuturesAccountGET = function sapiV2Sub_accountFuturesAccountGET (req, res, next, email, futuresType, timestamp, signature, recvWindow) {
  SubAccount.sapiV2Sub_accountFuturesAccountGET(email, futuresType, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV2Sub_accountFuturesAccountSummaryGET = function sapiV2Sub_accountFuturesAccountSummaryGET (req, res, next, futuresType, timestamp, signature, page, limit, recvWindow) {
  SubAccount.sapiV2Sub_accountFuturesAccountSummaryGET(futuresType, timestamp, signature, page, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV2Sub_accountFuturesPositionRiskGET = function sapiV2Sub_accountFuturesPositionRiskGET (req, res, next, email, futuresType, timestamp, signature, recvWindow) {
  SubAccount.sapiV2Sub_accountFuturesPositionRiskGET(email, futuresType, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV2Sub_accountSubAccountApiIpRestrictionPOST = function sapiV2Sub_accountSubAccountApiIpRestrictionPOST (req, res, next, email, subAccountApiKey, status, timestamp, signature, thirdPartyName, recvWindow) {
  SubAccount.sapiV2Sub_accountSubAccountApiIpRestrictionPOST(email, subAccountApiKey, status, timestamp, signature, thirdPartyName, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV3Sub_accountAssetsGET = function sapiV3Sub_accountAssetsGET (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV3Sub_accountAssetsGET(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV4Sub_accountAssetsGET = function sapiV4Sub_accountAssetsGET (req, res, next, email, timestamp, signature, recvWindow) {
  SubAccount.sapiV4Sub_accountAssetsGET(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
