'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Radar', function () {
  describe('Lists Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.radar.lists.retrieve('rsl_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/lists/rsl_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
        stripe.radar.lists.create({
          alias: 'alias',
          name: 'name',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/radar/lists',
          headers: {},
          data: {
            alias: 'alias',
            name: 'name',
          },
        });
      });
    });

    describe('list', function () {
      it('Sends the correct request', function () {
        stripe.radar.lists.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/lists',
          headers: {},
          data: {},
        });
      });
    });

    describe('del', function() {
      it('Sends the correct request', function() {
        stripe.radar.lists.del('rsl_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/radar/lists/rsl_123',
          headers: {},
          data: {},
        });
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        stripe.radar.lists.update('rsl_123', {
          metadata: {a: '1234'},
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/radar/lists/rsl_123',
          headers: {},
          data: {
            metadata: {a: '1234'},
          },
        });
      });
    });
  });
});
