'use strict';

var expect = require('expect.js');
var sinon = require('sinon');
var nodeifyLambda = require('../');

var mock = sinon.mock;

describe('nodeify_lambda', function(){
  var context;

  describe('when callback yields success', function(){
    beforeEach(function() {
      context = {
        succeed: mock()
      };
    });

    it('calls context.succeed(data)', function(done) {        
      var func = nodeifyLambda(function(event, callback) {
        callback(null, { success:true });
      });

      func({}, {
        succeed: function(data) {
          expect(data).to.eql({ success:true });
          done();
        }
      });
    });

    it('calls context.fail(err)', function(done) {  
      var err = new Error('Boom!');

      var func = nodeifyLambda(function(event, callback) {
        callback(err);
      });

      func({}, {
        fail: function(err) {
          expect(err).to.eql(err);
          done();
        }
      });
    });

    it('invokes callback with event', function(done) {  
      var event = { name:'test event' };      

      var func = nodeifyLambda(function(ev, callback) {        
        expect(event).to.eql(ev);
        callback();
      });

      func(event, {
        succeed: done
      });
    });
  });
});