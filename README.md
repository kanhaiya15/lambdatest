Nodejs bindings for LambdaTest Automation Api.

## Installation

```
npm install @kanhaiyalalsingh/lambdatest
```

## Example

```js
var lambdaRestClient = require("@kanhaiyalalsingh/lambdatest");
var lambdaTestCredentials = {
  username: "kanha",
  password: "@%3464vc432#%jdsfdsnjgfdg"
};
 
// Automation APIs
var lambdaAutomationClient = lambdaRestClient.AutomationClient(lambdaTestCredentials);
 
lambdaAutomationClient.fetchBuilds(function(e, builds) {
  console.log("Get builds");
  console.log(builds);
});

```