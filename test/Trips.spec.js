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

  describe('add_task', function() {
    it('Sends the correct request', function() {
      hypertrack.trips.add_task('tripID123', {task_id: 'taskID123'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/trips/tripID123/add_task/',
        headers: {},
        data: {task_id: 'taskID123'},
      });
    });
  });

  describe('remove_task', function() {
    it('Sends the correct request', function() {
      hypertrack.trips.remove_task('tripID123', {task_id: 'taskID123'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/trips/tripID123/remove_task/',
        headers: {},
        data: {task_id: 'taskID123'},
      });
    });
  });

  describe('change_task_order', function() {
    it('Sends the correct request', function() {
      hypertrack.trips.change_task_order('tripID123', {task_order: ['taskID123', 'taskID321']});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/trips/tripID123/change_task_order/',
        headers: {},
        data: {task_order: ['taskID123', 'taskID321']},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      hypertrack.trips.del('tripID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/api/v1/trips/tripID123/',
        headers: {},
        data: {},
      });
    });
  });

});
