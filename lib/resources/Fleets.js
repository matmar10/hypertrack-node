'use strict';

var HyperTrackResource = require('../HyperTrackResource');
var hypertrackMethod = HyperTrackResource.method;

module.exports = HyperTrackResource.extend({

  path: 'fleets/',

  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
  ],

});
