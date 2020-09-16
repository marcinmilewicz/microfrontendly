(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("microfrontendly", [], factory);
	else if(typeof exports === 'object')
		exports["microfrontendly"] = factory();
	else
		root["microfrontendly"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app-loader.ts":
/*!***************************!*\
  !*** ./src/app-loader.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nwindow.__loadedScripts = [];\r\nwindow.__loadedStyles = [];\r\nvar addScript = function (name) {\r\n    if (!window.__loadedScripts.includes(name)) {\r\n        window.__loadedScripts.push(name);\r\n    }\r\n};\r\nvar addStyle = function (name) {\r\n    if (!window.__loadedStyles.includes(name)) {\r\n        window.__loadedStyles.push(name);\r\n    }\r\n};\r\nvar loadScript = function (_a) {\r\n    var src = _a.src, selector = _a.selector;\r\n    if (window.__loadedScripts.includes(selector)) {\r\n        return Promise.resolve({\r\n            message: \"[microapp-shell] \" + selector + \" app had been loaded before\",\r\n        });\r\n    }\r\n    var scriptElement = document.createElement('script');\r\n    scriptElement.setAttribute('src', src);\r\n    scriptElement.setAttribute('id', selector);\r\n    return new Promise(function (resolve, reject) {\r\n        var onLoad = function () {\r\n            scriptElement.removeEventListener('load', onLoad);\r\n            addScript(selector);\r\n            resolve({\r\n                message: \"[microapp-shell] \" + selector + \" app has been just loaded\",\r\n            });\r\n        };\r\n        var onError = function () {\r\n            scriptElement.removeEventListener('error', onError);\r\n            reject({\r\n                message: \"[microapp-shell] \" + selector + \" app has not been loaded\",\r\n            });\r\n        };\r\n        scriptElement.addEventListener('load', onLoad);\r\n        scriptElement.addEventListener('error', onError);\r\n        document.body.appendChild(scriptElement);\r\n    });\r\n};\r\nvar loadStyle = function (_a) {\r\n    var src = _a.src, selector = _a.selector;\r\n    if (window.__loadedStyles.includes(selector)) {\r\n        return Promise.resolve({\r\n            message: \"[microapp-shell] \" + selector + \" stylesheet had been loaded before\",\r\n        });\r\n    }\r\n    var linkElement = document.createElement('link');\r\n    linkElement.setAttribute('type', 'text/css');\r\n    linkElement.setAttribute('rel', 'stylesheet');\r\n    linkElement.setAttribute('href', src);\r\n    return new Promise(function (resolve, reject) {\r\n        var onLoad = function () {\r\n            linkElement.removeEventListener('load', onLoad);\r\n            addStyle(selector);\r\n            resolve({\r\n                message: \"[microapp-shell] \" + selector + \" stylesheet has been just loaded\",\r\n            });\r\n        };\r\n        var onError = function () {\r\n            linkElement.removeEventListener('error', onError);\r\n            reject({\r\n                message: \"[microapp-shell] \" + selector + \" stylesheet has not been loaded\",\r\n            });\r\n        };\r\n        linkElement.addEventListener('load', onLoad);\r\n        linkElement.addEventListener('error', onError);\r\n        document.head.appendChild(linkElement);\r\n    });\r\n};\r\nvar loadMicroApp = function (config) {\r\n    var host = config.host;\r\n    if (!host) {\r\n        throw { message: 'Source host is not specified' };\r\n    }\r\n    var selector = config.selector;\r\n    var promises = [];\r\n    var loadedScriptPromise = loadScript({\r\n        src: host + \"/\" + config.sources.entryJs,\r\n        selector: selector,\r\n    });\r\n    promises.push(loadedScriptPromise);\r\n    if (config.sources.entryStyle) {\r\n        var loadedStylePromise = loadStyle({\r\n            src: host + \"/\" + config.sources.entryStyle,\r\n            selector: selector,\r\n        });\r\n        promises.push(loadedStylePromise);\r\n    }\r\n    return Promise.all(promises).then(function (responses) {\r\n        responses.forEach(function (response) { return console.info(response.message); });\r\n        return config;\r\n    });\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadMicroApp);\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/app-loader.ts?");

/***/ }),

/***/ "./src/events/index.ts":
/*!*****************************!*\
  !*** ./src/events/index.ts ***!
  \*****************************/
/*! exports provided: ROUTE_CHANGED_EVENT_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROUTE_CHANGED_EVENT_NAME\", function() { return ROUTE_CHANGED_EVENT_NAME; });\nvar ROUTE_CHANGED_EVENT_NAME = 'routeChanged';\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/events/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Microfrontendly, loadMicroApp, getMicroAppConfigByName, getMicroAppConfigByPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _microfrontendly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microfrontendly */ \"./src/microfrontendly.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Microfrontendly\", function() { return _microfrontendly__WEBPACK_IMPORTED_MODULE_0__[\"Microfrontendly\"]; });\n\n/* harmony import */ var _app_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-loader */ \"./src/app-loader.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loadMicroApp\", function() { return _app_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByName\", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_2__[\"getMicroAppConfigByName\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByPath\", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_2__[\"getMicroAppConfigByPath\"]; });\n\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/index.ts?");

/***/ }),

/***/ "./src/manifest.ts":
/*!*************************!*\
  !*** ./src/manifest.ts ***!
  \*************************/
/*! exports provided: extractRootPath, asMicroAppMap, asAppPerMap, getMicroAppConfigByPath, getAllAppsForRootPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractRootPath\", function() { return extractRootPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asMicroAppMap\", function() { return asMicroAppMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asAppPerMap\", function() { return asAppPerMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByPath\", function() { return getMicroAppConfigByPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllAppsForRootPath\", function() { return getAllAppsForRootPath; });\nvar extractRootPath = function (pathname) {\r\n    if (!pathname || typeof pathname !== 'string') {\r\n        throw new Error('Targeted url should be a string.');\r\n    }\r\n    var paths = pathname.split('/');\r\n    if (paths.length < 2) {\r\n        throw new Error('Targeted url is not valid pathname');\r\n    }\r\n    return \"/\" + paths[1];\r\n};\r\nvar getByRootPath = function (configuration, pathId) { return configuration.find(function (app) { return app.selector === pathId; }); };\r\nvar getAppBySelector = function (configuration, selector) { return configuration.find(function (app) { return app.selector === selector; }); };\r\nvar getRouteByFullPath = function (microAppConfig, fullPath) {\r\n    if (!microAppConfig.routes) {\r\n        return undefined;\r\n    }\r\n    return microAppConfig.routes.find(function (app) { return app.path === fullPath; });\r\n};\r\nvar asMicroAppMap = function (apps) {\r\n    return apps.reduce(function (result, app) {\r\n        if (app.selector) {\r\n            result[app.selector] = app;\r\n        }\r\n        return result;\r\n    }, {});\r\n};\r\nvar asAppPerMap = function (pages) {\r\n    return pages.reduce(function (result, page) {\r\n        if (page.path) {\r\n            result[page.path] = page.apps;\r\n        }\r\n        return result;\r\n    }, {});\r\n};\r\nvar getMicroAppConfigByPath = function (pathname, configuration) {\r\n    var paths = pathname.split('/');\r\n    if (!paths || !paths[1]) {\r\n        return undefined;\r\n    }\r\n    var resultAfterPrimaryPath = getByRootPath(configuration, paths[1]);\r\n    if (paths.length === 2 || resultAfterPrimaryPath === undefined) {\r\n        return resultAfterPrimaryPath;\r\n    }\r\n    var resultInRoutes = getRouteByFullPath(resultAfterPrimaryPath, pathname);\r\n    return resultInRoutes ? resultAfterPrimaryPath : undefined;\r\n};\r\nvar getAllAppsForRootPath = function (path, manifest) {\r\n    var page = manifest.pages.find(function (page) { return page.path === path; });\r\n    if (!page || !page.apps) {\r\n        return undefined;\r\n    }\r\n    return page.apps.map(function (locationTarget) { return locationTarget.container; });\r\n};\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/manifest.ts?");

/***/ }),

/***/ "./src/microfrontendly.ts":
/*!********************************!*\
  !*** ./src/microfrontendly.ts ***!
  \********************************/
/*! exports provided: Microfrontendly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Microfrontendly\", function() { return Microfrontendly; });\n/* harmony import */ var _registerApps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerApps */ \"./src/registerApps.ts\");\n/* harmony import */ var _manifest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manifest */ \"./src/manifest.ts\");\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer */ \"./src/renderer.ts\");\n/* harmony import */ var _registerEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registerEvents */ \"./src/registerEvents.ts\");\n\r\n\r\n\r\n\r\nvar Microfrontendly = function (configUri) {\r\n    window.__microfrontendly = {};\r\n    var renderForPath = function (path) {\r\n        var rootPath = Object(_manifest__WEBPACK_IMPORTED_MODULE_1__[\"extractRootPath\"])(path);\r\n        var targets = window.__microfrontendly.registeredPages[rootPath];\r\n        targets.forEach(function (target) {\r\n            var container = target.container, id = target.id;\r\n            var app = window.__microfrontendly.registeredApps[id];\r\n            var element = document.getElementById(container);\r\n            Object(_renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, app);\r\n        });\r\n    };\r\n    var initializeMicrofrontendEngine = function (configuration) {\r\n        Object(_registerApps__WEBPACK_IMPORTED_MODULE_0__[\"registerApps\"])(configuration.apps);\r\n        Object(_registerApps__WEBPACK_IMPORTED_MODULE_0__[\"registerPaths\"])(configuration.pages);\r\n        renderForPath(window.location.pathname);\r\n        Object(_registerEvents__WEBPACK_IMPORTED_MODULE_3__[\"registerEvents\"])(renderForPath);\r\n        return configuration;\r\n    };\r\n    var withContainer = function (container) {\r\n        context.container = container;\r\n        return context;\r\n    };\r\n    var listen = function () {\r\n        return fetch(context.configUri)\r\n            .then(function (resp) { return resp.json(); })\r\n            .then(initializeMicrofrontendEngine);\r\n    };\r\n    var context = {\r\n        configUri: configUri,\r\n        container: document.body,\r\n        withContainer: withContainer,\r\n        listen: listen,\r\n    };\r\n    return context;\r\n};\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/microfrontendly.ts?");

/***/ }),

/***/ "./src/registerApps.ts":
/*!*****************************!*\
  !*** ./src/registerApps.ts ***!
  \*****************************/
/*! exports provided: registerApps, registerPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerApps\", function() { return registerApps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerPaths\", function() { return registerPaths; });\n/* harmony import */ var _manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manifest */ \"./src/manifest.ts\");\n\r\nvar registerApps = function (apps, global) {\r\n    if (global === void 0) { global = window; }\r\n    global.__microfrontendly.registeredApps = Object(_manifest__WEBPACK_IMPORTED_MODULE_0__[\"asMicroAppMap\"])(apps);\r\n};\r\nvar registerPaths = function (pages, global) {\r\n    if (global === void 0) { global = window; }\r\n    global.__microfrontendly.registeredPages = Object(_manifest__WEBPACK_IMPORTED_MODULE_0__[\"asAppPerMap\"])(pages);\r\n};\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/registerApps.ts?");

/***/ }),

/***/ "./src/registerEvents.ts":
/*!*******************************!*\
  !*** ./src/registerEvents.ts ***!
  \*******************************/
/*! exports provided: registerEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerEvents\", function() { return registerEvents; });\n/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/index */ \"./src/events/index.ts\");\n/* harmony import */ var _utils_browser_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/browser.utils */ \"./src/utils/browser.utils.ts\");\n\r\n\r\nvar registerEvents = function (renderForPath) {\r\n    window.addEventListener('popstate', function (e) {\r\n        renderForPath(window.location.pathname);\r\n    });\r\n    document.addEventListener(_events_index__WEBPACK_IMPORTED_MODULE_0__[\"ROUTE_CHANGED_EVENT_NAME\"], function (event) {\r\n        var route = event.detail.route;\r\n        if (!route || !route.path) {\r\n            return;\r\n        }\r\n        Object(_utils_browser_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleWindowLocation\"])(route.path);\r\n        renderForPath(route.path);\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/registerEvents.ts?");

/***/ }),

/***/ "./src/renderer.ts":
/*!*************************!*\
  !*** ./src/renderer.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.ts\");\n/* harmony import */ var _app_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-loader */ \"./src/app-loader.ts\");\n\r\n\r\nvar renderIntoContainer = function (rootElement, microAppConfig) {\r\n    if (!rootElement || !microAppConfig) {\r\n        return undefined;\r\n    }\r\n    Object(_app_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(microAppConfig)\r\n        .then(function (config) {\r\n        var selector = config.selector;\r\n        if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"isElementEmpty\"])(rootElement)) {\r\n            rootElement.append(document.createElement(selector));\r\n            return config;\r\n        }\r\n        if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"hasElementRenderedChild\"])(rootElement, selector)) {\r\n            return config;\r\n        }\r\n        rootElement.removeChild(rootElement.firstChild);\r\n        rootElement.appendChild(document.createElement(selector));\r\n        return config;\r\n    })\r\n        .catch(function () {\r\n        if (rootElement.hasChildNodes()) {\r\n            rootElement.removeChild(rootElement.firstChild);\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderIntoContainer);\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/renderer.ts?");

/***/ }),

/***/ "./src/utils/browser.utils.ts":
/*!************************************!*\
  !*** ./src/utils/browser.utils.ts ***!
  \************************************/
/*! exports provided: handleWindowLocation, handleHashedLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleWindowLocation\", function() { return handleWindowLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleHashedLocation\", function() { return handleHashedLocation; });\nvar handleWindowLocation = function (path) {\r\n    window.location.href = window.location.href + \"#\";\r\n    if (history && history.pushState) {\r\n        history.pushState({}, path, path);\r\n    }\r\n};\r\nvar handleHashedLocation = function () {\r\n    window.location.href = window.location.href.replace('#', '');\r\n};\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/utils/browser.utils.ts?");

/***/ }),

/***/ "./src/utils/configuration.utils.ts":
/*!******************************************!*\
  !*** ./src/utils/configuration.utils.ts ***!
  \******************************************/
/*! exports provided: getMicroAppConfigByPath, getMicroAppConfigByName, isElementEmpty, hasElementRenderedChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByPath\", function() { return getMicroAppConfigByPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByName\", function() { return getMicroAppConfigByName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementEmpty\", function() { return isElementEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasElementRenderedChild\", function() { return hasElementRenderedChild; });\nvar getMicroAppConfigByPath = function (pathname, configuration) {\r\n    var paths = pathname.split('/');\r\n    if (!paths || !paths[1])\r\n        return undefined;\r\n    return configuration.apps.find(function (app) { return app.componentName === paths[1]; });\r\n};\r\nvar getMicroAppConfigByName = function (name, configuration) { return configuration.apps.find(function (app) { return app.componentName === name; }); };\r\nvar isElementEmpty = function (element) { return !element.hasChildNodes(); };\r\nvar hasElementRenderedChild = function (element, componentName) { return element.firstChild.nodeName.toUpperCase() === componentName.toUpperCase(); };\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/utils/configuration.utils.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: handleWindowLocation, handleHashedLocation, getMicroAppConfigByPath, getMicroAppConfigByName, isElementEmpty, hasElementRenderedChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _browser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.utils */ \"./src/utils/browser.utils.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"handleWindowLocation\", function() { return _browser_utils__WEBPACK_IMPORTED_MODULE_0__[\"handleWindowLocation\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"handleHashedLocation\", function() { return _browser_utils__WEBPACK_IMPORTED_MODULE_0__[\"handleHashedLocation\"]; });\n\n/* harmony import */ var _configuration_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.utils */ \"./src/utils/configuration.utils.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByPath\", function() { return _configuration_utils__WEBPACK_IMPORTED_MODULE_1__[\"getMicroAppConfigByPath\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByName\", function() { return _configuration_utils__WEBPACK_IMPORTED_MODULE_1__[\"getMicroAppConfigByName\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isElementEmpty\", function() { return _configuration_utils__WEBPACK_IMPORTED_MODULE_1__[\"isElementEmpty\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasElementRenderedChild\", function() { return _configuration_utils__WEBPACK_IMPORTED_MODULE_1__[\"hasElementRenderedChild\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack://microfrontendly/./src/utils/index.ts?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.ts */\"./src/index.ts\");\n\n\n//# sourceURL=webpack://microfrontendly/multi_./src/index.ts?");

/***/ })

/******/ });
});