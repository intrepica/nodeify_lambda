[![Build Status](https://semaphoreci.com/api/v1/projects/6647c6af-07c3-4f2b-b7bb-28cff438ec65/483537/badge.svg)](https://semaphoreci.com/lp/nodeify_lambda)

Nodeify Lambda
====================

About
--------------
Converts the context object on an AWS Lambda handler to a node callback.

Setup
--------------

```sh
npm install nodeify_lambda
```

Example
--------------

```js

	var nodeifyLambda = require('nodeify_lambda');

	exports.handler = nodeifyLambda(function(event, callback) {
		// the context object is now a node callback!

		if (myAppHasAnError()) {
			// calls context.fail(err)
			callback(new Error('Boom!'));
		} else {
			// calls context.succeed()
			callback(null, 'yeah baby!');
		}
		
	});

```

