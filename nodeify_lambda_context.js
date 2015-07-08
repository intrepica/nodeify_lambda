'use strict';

module.exports = function nodeifyLambdaContext(context) {   
  return function lambdaHandler(err, response) {
    if (err) {
      return context.fail(err);
    }
    context.succeed(response);    
  };
};