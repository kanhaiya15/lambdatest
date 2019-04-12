Nodejs bindings for LambdaTest Automation Api.

## Installation

```
npm install @kanhaiyalalsingh/lambdatest
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

lambdaAutomationClient.fetchBuilds(function(e, builds) {
  console.log("Get builds");
  console.log(builds);
});
```
