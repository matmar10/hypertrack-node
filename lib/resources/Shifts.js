'use strict';

var HyperTrackResource = require('../HyperTrackResource');
var hypertrackMethod = HyperTrackResource.method;

module.exports = HyperTrackResource.extend({

  path: 'shifts/',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
  ],

  end: hypertrackMethod({
    method: 'POST',
    path: '/{id}/end/',
    urlParams: ['id'],
  }),

});
