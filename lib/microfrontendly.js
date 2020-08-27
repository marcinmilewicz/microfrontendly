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

/***/ "./src/app-loader.js":
/*!***************************!*\
  !*** ./src/app-loader.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nwindow.__loadedScripts = [];\nwindow.__loadedStyles = [];\n\nconst addScript = name => {\n  if (!window.__loadedScripts.includes(name)) {\n    window.__loadedScripts.push(name);\n  }\n};\n\nconst addStyle = name => {\n  if (!window.__loadedStyles.includes(name)) {\n    window.__loadedStyles.push(name);\n  }\n};\n\nconst loadScript = ({\n  src,\n  componentName\n}) => {\n  if (window.__loadedScripts.includes(componentName)) {\n    return Promise.resolve({\n      message: `[microapp-shell] ${componentName} app had been loaded before`\n    });\n  }\n\n  const scriptElement = document.createElement('script');\n  scriptElement.setAttribute('src', src);\n  scriptElement.setAttribute('id', componentName);\n  return new Promise((resolve, reject) => {\n    const onLoad = () => {\n      scriptElement.removeEventListener('load', onLoad);\n      addScript(componentName);\n      resolve({\n        message: `[microapp-shell] ${componentName} app has been just loaded`\n      });\n    };\n\n    const onError = () => {\n      scriptElement.removeEventListener('error', onError);\n      reject({\n        message: `[microapp-shell] ${componentName} app has not been loaded`\n      });\n    };\n\n    scriptElement.addEventListener('load', onLoad);\n    scriptElement.addEventListener('error', onError);\n    document.body.appendChild(scriptElement);\n  });\n};\n\nconst loadStyle = ({\n  src,\n  componentName\n}) => {\n  if (window.__loadedStyles.includes(componentName)) {\n    return Promise.resolve({\n      message: `[microapp-shell] ${componentName} stylesheet had been loaded before`\n    });\n  }\n\n  const linkElement = document.createElement('link');\n  linkElement.setAttribute('type', 'text/css');\n  linkElement.setAttribute('rel', 'stylesheet');\n  linkElement.setAttribute('href', src);\n  return new Promise((resolve, reject) => {\n    const onLoad = () => {\n      linkElement.removeEventListener('load', onLoad);\n      addStyle(componentName);\n      resolve({\n        message: `[microapp-shell] ${componentName} stylesheet has been just loaded`\n      });\n    };\n\n    const onError = () => {\n      linkElement.removeEventListener('error', onError);\n      reject({\n        message: `[microapp-shell] ${componentName} stylesheet has not been loaded`\n      });\n    };\n\n    linkElement.addEventListener('load', onLoad);\n    linkElement.addEventListener('error', onError);\n    document.head.appendChild(linkElement);\n  });\n};\n\nconst loadMicroApp = config => {\n  const {\n    host\n  } = config;\n\n  if (!host) {\n    throw {\n      message: 'Source host is not specified'\n    };\n  }\n\n  const {\n    componentName\n  } = config;\n  const promises = [];\n  const loadedScriptPromise = loadScript({\n    src: `${host}/${config.sources.js}`,\n    componentName\n  });\n  promises.push(loadedScriptPromise);\n\n  if (config.sources.styles) {\n    const loadedStylePromise = loadStyle({\n      src: `${host}/${config.sources.styles}`,\n      componentName\n    });\n    promises.push(loadedStylePromise);\n  }\n\n  return Promise.all(promises).then(responses => {\n    responses.forEach(response => console.info(response.message));\n    return config;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadMicroApp);\n\n//# sourceURL=webpack://microfrontendly/./src/app-loader.js?");

/***/ }),

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/*! exports provided: ROUTE_CHANGED_EVENT_NAME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROUTE_CHANGED_EVENT_NAME\", function() { return ROUTE_CHANGED_EVENT_NAME; });\nconst ROUTE_CHANGED_EVENT_NAME = 'routeChanged';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack://microfrontendly/./src/globals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Microfrontendly, loadMicroApp, getMicroAppConfigByName, getMicroAppConfigByPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _microfrontendly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microfrontendly */ \"./src/microfrontendly.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Microfrontendly\", function() { return _microfrontendly__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _app_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-loader */ \"./src/app-loader.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loadMicroApp\", function() { return _app_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ \"./src/utils/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByName\", function() { return utils__WEBPACK_IMPORTED_MODULE_2__[\"getMicroAppConfigByName\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByPath\", function() { return utils__WEBPACK_IMPORTED_MODULE_2__[\"getMicroAppConfigByPath\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack://microfrontendly/./src/index.js?");

/***/ }),

/***/ "./src/microfrontendly.js":
/*!********************************!*\
  !*** ./src/microfrontendly.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ \"./src/renderer.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ \"./src/globals.js\");\n\n\n\nconst Microfrontendly = configURI => {\n  const renderContainer = (configuration, context) => {\n    context.rootElement = document.createElement('div');\n    context.rootElement.setAttribute('id', configuration.containerId);\n    context.container.appendChild(context.rootElement);\n    Object(_renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(context.rootElement, window.location.pathname, configuration);\n  };\n\n  const listenerFactory = (rootElement, configuration) => route => {\n    window.location.href = `${window.location.href}#`;\n    const pathname = `${route.path}`; // eslint-disable-next-line no-restricted-globals\n\n    if (history && history.pushState) {\n      // eslint-disable-next-line no-restricted-globals\n      history.pushState({}, pathname, pathname);\n      Object(_renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rootElement, window.location.pathname, configuration);\n    }\n  };\n\n  const listenOnRoutes = listener => {\n    document.addEventListener(_globals__WEBPACK_IMPORTED_MODULE_1__[\"ROUTE_CHANGED_EVENT_NAME\"], event => {\n      const {\n        route\n      } = event.detail;\n\n      if (route) {\n        listener(route);\n      }\n    });\n  };\n\n  const context = {\n    configURI,\n    container: document.body\n  };\n\n  context.withContainer = container => {\n    context.container = container;\n    return context;\n  };\n\n  context.render = () => fetch(context.configURI).then(resp => resp.json()).then(configuration => {\n    renderContainer(configuration, context);\n    const listener = listenerFactory(context.rootElement, configuration);\n    listenOnRoutes(listener);\n    return configuration;\n  });\n\n  return context;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Microfrontendly);\n\n//# sourceURL=webpack://microfrontendly/./src/microfrontendly.js?");

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n/* harmony import */ var _app_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-loader */ \"./src/app-loader.js\");\n\n\n\nconst render = (rootElement, pathname, configuration) => {\n  const microAppConfig = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getMicroAppConfigByPath\"])(pathname, configuration);\n\n  if (!rootElement || !pathname || !microAppConfig) {\n    return undefined;\n  }\n\n  return Object(_app_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(microAppConfig).then(config => {\n    const componentName = config.componentName || 'div';\n\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isElementEmpty\"])(rootElement)) {\n      rootElement.append(document.createElement(componentName));\n      return config;\n    }\n\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"hasElementRenderedChild\"])(rootElement, componentName)) {\n      return config;\n    }\n\n    rootElement.removeChild(rootElement.firstChild);\n    rootElement.appendChild(document.createElement(componentName));\n    return config;\n  }).catch(() => {\n    if (rootElement.hasChildNodes()) {\n      rootElement.removeChild(rootElement.firstChild);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack://microfrontendly/./src/renderer.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getMicroAppConfigByPath, getMicroAppConfigByName, isElementEmpty, hasElementRenderedChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils/utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByPath\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"getMicroAppConfigByPath\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByName\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"getMicroAppConfigByName\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isElementEmpty\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"isElementEmpty\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasElementRenderedChild\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"hasElementRenderedChild\"]; });\n\n\n\n\n//# sourceURL=webpack://microfrontendly/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: getMicroAppConfigByPath, getMicroAppConfigByName, isElementEmpty, hasElementRenderedChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByPath\", function() { return getMicroAppConfigByPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMicroAppConfigByName\", function() { return getMicroAppConfigByName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementEmpty\", function() { return isElementEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasElementRenderedChild\", function() { return hasElementRenderedChild; });\nconst getMicroAppConfigByPath = (pathname, configuration) => {\n  const paths = pathname.split('/');\n  if (!paths || !paths[1]) return undefined;\n  return configuration.apps.find(app => app.componentName === paths[1]);\n};\nconst getMicroAppConfigByName = (name, configuration) => configuration.apps.find(app => app.componentName === name);\nconst isElementEmpty = element => !element.hasChildNodes();\nconst hasElementRenderedChild = (element, componentName) => element.firstChild.nodeName.toUpperCase() === componentName.toUpperCase();\n\n//# sourceURL=webpack://microfrontendly/./src/utils/utils.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://microfrontendly/multi_./src/index.js?");

/***/ })

/******/ });
});