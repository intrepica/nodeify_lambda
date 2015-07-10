'use strict';

var nodeifyLambdaContext = require('nodeify_lambda_context');

module.exports = function(handler) {
  return function lambdaHandler(event, context) {   
    handler(event, nodeifyLambdaContext(context));
  };
};