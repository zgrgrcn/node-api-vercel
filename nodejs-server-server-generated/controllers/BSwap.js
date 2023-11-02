'use strict';

var utils = require('../utils/writer.js');
var BSwap = require('../service/BSwapService');

module.exports.sapiV1BswapAddLiquidityPreviewGET = function sapiV1BswapAddLiquidityPreviewGET (req, res, next, poolId, type, quoteAsset, quoteQty, timestamp, signature, recvWindow) {
  BSwap.sapiV1BswapAddLiquidityPreviewGET(poolId, type, quoteAsset, quoteQty, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapClaimRewardsPOST = function sapiV1BswapClaimRewardsPOST (req, res, next, timestamp, signature, type, recvWindow) {
  BSwap.sapiV1BswapClaimRewardsPOST(timestamp, signature, type, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapClaimedHistoryGET = function sapiV1BswapClaimedHistoryGET (req, res, next, timestamp, signature, poolId, assetRewards, type, startTime, endTime, limit, recvWindow) {
  BSwap.sapiV1BswapClaimedHistoryGET(timestamp, signature, poolId, assetRewards, type, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapLiquidityAddPOST = function sapiV1BswapLiquidityAddPOST (req, res, next, poolId, asset, quantity, timestamp, signature, type, recvWindow) {
  BSwap.sapiV1BswapLiquidityAddPOST(poolId, asset, quantity, timestamp, signature, type, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapLiquidityGET = function sapiV1BswapLiquidityGET (req, res, next, timestamp, signature, poolId, recvWindow) {
  BSwap.sapiV1BswapLiquidityGET(timestamp, signature, poolId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapLiquidityOpsGET = function sapiV1BswapLiquidityOpsGET (req, res, next, timestamp, signature, operationId, poolId, operation, startTime, endTime, limit, recvWindow) {
  BSwap.sapiV1BswapLiquidityOpsGET(timestamp, signature, operationId, poolId, operation, startTime, endTime, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapLiquidityRemovePOST = function sapiV1BswapLiquidityRemovePOST (req, res, next, poolId, type, shareAmount, timestamp, signature, asset, recvWindow) {
  BSwap.sapiV1BswapLiquidityRemovePOST(poolId, type, shareAmount, timestamp, signature, asset, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapPoolConfigureGET = function sapiV1BswapPoolConfigureGET (req, res, next, timestamp, signature, poolId, recvWindow) {
  BSwap.sapiV1BswapPoolConfigureGET(timestamp, signature, poolId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapPoolsGET = function sapiV1BswapPoolsGET (req, res, next) {
  BSwap.sapiV1BswapPoolsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapQuoteGET = function sapiV1BswapQuoteGET (req, res, next, quoteAsset, baseAsset, quoteQty, timestamp, signature, recvWindow) {
  BSwap.sapiV1BswapQuoteGET(quoteAsset, baseAsset, quoteQty, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapRemoveLiquidityPreviewGET = function sapiV1BswapRemoveLiquidityPreviewGET (req, res, next, poolId, type, quoteAsset, shareAmount, timestamp, signature, recvWindow) {
  BSwap.sapiV1BswapRemoveLiquidityPreviewGET(poolId, type, quoteAsset, shareAmount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapSwapGET = function sapiV1BswapSwapGET (req, res, next, timestamp, signature, swapId, startTime, endTime, status, quoteAsset, baseAsset, limit, recvWindow) {
  BSwap.sapiV1BswapSwapGET(timestamp, signature, swapId, startTime, endTime, status, quoteAsset, baseAsset, limit, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapSwapPOST = function sapiV1BswapSwapPOST (req, res, next, quoteAsset, baseAsset, quoteQty, timestamp, signature, recvWindow) {
  BSwap.sapiV1BswapSwapPOST(quoteAsset, baseAsset, quoteQty, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1BswapUnclaimedRewardsGET = function sapiV1BswapUnclaimedRewardsGET (req, res, next, timestamp, signature, type, recvWindow) {
  BSwap.sapiV1BswapUnclaimedRewardsGET(timestamp, signature, type, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
