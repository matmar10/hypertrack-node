'use strict';

var HyperTrackResource = require('../HyperTrackResource');
var hypertrackMethod = HyperTrackResource.method;

module.exports = HyperTrackResource.extend({

  path: 'tasks/',

  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
  ],

  start: hypertrackMethod({
    method: 'POST',
    path: '/{id}/start/',
    urlParams: ['id'],
  }),

  complete: hypertrackMethod({
    method: 'POST',
    path: '/{id}/completed/',
    urlParams: ['id'],
  }),

  cancel: hypertrackMethod({
    method: 'POST',
    path: '/{id}/canceled/',
    urlParams: ['id'],
  }),

  editable_url: hypertrackMethod({
    method: 'POST',
    path: '/{id}/editable_url/',
    urlParams: ['id'],
  }),

});
