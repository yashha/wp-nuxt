(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WPAPI"] = factory();
	else
		root["WPAPI"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wpapi.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/constructors/wp-request.js":
/*!****************************************!*\
  !*** ./lib/constructors/wp-request.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

var alphaNumericSort = __webpack_require__(/*! ../util/alphanumeric-sort */ "./lib/util/alphanumeric-sort.js");

var keyValToObj = __webpack_require__(/*! ../util/key-val-to-obj */ "./lib/util/key-val-to-obj.js");

var paramSetter = __webpack_require__(/*! ../util/parameter-setter */ "./lib/util/parameter-setter.js");

var objectReduce = __webpack_require__(/*! ../util/object-reduce */ "./lib/util/object-reduce.js");

var unique = __webpack_require__(/*! ../util/unique */ "./lib/util/unique.js");
/**
 * WPRequest is the base API request object constructor
 *
 * @constructor WPRequest
 * @param {Object} options A hash of options for the WPRequest instance
 * @param {String} options.endpoint The endpoint URI for the invoking WPAPI instance
 * @param {Object} options.transport An object of http transport methods (get, post, etc)
 * @param {String} [options.username] A username for authenticating API requests
 * @param {String} [options.password] A password for authenticating API requests
 * @param {String} [options.nonce] A WP nonce for use with cookie authentication
 */


function WPRequest(options) {
  /**
   * Configuration options for the request
   *
   * @property _options
   * @type Object
   * @private
   * @default {}
   */
  this._options = [// Whitelisted options keys
  'auth', 'endpoint', 'headers', 'username', 'password', 'nonce'].reduce(function (localOptions, key) {
    if (options && options[key]) {
      localOptions[key] = options[key];
    }

    return localOptions;
  }, {});
  /**
   * The HTTP transport methods (.get, .post, .put, .delete, .head) to use for this request
   *
   * @property transport
   * @type {Object}
   * @private
   */

  this.transport = options && options.transport;
  /**
   * A hash of query parameters
   * This is used to store the values for supported query parameters like ?_embed
   *
   * @property _params
   * @type Object
   * @private
   * @default {}
   */

  this._params = {};
  /**
   * Methods supported by this API request instance:
   * Individual endpoint handlers specify their own subset of supported methods
   *
   * @property _supportedMethods
   * @type Array
   * @private
   * @default [ 'head', 'get', 'put', 'post', 'delete' ]
   */

  this._supportedMethods = ['head', 'get', 'put', 'post', 'delete'];
  /**
   * A hash of values to assemble into the API request path
   * (This will be overwritten by each specific endpoint handler constructor)
   *
   * @property _path
   * @type Object
   * @private
   * @default {}
   */

  this._path = {};
} // Private helper methods
// ======================

/**
 * Identity function for use within invokeAndPromisify()
 * @private
 */


var identity = function identity(value) {
  return value;
};
/**
 * Process arrays of taxonomy terms into query parameters.
 * All terms listed in the arrays will be required (AND behavior).
 *
 * This method will not be called with any values unless we are handling
 * an endpoint with the filter mixin; however, since parameter handling
 * (and therefore `_renderQuery()`) are part of WPRequest itself, this
 * helper method lives here alongside the code where it is used.
 *
 * @example
 *     prepareTaxonomies({
 *         tag: [ 'tag1 ', 'tag2' ], // by term slug
 *         cat: [ 7 ] // by term ID
 *     }) === {
 *         tag: 'tag1+tag2',
 *         cat: '7'
 *     }
 *
 * @private
 * @param {Object} taxonomyFilters An object of taxonomy term arrays, keyed by taxonomy name
 * @returns {Object} An object of prepareFilters-ready query arg and query param value pairs
 */


function prepareTaxonomies(taxonomyFilters) {
  if (!taxonomyFilters) {
    return {};
  }

  return objectReduce(taxonomyFilters, function (result, terms, key) {
    // Trim whitespace and concatenate multiple terms with +
    result[key] = terms // Coerce term into a string so that trim() won't fail
    .map(function (term) {
      return (term + '').trim().toLowerCase();
    }).join('+');
    return result;
  }, {});
}
/**
 * Return an object with any properties with undefined, null or empty string
 * values removed.
 *
 * @example
 *
 *     populated({
 *       a: 'a',
 *       b: '',
 *       c: null
 *     }); // { a: 'a' }
 *
 * @private
 * @param {Object} obj An object of key/value pairs
 * @returns {Object} That object with all empty values removed
 */


var populated = function populated(obj) {
  if (!obj) {
    return obj;
  }

  return objectReduce(obj, function (values, val, key) {
    if (val !== undefined && val !== null && val !== '') {
      values[key] = val;
    }

    return values;
  }, {});
};
/**
 * Assert whether a provided URL component is "valid" by checking it against
 * an array of registered path component validator methods for that level of
 * the URL path.
 *
 * @private
 * @param {object[]} levelDefinitions An array of Level Definition objects
 * @param {string}   levelContents    The URL path string that has been specified
 *                                    for use on the provided level
 * @returns {boolean} Whether the provided input matches any of the provided
 * level validation functions
 */


var validatePathLevel = function validatePathLevel(levelDefinitions, levelContents) {
  // One "level" may have multiple options, as a route tree is a branching
  // structure. We consider a level "valid" if the provided levelContents
  // match any of the available validators.
  var valid = levelDefinitions.reduce(function (anyOptionValid, levelOption) {
    if (!levelOption.validate) {
      // If there is no validator function, the level is implicitly valid
      return true;
    }

    return anyOptionValid || levelOption.validate(levelContents);
  }, false);

  if (!valid) {
    throw new Error(['Invalid path component:', levelContents, // awkward pluralization support:
    'does not match' + (levelDefinitions.length > 1 ? ' any of' : ''), levelDefinitions.reduce(function (components, levelOption) {
      return components.concat(levelOption.component);
    }, []).join(', ')].join(' '));
  }
}; // (Semi-)Private Prototype Methods
// ================================

/**
 * Process the endpoint query's filter objects into a valid query string.
 * Nested objects and Array properties are rendered with indexed array syntax.
 *
 * @example
 *     _renderQuery({ p1: 'val1', p2: 'val2' });  // ?p1=val1&p2=val2
 *     _renderQuery({ obj: { prop: 'val' } });    // ?obj[prop]=val
 *     _renderQuery({ arr: [ 'val1', 'val2' ] }); // ?arr[0]=val1&arr[1]=val2
 *
 * @private
 *
 * @method _renderQuery
 * @returns {String} A query string representing the specified filter parameters
 */


WPRequest.prototype._renderQuery = function () {
  // Build the full query parameters object
  var queryParams = _objectSpread({}, populated(this._params)); // Prepare any taxonomies and merge with other filter values


  var taxonomies = prepareTaxonomies(this._taxonomyFilters);
  queryParams.filter = _objectSpread({}, populated(this._filters), {}, taxonomies); // Parse query parameters object into a query string, sorting the object
  // properties by alphabetical order (consistent property ordering can make
  // for easier caching of request URIs)

  var queryString = qs.stringify(queryParams, {
    arrayFormat: 'brackets'
  }).split('&').sort().join('&'); // Check if the endpoint contains a previous query and set the query character accordingly.

  var queryCharacter = /\?/.test(this._options.endpoint) ? '&' : '?'; // Prepend a "?" (or a "&") if a query is present, and return.

  return queryString === '' ? '' : queryCharacter + queryString;
};
/**
 * Validate & assemble a path string from the request object's _path
 *
 * @private
 * @returns {String} The rendered path
 */


WPRequest.prototype._renderPath = function () {
  // Call validatePath: if the provided path components are not well-formed,
  // an error will be thrown
  this.validatePath();
  var pathParts = this._path;
  var orderedPathParts = Object.keys(pathParts).sort(function (a, b) {
    var intA = parseInt(a, 10);
    var intB = parseInt(b, 10);
    return intA - intB;
  }).map(function (pathPartKey) {
    return pathParts[pathPartKey];
  }); // Combine all parts of the path together, filtered to omit any components
  // that are unspecified or empty strings, to create the full path template

  var path = [this._namespace].concat(orderedPathParts).filter(identity).join('/');
  return path;
}; // Public Prototype Methods
// ========================

/**
 * Parse the request into a WordPress API request URI string
 *
 * @method
 * @returns {String} The URI for the HTTP request to be sent
 */


WPRequest.prototype.toString = function () {
  // Render the path to a string
  var path = this._renderPath(); // Render the query string


  var queryStr = this._renderQuery();

  return this._options.endpoint + path + queryStr;
};
/**
 * Set a component of the resource URL itself (as opposed to a query parameter)
 *
 * If a path component has already been set at this level, throw an error:
 * requests are meant to be transient, so any re-writing of a previously-set
 * path part value is likely to be a mistake.
 *
 * @method
 * @chainable
 * @param {Number|String} level A "level" of the path to set, e.g. "1" or "2"
 * @param {Number|String} val   The value to set at that path part level
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.setPathPart = function (level, val) {
  if (this._path[level]) {
    throw new Error('Cannot overwrite value ' + this._path[level]);
  }

  this._path[level] = val;
  return this;
};
/**
 * Validate whether the specified path parts are valid for this endpoint
 *
 * "Path parts" are non-query-string URL segments, like "some" "path" in the URL
 * `mydomain.com/some/path?and=a&query=string&too`. Because a well-formed path
 * is necessary to execute a successful API request, we throw an error if the
 * user has omitted a value (such as `/some/[missing component]/url`) or has
 * provided a path part value that does not match the regular expression the
 * API uses to goven that segment.
 *
 * @method
 * @chainable
 * @returns {WPRequest} The WPRequest instance (for chaining), if no errors were found
 */


WPRequest.prototype.validatePath = function () {
  // Iterate through all _specified_ levels of this endpoint
  var specifiedLevels = Object.keys(this._path).map(function (level) {
    return parseInt(level, 10);
  }).filter(function (pathPartKey) {
    return !isNaN(pathPartKey);
  });
  var maxLevel = Math.max.apply(null, specifiedLevels); // Ensure that all necessary levels are specified

  var path = [];
  var valid = true;

  for (var level = 0; level <= maxLevel; level++) {
    if (!this._levels || !this._levels[level]) {
      continue;
    }

    if (this._path[level]) {
      // Validate the provided path level against all available path validators
      validatePathLevel(this._levels[level], this._path[level]); // Add the path value to the array

      path.push(this._path[level]);
    } else {
      path.push(' ??? ');
      valid = false;
    }
  }

  if (!valid) {
    throw new Error('Incomplete URL! Missing component: /' + path.join('/'));
  }

  return this;
};
/**
 * Set a parameter to render into the final query URI.
 *
 * @method
 * @chainable
 * @param {String|Object} props The name of the parameter to set, or an object containing
 *                              parameter keys and their corresponding values
 * @param {String|Number|Array} [value] The value of the parameter being set
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.param = function (props, value) {
  var _this = this;

  if (!props || typeof props === 'string' && value === undefined) {
    // We have no property to set, or no value to set for that property
    return this;
  } // We can use the same iterator function below to handle explicit key-value
  // pairs if we convert them into to an object we can iterate over:


  if (typeof props === 'string') {
    props = keyValToObj(props, value);
  } // Iterate through the properties


  Object.keys(props).forEach(function (key) {
    var value = props[key]; // Arrays should be de-duped and sorted

    if (Array.isArray(value)) {
      value = unique(value).sort(alphaNumericSort);
    } // Set the value


    _this._params[key] = value;
  });
  return this;
}; // Globally-applicable parameters that impact the shape of the request or response
// ===============================================================================

/**
 * Set the context of the request. Used primarily to expose private values on a
 * request object by setting the context to "edit".
 *
 * @method
 * @chainable
 * @param {String} context The context to set on the request
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.context = paramSetter('context');
/**
 * Convenience wrapper for `.context( 'edit' )`
 *
 * @method
 * @chainable
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */

WPRequest.prototype.edit = function () {
  return this.context('edit');
};
/**
 * Return embedded resources as part of the response payload.
 *
 * @method
 * @chainable
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.embed = function () {
  return this.param('_embed', true);
}; // Parameters supported by all/nearly all default collections
// ==========================================================

/**
 * Set the pagination of a request. Use in conjunction with `.perPage()` for explicit
 * pagination handling. (The number of pages in a response can be retrieved from the
 * response's `_paging.totalPages` property.)
 *
 * @method
 * @chainable
 * @param {Number} pageNumber The page number of results to retrieve
 * @returns The request instance (for chaining)
 */


WPRequest.prototype.page = paramSetter('page');
/**
 * Set the number of items to be returned in a page of responses.
 *
 * @method
 * @chainable
 * @param {Number} itemsPerPage The number of items to return in one page of results
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.perPage = paramSetter('per_page');
/**
 * Set an arbitrary offset to retrieve items from a specific point in a collection.
 *
 * @method
 * @chainable
 * @param {Number} offsetNumber The number of items by which to offset the response
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.offset = paramSetter('offset');
/**
 * Change the sort direction of a returned collection
 *
 * @example <caption>order comments chronologically (oldest first)</caption>
 *
 *     site.comments().order( 'asc' )...
 *
 * @method
 * @chainable
 * @param {String} direction The order to use when sorting the response
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.order = paramSetter('order');
/**
 * Order a collection by a specific field
 *
 * @method
 * @chainable
 * @param {String} field The field by which to order the response
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.orderby = paramSetter('orderby');
/**
 * Filter results to those matching the specified search terms.
 *
 * @method
 * @chainable
 * @param {String} searchString A string to search for within post content
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.search = paramSetter('search');
/**
 * Include specific resource IDs in the response collection.
 *
 * @method
 * @chainable
 * @param {Number|Number[]} ids An ID or array of IDs to include
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.include = paramSetter('include');
/**
 * Exclude specific resource IDs in the response collection.
 *
 * @method
 * @chainable
 * @param {Number|Number[]} ids An ID or array of IDs to exclude
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.exclude = paramSetter('exclude');
/**
 * Query a collection for members with a specific slug.
 *
 * @method
 * @chainable
 * @param {String} slug A post slug (slug), e.g. "hello-world"
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.slug = paramSetter('slug'); // HTTP Transport Prototype Methods
// ================================
// Chaining methods
// ================

/**
 * Set the namespace of the request, e.g. to specify the API root for routes
 * registered by wp core v2 ("wp/v2") or by any given plugin. Any previously-
 * set namespace will be overwritten by subsequent calls to the method.
 *
 * @method
 * @chainable
 * @param {String} namespace A namespace string, e.g. "wp/v2"
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */

WPRequest.prototype.namespace = function (namespace) {
  this._namespace = namespace;
  return this;
};
/**
 * Set a request to use authentication, and optionally provide auth credentials
 *
 * If auth credentials were already specified when the WPAPI instance was created, calling
 * `.auth` on the request chain will set that request to use the existing credentials:
 *
 * @example <caption>use existing credentials</caption>
 *
 *     request.auth().get...
 *
 * Alternatively, a username & password (or nonce) can be explicitly passed into `.auth`:
 *
 * @example <caption>use explicit basic authentication credentials</caption>
 *
 *     request.auth({
 *       username: 'admin',
 *       password: 'super secure'
 *     }).get...
 *
 * @example <caption>use a nonce for cookie authentication</caption>
 *
 *     request.auth({
 *       nonce: 'somenonce'
 *     })...
 *
 * @method
 * @chainable
 * @param {Object} credentials            An object with 'username' and 'password' string
 *                                        properties, or else a 'nonce' property
 * @param {String} [credentials.username] A WP-API Basic HTTP Authentication username
 * @param {String} [credentials.password] A WP-API Basic HTTP Authentication password
 * @param {String} [credentials.nonce]    A WP nonce for use with cookie authentication
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.auth = function (credentials) {
  if (_typeof(credentials) === 'object') {
    if (typeof credentials.username === 'string') {
      this._options.username = credentials.username;
    }

    if (typeof credentials.password === 'string') {
      this._options.password = credentials.password;
    }

    if (credentials.nonce) {
      this._options.nonce = credentials.nonce;
    }
  } // Set the "auth" options flag that will force authentication on this request


  this._options.auth = true;
  return this;
};
/**
 * Specify a file or a file buffer to attach to the request, for use when
 * creating a new Media item
 *
 * @example <caption>within a server context</caption>
 *
 *     wp.media()
 *       // Pass .file() the file system path to a file to upload
 *       .file( '/path/to/file.jpg' )
 *       .create({})...
 *
 *     wp.media()
 *       // Pass .file() an image as a Buffer object, and a filename string
 *       .file( imgBuffer, 'desired-title.jpg' )
 *       .create({})...
 *
 * @example <caption>within a browser context</caption>
 *
 *     wp.media()
 *       // Pass .file() the file reference from an HTML file input
 *       .file( document.querySelector( 'input[type="file"]' ).files[0] )
 *       .create({})...
 *
 * @method
 * @chainable
 * @param {string|object} file   A path to a file (in Node) or an file object
 *                               (Node or Browser) to attach to the request
 * @param {string}        [name] A filename to use for the file, required when
 *                               providing file data as a Buffer object
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.file = function (file, name) {
  if (global.Buffer && file instanceof global.Buffer && !name) {
    throw new Error('.file(): File name is a required argument when uploading a Buffer');
  }

  this._attachment = file; // Explicitly set to undefined if not provided, to override any previously-
  // set attachment name property that might exist from a prior `.file()` call

  this._attachmentName = name ? name : undefined;
  return this;
}; // HTTP Methods: Public Interface
// ==============================

/**
 * Specify one or more headers to send with the dispatched HTTP request.
 *
 * @example <caption>Set a single header to be used on this request</caption>
 *
 *     request.setHeaders( 'Authorization', 'Bearer trustme' )...
 *
 * @example <caption>Set multiple headers to be used by this request</caption>
 *
 *     request.setHeaders({
 *       Authorization: 'Bearer comeonwereoldfriendsright',
 *       'Accept-Language': 'en-CA'
 *     })...
 *
 * @since 1.1.0
 * @method
 * @chainable
 * @param {String|Object} headers The name of the header to set, or an object of
 *                                header names and their associated string values
 * @param {String}        [value] The value of the header being set
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.setHeaders = function (headers, value) {
  // We can use the same iterator function below to handle explicit key-value
  // pairs if we convert them into to an object we can iterate over:
  if (typeof headers === 'string') {
    headers = keyValToObj(headers, value);
  }

  this._options.headers = _objectSpread({}, this._options.headers || {}, {}, headers);
  return this;
};
/**
 * Get (download the data for) the specified resource
 *
 * @method
 * @async
 * @returns {Promise} A promise to the results of the HTTP request
 */


WPRequest.prototype.get = function () {
  return this.transport.get(this);
};
/**
 * Get the headers for the specified resource
 *
 * @method
 * @async
 * @returns {Promise} A promise to the header results of the HTTP request
 */


WPRequest.prototype.headers = function () {
  return this.transport.head(this);
};
/**
 * Create the specified resource with the provided data
 *
 * This is the public interface for creating POST requests
 *
 * @method
 * @async
 * @param {Object} data The data for the POST request
 * @returns {Promise} A promise to the results of the HTTP request
 */


WPRequest.prototype.create = function (data) {
  return this.transport.post(this, data);
};
/**
 * Update the specified resource with the provided data
 *
 * This is the public interface for creating PUT requests
 *
 * @method
 * @async
 * @private
 * @param {Object} data The data for the PUT request
 * @returns {Promise} A promise to the results of the HTTP request
 */


WPRequest.prototype.update = function (data) {
  return this.transport.put(this, data);
};
/**
 * Delete the specified resource
 *
 * @method
 * @async
 * @param {Object} [data] Data to send along with the DELETE request
 * @returns {Promise} A promise to the results of the HTTP request
 */


WPRequest.prototype.delete = function (data) {
  return this.transport.delete(this, data);
};
/**
 * Calling .then on a query chain will invoke the query as a GET and return a promise
 *
 * @method
 * @async
 * @param {Function} [successCallback] A callback to handle the data returned from the GET request
 * @param {Function} [failureCallback] A callback to handle any errors encountered by the request
 * @returns {Promise} A promise to the results of the HTTP request
 */


WPRequest.prototype.then = function (successCallback, failureCallback) {
  return this.transport.get(this).then(successCallback, failureCallback);
};

module.exports = WPRequest;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib/data/default-routes.json":
/*!**************************************!*\
  !*** ./lib/data/default-routes.json ***!
  \**************************************/
/*! exports provided: /, /oembed/1.0, /oembed/1.0/embed, /oembed/1.0/proxy, /wp/v2, /wp/v2/posts, /wp/v2/posts/(?P<id>[\d]+), /wp/v2/posts/(?P<parent>[\d]+)/revisions, /wp/v2/posts/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+), /wp/v2/posts/(?P<id>[\d]+)/autosaves, /wp/v2/posts/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+), /wp/v2/pages, /wp/v2/pages/(?P<id>[\d]+), /wp/v2/pages/(?P<parent>[\d]+)/revisions, /wp/v2/pages/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+), /wp/v2/pages/(?P<id>[\d]+)/autosaves, /wp/v2/pages/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+), /wp/v2/media, /wp/v2/media/(?P<id>[\d]+), /wp/v2/blocks, /wp/v2/blocks/(?P<id>[\d]+), /wp/v2/blocks/(?P<id>[\d]+)/autosaves, /wp/v2/blocks/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+), /wp/v2/types, /wp/v2/types/(?P<type>[\w-]+), /wp/v2/statuses, /wp/v2/statuses/(?P<status>[\w-]+), /wp/v2/taxonomies, /wp/v2/taxonomies/(?P<taxonomy>[\w-]+), /wp/v2/categories, /wp/v2/categories/(?P<id>[\d]+), /wp/v2/tags, /wp/v2/tags/(?P<id>[\d]+), /wp/v2/users, /wp/v2/users/(?P<id>[\d]+), /wp/v2/users/me, /wp/v2/comments, /wp/v2/comments/(?P<id>[\d]+), /wp/v2/search, /wp/v2/block-renderer/(?P<name>core/block), /wp/v2/block-renderer/(?P<name>core/latest-comments), /wp/v2/block-renderer/(?P<name>core/archives), /wp/v2/block-renderer/(?P<name>core/categories), /wp/v2/block-renderer/(?P<name>core/latest-posts), /wp/v2/block-renderer/(?P<name>core/shortcode), /wp/v2/settings, /wp/v2/themes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"/\":{\"namespace\":\"\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{}}}]},\"/oembed/1.0\":{\"namespace\":\"oembed/1.0\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"namespace\":{},\"context\":{}}}]},\"/oembed/1.0/embed\":{\"namespace\":\"oembed/1.0\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"url\":{},\"format\":{},\"maxwidth\":{}}}]},\"/oembed/1.0/proxy\":{\"namespace\":\"oembed/1.0\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"url\":{},\"format\":{},\"maxwidth\":{},\"maxheight\":{},\"discover\":{}}}]},\"/wp/v2\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"namespace\":{},\"context\":{}}}]},\"/wp/v2/posts\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"after\":{},\"author\":{},\"author_exclude\":{},\"before\":{},\"exclude\":{},\"include\":{},\"offset\":{},\"order\":{},\"orderby\":{},\"slug\":{},\"status\":{},\"categories\":{},\"categories_exclude\":{},\"tags\":{},\"tags_exclude\":{},\"sticky\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/posts/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\",\"PUT\",\"PATCH\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"id\":{},\"context\":{},\"password\":{}}},{\"methods\":[\"POST\",\"PUT\",\"PATCH\"],\"args\":{}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/posts/(?P<parent>[\\\\d]+)/revisions\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"parent\":{},\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"exclude\":{},\"include\":{},\"offset\":{},\"order\":{},\"orderby\":{}}}]},\"/wp/v2/posts/(?P<parent>[\\\\d]+)/revisions/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"parent\":{},\"id\":{},\"context\":{}}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/posts/(?P<id>[\\\\d]+)/autosaves\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"parent\":{},\"context\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/posts/(?P<parent>[\\\\d]+)/autosaves/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"parent\":{},\"id\":{},\"context\":{}}}]},\"/wp/v2/pages\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"after\":{},\"author\":{},\"author_exclude\":{},\"before\":{},\"exclude\":{},\"include\":{},\"menu_order\":{},\"offset\":{},\"order\":{},\"orderby\":{},\"parent\":{},\"parent_exclude\":{},\"slug\":{},\"status\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/pages/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\",\"PUT\",\"PATCH\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"id\":{},\"context\":{},\"password\":{}}},{\"methods\":[\"POST\",\"PUT\",\"PATCH\"],\"args\":{}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/pages/(?P<parent>[\\\\d]+)/revisions\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"parent\":{},\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"exclude\":{},\"include\":{},\"offset\":{},\"order\":{},\"orderby\":{}}}]},\"/wp/v2/pages/(?P<parent>[\\\\d]+)/revisions/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"parent\":{},\"id\":{},\"context\":{}}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/pages/(?P<id>[\\\\d]+)/autosaves\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"parent\":{},\"context\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/pages/(?P<parent>[\\\\d]+)/autosaves/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"parent\":{},\"id\":{},\"context\":{}}}]},\"/wp/v2/media\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"after\":{},\"author\":{},\"author_exclude\":{},\"before\":{},\"exclude\":{},\"include\":{},\"offset\":{},\"order\":{},\"orderby\":{},\"parent\":{},\"parent_exclude\":{},\"slug\":{},\"status\":{},\"media_type\":{},\"mime_type\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/media/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\",\"PUT\",\"PATCH\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"id\":{},\"context\":{}}},{\"methods\":[\"POST\",\"PUT\",\"PATCH\"],\"args\":{}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/blocks\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"after\":{},\"before\":{},\"exclude\":{},\"include\":{},\"offset\":{},\"order\":{},\"orderby\":{},\"slug\":{},\"status\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/blocks/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\",\"PUT\",\"PATCH\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"id\":{},\"context\":{},\"password\":{}}},{\"methods\":[\"POST\",\"PUT\",\"PATCH\"],\"args\":{}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/blocks/(?P<id>[\\\\d]+)/autosaves\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"parent\":{},\"context\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/blocks/(?P<parent>[\\\\d]+)/autosaves/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"parent\":{},\"id\":{},\"context\":{}}}]},\"/wp/v2/types\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{}}}]},\"/wp/v2/types/(?P<type>[\\\\w-]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"type\":{},\"context\":{}}}]},\"/wp/v2/statuses\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{}}}]},\"/wp/v2/statuses/(?P<status>[\\\\w-]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"status\":{},\"context\":{}}}]},\"/wp/v2/taxonomies\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"type\":{}}}]},\"/wp/v2/taxonomies/(?P<taxonomy>[\\\\w-]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"taxonomy\":{},\"context\":{}}}]},\"/wp/v2/categories\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"exclude\":{},\"include\":{},\"order\":{},\"orderby\":{},\"hide_empty\":{},\"parent\":{},\"post\":{},\"slug\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/categories/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\",\"PUT\",\"PATCH\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"id\":{},\"context\":{}}},{\"methods\":[\"POST\",\"PUT\",\"PATCH\"],\"args\":{}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/tags\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"exclude\":{},\"include\":{},\"offset\":{},\"order\":{},\"orderby\":{},\"hide_empty\":{},\"post\":{},\"slug\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/tags/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\",\"PUT\",\"PATCH\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"id\":{},\"context\":{}}},{\"methods\":[\"POST\",\"PUT\",\"PATCH\"],\"args\":{}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/users\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"exclude\":{},\"include\":{},\"offset\":{},\"order\":{},\"orderby\":{},\"slug\":{},\"roles\":{},\"who\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/users/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\",\"PUT\",\"PATCH\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"id\":{},\"context\":{}}},{\"methods\":[\"POST\",\"PUT\",\"PATCH\"],\"args\":{}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/users/me\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\",\"PUT\",\"PATCH\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{}}},{\"methods\":[\"POST\",\"PUT\",\"PATCH\"],\"args\":{}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/comments\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"after\":{},\"author\":{},\"author_exclude\":{},\"author_email\":{},\"before\":{},\"exclude\":{},\"include\":{},\"offset\":{},\"order\":{},\"orderby\":{},\"parent\":{},\"parent_exclude\":{},\"post\":{},\"status\":{},\"type\":{},\"password\":{}}},{\"methods\":[\"POST\"],\"args\":{}}]},\"/wp/v2/comments/(?P<id>[\\\\d]+)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\",\"PUT\",\"PATCH\",\"DELETE\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"id\":{},\"context\":{},\"password\":{}}},{\"methods\":[\"POST\",\"PUT\",\"PATCH\"],\"args\":{}},{\"methods\":[\"DELETE\"],\"args\":{}}]},\"/wp/v2/search\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"type\":{},\"subtype\":{}}}]},\"/wp/v2/block-renderer/(?P<name>core/block)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"name\":{},\"context\":{},\"attributes\":{},\"post_id\":{}}}]},\"/wp/v2/block-renderer/(?P<name>core/latest-comments)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"name\":{},\"context\":{},\"attributes\":{},\"post_id\":{}}}]},\"/wp/v2/block-renderer/(?P<name>core/archives)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"name\":{},\"context\":{},\"attributes\":{},\"post_id\":{}}}]},\"/wp/v2/block-renderer/(?P<name>core/categories)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"name\":{},\"context\":{},\"attributes\":{},\"post_id\":{}}}]},\"/wp/v2/block-renderer/(?P<name>core/latest-posts)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"name\":{},\"context\":{},\"attributes\":{},\"post_id\":{}}}]},\"/wp/v2/block-renderer/(?P<name>core/shortcode)\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"name\":{},\"context\":{},\"attributes\":{},\"post_id\":{}}}]},\"/wp/v2/settings\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\",\"POST\",\"PUT\",\"PATCH\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{}},{\"methods\":[\"POST\",\"PUT\",\"PATCH\"],\"args\":{}}]},\"/wp/v2/themes\":{\"namespace\":\"wp/v2\",\"methods\":[\"GET\"],\"endpoints\":[{\"methods\":[\"GET\"],\"args\":{\"context\":{},\"page\":{},\"per_page\":{},\"search\":{},\"status\":{}}}]}}");

/***/ }),

/***/ "./lib/endpoint-factories.js":
/*!***********************************!*\
  !*** ./lib/endpoint-factories.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Take a WP route string (with PCRE named capture groups), `such as /author/(?P<id>\d+)`,
 * and generate request handler factory methods for each represented endpoint.
 *
 * @module endpoint-factories
 */


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createResourceHandlerSpec = __webpack_require__(/*! ./resource-handler-spec */ "./lib/resource-handler-spec.js").create;

var createEndpointRequest = __webpack_require__(/*! ./endpoint-request */ "./lib/endpoint-request.js").create;

var objectReduce = __webpack_require__(/*! ./util/object-reduce */ "./lib/util/object-reduce.js");
/**
 * Given an array of route definitions and a specific namespace for those routes,
 * recurse through the node tree representing all possible routes within the
 * provided namespace to define path value setters (and corresponding property
 * validators) for all possible variants of each resource's API endpoints.
 *
 * @method generate
 * @param {string} namespace         The namespace string for these routes
 * @param {object} routesByNamespace A dictionary of namespace - route definition
 *                                   object pairs as generated from buildRouteTree,
 *                                   where each route definition object is a dictionary
 *                                   keyed by route definition strings
 * @returns {object} A dictionary of endpoint request handler factories
 */


function generateEndpointFactories(routesByNamespace) {
  return objectReduce(routesByNamespace, function (namespaces, routeDefinitions, namespace) {
    // Create
    namespaces[namespace] = objectReduce(routeDefinitions, function (handlers, routeDef, resource) {
      var handlerSpec = createResourceHandlerSpec(routeDef, resource);
      var EndpointRequest = createEndpointRequest(handlerSpec, resource, namespace); // "handler" object is now fully prepared; create the factory method that
      // will instantiate and return a handler instance

      handlers[resource] = function (options) {
        return new EndpointRequest(_objectSpread({}, this._options, {}, options));
      }; // Expose the constructor as a property on the factory function, so that
      // auto-generated endpoint request constructors may be further customized
      // when needed


      handlers[resource].Ctor = EndpointRequest;
      return handlers;
    }, {});
    return namespaces;
  }, {});
}

module.exports = {
  generate: generateEndpointFactories
};

/***/ }),

/***/ "./lib/endpoint-request.js":
/*!*********************************!*\
  !*** ./lib/endpoint-request.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module endpoint-request
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WPRequest = __webpack_require__(/*! ./constructors/wp-request */ "./lib/constructors/wp-request.js");

var mixins = __webpack_require__(/*! ./mixins */ "./lib/mixins/index.js");

var applyMixin = __webpack_require__(/*! ./util/apply-mixin */ "./lib/util/apply-mixin.js");
/**
 * Create an endpoint request handler constructor for a specific resource tree
 *
 * @method create
 * @param {Object} handlerSpec A resource handler specification object
 * @param {String} resource    The root resource of requests created from the returned factory
 * @param {String} namespace   The namespace string for the returned factory's handlers
 * @returns {Function} A constructor inheriting from {@link WPRequest}
 */


function createEndpointRequest(handlerSpec, resource, namespace) {
  // Create the constructor function for this endpoint
  var EndpointRequest =
  /*#__PURE__*/
  function (_WPRequest) {
    _inherits(EndpointRequest, _WPRequest);

    function EndpointRequest(options) {
      var _this;

      _classCallCheck(this, EndpointRequest);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(EndpointRequest).call(this, options));
      /**
       * Semi-private instance property specifying the available URL path options
       * for this endpoint request handler, keyed by ascending whole numbers.
       *
       * @property _levels
       * @type {object}
       * @private
       */

      _this._levels = handlerSpec._levels; // Configure handler for this endpoint's root URL path & set namespace

      _this.setPathPart(0, resource).namespace(namespace);

      return _this;
    }

    return EndpointRequest;
  }(WPRequest); // Mix in all available shortcut methods for GET request query parameters that
  // are valid within this endpoint tree


  if (_typeof(handlerSpec._getArgs) === 'object') {
    Object.keys(handlerSpec._getArgs).forEach(function (supportedQueryParam) {
      var mixinsForParam = mixins[supportedQueryParam]; // Only proceed if there is a mixin available AND the specified mixins will
      // not overwrite any previously-set prototype method

      if (_typeof(mixinsForParam) === 'object') {
        Object.keys(mixinsForParam).forEach(function (methodName) {
          applyMixin(EndpointRequest.prototype, methodName, mixinsForParam[methodName]);
        });
      }
    });
  }

  Object.keys(handlerSpec._setters).forEach(function (setterFnName) {
    // Only assign setter functions if they do not overwrite preexisting methods
    if (!EndpointRequest.prototype[setterFnName]) {
      EndpointRequest.prototype[setterFnName] = handlerSpec._setters[setterFnName];
    }
  });
  return EndpointRequest;
}

module.exports = {
  create: createEndpointRequest
};

/***/ }),

/***/ "./lib/mixins/filters.js":
/*!*******************************!*\
  !*** ./lib/mixins/filters.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module mixins/filters
 */


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alphaNumericSort = __webpack_require__(/*! ../util/alphanumeric-sort */ "./lib/util/alphanumeric-sort.js");

var keyValToObj = __webpack_require__(/*! ../util/key-val-to-obj */ "./lib/util/key-val-to-obj.js");

var unique = __webpack_require__(/*! ../util/unique */ "./lib/util/unique.js");
/**
 * Filter methods that can be mixed in to a request constructor's prototype to
 * allow that request to take advantage of the `?filter[]=` aliases for WP_Query
 * parameters for collection endpoints, when available.
 *
 * @mixin filters
 */


var filterMixins = {}; // Filter Methods
// ==============

/**
 * Specify key-value pairs by which to filter the API results (commonly used
 * to retrieve only posts meeting certain criteria, such as posts within a
 * particular category or by a particular author).
 *
 * @example
 *
 *     // Set a single property:
 *     wp.filter( 'post_type', 'cpt_event' )...
 *
 *     // Set multiple properties at once:
 *     wp.filter({
 *         post_status: 'publish',
 *         category_name: 'news'
 *     })...
 *
 *     // Chain calls to .filter():
 *     wp.filter( 'post_status', 'publish' ).filter( 'category_name', 'news' )...
 *
 * @method filter
 * @chainable
 * @param {String|Object} props A filter property name string, or object of name/value pairs
 * @param {String|Number|Array} [value] The value(s) corresponding to the provided filter property
 * @returns The request instance (for chaining)
 */

filterMixins.filter = function (props, value) {
  if (!props || typeof props === 'string' && value === undefined) {
    // We have no filter to set, or no value to set for that filter
    return this;
  } // convert the property name string `props` and value `value` into an object


  if (typeof props === 'string') {
    props = keyValToObj(props, value);
  }

  this._filters = _objectSpread({}, this._filters, {}, props);
  return this;
};
/**
 * Restrict the query results to posts matching one or more taxonomy terms.
 *
 * @method taxonomy
 * @chainable
 * @param {String} taxonomy The name of the taxonomy to filter by
 * @param {String|Number|Array} term A string or integer, or array thereof, representing terms
 * @returns The request instance (for chaining)
 */


filterMixins.taxonomy = function (taxonomy, term) {
  var termIsArray = Array.isArray(term);
  var termIsNumber = termIsArray ? term.reduce(function (allAreNumbers, term) {
    return allAreNumbers && typeof term === 'number';
  }, true) : typeof term === 'number';
  var termIsString = termIsArray ? term.reduce(function (allAreStrings, term) {
    return allAreStrings && typeof term === 'string';
  }, true) : typeof term === 'string';

  if (!termIsString && !termIsNumber) {
    throw new Error('term must be a number, string, or array of numbers or strings');
  }

  if (taxonomy === 'category') {
    if (termIsString) {
      // Query param for filtering by category slug is "category_name"
      taxonomy = 'category_name';
    } else {
      // The boolean check above ensures that if taxonomy === 'category' and
      // term is not a string, then term must be a number and therefore an ID:
      // Query param for filtering by category ID is "cat"
      taxonomy = 'cat';
    }
  } else if (taxonomy === 'post_tag') {
    // tag is used in place of post_tag in the public query variables
    taxonomy = 'tag';
  } // Ensure the taxonomy filters object is available


  this._taxonomyFilters = this._taxonomyFilters || {}; // Ensure there's an array of terms available for this taxonomy

  var taxonomyTerms = (this._taxonomyFilters[taxonomy] || []). // Insert the provided terms into the specified taxonomy's terms array
  concat(term) // Sort array
  .sort(alphaNumericSort); // De-dupe

  this._taxonomyFilters[taxonomy] = unique(taxonomyTerms, true);
  return this;
};
/**
 * Query for posts published in a given year.
 *
 * @method year
 * @chainable
 * @param {Number} year integer representation of year requested
 * @returns The request instance (for chaining)
 */


filterMixins.year = function (year) {
  return filterMixins.filter.call(this, 'year', year);
};
/**
 * Query for posts published in a given month, either by providing the number
 * of the requested month (e.g. 3), or the month's name as a string (e.g. "March")
 *
 * @method month
 * @chainable
 * @param {Number|String} month Integer for month (1) or month string ("January")
 * @returns The request instance (for chaining)
 */


filterMixins.month = function (month) {
  var monthDate;

  if (typeof month === 'string') {
    // Append a arbitrary day and year to the month to parse the string into a Date
    monthDate = new Date(Date.parse(month + ' 1, 2012')); // If the generated Date is NaN, then the passed string is not a valid month

    if (isNaN(monthDate)) {
      return this;
    } // JS Dates are 0 indexed, but the WP API requires a 1-indexed integer


    month = monthDate.getMonth() + 1;
  } // If month is a Number, add the monthnum filter to the request


  if (typeof month === 'number') {
    return filterMixins.filter.call(this, 'monthnum', month);
  }

  return this;
};
/**
 * Add the day filter into the request to retrieve posts for a given day
 *
 * @method day
 * @chainable
 * @param {Number} day Integer representation of the day requested
 * @returns The request instance (for chaining)
 */


filterMixins.day = function (day) {
  return filterMixins.filter.call(this, 'day', day);
};
/**
 * Specify that we are requesting a page by its path (specific to Page resources)
 *
 * @method path
 * @chainable
 * @param {String} path The root-relative URL path for a page
 * @returns The request instance (for chaining)
 */


filterMixins.path = function (path) {
  return filterMixins.filter.call(this, 'pagename', path);
};

module.exports = filterMixins;

/***/ }),

/***/ "./lib/mixins/index.js":
/*!*****************************!*\
  !*** ./lib/mixins/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This module defines a mapping between supported GET request query parameter
 * arguments and their corresponding mixin, if available.
 */


var filterMixins = __webpack_require__(/*! ./filters */ "./lib/mixins/filters.js");

var parameterMixins = __webpack_require__(/*! ./parameters */ "./lib/mixins/parameters.js"); // `.context`, `.embed`, and `.edit` (a shortcut for `context(edit, true)`) are
// supported by default in WPRequest, as is the base `.param` method. Any GET
// argument parameters not covered here must be set directly by using `.param`.
// The initial mixins we define are the ones where either a single property
// accepted by the API endpoint corresponds to multiple individual mixin
// functions, or where the name we use for the function diverges from that
// of the query parameter that the mixin sets.


var mixins = {
  categories: {
    categories: parameterMixins.categories,

    /** @deprecated use .categories() */
    category: parameterMixins.category
  },
  categories_exclude: {
    excludeCategories: parameterMixins.excludeCategories
  },
  tags: {
    tags: parameterMixins.tags,

    /** @deprecated use .tags() */
    tag: parameterMixins.tag
  },
  tags_exclude: {
    excludeTags: parameterMixins.excludeTags
  },
  filter: filterMixins,
  post: {
    post: parameterMixins.post,

    /** @deprecated use .post() */
    forPost: parameterMixins.post
  }
}; // All of these parameter mixins use a setter function named identically to the
// property that the function sets, but they must still be provided in wrapper
// objects so that the mixin can be `.assign`ed correctly: wrap & assign each
// setter to the mixins dictionary object.

['after', 'author', 'before', 'parent', 'password', 'status', 'sticky'].forEach(function (mixinName) {
  mixins[mixinName] = {};
  mixins[mixinName][mixinName] = parameterMixins[mixinName];
});
module.exports = mixins;

/***/ }),

/***/ "./lib/mixins/parameters.js":
/*!**********************************!*\
  !*** ./lib/mixins/parameters.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Filter methods that can be mixed in to a request constructor's prototype to
 * allow that request to take advantage of top-level query parameters for
 * collection endpoints. These are most relevant to posts, pages and CPTs, but
 * pagination helpers are applicable to any collection.
 *
 * @module mixins/parameters
 */


var paramSetter = __webpack_require__(/*! ../util/parameter-setter */ "./lib/util/parameter-setter.js");

var argumentIsNumeric = __webpack_require__(/*! ../util/argument-is-numeric */ "./lib/util/argument-is-numeric.js");
/**
 * @mixin parameters
 */


var parameterMixins = {};

var filters = __webpack_require__(/*! ./filters */ "./lib/mixins/filters.js"); // Needed for .author mixin, as author by ID is a parameter and by Name is a filter


var filter = filters.filter; // Needed for .tag and .category mixin, for deprecated query-by-slug support

var taxonomy = filters.taxonomy; // Parameter Methods
// =================

/**
 * Query for posts by a specific author.
 * This method will replace any previous 'author' query parameters that had been set.
 *
 * Note that this method will either set the "author" top-level query parameter,
 * or else the "author_name" filter parameter (when querying by nicename): this is
 * irregular as most parameter helper methods either set a top level parameter or a
 * filter, not both.
 *
 * _Usage with the author nicename string is deprecated._ Query by author ID instead.
 * If the "rest-filter" plugin is not installed, the name query will have no effect.
 *
 * @method author
 * @chainable
 * @param {String|Number} author The nicename or ID for a particular author
 * @returns The request instance (for chaining)
 */

parameterMixins.author = function (author) {
  if (author === undefined) {
    return this;
  }

  if (typeof author === 'string') {
    this.param('author', null);
    return filter.call(this, 'author_name', author);
  }

  if (typeof author === 'number') {
    filter.call(this, 'author_name', null);
    return this.param('author', author);
  }

  if (author === null) {
    filter.call(this, 'author_name', null);
    return this.param('author', null);
  }

  throw new Error('author must be either a nicename string or numeric ID');
};
/**
 * Search for hierarchical taxonomy terms that are children of the parent term
 * indicated by the provided term ID
 *
 * @example
 *
 *     wp.pages().parent( 3 ).then(function( pages ) {
 *       // console.log( 'all of these pages are nested below page ID#3:' );
 *       // console.log( pages );
 *     });
 *
 *     wp.categories().parent( 42 ).then(function( categories ) {
 *       console.log( 'all of these categories are sub-items of cat ID#42:' );
 *       console.log( categories );
 *     });
 *
 * @method parent
 * @chainable
 * @param {Number} parentId The ID of a (hierarchical) taxonomy term
 * @returns The request instance (for chaining)
 */


parameterMixins.parent = paramSetter('parent');
/**
 * Specify the post for which to retrieve terms (relevant for *e.g.* taxonomy
 * and comment collection endpoints).
 *
 * @method post
 * @chainable
 * @param {String|Number} post The ID of the post for which to retrieve terms
 * @returns The request instance (for chaining)
 */

parameterMixins.post = paramSetter('post');
/**
 * Specify the password to use to access the content of a password-protected post
 *
 * @method password
 * @chainable
 * @param {string} password A string password to access protected content within a post
 * @returns The request instance (for chaining)
 */

parameterMixins.password = paramSetter('password');
/**
 * Specify for which post statuses to return posts in a response collection
 *
 * See https://codex.wordpress.org/Post_Status -- the default post status
 * values in WordPress which are most relevant to the API are 'publish',
 * 'future', 'draft', 'pending', 'private', and 'trash'. This parameter also
 * supports passing the special value "any" to return all statuses.
 *
 * @method status
 * @chainable
 * @param {string|string[]} status A status name string or array of strings
 * @returns The request instance (for chaining)
 */

parameterMixins.status = paramSetter('status');
/**
 * Specify whether to return only, or to completely exclude, sticky posts
 *
 * @method sticky
 * @chainable
 * @param {boolean} sticky A boolean value for whether ONLY sticky posts (true) or
 *                         NO sticky posts (false) should be returned in the query
 * @returns The request instance (for chaining)
 */

parameterMixins.sticky = paramSetter('sticky'); // Taxonomy Term Filter Methods
// ============================

/**
 * Retrieve only records associated with one of the provided categories
 *
 * @method categories
 * @chainable
 * @param {String|Number|Array} categories A term ID integer or numeric string, or array thereof
 * @returns The request instance (for chaining)
 */

parameterMixins.categories = paramSetter('categories');
/**
 * Legacy wrapper for `.categories()` that uses `?filter` to query by slug if available
 *
 * @method tag
 * @deprecated Use `.categories()` and query by category IDs
 * @chainable
 * @param {String|Number|Array} tag A category term slug string, numeric ID, or array of numeric IDs
 * @returns The request instance (for chaining)
 */

parameterMixins.category = function (category) {
  if (argumentIsNumeric(category)) {
    return parameterMixins.categories.call(this, category);
  }

  return taxonomy.call(this, 'category', category);
};
/**
 * Exclude records associated with any of the provided category IDs
 *
 * @method excludeCategories
 * @chainable
 * @param {String|Number|Array} category A term ID integer or numeric string, or array thereof
 * @returns The request instance (for chaining)
 */


parameterMixins.excludeCategories = paramSetter('categories_exclude');
/**
 * Retrieve only records associated with one of the provided tag IDs
 *
 * @method tags
 * @chainable
 * @param {String|Number|Array} tags A term ID integer or numeric string, or array thereof
 * @returns The request instance (for chaining)
 */

parameterMixins.tags = paramSetter('tags');
/**
 * Legacy wrapper for `.tags()` that uses `?filter` to query by slug if available
 *
 * @method tag
 * @deprecated Use `.tags()` and query by term IDs
 * @chainable
 * @param {String|Number|Array} tag A tag term slug string, numeric ID, or array of numeric IDs
 * @returns The request instance (for chaining)
 */

parameterMixins.tag = function (tag) {
  if (argumentIsNumeric(tag)) {
    return parameterMixins.tags.call(this, tag);
  }

  return taxonomy.call(this, 'tag', tag);
};
/**
 * Exclude records associated with any of the provided tag IDs
 *
 * @method excludeTags
 * @chainable
 * @param {String|Number|Array} category A term ID integer or numeric string, or array thereof
 * @returns The request instance (for chaining)
 */


parameterMixins.excludeTags = paramSetter('tags_exclude'); // Date Methods
// ============

/**
 * Retrieve only records published before a specified date
 *
 * @example <caption>Provide an ISO 8601-compliant date string</caption>
 *
 *     wp.posts().before('2016-03-22')...
 *
 * @example <caption>Provide a JavaScript Date object</caption>
 *
 *     wp.posts().before( new Date( 2016, 03, 22 ) )...
 *
 * @method before
 * @chainable
 * @param {String|Date} date An ISO 8601-compliant date string, or Date object
 * @returns The request instance (for chaining)
 */

parameterMixins.before = function (date) {
  return this.param('before', new Date(date).toISOString());
};
/**
 * Retrieve only records published after a specified date
 *
 * @example <caption>Provide an ISO 8601-compliant date string</caption>
 *
 *     wp.posts().after('1986-03-22')...
 *
 * @example <caption>Provide a JavaScript Date object</caption>
 *
 *     wp.posts().after( new Date( 1986, 03, 22 ) )...
 *
 * @method after
 * @chainable
 * @param {String|Date} date An ISO 8601-compliant date string, or Date object
 * @returns The request instance (for chaining)
 */


parameterMixins.after = function (date) {
  return this.param('after', new Date(date).toISOString());
};

module.exports = parameterMixins;

/***/ }),

/***/ "./lib/path-part-setter.js":
/*!*********************************!*\
  !*** ./lib/path-part-setter.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module path-part-setter
 */

/**
 * Return a function to set part of the request URL path.
 *
 * Path part setter methods may be either dynamic (*i.e.* may represent a
 * "named group") or non-dynamic (representing a static part of the URL, which
 * is usually a collection endpoint of some sort). Which type of function is
 * returned depends on whether a given route has one or many sub-resources.
 *
 * @alias module:lib/path-part-setter.create
 * @param {Object} node An object representing a level of an endpoint path hierarchy
 * @returns {Function} A path part setter function
 */

function createPathPartSetter(node) {
  // Local references to `node` properties used by returned functions
  var nodeLevel = node.level;
  var nodeName = node.names[0];
  var supportedMethods = node.methods || [];
  var dynamicChildren = node.children ? Object.keys(node.children).map(function (key) {
    return node.children[key];
  }).filter(function (childNode) {
    return childNode.namedGroup === true;
  }) : [];
  var dynamicChild = dynamicChildren.length === 1 && dynamicChildren[0];
  var dynamicChildLevel = dynamicChild && dynamicChild.level;

  if (node.namedGroup) {
    /**
     * Set a dymanic (named-group) path part of a query URL.
     *
     * @example
     *
     *     // id() is a dynamic path part setter:
     *     wp.posts().id( 7 ); // Get posts/7
     *
     * @chainable
     * @param  {String|Number} val The path part value to set
     * @returns {Object} The handler instance (for chaining)
     */
    return function (val) {
      this.setPathPart(nodeLevel, val);

      if (supportedMethods.length) {
        this._supportedMethods = supportedMethods;
      }

      return this;
    };
  } else {
    /**
     * Set a non-dymanic (non-named-group) path part of a query URL, and
     * set the value of a subresource if an input value is provided and
     * exactly one named-group child node exists.
     *
     * @example
     *
     *     // revisions() is a non-dynamic path part setter:
     *     wp.posts().id( 4 ).revisions();       // Get posts/4/revisions
     *     wp.posts().id( 4 ).revisions( 1372 ); // Get posts/4/revisions/1372
     *
     * @chainable
     * @param  {String|Number} [val] The path part value to set (if provided)
     *                               for a subresource within this resource
     * @returns {Object} The handler instance (for chaining)
     */
    return function (val) {
      // If the path part is not a namedGroup, it should have exactly one
      // entry in the names array: use that as the value for this setter,
      // as it will usually correspond to a collection endpoint.
      this.setPathPart(nodeLevel, nodeName); // If this node has exactly one dynamic child, this method may act as
      // a setter for that child node. `dynamicChildLevel` will be falsy if the
      // node does not have a child or has multiple children.

      if (val !== undefined && dynamicChildLevel) {
        this.setPathPart(dynamicChildLevel, val);
      }

      return this;
    };
  }
}

module.exports = {
  create: createPathPartSetter
};

/***/ }),

/***/ "./lib/resource-handler-spec.js":
/*!**************************************!*\
  !*** ./lib/resource-handler-spec.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module resource-handler-spec
 */


var createPathPartSetter = __webpack_require__(/*! ./path-part-setter */ "./lib/path-part-setter.js").create;
/** @private */


function addLevelOption(levelsObj, level, obj) {
  levelsObj[level] = levelsObj[level] || [];
  levelsObj[level].push(obj);
}
/**
 * Assign a setter function for the provided node to the provided route
 * handler object setters dictionary (mutates handler by reference).
 *
 * @private
 * @param {Object} handler A route handler definition object
 * @param {Object} node    A route hierarchy level node object
 */


function assignSetterFnForNode(handler, node) {
  var setterFn; // For each node, add its handler to the relevant "level" representation

  addLevelOption(handler._levels, node.level, {
    component: node.component,
    validate: node.validate,
    methods: node.methods
  }); // First level is set implicitly, no dedicated setter needed

  if (node.level > 0) {
    setterFn = createPathPartSetter(node);
    node.names.forEach(function (name) {
      // Convert from snake_case to camelCase
      var setterFnName = name.replace(/[_-]+\w/g, function (match) {
        return match.replace(/[_-]+/, '').toUpperCase();
      }); // Don't overwrite previously-set methods

      if (!handler._setters[setterFnName]) {
        handler._setters[setterFnName] = setterFn;
      }
    });
  }
}
/**
 * Walk the tree of a specific resource node to create the setter methods
 *
 * The API we want to produce from the node tree looks like this:
 *
 *     wp.posts();                        /wp/v2/posts
 *     wp.posts().id( 7 );                /wp/v2/posts/7
 *     wp.posts().id( 7 ).revisions();    /wp/v2/posts/7/revisions
 *     wp.posts().id( 7 ).revisions( 8 ); /wp/v2/posts/7/revisions/8
 *
 * ^ That last one's the tricky one: we can deduce that this parameter is "id", but
 * that param will already be taken by the post ID, so sub-collections have to be
 * set up as `.revisions()` to get the collection, and `.revisions( id )` to get a
 * specific resource.
 *
 * @private
 * @param  {Object} node            A node object
 * @param  {Object} [node.children] An object of child nodes
 * // @returns {isLeaf} A boolean indicating whether the processed node is a leaf
 */


function extractSetterFromNode(handler, node) {
  assignSetterFnForNode(handler, node);

  if (node.children) {
    // Recurse down to this node's children
    Object.keys(node.children).forEach(function (key) {
      extractSetterFromNode(handler, node.children[key]);
    });
  }
}
/**
 * Create a node handler specification object from a route definition object
 *
 * @name create
 * @param {object} routeDefinition A route definition object
 * @param {string} resource The string key of the resource for which to create a handler
 * @returns {object} A handler spec object with _path, _levels and _setters properties
 */


function createNodeHandlerSpec(routeDefinition, resource) {
  var handler = {
    // A "path" is an ordered (by key) set of values composed into the final URL
    _path: {
      '0': resource
    },
    // A "level" is a level-keyed object representing the valid options for
    // one level of the resource URL
    _levels: {},
    // Objects that hold methods and properties which will be copied to
    // instances of this endpoint's handler
    _setters: {},
    // Arguments (query parameters) that may be set in GET requests to endpoints
    // nested within this resource route tree, used to determine the mixins to
    // add to the request handler
    _getArgs: routeDefinition._getArgs
  }; // Walk the tree

  Object.keys(routeDefinition).forEach(function (routeDefProp) {
    if (routeDefProp !== '_getArgs') {
      extractSetterFromNode(handler, routeDefinition[routeDefProp]);
    }
  });
  return handler;
}

module.exports = {
  create: createNodeHandlerSpec
};

/***/ }),

/***/ "./lib/route-tree.js":
/*!***************************!*\
  !*** ./lib/route-tree.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module route-tree
 */


var namedGroupRE = __webpack_require__(/*! ./util/named-group-regexp */ "./lib/util/named-group-regexp.js").namedGroupRE;

var splitPath = __webpack_require__(/*! ./util/split-path */ "./lib/util/split-path.js");

var ensure = __webpack_require__(/*! ./util/ensure */ "./lib/util/ensure.js");

var objectReduce = __webpack_require__(/*! ./util/object-reduce */ "./lib/util/object-reduce.js");
/**
 * Method to use when reducing route components array.
 *
 * @private
 * @param {object} routeObj     A route definition object (set via .bind partial application)
 * @param {object} topLevel     The top-level route tree object for this set of routes (set
 *                              via .bind partial application)
 * @param {object} parentLevel  The memo object, which is mutated as the reducer adds
 *                              a new level handler for each level in the route
 * @param {string} component    The string defining this route component
 * @param {number} idx          The index of this component within the components array
 * @param {string[]} components The array of all components
 * @returns {object} The child object of the level being reduced
 */


function reduceRouteComponents(routeObj, topLevel, parentLevel, component, idx, components) {
  // Check to see if this component is a dynamic URL segment (i.e. defined by
  // a named capture group regular expression). namedGroup will be `null` if
  // the regexp does not match, or else an array defining the RegExp match, e.g.
  // [
  //   'P<id>[\\d]+)',
  //   'id', // Name of the group
  //   '[\\d]+', // regular expression for this URL segment's contents
  //   index: 15,
  //   input: '/wp/v2/posts/(?P<id>[\\d]+)'
  // ]
  var namedGroup = component.match(namedGroupRE); // Pull out references to the relevant indices of the match, for utility:
  // `null` checking is necessary in case the component did not match the RE,
  // hence the `namedGroup &&`.

  var groupName = namedGroup && namedGroup[1];
  var groupPattern = namedGroup && namedGroup[2]; // When branching based on a dynamic capture group we used the group's RE
  // pattern as the unique identifier: this is done because the same group
  // could be assigned different names in different endpoint handlers, e.g.
  // "id" for posts/:id vs "parent_id" for posts/:parent_id/revisions.
  //
  // There is an edge case where groupPattern will be "" if we are registering
  // a custom route via `.registerRoute` that does not include parameter
  // validation. In this case we assume the groupName is sufficiently unique,
  // and fall back to `|| groupName` for the levelKey string.

  var levelKey = namedGroup ? groupPattern || groupName : component; // Level name on the other hand takes its value from the group's name, if
  // defined, and falls back to the component string to handle situations where
  // `component` is a collection (e.g. "revisions")

  var levelName = namedGroup ? groupName : component; // Check whether we have a preexisting node at this level of the tree, and
  // create a new level object if not. The component string is included so that
  // validators can throw meaningful errors as appropriate.

  var currentLevel = parentLevel[levelKey] || {
    component: component,
    namedGroup: namedGroup ? true : false,
    level: idx,
    names: []
  }; // A level's "names" correspond to the list of strings which could describe
  // an endpoint's component setter functions: "id", "revisions", etc.

  if (currentLevel.names.indexOf(levelName) < 0) {
    currentLevel.names.push(levelName);
  } // A level's validate method is called to check whether a value being set
  // on the request URL is of the proper type for the location in which it
  // is specified. If a group pattern was found, the validator checks whether
  // the input string exactly matches the group pattern.


  var groupPatternRE = groupPattern === '' ? // If groupPattern is an empty string, accept any input without validation
  /.*/ : // Otherwise, validate against the group pattern or the component string
  new RegExp(groupPattern ? '^' + groupPattern + '$' : component, 'i'); // Only one validate function is maintained for each node, because each node
  // is defined either by a string literal or by a specific regular expression.

  currentLevel.validate = function (input) {
    return groupPatternRE.test(input);
  }; // Check to see whether to expect more nodes within this branch of the tree,


  if (components[idx + 1]) {
    // and create a "children" object to hold those nodes if necessary
    currentLevel.children = currentLevel.children || {};
  } else {
    // At leaf nodes, specify the method capabilities of this endpoint
    currentLevel.methods = (routeObj.methods || []).map(function (str) {
      return str.toLowerCase();
    }); // Ensure HEAD is included whenever GET is supported: the API automatically
    // adds support for HEAD if you have GET

    if (currentLevel.methods.indexOf('get') > -1 && currentLevel.methods.indexOf('head') === -1) {
      currentLevel.methods.push('head');
    } // At leaf nodes also flag (at the top level) what arguments are
    // available to GET requests, so that we may automatically apply the
    // appropriate parameter mixins


    if (routeObj.endpoints) {
      topLevel._getArgs = topLevel._getArgs || {};
      routeObj.endpoints.forEach(function (endpoint) {
        // `endpoint.methods` will be an array of methods like `[ 'GET' ]`: we
        // only care about GET for this exercise. Validating POST and PUT args
        // could be useful but is currently deemed to be out-of-scope.
        endpoint.methods.forEach(function (method) {
          if (method.toLowerCase() === 'get') {
            Object.keys(endpoint.args).forEach(function (argKey) {
              // Reference param definition objects in the top _getArgs dictionary
              topLevel._getArgs[argKey] = endpoint.args[argKey];
            });
          }
        });
      });
    }
  } // Return the child node object as the new "level"


  parentLevel[levelKey] = currentLevel;
  return currentLevel.children;
}
/**
 *
 * @private
 * @param {object}   namespaces The memo object that becomes a dictionary mapping API
 *                              namespaces to an object of the namespace's routes
 * @param {object}   routeObj   A route definition object
 * @param {string}   route      The string key of the `routeObj` route object
 * @returns {object} The namespaces dictionary memo object
 */


function reduceRouteTree(namespaces, routeObj, route) {
  var nsForRoute = routeObj.namespace;
  var routeString = route // Strip the namespace from the route string (all routes should have the
  // format `/namespace/other/stuff`) @TODO: Validate this assumption
  .replace('/' + nsForRoute + '/', '') // Also strip any trailing "/?": the slash is already optional and a single
  // question mark would break the regex parser
  .replace(/\/\?$/, ''); // Split the routes up into hierarchical route components

  var routeComponents = splitPath(routeString); // Do not make a namespace group for the API root
  // Do not add the namespace root to its own group
  // Do not take any action if routeString is empty

  if (!nsForRoute || '/' + nsForRoute === route || !routeString) {
    return namespaces;
  } // Ensure that the namespace object for this namespace exists


  ensure(namespaces, nsForRoute, {}); // Get a local reference to namespace object

  var ns = namespaces[nsForRoute]; // The first element of the route tells us what type of resource this route
  // is for, e.g. "posts" or "comments": we build one handler per resource
  // type, so we group like resource paths together.

  var resource = routeComponents[0]; // @TODO: This code above currently precludes baseless routes, e.g.
  // myplugin/v2/(?P<resource>\w+) -- should those be supported?
  // Create an array to represent this resource, and ensure it is assigned
  // to the namespace object. The array will structure the "levels" (path
  // components and subresource types) of this resource's endpoint handler.

  ensure(ns, resource, {});
  var levels = ns[resource]; // Recurse through the route components, mutating levels with information about
  // each child node encountered while walking through the routes tree and what
  // arguments (parameters) are available for GET requests to this endpoint.

  routeComponents.reduce(reduceRouteComponents.bind(null, routeObj, levels), levels);
  return namespaces;
}
/**
 * Build a route tree by reducing over a routes definition object from the API
 * root endpoint response object
 *
 * @method build
 * @param {object} routes A dictionary of routes keyed by route regex strings
 * @returns {object} A dictionary, keyed by namespace, of resource handler
 * factory methods for each namespace's resources
 */


function buildRouteTree(routes) {
  return objectReduce(routes, reduceRouteTree, {});
}

module.exports = {
  build: buildRouteTree
};

/***/ }),

/***/ "./lib/util/alphanumeric-sort.js":
/*!***************************************!*\
  !*** ./lib/util/alphanumeric-sort.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Utility function for sorting arrays of numbers or strings.
 *
 * @module util/alphanumeric-sort
 * @param {String|Number} a The first comparator operand
 * @param {String|Number} a The second comparator operand
 * @returns -1 if the values are backwards, 1 if they're ordered, and 0 if they're the same
 */

module.exports = function (a, b) {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
};

/***/ }),

/***/ "./lib/util/apply-mixin.js":
/*!*********************************!*\
  !*** ./lib/util/apply-mixin.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Augment an object (specifically a prototype) with a mixin method
 * (the provided object is mutated by reference)
 *
 * @module util/apply-mixin
 * @param {Object} obj The object (usually a prototype) to augment
 * @param {String} key The property to which the mixin method should be assigned
 * @param {Function} mixin The mixin method
 * @returns {void}
 */

module.exports = function (obj, key, mixin) {
  // Will not overwrite existing methods
  if (typeof mixin === 'function' && !obj[key]) {
    obj[key] = mixin;
  }
};

/***/ }),

/***/ "./lib/util/argument-is-numeric.js":
/*!*****************************************!*\
  !*** ./lib/util/argument-is-numeric.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Return true if the provided argument is a number, a numeric string, or an
 * array of numbers or numeric strings
 *
 * @module util/argument-is-numeric
 * @param {Number|String|Number[]|String[]} val The value to inspect
 * @param {String} key The property to which the mixin method should be assigned
 * @param {Function} mixin The mixin method
 * @returns {void}
 */

var argumentIsNumeric = function argumentIsNumeric(val) {
  if (typeof val === 'number') {
    return true;
  }

  if (typeof val === 'string') {
    return /^\d+$/.test(val);
  }

  if (Array.isArray(val)) {
    for (var i = 0; i < val.length; i++) {
      // Fail early if any argument isn't determined to be numeric
      if (!argumentIsNumeric(val[i])) {
        return false;
      }
    }

    return true;
  } // If it's not an array, and not a string, and not a number, we don't
  // know what to do with it


  return false;
};

module.exports = argumentIsNumeric;

/***/ }),

/***/ "./lib/util/ensure.js":
/*!****************************!*\
  !*** ./lib/util/ensure.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Ensure that a property is present in an object, initializing it to a default
 * value if it is not already defined. Modifies the provided object by reference.
 *
 * @module util/ensure
 * @param {object} obj              The object in which to ensure a property exists
 * @param {string} prop             The property key to ensure
 * @param {}       propDefaultValue The default value for the property
 * @returns {void}
 */

module.exports = function (obj, prop, propDefaultValue) {
  if (obj && obj[prop] === undefined) {
    obj[prop] = propDefaultValue;
  }
};

/***/ }),

/***/ "./lib/util/key-val-to-obj.js":
/*!************************************!*\
  !*** ./lib/util/key-val-to-obj.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Convert a (key, value) pair to a { key: value } object
 *
 * @module util/key-val-to-obj
 * @param {string} key   The key to use in the returned object
 * @param {}       value The value to assign to the provided key
 * @returns {object} A dictionary object containing the key-value pair
 */

module.exports = function (key, value) {
  var obj = {};
  obj[key] = value;
  return obj;
};

/***/ }),

/***/ "./lib/util/named-group-regexp.js":
/*!****************************************!*\
  !*** ./lib/util/named-group-regexp.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module util/named-group-regexp
 */


var pattern = [// Capture group start
'\\(\\?', // Capture group name begins either `P<`, `<` or `'`
'(?:P<|<|\')', // Everything up to the next `>`` or `'` (depending) will be the capture group name
'([^>\']+)', // Capture group end
'[>\']', // Get everything up to the end of the capture group: this is the RegExp used
// when matching URLs to this route, which we can use for validation purposes.
'([^\\)]*)', // Capture group end
'\\)'].join('');
module.exports = {
  /**
   * String representation of the exported Regular Expression; we construct this
   * RegExp from a string to enable more detailed annotation and permutation
   *
   * @prop {String} pattern
   */
  pattern: pattern,

  /**
   * Regular Expression to identify a capture group in PCRE formats
   * `(?<name>regex)`, `(?'name'regex)` or `(?P<name>regex)` (see
   * regular-expressions.info/refext.html)
   *
   * @prop {RegExp} namedGroupRE
   */
  namedGroupRE: new RegExp(pattern)
};

/***/ }),

/***/ "./lib/util/object-reduce.js":
/*!***********************************!*\
  !*** ./lib/util/object-reduce.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Utility method to permit Array#reduce-like operations over objects
 *
 * This is likely to be slightly more inefficient than using lodash.reduce,
 * but results in ~50kb less size in the resulting bundled code before
 * minification and ~12kb of savings with minification.
 *
 * Unlike lodash.reduce(), the iterator and initial value properties are NOT
 * optional: this is done to simplify the code, this module is not intended to
 * be a full replacement for lodash.reduce and instead prioritizes simplicity
 * for a specific common case.
 *
 * @module util/object-reduce
 * @private
 * @param {Object} obj An object of key-value pairs
 * @param {Function} iterator A function to use to reduce the object
 * @param {*} initialState The initial value to pass to the reducer function
 * @returns The result of the reduction operation
 */

module.exports = function (obj, iterator, initialState) {
  return Object.keys(obj).reduce(function (memo, key) {
    return iterator(memo, obj[key], key);
  }, initialState);
};

/***/ }),

/***/ "./lib/util/parameter-setter.js":
/*!**************************************!*\
  !*** ./lib/util/parameter-setter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Helper to create a simple parameter setter convenience method
 *
 * @module util/parameter-setter
 * @param {String} param The string key of the parameter this method will set
 * @returns {Function} A setter method that can be assigned to a request instance
 */

module.exports = function (param) {
  /**
   * A setter for a specific parameter
   *
   * @chainable
   * @param {*} val The value to set for the the parameter
   * @returns The request instance on which this method was called (for chaining)
   */
  return function (val) {
    return this.param(param, val);
  };
};

/***/ }),

/***/ "./lib/util/split-path.js":
/*!********************************!*\
  !*** ./lib/util/split-path.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module util/split-path
 */


var namedGroupPattern = __webpack_require__(/*! ./named-group-regexp */ "./lib/util/named-group-regexp.js").pattern; // Convert capture groups to non-matching groups, because all capture groups
// are included in the resulting array when an RE is passed to `.split()`
// (We re-use the existing named group's capture pattern instead of creating
// a new RegExp just for this purpose)


var patternWithoutSubgroups = namedGroupPattern.replace(/([^\\])\(([^?])/g, '$1(?:$2'); // Make a new RegExp using the same pattern as one single unified capture group,
// so the match as a whole will be preserved after `.split()`. Permit non-slash
// characters before or after the named capture group, although those components
// will not yield functioning setters.

var namedGroupRE = new RegExp('([^/]*' + patternWithoutSubgroups + '[^/]*)');
/**
 * Divide a route string up into hierarchical components by breaking it apart
 * on forward slash characters.
 *
 * There are plugins (including Jetpack) that register routes with regex capture
 * groups which also contain forward slashes, so those groups have to be pulled
 * out first before the remainder of the string can be .split() as normal.
 *
 * @param {String} pathStr A route path string to break into components
 * @returns {String[]} An array of route component strings
 */

module.exports = function (pathStr) {
  return pathStr // Divide a string like "/some/path/(?P<with_named_groups>)/etc" into an
  // array `[ "/some/path/", "(?P<with_named_groups>)", "/etc" ]`.
  .split(namedGroupRE) // Then, reduce through the array of parts, splitting any non-capture-group
  // parts on forward slashes and discarding empty strings to create the final
  // array of path components.
  .reduce(function (components, part) {
    if (!part) {
      // Ignore empty strings parts
      return components;
    }

    if (namedGroupRE.test(part)) {
      // Include named capture groups as-is
      return components.concat(part);
    } // Split the part on / and filter out empty strings


    return components.concat(part.split('/').filter(Boolean));
  }, []);
};

/***/ }),

/***/ "./lib/util/unique.js":
/*!****************************!*\
  !*** ./lib/util/unique.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Return an array with all duplicate items removed.
 *
 * This functionality was previously provided by lodash.uniq, but this
 * modern JS solution yields a smaller bundle size.
 *
 * @param {Array} arr An array to de-duplicate
 * @returns {Array} A de-duplicated array
 */
module.exports = function (arr) {
  return Array.from(new Set(arr));
};

/***/ }),

/***/ "./lib/wp-register-route.js":
/*!**********************************!*\
  !*** ./lib/wp-register-route.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var buildRouteTree = __webpack_require__(/*! ./route-tree */ "./lib/route-tree.js").build;

var generateEndpointFactories = __webpack_require__(/*! ./endpoint-factories */ "./lib/endpoint-factories.js").generate;

var paramSetter = __webpack_require__(/*! ./util/parameter-setter */ "./lib/util/parameter-setter.js");

var applyMixin = __webpack_require__(/*! ./util/apply-mixin */ "./lib/util/apply-mixin.js");

var mixins = __webpack_require__(/*! ./mixins */ "./lib/mixins/index.js");
/**
 * Create and return a handler for an arbitrary WP REST API endpoint.
 *
 * The first two parameters mirror `register_rest_route` in the REST API
 * codebase:
 *
 * @memberof! WPAPI#
 * @param {string}   namespace         A namespace string, e.g. 'myplugin/v1'
 * @param {string}   restBase          A REST route string, e.g. '/author/(?P<id>\d+)'
 * @param {object}   [options]         An (optional) options object
 * @param {object}   [options.mixins]  A hash of functions to apply as mixins
 * @param {string[]} [options.methods] An array of methods to whitelist (on the leaf node only)
 * @returns {Function} An endpoint handler factory function for the specified route
 */


function registerRoute(namespace, restBase) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Support all methods until requested to do otherwise
  var supportedMethods = ['head', 'get', 'patch', 'put', 'post', 'delete'];

  if (Array.isArray(options.methods)) {
    // Permit supported methods to be specified as an array
    supportedMethods = options.methods.map(function (method) {
      return method.trim().toLowerCase();
    });
  } else if (typeof options.methods === 'string') {
    // Permit a supported method to be specified as a string
    supportedMethods = [options.methods.trim().toLowerCase()];
  } // Ensure that if GET is supported, then HEAD is as well, and vice-versa


  if (supportedMethods.indexOf('get') !== -1 && supportedMethods.indexOf('head') === -1) {
    supportedMethods.push('head');
  } else if (supportedMethods.indexOf('head') !== -1 && supportedMethods.indexOf('get') === -1) {
    supportedMethods.push('get');
  }

  var fullRoute = namespace // Route should always have preceding slash
  .replace(/^[\s/]*/, '/') // Route should always be joined to namespace with a single slash
  .replace(/[\s/]*$/, '/') + restBase.replace(/^[\s/]*/, '');
  var routeObj = {};
  routeObj[fullRoute] = {
    namespace: namespace,
    methods: supportedMethods
  }; // Go through the same steps used to bootstrap the client to parse the
  // provided route out into a handler request method

  var routeTree = buildRouteTree(routeObj); // Parse the mock route object into endpoint factories

  var endpointFactories = generateEndpointFactories(routeTree)[namespace];
  var EndpointRequest = endpointFactories[Object.keys(endpointFactories)[0]].Ctor;

  if (options && options.params) {
    options.params.forEach(function (param) {
      // Only accept string parameters
      if (typeof param !== 'string') {
        return;
      } // If the parameter can be mapped to a mixin, apply that mixin


      if (_typeof(mixins[param]) === 'object') {
        Object.keys(mixins[param]).forEach(function (key) {
          applyMixin(EndpointRequest.prototype, key, mixins[param][key]);
        });
        return;
      } // Attempt to create a simple setter for any parameters for which
      // we do not already have a custom mixin


      applyMixin(EndpointRequest.prototype, param, paramSetter(param));
    });
  } // Set any explicitly-provided object mixins


  if (options && _typeof(options.mixins) === 'object') {
    // Set any specified mixin functions on the response
    Object.keys(options.mixins).forEach(function (key) {
      applyMixin(EndpointRequest.prototype, key, options.mixins[key]);
    });
  }

  function endpointFactory() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new EndpointRequest(_objectSpread({}, options, {}, this ? this._options : {}));
  }

  endpointFactory.Ctor = EndpointRequest;
  return endpointFactory;
}

module.exports = registerRoute;

/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset, 'value');
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./wpapi.js":
/*!******************!*\
  !*** ./wpapi.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * A WP REST API client for Node.js
 *
 * @example
 *     var wp = new WPAPI({ endpoint: 'http://src.wordpress-develop.dev/wp-json' });
 *     wp.posts().then(function( posts ) {
 *         console.log( posts );
 *     }).catch(function( err ) {
 *         console.error( err );
 *     });
 *
 * @license MIT
 })
 */


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var objectReduce = __webpack_require__(/*! ./lib/util/object-reduce */ "./lib/util/object-reduce.js"); // This JSON file provides enough data to create handler methods for all valid
// API routes in WordPress 4.7


var defaultRoutes = __webpack_require__(/*! ./lib/data/default-routes.json */ "./lib/data/default-routes.json");

var buildRouteTree = __webpack_require__(/*! ./lib/route-tree */ "./lib/route-tree.js").build;

var generateEndpointFactories = __webpack_require__(/*! ./lib/endpoint-factories */ "./lib/endpoint-factories.js").generate; // The default endpoint factories will be lazy-loaded by parsing the default
// route tree data if a default-mode WPAPI instance is created (i.e. one that
// is to be bootstrapped with the handlers for all of the built-in routes)


var defaultEndpointFactories; // Constant used to detect first-party WordPress REST API routes

var apiDefaultNamespace = 'wp/v2'; // Pull in base module constructors

var WPRequest = __webpack_require__(/*! ./lib/constructors/wp-request */ "./lib/constructors/wp-request.js");
/**
 * Construct a REST API client instance object to create
 *
 * @constructor WPAPI
 * @param {Object} options             An options hash to configure the instance
 * @param {String} options.endpoint    The URI for a WP-API endpoint
 * @param {String} [options.username]  A WP-API Basic Auth username
 * @param {String} [options.password]  A WP-API Basic Auth password
 * @param {String} [options.nonce]     A WP nonce for use with cookie authentication
 * @param {Object} [options.routes]    A dictionary of API routes with which to
 *                                     bootstrap the WPAPI instance: the instance will
 *                                     be initialized with default routes only
 *                                     if this property is omitted
 * @param {String} [options.transport] An optional dictionary of HTTP transport
 *                                     methods (.get, .post, .put, .delete, .head)
 *                                     to use instead of the defaults, e.g. to use
 *                                     a different HTTP library than superagent
 */


function WPAPI(options) {
  // Enforce `new`
  if (this instanceof WPAPI === false) {
    return new WPAPI(options);
  }

  if (typeof options.endpoint !== 'string') {
    throw new Error('options hash must contain an API endpoint URL string');
  } // Dictionary to be filled by handlers for default namespaces


  this._ns = {};
  this._options = {
    // Ensure trailing slash on endpoint URI
    endpoint: options.endpoint.replace(/\/?$/, '/')
  }; // If any authentication credentials were provided, assign them now

  if (options && (options.username || options.password || options.nonce)) {
    this.auth(options);
  }

  return this // Configure custom HTTP transport methods, if provided
  .transport(options.transport) // Bootstrap with a specific routes object, if provided
  .bootstrap(options && options.routes);
}
/**
 * Set custom transport methods to use when making HTTP requests against the API
 *
 * Pass an object with a function for one or many of "get", "post", "put",
 * "delete" and "head" and that function will be called when making that type
 * of request. The provided transport functions should take a WPRequest handler
 * instance (_e.g._ the result of a `wp.posts()...` chain or any other chaining
 * request handler) as their first argument; a `data` object as their second
 * argument (for POST, PUT and DELETE requests); and an optional callback as
 * their final argument. Transport methods should invoke the callback with the
 * response data (or error, as appropriate), and should also return a Promise.
 *
 * @example <caption>showing how a cache hit (keyed by URI) could short-circuit a get request</caption>
 *
 *     var site = new WPAPI({
 *       endpoint: 'http://my-site.com/wp-json'
 *     });
 *
 *     // Overwrite the GET behavior to inject a caching layer
 *     site.transport({
 *       get: function( wpreq ) {
 *         var result = cache[ wpreq ];
 *         // If a cache hit is found, return it via the same promise
 *         // signature as that of the default transport method
 *         if ( result ) {
 *           return Promise.resolve( result );
 *         }
 *
 *         // Delegate to default transport if no cached data was found
 *         return WPAPI.transport.get( wpreq ).then(function( result ) {
 *           cache[ wpreq ] = result;
 *           return result;
 *         });
 *       }
 *     });
 *
 * This is advanced behavior; you will only need to utilize this functionality
 * if your application has very specific HTTP handling or caching requirements.
 * Refer to the "http-transport" module within this application for the code
 * implementing the built-in transport methods.
 *
 * @memberof! WPAPI
 * @method transport
 * @chainable
 * @param {Object}   transport          A dictionary of HTTP transport methods
 * @param {Function} [transport.get]    The function to use for GET requests
 * @param {Function} [transport.post]   The function to use for POST requests
 * @param {Function} [transport.put]    The function to use for PUT requests
 * @param {Function} [transport.delete] The function to use for DELETE requests
 * @param {Function} [transport.head]   The function to use for HEAD requests
 * @returns {WPAPI} The WPAPI instance, for chaining
 */


WPAPI.prototype.transport = function (transport) {
  // Local reference to avoid need to reference via `this` inside forEach
  var _options = this._options; // Create the default transport if it does not exist

  if (!_options.transport) {
    _options.transport = WPAPI.transport ? Object.create(WPAPI.transport) : {};
  } // Whitelist the methods that may be applied


  ['get', 'head', 'post', 'put', 'delete'].forEach(function (key) {
    if (transport && transport[key]) {
      _options.transport[key] = transport[key];
    }
  });
  return this;
};
/**
 * Convenience method for making a new WPAPI instance
 *
 * @example
 * These are equivalent:
 *
 *     var wp = new WPAPI({ endpoint: 'http://my.blog.url/wp-json' });
 *     var wp = WPAPI.site( 'http://my.blog.url/wp-json' );
 *
 * `WPAPI.site` can take an optional API root response JSON object to use when
 * bootstrapping the client's endpoint handler methods: if no second parameter
 * is provided, the client instance is assumed to be using the default API
 * with no additional plugins and is initialized with handlers for only those
 * default API routes.
 *
 * @example
 * These are equivalent:
 *
 *     // {...} means the JSON output of http://my.blog.url/wp-json
 *     var wp = new WPAPI({
 *       endpoint: 'http://my.blog.url/wp-json',
 *       json: {...}
 *     });
 *     var wp = WPAPI.site( 'http://my.blog.url/wp-json', {...} );
 *
 * @memberof! WPAPI
 * @static
 * @param {String} endpoint The URI for a WP-API endpoint
 * @param {Object} routes   The "routes" object from the JSON object returned
 *                          from the root API endpoint of a WP site, which should
 *                          be a dictionary of route definition objects keyed by
 *                          the route's regex pattern
 * @returns {WPAPI} A new WPAPI instance, bound to the provided endpoint
 */


WPAPI.site = function (endpoint, routes) {
  return new WPAPI({
    endpoint: endpoint,
    routes: routes
  });
};
/**
 * Generate a request against a completely arbitrary endpoint, with no assumptions about
 * or mutation of path, filtering, or query parameters. This request is not restricted to
 * the endpoint specified during WPAPI object instantiation.
 *
 * @example
 * Generate a request to the explicit URL "http://your.website.com/wp-json/some/custom/path"
 *
 *     wp.url( 'http://your.website.com/wp-json/some/custom/path' ).get()...
 *
 * @memberof! WPAPI
 * @param {String} url The URL to request
 * @returns {WPRequest} A WPRequest object bound to the provided URL
 */


WPAPI.prototype.url = function (url) {
  return new WPRequest(_objectSpread({}, this._options, {
    endpoint: url
  }));
};
/**
 * Generate a query against an arbitrary path on the current endpoint. This is useful for
 * requesting resources at custom WP-API endpoints, such as WooCommerce's `/products`.
 *
 * @memberof! WPAPI
 * @param {String} [relativePath] An endpoint-relative path to which to bind the request
 * @returns {WPRequest} A request object
 */


WPAPI.prototype.root = function (relativePath) {
  relativePath = relativePath || '';

  var options = _objectSpread({}, this._options); // Request should be


  var request = new WPRequest(options); // Set the path template to the string passed in

  request._path = {
    '0': relativePath
  };
  return request;
};
/**
 * Set the default headers to use for all HTTP requests created from this WPAPI
 * site instance. Accepts a header name and its associated value as two strings,
 * or multiple headers as an object of name-value pairs.
 *
 * @example <caption>Set a single header to be used by all requests to this site</caption>
 *
 *     site.setHeaders( 'Authorization', 'Bearer trustme' )...
 *
 * @example <caption>Set multiple headers to be used by all requests to this site</caption>
 *
 *     site.setHeaders({
 *       Authorization: 'Bearer comeonwereoldfriendsright',
 *       'Accept-Language': 'en-CA'
 *     })...
 *
 * @memberof! WPAPI
 * @since 1.1.0
 * @chainable
 * @param {String|Object} headers The name of the header to set, or an object of
 *                                header names and their associated string values
 * @param {String}        [value] The value of the header being set
 * @returns {WPAPI} The WPAPI site handler instance, for chaining
 */


WPAPI.prototype.setHeaders = WPRequest.prototype.setHeaders;
/**
 * Set the authentication to use for a WPAPI site handler instance. Accepts basic
 * HTTP authentication credentials (string username & password) or a Nonce (for
 * cookie authentication) by default; may be overloaded to accept OAuth credentials
 * in the future.
 *
 * @example <caption>Basic Authentication</caption>
 *
 *     site.auth({
 *       username: 'admin',
 *       password: 'securepass55'
 *     })...
 *
 * @example <caption>Cookie/Nonce Authentication</caption>
 *
 *     site.auth({
 *       nonce: 'somenonce'
 *     })...
 *
 * @memberof! WPAPI
 * @method
 * @chainable
 * @param {Object} credentials            An authentication credentials object
 * @param {String} [credentials.username] A WP-API Basic HTTP Authentication username
 * @param {String} [credentials.password] A WP-API Basic HTTP Authentication password
 * @param {String} [credentials.nonce]    A WP nonce for use with cookie authentication
 * @returns {WPAPI} The WPAPI site handler instance, for chaining
 */

WPAPI.prototype.auth = WPRequest.prototype.auth; // Apply the registerRoute method to the prototype

WPAPI.prototype.registerRoute = __webpack_require__(/*! ./lib/wp-register-route */ "./lib/wp-register-route.js");
/**
 * Deduce request methods from a provided API root JSON response object's
 * routes dictionary, and assign those methods to the current instance. If
 * no routes dictionary is provided then the instance will be bootstrapped
 * with route handlers for the default API endpoints only.
 *
 * This method is called automatically during WPAPI instance creation.
 *
 * @memberof! WPAPI
 * @chainable
 * @param {Object} routes The "routes" object from the JSON object returned
 *                        from the root API endpoint of a WP site, which should
 *                        be a dictionary of route definition objects keyed by
 *                        the route's regex pattern
 * @returns {WPAPI} The bootstrapped WPAPI client instance (for chaining or assignment)
 */

WPAPI.prototype.bootstrap = function (routes) {
  var routesByNamespace;
  var endpointFactoriesByNamespace;

  if (!routes) {
    // Auto-generate default endpoint factories if they are not already available
    if (!defaultEndpointFactories) {
      routesByNamespace = buildRouteTree(defaultRoutes);
      defaultEndpointFactories = generateEndpointFactories(routesByNamespace);
    }

    endpointFactoriesByNamespace = defaultEndpointFactories;
  } else {
    routesByNamespace = buildRouteTree(routes);
    endpointFactoriesByNamespace = generateEndpointFactories(routesByNamespace);
  } // For each namespace for which routes were identified, store the generated
  // route handlers on the WPAPI instance's private _ns dictionary. These namespaced
  // handler methods can be accessed by calling `.namespace( str )` on the
  // client instance and passing a registered namespace string.
  // Handlers for default (wp/v2) routes will also be assigned to the WPAPI
  // client instance object itself, for brevity.


  return objectReduce(endpointFactoriesByNamespace, function (wpInstance, endpointFactories, namespace) {
    // Set (or augment) the route handler factories for this namespace.
    wpInstance._ns[namespace] = objectReduce(endpointFactories, function (nsHandlers, handlerFn, methodName) {
      nsHandlers[methodName] = handlerFn;
      return nsHandlers;
    }, wpInstance._ns[namespace] || {
      // Create all namespace dictionaries with a direct reference to the main WPAPI
      // instance's _options property so that things like auth propagate properly
      _options: wpInstance._options
    }); // For the default namespace, e.g. "wp/v2" at the time this comment was
    // written, ensure all methods are assigned to the root client object itself
    // in addition to the private _ns dictionary: this is done so that these
    // methods can be called with e.g. `wp.posts()` and not the more verbose
    // `wp.namespace( 'wp/v2' ).posts()`.

    if (namespace === apiDefaultNamespace) {
      Object.keys(wpInstance._ns[namespace]).forEach(function (methodName) {
        wpInstance[methodName] = wpInstance._ns[namespace][methodName];
      });
    }

    return wpInstance;
  }, this);
};
/**
 * Access API endpoint handlers from a particular API namespace object
 *
 * @example
 *
 *     wp.namespace( 'myplugin/v1' ).author()...
 *
 *     // Default WP endpoint handlers are assigned to the wp instance itself.
 *     // These are equivalent:
 *     wp.namespace( 'wp/v2' ).posts()...
 *     wp.posts()...
 *
 * @memberof! WPAPI
 * @param {string} namespace A namespace string
 * @returns {Object} An object of route endpoint handler methods for the
 * routes within the specified namespace
 */


WPAPI.prototype.namespace = function (namespace) {
  if (!this._ns[namespace]) {
    throw new Error('Error: namespace ' + namespace + ' is not recognized');
  }

  return this._ns[namespace];
};
/**
 * Take an arbitrary WordPress site, deduce the WP REST API root endpoint, query
 * that endpoint, and parse the response JSON. Use the returned JSON response
 * to instantiate a WPAPI instance bound to the provided site.
 *
 * @memberof! WPAPI
 * @static
 * @param {string} url A URL within a REST API-enabled WordPress website
 * @returns {Promise} A promise that resolves to a configured WPAPI instance bound
 * to the deduced endpoint, or rejected if an endpoint is not found or the
 * library is unable to parse the provided endpoint.
 */


WPAPI.discover = function (url) {
  // Use WPAPI.site to make a request using the defined transport
  var req = WPAPI.site(url).root().param('rest_route', '/');
  return req.get().then(function (apiRootJSON) {
    var routes = apiRootJSON.routes;
    return new WPAPI({
      // Derive the endpoint from the self link for the / root
      endpoint: routes['/']._links.self,
      // Bootstrap returned WPAPI instance with the discovered routes
      routes: routes
    });
  });
};

module.exports = WPAPI;

/***/ })

/******/ });
});
//# sourceMappingURL=wpapi.js.map