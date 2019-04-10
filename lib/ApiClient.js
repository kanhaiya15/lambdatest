var request = require('request'),
httpApiVersionPath = 'https://downloads.lambdatest.com/npm/api/supported_versions.json';

var ApiClient = function(settings) {
	if (!settings.username) {
		throw new Error('Username is required.');
	}
	if (!settings.password) {
		throw new Error('Password is required.');
  }
  ApiClient.authHeader = 'Basic ' + Buffer.from(settings.username + ':' + settings.password).toString('base64');
  ApiClient.settings = settings;
};

ApiClient.request = function(options, fnCallback) {
  if(ApiClient.baseUrl === undefined){
    _fetchApiVersions(ApiClient.settings, 5, function(e, response) {
      if(e) {
        throw new Error('Invalid Api version')
      } else {
        ApiClient.baseUrl = 'https://api.lambdatest.com/automation/api/' + response;
        ApiClient.request(options, fnCallback);
      }
    })
  } else {
    fnCallback = fnCallback || function() { };
    if(typeof options === 'object') {
      options.headers = {
        'Authorization' : ApiClient.authHeader,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      options.url = ApiClient.baseUrl + options.url;
    }
    request(options, function (e, response, body) {
      if(response.statusCode === 200) {
        try {
          body = JSON.parse(body);
        } catch(e) {
          
        }
        return fnCallback(e, body);
      } else {
        return fnCallback(e, body);
      }
    })
  }
};

function _fetchApiVersions(settings, retries, fnCallback) {
  if(retries >= 0) {
    request(httpApiVersionPath, function (e, response, body) {
      if(e) {
        _fetchApiVersions(settings, retries - 1, fnCallback);
      } else {
        try {
          console.log(body);
          body = JSON.parse(body);
          if(body.supportedVersions && body.supportedVersions.length) {
            if(settings.version) {
              if(body.supportedVersions.indexOf(settings.version) === -1) {
                return fnCallback(true, null);
              } else {
                return fnCallback(false, settings.version);
              }
            } else {
              return fnCallback(false, body.latestVersion);
            }
          } else {
            _fetchApiVersions(settings, retries - 1, fnCallback);
          }
        } catch(e) {
          _fetchApiVersions(settings, retries - 1, fnCallback);
        }
      }
    })
  } else {
    return fnCallback (true, null);
  }
}

module.exports = ApiClient;
