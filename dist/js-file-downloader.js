(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("jsFileDownloader", [], factory);
	else if(typeof exports === 'object')
		exports["jsFileDownloader"] = factory();
	else
		root["jsFileDownloader"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/exception.js":
/*!**************************!*\
  !*** ./src/exception.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

module.exports.downloadException = /*#__PURE__*/function (_Error) {
  _inherits(downloadException, _Error);

  var _super = _createSuper(downloadException);

  function downloadException(message, request) {
    var _this;

    _classCallCheck(this, downloadException);

    _this = _super.call(this, "Downloader error: ".concat(message));
    _this.request = request;
    _this.name = 'downloadException';
    return _this;
  }

  return downloadException;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * JS File Downloader v 1.1.14
 * https://github.com/AleeeKoi/js-file-downloader
 *
 * Copyright Alessandro Pellizzari
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var downloadException = __webpack_require__(/*! ./exception */ "./src/exception.js").downloadException;

var defaultParams = {
  timeout: 40000,
  mobileDisabled: true,
  headers: [],
  forceDesktopMode: false,
  autoStart: true,
  withCredentials: false,
  method: 'GET',
  nameCallback: function nameCallback(name) {
    return name;
  }
};

var jsFileDownloader = /*#__PURE__*/function () {
  /**
   * You need to define a {String} "url" params and optionally others
   * * {String} filename
   * * {Int} timeout in ms
   * * {Boolean} mobileDisabled
   * * {Function} process call on request event
   * @param {Object} customParams
   */
  function jsFileDownloader() {
    var customParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, jsFileDownloader);

    this.params = Object.assign({}, defaultParams, customParams);
    this.link = this.createLink();
    this.request = null;
    if (this.params.autoStart) return this.downloadFile();
    return this;
  }

  _createClass(jsFileDownloader, [{
    key: "start",
    value: function start() {
      return this.downloadFile();
    }
  }, {
    key: "downloadFile",
    value: function downloadFile() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.initDonwload(resolve, reject);
      });
    }
  }, {
    key: "initDonwload",
    value: function initDonwload(resolve, reject) {
      var _this2 = this;

      // fallback for old browsers
      if (!('download' in this.link) || this.isMobile()) {
        this.link.target = '_blank';
        this.link.href = this.params.url;
        this.clickLink();
        return resolve();
      }

      this.request = this.createRequest();

      if (!this.params.url) {
        return reject('Downloader error: url param not defined!');
      }

      this.request.onload = function () {
        if (parseInt(_this2.request.status, 10) !== 200) {
          // eslint-disable-next-line new-cap
          return reject(new downloadException("status code [".concat(_this2.request.status, "]"), _this2.request));
        }

        _this2.startDownload();

        return resolve(_this2);
      };

      this.request.ontimeout = function () {
        reject(new Error('Downloader error: request timeout'));
      };

      this.request.onerror = function (e) {
        reject(e);
      };

      this.request.send();
      return this;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return !this.params.forceDesktopMode && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }, {
    key: "createRequest",
    value: function createRequest() {
      var request = new XMLHttpRequest();
      request.open(this.params.method, this.params.url, true);
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      this.params.headers.forEach(function (header) {
        request.setRequestHeader(header.name, header.value);
      });
      request.responseType = 'arraybuffer';

      if (this.params.process && typeof this.params.process === 'function') {
        request.addEventListener('progress', this.params.process);
      }

      request.timeout = this.params.timeout;
      request.withCredentials = !!this.params.withCredentials || !!this.params.includeCredentials;
      return request;
    }
  }, {
    key: "getFileName",
    value: function getFileName() {
      // Forcing file name
      if (typeof this.params.filename === 'string') {
        return this.params.filename;
      } // Trying to get file name from response header


      var content = this.request.getResponseHeader('Content-Disposition');
      var contentParts = [];

      if (content) {
        contentParts = content.replace(/["']/g, '').match(/filename\*?=([^;]+)/);
      }

      var extractedName = contentParts && contentParts.length >= 1 ? contentParts[1] : this.params.url.split('/').pop().split('?')[0];
      return this.params.nameCallback(extractedName);
    }
  }, {
    key: "createLink",
    value: function createLink() {
      var link = document.createElement('a');
      link.style.display = 'none';
      return link;
    }
  }, {
    key: "clickLink",
    value: function clickLink() {
      var event;

      try {
        event = new MouseEvent('click');
      } catch (e) {
        event = document.createEvent('MouseEvent');
        event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      }

      this.link.dispatchEvent(event);
    }
  }, {
    key: "getFile",
    value: function getFile(response, fileName) {
      var file = null;
      var options = {
        type: 'application/octet-stream'
      };

      try {
        file = new File([response], fileName, options);
      } catch (e) {
        file = new Blob([response], options);
        file.name = fileName;
        file.lastModifiedDate = new Date();
      }

      return file;
    }
  }, {
    key: "startDownload",
    value: function startDownload() {
      var fileName = this.getFileName();
      var file = this.getFile(this.request.response, fileName); // native IE

      if ('msSaveOrOpenBlob' in window.navigator) {
        return window.navigator.msSaveOrOpenBlob(file, fileName);
      }

      var objectUrl = window.URL.createObjectURL(file);
      this.link.href = objectUrl;
      this.link.download = fileName;
      this.clickLink();
      setTimeout(function () {
        (window.URL || window.webkitURL || window).revokeObjectURL(objectUrl);
      }, 1000 * 40);
      return this;
    }
  }]);

  return jsFileDownloader;
}();

module.exports = jsFileDownloader;

/***/ })

/******/ });
});
//# sourceMappingURL=js-file-downloader.js.map