'use strict';

var HyperTrackResource = require('../HyperTrackResource');
var hypertrackMethod = HyperTrackResource.method;

module.exports = HyperTrackResource.extend({

  path: 'drivers/',

  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
  ],

  assign_tasks: hypertrackMethod({
    method: 'POST',
    path: '/{id}/assign_tasks/',
    urlParams: ['id'],
  }),

  end_trip: hypertrackMethod({
    method: 'POST',
    path: '/{id}/end_trip/',
    urlParams: ['id'],
  }),

});
