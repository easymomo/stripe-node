'use strict';

var StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'radar/list_items',
  includeBasic: ['create', 'list', 'retrieve', 'del'],
});
