'use strict';


/**
 * Compressed/Aggregate Trades List
 * Get compressed, aggregate trades. Trades that fill at the time, from the same order, with the same price will have the quantity aggregated. - If `fromId`, `startTime`, and `endTime` are not sent, the most recent aggregate trades will be returned. - Note that if a trade has the following values, this was a duplicate aggregate trade and marked as invalid:    p = '0' // price    q = '0' // qty    f = -1 // first_trade_id    l = -1 // last_trade_id  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * fromId Long Trade id to fetch from. Default gets most recent trades. (optional)
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 500; max 1000. (optional)
 * returns List
 **/
exports.apiV3AggTradesGET = function(symbol,fromId,startTime,endTime,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "p" : "0.01633102",
  "a" : 26129,
  "q" : "4.70443515",
  "T" : false,
  "f" : 27781,
  "l" : 27781,
  "m" : true,
  "M" : true
}, {
  "p" : "0.01633102",
  "a" : 26129,
  "q" : "4.70443515",
  "T" : false,
  "f" : 27781,
  "l" : 27781,
  "m" : true,
  "M" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Current Average Price
 * Current average price for a symbol.  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * returns inline_response_200_3
 **/
exports.apiV3AvgPriceGET = function(symbol) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mins" : 5,
  "price" : "9.35751834"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Order Book
 * | Limit               | Weight(IP)  | |---------------------|-------------| | 1-100               | 1           | | 101-500             | 5           | | 501-1000            | 10          | | 1001-5000           | 50          |
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * limit Integer If limit > 5000, then the response will truncate to 5000 (optional)
 * returns inline_response_200_2
 **/
exports.apiV3DepthGET = function(symbol,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastUpdateId" : 0,
  "asks" : [ [ "asks", "asks" ], [ "asks", "asks" ] ],
  "bids" : [ [ "bids", "bids" ], [ "bids", "bids" ] ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Exchange Information
 * Current exchange trading rules and symbol information  - If any symbol provided in either symbol or symbols do not exist, the endpoint will throw an error.  Weight(IP): 10
 *
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * symbols String  (optional)
 * permissions String  (optional)
 * returns inline_response_200_1
 **/
exports.apiV3ExchangeInfoGET = function(symbol,symbols,permissions) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rateLimits" : [ {
    "intervalNum" : 1,
    "limit" : 1200,
    "interval" : "MINUTE",
    "rateLimitType" : "REQUEST_WEIGHT"
  }, {
    "intervalNum" : 1,
    "limit" : 1200,
    "interval" : "MINUTE",
    "rateLimitType" : "REQUEST_WEIGHT"
  } ],
  "exchangeFilters" : [ { }, { } ],
  "timezone" : "UTC",
  "serverTime" : 1592882214236,
  "symbols" : [ {
    "symbol" : "ETHBTC",
    "quoteOrderQtyMarketAllowed" : true,
    "allowTrailingStop" : false,
    "baseAsset" : "ETH",
    "filters" : [ {
      "minPrice" : "0.00000100",
      "maxPrice" : "100000.00000000",
      "filterType" : "PRICE_FILTER",
      "tickSize" : "0.00000100"
    }, {
      "minPrice" : "0.00000100",
      "maxPrice" : "100000.00000000",
      "filterType" : "PRICE_FILTER",
      "tickSize" : "0.00000100"
    } ],
    "baseAssetPrecision" : 8,
    "isSpotTradingAllowed" : true,
    "quoteAssetPrecision" : 8,
    "quoteCommissionPrecision" : 8,
    "ocoAllowed" : true,
    "defaultSelfTradePreventionMode" : "NONE",
    "orderTypes" : [ "LIMIT", "LIMIT" ],
    "permissions" : [ "SPOT", "SPOT" ],
    "icebergAllowed" : true,
    "isMarginTradingAllowed" : true,
    "quoteAsset" : "BTC",
    "baseCommissionPrecision" : 8,
    "allowedSelfTradePreventionModes" : [ "NONE", "NONE" ],
    "status" : "TRADING"
  }, {
    "symbol" : "ETHBTC",
    "quoteOrderQtyMarketAllowed" : true,
    "allowTrailingStop" : false,
    "baseAsset" : "ETH",
    "filters" : [ {
      "minPrice" : "0.00000100",
      "maxPrice" : "100000.00000000",
      "filterType" : "PRICE_FILTER",
      "tickSize" : "0.00000100"
    }, {
      "minPrice" : "0.00000100",
      "maxPrice" : "100000.00000000",
      "filterType" : "PRICE_FILTER",
      "tickSize" : "0.00000100"
    } ],
    "baseAssetPrecision" : 8,
    "isSpotTradingAllowed" : true,
    "quoteAssetPrecision" : 8,
    "quoteCommissionPrecision" : 8,
    "ocoAllowed" : true,
    "defaultSelfTradePreventionMode" : "NONE",
    "orderTypes" : [ "LIMIT", "LIMIT" ],
    "permissions" : [ "SPOT", "SPOT" ],
    "icebergAllowed" : true,
    "isMarginTradingAllowed" : true,
    "quoteAsset" : "BTC",
    "baseCommissionPrecision" : 8,
    "allowedSelfTradePreventionModes" : [ "NONE", "NONE" ],
    "status" : "TRADING"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Old Trade Lookup
 * Get older market trades.  Weight(IP): 5
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * limit Integer Default 500; max 1000. (optional)
 * fromId Long Trade id to fetch from. Default gets most recent trades. (optional)
 * returns List
 **/
exports.apiV3HistoricalTradesGET = function(symbol,limit,fromId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "quoteQty" : "0.02077200",
  "price" : "9638.99000000",
  "qty" : "0.02077200",
  "isBestMatch" : true,
  "id" : 345196462,
  "time" : 1592887772684,
  "isBuyerMaker" : true
}, {
  "quoteQty" : "0.02077200",
  "price" : "9638.99000000",
  "qty" : "0.02077200",
  "isBestMatch" : true,
  "id" : 345196462,
  "time" : 1592887772684,
  "isBuyerMaker" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Kline/Candlestick Data
 * Kline/candlestick bars for a symbol. Klines are uniquely identified by their open time.  - If `startTime` and `endTime` are not sent, the most recent klines are returned.  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * interval String kline intervals
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 500; max 1000. (optional)
 * returns List
 **/
exports.apiV3KlinesGET = function(symbol,interval,startTime,endTime,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ 1499040000000, "0.01634790", "0.80000000", "0.01575800", "0.01577100", "148976.11427815", 1499644799999, "2434.19055334", 308, "1756.87402397", "28.46694368", "17928899.62484339" ], [ 1499040000000, "0.01634790", "0.80000000", "0.01575800", "0.01577100", "148976.11427815", 1499644799999, "2434.19055334", 308, "1756.87402397", "28.46694368", "17928899.62484339" ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Test Connectivity
 * Test connectivity to the Rest API.  Weight(IP): 1
 *
 * returns Object
 **/
exports.apiV3PingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 24hr Ticker Price Change Statistics
 * 24 hour rolling window price change statistics. Careful when accessing this with no symbol.  - If the symbol is not sent, tickers for all symbols will be returned in an array.  Weight(IP): - `1` for a single symbol; - `40` when the symbol parameter is omitted;
 *
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * symbols String  (optional)
 * type String Supported values: FULL or MINI. If none provided, the default is FULL (optional)
 * returns inline_response_200_4
 **/
exports.apiV3Ticker24hrGET = function(symbol,symbols,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Symbol Order Book Ticker
 * Best price/qty on the order book for a symbol or symbols.  - If the symbol is not sent, bookTickers for all symbols will be returned in an array.  Weight(IP): - `1` for a single symbol; - `2` when the symbol parameter is omitted;
 *
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * symbols String  (optional)
 * returns inline_response_200_6
 **/
exports.apiV3TickerBookTickerGET = function(symbol,symbols) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rolling window price change statistics
 * The window used to compute statistics is typically slightly wider than requested windowSize.  openTime for /api/v3/ticker always starts on a minute, while the closeTime is the current time of the request. As such, the effective window might be up to 1 minute wider than requested.  E.g. If the closeTime is 1641287867099 (January 04, 2022 09:17:47:099 UTC) , and the windowSize is 1d. the openTime will be: 1641201420000 (January 3, 2022, 09:17:00 UTC)  Weight(IP): 2 for each requested symbol regardless of windowSize.  The weight for this request will cap at 100 once the number of symbols in the request is more than 50.
 *
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * symbols String  (optional)
 * windowSize String Defaults to 1d if no parameter provided. Supported windowSize values: 1m,2m....59m for minutes 1h, 2h....23h - for hours 1d...7d - for days.  Units cannot be combined (e.g. 1d2h is not allowed) (optional)
 * type String Supported values: FULL or MINI. If none provided, the default is FULL (optional)
 * returns inline_response_200_7
 **/
exports.apiV3TickerGET = function(symbol,symbols,windowSize,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "priceChange" : "-8.00000000",
  "symbol" : "BNBBTC",
  "count" : 61,
  "openPrice" : "9.00000000",
  "lastId" : 60,
  "quoteVolume" : "487.00000000",
  "firstId" : 0,
  "volume" : "187.00000000",
  "weightedAvgPrice" : "2.60427807",
  "lowPrice" : "1.00000000",
  "highPrice" : "9.00000000",
  "closeTime" : 1642031999999,
  "openTime" : 1641859200000,
  "priceChangePercent" : "-88.889",
  "lastPrice" : "1.00000000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Symbol Price Ticker
 * Latest price for a symbol or symbols.  - If the symbol is not sent, prices for all symbols will be returned in an array.  Weight(IP): - `1` for a single symbol; - `2` when the symbol parameter is omitted;
 *
 * symbol String Trading symbol, e.g. BNBUSDT (optional)
 * symbols String  (optional)
 * returns inline_response_200_5
 **/
exports.apiV3TickerPriceGET = function(symbol,symbols) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Check Server Time
 * Test connectivity to the Rest API and get the current server time.  Weight(IP): 1
 *
 * returns inline_response_200
 **/
exports.apiV3TimeGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "serverTime" : 1499827319559
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recent Trades List
 * Get recent trades.  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * limit Integer Default 500; max 1000. (optional)
 * returns List
 **/
exports.apiV3TradesGET = function(symbol,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "quoteQty" : "0.02077200",
  "price" : "9638.99000000",
  "qty" : "0.02077200",
  "isBestMatch" : true,
  "id" : 345196462,
  "time" : 1592887772684,
  "isBuyerMaker" : true
}, {
  "quoteQty" : "0.02077200",
  "price" : "9638.99000000",
  "qty" : "0.02077200",
  "isBestMatch" : true,
  "id" : 345196462,
  "time" : 1592887772684,
  "isBuyerMaker" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * UIKlines
 * The request is similar to klines having the same parameters and response.  uiKlines return modified kline data, optimized for presentation of candlestick charts.  Weight(IP): 1
 *
 * symbol String Trading symbol, e.g. BNBUSDT
 * interval String kline intervals
 * startTime Long UTC timestamp in ms (optional)
 * endTime Long UTC timestamp in ms (optional)
 * limit Integer Default 500; max 1000. (optional)
 * returns List
 **/
exports.apiV3UiKlinesGET = function(symbol,interval,startTime,endTime,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ 1499040000000, "0.01634790", "0.80000000", "0.01575800", "0.01577100", "148976.11427815", 1499644799999, "2434.19055334", 308, "1756.87402397", "28.46694368", "0" ], [ 1499040000000, "0.01634790", "0.80000000", "0.01575800", "0.01577100", "148976.11427815", 1499644799999, "2434.19055334", 308, "1756.87402397", "28.46694368", "0" ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

