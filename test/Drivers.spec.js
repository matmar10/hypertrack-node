'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('driver Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.drivers.retrieve('driverID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/drivers/driverID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      hypertrack.drivers.create({
        action: 'delivery',
        driver_id: 'driverID123'
      });
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/drivers/',
        data: {
          action: 'delivery',
          driver_id: 'driverID123'
        },
        headers: {},
      });
    });

  });

  describe('list', function() {
    it('Sends the correct request', function() {
      hypertrack.drivers.list({page_size: 1});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/drivers/',
        data: {page_size: 1},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      hypertrack.drivers.update('driverID123', {action: 'pickup'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/api/v1/drivers/driverID123/',
        headers: {},
        data: {action: 'pickup'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      hypertrack.drivers.del('driverID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/api/v1/drivers/driverID123/',
        headers: {},
        data: {},
      });
    });
  });

  describe('assign_tasks', function() {
    it('Sends the correct request', function() {
      hypertrack.drivers.assign_tasks('driverID123', {'task_ids': ['taskID123']});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/drivers/driverID123/assign_tasks/',
        headers: {},
        data: {'task_ids': ['taskID123']},
      });
    });
  });

  describe('end_trip', function() {
    it('Sends the correct request', function() {
      hypertrack.drivers.end_trip('driverID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/drivers/driverID123/end_trip/',
        headers: {},
        data: {},
      });
    });
  });

});
