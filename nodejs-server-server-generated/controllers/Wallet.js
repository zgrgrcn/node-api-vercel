'use strict';

var utils = require('../utils/writer.js');
var Wallet = require('../service/WalletService');

module.exports.sapiV1AccountApiRestrictionsGET = function sapiV1AccountApiRestrictionsGET (req, res, next, timestamp, signature, recvWindow) {
  Wallet.sapiV1AccountApiRestrictionsGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AccountApiTradingStatusGET = function sapiV1AccountApiTradingStatusGET (req, res, next, timestamp, signature, recvWindow) {
  Wallet.sapiV1AccountApiTradingStatusGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AccountDisableFastWithdrawSwitchPOST = function sapiV1AccountDisableFastWithdrawSwitchPOST (req, res, next, timestamp, signature, recvWindow) {
  Wallet.sapiV1AccountDisableFastWithdrawSwitchPOST(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AccountEnableFastWithdrawSwitchPOST = function sapiV1AccountEnableFastWithdrawSwitchPOST (req, res, next, timestamp, signature, recvWindow) {
  Wallet.sapiV1AccountEnableFastWithdrawSwitchPOST(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AccountSnapshotGET = function sapiV1AccountSnapshotGET (req, res, next, type, timestamp, signature, startTime, endTime, limit, recvWindow) {
  Wallet.sapiV1AccountSnapshotGET(type, timestamp, signature, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AccountStatusGET = function sapiV1AccountStatusGET (req, res, next, timestamp, signature, recvWindow) {
  Wallet.sapiV1AccountStatusGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetAssetDetailGET = function sapiV1AssetAssetDetailGET (req, res, next, timestamp, signature, asset, recvWindow) {
  Wallet.sapiV1AssetAssetDetailGET(timestamp, signature, asset, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetAssetDividendGET = function sapiV1AssetAssetDividendGET (req, res, next, timestamp, signature, asset, startTime, endTime, limit, recvWindow) {
  Wallet.sapiV1AssetAssetDividendGET(timestamp, signature, asset, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetConvert_transferPOST = function sapiV1AssetConvert_transferPOST (req, res, next, clientTranId, asset, amount, targetAsset, timestamp, signature, recvWindow) {
  Wallet.sapiV1AssetConvert_transferPOST(clientTranId, asset, amount, targetAsset, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetConvert_transferQueryByPageGET = function sapiV1AssetConvert_transferQueryByPageGET (req, res, next, startTime, endTime, timestamp, signature, tranId, asset, accountType, current, size, recvWindow) {
  Wallet.sapiV1AssetConvert_transferQueryByPageGET(startTime, endTime, timestamp, signature, tranId, asset, accountType, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetCustodyTransfer_historyGET = function sapiV1AssetCustodyTransfer_historyGET (req, res, next, email, startTime, endTime, asset, timestamp, signature, type, current, size, recvWindow) {
  Wallet.sapiV1AssetCustodyTransfer_historyGET(email, startTime, endTime, asset, timestamp, signature, type, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetDribbletGET = function sapiV1AssetDribbletGET (req, res, next, timestamp, signature, startTime, endTime, recvWindow) {
  Wallet.sapiV1AssetDribbletGET(timestamp, signature, startTime, endTime, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetDustPOST = function sapiV1AssetDustPOST (req, res, next, asset, timestamp, signature, recvWindow) {
  Wallet.sapiV1AssetDustPOST(asset, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetDust_btcPOST = function sapiV1AssetDust_btcPOST (req, res, next, timestamp, signature, recvWindow) {
  Wallet.sapiV1AssetDust_btcPOST(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetGet_funding_assetPOST = function sapiV1AssetGet_funding_assetPOST (req, res, next, timestamp, signature, asset, needBtcValuation, recvWindow) {
  Wallet.sapiV1AssetGet_funding_assetPOST(timestamp, signature, asset, needBtcValuation, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetLedger_transferCloud_miningQueryByPageGET = function sapiV1AssetLedger_transferCloud_miningQueryByPageGET (req, res, next, startTime, endTime, timestamp, signature, tranId, clientTranId, asset, current, size, recvWindow) {
  Wallet.sapiV1AssetLedger_transferCloud_miningQueryByPageGET(startTime, endTime, timestamp, signature, tranId, clientTranId, asset, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetTradeFeeGET = function sapiV1AssetTradeFeeGET (req, res, next, timestamp, signature, symbol, recvWindow) {
  Wallet.sapiV1AssetTradeFeeGET(timestamp, signature, symbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetTransferGET = function sapiV1AssetTransferGET (req, res, next, type, timestamp, signature, startTime, endTime, current, size, fromSymbol, toSymbol, recvWindow) {
  Wallet.sapiV1AssetTransferGET(type, timestamp, signature, startTime, endTime, current, size, fromSymbol, toSymbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetTransferPOST = function sapiV1AssetTransferPOST (req, res, next, type, asset, amount, timestamp, signature, fromSymbol, toSymbol, recvWindow) {
  Wallet.sapiV1AssetTransferPOST(type, asset, amount, timestamp, signature, fromSymbol, toSymbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1AssetWalletBalanceGET = function sapiV1AssetWalletBalanceGET (req, res, next, timestamp, signature, recvWindow) {
  Wallet.sapiV1AssetWalletBalanceGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1CapitalConfigGetallGET = function sapiV1CapitalConfigGetallGET (req, res, next, timestamp, signature, recvWindow) {
  Wallet.sapiV1CapitalConfigGetallGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1CapitalContractConvertible_coinsGET = function sapiV1CapitalContractConvertible_coinsGET (req, res, next) {
  Wallet.sapiV1CapitalContractConvertible_coinsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1CapitalContractConvertible_coinsPOST = function sapiV1CapitalContractConvertible_coinsPOST (req, res, next, coin, enable) {
  Wallet.sapiV1CapitalContractConvertible_coinsPOST(coin, enable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1CapitalDepositAddressGET = function sapiV1CapitalDepositAddressGET (req, res, next, coin, timestamp, signature, network, recvWindow) {
  Wallet.sapiV1CapitalDepositAddressGET(coin, timestamp, signature, network, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1CapitalDepositCredit_applyPOST = function sapiV1CapitalDepositCredit_applyPOST (req, res, next, timestamp, signature, depositId, txId, subAccountId, subUserId, recvWindow) {
  Wallet.sapiV1CapitalDepositCredit_applyPOST(timestamp, signature, depositId, txId, subAccountId, subUserId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1CapitalDepositHisrecGET = function sapiV1CapitalDepositHisrecGET (req, res, next, timestamp, signature, coin, status, startTime, endTime, offset, limit, recvWindow) {
  Wallet.sapiV1CapitalDepositHisrecGET(timestamp, signature, coin, status, startTime, endTime, offset, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1CapitalWithdrawApplyPOST = function sapiV1CapitalWithdrawApplyPOST (req, res, next, coin, address, amount, timestamp, signature, withdrawOrderId, network, addressTag, transactionFeeFlag, name, walletType, recvWindow) {
  Wallet.sapiV1CapitalWithdrawApplyPOST(coin, address, amount, timestamp, signature, withdrawOrderId, network, addressTag, transactionFeeFlag, name, walletType, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1CapitalWithdrawHistoryGET = function sapiV1CapitalWithdrawHistoryGET (req, res, next, timestamp, signature, coin, withdrawOrderId, status, startTime, endTime, offset, limit, recvWindow) {
  Wallet.sapiV1CapitalWithdrawHistoryGET(timestamp, signature, coin, withdrawOrderId, status, startTime, endTime, offset, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1SystemStatusGET = function sapiV1SystemStatusGET (req, res, next) {
  Wallet.sapiV1SystemStatusGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV3AssetGetUserAssetPOST = function sapiV3AssetGetUserAssetPOST (req, res, next, timestamp, signature, asset, needBtcValuation, recvWindow) {
  Wallet.sapiV3AssetGetUserAssetPOST(timestamp, signature, asset, needBtcValuation, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
