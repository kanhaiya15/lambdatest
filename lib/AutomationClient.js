var ApiClient = require("./ApiClient");

function AutomationApiClient(settings) {
  ApiClient.call(this, settings);
}

AutomationApiClient.prototype.fetchBuilds = function(params, fnCallback) {
  if(typeof params === 'function') {
    fnCallback = params;
  }
  params = params || { };
  
  ApiClient.request({
    url: '/builds',
    qs: params
  }, fnCallback)
}

AutomationApiClient.prototype.fetchBuildById = function(buildId, fnCallback) {
  ApiClient.request({ 
    url: '/builds/' + buildId
  }, fnCallback)
}

AutomationApiClient.prototype.deleteBuildById = function(buildId, fnCallback) {
  ApiClient.request({ 
    url: '/builds/' + buildId,
    method: 'DELETE'
  }, fnCallback)
}

AutomationApiClient.prototype.updateBuildById = function(buildId, requestBody, fnCallback) {
  ApiClient.request({ 
    url: '/builds/' + buildId,
    body: JSON.stringify(requestBody),
    method: 'PATCH'
  }, fnCallback)
}

AutomationApiClient.prototype.fetchSessions = function(params, fnCallback) {
  if(typeof params === 'function') {
    fnCallback = params;
  }
  params = params || { };
  ApiClient.request({ 
    url: '/sessions',
    qs: params
  }, fnCallback)
}

AutomationApiClient.prototype.fetchSessionById = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId
  }, fnCallback)
}

AutomationApiClient.prototype.deleteSessionById = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId,
    method: 'DELETE'
  }, fnCallback)
}

AutomationApiClient.prototype.updateSessionById = function(sessionId, requestBody, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId,
    body: JSON.stringify(requestBody),
    method: 'PATCH'
  }, fnCallback)
}

AutomationApiClient.prototype.fetchSessionScreenshot = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId + '/screenshots'
  }, fnCallback)
}

AutomationApiClient.prototype.fetchSessionVideo = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId + '/video'
  }, fnCallback)
}

AutomationApiClient.prototype.fetchSessionCommandLogs = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId + '/log/command'
  }, fnCallback)
}

AutomationApiClient.prototype.fetchSessionSeleniumLogs = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId + '/log/selenium'
  }, fnCallback)
}

AutomationApiClient.prototype.fetchSessionNetworkLogs = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId + '/log/network'
  }, fnCallback)
}

AutomationApiClient.prototype.fetchSessionConsoleLogs = function(sessionId, fnCallback) {
  ApiClient.request({
    url: '/sessions/' + sessionId + '/log/console'
  }, fnCallback)
}

AutomationApiClient.prototype.fetchTunnels = function(fnCallback) {
  ApiClient.request({
    url: '/tunnels'
  }, fnCallback)
}

AutomationApiClient.prototype.deleteTunnelById = function(tunnelId, fnCallback) {
  ApiClient.request({ 
    url: '/tunnels/' + tunnelId,
    method: 'DELETE'
  }, fnCallback)
}

AutomationApiClient.prototype.fetchPlatforms = function(fnCallback) {
  ApiClient.request({ 
    url: '/platforms',
  }, fnCallback)
}

module.exports = {
	AutomationClient: function(settings) {
		return new AutomationApiClient(settings);
	}
};
