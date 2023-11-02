'use strict';


/**
 * Close a ListenKey (USER_STREAM)
 * Close out a user data stream.  Weight: 1
 *
 * listenKey String User websocket listen key (optional)
 * returns Object
 **/
exports.sapiV1UserDataStreamIsolatedDELETE = function(listenKey) {
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
 * Generate a Listen Key (USER_STREAM)
 * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.  Weight: 1
 *
 * returns inline_response_200_118
 **/
exports.sapiV1UserDataStreamIsolatedPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "listenKey" : "T3ee22BIYuWqmvne0HNq2A2WsFlEtLhvWCtItw6ffhhdmjifQ2tRbuKkTHhr"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ping/Keep-alive a Listen Key (USER_STREAM)
 * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.  Weight: 1
 *
 * listenKey String User websocket listen key (optional)
 * returns Object
 **/
exports.sapiV1UserDataStreamIsolatedPUT = function(listenKey) {
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

