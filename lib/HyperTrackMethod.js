'use strict';

var _ = require('lodash');
var path = require('path');
var utils = require('./utils');
var OPTIONAL_REGEX = /^optional!/;

function hypertrackMethod(spec) {
  var commandPath = typeof spec.path == 'function' ? spec.path
                  : utils.makeURLInterpolator(spec.path || '');
  console.log(commandPath);
  var requestMethod = (spec.method || 'GET').toUpperCase();
  var urlParams = spec.urlParams || [];

  return function() {
    var self = this;
    var args = [].slice.call(arguments);

    var callback = typeof args[args.length - 1] == 'function' && args.pop();
    var deferred = this.createDeferred(callback);
    var urlData = this.createUrlData();

    for (var i = 0, l = urlParams.length; i < l; ++i) {
      // Note that we shift the args array after every iteration so this just
      // grabs the "next" argument for use as a URL parameter.
      var arg = args[0];

      var param = urlParams[i];

      var isOptional = OPTIONAL_REGEX.test(param);
      param = param.replace(OPTIONAL_REGEX, '');

      if (!arg) {
        if (isOptional) {
          urlData[param] = '';
          continue;
        }

        var err = new Error(
          'HyperTrack: Argument "' + urlParams[i] + '" required, but got: ' + arg +
          ' (on API request to ' + requestMethod + ' ' + commandPath + ')'
        );
        deferred.reject(err);
        return deferred.promise;
      }

      urlData[param] = args.shift();
    }

    var data = utils.getDataFromArgs(args);
    var opts = utils.getOptionsFromArgs(args);

    if (args.length) {
      var err = new Error(
        'HyperTrack: Unknown arguments (' + args + '). Did you mean to pass an options ' +
        'object?' + ' (on API request to ' + requestMethod + ' ' + commandPath + ')'
      );
      deferred.reject(err);
      return deferred.promise;
    }

    var requestPath = this.createFullPath(commandPath, urlData);
    function requestCallback(err, response) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve(
          spec.transformResponseData ?
            spec.transformResponseData(response) :
            response
        );
      }
    };

    var options = {headers: _.extend(opts.headers, spec.headers)};
    self._request(requestMethod, requestPath, data, opts.auth, options, requestCallback);

    return deferred.promise;
  };
};

module.exports = hypertrackMethod;
