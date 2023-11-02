'use strict';

var utils = require('../utils/writer.js');
var Trade = require('../service/TradeService');

module.exports.apiV3AccountGET = function apiV3AccountGET (req, res, next, timestamp, signature, recvWindow) {
  Trade.apiV3AccountGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3AllOrderListGET = function apiV3AllOrderListGET (req, res, next, timestamp, signature, fromId, startTime, endTime, limit, recvWindow) {
  Trade.apiV3AllOrderListGET(timestamp, signature, fromId, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3AllOrdersGET = function apiV3AllOrdersGET (req, res, next, symbol, timestamp, signature, orderId, startTime, endTime, limit, recvWindow) {
  Trade.apiV3AllOrdersGET(symbol, timestamp, signature, orderId, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3MyPreventedMatchesGET = function apiV3MyPreventedMatchesGET (req, res, next, symbol, timestamp, signature, preventedMatchId, orderId, fromPreventedMatchId, limit, recvWindow) {
  Trade.apiV3MyPreventedMatchesGET(symbol, timestamp, signature, preventedMatchId, orderId, fromPreventedMatchId, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3MyTradesGET = function apiV3MyTradesGET (req, res, next, symbol, timestamp, signature, orderId, startTime, endTime, fromId, limit, recvWindow) {
  Trade.apiV3MyTradesGET(symbol, timestamp, signature, orderId, startTime, endTime, fromId, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OpenOrderListGET = function apiV3OpenOrderListGET (req, res, next, timestamp, signature, recvWindow) {
  Trade.apiV3OpenOrderListGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OpenOrdersDELETE = function apiV3OpenOrdersDELETE (req, res, next, symbol, timestamp, signature, recvWindow) {
  Trade.apiV3OpenOrdersDELETE(symbol, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OpenOrdersGET = function apiV3OpenOrdersGET (req, res, next, timestamp, signature, symbol, recvWindow) {
  Trade.apiV3OpenOrdersGET(timestamp, signature, symbol, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OrderCancelReplacePOST = function apiV3OrderCancelReplacePOST (req, res, next, symbol, side, type, cancelReplaceMode, timestamp, signature, cancelRestrictions, timeInForce, quantity, quoteOrderQty, price, cancelNewClientOrderId, cancelOrigClientOrderId, cancelOrderId, newClientOrderId, strategyId, strategyType, stopPrice, trailingDelta, icebergQty, newOrderRespType, selfTradePreventionMode, recvWindow) {
  Trade.apiV3OrderCancelReplacePOST(symbol, side, type, cancelReplaceMode, timestamp, signature, cancelRestrictions, timeInForce, quantity, quoteOrderQty, price, cancelNewClientOrderId, cancelOrigClientOrderId, cancelOrderId, newClientOrderId, strategyId, strategyType, stopPrice, trailingDelta, icebergQty, newOrderRespType, selfTradePreventionMode, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OrderDELETE = function apiV3OrderDELETE (req, res, next, symbol, timestamp, signature, orderId, origClientOrderId, newClientOrderId, cancelRestrictions, recvWindow) {
  Trade.apiV3OrderDELETE(symbol, timestamp, signature, orderId, origClientOrderId, newClientOrderId, cancelRestrictions, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OrderGET = function apiV3OrderGET (req, res, next, symbol, timestamp, signature, orderId, origClientOrderId, recvWindow) {
  Trade.apiV3OrderGET(symbol, timestamp, signature, orderId, origClientOrderId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OrderListDELETE = function apiV3OrderListDELETE (req, res, next, symbol, timestamp, signature, orderListId, listClientOrderId, newClientOrderId, recvWindow) {
  Trade.apiV3OrderListDELETE(symbol, timestamp, signature, orderListId, listClientOrderId, newClientOrderId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OrderListGET = function apiV3OrderListGET (req, res, next, timestamp, signature, orderListId, origClientOrderId, recvWindow) {
  Trade.apiV3OrderListGET(timestamp, signature, orderListId, origClientOrderId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OrderOcoPOST = function apiV3OrderOcoPOST (req, res, next, symbol, side, quantity, price, stopPrice, timestamp, signature, listClientOrderId, limitClientOrderId, limitStrategyId, limitStrategyType, limitIcebergQty, trailingDelta, stopClientOrderId, stopStrategyId, stopStrategyType, stopLimitPrice, stopIcebergQty, stopLimitTimeInForce, newOrderRespType, selfTradePreventionMode, recvWindow) {
  Trade.apiV3OrderOcoPOST(symbol, side, quantity, price, stopPrice, timestamp, signature, listClientOrderId, limitClientOrderId, limitStrategyId, limitStrategyType, limitIcebergQty, trailingDelta, stopClientOrderId, stopStrategyId, stopStrategyType, stopLimitPrice, stopIcebergQty, stopLimitTimeInForce, newOrderRespType, selfTradePreventionMode, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OrderPOST = function apiV3OrderPOST (req, res, next, symbol, side, type, timestamp, signature, timeInForce, quantity, quoteOrderQty, price, newClientOrderId, strategyId, strategyType, stopPrice, trailingDelta, icebergQty, newOrderRespType, selfTradePreventionMode, recvWindow) {
  Trade.apiV3OrderPOST(symbol, side, type, timestamp, signature, timeInForce, quantity, quoteOrderQty, price, newClientOrderId, strategyId, strategyType, stopPrice, trailingDelta, icebergQty, newOrderRespType, selfTradePreventionMode, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3OrderTestPOST = function apiV3OrderTestPOST (req, res, next, symbol, side, type, timestamp, signature, timeInForce, quantity, quoteOrderQty, price, newClientOrderId, strategyId, strategyType, stopPrice, trailingDelta, icebergQty, newOrderRespType, recvWindow) {
  Trade.apiV3OrderTestPOST(symbol, side, type, timestamp, signature, timeInForce, quantity, quoteOrderQty, price, newClientOrderId, strategyId, strategyType, stopPrice, trailingDelta, icebergQty, newOrderRespType, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3RateLimitOrderGET = function apiV3RateLimitOrderGET (req, res, next, timestamp, signature, recvWindow) {
  Trade.apiV3RateLimitOrderGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
