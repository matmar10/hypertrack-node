'use strict';

var testUtils = require('./testUtils');
var Promise = require('bluebird');
var hypertrack = require('../lib/hypertrack')(testUtils.getUserSecretKey());

var expect = require('chai').expect;

var CUSTOMER_DETAILS = {
  name: 'John Doe',
  phone: '+15555555555'
};

describe('HyperTrack Module', function() {
  this.timeout(20000);

  describe('ClientUserAgent', function() {
    it('Should return a user-agent serialized JSON object', function() {
      var d = Promise.defer();
      hypertrack.getClientUserAgent(function(c) {
        d.resolve(JSON.parse(c));
      });
      return expect(d.promise).to.eventually.have.property('lang', 'node');
    });
  });

  describe('setTimeout', function() {
    it('Should define a default equal to the node default', function() {
      expect(hypertrack.getApiField('timeout')).to.equal(require('http').createServer().timeout);
    });
    it('Should allow me to set a custom timeout', function() {
      hypertrack.setTimeout(900);
      expect(hypertrack.getApiField('timeout')).to.equal(900);
    });
    it('Should allow me to set null, to reset to the default', function() {
      hypertrack.setTimeout(null);
      expect(hypertrack.getApiField('timeout')).to.equal(require('http').createServer().timeout);
    });

    describe('getConstant', function() {
      it('Should allow me to get package version', function() {
        expect(hypertrack.getConstant('PACKAGE_VERSION')).to.equal(require('../package.json').version);
      });
    });

    describe('setHost', function() {
      it('Should allow me to set host, port and protocol', function() {
        hypertrack.setHost('localhost', 8000, 'http');
        expect(hypertrack._api.host).to.equal('localhost');
        expect(hypertrack._api.port).to.equal(8000);
        expect(hypertrack._api.protocol).to.equal('http');
      });
    });

    describe('setApiVersion', function() {
      it('Should allow me to get package version', function() {
        expect(hypertrack.getConstant('PACKAGE_VERSION')).to.equal(require('../package.json').version);
      });
    });
  });
});
