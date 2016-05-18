'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('Trip Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.trips.retrieve('tripID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/trips/tripID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      hypertrack.trips.create({
        action: 'delivery',
        destination_id: 'destinationID123'
      });
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/trips/',
        data: {
          action: 'delivery',
          destination_id: 'destinationID123'
        },
        headers: {},
      });
    });

  });

  describe('list', function() {
    it('Sends the correct request', function() {
      hypertrack.trips.list();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/trips/',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      hypertrack.trips.update('tripID123', {action: 'pickup'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/api/v1/trips/tripID123/',
        headers: {},
        data: {action: 'pickup'},
      });
    });
  });

  describe('end', function() {
    it('Sends the correct request', function() {
      hypertrack.trips.end('tripID123', {end_location: {type: 'Point', coordinates: [72, 19]}});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/trips/tripID123/end/',
        headers: {},
        data: {end_location: {type: 'Point', coordinates: [72, 19]}},
      });
    });
  });

});
