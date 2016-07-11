'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('neighborhood Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.neighborhoods.retrieve('neighborhoodID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/neighborhoods/neighborhoodID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      hypertrack.neighborhoods.list();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/neighborhoods/',
        data: {},
        headers: {},
      });
    });
  });

});
