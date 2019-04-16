# Node LambdaTest

A Node.js JavaScript client for working with [LambdaTest](https://www.lambdatest.com) through [Automation API](https://www.lambdatest.com/support/docs/api-doc).

## Installation

```
npm i @kanhaiyalalsingh/lambdatest
```

## Example

```js
var lambdaRestClient = require("@kanhaiyalalsingh/lambdatest");
var lambdaCredentials = {
  username: "kanha",
  accessKey: "@%3464vc432#%jdsfdsnjgfdg"
};

// Automation APIs
var lambdaAutomationClient = lambdaRestClient.AutomationClient(
  lambdaCredentials
);

lambdaAutomationClient.fetchBuilds(function(error, builds) {
  if (error) {
    console.log(error);
  }
  console.log("Get builds");
  console.log(builds);
});
```

## API

### Automate API v1

#### lambdaRestClient.AutomationClient(lambdaCredentials)

Creates a new automation client instance.

* `lambdaCredentials`: credentials for all requests.
	* `username`: The username for the LambdaTest account.
	* `accessKey`: The accessKey for the LambdaTest account.

#### lambdaAutomationClient.fetchBuilds(params?, callback)

fetch all builds.
* `params`: Parameters 
* `callback` (`function(error, builds)`): A callback to invoke when the API call is complete.
	* `builds`: Builds details.
