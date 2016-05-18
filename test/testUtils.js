'use strict';

// NOTE: testUtils should be require'd before anything else in each spec file!

require('mocha');
// Ensure we are using the 'as promised' libs before any tests are run:
require('chai').use(require('chai-as-promised'));

var utils = module.exports = {

  getUserSecretKey: function() {
    var key = process.env.HYPERTRACK_TEST_SECRET_KEY || '3fh2g4o9e8oijnf32wveiu9809pokdjd';
    return key;
  },

  getSpyableHyperTrack: function() {
    var HyperTrack = require('../lib/hypertrack');
    var hypertrackInstance = HyperTrack('secretKey');

    hypertrackInstance.REQUESTS = [];

    for (var i in hypertrackInstance) {
      if (hypertrackInstance[i] instanceof HyperTrack.HyperTrackResource) {
        hypertrackInstance[i]._request = function(method, url, data, auth, options, cb) {
          var req = hypertrackInstance.LAST_REQUEST = {
            method: method,
            url: url,
            data: data,
            headers: options.headers || {},
          };
          if (auth) {
            req.auth = auth;
          }
          hypertrackInstance.REQUESTS.push(req);
          cb.call(this, null, {});
        };
      }
    }

    return hypertrackInstance;
  },

};
