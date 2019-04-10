Nodejs bindings for LambdaTest Automation Api.

## Installation

```
npm install @kanhaiyalalsingh/lambdatest
```

## Example

```js
var LambdaTest = require("@kanhaiyalalsingh/lambdatest");
var lambdaTestCredentials = {
  username: "kanha",
  password: "@%3464vc432#%jdsfdsnjgfdg"
};
 
// Automate API
var client = LambdaTest.AutomationClient(lambdaTestCredentials);
 
automateClient.fetchBuilds(params?, function(e, builds) {
  console.log("Get builds");
  console.log(builds);
});

```