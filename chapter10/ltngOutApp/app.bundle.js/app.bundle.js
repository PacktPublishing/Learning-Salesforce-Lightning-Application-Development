/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _forcejs = __webpack_require__(/*! forcejs */ \"./node_modules/forcejs/all/index.js\");\n\nvar oauth = _forcejs.OAuth.createInstance(\"3MVG9JamK_x9K2XI99fdzq3yLlbGhfhg6FEM_8bszwi4XeG1ktlVrQf1B9tZr8cuTLBgAkl2lk.psKz7JZw0Q\", \"https://test.salesforce.com\", \"https://infinite-brushlands-64356.herokuapp.com/oauthcallback.html\");\noauth.login().then(function (oauthResult) {\n    //console.log(oauthResult);\n    renderLightningOutComponent(oauthResult);\n});\n\nvar renderLightningOutComponent = function renderLightningOutComponent(oauthResult) {\n    var token = oauthResult.accessToken;\n    var lightningEndPointURI = \"https://ability-page-3410-dev-ed.lightning.force.com\";\n    $Lightning.use(\"c:youtubesearchOutApp\", function () {\n        $Lightning.createComponent(\"c:youtubesearch\", {}, \"youtubeApp\", function (cmp) {\n            //Component COde\n        });\n    }, lightningEndPointURI, token);\n};\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./node_modules/forcejs/all/index.js":
/*!*******************************************!*\
  !*** ./node_modules/forcejs/all/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p=\"\",t(0)}([function(e,t,n){\"use strict\";e.exports={OAuth:n(1),DataService:n(2)}},function(e,t){\"use strict\";function n(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function r(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=0,i=window.location.pathname.substring(0,window.location.pathname.lastIndexOf(\"/\")),c=window.location.protocol+\"//\"+window.location.hostname+(window.location.port?\":\"+window.location.port:\"\"),u=c+i,h=void 0,p=function(e){var t={},n=e.indexOf(\"#\");if(n>-1){var r=decodeURIComponent(e.substr(n+1)),o=r.split(\"&\");o.forEach(function(e){var n=e.split(\"=\");t[n[0]]=n[1]})}return t};e.exports={createInstance:function(e,t,n){return window.cordova?new d(e,t,n):new f(e,t,n)}};var l=function(){function e(t,n,r){o(this,e),s+=1,this.instanceId=s,this.appId=t||\"3MVG9fMtCkV6eLheIEZplMqWfnGlf3Y.BcWdOf1qytXo9zxgbsrUbS.ExHTgUPJeb3jZeT8NYhc.hMyznKU92\",this.loginURL=n||\"https://login.salesforce.com\",this.oauthCallbackURL=r||u+\"/oauthcallback.html\"}return a(e,[{key:\"login\",value:function(){}},{key:\"loginGuest\",value:function(){}}]),e}(),d=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),a(t,[{key:\"login\",value:function(){return new Promise(function(e,t){document.addEventListener(\"deviceready\",function(){return(h=cordova.require(\"com.salesforce.plugin.oauth\"))?void h.getAuthCredentials(function(t){e({accessToken:t.accessToken,instanceURL:t.instanceUrl,refreshToken:t.refreshToken,userId:t.userId})},function(e){console.log(e),t(e)}):(console.error(\"Salesforce Mobile SDK OAuth plugin not available\"),void t(\"Salesforce Mobile SDK OAuth plugin not available\"))},!1)})}}]),t}(l),f=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),a(t,[{key:\"login\",value:function(){var e=this;return new Promise(function(t,n){console.log(\"loginURL: \"+e.loginURL),console.log(\"oauthCallbackURL: \"+e.oauthCallbackURL),document.addEventListener(\"oauthCallback\",function(r){var o=r.detail,a=p(o);a.state==e.instanceId&&(a.access_token?t({appId:e.appId,accessToken:a.access_token,instanceURL:a.instance_url,refreshToken:a.refresh_token,userId:a.id.split(\"/\").pop()}):n(a))});var r=e.loginURL+(\"/services/oauth2/authorize?client_id=\"+e.appId+\"&redirect_uri=\"+e.oauthCallbackURL+\"&response_type=token&state=\"+e.instanceId);window.open(r,\"_blank\",\"location=no\")})}}]),t}(l)},function(e,t){\"use strict\";function n(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function r(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}var a=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,r)}if(\"value\"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(r)},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=window.location.pathname.substring(0,window.location.pathname.lastIndexOf(\"/\")),c=window.location.protocol+\"//\"+window.location.hostname+(window.location.port?\":\"+window.location.port:\"\"),u=c+i,h=function(e,t){return\"/\"!==e.charAt(e.length-1)&&(e+=\"/\"),\"/\"===t.charAt(0)&&(t=t.substr(1)),e+t},p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[],r=void 0;for(r in e)e.hasOwnProperty(r)&&(t?n.push(encodeURIComponent(r)+\"=\"+encodeURIComponent(e[r])):n.push(r+\"=\"+e[r]));return n.join(\"&\")},l=function(e){var t=e.match(/^(https?\\:)\\/\\/(([^:\\/?#]*)(?:\\:([0-9]+))?)([^?#]*)(\\?[^#]*|)(#.*|)$/);return t&&{protocol:t[1],host:t[2],hostname:t[3],port:t[4],path:t[5],params:parseQueryString(t[6]),hash:t[7]}},d=void 0,f={},v=void 0;document.addEventListener(\"deviceready\",function(){try{v=cordova.require(\"com.salesforce.plugin.network\")}catch(e){}},!1),e.exports={createInstance:function(e,t,n){var r=void 0;return r=window.cordova?new g(e,t):new b(e,t),n?f[n]=r:d=r,r},getInstance:function(e){return e?f[e]:d}};var y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this.appId=t.appId,this.accessToken=t.accessToken,this.instanceURL=t.instanceURL,this.refreshToken=t.refreshToken,this.userId=t.userId,this.apiVersion=n.apiVersion||\"v41.0\",this.loginURL=n.loginURL||\"https://login.salesforce.com\",void 0==n.useProxy?this.useProxy=!(window.cordova||window.SfdcApp||window.sforce||window.LCC):this.useProxy=n.useProxy,this.proxyURL=n.proxyURL||u}return s(e,[{key:\"getRequestBaseURL\",value:function(){var e=void 0;return e=this.useProxy?this.proxyURL:this.instanceURL?this.instanceURL:c,\"/\"===e.slice(-1)&&(e=e.slice(0,-1)),e}},{key:\"refreshAccessToken\",value:function(){}},{key:\"getUserId\",value:function(){return this.userId}},{key:\"request\",value:function(e){var t=this;return new Promise(function(n,r){if(!t.accessToken&&!t.refreshToken)return void(\"function\"==typeof errorHandler&&r(\"No access token. Login and try again.\"));var o=e.method||\"GET\",a=new XMLHttpRequest,s=t.getRequestBaseURL();if(\"/\"!==e.path.charAt(0)&&(e.path=\"/\"+e.path),s+=e.path,e.params&&(s+=\"?\"+p(e.params)),a.onreadystatechange=function(){if(4===a.readyState)if(a.status>199&&a.status<300)if(\"arraybuffer\"==a.responseType)n(a.response);else{try{var o=a.responseText?JSON.parse(a.responseText):void 0}catch(e){var o=a.responseText}n(o)}else 401===a.status&&t.refreshToken?t.refreshAccessToken().then(function(){return t.request(e).then(function(e){return n(e)}).catch(function(e){return r(e)})}).catch(function(){r(a)}):r(a)},a.open(o,s,!0),a.setRequestHeader(\"Accept\",\"application/json\"),a.setRequestHeader(\"Authorization\",\"Bearer \"+t.accessToken),a.setRequestHeader(\"Cache-Control\",\"no-store\"),a.setRequestHeader(\"X-Connect-Bearer-Urls\",!0),e.responseType&&(a.responseType=e.responseType),e.contentType&&a.setRequestHeader(\"Content-Type\",e.contentType),e.headerParams)for(var i in e.headerParams.getOwnPropertyNames()){var c=e.headerParams[i];a.setRequestHeader(i,c)}t.useProxy&&a.setRequestHeader(\"Target-URL\",t.instanceURL),a.send(e.data?JSON.stringify(e.data):void 0)})}},{key:\"query\",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={path:\"/services/data/\"+this.apiVersion+\"/query\",params:{q:e}};return t?this.batchTransaction(n):this.request(n)}},{key:\"queryAll\",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={path:\"/services/data/\"+this.apiVersion+\"/queryAll\",params:{q:e}};return t?this.batchTransaction(n):this.request(n)}},{key:\"retrieve\",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o={path:\"/services/data/\"+this.apiVersion+\"/sobjects/\"+e+\"/\"+t,params:n?{fields:\"string\"==typeof n?n:n.join(\",\")}:void 0};return r?this.batchTransaction(o):this.request(o)}},{key:\"getPickListValues\",value:function(e,t){var n={path:\"/services/data/\"+this.apiVersion+\"/sobjects/\"+e+\"/describe\"};return t?this.batchTransaction(n):this.request(n)}},{key:\"create\",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={method:\"POST\",contentType:\"application/json\",path:\"/services/data/\"+this.apiVersion+\"/sobjects/\"+e+\"/\",data:t};return n?this.batchTransaction(r):this.request(r)}},{key:\"update\",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:\"POST\",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=t.Id||t.id,a=JSON.parse(JSON.stringify(t));delete a.attributes,delete a.Id,delete a.id;var s={method:n,contentType:\"application/json\",path:\"/services/data/\"+this.apiVersion+\"/sobjects/\"+e+\"/\"+o,params:{_HttpMethod:\"PATCH\"},data:a};return r?this.batchTransaction(s):this.request(s)}},{key:\"del\",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={method:\"DELETE\",path:\"/services/data/\"+this.apiVersion+\"/sobjects/\"+e+\"/\"+t};return n?this.batchTransaction(r):this.request(r)}},{key:\"upsert\",value:function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a={method:\"PATCH\",contentType:\"application/json\",path:\"/services/data/\"+this.apiVersion+\"/sobjects/\"+e+\"/\"+t+\"/\"+n,data:r};return o?this.batchTransaction(a):this.request(a)}},{key:\"apexrest\",value:function(e){var t=void 0;return\"string\"==typeof e?t={path:e,method:\"GET\"}:(t=e,\"/\"!==t.path.charAt(0)&&(t.path=\"/\"+t.path),\"/services/apexrest\"!==t.path.substr(0,18)&&(t.path=\"/services/apexrest\"+t.path)),t.contentType||(t.contentType=\"DELETE\"==t.method||\"GET\"==t.method?null:\"application/json\"),this.request(t)}},{key:\"chatter\",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=\"/services/data/\"+this.apiVersion+\"/chatter\",r=void 0;if(e&&e.substring)r={path:h(n,e)};else{if(!e||!e.path)return new Promise(function(e,t){return t(\"You must specify a path for the request\")});r=e,r.path=h(n,e.path)}var o=r;return t?this.batchTransaction(o):this.request(o)}},{key:\"versions\",value:function(){return this.request({path:\"/services/data/\"})}},{key:\"resources\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={path:\"/services/data/\"+this.apiVersion};return e?this.batchTransaction(t):this.request(t)}},{key:\"describeGlobal\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={path:\"/services/data/\"+this.apiVersion+\"/sobjects\"};return e?this.batchTransaction(t):this.request(t)}},{key:\"metadata\",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={path:\"/services/data/\"+this.apiVersion+\"/sobjects/\"+e};return t?this.batchTransaction(n):this.request(n)}},{key:\"describe\",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={path:\"/services/data/\"+this.apiVersion+\"/sobjects/\"+e+\"/describe\"};return t?this.batchTransaction(n):this.request(n)}},{key:\"describeLayout\",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t=t||\"\";var r={path:\"/services/data/\"+this.apiVersion+\"/sobjects/\"+e+\"/describe/layouts/\"+t};return n?this.batchTransaction(r):this.request(r)}},{key:\"reports\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:\"\",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];\"\"!==e&&(e=\"/\"+e);var n={path:\"/services/data/\"+this.apiVersion+\"/analytics/reports\"+e};return t?this.batchTransaction(n):this.request(n)}},{key:\"dashboard\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:\"\",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];\"\"!==e&&(e=\"/\"+e);var n={path:\"/services/data/\"+this.apiVersion+\"/analytics/dashboards\"+e};return t?this.batchTransaction(n):this.request(n)}},{key:\"queryMore\",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=l(e),r={path:n.path,params:n.params};return t?this.batchTransaction(r):this.request(r)}},{key:\"search\",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={path:\"/services/data/\"+this.apiVersion+\"/search\",params:{q:e}};return t?this.batchTransaction(n):this.request(n)}},{key:\"batchTransaction\",value:function(e){return e.method||(e.method=\"GET\"),\"/\"!==e.path.charAt(0)&&(e.path=\"/\"+e.path),e.params?e.url=e.path+\"?\"+p(e.params,!1):e.url=e.path,e.hasOwnProperty(\"data\")&&(e.body=e.data,delete e.data),delete e.params,delete e.path,new Promise(function(t,n){return t(e)})}},{key:\"batch\",value:function(e){for(var t=0;t<e.length;t++)delete e[t].contentType,e[t].hasOwnProperty(\"body\")&&(e[t].richInput=e[t].body,delete e[t].body);return this.request({method:\"POST\",contentType:\"application/json\",path:\"/services/data/\"+this.apiVersion+\"/composite/batch\",data:{batchRequests:e}})}},{key:\"composite\",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\",n=0;n<e.length;n++)delete e[n].contentType;return t?this.request({method:\"POST\",contentType:\"application/json\",path:\"/services/data/\"+this.apiVersion+\"/composite/tree/\"+t+\"/\",data:{records:e}}):this.request({method:\"POST\",contentType:\"application/json\",path:\"/services/data/\"+this.apiVersion+\"/composite\",data:{compositeRequest:e}})}}]),e}(),b=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),s(t,[{key:\"refreshAccessToken\",value:function(){var e=this;return new Promise(function(t,n){if(!e.refreshToken)return console.log(\"Missing refreshToken\"),void n(\"Missing refreshToken\");if(!e.appId)return console.log(\"Missing appId\"),void n(\"Missing appId\");var r=new XMLHttpRequest,o={grant_type:\"refresh_token\",refresh_token:e.refreshToken,client_id:e.appId},a=e.useProxy?e.proxyURL:e.loginURL;a=a+\"/services/oauth2/token?\"+p(o),r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){console.log(\"Token refreshed\");var o=JSON.parse(r.responseText);e.accessToken=o.access_token,t()}else console.log(\"Error while trying to refresh token: \"+r.responseText),n()},r.open(\"POST\",a,!0),e.useProxy||r.setRequestHeader(\"Target-URL\",e.loginURL),r.send()})}}]),t}(y),g=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),s(t,[{key:\"refreshAccessToken\",value:function(){var e=this;return new Promise(function(t,n){document.addEventListener(\"deviceready\",function(){var r=void 0;try{r=cordova.require(\"com.salesforce.plugin.oauth\")}catch(e){}return r?void r.authenticate(function(n){e.accessToken=n.accessToken,t()},function(){console.error(\"Error refreshing oauth access token using the oauth plugin\"),n()}):(console.error(\"Salesforce Mobile SDK OAuth plugin not available\"),void n(\"Salesforce Mobile SDK OAuth plugin not available\"))},!1)})}},{key:\"computeEndPointIfMissing\",value:function(e,t){if(void 0!==e)return{endPoint:e,path:t};var n=t.split(\"/\").filter(function(e){return\"\"!==e});return n.length>=2?{endPoint:\"/\"+n.slice(0,2).join(\"/\"),path:\"/\"+n.slice(2).join(\"/\")}:{endPoint:\"\",path:t}}},{key:\"request\",value:function(e){var n=this;return v?e.hasOwnProperty(\"direct\")&&e.direct?(e.responseType=\"arraybuffer\",a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),\"request\",this).call(this,e)):new Promise(function(t,r){var o=n.computeEndPointIfMissing(e.endPoint,e.path);void 0===e.params&&(e.params={}),\"q\"in e.params&&(e.params.q=e.params.q.replace(/[\\n]/g,\" \")),v.sendRequest(o.endPoint,o.path,t,r,e.method,e.data||e.params,e.headerParams)}):a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),\"request\",this).call(this,e)}}]),t}(y)}])});\n\n//# sourceURL=webpack:///./node_modules/forcejs/all/index.js?");

/***/ })

/******/ });