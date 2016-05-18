'use strict';

var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error class to wrap any errors returned by hypertrack-node
 */
function _Error(raw) {
  this.populate.apply(this, arguments);
  this.stack = (new Error(this.message)).stack;
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function(type, message) {
  this.type = type;
  this.message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error class
 * (Specifically for errors returned from HyperTrack's REST API)
 */
var HyperTrackError = _Error.HyperTrackError = _Error.extend({
  type: 'HyperTrackError',
  populate: function(raw) {
    // Move from prototype def (so it appears in stringified obj)
    this.type = this.type;

    this.stack = (new Error(raw.message)).stack;
    this.rawType = raw.type;
    this.code = raw.code;
    this.param = raw.param;
    this.message = raw.message;
    this.detail = raw.detail;
    this.raw = raw;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
  },
});

/**
 * Helper factory which takes raw hypertrack errors and outputs wrapping instances
 */
HyperTrackError.generate = function(rawHyperTrackError) {
  return new _Error.HyperTrackAPIError('Generic', 'Unknown Error');
};

// Specific HyperTrack Error types:
_Error.HyperTrackInvalidRequestError = HyperTrackError.extend({type: 'HyperTrackInvalidRequestError'});
_Error.HyperTrackAPIError = HyperTrackError.extend({type: 'HyperTrackAPIError'});
_Error.HyperTrackAuthenticationError = HyperTrackError.extend({type: 'HyperTrackAuthenticationError'});
_Error.HyperTrackRateLimitError = HyperTrackError.extend({type: 'HyperTrackRateLimitError'});
_Error.HyperTrackConnectionError = HyperTrackError.extend({type: 'HyperTrackConnectionError'});
