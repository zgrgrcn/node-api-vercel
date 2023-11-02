'use strict';

var utils = require('../utils/writer.js');
var Margin = require('../service/MarginService');

module.exports.sapiV1BnbBurnGET = function sapiV1BnbBurnGET (req, res, next, timestamp, signature, recvWindow) {
  Margin.sapiV1BnbBurnGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BnbBurnPOST = function sapiV1BnbBurnPOST (req, res, next, timestamp, signature, spotBNBBurn, interestBNBBurn, recvWindow) {
  Margin.sapiV1BnbBurnPOST(timestamp, signature, spotBNBBurn, interestBNBBurn, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginAccountGET = function sapiV1MarginAccountGET (req, res, next, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginAccountGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginAllAssetsGET = function sapiV1MarginAllAssetsGET (req, res, next) {
  Margin.sapiV1MarginAllAssetsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginAllOrderListGET = function sapiV1MarginAllOrderListGET (req, res, next, timestamp, signature, isIsolated, symbol, fromId, startTime, endTime, limit, recvWindow) {
  Margin.sapiV1MarginAllOrderListGET(timestamp, signature, isIsolated, symbol, fromId, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginAllOrdersGET = function sapiV1MarginAllOrdersGET (req, res, next, symbol, timestamp, signature, isIsolated, orderId, startTime, endTime, limit, recvWindow) {
  Margin.sapiV1MarginAllOrdersGET(symbol, timestamp, signature, isIsolated, orderId, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginAllPairsGET = function sapiV1MarginAllPairsGET (req, res, next) {
  Margin.sapiV1MarginAllPairsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginAssetGET = function sapiV1MarginAssetGET (req, res, next, asset) {
  Margin.sapiV1MarginAssetGET(asset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginCrossMarginCollateralRatioGET = function sapiV1MarginCrossMarginCollateralRatioGET (req, res, next) {
  Margin.sapiV1MarginCrossMarginCollateralRatioGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginCrossMarginDataGET = function sapiV1MarginCrossMarginDataGET (req, res, next, timestamp, signature, vipLevel, coin, recvWindow) {
  Margin.sapiV1MarginCrossMarginDataGET(timestamp, signature, vipLevel, coin, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginDribbletGET = function sapiV1MarginDribbletGET (req, res, next, timestamp, signature, startTime, endTime, recvWindow) {
  Margin.sapiV1MarginDribbletGET(timestamp, signature, startTime, endTime, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginDustGET = function sapiV1MarginDustGET (req, res, next, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginDustGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginDustPOST = function sapiV1MarginDustPOST (req, res, next, asset, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginDustPOST(asset, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginExchange_small_liabilityGET = function sapiV1MarginExchange_small_liabilityGET (req, res, next, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginExchange_small_liabilityGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginExchange_small_liability_historyGET = function sapiV1MarginExchange_small_liability_historyGET (req, res, next, timestamp, signature, current, size, startTime, endTime, recvWindow) {
  Margin.sapiV1MarginExchange_small_liability_historyGET(timestamp, signature, current, size, startTime, endTime, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginForceLiquidationRecGET = function sapiV1MarginForceLiquidationRecGET (req, res, next, timestamp, signature, startTime, endTime, isolatedSymbol, current, size, recvWindow) {
  Margin.sapiV1MarginForceLiquidationRecGET(timestamp, signature, startTime, endTime, isolatedSymbol, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginInterestHistoryGET = function sapiV1MarginInterestHistoryGET (req, res, next, timestamp, signature, asset, isolatedSymbol, startTime, endTime, current, size, archived, recvWindow) {
  Margin.sapiV1MarginInterestHistoryGET(timestamp, signature, asset, isolatedSymbol, startTime, endTime, current, size, archived, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginInterestRateHistoryGET = function sapiV1MarginInterestRateHistoryGET (req, res, next, asset, timestamp, signature, vipLevel, startTime, endTime, recvWindow) {
  Margin.sapiV1MarginInterestRateHistoryGET(asset, timestamp, signature, vipLevel, startTime, endTime, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginIsolatedAccountDELETE = function sapiV1MarginIsolatedAccountDELETE (req, res, next, symbol, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginIsolatedAccountDELETE(symbol, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginIsolatedAccountGET = function sapiV1MarginIsolatedAccountGET (req, res, next, timestamp, signature, symbols, recvWindow) {
  Margin.sapiV1MarginIsolatedAccountGET(timestamp, signature, symbols, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginIsolatedAccountLimitGET = function sapiV1MarginIsolatedAccountLimitGET (req, res, next, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginIsolatedAccountLimitGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginIsolatedAccountPOST = function sapiV1MarginIsolatedAccountPOST (req, res, next, symbol, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginIsolatedAccountPOST(symbol, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginIsolatedAllPairsGET = function sapiV1MarginIsolatedAllPairsGET (req, res, next, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginIsolatedAllPairsGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginIsolatedMarginDataGET = function sapiV1MarginIsolatedMarginDataGET (req, res, next, timestamp, signature, vipLevel, symbol, recvWindow) {
  Margin.sapiV1MarginIsolatedMarginDataGET(timestamp, signature, vipLevel, symbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginIsolatedMarginTierGET = function sapiV1MarginIsolatedMarginTierGET (req, res, next, symbol, timestamp, signature, tier, recvWindow) {
  Margin.sapiV1MarginIsolatedMarginTierGET(symbol, timestamp, signature, tier, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginIsolatedPairGET = function sapiV1MarginIsolatedPairGET (req, res, next, symbol, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginIsolatedPairGET(symbol, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginIsolatedTransferGET = function sapiV1MarginIsolatedTransferGET (req, res, next, symbol, timestamp, signature, asset, type, transFrom, transTo, startTime, endTime, current, size, recvWindow) {
  Margin.sapiV1MarginIsolatedTransferGET(symbol, timestamp, signature, asset, type, transFrom, transTo, startTime, endTime, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginIsolatedTransferPOST = function sapiV1MarginIsolatedTransferPOST (req, res, next, asset, symbol, transFrom, transTo, amount, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginIsolatedTransferPOST(asset, symbol, transFrom, transTo, amount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginLoanGET = function sapiV1MarginLoanGET (req, res, next, asset, timestamp, signature, isolatedSymbol, txId, startTime, endTime, current, size, archived, recvWindow) {
  Margin.sapiV1MarginLoanGET(asset, timestamp, signature, isolatedSymbol, txId, startTime, endTime, current, size, archived, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginLoanPOST = function sapiV1MarginLoanPOST (req, res, next, asset, amount, timestamp, signature, isIsolated, symbol, recvWindow) {
  Margin.sapiV1MarginLoanPOST(asset, amount, timestamp, signature, isIsolated, symbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginMaxBorrowableGET = function sapiV1MarginMaxBorrowableGET (req, res, next, asset, timestamp, signature, isolatedSymbol, recvWindow) {
  Margin.sapiV1MarginMaxBorrowableGET(asset, timestamp, signature, isolatedSymbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginMaxTransferableGET = function sapiV1MarginMaxTransferableGET (req, res, next, asset, timestamp, signature, isolatedSymbol, recvWindow) {
  Margin.sapiV1MarginMaxTransferableGET(asset, timestamp, signature, isolatedSymbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginMax_leveragePOST = function sapiV1MarginMax_leveragePOST (req, res, next, maxLeverage, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginMax_leveragePOST(maxLeverage, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginMyTradesGET = function sapiV1MarginMyTradesGET (req, res, next, symbol, timestamp, signature, isIsolated, startTime, endTime, fromId, limit, recvWindow) {
  Margin.sapiV1MarginMyTradesGET(symbol, timestamp, signature, isIsolated, startTime, endTime, fromId, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginNext_hourly_interest_rateGET = function sapiV1MarginNext_hourly_interest_rateGET (req, res, next, timestamp, signature, assets, isIsolated, recvWindow) {
  Margin.sapiV1MarginNext_hourly_interest_rateGET(timestamp, signature, assets, isIsolated, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginOpenOrderListGET = function sapiV1MarginOpenOrderListGET (req, res, next, timestamp, signature, isIsolated, symbol, recvWindow) {
  Margin.sapiV1MarginOpenOrderListGET(timestamp, signature, isIsolated, symbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginOpenOrdersDELETE = function sapiV1MarginOpenOrdersDELETE (req, res, next, symbol, timestamp, signature, isIsolated, recvWindow) {
  Margin.sapiV1MarginOpenOrdersDELETE(symbol, timestamp, signature, isIsolated, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginOpenOrdersGET = function sapiV1MarginOpenOrdersGET (req, res, next, timestamp, signature, symbol, isIsolated, recvWindow) {
  Margin.sapiV1MarginOpenOrdersGET(timestamp, signature, symbol, isIsolated, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginOrderDELETE = function sapiV1MarginOrderDELETE (req, res, next, symbol, timestamp, signature, isIsolated, orderId, origClientOrderId, newClientOrderId, recvWindow) {
  Margin.sapiV1MarginOrderDELETE(symbol, timestamp, signature, isIsolated, orderId, origClientOrderId, newClientOrderId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginOrderGET = function sapiV1MarginOrderGET (req, res, next, symbol, timestamp, signature, isIsolated, orderId, origClientOrderId, recvWindow) {
  Margin.sapiV1MarginOrderGET(symbol, timestamp, signature, isIsolated, orderId, origClientOrderId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginOrderListDELETE = function sapiV1MarginOrderListDELETE (req, res, next, symbol, timestamp, signature, isIsolated, orderListId, listClientOrderId, newClientOrderId, recvWindow) {
  Margin.sapiV1MarginOrderListDELETE(symbol, timestamp, signature, isIsolated, orderListId, listClientOrderId, newClientOrderId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginOrderListGET = function sapiV1MarginOrderListGET (req, res, next, timestamp, signature, isIsolated, symbol, orderListId, origClientOrderId, recvWindow) {
  Margin.sapiV1MarginOrderListGET(timestamp, signature, isIsolated, symbol, orderListId, origClientOrderId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginOrderOcoPOST = function sapiV1MarginOrderOcoPOST (req, res, next, symbol, side, quantity, price, stopPrice, timestamp, signature, isIsolated, listClientOrderId, limitClientOrderId, limitIcebergQty, stopClientOrderId, stopLimitPrice, stopIcebergQty, stopLimitTimeInForce, newOrderRespType, sideEffectType, selfTradePreventionMode, recvWindow) {
  Margin.sapiV1MarginOrderOcoPOST(symbol, side, quantity, price, stopPrice, timestamp, signature, isIsolated, listClientOrderId, limitClientOrderId, limitIcebergQty, stopClientOrderId, stopLimitPrice, stopIcebergQty, stopLimitTimeInForce, newOrderRespType, sideEffectType, selfTradePreventionMode, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginOrderPOST = function sapiV1MarginOrderPOST (req, res, next, symbol, side, type, quantity, autoRepayAtCancel, timestamp, signature, isIsolated, quoteOrderQty, price, stopPrice, newClientOrderId, icebergQty, newOrderRespType, sideEffectType, timeInForce, selfTradePreventionMode, recvWindow) {
  Margin.sapiV1MarginOrderPOST(symbol, side, type, quantity, autoRepayAtCancel, timestamp, signature, isIsolated, quoteOrderQty, price, stopPrice, newClientOrderId, icebergQty, newOrderRespType, sideEffectType, timeInForce, selfTradePreventionMode, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginPairGET = function sapiV1MarginPairGET (req, res, next, symbol) {
  Margin.sapiV1MarginPairGET(symbol)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginPriceIndexGET = function sapiV1MarginPriceIndexGET (req, res, next, symbol) {
  Margin.sapiV1MarginPriceIndexGET(symbol)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginRateLimitOrderGET = function sapiV1MarginRateLimitOrderGET (req, res, next, timestamp, signature, isIsolated, symbol, recvWindow) {
  Margin.sapiV1MarginRateLimitOrderGET(timestamp, signature, isIsolated, symbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginRepayGET = function sapiV1MarginRepayGET (req, res, next, asset, timestamp, signature, isolatedSymbol, txId, startTime, endTime, current, size, archived, recvWindow) {
  Margin.sapiV1MarginRepayGET(asset, timestamp, signature, isolatedSymbol, txId, startTime, endTime, current, size, archived, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginRepayPOST = function sapiV1MarginRepayPOST (req, res, next, asset, amount, timestamp, signature, isIsolated, symbol, recvWindow) {
  Margin.sapiV1MarginRepayPOST(asset, amount, timestamp, signature, isIsolated, symbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginTradeCoeffGET = function sapiV1MarginTradeCoeffGET (req, res, next, email, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginTradeCoeffGET(email, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginTransferGET = function sapiV1MarginTransferGET (req, res, next, timestamp, signature, asset, type, startTime, endTime, current, size, archived, recvWindow) {
  Margin.sapiV1MarginTransferGET(timestamp, signature, asset, type, startTime, endTime, current, size, archived, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1MarginTransferPOST = function sapiV1MarginTransferPOST (req, res, next, asset, amount, type, timestamp, signature, recvWindow) {
  Margin.sapiV1MarginTransferPOST(asset, amount, type, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
