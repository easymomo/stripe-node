'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Radar', function () {
  describe('Lists Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.radar.listItems.retrieve('rsli_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/list_items/rsli_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
        stripe.radar.listItems.create({
          list: 'rsl_123',
          value: 'value',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/radar/list_items',
          headers: {},
          data: {
            list: 'rsl_123',
            value: 'value',
          },
        });
      });
    });

    describe('list', function () {
      it('Sends the correct request', function () {
        stripe.radar.listItems.list({
          list: 'rsl_123',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/list_items',
          headers: {},
          data: {
            list: 'rsl_123',
          },
        });
      });
    });

    describe('del', function() {
      it('Sends the correct request', function() {
        stripe.radar.listItems.del('rsli_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/radar/list_items/rsli_123',
          headers: {},
          data: {},
        });
      });
    });
  });
});
