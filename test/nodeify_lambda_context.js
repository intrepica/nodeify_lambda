'use strict';

var sinon = require('sinon');
var nodeifyLambda = require('../nodeify_lambda_context');

var mock = sinon.mock;

describe('nodeify_lambda_context', function(){
  var context;

  describe('when callback yields success', function(){
    beforeEach(function() {
      context = {
        succeed: mock()
      };
    });

    it('calls context.succeed() with data', function(done) {
      context.succeed.withArgs('success');
      var callback = nodeifyLambda(context);
      callback(null, 'success');
      context.succeed.verify();      
      done();
    });
  });

  describe('when callback yields an error', function(){
    var err;

    beforeEach(function() {
      err = new Error('Boom!');
      context = {
        fail: mock()
      };      
    });      

    it('calls context.fail(err) with the err', function(done) {            
      context.fail.withArgs(err);
      var callback = nodeifyLambda(context);
      callback(err);
      context.fail.verify();      
      done();      
    });       
  });  

});