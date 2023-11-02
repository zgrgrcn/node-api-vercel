'use strict';

var utils = require('../utils/writer.js');
var AutoInvest = require('../service/AutoInvestService');

module.exports.sapiV1LendingAuto_investAllAssetGET = function sapiV1LendingAuto_investAllAssetGET (req, res, next, timestamp, signature, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investAllAssetGET(timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investHistoryListGET = function sapiV1LendingAuto_investHistoryListGET (req, res, next, planType, timestamp, signature, planId, startTime, endTime, targetAsset, size, current, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investHistoryListGET(planType, timestamp, signature, planId, startTime, endTime, targetAsset, size, current, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investIndexInfoGET = function sapiV1LendingAuto_investIndexInfoGET (req, res, next, indexId, timestamp, signature, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investIndexInfoGET(indexId, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investIndexUser_summaryGET = function sapiV1LendingAuto_investIndexUser_summaryGET (req, res, next, indexId, timestamp, signature, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investIndexUser_summaryGET(indexId, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investOne_offPOST = function sapiV1LendingAuto_investOne_offPOST (req, res, next, sourceType, subscriptionAmount, sourceAsset, timestamp, signature, requestId, flexibleAllowedToUse, planId, indexId, details, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investOne_offPOST(sourceType, subscriptionAmount, sourceAsset, timestamp, signature, requestId, flexibleAllowedToUse, planId, indexId, details, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investOne_offStatusGET = function sapiV1LendingAuto_investOne_offStatusGET (req, res, next, transactionId, timestamp, signature, requestId, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investOne_offStatusGET(transactionId, timestamp, signature, requestId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investPlanAddPOST = function sapiV1LendingAuto_investPlanAddPOST (req, res, next, sourceType, planType, subscriptionAmount, subscriptionCycle, subscriptionStartTime, sourceAsset, timestamp, signature, requestId, indexId, subscriptionStartDay, subscriptionStartWeekday, flexibleAllowedToUse, details, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investPlanAddPOST(sourceType, planType, subscriptionAmount, subscriptionCycle, subscriptionStartTime, sourceAsset, timestamp, signature, requestId, indexId, subscriptionStartDay, subscriptionStartWeekday, flexibleAllowedToUse, details, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investPlanEditPOST = function sapiV1LendingAuto_investPlanEditPOST (req, res, next, planId, subscriptionAmount, subscriptionCycle, subscriptionStartTime, sourceAsset, timestamp, signature, subscriptionStartDay, subscriptionStartWeekday, flexibleAllowedToUse, details, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investPlanEditPOST(planId, subscriptionAmount, subscriptionCycle, subscriptionStartTime, sourceAsset, timestamp, signature, subscriptionStartDay, subscriptionStartWeekday, flexibleAllowedToUse, details, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investPlanEdit_statusPOST = function sapiV1LendingAuto_investPlanEdit_statusPOST (req, res, next, planId, status, timestamp, signature, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investPlanEdit_statusPOST(planId, status, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investPlanIdPOST = function sapiV1LendingAuto_investPlanIdPOST (req, res, next, timestamp, signature, planId, requestId, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investPlanIdPOST(timestamp, signature, planId, requestId, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investPlanListGET = function sapiV1LendingAuto_investPlanListGET (req, res, next, planType, timestamp, signature, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investPlanListGET(planType, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investRebalanceHistoryGET = function sapiV1LendingAuto_investRebalanceHistoryGET (req, res, next, timestamp, signature, startTime, endTime, current, size, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investRebalanceHistoryGET(timestamp, signature, startTime, endTime, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investRedeemHistoryGET = function sapiV1LendingAuto_investRedeemHistoryGET (req, res, next, requestId, asset, timestamp, signature, startTime, endTime, current, size, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investRedeemHistoryGET(requestId, asset, timestamp, signature, startTime, endTime, current, size, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investRedeemPOST = function sapiV1LendingAuto_investRedeemPOST (req, res, next, indexId, timestamp, signature, requestId, redemptionPercentage, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investRedeemPOST(indexId, timestamp, signature, requestId, redemptionPercentage, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investSource_assetListGET = function sapiV1LendingAuto_investSource_assetListGET (req, res, next, usageType, timestamp, signature, targetAsset, indexId, flexibleAllowedToUse, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investSource_assetListGET(usageType, timestamp, signature, targetAsset, indexId, flexibleAllowedToUse, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investTarget_assetListGET = function sapiV1LendingAuto_investTarget_assetListGET (req, res, next, targetAsset, timestamp, signature, size, current, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investTarget_assetListGET(targetAsset, timestamp, signature, size, current, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sapiV1LendingAuto_investTarget_assetRoiListGET = function sapiV1LendingAuto_investTarget_assetRoiListGET (req, res, next, targetAsset, hisRoiType, timestamp, signature, recvWindow) {
  AutoInvest.sapiV1LendingAuto_investTarget_assetRoiListGET(targetAsset, hisRoiType, timestamp, signature, recvWindow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
