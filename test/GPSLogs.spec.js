'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('GPSLog Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.gpslogs.retrieve('gpslogID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/gps/gpslogID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      hypertrack.gpslogs.create({
        action: 'delivery',
        gpslog_id: 'gpslogID123'
      });
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/gps/',
        data: {
          action: 'delivery',
          gpslog_id: 'gpslogID123'
        },
        headers: {},
      });
    });

  });

  describe('list', function() {
    it('Sends the correct request', function() {
      hypertrack.gpslogs.list();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/gps/',
        data: {},
        headers: {},
      });
    });
  });

  describe('filtered', function() {
    it('Sends the correct request', function() {
      hypertrack.gpslogs.filtered();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/gps/filtered/',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      hypertrack.gpslogs.update('gpslogID123', {action: 'pickup'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/api/v1/gps/gpslogID123/',
        headers: {},
        data: {action: 'pickup'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      hypertrack.gpslogs.del('gpslogID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/api/v1/gps/gpslogID123/',
        headers: {},
        data: {},
      });
    });
  });

});
