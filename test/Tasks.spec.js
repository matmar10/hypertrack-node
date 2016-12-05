'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('Task Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.tasks.retrieve('taskID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/tasks/taskID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      hypertrack.tasks.create({
        action: 'delivery',
        destination_id: 'destinationID123'
      });
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/tasks/',
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
      hypertrack.tasks.list();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/tasks/',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      hypertrack.tasks.update('taskID123', {action: 'pickup'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/api/v1/tasks/taskID123/',
        headers: {},
        data: {action: 'pickup'},
      });
    });
  });

  describe('complete', function() {
    it('Sends the correct request', function() {
      hypertrack.tasks.complete('taskID123', {completion_location: {type: 'Point', coordinates: [72, 19]}});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/tasks/taskID123/completed/',
        headers: {},
        data: {completion_location: {type: 'Point', coordinates: [72, 19]}},
      });
    });
  });

  describe('start', function() {
    it('Sends the correct request', function() {
      hypertrack.tasks.start('taskID123', {start_location: {type: 'Point', coordinates: [72, 19]}});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/tasks/taskID123/start/',
        headers: {},
        data: {start_location: {type: 'Point', coordinates: [72, 19]}},
      });
    });
  });

  describe('cancel', function() {
    it('Sends the correct request', function() {
      hypertrack.tasks.cancel('taskID123', {cancelation_time: '2016-03-09T06:00:20.648785Z'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/tasks/taskID123/canceled/',
        headers: {},
        data: {cancelation_time: '2016-03-09T06:00:20.648785Z'},
      });
    });
  });

  describe('editable_url', function() {
    it('Sends the correct request', function() {
      hypertrack.tasks.editable_url('taskID123', {'editable': 'once'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/tasks/taskID123/editable_url/',
        headers: {},
        data: {'editable': 'once'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      hypertrack.tasks.del('taskID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/api/v1/tasks/taskID123/',
        headers: {},
        data: {},
      });
    });
  });

});
