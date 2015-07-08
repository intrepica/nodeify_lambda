Nodeify Lmabda
====================

About
--------------
Converts the context object on an AWS Lambda handler to a node callback.

Setup
--------------

```sh
npm install @literacyplanet/nodeify_lambda
```

Example
--------------

```js

	var nodeifyLambda = require('@literacyplanet/nodeify_lambda');

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

