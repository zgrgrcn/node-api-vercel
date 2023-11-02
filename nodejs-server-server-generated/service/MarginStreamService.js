'use strict';


/**
 * Close a ListenKey (USER_STREAM)
 * Close out a user data stream.  Weight: 1
 *
 * listenKey String User websocket listen key (optional)
 * returns Object
 **/
exports.sapiV1UserDataStreamDELETE = function(listenKey) {
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
 * Create a ListenKey (USER_STREAM)
 * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.  Weight: 1
 *
 * returns inline_response_200_117
 **/
exports.sapiV1UserDataStreamPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "listenKey" : "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ping/Keep-alive a ListenKey (USER_STREAM)
 * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.  Weight: 1
 *
 * listenKey String User websocket listen key (optional)
 * returns Object
 **/
exports.sapiV1UserDataStreamPUT = function(listenKey) {
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

