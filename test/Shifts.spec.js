'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('Shift Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.shifts.retrieve('shiftID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/shifts/shiftID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      hypertrack.shifts.create({
        action: 'delivery',
        destination_id: 'destinationID123'
      });
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/shifts/',
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
      hypertrack.shifts.list();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/shifts/',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      hypertrack.shifts.update('shiftID123', {action: 'pickup'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/api/v1/shifts/shiftID123/',
        headers: {},
        data: {action: 'pickup'},
      });
    });
  });

  describe('end', function() {
    it('Sends the correct request', function() {
      hypertrack.shifts.end('shiftID123', {end_location: {type: 'Point', coordinates: [72, 19]}});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/shifts/shiftID123/end/',
        headers: {},
        data: {end_location: {type: 'Point', coordinates: [72, 19]}},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      hypertrack.shifts.del('shiftID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/api/v1/shifts/shiftID123/',
        headers: {},
        data: {},
      });
    });
  });

});
