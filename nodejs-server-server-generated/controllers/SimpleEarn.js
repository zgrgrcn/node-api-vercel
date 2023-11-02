'use strict';

var utils = require('../utils/writer.js');
var SimpleEarn = require('../service/SimpleEarnService');

module.exports.sapiV1Simple_earnAccountGET = function sapiV1Simple_earnAccountGET (req, res, next, timestamp, signature, recvWindow) {
  SimpleEarn.sapiV1Simple_earnAccountGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexibleHistoryCollateralRecordGET = function sapiV1Simple_earnFlexibleHistoryCollateralRecordGET (req, res, next, timestamp, signature, productId, startTime, endTime, current, size, recvWindow) {
  SimpleEarn.sapiV1Simple_earnFlexibleHistoryCollateralRecordGET(timestamp, signature, productId, startTime, endTime, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexibleHistoryRateHistoryGET = function sapiV1Simple_earnFlexibleHistoryRateHistoryGET (req, res, next, productId, timestamp, signature, startTime, endTime, current, size, recvWindow) {
  SimpleEarn.sapiV1Simple_earnFlexibleHistoryRateHistoryGET(productId, timestamp, signature, startTime, endTime, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexibleHistoryRedemptionRecordGET = function sapiV1Simple_earnFlexibleHistoryRedemptionRecordGET (req, res, next, productId, redeemId, asset, startTime, endTime, current, size) {
  SimpleEarn.sapiV1Simple_earnFlexibleHistoryRedemptionRecordGET(productId, redeemId, asset, startTime, endTime, current, size)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexibleHistoryRewardsRecordGET = function sapiV1Simple_earnFlexibleHistoryRewardsRecordGET (req, res, next, type, productId, asset, startTime, endTime) {
  SimpleEarn.sapiV1Simple_earnFlexibleHistoryRewardsRecordGET(type, productId, asset, startTime, endTime)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexibleHistorySubscriptionRecordGET = function sapiV1Simple_earnFlexibleHistorySubscriptionRecordGET (req, res, next, timestamp, signature, productId, purchaseId, asset, startTime, endTime, current, size, recvWindow) {
  SimpleEarn.sapiV1Simple_earnFlexibleHistorySubscriptionRecordGET(timestamp, signature, productId, purchaseId, asset, startTime, endTime, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexibleListGET = function sapiV1Simple_earnFlexibleListGET (req, res, next, timestamp, signature, asset, current, size, recvWindow) {
  SimpleEarn.sapiV1Simple_earnFlexibleListGET(timestamp, signature, asset, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexiblePersonalLeftQuotaGET = function sapiV1Simple_earnFlexiblePersonalLeftQuotaGET (req, res, next, productId, timestamp, signature, recvWindow) {
  SimpleEarn.sapiV1Simple_earnFlexiblePersonalLeftQuotaGET(productId, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexiblePositionGET = function sapiV1Simple_earnFlexiblePositionGET (req, res, next, timestamp, signature, asset, productId, current, size, recvWindow) {
  SimpleEarn.sapiV1Simple_earnFlexiblePositionGET(timestamp, signature, asset, productId, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexibleRedeemPOST = function sapiV1Simple_earnFlexibleRedeemPOST (req, res, next, productId, timestamp, signature, redeemAll, amount, destAccount, recvWindow) {
  SimpleEarn.sapiV1Simple_earnFlexibleRedeemPOST(productId, timestamp, signature, redeemAll, amount, destAccount, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexibleSetAutoSubscribePOST = function sapiV1Simple_earnFlexibleSetAutoSubscribePOST (req, res, next, productId, autoSubscribe, timestamp, signature, recvWindow) {
  SimpleEarn.sapiV1Simple_earnFlexibleSetAutoSubscribePOST(productId, autoSubscribe, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexibleSubscribePOST = function sapiV1Simple_earnFlexibleSubscribePOST (req, res, next, productId, amount, timestamp, signature, autoSubscribe, sourceAccount, recvWindow) {
  SimpleEarn.sapiV1Simple_earnFlexibleSubscribePOST(productId, amount, timestamp, signature, autoSubscribe, sourceAccount, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnFlexibleSubscriptionPreviewGET = function sapiV1Simple_earnFlexibleSubscriptionPreviewGET (req, res, next, productId, amount, timestamp, signature, recvWindow) {
  SimpleEarn.sapiV1Simple_earnFlexibleSubscriptionPreviewGET(productId, amount, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnLockedHistoryRedemptionRecordGET = function sapiV1Simple_earnLockedHistoryRedemptionRecordGET (req, res, next, timestamp, signature, positionId, redeemId, asset, startTime, endTime, current, size, recvWindow) {
  SimpleEarn.sapiV1Simple_earnLockedHistoryRedemptionRecordGET(timestamp, signature, positionId, redeemId, asset, startTime, endTime, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnLockedHistoryRewardsRecordGET = function sapiV1Simple_earnLockedHistoryRewardsRecordGET (req, res, next, timestamp, signature, positionId, asset, startTime, endTime, size, recvWindow) {
  SimpleEarn.sapiV1Simple_earnLockedHistoryRewardsRecordGET(timestamp, signature, positionId, asset, startTime, endTime, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnLockedHistorySubscriptionRecordGET = function sapiV1Simple_earnLockedHistorySubscriptionRecordGET (req, res, next, timestamp, signature, purchaseId, asset, startTime, endTime, current, size, recvWindow) {
  SimpleEarn.sapiV1Simple_earnLockedHistorySubscriptionRecordGET(timestamp, signature, purchaseId, asset, startTime, endTime, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnLockedListGET = function sapiV1Simple_earnLockedListGET (req, res, next, timestamp, signature, asset, current, size, recvWindow) {
  SimpleEarn.sapiV1Simple_earnLockedListGET(timestamp, signature, asset, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnLockedPersonalLeftQuotaGET = function sapiV1Simple_earnLockedPersonalLeftQuotaGET (req, res, next, projectId, timestamp, signature, recvWindow) {
  SimpleEarn.sapiV1Simple_earnLockedPersonalLeftQuotaGET(projectId, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnLockedPositionGET = function sapiV1Simple_earnLockedPositionGET (req, res, next, timestamp, signature, asset, positionId, projectId, current, size, recvWindow) {
  SimpleEarn.sapiV1Simple_earnLockedPositionGET(timestamp, signature, asset, positionId, projectId, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnLockedRedeemPOST = function sapiV1Simple_earnLockedRedeemPOST (req, res, next, positionId, timestamp, signature, recvWindow) {
  SimpleEarn.sapiV1Simple_earnLockedRedeemPOST(positionId, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnLockedSetAutoSubscribePOST = function sapiV1Simple_earnLockedSetAutoSubscribePOST (req, res, next, positionId, autoSubscribe, timestamp, signature, recvWindow) {
  SimpleEarn.sapiV1Simple_earnLockedSetAutoSubscribePOST(positionId, autoSubscribe, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnLockedSubscribePOST = function sapiV1Simple_earnLockedSubscribePOST (req, res, next, projectId, amount, timestamp, signature, autoSubscribe, sourceAccount, recvWindow) {
  SimpleEarn.sapiV1Simple_earnLockedSubscribePOST(projectId, amount, timestamp, signature, autoSubscribe, sourceAccount, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1Simple_earnLockedSubscriptionPreviewGET = function sapiV1Simple_earnLockedSubscriptionPreviewGET (req, res, next, projectId, amount, timestamp, signature, autoSubscribe, recvWindow) {
  SimpleEarn.sapiV1Simple_earnLockedSubscriptionPreviewGET(projectId, amount, timestamp, signature, autoSubscribe, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
