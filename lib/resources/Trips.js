'use strict';

var HyperTrackResource = require('../HyperTrackResource');
var hypertrackMethod = HyperTrackResource.method;

module.exports = HyperTrackResource.extend({

  path: 'trips/',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
  ],

  end: hypertrackMethod({
    method: 'POST',
    path: '/{id}/end/',
    urlParams: ['id'],
  }),

});
