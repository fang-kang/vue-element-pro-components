(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueElementProComponents"] = factory();
	else
		root["VueElementProComponents"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "150f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_010d6774_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f748");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_010d6774_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_010d6774_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "18bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("235d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "235d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c886");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("696d3f3f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "26ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5ea3");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),

/***/ "2ef0":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.21';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function',
      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */
  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Throw an error if a forbidden character was found in `variable`, to prevent
      // potential command injection attacks.
      else if (reForbiddenIdentifierChars.test(variable)) {
        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
      }

      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return baseTrim(string);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.slice(0, trimmedEndIndex(string) + 1);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("62e4")(module)))

/***/ }),

/***/ "2f74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (stubFalse);


/***/ }),

/***/ "378b":
/***/ (function(module) {

module.exports = JSON.parse("[{\"text\":\"北京\",\"value\":\"110000\",\"children\":[{\"text\":\"北京\",\"value\":\"110100\",\"children\":[{\"text\":\"东城\",\"value\":\"110101\",\"children\":\"\"},{\"text\":\"西城\",\"value\":\"110102\",\"children\":\"\"},{\"text\":\"朝阳\",\"value\":\"110105\",\"children\":\"\"},{\"text\":\"丰台\",\"value\":\"110106\",\"children\":\"\"},{\"text\":\"石景山\",\"value\":\"110107\",\"children\":\"\"},{\"text\":\"海淀\",\"value\":\"110108\",\"children\":\"\"},{\"text\":\"门头沟\",\"value\":\"110109\",\"children\":\"\"},{\"text\":\"房山\",\"value\":\"110111\",\"children\":\"\"},{\"text\":\"通州\",\"value\":\"110112\",\"children\":\"\"},{\"text\":\"顺义\",\"value\":\"110113\",\"children\":\"\"},{\"text\":\"昌平\",\"value\":\"110114\",\"children\":\"\"},{\"text\":\"大兴\",\"value\":\"110115\",\"children\":\"\"},{\"text\":\"怀柔\",\"value\":\"110116\",\"children\":\"\"},{\"text\":\"平谷\",\"value\":\"110117\",\"children\":\"\"},{\"text\":\"密云\",\"value\":\"110228\",\"children\":\"\"},{\"text\":\"延庆\",\"value\":\"110229\",\"children\":\"\"}]}]},{\"text\":\"天津\",\"value\":\"120000\",\"children\":[{\"text\":\"天津\",\"value\":\"120100\",\"children\":[{\"text\":\"和平\",\"value\":\"120101\",\"children\":\"\"},{\"text\":\"河东\",\"value\":\"120102\",\"children\":\"\"},{\"text\":\"河西\",\"value\":\"120103\",\"children\":\"\"},{\"text\":\"南开\",\"value\":\"120104\",\"children\":\"\"},{\"text\":\"河北\",\"value\":\"120105\",\"children\":\"\"},{\"text\":\"红桥\",\"value\":\"120106\",\"children\":\"\"},{\"text\":\"东丽\",\"value\":\"120110\",\"children\":\"\"},{\"text\":\"西青\",\"value\":\"120111\",\"children\":\"\"},{\"text\":\"津南\",\"value\":\"120112\",\"children\":\"\"},{\"text\":\"北辰\",\"value\":\"120113\",\"children\":\"\"},{\"text\":\"武清\",\"value\":\"120114\",\"children\":\"\"},{\"text\":\"宝坻\",\"value\":\"120115\",\"children\":\"\"},{\"text\":\"滨海\",\"value\":\"120116\",\"children\":\"\"},{\"text\":\"宁河\",\"value\":\"120221\",\"children\":\"\"},{\"text\":\"静海\",\"value\":\"120223\",\"children\":\"\"},{\"text\":\"蓟县\",\"value\":\"120225\",\"children\":\"\"}]}]},{\"text\":\"河北\",\"value\":\"130000\",\"children\":[{\"text\":\"石家庄\",\"value\":\"130100\",\"children\":[{\"text\":\"长安\",\"value\":\"130102\",\"children\":\"\"},{\"text\":\"桥东\",\"value\":\"130103\",\"children\":\"\"},{\"text\":\"桥西\",\"value\":\"130104\",\"children\":\"\"},{\"text\":\"新华\",\"value\":\"130105\",\"children\":\"\"},{\"text\":\"井陉矿\",\"value\":\"130107\",\"children\":\"\"},{\"text\":\"裕华\",\"value\":\"130108\",\"children\":\"\"},{\"text\":\"井陉\",\"value\":\"130121\",\"children\":\"\"},{\"text\":\"正定\",\"value\":\"130123\",\"children\":\"\"},{\"text\":\"栾城\",\"value\":\"130124\",\"children\":\"\"},{\"text\":\"行唐\",\"value\":\"130125\",\"children\":\"\"},{\"text\":\"灵寿\",\"value\":\"130126\",\"children\":\"\"},{\"text\":\"高邑\",\"value\":\"130127\",\"children\":\"\"},{\"text\":\"深泽\",\"value\":\"130128\",\"children\":\"\"},{\"text\":\"赞皇\",\"value\":\"130129\",\"children\":\"\"},{\"text\":\"无极\",\"value\":\"130130\",\"children\":\"\"},{\"text\":\"平山\",\"value\":\"130131\",\"children\":\"\"},{\"text\":\"元氏\",\"value\":\"130132\",\"children\":\"\"},{\"text\":\"赵县\",\"value\":\"130133\",\"children\":\"\"},{\"text\":\"辛集\",\"value\":\"130181\",\"children\":\"\"},{\"text\":\"藁城\",\"value\":\"130182\",\"children\":\"\"},{\"text\":\"晋州\",\"value\":\"130183\",\"children\":\"\"},{\"text\":\"新乐\",\"value\":\"130184\",\"children\":\"\"},{\"text\":\"鹿泉\",\"value\":\"130185\",\"children\":\"\"}]},{\"text\":\"唐山\",\"value\":\"130200\",\"children\":[{\"text\":\"路南\",\"value\":\"130202\",\"children\":\"\"},{\"text\":\"路北\",\"value\":\"130203\",\"children\":\"\"},{\"text\":\"古冶\",\"value\":\"130204\",\"children\":\"\"},{\"text\":\"开平\",\"value\":\"130205\",\"children\":\"\"},{\"text\":\"丰南\",\"value\":\"130207\",\"children\":\"\"},{\"text\":\"丰润\",\"value\":\"130208\",\"children\":\"\"},{\"text\":\"滦县\",\"value\":\"130223\",\"children\":\"\"},{\"text\":\"滦南\",\"value\":\"130224\",\"children\":\"\"},{\"text\":\"乐亭\",\"value\":\"130225\",\"children\":\"\"},{\"text\":\"迁西\",\"value\":\"130227\",\"children\":\"\"},{\"text\":\"玉田\",\"value\":\"130229\",\"children\":\"\"},{\"text\":\"曹妃甸\",\"value\":\"130230\",\"children\":\"\"},{\"text\":\"遵化\",\"value\":\"130281\",\"children\":\"\"},{\"text\":\"迁安\",\"value\":\"130283\",\"children\":\"\"}]},{\"text\":\"秦皇岛\",\"value\":\"130300\",\"children\":[{\"text\":\"海港\",\"value\":\"130302\",\"children\":\"\"},{\"text\":\"山海关\",\"value\":\"130303\",\"children\":\"\"},{\"text\":\"北戴河\",\"value\":\"130304\",\"children\":\"\"},{\"text\":\"青龙\",\"value\":\"130321\",\"children\":\"\"},{\"text\":\"昌黎\",\"value\":\"130322\",\"children\":\"\"},{\"text\":\"抚宁\",\"value\":\"130323\",\"children\":\"\"},{\"text\":\"卢龙\",\"value\":\"130324\",\"children\":\"\"}]},{\"text\":\"邯郸\",\"value\":\"130400\",\"children\":[{\"text\":\"邯山\",\"value\":\"130402\",\"children\":\"\"},{\"text\":\"丛台\",\"value\":\"130403\",\"children\":\"\"},{\"text\":\"复兴\",\"value\":\"130404\",\"children\":\"\"},{\"text\":\"峰峰矿\",\"value\":\"130406\",\"children\":\"\"},{\"text\":\"邯郸\",\"value\":\"130421\",\"children\":\"\"},{\"text\":\"临漳\",\"value\":\"130423\",\"children\":\"\"},{\"text\":\"成安\",\"value\":\"130424\",\"children\":\"\"},{\"text\":\"大名\",\"value\":\"130425\",\"children\":\"\"},{\"text\":\"涉县\",\"value\":\"130426\",\"children\":\"\"},{\"text\":\"磁县\",\"value\":\"130427\",\"children\":\"\"},{\"text\":\"肥乡\",\"value\":\"130428\",\"children\":\"\"},{\"text\":\"永年\",\"value\":\"130429\",\"children\":\"\"},{\"text\":\"邱县\",\"value\":\"130430\",\"children\":\"\"},{\"text\":\"鸡泽\",\"value\":\"130431\",\"children\":\"\"},{\"text\":\"广平\",\"value\":\"130432\",\"children\":\"\"},{\"text\":\"馆陶\",\"value\":\"130433\",\"children\":\"\"},{\"text\":\"魏县\",\"value\":\"130434\",\"children\":\"\"},{\"text\":\"曲周\",\"value\":\"130435\",\"children\":\"\"},{\"text\":\"武安\",\"value\":\"130481\",\"children\":\"\"}]},{\"text\":\"邢台\",\"value\":\"130500\",\"children\":[{\"text\":\"桥东\",\"value\":\"130502\",\"children\":\"\"},{\"text\":\"桥西\",\"value\":\"130503\",\"children\":\"\"},{\"text\":\"邢台\",\"value\":\"130521\",\"children\":\"\"},{\"text\":\"临城\",\"value\":\"130522\",\"children\":\"\"},{\"text\":\"内丘\",\"value\":\"130523\",\"children\":\"\"},{\"text\":\"柏乡\",\"value\":\"130524\",\"children\":\"\"},{\"text\":\"隆尧\",\"value\":\"130525\",\"children\":\"\"},{\"text\":\"任县\",\"value\":\"130526\",\"children\":\"\"},{\"text\":\"南和\",\"value\":\"130527\",\"children\":\"\"},{\"text\":\"宁晋\",\"value\":\"130528\",\"children\":\"\"},{\"text\":\"巨鹿\",\"value\":\"130529\",\"children\":\"\"},{\"text\":\"新河\",\"value\":\"130530\",\"children\":\"\"},{\"text\":\"广宗\",\"value\":\"130531\",\"children\":\"\"},{\"text\":\"平乡\",\"value\":\"130532\",\"children\":\"\"},{\"text\":\"威县\",\"value\":\"130533\",\"children\":\"\"},{\"text\":\"清河\",\"value\":\"130534\",\"children\":\"\"},{\"text\":\"临西\",\"value\":\"130535\",\"children\":\"\"},{\"text\":\"南宫\",\"value\":\"130581\",\"children\":\"\"},{\"text\":\"沙河\",\"value\":\"130582\",\"children\":\"\"}]},{\"text\":\"保定\",\"value\":\"130600\",\"children\":[{\"text\":\"新市\",\"value\":\"130602\",\"children\":\"\"},{\"text\":\"北市\",\"value\":\"130603\",\"children\":\"\"},{\"text\":\"南市\",\"value\":\"130604\",\"children\":\"\"},{\"text\":\"满城\",\"value\":\"130621\",\"children\":\"\"},{\"text\":\"清苑\",\"value\":\"130622\",\"children\":\"\"},{\"text\":\"涞水\",\"value\":\"130623\",\"children\":\"\"},{\"text\":\"阜平\",\"value\":\"130624\",\"children\":\"\"},{\"text\":\"徐水\",\"value\":\"130625\",\"children\":\"\"},{\"text\":\"定兴\",\"value\":\"130626\",\"children\":\"\"},{\"text\":\"唐县\",\"value\":\"130627\",\"children\":\"\"},{\"text\":\"高阳\",\"value\":\"130628\",\"children\":\"\"},{\"text\":\"容城\",\"value\":\"130629\",\"children\":\"\"},{\"text\":\"涞源\",\"value\":\"130630\",\"children\":\"\"},{\"text\":\"望都\",\"value\":\"130631\",\"children\":\"\"},{\"text\":\"安新\",\"value\":\"130632\",\"children\":\"\"},{\"text\":\"易县\",\"value\":\"130633\",\"children\":\"\"},{\"text\":\"曲阳\",\"value\":\"130634\",\"children\":\"\"},{\"text\":\"蠡县\",\"value\":\"130635\",\"children\":\"\"},{\"text\":\"顺平\",\"value\":\"130636\",\"children\":\"\"},{\"text\":\"博野\",\"value\":\"130637\",\"children\":\"\"},{\"text\":\"雄县\",\"value\":\"130638\",\"children\":\"\"},{\"text\":\"涿州\",\"value\":\"130681\",\"children\":\"\"},{\"text\":\"定州\",\"value\":\"130682\",\"children\":\"\"},{\"text\":\"安国\",\"value\":\"130683\",\"children\":\"\"},{\"text\":\"高碑店\",\"value\":\"130684\",\"children\":\"\"}]},{\"text\":\"张家口\",\"value\":\"130700\",\"children\":[{\"text\":\"桥东\",\"value\":\"130702\",\"children\":\"\"},{\"text\":\"桥西\",\"value\":\"130703\",\"children\":\"\"},{\"text\":\"宣化区\",\"value\":\"130705\",\"children\":\"\"},{\"text\":\"下花园\",\"value\":\"130706\",\"children\":\"\"},{\"text\":\"宣化县\",\"value\":\"130721\",\"children\":\"\"},{\"text\":\"张北\",\"value\":\"130722\",\"children\":\"\"},{\"text\":\"康保\",\"value\":\"130723\",\"children\":\"\"},{\"text\":\"沽源\",\"value\":\"130724\",\"children\":\"\"},{\"text\":\"尚义\",\"value\":\"130725\",\"children\":\"\"},{\"text\":\"蔚县\",\"value\":\"130726\",\"children\":\"\"},{\"text\":\"阳原\",\"value\":\"130727\",\"children\":\"\"},{\"text\":\"怀安\",\"value\":\"130728\",\"children\":\"\"},{\"text\":\"万全\",\"value\":\"130729\",\"children\":\"\"},{\"text\":\"怀来\",\"value\":\"130730\",\"children\":\"\"},{\"text\":\"涿鹿\",\"value\":\"130731\",\"children\":\"\"},{\"text\":\"赤城\",\"value\":\"130732\",\"children\":\"\"},{\"text\":\"崇礼\",\"value\":\"130733\",\"children\":\"\"}]},{\"text\":\"承德\",\"value\":\"130800\",\"children\":[{\"text\":\"双桥\",\"value\":\"130802\",\"children\":\"\"},{\"text\":\"双滦\",\"value\":\"130803\",\"children\":\"\"},{\"text\":\"鹰手营子矿\",\"value\":\"130804\",\"children\":\"\"},{\"text\":\"承德\",\"value\":\"130821\",\"children\":\"\"},{\"text\":\"兴隆\",\"value\":\"130822\",\"children\":\"\"},{\"text\":\"平泉\",\"value\":\"130823\",\"children\":\"\"},{\"text\":\"滦平\",\"value\":\"130824\",\"children\":\"\"},{\"text\":\"隆化\",\"value\":\"130825\",\"children\":\"\"},{\"text\":\"丰宁\",\"value\":\"130826\",\"children\":\"\"},{\"text\":\"宽城\",\"value\":\"130827\",\"children\":\"\"},{\"text\":\"围场\",\"value\":\"130828\",\"children\":\"\"}]},{\"text\":\"沧州\",\"value\":\"130900\",\"children\":[{\"text\":\"新华\",\"value\":\"130902\",\"children\":\"\"},{\"text\":\"运河\",\"value\":\"130903\",\"children\":\"\"},{\"text\":\"沧县\",\"value\":\"130921\",\"children\":\"\"},{\"text\":\"青县\",\"value\":\"130922\",\"children\":\"\"},{\"text\":\"东光\",\"value\":\"130923\",\"children\":\"\"},{\"text\":\"海兴\",\"value\":\"130924\",\"children\":\"\"},{\"text\":\"盐山\",\"value\":\"130925\",\"children\":\"\"},{\"text\":\"肃宁\",\"value\":\"130926\",\"children\":\"\"},{\"text\":\"南皮\",\"value\":\"130927\",\"children\":\"\"},{\"text\":\"吴桥\",\"value\":\"130928\",\"children\":\"\"},{\"text\":\"献县\",\"value\":\"130929\",\"children\":\"\"},{\"text\":\"孟村\",\"value\":\"130930\",\"children\":\"\"},{\"text\":\"泊头\",\"value\":\"130981\",\"children\":\"\"},{\"text\":\"任丘\",\"value\":\"130982\",\"children\":\"\"},{\"text\":\"黄骅\",\"value\":\"130983\",\"children\":\"\"},{\"text\":\"河间\",\"value\":\"130984\",\"children\":\"\"}]},{\"text\":\"廊坊\",\"value\":\"131000\",\"children\":[{\"text\":\"安次\",\"value\":\"131002\",\"children\":\"\"},{\"text\":\"广阳\",\"value\":\"131003\",\"children\":\"\"},{\"text\":\"固安\",\"value\":\"131022\",\"children\":\"\"},{\"text\":\"永清\",\"value\":\"131023\",\"children\":\"\"},{\"text\":\"香河\",\"value\":\"131024\",\"children\":\"\"},{\"text\":\"大城\",\"value\":\"131025\",\"children\":\"\"},{\"text\":\"文安\",\"value\":\"131026\",\"children\":\"\"},{\"text\":\"大厂\",\"value\":\"131028\",\"children\":\"\"},{\"text\":\"霸州\",\"value\":\"131081\",\"children\":\"\"},{\"text\":\"三河\",\"value\":\"131082\",\"children\":\"\"}]},{\"text\":\"衡水\",\"value\":\"131100\",\"children\":[{\"text\":\"桃城\",\"value\":\"131102\",\"children\":\"\"},{\"text\":\"枣强\",\"value\":\"131121\",\"children\":\"\"},{\"text\":\"武邑\",\"value\":\"131122\",\"children\":\"\"},{\"text\":\"武强\",\"value\":\"131123\",\"children\":\"\"},{\"text\":\"饶阳\",\"value\":\"131124\",\"children\":\"\"},{\"text\":\"安平\",\"value\":\"131125\",\"children\":\"\"},{\"text\":\"故城\",\"value\":\"131126\",\"children\":\"\"},{\"text\":\"景县\",\"value\":\"131127\",\"children\":\"\"},{\"text\":\"阜城\",\"value\":\"131128\",\"children\":\"\"},{\"text\":\"冀州\",\"value\":\"131181\",\"children\":\"\"},{\"text\":\"深州\",\"value\":\"131182\",\"children\":\"\"}]}]},{\"text\":\"山西\",\"value\":\"140000\",\"children\":[{\"text\":\"太原\",\"value\":\"140100\",\"children\":[{\"text\":\"小店\",\"value\":\"140105\",\"children\":\"\"},{\"text\":\"迎泽\",\"value\":\"140106\",\"children\":\"\"},{\"text\":\"杏花岭\",\"value\":\"140107\",\"children\":\"\"},{\"text\":\"尖草坪\",\"value\":\"140108\",\"children\":\"\"},{\"text\":\"万柏林\",\"value\":\"140109\",\"children\":\"\"},{\"text\":\"晋源\",\"value\":\"140110\",\"children\":\"\"},{\"text\":\"清徐\",\"value\":\"140121\",\"children\":\"\"},{\"text\":\"阳曲\",\"value\":\"140122\",\"children\":\"\"},{\"text\":\"娄烦\",\"value\":\"140123\",\"children\":\"\"},{\"text\":\"古交\",\"value\":\"140181\",\"children\":\"\"}]},{\"text\":\"大同\",\"value\":\"140200\",\"children\":[{\"text\":\"城区\",\"value\":\"140202\",\"children\":\"\"},{\"text\":\"矿区\",\"value\":\"140203\",\"children\":\"\"},{\"text\":\"南郊\",\"value\":\"140211\",\"children\":\"\"},{\"text\":\"新荣\",\"value\":\"140212\",\"children\":\"\"},{\"text\":\"阳高\",\"value\":\"140221\",\"children\":\"\"},{\"text\":\"天镇\",\"value\":\"140222\",\"children\":\"\"},{\"text\":\"广灵\",\"value\":\"140223\",\"children\":\"\"},{\"text\":\"灵丘\",\"value\":\"140224\",\"children\":\"\"},{\"text\":\"浑源\",\"value\":\"140225\",\"children\":\"\"},{\"text\":\"左云\",\"value\":\"140226\",\"children\":\"\"},{\"text\":\"大同\",\"value\":\"140227\",\"children\":\"\"}]},{\"text\":\"阳泉\",\"value\":\"140300\",\"children\":[{\"text\":\"城区\",\"value\":\"140302\",\"children\":\"\"},{\"text\":\"矿区\",\"value\":\"140303\",\"children\":\"\"},{\"text\":\"郊区\",\"value\":\"140311\",\"children\":\"\"},{\"text\":\"平定\",\"value\":\"140321\",\"children\":\"\"},{\"text\":\"盂县\",\"value\":\"140322\",\"children\":\"\"}]},{\"text\":\"长治\",\"value\":\"140400\",\"children\":[{\"text\":\"长治\",\"value\":\"140421\",\"children\":\"\"},{\"text\":\"襄垣\",\"value\":\"140423\",\"children\":\"\"},{\"text\":\"屯留\",\"value\":\"140424\",\"children\":\"\"},{\"text\":\"平顺\",\"value\":\"140425\",\"children\":\"\"},{\"text\":\"黎城\",\"value\":\"140426\",\"children\":\"\"},{\"text\":\"壶关\",\"value\":\"140427\",\"children\":\"\"},{\"text\":\"长子\",\"value\":\"140428\",\"children\":\"\"},{\"text\":\"武乡\",\"value\":\"140429\",\"children\":\"\"},{\"text\":\"沁县\",\"value\":\"140430\",\"children\":\"\"},{\"text\":\"沁源\",\"value\":\"140431\",\"children\":\"\"},{\"text\":\"潞城\",\"value\":\"140481\",\"children\":\"\"},{\"text\":\"城区\",\"value\":\"140482\",\"children\":\"\"},{\"text\":\"郊区\",\"value\":\"140483\",\"children\":\"\"}]},{\"text\":\"晋城\",\"value\":\"140500\",\"children\":[{\"text\":\"城区\",\"value\":\"140502\",\"children\":\"\"},{\"text\":\"沁水\",\"value\":\"140521\",\"children\":\"\"},{\"text\":\"阳城\",\"value\":\"140522\",\"children\":\"\"},{\"text\":\"陵川\",\"value\":\"140524\",\"children\":\"\"},{\"text\":\"泽州\",\"value\":\"140525\",\"children\":\"\"},{\"text\":\"高平\",\"value\":\"140581\",\"children\":\"\"}]},{\"text\":\"朔州\",\"value\":\"140600\",\"children\":[{\"text\":\"朔城\",\"value\":\"140602\",\"children\":\"\"},{\"text\":\"平鲁\",\"value\":\"140603\",\"children\":\"\"},{\"text\":\"山阴\",\"value\":\"140621\",\"children\":\"\"},{\"text\":\"应县\",\"value\":\"140622\",\"children\":\"\"},{\"text\":\"右玉\",\"value\":\"140623\",\"children\":\"\"},{\"text\":\"怀仁\",\"value\":\"140624\",\"children\":\"\"}]},{\"text\":\"晋中\",\"value\":\"140700\",\"children\":[{\"text\":\"榆次\",\"value\":\"140702\",\"children\":\"\"},{\"text\":\"榆社\",\"value\":\"140721\",\"children\":\"\"},{\"text\":\"左权\",\"value\":\"140722\",\"children\":\"\"},{\"text\":\"和顺\",\"value\":\"140723\",\"children\":\"\"},{\"text\":\"昔阳\",\"value\":\"140724\",\"children\":\"\"},{\"text\":\"寿阳\",\"value\":\"140725\",\"children\":\"\"},{\"text\":\"太谷\",\"value\":\"140726\",\"children\":\"\"},{\"text\":\"祁县\",\"value\":\"140727\",\"children\":\"\"},{\"text\":\"平遥\",\"value\":\"140728\",\"children\":\"\"},{\"text\":\"灵石\",\"value\":\"140729\",\"children\":\"\"},{\"text\":\"介休\",\"value\":\"140781\",\"children\":\"\"}]},{\"text\":\"运城\",\"value\":\"140800\",\"children\":[{\"text\":\"盐湖\",\"value\":\"140802\",\"children\":\"\"},{\"text\":\"临猗\",\"value\":\"140821\",\"children\":\"\"},{\"text\":\"万荣\",\"value\":\"140822\",\"children\":\"\"},{\"text\":\"闻喜\",\"value\":\"140823\",\"children\":\"\"},{\"text\":\"稷山\",\"value\":\"140824\",\"children\":\"\"},{\"text\":\"新绛\",\"value\":\"140825\",\"children\":\"\"},{\"text\":\"绛县\",\"value\":\"140826\",\"children\":\"\"},{\"text\":\"垣曲\",\"value\":\"140827\",\"children\":\"\"},{\"text\":\"夏县\",\"value\":\"140828\",\"children\":\"\"},{\"text\":\"平陆\",\"value\":\"140829\",\"children\":\"\"},{\"text\":\"芮城\",\"value\":\"140830\",\"children\":\"\"},{\"text\":\"永济\",\"value\":\"140881\",\"children\":\"\"},{\"text\":\"河津\",\"value\":\"140882\",\"children\":\"\"}]},{\"text\":\"忻州\",\"value\":\"140900\",\"children\":[{\"text\":\"忻府\",\"value\":\"140902\",\"children\":\"\"},{\"text\":\"定襄\",\"value\":\"140921\",\"children\":\"\"},{\"text\":\"五台\",\"value\":\"140922\",\"children\":\"\"},{\"text\":\"代县\",\"value\":\"140923\",\"children\":\"\"},{\"text\":\"繁峙\",\"value\":\"140924\",\"children\":\"\"},{\"text\":\"宁武\",\"value\":\"140925\",\"children\":\"\"},{\"text\":\"静乐\",\"value\":\"140926\",\"children\":\"\"},{\"text\":\"神池\",\"value\":\"140927\",\"children\":\"\"},{\"text\":\"五寨\",\"value\":\"140928\",\"children\":\"\"},{\"text\":\"岢岚\",\"value\":\"140929\",\"children\":\"\"},{\"text\":\"河曲\",\"value\":\"140930\",\"children\":\"\"},{\"text\":\"保德\",\"value\":\"140931\",\"children\":\"\"},{\"text\":\"偏关\",\"value\":\"140932\",\"children\":\"\"},{\"text\":\"原平\",\"value\":\"140981\",\"children\":\"\"}]},{\"text\":\"临汾\",\"value\":\"141000\",\"children\":[{\"text\":\"尧都\",\"value\":\"141002\",\"children\":\"\"},{\"text\":\"曲沃\",\"value\":\"141021\",\"children\":\"\"},{\"text\":\"翼城\",\"value\":\"141022\",\"children\":\"\"},{\"text\":\"襄汾\",\"value\":\"141023\",\"children\":\"\"},{\"text\":\"洪洞\",\"value\":\"141024\",\"children\":\"\"},{\"text\":\"古县\",\"value\":\"141025\",\"children\":\"\"},{\"text\":\"安泽\",\"value\":\"141026\",\"children\":\"\"},{\"text\":\"浮山\",\"value\":\"141027\",\"children\":\"\"},{\"text\":\"吉县\",\"value\":\"141028\",\"children\":\"\"},{\"text\":\"乡宁\",\"value\":\"141029\",\"children\":\"\"},{\"text\":\"大宁\",\"value\":\"141030\",\"children\":\"\"},{\"text\":\"隰县\",\"value\":\"141031\",\"children\":\"\"},{\"text\":\"永和\",\"value\":\"141032\",\"children\":\"\"},{\"text\":\"蒲县\",\"value\":\"141033\",\"children\":\"\"},{\"text\":\"汾西\",\"value\":\"141034\",\"children\":\"\"},{\"text\":\"侯马\",\"value\":\"141081\",\"children\":\"\"},{\"text\":\"霍州\",\"value\":\"141082\",\"children\":\"\"}]},{\"text\":\"吕梁\",\"value\":\"141100\",\"children\":[{\"text\":\"离石\",\"value\":\"141102\",\"children\":\"\"},{\"text\":\"文水\",\"value\":\"141121\",\"children\":\"\"},{\"text\":\"交城\",\"value\":\"141122\",\"children\":\"\"},{\"text\":\"兴县\",\"value\":\"141123\",\"children\":\"\"},{\"text\":\"临县\",\"value\":\"141124\",\"children\":\"\"},{\"text\":\"柳林\",\"value\":\"141125\",\"children\":\"\"},{\"text\":\"石楼\",\"value\":\"141126\",\"children\":\"\"},{\"text\":\"岚县\",\"value\":\"141127\",\"children\":\"\"},{\"text\":\"方山\",\"value\":\"141128\",\"children\":\"\"},{\"text\":\"中阳\",\"value\":\"141129\",\"children\":\"\"},{\"text\":\"交口\",\"value\":\"141130\",\"children\":\"\"},{\"text\":\"孝义\",\"value\":\"141181\",\"children\":\"\"},{\"text\":\"汾阳\",\"value\":\"141182\",\"children\":\"\"}]}]},{\"text\":\"内蒙古\",\"value\":\"150000\",\"children\":[{\"text\":\"呼和浩特\",\"value\":\"150100\",\"children\":[{\"text\":\"新城\",\"value\":\"150102\",\"children\":\"\"},{\"text\":\"回民\",\"value\":\"150103\",\"children\":\"\"},{\"text\":\"玉泉\",\"value\":\"150104\",\"children\":\"\"},{\"text\":\"赛罕\",\"value\":\"150105\",\"children\":\"\"},{\"text\":\"土默特左\",\"value\":\"150121\",\"children\":\"\"},{\"text\":\"托克托\",\"value\":\"150122\",\"children\":\"\"},{\"text\":\"和林格尔\",\"value\":\"150123\",\"children\":\"\"},{\"text\":\"清水河\",\"value\":\"150124\",\"children\":\"\"},{\"text\":\"武川\",\"value\":\"150125\",\"children\":\"\"}]},{\"text\":\"包头\",\"value\":\"150200\",\"children\":[{\"text\":\"东河\",\"value\":\"150202\",\"children\":\"\"},{\"text\":\"昆都仑\",\"value\":\"150203\",\"children\":\"\"},{\"text\":\"青山\",\"value\":\"150204\",\"children\":\"\"},{\"text\":\"石拐\",\"value\":\"150205\",\"children\":\"\"},{\"text\":\"白云矿区\",\"value\":\"150206\",\"children\":\"\"},{\"text\":\"九原\",\"value\":\"150207\",\"children\":\"\"},{\"text\":\"土默特右\",\"value\":\"150221\",\"children\":\"\"},{\"text\":\"固阳\",\"value\":\"150222\",\"children\":\"\"},{\"text\":\"达尔罕茂明安联合\",\"value\":\"150223\",\"children\":\"\"}]},{\"text\":\"乌海\",\"value\":\"150300\",\"children\":[{\"text\":\"海勃湾\",\"value\":\"150302\",\"children\":\"\"},{\"text\":\"海南\",\"value\":\"150303\",\"children\":\"\"},{\"text\":\"乌达\",\"value\":\"150304\",\"children\":\"\"}]},{\"text\":\"赤峰\",\"value\":\"150400\",\"children\":[{\"text\":\"红山\",\"value\":\"150402\",\"children\":\"\"},{\"text\":\"元宝山\",\"value\":\"150403\",\"children\":\"\"},{\"text\":\"松山\",\"value\":\"150404\",\"children\":\"\"},{\"text\":\"阿鲁科尔沁\",\"value\":\"150421\",\"children\":\"\"},{\"text\":\"巴林左\",\"value\":\"150422\",\"children\":\"\"},{\"text\":\"巴林右\",\"value\":\"150423\",\"children\":\"\"},{\"text\":\"林西\",\"value\":\"150424\",\"children\":\"\"},{\"text\":\"克什克腾\",\"value\":\"150425\",\"children\":\"\"},{\"text\":\"翁牛特\",\"value\":\"150426\",\"children\":\"\"},{\"text\":\"喀喇沁\",\"value\":\"150428\",\"children\":\"\"},{\"text\":\"宁城\",\"value\":\"150429\",\"children\":\"\"},{\"text\":\"敖汉\",\"value\":\"150430\",\"children\":\"\"}]},{\"text\":\"通辽\",\"value\":\"150500\",\"children\":[{\"text\":\"科尔沁\",\"value\":\"150502\",\"children\":\"\"},{\"text\":\"科尔沁左翼中\",\"value\":\"150521\",\"children\":\"\"},{\"text\":\"科尔沁左翼后\",\"value\":\"150522\",\"children\":\"\"},{\"text\":\"开鲁\",\"value\":\"150523\",\"children\":\"\"},{\"text\":\"库伦\",\"value\":\"150524\",\"children\":\"\"},{\"text\":\"奈曼\",\"value\":\"150525\",\"children\":\"\"},{\"text\":\"扎鲁特\",\"value\":\"150526\",\"children\":\"\"},{\"text\":\"霍林郭勒\",\"value\":\"150581\",\"children\":\"\"}]},{\"text\":\"鄂尔多斯\",\"value\":\"150600\",\"children\":[{\"text\":\"东胜\",\"value\":\"150602\",\"children\":\"\"},{\"text\":\"达拉特\",\"value\":\"150621\",\"children\":\"\"},{\"text\":\"准格尔\",\"value\":\"150622\",\"children\":\"\"},{\"text\":\"鄂托克前\",\"value\":\"150623\",\"children\":\"\"},{\"text\":\"鄂托克\",\"value\":\"150624\",\"children\":\"\"},{\"text\":\"杭锦\",\"value\":\"150625\",\"children\":\"\"},{\"text\":\"乌审\",\"value\":\"150626\",\"children\":\"\"},{\"text\":\"伊金霍洛\",\"value\":\"150627\",\"children\":\"\"}]},{\"text\":\"呼伦贝尔\",\"value\":\"150700\",\"children\":[{\"text\":\"海拉尔\",\"value\":\"150702\",\"children\":\"\"},{\"text\":\"扎赉诺尔\",\"value\":\"150703\",\"children\":\"\"},{\"text\":\"阿荣\",\"value\":\"150721\",\"children\":\"\"},{\"text\":\"莫力达瓦\",\"value\":\"150722\",\"children\":\"\"},{\"text\":\"鄂伦春\",\"value\":\"150723\",\"children\":\"\"},{\"text\":\"鄂温克\",\"value\":\"150724\",\"children\":\"\"},{\"text\":\"陈巴尔虎\",\"value\":\"150725\",\"children\":\"\"},{\"text\":\"新巴尔虎左\",\"value\":\"150726\",\"children\":\"\"},{\"text\":\"新巴尔虎右\",\"value\":\"150727\",\"children\":\"\"},{\"text\":\"满洲里\",\"value\":\"150781\",\"children\":\"\"},{\"text\":\"牙克石\",\"value\":\"150782\",\"children\":\"\"},{\"text\":\"扎兰屯\",\"value\":\"150783\",\"children\":\"\"},{\"text\":\"额尔古纳\",\"value\":\"150784\",\"children\":\"\"},{\"text\":\"根河\",\"value\":\"150785\",\"children\":\"\"}]},{\"text\":\"巴彦淖尔\",\"value\":\"150800\",\"children\":[{\"text\":\"临河\",\"value\":\"150802\",\"children\":\"\"},{\"text\":\"五原\",\"value\":\"150821\",\"children\":\"\"},{\"text\":\"磴口\",\"value\":\"150822\",\"children\":\"\"},{\"text\":\"乌拉特前\",\"value\":\"150823\",\"children\":\"\"},{\"text\":\"乌拉特中\",\"value\":\"150824\",\"children\":\"\"},{\"text\":\"乌拉特后\",\"value\":\"150825\",\"children\":\"\"},{\"text\":\"杭锦后\",\"value\":\"150826\",\"children\":\"\"}]},{\"text\":\"乌兰察布\",\"value\":\"150900\",\"children\":[{\"text\":\"集宁\",\"value\":\"150902\",\"children\":\"\"},{\"text\":\"卓资\",\"value\":\"150921\",\"children\":\"\"},{\"text\":\"化德\",\"value\":\"150922\",\"children\":\"\"},{\"text\":\"商都\",\"value\":\"150923\",\"children\":\"\"},{\"text\":\"兴和\",\"value\":\"150924\",\"children\":\"\"},{\"text\":\"凉城\",\"value\":\"150925\",\"children\":\"\"},{\"text\":\"察哈尔右翼前\",\"value\":\"150926\",\"children\":\"\"},{\"text\":\"察哈尔右翼中\",\"value\":\"150927\",\"children\":\"\"},{\"text\":\"察哈尔右翼后\",\"value\":\"150928\",\"children\":\"\"},{\"text\":\"四子王\",\"value\":\"150929\",\"children\":\"\"},{\"text\":\"丰镇\",\"value\":\"150981\",\"children\":\"\"}]},{\"text\":\"兴安\",\"value\":\"152200\",\"children\":[{\"text\":\"乌兰浩特\",\"value\":\"152201\",\"children\":\"\"},{\"text\":\"阿尔山\",\"value\":\"152202\",\"children\":\"\"},{\"text\":\"科尔沁右翼前\",\"value\":\"152221\",\"children\":\"\"},{\"text\":\"科尔沁右翼中\",\"value\":\"152222\",\"children\":\"\"},{\"text\":\"扎赉特\",\"value\":\"152223\",\"children\":\"\"},{\"text\":\"突泉\",\"value\":\"152224\",\"children\":\"\"}]},{\"text\":\"锡林郭勒\",\"value\":\"152500\",\"children\":[{\"text\":\"二连浩特\",\"value\":\"152501\",\"children\":\"\"},{\"text\":\"锡林浩特\",\"value\":\"152502\",\"children\":\"\"},{\"text\":\"阿巴嘎\",\"value\":\"152522\",\"children\":\"\"},{\"text\":\"苏尼特左\",\"value\":\"152523\",\"children\":\"\"},{\"text\":\"苏尼特右\",\"value\":\"152524\",\"children\":\"\"},{\"text\":\"东乌珠穆沁\",\"value\":\"152525\",\"children\":\"\"},{\"text\":\"西乌珠穆沁\",\"value\":\"152526\",\"children\":\"\"},{\"text\":\"太仆寺\",\"value\":\"152527\",\"children\":\"\"},{\"text\":\"镶黄\",\"value\":\"152528\",\"children\":\"\"},{\"text\":\"正镶白\",\"value\":\"152529\",\"children\":\"\"},{\"text\":\"正蓝\",\"value\":\"152530\",\"children\":\"\"},{\"text\":\"多伦\",\"value\":\"152531\",\"children\":\"\"}]},{\"text\":\"阿拉善\",\"value\":\"152900\",\"children\":[{\"text\":\"阿拉善左\",\"value\":\"152921\",\"children\":\"\"},{\"text\":\"阿拉善右\",\"value\":\"152922\",\"children\":\"\"},{\"text\":\"额济纳\",\"value\":\"152923\",\"children\":\"\"}]}]},{\"text\":\"辽宁\",\"value\":\"210000\",\"children\":[{\"text\":\"沈阳\",\"value\":\"210100\",\"children\":[{\"text\":\"和平\",\"value\":\"210102\",\"children\":\"\"},{\"text\":\"沈河\",\"value\":\"210103\",\"children\":\"\"},{\"text\":\"大东\",\"value\":\"210104\",\"children\":\"\"},{\"text\":\"皇姑\",\"value\":\"210105\",\"children\":\"\"},{\"text\":\"铁西\",\"value\":\"210106\",\"children\":\"\"},{\"text\":\"苏家屯\",\"value\":\"210111\",\"children\":\"\"},{\"text\":\"浑南\",\"value\":\"210112\",\"children\":\"\"},{\"text\":\"新城子\",\"value\":\"210113\",\"children\":\"\"},{\"text\":\"于洪\",\"value\":\"210114\",\"children\":\"\"},{\"text\":\"辽中\",\"value\":\"210122\",\"children\":\"\"},{\"text\":\"康平\",\"value\":\"210123\",\"children\":\"\"},{\"text\":\"法库\",\"value\":\"210124\",\"children\":\"\"},{\"text\":\"新民\",\"value\":\"210181\",\"children\":\"\"},{\"text\":\"沈北\",\"value\":\"210184\",\"children\":\"\"}]},{\"text\":\"大连\",\"value\":\"210200\",\"children\":[{\"text\":\"中山\",\"value\":\"210202\",\"children\":\"\"},{\"text\":\"西岗\",\"value\":\"210203\",\"children\":\"\"},{\"text\":\"沙河口\",\"value\":\"210204\",\"children\":\"\"},{\"text\":\"甘井子\",\"value\":\"210211\",\"children\":\"\"},{\"text\":\"旅顺口\",\"value\":\"210212\",\"children\":\"\"},{\"text\":\"金州\",\"value\":\"210213\",\"children\":\"\"},{\"text\":\"长海\",\"value\":\"210224\",\"children\":\"\"},{\"text\":\"瓦房店\",\"value\":\"210281\",\"children\":\"\"},{\"text\":\"普兰店\",\"value\":\"210282\",\"children\":\"\"},{\"text\":\"庄河\",\"value\":\"210283\",\"children\":\"\"}]},{\"text\":\"鞍山\",\"value\":\"210300\",\"children\":[{\"text\":\"铁东\",\"value\":\"210302\",\"children\":\"\"},{\"text\":\"铁西\",\"value\":\"210303\",\"children\":\"\"},{\"text\":\"立山\",\"value\":\"210304\",\"children\":\"\"},{\"text\":\"千山\",\"value\":\"210311\",\"children\":\"\"},{\"text\":\"台安\",\"value\":\"210321\",\"children\":\"\"},{\"text\":\"岫岩\",\"value\":\"210323\",\"children\":\"\"},{\"text\":\"海城\",\"value\":\"210381\",\"children\":\"\"}]},{\"text\":\"抚顺\",\"value\":\"210400\",\"children\":[{\"text\":\"新抚\",\"value\":\"210402\",\"children\":\"\"},{\"text\":\"东洲\",\"value\":\"210403\",\"children\":\"\"},{\"text\":\"望花\",\"value\":\"210404\",\"children\":\"\"},{\"text\":\"顺城\",\"value\":\"210411\",\"children\":\"\"},{\"text\":\"抚顺\",\"value\":\"210421\",\"children\":\"\"},{\"text\":\"新宾\",\"value\":\"210422\",\"children\":\"\"},{\"text\":\"清原\",\"value\":\"210423\",\"children\":\"\"}]},{\"text\":\"本溪\",\"value\":\"210500\",\"children\":[{\"text\":\"平山\",\"value\":\"210502\",\"children\":\"\"},{\"text\":\"溪湖\",\"value\":\"210503\",\"children\":\"\"},{\"text\":\"明山\",\"value\":\"210504\",\"children\":\"\"},{\"text\":\"南芬\",\"value\":\"210505\",\"children\":\"\"},{\"text\":\"本溪\",\"value\":\"210521\",\"children\":\"\"},{\"text\":\"桓仁\",\"value\":\"210522\",\"children\":\"\"}]},{\"text\":\"丹东\",\"value\":\"210600\",\"children\":[{\"text\":\"元宝\",\"value\":\"210602\",\"children\":\"\"},{\"text\":\"振兴\",\"value\":\"210603\",\"children\":\"\"},{\"text\":\"振安\",\"value\":\"210604\",\"children\":\"\"},{\"text\":\"宽甸\",\"value\":\"210624\",\"children\":\"\"},{\"text\":\"东港\",\"value\":\"210681\",\"children\":\"\"},{\"text\":\"凤城\",\"value\":\"210682\",\"children\":\"\"}]},{\"text\":\"锦州\",\"value\":\"210700\",\"children\":[{\"text\":\"古塔\",\"value\":\"210702\",\"children\":\"\"},{\"text\":\"凌河\",\"value\":\"210703\",\"children\":\"\"},{\"text\":\"太和\",\"value\":\"210711\",\"children\":\"\"},{\"text\":\"黑山\",\"value\":\"210726\",\"children\":\"\"},{\"text\":\"义县\",\"value\":\"210727\",\"children\":\"\"},{\"text\":\"凌海\",\"value\":\"210781\",\"children\":\"\"},{\"text\":\"北镇\",\"value\":\"210782\",\"children\":\"\"}]},{\"text\":\"营口\",\"value\":\"210800\",\"children\":[{\"text\":\"站前\",\"value\":\"210802\",\"children\":\"\"},{\"text\":\"西市\",\"value\":\"210803\",\"children\":\"\"},{\"text\":\"鲅鱼圈\",\"value\":\"210804\",\"children\":\"\"},{\"text\":\"老边\",\"value\":\"210811\",\"children\":\"\"},{\"text\":\"盖州\",\"value\":\"210881\",\"children\":\"\"},{\"text\":\"大石桥\",\"value\":\"210882\",\"children\":\"\"}]},{\"text\":\"阜新\",\"value\":\"210900\",\"children\":[{\"text\":\"海州\",\"value\":\"210902\",\"children\":\"\"},{\"text\":\"新邱\",\"value\":\"210903\",\"children\":\"\"},{\"text\":\"太平\",\"value\":\"210904\",\"children\":\"\"},{\"text\":\"清河门\",\"value\":\"210905\",\"children\":\"\"},{\"text\":\"细河\",\"value\":\"210911\",\"children\":\"\"},{\"text\":\"阜新\",\"value\":\"210921\",\"children\":\"\"},{\"text\":\"彰武\",\"value\":\"210922\",\"children\":\"\"}]},{\"text\":\"辽阳\",\"value\":\"211000\",\"children\":[{\"text\":\"白塔\",\"value\":\"211002\",\"children\":\"\"},{\"text\":\"文圣\",\"value\":\"211003\",\"children\":\"\"},{\"text\":\"宏伟\",\"value\":\"211004\",\"children\":\"\"},{\"text\":\"弓长岭\",\"value\":\"211005\",\"children\":\"\"},{\"text\":\"太子河\",\"value\":\"211011\",\"children\":\"\"},{\"text\":\"辽阳\",\"value\":\"211021\",\"children\":\"\"},{\"text\":\"灯塔\",\"value\":\"211081\",\"children\":\"\"}]},{\"text\":\"盘锦\",\"value\":\"211100\",\"children\":[{\"text\":\"双台子\",\"value\":\"211102\",\"children\":\"\"},{\"text\":\"兴隆台\",\"value\":\"211103\",\"children\":\"\"},{\"text\":\"大洼\",\"value\":\"211121\",\"children\":\"\"},{\"text\":\"盘山\",\"value\":\"211122\",\"children\":\"\"}]},{\"text\":\"铁岭\",\"value\":\"211200\",\"children\":[{\"text\":\"银州\",\"value\":\"211202\",\"children\":\"\"},{\"text\":\"清河\",\"value\":\"211204\",\"children\":\"\"},{\"text\":\"铁岭\",\"value\":\"211221\",\"children\":\"\"},{\"text\":\"西丰\",\"value\":\"211223\",\"children\":\"\"},{\"text\":\"昌图\",\"value\":\"211224\",\"children\":\"\"},{\"text\":\"调兵山\",\"value\":\"211281\",\"children\":\"\"},{\"text\":\"开原\",\"value\":\"211282\",\"children\":\"\"}]},{\"text\":\"朝阳\",\"value\":\"211300\",\"children\":[{\"text\":\"双塔\",\"value\":\"211302\",\"children\":\"\"},{\"text\":\"龙城\",\"value\":\"211303\",\"children\":\"\"},{\"text\":\"朝阳\",\"value\":\"211321\",\"children\":\"\"},{\"text\":\"建平\",\"value\":\"211322\",\"children\":\"\"},{\"text\":\"喀左\",\"value\":\"211324\",\"children\":\"\"},{\"text\":\"北票\",\"value\":\"211381\",\"children\":\"\"},{\"text\":\"凌源\",\"value\":\"211382\",\"children\":\"\"}]},{\"text\":\"葫芦岛\",\"value\":\"211400\",\"children\":[{\"text\":\"连山\",\"value\":\"211402\",\"children\":\"\"},{\"text\":\"龙港\",\"value\":\"211403\",\"children\":\"\"},{\"text\":\"南票\",\"value\":\"211404\",\"children\":\"\"},{\"text\":\"绥中\",\"value\":\"211421\",\"children\":\"\"},{\"text\":\"建昌\",\"value\":\"211422\",\"children\":\"\"},{\"text\":\"兴城\",\"value\":\"211481\",\"children\":\"\"}]}]},{\"text\":\"吉林\",\"value\":\"220000\",\"children\":[{\"text\":\"长春\",\"value\":\"220100\",\"children\":[{\"text\":\"南关\",\"value\":\"220102\",\"children\":\"\"},{\"text\":\"宽城\",\"value\":\"220103\",\"children\":\"\"},{\"text\":\"朝阳\",\"value\":\"220104\",\"children\":\"\"},{\"text\":\"二道\",\"value\":\"220105\",\"children\":\"\"},{\"text\":\"绿园\",\"value\":\"220106\",\"children\":\"\"},{\"text\":\"双阳\",\"value\":\"220112\",\"children\":\"\"},{\"text\":\"农安\",\"value\":\"220122\",\"children\":\"\"},{\"text\":\"九台\",\"value\":\"220181\",\"children\":\"\"},{\"text\":\"榆树\",\"value\":\"220182\",\"children\":\"\"},{\"text\":\"德惠\",\"value\":\"220183\",\"children\":\"\"}]},{\"text\":\"吉林\",\"value\":\"220200\",\"children\":[{\"text\":\"昌邑\",\"value\":\"220202\",\"children\":\"\"},{\"text\":\"龙潭\",\"value\":\"220203\",\"children\":\"\"},{\"text\":\"船营\",\"value\":\"220204\",\"children\":\"\"},{\"text\":\"丰满\",\"value\":\"220211\",\"children\":\"\"},{\"text\":\"永吉\",\"value\":\"220221\",\"children\":\"\"},{\"text\":\"蛟河\",\"value\":\"220281\",\"children\":\"\"},{\"text\":\"桦甸\",\"value\":\"220282\",\"children\":\"\"},{\"text\":\"舒兰\",\"value\":\"220283\",\"children\":\"\"},{\"text\":\"磐石\",\"value\":\"220284\",\"children\":\"\"}]},{\"text\":\"四平\",\"value\":\"220300\",\"children\":[{\"text\":\"铁西\",\"value\":\"220302\",\"children\":\"\"},{\"text\":\"铁东\",\"value\":\"220303\",\"children\":\"\"},{\"text\":\"梨树\",\"value\":\"220322\",\"children\":\"\"},{\"text\":\"伊通\",\"value\":\"220323\",\"children\":\"\"},{\"text\":\"公主岭\",\"value\":\"220381\",\"children\":\"\"},{\"text\":\"双辽\",\"value\":\"220382\",\"children\":\"\"}]},{\"text\":\"辽源\",\"value\":\"220400\",\"children\":[{\"text\":\"龙山\",\"value\":\"220402\",\"children\":\"\"},{\"text\":\"西安\",\"value\":\"220403\",\"children\":\"\"},{\"text\":\"东丰\",\"value\":\"220421\",\"children\":\"\"},{\"text\":\"东辽\",\"value\":\"220422\",\"children\":\"\"}]},{\"text\":\"通化\",\"value\":\"220500\",\"children\":[{\"text\":\"东昌\",\"value\":\"220502\",\"children\":\"\"},{\"text\":\"二道江\",\"value\":\"220503\",\"children\":\"\"},{\"text\":\"通化\",\"value\":\"220521\",\"children\":\"\"},{\"text\":\"辉南\",\"value\":\"220523\",\"children\":\"\"},{\"text\":\"柳河\",\"value\":\"220524\",\"children\":\"\"},{\"text\":\"梅河口\",\"value\":\"220581\",\"children\":\"\"},{\"text\":\"集安\",\"value\":\"220582\",\"children\":\"\"}]},{\"text\":\"白山\",\"value\":\"220600\",\"children\":[{\"text\":\"浑江\",\"value\":\"220602\",\"children\":\"\"},{\"text\":\"抚松\",\"value\":\"220621\",\"children\":\"\"},{\"text\":\"靖宇\",\"value\":\"220622\",\"children\":\"\"},{\"text\":\"长白\",\"value\":\"220623\",\"children\":\"\"},{\"text\":\"江源\",\"value\":\"220625\",\"children\":\"\"},{\"text\":\"临江\",\"value\":\"220681\",\"children\":\"\"}]},{\"text\":\"松原\",\"value\":\"220700\",\"children\":[{\"text\":\"宁江\",\"value\":\"220702\",\"children\":\"\"},{\"text\":\"前郭\",\"value\":\"220721\",\"children\":\"\"},{\"text\":\"长岭\",\"value\":\"220722\",\"children\":\"\"},{\"text\":\"乾安\",\"value\":\"220723\",\"children\":\"\"},{\"text\":\"扶余\",\"value\":\"220724\",\"children\":\"\"}]},{\"text\":\"白城\",\"value\":\"220800\",\"children\":[{\"text\":\"洮北\",\"value\":\"220802\",\"children\":\"\"},{\"text\":\"镇赉\",\"value\":\"220821\",\"children\":\"\"},{\"text\":\"通榆\",\"value\":\"220822\",\"children\":\"\"},{\"text\":\"洮南\",\"value\":\"220881\",\"children\":\"\"},{\"text\":\"大安\",\"value\":\"220882\",\"children\":\"\"}]},{\"text\":\"延边朝鲜族\",\"value\":\"222400\",\"children\":[{\"text\":\"延吉\",\"value\":\"222401\",\"children\":\"\"},{\"text\":\"图们\",\"value\":\"222402\",\"children\":\"\"},{\"text\":\"敦化\",\"value\":\"222403\",\"children\":\"\"},{\"text\":\"珲春\",\"value\":\"222404\",\"children\":\"\"},{\"text\":\"龙井\",\"value\":\"222405\",\"children\":\"\"},{\"text\":\"和龙\",\"value\":\"222406\",\"children\":\"\"},{\"text\":\"汪清\",\"value\":\"222424\",\"children\":\"\"},{\"text\":\"安图\",\"value\":\"222426\",\"children\":\"\"}]}]},{\"text\":\"黑龙江\",\"value\":\"230000\",\"children\":[{\"text\":\"哈尔滨\",\"value\":\"230100\",\"children\":[{\"text\":\"道里\",\"value\":\"230102\",\"children\":\"\"},{\"text\":\"南岗\",\"value\":\"230103\",\"children\":\"\"},{\"text\":\"道外\",\"value\":\"230104\",\"children\":\"\"},{\"text\":\"香坊\",\"value\":\"230106\",\"children\":\"\"},{\"text\":\"平房\",\"value\":\"230108\",\"children\":\"\"},{\"text\":\"松北\",\"value\":\"230109\",\"children\":\"\"},{\"text\":\"呼兰\",\"value\":\"230111\",\"children\":\"\"},{\"text\":\"依兰\",\"value\":\"230123\",\"children\":\"\"},{\"text\":\"方正\",\"value\":\"230124\",\"children\":\"\"},{\"text\":\"宾县\",\"value\":\"230125\",\"children\":\"\"},{\"text\":\"巴彦\",\"value\":\"230126\",\"children\":\"\"},{\"text\":\"木兰\",\"value\":\"230127\",\"children\":\"\"},{\"text\":\"通河\",\"value\":\"230128\",\"children\":\"\"},{\"text\":\"延寿\",\"value\":\"230129\",\"children\":\"\"},{\"text\":\"阿城\",\"value\":\"230181\",\"children\":\"\"},{\"text\":\"双城\",\"value\":\"230182\",\"children\":\"\"},{\"text\":\"尚志\",\"value\":\"230183\",\"children\":\"\"},{\"text\":\"五常\",\"value\":\"230184\",\"children\":\"\"}]},{\"text\":\"齐齐哈尔\",\"value\":\"230200\",\"children\":[{\"text\":\"龙沙\",\"value\":\"230202\",\"children\":\"\"},{\"text\":\"建华\",\"value\":\"230203\",\"children\":\"\"},{\"text\":\"铁锋\",\"value\":\"230204\",\"children\":\"\"},{\"text\":\"昂昂溪\",\"value\":\"230205\",\"children\":\"\"},{\"text\":\"富拉尔基\",\"value\":\"230206\",\"children\":\"\"},{\"text\":\"碾子山\",\"value\":\"230207\",\"children\":\"\"},{\"text\":\"梅里斯达斡尔族\",\"value\":\"230208\",\"children\":\"\"},{\"text\":\"龙江\",\"value\":\"230221\",\"children\":\"\"},{\"text\":\"依安\",\"value\":\"230223\",\"children\":\"\"},{\"text\":\"泰来\",\"value\":\"230224\",\"children\":\"\"},{\"text\":\"甘南\",\"value\":\"230225\",\"children\":\"\"},{\"text\":\"富裕\",\"value\":\"230227\",\"children\":\"\"},{\"text\":\"克山\",\"value\":\"230229\",\"children\":\"\"},{\"text\":\"克东\",\"value\":\"230230\",\"children\":\"\"},{\"text\":\"拜泉\",\"value\":\"230231\",\"children\":\"\"},{\"text\":\"讷河\",\"value\":\"230281\",\"children\":\"\"}]},{\"text\":\"鸡西\",\"value\":\"230300\",\"children\":[{\"text\":\"鸡冠\",\"value\":\"230302\",\"children\":\"\"},{\"text\":\"恒山\",\"value\":\"230303\",\"children\":\"\"},{\"text\":\"滴道\",\"value\":\"230304\",\"children\":\"\"},{\"text\":\"梨树\",\"value\":\"230305\",\"children\":\"\"},{\"text\":\"城子河\",\"value\":\"230306\",\"children\":\"\"},{\"text\":\"麻山\",\"value\":\"230307\",\"children\":\"\"},{\"text\":\"鸡东\",\"value\":\"230321\",\"children\":\"\"},{\"text\":\"虎林\",\"value\":\"230381\",\"children\":\"\"},{\"text\":\"密山\",\"value\":\"230382\",\"children\":\"\"}]},{\"text\":\"鹤岗\",\"value\":\"230400\",\"children\":[{\"text\":\"向阳\",\"value\":\"230402\",\"children\":\"\"},{\"text\":\"工农\",\"value\":\"230403\",\"children\":\"\"},{\"text\":\"南山\",\"value\":\"230404\",\"children\":\"\"},{\"text\":\"兴安\",\"value\":\"230405\",\"children\":\"\"},{\"text\":\"东山\",\"value\":\"230406\",\"children\":\"\"},{\"text\":\"兴山\",\"value\":\"230407\",\"children\":\"\"},{\"text\":\"萝北\",\"value\":\"230421\",\"children\":\"\"},{\"text\":\"绥滨\",\"value\":\"230422\",\"children\":\"\"}]},{\"text\":\"双鸭山\",\"value\":\"230500\",\"children\":[{\"text\":\"尖山\",\"value\":\"230502\",\"children\":\"\"},{\"text\":\"岭东\",\"value\":\"230503\",\"children\":\"\"},{\"text\":\"四方台\",\"value\":\"230505\",\"children\":\"\"},{\"text\":\"宝山\",\"value\":\"230506\",\"children\":\"\"},{\"text\":\"集贤\",\"value\":\"230521\",\"children\":\"\"},{\"text\":\"友谊\",\"value\":\"230522\",\"children\":\"\"},{\"text\":\"宝清\",\"value\":\"230523\",\"children\":\"\"},{\"text\":\"饶河\",\"value\":\"230524\",\"children\":\"\"}]},{\"text\":\"大庆\",\"value\":\"230600\",\"children\":[{\"text\":\"萨尔图\",\"value\":\"230602\",\"children\":\"\"},{\"text\":\"龙凤\",\"value\":\"230603\",\"children\":\"\"},{\"text\":\"让胡路\",\"value\":\"230604\",\"children\":\"\"},{\"text\":\"红岗\",\"value\":\"230605\",\"children\":\"\"},{\"text\":\"大同\",\"value\":\"230606\",\"children\":\"\"},{\"text\":\"肇州\",\"value\":\"230621\",\"children\":\"\"},{\"text\":\"肇源\",\"value\":\"230622\",\"children\":\"\"},{\"text\":\"林甸\",\"value\":\"230623\",\"children\":\"\"},{\"text\":\"杜尔伯特\",\"value\":\"230624\",\"children\":\"\"}]},{\"text\":\"伊春\",\"value\":\"230700\",\"children\":[{\"text\":\"伊春\",\"value\":\"230702\",\"children\":\"\"},{\"text\":\"南岔\",\"value\":\"230703\",\"children\":\"\"},{\"text\":\"友好\",\"value\":\"230704\",\"children\":\"\"},{\"text\":\"西林\",\"value\":\"230705\",\"children\":\"\"},{\"text\":\"翠峦\",\"value\":\"230706\",\"children\":\"\"},{\"text\":\"新青\",\"value\":\"230707\",\"children\":\"\"},{\"text\":\"美溪\",\"value\":\"230708\",\"children\":\"\"},{\"text\":\"金山屯\",\"value\":\"230709\",\"children\":\"\"},{\"text\":\"五营\",\"value\":\"230710\",\"children\":\"\"},{\"text\":\"乌马河\",\"value\":\"230711\",\"children\":\"\"},{\"text\":\"汤旺河\",\"value\":\"230712\",\"children\":\"\"},{\"text\":\"带岭\",\"value\":\"230713\",\"children\":\"\"},{\"text\":\"乌伊岭\",\"value\":\"230714\",\"children\":\"\"},{\"text\":\"红星\",\"value\":\"230715\",\"children\":\"\"},{\"text\":\"上甘岭\",\"value\":\"230716\",\"children\":\"\"},{\"text\":\"嘉荫\",\"value\":\"230722\",\"children\":\"\"},{\"text\":\"铁力\",\"value\":\"230781\",\"children\":\"\"}]},{\"text\":\"佳木斯\",\"value\":\"230800\",\"children\":[{\"text\":\"向阳\",\"value\":\"230803\",\"children\":\"\"},{\"text\":\"前进\",\"value\":\"230804\",\"children\":\"\"},{\"text\":\"东风\",\"value\":\"230805\",\"children\":\"\"},{\"text\":\"郊区\",\"value\":\"230811\",\"children\":\"\"},{\"text\":\"桦南\",\"value\":\"230822\",\"children\":\"\"},{\"text\":\"桦川\",\"value\":\"230826\",\"children\":\"\"},{\"text\":\"汤原\",\"value\":\"230828\",\"children\":\"\"},{\"text\":\"抚远\",\"value\":\"230833\",\"children\":\"\"},{\"text\":\"同江\",\"value\":\"230881\",\"children\":\"\"},{\"text\":\"富锦\",\"value\":\"230882\",\"children\":\"\"}]},{\"text\":\"七台河\",\"value\":\"230900\",\"children\":[{\"text\":\"新兴\",\"value\":\"230902\",\"children\":\"\"},{\"text\":\"桃山\",\"value\":\"230903\",\"children\":\"\"},{\"text\":\"茄子河\",\"value\":\"230904\",\"children\":\"\"},{\"text\":\"勃利\",\"value\":\"230921\",\"children\":\"\"}]},{\"text\":\"牡丹江\",\"value\":\"231000\",\"children\":[{\"text\":\"东安\",\"value\":\"231002\",\"children\":\"\"},{\"text\":\"阳明\",\"value\":\"231003\",\"children\":\"\"},{\"text\":\"爱民\",\"value\":\"231004\",\"children\":\"\"},{\"text\":\"西安\",\"value\":\"231005\",\"children\":\"\"},{\"text\":\"东宁\",\"value\":\"231024\",\"children\":\"\"},{\"text\":\"林口\",\"value\":\"231025\",\"children\":\"\"},{\"text\":\"绥芬河\",\"value\":\"231081\",\"children\":\"\"},{\"text\":\"海林\",\"value\":\"231083\",\"children\":\"\"},{\"text\":\"宁安\",\"value\":\"231084\",\"children\":\"\"},{\"text\":\"穆棱\",\"value\":\"231085\",\"children\":\"\"}]},{\"text\":\"黑河\",\"value\":\"231100\",\"children\":[{\"text\":\"爱辉\",\"value\":\"231102\",\"children\":\"\"},{\"text\":\"嫩江\",\"value\":\"231121\",\"children\":\"\"},{\"text\":\"逊克\",\"value\":\"231123\",\"children\":\"\"},{\"text\":\"孙吴\",\"value\":\"231124\",\"children\":\"\"},{\"text\":\"北安\",\"value\":\"231181\",\"children\":\"\"},{\"text\":\"五大连池\",\"value\":\"231182\",\"children\":\"\"}]},{\"text\":\"绥化\",\"value\":\"231200\",\"children\":[{\"text\":\"北林\",\"value\":\"231202\",\"children\":\"\"},{\"text\":\"望奎\",\"value\":\"231221\",\"children\":\"\"},{\"text\":\"兰西\",\"value\":\"231222\",\"children\":\"\"},{\"text\":\"青冈\",\"value\":\"231223\",\"children\":\"\"},{\"text\":\"庆安\",\"value\":\"231224\",\"children\":\"\"},{\"text\":\"明水\",\"value\":\"231225\",\"children\":\"\"},{\"text\":\"绥棱\",\"value\":\"231226\",\"children\":\"\"},{\"text\":\"安达\",\"value\":\"231281\",\"children\":\"\"},{\"text\":\"肇东\",\"value\":\"231282\",\"children\":\"\"},{\"text\":\"海伦\",\"value\":\"231283\",\"children\":\"\"}]},{\"text\":\"大兴安岭\",\"value\":\"232700\",\"children\":[{\"text\":\"松岭\",\"value\":\"232702\",\"children\":\"\"},{\"text\":\"新林\",\"value\":\"232703\",\"children\":\"\"},{\"text\":\"呼中\",\"value\":\"232704\",\"children\":\"\"},{\"text\":\"呼玛\",\"value\":\"232721\",\"children\":\"\"},{\"text\":\"塔河\",\"value\":\"232722\",\"children\":\"\"},{\"text\":\"漠河\",\"value\":\"232723\",\"children\":\"\"},{\"text\":\"加格达奇\",\"value\":\"232724\",\"children\":\"\"}]}]},{\"text\":\"上海\",\"value\":\"310000\",\"children\":[{\"text\":\"上海\",\"value\":\"310100\",\"children\":[{\"text\":\"黄浦\",\"value\":\"310101\",\"children\":\"\"},{\"text\":\"徐汇\",\"value\":\"310104\",\"children\":\"\"},{\"text\":\"长宁\",\"value\":\"310105\",\"children\":\"\"},{\"text\":\"静安\",\"value\":\"310106\",\"children\":\"\"},{\"text\":\"普陀\",\"value\":\"310107\",\"children\":\"\"},{\"text\":\"虹口\",\"value\":\"310109\",\"children\":\"\"},{\"text\":\"杨浦\",\"value\":\"310110\",\"children\":\"\"},{\"text\":\"闵行\",\"value\":\"310112\",\"children\":\"\"},{\"text\":\"宝山\",\"value\":\"310113\",\"children\":\"\"},{\"text\":\"嘉定\",\"value\":\"310114\",\"children\":\"\"},{\"text\":\"浦东\",\"value\":\"310115\",\"children\":\"\"},{\"text\":\"金山\",\"value\":\"310116\",\"children\":\"\"},{\"text\":\"松江\",\"value\":\"310117\",\"children\":\"\"},{\"text\":\"青浦\",\"value\":\"310118\",\"children\":\"\"},{\"text\":\"奉贤\",\"value\":\"310120\",\"children\":\"\"},{\"text\":\"崇明\",\"value\":\"310230\",\"children\":\"\"}]}]},{\"text\":\"江苏\",\"value\":\"320000\",\"children\":[{\"text\":\"南京\",\"value\":\"320100\",\"children\":[{\"text\":\"玄武\",\"value\":\"320102\",\"children\":\"\"},{\"text\":\"秦淮\",\"value\":\"320104\",\"children\":\"\"},{\"text\":\"建邺\",\"value\":\"320105\",\"children\":\"\"},{\"text\":\"鼓楼\",\"value\":\"320106\",\"children\":\"\"},{\"text\":\"浦口\",\"value\":\"320111\",\"children\":\"\"},{\"text\":\"栖霞\",\"value\":\"320113\",\"children\":\"\"},{\"text\":\"雨花台\",\"value\":\"320114\",\"children\":\"\"},{\"text\":\"江宁\",\"value\":\"320115\",\"children\":\"\"},{\"text\":\"六合\",\"value\":\"320116\",\"children\":\"\"},{\"text\":\"溧水\",\"value\":\"320124\",\"children\":\"\"},{\"text\":\"高淳\",\"value\":\"320125\",\"children\":\"\"}]},{\"text\":\"无锡\",\"value\":\"320200\",\"children\":[{\"text\":\"崇安\",\"value\":\"320202\",\"children\":\"\"},{\"text\":\"南长\",\"value\":\"320203\",\"children\":\"\"},{\"text\":\"北塘\",\"value\":\"320204\",\"children\":\"\"},{\"text\":\"锡山\",\"value\":\"320205\",\"children\":\"\"},{\"text\":\"惠山\",\"value\":\"320206\",\"children\":\"\"},{\"text\":\"滨湖\",\"value\":\"320211\",\"children\":\"\"},{\"text\":\"江阴\",\"value\":\"320281\",\"children\":\"\"},{\"text\":\"宜兴\",\"value\":\"320282\",\"children\":\"\"}]},{\"text\":\"徐州\",\"value\":\"320300\",\"children\":[{\"text\":\"鼓楼\",\"value\":\"320302\",\"children\":\"\"},{\"text\":\"云龙\",\"value\":\"320303\",\"children\":\"\"},{\"text\":\"贾汪\",\"value\":\"320305\",\"children\":\"\"},{\"text\":\"泉山\",\"value\":\"320311\",\"children\":\"\"},{\"text\":\"丰县\",\"value\":\"320321\",\"children\":\"\"},{\"text\":\"沛县\",\"value\":\"320322\",\"children\":\"\"},{\"text\":\"铜山\",\"value\":\"320323\",\"children\":\"\"},{\"text\":\"睢宁\",\"value\":\"320324\",\"children\":\"\"},{\"text\":\"新沂\",\"value\":\"320381\",\"children\":\"\"},{\"text\":\"邳州\",\"value\":\"320382\",\"children\":\"\"}]},{\"text\":\"常州\",\"value\":\"320400\",\"children\":[{\"text\":\"天宁\",\"value\":\"320402\",\"children\":\"\"},{\"text\":\"钟楼\",\"value\":\"320404\",\"children\":\"\"},{\"text\":\"新北\",\"value\":\"320411\",\"children\":\"\"},{\"text\":\"武进\",\"value\":\"320412\",\"children\":\"\"},{\"text\":\"溧阳\",\"value\":\"320481\",\"children\":\"\"},{\"text\":\"金坛\",\"value\":\"320482\",\"children\":\"\"}]},{\"text\":\"苏州\",\"value\":\"320500\",\"children\":[{\"text\":\"虎丘\",\"value\":\"320505\",\"children\":\"\"},{\"text\":\"吴中\",\"value\":\"320506\",\"children\":\"\"},{\"text\":\"相城\",\"value\":\"320507\",\"children\":\"\"},{\"text\":\"姑苏\",\"value\":\"320508\",\"children\":\"\"},{\"text\":\"常熟\",\"value\":\"320581\",\"children\":\"\"},{\"text\":\"张家港\",\"value\":\"320582\",\"children\":\"\"},{\"text\":\"昆山\",\"value\":\"320583\",\"children\":\"\"},{\"text\":\"吴江\",\"value\":\"320584\",\"children\":\"\"},{\"text\":\"太仓\",\"value\":\"320585\",\"children\":\"\"}]},{\"text\":\"南通\",\"value\":\"320600\",\"children\":[{\"text\":\"崇川\",\"value\":\"320602\",\"children\":\"\"},{\"text\":\"港闸\",\"value\":\"320611\",\"children\":\"\"},{\"text\":\"通州\",\"value\":\"320612\",\"children\":\"\"},{\"text\":\"海安\",\"value\":\"320621\",\"children\":\"\"},{\"text\":\"如东\",\"value\":\"320623\",\"children\":\"\"},{\"text\":\"启东\",\"value\":\"320681\",\"children\":\"\"},{\"text\":\"如皋\",\"value\":\"320682\",\"children\":\"\"},{\"text\":\"海门\",\"value\":\"320684\",\"children\":\"\"}]},{\"text\":\"连云港\",\"value\":\"320700\",\"children\":[{\"text\":\"连云\",\"value\":\"320703\",\"children\":\"\"},{\"text\":\"新浦\",\"value\":\"320705\",\"children\":\"\"},{\"text\":\"海州\",\"value\":\"320706\",\"children\":\"\"},{\"text\":\"赣榆\",\"value\":\"320721\",\"children\":\"\"},{\"text\":\"东海\",\"value\":\"320722\",\"children\":\"\"},{\"text\":\"灌云\",\"value\":\"320723\",\"children\":\"\"},{\"text\":\"灌南\",\"value\":\"320724\",\"children\":\"\"}]},{\"text\":\"淮安\",\"value\":\"320800\",\"children\":[{\"text\":\"清河\",\"value\":\"320802\",\"children\":\"\"},{\"text\":\"淮安\",\"value\":\"320803\",\"children\":\"\"},{\"text\":\"淮阴\",\"value\":\"320804\",\"children\":\"\"},{\"text\":\"清浦\",\"value\":\"320811\",\"children\":\"\"},{\"text\":\"涟水\",\"value\":\"320826\",\"children\":\"\"},{\"text\":\"洪泽\",\"value\":\"320829\",\"children\":\"\"},{\"text\":\"盱眙\",\"value\":\"320830\",\"children\":\"\"},{\"text\":\"金湖\",\"value\":\"320831\",\"children\":\"\"}]},{\"text\":\"盐城\",\"value\":\"320900\",\"children\":[{\"text\":\"亭湖\",\"value\":\"320902\",\"children\":\"\"},{\"text\":\"盐都\",\"value\":\"320903\",\"children\":\"\"},{\"text\":\"响水\",\"value\":\"320921\",\"children\":\"\"},{\"text\":\"滨海\",\"value\":\"320922\",\"children\":\"\"},{\"text\":\"阜宁\",\"value\":\"320923\",\"children\":\"\"},{\"text\":\"射阳\",\"value\":\"320924\",\"children\":\"\"},{\"text\":\"建湖\",\"value\":\"320925\",\"children\":\"\"},{\"text\":\"东台\",\"value\":\"320981\",\"children\":\"\"},{\"text\":\"大丰\",\"value\":\"320982\",\"children\":\"\"}]},{\"text\":\"扬州\",\"value\":\"321000\",\"children\":[{\"text\":\"广陵\",\"value\":\"321002\",\"children\":\"\"},{\"text\":\"邗江\",\"value\":\"321003\",\"children\":\"\"},{\"text\":\"宝应\",\"value\":\"321023\",\"children\":\"\"},{\"text\":\"仪征\",\"value\":\"321081\",\"children\":\"\"},{\"text\":\"高邮\",\"value\":\"321084\",\"children\":\"\"},{\"text\":\"江都\",\"value\":\"321088\",\"children\":\"\"}]},{\"text\":\"镇江\",\"value\":\"321100\",\"children\":[{\"text\":\"京口\",\"value\":\"321102\",\"children\":\"\"},{\"text\":\"润州\",\"value\":\"321111\",\"children\":\"\"},{\"text\":\"丹徒\",\"value\":\"321112\",\"children\":\"\"},{\"text\":\"丹阳\",\"value\":\"321181\",\"children\":\"\"},{\"text\":\"扬中\",\"value\":\"321182\",\"children\":\"\"},{\"text\":\"句容\",\"value\":\"321183\",\"children\":\"\"}]},{\"text\":\"泰州\",\"value\":\"321200\",\"children\":[{\"text\":\"海陵\",\"value\":\"321202\",\"children\":\"\"},{\"text\":\"高港\",\"value\":\"321203\",\"children\":\"\"},{\"text\":\"兴化\",\"value\":\"321281\",\"children\":\"\"},{\"text\":\"靖江\",\"value\":\"321282\",\"children\":\"\"},{\"text\":\"泰兴\",\"value\":\"321283\",\"children\":\"\"},{\"text\":\"姜堰\",\"value\":\"321284\",\"children\":\"\"}]},{\"text\":\"宿迁\",\"value\":\"321300\",\"children\":[{\"text\":\"宿城\",\"value\":\"321302\",\"children\":\"\"},{\"text\":\"宿豫\",\"value\":\"321311\",\"children\":\"\"},{\"text\":\"沭阳\",\"value\":\"321322\",\"children\":\"\"},{\"text\":\"泗阳\",\"value\":\"321323\",\"children\":\"\"},{\"text\":\"泗洪\",\"value\":\"321324\",\"children\":\"\"}]}]},{\"text\":\"浙江\",\"value\":\"330000\",\"children\":[{\"text\":\"杭州\",\"value\":\"330100\",\"children\":[{\"text\":\"上城\",\"value\":\"330102\",\"children\":\"\"},{\"text\":\"下城\",\"value\":\"330103\",\"children\":\"\"},{\"text\":\"江干\",\"value\":\"330104\",\"children\":\"\"},{\"text\":\"拱墅\",\"value\":\"330105\",\"children\":\"\"},{\"text\":\"西湖\",\"value\":\"330106\",\"children\":\"\"},{\"text\":\"滨江\",\"value\":\"330108\",\"children\":\"\"},{\"text\":\"萧山\",\"value\":\"330109\",\"children\":\"\"},{\"text\":\"余杭\",\"value\":\"330110\",\"children\":\"\"},{\"text\":\"桐庐\",\"value\":\"330122\",\"children\":\"\"},{\"text\":\"淳安\",\"value\":\"330127\",\"children\":\"\"},{\"text\":\"建德\",\"value\":\"330182\",\"children\":\"\"},{\"text\":\"富阳\",\"value\":\"330183\",\"children\":\"\"},{\"text\":\"临安\",\"value\":\"330185\",\"children\":\"\"}]},{\"text\":\"宁波\",\"value\":\"330200\",\"children\":[{\"text\":\"海曙\",\"value\":\"330203\",\"children\":\"\"},{\"text\":\"江东\",\"value\":\"330204\",\"children\":\"\"},{\"text\":\"江北\",\"value\":\"330205\",\"children\":\"\"},{\"text\":\"北仑\",\"value\":\"330206\",\"children\":\"\"},{\"text\":\"镇海\",\"value\":\"330211\",\"children\":\"\"},{\"text\":\"鄞州\",\"value\":\"330212\",\"children\":\"\"},{\"text\":\"象山\",\"value\":\"330225\",\"children\":\"\"},{\"text\":\"宁海\",\"value\":\"330226\",\"children\":\"\"},{\"text\":\"余姚\",\"value\":\"330281\",\"children\":\"\"},{\"text\":\"慈溪\",\"value\":\"330282\",\"children\":\"\"},{\"text\":\"奉化\",\"value\":\"330283\",\"children\":\"\"}]},{\"text\":\"温州\",\"value\":\"330300\",\"children\":[{\"text\":\"鹿城\",\"value\":\"330302\",\"children\":\"\"},{\"text\":\"龙湾\",\"value\":\"330303\",\"children\":\"\"},{\"text\":\"瓯海\",\"value\":\"330304\",\"children\":\"\"},{\"text\":\"洞头\",\"value\":\"330322\",\"children\":\"\"},{\"text\":\"永嘉\",\"value\":\"330324\",\"children\":\"\"},{\"text\":\"平阳\",\"value\":\"330326\",\"children\":\"\"},{\"text\":\"苍南\",\"value\":\"330327\",\"children\":\"\"},{\"text\":\"文成\",\"value\":\"330328\",\"children\":\"\"},{\"text\":\"泰顺\",\"value\":\"330329\",\"children\":\"\"},{\"text\":\"瑞安\",\"value\":\"330381\",\"children\":\"\"},{\"text\":\"乐清\",\"value\":\"330382\",\"children\":\"\"}]},{\"text\":\"嘉兴\",\"value\":\"330400\",\"children\":[{\"text\":\"南湖\",\"value\":\"330402\",\"children\":\"\"},{\"text\":\"秀洲\",\"value\":\"330411\",\"children\":\"\"},{\"text\":\"嘉善\",\"value\":\"330421\",\"children\":\"\"},{\"text\":\"海盐\",\"value\":\"330424\",\"children\":\"\"},{\"text\":\"海宁\",\"value\":\"330481\",\"children\":\"\"},{\"text\":\"平湖\",\"value\":\"330482\",\"children\":\"\"},{\"text\":\"桐乡\",\"value\":\"330483\",\"children\":\"\"}]},{\"text\":\"湖州\",\"value\":\"330500\",\"children\":[{\"text\":\"吴兴\",\"value\":\"330502\",\"children\":\"\"},{\"text\":\"南浔\",\"value\":\"330503\",\"children\":\"\"},{\"text\":\"德清\",\"value\":\"330521\",\"children\":\"\"},{\"text\":\"长兴\",\"value\":\"330522\",\"children\":\"\"},{\"text\":\"安吉\",\"value\":\"330523\",\"children\":\"\"}]},{\"text\":\"绍兴\",\"value\":\"330600\",\"children\":[{\"text\":\"越城\",\"value\":\"330602\",\"children\":\"\"},{\"text\":\"柯桥\",\"value\":\"330621\",\"children\":\"\"},{\"text\":\"新昌\",\"value\":\"330624\",\"children\":\"\"},{\"text\":\"诸暨\",\"value\":\"330681\",\"children\":\"\"},{\"text\":\"上虞\",\"value\":\"330682\",\"children\":\"\"},{\"text\":\"嵊州\",\"value\":\"330683\",\"children\":\"\"}]},{\"text\":\"金华\",\"value\":\"330700\",\"children\":[{\"text\":\"婺城\",\"value\":\"330702\",\"children\":\"\"},{\"text\":\"金东\",\"value\":\"330703\",\"children\":\"\"},{\"text\":\"武义\",\"value\":\"330723\",\"children\":\"\"},{\"text\":\"浦江\",\"value\":\"330726\",\"children\":\"\"},{\"text\":\"磐安\",\"value\":\"330727\",\"children\":\"\"},{\"text\":\"兰溪\",\"value\":\"330781\",\"children\":\"\"},{\"text\":\"义乌\",\"value\":\"330782\",\"children\":\"\"},{\"text\":\"东阳\",\"value\":\"330783\",\"children\":\"\"},{\"text\":\"永康\",\"value\":\"330784\",\"children\":\"\"}]},{\"text\":\"衢州\",\"value\":\"330800\",\"children\":[{\"text\":\"柯城\",\"value\":\"330802\",\"children\":\"\"},{\"text\":\"衢江\",\"value\":\"330803\",\"children\":\"\"},{\"text\":\"常山\",\"value\":\"330822\",\"children\":\"\"},{\"text\":\"开化\",\"value\":\"330824\",\"children\":\"\"},{\"text\":\"龙游\",\"value\":\"330825\",\"children\":\"\"},{\"text\":\"江山\",\"value\":\"330881\",\"children\":\"\"}]},{\"text\":\"舟山\",\"value\":\"330900\",\"children\":[{\"text\":\"定海\",\"value\":\"330902\",\"children\":\"\"},{\"text\":\"普陀\",\"value\":\"330903\",\"children\":\"\"},{\"text\":\"岱山\",\"value\":\"330921\",\"children\":\"\"},{\"text\":\"嵊泗\",\"value\":\"330922\",\"children\":\"\"}]},{\"text\":\"台州\",\"value\":\"331000\",\"children\":[{\"text\":\"椒江\",\"value\":\"331002\",\"children\":\"\"},{\"text\":\"黄岩\",\"value\":\"331003\",\"children\":\"\"},{\"text\":\"路桥\",\"value\":\"331004\",\"children\":\"\"},{\"text\":\"玉环\",\"value\":\"331021\",\"children\":\"\"},{\"text\":\"三门\",\"value\":\"331022\",\"children\":\"\"},{\"text\":\"天台\",\"value\":\"331023\",\"children\":\"\"},{\"text\":\"仙居\",\"value\":\"331024\",\"children\":\"\"},{\"text\":\"温岭\",\"value\":\"331081\",\"children\":\"\"},{\"text\":\"临海\",\"value\":\"331082\",\"children\":\"\"}]},{\"text\":\"丽水\",\"value\":\"331100\",\"children\":[{\"text\":\"莲都\",\"value\":\"331102\",\"children\":\"\"},{\"text\":\"青田\",\"value\":\"331121\",\"children\":\"\"},{\"text\":\"缙云\",\"value\":\"331122\",\"children\":\"\"},{\"text\":\"遂昌\",\"value\":\"331123\",\"children\":\"\"},{\"text\":\"松阳\",\"value\":\"331124\",\"children\":\"\"},{\"text\":\"云和\",\"value\":\"331125\",\"children\":\"\"},{\"text\":\"庆元\",\"value\":\"331126\",\"children\":\"\"},{\"text\":\"景宁\",\"value\":\"331127\",\"children\":\"\"},{\"text\":\"龙泉\",\"value\":\"331181\",\"children\":\"\"}]}]},{\"text\":\"安徽\",\"value\":\"340000\",\"children\":[{\"text\":\"合肥\",\"value\":\"340100\",\"children\":[{\"text\":\"瑶海\",\"value\":\"340102\",\"children\":\"\"},{\"text\":\"庐阳\",\"value\":\"340103\",\"children\":\"\"},{\"text\":\"蜀山\",\"value\":\"340104\",\"children\":\"\"},{\"text\":\"包河\",\"value\":\"340111\",\"children\":\"\"},{\"text\":\"长丰\",\"value\":\"340121\",\"children\":\"\"},{\"text\":\"肥东\",\"value\":\"340122\",\"children\":\"\"},{\"text\":\"肥西\",\"value\":\"340123\",\"children\":\"\"},{\"text\":\"巢湖\",\"value\":\"341400\",\"children\":\"\"},{\"text\":\"庐江\",\"value\":\"341421\",\"children\":\"\"}]},{\"text\":\"芜湖\",\"value\":\"340200\",\"children\":[{\"text\":\"镜湖\",\"value\":\"340202\",\"children\":\"\"},{\"text\":\"弋江\",\"value\":\"340203\",\"children\":\"\"},{\"text\":\"鸠江\",\"value\":\"340207\",\"children\":\"\"},{\"text\":\"三山\",\"value\":\"340208\",\"children\":\"\"},{\"text\":\"芜湖\",\"value\":\"340221\",\"children\":\"\"},{\"text\":\"繁昌\",\"value\":\"340222\",\"children\":\"\"},{\"text\":\"南陵\",\"value\":\"340223\",\"children\":\"\"},{\"text\":\"无为\",\"value\":\"341422\",\"children\":\"\"}]},{\"text\":\"蚌埠\",\"value\":\"340300\",\"children\":[{\"text\":\"龙子湖\",\"value\":\"340302\",\"children\":\"\"},{\"text\":\"蚌山\",\"value\":\"340303\",\"children\":\"\"},{\"text\":\"禹会\",\"value\":\"340304\",\"children\":\"\"},{\"text\":\"淮上\",\"value\":\"340311\",\"children\":\"\"},{\"text\":\"怀远\",\"value\":\"340321\",\"children\":\"\"},{\"text\":\"五河\",\"value\":\"340322\",\"children\":\"\"},{\"text\":\"固镇\",\"value\":\"340323\",\"children\":\"\"}]},{\"text\":\"淮南\",\"value\":\"340400\",\"children\":[{\"text\":\"大通\",\"value\":\"340402\",\"children\":\"\"},{\"text\":\"田家庵\",\"value\":\"340403\",\"children\":\"\"},{\"text\":\"谢家集\",\"value\":\"340404\",\"children\":\"\"},{\"text\":\"八公山\",\"value\":\"340405\",\"children\":\"\"},{\"text\":\"潘集\",\"value\":\"340406\",\"children\":\"\"},{\"text\":\"凤台\",\"value\":\"340421\",\"children\":\"\"},{\"text\":\"寿县\",\"value\":\"340499\",\"children\":\"\"}]},{\"text\":\"马鞍山\",\"value\":\"340500\",\"children\":[{\"text\":\"花山\",\"value\":\"340503\",\"children\":\"\"},{\"text\":\"雨山\",\"value\":\"340504\",\"children\":\"\"},{\"text\":\"博望\",\"value\":\"340506\",\"children\":\"\"},{\"text\":\"当涂\",\"value\":\"340521\",\"children\":\"\"},{\"text\":\"含山\",\"value\":\"341423\",\"children\":\"\"},{\"text\":\"和县\",\"value\":\"341424\",\"children\":\"\"}]},{\"text\":\"淮北\",\"value\":\"340600\",\"children\":[{\"text\":\"杜集\",\"value\":\"340602\",\"children\":\"\"},{\"text\":\"相山\",\"value\":\"340603\",\"children\":\"\"},{\"text\":\"烈山\",\"value\":\"340604\",\"children\":\"\"},{\"text\":\"濉溪\",\"value\":\"340621\",\"children\":\"\"}]},{\"text\":\"铜陵\",\"value\":\"340700\",\"children\":[{\"text\":\"铜官\",\"value\":\"340705\",\"children\":\"\"},{\"text\":\"郊区\",\"value\":\"340711\",\"children\":\"\"},{\"text\":\"铜陵\",\"value\":\"340721\",\"children\":\"\"},{\"text\":\"枞阳\",\"value\":\"340799\",\"children\":\"\"}]},{\"text\":\"安庆\",\"value\":\"340800\",\"children\":[{\"text\":\"迎江\",\"value\":\"340802\",\"children\":\"\"},{\"text\":\"大观\",\"value\":\"340803\",\"children\":\"\"},{\"text\":\"宜秀\",\"value\":\"340811\",\"children\":\"\"},{\"text\":\"怀宁\",\"value\":\"340822\",\"children\":\"\"},{\"text\":\"潜山\",\"value\":\"340824\",\"children\":\"\"},{\"text\":\"太湖\",\"value\":\"340825\",\"children\":\"\"},{\"text\":\"宿松\",\"value\":\"340826\",\"children\":\"\"},{\"text\":\"望江\",\"value\":\"340827\",\"children\":\"\"},{\"text\":\"岳西\",\"value\":\"340828\",\"children\":\"\"},{\"text\":\"桐城\",\"value\":\"340881\",\"children\":\"\"}]},{\"text\":\"黄山\",\"value\":\"341000\",\"children\":[{\"text\":\"屯溪\",\"value\":\"341002\",\"children\":\"\"},{\"text\":\"黄山\",\"value\":\"341003\",\"children\":\"\"},{\"text\":\"徽州\",\"value\":\"341004\",\"children\":\"\"},{\"text\":\"歙县\",\"value\":\"341021\",\"children\":\"\"},{\"text\":\"休宁\",\"value\":\"341022\",\"children\":\"\"},{\"text\":\"黟县\",\"value\":\"341023\",\"children\":\"\"},{\"text\":\"祁门\",\"value\":\"341024\",\"children\":\"\"}]},{\"text\":\"滁州\",\"value\":\"341100\",\"children\":[{\"text\":\"琅琊\",\"value\":\"341102\",\"children\":\"\"},{\"text\":\"南谯\",\"value\":\"341103\",\"children\":\"\"},{\"text\":\"来安\",\"value\":\"341122\",\"children\":\"\"},{\"text\":\"全椒\",\"value\":\"341124\",\"children\":\"\"},{\"text\":\"定远\",\"value\":\"341125\",\"children\":\"\"},{\"text\":\"凤阳\",\"value\":\"341126\",\"children\":\"\"},{\"text\":\"天长\",\"value\":\"341181\",\"children\":\"\"},{\"text\":\"明光\",\"value\":\"341182\",\"children\":\"\"}]},{\"text\":\"阜阳\",\"value\":\"341200\",\"children\":[{\"text\":\"颍州\",\"value\":\"341202\",\"children\":\"\"},{\"text\":\"颍东\",\"value\":\"341203\",\"children\":\"\"},{\"text\":\"颍泉\",\"value\":\"341204\",\"children\":\"\"},{\"text\":\"临泉\",\"value\":\"341221\",\"children\":\"\"},{\"text\":\"太和\",\"value\":\"341222\",\"children\":\"\"},{\"text\":\"阜南\",\"value\":\"341225\",\"children\":\"\"},{\"text\":\"颍上\",\"value\":\"341226\",\"children\":\"\"},{\"text\":\"界首\",\"value\":\"341282\",\"children\":\"\"}]},{\"text\":\"宿州\",\"value\":\"341300\",\"children\":[{\"text\":\"埇桥\",\"value\":\"341302\",\"children\":\"\"},{\"text\":\"砀山\",\"value\":\"341321\",\"children\":\"\"},{\"text\":\"萧县\",\"value\":\"341322\",\"children\":\"\"},{\"text\":\"灵璧\",\"value\":\"341323\",\"children\":\"\"},{\"text\":\"泗县\",\"value\":\"341324\",\"children\":\"\"}]},{\"text\":\"六安\",\"value\":\"341500\",\"children\":[{\"text\":\"金安\",\"value\":\"341502\",\"children\":\"\"},{\"text\":\"裕安\",\"value\":\"341503\",\"children\":\"\"},{\"text\":\"霍邱\",\"value\":\"341522\",\"children\":\"\"},{\"text\":\"舒城\",\"value\":\"341523\",\"children\":\"\"},{\"text\":\"金寨\",\"value\":\"341524\",\"children\":\"\"},{\"text\":\"霍山\",\"value\":\"341525\",\"children\":\"\"}]},{\"text\":\"亳州\",\"value\":\"341600\",\"children\":[{\"text\":\"谯城\",\"value\":\"341602\",\"children\":\"\"},{\"text\":\"涡阳\",\"value\":\"341621\",\"children\":\"\"},{\"text\":\"蒙城\",\"value\":\"341622\",\"children\":\"\"},{\"text\":\"利辛\",\"value\":\"341623\",\"children\":\"\"}]},{\"text\":\"池州\",\"value\":\"341700\",\"children\":[{\"text\":\"贵池\",\"value\":\"341702\",\"children\":\"\"},{\"text\":\"东至\",\"value\":\"341721\",\"children\":\"\"},{\"text\":\"石台\",\"value\":\"341722\",\"children\":\"\"},{\"text\":\"青阳\",\"value\":\"341723\",\"children\":\"\"}]},{\"text\":\"宣城\",\"value\":\"341800\",\"children\":[{\"text\":\"宣州\",\"value\":\"341802\",\"children\":\"\"},{\"text\":\"郎溪\",\"value\":\"341821\",\"children\":\"\"},{\"text\":\"广德\",\"value\":\"341822\",\"children\":\"\"},{\"text\":\"泾县\",\"value\":\"341823\",\"children\":\"\"},{\"text\":\"绩溪\",\"value\":\"341824\",\"children\":\"\"},{\"text\":\"旌德\",\"value\":\"341825\",\"children\":\"\"},{\"text\":\"宁国\",\"value\":\"341881\",\"children\":\"\"}]}]},{\"text\":\"福建\",\"value\":\"350000\",\"children\":[{\"text\":\"福州\",\"value\":\"350100\",\"children\":[{\"text\":\"鼓楼\",\"value\":\"350102\",\"children\":\"\"},{\"text\":\"台江\",\"value\":\"350103\",\"children\":\"\"},{\"text\":\"仓山\",\"value\":\"350104\",\"children\":\"\"},{\"text\":\"马尾\",\"value\":\"350105\",\"children\":\"\"},{\"text\":\"晋安\",\"value\":\"350111\",\"children\":\"\"},{\"text\":\"闽侯\",\"value\":\"350121\",\"children\":\"\"},{\"text\":\"连江\",\"value\":\"350122\",\"children\":\"\"},{\"text\":\"罗源\",\"value\":\"350123\",\"children\":\"\"},{\"text\":\"闽清\",\"value\":\"350124\",\"children\":\"\"},{\"text\":\"永泰\",\"value\":\"350125\",\"children\":\"\"},{\"text\":\"平潭\",\"value\":\"350128\",\"children\":\"\"},{\"text\":\"福清\",\"value\":\"350181\",\"children\":\"\"},{\"text\":\"长乐\",\"value\":\"350182\",\"children\":\"\"}]},{\"text\":\"厦门\",\"value\":\"350200\",\"children\":[{\"text\":\"思明\",\"value\":\"350203\",\"children\":\"\"},{\"text\":\"海沧\",\"value\":\"350205\",\"children\":\"\"},{\"text\":\"湖里\",\"value\":\"350206\",\"children\":\"\"},{\"text\":\"集美\",\"value\":\"350211\",\"children\":\"\"},{\"text\":\"同安\",\"value\":\"350212\",\"children\":\"\"},{\"text\":\"翔安\",\"value\":\"350213\",\"children\":\"\"}]},{\"text\":\"莆田\",\"value\":\"350300\",\"children\":[{\"text\":\"城厢\",\"value\":\"350302\",\"children\":\"\"},{\"text\":\"涵江\",\"value\":\"350303\",\"children\":\"\"},{\"text\":\"荔城\",\"value\":\"350304\",\"children\":\"\"},{\"text\":\"秀屿\",\"value\":\"350305\",\"children\":\"\"},{\"text\":\"仙游\",\"value\":\"350322\",\"children\":\"\"}]},{\"text\":\"三明\",\"value\":\"350400\",\"children\":[{\"text\":\"梅列\",\"value\":\"350402\",\"children\":\"\"},{\"text\":\"三元\",\"value\":\"350403\",\"children\":\"\"},{\"text\":\"明溪\",\"value\":\"350421\",\"children\":\"\"},{\"text\":\"清流\",\"value\":\"350423\",\"children\":\"\"},{\"text\":\"宁化\",\"value\":\"350424\",\"children\":\"\"},{\"text\":\"大田\",\"value\":\"350425\",\"children\":\"\"},{\"text\":\"尤溪\",\"value\":\"350426\",\"children\":\"\"},{\"text\":\"沙县\",\"value\":\"350427\",\"children\":\"\"},{\"text\":\"将乐\",\"value\":\"350428\",\"children\":\"\"},{\"text\":\"泰宁\",\"value\":\"350429\",\"children\":\"\"},{\"text\":\"建宁\",\"value\":\"350430\",\"children\":\"\"},{\"text\":\"永安\",\"value\":\"350481\",\"children\":\"\"}]},{\"text\":\"泉州\",\"value\":\"350500\",\"children\":[{\"text\":\"鲤城\",\"value\":\"350502\",\"children\":\"\"},{\"text\":\"丰泽\",\"value\":\"350503\",\"children\":\"\"},{\"text\":\"洛江\",\"value\":\"350504\",\"children\":\"\"},{\"text\":\"泉港\",\"value\":\"350505\",\"children\":\"\"},{\"text\":\"惠安\",\"value\":\"350521\",\"children\":\"\"},{\"text\":\"安溪\",\"value\":\"350524\",\"children\":\"\"},{\"text\":\"永春\",\"value\":\"350525\",\"children\":\"\"},{\"text\":\"德化\",\"value\":\"350526\",\"children\":\"\"},{\"text\":\"金门\",\"value\":\"350527\",\"children\":\"\"},{\"text\":\"石狮\",\"value\":\"350581\",\"children\":\"\"},{\"text\":\"晋江\",\"value\":\"350582\",\"children\":\"\"},{\"text\":\"南安\",\"value\":\"350583\",\"children\":\"\"}]},{\"text\":\"漳州\",\"value\":\"350600\",\"children\":[{\"text\":\"芗城\",\"value\":\"350602\",\"children\":\"\"},{\"text\":\"龙文\",\"value\":\"350603\",\"children\":\"\"},{\"text\":\"云霄\",\"value\":\"350622\",\"children\":\"\"},{\"text\":\"漳浦\",\"value\":\"350623\",\"children\":\"\"},{\"text\":\"诏安\",\"value\":\"350624\",\"children\":\"\"},{\"text\":\"长泰\",\"value\":\"350625\",\"children\":\"\"},{\"text\":\"东山\",\"value\":\"350626\",\"children\":\"\"},{\"text\":\"南靖\",\"value\":\"350627\",\"children\":\"\"},{\"text\":\"平和\",\"value\":\"350628\",\"children\":\"\"},{\"text\":\"华安\",\"value\":\"350629\",\"children\":\"\"},{\"text\":\"龙海\",\"value\":\"350681\",\"children\":\"\"}]},{\"text\":\"南平\",\"value\":\"350700\",\"children\":[{\"text\":\"延平\",\"value\":\"350702\",\"children\":\"\"},{\"text\":\"顺昌\",\"value\":\"350721\",\"children\":\"\"},{\"text\":\"浦城\",\"value\":\"350722\",\"children\":\"\"},{\"text\":\"光泽\",\"value\":\"350723\",\"children\":\"\"},{\"text\":\"松溪\",\"value\":\"350724\",\"children\":\"\"},{\"text\":\"政和\",\"value\":\"350725\",\"children\":\"\"},{\"text\":\"邵武\",\"value\":\"350781\",\"children\":\"\"},{\"text\":\"武夷山\",\"value\":\"350782\",\"children\":\"\"},{\"text\":\"建瓯\",\"value\":\"350783\",\"children\":\"\"},{\"text\":\"建阳\",\"value\":\"350784\",\"children\":\"\"}]},{\"text\":\"龙岩\",\"value\":\"350800\",\"children\":[{\"text\":\"新罗\",\"value\":\"350802\",\"children\":\"\"},{\"text\":\"长汀\",\"value\":\"350821\",\"children\":\"\"},{\"text\":\"永定\",\"value\":\"350822\",\"children\":\"\"},{\"text\":\"上杭\",\"value\":\"350823\",\"children\":\"\"},{\"text\":\"武平\",\"value\":\"350824\",\"children\":\"\"},{\"text\":\"连城\",\"value\":\"350825\",\"children\":\"\"},{\"text\":\"漳平\",\"value\":\"350881\",\"children\":\"\"}]},{\"text\":\"宁德\",\"value\":\"350900\",\"children\":[{\"text\":\"蕉城\",\"value\":\"350902\",\"children\":\"\"},{\"text\":\"霞浦\",\"value\":\"350921\",\"children\":\"\"},{\"text\":\"古田\",\"value\":\"350922\",\"children\":\"\"},{\"text\":\"屏南\",\"value\":\"350923\",\"children\":\"\"},{\"text\":\"寿宁\",\"value\":\"350924\",\"children\":\"\"},{\"text\":\"周宁\",\"value\":\"350925\",\"children\":\"\"},{\"text\":\"柘荣\",\"value\":\"350926\",\"children\":\"\"},{\"text\":\"福安\",\"value\":\"350981\",\"children\":\"\"},{\"text\":\"福鼎\",\"value\":\"350982\",\"children\":\"\"}]}]},{\"text\":\"江西\",\"value\":\"360000\",\"children\":[{\"text\":\"南昌\",\"value\":\"360100\",\"children\":[{\"text\":\"东湖\",\"value\":\"360102\",\"children\":\"\"},{\"text\":\"西湖\",\"value\":\"360103\",\"children\":\"\"},{\"text\":\"青云谱\",\"value\":\"360104\",\"children\":\"\"},{\"text\":\"湾里\",\"value\":\"360105\",\"children\":\"\"},{\"text\":\"青山湖\",\"value\":\"360111\",\"children\":\"\"},{\"text\":\"南昌\",\"value\":\"360121\",\"children\":\"\"},{\"text\":\"新建\",\"value\":\"360122\",\"children\":\"\"},{\"text\":\"安义\",\"value\":\"360123\",\"children\":\"\"},{\"text\":\"进贤\",\"value\":\"360124\",\"children\":\"\"}]},{\"text\":\"景德镇\",\"value\":\"360200\",\"children\":[{\"text\":\"昌江\",\"value\":\"360202\",\"children\":\"\"},{\"text\":\"珠山\",\"value\":\"360203\",\"children\":\"\"},{\"text\":\"浮梁\",\"value\":\"360222\",\"children\":\"\"},{\"text\":\"乐平\",\"value\":\"360281\",\"children\":\"\"}]},{\"text\":\"萍乡\",\"value\":\"360300\",\"children\":[{\"text\":\"安源\",\"value\":\"360302\",\"children\":\"\"},{\"text\":\"湘东\",\"value\":\"360313\",\"children\":\"\"},{\"text\":\"莲花\",\"value\":\"360321\",\"children\":\"\"},{\"text\":\"上栗\",\"value\":\"360322\",\"children\":\"\"},{\"text\":\"芦溪\",\"value\":\"360323\",\"children\":\"\"}]},{\"text\":\"九江\",\"value\":\"360400\",\"children\":[{\"text\":\"庐山\",\"value\":\"360402\",\"children\":\"\"},{\"text\":\"浔阳\",\"value\":\"360403\",\"children\":\"\"},{\"text\":\"九江\",\"value\":\"360421\",\"children\":\"\"},{\"text\":\"武宁\",\"value\":\"360423\",\"children\":\"\"},{\"text\":\"修水\",\"value\":\"360424\",\"children\":\"\"},{\"text\":\"永修\",\"value\":\"360425\",\"children\":\"\"},{\"text\":\"德安\",\"value\":\"360426\",\"children\":\"\"},{\"text\":\"星子\",\"value\":\"360427\",\"children\":\"\"},{\"text\":\"都昌\",\"value\":\"360428\",\"children\":\"\"},{\"text\":\"湖口\",\"value\":\"360429\",\"children\":\"\"},{\"text\":\"彭泽\",\"value\":\"360430\",\"children\":\"\"},{\"text\":\"瑞昌\",\"value\":\"360481\",\"children\":\"\"},{\"text\":\"共青城\",\"value\":\"360483\",\"children\":\"\"}]},{\"text\":\"新余\",\"value\":\"360500\",\"children\":[{\"text\":\"渝水\",\"value\":\"360502\",\"children\":\"\"},{\"text\":\"分宜\",\"value\":\"360521\",\"children\":\"\"}]},{\"text\":\"鹰潭\",\"value\":\"360600\",\"children\":[{\"text\":\"月湖\",\"value\":\"360602\",\"children\":\"\"},{\"text\":\"余江\",\"value\":\"360622\",\"children\":\"\"},{\"text\":\"贵溪\",\"value\":\"360681\",\"children\":\"\"}]},{\"text\":\"赣州\",\"value\":\"360700\",\"children\":[{\"text\":\"章贡\",\"value\":\"360702\",\"children\":\"\"},{\"text\":\"赣县\",\"value\":\"360721\",\"children\":\"\"},{\"text\":\"信丰\",\"value\":\"360722\",\"children\":\"\"},{\"text\":\"大余\",\"value\":\"360723\",\"children\":\"\"},{\"text\":\"上犹\",\"value\":\"360724\",\"children\":\"\"},{\"text\":\"崇义\",\"value\":\"360725\",\"children\":\"\"},{\"text\":\"安远\",\"value\":\"360726\",\"children\":\"\"},{\"text\":\"龙南\",\"value\":\"360727\",\"children\":\"\"},{\"text\":\"定南\",\"value\":\"360728\",\"children\":\"\"},{\"text\":\"全南\",\"value\":\"360729\",\"children\":\"\"},{\"text\":\"宁都\",\"value\":\"360730\",\"children\":\"\"},{\"text\":\"于都\",\"value\":\"360731\",\"children\":\"\"},{\"text\":\"兴国\",\"value\":\"360732\",\"children\":\"\"},{\"text\":\"会昌\",\"value\":\"360733\",\"children\":\"\"},{\"text\":\"寻乌\",\"value\":\"360734\",\"children\":\"\"},{\"text\":\"石城\",\"value\":\"360735\",\"children\":\"\"},{\"text\":\"瑞金\",\"value\":\"360781\",\"children\":\"\"},{\"text\":\"南康\",\"value\":\"360782\",\"children\":\"\"}]},{\"text\":\"吉安\",\"value\":\"360800\",\"children\":[{\"text\":\"吉州\",\"value\":\"360802\",\"children\":\"\"},{\"text\":\"青原\",\"value\":\"360803\",\"children\":\"\"},{\"text\":\"吉安\",\"value\":\"360821\",\"children\":\"\"},{\"text\":\"吉水\",\"value\":\"360822\",\"children\":\"\"},{\"text\":\"峡江\",\"value\":\"360823\",\"children\":\"\"},{\"text\":\"新干\",\"value\":\"360824\",\"children\":\"\"},{\"text\":\"永丰\",\"value\":\"360825\",\"children\":\"\"},{\"text\":\"泰和\",\"value\":\"360826\",\"children\":\"\"},{\"text\":\"遂川\",\"value\":\"360827\",\"children\":\"\"},{\"text\":\"万安\",\"value\":\"360828\",\"children\":\"\"},{\"text\":\"安福\",\"value\":\"360829\",\"children\":\"\"},{\"text\":\"永新\",\"value\":\"360830\",\"children\":\"\"},{\"text\":\"井冈山\",\"value\":\"360881\",\"children\":\"\"}]},{\"text\":\"宜春\",\"value\":\"360900\",\"children\":[{\"text\":\"袁州\",\"value\":\"360902\",\"children\":\"\"},{\"text\":\"奉新\",\"value\":\"360921\",\"children\":\"\"},{\"text\":\"万载\",\"value\":\"360922\",\"children\":\"\"},{\"text\":\"上高\",\"value\":\"360923\",\"children\":\"\"},{\"text\":\"宜丰\",\"value\":\"360924\",\"children\":\"\"},{\"text\":\"靖安\",\"value\":\"360925\",\"children\":\"\"},{\"text\":\"铜鼓\",\"value\":\"360926\",\"children\":\"\"},{\"text\":\"丰城\",\"value\":\"360981\",\"children\":\"\"},{\"text\":\"樟树\",\"value\":\"360982\",\"children\":\"\"},{\"text\":\"高安\",\"value\":\"360983\",\"children\":\"\"}]},{\"text\":\"抚州\",\"value\":\"361000\",\"children\":[{\"text\":\"临川\",\"value\":\"361002\",\"children\":\"\"},{\"text\":\"南城\",\"value\":\"361021\",\"children\":\"\"},{\"text\":\"黎川\",\"value\":\"361022\",\"children\":\"\"},{\"text\":\"南丰\",\"value\":\"361023\",\"children\":\"\"},{\"text\":\"崇仁\",\"value\":\"361024\",\"children\":\"\"},{\"text\":\"乐安\",\"value\":\"361025\",\"children\":\"\"},{\"text\":\"宜黄\",\"value\":\"361026\",\"children\":\"\"},{\"text\":\"金溪\",\"value\":\"361027\",\"children\":\"\"},{\"text\":\"资溪\",\"value\":\"361028\",\"children\":\"\"},{\"text\":\"东乡\",\"value\":\"361029\",\"children\":\"\"},{\"text\":\"广昌\",\"value\":\"361030\",\"children\":\"\"}]},{\"text\":\"上饶\",\"value\":\"361100\",\"children\":[{\"text\":\"信州\",\"value\":\"361102\",\"children\":\"\"},{\"text\":\"上饶\",\"value\":\"361121\",\"children\":\"\"},{\"text\":\"广丰\",\"value\":\"361122\",\"children\":\"\"},{\"text\":\"玉山\",\"value\":\"361123\",\"children\":\"\"},{\"text\":\"铅山\",\"value\":\"361124\",\"children\":\"\"},{\"text\":\"横峰\",\"value\":\"361125\",\"children\":\"\"},{\"text\":\"弋阳\",\"value\":\"361126\",\"children\":\"\"},{\"text\":\"余干\",\"value\":\"361127\",\"children\":\"\"},{\"text\":\"鄱阳\",\"value\":\"361128\",\"children\":\"\"},{\"text\":\"万年\",\"value\":\"361129\",\"children\":\"\"},{\"text\":\"婺源\",\"value\":\"361130\",\"children\":\"\"},{\"text\":\"德兴\",\"value\":\"361181\",\"children\":\"\"}]}]},{\"text\":\"山东\",\"value\":\"370000\",\"children\":[{\"text\":\"济南\",\"value\":\"370100\",\"children\":[{\"text\":\"历下\",\"value\":\"370102\",\"children\":\"\"},{\"text\":\"市中\",\"value\":\"370103\",\"children\":\"\"},{\"text\":\"槐荫\",\"value\":\"370104\",\"children\":\"\"},{\"text\":\"天桥\",\"value\":\"370105\",\"children\":\"\"},{\"text\":\"历城\",\"value\":\"370112\",\"children\":\"\"},{\"text\":\"长清\",\"value\":\"370113\",\"children\":\"\"},{\"text\":\"平阴\",\"value\":\"370124\",\"children\":\"\"},{\"text\":\"济阳\",\"value\":\"370125\",\"children\":\"\"},{\"text\":\"商河\",\"value\":\"370126\",\"children\":\"\"},{\"text\":\"章丘\",\"value\":\"370181\",\"children\":\"\"}]},{\"text\":\"青岛\",\"value\":\"370200\",\"children\":[{\"text\":\"市南\",\"value\":\"370202\",\"children\":\"\"},{\"text\":\"市北\",\"value\":\"370203\",\"children\":\"\"},{\"text\":\"黄岛\",\"value\":\"370211\",\"children\":\"\"},{\"text\":\"崂山\",\"value\":\"370212\",\"children\":\"\"},{\"text\":\"李沧\",\"value\":\"370213\",\"children\":\"\"},{\"text\":\"城阳\",\"value\":\"370214\",\"children\":\"\"},{\"text\":\"胶州\",\"value\":\"370281\",\"children\":\"\"},{\"text\":\"即墨\",\"value\":\"370282\",\"children\":\"\"},{\"text\":\"平度\",\"value\":\"370283\",\"children\":\"\"},{\"text\":\"莱西\",\"value\":\"370285\",\"children\":\"\"}]},{\"text\":\"淄博\",\"value\":\"370300\",\"children\":[{\"text\":\"淄川\",\"value\":\"370302\",\"children\":\"\"},{\"text\":\"张店\",\"value\":\"370303\",\"children\":\"\"},{\"text\":\"博山\",\"value\":\"370304\",\"children\":\"\"},{\"text\":\"临淄\",\"value\":\"370305\",\"children\":\"\"},{\"text\":\"周村\",\"value\":\"370306\",\"children\":\"\"},{\"text\":\"桓台\",\"value\":\"370321\",\"children\":\"\"},{\"text\":\"高青\",\"value\":\"370322\",\"children\":\"\"},{\"text\":\"沂源\",\"value\":\"370323\",\"children\":\"\"}]},{\"text\":\"枣庄\",\"value\":\"370400\",\"children\":[{\"text\":\"市中\",\"value\":\"370402\",\"children\":\"\"},{\"text\":\"薛城\",\"value\":\"370403\",\"children\":\"\"},{\"text\":\"峄城\",\"value\":\"370404\",\"children\":\"\"},{\"text\":\"台儿庄\",\"value\":\"370405\",\"children\":\"\"},{\"text\":\"山亭\",\"value\":\"370406\",\"children\":\"\"},{\"text\":\"滕州\",\"value\":\"370481\",\"children\":\"\"}]},{\"text\":\"东营\",\"value\":\"370500\",\"children\":[{\"text\":\"东营\",\"value\":\"370502\",\"children\":\"\"},{\"text\":\"河口\",\"value\":\"370503\",\"children\":\"\"},{\"text\":\"垦利\",\"value\":\"370521\",\"children\":\"\"},{\"text\":\"利津\",\"value\":\"370522\",\"children\":\"\"},{\"text\":\"广饶\",\"value\":\"370523\",\"children\":\"\"}]},{\"text\":\"烟台\",\"value\":\"370600\",\"children\":[{\"text\":\"芝罘\",\"value\":\"370602\",\"children\":\"\"},{\"text\":\"福山\",\"value\":\"370611\",\"children\":\"\"},{\"text\":\"牟平\",\"value\":\"370612\",\"children\":\"\"},{\"text\":\"莱山\",\"value\":\"370613\",\"children\":\"\"},{\"text\":\"长岛\",\"value\":\"370634\",\"children\":\"\"},{\"text\":\"龙口\",\"value\":\"370681\",\"children\":\"\"},{\"text\":\"莱阳\",\"value\":\"370682\",\"children\":\"\"},{\"text\":\"莱州\",\"value\":\"370683\",\"children\":\"\"},{\"text\":\"蓬莱\",\"value\":\"370684\",\"children\":\"\"},{\"text\":\"招远\",\"value\":\"370685\",\"children\":\"\"},{\"text\":\"栖霞\",\"value\":\"370686\",\"children\":\"\"},{\"text\":\"海阳\",\"value\":\"370687\",\"children\":\"\"}]},{\"text\":\"潍坊\",\"value\":\"370700\",\"children\":[{\"text\":\"潍城\",\"value\":\"370702\",\"children\":\"\"},{\"text\":\"寒亭\",\"value\":\"370703\",\"children\":\"\"},{\"text\":\"坊子\",\"value\":\"370704\",\"children\":\"\"},{\"text\":\"奎文\",\"value\":\"370705\",\"children\":\"\"},{\"text\":\"临朐\",\"value\":\"370724\",\"children\":\"\"},{\"text\":\"昌乐\",\"value\":\"370725\",\"children\":\"\"},{\"text\":\"青州\",\"value\":\"370781\",\"children\":\"\"},{\"text\":\"诸城\",\"value\":\"370782\",\"children\":\"\"},{\"text\":\"寿光\",\"value\":\"370783\",\"children\":\"\"},{\"text\":\"安丘\",\"value\":\"370784\",\"children\":\"\"},{\"text\":\"高密\",\"value\":\"370785\",\"children\":\"\"},{\"text\":\"昌邑\",\"value\":\"370786\",\"children\":\"\"}]},{\"text\":\"济宁\",\"value\":\"370800\",\"children\":[{\"text\":\"市中\",\"value\":\"370802\",\"children\":\"\"},{\"text\":\"任城\",\"value\":\"370811\",\"children\":\"\"},{\"text\":\"微山\",\"value\":\"370826\",\"children\":\"\"},{\"text\":\"鱼台\",\"value\":\"370827\",\"children\":\"\"},{\"text\":\"金乡\",\"value\":\"370828\",\"children\":\"\"},{\"text\":\"嘉祥\",\"value\":\"370829\",\"children\":\"\"},{\"text\":\"汶上\",\"value\":\"370830\",\"children\":\"\"},{\"text\":\"泗水\",\"value\":\"370831\",\"children\":\"\"},{\"text\":\"梁山\",\"value\":\"370832\",\"children\":\"\"},{\"text\":\"曲阜\",\"value\":\"370881\",\"children\":\"\"},{\"text\":\"兖州\",\"value\":\"370882\",\"children\":\"\"},{\"text\":\"邹城\",\"value\":\"370883\",\"children\":\"\"}]},{\"text\":\"泰安\",\"value\":\"370900\",\"children\":[{\"text\":\"泰山\",\"value\":\"370902\",\"children\":\"\"},{\"text\":\"岱岳\",\"value\":\"370903\",\"children\":\"\"},{\"text\":\"宁阳\",\"value\":\"370921\",\"children\":\"\"},{\"text\":\"东平\",\"value\":\"370923\",\"children\":\"\"},{\"text\":\"新泰\",\"value\":\"370982\",\"children\":\"\"},{\"text\":\"肥城\",\"value\":\"370983\",\"children\":\"\"}]},{\"text\":\"威海\",\"value\":\"371000\",\"children\":[{\"text\":\"环翠\",\"value\":\"371002\",\"children\":\"\"},{\"text\":\"文登\",\"value\":\"371081\",\"children\":\"\"},{\"text\":\"荣成\",\"value\":\"371082\",\"children\":\"\"},{\"text\":\"乳山\",\"value\":\"371083\",\"children\":\"\"}]},{\"text\":\"日照\",\"value\":\"371100\",\"children\":[{\"text\":\"东港\",\"value\":\"371102\",\"children\":\"\"},{\"text\":\"岚山\",\"value\":\"371103\",\"children\":\"\"},{\"text\":\"五莲\",\"value\":\"371121\",\"children\":\"\"},{\"text\":\"莒县\",\"value\":\"371122\",\"children\":\"\"}]},{\"text\":\"莱芜\",\"value\":\"371200\",\"children\":[{\"text\":\"莱城\",\"value\":\"371202\",\"children\":\"\"},{\"text\":\"钢城\",\"value\":\"371203\",\"children\":\"\"}]},{\"text\":\"临沂\",\"value\":\"371300\",\"children\":[{\"text\":\"兰山\",\"value\":\"371302\",\"children\":\"\"},{\"text\":\"罗庄\",\"value\":\"371311\",\"children\":\"\"},{\"text\":\"河东\",\"value\":\"371312\",\"children\":\"\"},{\"text\":\"沂南\",\"value\":\"371321\",\"children\":\"\"},{\"text\":\"郯城\",\"value\":\"371322\",\"children\":\"\"},{\"text\":\"沂水\",\"value\":\"371323\",\"children\":\"\"},{\"text\":\"兰陵\",\"value\":\"371324\",\"children\":\"\"},{\"text\":\"费县\",\"value\":\"371325\",\"children\":\"\"},{\"text\":\"平邑\",\"value\":\"371326\",\"children\":\"\"},{\"text\":\"莒南\",\"value\":\"371327\",\"children\":\"\"},{\"text\":\"蒙阴\",\"value\":\"371328\",\"children\":\"\"},{\"text\":\"临沭\",\"value\":\"371329\",\"children\":\"\"}]},{\"text\":\"德州\",\"value\":\"371400\",\"children\":[{\"text\":\"德城\",\"value\":\"371402\",\"children\":\"\"},{\"text\":\"陵城\",\"value\":\"371421\",\"children\":\"\"},{\"text\":\"宁津\",\"value\":\"371422\",\"children\":\"\"},{\"text\":\"庆云\",\"value\":\"371423\",\"children\":\"\"},{\"text\":\"临邑\",\"value\":\"371424\",\"children\":\"\"},{\"text\":\"齐河\",\"value\":\"371425\",\"children\":\"\"},{\"text\":\"平原\",\"value\":\"371426\",\"children\":\"\"},{\"text\":\"夏津\",\"value\":\"371427\",\"children\":\"\"},{\"text\":\"武城\",\"value\":\"371428\",\"children\":\"\"},{\"text\":\"乐陵\",\"value\":\"371481\",\"children\":\"\"},{\"text\":\"禹城\",\"value\":\"371482\",\"children\":\"\"}]},{\"text\":\"聊城\",\"value\":\"371500\",\"children\":[{\"text\":\"东昌府\",\"value\":\"371502\",\"children\":\"\"},{\"text\":\"阳谷\",\"value\":\"371521\",\"children\":\"\"},{\"text\":\"莘县\",\"value\":\"371522\",\"children\":\"\"},{\"text\":\"茌平\",\"value\":\"371523\",\"children\":\"\"},{\"text\":\"东阿\",\"value\":\"371524\",\"children\":\"\"},{\"text\":\"冠县\",\"value\":\"371525\",\"children\":\"\"},{\"text\":\"高唐\",\"value\":\"371526\",\"children\":\"\"},{\"text\":\"临清\",\"value\":\"371581\",\"children\":\"\"}]},{\"text\":\"滨州\",\"value\":\"371600\",\"children\":[{\"text\":\"滨城\",\"value\":\"371602\",\"children\":\"\"},{\"text\":\"惠民\",\"value\":\"371621\",\"children\":\"\"},{\"text\":\"阳信\",\"value\":\"371622\",\"children\":\"\"},{\"text\":\"无棣\",\"value\":\"371623\",\"children\":\"\"},{\"text\":\"沾化\",\"value\":\"371624\",\"children\":\"\"},{\"text\":\"博兴\",\"value\":\"371625\",\"children\":\"\"},{\"text\":\"邹平\",\"value\":\"371626\",\"children\":\"\"}]},{\"text\":\"菏泽\",\"value\":\"371700\",\"children\":[{\"text\":\"牡丹\",\"value\":\"371702\",\"children\":\"\"},{\"text\":\"曹县\",\"value\":\"371721\",\"children\":\"\"},{\"text\":\"单县\",\"value\":\"371722\",\"children\":\"\"},{\"text\":\"成武\",\"value\":\"371723\",\"children\":\"\"},{\"text\":\"巨野\",\"value\":\"371724\",\"children\":\"\"},{\"text\":\"郓城\",\"value\":\"371725\",\"children\":\"\"},{\"text\":\"鄄城\",\"value\":\"371726\",\"children\":\"\"},{\"text\":\"定陶\",\"value\":\"371727\",\"children\":\"\"},{\"text\":\"东明\",\"value\":\"371728\",\"children\":\"\"}]}]},{\"text\":\"河南\",\"value\":\"410000\",\"children\":[{\"text\":\"郑州\",\"value\":\"410100\",\"children\":[{\"text\":\"中原\",\"value\":\"410102\",\"children\":\"\"},{\"text\":\"二七\",\"value\":\"410103\",\"children\":\"\"},{\"text\":\"管城回族\",\"value\":\"410104\",\"children\":\"\"},{\"text\":\"金水\",\"value\":\"410105\",\"children\":\"\"},{\"text\":\"上街\",\"value\":\"410106\",\"children\":\"\"},{\"text\":\"惠济\",\"value\":\"410108\",\"children\":\"\"},{\"text\":\"中牟\",\"value\":\"410122\",\"children\":\"\"},{\"text\":\"巩义\",\"value\":\"410181\",\"children\":\"\"},{\"text\":\"荥阳\",\"value\":\"410182\",\"children\":\"\"},{\"text\":\"新密\",\"value\":\"410183\",\"children\":\"\"},{\"text\":\"新郑\",\"value\":\"410184\",\"children\":\"\"},{\"text\":\"登封\",\"value\":\"410185\",\"children\":\"\"}]},{\"text\":\"开封\",\"value\":\"410200\",\"children\":[{\"text\":\"龙亭\",\"value\":\"410202\",\"children\":\"\"},{\"text\":\"顺河回族\",\"value\":\"410203\",\"children\":\"\"},{\"text\":\"鼓楼\",\"value\":\"410204\",\"children\":\"\"},{\"text\":\"禹王台\",\"value\":\"410205\",\"children\":\"\"},{\"text\":\"金明\",\"value\":\"410211\",\"children\":\"\"},{\"text\":\"杞县\",\"value\":\"410221\",\"children\":\"\"},{\"text\":\"通许\",\"value\":\"410222\",\"children\":\"\"},{\"text\":\"尉氏\",\"value\":\"410223\",\"children\":\"\"},{\"text\":\"祥符\",\"value\":\"410224\",\"children\":\"\"},{\"text\":\"兰考\",\"value\":\"410225\",\"children\":\"\"}]},{\"text\":\"洛阳\",\"value\":\"410300\",\"children\":[{\"text\":\"老城\",\"value\":\"410302\",\"children\":\"\"},{\"text\":\"西工\",\"value\":\"410303\",\"children\":\"\"},{\"text\":\"瀍河回族\",\"value\":\"410304\",\"children\":\"\"},{\"text\":\"涧西\",\"value\":\"410305\",\"children\":\"\"},{\"text\":\"吉利\",\"value\":\"410306\",\"children\":\"\"},{\"text\":\"洛龙\",\"value\":\"410307\",\"children\":\"\"},{\"text\":\"孟津\",\"value\":\"410322\",\"children\":\"\"},{\"text\":\"新安\",\"value\":\"410323\",\"children\":\"\"},{\"text\":\"栾川\",\"value\":\"410324\",\"children\":\"\"},{\"text\":\"嵩县\",\"value\":\"410325\",\"children\":\"\"},{\"text\":\"汝阳\",\"value\":\"410326\",\"children\":\"\"},{\"text\":\"宜阳\",\"value\":\"410327\",\"children\":\"\"},{\"text\":\"洛宁\",\"value\":\"410328\",\"children\":\"\"},{\"text\":\"伊川\",\"value\":\"410329\",\"children\":\"\"},{\"text\":\"偃师\",\"value\":\"410381\",\"children\":\"\"}]},{\"text\":\"平顶山\",\"value\":\"410400\",\"children\":[{\"text\":\"新华\",\"value\":\"410402\",\"children\":\"\"},{\"text\":\"卫东\",\"value\":\"410403\",\"children\":\"\"},{\"text\":\"石龙\",\"value\":\"410404\",\"children\":\"\"},{\"text\":\"湛河\",\"value\":\"410411\",\"children\":\"\"},{\"text\":\"宝丰\",\"value\":\"410421\",\"children\":\"\"},{\"text\":\"叶县\",\"value\":\"410422\",\"children\":\"\"},{\"text\":\"鲁山\",\"value\":\"410423\",\"children\":\"\"},{\"text\":\"郏县\",\"value\":\"410425\",\"children\":\"\"},{\"text\":\"舞钢\",\"value\":\"410481\",\"children\":\"\"},{\"text\":\"汝州\",\"value\":\"410482\",\"children\":\"\"}]},{\"text\":\"安阳\",\"value\":\"410500\",\"children\":[{\"text\":\"文峰\",\"value\":\"410502\",\"children\":\"\"},{\"text\":\"北关\",\"value\":\"410503\",\"children\":\"\"},{\"text\":\"殷都\",\"value\":\"410505\",\"children\":\"\"},{\"text\":\"龙安\",\"value\":\"410506\",\"children\":\"\"},{\"text\":\"安阳\",\"value\":\"410522\",\"children\":\"\"},{\"text\":\"汤阴\",\"value\":\"410523\",\"children\":\"\"},{\"text\":\"滑县\",\"value\":\"410526\",\"children\":\"\"},{\"text\":\"内黄\",\"value\":\"410527\",\"children\":\"\"},{\"text\":\"林州\",\"value\":\"410581\",\"children\":\"\"}]},{\"text\":\"鹤壁\",\"value\":\"410600\",\"children\":[{\"text\":\"鹤山\",\"value\":\"410602\",\"children\":\"\"},{\"text\":\"山城\",\"value\":\"410603\",\"children\":\"\"},{\"text\":\"淇滨\",\"value\":\"410611\",\"children\":\"\"},{\"text\":\"浚县\",\"value\":\"410621\",\"children\":\"\"},{\"text\":\"淇县\",\"value\":\"410622\",\"children\":\"\"}]},{\"text\":\"新乡\",\"value\":\"410700\",\"children\":[{\"text\":\"红旗\",\"value\":\"410702\",\"children\":\"\"},{\"text\":\"卫滨\",\"value\":\"410703\",\"children\":\"\"},{\"text\":\"凤泉\",\"value\":\"410704\",\"children\":\"\"},{\"text\":\"牧野\",\"value\":\"410711\",\"children\":\"\"},{\"text\":\"新乡\",\"value\":\"410721\",\"children\":\"\"},{\"text\":\"获嘉\",\"value\":\"410724\",\"children\":\"\"},{\"text\":\"原阳\",\"value\":\"410725\",\"children\":\"\"},{\"text\":\"延津\",\"value\":\"410726\",\"children\":\"\"},{\"text\":\"封丘\",\"value\":\"410727\",\"children\":\"\"},{\"text\":\"长垣\",\"value\":\"410728\",\"children\":\"\"},{\"text\":\"卫辉\",\"value\":\"410781\",\"children\":\"\"},{\"text\":\"辉县\",\"value\":\"410782\",\"children\":\"\"}]},{\"text\":\"焦作\",\"value\":\"410800\",\"children\":[{\"text\":\"解放\",\"value\":\"410802\",\"children\":\"\"},{\"text\":\"中站\",\"value\":\"410803\",\"children\":\"\"},{\"text\":\"马村\",\"value\":\"410804\",\"children\":\"\"},{\"text\":\"山阳\",\"value\":\"410811\",\"children\":\"\"},{\"text\":\"修武\",\"value\":\"410821\",\"children\":\"\"},{\"text\":\"博爱\",\"value\":\"410822\",\"children\":\"\"},{\"text\":\"武陟\",\"value\":\"410823\",\"children\":\"\"},{\"text\":\"温县\",\"value\":\"410825\",\"children\":\"\"},{\"text\":\"沁阳\",\"value\":\"410882\",\"children\":\"\"},{\"text\":\"孟州\",\"value\":\"410883\",\"children\":\"\"}]},{\"text\":\"济源\",\"value\":\"410881\",\"children\":[{\"text\":\"济源\",\"value\":\"410881\",\"children\":\"\"}]},{\"text\":\"濮阳\",\"value\":\"410900\",\"children\":[{\"text\":\"华龙\",\"value\":\"410902\",\"children\":\"\"},{\"text\":\"清丰\",\"value\":\"410922\",\"children\":\"\"},{\"text\":\"南乐\",\"value\":\"410923\",\"children\":\"\"},{\"text\":\"范县\",\"value\":\"410926\",\"children\":\"\"},{\"text\":\"台前\",\"value\":\"410927\",\"children\":\"\"},{\"text\":\"濮阳\",\"value\":\"410928\",\"children\":\"\"}]},{\"text\":\"许昌\",\"value\":\"411000\",\"children\":[{\"text\":\"魏都\",\"value\":\"411002\",\"children\":\"\"},{\"text\":\"许昌\",\"value\":\"411023\",\"children\":\"\"},{\"text\":\"鄢陵\",\"value\":\"411024\",\"children\":\"\"},{\"text\":\"襄城\",\"value\":\"411025\",\"children\":\"\"},{\"text\":\"禹州\",\"value\":\"411081\",\"children\":\"\"},{\"text\":\"长葛\",\"value\":\"411082\",\"children\":\"\"}]},{\"text\":\"漯河\",\"value\":\"411100\",\"children\":[{\"text\":\"源汇\",\"value\":\"411102\",\"children\":\"\"},{\"text\":\"郾城\",\"value\":\"411103\",\"children\":\"\"},{\"text\":\"召陵\",\"value\":\"411104\",\"children\":\"\"},{\"text\":\"舞阳\",\"value\":\"411121\",\"children\":\"\"},{\"text\":\"临颍\",\"value\":\"411122\",\"children\":\"\"}]},{\"text\":\"三门峡\",\"value\":\"411200\",\"children\":[{\"text\":\"湖滨\",\"value\":\"411202\",\"children\":\"\"},{\"text\":\"渑池\",\"value\":\"411221\",\"children\":\"\"},{\"text\":\"陕州\",\"value\":\"411222\",\"children\":\"\"},{\"text\":\"卢氏\",\"value\":\"411224\",\"children\":\"\"},{\"text\":\"义马\",\"value\":\"411281\",\"children\":\"\"},{\"text\":\"灵宝\",\"value\":\"411282\",\"children\":\"\"}]},{\"text\":\"南阳\",\"value\":\"411300\",\"children\":[{\"text\":\"宛城\",\"value\":\"411302\",\"children\":\"\"},{\"text\":\"卧龙\",\"value\":\"411303\",\"children\":\"\"},{\"text\":\"南召\",\"value\":\"411321\",\"children\":\"\"},{\"text\":\"方城\",\"value\":\"411322\",\"children\":\"\"},{\"text\":\"西峡\",\"value\":\"411323\",\"children\":\"\"},{\"text\":\"镇平\",\"value\":\"411324\",\"children\":\"\"},{\"text\":\"内乡\",\"value\":\"411325\",\"children\":\"\"},{\"text\":\"淅川\",\"value\":\"411326\",\"children\":\"\"},{\"text\":\"社旗县\",\"value\":\"411327\",\"children\":\"\"},{\"text\":\"唐河\",\"value\":\"411328\",\"children\":\"\"},{\"text\":\"新野\",\"value\":\"411329\",\"children\":\"\"},{\"text\":\"桐柏\",\"value\":\"411330\",\"children\":\"\"},{\"text\":\"邓州\",\"value\":\"411381\",\"children\":\"\"}]},{\"text\":\"商丘\",\"value\":\"411400\",\"children\":[{\"text\":\"梁园\",\"value\":\"411402\",\"children\":\"\"},{\"text\":\"睢阳\",\"value\":\"411403\",\"children\":\"\"},{\"text\":\"民权\",\"value\":\"411421\",\"children\":\"\"},{\"text\":\"睢县\",\"value\":\"411422\",\"children\":\"\"},{\"text\":\"宁陵\",\"value\":\"411423\",\"children\":\"\"},{\"text\":\"柘城\",\"value\":\"411424\",\"children\":\"\"},{\"text\":\"虞城\",\"value\":\"411425\",\"children\":\"\"},{\"text\":\"夏邑\",\"value\":\"411426\",\"children\":\"\"},{\"text\":\"永城\",\"value\":\"411481\",\"children\":\"\"}]},{\"text\":\"信阳\",\"value\":\"411500\",\"children\":[{\"text\":\"浉河\",\"value\":\"411502\",\"children\":\"\"},{\"text\":\"平桥\",\"value\":\"411503\",\"children\":\"\"},{\"text\":\"罗山\",\"value\":\"411521\",\"children\":\"\"},{\"text\":\"光山\",\"value\":\"411522\",\"children\":\"\"},{\"text\":\"新县\",\"value\":\"411523\",\"children\":\"\"},{\"text\":\"商城\",\"value\":\"411524\",\"children\":\"\"},{\"text\":\"固始\",\"value\":\"411525\",\"children\":\"\"},{\"text\":\"潢川\",\"value\":\"411526\",\"children\":\"\"},{\"text\":\"淮滨\",\"value\":\"411527\",\"children\":\"\"},{\"text\":\"息县\",\"value\":\"411528\",\"children\":\"\"}]},{\"text\":\"周口\",\"value\":\"411600\",\"children\":[{\"text\":\"川汇\",\"value\":\"411602\",\"children\":\"\"},{\"text\":\"扶沟\",\"value\":\"411621\",\"children\":\"\"},{\"text\":\"西华\",\"value\":\"411622\",\"children\":\"\"},{\"text\":\"商水\",\"value\":\"411623\",\"children\":\"\"},{\"text\":\"沈丘\",\"value\":\"411624\",\"children\":\"\"},{\"text\":\"郸城\",\"value\":\"411625\",\"children\":\"\"},{\"text\":\"淮阳\",\"value\":\"411626\",\"children\":\"\"},{\"text\":\"太康\",\"value\":\"411627\",\"children\":\"\"},{\"text\":\"鹿邑\",\"value\":\"411628\",\"children\":\"\"},{\"text\":\"项城\",\"value\":\"411681\",\"children\":\"\"}]},{\"text\":\"驻马店\",\"value\":\"411700\",\"children\":[{\"text\":\"驿城\",\"value\":\"411702\",\"children\":\"\"},{\"text\":\"西平\",\"value\":\"411721\",\"children\":\"\"},{\"text\":\"上蔡\",\"value\":\"411722\",\"children\":\"\"},{\"text\":\"平舆\",\"value\":\"411723\",\"children\":\"\"},{\"text\":\"正阳\",\"value\":\"411724\",\"children\":\"\"},{\"text\":\"确山\",\"value\":\"411725\",\"children\":\"\"},{\"text\":\"泌阳\",\"value\":\"411726\",\"children\":\"\"},{\"text\":\"汝南\",\"value\":\"411727\",\"children\":\"\"},{\"text\":\"遂平\",\"value\":\"411728\",\"children\":\"\"},{\"text\":\"新蔡\",\"value\":\"411729\",\"children\":\"\"}]}]},{\"text\":\"湖北\",\"value\":\"420000\",\"children\":[{\"text\":\"武汉\",\"value\":\"420100\",\"children\":[{\"text\":\"江岸\",\"value\":\"420102\",\"children\":\"\"},{\"text\":\"江汉\",\"value\":\"420103\",\"children\":\"\"},{\"text\":\"硚口\",\"value\":\"420104\",\"children\":\"\"},{\"text\":\"汉阳\",\"value\":\"420105\",\"children\":\"\"},{\"text\":\"武昌\",\"value\":\"420106\",\"children\":\"\"},{\"text\":\"青山\",\"value\":\"420107\",\"children\":\"\"},{\"text\":\"洪山\",\"value\":\"420111\",\"children\":\"\"},{\"text\":\"东西湖\",\"value\":\"420112\",\"children\":\"\"},{\"text\":\"汉南\",\"value\":\"420113\",\"children\":\"\"},{\"text\":\"蔡甸\",\"value\":\"420114\",\"children\":\"\"},{\"text\":\"江夏\",\"value\":\"420115\",\"children\":\"\"},{\"text\":\"黄陂\",\"value\":\"420116\",\"children\":\"\"},{\"text\":\"新洲\",\"value\":\"420117\",\"children\":\"\"}]},{\"text\":\"黄石\",\"value\":\"420200\",\"children\":[{\"text\":\"黄石港\",\"value\":\"420202\",\"children\":\"\"},{\"text\":\"西塞山\",\"value\":\"420203\",\"children\":\"\"},{\"text\":\"下陆\",\"value\":\"420204\",\"children\":\"\"},{\"text\":\"铁山\",\"value\":\"420205\",\"children\":\"\"},{\"text\":\"阳新\",\"value\":\"420222\",\"children\":\"\"},{\"text\":\"大冶\",\"value\":\"420281\",\"children\":\"\"}]},{\"text\":\"十堰\",\"value\":\"420300\",\"children\":[{\"text\":\"茅箭\",\"value\":\"420302\",\"children\":\"\"},{\"text\":\"张湾\",\"value\":\"420303\",\"children\":\"\"},{\"text\":\"郧阳\",\"value\":\"420321\",\"children\":\"\"},{\"text\":\"郧西\",\"value\":\"420322\",\"children\":\"\"},{\"text\":\"竹山\",\"value\":\"420323\",\"children\":\"\"},{\"text\":\"竹溪\",\"value\":\"420324\",\"children\":\"\"},{\"text\":\"房县\",\"value\":\"420325\",\"children\":\"\"},{\"text\":\"丹江口\",\"value\":\"420381\",\"children\":\"\"}]},{\"text\":\"宜昌\",\"value\":\"420500\",\"children\":[{\"text\":\"西陵\",\"value\":\"420502\",\"children\":\"\"},{\"text\":\"伍家岗\",\"value\":\"420503\",\"children\":\"\"},{\"text\":\"点军\",\"value\":\"420504\",\"children\":\"\"},{\"text\":\"猇亭\",\"value\":\"420505\",\"children\":\"\"},{\"text\":\"夷陵\",\"value\":\"420506\",\"children\":\"\"},{\"text\":\"远安\",\"value\":\"420525\",\"children\":\"\"},{\"text\":\"兴山\",\"value\":\"420526\",\"children\":\"\"},{\"text\":\"秭归\",\"value\":\"420527\",\"children\":\"\"},{\"text\":\"长阳\",\"value\":\"420528\",\"children\":\"\"},{\"text\":\"五峰\",\"value\":\"420529\",\"children\":\"\"},{\"text\":\"宜都\",\"value\":\"420581\",\"children\":\"\"},{\"text\":\"当阳\",\"value\":\"420582\",\"children\":\"\"},{\"text\":\"枝江\",\"value\":\"420583\",\"children\":\"\"}]},{\"text\":\"襄阳\",\"value\":\"420600\",\"children\":[{\"text\":\"襄城\",\"value\":\"420602\",\"children\":\"\"},{\"text\":\"樊城\",\"value\":\"420606\",\"children\":\"\"},{\"text\":\"襄州\",\"value\":\"420607\",\"children\":\"\"},{\"text\":\"南漳\",\"value\":\"420624\",\"children\":\"\"},{\"text\":\"谷城\",\"value\":\"420625\",\"children\":\"\"},{\"text\":\"保康\",\"value\":\"420626\",\"children\":\"\"},{\"text\":\"老河口\",\"value\":\"420682\",\"children\":\"\"},{\"text\":\"枣阳\",\"value\":\"420683\",\"children\":\"\"},{\"text\":\"宜城\",\"value\":\"420684\",\"children\":\"\"}]},{\"text\":\"鄂州\",\"value\":\"420700\",\"children\":[{\"text\":\"梁子湖\",\"value\":\"420702\",\"children\":\"\"},{\"text\":\"华容\",\"value\":\"420703\",\"children\":\"\"},{\"text\":\"鄂城\",\"value\":\"420704\",\"children\":\"\"}]},{\"text\":\"荆门\",\"value\":\"420800\",\"children\":[{\"text\":\"东宝\",\"value\":\"420802\",\"children\":\"\"},{\"text\":\"掇刀\",\"value\":\"420804\",\"children\":\"\"},{\"text\":\"京山\",\"value\":\"420821\",\"children\":\"\"},{\"text\":\"沙洋\",\"value\":\"420822\",\"children\":\"\"},{\"text\":\"钟祥\",\"value\":\"420881\",\"children\":\"\"}]},{\"text\":\"孝感\",\"value\":\"420900\",\"children\":[{\"text\":\"孝南\",\"value\":\"420902\",\"children\":\"\"},{\"text\":\"孝昌\",\"value\":\"420921\",\"children\":\"\"},{\"text\":\"大悟\",\"value\":\"420922\",\"children\":\"\"},{\"text\":\"云梦\",\"value\":\"420923\",\"children\":\"\"},{\"text\":\"应城\",\"value\":\"420981\",\"children\":\"\"},{\"text\":\"安陆\",\"value\":\"420982\",\"children\":\"\"},{\"text\":\"汉川\",\"value\":\"420984\",\"children\":\"\"}]},{\"text\":\"荆州\",\"value\":\"421000\",\"children\":[{\"text\":\"沙市\",\"value\":\"421002\",\"children\":\"\"},{\"text\":\"荆州\",\"value\":\"421003\",\"children\":\"\"},{\"text\":\"公安\",\"value\":\"421022\",\"children\":\"\"},{\"text\":\"监利\",\"value\":\"421023\",\"children\":\"\"},{\"text\":\"江陵\",\"value\":\"421024\",\"children\":\"\"},{\"text\":\"石首\",\"value\":\"421081\",\"children\":\"\"},{\"text\":\"洪湖\",\"value\":\"421083\",\"children\":\"\"},{\"text\":\"松滋\",\"value\":\"421087\",\"children\":\"\"}]},{\"text\":\"黄冈\",\"value\":\"421100\",\"children\":[{\"text\":\"黄州\",\"value\":\"421102\",\"children\":\"\"},{\"text\":\"团风\",\"value\":\"421121\",\"children\":\"\"},{\"text\":\"红安\",\"value\":\"421122\",\"children\":\"\"},{\"text\":\"罗田\",\"value\":\"421123\",\"children\":\"\"},{\"text\":\"英山\",\"value\":\"421124\",\"children\":\"\"},{\"text\":\"浠水\",\"value\":\"421125\",\"children\":\"\"},{\"text\":\"蕲春\",\"value\":\"421126\",\"children\":\"\"},{\"text\":\"黄梅\",\"value\":\"421127\",\"children\":\"\"},{\"text\":\"麻城\",\"value\":\"421181\",\"children\":\"\"},{\"text\":\"武穴\",\"value\":\"421182\",\"children\":\"\"}]},{\"text\":\"咸宁\",\"value\":\"421200\",\"children\":[{\"text\":\"咸安\",\"value\":\"421202\",\"children\":\"\"},{\"text\":\"嘉鱼\",\"value\":\"421221\",\"children\":\"\"},{\"text\":\"通城\",\"value\":\"421222\",\"children\":\"\"},{\"text\":\"崇阳\",\"value\":\"421223\",\"children\":\"\"},{\"text\":\"通山\",\"value\":\"421224\",\"children\":\"\"},{\"text\":\"赤壁\",\"value\":\"421281\",\"children\":\"\"}]},{\"text\":\"随州\",\"value\":\"421300\",\"children\":[{\"text\":\"曾都\",\"value\":\"421302\",\"children\":\"\"},{\"text\":\"随县\",\"value\":\"421321\",\"children\":\"\"},{\"text\":\"广水\",\"value\":\"421381\",\"children\":\"\"}]},{\"text\":\"恩施\",\"value\":\"422800\",\"children\":[{\"text\":\"恩施\",\"value\":\"422801\",\"children\":\"\"},{\"text\":\"利川\",\"value\":\"422802\",\"children\":\"\"},{\"text\":\"建始\",\"value\":\"422822\",\"children\":\"\"},{\"text\":\"巴东\",\"value\":\"422823\",\"children\":\"\"},{\"text\":\"宣恩\",\"value\":\"422825\",\"children\":\"\"},{\"text\":\"咸丰\",\"value\":\"422826\",\"children\":\"\"},{\"text\":\"来凤\",\"value\":\"422827\",\"children\":\"\"},{\"text\":\"鹤峰\",\"value\":\"422828\",\"children\":\"\"}]},{\"text\":\"仙桃\",\"value\":\"429004\",\"children\":[{\"text\":\"仙桃\",\"value\":\"429004\",\"children\":\"\"}]},{\"text\":\"潜江\",\"value\":\"429005\",\"children\":[{\"text\":\"潜江\",\"value\":\"429005\",\"children\":\"\"}]},{\"text\":\"天门\",\"value\":\"429006\",\"children\":[{\"text\":\"天门\",\"value\":\"429006\",\"children\":\"\"}]},{\"text\":\"神农架\",\"value\":\"429021\",\"children\":[{\"text\":\"神农架\",\"value\":\"429021\",\"children\":\"\"}]}]},{\"text\":\"湖南\",\"value\":\"430000\",\"children\":[{\"text\":\"长沙\",\"value\":\"430100\",\"children\":[{\"text\":\"芙蓉\",\"value\":\"430102\",\"children\":\"\"},{\"text\":\"天心\",\"value\":\"430103\",\"children\":\"\"},{\"text\":\"岳麓\",\"value\":\"430104\",\"children\":\"\"},{\"text\":\"开福\",\"value\":\"430105\",\"children\":\"\"},{\"text\":\"雨花\",\"value\":\"430111\",\"children\":\"\"},{\"text\":\"长沙\",\"value\":\"430121\",\"children\":\"\"},{\"text\":\"望城\",\"value\":\"430122\",\"children\":\"\"},{\"text\":\"宁乡\",\"value\":\"430124\",\"children\":\"\"},{\"text\":\"浏阳\",\"value\":\"430181\",\"children\":\"\"}]},{\"text\":\"株洲\",\"value\":\"430200\",\"children\":[{\"text\":\"荷塘\",\"value\":\"430202\",\"children\":\"\"},{\"text\":\"芦淞\",\"value\":\"430203\",\"children\":\"\"},{\"text\":\"石峰\",\"value\":\"430204\",\"children\":\"\"},{\"text\":\"天元\",\"value\":\"430211\",\"children\":\"\"},{\"text\":\"株洲\",\"value\":\"430221\",\"children\":\"\"},{\"text\":\"攸县\",\"value\":\"430223\",\"children\":\"\"},{\"text\":\"茶陵\",\"value\":\"430224\",\"children\":\"\"},{\"text\":\"炎陵\",\"value\":\"430225\",\"children\":\"\"},{\"text\":\"醴陵\",\"value\":\"430281\",\"children\":\"\"}]},{\"text\":\"湘潭\",\"value\":\"430300\",\"children\":[{\"text\":\"雨湖\",\"value\":\"430302\",\"children\":\"\"},{\"text\":\"岳塘\",\"value\":\"430304\",\"children\":\"\"},{\"text\":\"湘潭\",\"value\":\"430321\",\"children\":\"\"},{\"text\":\"湘乡\",\"value\":\"430381\",\"children\":\"\"},{\"text\":\"韶山\",\"value\":\"430382\",\"children\":\"\"}]},{\"text\":\"衡阳\",\"value\":\"430400\",\"children\":[{\"text\":\"珠晖\",\"value\":\"430405\",\"children\":\"\"},{\"text\":\"雁峰\",\"value\":\"430406\",\"children\":\"\"},{\"text\":\"石鼓\",\"value\":\"430407\",\"children\":\"\"},{\"text\":\"蒸湘\",\"value\":\"430408\",\"children\":\"\"},{\"text\":\"南岳\",\"value\":\"430412\",\"children\":\"\"},{\"text\":\"衡阳\",\"value\":\"430421\",\"children\":\"\"},{\"text\":\"衡南\",\"value\":\"430422\",\"children\":\"\"},{\"text\":\"衡山\",\"value\":\"430423\",\"children\":\"\"},{\"text\":\"衡东\",\"value\":\"430424\",\"children\":\"\"},{\"text\":\"祁东\",\"value\":\"430426\",\"children\":\"\"},{\"text\":\"耒阳\",\"value\":\"430481\",\"children\":\"\"},{\"text\":\"常宁\",\"value\":\"430482\",\"children\":\"\"}]},{\"text\":\"邵阳\",\"value\":\"430500\",\"children\":[{\"text\":\"双清\",\"value\":\"430502\",\"children\":\"\"},{\"text\":\"大祥\",\"value\":\"430503\",\"children\":\"\"},{\"text\":\"北塔\",\"value\":\"430511\",\"children\":\"\"},{\"text\":\"邵东\",\"value\":\"430521\",\"children\":\"\"},{\"text\":\"新邵\",\"value\":\"430522\",\"children\":\"\"},{\"text\":\"邵阳\",\"value\":\"430523\",\"children\":\"\"},{\"text\":\"隆回\",\"value\":\"430524\",\"children\":\"\"},{\"text\":\"洞口\",\"value\":\"430525\",\"children\":\"\"},{\"text\":\"绥宁\",\"value\":\"430527\",\"children\":\"\"},{\"text\":\"新宁\",\"value\":\"430528\",\"children\":\"\"},{\"text\":\"城步\",\"value\":\"430529\",\"children\":\"\"},{\"text\":\"武冈\",\"value\":\"430581\",\"children\":\"\"}]},{\"text\":\"岳阳\",\"value\":\"430600\",\"children\":[{\"text\":\"岳阳楼\",\"value\":\"430602\",\"children\":\"\"},{\"text\":\"云溪\",\"value\":\"430603\",\"children\":\"\"},{\"text\":\"君山\",\"value\":\"430611\",\"children\":\"\"},{\"text\":\"岳阳\",\"value\":\"430621\",\"children\":\"\"},{\"text\":\"华容\",\"value\":\"430623\",\"children\":\"\"},{\"text\":\"湘阴\",\"value\":\"430624\",\"children\":\"\"},{\"text\":\"平江\",\"value\":\"430626\",\"children\":\"\"},{\"text\":\"汨罗\",\"value\":\"430681\",\"children\":\"\"},{\"text\":\"临湘\",\"value\":\"430682\",\"children\":\"\"}]},{\"text\":\"常德\",\"value\":\"430700\",\"children\":[{\"text\":\"武陵\",\"value\":\"430702\",\"children\":\"\"},{\"text\":\"鼎城\",\"value\":\"430703\",\"children\":\"\"},{\"text\":\"安乡\",\"value\":\"430721\",\"children\":\"\"},{\"text\":\"汉寿\",\"value\":\"430722\",\"children\":\"\"},{\"text\":\"澧县\",\"value\":\"430723\",\"children\":\"\"},{\"text\":\"临澧\",\"value\":\"430724\",\"children\":\"\"},{\"text\":\"桃源\",\"value\":\"430725\",\"children\":\"\"},{\"text\":\"石门\",\"value\":\"430726\",\"children\":\"\"},{\"text\":\"津市\",\"value\":\"430781\",\"children\":\"\"}]},{\"text\":\"张家界\",\"value\":\"430800\",\"children\":[{\"text\":\"永定\",\"value\":\"430802\",\"children\":\"\"},{\"text\":\"武陵源\",\"value\":\"430811\",\"children\":\"\"},{\"text\":\"慈利\",\"value\":\"430821\",\"children\":\"\"},{\"text\":\"桑植\",\"value\":\"430822\",\"children\":\"\"}]},{\"text\":\"益阳\",\"value\":\"430900\",\"children\":[{\"text\":\"资阳\",\"value\":\"430902\",\"children\":\"\"},{\"text\":\"赫山\",\"value\":\"430903\",\"children\":\"\"},{\"text\":\"南县\",\"value\":\"430921\",\"children\":\"\"},{\"text\":\"桃江\",\"value\":\"430922\",\"children\":\"\"},{\"text\":\"安化\",\"value\":\"430923\",\"children\":\"\"},{\"text\":\"沅江\",\"value\":\"430981\",\"children\":\"\"}]},{\"text\":\"郴州\",\"value\":\"431000\",\"children\":[{\"text\":\"北湖\",\"value\":\"431002\",\"children\":\"\"},{\"text\":\"苏仙\",\"value\":\"431003\",\"children\":\"\"},{\"text\":\"桂阳\",\"value\":\"431021\",\"children\":\"\"},{\"text\":\"宜章\",\"value\":\"431022\",\"children\":\"\"},{\"text\":\"永兴\",\"value\":\"431023\",\"children\":\"\"},{\"text\":\"嘉禾\",\"value\":\"431024\",\"children\":\"\"},{\"text\":\"临武\",\"value\":\"431025\",\"children\":\"\"},{\"text\":\"汝城\",\"value\":\"431026\",\"children\":\"\"},{\"text\":\"桂东\",\"value\":\"431027\",\"children\":\"\"},{\"text\":\"安仁\",\"value\":\"431028\",\"children\":\"\"},{\"text\":\"资兴\",\"value\":\"431081\",\"children\":\"\"}]},{\"text\":\"永州\",\"value\":\"431100\",\"children\":[{\"text\":\"零陵\",\"value\":\"431102\",\"children\":\"\"},{\"text\":\"冷水滩\",\"value\":\"431103\",\"children\":\"\"},{\"text\":\"祁阳\",\"value\":\"431121\",\"children\":\"\"},{\"text\":\"东安\",\"value\":\"431122\",\"children\":\"\"},{\"text\":\"双牌\",\"value\":\"431123\",\"children\":\"\"},{\"text\":\"道县\",\"value\":\"431124\",\"children\":\"\"},{\"text\":\"江永\",\"value\":\"431125\",\"children\":\"\"},{\"text\":\"宁远\",\"value\":\"431126\",\"children\":\"\"},{\"text\":\"蓝山\",\"value\":\"431127\",\"children\":\"\"},{\"text\":\"新田\",\"value\":\"431128\",\"children\":\"\"},{\"text\":\"江华\",\"value\":\"431129\",\"children\":\"\"}]},{\"text\":\"怀化\",\"value\":\"431200\",\"children\":[{\"text\":\"鹤城\",\"value\":\"431202\",\"children\":\"\"},{\"text\":\"中方\",\"value\":\"431221\",\"children\":\"\"},{\"text\":\"沅陵\",\"value\":\"431222\",\"children\":\"\"},{\"text\":\"辰溪\",\"value\":\"431223\",\"children\":\"\"},{\"text\":\"溆浦\",\"value\":\"431224\",\"children\":\"\"},{\"text\":\"会同\",\"value\":\"431225\",\"children\":\"\"},{\"text\":\"麻阳\",\"value\":\"431226\",\"children\":\"\"},{\"text\":\"新晃\",\"value\":\"431227\",\"children\":\"\"},{\"text\":\"芷江\",\"value\":\"431228\",\"children\":\"\"},{\"text\":\"靖州\",\"value\":\"431229\",\"children\":\"\"},{\"text\":\"通道\",\"value\":\"431230\",\"children\":\"\"},{\"text\":\"洪江\",\"value\":\"431281\",\"children\":\"\"}]},{\"text\":\"娄底\",\"value\":\"431300\",\"children\":[{\"text\":\"娄星\",\"value\":\"431302\",\"children\":\"\"},{\"text\":\"双峰\",\"value\":\"431321\",\"children\":\"\"},{\"text\":\"新化\",\"value\":\"431322\",\"children\":\"\"},{\"text\":\"冷水江\",\"value\":\"431381\",\"children\":\"\"},{\"text\":\"涟源\",\"value\":\"431382\",\"children\":\"\"}]},{\"text\":\"湘西\",\"value\":\"433100\",\"children\":[{\"text\":\"吉首\",\"value\":\"433101\",\"children\":\"\"},{\"text\":\"泸溪\",\"value\":\"433122\",\"children\":\"\"},{\"text\":\"凤凰\",\"value\":\"433123\",\"children\":\"\"},{\"text\":\"花垣\",\"value\":\"433124\",\"children\":\"\"},{\"text\":\"保靖\",\"value\":\"433125\",\"children\":\"\"},{\"text\":\"古丈\",\"value\":\"433126\",\"children\":\"\"},{\"text\":\"永顺\",\"value\":\"433127\",\"children\":\"\"},{\"text\":\"龙山\",\"value\":\"433130\",\"children\":\"\"}]}]},{\"text\":\"广东\",\"value\":\"440000\",\"children\":[{\"text\":\"广州\",\"value\":\"440100\",\"children\":[{\"text\":\"荔湾\",\"value\":\"440103\",\"children\":\"\"},{\"text\":\"越秀\",\"value\":\"440104\",\"children\":\"\"},{\"text\":\"海珠\",\"value\":\"440105\",\"children\":\"\"},{\"text\":\"天河\",\"value\":\"440106\",\"children\":\"\"},{\"text\":\"白云\",\"value\":\"440111\",\"children\":\"\"},{\"text\":\"黄埔\",\"value\":\"440112\",\"children\":\"\"},{\"text\":\"番禺\",\"value\":\"440113\",\"children\":\"\"},{\"text\":\"花都\",\"value\":\"440114\",\"children\":\"\"},{\"text\":\"南沙\",\"value\":\"440115\",\"children\":\"\"},{\"text\":\"萝岗\",\"value\":\"440116\",\"children\":\"\"},{\"text\":\"增城\",\"value\":\"440183\",\"children\":\"\"},{\"text\":\"从化\",\"value\":\"440184\",\"children\":\"\"}]},{\"text\":\"韶关\",\"value\":\"440200\",\"children\":[{\"text\":\"武江\",\"value\":\"440203\",\"children\":\"\"},{\"text\":\"浈江\",\"value\":\"440204\",\"children\":\"\"},{\"text\":\"曲江\",\"value\":\"440205\",\"children\":\"\"},{\"text\":\"始兴\",\"value\":\"440222\",\"children\":\"\"},{\"text\":\"仁化\",\"value\":\"440224\",\"children\":\"\"},{\"text\":\"翁源\",\"value\":\"440229\",\"children\":\"\"},{\"text\":\"乳源\",\"value\":\"440232\",\"children\":\"\"},{\"text\":\"新丰\",\"value\":\"440233\",\"children\":\"\"},{\"text\":\"乐昌\",\"value\":\"440281\",\"children\":\"\"},{\"text\":\"南雄\",\"value\":\"440282\",\"children\":\"\"}]},{\"text\":\"深圳\",\"value\":\"440300\",\"children\":[{\"text\":\"罗湖\",\"value\":\"440303\",\"children\":\"\"},{\"text\":\"福田\",\"value\":\"440304\",\"children\":\"\"},{\"text\":\"南山\",\"value\":\"440305\",\"children\":\"\"},{\"text\":\"宝安\",\"value\":\"440306\",\"children\":\"\"},{\"text\":\"龙岗\",\"value\":\"440307\",\"children\":\"\"},{\"text\":\"盐田\",\"value\":\"440308\",\"children\":\"\"}]},{\"text\":\"珠海\",\"value\":\"440400\",\"children\":[{\"text\":\"香洲\",\"value\":\"440402\",\"children\":\"\"},{\"text\":\"斗门\",\"value\":\"440403\",\"children\":\"\"},{\"text\":\"金湾\",\"value\":\"440404\",\"children\":\"\"}]},{\"text\":\"汕头\",\"value\":\"440500\",\"children\":[{\"text\":\"龙湖\",\"value\":\"440507\",\"children\":\"\"},{\"text\":\"金平\",\"value\":\"440511\",\"children\":\"\"},{\"text\":\"濠江\",\"value\":\"440512\",\"children\":\"\"},{\"text\":\"潮阳\",\"value\":\"440513\",\"children\":\"\"},{\"text\":\"潮南\",\"value\":\"440514\",\"children\":\"\"},{\"text\":\"澄海\",\"value\":\"440515\",\"children\":\"\"},{\"text\":\"南澳\",\"value\":\"440523\",\"children\":\"\"}]},{\"text\":\"佛山\",\"value\":\"440600\",\"children\":[{\"text\":\"禅城\",\"value\":\"440604\",\"children\":\"\"},{\"text\":\"南海\",\"value\":\"440605\",\"children\":\"\"},{\"text\":\"顺德\",\"value\":\"440606\",\"children\":\"\"},{\"text\":\"三水\",\"value\":\"440607\",\"children\":\"\"},{\"text\":\"高明\",\"value\":\"440608\",\"children\":\"\"}]},{\"text\":\"江门\",\"value\":\"440700\",\"children\":[{\"text\":\"蓬江\",\"value\":\"440703\",\"children\":\"\"},{\"text\":\"江海\",\"value\":\"440704\",\"children\":\"\"},{\"text\":\"新会\",\"value\":\"440705\",\"children\":\"\"},{\"text\":\"台山\",\"value\":\"440781\",\"children\":\"\"},{\"text\":\"开平\",\"value\":\"440783\",\"children\":\"\"},{\"text\":\"鹤山\",\"value\":\"440784\",\"children\":\"\"},{\"text\":\"恩平\",\"value\":\"440785\",\"children\":\"\"}]},{\"text\":\"湛江\",\"value\":\"440800\",\"children\":[{\"text\":\"赤坎\",\"value\":\"440802\",\"children\":\"\"},{\"text\":\"霞山\",\"value\":\"440803\",\"children\":\"\"},{\"text\":\"坡头\",\"value\":\"440804\",\"children\":\"\"},{\"text\":\"麻章\",\"value\":\"440811\",\"children\":\"\"},{\"text\":\"遂溪\",\"value\":\"440823\",\"children\":\"\"},{\"text\":\"徐闻\",\"value\":\"440825\",\"children\":\"\"},{\"text\":\"廉江\",\"value\":\"440881\",\"children\":\"\"},{\"text\":\"雷州\",\"value\":\"440882\",\"children\":\"\"},{\"text\":\"吴川\",\"value\":\"440883\",\"children\":\"\"}]},{\"text\":\"茂名\",\"value\":\"440900\",\"children\":[{\"text\":\"茂南\",\"value\":\"440902\",\"children\":\"\"},{\"text\":\"电白\",\"value\":\"440903\",\"children\":\"\"},{\"text\":\"高州\",\"value\":\"440981\",\"children\":\"\"},{\"text\":\"化州\",\"value\":\"440982\",\"children\":\"\"},{\"text\":\"信宜\",\"value\":\"440983\",\"children\":\"\"}]},{\"text\":\"肇庆\",\"value\":\"441200\",\"children\":[{\"text\":\"端州\",\"value\":\"441202\",\"children\":\"\"},{\"text\":\"鼎湖\",\"value\":\"441203\",\"children\":\"\"},{\"text\":\"广宁\",\"value\":\"441223\",\"children\":\"\"},{\"text\":\"怀集\",\"value\":\"441224\",\"children\":\"\"},{\"text\":\"封开\",\"value\":\"441225\",\"children\":\"\"},{\"text\":\"德庆\",\"value\":\"441226\",\"children\":\"\"},{\"text\":\"高要\",\"value\":\"441283\",\"children\":\"\"},{\"text\":\"四会\",\"value\":\"441284\",\"children\":\"\"}]},{\"text\":\"惠州\",\"value\":\"441300\",\"children\":[{\"text\":\"惠城\",\"value\":\"441302\",\"children\":\"\"},{\"text\":\"惠阳\",\"value\":\"441303\",\"children\":\"\"},{\"text\":\"博罗\",\"value\":\"441322\",\"children\":\"\"},{\"text\":\"惠东\",\"value\":\"441323\",\"children\":\"\"},{\"text\":\"龙门\",\"value\":\"441324\",\"children\":\"\"}]},{\"text\":\"梅州\",\"value\":\"441400\",\"children\":[{\"text\":\"梅江\",\"value\":\"441402\",\"children\":\"\"},{\"text\":\"梅县\",\"value\":\"441421\",\"children\":\"\"},{\"text\":\"大埔\",\"value\":\"441422\",\"children\":\"\"},{\"text\":\"丰顺\",\"value\":\"441423\",\"children\":\"\"},{\"text\":\"五华\",\"value\":\"441424\",\"children\":\"\"},{\"text\":\"平远\",\"value\":\"441426\",\"children\":\"\"},{\"text\":\"蕉岭\",\"value\":\"441427\",\"children\":\"\"},{\"text\":\"兴宁\",\"value\":\"441481\",\"children\":\"\"}]},{\"text\":\"汕尾\",\"value\":\"441500\",\"children\":[{\"text\":\"城区\",\"value\":\"441502\",\"children\":\"\"},{\"text\":\"海丰\",\"value\":\"441521\",\"children\":\"\"},{\"text\":\"陆河\",\"value\":\"441523\",\"children\":\"\"},{\"text\":\"陆丰\",\"value\":\"441581\",\"children\":\"\"}]},{\"text\":\"河源\",\"value\":\"441600\",\"children\":[{\"text\":\"源城\",\"value\":\"441602\",\"children\":\"\"},{\"text\":\"紫金\",\"value\":\"441621\",\"children\":\"\"},{\"text\":\"龙川\",\"value\":\"441622\",\"children\":\"\"},{\"text\":\"连平\",\"value\":\"441623\",\"children\":\"\"},{\"text\":\"和平\",\"value\":\"441624\",\"children\":\"\"},{\"text\":\"东源\",\"value\":\"441625\",\"children\":\"\"}]},{\"text\":\"阳江\",\"value\":\"441700\",\"children\":[{\"text\":\"江城\",\"value\":\"441702\",\"children\":\"\"},{\"text\":\"阳西\",\"value\":\"441721\",\"children\":\"\"},{\"text\":\"阳东\",\"value\":\"441723\",\"children\":\"\"},{\"text\":\"阳春\",\"value\":\"441781\",\"children\":\"\"}]},{\"text\":\"清远\",\"value\":\"441800\",\"children\":[{\"text\":\"清城\",\"value\":\"441802\",\"children\":\"\"},{\"text\":\"佛冈\",\"value\":\"441821\",\"children\":\"\"},{\"text\":\"阳山\",\"value\":\"441823\",\"children\":\"\"},{\"text\":\"连山\",\"value\":\"441825\",\"children\":\"\"},{\"text\":\"连南\",\"value\":\"441826\",\"children\":\"\"},{\"text\":\"清新\",\"value\":\"441827\",\"children\":\"\"},{\"text\":\"英德\",\"value\":\"441881\",\"children\":\"\"},{\"text\":\"连州\",\"value\":\"441882\",\"children\":\"\"}]},{\"text\":\"东莞\",\"value\":\"441900\",\"children\":[{\"text\":\"东莞\",\"value\":\"441900\",\"children\":\"\"}]},{\"text\":\"中山\",\"value\":\"442000\",\"children\":[{\"text\":\"市辖区\",\"value\":\"442000\",\"children\":\"\"}]},{\"text\":\"潮州\",\"value\":\"445100\",\"children\":[{\"text\":\"湘桥\",\"value\":\"445102\",\"children\":\"\"},{\"text\":\"潮安\",\"value\":\"445121\",\"children\":\"\"},{\"text\":\"饶平\",\"value\":\"445122\",\"children\":\"\"}]},{\"text\":\"揭阳\",\"value\":\"445200\",\"children\":[{\"text\":\"榕城\",\"value\":\"445202\",\"children\":\"\"},{\"text\":\"揭东\",\"value\":\"445221\",\"children\":\"\"},{\"text\":\"揭西\",\"value\":\"445222\",\"children\":\"\"},{\"text\":\"惠来\",\"value\":\"445224\",\"children\":\"\"},{\"text\":\"普宁\",\"value\":\"445281\",\"children\":\"\"}]},{\"text\":\"云浮\",\"value\":\"445300\",\"children\":[{\"text\":\"云城\",\"value\":\"445302\",\"children\":\"\"},{\"text\":\"新兴\",\"value\":\"445321\",\"children\":\"\"},{\"text\":\"郁南\",\"value\":\"445322\",\"children\":\"\"},{\"text\":\"云安\",\"value\":\"445323\",\"children\":\"\"},{\"text\":\"罗定\",\"value\":\"445381\",\"children\":\"\"}]}]},{\"text\":\"广西\",\"value\":\"450000\",\"children\":[{\"text\":\"南宁\",\"value\":\"450100\",\"children\":[{\"text\":\"兴宁\",\"value\":\"450102\",\"children\":\"\"},{\"text\":\"青秀\",\"value\":\"450103\",\"children\":\"\"},{\"text\":\"江南\",\"value\":\"450105\",\"children\":\"\"},{\"text\":\"西乡塘\",\"value\":\"450107\",\"children\":\"\"},{\"text\":\"良庆\",\"value\":\"450108\",\"children\":\"\"},{\"text\":\"邕宁\",\"value\":\"450109\",\"children\":\"\"},{\"text\":\"武鸣\",\"value\":\"450122\",\"children\":\"\"},{\"text\":\"隆安\",\"value\":\"450123\",\"children\":\"\"},{\"text\":\"马山\",\"value\":\"450124\",\"children\":\"\"},{\"text\":\"上林\",\"value\":\"450125\",\"children\":\"\"},{\"text\":\"宾阳\",\"value\":\"450126\",\"children\":\"\"},{\"text\":\"横县\",\"value\":\"450127\",\"children\":\"\"}]},{\"text\":\"柳州\",\"value\":\"450200\",\"children\":[{\"text\":\"城中\",\"value\":\"450202\",\"children\":\"\"},{\"text\":\"鱼峰\",\"value\":\"450203\",\"children\":\"\"},{\"text\":\"柳南\",\"value\":\"450204\",\"children\":\"\"},{\"text\":\"柳北\",\"value\":\"450205\",\"children\":\"\"},{\"text\":\"柳江\",\"value\":\"450221\",\"children\":\"\"},{\"text\":\"柳城\",\"value\":\"450222\",\"children\":\"\"},{\"text\":\"鹿寨\",\"value\":\"450223\",\"children\":\"\"},{\"text\":\"融安\",\"value\":\"450224\",\"children\":\"\"},{\"text\":\"融水\",\"value\":\"450225\",\"children\":\"\"},{\"text\":\"三江\",\"value\":\"450226\",\"children\":\"\"}]},{\"text\":\"桂林\",\"value\":\"450300\",\"children\":[{\"text\":\"秀峰\",\"value\":\"450302\",\"children\":\"\"},{\"text\":\"叠彩\",\"value\":\"450303\",\"children\":\"\"},{\"text\":\"象山\",\"value\":\"450304\",\"children\":\"\"},{\"text\":\"七星\",\"value\":\"450305\",\"children\":\"\"},{\"text\":\"雁山\",\"value\":\"450311\",\"children\":\"\"},{\"text\":\"阳朔\",\"value\":\"450321\",\"children\":\"\"},{\"text\":\"临桂\",\"value\":\"450322\",\"children\":\"\"},{\"text\":\"灵川\",\"value\":\"450323\",\"children\":\"\"},{\"text\":\"全州\",\"value\":\"450324\",\"children\":\"\"},{\"text\":\"兴安\",\"value\":\"450325\",\"children\":\"\"},{\"text\":\"永福\",\"value\":\"450326\",\"children\":\"\"},{\"text\":\"灌阳\",\"value\":\"450327\",\"children\":\"\"},{\"text\":\"龙胜\",\"value\":\"450328\",\"children\":\"\"},{\"text\":\"资源\",\"value\":\"450329\",\"children\":\"\"},{\"text\":\"平乐\",\"value\":\"450330\",\"children\":\"\"},{\"text\":\"荔浦\",\"value\":\"450331\",\"children\":\"\"},{\"text\":\"恭城\",\"value\":\"450332\",\"children\":\"\"}]},{\"text\":\"梧州\",\"value\":\"450400\",\"children\":[{\"text\":\"万秀\",\"value\":\"450403\",\"children\":\"\"},{\"text\":\"长洲\",\"value\":\"450405\",\"children\":\"\"},{\"text\":\"龙圩\",\"value\":\"450406\",\"children\":\"\"},{\"text\":\"苍梧\",\"value\":\"450421\",\"children\":\"\"},{\"text\":\"藤县\",\"value\":\"450422\",\"children\":\"\"},{\"text\":\"蒙山\",\"value\":\"450423\",\"children\":\"\"},{\"text\":\"岑溪\",\"value\":\"450481\",\"children\":\"\"}]},{\"text\":\"北海\",\"value\":\"450500\",\"children\":[{\"text\":\"海城\",\"value\":\"450502\",\"children\":\"\"},{\"text\":\"银海\",\"value\":\"450503\",\"children\":\"\"},{\"text\":\"铁山港\",\"value\":\"450512\",\"children\":\"\"},{\"text\":\"合浦\",\"value\":\"450521\",\"children\":\"\"}]},{\"text\":\"防城港\",\"value\":\"450600\",\"children\":[{\"text\":\"港口\",\"value\":\"450602\",\"children\":\"\"},{\"text\":\"防城\",\"value\":\"450603\",\"children\":\"\"},{\"text\":\"上思\",\"value\":\"450621\",\"children\":\"\"},{\"text\":\"东兴\",\"value\":\"450681\",\"children\":\"\"}]},{\"text\":\"钦州\",\"value\":\"450700\",\"children\":[{\"text\":\"钦南\",\"value\":\"450702\",\"children\":\"\"},{\"text\":\"钦北\",\"value\":\"450703\",\"children\":\"\"},{\"text\":\"灵山\",\"value\":\"450721\",\"children\":\"\"},{\"text\":\"浦北\",\"value\":\"450722\",\"children\":\"\"}]},{\"text\":\"贵港\",\"value\":\"450800\",\"children\":[{\"text\":\"港北\",\"value\":\"450802\",\"children\":\"\"},{\"text\":\"港南\",\"value\":\"450803\",\"children\":\"\"},{\"text\":\"覃塘\",\"value\":\"450804\",\"children\":\"\"},{\"text\":\"平南\",\"value\":\"450821\",\"children\":\"\"},{\"text\":\"桂平\",\"value\":\"450881\",\"children\":\"\"}]},{\"text\":\"玉林\",\"value\":\"450900\",\"children\":[{\"text\":\"玉州\",\"value\":\"450902\",\"children\":\"\"},{\"text\":\"福绵\",\"value\":\"450903\",\"children\":\"\"},{\"text\":\"容县\",\"value\":\"450921\",\"children\":\"\"},{\"text\":\"陆川\",\"value\":\"450922\",\"children\":\"\"},{\"text\":\"博白\",\"value\":\"450923\",\"children\":\"\"},{\"text\":\"兴业\",\"value\":\"450924\",\"children\":\"\"},{\"text\":\"北流\",\"value\":\"450981\",\"children\":\"\"}]},{\"text\":\"百色\",\"value\":\"451000\",\"children\":[{\"text\":\"右江\",\"value\":\"451002\",\"children\":\"\"},{\"text\":\"田阳\",\"value\":\"451021\",\"children\":\"\"},{\"text\":\"田东\",\"value\":\"451022\",\"children\":\"\"},{\"text\":\"平果\",\"value\":\"451023\",\"children\":\"\"},{\"text\":\"德保\",\"value\":\"451024\",\"children\":\"\"},{\"text\":\"靖西\",\"value\":\"451025\",\"children\":\"\"},{\"text\":\"那坡\",\"value\":\"451026\",\"children\":\"\"},{\"text\":\"凌云\",\"value\":\"451027\",\"children\":\"\"},{\"text\":\"乐业\",\"value\":\"451028\",\"children\":\"\"},{\"text\":\"田林\",\"value\":\"451029\",\"children\":\"\"},{\"text\":\"西林\",\"value\":\"451030\",\"children\":\"\"},{\"text\":\"隆林\",\"value\":\"451031\",\"children\":\"\"}]},{\"text\":\"贺州\",\"value\":\"451100\",\"children\":[{\"text\":\"八步\",\"value\":\"451102\",\"children\":\"\"},{\"text\":\"平桂\",\"value\":\"451119\",\"children\":\"\"},{\"text\":\"昭平\",\"value\":\"451121\",\"children\":\"\"},{\"text\":\"钟山\",\"value\":\"451122\",\"children\":\"\"},{\"text\":\"富川\",\"value\":\"451123\",\"children\":\"\"}]},{\"text\":\"河池\",\"value\":\"451200\",\"children\":[{\"text\":\"金城江\",\"value\":\"451202\",\"children\":\"\"},{\"text\":\"南丹\",\"value\":\"451221\",\"children\":\"\"},{\"text\":\"天峨\",\"value\":\"451222\",\"children\":\"\"},{\"text\":\"凤山\",\"value\":\"451223\",\"children\":\"\"},{\"text\":\"东兰\",\"value\":\"451224\",\"children\":\"\"},{\"text\":\"罗城\",\"value\":\"451225\",\"children\":\"\"},{\"text\":\"环江\",\"value\":\"451226\",\"children\":\"\"},{\"text\":\"巴马\",\"value\":\"451227\",\"children\":\"\"},{\"text\":\"都安\",\"value\":\"451228\",\"children\":\"\"},{\"text\":\"大化\",\"value\":\"451229\",\"children\":\"\"},{\"text\":\"宜州\",\"value\":\"451281\",\"children\":\"\"}]},{\"text\":\"来宾\",\"value\":\"451300\",\"children\":[{\"text\":\"兴宾\",\"value\":\"451302\",\"children\":\"\"},{\"text\":\"忻城\",\"value\":\"451321\",\"children\":\"\"},{\"text\":\"象州\",\"value\":\"451322\",\"children\":\"\"},{\"text\":\"武宣\",\"value\":\"451323\",\"children\":\"\"},{\"text\":\"金秀\",\"value\":\"451324\",\"children\":\"\"},{\"text\":\"合山\",\"value\":\"451381\",\"children\":\"\"}]},{\"text\":\"崇左\",\"value\":\"451400\",\"children\":[{\"text\":\"江州\",\"value\":\"451402\",\"children\":\"\"},{\"text\":\"扶绥\",\"value\":\"451421\",\"children\":\"\"},{\"text\":\"宁明\",\"value\":\"451422\",\"children\":\"\"},{\"text\":\"龙州\",\"value\":\"451423\",\"children\":\"\"},{\"text\":\"大新\",\"value\":\"451424\",\"children\":\"\"},{\"text\":\"天等\",\"value\":\"451425\",\"children\":\"\"},{\"text\":\"凭祥\",\"value\":\"451481\",\"children\":\"\"}]}]},{\"text\":\"海南\",\"value\":\"460000\",\"children\":[{\"text\":\"海口\",\"value\":\"460100\",\"children\":[{\"text\":\"秀英\",\"value\":\"460105\",\"children\":\"\"},{\"text\":\"龙华\",\"value\":\"460106\",\"children\":\"\"},{\"text\":\"琼山\",\"value\":\"460107\",\"children\":\"\"},{\"text\":\"美兰\",\"value\":\"460108\",\"children\":\"\"}]},{\"text\":\"三亚\",\"value\":\"460200\",\"children\":[{\"text\":\"三亚\",\"value\":\"460200\",\"children\":\"\"}]},{\"text\":\"三沙\",\"value\":\"460300\",\"children\":[{\"text\":\"西沙\",\"value\":\"460321\",\"children\":\"\"},{\"text\":\"南沙\",\"value\":\"460322\",\"children\":\"\"},{\"text\":\"中沙\",\"value\":\"460323\",\"children\":\"\"}]},{\"text\":\"五指山\",\"value\":\"469001\",\"children\":[{\"text\":\"五指山\",\"value\":\"469001\",\"children\":\"\"}]},{\"text\":\"琼海\",\"value\":\"469002\",\"children\":[{\"text\":\"琼海\",\"value\":\"469002\",\"children\":\"\"}]},{\"text\":\"儋州\",\"value\":\"469003\",\"children\":[{\"text\":\"儋州\",\"value\":\"469003\",\"children\":\"\"}]},{\"text\":\"文昌\",\"value\":\"469005\",\"children\":[{\"text\":\"文昌\",\"value\":\"469005\",\"children\":\"\"}]},{\"text\":\"万宁\",\"value\":\"469006\",\"children\":[{\"text\":\"万宁\",\"value\":\"469006\",\"children\":\"\"}]},{\"text\":\"东方\",\"value\":\"469007\",\"children\":[{\"text\":\"东方\",\"value\":\"469007\",\"children\":\"\"}]},{\"text\":\"定安\",\"value\":\"469025\",\"children\":[{\"text\":\"定安\",\"value\":\"469025\",\"children\":\"\"}]},{\"text\":\"屯昌\",\"value\":\"469026\",\"children\":[{\"text\":\"屯昌\",\"value\":\"469026\",\"children\":\"\"}]},{\"text\":\"澄迈\",\"value\":\"469027\",\"children\":[{\"text\":\"澄迈\",\"value\":\"469027\",\"children\":\"\"}]},{\"text\":\"临高\",\"value\":\"469028\",\"children\":[{\"text\":\"临高\",\"value\":\"469028\",\"children\":\"\"}]},{\"text\":\"白沙\",\"value\":\"469030\",\"children\":[{\"text\":\"白沙\",\"value\":\"469030\",\"children\":\"\"}]},{\"text\":\"昌江\",\"value\":\"469031\",\"children\":[{\"text\":\"昌江\",\"value\":\"469031\",\"children\":\"\"}]},{\"text\":\"乐东\",\"value\":\"469033\",\"children\":[{\"text\":\"乐东\",\"value\":\"469033\",\"children\":\"\"}]},{\"text\":\"陵水\",\"value\":\"469034\",\"children\":[{\"text\":\"陵水\",\"value\":\"469034\",\"children\":\"\"}]},{\"text\":\"保亭\",\"value\":\"469035\",\"children\":[{\"text\":\"保亭\",\"value\":\"469035\",\"children\":\"\"}]},{\"text\":\"琼中\",\"value\":\"469036\",\"children\":[{\"text\":\"琼中\",\"value\":\"469036\",\"children\":\"\"}]}]},{\"text\":\"重庆\",\"value\":\"500000\",\"children\":[{\"text\":\"重庆\",\"value\":\"500100\",\"children\":[{\"text\":\"万州\",\"value\":\"500101\",\"children\":\"\"},{\"text\":\"涪陵\",\"value\":\"500102\",\"children\":\"\"},{\"text\":\"渝中\",\"value\":\"500103\",\"children\":\"\"},{\"text\":\"大渡口\",\"value\":\"500104\",\"children\":\"\"},{\"text\":\"江北\",\"value\":\"500105\",\"children\":\"\"},{\"text\":\"沙坪坝\",\"value\":\"500106\",\"children\":\"\"},{\"text\":\"九龙坡\",\"value\":\"500107\",\"children\":\"\"},{\"text\":\"南岸\",\"value\":\"500108\",\"children\":\"\"},{\"text\":\"北碚\",\"value\":\"500109\",\"children\":\"\"},{\"text\":\"万盛\",\"value\":\"500110\",\"children\":\"\"},{\"text\":\"双桥\",\"value\":\"500111\",\"children\":\"\"},{\"text\":\"渝北\",\"value\":\"500112\",\"children\":\"\"},{\"text\":\"巴南\",\"value\":\"500113\",\"children\":\"\"},{\"text\":\"黔江\",\"value\":\"500114\",\"children\":\"\"},{\"text\":\"长寿\",\"value\":\"500115\",\"children\":\"\"},{\"text\":\"綦江\",\"value\":\"500222\",\"children\":\"\"},{\"text\":\"潼南\",\"value\":\"500223\",\"children\":\"\"},{\"text\":\"铜梁\",\"value\":\"500224\",\"children\":\"\"},{\"text\":\"大足\",\"value\":\"500225\",\"children\":\"\"},{\"text\":\"荣昌\",\"value\":\"500226\",\"children\":\"\"},{\"text\":\"璧山\",\"value\":\"500227\",\"children\":\"\"},{\"text\":\"梁平\",\"value\":\"500228\",\"children\":\"\"},{\"text\":\"城口\",\"value\":\"500229\",\"children\":\"\"},{\"text\":\"丰都\",\"value\":\"500230\",\"children\":\"\"},{\"text\":\"垫江\",\"value\":\"500231\",\"children\":\"\"},{\"text\":\"武隆\",\"value\":\"500232\",\"children\":\"\"},{\"text\":\"忠县\",\"value\":\"500233\",\"children\":\"\"},{\"text\":\"开县\",\"value\":\"500234\",\"children\":\"\"},{\"text\":\"云阳\",\"value\":\"500235\",\"children\":\"\"},{\"text\":\"奉节\",\"value\":\"500236\",\"children\":\"\"},{\"text\":\"巫山\",\"value\":\"500237\",\"children\":\"\"},{\"text\":\"巫溪\",\"value\":\"500238\",\"children\":\"\"},{\"text\":\"石柱\",\"value\":\"500240\",\"children\":\"\"},{\"text\":\"秀山\",\"value\":\"500241\",\"children\":\"\"},{\"text\":\"酉阳\",\"value\":\"500242\",\"children\":\"\"},{\"text\":\"彭水\",\"value\":\"500243\",\"children\":\"\"},{\"text\":\"江津\",\"value\":\"500381\",\"children\":\"\"},{\"text\":\"合川\",\"value\":\"500382\",\"children\":\"\"},{\"text\":\"永川\",\"value\":\"500383\",\"children\":\"\"},{\"text\":\"南川\",\"value\":\"500384\",\"children\":\"\"}]}]},{\"text\":\"四川\",\"value\":\"510000\",\"children\":[{\"text\":\"成都\",\"value\":\"510100\",\"children\":[{\"text\":\"锦江\",\"value\":\"510104\",\"children\":\"\"},{\"text\":\"青羊\",\"value\":\"510105\",\"children\":\"\"},{\"text\":\"金牛\",\"value\":\"510106\",\"children\":\"\"},{\"text\":\"武侯\",\"value\":\"510107\",\"children\":\"\"},{\"text\":\"成华\",\"value\":\"510108\",\"children\":\"\"},{\"text\":\"龙泉驿\",\"value\":\"510112\",\"children\":\"\"},{\"text\":\"青白江\",\"value\":\"510113\",\"children\":\"\"},{\"text\":\"新都\",\"value\":\"510114\",\"children\":\"\"},{\"text\":\"温江\",\"value\":\"510115\",\"children\":\"\"},{\"text\":\"金堂\",\"value\":\"510121\",\"children\":\"\"},{\"text\":\"双流\",\"value\":\"510122\",\"children\":\"\"},{\"text\":\"郫县\",\"value\":\"510124\",\"children\":\"\"},{\"text\":\"大邑\",\"value\":\"510129\",\"children\":\"\"},{\"text\":\"蒲江\",\"value\":\"510131\",\"children\":\"\"},{\"text\":\"新津\",\"value\":\"510132\",\"children\":\"\"},{\"text\":\"都江堰\",\"value\":\"510181\",\"children\":\"\"},{\"text\":\"彭州\",\"value\":\"510182\",\"children\":\"\"},{\"text\":\"邛崃\",\"value\":\"510183\",\"children\":\"\"},{\"text\":\"崇州\",\"value\":\"510184\",\"children\":\"\"}]},{\"text\":\"自贡\",\"value\":\"510300\",\"children\":[{\"text\":\"自流井\",\"value\":\"510302\",\"children\":\"\"},{\"text\":\"贡井\",\"value\":\"510303\",\"children\":\"\"},{\"text\":\"大安\",\"value\":\"510304\",\"children\":\"\"},{\"text\":\"沿滩\",\"value\":\"510311\",\"children\":\"\"},{\"text\":\"荣县\",\"value\":\"510321\",\"children\":\"\"},{\"text\":\"富顺\",\"value\":\"510322\",\"children\":\"\"}]},{\"text\":\"攀枝花\",\"value\":\"510400\",\"children\":[{\"text\":\"东区\",\"value\":\"510402\",\"children\":\"\"},{\"text\":\"西区\",\"value\":\"510403\",\"children\":\"\"},{\"text\":\"仁和\",\"value\":\"510411\",\"children\":\"\"},{\"text\":\"米易\",\"value\":\"510421\",\"children\":\"\"},{\"text\":\"盐边\",\"value\":\"510422\",\"children\":\"\"}]},{\"text\":\"泸州\",\"value\":\"510500\",\"children\":[{\"text\":\"江阳\",\"value\":\"510502\",\"children\":\"\"},{\"text\":\"纳溪\",\"value\":\"510503\",\"children\":\"\"},{\"text\":\"龙马潭\",\"value\":\"510504\",\"children\":\"\"},{\"text\":\"泸县\",\"value\":\"510521\",\"children\":\"\"},{\"text\":\"合江\",\"value\":\"510522\",\"children\":\"\"},{\"text\":\"叙永\",\"value\":\"510524\",\"children\":\"\"},{\"text\":\"古蔺\",\"value\":\"510525\",\"children\":\"\"}]},{\"text\":\"德阳\",\"value\":\"510600\",\"children\":[{\"text\":\"旌阳\",\"value\":\"510603\",\"children\":\"\"},{\"text\":\"中江\",\"value\":\"510623\",\"children\":\"\"},{\"text\":\"罗江\",\"value\":\"510626\",\"children\":\"\"},{\"text\":\"广汉\",\"value\":\"510681\",\"children\":\"\"},{\"text\":\"什邡\",\"value\":\"510682\",\"children\":\"\"},{\"text\":\"绵竹\",\"value\":\"510683\",\"children\":\"\"}]},{\"text\":\"绵阳\",\"value\":\"510700\",\"children\":[{\"text\":\"涪城\",\"value\":\"510703\",\"children\":\"\"},{\"text\":\"游仙\",\"value\":\"510704\",\"children\":\"\"},{\"text\":\"三台\",\"value\":\"510722\",\"children\":\"\"},{\"text\":\"盐亭\",\"value\":\"510723\",\"children\":\"\"},{\"text\":\"安县\",\"value\":\"510724\",\"children\":\"\"},{\"text\":\"梓潼\",\"value\":\"510725\",\"children\":\"\"},{\"text\":\"北川\",\"value\":\"510726\",\"children\":\"\"},{\"text\":\"平武\",\"value\":\"510727\",\"children\":\"\"},{\"text\":\"江油\",\"value\":\"510781\",\"children\":\"\"}]},{\"text\":\"广元\",\"value\":\"510800\",\"children\":[{\"text\":\"利州\",\"value\":\"510802\",\"children\":\"\"},{\"text\":\"昭化\",\"value\":\"510811\",\"children\":\"\"},{\"text\":\"朝天\",\"value\":\"510812\",\"children\":\"\"},{\"text\":\"旺苍\",\"value\":\"510821\",\"children\":\"\"},{\"text\":\"青川\",\"value\":\"510822\",\"children\":\"\"},{\"text\":\"剑阁\",\"value\":\"510823\",\"children\":\"\"},{\"text\":\"苍溪\",\"value\":\"510824\",\"children\":\"\"}]},{\"text\":\"遂宁\",\"value\":\"510900\",\"children\":[{\"text\":\"船山\",\"value\":\"510903\",\"children\":\"\"},{\"text\":\"安居\",\"value\":\"510904\",\"children\":\"\"},{\"text\":\"蓬溪\",\"value\":\"510921\",\"children\":\"\"},{\"text\":\"射洪\",\"value\":\"510922\",\"children\":\"\"},{\"text\":\"大英\",\"value\":\"510923\",\"children\":\"\"}]},{\"text\":\"内江\",\"value\":\"511000\",\"children\":[{\"text\":\"市中\",\"value\":\"511002\",\"children\":\"\"},{\"text\":\"东兴\",\"value\":\"511011\",\"children\":\"\"},{\"text\":\"威远\",\"value\":\"511024\",\"children\":\"\"},{\"text\":\"资中\",\"value\":\"511025\",\"children\":\"\"},{\"text\":\"隆昌\",\"value\":\"511028\",\"children\":\"\"}]},{\"text\":\"乐山\",\"value\":\"511100\",\"children\":[{\"text\":\"市中\",\"value\":\"511102\",\"children\":\"\"},{\"text\":\"沙湾\",\"value\":\"511111\",\"children\":\"\"},{\"text\":\"五通桥\",\"value\":\"511112\",\"children\":\"\"},{\"text\":\"金口河\",\"value\":\"511113\",\"children\":\"\"},{\"text\":\"犍为\",\"value\":\"511123\",\"children\":\"\"},{\"text\":\"井研\",\"value\":\"511124\",\"children\":\"\"},{\"text\":\"夹江\",\"value\":\"511126\",\"children\":\"\"},{\"text\":\"沐川\",\"value\":\"511129\",\"children\":\"\"},{\"text\":\"峨边\",\"value\":\"511132\",\"children\":\"\"},{\"text\":\"马边\",\"value\":\"511133\",\"children\":\"\"},{\"text\":\"峨眉山\",\"value\":\"511181\",\"children\":\"\"}]},{\"text\":\"南充\",\"value\":\"511300\",\"children\":[{\"text\":\"顺庆\",\"value\":\"511302\",\"children\":\"\"},{\"text\":\"高坪\",\"value\":\"511303\",\"children\":\"\"},{\"text\":\"嘉陵\",\"value\":\"511304\",\"children\":\"\"},{\"text\":\"南部\",\"value\":\"511321\",\"children\":\"\"},{\"text\":\"营山\",\"value\":\"511322\",\"children\":\"\"},{\"text\":\"蓬安\",\"value\":\"511323\",\"children\":\"\"},{\"text\":\"仪陇\",\"value\":\"511324\",\"children\":\"\"},{\"text\":\"西充\",\"value\":\"511325\",\"children\":\"\"},{\"text\":\"阆中\",\"value\":\"511381\",\"children\":\"\"}]},{\"text\":\"眉山\",\"value\":\"511400\",\"children\":[{\"text\":\"东坡\",\"value\":\"511402\",\"children\":\"\"},{\"text\":\"仁寿\",\"value\":\"511421\",\"children\":\"\"},{\"text\":\"彭山\",\"value\":\"511422\",\"children\":\"\"},{\"text\":\"洪雅\",\"value\":\"511423\",\"children\":\"\"},{\"text\":\"丹棱\",\"value\":\"511424\",\"children\":\"\"},{\"text\":\"青神\",\"value\":\"511425\",\"children\":\"\"}]},{\"text\":\"宜宾\",\"value\":\"511500\",\"children\":[{\"text\":\"翠屏\",\"value\":\"511502\",\"children\":\"\"},{\"text\":\"宜宾\",\"value\":\"511521\",\"children\":\"\"},{\"text\":\"南溪\",\"value\":\"511522\",\"children\":\"\"},{\"text\":\"江安\",\"value\":\"511523\",\"children\":\"\"},{\"text\":\"长宁\",\"value\":\"511524\",\"children\":\"\"},{\"text\":\"高县\",\"value\":\"511525\",\"children\":\"\"},{\"text\":\"珙县\",\"value\":\"511526\",\"children\":\"\"},{\"text\":\"筠连\",\"value\":\"511527\",\"children\":\"\"},{\"text\":\"兴文\",\"value\":\"511528\",\"children\":\"\"},{\"text\":\"屏山\",\"value\":\"511529\",\"children\":\"\"}]},{\"text\":\"广安\",\"value\":\"511600\",\"children\":[{\"text\":\"广安\",\"value\":\"511602\",\"children\":\"\"},{\"text\":\"前锋\",\"value\":\"511603\",\"children\":\"\"},{\"text\":\"岳池\",\"value\":\"511621\",\"children\":\"\"},{\"text\":\"武胜\",\"value\":\"511622\",\"children\":\"\"},{\"text\":\"邻水\",\"value\":\"511623\",\"children\":\"\"},{\"text\":\"华蓥\",\"value\":\"511681\",\"children\":\"\"}]},{\"text\":\"达州\",\"value\":\"511700\",\"children\":[{\"text\":\"通川\",\"value\":\"511702\",\"children\":\"\"},{\"text\":\"达川\",\"value\":\"511721\",\"children\":\"\"},{\"text\":\"宣汉\",\"value\":\"511722\",\"children\":\"\"},{\"text\":\"开江\",\"value\":\"511723\",\"children\":\"\"},{\"text\":\"大竹\",\"value\":\"511724\",\"children\":\"\"},{\"text\":\"渠县\",\"value\":\"511725\",\"children\":\"\"},{\"text\":\"万源\",\"value\":\"511781\",\"children\":\"\"}]},{\"text\":\"雅安\",\"value\":\"511800\",\"children\":[{\"text\":\"雨城\",\"value\":\"511802\",\"children\":\"\"},{\"text\":\"名山\",\"value\":\"511821\",\"children\":\"\"},{\"text\":\"荥经\",\"value\":\"511822\",\"children\":\"\"},{\"text\":\"汉源\",\"value\":\"511823\",\"children\":\"\"},{\"text\":\"石棉\",\"value\":\"511824\",\"children\":\"\"},{\"text\":\"天全\",\"value\":\"511825\",\"children\":\"\"},{\"text\":\"芦山\",\"value\":\"511826\",\"children\":\"\"},{\"text\":\"宝兴\",\"value\":\"511827\",\"children\":\"\"}]},{\"text\":\"巴中\",\"value\":\"511900\",\"children\":[{\"text\":\"巴州\",\"value\":\"511902\",\"children\":\"\"},{\"text\":\"恩阳\",\"value\":\"511903\",\"children\":\"\"},{\"text\":\"通江\",\"value\":\"511921\",\"children\":\"\"},{\"text\":\"南江\",\"value\":\"511922\",\"children\":\"\"},{\"text\":\"平昌\",\"value\":\"511923\",\"children\":\"\"}]},{\"text\":\"资阳\",\"value\":\"512000\",\"children\":[{\"text\":\"雁江\",\"value\":\"512002\",\"children\":\"\"},{\"text\":\"安岳\",\"value\":\"512021\",\"children\":\"\"},{\"text\":\"乐至\",\"value\":\"512022\",\"children\":\"\"},{\"text\":\"简阳\",\"value\":\"512081\",\"children\":\"\"}]},{\"text\":\"阿坝\",\"value\":\"513200\",\"children\":[{\"text\":\"汶川\",\"value\":\"513221\",\"children\":\"\"},{\"text\":\"理县\",\"value\":\"513222\",\"children\":\"\"},{\"text\":\"茂县\",\"value\":\"513223\",\"children\":\"\"},{\"text\":\"松潘\",\"value\":\"513224\",\"children\":\"\"},{\"text\":\"九寨沟\",\"value\":\"513225\",\"children\":\"\"},{\"text\":\"金川\",\"value\":\"513226\",\"children\":\"\"},{\"text\":\"小金\",\"value\":\"513227\",\"children\":\"\"},{\"text\":\"黑水\",\"value\":\"513228\",\"children\":\"\"},{\"text\":\"马尔康\",\"value\":\"513229\",\"children\":\"\"},{\"text\":\"壤塘\",\"value\":\"513230\",\"children\":\"\"},{\"text\":\"阿坝\",\"value\":\"513231\",\"children\":\"\"},{\"text\":\"若尔盖\",\"value\":\"513232\",\"children\":\"\"},{\"text\":\"红原\",\"value\":\"513233\",\"children\":\"\"}]},{\"text\":\"甘孜\",\"value\":\"513300\",\"children\":[{\"text\":\"康定\",\"value\":\"513321\",\"children\":\"\"},{\"text\":\"泸定\",\"value\":\"513322\",\"children\":\"\"},{\"text\":\"丹巴\",\"value\":\"513323\",\"children\":\"\"},{\"text\":\"九龙\",\"value\":\"513324\",\"children\":\"\"},{\"text\":\"雅江\",\"value\":\"513325\",\"children\":\"\"},{\"text\":\"道孚\",\"value\":\"513326\",\"children\":\"\"},{\"text\":\"炉霍\",\"value\":\"513327\",\"children\":\"\"},{\"text\":\"甘孜\",\"value\":\"513328\",\"children\":\"\"},{\"text\":\"新龙\",\"value\":\"513329\",\"children\":\"\"},{\"text\":\"德格\",\"value\":\"513330\",\"children\":\"\"},{\"text\":\"白玉\",\"value\":\"513331\",\"children\":\"\"},{\"text\":\"石渠\",\"value\":\"513332\",\"children\":\"\"},{\"text\":\"色达\",\"value\":\"513333\",\"children\":\"\"},{\"text\":\"理塘\",\"value\":\"513334\",\"children\":\"\"},{\"text\":\"巴塘\",\"value\":\"513335\",\"children\":\"\"},{\"text\":\"乡城\",\"value\":\"513336\",\"children\":\"\"},{\"text\":\"稻城\",\"value\":\"513337\",\"children\":\"\"},{\"text\":\"得荣\",\"value\":\"513338\",\"children\":\"\"}]},{\"text\":\"凉山\",\"value\":\"513400\",\"children\":[{\"text\":\"西昌\",\"value\":\"513401\",\"children\":\"\"},{\"text\":\"木里\",\"value\":\"513422\",\"children\":\"\"},{\"text\":\"盐源\",\"value\":\"513423\",\"children\":\"\"},{\"text\":\"德昌\",\"value\":\"513424\",\"children\":\"\"},{\"text\":\"会理\",\"value\":\"513425\",\"children\":\"\"},{\"text\":\"会东\",\"value\":\"513426\",\"children\":\"\"},{\"text\":\"宁南\",\"value\":\"513427\",\"children\":\"\"},{\"text\":\"普格\",\"value\":\"513428\",\"children\":\"\"},{\"text\":\"布拖\",\"value\":\"513429\",\"children\":\"\"},{\"text\":\"金阳\",\"value\":\"513430\",\"children\":\"\"},{\"text\":\"昭觉\",\"value\":\"513431\",\"children\":\"\"},{\"text\":\"喜德\",\"value\":\"513432\",\"children\":\"\"},{\"text\":\"冕宁\",\"value\":\"513433\",\"children\":\"\"},{\"text\":\"越西\",\"value\":\"513434\",\"children\":\"\"},{\"text\":\"甘洛\",\"value\":\"513435\",\"children\":\"\"},{\"text\":\"美姑\",\"value\":\"513436\",\"children\":\"\"},{\"text\":\"雷波\",\"value\":\"513437\",\"children\":\"\"}]}]},{\"text\":\"贵州\",\"value\":\"520000\",\"children\":[{\"text\":\"贵阳\",\"value\":\"520100\",\"children\":[{\"text\":\"南明\",\"value\":\"520102\",\"children\":\"\"},{\"text\":\"云岩\",\"value\":\"520103\",\"children\":\"\"},{\"text\":\"花溪\",\"value\":\"520111\",\"children\":\"\"},{\"text\":\"乌当\",\"value\":\"520112\",\"children\":\"\"},{\"text\":\"白云\",\"value\":\"520113\",\"children\":\"\"},{\"text\":\"开阳\",\"value\":\"520121\",\"children\":\"\"},{\"text\":\"息烽\",\"value\":\"520122\",\"children\":\"\"},{\"text\":\"修文\",\"value\":\"520123\",\"children\":\"\"},{\"text\":\"观山湖\",\"value\":\"520151\",\"children\":\"\"},{\"text\":\"清镇\",\"value\":\"520181\",\"children\":\"\"}]},{\"text\":\"六盘水\",\"value\":\"520200\",\"children\":[{\"text\":\"钟山\",\"value\":\"520201\",\"children\":\"\"},{\"text\":\"六枝特\",\"value\":\"520203\",\"children\":\"\"},{\"text\":\"水城\",\"value\":\"520221\",\"children\":\"\"},{\"text\":\"盘县\",\"value\":\"520222\",\"children\":\"\"}]},{\"text\":\"遵义\",\"value\":\"520300\",\"children\":[{\"text\":\"红花岗\",\"value\":\"520302\",\"children\":\"\"},{\"text\":\"汇川\",\"value\":\"520303\",\"children\":\"\"},{\"text\":\"遵义\",\"value\":\"520321\",\"children\":\"\"},{\"text\":\"桐梓\",\"value\":\"520322\",\"children\":\"\"},{\"text\":\"绥阳\",\"value\":\"520323\",\"children\":\"\"},{\"text\":\"正安\",\"value\":\"520324\",\"children\":\"\"},{\"text\":\"道真\",\"value\":\"520325\",\"children\":\"\"},{\"text\":\"务川\",\"value\":\"520326\",\"children\":\"\"},{\"text\":\"凤冈\",\"value\":\"520327\",\"children\":\"\"},{\"text\":\"湄潭\",\"value\":\"520328\",\"children\":\"\"},{\"text\":\"余庆\",\"value\":\"520329\",\"children\":\"\"},{\"text\":\"习水\",\"value\":\"520330\",\"children\":\"\"},{\"text\":\"赤水\",\"value\":\"520381\",\"children\":\"\"},{\"text\":\"仁怀\",\"value\":\"520382\",\"children\":\"\"}]},{\"text\":\"安顺\",\"value\":\"520400\",\"children\":[{\"text\":\"西秀\",\"value\":\"520402\",\"children\":\"\"},{\"text\":\"平坝\",\"value\":\"520421\",\"children\":\"\"},{\"text\":\"普定\",\"value\":\"520422\",\"children\":\"\"},{\"text\":\"镇宁\",\"value\":\"520423\",\"children\":\"\"},{\"text\":\"关岭\",\"value\":\"520424\",\"children\":\"\"},{\"text\":\"紫云\",\"value\":\"520425\",\"children\":\"\"}]},{\"text\":\"铜仁\",\"value\":\"522200\",\"children\":[{\"text\":\"碧江\",\"value\":\"522201\",\"children\":\"\"},{\"text\":\"江口\",\"value\":\"522222\",\"children\":\"\"},{\"text\":\"玉屏\",\"value\":\"522223\",\"children\":\"\"},{\"text\":\"石阡\",\"value\":\"522224\",\"children\":\"\"},{\"text\":\"思南\",\"value\":\"522225\",\"children\":\"\"},{\"text\":\"印江\",\"value\":\"522226\",\"children\":\"\"},{\"text\":\"德江\",\"value\":\"522227\",\"children\":\"\"},{\"text\":\"沿河\",\"value\":\"522228\",\"children\":\"\"},{\"text\":\"松桃\",\"value\":\"522229\",\"children\":\"\"},{\"text\":\"万山\",\"value\":\"522230\",\"children\":\"\"}]},{\"text\":\"黔西南\",\"value\":\"522300\",\"children\":[{\"text\":\"兴义\",\"value\":\"522301\",\"children\":\"\"},{\"text\":\"兴仁\",\"value\":\"522322\",\"children\":\"\"},{\"text\":\"普安\",\"value\":\"522323\",\"children\":\"\"},{\"text\":\"晴隆\",\"value\":\"522324\",\"children\":\"\"},{\"text\":\"贞丰\",\"value\":\"522325\",\"children\":\"\"},{\"text\":\"望谟\",\"value\":\"522326\",\"children\":\"\"},{\"text\":\"册亨\",\"value\":\"522327\",\"children\":\"\"},{\"text\":\"安龙\",\"value\":\"522328\",\"children\":\"\"}]},{\"text\":\"毕节\",\"value\":\"522400\",\"children\":[{\"text\":\"七星关\",\"value\":\"522401\",\"children\":\"\"},{\"text\":\"大方\",\"value\":\"522422\",\"children\":\"\"},{\"text\":\"黔西\",\"value\":\"522423\",\"children\":\"\"},{\"text\":\"金沙\",\"value\":\"522424\",\"children\":\"\"},{\"text\":\"织金\",\"value\":\"522425\",\"children\":\"\"},{\"text\":\"纳雍\",\"value\":\"522426\",\"children\":\"\"},{\"text\":\"威宁\",\"value\":\"522427\",\"children\":\"\"},{\"text\":\"赫章\",\"value\":\"522428\",\"children\":\"\"}]},{\"text\":\"黔东南\",\"value\":\"522600\",\"children\":[{\"text\":\"凯里\",\"value\":\"522601\",\"children\":\"\"},{\"text\":\"黄平\",\"value\":\"522622\",\"children\":\"\"},{\"text\":\"施秉\",\"value\":\"522623\",\"children\":\"\"},{\"text\":\"三穗\",\"value\":\"522624\",\"children\":\"\"},{\"text\":\"镇远\",\"value\":\"522625\",\"children\":\"\"},{\"text\":\"岑巩\",\"value\":\"522626\",\"children\":\"\"},{\"text\":\"天柱\",\"value\":\"522627\",\"children\":\"\"},{\"text\":\"锦屏\",\"value\":\"522628\",\"children\":\"\"},{\"text\":\"剑河\",\"value\":\"522629\",\"children\":\"\"},{\"text\":\"台江\",\"value\":\"522630\",\"children\":\"\"},{\"text\":\"黎平\",\"value\":\"522631\",\"children\":\"\"},{\"text\":\"榕江\",\"value\":\"522632\",\"children\":\"\"},{\"text\":\"从江\",\"value\":\"522633\",\"children\":\"\"},{\"text\":\"雷山\",\"value\":\"522634\",\"children\":\"\"},{\"text\":\"麻江\",\"value\":\"522635\",\"children\":\"\"},{\"text\":\"丹寨\",\"value\":\"522636\",\"children\":\"\"}]},{\"text\":\"黔南\",\"value\":\"522700\",\"children\":[{\"text\":\"都匀\",\"value\":\"522701\",\"children\":\"\"},{\"text\":\"福泉\",\"value\":\"522702\",\"children\":\"\"},{\"text\":\"荔波\",\"value\":\"522722\",\"children\":\"\"},{\"text\":\"贵定\",\"value\":\"522723\",\"children\":\"\"},{\"text\":\"瓮安\",\"value\":\"522725\",\"children\":\"\"},{\"text\":\"独山\",\"value\":\"522726\",\"children\":\"\"},{\"text\":\"平塘\",\"value\":\"522727\",\"children\":\"\"},{\"text\":\"罗甸\",\"value\":\"522728\",\"children\":\"\"},{\"text\":\"长顺\",\"value\":\"522729\",\"children\":\"\"},{\"text\":\"龙里\",\"value\":\"522730\",\"children\":\"\"},{\"text\":\"惠水\",\"value\":\"522731\",\"children\":\"\"},{\"text\":\"三都\",\"value\":\"522732\",\"children\":\"\"}]}]},{\"text\":\"云南\",\"value\":\"530000\",\"children\":[{\"text\":\"昆明\",\"value\":\"530100\",\"children\":[{\"text\":\"五华\",\"value\":\"530102\",\"children\":\"\"},{\"text\":\"盘龙\",\"value\":\"530103\",\"children\":\"\"},{\"text\":\"官渡\",\"value\":\"530111\",\"children\":\"\"},{\"text\":\"西山\",\"value\":\"530112\",\"children\":\"\"},{\"text\":\"东川\",\"value\":\"530113\",\"children\":\"\"},{\"text\":\"呈贡\",\"value\":\"530121\",\"children\":\"\"},{\"text\":\"晋宁\",\"value\":\"530122\",\"children\":\"\"},{\"text\":\"富民\",\"value\":\"530124\",\"children\":\"\"},{\"text\":\"宜良\",\"value\":\"530125\",\"children\":\"\"},{\"text\":\"石林\",\"value\":\"530126\",\"children\":\"\"},{\"text\":\"嵩明\",\"value\":\"530127\",\"children\":\"\"},{\"text\":\"禄劝\",\"value\":\"530128\",\"children\":\"\"},{\"text\":\"寻甸\",\"value\":\"530129\",\"children\":\"\"},{\"text\":\"安宁\",\"value\":\"530181\",\"children\":\"\"}]},{\"text\":\"曲靖\",\"value\":\"530300\",\"children\":[{\"text\":\"麒麟\",\"value\":\"530302\",\"children\":\"\"},{\"text\":\"马龙\",\"value\":\"530321\",\"children\":\"\"},{\"text\":\"陆良\",\"value\":\"530322\",\"children\":\"\"},{\"text\":\"师宗\",\"value\":\"530323\",\"children\":\"\"},{\"text\":\"罗平\",\"value\":\"530324\",\"children\":\"\"},{\"text\":\"富源\",\"value\":\"530325\",\"children\":\"\"},{\"text\":\"会泽\",\"value\":\"530326\",\"children\":\"\"},{\"text\":\"沾益\",\"value\":\"530328\",\"children\":\"\"},{\"text\":\"宣威\",\"value\":\"530381\",\"children\":\"\"}]},{\"text\":\"玉溪\",\"value\":\"530400\",\"children\":[{\"text\":\"红塔\",\"value\":\"530402\",\"children\":\"\"},{\"text\":\"江川\",\"value\":\"530421\",\"children\":\"\"},{\"text\":\"澄江\",\"value\":\"530422\",\"children\":\"\"},{\"text\":\"通海\",\"value\":\"530423\",\"children\":\"\"},{\"text\":\"华宁\",\"value\":\"530424\",\"children\":\"\"},{\"text\":\"易门\",\"value\":\"530425\",\"children\":\"\"},{\"text\":\"峨山\",\"value\":\"530426\",\"children\":\"\"},{\"text\":\"新平\",\"value\":\"530427\",\"children\":\"\"},{\"text\":\"元江\",\"value\":\"530428\",\"children\":\"\"}]},{\"text\":\"保山\",\"value\":\"530500\",\"children\":[{\"text\":\"隆阳\",\"value\":\"530502\",\"children\":\"\"},{\"text\":\"施甸\",\"value\":\"530521\",\"children\":\"\"},{\"text\":\"腾冲\",\"value\":\"530522\",\"children\":\"\"},{\"text\":\"龙陵\",\"value\":\"530523\",\"children\":\"\"},{\"text\":\"昌宁\",\"value\":\"530524\",\"children\":\"\"}]},{\"text\":\"昭通\",\"value\":\"530600\",\"children\":[{\"text\":\"昭阳\",\"value\":\"530602\",\"children\":\"\"},{\"text\":\"鲁甸\",\"value\":\"530621\",\"children\":\"\"},{\"text\":\"巧家\",\"value\":\"530622\",\"children\":\"\"},{\"text\":\"盐津\",\"value\":\"530623\",\"children\":\"\"},{\"text\":\"大关\",\"value\":\"530624\",\"children\":\"\"},{\"text\":\"永善\",\"value\":\"530625\",\"children\":\"\"},{\"text\":\"绥江\",\"value\":\"530626\",\"children\":\"\"},{\"text\":\"镇雄\",\"value\":\"530627\",\"children\":\"\"},{\"text\":\"彝良\",\"value\":\"530628\",\"children\":\"\"},{\"text\":\"威信\",\"value\":\"530629\",\"children\":\"\"},{\"text\":\"水富\",\"value\":\"530630\",\"children\":\"\"}]},{\"text\":\"丽江\",\"value\":\"530700\",\"children\":[{\"text\":\"古城\",\"value\":\"530702\",\"children\":\"\"},{\"text\":\"玉龙\",\"value\":\"530721\",\"children\":\"\"},{\"text\":\"永胜\",\"value\":\"530722\",\"children\":\"\"},{\"text\":\"华坪\",\"value\":\"530723\",\"children\":\"\"},{\"text\":\"宁蒗\",\"value\":\"530724\",\"children\":\"\"}]},{\"text\":\"普洱\",\"value\":\"530800\",\"children\":[{\"text\":\"思茅\",\"value\":\"530802\",\"children\":\"\"},{\"text\":\"宁洱\",\"value\":\"530821\",\"children\":\"\"},{\"text\":\"墨江\",\"value\":\"530822\",\"children\":\"\"},{\"text\":\"景东\",\"value\":\"530823\",\"children\":\"\"},{\"text\":\"景谷\",\"value\":\"530824\",\"children\":\"\"},{\"text\":\"镇沅\",\"value\":\"530825\",\"children\":\"\"},{\"text\":\"江城\",\"value\":\"530826\",\"children\":\"\"},{\"text\":\"孟连\",\"value\":\"530827\",\"children\":\"\"},{\"text\":\"澜沧\",\"value\":\"530828\",\"children\":\"\"},{\"text\":\"西盟\",\"value\":\"530829\",\"children\":\"\"}]},{\"text\":\"临沧\",\"value\":\"530900\",\"children\":[{\"text\":\"临翔\",\"value\":\"530902\",\"children\":\"\"},{\"text\":\"凤庆\",\"value\":\"530921\",\"children\":\"\"},{\"text\":\"云县\",\"value\":\"530922\",\"children\":\"\"},{\"text\":\"永德\",\"value\":\"530923\",\"children\":\"\"},{\"text\":\"镇康\",\"value\":\"530924\",\"children\":\"\"},{\"text\":\"双江\",\"value\":\"530925\",\"children\":\"\"},{\"text\":\"耿马\",\"value\":\"530926\",\"children\":\"\"},{\"text\":\"沧源\",\"value\":\"530927\",\"children\":\"\"}]},{\"text\":\"楚雄\",\"value\":\"532300\",\"children\":[{\"text\":\"楚雄\",\"value\":\"532301\",\"children\":\"\"},{\"text\":\"双柏\",\"value\":\"532322\",\"children\":\"\"},{\"text\":\"牟定\",\"value\":\"532323\",\"children\":\"\"},{\"text\":\"南华\",\"value\":\"532324\",\"children\":\"\"},{\"text\":\"姚安\",\"value\":\"532325\",\"children\":\"\"},{\"text\":\"大姚\",\"value\":\"532326\",\"children\":\"\"},{\"text\":\"永仁\",\"value\":\"532327\",\"children\":\"\"},{\"text\":\"元谋\",\"value\":\"532328\",\"children\":\"\"},{\"text\":\"武定\",\"value\":\"532329\",\"children\":\"\"},{\"text\":\"禄丰\",\"value\":\"532331\",\"children\":\"\"}]},{\"text\":\"红河\",\"value\":\"532500\",\"children\":[{\"text\":\"个旧\",\"value\":\"532501\",\"children\":\"\"},{\"text\":\"开远\",\"value\":\"532502\",\"children\":\"\"},{\"text\":\"蒙自\",\"value\":\"532522\",\"children\":\"\"},{\"text\":\"屏边\",\"value\":\"532523\",\"children\":\"\"},{\"text\":\"建水\",\"value\":\"532524\",\"children\":\"\"},{\"text\":\"石屏\",\"value\":\"532525\",\"children\":\"\"},{\"text\":\"弥勒\",\"value\":\"532526\",\"children\":\"\"},{\"text\":\"泸西\",\"value\":\"532527\",\"children\":\"\"},{\"text\":\"元阳\",\"value\":\"532528\",\"children\":\"\"},{\"text\":\"红河\",\"value\":\"532529\",\"children\":\"\"},{\"text\":\"金平\",\"value\":\"532530\",\"children\":\"\"},{\"text\":\"绿春\",\"value\":\"532531\",\"children\":\"\"},{\"text\":\"河口\",\"value\":\"532532\",\"children\":\"\"}]},{\"text\":\"文山\",\"value\":\"532600\",\"children\":[{\"text\":\"文山\",\"value\":\"532621\",\"children\":\"\"},{\"text\":\"砚山\",\"value\":\"532622\",\"children\":\"\"},{\"text\":\"西畴\",\"value\":\"532623\",\"children\":\"\"},{\"text\":\"麻栗坡\",\"value\":\"532624\",\"children\":\"\"},{\"text\":\"马关\",\"value\":\"532625\",\"children\":\"\"},{\"text\":\"丘北\",\"value\":\"532626\",\"children\":\"\"},{\"text\":\"广南\",\"value\":\"532627\",\"children\":\"\"},{\"text\":\"富宁\",\"value\":\"532628\",\"children\":\"\"}]},{\"text\":\"西双版纳\",\"value\":\"532800\",\"children\":[{\"text\":\"景洪\",\"value\":\"532801\",\"children\":\"\"},{\"text\":\"勐海\",\"value\":\"532822\",\"children\":\"\"},{\"text\":\"勐腊\",\"value\":\"532823\",\"children\":\"\"}]},{\"text\":\"大理\",\"value\":\"532900\",\"children\":[{\"text\":\"大理\",\"value\":\"532901\",\"children\":\"\"},{\"text\":\"漾濞\",\"value\":\"532922\",\"children\":\"\"},{\"text\":\"祥云\",\"value\":\"532923\",\"children\":\"\"},{\"text\":\"宾川\",\"value\":\"532924\",\"children\":\"\"},{\"text\":\"弥渡\",\"value\":\"532925\",\"children\":\"\"},{\"text\":\"南涧\",\"value\":\"532926\",\"children\":\"\"},{\"text\":\"巍山\",\"value\":\"532927\",\"children\":\"\"},{\"text\":\"永平\",\"value\":\"532928\",\"children\":\"\"},{\"text\":\"云龙\",\"value\":\"532929\",\"children\":\"\"},{\"text\":\"洱源\",\"value\":\"532930\",\"children\":\"\"},{\"text\":\"剑川\",\"value\":\"532931\",\"children\":\"\"},{\"text\":\"鹤庆\",\"value\":\"532932\",\"children\":\"\"}]},{\"text\":\"德宏\",\"value\":\"533100\",\"children\":[{\"text\":\"瑞丽\",\"value\":\"533102\",\"children\":\"\"},{\"text\":\"芒市\",\"value\":\"533103\",\"children\":\"\"},{\"text\":\"梁河\",\"value\":\"533122\",\"children\":\"\"},{\"text\":\"盈江\",\"value\":\"533123\",\"children\":\"\"},{\"text\":\"陇川\",\"value\":\"533124\",\"children\":\"\"}]},{\"text\":\"怒江\",\"value\":\"533300\",\"children\":[{\"text\":\"泸水\",\"value\":\"533321\",\"children\":\"\"},{\"text\":\"福贡\",\"value\":\"533323\",\"children\":\"\"},{\"text\":\"贡山\",\"value\":\"533324\",\"children\":\"\"},{\"text\":\"兰坪\",\"value\":\"533325\",\"children\":\"\"}]},{\"text\":\"迪庆\",\"value\":\"533400\",\"children\":[{\"text\":\"香格里拉\",\"value\":\"533421\",\"children\":\"\"},{\"text\":\"德钦\",\"value\":\"533422\",\"children\":\"\"},{\"text\":\"维西\",\"value\":\"533423\",\"children\":\"\"}]}]},{\"text\":\"西藏\",\"value\":\"540000\",\"children\":[{\"text\":\"拉萨\",\"value\":\"540100\",\"children\":[{\"text\":\"城关\",\"value\":\"540102\",\"children\":\"\"},{\"text\":\"林周\",\"value\":\"540121\",\"children\":\"\"},{\"text\":\"当雄\",\"value\":\"540122\",\"children\":\"\"},{\"text\":\"尼木\",\"value\":\"540123\",\"children\":\"\"},{\"text\":\"曲水\",\"value\":\"540124\",\"children\":\"\"},{\"text\":\"堆龙德庆\",\"value\":\"540125\",\"children\":\"\"},{\"text\":\"达孜\",\"value\":\"540126\",\"children\":\"\"},{\"text\":\"墨竹工卡\",\"value\":\"540127\",\"children\":\"\"}]},{\"text\":\"昌都\",\"value\":\"542100\",\"children\":[{\"text\":\"卡若\",\"value\":\"542121\",\"children\":\"\"},{\"text\":\"江达\",\"value\":\"542122\",\"children\":\"\"},{\"text\":\"贡觉\",\"value\":\"542123\",\"children\":\"\"},{\"text\":\"类乌齐\",\"value\":\"542124\",\"children\":\"\"},{\"text\":\"丁青\",\"value\":\"542125\",\"children\":\"\"},{\"text\":\"察雅\",\"value\":\"542126\",\"children\":\"\"},{\"text\":\"八宿\",\"value\":\"542127\",\"children\":\"\"},{\"text\":\"左贡\",\"value\":\"542128\",\"children\":\"\"},{\"text\":\"芒康\",\"value\":\"542129\",\"children\":\"\"},{\"text\":\"洛隆\",\"value\":\"542132\",\"children\":\"\"},{\"text\":\"边坝\",\"value\":\"542133\",\"children\":\"\"}]},{\"text\":\"山南\",\"value\":\"542200\",\"children\":[{\"text\":\"乃东\",\"value\":\"542221\",\"children\":\"\"},{\"text\":\"扎囊\",\"value\":\"542222\",\"children\":\"\"},{\"text\":\"贡嘎\",\"value\":\"542223\",\"children\":\"\"},{\"text\":\"桑日\",\"value\":\"542224\",\"children\":\"\"},{\"text\":\"琼结\",\"value\":\"542225\",\"children\":\"\"},{\"text\":\"曲松\",\"value\":\"542226\",\"children\":\"\"},{\"text\":\"措美\",\"value\":\"542227\",\"children\":\"\"},{\"text\":\"洛扎\",\"value\":\"542228\",\"children\":\"\"},{\"text\":\"加查\",\"value\":\"542229\",\"children\":\"\"},{\"text\":\"隆子\",\"value\":\"542231\",\"children\":\"\"},{\"text\":\"错那\",\"value\":\"542232\",\"children\":\"\"},{\"text\":\"浪卡子\",\"value\":\"542233\",\"children\":\"\"}]},{\"text\":\"日喀则\",\"value\":\"542300\",\"children\":[{\"text\":\"桑珠孜\",\"value\":\"542301\",\"children\":\"\"},{\"text\":\"南木林\",\"value\":\"542322\",\"children\":\"\"},{\"text\":\"江孜\",\"value\":\"542323\",\"children\":\"\"},{\"text\":\"定日\",\"value\":\"542324\",\"children\":\"\"},{\"text\":\"萨迦\",\"value\":\"542325\",\"children\":\"\"},{\"text\":\"拉孜\",\"value\":\"542326\",\"children\":\"\"},{\"text\":\"昂仁\",\"value\":\"542327\",\"children\":\"\"},{\"text\":\"谢通门\",\"value\":\"542328\",\"children\":\"\"},{\"text\":\"白朗\",\"value\":\"542329\",\"children\":\"\"},{\"text\":\"仁布\",\"value\":\"542330\",\"children\":\"\"},{\"text\":\"康马\",\"value\":\"542331\",\"children\":\"\"},{\"text\":\"定结\",\"value\":\"542332\",\"children\":\"\"},{\"text\":\"仲巴\",\"value\":\"542333\",\"children\":\"\"},{\"text\":\"亚东\",\"value\":\"542334\",\"children\":\"\"},{\"text\":\"吉隆\",\"value\":\"542335\",\"children\":\"\"},{\"text\":\"聂拉木\",\"value\":\"542336\",\"children\":\"\"},{\"text\":\"萨嘎\",\"value\":\"542337\",\"children\":\"\"},{\"text\":\"岗巴\",\"value\":\"542338\",\"children\":\"\"}]},{\"text\":\"那曲\",\"value\":\"542400\",\"children\":[{\"text\":\"那曲\",\"value\":\"542421\",\"children\":\"\"},{\"text\":\"嘉黎\",\"value\":\"542422\",\"children\":\"\"},{\"text\":\"比如\",\"value\":\"542423\",\"children\":\"\"},{\"text\":\"聂荣\",\"value\":\"542424\",\"children\":\"\"},{\"text\":\"安多\",\"value\":\"542425\",\"children\":\"\"},{\"text\":\"申扎\",\"value\":\"542426\",\"children\":\"\"},{\"text\":\"索县\",\"value\":\"542427\",\"children\":\"\"},{\"text\":\"班戈\",\"value\":\"542428\",\"children\":\"\"},{\"text\":\"巴青\",\"value\":\"542429\",\"children\":\"\"},{\"text\":\"尼玛\",\"value\":\"542430\",\"children\":\"\"},{\"text\":\"双湖\",\"value\":\"542432\",\"children\":\"\"}]},{\"text\":\"阿里\",\"value\":\"542500\",\"children\":[{\"text\":\"普兰\",\"value\":\"542521\",\"children\":\"\"},{\"text\":\"札达\",\"value\":\"542522\",\"children\":\"\"},{\"text\":\"噶尔\",\"value\":\"542523\",\"children\":\"\"},{\"text\":\"日土\",\"value\":\"542524\",\"children\":\"\"},{\"text\":\"革吉\",\"value\":\"542525\",\"children\":\"\"},{\"text\":\"改则\",\"value\":\"542526\",\"children\":\"\"},{\"text\":\"措勤\",\"value\":\"542527\",\"children\":\"\"}]},{\"text\":\"林芝\",\"value\":\"542600\",\"children\":[{\"text\":\"巴宜\",\"value\":\"542621\",\"children\":\"\"},{\"text\":\"工布江达\",\"value\":\"542622\",\"children\":\"\"},{\"text\":\"米林\",\"value\":\"542623\",\"children\":\"\"},{\"text\":\"墨脱\",\"value\":\"542624\",\"children\":\"\"},{\"text\":\"波密\",\"value\":\"542625\",\"children\":\"\"},{\"text\":\"察隅\",\"value\":\"542626\",\"children\":\"\"},{\"text\":\"朗县\",\"value\":\"542627\",\"children\":\"\"}]}]},{\"text\":\"陕西\",\"value\":\"610000\",\"children\":[{\"text\":\"西安\",\"value\":\"610100\",\"children\":[{\"text\":\"新城\",\"value\":\"610102\",\"children\":\"\"},{\"text\":\"碑林\",\"value\":\"610103\",\"children\":\"\"},{\"text\":\"莲湖\",\"value\":\"610104\",\"children\":\"\"},{\"text\":\"灞桥\",\"value\":\"610111\",\"children\":\"\"},{\"text\":\"未央\",\"value\":\"610112\",\"children\":\"\"},{\"text\":\"雁塔\",\"value\":\"610113\",\"children\":\"\"},{\"text\":\"阎良\",\"value\":\"610114\",\"children\":\"\"},{\"text\":\"临潼\",\"value\":\"610115\",\"children\":\"\"},{\"text\":\"长安\",\"value\":\"610116\",\"children\":\"\"},{\"text\":\"蓝田\",\"value\":\"610122\",\"children\":\"\"},{\"text\":\"周至\",\"value\":\"610124\",\"children\":\"\"},{\"text\":\"户县\",\"value\":\"610125\",\"children\":\"\"},{\"text\":\"高陵\",\"value\":\"610126\",\"children\":\"\"}]},{\"text\":\"铜川\",\"value\":\"610200\",\"children\":[{\"text\":\"王益\",\"value\":\"610202\",\"children\":\"\"},{\"text\":\"印台\",\"value\":\"610203\",\"children\":\"\"},{\"text\":\"耀州\",\"value\":\"610204\",\"children\":\"\"},{\"text\":\"宜君\",\"value\":\"610222\",\"children\":\"\"}]},{\"text\":\"宝鸡\",\"value\":\"610300\",\"children\":[{\"text\":\"渭滨\",\"value\":\"610302\",\"children\":\"\"},{\"text\":\"金台\",\"value\":\"610303\",\"children\":\"\"},{\"text\":\"陈仓\",\"value\":\"610304\",\"children\":\"\"},{\"text\":\"凤翔\",\"value\":\"610322\",\"children\":\"\"},{\"text\":\"岐山\",\"value\":\"610323\",\"children\":\"\"},{\"text\":\"扶风\",\"value\":\"610324\",\"children\":\"\"},{\"text\":\"眉县\",\"value\":\"610326\",\"children\":\"\"},{\"text\":\"陇县\",\"value\":\"610327\",\"children\":\"\"},{\"text\":\"千阳\",\"value\":\"610328\",\"children\":\"\"},{\"text\":\"麟游\",\"value\":\"610329\",\"children\":\"\"},{\"text\":\"凤县\",\"value\":\"610330\",\"children\":\"\"},{\"text\":\"太白\",\"value\":\"610331\",\"children\":\"\"}]},{\"text\":\"咸阳\",\"value\":\"610400\",\"children\":[{\"text\":\"秦都\",\"value\":\"610402\",\"children\":\"\"},{\"text\":\"杨陵\",\"value\":\"610403\",\"children\":\"\"},{\"text\":\"渭城\",\"value\":\"610404\",\"children\":\"\"},{\"text\":\"三原\",\"value\":\"610422\",\"children\":\"\"},{\"text\":\"泾阳\",\"value\":\"610423\",\"children\":\"\"},{\"text\":\"乾县\",\"value\":\"610424\",\"children\":\"\"},{\"text\":\"礼泉\",\"value\":\"610425\",\"children\":\"\"},{\"text\":\"永寿\",\"value\":\"610426\",\"children\":\"\"},{\"text\":\"彬县\",\"value\":\"610427\",\"children\":\"\"},{\"text\":\"长武\",\"value\":\"610428\",\"children\":\"\"},{\"text\":\"旬邑\",\"value\":\"610429\",\"children\":\"\"},{\"text\":\"淳化\",\"value\":\"610430\",\"children\":\"\"},{\"text\":\"武功\",\"value\":\"610431\",\"children\":\"\"},{\"text\":\"兴平\",\"value\":\"610481\",\"children\":\"\"}]},{\"text\":\"渭南\",\"value\":\"610500\",\"children\":[{\"text\":\"临渭\",\"value\":\"610502\",\"children\":\"\"},{\"text\":\"华县\",\"value\":\"610521\",\"children\":\"\"},{\"text\":\"潼关\",\"value\":\"610522\",\"children\":\"\"},{\"text\":\"大荔\",\"value\":\"610523\",\"children\":\"\"},{\"text\":\"合阳\",\"value\":\"610524\",\"children\":\"\"},{\"text\":\"澄城\",\"value\":\"610525\",\"children\":\"\"},{\"text\":\"蒲城\",\"value\":\"610526\",\"children\":\"\"},{\"text\":\"白水\",\"value\":\"610527\",\"children\":\"\"},{\"text\":\"富平\",\"value\":\"610528\",\"children\":\"\"},{\"text\":\"韩城\",\"value\":\"610581\",\"children\":\"\"},{\"text\":\"华阴\",\"value\":\"610582\",\"children\":\"\"}]},{\"text\":\"延安\",\"value\":\"610600\",\"children\":[{\"text\":\"宝塔\",\"value\":\"610602\",\"children\":\"\"},{\"text\":\"延长\",\"value\":\"610621\",\"children\":\"\"},{\"text\":\"延川\",\"value\":\"610622\",\"children\":\"\"},{\"text\":\"子长\",\"value\":\"610623\",\"children\":\"\"},{\"text\":\"安塞\",\"value\":\"610624\",\"children\":\"\"},{\"text\":\"志丹\",\"value\":\"610625\",\"children\":\"\"},{\"text\":\"吴起\",\"value\":\"610626\",\"children\":\"\"},{\"text\":\"甘泉\",\"value\":\"610627\",\"children\":\"\"},{\"text\":\"富县\",\"value\":\"610628\",\"children\":\"\"},{\"text\":\"洛川\",\"value\":\"610629\",\"children\":\"\"},{\"text\":\"宜川\",\"value\":\"610630\",\"children\":\"\"},{\"text\":\"黄龙\",\"value\":\"610631\",\"children\":\"\"},{\"text\":\"黄陵\",\"value\":\"610632\",\"children\":\"\"}]},{\"text\":\"汉中\",\"value\":\"610700\",\"children\":[{\"text\":\"汉台\",\"value\":\"610702\",\"children\":\"\"},{\"text\":\"南郑\",\"value\":\"610721\",\"children\":\"\"},{\"text\":\"城固\",\"value\":\"610722\",\"children\":\"\"},{\"text\":\"洋县\",\"value\":\"610723\",\"children\":\"\"},{\"text\":\"西乡\",\"value\":\"610724\",\"children\":\"\"},{\"text\":\"勉县\",\"value\":\"610725\",\"children\":\"\"},{\"text\":\"宁强\",\"value\":\"610726\",\"children\":\"\"},{\"text\":\"略阳\",\"value\":\"610727\",\"children\":\"\"},{\"text\":\"镇巴\",\"value\":\"610728\",\"children\":\"\"},{\"text\":\"留坝\",\"value\":\"610729\",\"children\":\"\"},{\"text\":\"佛坪\",\"value\":\"610730\",\"children\":\"\"}]},{\"text\":\"榆林\",\"value\":\"610800\",\"children\":[{\"text\":\"榆阳\",\"value\":\"610802\",\"children\":\"\"},{\"text\":\"神木\",\"value\":\"610821\",\"children\":\"\"},{\"text\":\"府谷\",\"value\":\"610822\",\"children\":\"\"},{\"text\":\"横山\",\"value\":\"610823\",\"children\":\"\"},{\"text\":\"靖边\",\"value\":\"610824\",\"children\":\"\"},{\"text\":\"定边\",\"value\":\"610825\",\"children\":\"\"},{\"text\":\"绥德\",\"value\":\"610826\",\"children\":\"\"},{\"text\":\"米脂\",\"value\":\"610827\",\"children\":\"\"},{\"text\":\"佳县\",\"value\":\"610828\",\"children\":\"\"},{\"text\":\"吴堡\",\"value\":\"610829\",\"children\":\"\"},{\"text\":\"清涧\",\"value\":\"610830\",\"children\":\"\"},{\"text\":\"子洲\",\"value\":\"610831\",\"children\":\"\"}]},{\"text\":\"安康\",\"value\":\"610900\",\"children\":[{\"text\":\"汉滨\",\"value\":\"610902\",\"children\":\"\"},{\"text\":\"汉阴\",\"value\":\"610921\",\"children\":\"\"},{\"text\":\"石泉\",\"value\":\"610922\",\"children\":\"\"},{\"text\":\"宁陕\",\"value\":\"610923\",\"children\":\"\"},{\"text\":\"紫阳\",\"value\":\"610924\",\"children\":\"\"},{\"text\":\"岚皋\",\"value\":\"610925\",\"children\":\"\"},{\"text\":\"平利\",\"value\":\"610926\",\"children\":\"\"},{\"text\":\"镇坪\",\"value\":\"610927\",\"children\":\"\"},{\"text\":\"旬阳\",\"value\":\"610928\",\"children\":\"\"},{\"text\":\"白河\",\"value\":\"610929\",\"children\":\"\"}]},{\"text\":\"商洛\",\"value\":\"611000\",\"children\":[{\"text\":\"商州\",\"value\":\"611002\",\"children\":\"\"},{\"text\":\"洛南\",\"value\":\"611021\",\"children\":\"\"},{\"text\":\"丹凤\",\"value\":\"611022\",\"children\":\"\"},{\"text\":\"商南\",\"value\":\"611023\",\"children\":\"\"},{\"text\":\"山阳\",\"value\":\"611024\",\"children\":\"\"},{\"text\":\"镇安\",\"value\":\"611025\",\"children\":\"\"},{\"text\":\"柞水\",\"value\":\"611026\",\"children\":\"\"}]}]},{\"text\":\"甘肃\",\"value\":\"620000\",\"children\":[{\"text\":\"兰州\",\"value\":\"620100\",\"children\":[{\"text\":\"城关\",\"value\":\"620102\",\"children\":\"\"},{\"text\":\"七里河\",\"value\":\"620103\",\"children\":\"\"},{\"text\":\"西固\",\"value\":\"620104\",\"children\":\"\"},{\"text\":\"安宁\",\"value\":\"620105\",\"children\":\"\"},{\"text\":\"红古\",\"value\":\"620111\",\"children\":\"\"},{\"text\":\"永登\",\"value\":\"620121\",\"children\":\"\"},{\"text\":\"皋兰\",\"value\":\"620122\",\"children\":\"\"},{\"text\":\"榆中\",\"value\":\"620123\",\"children\":\"\"}]},{\"text\":\"嘉峪关\",\"value\":\"620200\",\"children\":[{\"text\":\"嘉峪关\",\"value\":\"620200\",\"children\":\"\"}]},{\"text\":\"金昌\",\"value\":\"620300\",\"children\":[{\"text\":\"金川\",\"value\":\"620302\",\"children\":\"\"},{\"text\":\"永昌\",\"value\":\"620321\",\"children\":\"\"}]},{\"text\":\"白银\",\"value\":\"620400\",\"children\":[{\"text\":\"白银\",\"value\":\"620402\",\"children\":\"\"},{\"text\":\"平川\",\"value\":\"620403\",\"children\":\"\"},{\"text\":\"靖远\",\"value\":\"620421\",\"children\":\"\"},{\"text\":\"会宁\",\"value\":\"620422\",\"children\":\"\"},{\"text\":\"景泰\",\"value\":\"620423\",\"children\":\"\"}]},{\"text\":\"天水\",\"value\":\"620500\",\"children\":[{\"text\":\"秦州\",\"value\":\"620502\",\"children\":\"\"},{\"text\":\"麦积\",\"value\":\"620503\",\"children\":\"\"},{\"text\":\"清水\",\"value\":\"620521\",\"children\":\"\"},{\"text\":\"秦安\",\"value\":\"620522\",\"children\":\"\"},{\"text\":\"甘谷\",\"value\":\"620523\",\"children\":\"\"},{\"text\":\"武山\",\"value\":\"620524\",\"children\":\"\"},{\"text\":\"张家川\",\"value\":\"620525\",\"children\":\"\"}]},{\"text\":\"武威\",\"value\":\"620600\",\"children\":[{\"text\":\"凉州\",\"value\":\"620602\",\"children\":\"\"},{\"text\":\"民勤\",\"value\":\"620621\",\"children\":\"\"},{\"text\":\"古浪\",\"value\":\"620622\",\"children\":\"\"},{\"text\":\"天祝\",\"value\":\"620623\",\"children\":\"\"}]},{\"text\":\"张掖\",\"value\":\"620700\",\"children\":[{\"text\":\"甘州\",\"value\":\"620702\",\"children\":\"\"},{\"text\":\"肃南\",\"value\":\"620721\",\"children\":\"\"},{\"text\":\"民乐\",\"value\":\"620722\",\"children\":\"\"},{\"text\":\"临泽\",\"value\":\"620723\",\"children\":\"\"},{\"text\":\"高台\",\"value\":\"620724\",\"children\":\"\"},{\"text\":\"山丹\",\"value\":\"620725\",\"children\":\"\"}]},{\"text\":\"平凉\",\"value\":\"620800\",\"children\":[{\"text\":\"崆峒\",\"value\":\"620802\",\"children\":\"\"},{\"text\":\"泾川\",\"value\":\"620821\",\"children\":\"\"},{\"text\":\"灵台\",\"value\":\"620822\",\"children\":\"\"},{\"text\":\"崇信\",\"value\":\"620823\",\"children\":\"\"},{\"text\":\"华亭\",\"value\":\"620824\",\"children\":\"\"},{\"text\":\"庄浪\",\"value\":\"620825\",\"children\":\"\"},{\"text\":\"静宁\",\"value\":\"620826\",\"children\":\"\"}]},{\"text\":\"酒泉\",\"value\":\"620900\",\"children\":[{\"text\":\"肃州\",\"value\":\"620902\",\"children\":\"\"},{\"text\":\"金塔\",\"value\":\"620921\",\"children\":\"\"},{\"text\":\"瓜州\",\"value\":\"620922\",\"children\":\"\"},{\"text\":\"肃北\",\"value\":\"620923\",\"children\":\"\"},{\"text\":\"阿克塞\",\"value\":\"620924\",\"children\":\"\"},{\"text\":\"玉门\",\"value\":\"620981\",\"children\":\"\"},{\"text\":\"敦煌\",\"value\":\"620982\",\"children\":\"\"}]},{\"text\":\"庆阳\",\"value\":\"621000\",\"children\":[{\"text\":\"西峰\",\"value\":\"621002\",\"children\":\"\"},{\"text\":\"庆城\",\"value\":\"621021\",\"children\":\"\"},{\"text\":\"环县\",\"value\":\"621022\",\"children\":\"\"},{\"text\":\"华池\",\"value\":\"621023\",\"children\":\"\"},{\"text\":\"合水\",\"value\":\"621024\",\"children\":\"\"},{\"text\":\"正宁\",\"value\":\"621025\",\"children\":\"\"},{\"text\":\"宁县\",\"value\":\"621026\",\"children\":\"\"},{\"text\":\"镇原\",\"value\":\"621027\",\"children\":\"\"}]},{\"text\":\"定西\",\"value\":\"621100\",\"children\":[{\"text\":\"安定\",\"value\":\"621102\",\"children\":\"\"},{\"text\":\"通渭\",\"value\":\"621121\",\"children\":\"\"},{\"text\":\"陇西\",\"value\":\"621122\",\"children\":\"\"},{\"text\":\"渭源\",\"value\":\"621123\",\"children\":\"\"},{\"text\":\"临洮\",\"value\":\"621124\",\"children\":\"\"},{\"text\":\"漳县\",\"value\":\"621125\",\"children\":\"\"},{\"text\":\"岷县\",\"value\":\"621126\",\"children\":\"\"}]},{\"text\":\"陇南\",\"value\":\"621200\",\"children\":[{\"text\":\"武都\",\"value\":\"621202\",\"children\":\"\"},{\"text\":\"成县\",\"value\":\"621221\",\"children\":\"\"},{\"text\":\"文县\",\"value\":\"621222\",\"children\":\"\"},{\"text\":\"宕昌\",\"value\":\"621223\",\"children\":\"\"},{\"text\":\"康县\",\"value\":\"621224\",\"children\":\"\"},{\"text\":\"西和\",\"value\":\"621225\",\"children\":\"\"},{\"text\":\"礼县\",\"value\":\"621226\",\"children\":\"\"},{\"text\":\"徽县\",\"value\":\"621227\",\"children\":\"\"},{\"text\":\"两当\",\"value\":\"621228\",\"children\":\"\"}]},{\"text\":\"临夏\",\"value\":\"622900\",\"children\":[{\"text\":\"临夏市\",\"value\":\"622901\",\"children\":\"\"},{\"text\":\"临夏县\",\"value\":\"622921\",\"children\":\"\"},{\"text\":\"康乐\",\"value\":\"622922\",\"children\":\"\"},{\"text\":\"永靖\",\"value\":\"622923\",\"children\":\"\"},{\"text\":\"广河\",\"value\":\"622924\",\"children\":\"\"},{\"text\":\"和政\",\"value\":\"622925\",\"children\":\"\"},{\"text\":\"东乡\",\"value\":\"622926\",\"children\":\"\"},{\"text\":\"积石山\",\"value\":\"622927\",\"children\":\"\"}]},{\"text\":\"甘南\",\"value\":\"623000\",\"children\":[{\"text\":\"合作\",\"value\":\"623001\",\"children\":\"\"},{\"text\":\"临潭\",\"value\":\"623021\",\"children\":\"\"},{\"text\":\"卓尼\",\"value\":\"623022\",\"children\":\"\"},{\"text\":\"舟曲\",\"value\":\"623023\",\"children\":\"\"},{\"text\":\"迭部\",\"value\":\"623024\",\"children\":\"\"},{\"text\":\"玛曲\",\"value\":\"623025\",\"children\":\"\"},{\"text\":\"碌曲\",\"value\":\"623026\",\"children\":\"\"},{\"text\":\"夏河\",\"value\":\"623027\",\"children\":\"\"}]}]},{\"text\":\"青海\",\"value\":\"630000\",\"children\":[{\"text\":\"西宁\",\"value\":\"630100\",\"children\":[{\"text\":\"城东\",\"value\":\"630102\",\"children\":\"\"},{\"text\":\"城中\",\"value\":\"630103\",\"children\":\"\"},{\"text\":\"城西\",\"value\":\"630104\",\"children\":\"\"},{\"text\":\"城北\",\"value\":\"630105\",\"children\":\"\"},{\"text\":\"大通\",\"value\":\"630121\",\"children\":\"\"},{\"text\":\"湟中\",\"value\":\"630122\",\"children\":\"\"},{\"text\":\"湟源\",\"value\":\"630123\",\"children\":\"\"}]},{\"text\":\"海东\",\"value\":\"632100\",\"children\":[{\"text\":\"平安\",\"value\":\"632121\",\"children\":\"\"},{\"text\":\"民和\",\"value\":\"632122\",\"children\":\"\"},{\"text\":\"乐都\",\"value\":\"632123\",\"children\":\"\"},{\"text\":\"互助\",\"value\":\"632126\",\"children\":\"\"},{\"text\":\"化隆\",\"value\":\"632127\",\"children\":\"\"},{\"text\":\"循化\",\"value\":\"632128\",\"children\":\"\"}]},{\"text\":\"海北\",\"value\":\"632200\",\"children\":[{\"text\":\"门源\",\"value\":\"632221\",\"children\":\"\"},{\"text\":\"祁连\",\"value\":\"632222\",\"children\":\"\"},{\"text\":\"海晏\",\"value\":\"632223\",\"children\":\"\"},{\"text\":\"刚察\",\"value\":\"632224\",\"children\":\"\"}]},{\"text\":\"黄南\",\"value\":\"632300\",\"children\":[{\"text\":\"同仁\",\"value\":\"632321\",\"children\":\"\"},{\"text\":\"尖扎\",\"value\":\"632322\",\"children\":\"\"},{\"text\":\"泽库\",\"value\":\"632323\",\"children\":\"\"},{\"text\":\"河南\",\"value\":\"632324\",\"children\":\"\"}]},{\"text\":\"海南藏族\",\"value\":\"632500\",\"children\":[{\"text\":\"共和\",\"value\":\"632521\",\"children\":\"\"},{\"text\":\"同德\",\"value\":\"632522\",\"children\":\"\"},{\"text\":\"贵德\",\"value\":\"632523\",\"children\":\"\"},{\"text\":\"兴海\",\"value\":\"632524\",\"children\":\"\"},{\"text\":\"贵南\",\"value\":\"632525\",\"children\":\"\"}]},{\"text\":\"果洛\",\"value\":\"632600\",\"children\":[{\"text\":\"玛沁\",\"value\":\"632621\",\"children\":\"\"},{\"text\":\"班玛\",\"value\":\"632622\",\"children\":\"\"},{\"text\":\"甘德\",\"value\":\"632623\",\"children\":\"\"},{\"text\":\"达日\",\"value\":\"632624\",\"children\":\"\"},{\"text\":\"久治\",\"value\":\"632625\",\"children\":\"\"},{\"text\":\"玛多\",\"value\":\"632626\",\"children\":\"\"}]},{\"text\":\"玉树\",\"value\":\"632700\",\"children\":[{\"text\":\"玉树\",\"value\":\"632721\",\"children\":\"\"},{\"text\":\"杂多\",\"value\":\"632722\",\"children\":\"\"},{\"text\":\"称多\",\"value\":\"632723\",\"children\":\"\"},{\"text\":\"治多\",\"value\":\"632724\",\"children\":\"\"},{\"text\":\"囊谦\",\"value\":\"632725\",\"children\":\"\"},{\"text\":\"曲麻莱\",\"value\":\"632726\",\"children\":\"\"}]},{\"text\":\"海西\",\"value\":\"632800\",\"children\":[{\"text\":\"格尔木\",\"value\":\"632801\",\"children\":\"\"},{\"text\":\"德令哈\",\"value\":\"632802\",\"children\":\"\"},{\"text\":\"乌兰\",\"value\":\"632821\",\"children\":\"\"},{\"text\":\"都兰\",\"value\":\"632822\",\"children\":\"\"},{\"text\":\"天峻\",\"value\":\"632823\",\"children\":\"\"}]}]},{\"text\":\"宁夏\",\"value\":\"640000\",\"children\":[{\"text\":\"银川\",\"value\":\"640100\",\"children\":[{\"text\":\"兴庆\",\"value\":\"640104\",\"children\":\"\"},{\"text\":\"西夏\",\"value\":\"640105\",\"children\":\"\"},{\"text\":\"金凤\",\"value\":\"640106\",\"children\":\"\"},{\"text\":\"永宁\",\"value\":\"640121\",\"children\":\"\"},{\"text\":\"贺兰\",\"value\":\"640122\",\"children\":\"\"},{\"text\":\"灵武\",\"value\":\"640181\",\"children\":\"\"}]},{\"text\":\"石嘴山\",\"value\":\"640200\",\"children\":[{\"text\":\"大武口\",\"value\":\"640202\",\"children\":\"\"},{\"text\":\"惠农\",\"value\":\"640205\",\"children\":\"\"},{\"text\":\"平罗\",\"value\":\"640221\",\"children\":\"\"}]},{\"text\":\"吴忠\",\"value\":\"640300\",\"children\":[{\"text\":\"利通\",\"value\":\"640302\",\"children\":\"\"},{\"text\":\"红寺堡\",\"value\":\"640303\",\"children\":\"\"},{\"text\":\"盐池\",\"value\":\"640323\",\"children\":\"\"},{\"text\":\"同心\",\"value\":\"640324\",\"children\":\"\"},{\"text\":\"青铜峡\",\"value\":\"640381\",\"children\":\"\"}]},{\"text\":\"固原\",\"value\":\"640400\",\"children\":[{\"text\":\"原州\",\"value\":\"640402\",\"children\":\"\"},{\"text\":\"西吉\",\"value\":\"640422\",\"children\":\"\"},{\"text\":\"隆德\",\"value\":\"640423\",\"children\":\"\"},{\"text\":\"泾源\",\"value\":\"640424\",\"children\":\"\"},{\"text\":\"彭阳\",\"value\":\"640425\",\"children\":\"\"}]},{\"text\":\"中卫\",\"value\":\"640500\",\"children\":[{\"text\":\"沙坡头\",\"value\":\"640502\",\"children\":\"\"},{\"text\":\"中宁\",\"value\":\"640521\",\"children\":\"\"},{\"text\":\"海原\",\"value\":\"640522\",\"children\":\"\"}]}]},{\"text\":\"新疆\",\"value\":\"650000\",\"children\":[{\"text\":\"乌鲁木齐\",\"value\":\"650100\",\"children\":[{\"text\":\"天山\",\"value\":\"650102\",\"children\":\"\"},{\"text\":\"沙依巴克\",\"value\":\"650103\",\"children\":\"\"},{\"text\":\"新市\",\"value\":\"650104\",\"children\":\"\"},{\"text\":\"水磨沟\",\"value\":\"650105\",\"children\":\"\"},{\"text\":\"头屯河\",\"value\":\"650106\",\"children\":\"\"},{\"text\":\"达坂城\",\"value\":\"650107\",\"children\":\"\"},{\"text\":\"米东\",\"value\":\"650109\",\"children\":\"\"},{\"text\":\"乌鲁木齐\",\"value\":\"650121\",\"children\":\"\"}]},{\"text\":\"克拉玛依\",\"value\":\"650200\",\"children\":[{\"text\":\"独山子\",\"value\":\"650202\",\"children\":\"\"},{\"text\":\"克拉玛依\",\"value\":\"650203\",\"children\":\"\"},{\"text\":\"白碱滩\",\"value\":\"650204\",\"children\":\"\"},{\"text\":\"乌尔禾\",\"value\":\"650205\",\"children\":\"\"}]},{\"text\":\"吐鲁番\",\"value\":\"652100\",\"children\":[{\"text\":\"高昌\",\"value\":\"652101\",\"children\":\"\"},{\"text\":\"鄯善\",\"value\":\"652122\",\"children\":\"\"},{\"text\":\"托克逊\",\"value\":\"652123\",\"children\":\"\"}]},{\"text\":\"哈密\",\"value\":\"652200\",\"children\":[{\"text\":\"哈密\",\"value\":\"652201\",\"children\":\"\"},{\"text\":\"巴里坤\",\"value\":\"652222\",\"children\":\"\"},{\"text\":\"伊吾\",\"value\":\"652223\",\"children\":\"\"}]},{\"text\":\"昌吉\",\"value\":\"652300\",\"children\":[{\"text\":\"昌吉\",\"value\":\"652301\",\"children\":\"\"},{\"text\":\"阜康\",\"value\":\"652302\",\"children\":\"\"},{\"text\":\"呼图壁\",\"value\":\"652323\",\"children\":\"\"},{\"text\":\"玛纳斯\",\"value\":\"652324\",\"children\":\"\"},{\"text\":\"奇台\",\"value\":\"652325\",\"children\":\"\"},{\"text\":\"吉木萨尔\",\"value\":\"652327\",\"children\":\"\"},{\"text\":\"木垒\",\"value\":\"652328\",\"children\":\"\"}]},{\"text\":\"博尔塔拉\",\"value\":\"652700\",\"children\":[{\"text\":\"博乐\",\"value\":\"652701\",\"children\":\"\"},{\"text\":\"阿拉山口\",\"value\":\"652702\",\"children\":\"\"},{\"text\":\"精河\",\"value\":\"652722\",\"children\":\"\"},{\"text\":\"温泉\",\"value\":\"652723\",\"children\":\"\"}]},{\"text\":\"巴音郭楞\",\"value\":\"652800\",\"children\":[{\"text\":\"库尔勒\",\"value\":\"652801\",\"children\":\"\"},{\"text\":\"轮台\",\"value\":\"652822\",\"children\":\"\"},{\"text\":\"尉犁\",\"value\":\"652823\",\"children\":\"\"},{\"text\":\"若羌\",\"value\":\"652824\",\"children\":\"\"},{\"text\":\"且末\",\"value\":\"652825\",\"children\":\"\"},{\"text\":\"焉耆\",\"value\":\"652826\",\"children\":\"\"},{\"text\":\"和静\",\"value\":\"652827\",\"children\":\"\"},{\"text\":\"和硕\",\"value\":\"652828\",\"children\":\"\"},{\"text\":\"博湖\",\"value\":\"652829\",\"children\":\"\"}]},{\"text\":\"阿克苏\",\"value\":\"652900\",\"children\":[{\"text\":\"阿克苏\",\"value\":\"652901\",\"children\":\"\"},{\"text\":\"温宿\",\"value\":\"652922\",\"children\":\"\"},{\"text\":\"库车\",\"value\":\"652923\",\"children\":\"\"},{\"text\":\"沙雅\",\"value\":\"652924\",\"children\":\"\"},{\"text\":\"新和\",\"value\":\"652925\",\"children\":\"\"},{\"text\":\"拜城\",\"value\":\"652926\",\"children\":\"\"},{\"text\":\"乌什\",\"value\":\"652927\",\"children\":\"\"},{\"text\":\"阿瓦提\",\"value\":\"652928\",\"children\":\"\"},{\"text\":\"柯坪\",\"value\":\"652929\",\"children\":\"\"}]},{\"text\":\"克孜勒苏柯尔克孜\",\"value\":\"653000\",\"children\":[{\"text\":\"阿图什\",\"value\":\"653001\",\"children\":\"\"},{\"text\":\"阿克陶\",\"value\":\"653022\",\"children\":\"\"},{\"text\":\"阿合奇\",\"value\":\"653023\",\"children\":\"\"},{\"text\":\"乌恰\",\"value\":\"653024\",\"children\":\"\"}]},{\"text\":\"喀什\",\"value\":\"653100\",\"children\":[{\"text\":\"喀什\",\"value\":\"653101\",\"children\":\"\"},{\"text\":\"疏附\",\"value\":\"653121\",\"children\":\"\"},{\"text\":\"疏勒\",\"value\":\"653122\",\"children\":\"\"},{\"text\":\"英吉沙\",\"value\":\"653123\",\"children\":\"\"},{\"text\":\"泽普\",\"value\":\"653124\",\"children\":\"\"},{\"text\":\"莎车\",\"value\":\"653125\",\"children\":\"\"},{\"text\":\"叶城\",\"value\":\"653126\",\"children\":\"\"},{\"text\":\"麦盖提\",\"value\":\"653127\",\"children\":\"\"},{\"text\":\"岳普湖\",\"value\":\"653128\",\"children\":\"\"},{\"text\":\"伽师\",\"value\":\"653129\",\"children\":\"\"},{\"text\":\"巴楚\",\"value\":\"653130\",\"children\":\"\"},{\"text\":\"塔什库尔干\",\"value\":\"653131\",\"children\":\"\"}]},{\"text\":\"和田\",\"value\":\"653200\",\"children\":[{\"text\":\"和田市\",\"value\":\"653201\",\"children\":\"\"},{\"text\":\"和田县\",\"value\":\"653221\",\"children\":\"\"},{\"text\":\"墨玉\",\"value\":\"653222\",\"children\":\"\"},{\"text\":\"皮山\",\"value\":\"653223\",\"children\":\"\"},{\"text\":\"洛浦\",\"value\":\"653224\",\"children\":\"\"},{\"text\":\"策勒\",\"value\":\"653225\",\"children\":\"\"},{\"text\":\"于田\",\"value\":\"653226\",\"children\":\"\"},{\"text\":\"民丰\",\"value\":\"653227\",\"children\":\"\"}]},{\"text\":\"伊犁\",\"value\":\"654000\",\"children\":[{\"text\":\"伊宁市\",\"value\":\"654002\",\"children\":\"\"},{\"text\":\"奎屯\",\"value\":\"654003\",\"children\":\"\"},{\"text\":\"伊宁县\",\"value\":\"654021\",\"children\":\"\"},{\"text\":\"察布查尔\",\"value\":\"654022\",\"children\":\"\"},{\"text\":\"霍城\",\"value\":\"654023\",\"children\":\"\"},{\"text\":\"巩留\",\"value\":\"654024\",\"children\":\"\"},{\"text\":\"新源\",\"value\":\"654025\",\"children\":\"\"},{\"text\":\"昭苏\",\"value\":\"654026\",\"children\":\"\"},{\"text\":\"特克斯\",\"value\":\"654027\",\"children\":\"\"},{\"text\":\"尼勒克\",\"value\":\"654028\",\"children\":\"\"}]},{\"text\":\"塔城\",\"value\":\"654200\",\"children\":[{\"text\":\"塔城\",\"value\":\"654201\",\"children\":\"\"},{\"text\":\"乌苏\",\"value\":\"654202\",\"children\":\"\"},{\"text\":\"额敏\",\"value\":\"654221\",\"children\":\"\"},{\"text\":\"沙湾\",\"value\":\"654223\",\"children\":\"\"},{\"text\":\"托里\",\"value\":\"654224\",\"children\":\"\"},{\"text\":\"裕民\",\"value\":\"654225\",\"children\":\"\"},{\"text\":\"和布克赛尔\",\"value\":\"654226\",\"children\":\"\"}]},{\"text\":\"阿勒泰\",\"value\":\"654300\",\"children\":[{\"text\":\"阿勒泰\",\"value\":\"654301\",\"children\":\"\"},{\"text\":\"布尔津\",\"value\":\"654321\",\"children\":\"\"},{\"text\":\"富蕴\",\"value\":\"654322\",\"children\":\"\"},{\"text\":\"福海\",\"value\":\"654323\",\"children\":\"\"},{\"text\":\"哈巴河\",\"value\":\"654324\",\"children\":\"\"},{\"text\":\"青河\",\"value\":\"654325\",\"children\":\"\"},{\"text\":\"吉木乃\",\"value\":\"654326\",\"children\":\"\"}]},{\"text\":\"石河子\",\"value\":\"659001\",\"children\":[{\"text\":\"石河子\",\"value\":\"659001\",\"children\":\"\"}]},{\"text\":\"阿拉尔\",\"value\":\"659002\",\"children\":[{\"text\":\"阿拉尔\",\"value\":\"659002\",\"children\":\"\"}]},{\"text\":\"图木舒克\",\"value\":\"659003\",\"children\":[{\"text\":\"图木舒克\",\"value\":\"659003\",\"children\":\"\"}]},{\"text\":\"五家渠\",\"value\":\"659004\",\"children\":[{\"text\":\"五家渠\",\"value\":\"659004\",\"children\":\"\"}]}]},{\"text\":\"台湾\",\"value\":\"710000\",\"children\":[{\"text\":\"台北\",\"value\":\"710100\",\"children\":[{\"text\":\"中正\",\"value\":\"710101\",\"children\":\"\"},{\"text\":\"大同\",\"value\":\"710102\",\"children\":\"\"},{\"text\":\"中山\",\"value\":\"710103\",\"children\":\"\"},{\"text\":\"松山\",\"value\":\"710104\",\"children\":\"\"},{\"text\":\"大安\",\"value\":\"710105\",\"children\":\"\"},{\"text\":\"万华\",\"value\":\"710106\",\"children\":\"\"},{\"text\":\"信义\",\"value\":\"710107\",\"children\":\"\"},{\"text\":\"士林\",\"value\":\"710108\",\"children\":\"\"},{\"text\":\"北投\",\"value\":\"710109\",\"children\":\"\"},{\"text\":\"内湖\",\"value\":\"710110\",\"children\":\"\"},{\"text\":\"南港\",\"value\":\"710111\",\"children\":\"\"},{\"text\":\"文山\",\"value\":\"710112\",\"children\":\"\"}]},{\"text\":\"高雄\",\"value\":\"710200\",\"children\":[{\"text\":\"新兴\",\"value\":\"710201\",\"children\":\"\"},{\"text\":\"前金\",\"value\":\"710202\",\"children\":\"\"},{\"text\":\"芩雅\",\"value\":\"710203\",\"children\":\"\"},{\"text\":\"盐埕\",\"value\":\"710204\",\"children\":\"\"},{\"text\":\"鼓山\",\"value\":\"710205\",\"children\":\"\"},{\"text\":\"旗津\",\"value\":\"710206\",\"children\":\"\"},{\"text\":\"前镇\",\"value\":\"710207\",\"children\":\"\"},{\"text\":\"三民\",\"value\":\"710208\",\"children\":\"\"},{\"text\":\"左营\",\"value\":\"710209\",\"children\":\"\"},{\"text\":\"楠梓\",\"value\":\"710210\",\"children\":\"\"},{\"text\":\"小港\",\"value\":\"710211\",\"children\":\"\"},{\"text\":\"苓雅\",\"value\":\"710241\",\"children\":\"\"},{\"text\":\"仁武\",\"value\":\"710242\",\"children\":\"\"},{\"text\":\"大社\",\"value\":\"710243\",\"children\":\"\"},{\"text\":\"冈山\",\"value\":\"710244\",\"children\":\"\"},{\"text\":\"路竹\",\"value\":\"710245\",\"children\":\"\"},{\"text\":\"阿莲\",\"value\":\"710246\",\"children\":\"\"},{\"text\":\"田寮\",\"value\":\"710247\",\"children\":\"\"},{\"text\":\"燕巢\",\"value\":\"710248\",\"children\":\"\"},{\"text\":\"桥头\",\"value\":\"710249\",\"children\":\"\"},{\"text\":\"梓官\",\"value\":\"710250\",\"children\":\"\"},{\"text\":\"弥陀\",\"value\":\"710251\",\"children\":\"\"},{\"text\":\"永安\",\"value\":\"710252\",\"children\":\"\"},{\"text\":\"湖内\",\"value\":\"710253\",\"children\":\"\"},{\"text\":\"凤山\",\"value\":\"710254\",\"children\":\"\"},{\"text\":\"大寮\",\"value\":\"710255\",\"children\":\"\"},{\"text\":\"林园\",\"value\":\"710256\",\"children\":\"\"},{\"text\":\"鸟松\",\"value\":\"710257\",\"children\":\"\"},{\"text\":\"大树\",\"value\":\"710258\",\"children\":\"\"},{\"text\":\"旗山\",\"value\":\"710259\",\"children\":\"\"},{\"text\":\"美浓\",\"value\":\"710260\",\"children\":\"\"},{\"text\":\"六龟\",\"value\":\"710261\",\"children\":\"\"},{\"text\":\"内门\",\"value\":\"710262\",\"children\":\"\"},{\"text\":\"杉林\",\"value\":\"710263\",\"children\":\"\"},{\"text\":\"甲仙\",\"value\":\"710264\",\"children\":\"\"},{\"text\":\"桃源\",\"value\":\"710265\",\"children\":\"\"},{\"text\":\"那玛夏\",\"value\":\"710266\",\"children\":\"\"},{\"text\":\"茂林\",\"value\":\"710267\",\"children\":\"\"},{\"text\":\"茄萣\",\"value\":\"710268\",\"children\":\"\"}]},{\"text\":\"台南\",\"value\":\"710300\",\"children\":[{\"text\":\"中西\",\"value\":\"710301\",\"children\":\"\"},{\"text\":\"东区\",\"value\":\"710302\",\"children\":\"\"},{\"text\":\"南区\",\"value\":\"710303\",\"children\":\"\"},{\"text\":\"北区\",\"value\":\"710304\",\"children\":\"\"},{\"text\":\"安平\",\"value\":\"710305\",\"children\":\"\"},{\"text\":\"安南\",\"value\":\"710306\",\"children\":\"\"},{\"text\":\"永康\",\"value\":\"710339\",\"children\":\"\"},{\"text\":\"归仁\",\"value\":\"710340\",\"children\":\"\"},{\"text\":\"新化\",\"value\":\"710341\",\"children\":\"\"},{\"text\":\"左镇\",\"value\":\"710342\",\"children\":\"\"},{\"text\":\"玉井\",\"value\":\"710343\",\"children\":\"\"},{\"text\":\"楠西\",\"value\":\"710344\",\"children\":\"\"},{\"text\":\"南化\",\"value\":\"710345\",\"children\":\"\"},{\"text\":\"仁德\",\"value\":\"710346\",\"children\":\"\"},{\"text\":\"关庙\",\"value\":\"710347\",\"children\":\"\"},{\"text\":\"龙崎\",\"value\":\"710348\",\"children\":\"\"},{\"text\":\"官田\",\"value\":\"710349\",\"children\":\"\"},{\"text\":\"麻豆\",\"value\":\"710350\",\"children\":\"\"},{\"text\":\"佳里\",\"value\":\"710351\",\"children\":\"\"},{\"text\":\"西港\",\"value\":\"710352\",\"children\":\"\"},{\"text\":\"七股\",\"value\":\"710353\",\"children\":\"\"},{\"text\":\"将军\",\"value\":\"710354\",\"children\":\"\"},{\"text\":\"学甲\",\"value\":\"710355\",\"children\":\"\"},{\"text\":\"北门\",\"value\":\"710356\",\"children\":\"\"},{\"text\":\"新营\",\"value\":\"710357\",\"children\":\"\"},{\"text\":\"后壁\",\"value\":\"710358\",\"children\":\"\"},{\"text\":\"白河\",\"value\":\"710359\",\"children\":\"\"},{\"text\":\"东山\",\"value\":\"710360\",\"children\":\"\"},{\"text\":\"六甲\",\"value\":\"710361\",\"children\":\"\"},{\"text\":\"下营\",\"value\":\"710362\",\"children\":\"\"},{\"text\":\"柳营\",\"value\":\"710363\",\"children\":\"\"},{\"text\":\"盐水\",\"value\":\"710364\",\"children\":\"\"},{\"text\":\"善化\",\"value\":\"710365\",\"children\":\"\"},{\"text\":\"大内\",\"value\":\"710366\",\"children\":\"\"},{\"text\":\"山上\",\"value\":\"710367\",\"children\":\"\"},{\"text\":\"新市\",\"value\":\"710368\",\"children\":\"\"},{\"text\":\"安定\",\"value\":\"710369\",\"children\":\"\"}]},{\"text\":\"台中\",\"value\":\"710400\",\"children\":[{\"text\":\"中区\",\"value\":\"710401\",\"children\":\"\"},{\"text\":\"东区\",\"value\":\"710402\",\"children\":\"\"},{\"text\":\"南区\",\"value\":\"710403\",\"children\":\"\"},{\"text\":\"西区\",\"value\":\"710404\",\"children\":\"\"},{\"text\":\"北区\",\"value\":\"710405\",\"children\":\"\"},{\"text\":\"北屯\",\"value\":\"710406\",\"children\":\"\"},{\"text\":\"西屯\",\"value\":\"710407\",\"children\":\"\"},{\"text\":\"南屯\",\"value\":\"710408\",\"children\":\"\"},{\"text\":\"太平\",\"value\":\"710431\",\"children\":\"\"},{\"text\":\"大里\",\"value\":\"710432\",\"children\":\"\"},{\"text\":\"雾峰\",\"value\":\"710433\",\"children\":\"\"},{\"text\":\"乌日\",\"value\":\"710434\",\"children\":\"\"},{\"text\":\"丰原\",\"value\":\"710435\",\"children\":\"\"},{\"text\":\"后里\",\"value\":\"710436\",\"children\":\"\"},{\"text\":\"石冈\",\"value\":\"710437\",\"children\":\"\"},{\"text\":\"东势\",\"value\":\"710438\",\"children\":\"\"},{\"text\":\"和平\",\"value\":\"710439\",\"children\":\"\"},{\"text\":\"新社\",\"value\":\"710440\",\"children\":\"\"},{\"text\":\"潭子\",\"value\":\"710441\",\"children\":\"\"},{\"text\":\"大雅\",\"value\":\"710442\",\"children\":\"\"},{\"text\":\"神冈\",\"value\":\"710443\",\"children\":\"\"},{\"text\":\"大肚\",\"value\":\"710444\",\"children\":\"\"},{\"text\":\"沙鹿\",\"value\":\"710445\",\"children\":\"\"},{\"text\":\"龙井\",\"value\":\"710446\",\"children\":\"\"},{\"text\":\"梧栖\",\"value\":\"710447\",\"children\":\"\"},{\"text\":\"清水\",\"value\":\"710448\",\"children\":\"\"},{\"text\":\"大甲\",\"value\":\"710449\",\"children\":\"\"},{\"text\":\"外埔\",\"value\":\"710450\",\"children\":\"\"},{\"text\":\"大安\",\"value\":\"710451\",\"children\":\"\"}]},{\"text\":\"金门\",\"value\":\"710500\",\"children\":[{\"text\":\"金沙\",\"value\":\"710507\",\"children\":\"\"},{\"text\":\"金湖\",\"value\":\"710508\",\"children\":\"\"},{\"text\":\"金宁\",\"value\":\"710509\",\"children\":\"\"},{\"text\":\"金城\",\"value\":\"710510\",\"children\":\"\"},{\"text\":\"烈屿\",\"value\":\"710511\",\"children\":\"\"},{\"text\":\"乌坵\",\"value\":\"710512\",\"children\":\"\"}]},{\"text\":\"南投\",\"value\":\"710600\",\"children\":[{\"text\":\"南投\",\"value\":\"710614\",\"children\":\"\"},{\"text\":\"中寮\",\"value\":\"710615\",\"children\":\"\"},{\"text\":\"草屯\",\"value\":\"710616\",\"children\":\"\"},{\"text\":\"国姓\",\"value\":\"710617\",\"children\":\"\"},{\"text\":\"埔里\",\"value\":\"710618\",\"children\":\"\"},{\"text\":\"仁爱\",\"value\":\"710619\",\"children\":\"\"},{\"text\":\"名间\",\"value\":\"710620\",\"children\":\"\"},{\"text\":\"集集\",\"value\":\"710621\",\"children\":\"\"},{\"text\":\"水里\",\"value\":\"710622\",\"children\":\"\"},{\"text\":\"鱼池\",\"value\":\"710623\",\"children\":\"\"},{\"text\":\"信义\",\"value\":\"710624\",\"children\":\"\"},{\"text\":\"竹山\",\"value\":\"710625\",\"children\":\"\"},{\"text\":\"鹿谷\",\"value\":\"710626\",\"children\":\"\"}]},{\"text\":\"基隆\",\"value\":\"710700\",\"children\":[{\"text\":\"仁爱\",\"value\":\"710701\",\"children\":\"\"},{\"text\":\"信义\",\"value\":\"710702\",\"children\":\"\"},{\"text\":\"中正\",\"value\":\"710703\",\"children\":\"\"},{\"text\":\"中山\",\"value\":\"710704\",\"children\":\"\"},{\"text\":\"安乐\",\"value\":\"710705\",\"children\":\"\"},{\"text\":\"暖暖\",\"value\":\"710706\",\"children\":\"\"},{\"text\":\"七堵\",\"value\":\"710707\",\"children\":\"\"}]},{\"text\":\"新竹\",\"value\":\"710800\",\"children\":[{\"text\":\"东区\",\"value\":\"710801\",\"children\":\"\"},{\"text\":\"北区\",\"value\":\"710802\",\"children\":\"\"},{\"text\":\"香山\",\"value\":\"710803\",\"children\":\"\"}]},{\"text\":\"嘉义\",\"value\":\"710900\",\"children\":[{\"text\":\"东区\",\"value\":\"710901\",\"children\":\"\"},{\"text\":\"西区\",\"value\":\"710902\",\"children\":\"\"}]},{\"text\":\"新北\",\"value\":\"711100\",\"children\":[{\"text\":\"万里\",\"value\":\"711130\",\"children\":\"\"},{\"text\":\"金山\",\"value\":\"711131\",\"children\":\"\"},{\"text\":\"板桥\",\"value\":\"711132\",\"children\":\"\"},{\"text\":\"汐止\",\"value\":\"711133\",\"children\":\"\"},{\"text\":\"深坑\",\"value\":\"711134\",\"children\":\"\"},{\"text\":\"石碇\",\"value\":\"711135\",\"children\":\"\"},{\"text\":\"瑞芳\",\"value\":\"711136\",\"children\":\"\"},{\"text\":\"平溪\",\"value\":\"711137\",\"children\":\"\"},{\"text\":\"双溪\",\"value\":\"711138\",\"children\":\"\"},{\"text\":\"贡寮\",\"value\":\"711139\",\"children\":\"\"},{\"text\":\"新店\",\"value\":\"711140\",\"children\":\"\"},{\"text\":\"坪林\",\"value\":\"711141\",\"children\":\"\"},{\"text\":\"乌来\",\"value\":\"711142\",\"children\":\"\"},{\"text\":\"永和\",\"value\":\"711143\",\"children\":\"\"},{\"text\":\"中和\",\"value\":\"711144\",\"children\":\"\"},{\"text\":\"土城\",\"value\":\"711145\",\"children\":\"\"},{\"text\":\"三峡\",\"value\":\"711146\",\"children\":\"\"},{\"text\":\"树林\",\"value\":\"711147\",\"children\":\"\"},{\"text\":\"莺歌\",\"value\":\"711148\",\"children\":\"\"},{\"text\":\"三重\",\"value\":\"711149\",\"children\":\"\"},{\"text\":\"新庄\",\"value\":\"711150\",\"children\":\"\"},{\"text\":\"泰山\",\"value\":\"711151\",\"children\":\"\"},{\"text\":\"林口\",\"value\":\"711152\",\"children\":\"\"},{\"text\":\"芦洲\",\"value\":\"711153\",\"children\":\"\"},{\"text\":\"五股\",\"value\":\"711154\",\"children\":\"\"},{\"text\":\"八里\",\"value\":\"711155\",\"children\":\"\"},{\"text\":\"淡水\",\"value\":\"711156\",\"children\":\"\"},{\"text\":\"三芝\",\"value\":\"711157\",\"children\":\"\"},{\"text\":\"石门\",\"value\":\"711158\",\"children\":\"\"}]},{\"text\":\"宜兰\",\"value\":\"711200\",\"children\":[{\"text\":\"宜兰\",\"value\":\"711214\",\"children\":\"\"},{\"text\":\"头城\",\"value\":\"711215\",\"children\":\"\"},{\"text\":\"礁溪\",\"value\":\"711216\",\"children\":\"\"},{\"text\":\"壮围\",\"value\":\"711217\",\"children\":\"\"},{\"text\":\"员山\",\"value\":\"711218\",\"children\":\"\"},{\"text\":\"罗东\",\"value\":\"711219\",\"children\":\"\"},{\"text\":\"三星\",\"value\":\"711220\",\"children\":\"\"},{\"text\":\"大同\",\"value\":\"711221\",\"children\":\"\"},{\"text\":\"五结\",\"value\":\"711222\",\"children\":\"\"},{\"text\":\"冬山\",\"value\":\"711223\",\"children\":\"\"},{\"text\":\"苏澳\",\"value\":\"711224\",\"children\":\"\"},{\"text\":\"南澳\",\"value\":\"711225\",\"children\":\"\"},{\"text\":\"钓鱼\",\"value\":\"711226\",\"children\":\"\"}]},{\"text\":\"新竹\",\"value\":\"711300\",\"children\":[{\"text\":\"竹北\",\"value\":\"711314\",\"children\":\"\"},{\"text\":\"湖口\",\"value\":\"711315\",\"children\":\"\"},{\"text\":\"新丰\",\"value\":\"711316\",\"children\":\"\"},{\"text\":\"新埔\",\"value\":\"711317\",\"children\":\"\"},{\"text\":\"关西\",\"value\":\"711318\",\"children\":\"\"},{\"text\":\"芎林\",\"value\":\"711319\",\"children\":\"\"},{\"text\":\"宝山\",\"value\":\"711320\",\"children\":\"\"},{\"text\":\"竹东\",\"value\":\"711321\",\"children\":\"\"},{\"text\":\"五峰\",\"value\":\"711322\",\"children\":\"\"},{\"text\":\"横山\",\"value\":\"711323\",\"children\":\"\"},{\"text\":\"尖石\",\"value\":\"711324\",\"children\":\"\"},{\"text\":\"北埔\",\"value\":\"711325\",\"children\":\"\"},{\"text\":\"峨眉\",\"value\":\"711326\",\"children\":\"\"}]},{\"text\":\"桃园\",\"value\":\"711400\",\"children\":[{\"text\":\"中坜\",\"value\":\"711414\",\"children\":\"\"},{\"text\":\"平镇\",\"value\":\"711415\",\"children\":\"\"},{\"text\":\"龙潭\",\"value\":\"711416\",\"children\":\"\"},{\"text\":\"杨梅\",\"value\":\"711417\",\"children\":\"\"},{\"text\":\"新屋\",\"value\":\"711418\",\"children\":\"\"},{\"text\":\"观音\",\"value\":\"711419\",\"children\":\"\"},{\"text\":\"桃园\",\"value\":\"711420\",\"children\":\"\"},{\"text\":\"龟山\",\"value\":\"711421\",\"children\":\"\"},{\"text\":\"八德\",\"value\":\"711422\",\"children\":\"\"},{\"text\":\"大溪\",\"value\":\"711423\",\"children\":\"\"},{\"text\":\"复兴\",\"value\":\"711424\",\"children\":\"\"},{\"text\":\"大园\",\"value\":\"711425\",\"children\":\"\"},{\"text\":\"芦竹\",\"value\":\"711426\",\"children\":\"\"}]},{\"text\":\"苗栗\",\"value\":\"711500\",\"children\":[{\"text\":\"竹南\",\"value\":\"711519\",\"children\":\"\"},{\"text\":\"头份\",\"value\":\"711520\",\"children\":\"\"},{\"text\":\"三湾\",\"value\":\"711521\",\"children\":\"\"},{\"text\":\"南庄\",\"value\":\"711522\",\"children\":\"\"},{\"text\":\"狮潭\",\"value\":\"711523\",\"children\":\"\"},{\"text\":\"后龙\",\"value\":\"711524\",\"children\":\"\"},{\"text\":\"通霄\",\"value\":\"711525\",\"children\":\"\"},{\"text\":\"苑里\",\"value\":\"711526\",\"children\":\"\"},{\"text\":\"苗栗\",\"value\":\"711527\",\"children\":\"\"},{\"text\":\"造桥\",\"value\":\"711528\",\"children\":\"\"},{\"text\":\"头屋\",\"value\":\"711529\",\"children\":\"\"},{\"text\":\"公馆\",\"value\":\"711530\",\"children\":\"\"},{\"text\":\"大湖\",\"value\":\"711531\",\"children\":\"\"},{\"text\":\"泰安\",\"value\":\"711532\",\"children\":\"\"},{\"text\":\"铜锣\",\"value\":\"711533\",\"children\":\"\"},{\"text\":\"三义\",\"value\":\"711534\",\"children\":\"\"},{\"text\":\"西湖\",\"value\":\"711535\",\"children\":\"\"},{\"text\":\"卓兰\",\"value\":\"711536\",\"children\":\"\"}]},{\"text\":\"彰化\",\"value\":\"711700\",\"children\":[{\"text\":\"彰化\",\"value\":\"711727\",\"children\":\"\"},{\"text\":\"芬园\",\"value\":\"711728\",\"children\":\"\"},{\"text\":\"花坛\",\"value\":\"711729\",\"children\":\"\"},{\"text\":\"秀水\",\"value\":\"711730\",\"children\":\"\"},{\"text\":\"鹿港\",\"value\":\"711731\",\"children\":\"\"},{\"text\":\"福兴\",\"value\":\"711732\",\"children\":\"\"},{\"text\":\"线西\",\"value\":\"711733\",\"children\":\"\"},{\"text\":\"和美\",\"value\":\"711734\",\"children\":\"\"},{\"text\":\"伸港\",\"value\":\"711735\",\"children\":\"\"},{\"text\":\"员林\",\"value\":\"711736\",\"children\":\"\"},{\"text\":\"社头\",\"value\":\"711737\",\"children\":\"\"},{\"text\":\"永靖\",\"value\":\"711738\",\"children\":\"\"},{\"text\":\"埔心\",\"value\":\"711739\",\"children\":\"\"},{\"text\":\"溪湖\",\"value\":\"711740\",\"children\":\"\"},{\"text\":\"大村\",\"value\":\"711741\",\"children\":\"\"},{\"text\":\"埔盐\",\"value\":\"711742\",\"children\":\"\"},{\"text\":\"田中\",\"value\":\"711743\",\"children\":\"\"},{\"text\":\"北斗\",\"value\":\"711744\",\"children\":\"\"},{\"text\":\"田尾\",\"value\":\"711745\",\"children\":\"\"},{\"text\":\"埤头\",\"value\":\"711746\",\"children\":\"\"},{\"text\":\"溪州\",\"value\":\"711747\",\"children\":\"\"},{\"text\":\"竹塘\",\"value\":\"711748\",\"children\":\"\"},{\"text\":\"二林\",\"value\":\"711749\",\"children\":\"\"},{\"text\":\"大城\",\"value\":\"711750\",\"children\":\"\"},{\"text\":\"芳苑\",\"value\":\"711751\",\"children\":\"\"},{\"text\":\"二水\",\"value\":\"711752\",\"children\":\"\"}]},{\"text\":\"嘉义\",\"value\":\"711900\",\"children\":[{\"text\":\"番路\",\"value\":\"711919\",\"children\":\"\"},{\"text\":\"梅山\",\"value\":\"711920\",\"children\":\"\"},{\"text\":\"竹崎\",\"value\":\"711921\",\"children\":\"\"},{\"text\":\"阿里山\",\"value\":\"711922\",\"children\":\"\"},{\"text\":\"中埔\",\"value\":\"711923\",\"children\":\"\"},{\"text\":\"大埔\",\"value\":\"711924\",\"children\":\"\"},{\"text\":\"水上\",\"value\":\"711925\",\"children\":\"\"},{\"text\":\"鹿草\",\"value\":\"711926\",\"children\":\"\"},{\"text\":\"太保\",\"value\":\"711927\",\"children\":\"\"},{\"text\":\"朴子\",\"value\":\"711928\",\"children\":\"\"},{\"text\":\"东石\",\"value\":\"711929\",\"children\":\"\"},{\"text\":\"六脚\",\"value\":\"711930\",\"children\":\"\"},{\"text\":\"新港\",\"value\":\"711931\",\"children\":\"\"},{\"text\":\"民雄\",\"value\":\"711932\",\"children\":\"\"},{\"text\":\"大林\",\"value\":\"711933\",\"children\":\"\"},{\"text\":\"溪口\",\"value\":\"711934\",\"children\":\"\"},{\"text\":\"义竹\",\"value\":\"711935\",\"children\":\"\"},{\"text\":\"布袋\",\"value\":\"711936\",\"children\":\"\"}]},{\"text\":\"云林\",\"value\":\"712100\",\"children\":[{\"text\":\"斗南\",\"value\":\"712121\",\"children\":\"\"},{\"text\":\"大埤\",\"value\":\"712122\",\"children\":\"\"},{\"text\":\"虎尾\",\"value\":\"712123\",\"children\":\"\"},{\"text\":\"土库\",\"value\":\"712124\",\"children\":\"\"},{\"text\":\"褒忠\",\"value\":\"712125\",\"children\":\"\"},{\"text\":\"东势\",\"value\":\"712126\",\"children\":\"\"},{\"text\":\"台西\",\"value\":\"712127\",\"children\":\"\"},{\"text\":\"仑背\",\"value\":\"712128\",\"children\":\"\"},{\"text\":\"麦寮\",\"value\":\"712129\",\"children\":\"\"},{\"text\":\"斗六\",\"value\":\"712130\",\"children\":\"\"},{\"text\":\"林内\",\"value\":\"712131\",\"children\":\"\"},{\"text\":\"古坑\",\"value\":\"712132\",\"children\":\"\"},{\"text\":\"莿桐\",\"value\":\"712133\",\"children\":\"\"},{\"text\":\"西螺\",\"value\":\"712134\",\"children\":\"\"},{\"text\":\"二仑\",\"value\":\"712135\",\"children\":\"\"},{\"text\":\"北港\",\"value\":\"712136\",\"children\":\"\"},{\"text\":\"水林\",\"value\":\"712137\",\"children\":\"\"},{\"text\":\"口湖\",\"value\":\"712138\",\"children\":\"\"},{\"text\":\"四湖\",\"value\":\"712139\",\"children\":\"\"},{\"text\":\"元长\",\"value\":\"712140\",\"children\":\"\"}]},{\"text\":\"屏东\",\"value\":\"712400\",\"children\":[{\"text\":\"屏东\",\"value\":\"712434\",\"children\":\"\"},{\"text\":\"三地门\",\"value\":\"712435\",\"children\":\"\"},{\"text\":\"雾台\",\"value\":\"712436\",\"children\":\"\"},{\"text\":\"玛家\",\"value\":\"712437\",\"children\":\"\"},{\"text\":\"九如\",\"value\":\"712438\",\"children\":\"\"},{\"text\":\"里港\",\"value\":\"712439\",\"children\":\"\"},{\"text\":\"高树\",\"value\":\"712440\",\"children\":\"\"},{\"text\":\"盐埔\",\"value\":\"712441\",\"children\":\"\"},{\"text\":\"长治\",\"value\":\"712442\",\"children\":\"\"},{\"text\":\"麟洛\",\"value\":\"712443\",\"children\":\"\"},{\"text\":\"竹田\",\"value\":\"712444\",\"children\":\"\"},{\"text\":\"内埔\",\"value\":\"712445\",\"children\":\"\"},{\"text\":\"万丹\",\"value\":\"712446\",\"children\":\"\"},{\"text\":\"潮州\",\"value\":\"712447\",\"children\":\"\"},{\"text\":\"泰武\",\"value\":\"712448\",\"children\":\"\"},{\"text\":\"来义\",\"value\":\"712449\",\"children\":\"\"},{\"text\":\"万峦\",\"value\":\"712450\",\"children\":\"\"},{\"text\":\"崁顶\",\"value\":\"712451\",\"children\":\"\"},{\"text\":\"新埤\",\"value\":\"712452\",\"children\":\"\"},{\"text\":\"南州\",\"value\":\"712453\",\"children\":\"\"},{\"text\":\"林边\",\"value\":\"712454\",\"children\":\"\"},{\"text\":\"东港\",\"value\":\"712455\",\"children\":\"\"},{\"text\":\"琉球\",\"value\":\"712456\",\"children\":\"\"},{\"text\":\"佳冬\",\"value\":\"712457\",\"children\":\"\"},{\"text\":\"新园\",\"value\":\"712458\",\"children\":\"\"},{\"text\":\"枋寮\",\"value\":\"712459\",\"children\":\"\"},{\"text\":\"枋山\",\"value\":\"712460\",\"children\":\"\"},{\"text\":\"春日\",\"value\":\"712461\",\"children\":\"\"},{\"text\":\"狮子\",\"value\":\"712462\",\"children\":\"\"},{\"text\":\"车城\",\"value\":\"712463\",\"children\":\"\"},{\"text\":\"牡丹\",\"value\":\"712464\",\"children\":\"\"},{\"text\":\"恒春\",\"value\":\"712465\",\"children\":\"\"},{\"text\":\"满州\",\"value\":\"712466\",\"children\":\"\"}]},{\"text\":\"台东\",\"value\":\"712500\",\"children\":[{\"text\":\"台东\",\"value\":\"712517\",\"children\":\"\"},{\"text\":\"绿岛\",\"value\":\"712518\",\"children\":\"\"},{\"text\":\"兰屿\",\"value\":\"712519\",\"children\":\"\"},{\"text\":\"延平\",\"value\":\"712520\",\"children\":\"\"},{\"text\":\"卑南\",\"value\":\"712521\",\"children\":\"\"},{\"text\":\"鹿野\",\"value\":\"712522\",\"children\":\"\"},{\"text\":\"关山\",\"value\":\"712523\",\"children\":\"\"},{\"text\":\"海端\",\"value\":\"712524\",\"children\":\"\"},{\"text\":\"池上\",\"value\":\"712525\",\"children\":\"\"},{\"text\":\"东河\",\"value\":\"712526\",\"children\":\"\"},{\"text\":\"成功\",\"value\":\"712527\",\"children\":\"\"},{\"text\":\"长滨\",\"value\":\"712528\",\"children\":\"\"},{\"text\":\"金峰\",\"value\":\"712529\",\"children\":\"\"},{\"text\":\"大武\",\"value\":\"712530\",\"children\":\"\"},{\"text\":\"达仁\",\"value\":\"712531\",\"children\":\"\"},{\"text\":\"太麻里\",\"value\":\"712532\",\"children\":\"\"}]},{\"text\":\"花莲\",\"value\":\"712600\",\"children\":[{\"text\":\"花莲\",\"value\":\"712615\",\"children\":\"\"},{\"text\":\"新城\",\"value\":\"712616\",\"children\":\"\"},{\"text\":\"太鲁\",\"value\":\"712617\",\"children\":\"\"},{\"text\":\"秀林\",\"value\":\"712618\",\"children\":\"\"},{\"text\":\"吉安\",\"value\":\"712619\",\"children\":\"\"},{\"text\":\"寿丰\",\"value\":\"712620\",\"children\":\"\"},{\"text\":\"凤林\",\"value\":\"712621\",\"children\":\"\"},{\"text\":\"光复\",\"value\":\"712622\",\"children\":\"\"},{\"text\":\"丰滨\",\"value\":\"712623\",\"children\":\"\"},{\"text\":\"瑞穗\",\"value\":\"712624\",\"children\":\"\"},{\"text\":\"万荣\",\"value\":\"712625\",\"children\":\"\"},{\"text\":\"玉里\",\"value\":\"712626\",\"children\":\"\"},{\"text\":\"卓溪\",\"value\":\"712627\",\"children\":\"\"},{\"text\":\"富里\",\"value\":\"712628\",\"children\":\"\"}]},{\"text\":\"澎湖\",\"value\":\"712700\",\"children\":[{\"text\":\"马公\",\"value\":\"712707\",\"children\":\"\"},{\"text\":\"西屿\",\"value\":\"712708\",\"children\":\"\"},{\"text\":\"望安\",\"value\":\"712709\",\"children\":\"\"},{\"text\":\"七美\",\"value\":\"712710\",\"children\":\"\"},{\"text\":\"白沙\",\"value\":\"712711\",\"children\":\"\"},{\"text\":\"湖西\",\"value\":\"712712\",\"children\":\"\"}]},{\"text\":\"连江\",\"value\":\"712800\",\"children\":[{\"text\":\"南竿\",\"value\":\"712805\",\"children\":\"\"},{\"text\":\"北竿\",\"value\":\"712806\",\"children\":\"\"},{\"text\":\"莒光\",\"value\":\"712807\",\"children\":\"\"},{\"text\":\"东引\",\"value\":\"712808\",\"children\":\"\"}]}]},{\"text\":\"香港\",\"value\":\"810000\",\"children\":[{\"text\":\"香港岛\",\"value\":\"810100\",\"children\":[{\"text\":\"中西\",\"value\":\"810101\",\"children\":\"\"},{\"text\":\"湾仔\",\"value\":\"810102\",\"children\":\"\"},{\"text\":\"东区\",\"value\":\"810103\",\"children\":\"\"},{\"text\":\"南区\",\"value\":\"810104\",\"children\":\"\"}]},{\"text\":\"九龙\",\"value\":\"810200\",\"children\":[{\"text\":\"九龙城\",\"value\":\"810201\",\"children\":\"\"},{\"text\":\"油尖旺\",\"value\":\"810202\",\"children\":\"\"},{\"text\":\"深水埗\",\"value\":\"810203\",\"children\":\"\"},{\"text\":\"黄大仙\",\"value\":\"810204\",\"children\":\"\"},{\"text\":\"观塘\",\"value\":\"810205\",\"children\":\"\"}]},{\"text\":\"新界\",\"value\":\"810300\",\"children\":[{\"text\":\"北区\",\"value\":\"810301\",\"children\":\"\"},{\"text\":\"大埔\",\"value\":\"810302\",\"children\":\"\"},{\"text\":\"沙田\",\"value\":\"810303\",\"children\":\"\"},{\"text\":\"西贡\",\"value\":\"810304\",\"children\":\"\"},{\"text\":\"元朗\",\"value\":\"810305\",\"children\":\"\"},{\"text\":\"屯门\",\"value\":\"810306\",\"children\":\"\"},{\"text\":\"荃湾\",\"value\":\"810307\",\"children\":\"\"},{\"text\":\"葵青\",\"value\":\"810308\",\"children\":\"\"},{\"text\":\"离岛\",\"value\":\"810309\",\"children\":\"\"}]}]},{\"text\":\"澳门\",\"value\":\"820000\",\"children\":[{\"text\":\"澳门半岛\",\"value\":\"820100\",\"children\":[{\"text\":\"澳门半岛\",\"value\":\"820100\",\"children\":\"\"}]},{\"text\":\"离岛\",\"value\":\"820200\",\"children\":[{\"text\":\"离岛\",\"value\":\"820200\",\"children\":\"\"}]}]}]");

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4dee":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ebdb");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("64f574e4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "58e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("26ee");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2f74");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];

/* harmony default export */ __webpack_exports__["a"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("dd40")(module)))

/***/ }),

/***/ "5a9f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ca61");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1863db3a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5ea3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "65a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5a9f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6b42":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48985794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4dee");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48985794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48985794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8cf5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f864");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9184":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".com-dialog .el-dialog__header{padding:16px 24px;border-bottom:1px solid #e8e8e8}.com-dialog .el-dialog__body{padding:24px}.com-dialog .el-dialog__body .el-table__empty-block{width:auto!important}.com-dialog .el-dialog__footer{border-top:1px solid #e8e8e8;padding:10px 16px;height:auto}.com-dialog .el-dialog__footer .el-button{padding:8px 20px}.com-dialog .dialog__icon{position:absolute;top:22px;right:45px;font-size:12px;color:#909399;cursor:pointer;transition:color .2s}.com-dialog .dialog__icon:hover{color:#409eff}.com-dialog__header{display:flex;align-items:center}.com-dialog .justify-content-c{justify-content:center}.com-dialog__content .content__wrap{padding-right:10px}.com-dialog__content .el-scrollbar__wrap{padding:10px 0;max-height:500px}.com-dialog__content--fullscreen .el-scrollbar__wrap{max-height:calc(100vh - 166px);padding:10px 0}.com-dialog__content--footer .el-scrollbar__wrap{max-height:calc(100vh - 186px);padding:10px 0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vue-element-pro-components\",\"description\":\"This is a vue2、element-ui based component library\",\"version\":\"0.7.0\",\"author\":\"Fangkang\",\"license\":\"MIT\",\"keywords\":[\"component\",\"vue\",\"form\",\"element-ui\",\"table\",\"search\",\"dialog\"],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/fang-kang/vue-element-pro-components\"},\"main\":\"lib/VueElementProComponents.common.js\",\"unpkg\":\"lib/VueElementProComponents.umd.min.js\",\"scripts\":{\"serve\":\"vue-cli-service serve\",\"build\":\"vue-cli-service build\",\"lint\":\"vue-cli-service lint\",\"docs:dev\":\"vuepress dev docs\",\"docs:build\":\"vuepress build docs\",\"build-bundle\":\"vue-cli-service build --target lib --name VueElementProComponents --dest lib ./packages/index.js\"},\"dependencies\":{\"clipboard\":\"^2.0.10\",\"core-js\":\"^3.6.5\",\"element-ui\":\"^2.15.6\",\"lodash-es\":\"^4.17.21\",\"vue\":\"^2.6.11\",\"vue-fragment\":\"^1.5.2\",\"vue-router\":\"^3.2.0\"},\"devDependencies\":{\"@vitejs/plugin-vue-jsx\":\"^1.3.3\",\"@vue/cli-plugin-babel\":\"~4.5.12\",\"@vue/cli-plugin-eslint\":\"~4.5.12\",\"@vue/cli-plugin-router\":\"~4.5.12\",\"@vue/cli-plugin-vuex\":\"~4.5.12\",\"@vue/cli-service\":\"~4.5.12\",\"@vuepress/plugin-search\":\"^2.0.0-beta.35\",\"@vuepress/theme-default\":\"^2.0.0-beta.35\",\"@yanyu-fe/vuepress-plugin-code-block\":\"^0.0.12\",\"babel-eslint\":\"^10.1.0\",\"babel-plugin-component\":\"^1.1.1\",\"eslint\":\"^6.7.2\",\"eslint-plugin-vue\":\"^6.2.2\",\"sass\":\"^1.26.5\",\"sass-loader\":\"^8.0.2\",\"vue-template-compiler\":\"^2.6.11\",\"vuepress\":\"^2.0.0-beta.36\"},\"eslintConfig\":{\"root\":true,\"env\":{\"node\":true},\"extends\":[\"plugin:vue/essential\",\"eslint:recommended\"],\"parserOptions\":{\"parser\":\"babel-eslint\"},\"rules\":{}},\"browserslist\":[\"> 1%\",\"last 2 versions\",\"not dead\"]}");

/***/ }),

/***/ "b311":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(279);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(370);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(817);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */

var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    var fakeElement = createFakeElement(target);
    options.container.appendChild(fakeElement);
    selectedText = select_default()(fakeElement);
    command('copy');
    fakeElement.remove();
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          document.activeElement.blur();
          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var closest = __webpack_require__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var is = __webpack_require__(879);
var delegate = __webpack_require__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(686);
/******/ })()
.default;
});

/***/ }),

/***/ "c6eb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5ea3");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("dd40")(module)))

/***/ }),

/***/ "c886":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".el-cascader-panel{height:250px}.custom-form .el-rate{line-height:48px}.custom-form .el-scrollbar__wrap{overflow-x:hidden!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "c8ba":
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

/***/ "ca61":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-search{display:flex;padding:10px;margin:10px 0}.custom-search .el-form-item{margin:0 15px 10px 0}.custom-search .el-form-item .el-date-editor.el-input,.custom-search .el-form-item .el-date-editor.el-input__inner,.custom-search .el-form-item .el-input__inner{width:190px}.custom-search .btn-options{margin:0 0 0 20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "cc6f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title[data-v-010d6774]{position:relative;font-weight:700;margin:10px 0 10px 30px}.title[data-v-010d6774]:before{position:absolute;left:-6px;top:50%;transform:translateY(-50%);content:\"\";display:block;width:3.5px;border-radius:2px;height:14.5px;background-color:#1890ff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "dd40":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "dff1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("26ee");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (cloneBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("dd40")(module)))

/***/ }),

/***/ "ebdb":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-pagination[data-v-48985794]{padding:10px;margin:10px 0;text-align:right}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f748":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cc6f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5177cc9a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f864":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9184");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("26085bfa", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "types", function() { return /* reexport */ types; });
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ packages_install; });
__webpack_require__.d(__webpack_exports__, "CustomDialog", function() { return /* reexport */ CustomDialog; });
__webpack_require__.d(__webpack_exports__, "CustomForm", function() { return /* reexport */ CustomForm; });
__webpack_require__.d(__webpack_exports__, "CustomPagination", function() { return /* reexport */ CustomPagination; });
__webpack_require__.d(__webpack_exports__, "CustomSearch", function() { return /* reexport */ CustomSearch; });
__webpack_require__.d(__webpack_exports__, "CustomTable", function() { return /* reexport */ CustomTable; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f7949c92-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomDialog/src/index.vue?vue&type=template&id=39cd1e0d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',_vm._g(_vm._b({ref:"dialogRef",attrs:{"custom-class":"com-dialog","fullscreen":_vm.dialogProcessOptions.fullscreen || _vm.fullscreen,"visible":_vm.showVisible},on:{"update:visible":function($event){_vm.showVisible=$event},"closed":_vm.closed},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('div',{staticClass:"com-dialog__header",class:[_vm.dialogProcessOptions.center ? 'justify-content-c' : '']},[_vm._t("nameBefore"),_vm._t("title",function(){return [_c('span',{staticStyle:{"font-size":"18px"}},[_vm._v(_vm._s(_vm.title))])]}),_vm._t("nameAfter"),(_vm.dialogProcessOptions.showFullscreen)?_c('i',{staticClass:"dialog__icon",class:_vm.fullscreen ? 'el-icon-minus' : 'el-icon-full-screen',on:{"click":_vm.toggleFull}}):_vm._e()],2)]},proxy:true},(_vm.$slots.footer && !_vm.showAction)?{key:"footer",fn:function(){return [_vm._t("footer")]},proxy:true}:null],null,true)},'el-dialog',_vm.dialogProcessOptions,false),_vm.$listeners),[_c('el-scrollbar',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.showLoading),expression:"showLoading"}],class:_vm.fullscreen && _vm.$slots.footer
        ? 'com-dialog__content--footer'
        : _vm.fullscreen && !_vm.$slots.footer
        ? 'com-dialog__content--fullscreen'
        : 'com-dialog__content'},[_c('div',{staticClass:"content__wrap"},[_vm._t("default")],2)]),(_vm.showAction)?_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_vm._t("beforeFooter"),_c('el-button',_vm._b({attrs:{"size":"small"},on:{"click":_vm.handleCancel}},'el-button',_vm.cancelBtnProps,false),[_vm._v(_vm._s(_vm.cancelBtnText))]),_vm._t("middleFooter"),_c('el-button',_vm._b({attrs:{"size":"small","type":"primary","loading":_vm.showBtnLoading},on:{"click":_vm.handleOk}},'el-button',_vm.confirmBtnProps,false),[_vm._v(_vm._s(_vm.confirmBtnText))]),_vm._t("afterFooter")],2):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomDialog/src/index.vue?vue&type=template&id=39cd1e0d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomDialog/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "CustomDialog",
  model: {
    prop: "visible",
    event: "update:visible",
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    cancelBtnText: {
      type: String,
      default: "取消",
    },
    confirmBtnText: {
      type: String,
      default: "确定",
    },
    cancelBtnProps: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    confirmBtnProps: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    dialogOptions: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    visible: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    btnLoading: {
      type: Boolean,
      default: false,
    },
    showAction: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      fullscreen: false,
    };
  },
  computed: {
    showBtnLoading: {
      get() {
        return this.btnLoading;
      },
      set(val) {
        this.$emit("update:btnLoading", val);
      },
    },
    showVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
    },
    showLoading: {
      get() {
        return this.loading;
      },
      set(val) {
        this.$emit("update:loading", val);
      },
    },
    dialogProcessOptions() {
      return {
        closeOnClickModal: true,
        top: "10vh",
        width: "60%",
        destroyOnClose: false,
        appendToBody: true,
        lockScroll: true,
        showFullscreen: false,
        draggable: false,
        center: false,
        ...(this.dialogOptions || {}),
      };
    },
  },
  mounted() {
    const { draggable } = this.dialogProcessOptions;
    if (draggable) {
      this.initDraggable();
    }
  },
  methods: {
    handleOk() {
      this.$emit("ok");
    },
    handleCancel() {
      this.showVisible = false;
      this.$emit("cancel");
    },
    processDrag() {
      const dragDom = document.querySelector(".com-dialog");
      const dialogHeaderEl = document.querySelector(".com-dialog .el-dialog__header");
      const { fullscreen } = this;
      const { draggable } = this.dialogProcessOptions;
      // 全屏的时候需要重新定义left top
      if (fullscreen && draggable) {
        dragDom.style.cssText += `;left:0px;top:0px;`;
        dialogHeaderEl.style.cssText += ";cursor:default;user-select:none;";
      } else if (!fullscreen && draggable) {
        dialogHeaderEl.style.cssText += ";cursor:move;user-select:none;";
      }
      if (draggable) {
        dragDom.style.cssText += `;left:0px;top:0px;`;
      }
    },
    closed() {
      const { draggable } = this.dialogProcessOptions;
      this.fullscreen = false;
      if (draggable) {
        this.processDrag();
      }
      this.$emit("closed");
    },
    toggleFull() {
      this.fullscreen = !this.fullscreen;
      this.processDrag();
    },
    initDraggable() {
      this.$nextTick(() => {
        const dragDom = document.querySelector(".com-dialog");
        const dialogHeaderEl = document.querySelector(".com-dialog .el-dialog__header");
        dialogHeaderEl.style.cssText += ";cursor:move;user-select:none;";
        const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);
        dialogHeaderEl.onmousedown = (e) => {
          const disX = e.clientX - dialogHeaderEl.offsetLeft;
          const disY = e.clientY - dialogHeaderEl.offsetTop;

          const dragDomWidth = dragDom.offsetWidth;
          const dragDomHeight = dragDom.offsetHeight;

          const screenWidth = document.documentElement.clientWidth;
          const screenHeight = document.documentElement.clientHeight;

          const minDragDomLeft = dragDom.offsetLeft;
          const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;

          const minDragDomTop = dragDom.offsetTop;
          const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight;

          const styleLeftStr = sty.left;
          const styleTopStr = sty.top;

          if (!styleLeftStr || !styleTopStr) return;
          let styleLeft;
          let styleTop;

          // Format may be "##%" or "##px"
          if (styleLeftStr.includes("%")) {
            styleLeft = +screenWidth * (+styleLeftStr.replace(/%/g, "") / 100);
            styleTop = +screenHeight * (+styleTopStr.replace(/%/g, "") / 100);
          } else {
            styleLeft = +styleLeftStr.replace(/px/g, "");
            styleTop = +styleTopStr.replace(/px/g, "");
          }

          document.onmousemove = (e) => {
            let left = e.clientX - disX;
            let top = e.clientY - disY;

            // Handle edge cases
            if (-left > minDragDomLeft) {
              left = -minDragDomLeft;
            } else if (left > maxDragDomLeft) {
              left = maxDragDomLeft;
            }
            if (-top > minDragDomTop) {
              top = -minDragDomTop;
            } else if (top > maxDragDomTop) {
              top = maxDragDomTop;
            }

            // 移动当前元素
            dragDom.style.left = `${left + styleLeft}px`;
            dragDom.style.top = `${top + styleTop}px`;
          };

          document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      });
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomDialog/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var CustomDialog_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/CustomDialog/src/index.vue?vue&type=style&index=0&lang=scss&
var srcvue_type_style_index_0_lang_scss_ = __webpack_require__("8cf5");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/CustomDialog/src/index.vue






/* normalize component */

var component = normalizeComponent(
  CustomDialog_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CustomDialog_src = (component.exports);
// CONCATENATED MODULE: ./packages/CustomDialog/index.js


/* istanbul ignore next */
CustomDialog_src.install = function (Vue) {
  Vue.component(CustomDialog_src.name, CustomDialog_src);
};

/* harmony default export */ var CustomDialog = (CustomDialog_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f7949c92-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomForm/src/index.vue?vue&type=template&id=010d6774&scoped=true&
var srcvue_type_template_id_010d6774_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-form"},[_c('el-form',_vm._b({directives:[{name:"loading",rawName:"v-loading",value:(_vm.showLoading),expression:"showLoading"}],ref:"ruleForm",attrs:{"validate-on-rule-change":false,"model":_vm.form}},'el-form',_vm.formProcessOptions,false),[_vm._t("columnBefore",null,{"form":_vm.form}),_c(_vm.isRow ? 'el-row' : 'fragment',{tag:"component",attrs:{"gutter":0}},_vm._l((_vm.metaData),function(column){return _c('fragment',{key:column.key},[_c(_vm.isRow ? 'el-col' : 'fragment',_vm._b({tag:"component"},'component',_vm.getColSpanOptions(column),false),[(column.type === _vm.cmpTypes.title)?_c('h3',{staticClass:"title"},[_vm._v(" "+_vm._s(column.label)+" ")]):_vm._t(((column.key) + "-all"),function(){return [_c('el-form-item',_vm._b({attrs:{"label":column.label,"prop":column.key,"required":column.required}},'el-form-item',_vm.getFormItemOptions(column),false),[_vm._t(column.key,function(){return [(column.type === _vm.cmpTypes.input)?_c('el-input',_vm._b({attrs:{"clearable":""},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-input',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.number)?_c('el-input-number',_vm._b({attrs:{"min":0,"controls-position":"right"},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, _vm._n($$v))},expression:"form[column.key]"}},'el-input-number',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.select)?_c('el-select',_vm._b({attrs:{"filterable":"","clearable":""},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-select',_vm.getColumnOptions(column),false),_vm._l((_vm.getOptions(column) || []),function(item,index){return _c('el-option',{key:item.value + index,attrs:{"disabled":item.disabled,"label":item[column.labelName] || item.name,"value":item[column.valueName] || item.value}})}),1):(column.type === _vm.cmpTypes.check)?_c('el-checkbox',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-checkbox',_vm.getColumnOptions(column),false),[_vm._v(_vm._s(column.checkLabel))]):(column.type === _vm.cmpTypes.checkBox)?_c('el-checkbox-group',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-checkbox-group',_vm.getColumnOptions(column),false),_vm._l((_vm.getOptions(column) || []),function(item,index){return _c('el-checkbox',{key:item.value + index,attrs:{"name":column.key,"disabled":item.disabled,"label":item[column.valueName] || item.value}},[_vm._v(" "+_vm._s(item[column.labelName] || item.name)+" ")])}),1):(column.type === _vm.cmpTypes.radio)?_c('el-radio-group',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-radio-group',_vm.getColumnOptions(column),false),_vm._l((_vm.getOptions(column) || []),function(item,index){return _c('el-radio',{key:item.value + index,attrs:{"disabled":item.disabled,"label":item[column.valueName] || item.value}},[_vm._v(" "+_vm._s(item[column.labelName] || item.name)+" ")])}),1):(column.type === _vm.cmpTypes.date)?_c('el-date-picker',_vm._b({attrs:{"clearable":"","picker-options":_vm.pickerOptions,"value-format":"yyyy-MM-dd","format":"yyyy-MM-dd"},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-date-picker',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.time)?_c('el-time-picker',_vm._b({attrs:{"clearable":"","value-format":"HH:mm:ss"},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-time-picker',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.switch)?_c('el-switch',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-switch',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.slider)?_c('el-slider',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-slider',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.rate)?_c('el-rate',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-rate',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.color)?_c('el-color-picker',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-color-picker',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.cascader)?_c('el-cascader',_vm._b({attrs:{"clearable":"","filterable":"","options":_vm.getOptions(column) || []},on:{"change":_vm.handleCascaderChange},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-cascader',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.area)?_c('el-cascader',_vm._b({attrs:{"options":_vm.geoNameOptions,"clearable":"","props":{ label: 'text' },"filterable":""},on:{"change":_vm.changeArea},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-cascader',_vm.getColumnOptions(column),false)):_vm._e(),_vm._t("rowAfter",null,{"form":_vm.form})]},{"form":_vm.form})],2)]},{"form":_vm.form})],2)],1)}),1),_vm._t("columnAfter",null,{"form":_vm.form})],2),_vm._t("formAfter",null,{"form":_vm.form})],2)}
var srcvue_type_template_id_010d6774_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomForm/src/index.vue?vue&type=template&id=010d6774&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-fragment/dist/vue-fragment.esm.js
function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_defineProperty(e,t,n[t])})}return e}var freeze=function(e,t,n){Object.defineProperty(e,t,{configurable:!0,get:function(){return n},set:function(e){console.warn("tried to set frozen property ".concat(t," with ").concat(e))}})},vue_fragment_esm_component={abstract:!0,name:"Fragment",props:{name:{type:String,default:function(){return Math.floor(Date.now()*Math.random()).toString(16)}},html:{type:String,default:null}},mounted:function(){var e=this.$el,t=e.parentNode;e.__isFragment=!0,e.__isMounted=!1;var n=document.createComment("fragment#".concat(this.name,"#head")),r=document.createComment("fragment#".concat(this.name,"#tail"));e.__head=n,e.__tail=r;var o=document.createDocumentFragment();if(o.appendChild(n),Array.from(e.childNodes).forEach(function(t){var n=!t.hasOwnProperty("__isFragmentChild__");o.appendChild(t),n&&(freeze(t,"parentNode",e),freeze(t,"__isFragmentChild__",!0))}),o.appendChild(r),this.html){var a=document.createElement("template");a.innerHTML=this.html,Array.from(a.content.childNodes).forEach(function(e){o.appendChild(e)})}var i=e.nextSibling;t.insertBefore(o,e,!0),t.removeChild(e),freeze(e,"parentNode",t),freeze(e,"nextSibling",i),i&&freeze(i,"previousSibling",e),e.__isMounted=!0},render:function(e){var t=this,n=this.$slots.default;return n&&n.length&&n.forEach(function(e){return e.data=_objectSpread({},e.data,{attrs:_objectSpread({fragment:t.name},(e.data||{}).attrs)})}),e("div",{attrs:{fragment:this.name}},n)}};function ssr(e,t){ false&&false}var Fragment=vue_fragment_esm_component,SSR=ssr,Plugin={install:function(e){e.component("fragment",vue_fragment_esm_component)}},vue_fragment_esm_index={Fragment:vue_fragment_esm_component,Plugin:Plugin,SSR:ssr};/* harmony default export */ var vue_fragment_esm = (vue_fragment_esm_index);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ var _listCacheClear = (listCacheClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/eq.js
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ var lodash_es_eq = (eq);

// CONCATENATED MODULE: ./node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (lodash_es_eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ var _assocIndexOf = (assocIndexOf);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ var _listCacheDelete = (listCacheDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ var _listCacheGet = (listCacheGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ var _listCacheHas = (listCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ var _listCacheSet = (listCacheSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

/* harmony default export */ var _ListCache = (ListCache);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

/* harmony default export */ var _stackClear = (stackClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ var _stackDelete = (stackDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ var _stackGet = (stackGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ var _stackHas = (stackHas);

// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__("26ee");

// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root["a" /* default */].Symbol;

/* harmony default export */ var _Symbol = (Symbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ var lodash_es_isObject = (isObject);

// CONCATENATED MODULE: ./node_modules/lodash-es/isFunction.js



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!lodash_es_isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ var lodash_es_isFunction = (isFunction);

// CONCATENATED MODULE: ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root["a" /* default */]['__core-js_shared__'];

/* harmony default export */ var _coreJsData = (coreJsData);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ var _isMasked = (isMasked);

// CONCATENATED MODULE: ./node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ var _toSource = (toSource);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var _baseIsNative_funcProto = Function.prototype,
    _baseIsNative_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!lodash_es_isObject(value) || _isMasked(value)) {
    return false;
  }
  var pattern = lodash_es_isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

/* harmony default export */ var _baseIsNative = (baseIsNative);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ var _getValue = (getValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ var _getNative = (getNative);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Map.js



/* Built-in method references that are verified to be native. */
var Map = _getNative(_root["a" /* default */], 'Map');

/* harmony default export */ var _Map = (Map);

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

/* harmony default export */ var _nativeCreate = (nativeCreate);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ var _hashClear = (hashClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _hashDelete = (hashDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var _hashGet_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = _hashGet_objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ var _hashGet = (hashGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ var _hashHas = (hashHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ var _hashSet = (hashSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

/* harmony default export */ var _Hash = (Hash);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

/* harmony default export */ var _mapCacheClear = (mapCacheClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ var _isKeyable = (isKeyable);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ var _getMapData = (getMapData);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _mapCacheDelete = (mapCacheDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ var _mapCacheGet = (mapCacheGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ var _mapCacheHas = (mapCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ var _mapCacheSet = (mapCacheSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

/* harmony default export */ var _MapCache = (MapCache);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ var _stackSet = (stackSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

/* harmony default export */ var _Stack = (Stack);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayEach.js
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ var _arrayEach = (arrayEach);

// CONCATENATED MODULE: ./node_modules/lodash-es/_defineProperty.js


var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ var lodash_es_defineProperty = (defineProperty);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssignValue.js


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && lodash_es_defineProperty) {
    lodash_es_defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ var _baseAssignValue = (baseAssignValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_assignValue.js



/** Used for built-in method references. */
var _assignValue_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _assignValue_hasOwnProperty = _assignValue_objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(_assignValue_hasOwnProperty.call(object, key) && lodash_es_eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ var _assignValue = (assignValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_copyObject.js



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ var _copyObject = (copyObject);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ var _baseTimes = (baseTimes);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return lodash_es_isObjectLike(value) && _baseGetTag(value) == argsTag;
}

/* harmony default export */ var _baseIsArguments = (baseIsArguments);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var isArguments_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return lodash_es_isObjectLike(value) && isArguments_hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ var lodash_es_isArguments = (isArguments);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArray.js
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ var lodash_es_isArray = (isArray);

// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__("58e0");

// CONCATENATED MODULE: ./node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ var _isIndex = (isIndex);

// CONCATENATED MODULE: ./node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var isLength_MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= isLength_MAX_SAFE_INTEGER;
}

/* harmony default export */ var lodash_es_isLength = (isLength);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var _baseIsTypedArray_argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    _baseIsTypedArray_funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[_baseIsTypedArray_funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return lodash_es_isObjectLike(value) &&
    lodash_es_isLength(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

/* harmony default export */ var _baseIsTypedArray = (baseIsTypedArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ var _baseUnary = (baseUnary);

// EXTERNAL MODULE: ./node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__("c6eb");

// CONCATENATED MODULE: ./node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

/* harmony default export */ var lodash_es_isTypedArray = (isTypedArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var _arrayLikeKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = _arrayLikeKeys_objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = lodash_es_isArray(value),
      isArg = !isArr && lodash_es_isArguments(value),
      isBuff = !isArr && !isArg && Object(isBuffer["a" /* default */])(value),
      isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _arrayLikeKeys = (arrayLikeKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || _isPrototype_objectProto;

  return value === proto;
}

/* harmony default export */ var _isPrototype = (isPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

/* harmony default export */ var _nativeKeys = (nativeKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var _baseKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = _baseKeys_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeys = (baseKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLike.js



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !lodash_es_isFunction(value);
}

/* harmony default export */ var lodash_es_isArrayLike = (isArrayLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/keys.js




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

/* harmony default export */ var lodash_es_keys = (keys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssign.js



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, lodash_es_keys(source), object);
}

/* harmony default export */ var _baseAssign = (baseAssign);

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _nativeKeysIn = (nativeKeysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var _baseKeysIn_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeysIn_hasOwnProperty = _baseKeysIn_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!lodash_es_isObject(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeysIn = (baseKeysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/keysIn.js




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

/* harmony default export */ var lodash_es_keysIn = (keysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssignIn.js



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, lodash_es_keysIn(source), object);
}

/* harmony default export */ var _baseAssignIn = (baseAssignIn);

// EXTERNAL MODULE: ./node_modules/lodash-es/_cloneBuffer.js
var _cloneBuffer = __webpack_require__("dff1");

// CONCATENATED MODULE: ./node_modules/lodash-es/_copyArray.js
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ var _copyArray = (copyArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayFilter.js
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ var _arrayFilter = (arrayFilter);

// CONCATENATED MODULE: ./node_modules/lodash-es/stubArray.js
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ var lodash_es_stubArray = (stubArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getSymbols.js



/** Used for built-in method references. */
var _getSymbols_objectProto = Object.prototype;

/** Built-in value references. */
var _getSymbols_propertyIsEnumerable = _getSymbols_objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? lodash_es_stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return _getSymbols_propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ var _getSymbols = (getSymbols);

// CONCATENATED MODULE: ./node_modules/lodash-es/_copySymbols.js



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

/* harmony default export */ var _copySymbols = (copySymbols);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayPush.js
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ var _arrayPush = (arrayPush);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getSymbolsIn.js





/* Built-in method references for those with the same name as other `lodash` methods. */
var _getSymbolsIn_nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !_getSymbolsIn_nativeGetSymbols ? lodash_es_stubArray : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

/* harmony default export */ var _getSymbolsIn = (getSymbolsIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_copySymbolsIn.js



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

/* harmony default export */ var _copySymbolsIn = (copySymbolsIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetAllKeys.js



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return lodash_es_isArray(object) ? result : _arrayPush(result, symbolsFunc(object));
}

/* harmony default export */ var _baseGetAllKeys = (baseGetAllKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getAllKeys.js




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, lodash_es_keys, _getSymbols);
}

/* harmony default export */ var _getAllKeys = (getAllKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getAllKeysIn.js




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, lodash_es_keysIn, _getSymbolsIn);
}

/* harmony default export */ var _getAllKeysIn = (getAllKeysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root["a" /* default */], 'DataView');

/* harmony default export */ var _DataView = (DataView);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var _Promise_Promise = _getNative(_root["a" /* default */], 'Promise');

/* harmony default export */ var _Promise = (_Promise_Promise);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Set.js



/* Built-in method references that are verified to be native. */
var Set = _getNative(_root["a" /* default */], 'Set');

/* harmony default export */ var _Set = (Set);

// CONCATENATED MODULE: ./node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root["a" /* default */], 'WeakMap');

/* harmony default export */ var _WeakMap = (WeakMap);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var _getTag_mapTag = '[object Map]',
    _getTag_objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    _getTag_setTag = '[object Set]',
    _getTag_weakMapTag = '[object WeakMap]';

var _getTag_dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != _getTag_dataViewTag) ||
    (_Map && getTag(new _Map) != _getTag_mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != _getTag_setTag) ||
    (_WeakMap && getTag(new _WeakMap) != _getTag_weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == _getTag_objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return _getTag_dataViewTag;
        case mapCtorString: return _getTag_mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return _getTag_setTag;
        case weakMapCtorString: return _getTag_weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ var _getTag = (getTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_initCloneArray.js
/** Used for built-in method references. */
var _initCloneArray_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _initCloneArray_hasOwnProperty = _initCloneArray_objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && _initCloneArray_hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ var _initCloneArray = (initCloneArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Uint8Array.js


/** Built-in value references. */
var Uint8Array = _root["a" /* default */].Uint8Array;

/* harmony default export */ var _Uint8Array = (Uint8Array);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneArrayBuffer.js


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

/* harmony default export */ var _cloneArrayBuffer = (cloneArrayBuffer);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneDataView.js


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ var _cloneDataView = (cloneDataView);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneRegExp.js
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ var _cloneRegExp = (cloneRegExp);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneSymbol.js


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ var _cloneSymbol = (cloneSymbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneTypedArray.js


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ var _cloneTypedArray = (cloneTypedArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_initCloneByTag.js






/** `Object#toString` result references. */
var _initCloneByTag_boolTag = '[object Boolean]',
    _initCloneByTag_dateTag = '[object Date]',
    _initCloneByTag_mapTag = '[object Map]',
    _initCloneByTag_numberTag = '[object Number]',
    _initCloneByTag_regexpTag = '[object RegExp]',
    _initCloneByTag_setTag = '[object Set]',
    _initCloneByTag_stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var _initCloneByTag_arrayBufferTag = '[object ArrayBuffer]',
    _initCloneByTag_dataViewTag = '[object DataView]',
    _initCloneByTag_float32Tag = '[object Float32Array]',
    _initCloneByTag_float64Tag = '[object Float64Array]',
    _initCloneByTag_int8Tag = '[object Int8Array]',
    _initCloneByTag_int16Tag = '[object Int16Array]',
    _initCloneByTag_int32Tag = '[object Int32Array]',
    _initCloneByTag_uint8Tag = '[object Uint8Array]',
    _initCloneByTag_uint8ClampedTag = '[object Uint8ClampedArray]',
    _initCloneByTag_uint16Tag = '[object Uint16Array]',
    _initCloneByTag_uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case _initCloneByTag_arrayBufferTag:
      return _cloneArrayBuffer(object);

    case _initCloneByTag_boolTag:
    case _initCloneByTag_dateTag:
      return new Ctor(+object);

    case _initCloneByTag_dataViewTag:
      return _cloneDataView(object, isDeep);

    case _initCloneByTag_float32Tag: case _initCloneByTag_float64Tag:
    case _initCloneByTag_int8Tag: case _initCloneByTag_int16Tag: case _initCloneByTag_int32Tag:
    case _initCloneByTag_uint8Tag: case _initCloneByTag_uint8ClampedTag: case _initCloneByTag_uint16Tag: case _initCloneByTag_uint32Tag:
      return _cloneTypedArray(object, isDeep);

    case _initCloneByTag_mapTag:
      return new Ctor;

    case _initCloneByTag_numberTag:
    case _initCloneByTag_stringTag:
      return new Ctor(object);

    case _initCloneByTag_regexpTag:
      return _cloneRegExp(object);

    case _initCloneByTag_setTag:
      return new Ctor;

    case symbolTag:
      return _cloneSymbol(object);
  }
}

/* harmony default export */ var _initCloneByTag = (initCloneByTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseCreate.js


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!lodash_es_isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ var _baseCreate = (baseCreate);

// CONCATENATED MODULE: ./node_modules/lodash-es/_initCloneObject.js




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

/* harmony default export */ var _initCloneObject = (initCloneObject);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsMap.js



/** `Object#toString` result references. */
var _baseIsMap_mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return lodash_es_isObjectLike(value) && _getTag(value) == _baseIsMap_mapTag;
}

/* harmony default export */ var _baseIsMap = (baseIsMap);

// CONCATENATED MODULE: ./node_modules/lodash-es/isMap.js




/* Node.js helper references. */
var nodeIsMap = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

/* harmony default export */ var lodash_es_isMap = (isMap);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsSet.js



/** `Object#toString` result references. */
var _baseIsSet_setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return lodash_es_isObjectLike(value) && _getTag(value) == _baseIsSet_setTag;
}

/* harmony default export */ var _baseIsSet = (baseIsSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/isSet.js




/* Node.js helper references. */
var nodeIsSet = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

/* harmony default export */ var lodash_es_isSet = (isSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseClone.js























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var _baseClone_argsTag = '[object Arguments]',
    _baseClone_arrayTag = '[object Array]',
    _baseClone_boolTag = '[object Boolean]',
    _baseClone_dateTag = '[object Date]',
    _baseClone_errorTag = '[object Error]',
    _baseClone_funcTag = '[object Function]',
    _baseClone_genTag = '[object GeneratorFunction]',
    _baseClone_mapTag = '[object Map]',
    _baseClone_numberTag = '[object Number]',
    _baseClone_objectTag = '[object Object]',
    _baseClone_regexpTag = '[object RegExp]',
    _baseClone_setTag = '[object Set]',
    _baseClone_stringTag = '[object String]',
    _baseClone_symbolTag = '[object Symbol]',
    _baseClone_weakMapTag = '[object WeakMap]';

var _baseClone_arrayBufferTag = '[object ArrayBuffer]',
    _baseClone_dataViewTag = '[object DataView]',
    _baseClone_float32Tag = '[object Float32Array]',
    _baseClone_float64Tag = '[object Float64Array]',
    _baseClone_int8Tag = '[object Int8Array]',
    _baseClone_int16Tag = '[object Int16Array]',
    _baseClone_int32Tag = '[object Int32Array]',
    _baseClone_uint8Tag = '[object Uint8Array]',
    _baseClone_uint8ClampedTag = '[object Uint8ClampedArray]',
    _baseClone_uint16Tag = '[object Uint16Array]',
    _baseClone_uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[_baseClone_argsTag] = cloneableTags[_baseClone_arrayTag] =
cloneableTags[_baseClone_arrayBufferTag] = cloneableTags[_baseClone_dataViewTag] =
cloneableTags[_baseClone_boolTag] = cloneableTags[_baseClone_dateTag] =
cloneableTags[_baseClone_float32Tag] = cloneableTags[_baseClone_float64Tag] =
cloneableTags[_baseClone_int8Tag] = cloneableTags[_baseClone_int16Tag] =
cloneableTags[_baseClone_int32Tag] = cloneableTags[_baseClone_mapTag] =
cloneableTags[_baseClone_numberTag] = cloneableTags[_baseClone_objectTag] =
cloneableTags[_baseClone_regexpTag] = cloneableTags[_baseClone_setTag] =
cloneableTags[_baseClone_stringTag] = cloneableTags[_baseClone_symbolTag] =
cloneableTags[_baseClone_uint8Tag] = cloneableTags[_baseClone_uint8ClampedTag] =
cloneableTags[_baseClone_uint16Tag] = cloneableTags[_baseClone_uint32Tag] = true;
cloneableTags[_baseClone_errorTag] = cloneableTags[_baseClone_funcTag] =
cloneableTags[_baseClone_weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!lodash_es_isObject(value)) {
    return value;
  }
  var isArr = lodash_es_isArray(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == _baseClone_funcTag || tag == _baseClone_genTag;

    if (Object(isBuffer["a" /* default */])(value)) {
      return Object(_cloneBuffer["a" /* default */])(value, isDeep);
    }
    if (tag == _baseClone_objectTag || tag == _baseClone_argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (lodash_es_isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (lodash_es_isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? lodash_es_keysIn : lodash_es_keys);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ var _baseClone = (baseClone);

// CONCATENATED MODULE: ./node_modules/lodash-es/cloneDeep.js


/** Used to compose bitmasks for cloning. */
var cloneDeep_CLONE_DEEP_FLAG = 1,
    cloneDeep_CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return _baseClone(value, cloneDeep_CLONE_DEEP_FLAG | cloneDeep_CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ var lodash_es_cloneDeep = (cloneDeep);

// CONCATENATED MODULE: ./node_modules/lodash-es/now.js


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now_now = function() {
  return _root["a" /* default */].Date.now();
};

/* harmony default export */ var lodash_es_now = (now_now);

// CONCATENATED MODULE: ./node_modules/lodash-es/_trimmedEndIndex.js
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ var _trimmedEndIndex = (trimmedEndIndex);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTrim.js


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ var _baseTrim = (baseTrim);

// CONCATENATED MODULE: ./node_modules/lodash-es/isSymbol.js



/** `Object#toString` result references. */
var isSymbol_symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (lodash_es_isObjectLike(value) && _baseGetTag(value) == isSymbol_symbolTag);
}

/* harmony default export */ var lodash_es_isSymbol = (isSymbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/toNumber.js




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (lodash_es_isSymbol(value)) {
    return NAN;
  }
  if (lodash_es_isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = lodash_es_isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ var lodash_es_toNumber = (toNumber);

// CONCATENATED MODULE: ./node_modules/lodash-es/debounce.js




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = lodash_es_toNumber(wait) || 0;
  if (lodash_es_isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = lodash_es_now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(lodash_es_now());
  }

  function debounced() {
    var time = lodash_es_now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ var lodash_es_debounce = (debounce);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var _setCacheAdd_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, _setCacheAdd_HASH_UNDEFINED);
  return this;
}

/* harmony default export */ var _setCacheAdd = (setCacheAdd);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheHas.js
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/* harmony default export */ var _setCacheHas = (setCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_SetCache.js




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

/* harmony default export */ var _SetCache = (SetCache);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arraySome.js
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ var _arraySome = (arraySome);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cacheHas.js
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* harmony default export */ var _cacheHas = (cacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_equalArrays.js




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/* harmony default export */ var _equalArrays = (equalArrays);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapToArray.js
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ var _mapToArray = (mapToArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setToArray.js
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ var _setToArray = (setToArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_equalByTag.js







/** Used to compose bitmasks for value comparisons. */
var _equalByTag_COMPARE_PARTIAL_FLAG = 1,
    _equalByTag_COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var _equalByTag_boolTag = '[object Boolean]',
    _equalByTag_dateTag = '[object Date]',
    _equalByTag_errorTag = '[object Error]',
    _equalByTag_mapTag = '[object Map]',
    _equalByTag_numberTag = '[object Number]',
    _equalByTag_regexpTag = '[object RegExp]',
    _equalByTag_setTag = '[object Set]',
    _equalByTag_stringTag = '[object String]',
    _equalByTag_symbolTag = '[object Symbol]';

var _equalByTag_arrayBufferTag = '[object ArrayBuffer]',
    _equalByTag_dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var _equalByTag_symbolProto = _Symbol ? _Symbol.prototype : undefined,
    _equalByTag_symbolValueOf = _equalByTag_symbolProto ? _equalByTag_symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case _equalByTag_dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case _equalByTag_arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case _equalByTag_boolTag:
    case _equalByTag_dateTag:
    case _equalByTag_numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return lodash_es_eq(+object, +other);

    case _equalByTag_errorTag:
      return object.name == other.name && object.message == other.message;

    case _equalByTag_regexpTag:
    case _equalByTag_stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case _equalByTag_mapTag:
      var convert = _mapToArray;

    case _equalByTag_setTag:
      var isPartial = bitmask & _equalByTag_COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= _equalByTag_COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case _equalByTag_symbolTag:
      if (_equalByTag_symbolValueOf) {
        return _equalByTag_symbolValueOf.call(object) == _equalByTag_symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ var _equalByTag = (equalByTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_equalObjects.js


/** Used to compose bitmasks for value comparisons. */
var _equalObjects_COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var _equalObjects_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _equalObjects_hasOwnProperty = _equalObjects_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & _equalObjects_COMPARE_PARTIAL_FLAG,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* harmony default export */ var _equalObjects = (equalObjects);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqualDeep.js









/** Used to compose bitmasks for value comparisons. */
var _baseIsEqualDeep_COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var _baseIsEqualDeep_argsTag = '[object Arguments]',
    _baseIsEqualDeep_arrayTag = '[object Array]',
    _baseIsEqualDeep_objectTag = '[object Object]';

/** Used for built-in method references. */
var _baseIsEqualDeep_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseIsEqualDeep_hasOwnProperty = _baseIsEqualDeep_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = lodash_es_isArray(object),
      othIsArr = lodash_es_isArray(other),
      objTag = objIsArr ? _baseIsEqualDeep_arrayTag : _getTag(object),
      othTag = othIsArr ? _baseIsEqualDeep_arrayTag : _getTag(other);

  objTag = objTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : objTag;
  othTag = othTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : othTag;

  var objIsObj = objTag == _baseIsEqualDeep_objectTag,
      othIsObj = othTag == _baseIsEqualDeep_objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && Object(isBuffer["a" /* default */])(object)) {
    if (!Object(isBuffer["a" /* default */])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || lodash_es_isTypedArray(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & _baseIsEqualDeep_COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ var _baseIsEqualDeep = (baseIsEqualDeep);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqual.js



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!lodash_es_isObjectLike(value) && !lodash_es_isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ var _baseIsEqual = (baseIsEqual);

// CONCATENATED MODULE: ./node_modules/lodash-es/isEqual.js


/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

/* harmony default export */ var lodash_es_isEqual = (isEqual);

// CONCATENATED MODULE: ./src/utils/index.js
/**
 * 过滤对象的方法
 * @param obj
 * @param filterFunc 判断key是否被过滤掉的方法 接受 value,key俩参数
 * @returns {{[p: string]: *}}
 */
function filterObject(obj, filterFunc) {
  const result = Object.keys(obj)
    .filter((key) => {
      if (filterFunc) {
        return filterFunc(obj[key], key);
      }
      return true;
    })
    .reduce((before, key) => {
      return {
        ...before,
        [key]: obj[key],
      };
    }, {});
  return result;
}

// CONCATENATED MODULE: ./packages/CustomForm/src/type.js
const types = {
  input: "input",
  select: "select",
  number: "number",
  checkBox: "checkBox",
  check: "check",
  radio: "radio",
  date: "date",
  switch: "switch",
  title: "title",
  time: "time",
  slider: "slider",
  rate: "rate",
  color: "color",
  cascader: "cascader",
  area: "area",
};

// EXTERNAL MODULE: ./src/assets/json/geo_names.json
var geo_names = __webpack_require__("378b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomForm/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var CustomForm_srcvue_type_script_lang_js_ = ({
  name: "CustomForm",
  components: {
    Fragment: Fragment,
  },
  model: {
    prop: "formData",
    event: "change",
  },
  props: {
    isRow: {
      type: Boolean,
      required: false,
      default: true,
    },
    columns: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    formData: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    formOptions: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      geoNameOptions: geo_names,
      form: {},
      debounceUpdate: null,
      watchers: {},
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
  },
  computed: {
    showLoading: {
      get() {
        return this.loading;
      },
      set(val) {
        this.$emit("update:loading", val);
      },
    },
    formRules() {
      const rules = this.metaData.reduce((pre, now) => {
        const { required, rules: originRules, type, label } = now || {};
        if (required || Array.isArray(originRules)) {
          const rules = originRules ? [...originRules] : [];
          if (required && !rules.some((item) => item && item.required)) {
            const preStr = [types.input].includes(type) ? "请输入" : "请选择";
            rules.push({
              required: true,
              message: `${preStr}${label}`,
              trigger: now.type === types.number ? "change" : ["blur", "change"],
            });
          }
          return {
            ...pre,
            [now.key]: rules,
          };
        }
        return pre;
      }, {});
      return rules;
    },
    formProcessOptions() {
      const { rules = {}, ...rest } = this.formOptions || {};
      return {
        labelWidth: "100px",
        ...(rest || {}),
        rules: { ...this.formRules, ...rules },
      };
    },
    cmpTypes() {
      return types;
    },
    metaData() {
      return Object.keys(this.columns)
        .filter((key) => this.checkShow(this.columns[key]))
        .map((key) => {
          const item = this.columns[key];
          const {
            label = key,
            span = 18,
            type = types.input,
            columnOption = {},
            options = [],
          } = item;
          return {
            ...item,
            key,
            label,
            span,
            type,
            columnOption,
            options,
          };
        });
    },
    elForm() {
      return this.$refs.ruleForm;
    },
  },
  watch: {
    columns: {
      deep: true,
      immediate: true,
      handler: function () {
        this.checkDefaultValue();
      },
    },
    formData: {
      deep: true,
      immediate: true,
      handler: function () {
        this.updateFormData();
      },
    },
    form: {
      deep: true,
      handler: function () {
        this.$emit("change", this.form);
      },
    },
  },
  created() {},
  methods: {
    changeArea(e) {
      this.$emit("changeArea", e);
    },
    handleCascaderChange(e) {
      this.$emit("handleCascaderChange", e);
    },
    getFormItemOptions(column) {
      const { formItemOption } = column;
      return {
        ...formItemOption,
      };
    },
    getColSpanOptions(column) {
      const { colSpanOption, span } = column;
      return {
        span: span || 24,
        ...(colSpanOption || {}),
      };
    },
    // 获取
    getColumnOptions(column) {
      const { columnOption, type, label } = column;
      let processColumnOption = {};
      if (type == types.input) {
        processColumnOption = {
          placeholder: `请输入${label}`,
        };
      } else {
        processColumnOption = {
          placeholder: `请选择${label}`,
        };
      }
      let options = {};
      if (typeof columnOption === "object") {
        options = columnOption;
      } else if (typeof columnOption === "function") {
        options = columnOption() || {};
      }
      return {
        ...processColumnOption,
        ...options,
      };
    },
    checkShow(column) {
      if (typeof column.formColumnShow === "boolean") {
        return column.formColumnShow;
      }
      if (typeof column.formColumnShow === "function") {
        return column.formColumnShow(this.form);
      }
      return true;
    },
    checkEmpty(data) {
      if (Array.isArray(data)) {
        return data.length === 0;
      } else {
        return [undefined, null].includes(data);
      }
    },
    getOptions(column) {
      let options = column.options;
      if (typeof column.options === "function") {
        options = column.options({ ...this.formData });
      }
      return options || [];
    },
    checkDefaultValue() {
      const { columns } = this;
      const newForm = lodash_es_cloneDeep(this.form);
      Object.keys(columns).forEach((key) => {
        const item = columns[key];
        if (
          [types.checkBox, types.area, types.cascader].includes(item.type) &&
          !Array.isArray(newForm[key])
        ) {
          newForm[key] = [];
        }
        if (!this.checkEmpty(item.defaultValue) && this.checkEmpty(newForm[key])) {
          newForm[key] = item.defaultValue;
        }
      });
      this.form = newForm;
    },
    updateFormData() {
      if (!this.debounceUpdate) {
        this.debounceUpdate = lodash_es_debounce(
          () => {
            if (!lodash_es_isEqual(this.formData, this.form)) {
              const data = lodash_es_cloneDeep(this.formData);
              this.form = filterObject(data, (_, key) => {
                return this.columns[key] || !["createTime", "updateTime"].includes(key);
              });
              this.checkDefaultValue();
            }
          },
          100,
          {
            leading: true,
          }
        );
      }
      this.debounceUpdate();
    },
    checkRule() {
      return new Promise((resolve, reject) => {
        const { ruleForm } = this.$refs;
        if (ruleForm) {
          ruleForm.validate((valid, error) => {
            if (valid) {
              resolve(true);
            } else {
              this.$nextTick(() => {
                const isError = document.getElementsByClassName("is-error");
                isError[0].scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                });
              });
              reject(error);
            }
          });
        }
      });
    },
    resetFields() {
      const { ruleForm } = this.$refs;
      ruleForm.resetFields();
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomForm/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_CustomForm_srcvue_type_script_lang_js_ = (CustomForm_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/CustomForm/src/index.vue?vue&type=style&index=0&lang=scss&
var CustomForm_srcvue_type_style_index_0_lang_scss_ = __webpack_require__("18bb");

// EXTERNAL MODULE: ./packages/CustomForm/src/index.vue?vue&type=style&index=1&id=010d6774&lang=scss&scoped=true&
var srcvue_type_style_index_1_id_010d6774_lang_scss_scoped_true_ = __webpack_require__("150f");

// CONCATENATED MODULE: ./packages/CustomForm/src/index.vue







/* normalize component */

var src_component = normalizeComponent(
  packages_CustomForm_srcvue_type_script_lang_js_,
  srcvue_type_template_id_010d6774_scoped_true_render,
  srcvue_type_template_id_010d6774_scoped_true_staticRenderFns,
  false,
  null,
  "010d6774",
  null
  
)

/* harmony default export */ var CustomForm_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/CustomForm/index.js



/* istanbul ignore next */
CustomForm_src.install = function (Vue) {
  Vue.component(CustomForm_src.name, CustomForm_src);
};

/* harmony default export */ var CustomForm = (CustomForm_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f7949c92-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomPagination/src/index.vue?vue&type=template&id=48985794&scoped=true&
var srcvue_type_template_id_48985794_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-pagination",style:(_vm.customStyle)},[_c('el-pagination',{style:(_vm.paginationStyle),attrs:{"current-page":_vm.pagination[_vm.page],"page-sizes":_vm.pageSizes,"page-size":_vm.pagination[_vm.pageSize],"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total,"background":""},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)}
var srcvue_type_template_id_48985794_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomPagination/src/index.vue?vue&type=template&id=48985794&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomPagination/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CustomPagination_srcvue_type_script_lang_js_ = ({
  name: "CustomPagination",
  model: {
    prop: "pagination",
    event: "change",
  },
  props: {
    customProps: {
      type: Object,
      default() {
        return {
          page: "page",
          pageSize: "pageSize",
        };
      },
    },
    customStyle: {
      type: Object,
      default: () => {},
    },
    paginationStyle: {
      type: Object,
      default: () => {},
    },
    pagination: {
      type: Object,
      required: true,
      default() {
        return {
          [this.customProps.page]: 1,
          [this.customProps.pageSize]: 10,
        };
      },
    },
    pageSizes: {
      type: Array,
      required: false,
      default: () => [10, 20, 30, 50, 100],
    },
    total: {
      type: [Number, null],
      default: 0,
    },
  },
  computed: {
    page() {
      return this.customProps.page;
    },
    pageSize() {
      return this.customProps.pageSize;
    },
  },
  methods: {
    handleSizeChange(pageSize) {
      this.$emit("change", {
        ...this.pagination,
        [this.customProps.pageSize]: pageSize,
      });
      this.refresh();
    },
    handleCurrentChange(page) {
      this.$emit("change", {
        ...this.pagination,
        [this.customProps.page]: page,
      });
      this.refresh();
    },
    refresh() {
      this.$nextTick(() => {
        this.$emit("onLoad");
      });
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomPagination/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_CustomPagination_srcvue_type_script_lang_js_ = (CustomPagination_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/CustomPagination/src/index.vue?vue&type=style&index=0&id=48985794&scoped=true&lang=css&
var srcvue_type_style_index_0_id_48985794_scoped_true_lang_css_ = __webpack_require__("6b42");

// CONCATENATED MODULE: ./packages/CustomPagination/src/index.vue






/* normalize component */

var CustomPagination_src_component = normalizeComponent(
  packages_CustomPagination_srcvue_type_script_lang_js_,
  srcvue_type_template_id_48985794_scoped_true_render,
  srcvue_type_template_id_48985794_scoped_true_staticRenderFns,
  false,
  null,
  "48985794",
  null
  
)

/* harmony default export */ var CustomPagination_src = (CustomPagination_src_component.exports);
// CONCATENATED MODULE: ./packages/CustomPagination/index.js


/* istanbul ignore next */
CustomPagination_src.install = function (Vue) {
  Vue.component(CustomPagination_src.name, CustomPagination_src);
};

/* harmony default export */ var CustomPagination = (CustomPagination_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f7949c92-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomSearch/src/index.vue?vue&type=template&id=283914db&
var srcvue_type_template_id_283914db_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-search",style:(_vm.customStyle)},[_vm._t("col-before"),_c('custom-form',{ref:"dataForm",attrs:{"is-row":false,"columns":_vm.searchColumn,"form-options":{
      inline: true,
      labelWidth: '',
    }},scopedSlots:_vm._u([{key:"columnAfter",fn:function(){return [_c('el-form-item',[_vm._t("before"),(!_vm.noSearch)?_c('el-button',_vm._b({attrs:{"icon":"el-icon-search","type":"primary","size":"small","loading":_vm.showLoading},on:{"click":_vm.search}},'el-button',_vm.searchBtnProps,false),[_vm._v(_vm._s(_vm.searchBtnText))]):_vm._e(),(!_vm.noSearch && _vm.showReset)?_c('el-button',_vm._b({attrs:{"icon":"el-icon-refresh-right","type":"default","size":"small"},on:{"click":_vm.handleReset}},'el-button',_vm.resetBtnProps,false),[_vm._v(_vm._s(_vm.resetBtnText))]):_vm._e(),_vm._t("after")],2)]},proxy:true}],null,true),model:{value:(_vm.localQuery),callback:function ($$v) {_vm.localQuery=$$v},expression:"localQuery"}}),_vm._t("col-after")],2)}
var srcvue_type_template_id_283914db_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomSearch/src/index.vue?vue&type=template&id=283914db&

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomSearch/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var CustomSearch_srcvue_type_script_lang_js_ = ({
  name: "CustomSearch",
  components: { CustomForm: CustomForm },
  model: {
    prop: "query",
    event: "change",
  },
  props: {
    showReset: {
      type: Boolean,
      default: false,
    },
    searchBtnText: {
      type: String,
      default: "查询",
    },
    searchBtnProps: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    resetBtnText: {
      type: String,
      default: "重置",
    },
    resetBtnProps: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    query: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    columns: {
      type: Object,
      required: false,
    },
    searchColumns: {
      type: Object,
      required: false,
    },
    buttonsOptions: {
      type: Object,
      required: false,
    },
    noSearch: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      localQuery: {},
    };
  },
  computed: {
    showLoading: {
      get() {
        return this.loading;
      },
      set(val) {
        this.$emit("update:loading", val);
      },
    },
    cmpTypes() {
      return types;
    },
    searchColumn() {
      if (this.searchColumns) {
        return this.searchColumns;
      } else if (this.columns) {
        return filterObject(this.columns, (column) => column.showInSearch);
      }
      return {};
    },
    metadata() {
      return Object.keys(this.searchColumn).map((key) => {
        const item = this.searchColumn[key];
        const {
          label = key,
          type = this.cmpTypes.input,
          options,
          searchColOptions = {},
        } = item;
        return {
          key,
          label,
          type,
          options,
          ...item,
          searchColOptions: {
            xs: 24,
            sm: 12,
            md: 6,
            lg: 6,
            xl: 4,
            ...searchColOptions,
          },
        };
      });
    },
    buttonsSetting() {
      return {
        xs: 24,
        sm: 24,
        md: 6,
        lg: 6,
        xl: 6,
        xxl: 4,
        ...(this.buttonsOptions || {}),
      };
    },
  },
  watch: {
    query: {
      deep: true,
      immediate: true,
      handler: function () {
        this.updateQuery();
      },
    },
    localQuery: {
      deep: true,
      handler: function () {
        this.$emit("change", this.localQuery);
      },
    },
  },
  methods: {
    search() {
      this.$emit("search");
    },
    updateQuery() {
      if (!Object(lodash["isEqual"])(this.query, this.localQuery)) {
        this.localQuery = Object(lodash["cloneDeep"])(this.query);
      }
    },
    handleReset() {
      this.$refs.dataForm.resetFields();
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomSearch/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_CustomSearch_srcvue_type_script_lang_js_ = (CustomSearch_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/CustomSearch/src/index.vue?vue&type=style&index=0&lang=scss&
var CustomSearch_srcvue_type_style_index_0_lang_scss_ = __webpack_require__("65a2");

// CONCATENATED MODULE: ./packages/CustomSearch/src/index.vue






/* normalize component */

var CustomSearch_src_component = normalizeComponent(
  packages_CustomSearch_srcvue_type_script_lang_js_,
  srcvue_type_template_id_283914db_render,
  srcvue_type_template_id_283914db_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CustomSearch_src = (CustomSearch_src_component.exports);
// CONCATENATED MODULE: ./packages/CustomSearch/index.js


/* istanbul ignore next */
CustomSearch_src.install = function (Vue) {
  Vue.component(CustomSearch_src.name, CustomSearch_src);
};

/* harmony default export */ var CustomSearch = (CustomSearch_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f7949c92-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomTable/src/index.vue?vue&type=template&id=5e853f62&
var srcvue_type_template_id_5e853f62_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-table',_vm._b({directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"table"},'el-table',_vm.tableSetting,false),[_vm._l((_vm.metadata),function(column){return _c('table-column',{key:column.key,attrs:{"column":column}})}),(_vm.hasOperation && _vm.showOperation)?_c('el-table-column',_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._t("operationColumn",function(){return [_c('div',{staticClass:"operationContainer"},[_vm._t("operationBefore",null,{"row":scope.row}),_vm._t("autoOperation",function(){return [(_vm.updateFunc)?_c('el-button',_vm._b({attrs:{"size":"small","type":"primary"},on:{"click":function($event){return _vm.updateFunc(scope.row)}}},'el-button',_vm.updateOptions(scope.row),false),[_vm._v(" 修改 ")]):_vm._e(),_vm._t("operationMiddle",null,{"row":scope.row}),(_vm.deleteFunc)?_c('el-button',_vm._b({attrs:{"size":"small","type":"danger"},on:{"click":function($event){return _vm.handleDeleteFunc(scope.row)}}},'el-button',_vm.deleteOptions(scope.row),false),[_vm._v(" 删除 ")]):_vm._e()]},{"row":scope.row}),_vm._t("operationAfter",null,{"row":scope.row})],2)]},{"row":scope.row})]}}],null,true)},'el-table-column',_vm.processOperationOptions,false)):_vm._e()],2)}
var srcvue_type_template_id_5e853f62_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomTable/src/index.vue?vue&type=template&id=5e853f62&

// CONCATENATED MODULE: ./src/directive/clipboard/clipboard.js
// Inspired by https://github.com/Inndy/vue-clipboard2
const Clipboard = __webpack_require__("b311")
if (!Clipboard) {
  throw new Error('you should npm install `clipboard` --save at first ')
}

/* harmony default export */ var clipboard = ({
  bind(el, binding) {
    if (binding.arg === 'success') {
      el._v_clipboard_success = binding.value
    } else if (binding.arg === 'error') {
      el._v_clipboard_error = binding.value
    } else {
      const clipboard = new Clipboard(el, {
        text() { return binding.value },
        action() { return binding.arg === 'cut' ? 'cut' : 'copy' }
      })
      clipboard.on('success', e => {
        const callback = el._v_clipboard_success
        callback && callback(e) // eslint-disable-line
      })
      clipboard.on('error', e => {
        const callback = el._v_clipboard_error
        callback && callback(e) // eslint-disable-line
      })
      el._v_clipboard = clipboard
    }
  },
  update(el, binding) {
    if (binding.arg === 'success') {
      el._v_clipboard_success = binding.value
    } else if (binding.arg === 'error') {
      el._v_clipboard_error = binding.value
    } else {
      el._v_clipboard.text = function() { return binding.value }
      el._v_clipboard.action = function() { return binding.arg === 'cut' ? 'cut' : 'copy' }
    }
  },
  unbind(el, binding) {
    if (binding.arg === 'success') {
      delete el._v_clipboard_success
    } else if (binding.arg === 'error') {
      delete el._v_clipboard_error
    } else {
      el._v_clipboard.destroy()
      delete el._v_clipboard
    }
  }
});

// CONCATENATED MODULE: ./src/directive/clipboard/index.js


const install = function(Vue) {
  Vue.directive('Clipboard', clipboard)
}

if (window.Vue) {
  window.clipboard = clipboard
  Vue.use(install); // eslint-disable-line
}

clipboard.install = install
/* harmony default export */ var directive_clipboard = (clipboard);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f7949c92-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomTable/src/TableColumn.vue?vue&type=template&id=f911a41a&scoped=true&
var TableColumnvue_type_template_id_f911a41a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-table-column',_vm._b({key:_vm.column.key,attrs:{"align":_vm.column.align || 'center',"label":_vm.column.tableLabel || _vm.column.label},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._t(_vm.column.key,function(){return [(_vm.column.copy)?_c('i',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(scope.row[_vm.column.key]),expression:"scope.row[column.key]",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"}],staticClass:"el-icon-copy-document",staticStyle:{"cursor":"pointer","color":"#409eff","margin-right":"5px"}}):_vm._e(),(!_vm.column.isTag)?_c('span',[_vm._v(_vm._s(_vm.formatShow(_vm.column, scope.row, scope)))]):_vm._e(),(_vm.column.isTag)?_c('el-tag',_vm._b({},'el-tag',_vm.getTagOptions(_vm.column, scope.row),false),[_vm._v(_vm._s(_vm.formatShow(_vm.column, scope.row, scope))+" ")]):_vm._e()]},{"scope":scope})]}}],null,true)},'el-table-column',_vm.column.tableColumnOption,false))}
var TableColumnvue_type_template_id_f911a41a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomTable/src/TableColumn.vue?vue&type=template&id=f911a41a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomTable/src/TableColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TableColumnvue_type_script_lang_js_ = ({
  name: "TableColumn",
  props: {
    column: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    clipboardSuccess() {
      this.$message({
        message: "复制成功",
        type: "success",
        duration: 1500,
      });
    },
    getTagOptions(column, row) {
      let options = {};
      const { tagOptions } = column;
      if (typeof tagOptions === "string") {
        options.type = tagOptions;
      }
      if (typeof tagOptions === "object") {
        options = tagOptions;
      } else if (typeof tagOptions === "function") {
        options = tagOptions(row) || {};
      }
      return {
        ...options,
      };
    },
    formatShow(column, row, scope) {
      const { showFormat } = column;
      if (showFormat && typeof showFormat === "function") {
        return showFormat(row[column.key], row, scope);
      }
      if ([types.select, types.checkBox, types.radio].includes(column.type)) {
        let options = [];
        if (Array.isArray(column.options)) {
          options = column.options;
        } else if (typeof column.options === "function") {
          options = column.options(row);
        }
        const option = options.find((item) => item.value == row[column.key]);
        return option ? option.label : "";
      }
      return row[column.key];
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomTable/src/TableColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_TableColumnvue_type_script_lang_js_ = (TableColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/CustomTable/src/TableColumn.vue





/* normalize component */

var TableColumn_component = normalizeComponent(
  src_TableColumnvue_type_script_lang_js_,
  TableColumnvue_type_template_id_f911a41a_scoped_true_render,
  TableColumnvue_type_template_id_f911a41a_scoped_true_staticRenderFns,
  false,
  null,
  "f911a41a",
  null
  
)

/* harmony default export */ var TableColumn = (TableColumn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomTable/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var CustomTable_srcvue_type_script_lang_js_ = ({
  name: "CustomTable",
  components: {
    TableColumn: TableColumn,
  },
  directives: {
    clipboard: directive_clipboard,
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Object,
      required: false,
    },
    updateOptions: {
      type: Function,
      required: false,
      default: () => {},
    },
    deleteOptions: {
      type: Function,
      required: false,
      default: () => {},
    },
    tableColumns: {
      type: Object,
      required: false,
    },
    tableOptions: {
      type: Object,
      required: false,
    },
    deleteFunc: {
      type: Function,
      required: false,
    },
    updateFunc: {
      type: Function,
      required: false,
    },
    operationOptions: {
      type: Object,
      required: false,
    },
    showOperation: {
      type: Boolean,
      required: false,
      default: true,
    },
    autoHeight: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      tableHeight: "",
      debounceHeightListener: null,
    };
  },
  computed: {
    tableColumn() {
      if (this.tableColumns) {
        return this.tableColumns;
      } else if (this.columns) {
        return filterObject(this.columns, (column) => column.showInTable);
      }
      return {};
    },
    metadata() {
      return Object.keys(this.tableColumn).map((key) => {
        const item = this.tableColumn[key];
        const { label = key, type = types.input, tableColumnOption = {}, options } = item;
        return {
          ...item,
          key,
          label,
          type,
          tableColumnOption,
          options,
        };
      });
    },
    tableSetting() {
      const setting = {
        data: this.data,
        highlightCurrentRow: true,
        style: "width: 100%",
        ...(this.tableOptions || {}),
      };
      if (this.tableHeight) {
        setting.height = this.tableHeight;
      }
      return setting;
    },
    processOperationOptions() {
      return {
        fixed: "right",
        label: "操作",
        width: "150",
        align: "center",
        ...(this.operationOptions || {}),
      };
    },
    hasOperation() {
      return this.tableOptions
        ? this.tableOptions.hasOperation
        :  false || this.deleteFunc || this.updateFunc;
    },
  },
  mounted() {
    if (this.autoHeight) {
      this.setTableHeight();
      this.setChangeHeightListener();
    }
  },
  beforeDestroy() {
    if (this.debounceHeightListener) {
      window.removeEventListener("resize", this.debounceHeightListener);
    }
  },
  methods: {
    getTagOptions(column, row) {
      let options = {};
      const { tagOptions } = column;
      if (typeof tagOptions === "string") {
        options.type = tagOptions;
      }
      if (typeof tagOptions === "object") {
        options = tagOptions;
      } else if (typeof tagOptions === "function") {
        options = tagOptions(row) || {};
      }
      return {
        ...options,
      };
    },
    clipboardSuccess() {
      this.$message({
        message: "复制成功",
        type: "success",
        duration: 1500,
      });
    },
    handleDeleteFunc(row) {
      this.$confirm("此操作将永久删除该行, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteFunc && this.deleteFunc(row);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setChangeHeightListener() {
      if (!this.debounceHeightListener) {
        this.debounceHeightListener = lodash_es_debounce(this.setTableHeight, 100);
      }
      window.addEventListener("resize", this.debounceHeightListener);
    },
    setTableHeight() {
      const searchDom = document.querySelector(".custom-search");
      const appMainDom = document.querySelector(".content-wrapper");
      if (searchDom && appMainDom) {
        const paginationDom = document.querySelector(".custom-pagination");
        const paginationDomHeight = paginationDom ? paginationDom.clientHeight : 0;
        this.tableHeight =
          appMainDom.offsetHeight -
          searchDom.clientHeight -
          paginationDomHeight -
          50 +
          "px";
      }
    },
    formatShow(column, row, scope) {
      const { showFormat } = column;
      if (showFormat && typeof showFormat === "function") {
        return showFormat(row[column.key], row, scope);
      }
      if ([types.select, types.checkBox, types.radio].includes(column.type)) {
        let options = [];
        if (Array.isArray(column.options)) {
          options = column.options;
        } else if (typeof column.options === "function") {
          options = column.options(row);
        }
        const option = options.find((item) => item.value == row[column.key]);
        return option ? option.label : "";
      }
      return row[column.key];
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomTable/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_CustomTable_srcvue_type_script_lang_js_ = (CustomTable_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/CustomTable/src/index.vue





/* normalize component */

var CustomTable_src_component = normalizeComponent(
  packages_CustomTable_srcvue_type_script_lang_js_,
  srcvue_type_template_id_5e853f62_render,
  srcvue_type_template_id_5e853f62_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CustomTable_src = (CustomTable_src_component.exports);
// CONCATENATED MODULE: ./packages/CustomTable/index.js


/* istanbul ignore next */
CustomTable_src.install = function (Vue) {
  Vue.component(CustomTable_src.name, CustomTable_src);
};

/* harmony default export */ var CustomTable = (CustomTable_src);

// CONCATENATED MODULE: ./packages/index.js






const config = __webpack_require__("9224");
console.log(config);

const components = [
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
];

const packages_install = function (Vue) {
  if (packages_install.installed) return;
  packages_install.installed = true;
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  packages_install(window.Vue);
}



/* harmony default export */ var packages_0 = ({
  version: config.version,
  types: types,
  install: packages_install,
  CustomDialog: CustomDialog,
  CustomForm: CustomForm,
  CustomPagination: CustomPagination,
  CustomSearch: CustomSearch,
  CustomTable: CustomTable,
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});