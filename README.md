HyperTrack Node Bindings
==========================
[![Build Status](https://travis-ci.org/hypertrack/hypertrack-node.svg)](https://travis-ci.org/hypertrack/hypertrack-node/)
[![Coverage Status](https://coveralls.io/repos/github/hypertrack/hypertrack-node/badge.svg?branch=master)](https://coveralls.io/github/hypertrack/hypertrack-node?branch=master)
[![Slack Status](http://slack.hypertrack.io/badge.svg)](http://slack.hypertrack.io)

A javascript wrapper for the [HyperTrack api](http://docs.hypertrack.io).

Installation
------------
```
npm install hypertrack
```

Usage
------

You'll need your hypertrack secret key. You can find this from your account page. To start using, you can do the following:

```javascript
var hypertrack = require('hypertrack')('<YOUR HYPERTRACK SECRET KEY>');
// hypertrack.{ RESOURCE_NAME }.{ METHOD_NAME }
```

Every resource method accepts an optional callback as the last argument:

```javascript
hypertrack.customers.create(
    { name: 'Tapan Pandita', email: 'support@hypertrack.io' },
    function(err, customer) {
        err; // null if no error occurred
        customer; // the created customer object
    }
);
```

Additionally, every resource method returns a promise, so you don't have to use the regular callback. E.g.

```javascript
// Create a new customer and then a new destination for that customer:
hypertrack.customers.create({
  name: 'Tapan Pandita',
  email: 'support@hypertrack.io'
}).then(function(customer) {
  return hypertrack.destination.create({
    customer_id: customer.id,
    address: '270 Linden Street',
    city: 'San Francisco',
    country: 'US'
  });
}).then(function(destination) {
  console.log(destination);
}).catch(function(err) {
  // Deal with an error
});
```

Documentation
-------------

For detailed documentation of the methods available, please visit the official [HyperTrack API documentation](http://docs.hypertrack.io).

Testing
-------
Run the tests using [`npm`](https://www.npmjs.com/):

```bash
$ npm install
$ npm test
```
