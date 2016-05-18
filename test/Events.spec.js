'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('event Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.events.retrieve('eventID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/events/eventID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      hypertrack.events.list();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/events/',
        data: {},
        headers: {},
      });
    });
  });

});
