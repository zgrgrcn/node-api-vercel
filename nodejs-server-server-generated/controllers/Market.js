'use strict';

var utils = require('../utils/writer.js');
var Market = require('../service/MarketService');

module.exports.apiV3AggTradesGET = function apiV3AggTradesGET (req, res, next, symbol, fromId, startTime, endTime, limit) {
  Market.apiV3AggTradesGET(symbol, fromId, startTime, endTime, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3AvgPriceGET = function apiV3AvgPriceGET (req, res, next, symbol) {
  Market.apiV3AvgPriceGET(symbol)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3DepthGET = function apiV3DepthGET (req, res, next, symbol, limit) {
  Market.apiV3DepthGET(symbol, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3ExchangeInfoGET = function apiV3ExchangeInfoGET (req, res, next, symbol, symbols, permissions) {
  Market.apiV3ExchangeInfoGET(symbol, symbols, permissions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3HistoricalTradesGET = function apiV3HistoricalTradesGET (req, res, next, symbol, limit, fromId) {
  Market.apiV3HistoricalTradesGET(symbol, limit, fromId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3KlinesGET = function apiV3KlinesGET (req, res, next, symbol, interval, startTime, endTime, limit) {
  Market.apiV3KlinesGET(symbol, interval, startTime, endTime, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3PingGET = function apiV3PingGET (req, res, next) {
  Market.apiV3PingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3Ticker24hrGET = function apiV3Ticker24hrGET (req, res, next, symbol, symbols, type) {
  Market.apiV3Ticker24hrGET(symbol, symbols, type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3TickerBookTickerGET = function apiV3TickerBookTickerGET (req, res, next, symbol, symbols) {
  Market.apiV3TickerBookTickerGET(symbol, symbols)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3TickerGET = function apiV3TickerGET (req, res, next, symbol, symbols, windowSize, type) {
  Market.apiV3TickerGET(symbol, symbols, windowSize, type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3TickerPriceGET = function apiV3TickerPriceGET (req, res, next, symbol, symbols) {
  Market.apiV3TickerPriceGET(symbol, symbols)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3TimeGET = function apiV3TimeGET (req, res, next) {
  Market.apiV3TimeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3TradesGET = function apiV3TradesGET (req, res, next, symbol, limit) {
  Market.apiV3TradesGET(symbol, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV3UiKlinesGET = function apiV3UiKlinesGET (req, res, next, symbol, interval, startTime, endTime, limit) {
  Market.apiV3UiKlinesGET(symbol, interval, startTime, endTime, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
