'use strict';

var hypertrackMethod = require('./HyperTrackMethod');
var utils = require('./utils');

module.exports = {

  create: hypertrackMethod({
    method: 'POST',
  }),

  list: hypertrackMethod({
    method: 'GET',
  }),

  retrieve: hypertrackMethod({
    method: 'GET',
    path: '/{id}/',
    urlParams: ['id'],
  }),

  update: hypertrackMethod({
    method: 'PATCH',
    path: '{id}/',
    urlParams: ['id'],
  }),

  // Avoid 'delete' keyword in JS
  del: hypertrackMethod({
    method: 'DELETE',
    path: '{id}/',
    urlParams: ['id'],
  }),

};
