var ApiClient = require("./ApiClient");

function AutomateApiClient(settings) {
  ApiClient.call(this, settings);
}

AutomateApiClient.prototype.fetchBuilds = function(params, fnCallback) {
  if(typeof params === 'function') {
    fnCallback = params;
  }
  params = params || { };
  
  ApiClient.request({
    url: '/builds',
    qs: params
  }, fnCallback)
}

AutomateApiClient.prototype.fetchBuildById = function(buildId, fnCallback) {
  ApiClient.request({ 
    url: '/builds/' + buildId
  }, fnCallback)
}

AutomateApiClient.prototype.deleteBuildById = function(buildId, fnCallback) {
  ApiClient.request({ 
    url: '/builds/' + buildId,
    method: 'DELETE'
  }, fnCallback)
}

AutomateApiClient.prototype.updateBuildById = function(buildId, requestBody, fnCallback) {
  ApiClient.request({ 
    url: '/builds/' + buildId,
    body: JSON.stringify(requestBody),
    method: 'PATCH'
  }, fnCallback)
}

AutomateApiClient.prototype.fetchSessions = function(params, fnCallback) {
  if(typeof params === 'function') {
    fnCallback = params;
  }
  params = params || { };
  ApiClient.request({ 
    url: '/sessions',
    qs: params
  }, fnCallback)
}

AutomateApiClient.prototype.fetchSessionById = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId
  }, fnCallback)
}

AutomateApiClient.prototype.deleteSessionById = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId,
    method: 'DELETE'
  }, fnCallback)
}

AutomateApiClient.prototype.updateSessionById = function(sessionId, requestBody, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId,
    body: JSON.stringify(requestBody),
    method: 'PATCH'
  }, fnCallback)
}

AutomateApiClient.prototype.fetchSessionScreenshot = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId + '/screenshots'
  }, fnCallback)
}

AutomateApiClient.prototype.fetchSessionVideo = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId + '/video'
  }, fnCallback)
}

AutomateApiClient.prototype.fetchSessionCommandLogs = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId + '/log/command'
  }, fnCallback)
}

AutomateApiClient.prototype.fetchSessionSeleniumLogs = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId + '/log/selenium'
  }, fnCallback)
}

AutomateApiClient.prototype.fetchSessionNetworkLogs = function(sessionId, fnCallback) {
  ApiClient.request({ 
    url: '/sessions/' + sessionId + '/log/network'
  }, fnCallback)
}

AutomateApiClient.prototype.fetchSessionConsoleLogs = function(sessionId, fnCallback) {
  ApiClient.request({
    url: '/sessions/' + sessionId + '/log/console'
  }, fnCallback)
}

AutomateApiClient.prototype.fetchTunnels = function(fnCallback) {
  ApiClient.request({
    url: '/tunnels'
  }, fnCallback)
}

AutomateApiClient.prototype.deleteTunnelById = function(tunnelId, fnCallback) {
  ApiClient.request({ 
    url: '/tunnels/' + tunnelId,
    method: 'DELETE'
  }, fnCallback)
}

AutomateApiClient.prototype.fetchPlatforms = function(fnCallback) {
  ApiClient.request({ 
    url: '/platforms',
  }, fnCallback)
}

module.exports = {
	AutomationClient: function(settings) {
		return new AutomateApiClient(settings);
	}
};
