'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('Destination Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.destinations.retrieve('destinationID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/destinations/destinationID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      hypertrack.destinations.create({
        action: 'delivery',
        destination_id: 'destinationID123'
      });
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/destinations/',
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
      hypertrack.destinations.list();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/destinations/',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      hypertrack.destinations.update('destinationID123', {action: 'pickup'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/api/v1/destinations/destinationID123/',
        headers: {},
        data: {action: 'pickup'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      hypertrack.destinations.del('destinationID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/api/v1/destinations/destinationID123/',
        headers: {},
        data: {},
      });
    });
  });

});
