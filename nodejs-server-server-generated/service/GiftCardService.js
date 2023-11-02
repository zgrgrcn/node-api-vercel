'use strict';


/**
 * Buy a Binance Code (TRADE)
 * This API is for buying a fixed-value Binance Code, which means your Binance Code will be redeemable to a token that is different to the token that you are paying in. If the token youâ€™re paying and the redeemable token are the same, please use the Create Binance Code endpoint. You can use supported crypto currency or fiat token as baseToken to buy Binance Code that is redeemable to your chosen faceToken. Once successfully purchased, the amount of baseToken would be deducted from your funding wallet.  To get started with, please make sure: - You have a Binance account - You have passed kyc - You have a sufficient balance in your Binance funding wallet - You need Enable Withdrawals for the API Key which requests this endpoint.  Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H  Weight(IP): 1
 *
 * baseToken String The token you want to pay, example BUSD
 * faceToken String The token you want to buy, example BNB. If faceToken = baseToken, it's the same as createCode endpoint.
 * baseTokenAmount Double The base token asset quantity, example  1.002
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_225
 **/
exports.sapiV1GiftcardBuyCodePOST = function(baseToken,faceToken,baseTokenAmount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "000000",
  "data" : {
    "code" : "AOGANK3NB4GIT3C6",
    "referenceNo" : "0033002327977405"
  },
  "success" : true,
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch Token Limit (USER_DATA)
 * This API is to help you verify which tokens are available for you to purchase fixed-value gift cards as mentioned in section 2 and it's limitation.  Weight(IP): 1
 *
 * baseToken String The token you want to pay, example BUSD
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_229
 **/
exports.sapiV1GiftcardBuyCodeToken_limitGET = function(baseToken,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "000000",
  "data" : {
    "fromMax" : "1",
    "fromMin" : "0.01",
    "coin" : "BNB"
  },
  "success" : true,
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Binance Code (USER_DATA)
 * This API is for creating a Binance Code. To get started with, please make sure:  - You have a Binance account - You have passed kyc - You have a sufficient balance in your Binance funding wallet - You need Enable Withdrawals for the API Key which requests this endpoint.  Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H  Weight(IP): 1
 *
 * token String The coin type contained in the Binance Code
 * amount Double The amount of the coin
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_225
 **/
exports.sapiV1GiftcardCreateCodePOST = function(token,amount,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "000000",
  "data" : {
    "code" : "AOGANK3NB4GIT3C6",
    "referenceNo" : "0033002327977405"
  },
  "success" : true,
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch RSA Public Key (USER_DATA)
 * This API is for fetching the RSA Public Key. This RSA Public key will be used to encrypt the card code. Please note that the RSA Public key fetched is valid only for the current day.  Weight(IP): 1
 *
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_228
 **/
exports.sapiV1GiftcardCryptographyRsa_public_keyGET = function(timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "000000",
  "data" : "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXBBVKLAc1GQ5FsIFFqOHrPTox5noBONIKr+IAedTR9FkVxq6e65updEbfdhRNkMOeYIO2i0UylrjGC0X8YSoIszmrVHeV0l06Zh1oJuZos1+7N+WLuz9JvlPaawof3GUakTxYWWCa9+8KIbLKsoKMdfS96VT+8iOXO3quMGKUmQIDAQAB",
  "success" : true,
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Redeem a Binance Code (USER_DATA)
 * This API is for redeeming the Binance Code. Once redeemed, the coins will be deposited in your funding wallet.  Please note that if you enter the wrong code 5 times within 24 hours, you will no longer be able to redeem any Binance Code that day.  Weight(IP): 1
 *
 * code String Binance Code
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * externalUid String Each external unique ID represents a unique user on the partner platform. The function helps you to identify the redemption behavior of different users, such as redemption frequency and amount. It also helps risk and limit control of a single account, such as daily limit on redemption volume, frequency, and incorrect number of entries. This will also prevent a single user account reach the partner's daily redemption limits. We strongly recommend you to use this feature and transfer us the User ID of your users if you have different users redeeming Binance codes on your platform. To protect user data privacy, you may choose to transfer the user id in any desired format (max. 400 characters). (optional)
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_226
 **/
exports.sapiV1GiftcardRedeemCodePOST = function(code,timestamp,signature,externalUid,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "000000",
  "data" : {
    "identityNo" : "10316281761814589440",
    "amount" : "10",
    "referenceNo" : "0033002327977405",
    "token" : "BNB"
  },
  "success" : true,
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Verify a Binance Code (USER_DATA)
 * This API is for verifying whether the Binance Code is valid or not by entering Binance Code or reference number.  Please note that if you enter the wrong binance code 5 times within an hour, you will no longer be able to verify any binance code for that hour.  Weight(IP): 1
 *
 * referenceNo String reference number
 * timestamp Long UTC timestamp in ms
 * signature String Signature
 * recvWindow Long The value cannot be greater than 60000 (optional)
 * returns inline_response_200_227
 **/
exports.sapiV1GiftcardVerifyGET = function(referenceNo,timestamp,signature,recvWindow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "000000",
  "data" : {
    "valid" : true,
    "amount" : "0.00000001",
    "token" : "BNB"
  },
  "success" : true,
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

