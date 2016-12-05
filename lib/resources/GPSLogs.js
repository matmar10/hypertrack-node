'use strict';

var HyperTrackResource = require('../HyperTrackResource');
var hypertrackMethod = HyperTrackResource.method;

module.exports = HyperTrackResource.extend({

  path: 'gps/',

  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
  ],

  filtered: hypertrackMethod({
    method: 'GET',
    path: '/filtered/',
    urlParams: [],
  }),

});
