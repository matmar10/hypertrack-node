'use strict';

var HyperTrackResource = require('../HyperTrackResource');
var hypertrackMethod = HyperTrackResource.method;

module.exports = HyperTrackResource.extend({

  path: 'trips/',

  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
  ],

  end: hypertrackMethod({
    method: 'POST',
    path: '/{id}/end/',
    urlParams: ['id'],
  }),

  add_task: hypertrackMethod({
    method: 'POST',
    path: '/{id}/add_task/',
    urlParams: ['id'],
  }),

  remove_task: hypertrackMethod({
    method: 'POST',
    path: '/{id}/remove_task/',
    urlParams: ['id'],
  }),

  change_task_order: hypertrackMethod({
    method: 'POST',
    path: '/{id}/change_task_order/',
    urlParams: ['id'],
  }),

});
