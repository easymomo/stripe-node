'use strict';

var StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'radar/lists',
  includeBasic: ['create', 'list', 'update', 'retrieve', 'del'],
});
