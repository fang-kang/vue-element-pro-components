module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0b8b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ql-editor{min-height:120px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:\"14px\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"10px\"]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"10px\"]:before{content:\"10px\"}.ql-editor .ql-size-10px{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"12px\"]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"12px\"]:before{content:\"12px\"}.ql-editor .ql-size-12px{font-size:12px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"14px\"]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"14px\"]:before{content:\"14px\"}.ql-editor .ql-size-14px{font-size:14px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"16px\"]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"16px\"]:before{content:\"16px\"}.ql-editor .ql-size-16px{font-size:16px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"20px\"]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"20px\"]:before{content:\"20px\"}.ql-editor .ql-size-20px{font-size:20px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"24px\"]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"24px\"]:before{content:\"24px\"}.ql-editor .ql-size-24px{font-size:24px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"32px\"]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"32px\"]:before{content:\"32px\"}.ql-editor .ql-size-32px{font-size:32px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"36px\"]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"36px\"]:before{content:\"36px\"}.ql-editor .ql-size-36px{font-size:36px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:\"文本\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before{content:\"标题1\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before{content:\"标题2\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before{content:\"标题3\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before{content:\"标题4\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before{content:\"标题5\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before{content:\"标题6\"}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:\"标准字体\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:\"衬线字体\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:\"等宽字体\"}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0f3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("48a6");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "139c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:\"\\2022\"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:\"\\2611\"}.ql-editor ul[data-checked=false]>li:before{content:\"\\2610\"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) \". \"}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) \". \"}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) \". \"}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) \". \"}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) \". \"}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) \". \"}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) \". \"}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) \". \"}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) \". \"}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) \". \"}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow.ql-toolbar:after,.ql-snow .ql-toolbar:after{clear:both;content:\"\";display:table}.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow.ql-toolbar button svg,.ql-snow .ql-toolbar button svg{float:left;height:100%}.ql-snow.ql-toolbar button:active:hover,.ql-snow .ql-toolbar button:active:hover{outline:none}.ql-snow.ql-toolbar input.ql-image[type=file],.ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{color:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow.ql-toolbar button:hover:not(.ql-active),.ql-snow .ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:\"Normal\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before{content:\"Heading 1\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before{content:\"Heading 2\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before{content:\"Heading 3\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before{content:\"Heading 4\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before{content:\"Heading 5\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before{content:\"Heading 6\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:\"Sans Serif\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:\"Serif\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:\"Monospace\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:\"Normal\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:\"Small\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:\"Large\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:\"Huge\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #ccc;content:\"Edit\";margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0;content:\"Save\";padding-right:0}.ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "18bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("235d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1fb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


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

/***/ "32f3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".footer[data-v-e6caa1ca]{text-align:center;padding-top:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "378b":
/***/ (function(module) {

module.exports = JSON.parse("[{\"text\":\"北京\",\"value\":\"110000\",\"children\":[{\"text\":\"北京\",\"value\":\"110100\",\"children\":[{\"text\":\"东城\",\"value\":\"110101\",\"children\":\"\"},{\"text\":\"西城\",\"value\":\"110102\",\"children\":\"\"},{\"text\":\"朝阳\",\"value\":\"110105\",\"children\":\"\"},{\"text\":\"丰台\",\"value\":\"110106\",\"children\":\"\"},{\"text\":\"石景山\",\"value\":\"110107\",\"children\":\"\"},{\"text\":\"海淀\",\"value\":\"110108\",\"children\":\"\"},{\"text\":\"门头沟\",\"value\":\"110109\",\"children\":\"\"},{\"text\":\"房山\",\"value\":\"110111\",\"children\":\"\"},{\"text\":\"通州\",\"value\":\"110112\",\"children\":\"\"},{\"text\":\"顺义\",\"value\":\"110113\",\"children\":\"\"},{\"text\":\"昌平\",\"value\":\"110114\",\"children\":\"\"},{\"text\":\"大兴\",\"value\":\"110115\",\"children\":\"\"},{\"text\":\"怀柔\",\"value\":\"110116\",\"children\":\"\"},{\"text\":\"平谷\",\"value\":\"110117\",\"children\":\"\"},{\"text\":\"密云\",\"value\":\"110228\",\"children\":\"\"},{\"text\":\"延庆\",\"value\":\"110229\",\"children\":\"\"}]}]},{\"text\":\"天津\",\"value\":\"120000\",\"children\":[{\"text\":\"天津\",\"value\":\"120100\",\"children\":[{\"text\":\"和平\",\"value\":\"120101\",\"children\":\"\"},{\"text\":\"河东\",\"value\":\"120102\",\"children\":\"\"},{\"text\":\"河西\",\"value\":\"120103\",\"children\":\"\"},{\"text\":\"南开\",\"value\":\"120104\",\"children\":\"\"},{\"text\":\"河北\",\"value\":\"120105\",\"children\":\"\"},{\"text\":\"红桥\",\"value\":\"120106\",\"children\":\"\"},{\"text\":\"东丽\",\"value\":\"120110\",\"children\":\"\"},{\"text\":\"西青\",\"value\":\"120111\",\"children\":\"\"},{\"text\":\"津南\",\"value\":\"120112\",\"children\":\"\"},{\"text\":\"北辰\",\"value\":\"120113\",\"children\":\"\"},{\"text\":\"武清\",\"value\":\"120114\",\"children\":\"\"},{\"text\":\"宝坻\",\"value\":\"120115\",\"children\":\"\"},{\"text\":\"滨海\",\"value\":\"120116\",\"children\":\"\"},{\"text\":\"宁河\",\"value\":\"120221\",\"children\":\"\"},{\"text\":\"静海\",\"value\":\"120223\",\"children\":\"\"},{\"text\":\"蓟县\",\"value\":\"120225\",\"children\":\"\"}]}]},{\"text\":\"河北\",\"value\":\"130000\",\"children\":[{\"text\":\"石家庄\",\"value\":\"130100\",\"children\":[{\"text\":\"长安\",\"value\":\"130102\",\"children\":\"\"},{\"text\":\"桥东\",\"value\":\"130103\",\"children\":\"\"},{\"text\":\"桥西\",\"value\":\"130104\",\"children\":\"\"},{\"text\":\"新华\",\"value\":\"130105\",\"children\":\"\"},{\"text\":\"井陉矿\",\"value\":\"130107\",\"children\":\"\"},{\"text\":\"裕华\",\"value\":\"130108\",\"children\":\"\"},{\"text\":\"井陉\",\"value\":\"130121\",\"children\":\"\"},{\"text\":\"正定\",\"value\":\"130123\",\"children\":\"\"},{\"text\":\"栾城\",\"value\":\"130124\",\"children\":\"\"},{\"text\":\"行唐\",\"value\":\"130125\",\"children\":\"\"},{\"text\":\"灵寿\",\"value\":\"130126\",\"children\":\"\"},{\"text\":\"高邑\",\"value\":\"130127\",\"children\":\"\"},{\"text\":\"深泽\",\"value\":\"130128\",\"children\":\"\"},{\"text\":\"赞皇\",\"value\":\"130129\",\"children\":\"\"},{\"text\":\"无极\",\"value\":\"130130\",\"children\":\"\"},{\"text\":\"平山\",\"value\":\"130131\",\"children\":\"\"},{\"text\":\"元氏\",\"value\":\"130132\",\"children\":\"\"},{\"text\":\"赵县\",\"value\":\"130133\",\"children\":\"\"},{\"text\":\"辛集\",\"value\":\"130181\",\"children\":\"\"},{\"text\":\"藁城\",\"value\":\"130182\",\"children\":\"\"},{\"text\":\"晋州\",\"value\":\"130183\",\"children\":\"\"},{\"text\":\"新乐\",\"value\":\"130184\",\"children\":\"\"},{\"text\":\"鹿泉\",\"value\":\"130185\",\"children\":\"\"}]},{\"text\":\"唐山\",\"value\":\"130200\",\"children\":[{\"text\":\"路南\",\"value\":\"130202\",\"children\":\"\"},{\"text\":\"路北\",\"value\":\"130203\",\"children\":\"\"},{\"text\":\"古冶\",\"value\":\"130204\",\"children\":\"\"},{\"text\":\"开平\",\"value\":\"130205\",\"children\":\"\"},{\"text\":\"丰南\",\"value\":\"130207\",\"children\":\"\"},{\"text\":\"丰润\",\"value\":\"130208\",\"children\":\"\"},{\"text\":\"滦县\",\"value\":\"130223\",\"children\":\"\"},{\"text\":\"滦南\",\"value\":\"130224\",\"children\":\"\"},{\"text\":\"乐亭\",\"value\":\"130225\",\"children\":\"\"},{\"text\":\"迁西\",\"value\":\"130227\",\"children\":\"\"},{\"text\":\"玉田\",\"value\":\"130229\",\"children\":\"\"},{\"text\":\"曹妃甸\",\"value\":\"130230\",\"children\":\"\"},{\"text\":\"遵化\",\"value\":\"130281\",\"children\":\"\"},{\"text\":\"迁安\",\"value\":\"130283\",\"children\":\"\"}]},{\"text\":\"秦皇岛\",\"value\":\"130300\",\"children\":[{\"text\":\"海港\",\"value\":\"130302\",\"children\":\"\"},{\"text\":\"山海关\",\"value\":\"130303\",\"children\":\"\"},{\"text\":\"北戴河\",\"value\":\"130304\",\"children\":\"\"},{\"text\":\"青龙\",\"value\":\"130321\",\"children\":\"\"},{\"text\":\"昌黎\",\"value\":\"130322\",\"children\":\"\"},{\"text\":\"抚宁\",\"value\":\"130323\",\"children\":\"\"},{\"text\":\"卢龙\",\"value\":\"130324\",\"children\":\"\"}]},{\"text\":\"邯郸\",\"value\":\"130400\",\"children\":[{\"text\":\"邯山\",\"value\":\"130402\",\"children\":\"\"},{\"text\":\"丛台\",\"value\":\"130403\",\"children\":\"\"},{\"text\":\"复兴\",\"value\":\"130404\",\"children\":\"\"},{\"text\":\"峰峰矿\",\"value\":\"130406\",\"children\":\"\"},{\"text\":\"邯郸\",\"value\":\"130421\",\"children\":\"\"},{\"text\":\"临漳\",\"value\":\"130423\",\"children\":\"\"},{\"text\":\"成安\",\"value\":\"130424\",\"children\":\"\"},{\"text\":\"大名\",\"value\":\"130425\",\"children\":\"\"},{\"text\":\"涉县\",\"value\":\"130426\",\"children\":\"\"},{\"text\":\"磁县\",\"value\":\"130427\",\"children\":\"\"},{\"text\":\"肥乡\",\"value\":\"130428\",\"children\":\"\"},{\"text\":\"永年\",\"value\":\"130429\",\"children\":\"\"},{\"text\":\"邱县\",\"value\":\"130430\",\"children\":\"\"},{\"text\":\"鸡泽\",\"value\":\"130431\",\"children\":\"\"},{\"text\":\"广平\",\"value\":\"130432\",\"children\":\"\"},{\"text\":\"馆陶\",\"value\":\"130433\",\"children\":\"\"},{\"text\":\"魏县\",\"value\":\"130434\",\"children\":\"\"},{\"text\":\"曲周\",\"value\":\"130435\",\"children\":\"\"},{\"text\":\"武安\",\"value\":\"130481\",\"children\":\"\"}]},{\"text\":\"邢台\",\"value\":\"130500\",\"children\":[{\"text\":\"桥东\",\"value\":\"130502\",\"children\":\"\"},{\"text\":\"桥西\",\"value\":\"130503\",\"children\":\"\"},{\"text\":\"邢台\",\"value\":\"130521\",\"children\":\"\"},{\"text\":\"临城\",\"value\":\"130522\",\"children\":\"\"},{\"text\":\"内丘\",\"value\":\"130523\",\"children\":\"\"},{\"text\":\"柏乡\",\"value\":\"130524\",\"children\":\"\"},{\"text\":\"隆尧\",\"value\":\"130525\",\"children\":\"\"},{\"text\":\"任县\",\"value\":\"130526\",\"children\":\"\"},{\"text\":\"南和\",\"value\":\"130527\",\"children\":\"\"},{\"text\":\"宁晋\",\"value\":\"130528\",\"children\":\"\"},{\"text\":\"巨鹿\",\"value\":\"130529\",\"children\":\"\"},{\"text\":\"新河\",\"value\":\"130530\",\"children\":\"\"},{\"text\":\"广宗\",\"value\":\"130531\",\"children\":\"\"},{\"text\":\"平乡\",\"value\":\"130532\",\"children\":\"\"},{\"text\":\"威县\",\"value\":\"130533\",\"children\":\"\"},{\"text\":\"清河\",\"value\":\"130534\",\"children\":\"\"},{\"text\":\"临西\",\"value\":\"130535\",\"children\":\"\"},{\"text\":\"南宫\",\"value\":\"130581\",\"children\":\"\"},{\"text\":\"沙河\",\"value\":\"130582\",\"children\":\"\"}]},{\"text\":\"保定\",\"value\":\"130600\",\"children\":[{\"text\":\"新市\",\"value\":\"130602\",\"children\":\"\"},{\"text\":\"北市\",\"value\":\"130603\",\"children\":\"\"},{\"text\":\"南市\",\"value\":\"130604\",\"children\":\"\"},{\"text\":\"满城\",\"value\":\"130621\",\"children\":\"\"},{\"text\":\"清苑\",\"value\":\"130622\",\"children\":\"\"},{\"text\":\"涞水\",\"value\":\"130623\",\"children\":\"\"},{\"text\":\"阜平\",\"value\":\"130624\",\"children\":\"\"},{\"text\":\"徐水\",\"value\":\"130625\",\"children\":\"\"},{\"text\":\"定兴\",\"value\":\"130626\",\"children\":\"\"},{\"text\":\"唐县\",\"value\":\"130627\",\"children\":\"\"},{\"text\":\"高阳\",\"value\":\"130628\",\"children\":\"\"},{\"text\":\"容城\",\"value\":\"130629\",\"children\":\"\"},{\"text\":\"涞源\",\"value\":\"130630\",\"children\":\"\"},{\"text\":\"望都\",\"value\":\"130631\",\"children\":\"\"},{\"text\":\"安新\",\"value\":\"130632\",\"children\":\"\"},{\"text\":\"易县\",\"value\":\"130633\",\"children\":\"\"},{\"text\":\"曲阳\",\"value\":\"130634\",\"children\":\"\"},{\"text\":\"蠡县\",\"value\":\"130635\",\"children\":\"\"},{\"text\":\"顺平\",\"value\":\"130636\",\"children\":\"\"},{\"text\":\"博野\",\"value\":\"130637\",\"children\":\"\"},{\"text\":\"雄县\",\"value\":\"130638\",\"children\":\"\"},{\"text\":\"涿州\",\"value\":\"130681\",\"children\":\"\"},{\"text\":\"定州\",\"value\":\"130682\",\"children\":\"\"},{\"text\":\"安国\",\"value\":\"130683\",\"children\":\"\"},{\"text\":\"高碑店\",\"value\":\"130684\",\"children\":\"\"}]},{\"text\":\"张家口\",\"value\":\"130700\",\"children\":[{\"text\":\"桥东\",\"value\":\"130702\",\"children\":\"\"},{\"text\":\"桥西\",\"value\":\"130703\",\"children\":\"\"},{\"text\":\"宣化区\",\"value\":\"130705\",\"children\":\"\"},{\"text\":\"下花园\",\"value\":\"130706\",\"children\":\"\"},{\"text\":\"宣化县\",\"value\":\"130721\",\"children\":\"\"},{\"text\":\"张北\",\"value\":\"130722\",\"children\":\"\"},{\"text\":\"康保\",\"value\":\"130723\",\"children\":\"\"},{\"text\":\"沽源\",\"value\":\"130724\",\"children\":\"\"},{\"text\":\"尚义\",\"value\":\"130725\",\"children\":\"\"},{\"text\":\"蔚县\",\"value\":\"130726\",\"children\":\"\"},{\"text\":\"阳原\",\"value\":\"130727\",\"children\":\"\"},{\"text\":\"怀安\",\"value\":\"130728\",\"children\":\"\"},{\"text\":\"万全\",\"value\":\"130729\",\"children\":\"\"},{\"text\":\"怀来\",\"value\":\"130730\",\"children\":\"\"},{\"text\":\"涿鹿\",\"value\":\"130731\",\"children\":\"\"},{\"text\":\"赤城\",\"value\":\"130732\",\"children\":\"\"},{\"text\":\"崇礼\",\"value\":\"130733\",\"children\":\"\"}]},{\"text\":\"承德\",\"value\":\"130800\",\"children\":[{\"text\":\"双桥\",\"value\":\"130802\",\"children\":\"\"},{\"text\":\"双滦\",\"value\":\"130803\",\"children\":\"\"},{\"text\":\"鹰手营子矿\",\"value\":\"130804\",\"children\":\"\"},{\"text\":\"承德\",\"value\":\"130821\",\"children\":\"\"},{\"text\":\"兴隆\",\"value\":\"130822\",\"children\":\"\"},{\"text\":\"平泉\",\"value\":\"130823\",\"children\":\"\"},{\"text\":\"滦平\",\"value\":\"130824\",\"children\":\"\"},{\"text\":\"隆化\",\"value\":\"130825\",\"children\":\"\"},{\"text\":\"丰宁\",\"value\":\"130826\",\"children\":\"\"},{\"text\":\"宽城\",\"value\":\"130827\",\"children\":\"\"},{\"text\":\"围场\",\"value\":\"130828\",\"children\":\"\"}]},{\"text\":\"沧州\",\"value\":\"130900\",\"children\":[{\"text\":\"新华\",\"value\":\"130902\",\"children\":\"\"},{\"text\":\"运河\",\"value\":\"130903\",\"children\":\"\"},{\"text\":\"沧县\",\"value\":\"130921\",\"children\":\"\"},{\"text\":\"青县\",\"value\":\"130922\",\"children\":\"\"},{\"text\":\"东光\",\"value\":\"130923\",\"children\":\"\"},{\"text\":\"海兴\",\"value\":\"130924\",\"children\":\"\"},{\"text\":\"盐山\",\"value\":\"130925\",\"children\":\"\"},{\"text\":\"肃宁\",\"value\":\"130926\",\"children\":\"\"},{\"text\":\"南皮\",\"value\":\"130927\",\"children\":\"\"},{\"text\":\"吴桥\",\"value\":\"130928\",\"children\":\"\"},{\"text\":\"献县\",\"value\":\"130929\",\"children\":\"\"},{\"text\":\"孟村\",\"value\":\"130930\",\"children\":\"\"},{\"text\":\"泊头\",\"value\":\"130981\",\"children\":\"\"},{\"text\":\"任丘\",\"value\":\"130982\",\"children\":\"\"},{\"text\":\"黄骅\",\"value\":\"130983\",\"children\":\"\"},{\"text\":\"河间\",\"value\":\"130984\",\"children\":\"\"}]},{\"text\":\"廊坊\",\"value\":\"131000\",\"children\":[{\"text\":\"安次\",\"value\":\"131002\",\"children\":\"\"},{\"text\":\"广阳\",\"value\":\"131003\",\"children\":\"\"},{\"text\":\"固安\",\"value\":\"131022\",\"children\":\"\"},{\"text\":\"永清\",\"value\":\"131023\",\"children\":\"\"},{\"text\":\"香河\",\"value\":\"131024\",\"children\":\"\"},{\"text\":\"大城\",\"value\":\"131025\",\"children\":\"\"},{\"text\":\"文安\",\"value\":\"131026\",\"children\":\"\"},{\"text\":\"大厂\",\"value\":\"131028\",\"children\":\"\"},{\"text\":\"霸州\",\"value\":\"131081\",\"children\":\"\"},{\"text\":\"三河\",\"value\":\"131082\",\"children\":\"\"}]},{\"text\":\"衡水\",\"value\":\"131100\",\"children\":[{\"text\":\"桃城\",\"value\":\"131102\",\"children\":\"\"},{\"text\":\"枣强\",\"value\":\"131121\",\"children\":\"\"},{\"text\":\"武邑\",\"value\":\"131122\",\"children\":\"\"},{\"text\":\"武强\",\"value\":\"131123\",\"children\":\"\"},{\"text\":\"饶阳\",\"value\":\"131124\",\"children\":\"\"},{\"text\":\"安平\",\"value\":\"131125\",\"children\":\"\"},{\"text\":\"故城\",\"value\":\"131126\",\"children\":\"\"},{\"text\":\"景县\",\"value\":\"131127\",\"children\":\"\"},{\"text\":\"阜城\",\"value\":\"131128\",\"children\":\"\"},{\"text\":\"冀州\",\"value\":\"131181\",\"children\":\"\"},{\"text\":\"深州\",\"value\":\"131182\",\"children\":\"\"}]}]},{\"text\":\"山西\",\"value\":\"140000\",\"children\":[{\"text\":\"太原\",\"value\":\"140100\",\"children\":[{\"text\":\"小店\",\"value\":\"140105\",\"children\":\"\"},{\"text\":\"迎泽\",\"value\":\"140106\",\"children\":\"\"},{\"text\":\"杏花岭\",\"value\":\"140107\",\"children\":\"\"},{\"text\":\"尖草坪\",\"value\":\"140108\",\"children\":\"\"},{\"text\":\"万柏林\",\"value\":\"140109\",\"children\":\"\"},{\"text\":\"晋源\",\"value\":\"140110\",\"children\":\"\"},{\"text\":\"清徐\",\"value\":\"140121\",\"children\":\"\"},{\"text\":\"阳曲\",\"value\":\"140122\",\"children\":\"\"},{\"text\":\"娄烦\",\"value\":\"140123\",\"children\":\"\"},{\"text\":\"古交\",\"value\":\"140181\",\"children\":\"\"}]},{\"text\":\"大同\",\"value\":\"140200\",\"children\":[{\"text\":\"城区\",\"value\":\"140202\",\"children\":\"\"},{\"text\":\"矿区\",\"value\":\"140203\",\"children\":\"\"},{\"text\":\"南郊\",\"value\":\"140211\",\"children\":\"\"},{\"text\":\"新荣\",\"value\":\"140212\",\"children\":\"\"},{\"text\":\"阳高\",\"value\":\"140221\",\"children\":\"\"},{\"text\":\"天镇\",\"value\":\"140222\",\"children\":\"\"},{\"text\":\"广灵\",\"value\":\"140223\",\"children\":\"\"},{\"text\":\"灵丘\",\"value\":\"140224\",\"children\":\"\"},{\"text\":\"浑源\",\"value\":\"140225\",\"children\":\"\"},{\"text\":\"左云\",\"value\":\"140226\",\"children\":\"\"},{\"text\":\"大同\",\"value\":\"140227\",\"children\":\"\"}]},{\"text\":\"阳泉\",\"value\":\"140300\",\"children\":[{\"text\":\"城区\",\"value\":\"140302\",\"children\":\"\"},{\"text\":\"矿区\",\"value\":\"140303\",\"children\":\"\"},{\"text\":\"郊区\",\"value\":\"140311\",\"children\":\"\"},{\"text\":\"平定\",\"value\":\"140321\",\"children\":\"\"},{\"text\":\"盂县\",\"value\":\"140322\",\"children\":\"\"}]},{\"text\":\"长治\",\"value\":\"140400\",\"children\":[{\"text\":\"长治\",\"value\":\"140421\",\"children\":\"\"},{\"text\":\"襄垣\",\"value\":\"140423\",\"children\":\"\"},{\"text\":\"屯留\",\"value\":\"140424\",\"children\":\"\"},{\"text\":\"平顺\",\"value\":\"140425\",\"children\":\"\"},{\"text\":\"黎城\",\"value\":\"140426\",\"children\":\"\"},{\"text\":\"壶关\",\"value\":\"140427\",\"children\":\"\"},{\"text\":\"长子\",\"value\":\"140428\",\"children\":\"\"},{\"text\":\"武乡\",\"value\":\"140429\",\"children\":\"\"},{\"text\":\"沁县\",\"value\":\"140430\",\"children\":\"\"},{\"text\":\"沁源\",\"value\":\"140431\",\"children\":\"\"},{\"text\":\"潞城\",\"value\":\"140481\",\"children\":\"\"},{\"text\":\"城区\",\"value\":\"140482\",\"children\":\"\"},{\"text\":\"郊区\",\"value\":\"140483\",\"children\":\"\"}]},{\"text\":\"晋城\",\"value\":\"140500\",\"children\":[{\"text\":\"城区\",\"value\":\"140502\",\"children\":\"\"},{\"text\":\"沁水\",\"value\":\"140521\",\"children\":\"\"},{\"text\":\"阳城\",\"value\":\"140522\",\"children\":\"\"},{\"text\":\"陵川\",\"value\":\"140524\",\"children\":\"\"},{\"text\":\"泽州\",\"value\":\"140525\",\"children\":\"\"},{\"text\":\"高平\",\"value\":\"140581\",\"children\":\"\"}]},{\"text\":\"朔州\",\"value\":\"140600\",\"children\":[{\"text\":\"朔城\",\"value\":\"140602\",\"children\":\"\"},{\"text\":\"平鲁\",\"value\":\"140603\",\"children\":\"\"},{\"text\":\"山阴\",\"value\":\"140621\",\"children\":\"\"},{\"text\":\"应县\",\"value\":\"140622\",\"children\":\"\"},{\"text\":\"右玉\",\"value\":\"140623\",\"children\":\"\"},{\"text\":\"怀仁\",\"value\":\"140624\",\"children\":\"\"}]},{\"text\":\"晋中\",\"value\":\"140700\",\"children\":[{\"text\":\"榆次\",\"value\":\"140702\",\"children\":\"\"},{\"text\":\"榆社\",\"value\":\"140721\",\"children\":\"\"},{\"text\":\"左权\",\"value\":\"140722\",\"children\":\"\"},{\"text\":\"和顺\",\"value\":\"140723\",\"children\":\"\"},{\"text\":\"昔阳\",\"value\":\"140724\",\"children\":\"\"},{\"text\":\"寿阳\",\"value\":\"140725\",\"children\":\"\"},{\"text\":\"太谷\",\"value\":\"140726\",\"children\":\"\"},{\"text\":\"祁县\",\"value\":\"140727\",\"children\":\"\"},{\"text\":\"平遥\",\"value\":\"140728\",\"children\":\"\"},{\"text\":\"灵石\",\"value\":\"140729\",\"children\":\"\"},{\"text\":\"介休\",\"value\":\"140781\",\"children\":\"\"}]},{\"text\":\"运城\",\"value\":\"140800\",\"children\":[{\"text\":\"盐湖\",\"value\":\"140802\",\"children\":\"\"},{\"text\":\"临猗\",\"value\":\"140821\",\"children\":\"\"},{\"text\":\"万荣\",\"value\":\"140822\",\"children\":\"\"},{\"text\":\"闻喜\",\"value\":\"140823\",\"children\":\"\"},{\"text\":\"稷山\",\"value\":\"140824\",\"children\":\"\"},{\"text\":\"新绛\",\"value\":\"140825\",\"children\":\"\"},{\"text\":\"绛县\",\"value\":\"140826\",\"children\":\"\"},{\"text\":\"垣曲\",\"value\":\"140827\",\"children\":\"\"},{\"text\":\"夏县\",\"value\":\"140828\",\"children\":\"\"},{\"text\":\"平陆\",\"value\":\"140829\",\"children\":\"\"},{\"text\":\"芮城\",\"value\":\"140830\",\"children\":\"\"},{\"text\":\"永济\",\"value\":\"140881\",\"children\":\"\"},{\"text\":\"河津\",\"value\":\"140882\",\"children\":\"\"}]},{\"text\":\"忻州\",\"value\":\"140900\",\"children\":[{\"text\":\"忻府\",\"value\":\"140902\",\"children\":\"\"},{\"text\":\"定襄\",\"value\":\"140921\",\"children\":\"\"},{\"text\":\"五台\",\"value\":\"140922\",\"children\":\"\"},{\"text\":\"代县\",\"value\":\"140923\",\"children\":\"\"},{\"text\":\"繁峙\",\"value\":\"140924\",\"children\":\"\"},{\"text\":\"宁武\",\"value\":\"140925\",\"children\":\"\"},{\"text\":\"静乐\",\"value\":\"140926\",\"children\":\"\"},{\"text\":\"神池\",\"value\":\"140927\",\"children\":\"\"},{\"text\":\"五寨\",\"value\":\"140928\",\"children\":\"\"},{\"text\":\"岢岚\",\"value\":\"140929\",\"children\":\"\"},{\"text\":\"河曲\",\"value\":\"140930\",\"children\":\"\"},{\"text\":\"保德\",\"value\":\"140931\",\"children\":\"\"},{\"text\":\"偏关\",\"value\":\"140932\",\"children\":\"\"},{\"text\":\"原平\",\"value\":\"140981\",\"children\":\"\"}]},{\"text\":\"临汾\",\"value\":\"141000\",\"children\":[{\"text\":\"尧都\",\"value\":\"141002\",\"children\":\"\"},{\"text\":\"曲沃\",\"value\":\"141021\",\"children\":\"\"},{\"text\":\"翼城\",\"value\":\"141022\",\"children\":\"\"},{\"text\":\"襄汾\",\"value\":\"141023\",\"children\":\"\"},{\"text\":\"洪洞\",\"value\":\"141024\",\"children\":\"\"},{\"text\":\"古县\",\"value\":\"141025\",\"children\":\"\"},{\"text\":\"安泽\",\"value\":\"141026\",\"children\":\"\"},{\"text\":\"浮山\",\"value\":\"141027\",\"children\":\"\"},{\"text\":\"吉县\",\"value\":\"141028\",\"children\":\"\"},{\"text\":\"乡宁\",\"value\":\"141029\",\"children\":\"\"},{\"text\":\"大宁\",\"value\":\"141030\",\"children\":\"\"},{\"text\":\"隰县\",\"value\":\"141031\",\"children\":\"\"},{\"text\":\"永和\",\"value\":\"141032\",\"children\":\"\"},{\"text\":\"蒲县\",\"value\":\"141033\",\"children\":\"\"},{\"text\":\"汾西\",\"value\":\"141034\",\"children\":\"\"},{\"text\":\"侯马\",\"value\":\"141081\",\"children\":\"\"},{\"text\":\"霍州\",\"value\":\"141082\",\"children\":\"\"}]},{\"text\":\"吕梁\",\"value\":\"141100\",\"children\":[{\"text\":\"离石\",\"value\":\"141102\",\"children\":\"\"},{\"text\":\"文水\",\"value\":\"141121\",\"children\":\"\"},{\"text\":\"交城\",\"value\":\"141122\",\"children\":\"\"},{\"text\":\"兴县\",\"value\":\"141123\",\"children\":\"\"},{\"text\":\"临县\",\"value\":\"141124\",\"children\":\"\"},{\"text\":\"柳林\",\"value\":\"141125\",\"children\":\"\"},{\"text\":\"石楼\",\"value\":\"141126\",\"children\":\"\"},{\"text\":\"岚县\",\"value\":\"141127\",\"children\":\"\"},{\"text\":\"方山\",\"value\":\"141128\",\"children\":\"\"},{\"text\":\"中阳\",\"value\":\"141129\",\"children\":\"\"},{\"text\":\"交口\",\"value\":\"141130\",\"children\":\"\"},{\"text\":\"孝义\",\"value\":\"141181\",\"children\":\"\"},{\"text\":\"汾阳\",\"value\":\"141182\",\"children\":\"\"}]}]},{\"text\":\"内蒙古\",\"value\":\"150000\",\"children\":[{\"text\":\"呼和浩特\",\"value\":\"150100\",\"children\":[{\"text\":\"新城\",\"value\":\"150102\",\"children\":\"\"},{\"text\":\"回民\",\"value\":\"150103\",\"children\":\"\"},{\"text\":\"玉泉\",\"value\":\"150104\",\"children\":\"\"},{\"text\":\"赛罕\",\"value\":\"150105\",\"children\":\"\"},{\"text\":\"土默特左\",\"value\":\"150121\",\"children\":\"\"},{\"text\":\"托克托\",\"value\":\"150122\",\"children\":\"\"},{\"text\":\"和林格尔\",\"value\":\"150123\",\"children\":\"\"},{\"text\":\"清水河\",\"value\":\"150124\",\"children\":\"\"},{\"text\":\"武川\",\"value\":\"150125\",\"children\":\"\"}]},{\"text\":\"包头\",\"value\":\"150200\",\"children\":[{\"text\":\"东河\",\"value\":\"150202\",\"children\":\"\"},{\"text\":\"昆都仑\",\"value\":\"150203\",\"children\":\"\"},{\"text\":\"青山\",\"value\":\"150204\",\"children\":\"\"},{\"text\":\"石拐\",\"value\":\"150205\",\"children\":\"\"},{\"text\":\"白云矿区\",\"value\":\"150206\",\"children\":\"\"},{\"text\":\"九原\",\"value\":\"150207\",\"children\":\"\"},{\"text\":\"土默特右\",\"value\":\"150221\",\"children\":\"\"},{\"text\":\"固阳\",\"value\":\"150222\",\"children\":\"\"},{\"text\":\"达尔罕茂明安联合\",\"value\":\"150223\",\"children\":\"\"}]},{\"text\":\"乌海\",\"value\":\"150300\",\"children\":[{\"text\":\"海勃湾\",\"value\":\"150302\",\"children\":\"\"},{\"text\":\"海南\",\"value\":\"150303\",\"children\":\"\"},{\"text\":\"乌达\",\"value\":\"150304\",\"children\":\"\"}]},{\"text\":\"赤峰\",\"value\":\"150400\",\"children\":[{\"text\":\"红山\",\"value\":\"150402\",\"children\":\"\"},{\"text\":\"元宝山\",\"value\":\"150403\",\"children\":\"\"},{\"text\":\"松山\",\"value\":\"150404\",\"children\":\"\"},{\"text\":\"阿鲁科尔沁\",\"value\":\"150421\",\"children\":\"\"},{\"text\":\"巴林左\",\"value\":\"150422\",\"children\":\"\"},{\"text\":\"巴林右\",\"value\":\"150423\",\"children\":\"\"},{\"text\":\"林西\",\"value\":\"150424\",\"children\":\"\"},{\"text\":\"克什克腾\",\"value\":\"150425\",\"children\":\"\"},{\"text\":\"翁牛特\",\"value\":\"150426\",\"children\":\"\"},{\"text\":\"喀喇沁\",\"value\":\"150428\",\"children\":\"\"},{\"text\":\"宁城\",\"value\":\"150429\",\"children\":\"\"},{\"text\":\"敖汉\",\"value\":\"150430\",\"children\":\"\"}]},{\"text\":\"通辽\",\"value\":\"150500\",\"children\":[{\"text\":\"科尔沁\",\"value\":\"150502\",\"children\":\"\"},{\"text\":\"科尔沁左翼中\",\"value\":\"150521\",\"children\":\"\"},{\"text\":\"科尔沁左翼后\",\"value\":\"150522\",\"children\":\"\"},{\"text\":\"开鲁\",\"value\":\"150523\",\"children\":\"\"},{\"text\":\"库伦\",\"value\":\"150524\",\"children\":\"\"},{\"text\":\"奈曼\",\"value\":\"150525\",\"children\":\"\"},{\"text\":\"扎鲁特\",\"value\":\"150526\",\"children\":\"\"},{\"text\":\"霍林郭勒\",\"value\":\"150581\",\"children\":\"\"}]},{\"text\":\"鄂尔多斯\",\"value\":\"150600\",\"children\":[{\"text\":\"东胜\",\"value\":\"150602\",\"children\":\"\"},{\"text\":\"达拉特\",\"value\":\"150621\",\"children\":\"\"},{\"text\":\"准格尔\",\"value\":\"150622\",\"children\":\"\"},{\"text\":\"鄂托克前\",\"value\":\"150623\",\"children\":\"\"},{\"text\":\"鄂托克\",\"value\":\"150624\",\"children\":\"\"},{\"text\":\"杭锦\",\"value\":\"150625\",\"children\":\"\"},{\"text\":\"乌审\",\"value\":\"150626\",\"children\":\"\"},{\"text\":\"伊金霍洛\",\"value\":\"150627\",\"children\":\"\"}]},{\"text\":\"呼伦贝尔\",\"value\":\"150700\",\"children\":[{\"text\":\"海拉尔\",\"value\":\"150702\",\"children\":\"\"},{\"text\":\"扎赉诺尔\",\"value\":\"150703\",\"children\":\"\"},{\"text\":\"阿荣\",\"value\":\"150721\",\"children\":\"\"},{\"text\":\"莫力达瓦\",\"value\":\"150722\",\"children\":\"\"},{\"text\":\"鄂伦春\",\"value\":\"150723\",\"children\":\"\"},{\"text\":\"鄂温克\",\"value\":\"150724\",\"children\":\"\"},{\"text\":\"陈巴尔虎\",\"value\":\"150725\",\"children\":\"\"},{\"text\":\"新巴尔虎左\",\"value\":\"150726\",\"children\":\"\"},{\"text\":\"新巴尔虎右\",\"value\":\"150727\",\"children\":\"\"},{\"text\":\"满洲里\",\"value\":\"150781\",\"children\":\"\"},{\"text\":\"牙克石\",\"value\":\"150782\",\"children\":\"\"},{\"text\":\"扎兰屯\",\"value\":\"150783\",\"children\":\"\"},{\"text\":\"额尔古纳\",\"value\":\"150784\",\"children\":\"\"},{\"text\":\"根河\",\"value\":\"150785\",\"children\":\"\"}]},{\"text\":\"巴彦淖尔\",\"value\":\"150800\",\"children\":[{\"text\":\"临河\",\"value\":\"150802\",\"children\":\"\"},{\"text\":\"五原\",\"value\":\"150821\",\"children\":\"\"},{\"text\":\"磴口\",\"value\":\"150822\",\"children\":\"\"},{\"text\":\"乌拉特前\",\"value\":\"150823\",\"children\":\"\"},{\"text\":\"乌拉特中\",\"value\":\"150824\",\"children\":\"\"},{\"text\":\"乌拉特后\",\"value\":\"150825\",\"children\":\"\"},{\"text\":\"杭锦后\",\"value\":\"150826\",\"children\":\"\"}]},{\"text\":\"乌兰察布\",\"value\":\"150900\",\"children\":[{\"text\":\"集宁\",\"value\":\"150902\",\"children\":\"\"},{\"text\":\"卓资\",\"value\":\"150921\",\"children\":\"\"},{\"text\":\"化德\",\"value\":\"150922\",\"children\":\"\"},{\"text\":\"商都\",\"value\":\"150923\",\"children\":\"\"},{\"text\":\"兴和\",\"value\":\"150924\",\"children\":\"\"},{\"text\":\"凉城\",\"value\":\"150925\",\"children\":\"\"},{\"text\":\"察哈尔右翼前\",\"value\":\"150926\",\"children\":\"\"},{\"text\":\"察哈尔右翼中\",\"value\":\"150927\",\"children\":\"\"},{\"text\":\"察哈尔右翼后\",\"value\":\"150928\",\"children\":\"\"},{\"text\":\"四子王\",\"value\":\"150929\",\"children\":\"\"},{\"text\":\"丰镇\",\"value\":\"150981\",\"children\":\"\"}]},{\"text\":\"兴安\",\"value\":\"152200\",\"children\":[{\"text\":\"乌兰浩特\",\"value\":\"152201\",\"children\":\"\"},{\"text\":\"阿尔山\",\"value\":\"152202\",\"children\":\"\"},{\"text\":\"科尔沁右翼前\",\"value\":\"152221\",\"children\":\"\"},{\"text\":\"科尔沁右翼中\",\"value\":\"152222\",\"children\":\"\"},{\"text\":\"扎赉特\",\"value\":\"152223\",\"children\":\"\"},{\"text\":\"突泉\",\"value\":\"152224\",\"children\":\"\"}]},{\"text\":\"锡林郭勒\",\"value\":\"152500\",\"children\":[{\"text\":\"二连浩特\",\"value\":\"152501\",\"children\":\"\"},{\"text\":\"锡林浩特\",\"value\":\"152502\",\"children\":\"\"},{\"text\":\"阿巴嘎\",\"value\":\"152522\",\"children\":\"\"},{\"text\":\"苏尼特左\",\"value\":\"152523\",\"children\":\"\"},{\"text\":\"苏尼特右\",\"value\":\"152524\",\"children\":\"\"},{\"text\":\"东乌珠穆沁\",\"value\":\"152525\",\"children\":\"\"},{\"text\":\"西乌珠穆沁\",\"value\":\"152526\",\"children\":\"\"},{\"text\":\"太仆寺\",\"value\":\"152527\",\"children\":\"\"},{\"text\":\"镶黄\",\"value\":\"152528\",\"children\":\"\"},{\"text\":\"正镶白\",\"value\":\"152529\",\"children\":\"\"},{\"text\":\"正蓝\",\"value\":\"152530\",\"children\":\"\"},{\"text\":\"多伦\",\"value\":\"152531\",\"children\":\"\"}]},{\"text\":\"阿拉善\",\"value\":\"152900\",\"children\":[{\"text\":\"阿拉善左\",\"value\":\"152921\",\"children\":\"\"},{\"text\":\"阿拉善右\",\"value\":\"152922\",\"children\":\"\"},{\"text\":\"额济纳\",\"value\":\"152923\",\"children\":\"\"}]}]},{\"text\":\"辽宁\",\"value\":\"210000\",\"children\":[{\"text\":\"沈阳\",\"value\":\"210100\",\"children\":[{\"text\":\"和平\",\"value\":\"210102\",\"children\":\"\"},{\"text\":\"沈河\",\"value\":\"210103\",\"children\":\"\"},{\"text\":\"大东\",\"value\":\"210104\",\"children\":\"\"},{\"text\":\"皇姑\",\"value\":\"210105\",\"children\":\"\"},{\"text\":\"铁西\",\"value\":\"210106\",\"children\":\"\"},{\"text\":\"苏家屯\",\"value\":\"210111\",\"children\":\"\"},{\"text\":\"浑南\",\"value\":\"210112\",\"children\":\"\"},{\"text\":\"新城子\",\"value\":\"210113\",\"children\":\"\"},{\"text\":\"于洪\",\"value\":\"210114\",\"children\":\"\"},{\"text\":\"辽中\",\"value\":\"210122\",\"children\":\"\"},{\"text\":\"康平\",\"value\":\"210123\",\"children\":\"\"},{\"text\":\"法库\",\"value\":\"210124\",\"children\":\"\"},{\"text\":\"新民\",\"value\":\"210181\",\"children\":\"\"},{\"text\":\"沈北\",\"value\":\"210184\",\"children\":\"\"}]},{\"text\":\"大连\",\"value\":\"210200\",\"children\":[{\"text\":\"中山\",\"value\":\"210202\",\"children\":\"\"},{\"text\":\"西岗\",\"value\":\"210203\",\"children\":\"\"},{\"text\":\"沙河口\",\"value\":\"210204\",\"children\":\"\"},{\"text\":\"甘井子\",\"value\":\"210211\",\"children\":\"\"},{\"text\":\"旅顺口\",\"value\":\"210212\",\"children\":\"\"},{\"text\":\"金州\",\"value\":\"210213\",\"children\":\"\"},{\"text\":\"长海\",\"value\":\"210224\",\"children\":\"\"},{\"text\":\"瓦房店\",\"value\":\"210281\",\"children\":\"\"},{\"text\":\"普兰店\",\"value\":\"210282\",\"children\":\"\"},{\"text\":\"庄河\",\"value\":\"210283\",\"children\":\"\"}]},{\"text\":\"鞍山\",\"value\":\"210300\",\"children\":[{\"text\":\"铁东\",\"value\":\"210302\",\"children\":\"\"},{\"text\":\"铁西\",\"value\":\"210303\",\"children\":\"\"},{\"text\":\"立山\",\"value\":\"210304\",\"children\":\"\"},{\"text\":\"千山\",\"value\":\"210311\",\"children\":\"\"},{\"text\":\"台安\",\"value\":\"210321\",\"children\":\"\"},{\"text\":\"岫岩\",\"value\":\"210323\",\"children\":\"\"},{\"text\":\"海城\",\"value\":\"210381\",\"children\":\"\"}]},{\"text\":\"抚顺\",\"value\":\"210400\",\"children\":[{\"text\":\"新抚\",\"value\":\"210402\",\"children\":\"\"},{\"text\":\"东洲\",\"value\":\"210403\",\"children\":\"\"},{\"text\":\"望花\",\"value\":\"210404\",\"children\":\"\"},{\"text\":\"顺城\",\"value\":\"210411\",\"children\":\"\"},{\"text\":\"抚顺\",\"value\":\"210421\",\"children\":\"\"},{\"text\":\"新宾\",\"value\":\"210422\",\"children\":\"\"},{\"text\":\"清原\",\"value\":\"210423\",\"children\":\"\"}]},{\"text\":\"本溪\",\"value\":\"210500\",\"children\":[{\"text\":\"平山\",\"value\":\"210502\",\"children\":\"\"},{\"text\":\"溪湖\",\"value\":\"210503\",\"children\":\"\"},{\"text\":\"明山\",\"value\":\"210504\",\"children\":\"\"},{\"text\":\"南芬\",\"value\":\"210505\",\"children\":\"\"},{\"text\":\"本溪\",\"value\":\"210521\",\"children\":\"\"},{\"text\":\"桓仁\",\"value\":\"210522\",\"children\":\"\"}]},{\"text\":\"丹东\",\"value\":\"210600\",\"children\":[{\"text\":\"元宝\",\"value\":\"210602\",\"children\":\"\"},{\"text\":\"振兴\",\"value\":\"210603\",\"children\":\"\"},{\"text\":\"振安\",\"value\":\"210604\",\"children\":\"\"},{\"text\":\"宽甸\",\"value\":\"210624\",\"children\":\"\"},{\"text\":\"东港\",\"value\":\"210681\",\"children\":\"\"},{\"text\":\"凤城\",\"value\":\"210682\",\"children\":\"\"}]},{\"text\":\"锦州\",\"value\":\"210700\",\"children\":[{\"text\":\"古塔\",\"value\":\"210702\",\"children\":\"\"},{\"text\":\"凌河\",\"value\":\"210703\",\"children\":\"\"},{\"text\":\"太和\",\"value\":\"210711\",\"children\":\"\"},{\"text\":\"黑山\",\"value\":\"210726\",\"children\":\"\"},{\"text\":\"义县\",\"value\":\"210727\",\"children\":\"\"},{\"text\":\"凌海\",\"value\":\"210781\",\"children\":\"\"},{\"text\":\"北镇\",\"value\":\"210782\",\"children\":\"\"}]},{\"text\":\"营口\",\"value\":\"210800\",\"children\":[{\"text\":\"站前\",\"value\":\"210802\",\"children\":\"\"},{\"text\":\"西市\",\"value\":\"210803\",\"children\":\"\"},{\"text\":\"鲅鱼圈\",\"value\":\"210804\",\"children\":\"\"},{\"text\":\"老边\",\"value\":\"210811\",\"children\":\"\"},{\"text\":\"盖州\",\"value\":\"210881\",\"children\":\"\"},{\"text\":\"大石桥\",\"value\":\"210882\",\"children\":\"\"}]},{\"text\":\"阜新\",\"value\":\"210900\",\"children\":[{\"text\":\"海州\",\"value\":\"210902\",\"children\":\"\"},{\"text\":\"新邱\",\"value\":\"210903\",\"children\":\"\"},{\"text\":\"太平\",\"value\":\"210904\",\"children\":\"\"},{\"text\":\"清河门\",\"value\":\"210905\",\"children\":\"\"},{\"text\":\"细河\",\"value\":\"210911\",\"children\":\"\"},{\"text\":\"阜新\",\"value\":\"210921\",\"children\":\"\"},{\"text\":\"彰武\",\"value\":\"210922\",\"children\":\"\"}]},{\"text\":\"辽阳\",\"value\":\"211000\",\"children\":[{\"text\":\"白塔\",\"value\":\"211002\",\"children\":\"\"},{\"text\":\"文圣\",\"value\":\"211003\",\"children\":\"\"},{\"text\":\"宏伟\",\"value\":\"211004\",\"children\":\"\"},{\"text\":\"弓长岭\",\"value\":\"211005\",\"children\":\"\"},{\"text\":\"太子河\",\"value\":\"211011\",\"children\":\"\"},{\"text\":\"辽阳\",\"value\":\"211021\",\"children\":\"\"},{\"text\":\"灯塔\",\"value\":\"211081\",\"children\":\"\"}]},{\"text\":\"盘锦\",\"value\":\"211100\",\"children\":[{\"text\":\"双台子\",\"value\":\"211102\",\"children\":\"\"},{\"text\":\"兴隆台\",\"value\":\"211103\",\"children\":\"\"},{\"text\":\"大洼\",\"value\":\"211121\",\"children\":\"\"},{\"text\":\"盘山\",\"value\":\"211122\",\"children\":\"\"}]},{\"text\":\"铁岭\",\"value\":\"211200\",\"children\":[{\"text\":\"银州\",\"value\":\"211202\",\"children\":\"\"},{\"text\":\"清河\",\"value\":\"211204\",\"children\":\"\"},{\"text\":\"铁岭\",\"value\":\"211221\",\"children\":\"\"},{\"text\":\"西丰\",\"value\":\"211223\",\"children\":\"\"},{\"text\":\"昌图\",\"value\":\"211224\",\"children\":\"\"},{\"text\":\"调兵山\",\"value\":\"211281\",\"children\":\"\"},{\"text\":\"开原\",\"value\":\"211282\",\"children\":\"\"}]},{\"text\":\"朝阳\",\"value\":\"211300\",\"children\":[{\"text\":\"双塔\",\"value\":\"211302\",\"children\":\"\"},{\"text\":\"龙城\",\"value\":\"211303\",\"children\":\"\"},{\"text\":\"朝阳\",\"value\":\"211321\",\"children\":\"\"},{\"text\":\"建平\",\"value\":\"211322\",\"children\":\"\"},{\"text\":\"喀左\",\"value\":\"211324\",\"children\":\"\"},{\"text\":\"北票\",\"value\":\"211381\",\"children\":\"\"},{\"text\":\"凌源\",\"value\":\"211382\",\"children\":\"\"}]},{\"text\":\"葫芦岛\",\"value\":\"211400\",\"children\":[{\"text\":\"连山\",\"value\":\"211402\",\"children\":\"\"},{\"text\":\"龙港\",\"value\":\"211403\",\"children\":\"\"},{\"text\":\"南票\",\"value\":\"211404\",\"children\":\"\"},{\"text\":\"绥中\",\"value\":\"211421\",\"children\":\"\"},{\"text\":\"建昌\",\"value\":\"211422\",\"children\":\"\"},{\"text\":\"兴城\",\"value\":\"211481\",\"children\":\"\"}]}]},{\"text\":\"吉林\",\"value\":\"220000\",\"children\":[{\"text\":\"长春\",\"value\":\"220100\",\"children\":[{\"text\":\"南关\",\"value\":\"220102\",\"children\":\"\"},{\"text\":\"宽城\",\"value\":\"220103\",\"children\":\"\"},{\"text\":\"朝阳\",\"value\":\"220104\",\"children\":\"\"},{\"text\":\"二道\",\"value\":\"220105\",\"children\":\"\"},{\"text\":\"绿园\",\"value\":\"220106\",\"children\":\"\"},{\"text\":\"双阳\",\"value\":\"220112\",\"children\":\"\"},{\"text\":\"农安\",\"value\":\"220122\",\"children\":\"\"},{\"text\":\"九台\",\"value\":\"220181\",\"children\":\"\"},{\"text\":\"榆树\",\"value\":\"220182\",\"children\":\"\"},{\"text\":\"德惠\",\"value\":\"220183\",\"children\":\"\"}]},{\"text\":\"吉林\",\"value\":\"220200\",\"children\":[{\"text\":\"昌邑\",\"value\":\"220202\",\"children\":\"\"},{\"text\":\"龙潭\",\"value\":\"220203\",\"children\":\"\"},{\"text\":\"船营\",\"value\":\"220204\",\"children\":\"\"},{\"text\":\"丰满\",\"value\":\"220211\",\"children\":\"\"},{\"text\":\"永吉\",\"value\":\"220221\",\"children\":\"\"},{\"text\":\"蛟河\",\"value\":\"220281\",\"children\":\"\"},{\"text\":\"桦甸\",\"value\":\"220282\",\"children\":\"\"},{\"text\":\"舒兰\",\"value\":\"220283\",\"children\":\"\"},{\"text\":\"磐石\",\"value\":\"220284\",\"children\":\"\"}]},{\"text\":\"四平\",\"value\":\"220300\",\"children\":[{\"text\":\"铁西\",\"value\":\"220302\",\"children\":\"\"},{\"text\":\"铁东\",\"value\":\"220303\",\"children\":\"\"},{\"text\":\"梨树\",\"value\":\"220322\",\"children\":\"\"},{\"text\":\"伊通\",\"value\":\"220323\",\"children\":\"\"},{\"text\":\"公主岭\",\"value\":\"220381\",\"children\":\"\"},{\"text\":\"双辽\",\"value\":\"220382\",\"children\":\"\"}]},{\"text\":\"辽源\",\"value\":\"220400\",\"children\":[{\"text\":\"龙山\",\"value\":\"220402\",\"children\":\"\"},{\"text\":\"西安\",\"value\":\"220403\",\"children\":\"\"},{\"text\":\"东丰\",\"value\":\"220421\",\"children\":\"\"},{\"text\":\"东辽\",\"value\":\"220422\",\"children\":\"\"}]},{\"text\":\"通化\",\"value\":\"220500\",\"children\":[{\"text\":\"东昌\",\"value\":\"220502\",\"children\":\"\"},{\"text\":\"二道江\",\"value\":\"220503\",\"children\":\"\"},{\"text\":\"通化\",\"value\":\"220521\",\"children\":\"\"},{\"text\":\"辉南\",\"value\":\"220523\",\"children\":\"\"},{\"text\":\"柳河\",\"value\":\"220524\",\"children\":\"\"},{\"text\":\"梅河口\",\"value\":\"220581\",\"children\":\"\"},{\"text\":\"集安\",\"value\":\"220582\",\"children\":\"\"}]},{\"text\":\"白山\",\"value\":\"220600\",\"children\":[{\"text\":\"浑江\",\"value\":\"220602\",\"children\":\"\"},{\"text\":\"抚松\",\"value\":\"220621\",\"children\":\"\"},{\"text\":\"靖宇\",\"value\":\"220622\",\"children\":\"\"},{\"text\":\"长白\",\"value\":\"220623\",\"children\":\"\"},{\"text\":\"江源\",\"value\":\"220625\",\"children\":\"\"},{\"text\":\"临江\",\"value\":\"220681\",\"children\":\"\"}]},{\"text\":\"松原\",\"value\":\"220700\",\"children\":[{\"text\":\"宁江\",\"value\":\"220702\",\"children\":\"\"},{\"text\":\"前郭\",\"value\":\"220721\",\"children\":\"\"},{\"text\":\"长岭\",\"value\":\"220722\",\"children\":\"\"},{\"text\":\"乾安\",\"value\":\"220723\",\"children\":\"\"},{\"text\":\"扶余\",\"value\":\"220724\",\"children\":\"\"}]},{\"text\":\"白城\",\"value\":\"220800\",\"children\":[{\"text\":\"洮北\",\"value\":\"220802\",\"children\":\"\"},{\"text\":\"镇赉\",\"value\":\"220821\",\"children\":\"\"},{\"text\":\"通榆\",\"value\":\"220822\",\"children\":\"\"},{\"text\":\"洮南\",\"value\":\"220881\",\"children\":\"\"},{\"text\":\"大安\",\"value\":\"220882\",\"children\":\"\"}]},{\"text\":\"延边朝鲜族\",\"value\":\"222400\",\"children\":[{\"text\":\"延吉\",\"value\":\"222401\",\"children\":\"\"},{\"text\":\"图们\",\"value\":\"222402\",\"children\":\"\"},{\"text\":\"敦化\",\"value\":\"222403\",\"children\":\"\"},{\"text\":\"珲春\",\"value\":\"222404\",\"children\":\"\"},{\"text\":\"龙井\",\"value\":\"222405\",\"children\":\"\"},{\"text\":\"和龙\",\"value\":\"222406\",\"children\":\"\"},{\"text\":\"汪清\",\"value\":\"222424\",\"children\":\"\"},{\"text\":\"安图\",\"value\":\"222426\",\"children\":\"\"}]}]},{\"text\":\"黑龙江\",\"value\":\"230000\",\"children\":[{\"text\":\"哈尔滨\",\"value\":\"230100\",\"children\":[{\"text\":\"道里\",\"value\":\"230102\",\"children\":\"\"},{\"text\":\"南岗\",\"value\":\"230103\",\"children\":\"\"},{\"text\":\"道外\",\"value\":\"230104\",\"children\":\"\"},{\"text\":\"香坊\",\"value\":\"230106\",\"children\":\"\"},{\"text\":\"平房\",\"value\":\"230108\",\"children\":\"\"},{\"text\":\"松北\",\"value\":\"230109\",\"children\":\"\"},{\"text\":\"呼兰\",\"value\":\"230111\",\"children\":\"\"},{\"text\":\"依兰\",\"value\":\"230123\",\"children\":\"\"},{\"text\":\"方正\",\"value\":\"230124\",\"children\":\"\"},{\"text\":\"宾县\",\"value\":\"230125\",\"children\":\"\"},{\"text\":\"巴彦\",\"value\":\"230126\",\"children\":\"\"},{\"text\":\"木兰\",\"value\":\"230127\",\"children\":\"\"},{\"text\":\"通河\",\"value\":\"230128\",\"children\":\"\"},{\"text\":\"延寿\",\"value\":\"230129\",\"children\":\"\"},{\"text\":\"阿城\",\"value\":\"230181\",\"children\":\"\"},{\"text\":\"双城\",\"value\":\"230182\",\"children\":\"\"},{\"text\":\"尚志\",\"value\":\"230183\",\"children\":\"\"},{\"text\":\"五常\",\"value\":\"230184\",\"children\":\"\"}]},{\"text\":\"齐齐哈尔\",\"value\":\"230200\",\"children\":[{\"text\":\"龙沙\",\"value\":\"230202\",\"children\":\"\"},{\"text\":\"建华\",\"value\":\"230203\",\"children\":\"\"},{\"text\":\"铁锋\",\"value\":\"230204\",\"children\":\"\"},{\"text\":\"昂昂溪\",\"value\":\"230205\",\"children\":\"\"},{\"text\":\"富拉尔基\",\"value\":\"230206\",\"children\":\"\"},{\"text\":\"碾子山\",\"value\":\"230207\",\"children\":\"\"},{\"text\":\"梅里斯达斡尔族\",\"value\":\"230208\",\"children\":\"\"},{\"text\":\"龙江\",\"value\":\"230221\",\"children\":\"\"},{\"text\":\"依安\",\"value\":\"230223\",\"children\":\"\"},{\"text\":\"泰来\",\"value\":\"230224\",\"children\":\"\"},{\"text\":\"甘南\",\"value\":\"230225\",\"children\":\"\"},{\"text\":\"富裕\",\"value\":\"230227\",\"children\":\"\"},{\"text\":\"克山\",\"value\":\"230229\",\"children\":\"\"},{\"text\":\"克东\",\"value\":\"230230\",\"children\":\"\"},{\"text\":\"拜泉\",\"value\":\"230231\",\"children\":\"\"},{\"text\":\"讷河\",\"value\":\"230281\",\"children\":\"\"}]},{\"text\":\"鸡西\",\"value\":\"230300\",\"children\":[{\"text\":\"鸡冠\",\"value\":\"230302\",\"children\":\"\"},{\"text\":\"恒山\",\"value\":\"230303\",\"children\":\"\"},{\"text\":\"滴道\",\"value\":\"230304\",\"children\":\"\"},{\"text\":\"梨树\",\"value\":\"230305\",\"children\":\"\"},{\"text\":\"城子河\",\"value\":\"230306\",\"children\":\"\"},{\"text\":\"麻山\",\"value\":\"230307\",\"children\":\"\"},{\"text\":\"鸡东\",\"value\":\"230321\",\"children\":\"\"},{\"text\":\"虎林\",\"value\":\"230381\",\"children\":\"\"},{\"text\":\"密山\",\"value\":\"230382\",\"children\":\"\"}]},{\"text\":\"鹤岗\",\"value\":\"230400\",\"children\":[{\"text\":\"向阳\",\"value\":\"230402\",\"children\":\"\"},{\"text\":\"工农\",\"value\":\"230403\",\"children\":\"\"},{\"text\":\"南山\",\"value\":\"230404\",\"children\":\"\"},{\"text\":\"兴安\",\"value\":\"230405\",\"children\":\"\"},{\"text\":\"东山\",\"value\":\"230406\",\"children\":\"\"},{\"text\":\"兴山\",\"value\":\"230407\",\"children\":\"\"},{\"text\":\"萝北\",\"value\":\"230421\",\"children\":\"\"},{\"text\":\"绥滨\",\"value\":\"230422\",\"children\":\"\"}]},{\"text\":\"双鸭山\",\"value\":\"230500\",\"children\":[{\"text\":\"尖山\",\"value\":\"230502\",\"children\":\"\"},{\"text\":\"岭东\",\"value\":\"230503\",\"children\":\"\"},{\"text\":\"四方台\",\"value\":\"230505\",\"children\":\"\"},{\"text\":\"宝山\",\"value\":\"230506\",\"children\":\"\"},{\"text\":\"集贤\",\"value\":\"230521\",\"children\":\"\"},{\"text\":\"友谊\",\"value\":\"230522\",\"children\":\"\"},{\"text\":\"宝清\",\"value\":\"230523\",\"children\":\"\"},{\"text\":\"饶河\",\"value\":\"230524\",\"children\":\"\"}]},{\"text\":\"大庆\",\"value\":\"230600\",\"children\":[{\"text\":\"萨尔图\",\"value\":\"230602\",\"children\":\"\"},{\"text\":\"龙凤\",\"value\":\"230603\",\"children\":\"\"},{\"text\":\"让胡路\",\"value\":\"230604\",\"children\":\"\"},{\"text\":\"红岗\",\"value\":\"230605\",\"children\":\"\"},{\"text\":\"大同\",\"value\":\"230606\",\"children\":\"\"},{\"text\":\"肇州\",\"value\":\"230621\",\"children\":\"\"},{\"text\":\"肇源\",\"value\":\"230622\",\"children\":\"\"},{\"text\":\"林甸\",\"value\":\"230623\",\"children\":\"\"},{\"text\":\"杜尔伯特\",\"value\":\"230624\",\"children\":\"\"}]},{\"text\":\"伊春\",\"value\":\"230700\",\"children\":[{\"text\":\"伊春\",\"value\":\"230702\",\"children\":\"\"},{\"text\":\"南岔\",\"value\":\"230703\",\"children\":\"\"},{\"text\":\"友好\",\"value\":\"230704\",\"children\":\"\"},{\"text\":\"西林\",\"value\":\"230705\",\"children\":\"\"},{\"text\":\"翠峦\",\"value\":\"230706\",\"children\":\"\"},{\"text\":\"新青\",\"value\":\"230707\",\"children\":\"\"},{\"text\":\"美溪\",\"value\":\"230708\",\"children\":\"\"},{\"text\":\"金山屯\",\"value\":\"230709\",\"children\":\"\"},{\"text\":\"五营\",\"value\":\"230710\",\"children\":\"\"},{\"text\":\"乌马河\",\"value\":\"230711\",\"children\":\"\"},{\"text\":\"汤旺河\",\"value\":\"230712\",\"children\":\"\"},{\"text\":\"带岭\",\"value\":\"230713\",\"children\":\"\"},{\"text\":\"乌伊岭\",\"value\":\"230714\",\"children\":\"\"},{\"text\":\"红星\",\"value\":\"230715\",\"children\":\"\"},{\"text\":\"上甘岭\",\"value\":\"230716\",\"children\":\"\"},{\"text\":\"嘉荫\",\"value\":\"230722\",\"children\":\"\"},{\"text\":\"铁力\",\"value\":\"230781\",\"children\":\"\"}]},{\"text\":\"佳木斯\",\"value\":\"230800\",\"children\":[{\"text\":\"向阳\",\"value\":\"230803\",\"children\":\"\"},{\"text\":\"前进\",\"value\":\"230804\",\"children\":\"\"},{\"text\":\"东风\",\"value\":\"230805\",\"children\":\"\"},{\"text\":\"郊区\",\"value\":\"230811\",\"children\":\"\"},{\"text\":\"桦南\",\"value\":\"230822\",\"children\":\"\"},{\"text\":\"桦川\",\"value\":\"230826\",\"children\":\"\"},{\"text\":\"汤原\",\"value\":\"230828\",\"children\":\"\"},{\"text\":\"抚远\",\"value\":\"230833\",\"children\":\"\"},{\"text\":\"同江\",\"value\":\"230881\",\"children\":\"\"},{\"text\":\"富锦\",\"value\":\"230882\",\"children\":\"\"}]},{\"text\":\"七台河\",\"value\":\"230900\",\"children\":[{\"text\":\"新兴\",\"value\":\"230902\",\"children\":\"\"},{\"text\":\"桃山\",\"value\":\"230903\",\"children\":\"\"},{\"text\":\"茄子河\",\"value\":\"230904\",\"children\":\"\"},{\"text\":\"勃利\",\"value\":\"230921\",\"children\":\"\"}]},{\"text\":\"牡丹江\",\"value\":\"231000\",\"children\":[{\"text\":\"东安\",\"value\":\"231002\",\"children\":\"\"},{\"text\":\"阳明\",\"value\":\"231003\",\"children\":\"\"},{\"text\":\"爱民\",\"value\":\"231004\",\"children\":\"\"},{\"text\":\"西安\",\"value\":\"231005\",\"children\":\"\"},{\"text\":\"东宁\",\"value\":\"231024\",\"children\":\"\"},{\"text\":\"林口\",\"value\":\"231025\",\"children\":\"\"},{\"text\":\"绥芬河\",\"value\":\"231081\",\"children\":\"\"},{\"text\":\"海林\",\"value\":\"231083\",\"children\":\"\"},{\"text\":\"宁安\",\"value\":\"231084\",\"children\":\"\"},{\"text\":\"穆棱\",\"value\":\"231085\",\"children\":\"\"}]},{\"text\":\"黑河\",\"value\":\"231100\",\"children\":[{\"text\":\"爱辉\",\"value\":\"231102\",\"children\":\"\"},{\"text\":\"嫩江\",\"value\":\"231121\",\"children\":\"\"},{\"text\":\"逊克\",\"value\":\"231123\",\"children\":\"\"},{\"text\":\"孙吴\",\"value\":\"231124\",\"children\":\"\"},{\"text\":\"北安\",\"value\":\"231181\",\"children\":\"\"},{\"text\":\"五大连池\",\"value\":\"231182\",\"children\":\"\"}]},{\"text\":\"绥化\",\"value\":\"231200\",\"children\":[{\"text\":\"北林\",\"value\":\"231202\",\"children\":\"\"},{\"text\":\"望奎\",\"value\":\"231221\",\"children\":\"\"},{\"text\":\"兰西\",\"value\":\"231222\",\"children\":\"\"},{\"text\":\"青冈\",\"value\":\"231223\",\"children\":\"\"},{\"text\":\"庆安\",\"value\":\"231224\",\"children\":\"\"},{\"text\":\"明水\",\"value\":\"231225\",\"children\":\"\"},{\"text\":\"绥棱\",\"value\":\"231226\",\"children\":\"\"},{\"text\":\"安达\",\"value\":\"231281\",\"children\":\"\"},{\"text\":\"肇东\",\"value\":\"231282\",\"children\":\"\"},{\"text\":\"海伦\",\"value\":\"231283\",\"children\":\"\"}]},{\"text\":\"大兴安岭\",\"value\":\"232700\",\"children\":[{\"text\":\"松岭\",\"value\":\"232702\",\"children\":\"\"},{\"text\":\"新林\",\"value\":\"232703\",\"children\":\"\"},{\"text\":\"呼中\",\"value\":\"232704\",\"children\":\"\"},{\"text\":\"呼玛\",\"value\":\"232721\",\"children\":\"\"},{\"text\":\"塔河\",\"value\":\"232722\",\"children\":\"\"},{\"text\":\"漠河\",\"value\":\"232723\",\"children\":\"\"},{\"text\":\"加格达奇\",\"value\":\"232724\",\"children\":\"\"}]}]},{\"text\":\"上海\",\"value\":\"310000\",\"children\":[{\"text\":\"上海\",\"value\":\"310100\",\"children\":[{\"text\":\"黄浦\",\"value\":\"310101\",\"children\":\"\"},{\"text\":\"徐汇\",\"value\":\"310104\",\"children\":\"\"},{\"text\":\"长宁\",\"value\":\"310105\",\"children\":\"\"},{\"text\":\"静安\",\"value\":\"310106\",\"children\":\"\"},{\"text\":\"普陀\",\"value\":\"310107\",\"children\":\"\"},{\"text\":\"虹口\",\"value\":\"310109\",\"children\":\"\"},{\"text\":\"杨浦\",\"value\":\"310110\",\"children\":\"\"},{\"text\":\"闵行\",\"value\":\"310112\",\"children\":\"\"},{\"text\":\"宝山\",\"value\":\"310113\",\"children\":\"\"},{\"text\":\"嘉定\",\"value\":\"310114\",\"children\":\"\"},{\"text\":\"浦东\",\"value\":\"310115\",\"children\":\"\"},{\"text\":\"金山\",\"value\":\"310116\",\"children\":\"\"},{\"text\":\"松江\",\"value\":\"310117\",\"children\":\"\"},{\"text\":\"青浦\",\"value\":\"310118\",\"children\":\"\"},{\"text\":\"奉贤\",\"value\":\"310120\",\"children\":\"\"},{\"text\":\"崇明\",\"value\":\"310230\",\"children\":\"\"}]}]},{\"text\":\"江苏\",\"value\":\"320000\",\"children\":[{\"text\":\"南京\",\"value\":\"320100\",\"children\":[{\"text\":\"玄武\",\"value\":\"320102\",\"children\":\"\"},{\"text\":\"秦淮\",\"value\":\"320104\",\"children\":\"\"},{\"text\":\"建邺\",\"value\":\"320105\",\"children\":\"\"},{\"text\":\"鼓楼\",\"value\":\"320106\",\"children\":\"\"},{\"text\":\"浦口\",\"value\":\"320111\",\"children\":\"\"},{\"text\":\"栖霞\",\"value\":\"320113\",\"children\":\"\"},{\"text\":\"雨花台\",\"value\":\"320114\",\"children\":\"\"},{\"text\":\"江宁\",\"value\":\"320115\",\"children\":\"\"},{\"text\":\"六合\",\"value\":\"320116\",\"children\":\"\"},{\"text\":\"溧水\",\"value\":\"320124\",\"children\":\"\"},{\"text\":\"高淳\",\"value\":\"320125\",\"children\":\"\"}]},{\"text\":\"无锡\",\"value\":\"320200\",\"children\":[{\"text\":\"崇安\",\"value\":\"320202\",\"children\":\"\"},{\"text\":\"南长\",\"value\":\"320203\",\"children\":\"\"},{\"text\":\"北塘\",\"value\":\"320204\",\"children\":\"\"},{\"text\":\"锡山\",\"value\":\"320205\",\"children\":\"\"},{\"text\":\"惠山\",\"value\":\"320206\",\"children\":\"\"},{\"text\":\"滨湖\",\"value\":\"320211\",\"children\":\"\"},{\"text\":\"江阴\",\"value\":\"320281\",\"children\":\"\"},{\"text\":\"宜兴\",\"value\":\"320282\",\"children\":\"\"}]},{\"text\":\"徐州\",\"value\":\"320300\",\"children\":[{\"text\":\"鼓楼\",\"value\":\"320302\",\"children\":\"\"},{\"text\":\"云龙\",\"value\":\"320303\",\"children\":\"\"},{\"text\":\"贾汪\",\"value\":\"320305\",\"children\":\"\"},{\"text\":\"泉山\",\"value\":\"320311\",\"children\":\"\"},{\"text\":\"丰县\",\"value\":\"320321\",\"children\":\"\"},{\"text\":\"沛县\",\"value\":\"320322\",\"children\":\"\"},{\"text\":\"铜山\",\"value\":\"320323\",\"children\":\"\"},{\"text\":\"睢宁\",\"value\":\"320324\",\"children\":\"\"},{\"text\":\"新沂\",\"value\":\"320381\",\"children\":\"\"},{\"text\":\"邳州\",\"value\":\"320382\",\"children\":\"\"}]},{\"text\":\"常州\",\"value\":\"320400\",\"children\":[{\"text\":\"天宁\",\"value\":\"320402\",\"children\":\"\"},{\"text\":\"钟楼\",\"value\":\"320404\",\"children\":\"\"},{\"text\":\"新北\",\"value\":\"320411\",\"children\":\"\"},{\"text\":\"武进\",\"value\":\"320412\",\"children\":\"\"},{\"text\":\"溧阳\",\"value\":\"320481\",\"children\":\"\"},{\"text\":\"金坛\",\"value\":\"320482\",\"children\":\"\"}]},{\"text\":\"苏州\",\"value\":\"320500\",\"children\":[{\"text\":\"虎丘\",\"value\":\"320505\",\"children\":\"\"},{\"text\":\"吴中\",\"value\":\"320506\",\"children\":\"\"},{\"text\":\"相城\",\"value\":\"320507\",\"children\":\"\"},{\"text\":\"姑苏\",\"value\":\"320508\",\"children\":\"\"},{\"text\":\"常熟\",\"value\":\"320581\",\"children\":\"\"},{\"text\":\"张家港\",\"value\":\"320582\",\"children\":\"\"},{\"text\":\"昆山\",\"value\":\"320583\",\"children\":\"\"},{\"text\":\"吴江\",\"value\":\"320584\",\"children\":\"\"},{\"text\":\"太仓\",\"value\":\"320585\",\"children\":\"\"}]},{\"text\":\"南通\",\"value\":\"320600\",\"children\":[{\"text\":\"崇川\",\"value\":\"320602\",\"children\":\"\"},{\"text\":\"港闸\",\"value\":\"320611\",\"children\":\"\"},{\"text\":\"通州\",\"value\":\"320612\",\"children\":\"\"},{\"text\":\"海安\",\"value\":\"320621\",\"children\":\"\"},{\"text\":\"如东\",\"value\":\"320623\",\"children\":\"\"},{\"text\":\"启东\",\"value\":\"320681\",\"children\":\"\"},{\"text\":\"如皋\",\"value\":\"320682\",\"children\":\"\"},{\"text\":\"海门\",\"value\":\"320684\",\"children\":\"\"}]},{\"text\":\"连云港\",\"value\":\"320700\",\"children\":[{\"text\":\"连云\",\"value\":\"320703\",\"children\":\"\"},{\"text\":\"新浦\",\"value\":\"320705\",\"children\":\"\"},{\"text\":\"海州\",\"value\":\"320706\",\"children\":\"\"},{\"text\":\"赣榆\",\"value\":\"320721\",\"children\":\"\"},{\"text\":\"东海\",\"value\":\"320722\",\"children\":\"\"},{\"text\":\"灌云\",\"value\":\"320723\",\"children\":\"\"},{\"text\":\"灌南\",\"value\":\"320724\",\"children\":\"\"}]},{\"text\":\"淮安\",\"value\":\"320800\",\"children\":[{\"text\":\"清河\",\"value\":\"320802\",\"children\":\"\"},{\"text\":\"淮安\",\"value\":\"320803\",\"children\":\"\"},{\"text\":\"淮阴\",\"value\":\"320804\",\"children\":\"\"},{\"text\":\"清浦\",\"value\":\"320811\",\"children\":\"\"},{\"text\":\"涟水\",\"value\":\"320826\",\"children\":\"\"},{\"text\":\"洪泽\",\"value\":\"320829\",\"children\":\"\"},{\"text\":\"盱眙\",\"value\":\"320830\",\"children\":\"\"},{\"text\":\"金湖\",\"value\":\"320831\",\"children\":\"\"}]},{\"text\":\"盐城\",\"value\":\"320900\",\"children\":[{\"text\":\"亭湖\",\"value\":\"320902\",\"children\":\"\"},{\"text\":\"盐都\",\"value\":\"320903\",\"children\":\"\"},{\"text\":\"响水\",\"value\":\"320921\",\"children\":\"\"},{\"text\":\"滨海\",\"value\":\"320922\",\"children\":\"\"},{\"text\":\"阜宁\",\"value\":\"320923\",\"children\":\"\"},{\"text\":\"射阳\",\"value\":\"320924\",\"children\":\"\"},{\"text\":\"建湖\",\"value\":\"320925\",\"children\":\"\"},{\"text\":\"东台\",\"value\":\"320981\",\"children\":\"\"},{\"text\":\"大丰\",\"value\":\"320982\",\"children\":\"\"}]},{\"text\":\"扬州\",\"value\":\"321000\",\"children\":[{\"text\":\"广陵\",\"value\":\"321002\",\"children\":\"\"},{\"text\":\"邗江\",\"value\":\"321003\",\"children\":\"\"},{\"text\":\"宝应\",\"value\":\"321023\",\"children\":\"\"},{\"text\":\"仪征\",\"value\":\"321081\",\"children\":\"\"},{\"text\":\"高邮\",\"value\":\"321084\",\"children\":\"\"},{\"text\":\"江都\",\"value\":\"321088\",\"children\":\"\"}]},{\"text\":\"镇江\",\"value\":\"321100\",\"children\":[{\"text\":\"京口\",\"value\":\"321102\",\"children\":\"\"},{\"text\":\"润州\",\"value\":\"321111\",\"children\":\"\"},{\"text\":\"丹徒\",\"value\":\"321112\",\"children\":\"\"},{\"text\":\"丹阳\",\"value\":\"321181\",\"children\":\"\"},{\"text\":\"扬中\",\"value\":\"321182\",\"children\":\"\"},{\"text\":\"句容\",\"value\":\"321183\",\"children\":\"\"}]},{\"text\":\"泰州\",\"value\":\"321200\",\"children\":[{\"text\":\"海陵\",\"value\":\"321202\",\"children\":\"\"},{\"text\":\"高港\",\"value\":\"321203\",\"children\":\"\"},{\"text\":\"兴化\",\"value\":\"321281\",\"children\":\"\"},{\"text\":\"靖江\",\"value\":\"321282\",\"children\":\"\"},{\"text\":\"泰兴\",\"value\":\"321283\",\"children\":\"\"},{\"text\":\"姜堰\",\"value\":\"321284\",\"children\":\"\"}]},{\"text\":\"宿迁\",\"value\":\"321300\",\"children\":[{\"text\":\"宿城\",\"value\":\"321302\",\"children\":\"\"},{\"text\":\"宿豫\",\"value\":\"321311\",\"children\":\"\"},{\"text\":\"沭阳\",\"value\":\"321322\",\"children\":\"\"},{\"text\":\"泗阳\",\"value\":\"321323\",\"children\":\"\"},{\"text\":\"泗洪\",\"value\":\"321324\",\"children\":\"\"}]}]},{\"text\":\"浙江\",\"value\":\"330000\",\"children\":[{\"text\":\"杭州\",\"value\":\"330100\",\"children\":[{\"text\":\"上城\",\"value\":\"330102\",\"children\":\"\"},{\"text\":\"下城\",\"value\":\"330103\",\"children\":\"\"},{\"text\":\"江干\",\"value\":\"330104\",\"children\":\"\"},{\"text\":\"拱墅\",\"value\":\"330105\",\"children\":\"\"},{\"text\":\"西湖\",\"value\":\"330106\",\"children\":\"\"},{\"text\":\"滨江\",\"value\":\"330108\",\"children\":\"\"},{\"text\":\"萧山\",\"value\":\"330109\",\"children\":\"\"},{\"text\":\"余杭\",\"value\":\"330110\",\"children\":\"\"},{\"text\":\"桐庐\",\"value\":\"330122\",\"children\":\"\"},{\"text\":\"淳安\",\"value\":\"330127\",\"children\":\"\"},{\"text\":\"建德\",\"value\":\"330182\",\"children\":\"\"},{\"text\":\"富阳\",\"value\":\"330183\",\"children\":\"\"},{\"text\":\"临安\",\"value\":\"330185\",\"children\":\"\"}]},{\"text\":\"宁波\",\"value\":\"330200\",\"children\":[{\"text\":\"海曙\",\"value\":\"330203\",\"children\":\"\"},{\"text\":\"江东\",\"value\":\"330204\",\"children\":\"\"},{\"text\":\"江北\",\"value\":\"330205\",\"children\":\"\"},{\"text\":\"北仑\",\"value\":\"330206\",\"children\":\"\"},{\"text\":\"镇海\",\"value\":\"330211\",\"children\":\"\"},{\"text\":\"鄞州\",\"value\":\"330212\",\"children\":\"\"},{\"text\":\"象山\",\"value\":\"330225\",\"children\":\"\"},{\"text\":\"宁海\",\"value\":\"330226\",\"children\":\"\"},{\"text\":\"余姚\",\"value\":\"330281\",\"children\":\"\"},{\"text\":\"慈溪\",\"value\":\"330282\",\"children\":\"\"},{\"text\":\"奉化\",\"value\":\"330283\",\"children\":\"\"}]},{\"text\":\"温州\",\"value\":\"330300\",\"children\":[{\"text\":\"鹿城\",\"value\":\"330302\",\"children\":\"\"},{\"text\":\"龙湾\",\"value\":\"330303\",\"children\":\"\"},{\"text\":\"瓯海\",\"value\":\"330304\",\"children\":\"\"},{\"text\":\"洞头\",\"value\":\"330322\",\"children\":\"\"},{\"text\":\"永嘉\",\"value\":\"330324\",\"children\":\"\"},{\"text\":\"平阳\",\"value\":\"330326\",\"children\":\"\"},{\"text\":\"苍南\",\"value\":\"330327\",\"children\":\"\"},{\"text\":\"文成\",\"value\":\"330328\",\"children\":\"\"},{\"text\":\"泰顺\",\"value\":\"330329\",\"children\":\"\"},{\"text\":\"瑞安\",\"value\":\"330381\",\"children\":\"\"},{\"text\":\"乐清\",\"value\":\"330382\",\"children\":\"\"}]},{\"text\":\"嘉兴\",\"value\":\"330400\",\"children\":[{\"text\":\"南湖\",\"value\":\"330402\",\"children\":\"\"},{\"text\":\"秀洲\",\"value\":\"330411\",\"children\":\"\"},{\"text\":\"嘉善\",\"value\":\"330421\",\"children\":\"\"},{\"text\":\"海盐\",\"value\":\"330424\",\"children\":\"\"},{\"text\":\"海宁\",\"value\":\"330481\",\"children\":\"\"},{\"text\":\"平湖\",\"value\":\"330482\",\"children\":\"\"},{\"text\":\"桐乡\",\"value\":\"330483\",\"children\":\"\"}]},{\"text\":\"湖州\",\"value\":\"330500\",\"children\":[{\"text\":\"吴兴\",\"value\":\"330502\",\"children\":\"\"},{\"text\":\"南浔\",\"value\":\"330503\",\"children\":\"\"},{\"text\":\"德清\",\"value\":\"330521\",\"children\":\"\"},{\"text\":\"长兴\",\"value\":\"330522\",\"children\":\"\"},{\"text\":\"安吉\",\"value\":\"330523\",\"children\":\"\"}]},{\"text\":\"绍兴\",\"value\":\"330600\",\"children\":[{\"text\":\"越城\",\"value\":\"330602\",\"children\":\"\"},{\"text\":\"柯桥\",\"value\":\"330621\",\"children\":\"\"},{\"text\":\"新昌\",\"value\":\"330624\",\"children\":\"\"},{\"text\":\"诸暨\",\"value\":\"330681\",\"children\":\"\"},{\"text\":\"上虞\",\"value\":\"330682\",\"children\":\"\"},{\"text\":\"嵊州\",\"value\":\"330683\",\"children\":\"\"}]},{\"text\":\"金华\",\"value\":\"330700\",\"children\":[{\"text\":\"婺城\",\"value\":\"330702\",\"children\":\"\"},{\"text\":\"金东\",\"value\":\"330703\",\"children\":\"\"},{\"text\":\"武义\",\"value\":\"330723\",\"children\":\"\"},{\"text\":\"浦江\",\"value\":\"330726\",\"children\":\"\"},{\"text\":\"磐安\",\"value\":\"330727\",\"children\":\"\"},{\"text\":\"兰溪\",\"value\":\"330781\",\"children\":\"\"},{\"text\":\"义乌\",\"value\":\"330782\",\"children\":\"\"},{\"text\":\"东阳\",\"value\":\"330783\",\"children\":\"\"},{\"text\":\"永康\",\"value\":\"330784\",\"children\":\"\"}]},{\"text\":\"衢州\",\"value\":\"330800\",\"children\":[{\"text\":\"柯城\",\"value\":\"330802\",\"children\":\"\"},{\"text\":\"衢江\",\"value\":\"330803\",\"children\":\"\"},{\"text\":\"常山\",\"value\":\"330822\",\"children\":\"\"},{\"text\":\"开化\",\"value\":\"330824\",\"children\":\"\"},{\"text\":\"龙游\",\"value\":\"330825\",\"children\":\"\"},{\"text\":\"江山\",\"value\":\"330881\",\"children\":\"\"}]},{\"text\":\"舟山\",\"value\":\"330900\",\"children\":[{\"text\":\"定海\",\"value\":\"330902\",\"children\":\"\"},{\"text\":\"普陀\",\"value\":\"330903\",\"children\":\"\"},{\"text\":\"岱山\",\"value\":\"330921\",\"children\":\"\"},{\"text\":\"嵊泗\",\"value\":\"330922\",\"children\":\"\"}]},{\"text\":\"台州\",\"value\":\"331000\",\"children\":[{\"text\":\"椒江\",\"value\":\"331002\",\"children\":\"\"},{\"text\":\"黄岩\",\"value\":\"331003\",\"children\":\"\"},{\"text\":\"路桥\",\"value\":\"331004\",\"children\":\"\"},{\"text\":\"玉环\",\"value\":\"331021\",\"children\":\"\"},{\"text\":\"三门\",\"value\":\"331022\",\"children\":\"\"},{\"text\":\"天台\",\"value\":\"331023\",\"children\":\"\"},{\"text\":\"仙居\",\"value\":\"331024\",\"children\":\"\"},{\"text\":\"温岭\",\"value\":\"331081\",\"children\":\"\"},{\"text\":\"临海\",\"value\":\"331082\",\"children\":\"\"}]},{\"text\":\"丽水\",\"value\":\"331100\",\"children\":[{\"text\":\"莲都\",\"value\":\"331102\",\"children\":\"\"},{\"text\":\"青田\",\"value\":\"331121\",\"children\":\"\"},{\"text\":\"缙云\",\"value\":\"331122\",\"children\":\"\"},{\"text\":\"遂昌\",\"value\":\"331123\",\"children\":\"\"},{\"text\":\"松阳\",\"value\":\"331124\",\"children\":\"\"},{\"text\":\"云和\",\"value\":\"331125\",\"children\":\"\"},{\"text\":\"庆元\",\"value\":\"331126\",\"children\":\"\"},{\"text\":\"景宁\",\"value\":\"331127\",\"children\":\"\"},{\"text\":\"龙泉\",\"value\":\"331181\",\"children\":\"\"}]}]},{\"text\":\"安徽\",\"value\":\"340000\",\"children\":[{\"text\":\"合肥\",\"value\":\"340100\",\"children\":[{\"text\":\"瑶海\",\"value\":\"340102\",\"children\":\"\"},{\"text\":\"庐阳\",\"value\":\"340103\",\"children\":\"\"},{\"text\":\"蜀山\",\"value\":\"340104\",\"children\":\"\"},{\"text\":\"包河\",\"value\":\"340111\",\"children\":\"\"},{\"text\":\"长丰\",\"value\":\"340121\",\"children\":\"\"},{\"text\":\"肥东\",\"value\":\"340122\",\"children\":\"\"},{\"text\":\"肥西\",\"value\":\"340123\",\"children\":\"\"},{\"text\":\"巢湖\",\"value\":\"341400\",\"children\":\"\"},{\"text\":\"庐江\",\"value\":\"341421\",\"children\":\"\"}]},{\"text\":\"芜湖\",\"value\":\"340200\",\"children\":[{\"text\":\"镜湖\",\"value\":\"340202\",\"children\":\"\"},{\"text\":\"弋江\",\"value\":\"340203\",\"children\":\"\"},{\"text\":\"鸠江\",\"value\":\"340207\",\"children\":\"\"},{\"text\":\"三山\",\"value\":\"340208\",\"children\":\"\"},{\"text\":\"芜湖\",\"value\":\"340221\",\"children\":\"\"},{\"text\":\"繁昌\",\"value\":\"340222\",\"children\":\"\"},{\"text\":\"南陵\",\"value\":\"340223\",\"children\":\"\"},{\"text\":\"无为\",\"value\":\"341422\",\"children\":\"\"}]},{\"text\":\"蚌埠\",\"value\":\"340300\",\"children\":[{\"text\":\"龙子湖\",\"value\":\"340302\",\"children\":\"\"},{\"text\":\"蚌山\",\"value\":\"340303\",\"children\":\"\"},{\"text\":\"禹会\",\"value\":\"340304\",\"children\":\"\"},{\"text\":\"淮上\",\"value\":\"340311\",\"children\":\"\"},{\"text\":\"怀远\",\"value\":\"340321\",\"children\":\"\"},{\"text\":\"五河\",\"value\":\"340322\",\"children\":\"\"},{\"text\":\"固镇\",\"value\":\"340323\",\"children\":\"\"}]},{\"text\":\"淮南\",\"value\":\"340400\",\"children\":[{\"text\":\"大通\",\"value\":\"340402\",\"children\":\"\"},{\"text\":\"田家庵\",\"value\":\"340403\",\"children\":\"\"},{\"text\":\"谢家集\",\"value\":\"340404\",\"children\":\"\"},{\"text\":\"八公山\",\"value\":\"340405\",\"children\":\"\"},{\"text\":\"潘集\",\"value\":\"340406\",\"children\":\"\"},{\"text\":\"凤台\",\"value\":\"340421\",\"children\":\"\"},{\"text\":\"寿县\",\"value\":\"340499\",\"children\":\"\"}]},{\"text\":\"马鞍山\",\"value\":\"340500\",\"children\":[{\"text\":\"花山\",\"value\":\"340503\",\"children\":\"\"},{\"text\":\"雨山\",\"value\":\"340504\",\"children\":\"\"},{\"text\":\"博望\",\"value\":\"340506\",\"children\":\"\"},{\"text\":\"当涂\",\"value\":\"340521\",\"children\":\"\"},{\"text\":\"含山\",\"value\":\"341423\",\"children\":\"\"},{\"text\":\"和县\",\"value\":\"341424\",\"children\":\"\"}]},{\"text\":\"淮北\",\"value\":\"340600\",\"children\":[{\"text\":\"杜集\",\"value\":\"340602\",\"children\":\"\"},{\"text\":\"相山\",\"value\":\"340603\",\"children\":\"\"},{\"text\":\"烈山\",\"value\":\"340604\",\"children\":\"\"},{\"text\":\"濉溪\",\"value\":\"340621\",\"children\":\"\"}]},{\"text\":\"铜陵\",\"value\":\"340700\",\"children\":[{\"text\":\"铜官\",\"value\":\"340705\",\"children\":\"\"},{\"text\":\"郊区\",\"value\":\"340711\",\"children\":\"\"},{\"text\":\"铜陵\",\"value\":\"340721\",\"children\":\"\"},{\"text\":\"枞阳\",\"value\":\"340799\",\"children\":\"\"}]},{\"text\":\"安庆\",\"value\":\"340800\",\"children\":[{\"text\":\"迎江\",\"value\":\"340802\",\"children\":\"\"},{\"text\":\"大观\",\"value\":\"340803\",\"children\":\"\"},{\"text\":\"宜秀\",\"value\":\"340811\",\"children\":\"\"},{\"text\":\"怀宁\",\"value\":\"340822\",\"children\":\"\"},{\"text\":\"潜山\",\"value\":\"340824\",\"children\":\"\"},{\"text\":\"太湖\",\"value\":\"340825\",\"children\":\"\"},{\"text\":\"宿松\",\"value\":\"340826\",\"children\":\"\"},{\"text\":\"望江\",\"value\":\"340827\",\"children\":\"\"},{\"text\":\"岳西\",\"value\":\"340828\",\"children\":\"\"},{\"text\":\"桐城\",\"value\":\"340881\",\"children\":\"\"}]},{\"text\":\"黄山\",\"value\":\"341000\",\"children\":[{\"text\":\"屯溪\",\"value\":\"341002\",\"children\":\"\"},{\"text\":\"黄山\",\"value\":\"341003\",\"children\":\"\"},{\"text\":\"徽州\",\"value\":\"341004\",\"children\":\"\"},{\"text\":\"歙县\",\"value\":\"341021\",\"children\":\"\"},{\"text\":\"休宁\",\"value\":\"341022\",\"children\":\"\"},{\"text\":\"黟县\",\"value\":\"341023\",\"children\":\"\"},{\"text\":\"祁门\",\"value\":\"341024\",\"children\":\"\"}]},{\"text\":\"滁州\",\"value\":\"341100\",\"children\":[{\"text\":\"琅琊\",\"value\":\"341102\",\"children\":\"\"},{\"text\":\"南谯\",\"value\":\"341103\",\"children\":\"\"},{\"text\":\"来安\",\"value\":\"341122\",\"children\":\"\"},{\"text\":\"全椒\",\"value\":\"341124\",\"children\":\"\"},{\"text\":\"定远\",\"value\":\"341125\",\"children\":\"\"},{\"text\":\"凤阳\",\"value\":\"341126\",\"children\":\"\"},{\"text\":\"天长\",\"value\":\"341181\",\"children\":\"\"},{\"text\":\"明光\",\"value\":\"341182\",\"children\":\"\"}]},{\"text\":\"阜阳\",\"value\":\"341200\",\"children\":[{\"text\":\"颍州\",\"value\":\"341202\",\"children\":\"\"},{\"text\":\"颍东\",\"value\":\"341203\",\"children\":\"\"},{\"text\":\"颍泉\",\"value\":\"341204\",\"children\":\"\"},{\"text\":\"临泉\",\"value\":\"341221\",\"children\":\"\"},{\"text\":\"太和\",\"value\":\"341222\",\"children\":\"\"},{\"text\":\"阜南\",\"value\":\"341225\",\"children\":\"\"},{\"text\":\"颍上\",\"value\":\"341226\",\"children\":\"\"},{\"text\":\"界首\",\"value\":\"341282\",\"children\":\"\"}]},{\"text\":\"宿州\",\"value\":\"341300\",\"children\":[{\"text\":\"埇桥\",\"value\":\"341302\",\"children\":\"\"},{\"text\":\"砀山\",\"value\":\"341321\",\"children\":\"\"},{\"text\":\"萧县\",\"value\":\"341322\",\"children\":\"\"},{\"text\":\"灵璧\",\"value\":\"341323\",\"children\":\"\"},{\"text\":\"泗县\",\"value\":\"341324\",\"children\":\"\"}]},{\"text\":\"六安\",\"value\":\"341500\",\"children\":[{\"text\":\"金安\",\"value\":\"341502\",\"children\":\"\"},{\"text\":\"裕安\",\"value\":\"341503\",\"children\":\"\"},{\"text\":\"霍邱\",\"value\":\"341522\",\"children\":\"\"},{\"text\":\"舒城\",\"value\":\"341523\",\"children\":\"\"},{\"text\":\"金寨\",\"value\":\"341524\",\"children\":\"\"},{\"text\":\"霍山\",\"value\":\"341525\",\"children\":\"\"}]},{\"text\":\"亳州\",\"value\":\"341600\",\"children\":[{\"text\":\"谯城\",\"value\":\"341602\",\"children\":\"\"},{\"text\":\"涡阳\",\"value\":\"341621\",\"children\":\"\"},{\"text\":\"蒙城\",\"value\":\"341622\",\"children\":\"\"},{\"text\":\"利辛\",\"value\":\"341623\",\"children\":\"\"}]},{\"text\":\"池州\",\"value\":\"341700\",\"children\":[{\"text\":\"贵池\",\"value\":\"341702\",\"children\":\"\"},{\"text\":\"东至\",\"value\":\"341721\",\"children\":\"\"},{\"text\":\"石台\",\"value\":\"341722\",\"children\":\"\"},{\"text\":\"青阳\",\"value\":\"341723\",\"children\":\"\"}]},{\"text\":\"宣城\",\"value\":\"341800\",\"children\":[{\"text\":\"宣州\",\"value\":\"341802\",\"children\":\"\"},{\"text\":\"郎溪\",\"value\":\"341821\",\"children\":\"\"},{\"text\":\"广德\",\"value\":\"341822\",\"children\":\"\"},{\"text\":\"泾县\",\"value\":\"341823\",\"children\":\"\"},{\"text\":\"绩溪\",\"value\":\"341824\",\"children\":\"\"},{\"text\":\"旌德\",\"value\":\"341825\",\"children\":\"\"},{\"text\":\"宁国\",\"value\":\"341881\",\"children\":\"\"}]}]},{\"text\":\"福建\",\"value\":\"350000\",\"children\":[{\"text\":\"福州\",\"value\":\"350100\",\"children\":[{\"text\":\"鼓楼\",\"value\":\"350102\",\"children\":\"\"},{\"text\":\"台江\",\"value\":\"350103\",\"children\":\"\"},{\"text\":\"仓山\",\"value\":\"350104\",\"children\":\"\"},{\"text\":\"马尾\",\"value\":\"350105\",\"children\":\"\"},{\"text\":\"晋安\",\"value\":\"350111\",\"children\":\"\"},{\"text\":\"闽侯\",\"value\":\"350121\",\"children\":\"\"},{\"text\":\"连江\",\"value\":\"350122\",\"children\":\"\"},{\"text\":\"罗源\",\"value\":\"350123\",\"children\":\"\"},{\"text\":\"闽清\",\"value\":\"350124\",\"children\":\"\"},{\"text\":\"永泰\",\"value\":\"350125\",\"children\":\"\"},{\"text\":\"平潭\",\"value\":\"350128\",\"children\":\"\"},{\"text\":\"福清\",\"value\":\"350181\",\"children\":\"\"},{\"text\":\"长乐\",\"value\":\"350182\",\"children\":\"\"}]},{\"text\":\"厦门\",\"value\":\"350200\",\"children\":[{\"text\":\"思明\",\"value\":\"350203\",\"children\":\"\"},{\"text\":\"海沧\",\"value\":\"350205\",\"children\":\"\"},{\"text\":\"湖里\",\"value\":\"350206\",\"children\":\"\"},{\"text\":\"集美\",\"value\":\"350211\",\"children\":\"\"},{\"text\":\"同安\",\"value\":\"350212\",\"children\":\"\"},{\"text\":\"翔安\",\"value\":\"350213\",\"children\":\"\"}]},{\"text\":\"莆田\",\"value\":\"350300\",\"children\":[{\"text\":\"城厢\",\"value\":\"350302\",\"children\":\"\"},{\"text\":\"涵江\",\"value\":\"350303\",\"children\":\"\"},{\"text\":\"荔城\",\"value\":\"350304\",\"children\":\"\"},{\"text\":\"秀屿\",\"value\":\"350305\",\"children\":\"\"},{\"text\":\"仙游\",\"value\":\"350322\",\"children\":\"\"}]},{\"text\":\"三明\",\"value\":\"350400\",\"children\":[{\"text\":\"梅列\",\"value\":\"350402\",\"children\":\"\"},{\"text\":\"三元\",\"value\":\"350403\",\"children\":\"\"},{\"text\":\"明溪\",\"value\":\"350421\",\"children\":\"\"},{\"text\":\"清流\",\"value\":\"350423\",\"children\":\"\"},{\"text\":\"宁化\",\"value\":\"350424\",\"children\":\"\"},{\"text\":\"大田\",\"value\":\"350425\",\"children\":\"\"},{\"text\":\"尤溪\",\"value\":\"350426\",\"children\":\"\"},{\"text\":\"沙县\",\"value\":\"350427\",\"children\":\"\"},{\"text\":\"将乐\",\"value\":\"350428\",\"children\":\"\"},{\"text\":\"泰宁\",\"value\":\"350429\",\"children\":\"\"},{\"text\":\"建宁\",\"value\":\"350430\",\"children\":\"\"},{\"text\":\"永安\",\"value\":\"350481\",\"children\":\"\"}]},{\"text\":\"泉州\",\"value\":\"350500\",\"children\":[{\"text\":\"鲤城\",\"value\":\"350502\",\"children\":\"\"},{\"text\":\"丰泽\",\"value\":\"350503\",\"children\":\"\"},{\"text\":\"洛江\",\"value\":\"350504\",\"children\":\"\"},{\"text\":\"泉港\",\"value\":\"350505\",\"children\":\"\"},{\"text\":\"惠安\",\"value\":\"350521\",\"children\":\"\"},{\"text\":\"安溪\",\"value\":\"350524\",\"children\":\"\"},{\"text\":\"永春\",\"value\":\"350525\",\"children\":\"\"},{\"text\":\"德化\",\"value\":\"350526\",\"children\":\"\"},{\"text\":\"金门\",\"value\":\"350527\",\"children\":\"\"},{\"text\":\"石狮\",\"value\":\"350581\",\"children\":\"\"},{\"text\":\"晋江\",\"value\":\"350582\",\"children\":\"\"},{\"text\":\"南安\",\"value\":\"350583\",\"children\":\"\"}]},{\"text\":\"漳州\",\"value\":\"350600\",\"children\":[{\"text\":\"芗城\",\"value\":\"350602\",\"children\":\"\"},{\"text\":\"龙文\",\"value\":\"350603\",\"children\":\"\"},{\"text\":\"云霄\",\"value\":\"350622\",\"children\":\"\"},{\"text\":\"漳浦\",\"value\":\"350623\",\"children\":\"\"},{\"text\":\"诏安\",\"value\":\"350624\",\"children\":\"\"},{\"text\":\"长泰\",\"value\":\"350625\",\"children\":\"\"},{\"text\":\"东山\",\"value\":\"350626\",\"children\":\"\"},{\"text\":\"南靖\",\"value\":\"350627\",\"children\":\"\"},{\"text\":\"平和\",\"value\":\"350628\",\"children\":\"\"},{\"text\":\"华安\",\"value\":\"350629\",\"children\":\"\"},{\"text\":\"龙海\",\"value\":\"350681\",\"children\":\"\"}]},{\"text\":\"南平\",\"value\":\"350700\",\"children\":[{\"text\":\"延平\",\"value\":\"350702\",\"children\":\"\"},{\"text\":\"顺昌\",\"value\":\"350721\",\"children\":\"\"},{\"text\":\"浦城\",\"value\":\"350722\",\"children\":\"\"},{\"text\":\"光泽\",\"value\":\"350723\",\"children\":\"\"},{\"text\":\"松溪\",\"value\":\"350724\",\"children\":\"\"},{\"text\":\"政和\",\"value\":\"350725\",\"children\":\"\"},{\"text\":\"邵武\",\"value\":\"350781\",\"children\":\"\"},{\"text\":\"武夷山\",\"value\":\"350782\",\"children\":\"\"},{\"text\":\"建瓯\",\"value\":\"350783\",\"children\":\"\"},{\"text\":\"建阳\",\"value\":\"350784\",\"children\":\"\"}]},{\"text\":\"龙岩\",\"value\":\"350800\",\"children\":[{\"text\":\"新罗\",\"value\":\"350802\",\"children\":\"\"},{\"text\":\"长汀\",\"value\":\"350821\",\"children\":\"\"},{\"text\":\"永定\",\"value\":\"350822\",\"children\":\"\"},{\"text\":\"上杭\",\"value\":\"350823\",\"children\":\"\"},{\"text\":\"武平\",\"value\":\"350824\",\"children\":\"\"},{\"text\":\"连城\",\"value\":\"350825\",\"children\":\"\"},{\"text\":\"漳平\",\"value\":\"350881\",\"children\":\"\"}]},{\"text\":\"宁德\",\"value\":\"350900\",\"children\":[{\"text\":\"蕉城\",\"value\":\"350902\",\"children\":\"\"},{\"text\":\"霞浦\",\"value\":\"350921\",\"children\":\"\"},{\"text\":\"古田\",\"value\":\"350922\",\"children\":\"\"},{\"text\":\"屏南\",\"value\":\"350923\",\"children\":\"\"},{\"text\":\"寿宁\",\"value\":\"350924\",\"children\":\"\"},{\"text\":\"周宁\",\"value\":\"350925\",\"children\":\"\"},{\"text\":\"柘荣\",\"value\":\"350926\",\"children\":\"\"},{\"text\":\"福安\",\"value\":\"350981\",\"children\":\"\"},{\"text\":\"福鼎\",\"value\":\"350982\",\"children\":\"\"}]}]},{\"text\":\"江西\",\"value\":\"360000\",\"children\":[{\"text\":\"南昌\",\"value\":\"360100\",\"children\":[{\"text\":\"东湖\",\"value\":\"360102\",\"children\":\"\"},{\"text\":\"西湖\",\"value\":\"360103\",\"children\":\"\"},{\"text\":\"青云谱\",\"value\":\"360104\",\"children\":\"\"},{\"text\":\"湾里\",\"value\":\"360105\",\"children\":\"\"},{\"text\":\"青山湖\",\"value\":\"360111\",\"children\":\"\"},{\"text\":\"南昌\",\"value\":\"360121\",\"children\":\"\"},{\"text\":\"新建\",\"value\":\"360122\",\"children\":\"\"},{\"text\":\"安义\",\"value\":\"360123\",\"children\":\"\"},{\"text\":\"进贤\",\"value\":\"360124\",\"children\":\"\"}]},{\"text\":\"景德镇\",\"value\":\"360200\",\"children\":[{\"text\":\"昌江\",\"value\":\"360202\",\"children\":\"\"},{\"text\":\"珠山\",\"value\":\"360203\",\"children\":\"\"},{\"text\":\"浮梁\",\"value\":\"360222\",\"children\":\"\"},{\"text\":\"乐平\",\"value\":\"360281\",\"children\":\"\"}]},{\"text\":\"萍乡\",\"value\":\"360300\",\"children\":[{\"text\":\"安源\",\"value\":\"360302\",\"children\":\"\"},{\"text\":\"湘东\",\"value\":\"360313\",\"children\":\"\"},{\"text\":\"莲花\",\"value\":\"360321\",\"children\":\"\"},{\"text\":\"上栗\",\"value\":\"360322\",\"children\":\"\"},{\"text\":\"芦溪\",\"value\":\"360323\",\"children\":\"\"}]},{\"text\":\"九江\",\"value\":\"360400\",\"children\":[{\"text\":\"庐山\",\"value\":\"360402\",\"children\":\"\"},{\"text\":\"浔阳\",\"value\":\"360403\",\"children\":\"\"},{\"text\":\"九江\",\"value\":\"360421\",\"children\":\"\"},{\"text\":\"武宁\",\"value\":\"360423\",\"children\":\"\"},{\"text\":\"修水\",\"value\":\"360424\",\"children\":\"\"},{\"text\":\"永修\",\"value\":\"360425\",\"children\":\"\"},{\"text\":\"德安\",\"value\":\"360426\",\"children\":\"\"},{\"text\":\"星子\",\"value\":\"360427\",\"children\":\"\"},{\"text\":\"都昌\",\"value\":\"360428\",\"children\":\"\"},{\"text\":\"湖口\",\"value\":\"360429\",\"children\":\"\"},{\"text\":\"彭泽\",\"value\":\"360430\",\"children\":\"\"},{\"text\":\"瑞昌\",\"value\":\"360481\",\"children\":\"\"},{\"text\":\"共青城\",\"value\":\"360483\",\"children\":\"\"}]},{\"text\":\"新余\",\"value\":\"360500\",\"children\":[{\"text\":\"渝水\",\"value\":\"360502\",\"children\":\"\"},{\"text\":\"分宜\",\"value\":\"360521\",\"children\":\"\"}]},{\"text\":\"鹰潭\",\"value\":\"360600\",\"children\":[{\"text\":\"月湖\",\"value\":\"360602\",\"children\":\"\"},{\"text\":\"余江\",\"value\":\"360622\",\"children\":\"\"},{\"text\":\"贵溪\",\"value\":\"360681\",\"children\":\"\"}]},{\"text\":\"赣州\",\"value\":\"360700\",\"children\":[{\"text\":\"章贡\",\"value\":\"360702\",\"children\":\"\"},{\"text\":\"赣县\",\"value\":\"360721\",\"children\":\"\"},{\"text\":\"信丰\",\"value\":\"360722\",\"children\":\"\"},{\"text\":\"大余\",\"value\":\"360723\",\"children\":\"\"},{\"text\":\"上犹\",\"value\":\"360724\",\"children\":\"\"},{\"text\":\"崇义\",\"value\":\"360725\",\"children\":\"\"},{\"text\":\"安远\",\"value\":\"360726\",\"children\":\"\"},{\"text\":\"龙南\",\"value\":\"360727\",\"children\":\"\"},{\"text\":\"定南\",\"value\":\"360728\",\"children\":\"\"},{\"text\":\"全南\",\"value\":\"360729\",\"children\":\"\"},{\"text\":\"宁都\",\"value\":\"360730\",\"children\":\"\"},{\"text\":\"于都\",\"value\":\"360731\",\"children\":\"\"},{\"text\":\"兴国\",\"value\":\"360732\",\"children\":\"\"},{\"text\":\"会昌\",\"value\":\"360733\",\"children\":\"\"},{\"text\":\"寻乌\",\"value\":\"360734\",\"children\":\"\"},{\"text\":\"石城\",\"value\":\"360735\",\"children\":\"\"},{\"text\":\"瑞金\",\"value\":\"360781\",\"children\":\"\"},{\"text\":\"南康\",\"value\":\"360782\",\"children\":\"\"}]},{\"text\":\"吉安\",\"value\":\"360800\",\"children\":[{\"text\":\"吉州\",\"value\":\"360802\",\"children\":\"\"},{\"text\":\"青原\",\"value\":\"360803\",\"children\":\"\"},{\"text\":\"吉安\",\"value\":\"360821\",\"children\":\"\"},{\"text\":\"吉水\",\"value\":\"360822\",\"children\":\"\"},{\"text\":\"峡江\",\"value\":\"360823\",\"children\":\"\"},{\"text\":\"新干\",\"value\":\"360824\",\"children\":\"\"},{\"text\":\"永丰\",\"value\":\"360825\",\"children\":\"\"},{\"text\":\"泰和\",\"value\":\"360826\",\"children\":\"\"},{\"text\":\"遂川\",\"value\":\"360827\",\"children\":\"\"},{\"text\":\"万安\",\"value\":\"360828\",\"children\":\"\"},{\"text\":\"安福\",\"value\":\"360829\",\"children\":\"\"},{\"text\":\"永新\",\"value\":\"360830\",\"children\":\"\"},{\"text\":\"井冈山\",\"value\":\"360881\",\"children\":\"\"}]},{\"text\":\"宜春\",\"value\":\"360900\",\"children\":[{\"text\":\"袁州\",\"value\":\"360902\",\"children\":\"\"},{\"text\":\"奉新\",\"value\":\"360921\",\"children\":\"\"},{\"text\":\"万载\",\"value\":\"360922\",\"children\":\"\"},{\"text\":\"上高\",\"value\":\"360923\",\"children\":\"\"},{\"text\":\"宜丰\",\"value\":\"360924\",\"children\":\"\"},{\"text\":\"靖安\",\"value\":\"360925\",\"children\":\"\"},{\"text\":\"铜鼓\",\"value\":\"360926\",\"children\":\"\"},{\"text\":\"丰城\",\"value\":\"360981\",\"children\":\"\"},{\"text\":\"樟树\",\"value\":\"360982\",\"children\":\"\"},{\"text\":\"高安\",\"value\":\"360983\",\"children\":\"\"}]},{\"text\":\"抚州\",\"value\":\"361000\",\"children\":[{\"text\":\"临川\",\"value\":\"361002\",\"children\":\"\"},{\"text\":\"南城\",\"value\":\"361021\",\"children\":\"\"},{\"text\":\"黎川\",\"value\":\"361022\",\"children\":\"\"},{\"text\":\"南丰\",\"value\":\"361023\",\"children\":\"\"},{\"text\":\"崇仁\",\"value\":\"361024\",\"children\":\"\"},{\"text\":\"乐安\",\"value\":\"361025\",\"children\":\"\"},{\"text\":\"宜黄\",\"value\":\"361026\",\"children\":\"\"},{\"text\":\"金溪\",\"value\":\"361027\",\"children\":\"\"},{\"text\":\"资溪\",\"value\":\"361028\",\"children\":\"\"},{\"text\":\"东乡\",\"value\":\"361029\",\"children\":\"\"},{\"text\":\"广昌\",\"value\":\"361030\",\"children\":\"\"}]},{\"text\":\"上饶\",\"value\":\"361100\",\"children\":[{\"text\":\"信州\",\"value\":\"361102\",\"children\":\"\"},{\"text\":\"上饶\",\"value\":\"361121\",\"children\":\"\"},{\"text\":\"广丰\",\"value\":\"361122\",\"children\":\"\"},{\"text\":\"玉山\",\"value\":\"361123\",\"children\":\"\"},{\"text\":\"铅山\",\"value\":\"361124\",\"children\":\"\"},{\"text\":\"横峰\",\"value\":\"361125\",\"children\":\"\"},{\"text\":\"弋阳\",\"value\":\"361126\",\"children\":\"\"},{\"text\":\"余干\",\"value\":\"361127\",\"children\":\"\"},{\"text\":\"鄱阳\",\"value\":\"361128\",\"children\":\"\"},{\"text\":\"万年\",\"value\":\"361129\",\"children\":\"\"},{\"text\":\"婺源\",\"value\":\"361130\",\"children\":\"\"},{\"text\":\"德兴\",\"value\":\"361181\",\"children\":\"\"}]}]},{\"text\":\"山东\",\"value\":\"370000\",\"children\":[{\"text\":\"济南\",\"value\":\"370100\",\"children\":[{\"text\":\"历下\",\"value\":\"370102\",\"children\":\"\"},{\"text\":\"市中\",\"value\":\"370103\",\"children\":\"\"},{\"text\":\"槐荫\",\"value\":\"370104\",\"children\":\"\"},{\"text\":\"天桥\",\"value\":\"370105\",\"children\":\"\"},{\"text\":\"历城\",\"value\":\"370112\",\"children\":\"\"},{\"text\":\"长清\",\"value\":\"370113\",\"children\":\"\"},{\"text\":\"平阴\",\"value\":\"370124\",\"children\":\"\"},{\"text\":\"济阳\",\"value\":\"370125\",\"children\":\"\"},{\"text\":\"商河\",\"value\":\"370126\",\"children\":\"\"},{\"text\":\"章丘\",\"value\":\"370181\",\"children\":\"\"}]},{\"text\":\"青岛\",\"value\":\"370200\",\"children\":[{\"text\":\"市南\",\"value\":\"370202\",\"children\":\"\"},{\"text\":\"市北\",\"value\":\"370203\",\"children\":\"\"},{\"text\":\"黄岛\",\"value\":\"370211\",\"children\":\"\"},{\"text\":\"崂山\",\"value\":\"370212\",\"children\":\"\"},{\"text\":\"李沧\",\"value\":\"370213\",\"children\":\"\"},{\"text\":\"城阳\",\"value\":\"370214\",\"children\":\"\"},{\"text\":\"胶州\",\"value\":\"370281\",\"children\":\"\"},{\"text\":\"即墨\",\"value\":\"370282\",\"children\":\"\"},{\"text\":\"平度\",\"value\":\"370283\",\"children\":\"\"},{\"text\":\"莱西\",\"value\":\"370285\",\"children\":\"\"}]},{\"text\":\"淄博\",\"value\":\"370300\",\"children\":[{\"text\":\"淄川\",\"value\":\"370302\",\"children\":\"\"},{\"text\":\"张店\",\"value\":\"370303\",\"children\":\"\"},{\"text\":\"博山\",\"value\":\"370304\",\"children\":\"\"},{\"text\":\"临淄\",\"value\":\"370305\",\"children\":\"\"},{\"text\":\"周村\",\"value\":\"370306\",\"children\":\"\"},{\"text\":\"桓台\",\"value\":\"370321\",\"children\":\"\"},{\"text\":\"高青\",\"value\":\"370322\",\"children\":\"\"},{\"text\":\"沂源\",\"value\":\"370323\",\"children\":\"\"}]},{\"text\":\"枣庄\",\"value\":\"370400\",\"children\":[{\"text\":\"市中\",\"value\":\"370402\",\"children\":\"\"},{\"text\":\"薛城\",\"value\":\"370403\",\"children\":\"\"},{\"text\":\"峄城\",\"value\":\"370404\",\"children\":\"\"},{\"text\":\"台儿庄\",\"value\":\"370405\",\"children\":\"\"},{\"text\":\"山亭\",\"value\":\"370406\",\"children\":\"\"},{\"text\":\"滕州\",\"value\":\"370481\",\"children\":\"\"}]},{\"text\":\"东营\",\"value\":\"370500\",\"children\":[{\"text\":\"东营\",\"value\":\"370502\",\"children\":\"\"},{\"text\":\"河口\",\"value\":\"370503\",\"children\":\"\"},{\"text\":\"垦利\",\"value\":\"370521\",\"children\":\"\"},{\"text\":\"利津\",\"value\":\"370522\",\"children\":\"\"},{\"text\":\"广饶\",\"value\":\"370523\",\"children\":\"\"}]},{\"text\":\"烟台\",\"value\":\"370600\",\"children\":[{\"text\":\"芝罘\",\"value\":\"370602\",\"children\":\"\"},{\"text\":\"福山\",\"value\":\"370611\",\"children\":\"\"},{\"text\":\"牟平\",\"value\":\"370612\",\"children\":\"\"},{\"text\":\"莱山\",\"value\":\"370613\",\"children\":\"\"},{\"text\":\"长岛\",\"value\":\"370634\",\"children\":\"\"},{\"text\":\"龙口\",\"value\":\"370681\",\"children\":\"\"},{\"text\":\"莱阳\",\"value\":\"370682\",\"children\":\"\"},{\"text\":\"莱州\",\"value\":\"370683\",\"children\":\"\"},{\"text\":\"蓬莱\",\"value\":\"370684\",\"children\":\"\"},{\"text\":\"招远\",\"value\":\"370685\",\"children\":\"\"},{\"text\":\"栖霞\",\"value\":\"370686\",\"children\":\"\"},{\"text\":\"海阳\",\"value\":\"370687\",\"children\":\"\"}]},{\"text\":\"潍坊\",\"value\":\"370700\",\"children\":[{\"text\":\"潍城\",\"value\":\"370702\",\"children\":\"\"},{\"text\":\"寒亭\",\"value\":\"370703\",\"children\":\"\"},{\"text\":\"坊子\",\"value\":\"370704\",\"children\":\"\"},{\"text\":\"奎文\",\"value\":\"370705\",\"children\":\"\"},{\"text\":\"临朐\",\"value\":\"370724\",\"children\":\"\"},{\"text\":\"昌乐\",\"value\":\"370725\",\"children\":\"\"},{\"text\":\"青州\",\"value\":\"370781\",\"children\":\"\"},{\"text\":\"诸城\",\"value\":\"370782\",\"children\":\"\"},{\"text\":\"寿光\",\"value\":\"370783\",\"children\":\"\"},{\"text\":\"安丘\",\"value\":\"370784\",\"children\":\"\"},{\"text\":\"高密\",\"value\":\"370785\",\"children\":\"\"},{\"text\":\"昌邑\",\"value\":\"370786\",\"children\":\"\"}]},{\"text\":\"济宁\",\"value\":\"370800\",\"children\":[{\"text\":\"市中\",\"value\":\"370802\",\"children\":\"\"},{\"text\":\"任城\",\"value\":\"370811\",\"children\":\"\"},{\"text\":\"微山\",\"value\":\"370826\",\"children\":\"\"},{\"text\":\"鱼台\",\"value\":\"370827\",\"children\":\"\"},{\"text\":\"金乡\",\"value\":\"370828\",\"children\":\"\"},{\"text\":\"嘉祥\",\"value\":\"370829\",\"children\":\"\"},{\"text\":\"汶上\",\"value\":\"370830\",\"children\":\"\"},{\"text\":\"泗水\",\"value\":\"370831\",\"children\":\"\"},{\"text\":\"梁山\",\"value\":\"370832\",\"children\":\"\"},{\"text\":\"曲阜\",\"value\":\"370881\",\"children\":\"\"},{\"text\":\"兖州\",\"value\":\"370882\",\"children\":\"\"},{\"text\":\"邹城\",\"value\":\"370883\",\"children\":\"\"}]},{\"text\":\"泰安\",\"value\":\"370900\",\"children\":[{\"text\":\"泰山\",\"value\":\"370902\",\"children\":\"\"},{\"text\":\"岱岳\",\"value\":\"370903\",\"children\":\"\"},{\"text\":\"宁阳\",\"value\":\"370921\",\"children\":\"\"},{\"text\":\"东平\",\"value\":\"370923\",\"children\":\"\"},{\"text\":\"新泰\",\"value\":\"370982\",\"children\":\"\"},{\"text\":\"肥城\",\"value\":\"370983\",\"children\":\"\"}]},{\"text\":\"威海\",\"value\":\"371000\",\"children\":[{\"text\":\"环翠\",\"value\":\"371002\",\"children\":\"\"},{\"text\":\"文登\",\"value\":\"371081\",\"children\":\"\"},{\"text\":\"荣成\",\"value\":\"371082\",\"children\":\"\"},{\"text\":\"乳山\",\"value\":\"371083\",\"children\":\"\"}]},{\"text\":\"日照\",\"value\":\"371100\",\"children\":[{\"text\":\"东港\",\"value\":\"371102\",\"children\":\"\"},{\"text\":\"岚山\",\"value\":\"371103\",\"children\":\"\"},{\"text\":\"五莲\",\"value\":\"371121\",\"children\":\"\"},{\"text\":\"莒县\",\"value\":\"371122\",\"children\":\"\"}]},{\"text\":\"莱芜\",\"value\":\"371200\",\"children\":[{\"text\":\"莱城\",\"value\":\"371202\",\"children\":\"\"},{\"text\":\"钢城\",\"value\":\"371203\",\"children\":\"\"}]},{\"text\":\"临沂\",\"value\":\"371300\",\"children\":[{\"text\":\"兰山\",\"value\":\"371302\",\"children\":\"\"},{\"text\":\"罗庄\",\"value\":\"371311\",\"children\":\"\"},{\"text\":\"河东\",\"value\":\"371312\",\"children\":\"\"},{\"text\":\"沂南\",\"value\":\"371321\",\"children\":\"\"},{\"text\":\"郯城\",\"value\":\"371322\",\"children\":\"\"},{\"text\":\"沂水\",\"value\":\"371323\",\"children\":\"\"},{\"text\":\"兰陵\",\"value\":\"371324\",\"children\":\"\"},{\"text\":\"费县\",\"value\":\"371325\",\"children\":\"\"},{\"text\":\"平邑\",\"value\":\"371326\",\"children\":\"\"},{\"text\":\"莒南\",\"value\":\"371327\",\"children\":\"\"},{\"text\":\"蒙阴\",\"value\":\"371328\",\"children\":\"\"},{\"text\":\"临沭\",\"value\":\"371329\",\"children\":\"\"}]},{\"text\":\"德州\",\"value\":\"371400\",\"children\":[{\"text\":\"德城\",\"value\":\"371402\",\"children\":\"\"},{\"text\":\"陵城\",\"value\":\"371421\",\"children\":\"\"},{\"text\":\"宁津\",\"value\":\"371422\",\"children\":\"\"},{\"text\":\"庆云\",\"value\":\"371423\",\"children\":\"\"},{\"text\":\"临邑\",\"value\":\"371424\",\"children\":\"\"},{\"text\":\"齐河\",\"value\":\"371425\",\"children\":\"\"},{\"text\":\"平原\",\"value\":\"371426\",\"children\":\"\"},{\"text\":\"夏津\",\"value\":\"371427\",\"children\":\"\"},{\"text\":\"武城\",\"value\":\"371428\",\"children\":\"\"},{\"text\":\"乐陵\",\"value\":\"371481\",\"children\":\"\"},{\"text\":\"禹城\",\"value\":\"371482\",\"children\":\"\"}]},{\"text\":\"聊城\",\"value\":\"371500\",\"children\":[{\"text\":\"东昌府\",\"value\":\"371502\",\"children\":\"\"},{\"text\":\"阳谷\",\"value\":\"371521\",\"children\":\"\"},{\"text\":\"莘县\",\"value\":\"371522\",\"children\":\"\"},{\"text\":\"茌平\",\"value\":\"371523\",\"children\":\"\"},{\"text\":\"东阿\",\"value\":\"371524\",\"children\":\"\"},{\"text\":\"冠县\",\"value\":\"371525\",\"children\":\"\"},{\"text\":\"高唐\",\"value\":\"371526\",\"children\":\"\"},{\"text\":\"临清\",\"value\":\"371581\",\"children\":\"\"}]},{\"text\":\"滨州\",\"value\":\"371600\",\"children\":[{\"text\":\"滨城\",\"value\":\"371602\",\"children\":\"\"},{\"text\":\"惠民\",\"value\":\"371621\",\"children\":\"\"},{\"text\":\"阳信\",\"value\":\"371622\",\"children\":\"\"},{\"text\":\"无棣\",\"value\":\"371623\",\"children\":\"\"},{\"text\":\"沾化\",\"value\":\"371624\",\"children\":\"\"},{\"text\":\"博兴\",\"value\":\"371625\",\"children\":\"\"},{\"text\":\"邹平\",\"value\":\"371626\",\"children\":\"\"}]},{\"text\":\"菏泽\",\"value\":\"371700\",\"children\":[{\"text\":\"牡丹\",\"value\":\"371702\",\"children\":\"\"},{\"text\":\"曹县\",\"value\":\"371721\",\"children\":\"\"},{\"text\":\"单县\",\"value\":\"371722\",\"children\":\"\"},{\"text\":\"成武\",\"value\":\"371723\",\"children\":\"\"},{\"text\":\"巨野\",\"value\":\"371724\",\"children\":\"\"},{\"text\":\"郓城\",\"value\":\"371725\",\"children\":\"\"},{\"text\":\"鄄城\",\"value\":\"371726\",\"children\":\"\"},{\"text\":\"定陶\",\"value\":\"371727\",\"children\":\"\"},{\"text\":\"东明\",\"value\":\"371728\",\"children\":\"\"}]}]},{\"text\":\"河南\",\"value\":\"410000\",\"children\":[{\"text\":\"郑州\",\"value\":\"410100\",\"children\":[{\"text\":\"中原\",\"value\":\"410102\",\"children\":\"\"},{\"text\":\"二七\",\"value\":\"410103\",\"children\":\"\"},{\"text\":\"管城回族\",\"value\":\"410104\",\"children\":\"\"},{\"text\":\"金水\",\"value\":\"410105\",\"children\":\"\"},{\"text\":\"上街\",\"value\":\"410106\",\"children\":\"\"},{\"text\":\"惠济\",\"value\":\"410108\",\"children\":\"\"},{\"text\":\"中牟\",\"value\":\"410122\",\"children\":\"\"},{\"text\":\"巩义\",\"value\":\"410181\",\"children\":\"\"},{\"text\":\"荥阳\",\"value\":\"410182\",\"children\":\"\"},{\"text\":\"新密\",\"value\":\"410183\",\"children\":\"\"},{\"text\":\"新郑\",\"value\":\"410184\",\"children\":\"\"},{\"text\":\"登封\",\"value\":\"410185\",\"children\":\"\"}]},{\"text\":\"开封\",\"value\":\"410200\",\"children\":[{\"text\":\"龙亭\",\"value\":\"410202\",\"children\":\"\"},{\"text\":\"顺河回族\",\"value\":\"410203\",\"children\":\"\"},{\"text\":\"鼓楼\",\"value\":\"410204\",\"children\":\"\"},{\"text\":\"禹王台\",\"value\":\"410205\",\"children\":\"\"},{\"text\":\"金明\",\"value\":\"410211\",\"children\":\"\"},{\"text\":\"杞县\",\"value\":\"410221\",\"children\":\"\"},{\"text\":\"通许\",\"value\":\"410222\",\"children\":\"\"},{\"text\":\"尉氏\",\"value\":\"410223\",\"children\":\"\"},{\"text\":\"祥符\",\"value\":\"410224\",\"children\":\"\"},{\"text\":\"兰考\",\"value\":\"410225\",\"children\":\"\"}]},{\"text\":\"洛阳\",\"value\":\"410300\",\"children\":[{\"text\":\"老城\",\"value\":\"410302\",\"children\":\"\"},{\"text\":\"西工\",\"value\":\"410303\",\"children\":\"\"},{\"text\":\"瀍河回族\",\"value\":\"410304\",\"children\":\"\"},{\"text\":\"涧西\",\"value\":\"410305\",\"children\":\"\"},{\"text\":\"吉利\",\"value\":\"410306\",\"children\":\"\"},{\"text\":\"洛龙\",\"value\":\"410307\",\"children\":\"\"},{\"text\":\"孟津\",\"value\":\"410322\",\"children\":\"\"},{\"text\":\"新安\",\"value\":\"410323\",\"children\":\"\"},{\"text\":\"栾川\",\"value\":\"410324\",\"children\":\"\"},{\"text\":\"嵩县\",\"value\":\"410325\",\"children\":\"\"},{\"text\":\"汝阳\",\"value\":\"410326\",\"children\":\"\"},{\"text\":\"宜阳\",\"value\":\"410327\",\"children\":\"\"},{\"text\":\"洛宁\",\"value\":\"410328\",\"children\":\"\"},{\"text\":\"伊川\",\"value\":\"410329\",\"children\":\"\"},{\"text\":\"偃师\",\"value\":\"410381\",\"children\":\"\"}]},{\"text\":\"平顶山\",\"value\":\"410400\",\"children\":[{\"text\":\"新华\",\"value\":\"410402\",\"children\":\"\"},{\"text\":\"卫东\",\"value\":\"410403\",\"children\":\"\"},{\"text\":\"石龙\",\"value\":\"410404\",\"children\":\"\"},{\"text\":\"湛河\",\"value\":\"410411\",\"children\":\"\"},{\"text\":\"宝丰\",\"value\":\"410421\",\"children\":\"\"},{\"text\":\"叶县\",\"value\":\"410422\",\"children\":\"\"},{\"text\":\"鲁山\",\"value\":\"410423\",\"children\":\"\"},{\"text\":\"郏县\",\"value\":\"410425\",\"children\":\"\"},{\"text\":\"舞钢\",\"value\":\"410481\",\"children\":\"\"},{\"text\":\"汝州\",\"value\":\"410482\",\"children\":\"\"}]},{\"text\":\"安阳\",\"value\":\"410500\",\"children\":[{\"text\":\"文峰\",\"value\":\"410502\",\"children\":\"\"},{\"text\":\"北关\",\"value\":\"410503\",\"children\":\"\"},{\"text\":\"殷都\",\"value\":\"410505\",\"children\":\"\"},{\"text\":\"龙安\",\"value\":\"410506\",\"children\":\"\"},{\"text\":\"安阳\",\"value\":\"410522\",\"children\":\"\"},{\"text\":\"汤阴\",\"value\":\"410523\",\"children\":\"\"},{\"text\":\"滑县\",\"value\":\"410526\",\"children\":\"\"},{\"text\":\"内黄\",\"value\":\"410527\",\"children\":\"\"},{\"text\":\"林州\",\"value\":\"410581\",\"children\":\"\"}]},{\"text\":\"鹤壁\",\"value\":\"410600\",\"children\":[{\"text\":\"鹤山\",\"value\":\"410602\",\"children\":\"\"},{\"text\":\"山城\",\"value\":\"410603\",\"children\":\"\"},{\"text\":\"淇滨\",\"value\":\"410611\",\"children\":\"\"},{\"text\":\"浚县\",\"value\":\"410621\",\"children\":\"\"},{\"text\":\"淇县\",\"value\":\"410622\",\"children\":\"\"}]},{\"text\":\"新乡\",\"value\":\"410700\",\"children\":[{\"text\":\"红旗\",\"value\":\"410702\",\"children\":\"\"},{\"text\":\"卫滨\",\"value\":\"410703\",\"children\":\"\"},{\"text\":\"凤泉\",\"value\":\"410704\",\"children\":\"\"},{\"text\":\"牧野\",\"value\":\"410711\",\"children\":\"\"},{\"text\":\"新乡\",\"value\":\"410721\",\"children\":\"\"},{\"text\":\"获嘉\",\"value\":\"410724\",\"children\":\"\"},{\"text\":\"原阳\",\"value\":\"410725\",\"children\":\"\"},{\"text\":\"延津\",\"value\":\"410726\",\"children\":\"\"},{\"text\":\"封丘\",\"value\":\"410727\",\"children\":\"\"},{\"text\":\"长垣\",\"value\":\"410728\",\"children\":\"\"},{\"text\":\"卫辉\",\"value\":\"410781\",\"children\":\"\"},{\"text\":\"辉县\",\"value\":\"410782\",\"children\":\"\"}]},{\"text\":\"焦作\",\"value\":\"410800\",\"children\":[{\"text\":\"解放\",\"value\":\"410802\",\"children\":\"\"},{\"text\":\"中站\",\"value\":\"410803\",\"children\":\"\"},{\"text\":\"马村\",\"value\":\"410804\",\"children\":\"\"},{\"text\":\"山阳\",\"value\":\"410811\",\"children\":\"\"},{\"text\":\"修武\",\"value\":\"410821\",\"children\":\"\"},{\"text\":\"博爱\",\"value\":\"410822\",\"children\":\"\"},{\"text\":\"武陟\",\"value\":\"410823\",\"children\":\"\"},{\"text\":\"温县\",\"value\":\"410825\",\"children\":\"\"},{\"text\":\"沁阳\",\"value\":\"410882\",\"children\":\"\"},{\"text\":\"孟州\",\"value\":\"410883\",\"children\":\"\"}]},{\"text\":\"济源\",\"value\":\"410881\",\"children\":[{\"text\":\"济源\",\"value\":\"410881\",\"children\":\"\"}]},{\"text\":\"濮阳\",\"value\":\"410900\",\"children\":[{\"text\":\"华龙\",\"value\":\"410902\",\"children\":\"\"},{\"text\":\"清丰\",\"value\":\"410922\",\"children\":\"\"},{\"text\":\"南乐\",\"value\":\"410923\",\"children\":\"\"},{\"text\":\"范县\",\"value\":\"410926\",\"children\":\"\"},{\"text\":\"台前\",\"value\":\"410927\",\"children\":\"\"},{\"text\":\"濮阳\",\"value\":\"410928\",\"children\":\"\"}]},{\"text\":\"许昌\",\"value\":\"411000\",\"children\":[{\"text\":\"魏都\",\"value\":\"411002\",\"children\":\"\"},{\"text\":\"许昌\",\"value\":\"411023\",\"children\":\"\"},{\"text\":\"鄢陵\",\"value\":\"411024\",\"children\":\"\"},{\"text\":\"襄城\",\"value\":\"411025\",\"children\":\"\"},{\"text\":\"禹州\",\"value\":\"411081\",\"children\":\"\"},{\"text\":\"长葛\",\"value\":\"411082\",\"children\":\"\"}]},{\"text\":\"漯河\",\"value\":\"411100\",\"children\":[{\"text\":\"源汇\",\"value\":\"411102\",\"children\":\"\"},{\"text\":\"郾城\",\"value\":\"411103\",\"children\":\"\"},{\"text\":\"召陵\",\"value\":\"411104\",\"children\":\"\"},{\"text\":\"舞阳\",\"value\":\"411121\",\"children\":\"\"},{\"text\":\"临颍\",\"value\":\"411122\",\"children\":\"\"}]},{\"text\":\"三门峡\",\"value\":\"411200\",\"children\":[{\"text\":\"湖滨\",\"value\":\"411202\",\"children\":\"\"},{\"text\":\"渑池\",\"value\":\"411221\",\"children\":\"\"},{\"text\":\"陕州\",\"value\":\"411222\",\"children\":\"\"},{\"text\":\"卢氏\",\"value\":\"411224\",\"children\":\"\"},{\"text\":\"义马\",\"value\":\"411281\",\"children\":\"\"},{\"text\":\"灵宝\",\"value\":\"411282\",\"children\":\"\"}]},{\"text\":\"南阳\",\"value\":\"411300\",\"children\":[{\"text\":\"宛城\",\"value\":\"411302\",\"children\":\"\"},{\"text\":\"卧龙\",\"value\":\"411303\",\"children\":\"\"},{\"text\":\"南召\",\"value\":\"411321\",\"children\":\"\"},{\"text\":\"方城\",\"value\":\"411322\",\"children\":\"\"},{\"text\":\"西峡\",\"value\":\"411323\",\"children\":\"\"},{\"text\":\"镇平\",\"value\":\"411324\",\"children\":\"\"},{\"text\":\"内乡\",\"value\":\"411325\",\"children\":\"\"},{\"text\":\"淅川\",\"value\":\"411326\",\"children\":\"\"},{\"text\":\"社旗县\",\"value\":\"411327\",\"children\":\"\"},{\"text\":\"唐河\",\"value\":\"411328\",\"children\":\"\"},{\"text\":\"新野\",\"value\":\"411329\",\"children\":\"\"},{\"text\":\"桐柏\",\"value\":\"411330\",\"children\":\"\"},{\"text\":\"邓州\",\"value\":\"411381\",\"children\":\"\"}]},{\"text\":\"商丘\",\"value\":\"411400\",\"children\":[{\"text\":\"梁园\",\"value\":\"411402\",\"children\":\"\"},{\"text\":\"睢阳\",\"value\":\"411403\",\"children\":\"\"},{\"text\":\"民权\",\"value\":\"411421\",\"children\":\"\"},{\"text\":\"睢县\",\"value\":\"411422\",\"children\":\"\"},{\"text\":\"宁陵\",\"value\":\"411423\",\"children\":\"\"},{\"text\":\"柘城\",\"value\":\"411424\",\"children\":\"\"},{\"text\":\"虞城\",\"value\":\"411425\",\"children\":\"\"},{\"text\":\"夏邑\",\"value\":\"411426\",\"children\":\"\"},{\"text\":\"永城\",\"value\":\"411481\",\"children\":\"\"}]},{\"text\":\"信阳\",\"value\":\"411500\",\"children\":[{\"text\":\"浉河\",\"value\":\"411502\",\"children\":\"\"},{\"text\":\"平桥\",\"value\":\"411503\",\"children\":\"\"},{\"text\":\"罗山\",\"value\":\"411521\",\"children\":\"\"},{\"text\":\"光山\",\"value\":\"411522\",\"children\":\"\"},{\"text\":\"新县\",\"value\":\"411523\",\"children\":\"\"},{\"text\":\"商城\",\"value\":\"411524\",\"children\":\"\"},{\"text\":\"固始\",\"value\":\"411525\",\"children\":\"\"},{\"text\":\"潢川\",\"value\":\"411526\",\"children\":\"\"},{\"text\":\"淮滨\",\"value\":\"411527\",\"children\":\"\"},{\"text\":\"息县\",\"value\":\"411528\",\"children\":\"\"}]},{\"text\":\"周口\",\"value\":\"411600\",\"children\":[{\"text\":\"川汇\",\"value\":\"411602\",\"children\":\"\"},{\"text\":\"扶沟\",\"value\":\"411621\",\"children\":\"\"},{\"text\":\"西华\",\"value\":\"411622\",\"children\":\"\"},{\"text\":\"商水\",\"value\":\"411623\",\"children\":\"\"},{\"text\":\"沈丘\",\"value\":\"411624\",\"children\":\"\"},{\"text\":\"郸城\",\"value\":\"411625\",\"children\":\"\"},{\"text\":\"淮阳\",\"value\":\"411626\",\"children\":\"\"},{\"text\":\"太康\",\"value\":\"411627\",\"children\":\"\"},{\"text\":\"鹿邑\",\"value\":\"411628\",\"children\":\"\"},{\"text\":\"项城\",\"value\":\"411681\",\"children\":\"\"}]},{\"text\":\"驻马店\",\"value\":\"411700\",\"children\":[{\"text\":\"驿城\",\"value\":\"411702\",\"children\":\"\"},{\"text\":\"西平\",\"value\":\"411721\",\"children\":\"\"},{\"text\":\"上蔡\",\"value\":\"411722\",\"children\":\"\"},{\"text\":\"平舆\",\"value\":\"411723\",\"children\":\"\"},{\"text\":\"正阳\",\"value\":\"411724\",\"children\":\"\"},{\"text\":\"确山\",\"value\":\"411725\",\"children\":\"\"},{\"text\":\"泌阳\",\"value\":\"411726\",\"children\":\"\"},{\"text\":\"汝南\",\"value\":\"411727\",\"children\":\"\"},{\"text\":\"遂平\",\"value\":\"411728\",\"children\":\"\"},{\"text\":\"新蔡\",\"value\":\"411729\",\"children\":\"\"}]}]},{\"text\":\"湖北\",\"value\":\"420000\",\"children\":[{\"text\":\"武汉\",\"value\":\"420100\",\"children\":[{\"text\":\"江岸\",\"value\":\"420102\",\"children\":\"\"},{\"text\":\"江汉\",\"value\":\"420103\",\"children\":\"\"},{\"text\":\"硚口\",\"value\":\"420104\",\"children\":\"\"},{\"text\":\"汉阳\",\"value\":\"420105\",\"children\":\"\"},{\"text\":\"武昌\",\"value\":\"420106\",\"children\":\"\"},{\"text\":\"青山\",\"value\":\"420107\",\"children\":\"\"},{\"text\":\"洪山\",\"value\":\"420111\",\"children\":\"\"},{\"text\":\"东西湖\",\"value\":\"420112\",\"children\":\"\"},{\"text\":\"汉南\",\"value\":\"420113\",\"children\":\"\"},{\"text\":\"蔡甸\",\"value\":\"420114\",\"children\":\"\"},{\"text\":\"江夏\",\"value\":\"420115\",\"children\":\"\"},{\"text\":\"黄陂\",\"value\":\"420116\",\"children\":\"\"},{\"text\":\"新洲\",\"value\":\"420117\",\"children\":\"\"}]},{\"text\":\"黄石\",\"value\":\"420200\",\"children\":[{\"text\":\"黄石港\",\"value\":\"420202\",\"children\":\"\"},{\"text\":\"西塞山\",\"value\":\"420203\",\"children\":\"\"},{\"text\":\"下陆\",\"value\":\"420204\",\"children\":\"\"},{\"text\":\"铁山\",\"value\":\"420205\",\"children\":\"\"},{\"text\":\"阳新\",\"value\":\"420222\",\"children\":\"\"},{\"text\":\"大冶\",\"value\":\"420281\",\"children\":\"\"}]},{\"text\":\"十堰\",\"value\":\"420300\",\"children\":[{\"text\":\"茅箭\",\"value\":\"420302\",\"children\":\"\"},{\"text\":\"张湾\",\"value\":\"420303\",\"children\":\"\"},{\"text\":\"郧阳\",\"value\":\"420321\",\"children\":\"\"},{\"text\":\"郧西\",\"value\":\"420322\",\"children\":\"\"},{\"text\":\"竹山\",\"value\":\"420323\",\"children\":\"\"},{\"text\":\"竹溪\",\"value\":\"420324\",\"children\":\"\"},{\"text\":\"房县\",\"value\":\"420325\",\"children\":\"\"},{\"text\":\"丹江口\",\"value\":\"420381\",\"children\":\"\"}]},{\"text\":\"宜昌\",\"value\":\"420500\",\"children\":[{\"text\":\"西陵\",\"value\":\"420502\",\"children\":\"\"},{\"text\":\"伍家岗\",\"value\":\"420503\",\"children\":\"\"},{\"text\":\"点军\",\"value\":\"420504\",\"children\":\"\"},{\"text\":\"猇亭\",\"value\":\"420505\",\"children\":\"\"},{\"text\":\"夷陵\",\"value\":\"420506\",\"children\":\"\"},{\"text\":\"远安\",\"value\":\"420525\",\"children\":\"\"},{\"text\":\"兴山\",\"value\":\"420526\",\"children\":\"\"},{\"text\":\"秭归\",\"value\":\"420527\",\"children\":\"\"},{\"text\":\"长阳\",\"value\":\"420528\",\"children\":\"\"},{\"text\":\"五峰\",\"value\":\"420529\",\"children\":\"\"},{\"text\":\"宜都\",\"value\":\"420581\",\"children\":\"\"},{\"text\":\"当阳\",\"value\":\"420582\",\"children\":\"\"},{\"text\":\"枝江\",\"value\":\"420583\",\"children\":\"\"}]},{\"text\":\"襄阳\",\"value\":\"420600\",\"children\":[{\"text\":\"襄城\",\"value\":\"420602\",\"children\":\"\"},{\"text\":\"樊城\",\"value\":\"420606\",\"children\":\"\"},{\"text\":\"襄州\",\"value\":\"420607\",\"children\":\"\"},{\"text\":\"南漳\",\"value\":\"420624\",\"children\":\"\"},{\"text\":\"谷城\",\"value\":\"420625\",\"children\":\"\"},{\"text\":\"保康\",\"value\":\"420626\",\"children\":\"\"},{\"text\":\"老河口\",\"value\":\"420682\",\"children\":\"\"},{\"text\":\"枣阳\",\"value\":\"420683\",\"children\":\"\"},{\"text\":\"宜城\",\"value\":\"420684\",\"children\":\"\"}]},{\"text\":\"鄂州\",\"value\":\"420700\",\"children\":[{\"text\":\"梁子湖\",\"value\":\"420702\",\"children\":\"\"},{\"text\":\"华容\",\"value\":\"420703\",\"children\":\"\"},{\"text\":\"鄂城\",\"value\":\"420704\",\"children\":\"\"}]},{\"text\":\"荆门\",\"value\":\"420800\",\"children\":[{\"text\":\"东宝\",\"value\":\"420802\",\"children\":\"\"},{\"text\":\"掇刀\",\"value\":\"420804\",\"children\":\"\"},{\"text\":\"京山\",\"value\":\"420821\",\"children\":\"\"},{\"text\":\"沙洋\",\"value\":\"420822\",\"children\":\"\"},{\"text\":\"钟祥\",\"value\":\"420881\",\"children\":\"\"}]},{\"text\":\"孝感\",\"value\":\"420900\",\"children\":[{\"text\":\"孝南\",\"value\":\"420902\",\"children\":\"\"},{\"text\":\"孝昌\",\"value\":\"420921\",\"children\":\"\"},{\"text\":\"大悟\",\"value\":\"420922\",\"children\":\"\"},{\"text\":\"云梦\",\"value\":\"420923\",\"children\":\"\"},{\"text\":\"应城\",\"value\":\"420981\",\"children\":\"\"},{\"text\":\"安陆\",\"value\":\"420982\",\"children\":\"\"},{\"text\":\"汉川\",\"value\":\"420984\",\"children\":\"\"}]},{\"text\":\"荆州\",\"value\":\"421000\",\"children\":[{\"text\":\"沙市\",\"value\":\"421002\",\"children\":\"\"},{\"text\":\"荆州\",\"value\":\"421003\",\"children\":\"\"},{\"text\":\"公安\",\"value\":\"421022\",\"children\":\"\"},{\"text\":\"监利\",\"value\":\"421023\",\"children\":\"\"},{\"text\":\"江陵\",\"value\":\"421024\",\"children\":\"\"},{\"text\":\"石首\",\"value\":\"421081\",\"children\":\"\"},{\"text\":\"洪湖\",\"value\":\"421083\",\"children\":\"\"},{\"text\":\"松滋\",\"value\":\"421087\",\"children\":\"\"}]},{\"text\":\"黄冈\",\"value\":\"421100\",\"children\":[{\"text\":\"黄州\",\"value\":\"421102\",\"children\":\"\"},{\"text\":\"团风\",\"value\":\"421121\",\"children\":\"\"},{\"text\":\"红安\",\"value\":\"421122\",\"children\":\"\"},{\"text\":\"罗田\",\"value\":\"421123\",\"children\":\"\"},{\"text\":\"英山\",\"value\":\"421124\",\"children\":\"\"},{\"text\":\"浠水\",\"value\":\"421125\",\"children\":\"\"},{\"text\":\"蕲春\",\"value\":\"421126\",\"children\":\"\"},{\"text\":\"黄梅\",\"value\":\"421127\",\"children\":\"\"},{\"text\":\"麻城\",\"value\":\"421181\",\"children\":\"\"},{\"text\":\"武穴\",\"value\":\"421182\",\"children\":\"\"}]},{\"text\":\"咸宁\",\"value\":\"421200\",\"children\":[{\"text\":\"咸安\",\"value\":\"421202\",\"children\":\"\"},{\"text\":\"嘉鱼\",\"value\":\"421221\",\"children\":\"\"},{\"text\":\"通城\",\"value\":\"421222\",\"children\":\"\"},{\"text\":\"崇阳\",\"value\":\"421223\",\"children\":\"\"},{\"text\":\"通山\",\"value\":\"421224\",\"children\":\"\"},{\"text\":\"赤壁\",\"value\":\"421281\",\"children\":\"\"}]},{\"text\":\"随州\",\"value\":\"421300\",\"children\":[{\"text\":\"曾都\",\"value\":\"421302\",\"children\":\"\"},{\"text\":\"随县\",\"value\":\"421321\",\"children\":\"\"},{\"text\":\"广水\",\"value\":\"421381\",\"children\":\"\"}]},{\"text\":\"恩施\",\"value\":\"422800\",\"children\":[{\"text\":\"恩施\",\"value\":\"422801\",\"children\":\"\"},{\"text\":\"利川\",\"value\":\"422802\",\"children\":\"\"},{\"text\":\"建始\",\"value\":\"422822\",\"children\":\"\"},{\"text\":\"巴东\",\"value\":\"422823\",\"children\":\"\"},{\"text\":\"宣恩\",\"value\":\"422825\",\"children\":\"\"},{\"text\":\"咸丰\",\"value\":\"422826\",\"children\":\"\"},{\"text\":\"来凤\",\"value\":\"422827\",\"children\":\"\"},{\"text\":\"鹤峰\",\"value\":\"422828\",\"children\":\"\"}]},{\"text\":\"仙桃\",\"value\":\"429004\",\"children\":[{\"text\":\"仙桃\",\"value\":\"429004\",\"children\":\"\"}]},{\"text\":\"潜江\",\"value\":\"429005\",\"children\":[{\"text\":\"潜江\",\"value\":\"429005\",\"children\":\"\"}]},{\"text\":\"天门\",\"value\":\"429006\",\"children\":[{\"text\":\"天门\",\"value\":\"429006\",\"children\":\"\"}]},{\"text\":\"神农架\",\"value\":\"429021\",\"children\":[{\"text\":\"神农架\",\"value\":\"429021\",\"children\":\"\"}]}]},{\"text\":\"湖南\",\"value\":\"430000\",\"children\":[{\"text\":\"长沙\",\"value\":\"430100\",\"children\":[{\"text\":\"芙蓉\",\"value\":\"430102\",\"children\":\"\"},{\"text\":\"天心\",\"value\":\"430103\",\"children\":\"\"},{\"text\":\"岳麓\",\"value\":\"430104\",\"children\":\"\"},{\"text\":\"开福\",\"value\":\"430105\",\"children\":\"\"},{\"text\":\"雨花\",\"value\":\"430111\",\"children\":\"\"},{\"text\":\"长沙\",\"value\":\"430121\",\"children\":\"\"},{\"text\":\"望城\",\"value\":\"430122\",\"children\":\"\"},{\"text\":\"宁乡\",\"value\":\"430124\",\"children\":\"\"},{\"text\":\"浏阳\",\"value\":\"430181\",\"children\":\"\"}]},{\"text\":\"株洲\",\"value\":\"430200\",\"children\":[{\"text\":\"荷塘\",\"value\":\"430202\",\"children\":\"\"},{\"text\":\"芦淞\",\"value\":\"430203\",\"children\":\"\"},{\"text\":\"石峰\",\"value\":\"430204\",\"children\":\"\"},{\"text\":\"天元\",\"value\":\"430211\",\"children\":\"\"},{\"text\":\"株洲\",\"value\":\"430221\",\"children\":\"\"},{\"text\":\"攸县\",\"value\":\"430223\",\"children\":\"\"},{\"text\":\"茶陵\",\"value\":\"430224\",\"children\":\"\"},{\"text\":\"炎陵\",\"value\":\"430225\",\"children\":\"\"},{\"text\":\"醴陵\",\"value\":\"430281\",\"children\":\"\"}]},{\"text\":\"湘潭\",\"value\":\"430300\",\"children\":[{\"text\":\"雨湖\",\"value\":\"430302\",\"children\":\"\"},{\"text\":\"岳塘\",\"value\":\"430304\",\"children\":\"\"},{\"text\":\"湘潭\",\"value\":\"430321\",\"children\":\"\"},{\"text\":\"湘乡\",\"value\":\"430381\",\"children\":\"\"},{\"text\":\"韶山\",\"value\":\"430382\",\"children\":\"\"}]},{\"text\":\"衡阳\",\"value\":\"430400\",\"children\":[{\"text\":\"珠晖\",\"value\":\"430405\",\"children\":\"\"},{\"text\":\"雁峰\",\"value\":\"430406\",\"children\":\"\"},{\"text\":\"石鼓\",\"value\":\"430407\",\"children\":\"\"},{\"text\":\"蒸湘\",\"value\":\"430408\",\"children\":\"\"},{\"text\":\"南岳\",\"value\":\"430412\",\"children\":\"\"},{\"text\":\"衡阳\",\"value\":\"430421\",\"children\":\"\"},{\"text\":\"衡南\",\"value\":\"430422\",\"children\":\"\"},{\"text\":\"衡山\",\"value\":\"430423\",\"children\":\"\"},{\"text\":\"衡东\",\"value\":\"430424\",\"children\":\"\"},{\"text\":\"祁东\",\"value\":\"430426\",\"children\":\"\"},{\"text\":\"耒阳\",\"value\":\"430481\",\"children\":\"\"},{\"text\":\"常宁\",\"value\":\"430482\",\"children\":\"\"}]},{\"text\":\"邵阳\",\"value\":\"430500\",\"children\":[{\"text\":\"双清\",\"value\":\"430502\",\"children\":\"\"},{\"text\":\"大祥\",\"value\":\"430503\",\"children\":\"\"},{\"text\":\"北塔\",\"value\":\"430511\",\"children\":\"\"},{\"text\":\"邵东\",\"value\":\"430521\",\"children\":\"\"},{\"text\":\"新邵\",\"value\":\"430522\",\"children\":\"\"},{\"text\":\"邵阳\",\"value\":\"430523\",\"children\":\"\"},{\"text\":\"隆回\",\"value\":\"430524\",\"children\":\"\"},{\"text\":\"洞口\",\"value\":\"430525\",\"children\":\"\"},{\"text\":\"绥宁\",\"value\":\"430527\",\"children\":\"\"},{\"text\":\"新宁\",\"value\":\"430528\",\"children\":\"\"},{\"text\":\"城步\",\"value\":\"430529\",\"children\":\"\"},{\"text\":\"武冈\",\"value\":\"430581\",\"children\":\"\"}]},{\"text\":\"岳阳\",\"value\":\"430600\",\"children\":[{\"text\":\"岳阳楼\",\"value\":\"430602\",\"children\":\"\"},{\"text\":\"云溪\",\"value\":\"430603\",\"children\":\"\"},{\"text\":\"君山\",\"value\":\"430611\",\"children\":\"\"},{\"text\":\"岳阳\",\"value\":\"430621\",\"children\":\"\"},{\"text\":\"华容\",\"value\":\"430623\",\"children\":\"\"},{\"text\":\"湘阴\",\"value\":\"430624\",\"children\":\"\"},{\"text\":\"平江\",\"value\":\"430626\",\"children\":\"\"},{\"text\":\"汨罗\",\"value\":\"430681\",\"children\":\"\"},{\"text\":\"临湘\",\"value\":\"430682\",\"children\":\"\"}]},{\"text\":\"常德\",\"value\":\"430700\",\"children\":[{\"text\":\"武陵\",\"value\":\"430702\",\"children\":\"\"},{\"text\":\"鼎城\",\"value\":\"430703\",\"children\":\"\"},{\"text\":\"安乡\",\"value\":\"430721\",\"children\":\"\"},{\"text\":\"汉寿\",\"value\":\"430722\",\"children\":\"\"},{\"text\":\"澧县\",\"value\":\"430723\",\"children\":\"\"},{\"text\":\"临澧\",\"value\":\"430724\",\"children\":\"\"},{\"text\":\"桃源\",\"value\":\"430725\",\"children\":\"\"},{\"text\":\"石门\",\"value\":\"430726\",\"children\":\"\"},{\"text\":\"津市\",\"value\":\"430781\",\"children\":\"\"}]},{\"text\":\"张家界\",\"value\":\"430800\",\"children\":[{\"text\":\"永定\",\"value\":\"430802\",\"children\":\"\"},{\"text\":\"武陵源\",\"value\":\"430811\",\"children\":\"\"},{\"text\":\"慈利\",\"value\":\"430821\",\"children\":\"\"},{\"text\":\"桑植\",\"value\":\"430822\",\"children\":\"\"}]},{\"text\":\"益阳\",\"value\":\"430900\",\"children\":[{\"text\":\"资阳\",\"value\":\"430902\",\"children\":\"\"},{\"text\":\"赫山\",\"value\":\"430903\",\"children\":\"\"},{\"text\":\"南县\",\"value\":\"430921\",\"children\":\"\"},{\"text\":\"桃江\",\"value\":\"430922\",\"children\":\"\"},{\"text\":\"安化\",\"value\":\"430923\",\"children\":\"\"},{\"text\":\"沅江\",\"value\":\"430981\",\"children\":\"\"}]},{\"text\":\"郴州\",\"value\":\"431000\",\"children\":[{\"text\":\"北湖\",\"value\":\"431002\",\"children\":\"\"},{\"text\":\"苏仙\",\"value\":\"431003\",\"children\":\"\"},{\"text\":\"桂阳\",\"value\":\"431021\",\"children\":\"\"},{\"text\":\"宜章\",\"value\":\"431022\",\"children\":\"\"},{\"text\":\"永兴\",\"value\":\"431023\",\"children\":\"\"},{\"text\":\"嘉禾\",\"value\":\"431024\",\"children\":\"\"},{\"text\":\"临武\",\"value\":\"431025\",\"children\":\"\"},{\"text\":\"汝城\",\"value\":\"431026\",\"children\":\"\"},{\"text\":\"桂东\",\"value\":\"431027\",\"children\":\"\"},{\"text\":\"安仁\",\"value\":\"431028\",\"children\":\"\"},{\"text\":\"资兴\",\"value\":\"431081\",\"children\":\"\"}]},{\"text\":\"永州\",\"value\":\"431100\",\"children\":[{\"text\":\"零陵\",\"value\":\"431102\",\"children\":\"\"},{\"text\":\"冷水滩\",\"value\":\"431103\",\"children\":\"\"},{\"text\":\"祁阳\",\"value\":\"431121\",\"children\":\"\"},{\"text\":\"东安\",\"value\":\"431122\",\"children\":\"\"},{\"text\":\"双牌\",\"value\":\"431123\",\"children\":\"\"},{\"text\":\"道县\",\"value\":\"431124\",\"children\":\"\"},{\"text\":\"江永\",\"value\":\"431125\",\"children\":\"\"},{\"text\":\"宁远\",\"value\":\"431126\",\"children\":\"\"},{\"text\":\"蓝山\",\"value\":\"431127\",\"children\":\"\"},{\"text\":\"新田\",\"value\":\"431128\",\"children\":\"\"},{\"text\":\"江华\",\"value\":\"431129\",\"children\":\"\"}]},{\"text\":\"怀化\",\"value\":\"431200\",\"children\":[{\"text\":\"鹤城\",\"value\":\"431202\",\"children\":\"\"},{\"text\":\"中方\",\"value\":\"431221\",\"children\":\"\"},{\"text\":\"沅陵\",\"value\":\"431222\",\"children\":\"\"},{\"text\":\"辰溪\",\"value\":\"431223\",\"children\":\"\"},{\"text\":\"溆浦\",\"value\":\"431224\",\"children\":\"\"},{\"text\":\"会同\",\"value\":\"431225\",\"children\":\"\"},{\"text\":\"麻阳\",\"value\":\"431226\",\"children\":\"\"},{\"text\":\"新晃\",\"value\":\"431227\",\"children\":\"\"},{\"text\":\"芷江\",\"value\":\"431228\",\"children\":\"\"},{\"text\":\"靖州\",\"value\":\"431229\",\"children\":\"\"},{\"text\":\"通道\",\"value\":\"431230\",\"children\":\"\"},{\"text\":\"洪江\",\"value\":\"431281\",\"children\":\"\"}]},{\"text\":\"娄底\",\"value\":\"431300\",\"children\":[{\"text\":\"娄星\",\"value\":\"431302\",\"children\":\"\"},{\"text\":\"双峰\",\"value\":\"431321\",\"children\":\"\"},{\"text\":\"新化\",\"value\":\"431322\",\"children\":\"\"},{\"text\":\"冷水江\",\"value\":\"431381\",\"children\":\"\"},{\"text\":\"涟源\",\"value\":\"431382\",\"children\":\"\"}]},{\"text\":\"湘西\",\"value\":\"433100\",\"children\":[{\"text\":\"吉首\",\"value\":\"433101\",\"children\":\"\"},{\"text\":\"泸溪\",\"value\":\"433122\",\"children\":\"\"},{\"text\":\"凤凰\",\"value\":\"433123\",\"children\":\"\"},{\"text\":\"花垣\",\"value\":\"433124\",\"children\":\"\"},{\"text\":\"保靖\",\"value\":\"433125\",\"children\":\"\"},{\"text\":\"古丈\",\"value\":\"433126\",\"children\":\"\"},{\"text\":\"永顺\",\"value\":\"433127\",\"children\":\"\"},{\"text\":\"龙山\",\"value\":\"433130\",\"children\":\"\"}]}]},{\"text\":\"广东\",\"value\":\"440000\",\"children\":[{\"text\":\"广州\",\"value\":\"440100\",\"children\":[{\"text\":\"荔湾\",\"value\":\"440103\",\"children\":\"\"},{\"text\":\"越秀\",\"value\":\"440104\",\"children\":\"\"},{\"text\":\"海珠\",\"value\":\"440105\",\"children\":\"\"},{\"text\":\"天河\",\"value\":\"440106\",\"children\":\"\"},{\"text\":\"白云\",\"value\":\"440111\",\"children\":\"\"},{\"text\":\"黄埔\",\"value\":\"440112\",\"children\":\"\"},{\"text\":\"番禺\",\"value\":\"440113\",\"children\":\"\"},{\"text\":\"花都\",\"value\":\"440114\",\"children\":\"\"},{\"text\":\"南沙\",\"value\":\"440115\",\"children\":\"\"},{\"text\":\"萝岗\",\"value\":\"440116\",\"children\":\"\"},{\"text\":\"增城\",\"value\":\"440183\",\"children\":\"\"},{\"text\":\"从化\",\"value\":\"440184\",\"children\":\"\"}]},{\"text\":\"韶关\",\"value\":\"440200\",\"children\":[{\"text\":\"武江\",\"value\":\"440203\",\"children\":\"\"},{\"text\":\"浈江\",\"value\":\"440204\",\"children\":\"\"},{\"text\":\"曲江\",\"value\":\"440205\",\"children\":\"\"},{\"text\":\"始兴\",\"value\":\"440222\",\"children\":\"\"},{\"text\":\"仁化\",\"value\":\"440224\",\"children\":\"\"},{\"text\":\"翁源\",\"value\":\"440229\",\"children\":\"\"},{\"text\":\"乳源\",\"value\":\"440232\",\"children\":\"\"},{\"text\":\"新丰\",\"value\":\"440233\",\"children\":\"\"},{\"text\":\"乐昌\",\"value\":\"440281\",\"children\":\"\"},{\"text\":\"南雄\",\"value\":\"440282\",\"children\":\"\"}]},{\"text\":\"深圳\",\"value\":\"440300\",\"children\":[{\"text\":\"罗湖\",\"value\":\"440303\",\"children\":\"\"},{\"text\":\"福田\",\"value\":\"440304\",\"children\":\"\"},{\"text\":\"南山\",\"value\":\"440305\",\"children\":\"\"},{\"text\":\"宝安\",\"value\":\"440306\",\"children\":\"\"},{\"text\":\"龙岗\",\"value\":\"440307\",\"children\":\"\"},{\"text\":\"盐田\",\"value\":\"440308\",\"children\":\"\"}]},{\"text\":\"珠海\",\"value\":\"440400\",\"children\":[{\"text\":\"香洲\",\"value\":\"440402\",\"children\":\"\"},{\"text\":\"斗门\",\"value\":\"440403\",\"children\":\"\"},{\"text\":\"金湾\",\"value\":\"440404\",\"children\":\"\"}]},{\"text\":\"汕头\",\"value\":\"440500\",\"children\":[{\"text\":\"龙湖\",\"value\":\"440507\",\"children\":\"\"},{\"text\":\"金平\",\"value\":\"440511\",\"children\":\"\"},{\"text\":\"濠江\",\"value\":\"440512\",\"children\":\"\"},{\"text\":\"潮阳\",\"value\":\"440513\",\"children\":\"\"},{\"text\":\"潮南\",\"value\":\"440514\",\"children\":\"\"},{\"text\":\"澄海\",\"value\":\"440515\",\"children\":\"\"},{\"text\":\"南澳\",\"value\":\"440523\",\"children\":\"\"}]},{\"text\":\"佛山\",\"value\":\"440600\",\"children\":[{\"text\":\"禅城\",\"value\":\"440604\",\"children\":\"\"},{\"text\":\"南海\",\"value\":\"440605\",\"children\":\"\"},{\"text\":\"顺德\",\"value\":\"440606\",\"children\":\"\"},{\"text\":\"三水\",\"value\":\"440607\",\"children\":\"\"},{\"text\":\"高明\",\"value\":\"440608\",\"children\":\"\"}]},{\"text\":\"江门\",\"value\":\"440700\",\"children\":[{\"text\":\"蓬江\",\"value\":\"440703\",\"children\":\"\"},{\"text\":\"江海\",\"value\":\"440704\",\"children\":\"\"},{\"text\":\"新会\",\"value\":\"440705\",\"children\":\"\"},{\"text\":\"台山\",\"value\":\"440781\",\"children\":\"\"},{\"text\":\"开平\",\"value\":\"440783\",\"children\":\"\"},{\"text\":\"鹤山\",\"value\":\"440784\",\"children\":\"\"},{\"text\":\"恩平\",\"value\":\"440785\",\"children\":\"\"}]},{\"text\":\"湛江\",\"value\":\"440800\",\"children\":[{\"text\":\"赤坎\",\"value\":\"440802\",\"children\":\"\"},{\"text\":\"霞山\",\"value\":\"440803\",\"children\":\"\"},{\"text\":\"坡头\",\"value\":\"440804\",\"children\":\"\"},{\"text\":\"麻章\",\"value\":\"440811\",\"children\":\"\"},{\"text\":\"遂溪\",\"value\":\"440823\",\"children\":\"\"},{\"text\":\"徐闻\",\"value\":\"440825\",\"children\":\"\"},{\"text\":\"廉江\",\"value\":\"440881\",\"children\":\"\"},{\"text\":\"雷州\",\"value\":\"440882\",\"children\":\"\"},{\"text\":\"吴川\",\"value\":\"440883\",\"children\":\"\"}]},{\"text\":\"茂名\",\"value\":\"440900\",\"children\":[{\"text\":\"茂南\",\"value\":\"440902\",\"children\":\"\"},{\"text\":\"电白\",\"value\":\"440903\",\"children\":\"\"},{\"text\":\"高州\",\"value\":\"440981\",\"children\":\"\"},{\"text\":\"化州\",\"value\":\"440982\",\"children\":\"\"},{\"text\":\"信宜\",\"value\":\"440983\",\"children\":\"\"}]},{\"text\":\"肇庆\",\"value\":\"441200\",\"children\":[{\"text\":\"端州\",\"value\":\"441202\",\"children\":\"\"},{\"text\":\"鼎湖\",\"value\":\"441203\",\"children\":\"\"},{\"text\":\"广宁\",\"value\":\"441223\",\"children\":\"\"},{\"text\":\"怀集\",\"value\":\"441224\",\"children\":\"\"},{\"text\":\"封开\",\"value\":\"441225\",\"children\":\"\"},{\"text\":\"德庆\",\"value\":\"441226\",\"children\":\"\"},{\"text\":\"高要\",\"value\":\"441283\",\"children\":\"\"},{\"text\":\"四会\",\"value\":\"441284\",\"children\":\"\"}]},{\"text\":\"惠州\",\"value\":\"441300\",\"children\":[{\"text\":\"惠城\",\"value\":\"441302\",\"children\":\"\"},{\"text\":\"惠阳\",\"value\":\"441303\",\"children\":\"\"},{\"text\":\"博罗\",\"value\":\"441322\",\"children\":\"\"},{\"text\":\"惠东\",\"value\":\"441323\",\"children\":\"\"},{\"text\":\"龙门\",\"value\":\"441324\",\"children\":\"\"}]},{\"text\":\"梅州\",\"value\":\"441400\",\"children\":[{\"text\":\"梅江\",\"value\":\"441402\",\"children\":\"\"},{\"text\":\"梅县\",\"value\":\"441421\",\"children\":\"\"},{\"text\":\"大埔\",\"value\":\"441422\",\"children\":\"\"},{\"text\":\"丰顺\",\"value\":\"441423\",\"children\":\"\"},{\"text\":\"五华\",\"value\":\"441424\",\"children\":\"\"},{\"text\":\"平远\",\"value\":\"441426\",\"children\":\"\"},{\"text\":\"蕉岭\",\"value\":\"441427\",\"children\":\"\"},{\"text\":\"兴宁\",\"value\":\"441481\",\"children\":\"\"}]},{\"text\":\"汕尾\",\"value\":\"441500\",\"children\":[{\"text\":\"城区\",\"value\":\"441502\",\"children\":\"\"},{\"text\":\"海丰\",\"value\":\"441521\",\"children\":\"\"},{\"text\":\"陆河\",\"value\":\"441523\",\"children\":\"\"},{\"text\":\"陆丰\",\"value\":\"441581\",\"children\":\"\"}]},{\"text\":\"河源\",\"value\":\"441600\",\"children\":[{\"text\":\"源城\",\"value\":\"441602\",\"children\":\"\"},{\"text\":\"紫金\",\"value\":\"441621\",\"children\":\"\"},{\"text\":\"龙川\",\"value\":\"441622\",\"children\":\"\"},{\"text\":\"连平\",\"value\":\"441623\",\"children\":\"\"},{\"text\":\"和平\",\"value\":\"441624\",\"children\":\"\"},{\"text\":\"东源\",\"value\":\"441625\",\"children\":\"\"}]},{\"text\":\"阳江\",\"value\":\"441700\",\"children\":[{\"text\":\"江城\",\"value\":\"441702\",\"children\":\"\"},{\"text\":\"阳西\",\"value\":\"441721\",\"children\":\"\"},{\"text\":\"阳东\",\"value\":\"441723\",\"children\":\"\"},{\"text\":\"阳春\",\"value\":\"441781\",\"children\":\"\"}]},{\"text\":\"清远\",\"value\":\"441800\",\"children\":[{\"text\":\"清城\",\"value\":\"441802\",\"children\":\"\"},{\"text\":\"佛冈\",\"value\":\"441821\",\"children\":\"\"},{\"text\":\"阳山\",\"value\":\"441823\",\"children\":\"\"},{\"text\":\"连山\",\"value\":\"441825\",\"children\":\"\"},{\"text\":\"连南\",\"value\":\"441826\",\"children\":\"\"},{\"text\":\"清新\",\"value\":\"441827\",\"children\":\"\"},{\"text\":\"英德\",\"value\":\"441881\",\"children\":\"\"},{\"text\":\"连州\",\"value\":\"441882\",\"children\":\"\"}]},{\"text\":\"东莞\",\"value\":\"441900\",\"children\":[{\"text\":\"东莞\",\"value\":\"441900\",\"children\":\"\"}]},{\"text\":\"中山\",\"value\":\"442000\",\"children\":[{\"text\":\"市辖区\",\"value\":\"442000\",\"children\":\"\"}]},{\"text\":\"潮州\",\"value\":\"445100\",\"children\":[{\"text\":\"湘桥\",\"value\":\"445102\",\"children\":\"\"},{\"text\":\"潮安\",\"value\":\"445121\",\"children\":\"\"},{\"text\":\"饶平\",\"value\":\"445122\",\"children\":\"\"}]},{\"text\":\"揭阳\",\"value\":\"445200\",\"children\":[{\"text\":\"榕城\",\"value\":\"445202\",\"children\":\"\"},{\"text\":\"揭东\",\"value\":\"445221\",\"children\":\"\"},{\"text\":\"揭西\",\"value\":\"445222\",\"children\":\"\"},{\"text\":\"惠来\",\"value\":\"445224\",\"children\":\"\"},{\"text\":\"普宁\",\"value\":\"445281\",\"children\":\"\"}]},{\"text\":\"云浮\",\"value\":\"445300\",\"children\":[{\"text\":\"云城\",\"value\":\"445302\",\"children\":\"\"},{\"text\":\"新兴\",\"value\":\"445321\",\"children\":\"\"},{\"text\":\"郁南\",\"value\":\"445322\",\"children\":\"\"},{\"text\":\"云安\",\"value\":\"445323\",\"children\":\"\"},{\"text\":\"罗定\",\"value\":\"445381\",\"children\":\"\"}]}]},{\"text\":\"广西\",\"value\":\"450000\",\"children\":[{\"text\":\"南宁\",\"value\":\"450100\",\"children\":[{\"text\":\"兴宁\",\"value\":\"450102\",\"children\":\"\"},{\"text\":\"青秀\",\"value\":\"450103\",\"children\":\"\"},{\"text\":\"江南\",\"value\":\"450105\",\"children\":\"\"},{\"text\":\"西乡塘\",\"value\":\"450107\",\"children\":\"\"},{\"text\":\"良庆\",\"value\":\"450108\",\"children\":\"\"},{\"text\":\"邕宁\",\"value\":\"450109\",\"children\":\"\"},{\"text\":\"武鸣\",\"value\":\"450122\",\"children\":\"\"},{\"text\":\"隆安\",\"value\":\"450123\",\"children\":\"\"},{\"text\":\"马山\",\"value\":\"450124\",\"children\":\"\"},{\"text\":\"上林\",\"value\":\"450125\",\"children\":\"\"},{\"text\":\"宾阳\",\"value\":\"450126\",\"children\":\"\"},{\"text\":\"横县\",\"value\":\"450127\",\"children\":\"\"}]},{\"text\":\"柳州\",\"value\":\"450200\",\"children\":[{\"text\":\"城中\",\"value\":\"450202\",\"children\":\"\"},{\"text\":\"鱼峰\",\"value\":\"450203\",\"children\":\"\"},{\"text\":\"柳南\",\"value\":\"450204\",\"children\":\"\"},{\"text\":\"柳北\",\"value\":\"450205\",\"children\":\"\"},{\"text\":\"柳江\",\"value\":\"450221\",\"children\":\"\"},{\"text\":\"柳城\",\"value\":\"450222\",\"children\":\"\"},{\"text\":\"鹿寨\",\"value\":\"450223\",\"children\":\"\"},{\"text\":\"融安\",\"value\":\"450224\",\"children\":\"\"},{\"text\":\"融水\",\"value\":\"450225\",\"children\":\"\"},{\"text\":\"三江\",\"value\":\"450226\",\"children\":\"\"}]},{\"text\":\"桂林\",\"value\":\"450300\",\"children\":[{\"text\":\"秀峰\",\"value\":\"450302\",\"children\":\"\"},{\"text\":\"叠彩\",\"value\":\"450303\",\"children\":\"\"},{\"text\":\"象山\",\"value\":\"450304\",\"children\":\"\"},{\"text\":\"七星\",\"value\":\"450305\",\"children\":\"\"},{\"text\":\"雁山\",\"value\":\"450311\",\"children\":\"\"},{\"text\":\"阳朔\",\"value\":\"450321\",\"children\":\"\"},{\"text\":\"临桂\",\"value\":\"450322\",\"children\":\"\"},{\"text\":\"灵川\",\"value\":\"450323\",\"children\":\"\"},{\"text\":\"全州\",\"value\":\"450324\",\"children\":\"\"},{\"text\":\"兴安\",\"value\":\"450325\",\"children\":\"\"},{\"text\":\"永福\",\"value\":\"450326\",\"children\":\"\"},{\"text\":\"灌阳\",\"value\":\"450327\",\"children\":\"\"},{\"text\":\"龙胜\",\"value\":\"450328\",\"children\":\"\"},{\"text\":\"资源\",\"value\":\"450329\",\"children\":\"\"},{\"text\":\"平乐\",\"value\":\"450330\",\"children\":\"\"},{\"text\":\"荔浦\",\"value\":\"450331\",\"children\":\"\"},{\"text\":\"恭城\",\"value\":\"450332\",\"children\":\"\"}]},{\"text\":\"梧州\",\"value\":\"450400\",\"children\":[{\"text\":\"万秀\",\"value\":\"450403\",\"children\":\"\"},{\"text\":\"长洲\",\"value\":\"450405\",\"children\":\"\"},{\"text\":\"龙圩\",\"value\":\"450406\",\"children\":\"\"},{\"text\":\"苍梧\",\"value\":\"450421\",\"children\":\"\"},{\"text\":\"藤县\",\"value\":\"450422\",\"children\":\"\"},{\"text\":\"蒙山\",\"value\":\"450423\",\"children\":\"\"},{\"text\":\"岑溪\",\"value\":\"450481\",\"children\":\"\"}]},{\"text\":\"北海\",\"value\":\"450500\",\"children\":[{\"text\":\"海城\",\"value\":\"450502\",\"children\":\"\"},{\"text\":\"银海\",\"value\":\"450503\",\"children\":\"\"},{\"text\":\"铁山港\",\"value\":\"450512\",\"children\":\"\"},{\"text\":\"合浦\",\"value\":\"450521\",\"children\":\"\"}]},{\"text\":\"防城港\",\"value\":\"450600\",\"children\":[{\"text\":\"港口\",\"value\":\"450602\",\"children\":\"\"},{\"text\":\"防城\",\"value\":\"450603\",\"children\":\"\"},{\"text\":\"上思\",\"value\":\"450621\",\"children\":\"\"},{\"text\":\"东兴\",\"value\":\"450681\",\"children\":\"\"}]},{\"text\":\"钦州\",\"value\":\"450700\",\"children\":[{\"text\":\"钦南\",\"value\":\"450702\",\"children\":\"\"},{\"text\":\"钦北\",\"value\":\"450703\",\"children\":\"\"},{\"text\":\"灵山\",\"value\":\"450721\",\"children\":\"\"},{\"text\":\"浦北\",\"value\":\"450722\",\"children\":\"\"}]},{\"text\":\"贵港\",\"value\":\"450800\",\"children\":[{\"text\":\"港北\",\"value\":\"450802\",\"children\":\"\"},{\"text\":\"港南\",\"value\":\"450803\",\"children\":\"\"},{\"text\":\"覃塘\",\"value\":\"450804\",\"children\":\"\"},{\"text\":\"平南\",\"value\":\"450821\",\"children\":\"\"},{\"text\":\"桂平\",\"value\":\"450881\",\"children\":\"\"}]},{\"text\":\"玉林\",\"value\":\"450900\",\"children\":[{\"text\":\"玉州\",\"value\":\"450902\",\"children\":\"\"},{\"text\":\"福绵\",\"value\":\"450903\",\"children\":\"\"},{\"text\":\"容县\",\"value\":\"450921\",\"children\":\"\"},{\"text\":\"陆川\",\"value\":\"450922\",\"children\":\"\"},{\"text\":\"博白\",\"value\":\"450923\",\"children\":\"\"},{\"text\":\"兴业\",\"value\":\"450924\",\"children\":\"\"},{\"text\":\"北流\",\"value\":\"450981\",\"children\":\"\"}]},{\"text\":\"百色\",\"value\":\"451000\",\"children\":[{\"text\":\"右江\",\"value\":\"451002\",\"children\":\"\"},{\"text\":\"田阳\",\"value\":\"451021\",\"children\":\"\"},{\"text\":\"田东\",\"value\":\"451022\",\"children\":\"\"},{\"text\":\"平果\",\"value\":\"451023\",\"children\":\"\"},{\"text\":\"德保\",\"value\":\"451024\",\"children\":\"\"},{\"text\":\"靖西\",\"value\":\"451025\",\"children\":\"\"},{\"text\":\"那坡\",\"value\":\"451026\",\"children\":\"\"},{\"text\":\"凌云\",\"value\":\"451027\",\"children\":\"\"},{\"text\":\"乐业\",\"value\":\"451028\",\"children\":\"\"},{\"text\":\"田林\",\"value\":\"451029\",\"children\":\"\"},{\"text\":\"西林\",\"value\":\"451030\",\"children\":\"\"},{\"text\":\"隆林\",\"value\":\"451031\",\"children\":\"\"}]},{\"text\":\"贺州\",\"value\":\"451100\",\"children\":[{\"text\":\"八步\",\"value\":\"451102\",\"children\":\"\"},{\"text\":\"平桂\",\"value\":\"451119\",\"children\":\"\"},{\"text\":\"昭平\",\"value\":\"451121\",\"children\":\"\"},{\"text\":\"钟山\",\"value\":\"451122\",\"children\":\"\"},{\"text\":\"富川\",\"value\":\"451123\",\"children\":\"\"}]},{\"text\":\"河池\",\"value\":\"451200\",\"children\":[{\"text\":\"金城江\",\"value\":\"451202\",\"children\":\"\"},{\"text\":\"南丹\",\"value\":\"451221\",\"children\":\"\"},{\"text\":\"天峨\",\"value\":\"451222\",\"children\":\"\"},{\"text\":\"凤山\",\"value\":\"451223\",\"children\":\"\"},{\"text\":\"东兰\",\"value\":\"451224\",\"children\":\"\"},{\"text\":\"罗城\",\"value\":\"451225\",\"children\":\"\"},{\"text\":\"环江\",\"value\":\"451226\",\"children\":\"\"},{\"text\":\"巴马\",\"value\":\"451227\",\"children\":\"\"},{\"text\":\"都安\",\"value\":\"451228\",\"children\":\"\"},{\"text\":\"大化\",\"value\":\"451229\",\"children\":\"\"},{\"text\":\"宜州\",\"value\":\"451281\",\"children\":\"\"}]},{\"text\":\"来宾\",\"value\":\"451300\",\"children\":[{\"text\":\"兴宾\",\"value\":\"451302\",\"children\":\"\"},{\"text\":\"忻城\",\"value\":\"451321\",\"children\":\"\"},{\"text\":\"象州\",\"value\":\"451322\",\"children\":\"\"},{\"text\":\"武宣\",\"value\":\"451323\",\"children\":\"\"},{\"text\":\"金秀\",\"value\":\"451324\",\"children\":\"\"},{\"text\":\"合山\",\"value\":\"451381\",\"children\":\"\"}]},{\"text\":\"崇左\",\"value\":\"451400\",\"children\":[{\"text\":\"江州\",\"value\":\"451402\",\"children\":\"\"},{\"text\":\"扶绥\",\"value\":\"451421\",\"children\":\"\"},{\"text\":\"宁明\",\"value\":\"451422\",\"children\":\"\"},{\"text\":\"龙州\",\"value\":\"451423\",\"children\":\"\"},{\"text\":\"大新\",\"value\":\"451424\",\"children\":\"\"},{\"text\":\"天等\",\"value\":\"451425\",\"children\":\"\"},{\"text\":\"凭祥\",\"value\":\"451481\",\"children\":\"\"}]}]},{\"text\":\"海南\",\"value\":\"460000\",\"children\":[{\"text\":\"海口\",\"value\":\"460100\",\"children\":[{\"text\":\"秀英\",\"value\":\"460105\",\"children\":\"\"},{\"text\":\"龙华\",\"value\":\"460106\",\"children\":\"\"},{\"text\":\"琼山\",\"value\":\"460107\",\"children\":\"\"},{\"text\":\"美兰\",\"value\":\"460108\",\"children\":\"\"}]},{\"text\":\"三亚\",\"value\":\"460200\",\"children\":[{\"text\":\"三亚\",\"value\":\"460200\",\"children\":\"\"}]},{\"text\":\"三沙\",\"value\":\"460300\",\"children\":[{\"text\":\"西沙\",\"value\":\"460321\",\"children\":\"\"},{\"text\":\"南沙\",\"value\":\"460322\",\"children\":\"\"},{\"text\":\"中沙\",\"value\":\"460323\",\"children\":\"\"}]},{\"text\":\"五指山\",\"value\":\"469001\",\"children\":[{\"text\":\"五指山\",\"value\":\"469001\",\"children\":\"\"}]},{\"text\":\"琼海\",\"value\":\"469002\",\"children\":[{\"text\":\"琼海\",\"value\":\"469002\",\"children\":\"\"}]},{\"text\":\"儋州\",\"value\":\"469003\",\"children\":[{\"text\":\"儋州\",\"value\":\"469003\",\"children\":\"\"}]},{\"text\":\"文昌\",\"value\":\"469005\",\"children\":[{\"text\":\"文昌\",\"value\":\"469005\",\"children\":\"\"}]},{\"text\":\"万宁\",\"value\":\"469006\",\"children\":[{\"text\":\"万宁\",\"value\":\"469006\",\"children\":\"\"}]},{\"text\":\"东方\",\"value\":\"469007\",\"children\":[{\"text\":\"东方\",\"value\":\"469007\",\"children\":\"\"}]},{\"text\":\"定安\",\"value\":\"469025\",\"children\":[{\"text\":\"定安\",\"value\":\"469025\",\"children\":\"\"}]},{\"text\":\"屯昌\",\"value\":\"469026\",\"children\":[{\"text\":\"屯昌\",\"value\":\"469026\",\"children\":\"\"}]},{\"text\":\"澄迈\",\"value\":\"469027\",\"children\":[{\"text\":\"澄迈\",\"value\":\"469027\",\"children\":\"\"}]},{\"text\":\"临高\",\"value\":\"469028\",\"children\":[{\"text\":\"临高\",\"value\":\"469028\",\"children\":\"\"}]},{\"text\":\"白沙\",\"value\":\"469030\",\"children\":[{\"text\":\"白沙\",\"value\":\"469030\",\"children\":\"\"}]},{\"text\":\"昌江\",\"value\":\"469031\",\"children\":[{\"text\":\"昌江\",\"value\":\"469031\",\"children\":\"\"}]},{\"text\":\"乐东\",\"value\":\"469033\",\"children\":[{\"text\":\"乐东\",\"value\":\"469033\",\"children\":\"\"}]},{\"text\":\"陵水\",\"value\":\"469034\",\"children\":[{\"text\":\"陵水\",\"value\":\"469034\",\"children\":\"\"}]},{\"text\":\"保亭\",\"value\":\"469035\",\"children\":[{\"text\":\"保亭\",\"value\":\"469035\",\"children\":\"\"}]},{\"text\":\"琼中\",\"value\":\"469036\",\"children\":[{\"text\":\"琼中\",\"value\":\"469036\",\"children\":\"\"}]}]},{\"text\":\"重庆\",\"value\":\"500000\",\"children\":[{\"text\":\"重庆\",\"value\":\"500100\",\"children\":[{\"text\":\"万州\",\"value\":\"500101\",\"children\":\"\"},{\"text\":\"涪陵\",\"value\":\"500102\",\"children\":\"\"},{\"text\":\"渝中\",\"value\":\"500103\",\"children\":\"\"},{\"text\":\"大渡口\",\"value\":\"500104\",\"children\":\"\"},{\"text\":\"江北\",\"value\":\"500105\",\"children\":\"\"},{\"text\":\"沙坪坝\",\"value\":\"500106\",\"children\":\"\"},{\"text\":\"九龙坡\",\"value\":\"500107\",\"children\":\"\"},{\"text\":\"南岸\",\"value\":\"500108\",\"children\":\"\"},{\"text\":\"北碚\",\"value\":\"500109\",\"children\":\"\"},{\"text\":\"万盛\",\"value\":\"500110\",\"children\":\"\"},{\"text\":\"双桥\",\"value\":\"500111\",\"children\":\"\"},{\"text\":\"渝北\",\"value\":\"500112\",\"children\":\"\"},{\"text\":\"巴南\",\"value\":\"500113\",\"children\":\"\"},{\"text\":\"黔江\",\"value\":\"500114\",\"children\":\"\"},{\"text\":\"长寿\",\"value\":\"500115\",\"children\":\"\"},{\"text\":\"綦江\",\"value\":\"500222\",\"children\":\"\"},{\"text\":\"潼南\",\"value\":\"500223\",\"children\":\"\"},{\"text\":\"铜梁\",\"value\":\"500224\",\"children\":\"\"},{\"text\":\"大足\",\"value\":\"500225\",\"children\":\"\"},{\"text\":\"荣昌\",\"value\":\"500226\",\"children\":\"\"},{\"text\":\"璧山\",\"value\":\"500227\",\"children\":\"\"},{\"text\":\"梁平\",\"value\":\"500228\",\"children\":\"\"},{\"text\":\"城口\",\"value\":\"500229\",\"children\":\"\"},{\"text\":\"丰都\",\"value\":\"500230\",\"children\":\"\"},{\"text\":\"垫江\",\"value\":\"500231\",\"children\":\"\"},{\"text\":\"武隆\",\"value\":\"500232\",\"children\":\"\"},{\"text\":\"忠县\",\"value\":\"500233\",\"children\":\"\"},{\"text\":\"开县\",\"value\":\"500234\",\"children\":\"\"},{\"text\":\"云阳\",\"value\":\"500235\",\"children\":\"\"},{\"text\":\"奉节\",\"value\":\"500236\",\"children\":\"\"},{\"text\":\"巫山\",\"value\":\"500237\",\"children\":\"\"},{\"text\":\"巫溪\",\"value\":\"500238\",\"children\":\"\"},{\"text\":\"石柱\",\"value\":\"500240\",\"children\":\"\"},{\"text\":\"秀山\",\"value\":\"500241\",\"children\":\"\"},{\"text\":\"酉阳\",\"value\":\"500242\",\"children\":\"\"},{\"text\":\"彭水\",\"value\":\"500243\",\"children\":\"\"},{\"text\":\"江津\",\"value\":\"500381\",\"children\":\"\"},{\"text\":\"合川\",\"value\":\"500382\",\"children\":\"\"},{\"text\":\"永川\",\"value\":\"500383\",\"children\":\"\"},{\"text\":\"南川\",\"value\":\"500384\",\"children\":\"\"}]}]},{\"text\":\"四川\",\"value\":\"510000\",\"children\":[{\"text\":\"成都\",\"value\":\"510100\",\"children\":[{\"text\":\"锦江\",\"value\":\"510104\",\"children\":\"\"},{\"text\":\"青羊\",\"value\":\"510105\",\"children\":\"\"},{\"text\":\"金牛\",\"value\":\"510106\",\"children\":\"\"},{\"text\":\"武侯\",\"value\":\"510107\",\"children\":\"\"},{\"text\":\"成华\",\"value\":\"510108\",\"children\":\"\"},{\"text\":\"龙泉驿\",\"value\":\"510112\",\"children\":\"\"},{\"text\":\"青白江\",\"value\":\"510113\",\"children\":\"\"},{\"text\":\"新都\",\"value\":\"510114\",\"children\":\"\"},{\"text\":\"温江\",\"value\":\"510115\",\"children\":\"\"},{\"text\":\"金堂\",\"value\":\"510121\",\"children\":\"\"},{\"text\":\"双流\",\"value\":\"510122\",\"children\":\"\"},{\"text\":\"郫县\",\"value\":\"510124\",\"children\":\"\"},{\"text\":\"大邑\",\"value\":\"510129\",\"children\":\"\"},{\"text\":\"蒲江\",\"value\":\"510131\",\"children\":\"\"},{\"text\":\"新津\",\"value\":\"510132\",\"children\":\"\"},{\"text\":\"都江堰\",\"value\":\"510181\",\"children\":\"\"},{\"text\":\"彭州\",\"value\":\"510182\",\"children\":\"\"},{\"text\":\"邛崃\",\"value\":\"510183\",\"children\":\"\"},{\"text\":\"崇州\",\"value\":\"510184\",\"children\":\"\"}]},{\"text\":\"自贡\",\"value\":\"510300\",\"children\":[{\"text\":\"自流井\",\"value\":\"510302\",\"children\":\"\"},{\"text\":\"贡井\",\"value\":\"510303\",\"children\":\"\"},{\"text\":\"大安\",\"value\":\"510304\",\"children\":\"\"},{\"text\":\"沿滩\",\"value\":\"510311\",\"children\":\"\"},{\"text\":\"荣县\",\"value\":\"510321\",\"children\":\"\"},{\"text\":\"富顺\",\"value\":\"510322\",\"children\":\"\"}]},{\"text\":\"攀枝花\",\"value\":\"510400\",\"children\":[{\"text\":\"东区\",\"value\":\"510402\",\"children\":\"\"},{\"text\":\"西区\",\"value\":\"510403\",\"children\":\"\"},{\"text\":\"仁和\",\"value\":\"510411\",\"children\":\"\"},{\"text\":\"米易\",\"value\":\"510421\",\"children\":\"\"},{\"text\":\"盐边\",\"value\":\"510422\",\"children\":\"\"}]},{\"text\":\"泸州\",\"value\":\"510500\",\"children\":[{\"text\":\"江阳\",\"value\":\"510502\",\"children\":\"\"},{\"text\":\"纳溪\",\"value\":\"510503\",\"children\":\"\"},{\"text\":\"龙马潭\",\"value\":\"510504\",\"children\":\"\"},{\"text\":\"泸县\",\"value\":\"510521\",\"children\":\"\"},{\"text\":\"合江\",\"value\":\"510522\",\"children\":\"\"},{\"text\":\"叙永\",\"value\":\"510524\",\"children\":\"\"},{\"text\":\"古蔺\",\"value\":\"510525\",\"children\":\"\"}]},{\"text\":\"德阳\",\"value\":\"510600\",\"children\":[{\"text\":\"旌阳\",\"value\":\"510603\",\"children\":\"\"},{\"text\":\"中江\",\"value\":\"510623\",\"children\":\"\"},{\"text\":\"罗江\",\"value\":\"510626\",\"children\":\"\"},{\"text\":\"广汉\",\"value\":\"510681\",\"children\":\"\"},{\"text\":\"什邡\",\"value\":\"510682\",\"children\":\"\"},{\"text\":\"绵竹\",\"value\":\"510683\",\"children\":\"\"}]},{\"text\":\"绵阳\",\"value\":\"510700\",\"children\":[{\"text\":\"涪城\",\"value\":\"510703\",\"children\":\"\"},{\"text\":\"游仙\",\"value\":\"510704\",\"children\":\"\"},{\"text\":\"三台\",\"value\":\"510722\",\"children\":\"\"},{\"text\":\"盐亭\",\"value\":\"510723\",\"children\":\"\"},{\"text\":\"安县\",\"value\":\"510724\",\"children\":\"\"},{\"text\":\"梓潼\",\"value\":\"510725\",\"children\":\"\"},{\"text\":\"北川\",\"value\":\"510726\",\"children\":\"\"},{\"text\":\"平武\",\"value\":\"510727\",\"children\":\"\"},{\"text\":\"江油\",\"value\":\"510781\",\"children\":\"\"}]},{\"text\":\"广元\",\"value\":\"510800\",\"children\":[{\"text\":\"利州\",\"value\":\"510802\",\"children\":\"\"},{\"text\":\"昭化\",\"value\":\"510811\",\"children\":\"\"},{\"text\":\"朝天\",\"value\":\"510812\",\"children\":\"\"},{\"text\":\"旺苍\",\"value\":\"510821\",\"children\":\"\"},{\"text\":\"青川\",\"value\":\"510822\",\"children\":\"\"},{\"text\":\"剑阁\",\"value\":\"510823\",\"children\":\"\"},{\"text\":\"苍溪\",\"value\":\"510824\",\"children\":\"\"}]},{\"text\":\"遂宁\",\"value\":\"510900\",\"children\":[{\"text\":\"船山\",\"value\":\"510903\",\"children\":\"\"},{\"text\":\"安居\",\"value\":\"510904\",\"children\":\"\"},{\"text\":\"蓬溪\",\"value\":\"510921\",\"children\":\"\"},{\"text\":\"射洪\",\"value\":\"510922\",\"children\":\"\"},{\"text\":\"大英\",\"value\":\"510923\",\"children\":\"\"}]},{\"text\":\"内江\",\"value\":\"511000\",\"children\":[{\"text\":\"市中\",\"value\":\"511002\",\"children\":\"\"},{\"text\":\"东兴\",\"value\":\"511011\",\"children\":\"\"},{\"text\":\"威远\",\"value\":\"511024\",\"children\":\"\"},{\"text\":\"资中\",\"value\":\"511025\",\"children\":\"\"},{\"text\":\"隆昌\",\"value\":\"511028\",\"children\":\"\"}]},{\"text\":\"乐山\",\"value\":\"511100\",\"children\":[{\"text\":\"市中\",\"value\":\"511102\",\"children\":\"\"},{\"text\":\"沙湾\",\"value\":\"511111\",\"children\":\"\"},{\"text\":\"五通桥\",\"value\":\"511112\",\"children\":\"\"},{\"text\":\"金口河\",\"value\":\"511113\",\"children\":\"\"},{\"text\":\"犍为\",\"value\":\"511123\",\"children\":\"\"},{\"text\":\"井研\",\"value\":\"511124\",\"children\":\"\"},{\"text\":\"夹江\",\"value\":\"511126\",\"children\":\"\"},{\"text\":\"沐川\",\"value\":\"511129\",\"children\":\"\"},{\"text\":\"峨边\",\"value\":\"511132\",\"children\":\"\"},{\"text\":\"马边\",\"value\":\"511133\",\"children\":\"\"},{\"text\":\"峨眉山\",\"value\":\"511181\",\"children\":\"\"}]},{\"text\":\"南充\",\"value\":\"511300\",\"children\":[{\"text\":\"顺庆\",\"value\":\"511302\",\"children\":\"\"},{\"text\":\"高坪\",\"value\":\"511303\",\"children\":\"\"},{\"text\":\"嘉陵\",\"value\":\"511304\",\"children\":\"\"},{\"text\":\"南部\",\"value\":\"511321\",\"children\":\"\"},{\"text\":\"营山\",\"value\":\"511322\",\"children\":\"\"},{\"text\":\"蓬安\",\"value\":\"511323\",\"children\":\"\"},{\"text\":\"仪陇\",\"value\":\"511324\",\"children\":\"\"},{\"text\":\"西充\",\"value\":\"511325\",\"children\":\"\"},{\"text\":\"阆中\",\"value\":\"511381\",\"children\":\"\"}]},{\"text\":\"眉山\",\"value\":\"511400\",\"children\":[{\"text\":\"东坡\",\"value\":\"511402\",\"children\":\"\"},{\"text\":\"仁寿\",\"value\":\"511421\",\"children\":\"\"},{\"text\":\"彭山\",\"value\":\"511422\",\"children\":\"\"},{\"text\":\"洪雅\",\"value\":\"511423\",\"children\":\"\"},{\"text\":\"丹棱\",\"value\":\"511424\",\"children\":\"\"},{\"text\":\"青神\",\"value\":\"511425\",\"children\":\"\"}]},{\"text\":\"宜宾\",\"value\":\"511500\",\"children\":[{\"text\":\"翠屏\",\"value\":\"511502\",\"children\":\"\"},{\"text\":\"宜宾\",\"value\":\"511521\",\"children\":\"\"},{\"text\":\"南溪\",\"value\":\"511522\",\"children\":\"\"},{\"text\":\"江安\",\"value\":\"511523\",\"children\":\"\"},{\"text\":\"长宁\",\"value\":\"511524\",\"children\":\"\"},{\"text\":\"高县\",\"value\":\"511525\",\"children\":\"\"},{\"text\":\"珙县\",\"value\":\"511526\",\"children\":\"\"},{\"text\":\"筠连\",\"value\":\"511527\",\"children\":\"\"},{\"text\":\"兴文\",\"value\":\"511528\",\"children\":\"\"},{\"text\":\"屏山\",\"value\":\"511529\",\"children\":\"\"}]},{\"text\":\"广安\",\"value\":\"511600\",\"children\":[{\"text\":\"广安\",\"value\":\"511602\",\"children\":\"\"},{\"text\":\"前锋\",\"value\":\"511603\",\"children\":\"\"},{\"text\":\"岳池\",\"value\":\"511621\",\"children\":\"\"},{\"text\":\"武胜\",\"value\":\"511622\",\"children\":\"\"},{\"text\":\"邻水\",\"value\":\"511623\",\"children\":\"\"},{\"text\":\"华蓥\",\"value\":\"511681\",\"children\":\"\"}]},{\"text\":\"达州\",\"value\":\"511700\",\"children\":[{\"text\":\"通川\",\"value\":\"511702\",\"children\":\"\"},{\"text\":\"达川\",\"value\":\"511721\",\"children\":\"\"},{\"text\":\"宣汉\",\"value\":\"511722\",\"children\":\"\"},{\"text\":\"开江\",\"value\":\"511723\",\"children\":\"\"},{\"text\":\"大竹\",\"value\":\"511724\",\"children\":\"\"},{\"text\":\"渠县\",\"value\":\"511725\",\"children\":\"\"},{\"text\":\"万源\",\"value\":\"511781\",\"children\":\"\"}]},{\"text\":\"雅安\",\"value\":\"511800\",\"children\":[{\"text\":\"雨城\",\"value\":\"511802\",\"children\":\"\"},{\"text\":\"名山\",\"value\":\"511821\",\"children\":\"\"},{\"text\":\"荥经\",\"value\":\"511822\",\"children\":\"\"},{\"text\":\"汉源\",\"value\":\"511823\",\"children\":\"\"},{\"text\":\"石棉\",\"value\":\"511824\",\"children\":\"\"},{\"text\":\"天全\",\"value\":\"511825\",\"children\":\"\"},{\"text\":\"芦山\",\"value\":\"511826\",\"children\":\"\"},{\"text\":\"宝兴\",\"value\":\"511827\",\"children\":\"\"}]},{\"text\":\"巴中\",\"value\":\"511900\",\"children\":[{\"text\":\"巴州\",\"value\":\"511902\",\"children\":\"\"},{\"text\":\"恩阳\",\"value\":\"511903\",\"children\":\"\"},{\"text\":\"通江\",\"value\":\"511921\",\"children\":\"\"},{\"text\":\"南江\",\"value\":\"511922\",\"children\":\"\"},{\"text\":\"平昌\",\"value\":\"511923\",\"children\":\"\"}]},{\"text\":\"资阳\",\"value\":\"512000\",\"children\":[{\"text\":\"雁江\",\"value\":\"512002\",\"children\":\"\"},{\"text\":\"安岳\",\"value\":\"512021\",\"children\":\"\"},{\"text\":\"乐至\",\"value\":\"512022\",\"children\":\"\"},{\"text\":\"简阳\",\"value\":\"512081\",\"children\":\"\"}]},{\"text\":\"阿坝\",\"value\":\"513200\",\"children\":[{\"text\":\"汶川\",\"value\":\"513221\",\"children\":\"\"},{\"text\":\"理县\",\"value\":\"513222\",\"children\":\"\"},{\"text\":\"茂县\",\"value\":\"513223\",\"children\":\"\"},{\"text\":\"松潘\",\"value\":\"513224\",\"children\":\"\"},{\"text\":\"九寨沟\",\"value\":\"513225\",\"children\":\"\"},{\"text\":\"金川\",\"value\":\"513226\",\"children\":\"\"},{\"text\":\"小金\",\"value\":\"513227\",\"children\":\"\"},{\"text\":\"黑水\",\"value\":\"513228\",\"children\":\"\"},{\"text\":\"马尔康\",\"value\":\"513229\",\"children\":\"\"},{\"text\":\"壤塘\",\"value\":\"513230\",\"children\":\"\"},{\"text\":\"阿坝\",\"value\":\"513231\",\"children\":\"\"},{\"text\":\"若尔盖\",\"value\":\"513232\",\"children\":\"\"},{\"text\":\"红原\",\"value\":\"513233\",\"children\":\"\"}]},{\"text\":\"甘孜\",\"value\":\"513300\",\"children\":[{\"text\":\"康定\",\"value\":\"513321\",\"children\":\"\"},{\"text\":\"泸定\",\"value\":\"513322\",\"children\":\"\"},{\"text\":\"丹巴\",\"value\":\"513323\",\"children\":\"\"},{\"text\":\"九龙\",\"value\":\"513324\",\"children\":\"\"},{\"text\":\"雅江\",\"value\":\"513325\",\"children\":\"\"},{\"text\":\"道孚\",\"value\":\"513326\",\"children\":\"\"},{\"text\":\"炉霍\",\"value\":\"513327\",\"children\":\"\"},{\"text\":\"甘孜\",\"value\":\"513328\",\"children\":\"\"},{\"text\":\"新龙\",\"value\":\"513329\",\"children\":\"\"},{\"text\":\"德格\",\"value\":\"513330\",\"children\":\"\"},{\"text\":\"白玉\",\"value\":\"513331\",\"children\":\"\"},{\"text\":\"石渠\",\"value\":\"513332\",\"children\":\"\"},{\"text\":\"色达\",\"value\":\"513333\",\"children\":\"\"},{\"text\":\"理塘\",\"value\":\"513334\",\"children\":\"\"},{\"text\":\"巴塘\",\"value\":\"513335\",\"children\":\"\"},{\"text\":\"乡城\",\"value\":\"513336\",\"children\":\"\"},{\"text\":\"稻城\",\"value\":\"513337\",\"children\":\"\"},{\"text\":\"得荣\",\"value\":\"513338\",\"children\":\"\"}]},{\"text\":\"凉山\",\"value\":\"513400\",\"children\":[{\"text\":\"西昌\",\"value\":\"513401\",\"children\":\"\"},{\"text\":\"木里\",\"value\":\"513422\",\"children\":\"\"},{\"text\":\"盐源\",\"value\":\"513423\",\"children\":\"\"},{\"text\":\"德昌\",\"value\":\"513424\",\"children\":\"\"},{\"text\":\"会理\",\"value\":\"513425\",\"children\":\"\"},{\"text\":\"会东\",\"value\":\"513426\",\"children\":\"\"},{\"text\":\"宁南\",\"value\":\"513427\",\"children\":\"\"},{\"text\":\"普格\",\"value\":\"513428\",\"children\":\"\"},{\"text\":\"布拖\",\"value\":\"513429\",\"children\":\"\"},{\"text\":\"金阳\",\"value\":\"513430\",\"children\":\"\"},{\"text\":\"昭觉\",\"value\":\"513431\",\"children\":\"\"},{\"text\":\"喜德\",\"value\":\"513432\",\"children\":\"\"},{\"text\":\"冕宁\",\"value\":\"513433\",\"children\":\"\"},{\"text\":\"越西\",\"value\":\"513434\",\"children\":\"\"},{\"text\":\"甘洛\",\"value\":\"513435\",\"children\":\"\"},{\"text\":\"美姑\",\"value\":\"513436\",\"children\":\"\"},{\"text\":\"雷波\",\"value\":\"513437\",\"children\":\"\"}]}]},{\"text\":\"贵州\",\"value\":\"520000\",\"children\":[{\"text\":\"贵阳\",\"value\":\"520100\",\"children\":[{\"text\":\"南明\",\"value\":\"520102\",\"children\":\"\"},{\"text\":\"云岩\",\"value\":\"520103\",\"children\":\"\"},{\"text\":\"花溪\",\"value\":\"520111\",\"children\":\"\"},{\"text\":\"乌当\",\"value\":\"520112\",\"children\":\"\"},{\"text\":\"白云\",\"value\":\"520113\",\"children\":\"\"},{\"text\":\"开阳\",\"value\":\"520121\",\"children\":\"\"},{\"text\":\"息烽\",\"value\":\"520122\",\"children\":\"\"},{\"text\":\"修文\",\"value\":\"520123\",\"children\":\"\"},{\"text\":\"观山湖\",\"value\":\"520151\",\"children\":\"\"},{\"text\":\"清镇\",\"value\":\"520181\",\"children\":\"\"}]},{\"text\":\"六盘水\",\"value\":\"520200\",\"children\":[{\"text\":\"钟山\",\"value\":\"520201\",\"children\":\"\"},{\"text\":\"六枝特\",\"value\":\"520203\",\"children\":\"\"},{\"text\":\"水城\",\"value\":\"520221\",\"children\":\"\"},{\"text\":\"盘县\",\"value\":\"520222\",\"children\":\"\"}]},{\"text\":\"遵义\",\"value\":\"520300\",\"children\":[{\"text\":\"红花岗\",\"value\":\"520302\",\"children\":\"\"},{\"text\":\"汇川\",\"value\":\"520303\",\"children\":\"\"},{\"text\":\"遵义\",\"value\":\"520321\",\"children\":\"\"},{\"text\":\"桐梓\",\"value\":\"520322\",\"children\":\"\"},{\"text\":\"绥阳\",\"value\":\"520323\",\"children\":\"\"},{\"text\":\"正安\",\"value\":\"520324\",\"children\":\"\"},{\"text\":\"道真\",\"value\":\"520325\",\"children\":\"\"},{\"text\":\"务川\",\"value\":\"520326\",\"children\":\"\"},{\"text\":\"凤冈\",\"value\":\"520327\",\"children\":\"\"},{\"text\":\"湄潭\",\"value\":\"520328\",\"children\":\"\"},{\"text\":\"余庆\",\"value\":\"520329\",\"children\":\"\"},{\"text\":\"习水\",\"value\":\"520330\",\"children\":\"\"},{\"text\":\"赤水\",\"value\":\"520381\",\"children\":\"\"},{\"text\":\"仁怀\",\"value\":\"520382\",\"children\":\"\"}]},{\"text\":\"安顺\",\"value\":\"520400\",\"children\":[{\"text\":\"西秀\",\"value\":\"520402\",\"children\":\"\"},{\"text\":\"平坝\",\"value\":\"520421\",\"children\":\"\"},{\"text\":\"普定\",\"value\":\"520422\",\"children\":\"\"},{\"text\":\"镇宁\",\"value\":\"520423\",\"children\":\"\"},{\"text\":\"关岭\",\"value\":\"520424\",\"children\":\"\"},{\"text\":\"紫云\",\"value\":\"520425\",\"children\":\"\"}]},{\"text\":\"铜仁\",\"value\":\"522200\",\"children\":[{\"text\":\"碧江\",\"value\":\"522201\",\"children\":\"\"},{\"text\":\"江口\",\"value\":\"522222\",\"children\":\"\"},{\"text\":\"玉屏\",\"value\":\"522223\",\"children\":\"\"},{\"text\":\"石阡\",\"value\":\"522224\",\"children\":\"\"},{\"text\":\"思南\",\"value\":\"522225\",\"children\":\"\"},{\"text\":\"印江\",\"value\":\"522226\",\"children\":\"\"},{\"text\":\"德江\",\"value\":\"522227\",\"children\":\"\"},{\"text\":\"沿河\",\"value\":\"522228\",\"children\":\"\"},{\"text\":\"松桃\",\"value\":\"522229\",\"children\":\"\"},{\"text\":\"万山\",\"value\":\"522230\",\"children\":\"\"}]},{\"text\":\"黔西南\",\"value\":\"522300\",\"children\":[{\"text\":\"兴义\",\"value\":\"522301\",\"children\":\"\"},{\"text\":\"兴仁\",\"value\":\"522322\",\"children\":\"\"},{\"text\":\"普安\",\"value\":\"522323\",\"children\":\"\"},{\"text\":\"晴隆\",\"value\":\"522324\",\"children\":\"\"},{\"text\":\"贞丰\",\"value\":\"522325\",\"children\":\"\"},{\"text\":\"望谟\",\"value\":\"522326\",\"children\":\"\"},{\"text\":\"册亨\",\"value\":\"522327\",\"children\":\"\"},{\"text\":\"安龙\",\"value\":\"522328\",\"children\":\"\"}]},{\"text\":\"毕节\",\"value\":\"522400\",\"children\":[{\"text\":\"七星关\",\"value\":\"522401\",\"children\":\"\"},{\"text\":\"大方\",\"value\":\"522422\",\"children\":\"\"},{\"text\":\"黔西\",\"value\":\"522423\",\"children\":\"\"},{\"text\":\"金沙\",\"value\":\"522424\",\"children\":\"\"},{\"text\":\"织金\",\"value\":\"522425\",\"children\":\"\"},{\"text\":\"纳雍\",\"value\":\"522426\",\"children\":\"\"},{\"text\":\"威宁\",\"value\":\"522427\",\"children\":\"\"},{\"text\":\"赫章\",\"value\":\"522428\",\"children\":\"\"}]},{\"text\":\"黔东南\",\"value\":\"522600\",\"children\":[{\"text\":\"凯里\",\"value\":\"522601\",\"children\":\"\"},{\"text\":\"黄平\",\"value\":\"522622\",\"children\":\"\"},{\"text\":\"施秉\",\"value\":\"522623\",\"children\":\"\"},{\"text\":\"三穗\",\"value\":\"522624\",\"children\":\"\"},{\"text\":\"镇远\",\"value\":\"522625\",\"children\":\"\"},{\"text\":\"岑巩\",\"value\":\"522626\",\"children\":\"\"},{\"text\":\"天柱\",\"value\":\"522627\",\"children\":\"\"},{\"text\":\"锦屏\",\"value\":\"522628\",\"children\":\"\"},{\"text\":\"剑河\",\"value\":\"522629\",\"children\":\"\"},{\"text\":\"台江\",\"value\":\"522630\",\"children\":\"\"},{\"text\":\"黎平\",\"value\":\"522631\",\"children\":\"\"},{\"text\":\"榕江\",\"value\":\"522632\",\"children\":\"\"},{\"text\":\"从江\",\"value\":\"522633\",\"children\":\"\"},{\"text\":\"雷山\",\"value\":\"522634\",\"children\":\"\"},{\"text\":\"麻江\",\"value\":\"522635\",\"children\":\"\"},{\"text\":\"丹寨\",\"value\":\"522636\",\"children\":\"\"}]},{\"text\":\"黔南\",\"value\":\"522700\",\"children\":[{\"text\":\"都匀\",\"value\":\"522701\",\"children\":\"\"},{\"text\":\"福泉\",\"value\":\"522702\",\"children\":\"\"},{\"text\":\"荔波\",\"value\":\"522722\",\"children\":\"\"},{\"text\":\"贵定\",\"value\":\"522723\",\"children\":\"\"},{\"text\":\"瓮安\",\"value\":\"522725\",\"children\":\"\"},{\"text\":\"独山\",\"value\":\"522726\",\"children\":\"\"},{\"text\":\"平塘\",\"value\":\"522727\",\"children\":\"\"},{\"text\":\"罗甸\",\"value\":\"522728\",\"children\":\"\"},{\"text\":\"长顺\",\"value\":\"522729\",\"children\":\"\"},{\"text\":\"龙里\",\"value\":\"522730\",\"children\":\"\"},{\"text\":\"惠水\",\"value\":\"522731\",\"children\":\"\"},{\"text\":\"三都\",\"value\":\"522732\",\"children\":\"\"}]}]},{\"text\":\"云南\",\"value\":\"530000\",\"children\":[{\"text\":\"昆明\",\"value\":\"530100\",\"children\":[{\"text\":\"五华\",\"value\":\"530102\",\"children\":\"\"},{\"text\":\"盘龙\",\"value\":\"530103\",\"children\":\"\"},{\"text\":\"官渡\",\"value\":\"530111\",\"children\":\"\"},{\"text\":\"西山\",\"value\":\"530112\",\"children\":\"\"},{\"text\":\"东川\",\"value\":\"530113\",\"children\":\"\"},{\"text\":\"呈贡\",\"value\":\"530121\",\"children\":\"\"},{\"text\":\"晋宁\",\"value\":\"530122\",\"children\":\"\"},{\"text\":\"富民\",\"value\":\"530124\",\"children\":\"\"},{\"text\":\"宜良\",\"value\":\"530125\",\"children\":\"\"},{\"text\":\"石林\",\"value\":\"530126\",\"children\":\"\"},{\"text\":\"嵩明\",\"value\":\"530127\",\"children\":\"\"},{\"text\":\"禄劝\",\"value\":\"530128\",\"children\":\"\"},{\"text\":\"寻甸\",\"value\":\"530129\",\"children\":\"\"},{\"text\":\"安宁\",\"value\":\"530181\",\"children\":\"\"}]},{\"text\":\"曲靖\",\"value\":\"530300\",\"children\":[{\"text\":\"麒麟\",\"value\":\"530302\",\"children\":\"\"},{\"text\":\"马龙\",\"value\":\"530321\",\"children\":\"\"},{\"text\":\"陆良\",\"value\":\"530322\",\"children\":\"\"},{\"text\":\"师宗\",\"value\":\"530323\",\"children\":\"\"},{\"text\":\"罗平\",\"value\":\"530324\",\"children\":\"\"},{\"text\":\"富源\",\"value\":\"530325\",\"children\":\"\"},{\"text\":\"会泽\",\"value\":\"530326\",\"children\":\"\"},{\"text\":\"沾益\",\"value\":\"530328\",\"children\":\"\"},{\"text\":\"宣威\",\"value\":\"530381\",\"children\":\"\"}]},{\"text\":\"玉溪\",\"value\":\"530400\",\"children\":[{\"text\":\"红塔\",\"value\":\"530402\",\"children\":\"\"},{\"text\":\"江川\",\"value\":\"530421\",\"children\":\"\"},{\"text\":\"澄江\",\"value\":\"530422\",\"children\":\"\"},{\"text\":\"通海\",\"value\":\"530423\",\"children\":\"\"},{\"text\":\"华宁\",\"value\":\"530424\",\"children\":\"\"},{\"text\":\"易门\",\"value\":\"530425\",\"children\":\"\"},{\"text\":\"峨山\",\"value\":\"530426\",\"children\":\"\"},{\"text\":\"新平\",\"value\":\"530427\",\"children\":\"\"},{\"text\":\"元江\",\"value\":\"530428\",\"children\":\"\"}]},{\"text\":\"保山\",\"value\":\"530500\",\"children\":[{\"text\":\"隆阳\",\"value\":\"530502\",\"children\":\"\"},{\"text\":\"施甸\",\"value\":\"530521\",\"children\":\"\"},{\"text\":\"腾冲\",\"value\":\"530522\",\"children\":\"\"},{\"text\":\"龙陵\",\"value\":\"530523\",\"children\":\"\"},{\"text\":\"昌宁\",\"value\":\"530524\",\"children\":\"\"}]},{\"text\":\"昭通\",\"value\":\"530600\",\"children\":[{\"text\":\"昭阳\",\"value\":\"530602\",\"children\":\"\"},{\"text\":\"鲁甸\",\"value\":\"530621\",\"children\":\"\"},{\"text\":\"巧家\",\"value\":\"530622\",\"children\":\"\"},{\"text\":\"盐津\",\"value\":\"530623\",\"children\":\"\"},{\"text\":\"大关\",\"value\":\"530624\",\"children\":\"\"},{\"text\":\"永善\",\"value\":\"530625\",\"children\":\"\"},{\"text\":\"绥江\",\"value\":\"530626\",\"children\":\"\"},{\"text\":\"镇雄\",\"value\":\"530627\",\"children\":\"\"},{\"text\":\"彝良\",\"value\":\"530628\",\"children\":\"\"},{\"text\":\"威信\",\"value\":\"530629\",\"children\":\"\"},{\"text\":\"水富\",\"value\":\"530630\",\"children\":\"\"}]},{\"text\":\"丽江\",\"value\":\"530700\",\"children\":[{\"text\":\"古城\",\"value\":\"530702\",\"children\":\"\"},{\"text\":\"玉龙\",\"value\":\"530721\",\"children\":\"\"},{\"text\":\"永胜\",\"value\":\"530722\",\"children\":\"\"},{\"text\":\"华坪\",\"value\":\"530723\",\"children\":\"\"},{\"text\":\"宁蒗\",\"value\":\"530724\",\"children\":\"\"}]},{\"text\":\"普洱\",\"value\":\"530800\",\"children\":[{\"text\":\"思茅\",\"value\":\"530802\",\"children\":\"\"},{\"text\":\"宁洱\",\"value\":\"530821\",\"children\":\"\"},{\"text\":\"墨江\",\"value\":\"530822\",\"children\":\"\"},{\"text\":\"景东\",\"value\":\"530823\",\"children\":\"\"},{\"text\":\"景谷\",\"value\":\"530824\",\"children\":\"\"},{\"text\":\"镇沅\",\"value\":\"530825\",\"children\":\"\"},{\"text\":\"江城\",\"value\":\"530826\",\"children\":\"\"},{\"text\":\"孟连\",\"value\":\"530827\",\"children\":\"\"},{\"text\":\"澜沧\",\"value\":\"530828\",\"children\":\"\"},{\"text\":\"西盟\",\"value\":\"530829\",\"children\":\"\"}]},{\"text\":\"临沧\",\"value\":\"530900\",\"children\":[{\"text\":\"临翔\",\"value\":\"530902\",\"children\":\"\"},{\"text\":\"凤庆\",\"value\":\"530921\",\"children\":\"\"},{\"text\":\"云县\",\"value\":\"530922\",\"children\":\"\"},{\"text\":\"永德\",\"value\":\"530923\",\"children\":\"\"},{\"text\":\"镇康\",\"value\":\"530924\",\"children\":\"\"},{\"text\":\"双江\",\"value\":\"530925\",\"children\":\"\"},{\"text\":\"耿马\",\"value\":\"530926\",\"children\":\"\"},{\"text\":\"沧源\",\"value\":\"530927\",\"children\":\"\"}]},{\"text\":\"楚雄\",\"value\":\"532300\",\"children\":[{\"text\":\"楚雄\",\"value\":\"532301\",\"children\":\"\"},{\"text\":\"双柏\",\"value\":\"532322\",\"children\":\"\"},{\"text\":\"牟定\",\"value\":\"532323\",\"children\":\"\"},{\"text\":\"南华\",\"value\":\"532324\",\"children\":\"\"},{\"text\":\"姚安\",\"value\":\"532325\",\"children\":\"\"},{\"text\":\"大姚\",\"value\":\"532326\",\"children\":\"\"},{\"text\":\"永仁\",\"value\":\"532327\",\"children\":\"\"},{\"text\":\"元谋\",\"value\":\"532328\",\"children\":\"\"},{\"text\":\"武定\",\"value\":\"532329\",\"children\":\"\"},{\"text\":\"禄丰\",\"value\":\"532331\",\"children\":\"\"}]},{\"text\":\"红河\",\"value\":\"532500\",\"children\":[{\"text\":\"个旧\",\"value\":\"532501\",\"children\":\"\"},{\"text\":\"开远\",\"value\":\"532502\",\"children\":\"\"},{\"text\":\"蒙自\",\"value\":\"532522\",\"children\":\"\"},{\"text\":\"屏边\",\"value\":\"532523\",\"children\":\"\"},{\"text\":\"建水\",\"value\":\"532524\",\"children\":\"\"},{\"text\":\"石屏\",\"value\":\"532525\",\"children\":\"\"},{\"text\":\"弥勒\",\"value\":\"532526\",\"children\":\"\"},{\"text\":\"泸西\",\"value\":\"532527\",\"children\":\"\"},{\"text\":\"元阳\",\"value\":\"532528\",\"children\":\"\"},{\"text\":\"红河\",\"value\":\"532529\",\"children\":\"\"},{\"text\":\"金平\",\"value\":\"532530\",\"children\":\"\"},{\"text\":\"绿春\",\"value\":\"532531\",\"children\":\"\"},{\"text\":\"河口\",\"value\":\"532532\",\"children\":\"\"}]},{\"text\":\"文山\",\"value\":\"532600\",\"children\":[{\"text\":\"文山\",\"value\":\"532621\",\"children\":\"\"},{\"text\":\"砚山\",\"value\":\"532622\",\"children\":\"\"},{\"text\":\"西畴\",\"value\":\"532623\",\"children\":\"\"},{\"text\":\"麻栗坡\",\"value\":\"532624\",\"children\":\"\"},{\"text\":\"马关\",\"value\":\"532625\",\"children\":\"\"},{\"text\":\"丘北\",\"value\":\"532626\",\"children\":\"\"},{\"text\":\"广南\",\"value\":\"532627\",\"children\":\"\"},{\"text\":\"富宁\",\"value\":\"532628\",\"children\":\"\"}]},{\"text\":\"西双版纳\",\"value\":\"532800\",\"children\":[{\"text\":\"景洪\",\"value\":\"532801\",\"children\":\"\"},{\"text\":\"勐海\",\"value\":\"532822\",\"children\":\"\"},{\"text\":\"勐腊\",\"value\":\"532823\",\"children\":\"\"}]},{\"text\":\"大理\",\"value\":\"532900\",\"children\":[{\"text\":\"大理\",\"value\":\"532901\",\"children\":\"\"},{\"text\":\"漾濞\",\"value\":\"532922\",\"children\":\"\"},{\"text\":\"祥云\",\"value\":\"532923\",\"children\":\"\"},{\"text\":\"宾川\",\"value\":\"532924\",\"children\":\"\"},{\"text\":\"弥渡\",\"value\":\"532925\",\"children\":\"\"},{\"text\":\"南涧\",\"value\":\"532926\",\"children\":\"\"},{\"text\":\"巍山\",\"value\":\"532927\",\"children\":\"\"},{\"text\":\"永平\",\"value\":\"532928\",\"children\":\"\"},{\"text\":\"云龙\",\"value\":\"532929\",\"children\":\"\"},{\"text\":\"洱源\",\"value\":\"532930\",\"children\":\"\"},{\"text\":\"剑川\",\"value\":\"532931\",\"children\":\"\"},{\"text\":\"鹤庆\",\"value\":\"532932\",\"children\":\"\"}]},{\"text\":\"德宏\",\"value\":\"533100\",\"children\":[{\"text\":\"瑞丽\",\"value\":\"533102\",\"children\":\"\"},{\"text\":\"芒市\",\"value\":\"533103\",\"children\":\"\"},{\"text\":\"梁河\",\"value\":\"533122\",\"children\":\"\"},{\"text\":\"盈江\",\"value\":\"533123\",\"children\":\"\"},{\"text\":\"陇川\",\"value\":\"533124\",\"children\":\"\"}]},{\"text\":\"怒江\",\"value\":\"533300\",\"children\":[{\"text\":\"泸水\",\"value\":\"533321\",\"children\":\"\"},{\"text\":\"福贡\",\"value\":\"533323\",\"children\":\"\"},{\"text\":\"贡山\",\"value\":\"533324\",\"children\":\"\"},{\"text\":\"兰坪\",\"value\":\"533325\",\"children\":\"\"}]},{\"text\":\"迪庆\",\"value\":\"533400\",\"children\":[{\"text\":\"香格里拉\",\"value\":\"533421\",\"children\":\"\"},{\"text\":\"德钦\",\"value\":\"533422\",\"children\":\"\"},{\"text\":\"维西\",\"value\":\"533423\",\"children\":\"\"}]}]},{\"text\":\"西藏\",\"value\":\"540000\",\"children\":[{\"text\":\"拉萨\",\"value\":\"540100\",\"children\":[{\"text\":\"城关\",\"value\":\"540102\",\"children\":\"\"},{\"text\":\"林周\",\"value\":\"540121\",\"children\":\"\"},{\"text\":\"当雄\",\"value\":\"540122\",\"children\":\"\"},{\"text\":\"尼木\",\"value\":\"540123\",\"children\":\"\"},{\"text\":\"曲水\",\"value\":\"540124\",\"children\":\"\"},{\"text\":\"堆龙德庆\",\"value\":\"540125\",\"children\":\"\"},{\"text\":\"达孜\",\"value\":\"540126\",\"children\":\"\"},{\"text\":\"墨竹工卡\",\"value\":\"540127\",\"children\":\"\"}]},{\"text\":\"昌都\",\"value\":\"542100\",\"children\":[{\"text\":\"卡若\",\"value\":\"542121\",\"children\":\"\"},{\"text\":\"江达\",\"value\":\"542122\",\"children\":\"\"},{\"text\":\"贡觉\",\"value\":\"542123\",\"children\":\"\"},{\"text\":\"类乌齐\",\"value\":\"542124\",\"children\":\"\"},{\"text\":\"丁青\",\"value\":\"542125\",\"children\":\"\"},{\"text\":\"察雅\",\"value\":\"542126\",\"children\":\"\"},{\"text\":\"八宿\",\"value\":\"542127\",\"children\":\"\"},{\"text\":\"左贡\",\"value\":\"542128\",\"children\":\"\"},{\"text\":\"芒康\",\"value\":\"542129\",\"children\":\"\"},{\"text\":\"洛隆\",\"value\":\"542132\",\"children\":\"\"},{\"text\":\"边坝\",\"value\":\"542133\",\"children\":\"\"}]},{\"text\":\"山南\",\"value\":\"542200\",\"children\":[{\"text\":\"乃东\",\"value\":\"542221\",\"children\":\"\"},{\"text\":\"扎囊\",\"value\":\"542222\",\"children\":\"\"},{\"text\":\"贡嘎\",\"value\":\"542223\",\"children\":\"\"},{\"text\":\"桑日\",\"value\":\"542224\",\"children\":\"\"},{\"text\":\"琼结\",\"value\":\"542225\",\"children\":\"\"},{\"text\":\"曲松\",\"value\":\"542226\",\"children\":\"\"},{\"text\":\"措美\",\"value\":\"542227\",\"children\":\"\"},{\"text\":\"洛扎\",\"value\":\"542228\",\"children\":\"\"},{\"text\":\"加查\",\"value\":\"542229\",\"children\":\"\"},{\"text\":\"隆子\",\"value\":\"542231\",\"children\":\"\"},{\"text\":\"错那\",\"value\":\"542232\",\"children\":\"\"},{\"text\":\"浪卡子\",\"value\":\"542233\",\"children\":\"\"}]},{\"text\":\"日喀则\",\"value\":\"542300\",\"children\":[{\"text\":\"桑珠孜\",\"value\":\"542301\",\"children\":\"\"},{\"text\":\"南木林\",\"value\":\"542322\",\"children\":\"\"},{\"text\":\"江孜\",\"value\":\"542323\",\"children\":\"\"},{\"text\":\"定日\",\"value\":\"542324\",\"children\":\"\"},{\"text\":\"萨迦\",\"value\":\"542325\",\"children\":\"\"},{\"text\":\"拉孜\",\"value\":\"542326\",\"children\":\"\"},{\"text\":\"昂仁\",\"value\":\"542327\",\"children\":\"\"},{\"text\":\"谢通门\",\"value\":\"542328\",\"children\":\"\"},{\"text\":\"白朗\",\"value\":\"542329\",\"children\":\"\"},{\"text\":\"仁布\",\"value\":\"542330\",\"children\":\"\"},{\"text\":\"康马\",\"value\":\"542331\",\"children\":\"\"},{\"text\":\"定结\",\"value\":\"542332\",\"children\":\"\"},{\"text\":\"仲巴\",\"value\":\"542333\",\"children\":\"\"},{\"text\":\"亚东\",\"value\":\"542334\",\"children\":\"\"},{\"text\":\"吉隆\",\"value\":\"542335\",\"children\":\"\"},{\"text\":\"聂拉木\",\"value\":\"542336\",\"children\":\"\"},{\"text\":\"萨嘎\",\"value\":\"542337\",\"children\":\"\"},{\"text\":\"岗巴\",\"value\":\"542338\",\"children\":\"\"}]},{\"text\":\"那曲\",\"value\":\"542400\",\"children\":[{\"text\":\"那曲\",\"value\":\"542421\",\"children\":\"\"},{\"text\":\"嘉黎\",\"value\":\"542422\",\"children\":\"\"},{\"text\":\"比如\",\"value\":\"542423\",\"children\":\"\"},{\"text\":\"聂荣\",\"value\":\"542424\",\"children\":\"\"},{\"text\":\"安多\",\"value\":\"542425\",\"children\":\"\"},{\"text\":\"申扎\",\"value\":\"542426\",\"children\":\"\"},{\"text\":\"索县\",\"value\":\"542427\",\"children\":\"\"},{\"text\":\"班戈\",\"value\":\"542428\",\"children\":\"\"},{\"text\":\"巴青\",\"value\":\"542429\",\"children\":\"\"},{\"text\":\"尼玛\",\"value\":\"542430\",\"children\":\"\"},{\"text\":\"双湖\",\"value\":\"542432\",\"children\":\"\"}]},{\"text\":\"阿里\",\"value\":\"542500\",\"children\":[{\"text\":\"普兰\",\"value\":\"542521\",\"children\":\"\"},{\"text\":\"札达\",\"value\":\"542522\",\"children\":\"\"},{\"text\":\"噶尔\",\"value\":\"542523\",\"children\":\"\"},{\"text\":\"日土\",\"value\":\"542524\",\"children\":\"\"},{\"text\":\"革吉\",\"value\":\"542525\",\"children\":\"\"},{\"text\":\"改则\",\"value\":\"542526\",\"children\":\"\"},{\"text\":\"措勤\",\"value\":\"542527\",\"children\":\"\"}]},{\"text\":\"林芝\",\"value\":\"542600\",\"children\":[{\"text\":\"巴宜\",\"value\":\"542621\",\"children\":\"\"},{\"text\":\"工布江达\",\"value\":\"542622\",\"children\":\"\"},{\"text\":\"米林\",\"value\":\"542623\",\"children\":\"\"},{\"text\":\"墨脱\",\"value\":\"542624\",\"children\":\"\"},{\"text\":\"波密\",\"value\":\"542625\",\"children\":\"\"},{\"text\":\"察隅\",\"value\":\"542626\",\"children\":\"\"},{\"text\":\"朗县\",\"value\":\"542627\",\"children\":\"\"}]}]},{\"text\":\"陕西\",\"value\":\"610000\",\"children\":[{\"text\":\"西安\",\"value\":\"610100\",\"children\":[{\"text\":\"新城\",\"value\":\"610102\",\"children\":\"\"},{\"text\":\"碑林\",\"value\":\"610103\",\"children\":\"\"},{\"text\":\"莲湖\",\"value\":\"610104\",\"children\":\"\"},{\"text\":\"灞桥\",\"value\":\"610111\",\"children\":\"\"},{\"text\":\"未央\",\"value\":\"610112\",\"children\":\"\"},{\"text\":\"雁塔\",\"value\":\"610113\",\"children\":\"\"},{\"text\":\"阎良\",\"value\":\"610114\",\"children\":\"\"},{\"text\":\"临潼\",\"value\":\"610115\",\"children\":\"\"},{\"text\":\"长安\",\"value\":\"610116\",\"children\":\"\"},{\"text\":\"蓝田\",\"value\":\"610122\",\"children\":\"\"},{\"text\":\"周至\",\"value\":\"610124\",\"children\":\"\"},{\"text\":\"户县\",\"value\":\"610125\",\"children\":\"\"},{\"text\":\"高陵\",\"value\":\"610126\",\"children\":\"\"}]},{\"text\":\"铜川\",\"value\":\"610200\",\"children\":[{\"text\":\"王益\",\"value\":\"610202\",\"children\":\"\"},{\"text\":\"印台\",\"value\":\"610203\",\"children\":\"\"},{\"text\":\"耀州\",\"value\":\"610204\",\"children\":\"\"},{\"text\":\"宜君\",\"value\":\"610222\",\"children\":\"\"}]},{\"text\":\"宝鸡\",\"value\":\"610300\",\"children\":[{\"text\":\"渭滨\",\"value\":\"610302\",\"children\":\"\"},{\"text\":\"金台\",\"value\":\"610303\",\"children\":\"\"},{\"text\":\"陈仓\",\"value\":\"610304\",\"children\":\"\"},{\"text\":\"凤翔\",\"value\":\"610322\",\"children\":\"\"},{\"text\":\"岐山\",\"value\":\"610323\",\"children\":\"\"},{\"text\":\"扶风\",\"value\":\"610324\",\"children\":\"\"},{\"text\":\"眉县\",\"value\":\"610326\",\"children\":\"\"},{\"text\":\"陇县\",\"value\":\"610327\",\"children\":\"\"},{\"text\":\"千阳\",\"value\":\"610328\",\"children\":\"\"},{\"text\":\"麟游\",\"value\":\"610329\",\"children\":\"\"},{\"text\":\"凤县\",\"value\":\"610330\",\"children\":\"\"},{\"text\":\"太白\",\"value\":\"610331\",\"children\":\"\"}]},{\"text\":\"咸阳\",\"value\":\"610400\",\"children\":[{\"text\":\"秦都\",\"value\":\"610402\",\"children\":\"\"},{\"text\":\"杨陵\",\"value\":\"610403\",\"children\":\"\"},{\"text\":\"渭城\",\"value\":\"610404\",\"children\":\"\"},{\"text\":\"三原\",\"value\":\"610422\",\"children\":\"\"},{\"text\":\"泾阳\",\"value\":\"610423\",\"children\":\"\"},{\"text\":\"乾县\",\"value\":\"610424\",\"children\":\"\"},{\"text\":\"礼泉\",\"value\":\"610425\",\"children\":\"\"},{\"text\":\"永寿\",\"value\":\"610426\",\"children\":\"\"},{\"text\":\"彬县\",\"value\":\"610427\",\"children\":\"\"},{\"text\":\"长武\",\"value\":\"610428\",\"children\":\"\"},{\"text\":\"旬邑\",\"value\":\"610429\",\"children\":\"\"},{\"text\":\"淳化\",\"value\":\"610430\",\"children\":\"\"},{\"text\":\"武功\",\"value\":\"610431\",\"children\":\"\"},{\"text\":\"兴平\",\"value\":\"610481\",\"children\":\"\"}]},{\"text\":\"渭南\",\"value\":\"610500\",\"children\":[{\"text\":\"临渭\",\"value\":\"610502\",\"children\":\"\"},{\"text\":\"华县\",\"value\":\"610521\",\"children\":\"\"},{\"text\":\"潼关\",\"value\":\"610522\",\"children\":\"\"},{\"text\":\"大荔\",\"value\":\"610523\",\"children\":\"\"},{\"text\":\"合阳\",\"value\":\"610524\",\"children\":\"\"},{\"text\":\"澄城\",\"value\":\"610525\",\"children\":\"\"},{\"text\":\"蒲城\",\"value\":\"610526\",\"children\":\"\"},{\"text\":\"白水\",\"value\":\"610527\",\"children\":\"\"},{\"text\":\"富平\",\"value\":\"610528\",\"children\":\"\"},{\"text\":\"韩城\",\"value\":\"610581\",\"children\":\"\"},{\"text\":\"华阴\",\"value\":\"610582\",\"children\":\"\"}]},{\"text\":\"延安\",\"value\":\"610600\",\"children\":[{\"text\":\"宝塔\",\"value\":\"610602\",\"children\":\"\"},{\"text\":\"延长\",\"value\":\"610621\",\"children\":\"\"},{\"text\":\"延川\",\"value\":\"610622\",\"children\":\"\"},{\"text\":\"子长\",\"value\":\"610623\",\"children\":\"\"},{\"text\":\"安塞\",\"value\":\"610624\",\"children\":\"\"},{\"text\":\"志丹\",\"value\":\"610625\",\"children\":\"\"},{\"text\":\"吴起\",\"value\":\"610626\",\"children\":\"\"},{\"text\":\"甘泉\",\"value\":\"610627\",\"children\":\"\"},{\"text\":\"富县\",\"value\":\"610628\",\"children\":\"\"},{\"text\":\"洛川\",\"value\":\"610629\",\"children\":\"\"},{\"text\":\"宜川\",\"value\":\"610630\",\"children\":\"\"},{\"text\":\"黄龙\",\"value\":\"610631\",\"children\":\"\"},{\"text\":\"黄陵\",\"value\":\"610632\",\"children\":\"\"}]},{\"text\":\"汉中\",\"value\":\"610700\",\"children\":[{\"text\":\"汉台\",\"value\":\"610702\",\"children\":\"\"},{\"text\":\"南郑\",\"value\":\"610721\",\"children\":\"\"},{\"text\":\"城固\",\"value\":\"610722\",\"children\":\"\"},{\"text\":\"洋县\",\"value\":\"610723\",\"children\":\"\"},{\"text\":\"西乡\",\"value\":\"610724\",\"children\":\"\"},{\"text\":\"勉县\",\"value\":\"610725\",\"children\":\"\"},{\"text\":\"宁强\",\"value\":\"610726\",\"children\":\"\"},{\"text\":\"略阳\",\"value\":\"610727\",\"children\":\"\"},{\"text\":\"镇巴\",\"value\":\"610728\",\"children\":\"\"},{\"text\":\"留坝\",\"value\":\"610729\",\"children\":\"\"},{\"text\":\"佛坪\",\"value\":\"610730\",\"children\":\"\"}]},{\"text\":\"榆林\",\"value\":\"610800\",\"children\":[{\"text\":\"榆阳\",\"value\":\"610802\",\"children\":\"\"},{\"text\":\"神木\",\"value\":\"610821\",\"children\":\"\"},{\"text\":\"府谷\",\"value\":\"610822\",\"children\":\"\"},{\"text\":\"横山\",\"value\":\"610823\",\"children\":\"\"},{\"text\":\"靖边\",\"value\":\"610824\",\"children\":\"\"},{\"text\":\"定边\",\"value\":\"610825\",\"children\":\"\"},{\"text\":\"绥德\",\"value\":\"610826\",\"children\":\"\"},{\"text\":\"米脂\",\"value\":\"610827\",\"children\":\"\"},{\"text\":\"佳县\",\"value\":\"610828\",\"children\":\"\"},{\"text\":\"吴堡\",\"value\":\"610829\",\"children\":\"\"},{\"text\":\"清涧\",\"value\":\"610830\",\"children\":\"\"},{\"text\":\"子洲\",\"value\":\"610831\",\"children\":\"\"}]},{\"text\":\"安康\",\"value\":\"610900\",\"children\":[{\"text\":\"汉滨\",\"value\":\"610902\",\"children\":\"\"},{\"text\":\"汉阴\",\"value\":\"610921\",\"children\":\"\"},{\"text\":\"石泉\",\"value\":\"610922\",\"children\":\"\"},{\"text\":\"宁陕\",\"value\":\"610923\",\"children\":\"\"},{\"text\":\"紫阳\",\"value\":\"610924\",\"children\":\"\"},{\"text\":\"岚皋\",\"value\":\"610925\",\"children\":\"\"},{\"text\":\"平利\",\"value\":\"610926\",\"children\":\"\"},{\"text\":\"镇坪\",\"value\":\"610927\",\"children\":\"\"},{\"text\":\"旬阳\",\"value\":\"610928\",\"children\":\"\"},{\"text\":\"白河\",\"value\":\"610929\",\"children\":\"\"}]},{\"text\":\"商洛\",\"value\":\"611000\",\"children\":[{\"text\":\"商州\",\"value\":\"611002\",\"children\":\"\"},{\"text\":\"洛南\",\"value\":\"611021\",\"children\":\"\"},{\"text\":\"丹凤\",\"value\":\"611022\",\"children\":\"\"},{\"text\":\"商南\",\"value\":\"611023\",\"children\":\"\"},{\"text\":\"山阳\",\"value\":\"611024\",\"children\":\"\"},{\"text\":\"镇安\",\"value\":\"611025\",\"children\":\"\"},{\"text\":\"柞水\",\"value\":\"611026\",\"children\":\"\"}]}]},{\"text\":\"甘肃\",\"value\":\"620000\",\"children\":[{\"text\":\"兰州\",\"value\":\"620100\",\"children\":[{\"text\":\"城关\",\"value\":\"620102\",\"children\":\"\"},{\"text\":\"七里河\",\"value\":\"620103\",\"children\":\"\"},{\"text\":\"西固\",\"value\":\"620104\",\"children\":\"\"},{\"text\":\"安宁\",\"value\":\"620105\",\"children\":\"\"},{\"text\":\"红古\",\"value\":\"620111\",\"children\":\"\"},{\"text\":\"永登\",\"value\":\"620121\",\"children\":\"\"},{\"text\":\"皋兰\",\"value\":\"620122\",\"children\":\"\"},{\"text\":\"榆中\",\"value\":\"620123\",\"children\":\"\"}]},{\"text\":\"嘉峪关\",\"value\":\"620200\",\"children\":[{\"text\":\"嘉峪关\",\"value\":\"620200\",\"children\":\"\"}]},{\"text\":\"金昌\",\"value\":\"620300\",\"children\":[{\"text\":\"金川\",\"value\":\"620302\",\"children\":\"\"},{\"text\":\"永昌\",\"value\":\"620321\",\"children\":\"\"}]},{\"text\":\"白银\",\"value\":\"620400\",\"children\":[{\"text\":\"白银\",\"value\":\"620402\",\"children\":\"\"},{\"text\":\"平川\",\"value\":\"620403\",\"children\":\"\"},{\"text\":\"靖远\",\"value\":\"620421\",\"children\":\"\"},{\"text\":\"会宁\",\"value\":\"620422\",\"children\":\"\"},{\"text\":\"景泰\",\"value\":\"620423\",\"children\":\"\"}]},{\"text\":\"天水\",\"value\":\"620500\",\"children\":[{\"text\":\"秦州\",\"value\":\"620502\",\"children\":\"\"},{\"text\":\"麦积\",\"value\":\"620503\",\"children\":\"\"},{\"text\":\"清水\",\"value\":\"620521\",\"children\":\"\"},{\"text\":\"秦安\",\"value\":\"620522\",\"children\":\"\"},{\"text\":\"甘谷\",\"value\":\"620523\",\"children\":\"\"},{\"text\":\"武山\",\"value\":\"620524\",\"children\":\"\"},{\"text\":\"张家川\",\"value\":\"620525\",\"children\":\"\"}]},{\"text\":\"武威\",\"value\":\"620600\",\"children\":[{\"text\":\"凉州\",\"value\":\"620602\",\"children\":\"\"},{\"text\":\"民勤\",\"value\":\"620621\",\"children\":\"\"},{\"text\":\"古浪\",\"value\":\"620622\",\"children\":\"\"},{\"text\":\"天祝\",\"value\":\"620623\",\"children\":\"\"}]},{\"text\":\"张掖\",\"value\":\"620700\",\"children\":[{\"text\":\"甘州\",\"value\":\"620702\",\"children\":\"\"},{\"text\":\"肃南\",\"value\":\"620721\",\"children\":\"\"},{\"text\":\"民乐\",\"value\":\"620722\",\"children\":\"\"},{\"text\":\"临泽\",\"value\":\"620723\",\"children\":\"\"},{\"text\":\"高台\",\"value\":\"620724\",\"children\":\"\"},{\"text\":\"山丹\",\"value\":\"620725\",\"children\":\"\"}]},{\"text\":\"平凉\",\"value\":\"620800\",\"children\":[{\"text\":\"崆峒\",\"value\":\"620802\",\"children\":\"\"},{\"text\":\"泾川\",\"value\":\"620821\",\"children\":\"\"},{\"text\":\"灵台\",\"value\":\"620822\",\"children\":\"\"},{\"text\":\"崇信\",\"value\":\"620823\",\"children\":\"\"},{\"text\":\"华亭\",\"value\":\"620824\",\"children\":\"\"},{\"text\":\"庄浪\",\"value\":\"620825\",\"children\":\"\"},{\"text\":\"静宁\",\"value\":\"620826\",\"children\":\"\"}]},{\"text\":\"酒泉\",\"value\":\"620900\",\"children\":[{\"text\":\"肃州\",\"value\":\"620902\",\"children\":\"\"},{\"text\":\"金塔\",\"value\":\"620921\",\"children\":\"\"},{\"text\":\"瓜州\",\"value\":\"620922\",\"children\":\"\"},{\"text\":\"肃北\",\"value\":\"620923\",\"children\":\"\"},{\"text\":\"阿克塞\",\"value\":\"620924\",\"children\":\"\"},{\"text\":\"玉门\",\"value\":\"620981\",\"children\":\"\"},{\"text\":\"敦煌\",\"value\":\"620982\",\"children\":\"\"}]},{\"text\":\"庆阳\",\"value\":\"621000\",\"children\":[{\"text\":\"西峰\",\"value\":\"621002\",\"children\":\"\"},{\"text\":\"庆城\",\"value\":\"621021\",\"children\":\"\"},{\"text\":\"环县\",\"value\":\"621022\",\"children\":\"\"},{\"text\":\"华池\",\"value\":\"621023\",\"children\":\"\"},{\"text\":\"合水\",\"value\":\"621024\",\"children\":\"\"},{\"text\":\"正宁\",\"value\":\"621025\",\"children\":\"\"},{\"text\":\"宁县\",\"value\":\"621026\",\"children\":\"\"},{\"text\":\"镇原\",\"value\":\"621027\",\"children\":\"\"}]},{\"text\":\"定西\",\"value\":\"621100\",\"children\":[{\"text\":\"安定\",\"value\":\"621102\",\"children\":\"\"},{\"text\":\"通渭\",\"value\":\"621121\",\"children\":\"\"},{\"text\":\"陇西\",\"value\":\"621122\",\"children\":\"\"},{\"text\":\"渭源\",\"value\":\"621123\",\"children\":\"\"},{\"text\":\"临洮\",\"value\":\"621124\",\"children\":\"\"},{\"text\":\"漳县\",\"value\":\"621125\",\"children\":\"\"},{\"text\":\"岷县\",\"value\":\"621126\",\"children\":\"\"}]},{\"text\":\"陇南\",\"value\":\"621200\",\"children\":[{\"text\":\"武都\",\"value\":\"621202\",\"children\":\"\"},{\"text\":\"成县\",\"value\":\"621221\",\"children\":\"\"},{\"text\":\"文县\",\"value\":\"621222\",\"children\":\"\"},{\"text\":\"宕昌\",\"value\":\"621223\",\"children\":\"\"},{\"text\":\"康县\",\"value\":\"621224\",\"children\":\"\"},{\"text\":\"西和\",\"value\":\"621225\",\"children\":\"\"},{\"text\":\"礼县\",\"value\":\"621226\",\"children\":\"\"},{\"text\":\"徽县\",\"value\":\"621227\",\"children\":\"\"},{\"text\":\"两当\",\"value\":\"621228\",\"children\":\"\"}]},{\"text\":\"临夏\",\"value\":\"622900\",\"children\":[{\"text\":\"临夏市\",\"value\":\"622901\",\"children\":\"\"},{\"text\":\"临夏县\",\"value\":\"622921\",\"children\":\"\"},{\"text\":\"康乐\",\"value\":\"622922\",\"children\":\"\"},{\"text\":\"永靖\",\"value\":\"622923\",\"children\":\"\"},{\"text\":\"广河\",\"value\":\"622924\",\"children\":\"\"},{\"text\":\"和政\",\"value\":\"622925\",\"children\":\"\"},{\"text\":\"东乡\",\"value\":\"622926\",\"children\":\"\"},{\"text\":\"积石山\",\"value\":\"622927\",\"children\":\"\"}]},{\"text\":\"甘南\",\"value\":\"623000\",\"children\":[{\"text\":\"合作\",\"value\":\"623001\",\"children\":\"\"},{\"text\":\"临潭\",\"value\":\"623021\",\"children\":\"\"},{\"text\":\"卓尼\",\"value\":\"623022\",\"children\":\"\"},{\"text\":\"舟曲\",\"value\":\"623023\",\"children\":\"\"},{\"text\":\"迭部\",\"value\":\"623024\",\"children\":\"\"},{\"text\":\"玛曲\",\"value\":\"623025\",\"children\":\"\"},{\"text\":\"碌曲\",\"value\":\"623026\",\"children\":\"\"},{\"text\":\"夏河\",\"value\":\"623027\",\"children\":\"\"}]}]},{\"text\":\"青海\",\"value\":\"630000\",\"children\":[{\"text\":\"西宁\",\"value\":\"630100\",\"children\":[{\"text\":\"城东\",\"value\":\"630102\",\"children\":\"\"},{\"text\":\"城中\",\"value\":\"630103\",\"children\":\"\"},{\"text\":\"城西\",\"value\":\"630104\",\"children\":\"\"},{\"text\":\"城北\",\"value\":\"630105\",\"children\":\"\"},{\"text\":\"大通\",\"value\":\"630121\",\"children\":\"\"},{\"text\":\"湟中\",\"value\":\"630122\",\"children\":\"\"},{\"text\":\"湟源\",\"value\":\"630123\",\"children\":\"\"}]},{\"text\":\"海东\",\"value\":\"632100\",\"children\":[{\"text\":\"平安\",\"value\":\"632121\",\"children\":\"\"},{\"text\":\"民和\",\"value\":\"632122\",\"children\":\"\"},{\"text\":\"乐都\",\"value\":\"632123\",\"children\":\"\"},{\"text\":\"互助\",\"value\":\"632126\",\"children\":\"\"},{\"text\":\"化隆\",\"value\":\"632127\",\"children\":\"\"},{\"text\":\"循化\",\"value\":\"632128\",\"children\":\"\"}]},{\"text\":\"海北\",\"value\":\"632200\",\"children\":[{\"text\":\"门源\",\"value\":\"632221\",\"children\":\"\"},{\"text\":\"祁连\",\"value\":\"632222\",\"children\":\"\"},{\"text\":\"海晏\",\"value\":\"632223\",\"children\":\"\"},{\"text\":\"刚察\",\"value\":\"632224\",\"children\":\"\"}]},{\"text\":\"黄南\",\"value\":\"632300\",\"children\":[{\"text\":\"同仁\",\"value\":\"632321\",\"children\":\"\"},{\"text\":\"尖扎\",\"value\":\"632322\",\"children\":\"\"},{\"text\":\"泽库\",\"value\":\"632323\",\"children\":\"\"},{\"text\":\"河南\",\"value\":\"632324\",\"children\":\"\"}]},{\"text\":\"海南藏族\",\"value\":\"632500\",\"children\":[{\"text\":\"共和\",\"value\":\"632521\",\"children\":\"\"},{\"text\":\"同德\",\"value\":\"632522\",\"children\":\"\"},{\"text\":\"贵德\",\"value\":\"632523\",\"children\":\"\"},{\"text\":\"兴海\",\"value\":\"632524\",\"children\":\"\"},{\"text\":\"贵南\",\"value\":\"632525\",\"children\":\"\"}]},{\"text\":\"果洛\",\"value\":\"632600\",\"children\":[{\"text\":\"玛沁\",\"value\":\"632621\",\"children\":\"\"},{\"text\":\"班玛\",\"value\":\"632622\",\"children\":\"\"},{\"text\":\"甘德\",\"value\":\"632623\",\"children\":\"\"},{\"text\":\"达日\",\"value\":\"632624\",\"children\":\"\"},{\"text\":\"久治\",\"value\":\"632625\",\"children\":\"\"},{\"text\":\"玛多\",\"value\":\"632626\",\"children\":\"\"}]},{\"text\":\"玉树\",\"value\":\"632700\",\"children\":[{\"text\":\"玉树\",\"value\":\"632721\",\"children\":\"\"},{\"text\":\"杂多\",\"value\":\"632722\",\"children\":\"\"},{\"text\":\"称多\",\"value\":\"632723\",\"children\":\"\"},{\"text\":\"治多\",\"value\":\"632724\",\"children\":\"\"},{\"text\":\"囊谦\",\"value\":\"632725\",\"children\":\"\"},{\"text\":\"曲麻莱\",\"value\":\"632726\",\"children\":\"\"}]},{\"text\":\"海西\",\"value\":\"632800\",\"children\":[{\"text\":\"格尔木\",\"value\":\"632801\",\"children\":\"\"},{\"text\":\"德令哈\",\"value\":\"632802\",\"children\":\"\"},{\"text\":\"乌兰\",\"value\":\"632821\",\"children\":\"\"},{\"text\":\"都兰\",\"value\":\"632822\",\"children\":\"\"},{\"text\":\"天峻\",\"value\":\"632823\",\"children\":\"\"}]}]},{\"text\":\"宁夏\",\"value\":\"640000\",\"children\":[{\"text\":\"银川\",\"value\":\"640100\",\"children\":[{\"text\":\"兴庆\",\"value\":\"640104\",\"children\":\"\"},{\"text\":\"西夏\",\"value\":\"640105\",\"children\":\"\"},{\"text\":\"金凤\",\"value\":\"640106\",\"children\":\"\"},{\"text\":\"永宁\",\"value\":\"640121\",\"children\":\"\"},{\"text\":\"贺兰\",\"value\":\"640122\",\"children\":\"\"},{\"text\":\"灵武\",\"value\":\"640181\",\"children\":\"\"}]},{\"text\":\"石嘴山\",\"value\":\"640200\",\"children\":[{\"text\":\"大武口\",\"value\":\"640202\",\"children\":\"\"},{\"text\":\"惠农\",\"value\":\"640205\",\"children\":\"\"},{\"text\":\"平罗\",\"value\":\"640221\",\"children\":\"\"}]},{\"text\":\"吴忠\",\"value\":\"640300\",\"children\":[{\"text\":\"利通\",\"value\":\"640302\",\"children\":\"\"},{\"text\":\"红寺堡\",\"value\":\"640303\",\"children\":\"\"},{\"text\":\"盐池\",\"value\":\"640323\",\"children\":\"\"},{\"text\":\"同心\",\"value\":\"640324\",\"children\":\"\"},{\"text\":\"青铜峡\",\"value\":\"640381\",\"children\":\"\"}]},{\"text\":\"固原\",\"value\":\"640400\",\"children\":[{\"text\":\"原州\",\"value\":\"640402\",\"children\":\"\"},{\"text\":\"西吉\",\"value\":\"640422\",\"children\":\"\"},{\"text\":\"隆德\",\"value\":\"640423\",\"children\":\"\"},{\"text\":\"泾源\",\"value\":\"640424\",\"children\":\"\"},{\"text\":\"彭阳\",\"value\":\"640425\",\"children\":\"\"}]},{\"text\":\"中卫\",\"value\":\"640500\",\"children\":[{\"text\":\"沙坡头\",\"value\":\"640502\",\"children\":\"\"},{\"text\":\"中宁\",\"value\":\"640521\",\"children\":\"\"},{\"text\":\"海原\",\"value\":\"640522\",\"children\":\"\"}]}]},{\"text\":\"新疆\",\"value\":\"650000\",\"children\":[{\"text\":\"乌鲁木齐\",\"value\":\"650100\",\"children\":[{\"text\":\"天山\",\"value\":\"650102\",\"children\":\"\"},{\"text\":\"沙依巴克\",\"value\":\"650103\",\"children\":\"\"},{\"text\":\"新市\",\"value\":\"650104\",\"children\":\"\"},{\"text\":\"水磨沟\",\"value\":\"650105\",\"children\":\"\"},{\"text\":\"头屯河\",\"value\":\"650106\",\"children\":\"\"},{\"text\":\"达坂城\",\"value\":\"650107\",\"children\":\"\"},{\"text\":\"米东\",\"value\":\"650109\",\"children\":\"\"},{\"text\":\"乌鲁木齐\",\"value\":\"650121\",\"children\":\"\"}]},{\"text\":\"克拉玛依\",\"value\":\"650200\",\"children\":[{\"text\":\"独山子\",\"value\":\"650202\",\"children\":\"\"},{\"text\":\"克拉玛依\",\"value\":\"650203\",\"children\":\"\"},{\"text\":\"白碱滩\",\"value\":\"650204\",\"children\":\"\"},{\"text\":\"乌尔禾\",\"value\":\"650205\",\"children\":\"\"}]},{\"text\":\"吐鲁番\",\"value\":\"652100\",\"children\":[{\"text\":\"高昌\",\"value\":\"652101\",\"children\":\"\"},{\"text\":\"鄯善\",\"value\":\"652122\",\"children\":\"\"},{\"text\":\"托克逊\",\"value\":\"652123\",\"children\":\"\"}]},{\"text\":\"哈密\",\"value\":\"652200\",\"children\":[{\"text\":\"哈密\",\"value\":\"652201\",\"children\":\"\"},{\"text\":\"巴里坤\",\"value\":\"652222\",\"children\":\"\"},{\"text\":\"伊吾\",\"value\":\"652223\",\"children\":\"\"}]},{\"text\":\"昌吉\",\"value\":\"652300\",\"children\":[{\"text\":\"昌吉\",\"value\":\"652301\",\"children\":\"\"},{\"text\":\"阜康\",\"value\":\"652302\",\"children\":\"\"},{\"text\":\"呼图壁\",\"value\":\"652323\",\"children\":\"\"},{\"text\":\"玛纳斯\",\"value\":\"652324\",\"children\":\"\"},{\"text\":\"奇台\",\"value\":\"652325\",\"children\":\"\"},{\"text\":\"吉木萨尔\",\"value\":\"652327\",\"children\":\"\"},{\"text\":\"木垒\",\"value\":\"652328\",\"children\":\"\"}]},{\"text\":\"博尔塔拉\",\"value\":\"652700\",\"children\":[{\"text\":\"博乐\",\"value\":\"652701\",\"children\":\"\"},{\"text\":\"阿拉山口\",\"value\":\"652702\",\"children\":\"\"},{\"text\":\"精河\",\"value\":\"652722\",\"children\":\"\"},{\"text\":\"温泉\",\"value\":\"652723\",\"children\":\"\"}]},{\"text\":\"巴音郭楞\",\"value\":\"652800\",\"children\":[{\"text\":\"库尔勒\",\"value\":\"652801\",\"children\":\"\"},{\"text\":\"轮台\",\"value\":\"652822\",\"children\":\"\"},{\"text\":\"尉犁\",\"value\":\"652823\",\"children\":\"\"},{\"text\":\"若羌\",\"value\":\"652824\",\"children\":\"\"},{\"text\":\"且末\",\"value\":\"652825\",\"children\":\"\"},{\"text\":\"焉耆\",\"value\":\"652826\",\"children\":\"\"},{\"text\":\"和静\",\"value\":\"652827\",\"children\":\"\"},{\"text\":\"和硕\",\"value\":\"652828\",\"children\":\"\"},{\"text\":\"博湖\",\"value\":\"652829\",\"children\":\"\"}]},{\"text\":\"阿克苏\",\"value\":\"652900\",\"children\":[{\"text\":\"阿克苏\",\"value\":\"652901\",\"children\":\"\"},{\"text\":\"温宿\",\"value\":\"652922\",\"children\":\"\"},{\"text\":\"库车\",\"value\":\"652923\",\"children\":\"\"},{\"text\":\"沙雅\",\"value\":\"652924\",\"children\":\"\"},{\"text\":\"新和\",\"value\":\"652925\",\"children\":\"\"},{\"text\":\"拜城\",\"value\":\"652926\",\"children\":\"\"},{\"text\":\"乌什\",\"value\":\"652927\",\"children\":\"\"},{\"text\":\"阿瓦提\",\"value\":\"652928\",\"children\":\"\"},{\"text\":\"柯坪\",\"value\":\"652929\",\"children\":\"\"}]},{\"text\":\"克孜勒苏柯尔克孜\",\"value\":\"653000\",\"children\":[{\"text\":\"阿图什\",\"value\":\"653001\",\"children\":\"\"},{\"text\":\"阿克陶\",\"value\":\"653022\",\"children\":\"\"},{\"text\":\"阿合奇\",\"value\":\"653023\",\"children\":\"\"},{\"text\":\"乌恰\",\"value\":\"653024\",\"children\":\"\"}]},{\"text\":\"喀什\",\"value\":\"653100\",\"children\":[{\"text\":\"喀什\",\"value\":\"653101\",\"children\":\"\"},{\"text\":\"疏附\",\"value\":\"653121\",\"children\":\"\"},{\"text\":\"疏勒\",\"value\":\"653122\",\"children\":\"\"},{\"text\":\"英吉沙\",\"value\":\"653123\",\"children\":\"\"},{\"text\":\"泽普\",\"value\":\"653124\",\"children\":\"\"},{\"text\":\"莎车\",\"value\":\"653125\",\"children\":\"\"},{\"text\":\"叶城\",\"value\":\"653126\",\"children\":\"\"},{\"text\":\"麦盖提\",\"value\":\"653127\",\"children\":\"\"},{\"text\":\"岳普湖\",\"value\":\"653128\",\"children\":\"\"},{\"text\":\"伽师\",\"value\":\"653129\",\"children\":\"\"},{\"text\":\"巴楚\",\"value\":\"653130\",\"children\":\"\"},{\"text\":\"塔什库尔干\",\"value\":\"653131\",\"children\":\"\"}]},{\"text\":\"和田\",\"value\":\"653200\",\"children\":[{\"text\":\"和田市\",\"value\":\"653201\",\"children\":\"\"},{\"text\":\"和田县\",\"value\":\"653221\",\"children\":\"\"},{\"text\":\"墨玉\",\"value\":\"653222\",\"children\":\"\"},{\"text\":\"皮山\",\"value\":\"653223\",\"children\":\"\"},{\"text\":\"洛浦\",\"value\":\"653224\",\"children\":\"\"},{\"text\":\"策勒\",\"value\":\"653225\",\"children\":\"\"},{\"text\":\"于田\",\"value\":\"653226\",\"children\":\"\"},{\"text\":\"民丰\",\"value\":\"653227\",\"children\":\"\"}]},{\"text\":\"伊犁\",\"value\":\"654000\",\"children\":[{\"text\":\"伊宁市\",\"value\":\"654002\",\"children\":\"\"},{\"text\":\"奎屯\",\"value\":\"654003\",\"children\":\"\"},{\"text\":\"伊宁县\",\"value\":\"654021\",\"children\":\"\"},{\"text\":\"察布查尔\",\"value\":\"654022\",\"children\":\"\"},{\"text\":\"霍城\",\"value\":\"654023\",\"children\":\"\"},{\"text\":\"巩留\",\"value\":\"654024\",\"children\":\"\"},{\"text\":\"新源\",\"value\":\"654025\",\"children\":\"\"},{\"text\":\"昭苏\",\"value\":\"654026\",\"children\":\"\"},{\"text\":\"特克斯\",\"value\":\"654027\",\"children\":\"\"},{\"text\":\"尼勒克\",\"value\":\"654028\",\"children\":\"\"}]},{\"text\":\"塔城\",\"value\":\"654200\",\"children\":[{\"text\":\"塔城\",\"value\":\"654201\",\"children\":\"\"},{\"text\":\"乌苏\",\"value\":\"654202\",\"children\":\"\"},{\"text\":\"额敏\",\"value\":\"654221\",\"children\":\"\"},{\"text\":\"沙湾\",\"value\":\"654223\",\"children\":\"\"},{\"text\":\"托里\",\"value\":\"654224\",\"children\":\"\"},{\"text\":\"裕民\",\"value\":\"654225\",\"children\":\"\"},{\"text\":\"和布克赛尔\",\"value\":\"654226\",\"children\":\"\"}]},{\"text\":\"阿勒泰\",\"value\":\"654300\",\"children\":[{\"text\":\"阿勒泰\",\"value\":\"654301\",\"children\":\"\"},{\"text\":\"布尔津\",\"value\":\"654321\",\"children\":\"\"},{\"text\":\"富蕴\",\"value\":\"654322\",\"children\":\"\"},{\"text\":\"福海\",\"value\":\"654323\",\"children\":\"\"},{\"text\":\"哈巴河\",\"value\":\"654324\",\"children\":\"\"},{\"text\":\"青河\",\"value\":\"654325\",\"children\":\"\"},{\"text\":\"吉木乃\",\"value\":\"654326\",\"children\":\"\"}]},{\"text\":\"石河子\",\"value\":\"659001\",\"children\":[{\"text\":\"石河子\",\"value\":\"659001\",\"children\":\"\"}]},{\"text\":\"阿拉尔\",\"value\":\"659002\",\"children\":[{\"text\":\"阿拉尔\",\"value\":\"659002\",\"children\":\"\"}]},{\"text\":\"图木舒克\",\"value\":\"659003\",\"children\":[{\"text\":\"图木舒克\",\"value\":\"659003\",\"children\":\"\"}]},{\"text\":\"五家渠\",\"value\":\"659004\",\"children\":[{\"text\":\"五家渠\",\"value\":\"659004\",\"children\":\"\"}]}]},{\"text\":\"台湾\",\"value\":\"710000\",\"children\":[{\"text\":\"台北\",\"value\":\"710100\",\"children\":[{\"text\":\"中正\",\"value\":\"710101\",\"children\":\"\"},{\"text\":\"大同\",\"value\":\"710102\",\"children\":\"\"},{\"text\":\"中山\",\"value\":\"710103\",\"children\":\"\"},{\"text\":\"松山\",\"value\":\"710104\",\"children\":\"\"},{\"text\":\"大安\",\"value\":\"710105\",\"children\":\"\"},{\"text\":\"万华\",\"value\":\"710106\",\"children\":\"\"},{\"text\":\"信义\",\"value\":\"710107\",\"children\":\"\"},{\"text\":\"士林\",\"value\":\"710108\",\"children\":\"\"},{\"text\":\"北投\",\"value\":\"710109\",\"children\":\"\"},{\"text\":\"内湖\",\"value\":\"710110\",\"children\":\"\"},{\"text\":\"南港\",\"value\":\"710111\",\"children\":\"\"},{\"text\":\"文山\",\"value\":\"710112\",\"children\":\"\"}]},{\"text\":\"高雄\",\"value\":\"710200\",\"children\":[{\"text\":\"新兴\",\"value\":\"710201\",\"children\":\"\"},{\"text\":\"前金\",\"value\":\"710202\",\"children\":\"\"},{\"text\":\"芩雅\",\"value\":\"710203\",\"children\":\"\"},{\"text\":\"盐埕\",\"value\":\"710204\",\"children\":\"\"},{\"text\":\"鼓山\",\"value\":\"710205\",\"children\":\"\"},{\"text\":\"旗津\",\"value\":\"710206\",\"children\":\"\"},{\"text\":\"前镇\",\"value\":\"710207\",\"children\":\"\"},{\"text\":\"三民\",\"value\":\"710208\",\"children\":\"\"},{\"text\":\"左营\",\"value\":\"710209\",\"children\":\"\"},{\"text\":\"楠梓\",\"value\":\"710210\",\"children\":\"\"},{\"text\":\"小港\",\"value\":\"710211\",\"children\":\"\"},{\"text\":\"苓雅\",\"value\":\"710241\",\"children\":\"\"},{\"text\":\"仁武\",\"value\":\"710242\",\"children\":\"\"},{\"text\":\"大社\",\"value\":\"710243\",\"children\":\"\"},{\"text\":\"冈山\",\"value\":\"710244\",\"children\":\"\"},{\"text\":\"路竹\",\"value\":\"710245\",\"children\":\"\"},{\"text\":\"阿莲\",\"value\":\"710246\",\"children\":\"\"},{\"text\":\"田寮\",\"value\":\"710247\",\"children\":\"\"},{\"text\":\"燕巢\",\"value\":\"710248\",\"children\":\"\"},{\"text\":\"桥头\",\"value\":\"710249\",\"children\":\"\"},{\"text\":\"梓官\",\"value\":\"710250\",\"children\":\"\"},{\"text\":\"弥陀\",\"value\":\"710251\",\"children\":\"\"},{\"text\":\"永安\",\"value\":\"710252\",\"children\":\"\"},{\"text\":\"湖内\",\"value\":\"710253\",\"children\":\"\"},{\"text\":\"凤山\",\"value\":\"710254\",\"children\":\"\"},{\"text\":\"大寮\",\"value\":\"710255\",\"children\":\"\"},{\"text\":\"林园\",\"value\":\"710256\",\"children\":\"\"},{\"text\":\"鸟松\",\"value\":\"710257\",\"children\":\"\"},{\"text\":\"大树\",\"value\":\"710258\",\"children\":\"\"},{\"text\":\"旗山\",\"value\":\"710259\",\"children\":\"\"},{\"text\":\"美浓\",\"value\":\"710260\",\"children\":\"\"},{\"text\":\"六龟\",\"value\":\"710261\",\"children\":\"\"},{\"text\":\"内门\",\"value\":\"710262\",\"children\":\"\"},{\"text\":\"杉林\",\"value\":\"710263\",\"children\":\"\"},{\"text\":\"甲仙\",\"value\":\"710264\",\"children\":\"\"},{\"text\":\"桃源\",\"value\":\"710265\",\"children\":\"\"},{\"text\":\"那玛夏\",\"value\":\"710266\",\"children\":\"\"},{\"text\":\"茂林\",\"value\":\"710267\",\"children\":\"\"},{\"text\":\"茄萣\",\"value\":\"710268\",\"children\":\"\"}]},{\"text\":\"台南\",\"value\":\"710300\",\"children\":[{\"text\":\"中西\",\"value\":\"710301\",\"children\":\"\"},{\"text\":\"东区\",\"value\":\"710302\",\"children\":\"\"},{\"text\":\"南区\",\"value\":\"710303\",\"children\":\"\"},{\"text\":\"北区\",\"value\":\"710304\",\"children\":\"\"},{\"text\":\"安平\",\"value\":\"710305\",\"children\":\"\"},{\"text\":\"安南\",\"value\":\"710306\",\"children\":\"\"},{\"text\":\"永康\",\"value\":\"710339\",\"children\":\"\"},{\"text\":\"归仁\",\"value\":\"710340\",\"children\":\"\"},{\"text\":\"新化\",\"value\":\"710341\",\"children\":\"\"},{\"text\":\"左镇\",\"value\":\"710342\",\"children\":\"\"},{\"text\":\"玉井\",\"value\":\"710343\",\"children\":\"\"},{\"text\":\"楠西\",\"value\":\"710344\",\"children\":\"\"},{\"text\":\"南化\",\"value\":\"710345\",\"children\":\"\"},{\"text\":\"仁德\",\"value\":\"710346\",\"children\":\"\"},{\"text\":\"关庙\",\"value\":\"710347\",\"children\":\"\"},{\"text\":\"龙崎\",\"value\":\"710348\",\"children\":\"\"},{\"text\":\"官田\",\"value\":\"710349\",\"children\":\"\"},{\"text\":\"麻豆\",\"value\":\"710350\",\"children\":\"\"},{\"text\":\"佳里\",\"value\":\"710351\",\"children\":\"\"},{\"text\":\"西港\",\"value\":\"710352\",\"children\":\"\"},{\"text\":\"七股\",\"value\":\"710353\",\"children\":\"\"},{\"text\":\"将军\",\"value\":\"710354\",\"children\":\"\"},{\"text\":\"学甲\",\"value\":\"710355\",\"children\":\"\"},{\"text\":\"北门\",\"value\":\"710356\",\"children\":\"\"},{\"text\":\"新营\",\"value\":\"710357\",\"children\":\"\"},{\"text\":\"后壁\",\"value\":\"710358\",\"children\":\"\"},{\"text\":\"白河\",\"value\":\"710359\",\"children\":\"\"},{\"text\":\"东山\",\"value\":\"710360\",\"children\":\"\"},{\"text\":\"六甲\",\"value\":\"710361\",\"children\":\"\"},{\"text\":\"下营\",\"value\":\"710362\",\"children\":\"\"},{\"text\":\"柳营\",\"value\":\"710363\",\"children\":\"\"},{\"text\":\"盐水\",\"value\":\"710364\",\"children\":\"\"},{\"text\":\"善化\",\"value\":\"710365\",\"children\":\"\"},{\"text\":\"大内\",\"value\":\"710366\",\"children\":\"\"},{\"text\":\"山上\",\"value\":\"710367\",\"children\":\"\"},{\"text\":\"新市\",\"value\":\"710368\",\"children\":\"\"},{\"text\":\"安定\",\"value\":\"710369\",\"children\":\"\"}]},{\"text\":\"台中\",\"value\":\"710400\",\"children\":[{\"text\":\"中区\",\"value\":\"710401\",\"children\":\"\"},{\"text\":\"东区\",\"value\":\"710402\",\"children\":\"\"},{\"text\":\"南区\",\"value\":\"710403\",\"children\":\"\"},{\"text\":\"西区\",\"value\":\"710404\",\"children\":\"\"},{\"text\":\"北区\",\"value\":\"710405\",\"children\":\"\"},{\"text\":\"北屯\",\"value\":\"710406\",\"children\":\"\"},{\"text\":\"西屯\",\"value\":\"710407\",\"children\":\"\"},{\"text\":\"南屯\",\"value\":\"710408\",\"children\":\"\"},{\"text\":\"太平\",\"value\":\"710431\",\"children\":\"\"},{\"text\":\"大里\",\"value\":\"710432\",\"children\":\"\"},{\"text\":\"雾峰\",\"value\":\"710433\",\"children\":\"\"},{\"text\":\"乌日\",\"value\":\"710434\",\"children\":\"\"},{\"text\":\"丰原\",\"value\":\"710435\",\"children\":\"\"},{\"text\":\"后里\",\"value\":\"710436\",\"children\":\"\"},{\"text\":\"石冈\",\"value\":\"710437\",\"children\":\"\"},{\"text\":\"东势\",\"value\":\"710438\",\"children\":\"\"},{\"text\":\"和平\",\"value\":\"710439\",\"children\":\"\"},{\"text\":\"新社\",\"value\":\"710440\",\"children\":\"\"},{\"text\":\"潭子\",\"value\":\"710441\",\"children\":\"\"},{\"text\":\"大雅\",\"value\":\"710442\",\"children\":\"\"},{\"text\":\"神冈\",\"value\":\"710443\",\"children\":\"\"},{\"text\":\"大肚\",\"value\":\"710444\",\"children\":\"\"},{\"text\":\"沙鹿\",\"value\":\"710445\",\"children\":\"\"},{\"text\":\"龙井\",\"value\":\"710446\",\"children\":\"\"},{\"text\":\"梧栖\",\"value\":\"710447\",\"children\":\"\"},{\"text\":\"清水\",\"value\":\"710448\",\"children\":\"\"},{\"text\":\"大甲\",\"value\":\"710449\",\"children\":\"\"},{\"text\":\"外埔\",\"value\":\"710450\",\"children\":\"\"},{\"text\":\"大安\",\"value\":\"710451\",\"children\":\"\"}]},{\"text\":\"金门\",\"value\":\"710500\",\"children\":[{\"text\":\"金沙\",\"value\":\"710507\",\"children\":\"\"},{\"text\":\"金湖\",\"value\":\"710508\",\"children\":\"\"},{\"text\":\"金宁\",\"value\":\"710509\",\"children\":\"\"},{\"text\":\"金城\",\"value\":\"710510\",\"children\":\"\"},{\"text\":\"烈屿\",\"value\":\"710511\",\"children\":\"\"},{\"text\":\"乌坵\",\"value\":\"710512\",\"children\":\"\"}]},{\"text\":\"南投\",\"value\":\"710600\",\"children\":[{\"text\":\"南投\",\"value\":\"710614\",\"children\":\"\"},{\"text\":\"中寮\",\"value\":\"710615\",\"children\":\"\"},{\"text\":\"草屯\",\"value\":\"710616\",\"children\":\"\"},{\"text\":\"国姓\",\"value\":\"710617\",\"children\":\"\"},{\"text\":\"埔里\",\"value\":\"710618\",\"children\":\"\"},{\"text\":\"仁爱\",\"value\":\"710619\",\"children\":\"\"},{\"text\":\"名间\",\"value\":\"710620\",\"children\":\"\"},{\"text\":\"集集\",\"value\":\"710621\",\"children\":\"\"},{\"text\":\"水里\",\"value\":\"710622\",\"children\":\"\"},{\"text\":\"鱼池\",\"value\":\"710623\",\"children\":\"\"},{\"text\":\"信义\",\"value\":\"710624\",\"children\":\"\"},{\"text\":\"竹山\",\"value\":\"710625\",\"children\":\"\"},{\"text\":\"鹿谷\",\"value\":\"710626\",\"children\":\"\"}]},{\"text\":\"基隆\",\"value\":\"710700\",\"children\":[{\"text\":\"仁爱\",\"value\":\"710701\",\"children\":\"\"},{\"text\":\"信义\",\"value\":\"710702\",\"children\":\"\"},{\"text\":\"中正\",\"value\":\"710703\",\"children\":\"\"},{\"text\":\"中山\",\"value\":\"710704\",\"children\":\"\"},{\"text\":\"安乐\",\"value\":\"710705\",\"children\":\"\"},{\"text\":\"暖暖\",\"value\":\"710706\",\"children\":\"\"},{\"text\":\"七堵\",\"value\":\"710707\",\"children\":\"\"}]},{\"text\":\"新竹\",\"value\":\"710800\",\"children\":[{\"text\":\"东区\",\"value\":\"710801\",\"children\":\"\"},{\"text\":\"北区\",\"value\":\"710802\",\"children\":\"\"},{\"text\":\"香山\",\"value\":\"710803\",\"children\":\"\"}]},{\"text\":\"嘉义\",\"value\":\"710900\",\"children\":[{\"text\":\"东区\",\"value\":\"710901\",\"children\":\"\"},{\"text\":\"西区\",\"value\":\"710902\",\"children\":\"\"}]},{\"text\":\"新北\",\"value\":\"711100\",\"children\":[{\"text\":\"万里\",\"value\":\"711130\",\"children\":\"\"},{\"text\":\"金山\",\"value\":\"711131\",\"children\":\"\"},{\"text\":\"板桥\",\"value\":\"711132\",\"children\":\"\"},{\"text\":\"汐止\",\"value\":\"711133\",\"children\":\"\"},{\"text\":\"深坑\",\"value\":\"711134\",\"children\":\"\"},{\"text\":\"石碇\",\"value\":\"711135\",\"children\":\"\"},{\"text\":\"瑞芳\",\"value\":\"711136\",\"children\":\"\"},{\"text\":\"平溪\",\"value\":\"711137\",\"children\":\"\"},{\"text\":\"双溪\",\"value\":\"711138\",\"children\":\"\"},{\"text\":\"贡寮\",\"value\":\"711139\",\"children\":\"\"},{\"text\":\"新店\",\"value\":\"711140\",\"children\":\"\"},{\"text\":\"坪林\",\"value\":\"711141\",\"children\":\"\"},{\"text\":\"乌来\",\"value\":\"711142\",\"children\":\"\"},{\"text\":\"永和\",\"value\":\"711143\",\"children\":\"\"},{\"text\":\"中和\",\"value\":\"711144\",\"children\":\"\"},{\"text\":\"土城\",\"value\":\"711145\",\"children\":\"\"},{\"text\":\"三峡\",\"value\":\"711146\",\"children\":\"\"},{\"text\":\"树林\",\"value\":\"711147\",\"children\":\"\"},{\"text\":\"莺歌\",\"value\":\"711148\",\"children\":\"\"},{\"text\":\"三重\",\"value\":\"711149\",\"children\":\"\"},{\"text\":\"新庄\",\"value\":\"711150\",\"children\":\"\"},{\"text\":\"泰山\",\"value\":\"711151\",\"children\":\"\"},{\"text\":\"林口\",\"value\":\"711152\",\"children\":\"\"},{\"text\":\"芦洲\",\"value\":\"711153\",\"children\":\"\"},{\"text\":\"五股\",\"value\":\"711154\",\"children\":\"\"},{\"text\":\"八里\",\"value\":\"711155\",\"children\":\"\"},{\"text\":\"淡水\",\"value\":\"711156\",\"children\":\"\"},{\"text\":\"三芝\",\"value\":\"711157\",\"children\":\"\"},{\"text\":\"石门\",\"value\":\"711158\",\"children\":\"\"}]},{\"text\":\"宜兰\",\"value\":\"711200\",\"children\":[{\"text\":\"宜兰\",\"value\":\"711214\",\"children\":\"\"},{\"text\":\"头城\",\"value\":\"711215\",\"children\":\"\"},{\"text\":\"礁溪\",\"value\":\"711216\",\"children\":\"\"},{\"text\":\"壮围\",\"value\":\"711217\",\"children\":\"\"},{\"text\":\"员山\",\"value\":\"711218\",\"children\":\"\"},{\"text\":\"罗东\",\"value\":\"711219\",\"children\":\"\"},{\"text\":\"三星\",\"value\":\"711220\",\"children\":\"\"},{\"text\":\"大同\",\"value\":\"711221\",\"children\":\"\"},{\"text\":\"五结\",\"value\":\"711222\",\"children\":\"\"},{\"text\":\"冬山\",\"value\":\"711223\",\"children\":\"\"},{\"text\":\"苏澳\",\"value\":\"711224\",\"children\":\"\"},{\"text\":\"南澳\",\"value\":\"711225\",\"children\":\"\"},{\"text\":\"钓鱼\",\"value\":\"711226\",\"children\":\"\"}]},{\"text\":\"新竹\",\"value\":\"711300\",\"children\":[{\"text\":\"竹北\",\"value\":\"711314\",\"children\":\"\"},{\"text\":\"湖口\",\"value\":\"711315\",\"children\":\"\"},{\"text\":\"新丰\",\"value\":\"711316\",\"children\":\"\"},{\"text\":\"新埔\",\"value\":\"711317\",\"children\":\"\"},{\"text\":\"关西\",\"value\":\"711318\",\"children\":\"\"},{\"text\":\"芎林\",\"value\":\"711319\",\"children\":\"\"},{\"text\":\"宝山\",\"value\":\"711320\",\"children\":\"\"},{\"text\":\"竹东\",\"value\":\"711321\",\"children\":\"\"},{\"text\":\"五峰\",\"value\":\"711322\",\"children\":\"\"},{\"text\":\"横山\",\"value\":\"711323\",\"children\":\"\"},{\"text\":\"尖石\",\"value\":\"711324\",\"children\":\"\"},{\"text\":\"北埔\",\"value\":\"711325\",\"children\":\"\"},{\"text\":\"峨眉\",\"value\":\"711326\",\"children\":\"\"}]},{\"text\":\"桃园\",\"value\":\"711400\",\"children\":[{\"text\":\"中坜\",\"value\":\"711414\",\"children\":\"\"},{\"text\":\"平镇\",\"value\":\"711415\",\"children\":\"\"},{\"text\":\"龙潭\",\"value\":\"711416\",\"children\":\"\"},{\"text\":\"杨梅\",\"value\":\"711417\",\"children\":\"\"},{\"text\":\"新屋\",\"value\":\"711418\",\"children\":\"\"},{\"text\":\"观音\",\"value\":\"711419\",\"children\":\"\"},{\"text\":\"桃园\",\"value\":\"711420\",\"children\":\"\"},{\"text\":\"龟山\",\"value\":\"711421\",\"children\":\"\"},{\"text\":\"八德\",\"value\":\"711422\",\"children\":\"\"},{\"text\":\"大溪\",\"value\":\"711423\",\"children\":\"\"},{\"text\":\"复兴\",\"value\":\"711424\",\"children\":\"\"},{\"text\":\"大园\",\"value\":\"711425\",\"children\":\"\"},{\"text\":\"芦竹\",\"value\":\"711426\",\"children\":\"\"}]},{\"text\":\"苗栗\",\"value\":\"711500\",\"children\":[{\"text\":\"竹南\",\"value\":\"711519\",\"children\":\"\"},{\"text\":\"头份\",\"value\":\"711520\",\"children\":\"\"},{\"text\":\"三湾\",\"value\":\"711521\",\"children\":\"\"},{\"text\":\"南庄\",\"value\":\"711522\",\"children\":\"\"},{\"text\":\"狮潭\",\"value\":\"711523\",\"children\":\"\"},{\"text\":\"后龙\",\"value\":\"711524\",\"children\":\"\"},{\"text\":\"通霄\",\"value\":\"711525\",\"children\":\"\"},{\"text\":\"苑里\",\"value\":\"711526\",\"children\":\"\"},{\"text\":\"苗栗\",\"value\":\"711527\",\"children\":\"\"},{\"text\":\"造桥\",\"value\":\"711528\",\"children\":\"\"},{\"text\":\"头屋\",\"value\":\"711529\",\"children\":\"\"},{\"text\":\"公馆\",\"value\":\"711530\",\"children\":\"\"},{\"text\":\"大湖\",\"value\":\"711531\",\"children\":\"\"},{\"text\":\"泰安\",\"value\":\"711532\",\"children\":\"\"},{\"text\":\"铜锣\",\"value\":\"711533\",\"children\":\"\"},{\"text\":\"三义\",\"value\":\"711534\",\"children\":\"\"},{\"text\":\"西湖\",\"value\":\"711535\",\"children\":\"\"},{\"text\":\"卓兰\",\"value\":\"711536\",\"children\":\"\"}]},{\"text\":\"彰化\",\"value\":\"711700\",\"children\":[{\"text\":\"彰化\",\"value\":\"711727\",\"children\":\"\"},{\"text\":\"芬园\",\"value\":\"711728\",\"children\":\"\"},{\"text\":\"花坛\",\"value\":\"711729\",\"children\":\"\"},{\"text\":\"秀水\",\"value\":\"711730\",\"children\":\"\"},{\"text\":\"鹿港\",\"value\":\"711731\",\"children\":\"\"},{\"text\":\"福兴\",\"value\":\"711732\",\"children\":\"\"},{\"text\":\"线西\",\"value\":\"711733\",\"children\":\"\"},{\"text\":\"和美\",\"value\":\"711734\",\"children\":\"\"},{\"text\":\"伸港\",\"value\":\"711735\",\"children\":\"\"},{\"text\":\"员林\",\"value\":\"711736\",\"children\":\"\"},{\"text\":\"社头\",\"value\":\"711737\",\"children\":\"\"},{\"text\":\"永靖\",\"value\":\"711738\",\"children\":\"\"},{\"text\":\"埔心\",\"value\":\"711739\",\"children\":\"\"},{\"text\":\"溪湖\",\"value\":\"711740\",\"children\":\"\"},{\"text\":\"大村\",\"value\":\"711741\",\"children\":\"\"},{\"text\":\"埔盐\",\"value\":\"711742\",\"children\":\"\"},{\"text\":\"田中\",\"value\":\"711743\",\"children\":\"\"},{\"text\":\"北斗\",\"value\":\"711744\",\"children\":\"\"},{\"text\":\"田尾\",\"value\":\"711745\",\"children\":\"\"},{\"text\":\"埤头\",\"value\":\"711746\",\"children\":\"\"},{\"text\":\"溪州\",\"value\":\"711747\",\"children\":\"\"},{\"text\":\"竹塘\",\"value\":\"711748\",\"children\":\"\"},{\"text\":\"二林\",\"value\":\"711749\",\"children\":\"\"},{\"text\":\"大城\",\"value\":\"711750\",\"children\":\"\"},{\"text\":\"芳苑\",\"value\":\"711751\",\"children\":\"\"},{\"text\":\"二水\",\"value\":\"711752\",\"children\":\"\"}]},{\"text\":\"嘉义\",\"value\":\"711900\",\"children\":[{\"text\":\"番路\",\"value\":\"711919\",\"children\":\"\"},{\"text\":\"梅山\",\"value\":\"711920\",\"children\":\"\"},{\"text\":\"竹崎\",\"value\":\"711921\",\"children\":\"\"},{\"text\":\"阿里山\",\"value\":\"711922\",\"children\":\"\"},{\"text\":\"中埔\",\"value\":\"711923\",\"children\":\"\"},{\"text\":\"大埔\",\"value\":\"711924\",\"children\":\"\"},{\"text\":\"水上\",\"value\":\"711925\",\"children\":\"\"},{\"text\":\"鹿草\",\"value\":\"711926\",\"children\":\"\"},{\"text\":\"太保\",\"value\":\"711927\",\"children\":\"\"},{\"text\":\"朴子\",\"value\":\"711928\",\"children\":\"\"},{\"text\":\"东石\",\"value\":\"711929\",\"children\":\"\"},{\"text\":\"六脚\",\"value\":\"711930\",\"children\":\"\"},{\"text\":\"新港\",\"value\":\"711931\",\"children\":\"\"},{\"text\":\"民雄\",\"value\":\"711932\",\"children\":\"\"},{\"text\":\"大林\",\"value\":\"711933\",\"children\":\"\"},{\"text\":\"溪口\",\"value\":\"711934\",\"children\":\"\"},{\"text\":\"义竹\",\"value\":\"711935\",\"children\":\"\"},{\"text\":\"布袋\",\"value\":\"711936\",\"children\":\"\"}]},{\"text\":\"云林\",\"value\":\"712100\",\"children\":[{\"text\":\"斗南\",\"value\":\"712121\",\"children\":\"\"},{\"text\":\"大埤\",\"value\":\"712122\",\"children\":\"\"},{\"text\":\"虎尾\",\"value\":\"712123\",\"children\":\"\"},{\"text\":\"土库\",\"value\":\"712124\",\"children\":\"\"},{\"text\":\"褒忠\",\"value\":\"712125\",\"children\":\"\"},{\"text\":\"东势\",\"value\":\"712126\",\"children\":\"\"},{\"text\":\"台西\",\"value\":\"712127\",\"children\":\"\"},{\"text\":\"仑背\",\"value\":\"712128\",\"children\":\"\"},{\"text\":\"麦寮\",\"value\":\"712129\",\"children\":\"\"},{\"text\":\"斗六\",\"value\":\"712130\",\"children\":\"\"},{\"text\":\"林内\",\"value\":\"712131\",\"children\":\"\"},{\"text\":\"古坑\",\"value\":\"712132\",\"children\":\"\"},{\"text\":\"莿桐\",\"value\":\"712133\",\"children\":\"\"},{\"text\":\"西螺\",\"value\":\"712134\",\"children\":\"\"},{\"text\":\"二仑\",\"value\":\"712135\",\"children\":\"\"},{\"text\":\"北港\",\"value\":\"712136\",\"children\":\"\"},{\"text\":\"水林\",\"value\":\"712137\",\"children\":\"\"},{\"text\":\"口湖\",\"value\":\"712138\",\"children\":\"\"},{\"text\":\"四湖\",\"value\":\"712139\",\"children\":\"\"},{\"text\":\"元长\",\"value\":\"712140\",\"children\":\"\"}]},{\"text\":\"屏东\",\"value\":\"712400\",\"children\":[{\"text\":\"屏东\",\"value\":\"712434\",\"children\":\"\"},{\"text\":\"三地门\",\"value\":\"712435\",\"children\":\"\"},{\"text\":\"雾台\",\"value\":\"712436\",\"children\":\"\"},{\"text\":\"玛家\",\"value\":\"712437\",\"children\":\"\"},{\"text\":\"九如\",\"value\":\"712438\",\"children\":\"\"},{\"text\":\"里港\",\"value\":\"712439\",\"children\":\"\"},{\"text\":\"高树\",\"value\":\"712440\",\"children\":\"\"},{\"text\":\"盐埔\",\"value\":\"712441\",\"children\":\"\"},{\"text\":\"长治\",\"value\":\"712442\",\"children\":\"\"},{\"text\":\"麟洛\",\"value\":\"712443\",\"children\":\"\"},{\"text\":\"竹田\",\"value\":\"712444\",\"children\":\"\"},{\"text\":\"内埔\",\"value\":\"712445\",\"children\":\"\"},{\"text\":\"万丹\",\"value\":\"712446\",\"children\":\"\"},{\"text\":\"潮州\",\"value\":\"712447\",\"children\":\"\"},{\"text\":\"泰武\",\"value\":\"712448\",\"children\":\"\"},{\"text\":\"来义\",\"value\":\"712449\",\"children\":\"\"},{\"text\":\"万峦\",\"value\":\"712450\",\"children\":\"\"},{\"text\":\"崁顶\",\"value\":\"712451\",\"children\":\"\"},{\"text\":\"新埤\",\"value\":\"712452\",\"children\":\"\"},{\"text\":\"南州\",\"value\":\"712453\",\"children\":\"\"},{\"text\":\"林边\",\"value\":\"712454\",\"children\":\"\"},{\"text\":\"东港\",\"value\":\"712455\",\"children\":\"\"},{\"text\":\"琉球\",\"value\":\"712456\",\"children\":\"\"},{\"text\":\"佳冬\",\"value\":\"712457\",\"children\":\"\"},{\"text\":\"新园\",\"value\":\"712458\",\"children\":\"\"},{\"text\":\"枋寮\",\"value\":\"712459\",\"children\":\"\"},{\"text\":\"枋山\",\"value\":\"712460\",\"children\":\"\"},{\"text\":\"春日\",\"value\":\"712461\",\"children\":\"\"},{\"text\":\"狮子\",\"value\":\"712462\",\"children\":\"\"},{\"text\":\"车城\",\"value\":\"712463\",\"children\":\"\"},{\"text\":\"牡丹\",\"value\":\"712464\",\"children\":\"\"},{\"text\":\"恒春\",\"value\":\"712465\",\"children\":\"\"},{\"text\":\"满州\",\"value\":\"712466\",\"children\":\"\"}]},{\"text\":\"台东\",\"value\":\"712500\",\"children\":[{\"text\":\"台东\",\"value\":\"712517\",\"children\":\"\"},{\"text\":\"绿岛\",\"value\":\"712518\",\"children\":\"\"},{\"text\":\"兰屿\",\"value\":\"712519\",\"children\":\"\"},{\"text\":\"延平\",\"value\":\"712520\",\"children\":\"\"},{\"text\":\"卑南\",\"value\":\"712521\",\"children\":\"\"},{\"text\":\"鹿野\",\"value\":\"712522\",\"children\":\"\"},{\"text\":\"关山\",\"value\":\"712523\",\"children\":\"\"},{\"text\":\"海端\",\"value\":\"712524\",\"children\":\"\"},{\"text\":\"池上\",\"value\":\"712525\",\"children\":\"\"},{\"text\":\"东河\",\"value\":\"712526\",\"children\":\"\"},{\"text\":\"成功\",\"value\":\"712527\",\"children\":\"\"},{\"text\":\"长滨\",\"value\":\"712528\",\"children\":\"\"},{\"text\":\"金峰\",\"value\":\"712529\",\"children\":\"\"},{\"text\":\"大武\",\"value\":\"712530\",\"children\":\"\"},{\"text\":\"达仁\",\"value\":\"712531\",\"children\":\"\"},{\"text\":\"太麻里\",\"value\":\"712532\",\"children\":\"\"}]},{\"text\":\"花莲\",\"value\":\"712600\",\"children\":[{\"text\":\"花莲\",\"value\":\"712615\",\"children\":\"\"},{\"text\":\"新城\",\"value\":\"712616\",\"children\":\"\"},{\"text\":\"太鲁\",\"value\":\"712617\",\"children\":\"\"},{\"text\":\"秀林\",\"value\":\"712618\",\"children\":\"\"},{\"text\":\"吉安\",\"value\":\"712619\",\"children\":\"\"},{\"text\":\"寿丰\",\"value\":\"712620\",\"children\":\"\"},{\"text\":\"凤林\",\"value\":\"712621\",\"children\":\"\"},{\"text\":\"光复\",\"value\":\"712622\",\"children\":\"\"},{\"text\":\"丰滨\",\"value\":\"712623\",\"children\":\"\"},{\"text\":\"瑞穗\",\"value\":\"712624\",\"children\":\"\"},{\"text\":\"万荣\",\"value\":\"712625\",\"children\":\"\"},{\"text\":\"玉里\",\"value\":\"712626\",\"children\":\"\"},{\"text\":\"卓溪\",\"value\":\"712627\",\"children\":\"\"},{\"text\":\"富里\",\"value\":\"712628\",\"children\":\"\"}]},{\"text\":\"澎湖\",\"value\":\"712700\",\"children\":[{\"text\":\"马公\",\"value\":\"712707\",\"children\":\"\"},{\"text\":\"西屿\",\"value\":\"712708\",\"children\":\"\"},{\"text\":\"望安\",\"value\":\"712709\",\"children\":\"\"},{\"text\":\"七美\",\"value\":\"712710\",\"children\":\"\"},{\"text\":\"白沙\",\"value\":\"712711\",\"children\":\"\"},{\"text\":\"湖西\",\"value\":\"712712\",\"children\":\"\"}]},{\"text\":\"连江\",\"value\":\"712800\",\"children\":[{\"text\":\"南竿\",\"value\":\"712805\",\"children\":\"\"},{\"text\":\"北竿\",\"value\":\"712806\",\"children\":\"\"},{\"text\":\"莒光\",\"value\":\"712807\",\"children\":\"\"},{\"text\":\"东引\",\"value\":\"712808\",\"children\":\"\"}]}]},{\"text\":\"香港\",\"value\":\"810000\",\"children\":[{\"text\":\"香港岛\",\"value\":\"810100\",\"children\":[{\"text\":\"中西\",\"value\":\"810101\",\"children\":\"\"},{\"text\":\"湾仔\",\"value\":\"810102\",\"children\":\"\"},{\"text\":\"东区\",\"value\":\"810103\",\"children\":\"\"},{\"text\":\"南区\",\"value\":\"810104\",\"children\":\"\"}]},{\"text\":\"九龙\",\"value\":\"810200\",\"children\":[{\"text\":\"九龙城\",\"value\":\"810201\",\"children\":\"\"},{\"text\":\"油尖旺\",\"value\":\"810202\",\"children\":\"\"},{\"text\":\"深水埗\",\"value\":\"810203\",\"children\":\"\"},{\"text\":\"黄大仙\",\"value\":\"810204\",\"children\":\"\"},{\"text\":\"观塘\",\"value\":\"810205\",\"children\":\"\"}]},{\"text\":\"新界\",\"value\":\"810300\",\"children\":[{\"text\":\"北区\",\"value\":\"810301\",\"children\":\"\"},{\"text\":\"大埔\",\"value\":\"810302\",\"children\":\"\"},{\"text\":\"沙田\",\"value\":\"810303\",\"children\":\"\"},{\"text\":\"西贡\",\"value\":\"810304\",\"children\":\"\"},{\"text\":\"元朗\",\"value\":\"810305\",\"children\":\"\"},{\"text\":\"屯门\",\"value\":\"810306\",\"children\":\"\"},{\"text\":\"荃湾\",\"value\":\"810307\",\"children\":\"\"},{\"text\":\"葵青\",\"value\":\"810308\",\"children\":\"\"},{\"text\":\"离岛\",\"value\":\"810309\",\"children\":\"\"}]}]},{\"text\":\"澳门\",\"value\":\"820000\",\"children\":[{\"text\":\"澳门半岛\",\"value\":\"820100\",\"children\":[{\"text\":\"澳门半岛\",\"value\":\"820100\",\"children\":\"\"}]},{\"text\":\"离岛\",\"value\":\"820200\",\"children\":[{\"text\":\"离岛\",\"value\":\"820200\",\"children\":\"\"}]}]}]");

/***/ }),

/***/ "48a6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0b8b");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("792238bd", content, true, {"sourceMap":false,"shadowMode":false});

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

/***/ "545e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9898");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7811fdda", content, true, {"sourceMap":false,"shadowMode":false});

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

/***/ "60a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2c1af4b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("545e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2c1af4b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2c1af4b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


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

/***/ "7473":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".el-drawer__body .el-scrollbar__wrap{overflow-x:hidden}.moreSearchDrawer .el-drawer__header{margin-bottom:10px}.moreSearchDrawer .el-drawer__header>span{border:none}.moreSearchDrawer .el-drawer__header .el-drawer__close-btn,.moreSearchDrawer .el-drawer__header .el-icon-close{border:none!important}.moreSearchDrawer .el-drawer__header .drawerHeader{position:relative;padding-bottom:20px}.moreSearchDrawer .el-drawer__header .drawerHeader .drawerClose{cursor:pointer;float:right}.moreSearchDrawer .el-drawer__header .drawerHeader:after{content:\"\";position:absolute;border-bottom:1px solid #e8e8e8;width:calc(100% + 40px);left:-20px;bottom:0}.moreSearchDrawer .el-drawer__body{padding:15px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8096":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("139c");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("ba6af206", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "851d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("978d");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("38eda053", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "86e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_e6caa1ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e41f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_e6caa1ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_e6caa1ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "9152":
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "9184":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".com-dialog .el-dialog__header{padding:16px 24px;border-bottom:1px solid #e8e8e8}.com-dialog .el-dialog__body{padding:24px}.com-dialog .el-dialog__body .el-table__empty-block{width:auto!important}.com-dialog .el-dialog__footer{border-top:1px solid #e8e8e8;padding:10px 16px;height:auto}.com-dialog .el-dialog__footer .el-button{padding:8px 20px}.com-dialog .dialog__icon{position:absolute;top:22px;right:45px;font-size:12px;color:#909399;cursor:pointer;transition:color .2s}.com-dialog .dialog__icon:hover{color:#409eff}.com-dialog__header{display:flex;align-items:center}.com-dialog .justify-content-c{justify-content:center}.com-dialog__content .content__wrap{padding-right:10px}.com-dialog__content .el-scrollbar__wrap{padding:10px 0;max-height:500px;min-height:100px;overflow-x:hidden}.com-dialog__content--fullscreen .el-scrollbar__wrap{max-height:calc(100vh - 166px);min-height:100px;overflow-x:hidden;padding:10px 0}.com-dialog__content--footer .el-scrollbar__wrap{max-height:calc(100vh - 186px);min-height:100px;padding:10px 0;overflow-x:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vue-element-pro-components\",\"description\":\"This is a vue2、element-ui based component library\",\"version\":\"0.8.0\",\"author\":\"Fangkang\",\"license\":\"MIT\",\"keywords\":[\"component\",\"vue\",\"form\",\"element-ui\",\"table\",\"search\",\"dialog\"],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/fang-kang/vue-element-pro-components\"},\"main\":\"lib/VueElementProComponents.common.js\",\"unpkg\":\"lib/VueElementProComponents.umd.min.js\",\"scripts\":{\"serve\":\"vue-cli-service serve\",\"build\":\"vue-cli-service build\",\"lint\":\"vue-cli-service lint\",\"docs:dev\":\"vuepress dev docs\",\"docs:build\":\"vuepress build docs\",\"build-bundle\":\"vue-cli-service build --target lib --name VueElementProComponents --dest lib ./packages/index.js\"},\"dependencies\":{\"clipboard\":\"^2.0.10\",\"core-js\":\"^3.6.5\",\"element-ui\":\"^2.15.6\",\"lodash-es\":\"^4.17.21\",\"quill\":\"^1.3.7\",\"vue\":\"^2.6.11\",\"vue-fragment\":\"^1.5.2\",\"vue-router\":\"^3.2.0\"},\"devDependencies\":{\"@vitejs/plugin-vue-jsx\":\"^1.3.3\",\"@vue/cli-plugin-babel\":\"~4.5.12\",\"@vue/cli-plugin-eslint\":\"~4.5.12\",\"@vue/cli-plugin-router\":\"~4.5.12\",\"@vue/cli-plugin-vuex\":\"~4.5.12\",\"@vue/cli-service\":\"~4.5.12\",\"@vuepress/plugin-search\":\"^2.0.0-beta.35\",\"@vuepress/theme-default\":\"^2.0.0-beta.35\",\"@yanyu-fe/vuepress-plugin-code-block\":\"^0.0.12\",\"babel-eslint\":\"^10.1.0\",\"babel-plugin-component\":\"^1.1.1\",\"eslint\":\"^6.7.2\",\"eslint-plugin-vue\":\"^6.2.2\",\"sass\":\"^1.26.5\",\"sass-loader\":\"^8.0.2\",\"vue-template-compiler\":\"^2.6.11\",\"vuepress\":\"^2.0.0-beta.36\"},\"eslintConfig\":{\"root\":true,\"env\":{\"node\":true},\"extends\":[\"plugin:vue/essential\",\"eslint:recommended\"],\"parserOptions\":{\"parser\":\"babel-eslint\"},\"rules\":{}},\"browserslist\":[\"> 1%\",\"last 2 versions\",\"not dead\"]}");

/***/ }),

/***/ "9339":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(17);
var format_1 = __webpack_require__(18);
var leaf_1 = __webpack_require__(19);
var scroll_1 = __webpack_require__(45);
var inline_1 = __webpack_require__(46);
var block_1 = __webpack_require__(47);
var embed_1 = __webpack_require__(48);
var text_1 = __webpack_require__(49);
var attributor_1 = __webpack_require__(12);
var class_1 = __webpack_require__(32);
var style_1 = __webpack_require__(33);
var store_1 = __webpack_require__(31);
var Registry = __webpack_require__(1);
var Parchment = {
    Scope: Registry.Scope,
    create: Registry.create,
    find: Registry.find,
    query: Registry.query,
    register: Registry.register,
    Container: container_1.default,
    Format: format_1.default,
    Leaf: leaf_1.default,
    Embed: embed_1.default,
    Scroll: scroll_1.default,
    Block: block_1.default,
    Inline: inline_1.default,
    Text: text_1.default,
    Attributor: {
        Attribute: attributor_1.default,
        Class: class_1.default,
        Style: style_1.default,
        Store: store_1.default,
    },
};
exports.default = Parchment;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ParchmentError = /** @class */ (function (_super) {
    __extends(ParchmentError, _super);
    function ParchmentError(message) {
        var _this = this;
        message = '[Parchment] ' + message;
        _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _this.constructor.name;
        return _this;
    }
    return ParchmentError;
}(Error));
exports.ParchmentError = ParchmentError;
var attributes = {};
var classes = {};
var tags = {};
var types = {};
exports.DATA_KEY = '__blot';
var Scope;
(function (Scope) {
    Scope[Scope["TYPE"] = 3] = "TYPE";
    Scope[Scope["LEVEL"] = 12] = "LEVEL";
    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
    Scope[Scope["BLOT"] = 14] = "BLOT";
    Scope[Scope["INLINE"] = 7] = "INLINE";
    Scope[Scope["BLOCK"] = 11] = "BLOCK";
    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
    Scope[Scope["ANY"] = 15] = "ANY";
})(Scope = exports.Scope || (exports.Scope = {}));
function create(input, value) {
    var match = query(input);
    if (match == null) {
        throw new ParchmentError("Unable to create " + input + " blot");
    }
    var BlotClass = match;
    var node = 
    // @ts-ignore
    input instanceof Node || input['nodeType'] === Node.TEXT_NODE ? input : BlotClass.create(value);
    return new BlotClass(node, value);
}
exports.create = create;
function find(node, bubble) {
    if (bubble === void 0) { bubble = false; }
    if (node == null)
        return null;
    // @ts-ignore
    if (node[exports.DATA_KEY] != null)
        return node[exports.DATA_KEY].blot;
    if (bubble)
        return find(node.parentNode, bubble);
    return null;
}
exports.find = find;
function query(query, scope) {
    if (scope === void 0) { scope = Scope.ANY; }
    var match;
    if (typeof query === 'string') {
        match = types[query] || attributes[query];
        // @ts-ignore
    }
    else if (query instanceof Text || query['nodeType'] === Node.TEXT_NODE) {
        match = types['text'];
    }
    else if (typeof query === 'number') {
        if (query & Scope.LEVEL & Scope.BLOCK) {
            match = types['block'];
        }
        else if (query & Scope.LEVEL & Scope.INLINE) {
            match = types['inline'];
        }
    }
    else if (query instanceof HTMLElement) {
        var names = (query.getAttribute('class') || '').split(/\s+/);
        for (var i in names) {
            match = classes[names[i]];
            if (match)
                break;
        }
        match = match || tags[query.tagName];
    }
    if (match == null)
        return null;
    // @ts-ignore
    if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope)
        return match;
    return null;
}
exports.query = query;
function register() {
    var Definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Definitions[_i] = arguments[_i];
    }
    if (Definitions.length > 1) {
        return Definitions.map(function (d) {
            return register(d);
        });
    }
    var Definition = Definitions[0];
    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
        throw new ParchmentError('Invalid definition');
    }
    else if (Definition.blotName === 'abstract') {
        throw new ParchmentError('Cannot register abstract class');
    }
    types[Definition.blotName || Definition.attrName] = Definition;
    if (typeof Definition.keyName === 'string') {
        attributes[Definition.keyName] = Definition;
    }
    else {
        if (Definition.className != null) {
            classes[Definition.className] = Definition;
        }
        if (Definition.tagName != null) {
            if (Array.isArray(Definition.tagName)) {
                Definition.tagName = Definition.tagName.map(function (tagName) {
                    return tagName.toUpperCase();
                });
            }
            else {
                Definition.tagName = Definition.tagName.toUpperCase();
            }
            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
            tagNames.forEach(function (tag) {
                if (tags[tag] == null || Definition.className == null) {
                    tags[tag] = Definition;
                }
            });
        }
    }
    return Definition;
}
exports.register = register;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var diff = __webpack_require__(51);
var equal = __webpack_require__(11);
var extend = __webpack_require__(3);
var op = __webpack_require__(20);


var NULL_CHARACTER = String.fromCharCode(0);  // Placeholder char for embed in diff()


var Delta = function (ops) {
  // Assume we are given a well formed ops
  if (Array.isArray(ops)) {
    this.ops = ops;
  } else if (ops != null && Array.isArray(ops.ops)) {
    this.ops = ops.ops;
  } else {
    this.ops = [];
  }
};


Delta.prototype.insert = function (text, attributes) {
  var newOp = {};
  if (text.length === 0) return this;
  newOp.insert = text;
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype['delete'] = function (length) {
  if (length <= 0) return this;
  return this.push({ 'delete': length });
};

Delta.prototype.retain = function (length, attributes) {
  if (length <= 0) return this;
  var newOp = { retain: length };
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype.push = function (newOp) {
  var index = this.ops.length;
  var lastOp = this.ops[index - 1];
  newOp = extend(true, {}, newOp);
  if (typeof lastOp === 'object') {
    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
      this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
      return this;
    }
    // Since it does not matter if we insert before or after deleting at the same index,
    // always prefer to insert first
    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
      index -= 1;
      lastOp = this.ops[index - 1];
      if (typeof lastOp !== 'object') {
        this.ops.unshift(newOp);
        return this;
      }
    }
    if (equal(newOp.attributes, lastOp.attributes)) {
      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      }
    }
  }
  if (index === this.ops.length) {
    this.ops.push(newOp);
  } else {
    this.ops.splice(index, 0, newOp);
  }
  return this;
};

Delta.prototype.chop = function () {
  var lastOp = this.ops[this.ops.length - 1];
  if (lastOp && lastOp.retain && !lastOp.attributes) {
    this.ops.pop();
  }
  return this;
};

Delta.prototype.filter = function (predicate) {
  return this.ops.filter(predicate);
};

Delta.prototype.forEach = function (predicate) {
  this.ops.forEach(predicate);
};

Delta.prototype.map = function (predicate) {
  return this.ops.map(predicate);
};

Delta.prototype.partition = function (predicate) {
  var passed = [], failed = [];
  this.forEach(function(op) {
    var target = predicate(op) ? passed : failed;
    target.push(op);
  });
  return [passed, failed];
};

Delta.prototype.reduce = function (predicate, initial) {
  return this.ops.reduce(predicate, initial);
};

Delta.prototype.changeLength = function () {
  return this.reduce(function (length, elem) {
    if (elem.insert) {
      return length + op.length(elem);
    } else if (elem.delete) {
      return length - elem.delete;
    }
    return length;
  }, 0);
};

Delta.prototype.length = function () {
  return this.reduce(function (length, elem) {
    return length + op.length(elem);
  }, 0);
};

Delta.prototype.slice = function (start, end) {
  start = start || 0;
  if (typeof end !== 'number') end = Infinity;
  var ops = [];
  var iter = op.iterator(this.ops);
  var index = 0;
  while (index < end && iter.hasNext()) {
    var nextOp;
    if (index < start) {
      nextOp = iter.next(start - index);
    } else {
      nextOp = iter.next(end - index);
      ops.push(nextOp);
    }
    index += op.length(nextOp);
  }
  return new Delta(ops);
};


Delta.prototype.compose = function (other) {
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var ops = [];
  var firstOther = otherIter.peek();
  if (firstOther != null && typeof firstOther.retain === 'number' && firstOther.attributes == null) {
    var firstLeft = firstOther.retain;
    while (thisIter.peekType() === 'insert' && thisIter.peekLength() <= firstLeft) {
      firstLeft -= thisIter.peekLength();
      ops.push(thisIter.next());
    }
    if (firstOther.retain - firstLeft > 0) {
      otherIter.next(firstOther.retain - firstLeft);
    }
  }
  var delta = new Delta(ops);
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else if (thisIter.peekType() === 'delete') {
      delta.push(thisIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (typeof otherOp.retain === 'number') {
        var newOp = {};
        if (typeof thisOp.retain === 'number') {
          newOp.retain = length;
        } else {
          newOp.insert = thisOp.insert;
        }
        // Preserve null when composing with a retain, otherwise remove it for inserts
        var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
        if (attributes) newOp.attributes = attributes;
        delta.push(newOp);

        // Optimization if rest of other is just retain
        if (!otherIter.hasNext() && equal(delta.ops[delta.ops.length - 1], newOp)) {
          var rest = new Delta(thisIter.rest());
          return delta.concat(rest).chop();
        }

      // Other op should be delete, we could be an insert or retain
      // Insert + delete cancels out
      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
        delta.push(otherOp);
      }
    }
  }
  return delta.chop();
};

Delta.prototype.concat = function (other) {
  var delta = new Delta(this.ops.slice());
  if (other.ops.length > 0) {
    delta.push(other.ops[0]);
    delta.ops = delta.ops.concat(other.ops.slice(1));
  }
  return delta;
};

Delta.prototype.diff = function (other, index) {
  if (this.ops === other.ops) {
    return new Delta();
  }
  var strings = [this, other].map(function (delta) {
    return delta.map(function (op) {
      if (op.insert != null) {
        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
      }
      var prep = (delta === other) ? 'on' : 'with';
      throw new Error('diff() called ' + prep + ' non-document');
    }).join('');
  });
  var delta = new Delta();
  var diffResult = diff(strings[0], strings[1], index);
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  diffResult.forEach(function (component) {
    var length = component[1].length;
    while (length > 0) {
      var opLength = 0;
      switch (component[0]) {
        case diff.INSERT:
          opLength = Math.min(otherIter.peekLength(), length);
          delta.push(otherIter.next(opLength));
          break;
        case diff.DELETE:
          opLength = Math.min(length, thisIter.peekLength());
          thisIter.next(opLength);
          delta['delete'](opLength);
          break;
        case diff.EQUAL:
          opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
          var thisOp = thisIter.next(opLength);
          var otherOp = otherIter.next(opLength);
          if (equal(thisOp.insert, otherOp.insert)) {
            delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
          } else {
            delta.push(otherOp)['delete'](opLength);
          }
          break;
      }
      length -= opLength;
    }
  });
  return delta.chop();
};

Delta.prototype.eachLine = function (predicate, newline) {
  newline = newline || '\n';
  var iter = op.iterator(this.ops);
  var line = new Delta();
  var i = 0;
  while (iter.hasNext()) {
    if (iter.peekType() !== 'insert') return;
    var thisOp = iter.peek();
    var start = op.length(thisOp) - iter.peekLength();
    var index = typeof thisOp.insert === 'string' ?
      thisOp.insert.indexOf(newline, start) - start : -1;
    if (index < 0) {
      line.push(iter.next());
    } else if (index > 0) {
      line.push(iter.next(index));
    } else {
      if (predicate(line, iter.next(1).attributes || {}, i) === false) {
        return;
      }
      i += 1;
      line = new Delta();
    }
  }
  if (line.length() > 0) {
    predicate(line, {}, i);
  }
};

Delta.prototype.transform = function (other, priority) {
  priority = !!priority;
  if (typeof other === 'number') {
    return this.transformPosition(other, priority);
  }
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var delta = new Delta();
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
      delta.retain(op.length(thisIter.next()));
    } else if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (thisOp['delete']) {
        // Our delete either makes their delete redundant or removes their retain
        continue;
      } else if (otherOp['delete']) {
        delta.push(otherOp);
      } else {
        // We retain either their retain or insert
        delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
      }
    }
  }
  return delta.chop();
};

Delta.prototype.transformPosition = function (index, priority) {
  priority = !!priority;
  var thisIter = op.iterator(this.ops);
  var offset = 0;
  while (thisIter.hasNext() && offset <= index) {
    var length = thisIter.peekLength();
    var nextType = thisIter.peekType();
    thisIter.next();
    if (nextType === 'delete') {
      index -= Math.min(length, index - offset);
      continue;
    } else if (nextType === 'insert' && (offset < index || !priority)) {
      index += length;
    }
    offset += length;
  }
  return index;
};


module.exports = Delta;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NEWLINE_LENGTH = 1;

var BlockEmbed = function (_Parchment$Embed) {
  _inherits(BlockEmbed, _Parchment$Embed);

  function BlockEmbed() {
    _classCallCheck(this, BlockEmbed);

    return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
  }

  _createClass(BlockEmbed, [{
    key: 'attach',
    value: function attach() {
      _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
      this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
    }
  }, {
    key: 'delta',
    value: function delta() {
      return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
      if (attribute != null) {
        this.attributes.attribute(attribute, value);
      }
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      this.format(name, value);
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (typeof value === 'string' && value.endsWith('\n')) {
        var block = _parchment2.default.create(Block.blotName);
        this.parent.insertBefore(block, index === 0 ? this : this.next);
        block.insertAt(0, value.slice(0, -1));
      } else {
        _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
      }
    }
  }]);

  return BlockEmbed;
}(_parchment2.default.Embed);

BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
// It is important for cursor behavior BlockEmbeds use tags that are block level elements


var Block = function (_Parchment$Block) {
  _inherits(Block, _Parchment$Block);

  function Block(domNode) {
    _classCallCheck(this, Block);

    var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

    _this2.cache = {};
    return _this2;
  }

  _createClass(Block, [{
    key: 'delta',
    value: function delta() {
      if (this.cache.delta == null) {
        this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
          if (leaf.length() === 0) {
            return delta;
          } else {
            return delta.insert(leaf.value(), bubbleFormats(leaf));
          }
        }, new _quillDelta2.default()).insert('\n', bubbleFormats(this));
      }
      return this.cache.delta;
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);
      this.cache = {};
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length <= 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
        if (index + length === this.length()) {
          this.format(name, value);
        }
      } else {
        _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
      }
      this.cache = {};
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
      if (value.length === 0) return;
      var lines = value.split('\n');
      var text = lines.shift();
      if (text.length > 0) {
        if (index < this.length() - 1 || this.children.tail == null) {
          _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
        } else {
          this.children.tail.insertAt(this.children.tail.length(), text);
        }
        this.cache = {};
      }
      var block = this;
      lines.reduce(function (index, line) {
        block = block.split(index, true);
        block.insertAt(0, line);
        return line.length;
      }, index + text.length);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      var head = this.children.head;
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
      if (head instanceof _break2.default) {
        head.remove();
      }
      this.cache = {};
    }
  }, {
    key: 'length',
    value: function length() {
      if (this.cache.length == null) {
        this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
      }
      return this.cache.length;
    }
  }, {
    key: 'moveChildren',
    value: function moveChildren(target, ref) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);
      this.cache = {};
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this, context);
      this.cache = {};
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);
      this.cache = {};
    }
  }, {
    key: 'split',
    value: function split(index) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
        var clone = this.clone();
        if (index === 0) {
          this.parent.insertBefore(clone, this);
          return this;
        } else {
          this.parent.insertBefore(clone, this.next);
          return clone;
        }
      } else {
        var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
        this.cache = {};
        return next;
      }
    }
  }]);

  return Block;
}(_parchment2.default.Block);

Block.blotName = 'block';
Block.tagName = 'P';
Block.defaultChild = 'break';
Block.allowedChildren = [_inline2.default, _parchment2.default.Embed, _text2.default];

function bubbleFormats(blot) {
  var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (blot == null) return formats;
  if (typeof blot.formats === 'function') {
    formats = (0, _extend2.default)(formats, blot.formats());
  }
  if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
    return formats;
  }
  return bubbleFormats(blot.parent, formats);
}

exports.bubbleFormats = bubbleFormats;
exports.BlockEmbed = BlockEmbed;
exports.default = Block;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.overload = exports.expandConfig = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(50);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _editor = __webpack_require__(14);

var _editor2 = _interopRequireDefault(_editor);

var _emitter3 = __webpack_require__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _selection = __webpack_require__(15);

var _selection2 = _interopRequireDefault(_selection);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _theme = __webpack_require__(34);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill');

var Quill = function () {
  _createClass(Quill, null, [{
    key: 'debug',
    value: function debug(limit) {
      if (limit === true) {
        limit = 'log';
      }
      _logger2.default.level(limit);
    }
  }, {
    key: 'find',
    value: function find(node) {
      return node.__quill || _parchment2.default.find(node);
    }
  }, {
    key: 'import',
    value: function _import(name) {
      if (this.imports[name] == null) {
        debug.error('Cannot import ' + name + '. Are you sure it was registered?');
      }
      return this.imports[name];
    }
  }, {
    key: 'register',
    value: function register(path, target) {
      var _this = this;

      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (typeof path !== 'string') {
        var name = path.attrName || path.blotName;
        if (typeof name === 'string') {
          // register(Blot | Attributor, overwrite)
          this.register('formats/' + name, path, target);
        } else {
          Object.keys(path).forEach(function (key) {
            _this.register(key, path[key], target);
          });
        }
      } else {
        if (this.imports[path] != null && !overwrite) {
          debug.warn('Overwriting ' + path + ' with', target);
        }
        this.imports[path] = target;
        if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
          _parchment2.default.register(target);
        } else if (path.startsWith('modules') && typeof target.register === 'function') {
          target.register();
        }
      }
    }
  }]);

  function Quill(container) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Quill);

    this.options = expandConfig(container, options);
    this.container = this.options.container;
    if (this.container == null) {
      return debug.error('Invalid Quill container', container);
    }
    if (this.options.debug) {
      Quill.debug(this.options.debug);
    }
    var html = this.container.innerHTML.trim();
    this.container.classList.add('ql-container');
    this.container.innerHTML = '';
    this.container.__quill = this;
    this.root = this.addContainer('ql-editor');
    this.root.classList.add('ql-blank');
    this.root.setAttribute('data-gramm', false);
    this.scrollingContainer = this.options.scrollingContainer || this.root;
    this.emitter = new _emitter4.default();
    this.scroll = _parchment2.default.create(this.root, {
      emitter: this.emitter,
      whitelist: this.options.formats
    });
    this.editor = new _editor2.default(this.scroll);
    this.selection = new _selection2.default(this.scroll, this.emitter);
    this.theme = new this.options.theme(this, this.options);
    this.keyboard = this.theme.addModule('keyboard');
    this.clipboard = this.theme.addModule('clipboard');
    this.history = this.theme.addModule('history');
    this.theme.init();
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type) {
      if (type === _emitter4.default.events.TEXT_CHANGE) {
        _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function (source, mutations) {
      var range = _this2.selection.lastRange;
      var index = range && range.length === 0 ? range.index : undefined;
      modify.call(_this2, function () {
        return _this2.editor.update(null, mutations, index);
      }, source);
    });
    var contents = this.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
    this.setContents(contents);
    this.history.clear();
    if (this.options.placeholder) {
      this.root.setAttribute('data-placeholder', this.options.placeholder);
    }
    if (this.options.readOnly) {
      this.disable();
    }
  }

  _createClass(Quill, [{
    key: 'addContainer',
    value: function addContainer(container) {
      var refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (typeof container === 'string') {
        var className = container;
        container = document.createElement('div');
        container.classList.add(className);
      }
      this.container.insertBefore(container, refNode);
      return container;
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.selection.setRange(null);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length, source) {
      var _this3 = this;

      var _overload = overload(index, length, source);

      var _overload2 = _slicedToArray(_overload, 4);

      index = _overload2[0];
      length = _overload2[1];
      source = _overload2[3];

      return modify.call(this, function () {
        return _this3.editor.deleteText(index, length);
      }, source, index, -1 * length);
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.enable(false);
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.scroll.enable(enabled);
      this.container.classList.toggle('ql-disabled', !enabled);
    }
  }, {
    key: 'focus',
    value: function focus() {
      var scrollTop = this.scrollingContainer.scrollTop;
      this.selection.focus();
      this.scrollingContainer.scrollTop = scrollTop;
      this.scrollIntoView();
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var _this4 = this;

      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        var range = _this4.getSelection(true);
        var change = new _quillDelta2.default();
        if (range == null) {
          return change;
        } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
          change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value));
        } else if (range.length === 0) {
          _this4.selection.format(name, value);
          return change;
        } else {
          change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value));
        }
        _this4.setSelection(range, _emitter4.default.sources.SILENT);
        return change;
      }, source);
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length, name, value, source) {
      var _this5 = this;

      var formats = void 0;

      var _overload3 = overload(index, length, name, value, source);

      var _overload4 = _slicedToArray(_overload3, 4);

      index = _overload4[0];
      length = _overload4[1];
      formats = _overload4[2];
      source = _overload4[3];

      return modify.call(this, function () {
        return _this5.editor.formatLine(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length, name, value, source) {
      var _this6 = this;

      var formats = void 0;

      var _overload5 = overload(index, length, name, value, source);

      var _overload6 = _slicedToArray(_overload5, 4);

      index = _overload6[0];
      length = _overload6[1];
      formats = _overload6[2];
      source = _overload6[3];

      return modify.call(this, function () {
        return _this6.editor.formatText(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var bounds = void 0;
      if (typeof index === 'number') {
        bounds = this.selection.getBounds(index, length);
      } else {
        bounds = this.selection.getBounds(index.index, index.length);
      }
      var containerBounds = this.container.getBoundingClientRect();
      return {
        bottom: bounds.bottom - containerBounds.top,
        height: bounds.height,
        left: bounds.left - containerBounds.left,
        right: bounds.right - containerBounds.left,
        top: bounds.top - containerBounds.top,
        width: bounds.width
      };
    }
  }, {
    key: 'getContents',
    value: function getContents() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload7 = overload(index, length);

      var _overload8 = _slicedToArray(_overload7, 2);

      index = _overload8[0];
      length = _overload8[1];

      return this.editor.getContents(index, length);
    }
  }, {
    key: 'getFormat',
    value: function getFormat() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (typeof index === 'number') {
        return this.editor.getFormat(index, length);
      } else {
        return this.editor.getFormat(index.index, index.length);
      }
    }
  }, {
    key: 'getIndex',
    value: function getIndex(blot) {
      return blot.offset(this.scroll);
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.scroll.length();
    }
  }, {
    key: 'getLeaf',
    value: function getLeaf(index) {
      return this.scroll.leaf(index);
    }
  }, {
    key: 'getLine',
    value: function getLine(index) {
      return this.scroll.line(index);
    }
  }, {
    key: 'getLines',
    value: function getLines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      if (typeof index !== 'number') {
        return this.scroll.lines(index.index, index.length);
      } else {
        return this.scroll.lines(index, length);
      }
    }
  }, {
    key: 'getModule',
    value: function getModule(name) {
      return this.theme.modules[name];
    }
  }, {
    key: 'getSelection',
    value: function getSelection() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (focus) this.focus();
      this.update(); // Make sure we access getRange with editor in consistent state
      return this.selection.getRange()[0];
    }
  }, {
    key: 'getText',
    value: function getText() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload9 = overload(index, length);

      var _overload10 = _slicedToArray(_overload9, 2);

      index = _overload10[0];
      length = _overload10[1];

      return this.editor.getText(index, length);
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return this.selection.hasFocus();
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      var _this7 = this;

      var source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;

      return modify.call(this, function () {
        return _this7.editor.insertEmbed(index, embed, value);
      }, source, index);
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text, name, value, source) {
      var _this8 = this;

      var formats = void 0;

      var _overload11 = overload(index, 0, name, value, source);

      var _overload12 = _slicedToArray(_overload11, 4);

      index = _overload12[0];
      formats = _overload12[2];
      source = _overload12[3];

      return modify.call(this, function () {
        return _this8.editor.insertText(index, text, formats);
      }, source, index, text.length);
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return !this.container.classList.contains('ql-disabled');
    }
  }, {
    key: 'off',
    value: function off() {
      return this.emitter.off.apply(this.emitter, arguments);
    }
  }, {
    key: 'on',
    value: function on() {
      return this.emitter.on.apply(this.emitter, arguments);
    }
  }, {
    key: 'once',
    value: function once() {
      return this.emitter.once.apply(this.emitter, arguments);
    }
  }, {
    key: 'pasteHTML',
    value: function pasteHTML(index, html, source) {
      this.clipboard.dangerouslyPasteHTML(index, html, source);
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length, source) {
      var _this9 = this;

      var _overload13 = overload(index, length, source);

      var _overload14 = _slicedToArray(_overload13, 4);

      index = _overload14[0];
      length = _overload14[1];
      source = _overload14[3];

      return modify.call(this, function () {
        return _this9.editor.removeFormat(index, length);
      }, source, index);
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView() {
      this.selection.scrollIntoView(this.scrollingContainer);
    }
  }, {
    key: 'setContents',
    value: function setContents(delta) {
      var _this10 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        var length = _this10.getLength();
        var deleted = _this10.editor.deleteText(0, length);
        var applied = _this10.editor.applyDelta(delta);
        var lastOp = applied.ops[applied.ops.length - 1];
        if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
          _this10.editor.deleteText(_this10.getLength() - 1, 1);
          applied.delete(1);
        }
        var ret = deleted.compose(applied);
        return ret;
      }, source);
    }
  }, {
    key: 'setSelection',
    value: function setSelection(index, length, source) {
      if (index == null) {
        this.selection.setRange(null, length || Quill.sources.API);
      } else {
        var _overload15 = overload(index, length, source);

        var _overload16 = _slicedToArray(_overload15, 4);

        index = _overload16[0];
        length = _overload16[1];
        source = _overload16[3];

        this.selection.setRange(new _selection.Range(index, length), source);
        if (source !== _emitter4.default.sources.SILENT) {
          this.selection.scrollIntoView(this.scrollingContainer);
        }
      }
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      var delta = new _quillDelta2.default().insert(text);
      return this.setContents(delta, source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
      this.selection.update(source);
      return change;
    }
  }, {
    key: 'updateContents',
    value: function updateContents(delta) {
      var _this11 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        return _this11.editor.applyDelta(delta, source);
      }, source, true);
    }
  }]);

  return Quill;
}();

Quill.DEFAULTS = {
  bounds: null,
  formats: null,
  modules: {},
  placeholder: '',
  readOnly: false,
  scrollingContainer: null,
  strict: true,
  theme: 'default'
};
Quill.events = _emitter4.default.events;
Quill.sources = _emitter4.default.sources;
// eslint-disable-next-line no-undef
Quill.version =  false ? undefined : "1.3.7";

Quill.imports = {
  'delta': _quillDelta2.default,
  'parchment': _parchment2.default,
  'core/module': _module2.default,
  'core/theme': _theme2.default
};

function expandConfig(container, userConfig) {
  userConfig = (0, _extend2.default)(true, {
    container: container,
    modules: {
      clipboard: true,
      keyboard: true,
      history: true
    }
  }, userConfig);
  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
    userConfig.theme = _theme2.default;
  } else {
    userConfig.theme = Quill.import('themes/' + userConfig.theme);
    if (userConfig.theme == null) {
      throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
    }
  }
  var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
  [themeConfig, userConfig].forEach(function (config) {
    config.modules = config.modules || {};
    Object.keys(config.modules).forEach(function (module) {
      if (config.modules[module] === true) {
        config.modules[module] = {};
      }
    });
  });
  var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
  var moduleConfig = moduleNames.reduce(function (config, name) {
    var moduleClass = Quill.import('modules/' + name);
    if (moduleClass == null) {
      debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
    } else {
      config[name] = moduleClass.DEFAULTS || {};
    }
    return config;
  }, {});
  // Special case toolbar shorthand
  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
    userConfig.modules.toolbar = {
      container: userConfig.modules.toolbar
    };
  }
  userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
  ['bounds', 'container', 'scrollingContainer'].forEach(function (key) {
    if (typeof userConfig[key] === 'string') {
      userConfig[key] = document.querySelector(userConfig[key]);
    }
  });
  userConfig.modules = Object.keys(userConfig.modules).reduce(function (config, name) {
    if (userConfig.modules[name]) {
      config[name] = userConfig.modules[name];
    }
    return config;
  }, {});
  return userConfig;
}

// Handle selection preservation and TEXT_CHANGE emission
// common to modification APIs
function modify(modifier, source, index, shift) {
  if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
    return new _quillDelta2.default();
  }
  var range = index == null ? null : this.getSelection();
  var oldDelta = this.editor.delta;
  var change = modifier();
  if (range != null) {
    if (index === true) index = range.index;
    if (shift == null) {
      range = shiftRange(range, change, source);
    } else if (shift !== 0) {
      range = shiftRange(range, index, shift, source);
    }
    this.setSelection(range, _emitter4.default.sources.SILENT);
  }
  if (change.length() > 0) {
    var _emitter;

    var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
    (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
    if (source !== _emitter4.default.sources.SILENT) {
      var _emitter2;

      (_emitter2 = this.emitter).emit.apply(_emitter2, args);
    }
  }
  return change;
}

function overload(index, length, name, value, source) {
  var formats = {};
  if (typeof index.index === 'number' && typeof index.length === 'number') {
    // Allow for throwaway end (used by insertText/insertEmbed)
    if (typeof length !== 'number') {
      source = value, value = name, name = length, length = index.length, index = index.index;
    } else {
      length = index.length, index = index.index;
    }
  } else if (typeof length !== 'number') {
    source = value, value = name, name = length, length = 0;
  }
  // Handle format being object, two format name/value strings or excluded
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    formats = name;
    source = value;
  } else if (typeof name === 'string') {
    if (value != null) {
      formats[name] = value;
    } else {
      source = name;
    }
  }
  // Handle optional source
  source = source || _emitter4.default.sources.API;
  return [index, length, formats, source];
}

function shiftRange(range, index, length, source) {
  if (range == null) return null;
  var start = void 0,
      end = void 0;
  if (index instanceof _quillDelta2.default) {
    var _map = [range.index, range.index + range.length].map(function (pos) {
      return index.transformPosition(pos, source !== _emitter4.default.sources.USER);
    });

    var _map2 = _slicedToArray(_map, 2);

    start = _map2[0];
    end = _map2[1];
  } else {
    var _map3 = [range.index, range.index + range.length].map(function (pos) {
      if (pos < index || pos === index && source === _emitter4.default.sources.USER) return pos;
      if (length >= 0) {
        return pos + length;
      } else {
        return Math.max(index, pos + length);
      }
    });

    var _map4 = _slicedToArray(_map3, 2);

    start = _map4[0];
    end = _map4[1];
  }
  return new _selection.Range(start, end - start);
}

exports.expandConfig = expandConfig;
exports.overload = overload;
exports.default = Quill;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Parchment$Inline) {
  _inherits(Inline, _Parchment$Inline);

  function Inline() {
    _classCallCheck(this, Inline);

    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  _createClass(Inline, [{
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
        var blot = this.isolate(index, length);
        if (value) {
          blot.wrap(name, value);
        }
      } else {
        _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'optimize', this).call(this, context);
      if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
        var parent = this.parent.isolate(this.offset(), this.length());
        this.moveChildren(parent);
        parent.wrap(this);
      }
    }
  }], [{
    key: 'compare',
    value: function compare(self, other) {
      var selfIndex = Inline.order.indexOf(self);
      var otherIndex = Inline.order.indexOf(other);
      if (selfIndex >= 0 || otherIndex >= 0) {
        return selfIndex - otherIndex;
      } else if (self === other) {
        return 0;
      } else if (self < other) {
        return -1;
      } else {
        return 1;
      }
    }
  }]);

  return Inline;
}(_parchment2.default.Inline);

Inline.allowedChildren = [Inline, _parchment2.default.Embed, _text2.default];
// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
Inline.order = ['cursor', 'inline', // Must be lower
'underline', 'strike', 'italic', 'bold', 'script', 'link', 'code' // Must be higher
];

exports.default = Inline;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextBlot = function (_Parchment$Text) {
  _inherits(TextBlot, _Parchment$Text);

  function TextBlot() {
    _classCallCheck(this, TextBlot);

    return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
  }

  return TextBlot;
}(_parchment2.default.Text);

exports.default = TextBlot;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _eventemitter = __webpack_require__(54);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:events');

var EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];

EVENTS.forEach(function (eventName) {
  document.addEventListener(eventName, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (node) {
      // TODO use WeakMap
      if (node.__quill && node.__quill.emitter) {
        var _node$__quill$emitter;

        (_node$__quill$emitter = node.__quill.emitter).handleDOM.apply(_node$__quill$emitter, args);
      }
    });
  });
});

var Emitter = function (_EventEmitter) {
  _inherits(Emitter, _EventEmitter);

  function Emitter() {
    _classCallCheck(this, Emitter);

    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

    _this.listeners = {};
    _this.on('error', debug.error);
    return _this;
  }

  _createClass(Emitter, [{
    key: 'emit',
    value: function emit() {
      debug.log.apply(debug, arguments);
      _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
    }
  }, {
    key: 'handleDOM',
    value: function handleDOM(event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (this.listeners[event.type] || []).forEach(function (_ref) {
        var node = _ref.node,
            handler = _ref.handler;

        if (event.target === node || node.contains(event.target)) {
          handler.apply(undefined, [event].concat(args));
        }
      });
    }
  }, {
    key: 'listenDOM',
    value: function listenDOM(eventName, node, handler) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
      this.listeners[eventName].push({ node: node, handler: handler });
    }
  }]);

  return Emitter;
}(_eventemitter2.default);

Emitter.events = {
  EDITOR_CHANGE: 'editor-change',
  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
  SCROLL_OPTIMIZE: 'scroll-optimize',
  SCROLL_UPDATE: 'scroll-update',
  SELECTION_CHANGE: 'selection-change',
  TEXT_CHANGE: 'text-change'
};
Emitter.sources = {
  API: 'api',
  SILENT: 'silent',
  USER: 'user'
};

exports.default = Emitter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function Module(quill) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Module);

  this.quill = quill;
  this.options = options;
};

Module.DEFAULTS = {};

exports.default = Module;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var levels = ['error', 'warn', 'log', 'info'];
var level = 'warn';

function debug(method) {
  if (levels.indexOf(method) <= levels.indexOf(level)) {
    var _console;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_console = console)[method].apply(_console, args); // eslint-disable-line no-console
  }
}

function namespace(ns) {
  return levels.reduce(function (logger, method) {
    logger[method] = debug.bind(console, method, ns);
    return logger;
  }, {});
}

debug.level = namespace.level = function (newLevel) {
  level = newLevel;
};

exports.default = namespace;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(52);
var isArguments = __webpack_require__(53);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(1);
var Attributor = /** @class */ (function () {
    function Attributor(attrName, keyName, options) {
        if (options === void 0) { options = {}; }
        this.attrName = attrName;
        this.keyName = keyName;
        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
        if (options.scope != null) {
            // Ignore type bits, force attribute bit
            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
        }
        else {
            this.scope = Registry.Scope.ATTRIBUTE;
        }
        if (options.whitelist != null)
            this.whitelist = options.whitelist;
    }
    Attributor.keys = function (node) {
        return [].map.call(node.attributes, function (item) {
            return item.name;
        });
    };
    Attributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        node.setAttribute(this.keyName, value);
        return true;
    };
    Attributor.prototype.canAdd = function (node, value) {
        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
        if (match == null)
            return false;
        if (this.whitelist == null)
            return true;
        if (typeof value === 'string') {
            return this.whitelist.indexOf(value.replace(/["']/g, '')) > -1;
        }
        else {
            return this.whitelist.indexOf(value) > -1;
        }
    };
    Attributor.prototype.remove = function (node) {
        node.removeAttribute(this.keyName);
    };
    Attributor.prototype.value = function (node) {
        var value = node.getAttribute(this.keyName);
        if (this.canAdd(node, value) && value) {
            return value;
        }
        return '';
    };
    return Attributor;
}());
exports.default = Attributor;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Code = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_Inline) {
  _inherits(Code, _Inline);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  return Code;
}(_inline2.default);

Code.blotName = 'code';
Code.tagName = 'CODE';

var CodeBlock = function (_Block) {
  _inherits(CodeBlock, _Block);

  function CodeBlock() {
    _classCallCheck(this, CodeBlock);

    return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
  }

  _createClass(CodeBlock, [{
    key: 'delta',
    value: function delta() {
      var _this3 = this;

      var text = this.domNode.textContent;
      if (text.endsWith('\n')) {
        // Should always be true
        text = text.slice(0, -1);
      }
      return text.split('\n').reduce(function (delta, frag) {
        return delta.insert(frag).insert('\n', _this3.formats());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (name === this.statics.blotName && value) return;

      var _descendant = this.descendant(_text2.default, this.length() - 1),
          _descendant2 = _slicedToArray(_descendant, 1),
          text = _descendant2[0];

      if (text != null) {
        text.deleteAt(text.length() - 1, 1);
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length === 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
        return;
      }
      var nextNewline = this.newlineIndex(index);
      if (nextNewline < 0 || nextNewline >= index + length) return;
      var prevNewline = this.newlineIndex(index, true) + 1;
      var isolateLength = nextNewline - prevNewline + 1;
      var blot = this.isolate(prevNewline, isolateLength);
      var next = blot.next;
      blot.format(name, value);
      if (next instanceof CodeBlock) {
        next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
      }
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return;

      var _descendant3 = this.descendant(_text2.default, index),
          _descendant4 = _slicedToArray(_descendant3, 2),
          text = _descendant4[0],
          offset = _descendant4[1];

      text.insertAt(offset, value);
    }
  }, {
    key: 'length',
    value: function length() {
      var length = this.domNode.textContent.length;
      if (!this.domNode.textContent.endsWith('\n')) {
        return length + 1;
      }
      return length;
    }
  }, {
    key: 'newlineIndex',
    value: function newlineIndex(searchIndex) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!reverse) {
        var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
        return offset > -1 ? searchIndex + offset : -1;
      } else {
        return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      if (!this.domNode.textContent.endsWith('\n')) {
        this.appendChild(_parchment2.default.create('text', '\n'));
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
        next.optimize(context);
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);
      [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
        var blot = _parchment2.default.find(node);
        if (blot == null) {
          node.parentNode.removeChild(node);
        } else if (blot instanceof _parchment2.default.Embed) {
          blot.remove();
        } else {
          blot.unwrap();
        }
      });
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);
      domNode.setAttribute('spellcheck', false);
      return domNode;
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return CodeBlock;
}(_block2.default);

CodeBlock.blotName = 'code-block';
CodeBlock.tagName = 'PRE';
CodeBlock.TAB = '  ';

exports.Code = Code;
exports.default = CodeBlock;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __webpack_require__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _cursor = __webpack_require__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASCII = /^[ -~]*$/;

var Editor = function () {
  function Editor(scroll) {
    _classCallCheck(this, Editor);

    this.scroll = scroll;
    this.delta = this.getDelta();
  }

  _createClass(Editor, [{
    key: 'applyDelta',
    value: function applyDelta(delta) {
      var _this = this;

      var consumeNextNewline = false;
      this.scroll.update();
      var scrollLength = this.scroll.length();
      this.scroll.batchStart();
      delta = normalizeDelta(delta);
      delta.reduce(function (index, op) {
        var length = op.retain || op.delete || op.insert.length || 1;
        var attributes = op.attributes || {};
        if (op.insert != null) {
          if (typeof op.insert === 'string') {
            var text = op.insert;
            if (text.endsWith('\n') && consumeNextNewline) {
              consumeNextNewline = false;
              text = text.slice(0, -1);
            }
            if (index >= scrollLength && !text.endsWith('\n')) {
              consumeNextNewline = true;
            }
            _this.scroll.insertAt(index, text);

            var _scroll$line = _this.scroll.line(index),
                _scroll$line2 = _slicedToArray(_scroll$line, 2),
                line = _scroll$line2[0],
                offset = _scroll$line2[1];

            var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
            if (line instanceof _block2.default) {
              var _line$descendant = line.descendant(_parchment2.default.Leaf, offset),
                  _line$descendant2 = _slicedToArray(_line$descendant, 1),
                  leaf = _line$descendant2[0];

              formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
            }
            attributes = _op2.default.attributes.diff(formats, attributes) || {};
          } else if (_typeof(op.insert) === 'object') {
            var key = Object.keys(op.insert)[0]; // There should only be one key
            if (key == null) return index;
            _this.scroll.insertAt(index, key, op.insert[key]);
          }
          scrollLength += length;
        }
        Object.keys(attributes).forEach(function (name) {
          _this.scroll.formatAt(index, length, name, attributes[name]);
        });
        return index + length;
      }, 0);
      delta.reduce(function (index, op) {
        if (typeof op.delete === 'number') {
          _this.scroll.deleteAt(index, op.delete);
          return index;
        }
        return index + (op.retain || op.insert.length || 1);
      }, 0);
      this.scroll.batchEnd();
      return this.update(delta);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length) {
      this.scroll.deleteAt(index, length);
      return this.update(new _quillDelta2.default().retain(index).delete(length));
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length) {
      var _this2 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.scroll.update();
      Object.keys(formats).forEach(function (format) {
        if (_this2.scroll.whitelist != null && !_this2.scroll.whitelist[format]) return;
        var lines = _this2.scroll.lines(index, Math.max(length, 1));
        var lengthRemaining = length;
        lines.forEach(function (line) {
          var lineLength = line.length();
          if (!(line instanceof _code2.default)) {
            line.format(format, formats[format]);
          } else {
            var codeIndex = index - line.offset(_this2.scroll);
            var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
            line.formatAt(codeIndex, codeLength, format, formats[format]);
          }
          lengthRemaining -= lineLength;
        });
      });
      this.scroll.optimize();
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length) {
      var _this3 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      Object.keys(formats).forEach(function (format) {
        _this3.scroll.formatAt(index, length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'getContents',
    value: function getContents(index, length) {
      return this.delta.slice(index, index + length);
    }
  }, {
    key: 'getDelta',
    value: function getDelta() {
      return this.scroll.lines().reduce(function (delta, line) {
        return delta.concat(line.delta());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'getFormat',
    value: function getFormat(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var lines = [],
          leaves = [];
      if (length === 0) {
        this.scroll.path(index).forEach(function (path) {
          var _path = _slicedToArray(path, 1),
              blot = _path[0];

          if (blot instanceof _block2.default) {
            lines.push(blot);
          } else if (blot instanceof _parchment2.default.Leaf) {
            leaves.push(blot);
          }
        });
      } else {
        lines = this.scroll.lines(index, length);
        leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
      }
      var formatsArr = [lines, leaves].map(function (blots) {
        if (blots.length === 0) return {};
        var formats = (0, _block.bubbleFormats)(blots.shift());
        while (Object.keys(formats).length > 0) {
          var blot = blots.shift();
          if (blot == null) return formats;
          formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
        }
        return formats;
      });
      return _extend2.default.apply(_extend2.default, formatsArr);
    }
  }, {
    key: 'getText',
    value: function getText(index, length) {
      return this.getContents(index, length).filter(function (op) {
        return typeof op.insert === 'string';
      }).map(function (op) {
        return op.insert;
      }).join('');
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      this.scroll.insertAt(index, embed, value);
      return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value)));
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text) {
      var _this4 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      this.scroll.insertAt(index, text);
      Object.keys(formats).forEach(function (format) {
        _this4.scroll.formatAt(index, text.length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'isBlank',
    value: function isBlank() {
      if (this.scroll.children.length == 0) return true;
      if (this.scroll.children.length > 1) return false;
      var block = this.scroll.children.head;
      if (block.statics.blotName !== _block2.default.blotName) return false;
      if (block.children.length > 1) return false;
      return block.children.head instanceof _break2.default;
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length) {
      var text = this.getText(index, length);

      var _scroll$line3 = this.scroll.line(index + length),
          _scroll$line4 = _slicedToArray(_scroll$line3, 2),
          line = _scroll$line4[0],
          offset = _scroll$line4[1];

      var suffixLength = 0,
          suffix = new _quillDelta2.default();
      if (line != null) {
        if (!(line instanceof _code2.default)) {
          suffixLength = line.length() - offset;
        } else {
          suffixLength = line.newlineIndex(offset) - offset + 1;
        }
        suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
      }
      var contents = this.getContents(index, length + suffixLength);
      var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
      var delta = new _quillDelta2.default().retain(index).concat(diff);
      return this.applyDelta(delta);
    }
  }, {
    key: 'update',
    value: function update(change) {
      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var cursorIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      var oldDelta = this.delta;
      if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && _parchment2.default.find(mutations[0].target)) {
        // Optimization for character changes
        var textBlot = _parchment2.default.find(mutations[0].target);
        var formats = (0, _block.bubbleFormats)(textBlot);
        var index = textBlot.offset(this.scroll);
        var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
        var oldText = new _quillDelta2.default().insert(oldValue);
        var newText = new _quillDelta2.default().insert(textBlot.value());
        var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
        change = diffDelta.reduce(function (delta, op) {
          if (op.insert) {
            return delta.insert(op.insert, formats);
          } else {
            return delta.push(op);
          }
        }, new _quillDelta2.default());
        this.delta = oldDelta.compose(change);
      } else {
        this.delta = this.getDelta();
        if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
          change = oldDelta.diff(this.delta, cursorIndex);
        }
      }
      return change;
    }
  }]);

  return Editor;
}();

function combineFormats(formats, combined) {
  return Object.keys(combined).reduce(function (merged, name) {
    if (formats[name] == null) return merged;
    if (combined[name] === formats[name]) {
      merged[name] = combined[name];
    } else if (Array.isArray(combined[name])) {
      if (combined[name].indexOf(formats[name]) < 0) {
        merged[name] = combined[name].concat([formats[name]]);
      }
    } else {
      merged[name] = [combined[name], formats[name]];
    }
    return merged;
  }, {});
}

function normalizeDelta(delta) {
  return delta.reduce(function (delta, op) {
    if (op.insert === 1) {
      var attributes = (0, _clone2.default)(op.attributes);
      delete attributes['image'];
      return delta.insert({ image: op.attributes.image }, attributes);
    }
    if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
      op = (0, _clone2.default)(op);
      if (op.attributes.list) {
        op.attributes.list = 'ordered';
      } else {
        op.attributes.list = 'bullet';
        delete op.attributes.bullet;
      }
    }
    if (typeof op.insert === 'string') {
      var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      return delta.insert(text, op.attributes);
    }
    return delta.push(op);
  }, new _quillDelta2.default());
}

exports.default = Editor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Range = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _emitter3 = __webpack_require__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill:selection');

var Range = function Range(index) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Range);

  this.index = index;
  this.length = length;
};

var Selection = function () {
  function Selection(scroll, emitter) {
    var _this = this;

    _classCallCheck(this, Selection);

    this.emitter = emitter;
    this.scroll = scroll;
    this.composing = false;
    this.mouseDown = false;
    this.root = this.scroll.domNode;
    this.cursor = _parchment2.default.create('cursor', this);
    // savedRange is last non-null range
    this.lastRange = this.savedRange = new Range(0, 0);
    this.handleComposition();
    this.handleDragging();
    this.emitter.listenDOM('selectionchange', document, function () {
      if (!_this.mouseDown) {
        setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 1);
      }
    });
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
      if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
        _this.update(_emitter4.default.sources.SILENT);
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
      if (!_this.hasFocus()) return;
      var native = _this.getNativeRange();
      if (native == null) return;
      if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
      // TODO unclear if this has negative side effects
      _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
        try {
          _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
        } catch (ignored) {}
      });
    });
    this.emitter.on(_emitter4.default.events.SCROLL_OPTIMIZE, function (mutations, context) {
      if (context.range) {
        var _context$range = context.range,
            startNode = _context$range.startNode,
            startOffset = _context$range.startOffset,
            endNode = _context$range.endNode,
            endOffset = _context$range.endOffset;

        _this.setNativeRange(startNode, startOffset, endNode, endOffset);
      }
    });
    this.update(_emitter4.default.sources.SILENT);
  }

  _createClass(Selection, [{
    key: 'handleComposition',
    value: function handleComposition() {
      var _this2 = this;

      this.root.addEventListener('compositionstart', function () {
        _this2.composing = true;
      });
      this.root.addEventListener('compositionend', function () {
        _this2.composing = false;
        if (_this2.cursor.parent) {
          var range = _this2.cursor.restore();
          if (!range) return;
          setTimeout(function () {
            _this2.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
          }, 1);
        }
      });
    }
  }, {
    key: 'handleDragging',
    value: function handleDragging() {
      var _this3 = this;

      this.emitter.listenDOM('mousedown', document.body, function () {
        _this3.mouseDown = true;
      });
      this.emitter.listenDOM('mouseup', document.body, function () {
        _this3.mouseDown = false;
        _this3.update(_emitter4.default.sources.USER);
      });
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.hasFocus()) return;
      this.root.focus();
      this.setRange(this.savedRange);
    }
  }, {
    key: 'format',
    value: function format(_format, value) {
      if (this.scroll.whitelist != null && !this.scroll.whitelist[_format]) return;
      this.scroll.update();
      var nativeRange = this.getNativeRange();
      if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
      if (nativeRange.start.node !== this.cursor.textNode) {
        var blot = _parchment2.default.find(nativeRange.start.node, false);
        if (blot == null) return;
        // TODO Give blot ability to not split
        if (blot instanceof _parchment2.default.Leaf) {
          var after = blot.split(nativeRange.start.offset);
          blot.parent.insertBefore(this.cursor, after);
        } else {
          blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
        }
        this.cursor.attach();
      }
      this.cursor.format(_format, value);
      this.scroll.optimize();
      this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
      this.update();
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var scrollLength = this.scroll.length();
      index = Math.min(index, scrollLength - 1);
      length = Math.min(index + length, scrollLength - 1) - index;
      var node = void 0,
          _scroll$leaf = this.scroll.leaf(index),
          _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2),
          leaf = _scroll$leaf2[0],
          offset = _scroll$leaf2[1];
      if (leaf == null) return null;

      var _leaf$position = leaf.position(offset, true);

      var _leaf$position2 = _slicedToArray(_leaf$position, 2);

      node = _leaf$position2[0];
      offset = _leaf$position2[1];

      var range = document.createRange();
      if (length > 0) {
        range.setStart(node, offset);

        var _scroll$leaf3 = this.scroll.leaf(index + length);

        var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

        leaf = _scroll$leaf4[0];
        offset = _scroll$leaf4[1];

        if (leaf == null) return null;

        var _leaf$position3 = leaf.position(offset, true);

        var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

        node = _leaf$position4[0];
        offset = _leaf$position4[1];

        range.setEnd(node, offset);
        return range.getBoundingClientRect();
      } else {
        var side = 'left';
        var rect = void 0;
        if (node instanceof Text) {
          if (offset < node.data.length) {
            range.setStart(node, offset);
            range.setEnd(node, offset + 1);
          } else {
            range.setStart(node, offset - 1);
            range.setEnd(node, offset);
            side = 'right';
          }
          rect = range.getBoundingClientRect();
        } else {
          rect = leaf.domNode.getBoundingClientRect();
          if (offset > 0) side = 'right';
        }
        return {
          bottom: rect.top + rect.height,
          height: rect.height,
          left: rect[side],
          right: rect[side],
          top: rect.top,
          width: 0
        };
      }
    }
  }, {
    key: 'getNativeRange',
    value: function getNativeRange() {
      var selection = document.getSelection();
      if (selection == null || selection.rangeCount <= 0) return null;
      var nativeRange = selection.getRangeAt(0);
      if (nativeRange == null) return null;
      var range = this.normalizeNative(nativeRange);
      debug.info('getNativeRange', range);
      return range;
    }
  }, {
    key: 'getRange',
    value: function getRange() {
      var normalized = this.getNativeRange();
      if (normalized == null) return [null, null];
      var range = this.normalizedToRange(normalized);
      return [range, normalized];
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return document.activeElement === this.root;
    }
  }, {
    key: 'normalizedToRange',
    value: function normalizedToRange(range) {
      var _this4 = this;

      var positions = [[range.start.node, range.start.offset]];
      if (!range.native.collapsed) {
        positions.push([range.end.node, range.end.offset]);
      }
      var indexes = positions.map(function (position) {
        var _position = _slicedToArray(position, 2),
            node = _position[0],
            offset = _position[1];

        var blot = _parchment2.default.find(node, true);
        var index = blot.offset(_this4.scroll);
        if (offset === 0) {
          return index;
        } else if (blot instanceof _parchment2.default.Container) {
          return index + blot.length();
        } else {
          return index + blot.index(node, offset);
        }
      });
      var end = Math.min(Math.max.apply(Math, _toConsumableArray(indexes)), this.scroll.length() - 1);
      var start = Math.min.apply(Math, [end].concat(_toConsumableArray(indexes)));
      return new Range(start, end - start);
    }
  }, {
    key: 'normalizeNative',
    value: function normalizeNative(nativeRange) {
      if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
        return null;
      }
      var range = {
        start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
        end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
        native: nativeRange
      };
      [range.start, range.end].forEach(function (position) {
        var node = position.node,
            offset = position.offset;
        while (!(node instanceof Text) && node.childNodes.length > 0) {
          if (node.childNodes.length > offset) {
            node = node.childNodes[offset];
            offset = 0;
          } else if (node.childNodes.length === offset) {
            node = node.lastChild;
            offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
          } else {
            break;
          }
        }
        position.node = node, position.offset = offset;
      });
      return range;
    }
  }, {
    key: 'rangeToNative',
    value: function rangeToNative(range) {
      var _this5 = this;

      var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
      var args = [];
      var scrollLength = this.scroll.length();
      indexes.forEach(function (index, i) {
        index = Math.min(scrollLength - 1, index);
        var node = void 0,
            _scroll$leaf5 = _this5.scroll.leaf(index),
            _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2),
            leaf = _scroll$leaf6[0],
            offset = _scroll$leaf6[1];
        var _leaf$position5 = leaf.position(offset, i !== 0);

        var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

        node = _leaf$position6[0];
        offset = _leaf$position6[1];

        args.push(node, offset);
      });
      if (args.length < 2) {
        args = args.concat(args);
      }
      return args;
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(scrollingContainer) {
      var range = this.lastRange;
      if (range == null) return;
      var bounds = this.getBounds(range.index, range.length);
      if (bounds == null) return;
      var limit = this.scroll.length() - 1;

      var _scroll$line = this.scroll.line(Math.min(range.index, limit)),
          _scroll$line2 = _slicedToArray(_scroll$line, 1),
          first = _scroll$line2[0];

      var last = first;
      if (range.length > 0) {
        var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));

        var _scroll$line4 = _slicedToArray(_scroll$line3, 1);

        last = _scroll$line4[0];
      }
      if (first == null || last == null) return;
      var scrollBounds = scrollingContainer.getBoundingClientRect();
      if (bounds.top < scrollBounds.top) {
        scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
      } else if (bounds.bottom > scrollBounds.bottom) {
        scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
      }
    }
  }, {
    key: 'setNativeRange',
    value: function setNativeRange(startNode, startOffset) {
      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
      var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
      var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
      if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
        return;
      }
      var selection = document.getSelection();
      if (selection == null) return;
      if (startNode != null) {
        if (!this.hasFocus()) this.root.focus();
        var native = (this.getNativeRange() || {}).native;
        if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {

          if (startNode.tagName == "BR") {
            startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
            startNode = startNode.parentNode;
          }
          if (endNode.tagName == "BR") {
            endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
            endNode = endNode.parentNode;
          }
          var range = document.createRange();
          range.setStart(startNode, startOffset);
          range.setEnd(endNode, endOffset);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        selection.removeAllRanges();
        this.root.blur();
        document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
      }
    }
  }, {
    key: 'setRange',
    value: function setRange(range) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      if (typeof force === 'string') {
        source = force;
        force = false;
      }
      debug.info('setRange', range);
      if (range != null) {
        var args = this.rangeToNative(range);
        this.setNativeRange.apply(this, _toConsumableArray(args).concat([force]));
      } else {
        this.setNativeRange(null);
      }
      this.update(source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var oldRange = this.lastRange;

      var _getRange = this.getRange(),
          _getRange2 = _slicedToArray(_getRange, 2),
          lastRange = _getRange2[0],
          nativeRange = _getRange2[1];

      this.lastRange = lastRange;
      if (this.lastRange != null) {
        this.savedRange = this.lastRange;
      }
      if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
        var _emitter;

        if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
          this.cursor.restore();
        }
        var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
        (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
        if (source !== _emitter4.default.sources.SILENT) {
          var _emitter2;

          (_emitter2 = this.emitter).emit.apply(_emitter2, args);
        }
      }
    }
  }]);

  return Selection;
}();

function contains(parent, descendant) {
  try {
    // Firefox inserts inaccessible nodes around video elements
    descendant.parentNode;
  } catch (e) {
    return false;
  }
  // IE11 has bug with Text nodes
  // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
  if (descendant instanceof Text) {
    descendant = descendant.parentNode;
  }
  return parent.contains(descendant);
}

exports.Range = Range;
exports.default = Selection;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Break = function (_Parchment$Embed) {
  _inherits(Break, _Parchment$Embed);

  function Break() {
    _classCallCheck(this, Break);

    return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
  }

  _createClass(Break, [{
    key: 'insertInto',
    value: function insertInto(parent, ref) {
      if (parent.children.length === 0) {
        _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
      } else {
        this.remove();
      }
    }
  }, {
    key: 'length',
    value: function length() {
      return 0;
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }], [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  return Break;
}(_parchment2.default.Embed);

Break.blotName = 'break';
Break.tagName = 'BR';

exports.default = Break;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = __webpack_require__(44);
var shadow_1 = __webpack_require__(30);
var Registry = __webpack_require__(1);
var ContainerBlot = /** @class */ (function (_super) {
    __extends(ContainerBlot, _super);
    function ContainerBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.build();
        return _this;
    }
    ContainerBlot.prototype.appendChild = function (other) {
        this.insertBefore(other);
    };
    ContainerBlot.prototype.attach = function () {
        _super.prototype.attach.call(this);
        this.children.forEach(function (child) {
            child.attach();
        });
    };
    ContainerBlot.prototype.build = function () {
        var _this = this;
        this.children = new linked_list_1.default();
        // Need to be reversed for if DOM nodes already in order
        [].slice
            .call(this.domNode.childNodes)
            .reverse()
            .forEach(function (node) {
            try {
                var child = makeBlot(node);
                _this.insertBefore(child, _this.children.head || undefined);
            }
            catch (err) {
                if (err instanceof Registry.ParchmentError)
                    return;
                else
                    throw err;
            }
        });
    };
    ContainerBlot.prototype.deleteAt = function (index, length) {
        if (index === 0 && length === this.length()) {
            return this.remove();
        }
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.deleteAt(offset, length);
        });
    };
    ContainerBlot.prototype.descendant = function (criteria, index) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if ((criteria.blotName == null && criteria(child)) ||
            (criteria.blotName != null && child instanceof criteria)) {
            return [child, offset];
        }
        else if (child instanceof ContainerBlot) {
            return child.descendant(criteria, offset);
        }
        else {
            return [null, -1];
        }
    };
    ContainerBlot.prototype.descendants = function (criteria, index, length) {
        if (index === void 0) { index = 0; }
        if (length === void 0) { length = Number.MAX_VALUE; }
        var descendants = [];
        var lengthLeft = length;
        this.children.forEachAt(index, length, function (child, index, length) {
            if ((criteria.blotName == null && criteria(child)) ||
                (criteria.blotName != null && child instanceof criteria)) {
                descendants.push(child);
            }
            if (child instanceof ContainerBlot) {
                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
            }
            lengthLeft -= length;
        });
        return descendants;
    };
    ContainerBlot.prototype.detach = function () {
        this.children.forEach(function (child) {
            child.detach();
        });
        _super.prototype.detach.call(this);
    };
    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.formatAt(offset, length, name, value);
        });
    };
    ContainerBlot.prototype.insertAt = function (index, value, def) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if (child) {
            child.insertAt(offset, value, def);
        }
        else {
            var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
            this.appendChild(blot);
        }
    };
    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
        if (this.statics.allowedChildren != null &&
            !this.statics.allowedChildren.some(function (child) {
                return childBlot instanceof child;
            })) {
            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
        }
        childBlot.insertInto(this, refBlot);
    };
    ContainerBlot.prototype.length = function () {
        return this.children.reduce(function (memo, child) {
            return memo + child.length();
        }, 0);
    };
    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
        this.children.forEach(function (child) {
            targetParent.insertBefore(child, refNode);
        });
    };
    ContainerBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        if (this.children.length === 0) {
            if (this.statics.defaultChild != null) {
                var child = Registry.create(this.statics.defaultChild);
                this.appendChild(child);
                child.optimize(context);
            }
            else {
                this.remove();
            }
        }
    };
    ContainerBlot.prototype.path = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
        var position = [[this, index]];
        if (child instanceof ContainerBlot) {
            return position.concat(child.path(offset, inclusive));
        }
        else if (child != null) {
            position.push([child, offset]);
        }
        return position;
    };
    ContainerBlot.prototype.removeChild = function (child) {
        this.children.remove(child);
    };
    ContainerBlot.prototype.replace = function (target) {
        if (target instanceof ContainerBlot) {
            target.moveChildren(this);
        }
        _super.prototype.replace.call(this, target);
    };
    ContainerBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = this.clone();
        this.parent.insertBefore(after, this.next);
        this.children.forEachAt(index, this.length(), function (child, offset, length) {
            child = child.split(offset, force);
            after.appendChild(child);
        });
        return after;
    };
    ContainerBlot.prototype.unwrap = function () {
        this.moveChildren(this.parent, this.next);
        this.remove();
    };
    ContainerBlot.prototype.update = function (mutations, context) {
        var _this = this;
        var addedNodes = [];
        var removedNodes = [];
        mutations.forEach(function (mutation) {
            if (mutation.target === _this.domNode && mutation.type === 'childList') {
                addedNodes.push.apply(addedNodes, mutation.addedNodes);
                removedNodes.push.apply(removedNodes, mutation.removedNodes);
            }
        });
        removedNodes.forEach(function (node) {
            // Check node has actually been removed
            // One exception is Chrome does not immediately remove IFRAMEs
            // from DOM but MutationRecord is correct in its reported removal
            if (node.parentNode != null &&
                // @ts-ignore
                node.tagName !== 'IFRAME' &&
                document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                return;
            }
            var blot = Registry.find(node);
            if (blot == null)
                return;
            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                blot.detach();
            }
        });
        addedNodes
            .filter(function (node) {
            return node.parentNode == _this.domNode;
        })
            .sort(function (a, b) {
            if (a === b)
                return 0;
            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                return 1;
            }
            return -1;
        })
            .forEach(function (node) {
            var refBlot = null;
            if (node.nextSibling != null) {
                refBlot = Registry.find(node.nextSibling);
            }
            var blot = makeBlot(node);
            if (blot.next != refBlot || blot.next == null) {
                if (blot.parent != null) {
                    blot.parent.removeChild(_this);
                }
                _this.insertBefore(blot, refBlot || undefined);
            }
        });
    };
    return ContainerBlot;
}(shadow_1.default));
function makeBlot(node) {
    var blot = Registry.find(node);
    if (blot == null) {
        try {
            blot = Registry.create(node);
        }
        catch (e) {
            blot = Registry.create(Registry.Scope.INLINE);
            [].slice.call(node.childNodes).forEach(function (child) {
                // @ts-ignore
                blot.domNode.appendChild(child);
            });
            if (node.parentNode) {
                node.parentNode.replaceChild(blot.domNode, node);
            }
            blot.attach();
        }
    }
    return blot;
}
exports.default = ContainerBlot;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
var store_1 = __webpack_require__(31);
var container_1 = __webpack_require__(17);
var Registry = __webpack_require__(1);
var FormatBlot = /** @class */ (function (_super) {
    __extends(FormatBlot, _super);
    function FormatBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.attributes = new store_1.default(_this.domNode);
        return _this;
    }
    FormatBlot.formats = function (domNode) {
        if (typeof this.tagName === 'string') {
            return true;
        }
        else if (Array.isArray(this.tagName)) {
            return domNode.tagName.toLowerCase();
        }
        return undefined;
    };
    FormatBlot.prototype.format = function (name, value) {
        var format = Registry.query(name);
        if (format instanceof attributor_1.default) {
            this.attributes.attribute(format, value);
        }
        else if (value) {
            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                this.replaceWith(name, value);
            }
        }
    };
    FormatBlot.prototype.formats = function () {
        var formats = this.attributes.values();
        var format = this.statics.formats(this.domNode);
        if (format != null) {
            formats[this.statics.blotName] = format;
        }
        return formats;
    };
    FormatBlot.prototype.replaceWith = function (name, value) {
        var replacement = _super.prototype.replaceWith.call(this, name, value);
        this.attributes.copy(replacement);
        return replacement;
    };
    FormatBlot.prototype.update = function (mutations, context) {
        var _this = this;
        _super.prototype.update.call(this, mutations, context);
        if (mutations.some(function (mutation) {
            return mutation.target === _this.domNode && mutation.type === 'attributes';
        })) {
            this.attributes.build();
        }
    };
    FormatBlot.prototype.wrap = function (name, value) {
        var wrapper = _super.prototype.wrap.call(this, name, value);
        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
            this.attributes.move(wrapper);
        }
        return wrapper;
    };
    return FormatBlot;
}(container_1.default));
exports.default = FormatBlot;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shadow_1 = __webpack_require__(30);
var Registry = __webpack_require__(1);
var LeafBlot = /** @class */ (function (_super) {
    __extends(LeafBlot, _super);
    function LeafBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeafBlot.value = function (domNode) {
        return true;
    };
    LeafBlot.prototype.index = function (node, offset) {
        if (this.domNode === node ||
            this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            return Math.min(offset, 1);
        }
        return -1;
    };
    LeafBlot.prototype.position = function (index, inclusive) {
        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
        if (index > 0)
            offset += 1;
        return [this.parent.domNode, offset];
    };
    LeafBlot.prototype.value = function () {
        var _a;
        return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
    };
    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
    return LeafBlot;
}(shadow_1.default));
exports.default = LeafBlot;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var equal = __webpack_require__(11);
var extend = __webpack_require__(3);


var lib = {
  attributes: {
    compose: function (a, b, keepNull) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = extend(true, {}, b);
      if (!keepNull) {
        attributes = Object.keys(attributes).reduce(function (copy, key) {
          if (attributes[key] != null) {
            copy[key] = attributes[key];
          }
          return copy;
        }, {});
      }
      for (var key in a) {
        if (a[key] !== undefined && b[key] === undefined) {
          attributes[key] = a[key];
        }
      }
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    diff: function(a, b) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
        if (!equal(a[key], b[key])) {
          attributes[key] = b[key] === undefined ? null : b[key];
        }
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    transform: function (a, b, priority) {
      if (typeof a !== 'object') return b;
      if (typeof b !== 'object') return undefined;
      if (!priority) return b;  // b simply overwrites us without priority
      var attributes = Object.keys(b).reduce(function (attributes, key) {
        if (a[key] === undefined) attributes[key] = b[key];  // null is a valid value
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
  },

  iterator: function (ops) {
    return new Iterator(ops);
  },

  length: function (op) {
    if (typeof op['delete'] === 'number') {
      return op['delete'];
    } else if (typeof op.retain === 'number') {
      return op.retain;
    } else {
      return typeof op.insert === 'string' ? op.insert.length : 1;
    }
  }
};


function Iterator(ops) {
  this.ops = ops;
  this.index = 0;
  this.offset = 0;
};

Iterator.prototype.hasNext = function () {
  return this.peekLength() < Infinity;
};

Iterator.prototype.next = function (length) {
  if (!length) length = Infinity;
  var nextOp = this.ops[this.index];
  if (nextOp) {
    var offset = this.offset;
    var opLength = lib.length(nextOp)
    if (length >= opLength - offset) {
      length = opLength - offset;
      this.index += 1;
      this.offset = 0;
    } else {
      this.offset += length;
    }
    if (typeof nextOp['delete'] === 'number') {
      return { 'delete': length };
    } else {
      var retOp = {};
      if (nextOp.attributes) {
        retOp.attributes = nextOp.attributes;
      }
      if (typeof nextOp.retain === 'number') {
        retOp.retain = length;
      } else if (typeof nextOp.insert === 'string') {
        retOp.insert = nextOp.insert.substr(offset, length);
      } else {
        // offset should === 0, length should === 1
        retOp.insert = nextOp.insert;
      }
      return retOp;
    }
  } else {
    return { retain: Infinity };
  }
};

Iterator.prototype.peek = function () {
  return this.ops[this.index];
};

Iterator.prototype.peekLength = function () {
  if (this.ops[this.index]) {
    // Should never return 0 if our index is being managed correctly
    return lib.length(this.ops[this.index]) - this.offset;
  } else {
    return Infinity;
  }
};

Iterator.prototype.peekType = function () {
  if (this.ops[this.index]) {
    if (typeof this.ops[this.index]['delete'] === 'number') {
      return 'delete';
    } else if (typeof this.ops[this.index].retain === 'number') {
      return 'retain';
    } else {
      return 'insert';
    }
  }
  return 'retain';
};

Iterator.prototype.rest = function () {
  if (!this.hasNext()) {
    return [];
  } else if (this.offset === 0) {
    return this.ops.slice(this.index);
  } else {
    var offset = this.offset;
    var index = this.index;
    var next = this.next();
    var rest = this.ops.slice(this.index);
    this.offset = offset;
    this.index = index;
    return [next].concat(rest);
  }
};


module.exports = lib;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isLine(blot) {
  return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
}

var Scroll = function (_Parchment$Scroll) {
  _inherits(Scroll, _Parchment$Scroll);

  function Scroll(domNode, config) {
    _classCallCheck(this, Scroll);

    var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

    _this.emitter = config.emitter;
    if (Array.isArray(config.whitelist)) {
      _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
        whitelist[format] = true;
        return whitelist;
      }, {});
    }
    // Some reason fixes composition issues with character languages in Windows/Chrome, Safari
    _this.domNode.addEventListener('DOMNodeInserted', function () {});
    _this.optimize();
    _this.enable();
    return _this;
  }

  _createClass(Scroll, [{
    key: 'batchStart',
    value: function batchStart() {
      this.batch = true;
    }
  }, {
    key: 'batchEnd',
    value: function batchEnd() {
      this.batch = false;
      this.optimize();
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      var _line = this.line(index),
          _line2 = _slicedToArray(_line, 2),
          first = _line2[0],
          offset = _line2[1];

      var _line3 = this.line(index + length),
          _line4 = _slicedToArray(_line3, 1),
          last = _line4[0];

      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
      if (last != null && first !== last && offset > 0) {
        if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {
          this.optimize();
          return;
        }
        if (first instanceof _code2.default) {
          var newlineIndex = first.newlineIndex(first.length(), true);
          if (newlineIndex > -1) {
            first = first.split(newlineIndex + 1);
            if (first === last) {
              this.optimize();
              return;
            }
          }
        } else if (last instanceof _code2.default) {
          var _newlineIndex = last.newlineIndex(0);
          if (_newlineIndex > -1) {
            last.split(_newlineIndex + 1);
          }
        }
        var ref = last.children.head instanceof _break2.default ? null : last.children.head;
        first.moveChildren(last, ref);
        first.remove();
      }
      this.optimize();
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.domNode.setAttribute('contenteditable', enabled);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, format, value) {
      if (this.whitelist != null && !this.whitelist[format]) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
      this.optimize();
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null && this.whitelist != null && !this.whitelist[value]) return;
      if (index >= this.length()) {
        if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
          var blot = _parchment2.default.create(this.statics.defaultChild);
          this.appendChild(blot);
          if (def == null && value.endsWith('\n')) {
            value = value.slice(0, -1);
          }
          blot.insertAt(0, value, def);
        } else {
          var embed = _parchment2.default.create(value, def);
          this.appendChild(embed);
        }
      } else {
        _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
      }
      this.optimize();
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
        var wrapper = _parchment2.default.create(this.statics.defaultChild);
        wrapper.appendChild(blot);
        blot = wrapper;
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
    }
  }, {
    key: 'leaf',
    value: function leaf(index) {
      return this.path(index).pop() || [null, -1];
    }
  }, {
    key: 'line',
    value: function line(index) {
      if (index === this.length()) {
        return this.line(index - 1);
      }
      return this.descendant(isLine, index);
    }
  }, {
    key: 'lines',
    value: function lines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      var getLines = function getLines(blot, index, length) {
        var lines = [],
            lengthLeft = length;
        blot.children.forEachAt(index, length, function (child, index, length) {
          if (isLine(child)) {
            lines.push(child);
          } else if (child instanceof _parchment2.default.Container) {
            lines = lines.concat(getLines(child, index, lengthLeft));
          }
          lengthLeft -= length;
        });
        return lines;
      };
      return getLines(this, index, length);
    }
  }, {
    key: 'optimize',
    value: function optimize() {
      var mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.batch === true) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations, context);
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);
      }
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
    }
  }, {
    key: 'update',
    value: function update(mutations) {
      if (this.batch === true) return;
      var source = _emitter2.default.sources.USER;
      if (typeof mutations === 'string') {
        source = mutations;
      }
      if (!Array.isArray(mutations)) {
        mutations = this.observer.takeRecords();
      }
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
      }
    }
  }]);

  return Scroll;
}(_parchment2.default.Scroll);

Scroll.blotName = 'scroll';
Scroll.className = 'ql-editor';
Scroll.tagName = 'DIV';
Scroll.defaultChild = 'block';
Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

exports.default = Scroll;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHORTKEY = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __webpack_require__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:keyboard');

var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

var Keyboard = function (_Module) {
  _inherits(Keyboard, _Module);

  _createClass(Keyboard, null, [{
    key: 'match',
    value: function match(evt, binding) {
      binding = normalize(binding);
      if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
        return !!binding[key] !== evt[key] && binding[key] !== null;
      })) {
        return false;
      }
      return binding.key === (evt.which || evt.keyCode);
    }
  }]);

  function Keyboard(quill, options) {
    _classCallCheck(this, Keyboard);

    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

    _this.bindings = {};
    Object.keys(_this.options.bindings).forEach(function (name) {
      if (name === 'list autofill' && quill.scroll.whitelist != null && !quill.scroll.whitelist['list']) {
        return;
      }
      if (_this.options.bindings[name]) {
        _this.addBinding(_this.options.bindings[name]);
      }
    });
    _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
    _this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {});
    if (/Firefox/i.test(navigator.userAgent)) {
      // Need to handle delete and backspace for Firefox in the general case #1171
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true }, handleDelete);
    } else {
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, handleDelete);
    }
    _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, handleBackspace);
    _this.listen();
    return _this;
  }

  _createClass(Keyboard, [{
    key: 'addBinding',
    value: function addBinding(key) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var binding = normalize(key);
      if (binding == null || binding.key == null) {
        return debug.warn('Attempted to add invalid keyboard binding', binding);
      }
      if (typeof context === 'function') {
        context = { handler: context };
      }
      if (typeof handler === 'function') {
        handler = { handler: handler };
      }
      binding = (0, _extend2.default)(binding, context, handler);
      this.bindings[binding.key] = this.bindings[binding.key] || [];
      this.bindings[binding.key].push(binding);
    }
  }, {
    key: 'listen',
    value: function listen() {
      var _this2 = this;

      this.quill.root.addEventListener('keydown', function (evt) {
        if (evt.defaultPrevented) return;
        var which = evt.which || evt.keyCode;
        var bindings = (_this2.bindings[which] || []).filter(function (binding) {
          return Keyboard.match(evt, binding);
        });
        if (bindings.length === 0) return;
        var range = _this2.quill.getSelection();
        if (range == null || !_this2.quill.hasFocus()) return;

        var _quill$getLine = _this2.quill.getLine(range.index),
            _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
            line = _quill$getLine2[0],
            offset = _quill$getLine2[1];

        var _quill$getLeaf = _this2.quill.getLeaf(range.index),
            _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2),
            leafStart = _quill$getLeaf2[0],
            offsetStart = _quill$getLeaf2[1];

        var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.getLeaf(range.index + range.length),
            _ref2 = _slicedToArray(_ref, 2),
            leafEnd = _ref2[0],
            offsetEnd = _ref2[1];

        var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
        var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
        var curContext = {
          collapsed: range.length === 0,
          empty: range.length === 0 && line.length() <= 1,
          format: _this2.quill.getFormat(range),
          offset: offset,
          prefix: prefixText,
          suffix: suffixText
        };
        var prevented = bindings.some(function (binding) {
          if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
          if (binding.empty != null && binding.empty !== curContext.empty) return false;
          if (binding.offset != null && binding.offset !== curContext.offset) return false;
          if (Array.isArray(binding.format)) {
            // any format is present
            if (binding.format.every(function (name) {
              return curContext.format[name] == null;
            })) {
              return false;
            }
          } else if (_typeof(binding.format) === 'object') {
            // all formats must match
            if (!Object.keys(binding.format).every(function (name) {
              if (binding.format[name] === true) return curContext.format[name] != null;
              if (binding.format[name] === false) return curContext.format[name] == null;
              return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
            })) {
              return false;
            }
          }
          if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
          if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
          return binding.handler.call(_this2, range, curContext) !== true;
        });
        if (prevented) {
          evt.preventDefault();
        }
      });
    }
  }]);

  return Keyboard;
}(_module2.default);

Keyboard.keys = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};

Keyboard.DEFAULTS = {
  bindings: {
    'bold': makeFormatHandler('bold'),
    'italic': makeFormatHandler('italic'),
    'underline': makeFormatHandler('underline'),
    'indent': {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: Keyboard.keys.TAB,
      format: ['blockquote', 'indent', 'list'],
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '+1', _quill2.default.sources.USER);
      }
    },
    'outdent': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      format: ['blockquote', 'indent', 'list'],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '-1', _quill2.default.sources.USER);
      }
    },
    'outdent backspace': {
      key: Keyboard.keys.BACKSPACE,
      collapsed: true,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ['indent', 'list'],
      offset: 0,
      handler: function handler(range, context) {
        if (context.format.indent != null) {
          this.quill.format('indent', '-1', _quill2.default.sources.USER);
        } else if (context.format.list != null) {
          this.quill.format('list', false, _quill2.default.sources.USER);
        }
      }
    },
    'indent code-block': makeCodeBlockHandler(true),
    'outdent code-block': makeCodeBlockHandler(false),
    'remove tab': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      collapsed: true,
      prefix: /\t$/,
      handler: function handler(range) {
        this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
      }
    },
    'tab': {
      key: Keyboard.keys.TAB,
      handler: function handler(range) {
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert('\t');
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
      }
    },
    'list empty enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['list'],
      empty: true,
      handler: function handler(range, context) {
        this.quill.format('list', false, _quill2.default.sources.USER);
        if (context.format.indent) {
          this.quill.format('indent', false, _quill2.default.sources.USER);
        }
      }
    },
    'checklist enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: { list: 'checked' },
      handler: function handler(range) {
        var _quill$getLine3 = this.quill.getLine(range.index),
            _quill$getLine4 = _slicedToArray(_quill$getLine3, 2),
            line = _quill$getLine4[0],
            offset = _quill$getLine4[1];

        var formats = (0, _extend2.default)({}, line.formats(), { list: 'checked' });
        var delta = new _quillDelta2.default().retain(range.index).insert('\n', formats).retain(line.length() - offset - 1).retain(1, { list: 'unchecked' });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'header enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['header'],
      suffix: /^$/,
      handler: function handler(range, context) {
        var _quill$getLine5 = this.quill.getLine(range.index),
            _quill$getLine6 = _slicedToArray(_quill$getLine5, 2),
            line = _quill$getLine6[0],
            offset = _quill$getLine6[1];

        var delta = new _quillDelta2.default().retain(range.index).insert('\n', context.format).retain(line.length() - offset - 1).retain(1, { header: null });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'list autofill': {
      key: ' ',
      collapsed: true,
      format: { list: false },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler: function handler(range, context) {
        var length = context.prefix.length;

        var _quill$getLine7 = this.quill.getLine(range.index),
            _quill$getLine8 = _slicedToArray(_quill$getLine7, 2),
            line = _quill$getLine8[0],
            offset = _quill$getLine8[1];

        if (offset > length) return true;
        var value = void 0;
        switch (context.prefix.trim()) {
          case '[]':case '[ ]':
            value = 'unchecked';
            break;
          case '[x]':
            value = 'checked';
            break;
          case '-':case '*':
            value = 'bullet';
            break;
          default:
            value = 'ordered';
        }
        this.quill.insertText(range.index, ' ', _quill2.default.sources.USER);
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, { list: value });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
      }
    },
    'code exit': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['code-block'],
      prefix: /\n\n$/,
      suffix: /^\s+$/,
      handler: function handler(range) {
        var _quill$getLine9 = this.quill.getLine(range.index),
            _quill$getLine10 = _slicedToArray(_quill$getLine9, 2),
            line = _quill$getLine10[0],
            offset = _quill$getLine10[1];

        var delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, { 'code-block': null }).delete(1);
        this.quill.updateContents(delta, _quill2.default.sources.USER);
      }
    },
    'embed left': makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
    'embed left shift': makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
    'embed right': makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
    'embed right shift': makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
  }
};

function makeEmbedArrowHandler(key, shiftKey) {
  var _ref3;

  var where = key === Keyboard.keys.LEFT ? 'prefix' : 'suffix';
  return _ref3 = {
    key: key,
    shiftKey: shiftKey,
    altKey: null
  }, _defineProperty(_ref3, where, /^$/), _defineProperty(_ref3, 'handler', function handler(range) {
    var index = range.index;
    if (key === Keyboard.keys.RIGHT) {
      index += range.length + 1;
    }

    var _quill$getLeaf3 = this.quill.getLeaf(index),
        _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1),
        leaf = _quill$getLeaf4[0];

    if (!(leaf instanceof _parchment2.default.Embed)) return true;
    if (key === Keyboard.keys.LEFT) {
      if (shiftKey) {
        this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);
      }
    } else {
      if (shiftKey) {
        this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);
      }
    }
    return false;
  }), _ref3;
}

function handleBackspace(range, context) {
  if (range.index === 0 || this.quill.getLength() <= 1) return;

  var _quill$getLine11 = this.quill.getLine(range.index),
      _quill$getLine12 = _slicedToArray(_quill$getLine11, 1),
      line = _quill$getLine12[0];

  var formats = {};
  if (context.offset === 0) {
    var _quill$getLine13 = this.quill.getLine(range.index - 1),
        _quill$getLine14 = _slicedToArray(_quill$getLine13, 1),
        prev = _quill$getLine14[0];

    if (prev != null && prev.length() > 1) {
      var curFormats = line.formats();
      var prevFormats = this.quill.getFormat(range.index - 1, 1);
      formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
    }
  }
  // Check for astral symbols
  var length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
  this.quill.deleteText(range.index - length, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index - length, length, formats, _quill2.default.sources.USER);
  }
  this.quill.focus();
}

function handleDelete(range, context) {
  // Check for astral symbols
  var length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
  if (range.index >= this.quill.getLength() - length) return;
  var formats = {},
      nextLength = 0;

  var _quill$getLine15 = this.quill.getLine(range.index),
      _quill$getLine16 = _slicedToArray(_quill$getLine15, 1),
      line = _quill$getLine16[0];

  if (context.offset >= line.length() - 1) {
    var _quill$getLine17 = this.quill.getLine(range.index + 1),
        _quill$getLine18 = _slicedToArray(_quill$getLine17, 1),
        next = _quill$getLine18[0];

    if (next) {
      var curFormats = line.formats();
      var nextFormats = this.quill.getFormat(range.index, 1);
      formats = _op2.default.attributes.diff(curFormats, nextFormats) || {};
      nextLength = next.length();
    }
  }
  this.quill.deleteText(range.index, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill2.default.sources.USER);
  }
}

function handleDeleteRange(range) {
  var lines = this.quill.getLines(range);
  var formats = {};
  if (lines.length > 1) {
    var firstFormats = lines[0].formats();
    var lastFormats = lines[lines.length - 1].formats();
    formats = _op2.default.attributes.diff(lastFormats, firstFormats) || {};
  }
  this.quill.deleteText(range, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);
  }
  this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
  this.quill.focus();
}

function handleEnter(range, context) {
  var _this3 = this;

  if (range.length > 0) {
    this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
  }
  var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
    if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
      lineFormats[format] = context.format[format];
    }
    return lineFormats;
  }, {});
  this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER);
  // Earlier scroll.deleteAt might have messed up our selection,
  // so insertText's built in selection preservation is not reliable
  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
  this.quill.focus();
  Object.keys(context.format).forEach(function (name) {
    if (lineFormats[name] != null) return;
    if (Array.isArray(context.format[name])) return;
    if (name === 'link') return;
    _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
  });
}

function makeCodeBlockHandler(indent) {
  return {
    key: Keyboard.keys.TAB,
    shiftKey: !indent,
    format: { 'code-block': true },
    handler: function handler(range) {
      var CodeBlock = _parchment2.default.query('code-block');
      var index = range.index,
          length = range.length;

      var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index),
          _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
          block = _quill$scroll$descend2[0],
          offset = _quill$scroll$descend2[1];

      if (block == null) return;
      var scrollIndex = this.quill.getIndex(block);
      var start = block.newlineIndex(offset, true) + 1;
      var end = block.newlineIndex(scrollIndex + offset + length);
      var lines = block.domNode.textContent.slice(start, end).split('\n');
      offset = 0;
      lines.forEach(function (line, i) {
        if (indent) {
          block.insertAt(start + offset, CodeBlock.TAB);
          offset += CodeBlock.TAB.length;
          if (i === 0) {
            index += CodeBlock.TAB.length;
          } else {
            length += CodeBlock.TAB.length;
          }
        } else if (line.startsWith(CodeBlock.TAB)) {
          block.deleteAt(start + offset, CodeBlock.TAB.length);
          offset -= CodeBlock.TAB.length;
          if (i === 0) {
            index -= CodeBlock.TAB.length;
          } else {
            length -= CodeBlock.TAB.length;
          }
        }
        offset += line.length + 1;
      });
      this.quill.update(_quill2.default.sources.USER);
      this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
    }
  };
}

function makeFormatHandler(format) {
  return {
    key: format[0].toUpperCase(),
    shortKey: true,
    handler: function handler(range, context) {
      this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
    }
  };
}

function normalize(binding) {
  if (typeof binding === 'string' || typeof binding === 'number') {
    return normalize({ key: binding });
  }
  if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
    binding = (0, _clone2.default)(binding, false);
  }
  if (typeof binding.key === 'string') {
    if (Keyboard.keys[binding.key.toUpperCase()] != null) {
      binding.key = Keyboard.keys[binding.key.toUpperCase()];
    } else if (binding.key.length === 1) {
      binding.key = binding.key.toUpperCase().charCodeAt(0);
    } else {
      return null;
    }
  }
  if (binding.shortKey) {
    binding[SHORTKEY] = binding.shortKey;
    delete binding.shortKey;
  }
  return binding;
}

exports.default = Keyboard;
exports.SHORTKEY = SHORTKEY;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cursor = function (_Parchment$Embed) {
  _inherits(Cursor, _Parchment$Embed);

  _createClass(Cursor, null, [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  function Cursor(domNode, selection) {
    _classCallCheck(this, Cursor);

    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

    _this.selection = selection;
    _this.textNode = document.createTextNode(Cursor.CONTENTS);
    _this.domNode.appendChild(_this.textNode);
    _this._length = 0;
    return _this;
  }

  _createClass(Cursor, [{
    key: 'detach',
    value: function detach() {
      // super.detach() will also clear domNode.__blot
      if (this.parent != null) this.parent.removeChild(this);
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (this._length !== 0) {
        return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
      }
      var target = this,
          index = 0;
      while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
        index += target.offset(target.parent);
        target = target.parent;
      }
      if (target != null) {
        this._length = Cursor.CONTENTS.length;
        target.optimize();
        target.formatAt(index, Cursor.CONTENTS.length, name, value);
        this._length = 0;
      }
    }
  }, {
    key: 'index',
    value: function index(node, offset) {
      if (node === this.textNode) return 0;
      return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'length',
    value: function length() {
      return this._length;
    }
  }, {
    key: 'position',
    value: function position() {
      return [this.textNode, this.textNode.data.length];
    }
  }, {
    key: 'remove',
    value: function remove() {
      _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
      this.parent = null;
    }
  }, {
    key: 'restore',
    value: function restore() {
      if (this.selection.composing || this.parent == null) return;
      var textNode = this.textNode;
      var range = this.selection.getNativeRange();
      var restoreText = void 0,
          start = void 0,
          end = void 0;
      if (range != null && range.start.node === textNode && range.end.node === textNode) {
        var _ref = [textNode, range.start.offset, range.end.offset];
        restoreText = _ref[0];
        start = _ref[1];
        end = _ref[2];
      }
      // Link format will insert text outside of anchor tag
      while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
      }
      if (this.textNode.data !== Cursor.CONTENTS) {
        var text = this.textNode.data.split(Cursor.CONTENTS).join('');
        if (this.next instanceof _text2.default) {
          restoreText = this.next.domNode;
          this.next.insertAt(0, text);
          this.textNode.data = Cursor.CONTENTS;
        } else {
          this.textNode.data = text;
          this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
          this.textNode = document.createTextNode(Cursor.CONTENTS);
          this.domNode.appendChild(this.textNode);
        }
      }
      this.remove();
      if (start != null) {
        var _map = [start, end].map(function (offset) {
          return Math.max(0, Math.min(restoreText.data.length, offset - 1));
        });

        var _map2 = _slicedToArray(_map, 2);

        start = _map2[0];
        end = _map2[1];

        return {
          startNode: restoreText,
          startOffset: start,
          endNode: restoreText,
          endOffset: end
        };
      }
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      if (mutations.some(function (mutation) {
        return mutation.type === 'characterData' && mutation.target === _this2.textNode;
      })) {
        var range = this.restore();
        if (range) context.range = range;
      }
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }]);

  return Cursor;
}(_parchment2.default.Embed);

Cursor.blotName = 'cursor';
Cursor.className = 'ql-cursor';
Cursor.tagName = 'span';
Cursor.CONTENTS = '\uFEFF'; // Zero width no break space


exports.default = Cursor;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Parchment$Container) {
  _inherits(Container, _Parchment$Container);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  return Container;
}(_parchment2.default.Container);

Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

exports.default = Container;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorAttributor = function (_Parchment$Attributor) {
  _inherits(ColorAttributor, _Parchment$Attributor);

  function ColorAttributor() {
    _classCallCheck(this, ColorAttributor);

    return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
  }

  _createClass(ColorAttributor, [{
    key: 'value',
    value: function value(domNode) {
      var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
      if (!value.startsWith('rgb(')) return value;
      value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
      return '#' + value.split(',').map(function (component) {
        return ('00' + parseInt(component).toString(16)).slice(-2);
      }).join('');
    }
  }]);

  return ColorAttributor;
}(_parchment2.default.Attributor.Style);

var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
  scope: _parchment2.default.Scope.INLINE
});
var ColorStyle = new ColorAttributor('color', 'color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.ColorAttributor = ColorAttributor;
exports.ColorClass = ColorClass;
exports.ColorStyle = ColorStyle;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitize = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Inline) {
  _inherits(Link, _Inline);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'format',
    value: function format(name, value) {
      if (name !== this.statics.blotName || !value) return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'format', this).call(this, name, value);
      value = this.constructor.sanitize(value);
      this.domNode.setAttribute('href', value);
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Link.__proto__ || Object.getPrototypeOf(Link), 'create', this).call(this, value);
      value = this.sanitize(value);
      node.setAttribute('href', value);
      node.setAttribute('rel', 'noopener noreferrer');
      node.setAttribute('target', '_blank');
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return domNode.getAttribute('href');
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return _sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
    }
  }]);

  return Link;
}(_inline2.default);

Link.blotName = 'link';
Link.tagName = 'A';
Link.SANITIZED_URL = 'about:blank';
Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];

function _sanitize(url, protocols) {
  var anchor = document.createElement('a');
  anchor.href = url;
  var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}

exports.default = Link;
exports.sanitize = _sanitize;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _dropdown = __webpack_require__(107);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var optionsCounter = 0;

function toggleAriaAttribute(element, attribute) {
  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));
}

var Picker = function () {
  function Picker(select) {
    var _this = this;

    _classCallCheck(this, Picker);

    this.select = select;
    this.container = document.createElement('span');
    this.buildPicker();
    this.select.style.display = 'none';
    this.select.parentNode.insertBefore(this.container, this.select);

    this.label.addEventListener('mousedown', function () {
      _this.togglePicker();
    });
    this.label.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        // Allows the "Enter" key to open the picker
        case _keyboard2.default.keys.ENTER:
          _this.togglePicker();
          break;

        // Allows the "Escape" key to close the picker
        case _keyboard2.default.keys.ESCAPE:
          _this.escape();
          event.preventDefault();
          break;
        default:
      }
    });
    this.select.addEventListener('change', this.update.bind(this));
  }

  _createClass(Picker, [{
    key: 'togglePicker',
    value: function togglePicker() {
      this.container.classList.toggle('ql-expanded');
      // Toggle aria-expanded and aria-hidden to make the picker accessible
      toggleAriaAttribute(this.label, 'aria-expanded');
      toggleAriaAttribute(this.options, 'aria-hidden');
    }
  }, {
    key: 'buildItem',
    value: function buildItem(option) {
      var _this2 = this;

      var item = document.createElement('span');
      item.tabIndex = '0';
      item.setAttribute('role', 'button');

      item.classList.add('ql-picker-item');
      if (option.hasAttribute('value')) {
        item.setAttribute('data-value', option.getAttribute('value'));
      }
      if (option.textContent) {
        item.setAttribute('data-label', option.textContent);
      }
      item.addEventListener('click', function () {
        _this2.selectItem(item, true);
      });
      item.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
          // Allows the "Enter" key to select an item
          case _keyboard2.default.keys.ENTER:
            _this2.selectItem(item, true);
            event.preventDefault();
            break;

          // Allows the "Escape" key to close the picker
          case _keyboard2.default.keys.ESCAPE:
            _this2.escape();
            event.preventDefault();
            break;
          default:
        }
      });

      return item;
    }
  }, {
    key: 'buildLabel',
    value: function buildLabel() {
      var label = document.createElement('span');
      label.classList.add('ql-picker-label');
      label.innerHTML = _dropdown2.default;
      label.tabIndex = '0';
      label.setAttribute('role', 'button');
      label.setAttribute('aria-expanded', 'false');
      this.container.appendChild(label);
      return label;
    }
  }, {
    key: 'buildOptions',
    value: function buildOptions() {
      var _this3 = this;

      var options = document.createElement('span');
      options.classList.add('ql-picker-options');

      // Don't want screen readers to read this until options are visible
      options.setAttribute('aria-hidden', 'true');
      options.tabIndex = '-1';

      // Need a unique id for aria-controls
      options.id = 'ql-picker-options-' + optionsCounter;
      optionsCounter += 1;
      this.label.setAttribute('aria-controls', options.id);

      this.options = options;

      [].slice.call(this.select.options).forEach(function (option) {
        var item = _this3.buildItem(option);
        options.appendChild(item);
        if (option.selected === true) {
          _this3.selectItem(item);
        }
      });
      this.container.appendChild(options);
    }
  }, {
    key: 'buildPicker',
    value: function buildPicker() {
      var _this4 = this;

      [].slice.call(this.select.attributes).forEach(function (item) {
        _this4.container.setAttribute(item.name, item.value);
      });
      this.container.classList.add('ql-picker');
      this.label = this.buildLabel();
      this.buildOptions();
    }
  }, {
    key: 'escape',
    value: function escape() {
      var _this5 = this;

      // Close menu and return focus to trigger label
      this.close();
      // Need setTimeout for accessibility to ensure that the browser executes
      // focus on the next process thread and after any DOM content changes
      setTimeout(function () {
        return _this5.label.focus();
      }, 1);
    }
  }, {
    key: 'close',
    value: function close() {
      this.container.classList.remove('ql-expanded');
      this.label.setAttribute('aria-expanded', 'false');
      this.options.setAttribute('aria-hidden', 'true');
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item) {
      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var selected = this.container.querySelector('.ql-selected');
      if (item === selected) return;
      if (selected != null) {
        selected.classList.remove('ql-selected');
      }
      if (item == null) return;
      item.classList.add('ql-selected');
      this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
      if (item.hasAttribute('data-value')) {
        this.label.setAttribute('data-value', item.getAttribute('data-value'));
      } else {
        this.label.removeAttribute('data-value');
      }
      if (item.hasAttribute('data-label')) {
        this.label.setAttribute('data-label', item.getAttribute('data-label'));
      } else {
        this.label.removeAttribute('data-label');
      }
      if (trigger) {
        if (typeof Event === 'function') {
          this.select.dispatchEvent(new Event('change'));
        } else if ((typeof Event === 'undefined' ? 'undefined' : _typeof(Event)) === 'object') {
          // IE11
          var event = document.createEvent('Event');
          event.initEvent('change', true, true);
          this.select.dispatchEvent(event);
        }
        this.close();
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var option = void 0;
      if (this.select.selectedIndex > -1) {
        var item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
        option = this.select.options[this.select.selectedIndex];
        this.selectItem(item);
      } else {
        this.selectItem(null);
      }
      var isActive = option != null && option !== this.select.querySelector('option[selected]');
      this.label.classList.toggle('ql-active', isActive);
    }
  }]);

  return Picker;
}();

exports.default = Picker;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

var _cursor = __webpack_require__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _embed = __webpack_require__(35);

var _embed2 = _interopRequireDefault(_embed);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _scroll = __webpack_require__(22);

var _scroll2 = _interopRequireDefault(_scroll);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _clipboard = __webpack_require__(55);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _history = __webpack_require__(42);

var _history2 = _interopRequireDefault(_history);

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_quill2.default.register({
  'blots/block': _block2.default,
  'blots/block/embed': _block.BlockEmbed,
  'blots/break': _break2.default,
  'blots/container': _container2.default,
  'blots/cursor': _cursor2.default,
  'blots/embed': _embed2.default,
  'blots/inline': _inline2.default,
  'blots/scroll': _scroll2.default,
  'blots/text': _text2.default,

  'modules/clipboard': _clipboard2.default,
  'modules/history': _history2.default,
  'modules/keyboard': _keyboard2.default
});

_parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

exports.default = _quill2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(1);
var ShadowBlot = /** @class */ (function () {
    function ShadowBlot(domNode) {
        this.domNode = domNode;
        // @ts-ignore
        this.domNode[Registry.DATA_KEY] = { blot: this };
    }
    Object.defineProperty(ShadowBlot.prototype, "statics", {
        // Hack for accessing inherited static methods
        get: function () {
            return this.constructor;
        },
        enumerable: true,
        configurable: true
    });
    ShadowBlot.create = function (value) {
        if (this.tagName == null) {
            throw new Registry.ParchmentError('Blot definition missing tagName');
        }
        var node;
        if (Array.isArray(this.tagName)) {
            if (typeof value === 'string') {
                value = value.toUpperCase();
                if (parseInt(value).toString() === value) {
                    value = parseInt(value);
                }
            }
            if (typeof value === 'number') {
                node = document.createElement(this.tagName[value - 1]);
            }
            else if (this.tagName.indexOf(value) > -1) {
                node = document.createElement(value);
            }
            else {
                node = document.createElement(this.tagName[0]);
            }
        }
        else {
            node = document.createElement(this.tagName);
        }
        if (this.className) {
            node.classList.add(this.className);
        }
        return node;
    };
    ShadowBlot.prototype.attach = function () {
        if (this.parent != null) {
            this.scroll = this.parent.scroll;
        }
    };
    ShadowBlot.prototype.clone = function () {
        var domNode = this.domNode.cloneNode(false);
        return Registry.create(domNode);
    };
    ShadowBlot.prototype.detach = function () {
        if (this.parent != null)
            this.parent.removeChild(this);
        // @ts-ignore
        delete this.domNode[Registry.DATA_KEY];
    };
    ShadowBlot.prototype.deleteAt = function (index, length) {
        var blot = this.isolate(index, length);
        blot.remove();
    };
    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
        var blot = this.isolate(index, length);
        if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
            blot.wrap(name, value);
        }
        else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
            var parent = Registry.create(this.statics.scope);
            blot.wrap(parent);
            parent.format(name, value);
        }
    };
    ShadowBlot.prototype.insertAt = function (index, value, def) {
        var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
        var ref = this.split(index);
        this.parent.insertBefore(blot, ref);
    };
    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
        if (refBlot === void 0) { refBlot = null; }
        if (this.parent != null) {
            this.parent.children.remove(this);
        }
        var refDomNode = null;
        parentBlot.children.insertBefore(this, refBlot);
        if (refBlot != null) {
            refDomNode = refBlot.domNode;
        }
        if (this.domNode.parentNode != parentBlot.domNode ||
            this.domNode.nextSibling != refDomNode) {
            parentBlot.domNode.insertBefore(this.domNode, refDomNode);
        }
        this.parent = parentBlot;
        this.attach();
    };
    ShadowBlot.prototype.isolate = function (index, length) {
        var target = this.split(index);
        target.split(length);
        return target;
    };
    ShadowBlot.prototype.length = function () {
        return 1;
    };
    ShadowBlot.prototype.offset = function (root) {
        if (root === void 0) { root = this.parent; }
        if (this.parent == null || this == root)
            return 0;
        return this.parent.children.offset(this) + this.parent.offset(root);
    };
    ShadowBlot.prototype.optimize = function (context) {
        // TODO clean up once we use WeakMap
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY] != null) {
            // @ts-ignore
            delete this.domNode[Registry.DATA_KEY].mutations;
        }
    };
    ShadowBlot.prototype.remove = function () {
        if (this.domNode.parentNode != null) {
            this.domNode.parentNode.removeChild(this.domNode);
        }
        this.detach();
    };
    ShadowBlot.prototype.replace = function (target) {
        if (target.parent == null)
            return;
        target.parent.insertBefore(this, target.next);
        target.remove();
    };
    ShadowBlot.prototype.replaceWith = function (name, value) {
        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
        replacement.replace(this);
        return replacement;
    };
    ShadowBlot.prototype.split = function (index, force) {
        return index === 0 ? this : this.next;
    };
    ShadowBlot.prototype.update = function (mutations, context) {
        // Nothing to do by default
    };
    ShadowBlot.prototype.wrap = function (name, value) {
        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
        if (this.parent != null) {
            this.parent.insertBefore(wrapper, this.next);
        }
        wrapper.appendChild(this);
        return wrapper;
    };
    ShadowBlot.blotName = 'abstract';
    return ShadowBlot;
}());
exports.default = ShadowBlot;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
var class_1 = __webpack_require__(32);
var style_1 = __webpack_require__(33);
var Registry = __webpack_require__(1);
var AttributorStore = /** @class */ (function () {
    function AttributorStore(domNode) {
        this.attributes = {};
        this.domNode = domNode;
        this.build();
    }
    AttributorStore.prototype.attribute = function (attribute, value) {
        // verb
        if (value) {
            if (attribute.add(this.domNode, value)) {
                if (attribute.value(this.domNode) != null) {
                    this.attributes[attribute.attrName] = attribute;
                }
                else {
                    delete this.attributes[attribute.attrName];
                }
            }
        }
        else {
            attribute.remove(this.domNode);
            delete this.attributes[attribute.attrName];
        }
    };
    AttributorStore.prototype.build = function () {
        var _this = this;
        this.attributes = {};
        var attributes = attributor_1.default.keys(this.domNode);
        var classes = class_1.default.keys(this.domNode);
        var styles = style_1.default.keys(this.domNode);
        attributes
            .concat(classes)
            .concat(styles)
            .forEach(function (name) {
            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
            if (attr instanceof attributor_1.default) {
                _this.attributes[attr.attrName] = attr;
            }
        });
    };
    AttributorStore.prototype.copy = function (target) {
        var _this = this;
        Object.keys(this.attributes).forEach(function (key) {
            var value = _this.attributes[key].value(_this.domNode);
            target.format(key, value);
        });
    };
    AttributorStore.prototype.move = function (target) {
        var _this = this;
        this.copy(target);
        Object.keys(this.attributes).forEach(function (key) {
            _this.attributes[key].remove(_this.domNode);
        });
        this.attributes = {};
    };
    AttributorStore.prototype.values = function () {
        var _this = this;
        return Object.keys(this.attributes).reduce(function (attributes, name) {
            attributes[name] = _this.attributes[name].value(_this.domNode);
            return attributes;
        }, {});
    };
    return AttributorStore;
}());
exports.default = AttributorStore;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
function match(node, prefix) {
    var className = node.getAttribute('class') || '';
    return className.split(/\s+/).filter(function (name) {
        return name.indexOf(prefix + "-") === 0;
    });
}
var ClassAttributor = /** @class */ (function (_super) {
    __extends(ClassAttributor, _super);
    function ClassAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassAttributor.keys = function (node) {
        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
            return name
                .split('-')
                .slice(0, -1)
                .join('-');
        });
    };
    ClassAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        this.remove(node);
        node.classList.add(this.keyName + "-" + value);
        return true;
    };
    ClassAttributor.prototype.remove = function (node) {
        var matches = match(node, this.keyName);
        matches.forEach(function (name) {
            node.classList.remove(name);
        });
        if (node.classList.length === 0) {
            node.removeAttribute('class');
        }
    };
    ClassAttributor.prototype.value = function (node) {
        var result = match(node, this.keyName)[0] || '';
        var value = result.slice(this.keyName.length + 1); // +1 for hyphen
        return this.canAdd(node, value) ? value : '';
    };
    return ClassAttributor;
}(attributor_1.default));
exports.default = ClassAttributor;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
function camelize(name) {
    var parts = name.split('-');
    var rest = parts
        .slice(1)
        .map(function (part) {
        return part[0].toUpperCase() + part.slice(1);
    })
        .join('');
    return parts[0] + rest;
}
var StyleAttributor = /** @class */ (function (_super) {
    __extends(StyleAttributor, _super);
    function StyleAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyleAttributor.keys = function (node) {
        return (node.getAttribute('style') || '').split(';').map(function (value) {
            var arr = value.split(':');
            return arr[0].trim();
        });
    };
    StyleAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        // @ts-ignore
        node.style[camelize(this.keyName)] = value;
        return true;
    };
    StyleAttributor.prototype.remove = function (node) {
        // @ts-ignore
        node.style[camelize(this.keyName)] = '';
        if (!node.getAttribute('style')) {
            node.removeAttribute('style');
        }
    };
    StyleAttributor.prototype.value = function (node) {
        // @ts-ignore
        var value = node.style[camelize(this.keyName)];
        return this.canAdd(node, value) ? value : '';
    };
    return StyleAttributor;
}(attributor_1.default));
exports.default = StyleAttributor;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
  function Theme(quill, options) {
    _classCallCheck(this, Theme);

    this.quill = quill;
    this.options = options;
    this.modules = {};
  }

  _createClass(Theme, [{
    key: 'init',
    value: function init() {
      var _this = this;

      Object.keys(this.options.modules).forEach(function (name) {
        if (_this.modules[name] == null) {
          _this.addModule(name);
        }
      });
    }
  }, {
    key: 'addModule',
    value: function addModule(name) {
      var moduleClass = this.quill.constructor.import('modules/' + name);
      this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
      return this.modules[name];
    }
  }]);

  return Theme;
}();

Theme.DEFAULTS = {
  modules: {}
};
Theme.themes = {
  'default': Theme
};

exports.default = Theme;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GUARD_TEXT = '\uFEFF';

var Embed = function (_Parchment$Embed) {
  _inherits(Embed, _Parchment$Embed);

  function Embed(node) {
    _classCallCheck(this, Embed);

    var _this = _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).call(this, node));

    _this.contentNode = document.createElement('span');
    _this.contentNode.setAttribute('contenteditable', false);
    [].slice.call(_this.domNode.childNodes).forEach(function (childNode) {
      _this.contentNode.appendChild(childNode);
    });
    _this.leftGuard = document.createTextNode(GUARD_TEXT);
    _this.rightGuard = document.createTextNode(GUARD_TEXT);
    _this.domNode.appendChild(_this.leftGuard);
    _this.domNode.appendChild(_this.contentNode);
    _this.domNode.appendChild(_this.rightGuard);
    return _this;
  }

  _createClass(Embed, [{
    key: 'index',
    value: function index(node, offset) {
      if (node === this.leftGuard) return 0;
      if (node === this.rightGuard) return 1;
      return _get(Embed.prototype.__proto__ || Object.getPrototypeOf(Embed.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'restore',
    value: function restore(node) {
      var range = void 0,
          textNode = void 0;
      var text = node.data.split(GUARD_TEXT).join('');
      if (node === this.leftGuard) {
        if (this.prev instanceof _text2.default) {
          var prevLength = this.prev.length();
          this.prev.insertAt(prevLength, text);
          range = {
            startNode: this.prev.domNode,
            startOffset: prevLength + text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      } else if (node === this.rightGuard) {
        if (this.next instanceof _text2.default) {
          this.next.insertAt(0, text);
          range = {
            startNode: this.next.domNode,
            startOffset: text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this.next);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      }
      node.data = GUARD_TEXT;
      return range;
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      mutations.forEach(function (mutation) {
        if (mutation.type === 'characterData' && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
          var range = _this2.restore(mutation.target);
          if (range) context.range = range;
        }
      });
    }
  }]);

  return Embed;
}(_parchment2.default.Embed);

exports.default = Embed;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['right', 'center', 'justify']
};

var AlignAttribute = new _parchment2.default.Attributor.Attribute('align', 'align', config);
var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

exports.AlignAttribute = AlignAttribute;
exports.AlignClass = AlignClass;
exports.AlignStyle = AlignStyle;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundStyle = exports.BackgroundClass = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _color = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
  scope: _parchment2.default.Scope.INLINE
});
var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.BackgroundClass = BackgroundClass;
exports.BackgroundStyle = BackgroundStyle;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['rtl']
};

var DirectionAttribute = new _parchment2.default.Attributor.Attribute('direction', 'dir', config);
var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

exports.DirectionAttribute = DirectionAttribute;
exports.DirectionClass = DirectionClass;
exports.DirectionStyle = DirectionStyle;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontClass = exports.FontStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['serif', 'monospace']
};

var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);

var FontStyleAttributor = function (_Parchment$Attributor) {
  _inherits(FontStyleAttributor, _Parchment$Attributor);

  function FontStyleAttributor() {
    _classCallCheck(this, FontStyleAttributor);

    return _possibleConstructorReturn(this, (FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(this, arguments));
  }

  _createClass(FontStyleAttributor, [{
    key: 'value',
    value: function value(node) {
      return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype), 'value', this).call(this, node).replace(/["']/g, '');
    }
  }]);

  return FontStyleAttributor;
}(_parchment2.default.Attributor.Style);

var FontStyle = new FontStyleAttributor('font', 'font-family', config);

exports.FontStyle = FontStyle;
exports.FontClass = FontClass;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeStyle = exports.SizeClass = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['small', 'large', 'huge']
});
var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['10px', '18px', '32px']
});

exports.SizeClass = SizeClass;
exports.SizeStyle = SizeStyle;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'align': {
    '': __webpack_require__(76),
    'center': __webpack_require__(77),
    'right': __webpack_require__(78),
    'justify': __webpack_require__(79)
  },
  'background': __webpack_require__(80),
  'blockquote': __webpack_require__(81),
  'bold': __webpack_require__(82),
  'clean': __webpack_require__(83),
  'code': __webpack_require__(58),
  'code-block': __webpack_require__(58),
  'color': __webpack_require__(84),
  'direction': {
    '': __webpack_require__(85),
    'rtl': __webpack_require__(86)
  },
  'float': {
    'center': __webpack_require__(87),
    'full': __webpack_require__(88),
    'left': __webpack_require__(89),
    'right': __webpack_require__(90)
  },
  'formula': __webpack_require__(91),
  'header': {
    '1': __webpack_require__(92),
    '2': __webpack_require__(93)
  },
  'italic': __webpack_require__(94),
  'image': __webpack_require__(95),
  'indent': {
    '+1': __webpack_require__(96),
    '-1': __webpack_require__(97)
  },
  'link': __webpack_require__(98),
  'list': {
    'ordered': __webpack_require__(99),
    'bullet': __webpack_require__(100),
    'check': __webpack_require__(101)
  },
  'script': {
    'sub': __webpack_require__(102),
    'super': __webpack_require__(103)
  },
  'strike': __webpack_require__(104),
  'underline': __webpack_require__(105),
  'video': __webpack_require__(106)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastChangeIndex = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_Module) {
  _inherits(History, _Module);

  function History(quill, options) {
    _classCallCheck(this, History);

    var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

    _this.lastRecorded = 0;
    _this.ignoreChange = false;
    _this.clear();
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
      if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
      if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
        _this.record(delta, oldDelta);
      } else {
        _this.transform(delta);
      }
    });
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true }, _this.undo.bind(_this));
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true, shiftKey: true }, _this.redo.bind(_this));
    if (/Win/i.test(navigator.platform)) {
      _this.quill.keyboard.addBinding({ key: 'Y', shortKey: true }, _this.redo.bind(_this));
    }
    return _this;
  }

  _createClass(History, [{
    key: 'change',
    value: function change(source, dest) {
      if (this.stack[source].length === 0) return;
      var delta = this.stack[source].pop();
      this.stack[dest].push(delta);
      this.lastRecorded = 0;
      this.ignoreChange = true;
      this.quill.updateContents(delta[source], _quill2.default.sources.USER);
      this.ignoreChange = false;
      var index = getLastChangeIndex(delta[source]);
      this.quill.setSelection(index);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.stack = { undo: [], redo: [] };
    }
  }, {
    key: 'cutoff',
    value: function cutoff() {
      this.lastRecorded = 0;
    }
  }, {
    key: 'record',
    value: function record(changeDelta, oldDelta) {
      if (changeDelta.ops.length === 0) return;
      this.stack.redo = [];
      var undoDelta = this.quill.getContents().diff(oldDelta);
      var timestamp = Date.now();
      if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
        var delta = this.stack.undo.pop();
        undoDelta = undoDelta.compose(delta.undo);
        changeDelta = delta.redo.compose(changeDelta);
      } else {
        this.lastRecorded = timestamp;
      }
      this.stack.undo.push({
        redo: changeDelta,
        undo: undoDelta
      });
      if (this.stack.undo.length > this.options.maxStack) {
        this.stack.undo.shift();
      }
    }
  }, {
    key: 'redo',
    value: function redo() {
      this.change('redo', 'undo');
    }
  }, {
    key: 'transform',
    value: function transform(delta) {
      this.stack.undo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
      this.stack.redo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
    }
  }, {
    key: 'undo',
    value: function undo() {
      this.change('undo', 'redo');
    }
  }]);

  return History;
}(_module2.default);

History.DEFAULTS = {
  delay: 1000,
  maxStack: 100,
  userOnly: false
};

function endsWithNewlineChange(delta) {
  var lastOp = delta.ops[delta.ops.length - 1];
  if (lastOp == null) return false;
  if (lastOp.insert != null) {
    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
  }
  if (lastOp.attributes != null) {
    return Object.keys(lastOp.attributes).some(function (attr) {
      return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
    });
  }
  return false;
}

function getLastChangeIndex(delta) {
  var deleteLength = delta.reduce(function (length, op) {
    length += op.delete || 0;
    return length;
  }, 0);
  var changeIndex = delta.length() - deleteLength;
  if (endsWithNewlineChange(delta)) {
    changeIndex -= 1;
  }
  return changeIndex;
}

exports.default = History;
exports.getLastChangeIndex = getLastChangeIndex;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseTooltip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _theme = __webpack_require__(34);

var _theme2 = _interopRequireDefault(_theme);

var _colorPicker = __webpack_require__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __webpack_require__(60);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

var _tooltip = __webpack_require__(61);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ALIGNS = [false, 'center', 'right', 'justify'];

var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];

var FONTS = [false, 'serif', 'monospace'];

var HEADERS = ['1', '2', '3', false];

var SIZES = ['small', false, 'large', 'huge'];

var BaseTheme = function (_Theme) {
  _inherits(BaseTheme, _Theme);

  function BaseTheme(quill, options) {
    _classCallCheck(this, BaseTheme);

    var _this = _possibleConstructorReturn(this, (BaseTheme.__proto__ || Object.getPrototypeOf(BaseTheme)).call(this, quill, options));

    var listener = function listener(e) {
      if (!document.body.contains(quill.root)) {
        return document.body.removeEventListener('click', listener);
      }
      if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
        _this.tooltip.hide();
      }
      if (_this.pickers != null) {
        _this.pickers.forEach(function (picker) {
          if (!picker.container.contains(e.target)) {
            picker.close();
          }
        });
      }
    };
    quill.emitter.listenDOM('click', document.body, listener);
    return _this;
  }

  _createClass(BaseTheme, [{
    key: 'addModule',
    value: function addModule(name) {
      var module = _get(BaseTheme.prototype.__proto__ || Object.getPrototypeOf(BaseTheme.prototype), 'addModule', this).call(this, name);
      if (name === 'toolbar') {
        this.extendToolbar(module);
      }
      return module;
    }
  }, {
    key: 'buildButtons',
    value: function buildButtons(buttons, icons) {
      buttons.forEach(function (button) {
        var className = button.getAttribute('class') || '';
        className.split(/\s+/).forEach(function (name) {
          if (!name.startsWith('ql-')) return;
          name = name.slice('ql-'.length);
          if (icons[name] == null) return;
          if (name === 'direction') {
            button.innerHTML = icons[name][''] + icons[name]['rtl'];
          } else if (typeof icons[name] === 'string') {
            button.innerHTML = icons[name];
          } else {
            var value = button.value || '';
            if (value != null && icons[name][value]) {
              button.innerHTML = icons[name][value];
            }
          }
        });
      });
    }
  }, {
    key: 'buildPickers',
    value: function buildPickers(selects, icons) {
      var _this2 = this;

      this.pickers = selects.map(function (select) {
        if (select.classList.contains('ql-align')) {
          if (select.querySelector('option') == null) {
            fillSelect(select, ALIGNS);
          }
          return new _iconPicker2.default(select, icons.align);
        } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
          var format = select.classList.contains('ql-background') ? 'background' : 'color';
          if (select.querySelector('option') == null) {
            fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
          }
          return new _colorPicker2.default(select, icons[format]);
        } else {
          if (select.querySelector('option') == null) {
            if (select.classList.contains('ql-font')) {
              fillSelect(select, FONTS);
            } else if (select.classList.contains('ql-header')) {
              fillSelect(select, HEADERS);
            } else if (select.classList.contains('ql-size')) {
              fillSelect(select, SIZES);
            }
          }
          return new _picker2.default(select);
        }
      });
      var update = function update() {
        _this2.pickers.forEach(function (picker) {
          picker.update();
        });
      };
      this.quill.on(_emitter2.default.events.EDITOR_CHANGE, update);
    }
  }]);

  return BaseTheme;
}(_theme2.default);

BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula: function formula() {
          this.quill.theme.tooltip.edit('formula');
        },
        image: function image() {
          var _this3 = this;

          var fileInput = this.container.querySelector('input.ql-image[type=file]');
          if (fileInput == null) {
            fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
            fileInput.classList.add('ql-image');
            fileInput.addEventListener('change', function () {
              if (fileInput.files != null && fileInput.files[0] != null) {
                var reader = new FileReader();
                reader.onload = function (e) {
                  var range = _this3.quill.getSelection(true);
                  _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result }), _emitter2.default.sources.USER);
                  _this3.quill.setSelection(range.index + 1, _emitter2.default.sources.SILENT);
                  fileInput.value = "";
                };
                reader.readAsDataURL(fileInput.files[0]);
              }
            });
            this.container.appendChild(fileInput);
          }
          fileInput.click();
        },
        video: function video() {
          this.quill.theme.tooltip.edit('video');
        }
      }
    }
  }
});

var BaseTooltip = function (_Tooltip) {
  _inherits(BaseTooltip, _Tooltip);

  function BaseTooltip(quill, boundsContainer) {
    _classCallCheck(this, BaseTooltip);

    var _this4 = _possibleConstructorReturn(this, (BaseTooltip.__proto__ || Object.getPrototypeOf(BaseTooltip)).call(this, quill, boundsContainer));

    _this4.textbox = _this4.root.querySelector('input[type="text"]');
    _this4.listen();
    return _this4;
  }

  _createClass(BaseTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this5 = this;

      this.textbox.addEventListener('keydown', function (event) {
        if (_keyboard2.default.match(event, 'enter')) {
          _this5.save();
          event.preventDefault();
        } else if (_keyboard2.default.match(event, 'escape')) {
          _this5.cancel();
          event.preventDefault();
        }
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.hide();
    }
  }, {
    key: 'edit',
    value: function edit() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
      var preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.root.classList.remove('ql-hidden');
      this.root.classList.add('ql-editing');
      if (preview != null) {
        this.textbox.value = preview;
      } else if (mode !== this.root.getAttribute('data-mode')) {
        this.textbox.value = '';
      }
      this.position(this.quill.getBounds(this.quill.selection.savedRange));
      this.textbox.select();
      this.textbox.setAttribute('placeholder', this.textbox.getAttribute('data-' + mode) || '');
      this.root.setAttribute('data-mode', mode);
    }
  }, {
    key: 'restoreFocus',
    value: function restoreFocus() {
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.quill.focus();
      this.quill.scrollingContainer.scrollTop = scrollTop;
    }
  }, {
    key: 'save',
    value: function save() {
      var value = this.textbox.value;
      switch (this.root.getAttribute('data-mode')) {
        case 'link':
          {
            var scrollTop = this.quill.root.scrollTop;
            if (this.linkRange) {
              this.quill.formatText(this.linkRange, 'link', value, _emitter2.default.sources.USER);
              delete this.linkRange;
            } else {
              this.restoreFocus();
              this.quill.format('link', value, _emitter2.default.sources.USER);
            }
            this.quill.root.scrollTop = scrollTop;
            break;
          }
        case 'video':
          {
            value = extractVideoUrl(value);
          } // eslint-disable-next-line no-fallthrough
        case 'formula':
          {
            if (!value) break;
            var range = this.quill.getSelection(true);
            if (range != null) {
              var index = range.index + range.length;
              this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter2.default.sources.USER);
              if (this.root.getAttribute('data-mode') === 'formula') {
                this.quill.insertText(index + 1, ' ', _emitter2.default.sources.USER);
              }
              this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
            }
            break;
          }
        default:
      }
      this.textbox.value = '';
      this.hide();
    }
  }]);

  return BaseTooltip;
}(_tooltip2.default);

function extractVideoUrl(url) {
  var match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return (match[1] || 'https') + '://www.youtube.com/embed/' + match[2] + '?showinfo=0';
  }
  if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
    // eslint-disable-line no-cond-assign
    return (match[1] || 'https') + '://player.vimeo.com/video/' + match[2] + '/';
  }
  return url;
}

function fillSelect(select, values) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  values.forEach(function (value) {
    var option = document.createElement('option');
    if (value === defaultValue) {
      option.setAttribute('selected', 'selected');
    } else {
      option.setAttribute('value', value);
    }
    select.appendChild(option);
  });
}

exports.BaseTooltip = BaseTooltip;
exports.default = BaseTheme;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.append = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        this.insertBefore(nodes[0], null);
        if (nodes.length > 1) {
            this.append.apply(this, nodes.slice(1));
        }
    };
    LinkedList.prototype.contains = function (node) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            if (cur === node)
                return true;
        }
        return false;
    };
    LinkedList.prototype.insertBefore = function (node, refNode) {
        if (!node)
            return;
        node.next = refNode;
        if (refNode != null) {
            node.prev = refNode.prev;
            if (refNode.prev != null) {
                refNode.prev.next = node;
            }
            refNode.prev = node;
            if (refNode === this.head) {
                this.head = node;
            }
        }
        else if (this.tail != null) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        else {
            node.prev = null;
            this.head = this.tail = node;
        }
        this.length += 1;
    };
    LinkedList.prototype.offset = function (target) {
        var index = 0, cur = this.head;
        while (cur != null) {
            if (cur === target)
                return index;
            index += cur.length();
            cur = cur.next;
        }
        return -1;
    };
    LinkedList.prototype.remove = function (node) {
        if (!this.contains(node))
            return;
        if (node.prev != null)
            node.prev.next = node.next;
        if (node.next != null)
            node.next.prev = node.prev;
        if (node === this.head)
            this.head = node.next;
        if (node === this.tail)
            this.tail = node.prev;
        this.length -= 1;
    };
    LinkedList.prototype.iterator = function (curNode) {
        if (curNode === void 0) { curNode = this.head; }
        // TODO use yield when we can
        return function () {
            var ret = curNode;
            if (curNode != null)
                curNode = curNode.next;
            return ret;
        };
    };
    LinkedList.prototype.find = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var cur, next = this.iterator();
        while ((cur = next())) {
            var length = cur.length();
            if (index < length ||
                (inclusive && index === length && (cur.next == null || cur.next.length() !== 0))) {
                return [cur, index];
            }
            index -= length;
        }
        return [null, 0];
    };
    LinkedList.prototype.forEach = function (callback) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            callback(cur);
        }
    };
    LinkedList.prototype.forEachAt = function (index, length, callback) {
        if (length <= 0)
            return;
        var _a = this.find(index), startNode = _a[0], offset = _a[1];
        var cur, curIndex = index - offset, next = this.iterator(startNode);
        while ((cur = next()) && curIndex < index + length) {
            var curLength = cur.length();
            if (index > curIndex) {
                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
            }
            else {
                callback(cur, 0, Math.min(curLength, index + length - curIndex));
            }
            curIndex += curLength;
        }
    };
    LinkedList.prototype.map = function (callback) {
        return this.reduce(function (memo, cur) {
            memo.push(callback(cur));
            return memo;
        }, []);
    };
    LinkedList.prototype.reduce = function (callback, memo) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            memo = callback(memo, cur);
        }
        return memo;
    };
    return LinkedList;
}());
exports.default = LinkedList;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(17);
var Registry = __webpack_require__(1);
var OBSERVER_CONFIG = {
    attributes: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
};
var MAX_OPTIMIZE_ITERATIONS = 100;
var ScrollBlot = /** @class */ (function (_super) {
    __extends(ScrollBlot, _super);
    function ScrollBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.scroll = _this;
        _this.observer = new MutationObserver(function (mutations) {
            _this.update(mutations);
        });
        _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
        _this.attach();
        return _this;
    }
    ScrollBlot.prototype.detach = function () {
        _super.prototype.detach.call(this);
        this.observer.disconnect();
    };
    ScrollBlot.prototype.deleteAt = function (index, length) {
        this.update();
        if (index === 0 && length === this.length()) {
            this.children.forEach(function (child) {
                child.remove();
            });
        }
        else {
            _super.prototype.deleteAt.call(this, index, length);
        }
    };
    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
        this.update();
        _super.prototype.formatAt.call(this, index, length, name, value);
    };
    ScrollBlot.prototype.insertAt = function (index, value, def) {
        this.update();
        _super.prototype.insertAt.call(this, index, value, def);
    };
    ScrollBlot.prototype.optimize = function (mutations, context) {
        var _this = this;
        if (mutations === void 0) { mutations = []; }
        if (context === void 0) { context = {}; }
        _super.prototype.optimize.call(this, context);
        // We must modify mutations directly, cannot make copy and then modify
        var records = [].slice.call(this.observer.takeRecords());
        // Array.push currently seems to be implemented by a non-tail recursive function
        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());
        while (records.length > 0)
            mutations.push(records.pop());
        // TODO use WeakMap
        var mark = function (blot, markParent) {
            if (markParent === void 0) { markParent = true; }
            if (blot == null || blot === _this)
                return;
            if (blot.domNode.parentNode == null)
                return;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [];
            }
            if (markParent)
                mark(blot.parent);
        };
        var optimize = function (blot) {
            // Post-order traversal
            if (
            // @ts-ignore
            blot.domNode[Registry.DATA_KEY] == null ||
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations == null) {
                return;
            }
            if (blot instanceof container_1.default) {
                blot.children.forEach(optimize);
            }
            blot.optimize(context);
        };
        var remaining = mutations;
        for (var i = 0; remaining.length > 0; i += 1) {
            if (i >= MAX_OPTIMIZE_ITERATIONS) {
                throw new Error('[Parchment] Maximum optimize iterations reached');
            }
            remaining.forEach(function (mutation) {
                var blot = Registry.find(mutation.target, true);
                if (blot == null)
                    return;
                if (blot.domNode === mutation.target) {
                    if (mutation.type === 'childList') {
                        mark(Registry.find(mutation.previousSibling, false));
                        [].forEach.call(mutation.addedNodes, function (node) {
                            var child = Registry.find(node, false);
                            mark(child, false);
                            if (child instanceof container_1.default) {
                                child.children.forEach(function (grandChild) {
                                    mark(grandChild, false);
                                });
                            }
                        });
                    }
                    else if (mutation.type === 'attributes') {
                        mark(blot.prev);
                    }
                }
                mark(blot);
            });
            this.children.forEach(optimize);
            remaining = [].slice.call(this.observer.takeRecords());
            records = remaining.slice();
            while (records.length > 0)
                mutations.push(records.pop());
        }
    };
    ScrollBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (context === void 0) { context = {}; }
        mutations = mutations || this.observer.takeRecords();
        // TODO use WeakMap
        mutations
            .map(function (mutation) {
            var blot = Registry.find(mutation.target, true);
            if (blot == null)
                return null;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                return blot;
            }
            else {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                return null;
            }
        })
            .forEach(function (blot) {
            if (blot == null ||
                blot === _this ||
                //@ts-ignore
                blot.domNode[Registry.DATA_KEY] == null)
                return;
            // @ts-ignore
            blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
        });
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY].mutations != null) {
            // @ts-ignore
            _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
        }
        this.optimize(mutations, context);
    };
    ScrollBlot.blotName = 'scroll';
    ScrollBlot.defaultChild = 'block';
    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
    ScrollBlot.tagName = 'DIV';
    return ScrollBlot;
}(container_1.default));
exports.default = ScrollBlot;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(18);
var Registry = __webpack_require__(1);
// Shallow object comparison
function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    // @ts-ignore
    for (var prop in obj1) {
        // @ts-ignore
        if (obj1[prop] !== obj2[prop])
            return false;
    }
    return true;
}
var InlineBlot = /** @class */ (function (_super) {
    __extends(InlineBlot, _super);
    function InlineBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineBlot.formats = function (domNode) {
        if (domNode.tagName === InlineBlot.tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    InlineBlot.prototype.format = function (name, value) {
        var _this = this;
        if (name === this.statics.blotName && !value) {
            this.children.forEach(function (child) {
                if (!(child instanceof format_1.default)) {
                    child = child.wrap(InlineBlot.blotName, true);
                }
                _this.attributes.copy(child);
            });
            this.unwrap();
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    InlineBlot.prototype.formatAt = function (index, length, name, value) {
        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
            var blot = this.isolate(index, length);
            blot.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    InlineBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        var formats = this.formats();
        if (Object.keys(formats).length === 0) {
            return this.unwrap(); // unformatted span
        }
        var next = this.next;
        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
            next.moveChildren(this);
            next.remove();
        }
    };
    InlineBlot.blotName = 'inline';
    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
    InlineBlot.tagName = 'SPAN';
    return InlineBlot;
}(format_1.default));
exports.default = InlineBlot;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(18);
var Registry = __webpack_require__(1);
var BlockBlot = /** @class */ (function (_super) {
    __extends(BlockBlot, _super);
    function BlockBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockBlot.formats = function (domNode) {
        var tagName = Registry.query(BlockBlot.blotName).tagName;
        if (domNode.tagName === tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    BlockBlot.prototype.format = function (name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) == null) {
            return;
        }
        else if (name === this.statics.blotName && !value) {
            this.replaceWith(BlockBlot.blotName);
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    BlockBlot.prototype.formatAt = function (index, length, name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    BlockBlot.prototype.insertAt = function (index, value, def) {
        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
            // Insert text or inline
            _super.prototype.insertAt.call(this, index, value, def);
        }
        else {
            var after = this.split(index);
            var blot = Registry.create(value, def);
            after.parent.insertBefore(blot, after);
        }
    };
    BlockBlot.prototype.update = function (mutations, context) {
        if (navigator.userAgent.match(/Trident/)) {
            this.build();
        }
        else {
            _super.prototype.update.call(this, mutations, context);
        }
    };
    BlockBlot.blotName = 'block';
    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
    BlockBlot.tagName = 'P';
    return BlockBlot;
}(format_1.default));
exports.default = BlockBlot;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(19);
var EmbedBlot = /** @class */ (function (_super) {
    __extends(EmbedBlot, _super);
    function EmbedBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmbedBlot.formats = function (domNode) {
        return undefined;
    };
    EmbedBlot.prototype.format = function (name, value) {
        // super.formatAt wraps, which is what we want in general,
        // but this allows subclasses to overwrite for formats
        // that just apply to particular embeds
        _super.prototype.formatAt.call(this, 0, this.length(), name, value);
    };
    EmbedBlot.prototype.formatAt = function (index, length, name, value) {
        if (index === 0 && length === this.length()) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    EmbedBlot.prototype.formats = function () {
        return this.statics.formats(this.domNode);
    };
    return EmbedBlot;
}(leaf_1.default));
exports.default = EmbedBlot;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(19);
var Registry = __webpack_require__(1);
var TextBlot = /** @class */ (function (_super) {
    __extends(TextBlot, _super);
    function TextBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.text = _this.statics.value(_this.domNode);
        return _this;
    }
    TextBlot.create = function (value) {
        return document.createTextNode(value);
    };
    TextBlot.value = function (domNode) {
        var text = domNode.data;
        // @ts-ignore
        if (text['normalize'])
            text = text['normalize']();
        return text;
    };
    TextBlot.prototype.deleteAt = function (index, length) {
        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
    };
    TextBlot.prototype.index = function (node, offset) {
        if (this.domNode === node) {
            return offset;
        }
        return -1;
    };
    TextBlot.prototype.insertAt = function (index, value, def) {
        if (def == null) {
            this.text = this.text.slice(0, index) + value + this.text.slice(index);
            this.domNode.data = this.text;
        }
        else {
            _super.prototype.insertAt.call(this, index, value, def);
        }
    };
    TextBlot.prototype.length = function () {
        return this.text.length;
    };
    TextBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        this.text = this.statics.value(this.domNode);
        if (this.text.length === 0) {
            this.remove();
        }
        else if (this.next instanceof TextBlot && this.next.prev === this) {
            this.insertAt(this.length(), this.next.value());
            this.next.remove();
        }
    };
    TextBlot.prototype.position = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        return [this.domNode, index];
    };
    TextBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = Registry.create(this.domNode.splitText(index));
        this.parent.insertBefore(after, this.next);
        this.text = this.statics.value(this.domNode);
        return after;
    };
    TextBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (mutations.some(function (mutation) {
            return mutation.type === 'characterData' && mutation.target === _this.domNode;
        })) {
            this.text = this.statics.value(this.domNode);
        }
    };
    TextBlot.prototype.value = function () {
        return this.text;
    };
    TextBlot.blotName = 'text';
    TextBlot.scope = Registry.Scope.INLINE_BLOT;
    return TextBlot;
}(leaf_1.default));
exports.default = TextBlot;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elem = document.createElement('div');
elem.classList.toggle('test-class', false);
if (elem.classList.contains('test-class')) {
  var _toggle = DOMTokenList.prototype.toggle;
  DOMTokenList.prototype.toggle = function (token, force) {
    if (arguments.length > 1 && !this.contains(token) === !force) {
      return force;
    } else {
      return _toggle.call(this, token);
    }
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Disable resizing in Firefox
  document.execCommand("enableObjectResizing", false, false);
  // Disable automatic linkifying in IE11
  document.execCommand("autoUrlDetect", false, false);
});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;


/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int} cursor_pos Expected edit position in text1 (optional)
 * @return {Array} Array of diff tuples.
 */
function diff_main(text1, text2, cursor_pos) {
  // Check for equality (speedup).
  if (text1 == text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  // Check cursor_pos within bounds
  if (cursor_pos < 0 || text1.length < cursor_pos) {
    cursor_pos = null;
  }

  // Trim off common prefix (speedup).
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = diff_compute_(text1, text2);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs);
  if (cursor_pos != null) {
    diffs = fix_cursor(diffs, cursor_pos);
  }
  diffs = fix_emoji(diffs);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */
function diff_compute_(text1, text2) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
             [DIFF_EQUAL, shorttext],
             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length == 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  return diff_bisect_(text1, text2);
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */
function diff_bisect_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 != 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length &&
             text1.charAt(x1) == text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length &&
             text1.charAt(text1_length - x2 - 1) ==
             text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */
function diff_bisectSplit_(text1, text2, x, y) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);

  return diffs.concat(diffsb);
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 ||
      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = diff_commonPrefix(longtext.substring(i),
                                           shorttext.substring(j));
      var suffixLength = diff_commonSuffix(longtext.substring(0, i),
                                           shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 */
function diff_cleanupMerge(diffs) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL,
                                    text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_insert,
                count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete,
                count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert +
                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    diff_cleanupMerge(diffs);
  }
};


var diff = diff_main;
diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;

module.exports = diff;

/*
 * Modify a diff such that the cursor position points to the start of a change:
 * E.g.
 *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
 *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
 *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
 *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} A tuple [cursor location in the modified diff, modified diff]
 */
function cursor_normalize_diff (diffs, cursor_pos) {
  if (cursor_pos === 0) {
    return [DIFF_EQUAL, diffs];
  }
  for (var current_pos = 0, i = 0; i < diffs.length; i++) {
    var d = diffs[i];
    if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
      var next_pos = current_pos + d[1].length;
      if (cursor_pos === next_pos) {
        return [i + 1, diffs];
      } else if (cursor_pos < next_pos) {
        // copy to prevent side effects
        diffs = diffs.slice();
        // split d into two diff changes
        var split_pos = cursor_pos - current_pos;
        var d_left = [d[0], d[1].slice(0, split_pos)];
        var d_right = [d[0], d[1].slice(split_pos)];
        diffs.splice(i, 1, d_left, d_right);
        return [i + 1, diffs];
      } else {
        current_pos = next_pos;
      }
    }
  }
  throw new Error('cursor_pos is out of bounds!')
}

/*
 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
 *
 * Case 1)
 *   Check if a naive shift is possible:
 *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
 *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
 * Case 2)
 *   Check if the following shifts are possible:
 *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
 *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
 *         ^            ^
 *         d          d_next
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} Array of diff tuples
 */
function fix_cursor (diffs, cursor_pos) {
  var norm = cursor_normalize_diff(diffs, cursor_pos);
  var ndiffs = norm[1];
  var cursor_pointer = norm[0];
  var d = ndiffs[cursor_pointer];
  var d_next = ndiffs[cursor_pointer + 1];

  if (d == null) {
    // Text was deleted from end of original string,
    // cursor is now out of bounds in new string
    return diffs;
  } else if (d[0] !== DIFF_EQUAL) {
    // A modification happened at the cursor location.
    // This is the expected outcome, so we can return the original diff.
    return diffs;
  } else {
    if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
      // Case 1)
      // It is possible to perform a naive shift
      ndiffs.splice(cursor_pointer, 2, d_next, d)
      return merge_tuples(ndiffs, cursor_pointer, 2)
    } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
      // Case 2)
      // d[1] is a prefix of d_next[1]
      // We can assume that d_next[0] !== 0, since d[0] === 0
      // Shift edit locations..
      ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
      var suffix = d_next[1].slice(d[1].length);
      if (suffix.length > 0) {
        ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
      }
      return merge_tuples(ndiffs, cursor_pointer, 3)
    } else {
      // Not possible to perform any modification
      return diffs;
    }
  }
}

/*
 * Check diff did not split surrogate pairs.
 * Ex. [0, '\uD83D'], [-1, '\uDC36'], [1, '\uDC2F'] -> [-1, '\uD83D\uDC36'], [1, '\uD83D\uDC2F']
 *     '\uD83D\uDC36' === '🐶', '\uD83D\uDC2F' === '🐯'
 *
 * @param {Array} diffs Array of diff tuples
 * @return {Array} Array of diff tuples
 */
function fix_emoji (diffs) {
  var compact = false;
  var starts_with_pair_end = function(str) {
    return str.charCodeAt(0) >= 0xDC00 && str.charCodeAt(0) <= 0xDFFF;
  }
  var ends_with_pair_start = function(str) {
    return str.charCodeAt(str.length-1) >= 0xD800 && str.charCodeAt(str.length-1) <= 0xDBFF;
  }
  for (var i = 2; i < diffs.length; i += 1) {
    if (diffs[i-2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i-2][1]) &&
        diffs[i-1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i-1][1]) &&
        diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
      compact = true;

      diffs[i-1][1] = diffs[i-2][1].slice(-1) + diffs[i-1][1];
      diffs[i][1] = diffs[i-2][1].slice(-1) + diffs[i][1];

      diffs[i-2][1] = diffs[i-2][1].slice(0, -1);
    }
  }
  if (!compact) {
    return diffs;
  }
  var fixed_diffs = [];
  for (var i = 0; i < diffs.length; i += 1) {
    if (diffs[i][1].length > 0) {
      fixed_diffs.push(diffs[i]);
    }
  }
  return fixed_diffs;
}

/*
 * Try to merge tuples with their neigbors in a given range.
 * E.g. [0, 'a'], [0, 'b'] -> [0, 'ab']
 *
 * @param {Array} diffs Array of diff tuples.
 * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
 * @param {Int} length Number of consecutive elements to check.
 * @return {Array} Array of merged diff tuples.
 */
function merge_tuples (diffs, start, length) {
  // Check from (start-1) to (start+length).
  for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
    if (i + 1 < diffs.length) {
      var left_d = diffs[i];
      var right_d = diffs[i+1];
      if (left_d[0] === right_d[1]) {
        diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
      }
    }
  }
  return diffs;
}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend2 = __webpack_require__(3);

var _extend3 = _interopRequireDefault(_extend2);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _align = __webpack_require__(36);

var _background = __webpack_require__(37);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _color = __webpack_require__(26);

var _direction = __webpack_require__(38);

var _font = __webpack_require__(39);

var _size = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:clipboard');

var DOM_KEY = '__ql-matcher';

var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];

var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var Clipboard = function (_Module) {
  _inherits(Clipboard, _Module);

  function Clipboard(quill, options) {
    _classCallCheck(this, Clipboard);

    var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

    _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
    _this.container = _this.quill.addContainer('ql-clipboard');
    _this.container.setAttribute('contenteditable', true);
    _this.container.setAttribute('tabindex', -1);
    _this.matchers = [];
    CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          selector = _ref2[0],
          matcher = _ref2[1];

      if (!options.matchVisual && matcher === matchSpacing) return;
      _this.addMatcher(selector, matcher);
    });
    return _this;
  }

  _createClass(Clipboard, [{
    key: 'addMatcher',
    value: function addMatcher(selector, matcher) {
      this.matchers.push([selector, matcher]);
    }
  }, {
    key: 'convert',
    value: function convert(html) {
      if (typeof html === 'string') {
        this.container.innerHTML = html.replace(/\>\r?\n +\</g, '><'); // Remove spaces between tags
        return this.convert();
      }
      var formats = this.quill.getFormat(this.quill.selection.savedRange.index);
      if (formats[_code2.default.blotName]) {
        var text = this.container.innerText;
        this.container.innerHTML = '';
        return new _quillDelta2.default().insert(text, _defineProperty({}, _code2.default.blotName, formats[_code2.default.blotName]));
      }

      var _prepareMatching = this.prepareMatching(),
          _prepareMatching2 = _slicedToArray(_prepareMatching, 2),
          elementMatchers = _prepareMatching2[0],
          textMatchers = _prepareMatching2[1];

      var delta = traverse(this.container, elementMatchers, textMatchers);
      // Remove trailing newline
      if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
        delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
      }
      debug.log('convert', this.container.innerHTML, delta);
      this.container.innerHTML = '';
      return delta;
    }
  }, {
    key: 'dangerouslyPasteHTML',
    value: function dangerouslyPasteHTML(index, html) {
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _quill2.default.sources.API;

      if (typeof index === 'string') {
        this.quill.setContents(this.convert(index), html);
        this.quill.setSelection(0, _quill2.default.sources.SILENT);
      } else {
        var paste = this.convert(html);
        this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);
        this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);
      }
    }
  }, {
    key: 'onPaste',
    value: function onPaste(e) {
      var _this2 = this;

      if (e.defaultPrevented || !this.quill.isEnabled()) return;
      var range = this.quill.getSelection();
      var delta = new _quillDelta2.default().retain(range.index);
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.container.focus();
      this.quill.selection.update(_quill2.default.sources.SILENT);
      setTimeout(function () {
        delta = delta.concat(_this2.convert()).delete(range.length);
        _this2.quill.updateContents(delta, _quill2.default.sources.USER);
        // range.length contributes to delta.length()
        _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
        _this2.quill.scrollingContainer.scrollTop = scrollTop;
        _this2.quill.focus();
      }, 1);
    }
  }, {
    key: 'prepareMatching',
    value: function prepareMatching() {
      var _this3 = this;

      var elementMatchers = [],
          textMatchers = [];
      this.matchers.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            selector = _pair[0],
            matcher = _pair[1];

        switch (selector) {
          case Node.TEXT_NODE:
            textMatchers.push(matcher);
            break;
          case Node.ELEMENT_NODE:
            elementMatchers.push(matcher);
            break;
          default:
            [].forEach.call(_this3.container.querySelectorAll(selector), function (node) {
              // TODO use weakmap
              node[DOM_KEY] = node[DOM_KEY] || [];
              node[DOM_KEY].push(matcher);
            });
            break;
        }
      });
      return [elementMatchers, textMatchers];
    }
  }]);

  return Clipboard;
}(_module2.default);

Clipboard.DEFAULTS = {
  matchers: [],
  matchVisual: true
};

function applyFormat(delta, format, value) {
  if ((typeof format === 'undefined' ? 'undefined' : _typeof(format)) === 'object') {
    return Object.keys(format).reduce(function (delta, key) {
      return applyFormat(delta, key, format[key]);
    }, delta);
  } else {
    return delta.reduce(function (delta, op) {
      if (op.attributes && op.attributes[format]) {
        return delta.push(op);
      } else {
        return delta.insert(op.insert, (0, _extend3.default)({}, _defineProperty({}, format, value), op.attributes));
      }
    }, new _quillDelta2.default());
  }
}

function computeStyle(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return {};
  var DOM_KEY = '__ql-computed-style';
  return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
}

function deltaEndsWith(delta, text) {
  var endText = "";
  for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
    var op = delta.ops[i];
    if (typeof op.insert !== 'string') break;
    endText = op.insert + endText;
  }
  return endText.slice(-1 * text.length) === text;
}

function isLine(node) {
  if (node.childNodes.length === 0) return false; // Exclude embed blocks
  var style = computeStyle(node);
  return ['block', 'list-item'].indexOf(style.display) > -1;
}

function traverse(node, elementMatchers, textMatchers) {
  // Post-order
  if (node.nodeType === node.TEXT_NODE) {
    return textMatchers.reduce(function (delta, matcher) {
      return matcher(node, delta);
    }, new _quillDelta2.default());
  } else if (node.nodeType === node.ELEMENT_NODE) {
    return [].reduce.call(node.childNodes || [], function (delta, childNode) {
      var childrenDelta = traverse(childNode, elementMatchers, textMatchers);
      if (childNode.nodeType === node.ELEMENT_NODE) {
        childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
        childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
      }
      return delta.concat(childrenDelta);
    }, new _quillDelta2.default());
  } else {
    return new _quillDelta2.default();
  }
}

function matchAlias(format, node, delta) {
  return applyFormat(delta, format, true);
}

function matchAttributor(node, delta) {
  var attributes = _parchment2.default.Attributor.Attribute.keys(node);
  var classes = _parchment2.default.Attributor.Class.keys(node);
  var styles = _parchment2.default.Attributor.Style.keys(node);
  var formats = {};
  attributes.concat(classes).concat(styles).forEach(function (name) {
    var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
    if (attr != null) {
      formats[attr.attrName] = attr.value(node);
      if (formats[attr.attrName]) return;
    }
    attr = ATTRIBUTE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      formats[attr.attrName] = attr.value(node) || undefined;
    }
    attr = STYLE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      attr = STYLE_ATTRIBUTORS[name];
      formats[attr.attrName] = attr.value(node) || undefined;
    }
  });
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  return delta;
}

function matchBlot(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null) return delta;
  if (match.prototype instanceof _parchment2.default.Embed) {
    var embed = {};
    var value = match.value(node);
    if (value != null) {
      embed[match.blotName] = value;
      delta = new _quillDelta2.default().insert(embed, match.formats(node));
    }
  } else if (typeof match.formats === 'function') {
    delta = applyFormat(delta, match.blotName, match.formats(node));
  }
  return delta;
}

function matchBreak(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    delta.insert('\n');
  }
  return delta;
}

function matchIgnore() {
  return new _quillDelta2.default();
}

function matchIndent(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null || match.blotName !== 'list-item' || !deltaEndsWith(delta, '\n')) {
    return delta;
  }
  var indent = -1,
      parent = node.parentNode;
  while (!parent.classList.contains('ql-clipboard')) {
    if ((_parchment2.default.query(parent) || {}).blotName === 'list') {
      indent += 1;
    }
    parent = parent.parentNode;
  }
  if (indent <= 0) return delta;
  return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, { indent: indent }));
}

function matchNewline(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchSpacing(node, delta) {
  if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
    var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
    if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchStyles(node, delta) {
  var formats = {};
  var style = node.style || {};
  if (style.fontStyle && computeStyle(node).fontStyle === 'italic') {
    formats.italic = true;
  }
  if (style.fontWeight && (computeStyle(node).fontWeight.startsWith('bold') || parseInt(computeStyle(node).fontWeight) >= 700)) {
    formats.bold = true;
  }
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  if (parseFloat(style.textIndent || 0) > 0) {
    // Could be 0.5in
    delta = new _quillDelta2.default().insert('\t').concat(delta);
  }
  return delta;
}

function matchText(node, delta) {
  var text = node.data;
  // Word represents empty line with <o:p>&nbsp;</o:p>
  if (node.parentNode.tagName === 'O:P') {
    return delta.insert(text.trim());
  }
  if (text.trim().length === 0 && node.parentNode.classList.contains('ql-clipboard')) {
    return delta;
  }
  if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
    // eslint-disable-next-line func-style
    var replacer = function replacer(collapse, match) {
      match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
      return match.length < 1 && collapse ? ' ' : match;
    };
    text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
      text = text.replace(/^\s+/, replacer.bind(replacer, false));
    }
    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
      text = text.replace(/\s+$/, replacer.bind(replacer, false));
    }
  }
  return delta.insert(text);
}

exports.default = Clipboard;
exports.matchAttributor = matchAttributor;
exports.matchBlot = matchBlot;
exports.matchNewline = matchNewline;
exports.matchSpacing = matchSpacing;
exports.matchText = matchText;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bold = function (_Inline) {
  _inherits(Bold, _Inline);

  function Bold() {
    _classCallCheck(this, Bold);

    return _possibleConstructorReturn(this, (Bold.__proto__ || Object.getPrototypeOf(Bold)).apply(this, arguments));
  }

  _createClass(Bold, [{
    key: 'optimize',
    value: function optimize(context) {
      _get(Bold.prototype.__proto__ || Object.getPrototypeOf(Bold.prototype), 'optimize', this).call(this, context);
      if (this.domNode.tagName !== this.statics.tagName[0]) {
        this.replaceWith(this.statics.blotName);
      }
    }
  }], [{
    key: 'create',
    value: function create() {
      return _get(Bold.__proto__ || Object.getPrototypeOf(Bold), 'create', this).call(this);
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return Bold;
}(_inline2.default);

Bold.blotName = 'bold';
Bold.tagName = ['STRONG', 'B'];

exports.default = Bold;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addControls = exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:toolbar');

var Toolbar = function (_Module) {
  _inherits(Toolbar, _Module);

  function Toolbar(quill, options) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, quill, options));

    if (Array.isArray(_this.options.container)) {
      var container = document.createElement('div');
      addControls(container, _this.options.container);
      quill.container.parentNode.insertBefore(container, quill.container);
      _this.container = container;
    } else if (typeof _this.options.container === 'string') {
      _this.container = document.querySelector(_this.options.container);
    } else {
      _this.container = _this.options.container;
    }
    if (!(_this.container instanceof HTMLElement)) {
      var _ret;

      return _ret = debug.error('Container required for toolbar', _this.options), _possibleConstructorReturn(_this, _ret);
    }
    _this.container.classList.add('ql-toolbar');
    _this.controls = [];
    _this.handlers = {};
    Object.keys(_this.options.handlers).forEach(function (format) {
      _this.addHandler(format, _this.options.handlers[format]);
    });
    [].forEach.call(_this.container.querySelectorAll('button, select'), function (input) {
      _this.attach(input);
    });
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (type, range) {
      if (type === _quill2.default.events.SELECTION_CHANGE) {
        _this.update(range);
      }
    });
    _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
      var _this$quill$selection = _this.quill.selection.getRange(),
          _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1),
          range = _this$quill$selection2[0]; // quill.getSelection triggers update


      _this.update(range);
    });
    return _this;
  }

  _createClass(Toolbar, [{
    key: 'addHandler',
    value: function addHandler(format, handler) {
      this.handlers[format] = handler;
    }
  }, {
    key: 'attach',
    value: function attach(input) {
      var _this2 = this;

      var format = [].find.call(input.classList, function (className) {
        return className.indexOf('ql-') === 0;
      });
      if (!format) return;
      format = format.slice('ql-'.length);
      if (input.tagName === 'BUTTON') {
        input.setAttribute('type', 'button');
      }
      if (this.handlers[format] == null) {
        if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
          debug.warn('ignoring attaching to disabled format', format, input);
          return;
        }
        if (_parchment2.default.query(format) == null) {
          debug.warn('ignoring attaching to nonexistent format', format, input);
          return;
        }
      }
      var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
      input.addEventListener(eventName, function (e) {
        var value = void 0;
        if (input.tagName === 'SELECT') {
          if (input.selectedIndex < 0) return;
          var selected = input.options[input.selectedIndex];
          if (selected.hasAttribute('selected')) {
            value = false;
          } else {
            value = selected.value || false;
          }
        } else {
          if (input.classList.contains('ql-active')) {
            value = false;
          } else {
            value = input.value || !input.hasAttribute('value');
          }
          e.preventDefault();
        }
        _this2.quill.focus();

        var _quill$selection$getR = _this2.quill.selection.getRange(),
            _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1),
            range = _quill$selection$getR2[0];

        if (_this2.handlers[format] != null) {
          _this2.handlers[format].call(_this2, value);
        } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
          value = prompt('Enter ' + format);
          if (!value) return;
          _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value)), _quill2.default.sources.USER);
        } else {
          _this2.quill.format(format, value, _quill2.default.sources.USER);
        }
        _this2.update(range);
      });
      // TODO use weakmap
      this.controls.push([format, input]);
    }
  }, {
    key: 'update',
    value: function update(range) {
      var formats = range == null ? {} : this.quill.getFormat(range);
      this.controls.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            format = _pair[0],
            input = _pair[1];

        if (input.tagName === 'SELECT') {
          var option = void 0;
          if (range == null) {
            option = null;
          } else if (formats[format] == null) {
            option = input.querySelector('option[selected]');
          } else if (!Array.isArray(formats[format])) {
            var value = formats[format];
            if (typeof value === 'string') {
              value = value.replace(/\"/g, '\\"');
            }
            option = input.querySelector('option[value="' + value + '"]');
          }
          if (option == null) {
            input.value = ''; // TODO make configurable?
            input.selectedIndex = -1;
          } else {
            option.selected = true;
          }
        } else {
          if (range == null) {
            input.classList.remove('ql-active');
          } else if (input.hasAttribute('value')) {
            // both being null should match (default values)
            // '1' should match with 1 (headers)
            var isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
            input.classList.toggle('ql-active', isActive);
          } else {
            input.classList.toggle('ql-active', formats[format] != null);
          }
        }
      });
    }
  }]);

  return Toolbar;
}(_module2.default);

Toolbar.DEFAULTS = {};

function addButton(container, format, value) {
  var input = document.createElement('button');
  input.setAttribute('type', 'button');
  input.classList.add('ql-' + format);
  if (value != null) {
    input.value = value;
  }
  container.appendChild(input);
}

function addControls(container, groups) {
  if (!Array.isArray(groups[0])) {
    groups = [groups];
  }
  groups.forEach(function (controls) {
    var group = document.createElement('span');
    group.classList.add('ql-formats');
    controls.forEach(function (control) {
      if (typeof control === 'string') {
        addButton(group, control);
      } else {
        var format = Object.keys(control)[0];
        var value = control[format];
        if (Array.isArray(value)) {
          addSelect(group, format, value);
        } else {
          addButton(group, format, value);
        }
      }
    });
    container.appendChild(group);
  });
}

function addSelect(container, format, values) {
  var input = document.createElement('select');
  input.classList.add('ql-' + format);
  values.forEach(function (value) {
    var option = document.createElement('option');
    if (value !== false) {
      option.setAttribute('value', value);
    } else {
      option.setAttribute('selected', 'selected');
    }
    input.appendChild(option);
  });
  container.appendChild(input);
}

Toolbar.DEFAULTS = {
  container: null,
  handlers: {
    clean: function clean() {
      var _this3 = this;

      var range = this.quill.getSelection();
      if (range == null) return;
      if (range.length == 0) {
        var formats = this.quill.getFormat();
        Object.keys(formats).forEach(function (name) {
          // Clean functionality in existing apps only clean inline formats
          if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
            _this3.quill.format(name, false);
          }
        });
      } else {
        this.quill.removeFormat(range, _quill2.default.sources.USER);
      }
    },
    direction: function direction(value) {
      var align = this.quill.getFormat()['align'];
      if (value === 'rtl' && align == null) {
        this.quill.format('align', 'right', _quill2.default.sources.USER);
      } else if (!value && align === 'right') {
        this.quill.format('align', false, _quill2.default.sources.USER);
      }
      this.quill.format('direction', value, _quill2.default.sources.USER);
    },
    indent: function indent(value) {
      var range = this.quill.getSelection();
      var formats = this.quill.getFormat(range);
      var indent = parseInt(formats.indent || 0);
      if (value === '+1' || value === '-1') {
        var modifier = value === '+1' ? 1 : -1;
        if (formats.direction === 'rtl') modifier *= -1;
        this.quill.format('indent', indent + modifier, _quill2.default.sources.USER);
      }
    },
    link: function link(value) {
      if (value === true) {
        value = prompt('Enter link URL:');
      }
      this.quill.format('link', value, _quill2.default.sources.USER);
    },
    list: function list(value) {
      var range = this.quill.getSelection();
      var formats = this.quill.getFormat(range);
      if (value === 'check') {
        if (formats['list'] === 'checked' || formats['list'] === 'unchecked') {
          this.quill.format('list', false, _quill2.default.sources.USER);
        } else {
          this.quill.format('list', 'unchecked', _quill2.default.sources.USER);
        }
      } else {
        this.quill.format('list', value, _quill2.default.sources.USER);
      }
    }
  }
};

exports.default = Toolbar;
exports.addControls = addControls;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_Picker) {
  _inherits(ColorPicker, _Picker);

  function ColorPicker(select, label) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, select));

    _this.label.innerHTML = label;
    _this.container.classList.add('ql-color-picker');
    [].slice.call(_this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
      item.classList.add('ql-primary');
    });
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'buildItem',
    value: function buildItem(option) {
      var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);
      item.style.backgroundColor = option.getAttribute('value') || '';
      return item;
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);
      var colorLabel = this.label.querySelector('.ql-color-label');
      var value = item ? item.getAttribute('data-value') || '' : '';
      if (colorLabel) {
        if (colorLabel.tagName === 'line') {
          colorLabel.style.stroke = value;
        } else {
          colorLabel.style.fill = value;
        }
      }
    }
  }]);

  return ColorPicker;
}(_picker2.default);

exports.default = ColorPicker;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconPicker = function (_Picker) {
  _inherits(IconPicker, _Picker);

  function IconPicker(select, icons) {
    _classCallCheck(this, IconPicker);

    var _this = _possibleConstructorReturn(this, (IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(this, select));

    _this.container.classList.add('ql-icon-picker');
    [].forEach.call(_this.container.querySelectorAll('.ql-picker-item'), function (item) {
      item.innerHTML = icons[item.getAttribute('data-value') || ''];
    });
    _this.defaultItem = _this.container.querySelector('.ql-selected');
    _this.selectItem(_this.defaultItem);
    return _this;
  }

  _createClass(IconPicker, [{
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, item, trigger);
      item = item || this.defaultItem;
      this.label.innerHTML = item.innerHTML;
    }
  }]);

  return IconPicker;
}(_picker2.default);

exports.default = IconPicker;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function () {
  function Tooltip(quill, boundsContainer) {
    var _this = this;

    _classCallCheck(this, Tooltip);

    this.quill = quill;
    this.boundsContainer = boundsContainer || document.body;
    this.root = quill.addContainer('ql-tooltip');
    this.root.innerHTML = this.constructor.TEMPLATE;
    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', function () {
        _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + 'px';
      });
    }
    this.hide();
  }

  _createClass(Tooltip, [{
    key: 'hide',
    value: function hide() {
      this.root.classList.add('ql-hidden');
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
      // root.scrollTop should be 0 if scrollContainer !== root
      var top = reference.bottom + this.quill.root.scrollTop;
      this.root.style.left = left + 'px';
      this.root.style.top = top + 'px';
      this.root.classList.remove('ql-flip');
      var containerBounds = this.boundsContainer.getBoundingClientRect();
      var rootBounds = this.root.getBoundingClientRect();
      var shift = 0;
      if (rootBounds.right > containerBounds.right) {
        shift = containerBounds.right - rootBounds.right;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.left < containerBounds.left) {
        shift = containerBounds.left - rootBounds.left;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.bottom > containerBounds.bottom) {
        var height = rootBounds.bottom - rootBounds.top;
        var verticalShift = reference.bottom - reference.top + height;
        this.root.style.top = top - verticalShift + 'px';
        this.root.classList.add('ql-flip');
      }
      return shift;
    }
  }, {
    key: 'show',
    value: function show() {
      this.root.classList.remove('ql-editing');
      this.root.classList.remove('ql-hidden');
    }
  }]);

  return Tooltip;
}();

exports.default = Tooltip;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __webpack_require__(43);

var _base2 = _interopRequireDefault(_base);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

var _selection = __webpack_require__(15);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLBAR_CONFIG = [[{ header: ['1', '2', '3', false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']];

var SnowTheme = function (_BaseTheme) {
  _inherits(SnowTheme, _BaseTheme);

  function SnowTheme(quill, options) {
    _classCallCheck(this, SnowTheme);

    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    var _this = _possibleConstructorReturn(this, (SnowTheme.__proto__ || Object.getPrototypeOf(SnowTheme)).call(this, quill, options));

    _this.quill.container.classList.add('ql-snow');
    return _this;
  }

  _createClass(SnowTheme, [{
    key: 'extendToolbar',
    value: function extendToolbar(toolbar) {
      toolbar.container.classList.add('ql-snow');
      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
      this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
      if (toolbar.container.querySelector('.ql-link')) {
        this.quill.keyboard.addBinding({ key: 'K', shortKey: true }, function (range, context) {
          toolbar.handlers['link'].call(toolbar, !context.format.link);
        });
      }
    }
  }]);

  return SnowTheme;
}(_base2.default);

SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function link(value) {
          if (value) {
            var range = this.quill.getSelection();
            if (range == null || range.length == 0) return;
            var preview = this.quill.getText(range);
            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
              preview = 'mailto:' + preview;
            }
            var tooltip = this.quill.theme.tooltip;
            tooltip.edit('link', preview);
          } else {
            this.quill.format('link', false);
          }
        }
      }
    }
  }
});

var SnowTooltip = function (_BaseTooltip) {
  _inherits(SnowTooltip, _BaseTooltip);

  function SnowTooltip(quill, bounds) {
    _classCallCheck(this, SnowTooltip);

    var _this2 = _possibleConstructorReturn(this, (SnowTooltip.__proto__ || Object.getPrototypeOf(SnowTooltip)).call(this, quill, bounds));

    _this2.preview = _this2.root.querySelector('a.ql-preview');
    return _this2;
  }

  _createClass(SnowTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this3 = this;

      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'listen', this).call(this);
      this.root.querySelector('a.ql-action').addEventListener('click', function (event) {
        if (_this3.root.classList.contains('ql-editing')) {
          _this3.save();
        } else {
          _this3.edit('link', _this3.preview.textContent);
        }
        event.preventDefault();
      });
      this.root.querySelector('a.ql-remove').addEventListener('click', function (event) {
        if (_this3.linkRange != null) {
          var range = _this3.linkRange;
          _this3.restoreFocus();
          _this3.quill.formatText(range, 'link', false, _emitter2.default.sources.USER);
          delete _this3.linkRange;
        }
        event.preventDefault();
        _this3.hide();
      });
      this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range, oldRange, source) {
        if (range == null) return;
        if (range.length === 0 && source === _emitter2.default.sources.USER) {
          var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index),
              _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
              link = _quill$scroll$descend2[0],
              offset = _quill$scroll$descend2[1];

          if (link != null) {
            _this3.linkRange = new _selection.Range(range.index - offset, link.length());
            var preview = _link2.default.formats(link.domNode);
            _this3.preview.textContent = preview;
            _this3.preview.setAttribute('href', preview);
            _this3.show();
            _this3.position(_this3.quill.getBounds(_this3.linkRange));
            return;
          }
        } else {
          delete _this3.linkRange;
        }
        _this3.hide();
      });
    }
  }, {
    key: 'show',
    value: function show() {
      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'show', this).call(this);
      this.root.removeAttribute('data-mode');
    }
  }]);

  return SnowTooltip;
}(_base.BaseTooltip);

SnowTooltip.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');

exports.default = SnowTheme;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(29);

var _core2 = _interopRequireDefault(_core);

var _align = __webpack_require__(36);

var _direction = __webpack_require__(38);

var _indent = __webpack_require__(64);

var _blockquote = __webpack_require__(65);

var _blockquote2 = _interopRequireDefault(_blockquote);

var _header = __webpack_require__(66);

var _header2 = _interopRequireDefault(_header);

var _list = __webpack_require__(67);

var _list2 = _interopRequireDefault(_list);

var _background = __webpack_require__(37);

var _color = __webpack_require__(26);

var _font = __webpack_require__(39);

var _size = __webpack_require__(40);

var _bold = __webpack_require__(56);

var _bold2 = _interopRequireDefault(_bold);

var _italic = __webpack_require__(68);

var _italic2 = _interopRequireDefault(_italic);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

var _script = __webpack_require__(69);

var _script2 = _interopRequireDefault(_script);

var _strike = __webpack_require__(70);

var _strike2 = _interopRequireDefault(_strike);

var _underline = __webpack_require__(71);

var _underline2 = _interopRequireDefault(_underline);

var _image = __webpack_require__(72);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(73);

var _video2 = _interopRequireDefault(_video);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _formula = __webpack_require__(74);

var _formula2 = _interopRequireDefault(_formula);

var _syntax = __webpack_require__(75);

var _syntax2 = _interopRequireDefault(_syntax);

var _toolbar = __webpack_require__(57);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

var _colorPicker = __webpack_require__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __webpack_require__(60);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _tooltip = __webpack_require__(61);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _bubble = __webpack_require__(108);

var _bubble2 = _interopRequireDefault(_bubble);

var _snow = __webpack_require__(62);

var _snow2 = _interopRequireDefault(_snow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core2.default.register({
  'attributors/attribute/direction': _direction.DirectionAttribute,

  'attributors/class/align': _align.AlignClass,
  'attributors/class/background': _background.BackgroundClass,
  'attributors/class/color': _color.ColorClass,
  'attributors/class/direction': _direction.DirectionClass,
  'attributors/class/font': _font.FontClass,
  'attributors/class/size': _size.SizeClass,

  'attributors/style/align': _align.AlignStyle,
  'attributors/style/background': _background.BackgroundStyle,
  'attributors/style/color': _color.ColorStyle,
  'attributors/style/direction': _direction.DirectionStyle,
  'attributors/style/font': _font.FontStyle,
  'attributors/style/size': _size.SizeStyle
}, true);

_core2.default.register({
  'formats/align': _align.AlignClass,
  'formats/direction': _direction.DirectionClass,
  'formats/indent': _indent.IndentClass,

  'formats/background': _background.BackgroundStyle,
  'formats/color': _color.ColorStyle,
  'formats/font': _font.FontClass,
  'formats/size': _size.SizeClass,

  'formats/blockquote': _blockquote2.default,
  'formats/code-block': _code2.default,
  'formats/header': _header2.default,
  'formats/list': _list2.default,

  'formats/bold': _bold2.default,
  'formats/code': _code.Code,
  'formats/italic': _italic2.default,
  'formats/link': _link2.default,
  'formats/script': _script2.default,
  'formats/strike': _strike2.default,
  'formats/underline': _underline2.default,

  'formats/image': _image2.default,
  'formats/video': _video2.default,

  'formats/list/item': _list.ListItem,

  'modules/formula': _formula2.default,
  'modules/syntax': _syntax2.default,
  'modules/toolbar': _toolbar2.default,

  'themes/bubble': _bubble2.default,
  'themes/snow': _snow2.default,

  'ui/icons': _icons2.default,
  'ui/picker': _picker2.default,
  'ui/icon-picker': _iconPicker2.default,
  'ui/color-picker': _colorPicker2.default,
  'ui/tooltip': _tooltip2.default
}, true);

exports.default = _core2.default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IdentAttributor = function (_Parchment$Attributor) {
  _inherits(IdentAttributor, _Parchment$Attributor);

  function IdentAttributor() {
    _classCallCheck(this, IdentAttributor);

    return _possibleConstructorReturn(this, (IdentAttributor.__proto__ || Object.getPrototypeOf(IdentAttributor)).apply(this, arguments));
  }

  _createClass(IdentAttributor, [{
    key: 'add',
    value: function add(node, value) {
      if (value === '+1' || value === '-1') {
        var indent = this.value(node) || 0;
        value = value === '+1' ? indent + 1 : indent - 1;
      }
      if (value === 0) {
        this.remove(node);
        return true;
      } else {
        return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'add', this).call(this, node, value);
      }
    }
  }, {
    key: 'canAdd',
    value: function canAdd(node, value) {
      return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, value) || _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, parseInt(value));
    }
  }, {
    key: 'value',
    value: function value(node) {
      return parseInt(_get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'value', this).call(this, node)) || undefined; // Don't return NaN
    }
  }]);

  return IdentAttributor;
}(_parchment2.default.Attributor.Class);

var IndentClass = new IdentAttributor('indent', 'ql-indent', {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});

exports.IndentClass = IndentClass;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blockquote = function (_Block) {
  _inherits(Blockquote, _Block);

  function Blockquote() {
    _classCallCheck(this, Blockquote);

    return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
  }

  return Blockquote;
}(_block2.default);

Blockquote.blotName = 'blockquote';
Blockquote.tagName = 'blockquote';

exports.default = Blockquote;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Block) {
  _inherits(Header, _Block);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, null, [{
    key: 'formats',
    value: function formats(domNode) {
      return this.tagName.indexOf(domNode.tagName) + 1;
    }
  }]);

  return Header;
}(_block2.default);

Header.blotName = 'header';
Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

exports.default = Header;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Block) {
  _inherits(ListItem, _Block);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'format',
    value: function format(name, value) {
      if (name === List.blotName && !value) {
        this.replaceWith(_parchment2.default.create(this.statics.scope));
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      if (this.prev == null && this.next == null) {
        this.parent.remove();
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'remove', this).call(this);
      }
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(name, value) {
      this.parent.isolate(this.offset(this.parent), this.length());
      if (name === this.parent.statics.blotName) {
        this.parent.replaceWith(name, value);
        return this;
      } else {
        this.parent.unwrap();
        return _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
      }
    }
  }], [{
    key: 'formats',
    value: function formats(domNode) {
      return domNode.tagName === this.tagName ? undefined : _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem), 'formats', this).call(this, domNode);
    }
  }]);

  return ListItem;
}(_block2.default);

ListItem.blotName = 'list-item';
ListItem.tagName = 'LI';

var List = function (_Container) {
  _inherits(List, _Container);

  _createClass(List, null, [{
    key: 'create',
    value: function create(value) {
      var tagName = value === 'ordered' ? 'OL' : 'UL';
      var node = _get(List.__proto__ || Object.getPrototypeOf(List), 'create', this).call(this, tagName);
      if (value === 'checked' || value === 'unchecked') {
        node.setAttribute('data-checked', value === 'checked');
      }
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      if (domNode.tagName === 'OL') return 'ordered';
      if (domNode.tagName === 'UL') {
        if (domNode.hasAttribute('data-checked')) {
          return domNode.getAttribute('data-checked') === 'true' ? 'checked' : 'unchecked';
        } else {
          return 'bullet';
        }
      }
      return undefined;
    }
  }]);

  function List(domNode) {
    _classCallCheck(this, List);

    var _this2 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, domNode));

    var listEventHandler = function listEventHandler(e) {
      if (e.target.parentNode !== domNode) return;
      var format = _this2.statics.formats(domNode);
      var blot = _parchment2.default.find(e.target);
      if (format === 'checked') {
        blot.format('list', 'unchecked');
      } else if (format === 'unchecked') {
        blot.format('list', 'checked');
      }
    };

    domNode.addEventListener('touchstart', listEventHandler);
    domNode.addEventListener('mousedown', listEventHandler);
    return _this2;
  }

  _createClass(List, [{
    key: 'format',
    value: function format(name, value) {
      if (this.children.length > 0) {
        this.children.tail.format(name, value);
      }
    }
  }, {
    key: 'formats',
    value: function formats() {
      // We don't inherit from FormatBlot
      return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot instanceof ListItem) {
        _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'insertBefore', this).call(this, blot, ref);
      } else {
        var index = ref == null ? this.length() : ref.offset(this);
        var after = this.split(index);
        after.parent.insertBefore(blot, after);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')) {
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      if (target.statics.blotName !== this.statics.blotName) {
        var item = _parchment2.default.create(this.statics.defaultChild);
        target.moveChildren(item);
        this.appendChild(item);
      }
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
    }
  }]);

  return List;
}(_container2.default);

List.blotName = 'list';
List.scope = _parchment2.default.Scope.BLOCK_BLOT;
List.tagName = ['OL', 'UL'];
List.defaultChild = 'list-item';
List.allowedChildren = [ListItem];

exports.ListItem = ListItem;
exports.default = List;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bold = __webpack_require__(56);

var _bold2 = _interopRequireDefault(_bold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Italic = function (_Bold) {
  _inherits(Italic, _Bold);

  function Italic() {
    _classCallCheck(this, Italic);

    return _possibleConstructorReturn(this, (Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(this, arguments));
  }

  return Italic;
}(_bold2.default);

Italic.blotName = 'italic';
Italic.tagName = ['EM', 'I'];

exports.default = Italic;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = function (_Inline) {
  _inherits(Script, _Inline);

  function Script() {
    _classCallCheck(this, Script);

    return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
  }

  _createClass(Script, null, [{
    key: 'create',
    value: function create(value) {
      if (value === 'super') {
        return document.createElement('sup');
      } else if (value === 'sub') {
        return document.createElement('sub');
      } else {
        return _get(Script.__proto__ || Object.getPrototypeOf(Script), 'create', this).call(this, value);
      }
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      if (domNode.tagName === 'SUB') return 'sub';
      if (domNode.tagName === 'SUP') return 'super';
      return undefined;
    }
  }]);

  return Script;
}(_inline2.default);

Script.blotName = 'script';
Script.tagName = ['SUB', 'SUP'];

exports.default = Script;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Strike = function (_Inline) {
  _inherits(Strike, _Inline);

  function Strike() {
    _classCallCheck(this, Strike);

    return _possibleConstructorReturn(this, (Strike.__proto__ || Object.getPrototypeOf(Strike)).apply(this, arguments));
  }

  return Strike;
}(_inline2.default);

Strike.blotName = 'strike';
Strike.tagName = 'S';

exports.default = Strike;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Underline = function (_Inline) {
  _inherits(Underline, _Inline);

  function Underline() {
    _classCallCheck(this, Underline);

    return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(this, arguments));
  }

  return Underline;
}(_inline2.default);

Underline.blotName = 'underline';
Underline.tagName = 'U';

exports.default = Underline;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _link = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTRIBUTES = ['alt', 'height', 'width'];

var Image = function (_Parchment$Embed) {
  _inherits(Image, _Parchment$Embed);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), 'format', this).call(this, name, value);
      }
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Image.__proto__ || Object.getPrototypeOf(Image), 'create', this).call(this, value);
      if (typeof value === 'string') {
        node.setAttribute('src', this.sanitize(value));
      }
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }, {
    key: 'match',
    value: function match(url) {
      return (/\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url)
      );
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('src');
    }
  }]);

  return Image;
}(_parchment2.default.Embed);

Image.blotName = 'image';
Image.tagName = 'IMG';

exports.default = Image;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = __webpack_require__(4);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTRIBUTES = ['height', 'width'];

var Video = function (_BlockEmbed) {
  _inherits(Video, _BlockEmbed);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'format', this).call(this, name, value);
      }
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Video.__proto__ || Object.getPrototypeOf(Video), 'create', this).call(this, value);
      node.setAttribute('frameborder', '0');
      node.setAttribute('allowfullscreen', true);
      node.setAttribute('src', this.sanitize(value));
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return _link2.default.sanitize(url);
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('src');
    }
  }]);

  return Video;
}(_block.BlockEmbed);

Video.blotName = 'video';
Video.className = 'ql-video';
Video.tagName = 'IFRAME';

exports.default = Video;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormulaBlot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _embed = __webpack_require__(35);

var _embed2 = _interopRequireDefault(_embed);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormulaBlot = function (_Embed) {
  _inherits(FormulaBlot, _Embed);

  function FormulaBlot() {
    _classCallCheck(this, FormulaBlot);

    return _possibleConstructorReturn(this, (FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)).apply(this, arguments));
  }

  _createClass(FormulaBlot, null, [{
    key: 'create',
    value: function create(value) {
      var node = _get(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot), 'create', this).call(this, value);
      if (typeof value === 'string') {
        window.katex.render(value, node, {
          throwOnError: false,
          errorColor: '#f00'
        });
        node.setAttribute('data-value', value);
      }
      return node;
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('data-value');
    }
  }]);

  return FormulaBlot;
}(_embed2.default);

FormulaBlot.blotName = 'formula';
FormulaBlot.className = 'ql-formula';
FormulaBlot.tagName = 'SPAN';

var Formula = function (_Module) {
  _inherits(Formula, _Module);

  _createClass(Formula, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(FormulaBlot, true);
    }
  }]);

  function Formula() {
    _classCallCheck(this, Formula);

    var _this2 = _possibleConstructorReturn(this, (Formula.__proto__ || Object.getPrototypeOf(Formula)).call(this));

    if (window.katex == null) {
      throw new Error('Formula module requires KaTeX.');
    }
    return _this2;
  }

  return Formula;
}(_module2.default);

exports.FormulaBlot = FormulaBlot;
exports.default = Formula;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CodeToken = exports.CodeBlock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SyntaxCodeBlock = function (_CodeBlock) {
  _inherits(SyntaxCodeBlock, _CodeBlock);

  function SyntaxCodeBlock() {
    _classCallCheck(this, SyntaxCodeBlock);

    return _possibleConstructorReturn(this, (SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(this, arguments));
  }

  _createClass(SyntaxCodeBlock, [{
    key: 'replaceWith',
    value: function replaceWith(block) {
      this.domNode.textContent = this.domNode.textContent;
      this.attach();
      _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'replaceWith', this).call(this, block);
    }
  }, {
    key: 'highlight',
    value: function highlight(_highlight) {
      var text = this.domNode.textContent;
      if (this.cachedText !== text) {
        if (text.trim().length > 0 || this.cachedText == null) {
          this.domNode.innerHTML = _highlight(text);
          this.domNode.normalize();
          this.attach();
        }
        this.cachedText = text;
      }
    }
  }]);

  return SyntaxCodeBlock;
}(_code2.default);

SyntaxCodeBlock.className = 'ql-syntax';

var CodeToken = new _parchment2.default.Attributor.Class('token', 'hljs', {
  scope: _parchment2.default.Scope.INLINE
});

var Syntax = function (_Module) {
  _inherits(Syntax, _Module);

  _createClass(Syntax, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(CodeToken, true);
      _quill2.default.register(SyntaxCodeBlock, true);
    }
  }]);

  function Syntax(quill, options) {
    _classCallCheck(this, Syntax);

    var _this2 = _possibleConstructorReturn(this, (Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(this, quill, options));

    if (typeof _this2.options.highlight !== 'function') {
      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
    }
    var timer = null;
    _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        _this2.highlight();
        timer = null;
      }, _this2.options.interval);
    });
    _this2.highlight();
    return _this2;
  }

  _createClass(Syntax, [{
    key: 'highlight',
    value: function highlight() {
      var _this3 = this;

      if (this.quill.selection.composing) return;
      this.quill.update(_quill2.default.sources.USER);
      var range = this.quill.getSelection();
      this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function (code) {
        code.highlight(_this3.options.highlight);
      });
      this.quill.update(_quill2.default.sources.SILENT);
      if (range != null) {
        this.quill.setSelection(range, _quill2.default.sources.SILENT);
      }
    }
  }]);

  return Syntax;
}(_module2.default);

Syntax.DEFAULTS = {
  highlight: function () {
    if (window.hljs == null) return null;
    return function (text) {
      var result = window.hljs.highlightAuto(text);
      return result.value;
    };
  }(),
  interval: 1000
};

exports.CodeBlock = SyntaxCodeBlock;
exports.CodeToken = CodeToken;
exports.default = Syntax;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\"3 4 4 5 6 3\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\"3 14 4 15 6 13\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"3 9 4 10 6 8\"></polyline> </svg>";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BubbleTooltip = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __webpack_require__(43);

var _base2 = _interopRequireDefault(_base);

var _selection = __webpack_require__(15);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{ header: 1 }, { header: 2 }, 'blockquote']];

var BubbleTheme = function (_BaseTheme) {
  _inherits(BubbleTheme, _BaseTheme);

  function BubbleTheme(quill, options) {
    _classCallCheck(this, BubbleTheme);

    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    var _this = _possibleConstructorReturn(this, (BubbleTheme.__proto__ || Object.getPrototypeOf(BubbleTheme)).call(this, quill, options));

    _this.quill.container.classList.add('ql-bubble');
    return _this;
  }

  _createClass(BubbleTheme, [{
    key: 'extendToolbar',
    value: function extendToolbar(toolbar) {
      this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
      this.tooltip.root.appendChild(toolbar.container);
      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
    }
  }]);

  return BubbleTheme;
}(_base2.default);

BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function link(value) {
          if (!value) {
            this.quill.format('link', false);
          } else {
            this.quill.theme.tooltip.edit();
          }
        }
      }
    }
  }
});

var BubbleTooltip = function (_BaseTooltip) {
  _inherits(BubbleTooltip, _BaseTooltip);

  function BubbleTooltip(quill, bounds) {
    _classCallCheck(this, BubbleTooltip);

    var _this2 = _possibleConstructorReturn(this, (BubbleTooltip.__proto__ || Object.getPrototypeOf(BubbleTooltip)).call(this, quill, bounds));

    _this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function (type, range, oldRange, source) {
      if (type !== _emitter2.default.events.SELECTION_CHANGE) return;
      if (range != null && range.length > 0 && source === _emitter2.default.sources.USER) {
        _this2.show();
        // Lock our width so we will expand beyond our offsetParent boundaries
        _this2.root.style.left = '0px';
        _this2.root.style.width = '';
        _this2.root.style.width = _this2.root.offsetWidth + 'px';
        var lines = _this2.quill.getLines(range.index, range.length);
        if (lines.length === 1) {
          _this2.position(_this2.quill.getBounds(range));
        } else {
          var lastLine = lines[lines.length - 1];
          var index = _this2.quill.getIndex(lastLine);
          var length = Math.min(lastLine.length() - 1, range.index + range.length - index);
          var _bounds = _this2.quill.getBounds(new _selection.Range(index, length));
          _this2.position(_bounds);
        }
      } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
        _this2.hide();
      }
    });
    return _this2;
  }

  _createClass(BubbleTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this3 = this;

      _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'listen', this).call(this);
      this.root.querySelector('.ql-close').addEventListener('click', function () {
        _this3.root.classList.remove('ql-editing');
      });
      this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
        // Let selection be restored by toolbar handlers before repositioning
        setTimeout(function () {
          if (_this3.root.classList.contains('ql-hidden')) return;
          var range = _this3.quill.getSelection();
          if (range != null) {
            _this3.position(_this3.quill.getBounds(range));
          }
        }, 1);
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.show();
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var shift = _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'position', this).call(this, reference);
      var arrow = this.root.querySelector('.ql-tooltip-arrow');
      arrow.style.marginLeft = '';
      if (shift === 0) return shift;
      arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
    }
  }]);

  return BubbleTooltip;
}(_base.BaseTooltip);

BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');

exports.BubbleTooltip = BubbleTooltip;
exports.default = BubbleTheme;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ })
/******/ ])["default"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

/***/ }),

/***/ "978d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title[data-v-37b0d70e]{position:relative;font-weight:700;margin:10px 0 10px 30px}.title[data-v-37b0d70e]:before{position:absolute;left:-6px;top:50%;transform:translateY(-50%);content:\"\";display:block;width:3.5px;border-radius:2px;height:14.5px;background-color:#1890ff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "9898":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".footer[data-v-2c1af4b4]{text-align:center;padding-top:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "acdb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7473");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a7fe9c28", content, true, {"sourceMap":false,"shadowMode":false});

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

/***/ "b639":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("1fb5")
var ieee754 = __webpack_require__("9152")
var isArray = __webpack_require__("e3db")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c293":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("acdb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


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
exports.push([module.i, ".el-cascader-panel{height:250px}.custom-form .el-rate{line-height:48px}", ""]);
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
exports.push([module.i, ".custom-search{display:flex;padding:10px;margin:10px 0;overflow:hidden}.custom-search .el-form-item{margin:0 15px 10px 0}.custom-search .el-form-item .el-date-editor.el-input,.custom-search .el-form-item .el-date-editor.el-input__inner,.custom-search .el-form-item .el-input__inner{width:190px}.custom-search .btn-options{margin:0 0 0 20px}", ""]);
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

/***/ "e3db":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "e41f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("32f3");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("adb3f098", content, true, {"sourceMap":false,"shadowMode":false});

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

/***/ "fab4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_37b0d70e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("851d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_37b0d70e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_37b0d70e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "utils", function() { return /* reexport */ utils_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "types", function() { return /* reexport */ types; });
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ packages_install; });
__webpack_require__.d(__webpack_exports__, "CustomDialog", function() { return /* reexport */ CustomDialog; });
__webpack_require__.d(__webpack_exports__, "CustomForm", function() { return /* reexport */ CustomForm; });
__webpack_require__.d(__webpack_exports__, "CustomPagination", function() { return /* reexport */ CustomPagination; });
__webpack_require__.d(__webpack_exports__, "CustomSearch", function() { return /* reexport */ CustomSearch; });
__webpack_require__.d(__webpack_exports__, "CustomTable", function() { return /* reexport */ CustomTable; });
__webpack_require__.d(__webpack_exports__, "CustomAdvancedSearch", function() { return /* reexport */ CustomAdvancedSearch; });
__webpack_require__.d(__webpack_exports__, "CustomDrawer", function() { return /* reexport */ CustomDrawer; });

// NAMESPACE OBJECT: ./src/utils/index.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, "filterObject", function() { return filterObject; });
__webpack_require__.d(utils_namespaceObject, "getArrayValue", function() { return getArrayValue; });
__webpack_require__.d(utils_namespaceObject, "removeArray", function() { return removeArray; });
__webpack_require__.d(utils_namespaceObject, "removeArrayByIndex", function() { return removeArrayByIndex; });

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cdd5fda-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomDialog/src/index.vue?vue&type=template&id=0524222a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',_vm._g(_vm._b({ref:"dialogRef",attrs:{"custom-class":"com-dialog","fullscreen":_vm.dialogProcessOptions.fullscreen || _vm.fullscreen,"visible":_vm.showVisible},on:{"update:visible":function($event){_vm.showVisible=$event},"closed":_vm.closed},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('div',{staticClass:"com-dialog__header",class:[_vm.dialogProcessOptions.center ? 'justify-content-c' : '']},[_vm._t("nameBefore"),_vm._t("title",function(){return [_c('span',{staticStyle:{"font-size":"18px"}},[_vm._v(_vm._s(_vm.title))])]}),_vm._t("nameAfter"),(_vm.dialogProcessOptions.showFullscreen)?_c('i',{staticClass:"dialog__icon",class:_vm.fullscreen ? 'el-icon-minus' : 'el-icon-full-screen',on:{"click":_vm.toggleFull}}):_vm._e()],2)]},proxy:true},(_vm.$slots.footer && !_vm.showAction)?{key:"footer",fn:function(){return [_vm._t("footer")]},proxy:true}:null],null,true)},'el-dialog',_vm.dialogProcessOptions,false),_vm.$listeners),[_c('el-scrollbar',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.showLoading),expression:"showLoading"}],class:_vm.fullscreen && _vm.$slots.footer
        ? 'com-dialog__content--footer'
        : _vm.fullscreen && !_vm.$slots.footer
        ? 'com-dialog__content--fullscreen'
        : 'com-dialog__content'},[_c('div',{staticClass:"content__wrap"},[_vm._t("default")],2)]),(_vm.showAction)?_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_vm._t("beforeFooter"),_c('el-button',_vm._b({attrs:{"size":"small"},on:{"click":_vm.handleCancel}},'el-button',_vm.cancelBtnProps,false),[_vm._v(_vm._s(_vm.cancelBtnText))]),_vm._t("middleFooter"),_c('el-button',_vm._b({attrs:{"size":"small","type":"primary","loading":_vm.showBtnLoading},on:{"click":_vm.handleOk}},'el-button',_vm.confirmBtnProps,false),[_vm._v(_vm._s(_vm.confirmBtnText))]),_vm._t("afterFooter")],2):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomDialog/src/index.vue?vue&type=template&id=0524222a&

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cdd5fda-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomForm/src/index.vue?vue&type=template&id=37b0d70e&scoped=true&
var srcvue_type_template_id_37b0d70e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-form"},[_c('el-form',_vm._g(_vm._b({directives:[{name:"loading",rawName:"v-loading",value:(_vm.showLoading),expression:"showLoading"}],ref:"ruleForm",attrs:{"validate-on-rule-change":false,"model":_vm.form}},'el-form',_vm.formProcessOptions,false),_vm.$listeners),[_vm._t("columnBefore",null,{"form":_vm.form}),_c(_vm.isRow ? 'el-row' : 'fragment',{tag:"component",attrs:{"gutter":0}},_vm._l((_vm.metaData),function(column){return _c('fragment',{key:column.key},[_c(_vm.isRow ? 'el-col' : 'fragment',_vm._b({tag:"component"},'component',_vm.getColSpanOptions(column),false),[(column.type === _vm.cmpTypes.title)?_c('h3',{staticClass:"title"},[_vm._v(" "+_vm._s(column.label)+" ")]):(column.type === _vm.cmpTypes.table)?[_c('el-button',{staticStyle:{"margin-bottom":"10px"},attrs:{"type":"default","size":"small","icon":"el-icon-plus"},on:{"click":function($event){return _vm.handleClickBtn(column)}}},[_c('span',[_vm._v("新增"+_vm._s(column.label))])]),_c('custom-table',{attrs:{"data":_vm.form[column.key],"columns":_vm.createColumn(column),"operation-options":{ width: 200 },"table-options":{ rowStyle: { height: '50px' }, hasOperation: true }},scopedSlots:_vm._u([{key:"operationMiddle",fn:function(ref){
var scope = ref.scope;
return [_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){return _vm.handleEdit(column, scope.row, scope.$index)}}},[_vm._v(" 修改 ")]),_c('el-button',{attrs:{"size":"small","type":"danger"},on:{"click":function($event){return _vm.handleDelete(_vm.form[column.key], scope.$index)}}},[_vm._v(" 删除 ")])]}}],null,true)})]:_vm._t(((column.key) + "-all"),function(){return [_c('el-form-item',_vm._b({directives:[{name:"show",rawName:"v-show",value:(column.isShow),expression:"column.isShow"}],attrs:{"label":column.serachLabel || column.label,"prop":column.key,"required":column.required}},'el-form-item',_vm.getFormItemOptions(column),false),[_c('template',{slot:"label"},[_c('span',{attrs:{"title":column.serachLabel || column.label}},[_vm._v(_vm._s(column.serachLabel || column.label))]),(column.tooltip)?_c('el-tooltip',{attrs:{"placement":"right","content":column.tooltip}},[_c('i',{staticClass:"el-icon-question",staticStyle:{"margin-left":"5px","vertical-align":"baseline"}})]):_vm._e()],1),_vm._t(column.key,function(){return [(column.type === _vm.cmpTypes.input)?_c('el-input',_vm._b({attrs:{"clearable":""},scopedSlots:_vm._u([{key:"prefix",fn:function(){return [_vm._t(((column.key) + "Prefix"),null,{"form":_vm.form})]},proxy:true},{key:"suffix",fn:function(){return [_vm._t(((column.key) + "Suffix"),null,{"form":_vm.form})]},proxy:true},{key:"prepend",fn:function(){return [_vm._t(((column.key) + "Prepend"),null,{"form":_vm.form})]},proxy:true},{key:"append",fn:function(){return [_vm._t(((column.key) + "Append"),null,{"form":_vm.form})]},proxy:true}],null,true),model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-input',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.number)?_c('el-input-number',_vm._b({attrs:{"min":0,"controls-position":"right"},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, _vm._n($$v))},expression:"form[column.key]"}},'el-input-number',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.select)?_c('el-select',_vm._b({attrs:{"filterable":"","clearable":""},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-select',_vm.getColumnOptions(column),false),_vm._l((_vm.getOptions(column) || []),function(item,index){return _c('el-option',{key:item.value + index,attrs:{"disabled":item.disabled,"label":item[column.labelName] || item.name,"value":item[column.valueName] || item.value}})}),1):(column.type === _vm.cmpTypes.check)?_c('el-checkbox',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-checkbox',_vm.getColumnOptions(column),false),[_vm._v(_vm._s(column.checkLabel))]):(column.type === _vm.cmpTypes.checkBox)?_c('el-checkbox-group',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-checkbox-group',_vm.getColumnOptions(column),false),_vm._l((_vm.getOptions(column) || []),function(item,index){return _c('el-checkbox',{key:item.value + index,attrs:{"name":column.key,"disabled":item.disabled,"label":item[column.valueName] || item.value}},[_vm._v(" "+_vm._s(item[column.labelName] || item.name)+" ")])}),1):(column.type === _vm.cmpTypes.radio)?_c('el-radio-group',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-radio-group',_vm.getColumnOptions(column),false),_vm._l((_vm.getOptions(column) || []),function(item,index){return _c('el-radio',{key:item.value + index,attrs:{"disabled":item.disabled,"label":item[column.valueName] || item.value}},[_vm._v(" "+_vm._s(item[column.labelName] || item.name)+" ")])}),1):(column.type === _vm.cmpTypes.date)?_c('el-date-picker',_vm._b({attrs:{"clearable":"","picker-options":_vm.pickerOptions,"value-format":"yyyy-MM-dd","format":"yyyy-MM-dd"},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-date-picker',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.time)?_c('el-time-picker',_vm._b({attrs:{"clearable":"","value-format":"HH:mm:ss"},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-time-picker',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.switch)?_c('el-switch',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-switch',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.slider)?_c('el-slider',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-slider',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.rate)?_c('el-rate',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-rate',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.color)?_c('el-color-picker',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-color-picker',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.cascader)?_c('el-cascader',_vm._b({attrs:{"clearable":"","filterable":"","options":_vm.getOptions(column) || []},on:{"change":_vm.handleCascaderChange},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-cascader',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.area)?_c('el-cascader',_vm._b({attrs:{"options":_vm.geoNameOptions,"clearable":"","props":{ label: 'text' },"filterable":""},on:{"change":_vm.changeArea},model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'el-cascader',_vm.getColumnOptions(column),false)):(column.type === _vm.cmpTypes.editor)?_c('quill-editor',_vm._b({model:{value:(_vm.form[column.key]),callback:function ($$v) {_vm.$set(_vm.form, column.key, $$v)},expression:"form[column.key]"}},'quill-editor',_vm.getColumnOptions(column),false)):_vm._e(),_vm._t("rowAfter",null,{"form":_vm.form})]},{"form":_vm.form})],2)]},{"form":_vm.form})],2)],1)}),1),_vm._t("columnAfter",null,{"form":_vm.form})],2),_vm._t("formAfter",null,{"form":_vm.form}),_c('custom-dialog',{attrs:{"title":("" + (_vm.modalType == 'add' ? '新增' : '编辑') + (_vm.currentColumn.label)),"dialog-options":_vm.tableDialogOptions},on:{"ok":_vm.handleOk,"closed":_vm.closedDialog},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('custom-form',{ref:"formData",attrs:{"columns":_vm.subFormColumn,"form-options":_vm.tableFormOptions},model:{value:(_vm.subForm),callback:function ($$v) {_vm.subForm=$$v},expression:"subForm"}})],1)],2)}
var srcvue_type_template_id_37b0d70e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomForm/src/index.vue?vue&type=template&id=37b0d70e&scoped=true&

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

/**
 * 根据数组获取数组中的值
 * @param {*} array
 * @param {*} value
 * @param {*} valueKey
 * @param {*} labelKey
 * @returns
 */
function getArrayValue(
  array,
  value,
  valueKey = "value",
  labelKey = "name",
  defaultValue = ""
) {
  if (!Array.isArray(array)) {
    throw new Error("Type requires an array");
  }
  const obj = array.find((item) => String(item[valueKey]) === String(value));
  return obj ? obj[labelKey] : defaultValue;
}

/**
 * Remove an item from an array.
 * @param {*} arr
 * @param {*} item
 * @returns
 */
function removeArray(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Remove array by index
 * @param {*} arr
 * @param {*} index
 * @returns
 */
function removeArrayByIndex(arr, index) {
  if (index > -1) {
    return arr.splice(index, 1);
  } else {
    return arr;
  }
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
  table: "table",
  editor: "editor",
};

// EXTERNAL MODULE: ./src/assets/json/geo_names.json
var geo_names = __webpack_require__("378b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cdd5fda-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomTable/src/index.vue?vue&type=template&id=3a9199ea&
var srcvue_type_template_id_3a9199ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-table',_vm._g(_vm._b({directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"table"},'el-table',_vm.tableSetting,false),_vm.$listeners),[(_vm.selection)?_c('el-table-column',{attrs:{"type":"selection","align":"center","reserve-selection":_vm.reserveSelection,"width":"60"}}):_vm._e(),_vm._l((_vm.metadata),function(column){return [(column.children && column.children.length)?[_c('table-column',{key:column.key,attrs:{"child":column}})]:[_c('el-table-column',_vm._b({key:column.key,attrs:{"align":column.align || 'center',"label":column.tableLabel || column.label},scopedSlots:_vm._u([(_vm.$slots[column.key + 'Header'])?{key:"header",fn:function(scope){return [_vm._t(column.key + 'Header',null,{"scope":scope})]}}:null,{key:"default",fn:function(scope){return [_vm._t(column.key,function(){return [(column.copy)?_c('i',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(scope.row[column.key]),expression:"scope.row[column.key]",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"}],staticClass:"el-icon-copy-document",staticStyle:{"cursor":"pointer","color":"#409eff","margin-right":"5px"}}):_vm._e(),(!column.isTag)?_c('span',[_vm._v(_vm._s(_vm.formatShow(column, scope.row, scope)))]):_vm._e(),(column.isTag)?_c('el-tag',_vm._b({},'el-tag',_vm.getTagOptions(column, scope.row),false),[_vm._v(_vm._s(_vm.formatShow(column, scope.row, scope))+" ")]):_vm._e()]},{"scope":scope})]}}],null,true)},'el-table-column',column.tableColumnOption,false))]]}),(_vm.hasOperation && _vm.showOperation)?_c('el-table-column',_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._t("operationColumn",function(){return [_c('div',{staticClass:"operationContainer"},[_vm._t("operationBefore",null,{"scope":scope}),_vm._t("autoOperation",function(){return [(_vm.updateFunc)?_c('el-button',_vm._b({attrs:{"size":"small","type":"primary"},on:{"click":function($event){return _vm.updateFunc(scope.row, scope.$index)}}},'el-button',_vm.updateOptions(scope.row, scope.$index),false),[_vm._v(" 修改 ")]):_vm._e(),_vm._t("operationMiddle",null,{"scope":scope}),(_vm.deleteFunc)?_c('el-button',_vm._b({attrs:{"size":"small","type":"danger"},on:{"click":function($event){return _vm.handleDeleteFunc(scope.row, scope.$index)}}},'el-button',_vm.deleteOptions(scope.row, scope.$index),false),[_vm._v(" 删除 ")]):_vm._e()]},{"scope":scope}),_vm._t("operationAfter",null,{"scope":scope})],2)]},{"scope":scope})]}}],null,true)},'el-table-column',_vm.processOperationOptions,false)):_vm._e()],2)}
var srcvue_type_template_id_3a9199ea_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomTable/src/index.vue?vue&type=template&id=3a9199ea&

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cdd5fda-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomTable/src/TableColumn.vue?vue&type=template&id=a1999f42&scoped=true&
var TableColumnvue_type_template_id_a1999f42_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-table-column',_vm._b({key:_vm.child.key,attrs:{"align":_vm.child.align || 'center',"label":_vm.child.tableLabel || _vm.child.label}},'el-table-column',_vm.child.tableColumnOption,false),[_vm._l((_vm.child.children),function(item){return [(item.children && item.children.length)?[_c('table-column',{key:item[_vm.key],attrs:{"child":item}})]:[_c('el-table-column',_vm._b({key:item.key,attrs:{"align":item.align || 'center',"label":item.tableLabel || item.label},scopedSlots:_vm._u([(_vm.$slots[item.key + 'Header'])?{key:"header",fn:function(scope){return [_vm._t(item.key + 'Header',null,{"scope":scope})]}}:null,{key:"default",fn:function(scope){return [_vm._t(item.key,function(){return [(item.copy)?_c('i',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(scope.row[item.key]),expression:"scope.row[item.key]",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"}],staticClass:"el-icon-copy-document",staticStyle:{"cursor":"pointer","color":"#409eff","margin-right":"5px"}}):_vm._e(),(!item.isTag)?_c('span',[_vm._v(_vm._s(_vm.formatShow(item, scope.row, scope)))]):_vm._e(),(item.isTag)?_c('el-tag',_vm._b({},'el-tag',_vm.getTagOptions(item, scope.row),false),[_vm._v(_vm._s(_vm.formatShow(item, scope.row, scope))+" ")]):_vm._e()]},{"scope":scope})]}}],null,true)},'el-table-column',item.tableColumnOption,false))]]})],2)}
var TableColumnvue_type_template_id_a1999f42_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomTable/src/TableColumn.vue?vue&type=template&id=a1999f42&scoped=true&

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
//
//
//
//
//
//
//
//
//
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
    child: {
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
        const option = options.find(
          (item) => String(item.value) == String(row[column.key])
        );
        return option ? option.name : "";
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
  TableColumnvue_type_template_id_a1999f42_scoped_true_render,
  TableColumnvue_type_template_id_a1999f42_scoped_true_staticRenderFns,
  false,
  null,
  "a1999f42",
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // 是否多选
    selection: {
      type: Boolean,
      default: false,
    },
    // 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
    reserveSelection: {
      type: Boolean,
      default: false,
    },
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
      type: [Object, Array],
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
      type: [Object, Array],
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
      const { tableColumns, columns } = this;
      if (tableColumns) {
        return tableColumns;
      } else if (columns) {
        if (Array.isArray(columns)) {
          return columns.filter((column) => column.showInTable);
        } else {
          return filterObject(columns, (column) => column.showInTable);
        }
      }
      return {};
    },
    metadata() {
      const { tableColumn } = this;
      if (Array.isArray(tableColumn)) {
        return tableColumn;
      } else {
        return Object.keys(tableColumn).map((key) => {
          const item = tableColumn[key];
          const {
            label = key,
            type = types.input,
            tableColumnOption = {},
            options,
          } = item;
          return {
            ...item,
            key,
            label,
            type,
            tableColumnOption,
            options,
          };
        });
      }
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
    console.log(this.$slots, "s");
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
    handleDeleteFunc(row, index) {
      this.$confirm("此操作将永久删除该行, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteFunc && this.deleteFunc(row, index);
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
      const appMainDom = document.querySelector("#content-wrapper");
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
        const option = options.find(
          (item) => String(item.value) == String(row[column.key])
        );
        return option ? option.name : "";
      }
      return row[column.key];
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomTable/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_CustomTable_srcvue_type_script_lang_js_ = (CustomTable_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/CustomTable/src/index.vue





/* normalize component */

var src_component = normalizeComponent(
  packages_CustomTable_srcvue_type_script_lang_js_,
  srcvue_type_template_id_3a9199ea_render,
  srcvue_type_template_id_3a9199ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CustomTable_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/CustomTable/index.js


/* istanbul ignore next */
CustomTable_src.install = function (Vue) {
  Vue.component(CustomTable_src.name, CustomTable_src);
};

/* harmony default export */ var CustomTable = (CustomTable_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cdd5fda-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomForm/src/QuillEditor.vue?vue&type=template&id=d6c0e902&
var QuillEditorvue_type_template_id_d6c0e902_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"quill-editor"},[_vm._t("toolbar"),_c('div',{ref:"editor"})],2)}
var QuillEditorvue_type_template_id_d6c0e902_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomForm/src/QuillEditor.vue?vue&type=template&id=d6c0e902&

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.snow.css
var quill_snow = __webpack_require__("8096");

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.js
var quill = __webpack_require__("9339");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomForm/src/QuillEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

// require sources
 // for snow theme

const fontSizeStyle = quill["import"]("attributors/style/size");
const fontSizeClass = quill["import"]("attributors/class/size");
fontSizeStyle.whitelist = [
  "10px",
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "36px",
];
fontSizeClass.whitelist = [
  "10px",
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "36px",
];

const defaultOptions = {
  theme: "snow",
  boundary: document.body,
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: fontSizeStyle.whitelist }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
      ["link", "image"],
    ],
  },
  placeholder: "请输入正文...",
  readOnly: false,
};
// pollfill
if (typeof Object.assign !== "function") {
  Object.defineProperty(Object, "assign", {
    value(target) {
      if (target == null) {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      const to = Object(target);
      for (let index = 1; index < arguments.length; index++) {
        const nextSource = arguments[index];
        if (nextSource != null) {
          for (const nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true,
  });
}
// export
/* harmony default export */ var QuillEditorvue_type_script_lang_js_ = ({
  name: "QuillEditor",
  props: {
    content: String,
    value: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    globalOptions: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      // eslint-disable-next-line vue/no-reserved-keys
      _options: {},
      // eslint-disable-next-line vue/no-reserved-keys
      _content: "",
      defaultOptions,
    };
  },
  watch: {
    // Watch content change
    content(newVal) {
      if (this.quill) {
        if (newVal && newVal !== this._content) {
          this._content = newVal;
          this.quill.pasteHTML(newVal);
        } else if (!newVal) {
          this.quill.setText("");
        }
      }
    },
    // Watch content change
    value(newVal) {
      if (this.quill) {
        if (newVal && newVal !== this._content) {
          this._content = newVal;
          this.quill.pasteHTML(newVal);
        } else if (!newVal) {
          this.quill.setText("");
        }
      }
    },
    // Watch disabled change
    disabled(newVal) {
      if (this.quill) {
        this.quill.enable(!newVal);
      }
    },
  },
  mounted() {
    this.initialize();
  },
  beforeDestroy() {
    this.quill = null;
    delete this.quill;
  },
  methods: {
    // Init Quill instance
    initialize() {
      if (this.$el) {
        // Options
        this._options = Object.assign(
          {},
          this.defaultOptions,
          this.globalOptions,
          this.options
        );
        // Instance
        this.quill = new quill(this.$refs.editor, this._options);

        this.quill.enable(false);
        // Set editor content
        if (this.value || this.content) {
          this.quill.pasteHTML(this.value || this.content);
        }
        // Disabled editor
        if (!this.disabled) {
          this.quill.enable(true);
        }
        // Mark model as touched if editor lost focus
        this.quill.on("selection-change", (range) => {
          if (!range) {
            this.$emit("blur", this.quill);
          } else {
            this.$emit("focus", this.quill);
          }
        });
        // Update model if text changes
        this.quill.on("text-change", () => {
          let html = this.$refs.editor.children[0].innerHTML;
          const quill = this.quill;
          const text = this.quill.getText();
          if (html === "<p><br></p>") html = "";
          this._content = html;
          this.$emit("input", this._content);
          this.$emit("change", { html, text, quill });
        });
        // Emit ready event
        this.$emit("ready", this.quill);
      }
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomForm/src/QuillEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_QuillEditorvue_type_script_lang_js_ = (QuillEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/CustomForm/src/QuillEditor.vue?vue&type=style&index=0&lang=css&
var QuillEditorvue_type_style_index_0_lang_css_ = __webpack_require__("0f3c");

// CONCATENATED MODULE: ./packages/CustomForm/src/QuillEditor.vue






/* normalize component */

var QuillEditor_component = normalizeComponent(
  src_QuillEditorvue_type_script_lang_js_,
  QuillEditorvue_type_template_id_d6c0e902_render,
  QuillEditorvue_type_template_id_d6c0e902_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var QuillEditor = (QuillEditor_component.exports);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    QuillEditor: QuillEditor,
    CustomTable: CustomTable,
    CustomDialog: CustomDialog,
  },
  model: {
    prop: "formData",
    event: "change",
  },
  props: {
    tableDialogOptions: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    tableFormOptions: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    showAll: {
      type: Boolean,
      required: false,
      default: true,
    },
    isRow: {
      type: Boolean,
      required: false,
      default: true,
    },
    isCollapse: {
      type: Boolean,
      required: false,
      default: true,
    },
    showNum: {
      type: [Number, String],
      default: 2,
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
      index: 0,
      modalType: "add",
      currentColumn: {}, // 当前操作的column
      subForm: {}, // 子表单
      subFormColumn: {}, // 子表单配置项
      visible: false,
      geoNameOptions: geo_names,
      form: {},
      debounceUpdate: null,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
  },
  computed: {
    isShowAll: {
      get() {
        return this.showAll;
      },
      set(val) {
        this.$emit("update:showAll", val);
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
        labelWidth: "70px",
        ...(rest || {}),
        rules: { ...this.formRules, ...rules },
      };
    },
    cmpTypes() {
      return types;
    },
    metaData() {
      const { isCollapse, showNum, isShowAll } = this;
      // 展开收起模式 并且 显示表单数量大于1
      if (isCollapse && showNum > 0) {
        // 展开
        if (isShowAll) {
          return this.createMetaData("expand");
        } else {
          // 收起
          return this.createMetaData("fold");
        }
      } else {
        // 非展开收起模式
        return this.createMetaData("expand");
      }
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
    // 关闭弹窗
    closedDialog() {
      const { formData } = this.$refs;
      formData.resetFields();
    },
    // 弹窗确定回调
    async handleOk() {
      const { formData } = this.$refs;
      const { key } = this.currentColumn;
      try {
        const checkResult = await formData.checkRule();
        if (checkResult) {
          if (this.modalType == "add") {
            const arr = [...this.form[key]];
            arr.push({ ...this.subForm, uid: Date.now() });
            this.form[key] = arr;
          } else {
            this.$set(this.form[key], this.index, this.subForm);
          }
          this.visible = false;
          this.subForm = {};
        }
      } catch (error) {
        console.log(error);
      }
    },
    createColumn(column) {
      const { tableDataOptions } = column;
      return tableDataOptions || {};
    },
    handleEdit(column, row, index) {
      this.currentColumn = column;
      this.subFormColumn = column.tableDataOptions;
      this.modalType = "edit";
      this.index = index;
      this.visible = true;
      this.subForm = row;
    },
    handleDelete(tableData, index) {
      removeArrayByIndex(tableData, index);
    },
    // 表格类型 点击打开弹窗
    handleClickBtn(column) {
      this.modalType = "add";
      this.currentColumn = column;
      this.subFormColumn = column.tableDataOptions;
      this.subForm = {};
      this.visible = true;
    },
    /**
     * @param {*} mode
     */
    createMetaData(mode) {
      const { columns, showNum } = this;
      return Object.keys(columns)
        .filter((key) => this.checkShow(columns[key]))
        .map((key, index) => {
          const item = columns[key];
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
            isShow: mode == "expand" ? true : index > showNum ? false : true,
          };
        });
    },
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
          [types.checkBox, types.area, types.cascader, types.table].includes(item.type) &&
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

// EXTERNAL MODULE: ./packages/CustomForm/src/index.vue?vue&type=style&index=1&id=37b0d70e&lang=scss&scoped=true&
var srcvue_type_style_index_1_id_37b0d70e_lang_scss_scoped_true_ = __webpack_require__("fab4");

// CONCATENATED MODULE: ./packages/CustomForm/src/index.vue







/* normalize component */

var CustomForm_src_component = normalizeComponent(
  packages_CustomForm_srcvue_type_script_lang_js_,
  srcvue_type_template_id_37b0d70e_scoped_true_render,
  srcvue_type_template_id_37b0d70e_scoped_true_staticRenderFns,
  false,
  null,
  "37b0d70e",
  null
  
)

/* harmony default export */ var CustomForm_src = (CustomForm_src_component.exports);
// CONCATENATED MODULE: ./packages/CustomForm/index.js



/* istanbul ignore next */
CustomForm_src.install = function (Vue) {
  Vue.component(CustomForm_src.name, CustomForm_src);
};

/* harmony default export */ var CustomForm = (CustomForm_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cdd5fda-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomPagination/src/index.vue?vue&type=template&id=48985794&scoped=true&
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cdd5fda-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomSearch/src/index.vue?vue&type=template&id=e6caa1ca&scoped=true&
var srcvue_type_template_id_e6caa1ca_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-search",style:(_vm.customStyle)},[_vm._t("col-before"),_c('custom-form',{ref:"dataForm",attrs:{"is-row":false,"isCollapse":_vm.isCollapse,"showNum":_vm.showNum,"show-all":_vm.showAll,"columns":_vm.searchColumn,"form-options":{
      inline: true,
      labelWidth: '',
    }},scopedSlots:_vm._u([{key:"columnAfter",fn:function(){return [_c('el-form-item',[_vm._t("before"),(!_vm.noSearch)?_c('el-button',_vm._b({attrs:{"icon":"el-icon-search","type":"primary","size":"small","loading":_vm.showLoading},on:{"click":_vm.search}},'el-button',_vm.searchBtnProps,false),[_vm._v(_vm._s(_vm.searchBtnText))]):_vm._e(),(_vm.isShowMoreBtn)?_c('more-search',{attrs:{"drawer-width":450,"title":"高级查询"},model:{value:(_vm.showMoreBtn),callback:function ($$v) {_vm.showMoreBtn=$$v},expression:"showMoreBtn"}},[_c('custom-form',{ref:"dataForm",attrs:{"is-row":false,"columns":_vm.searchColumn,"form-options":{
              inline: false,
              labelWidth: '80px',
            }},model:{value:(_vm.localQuery),callback:function ($$v) {_vm.localQuery=$$v},expression:"localQuery"}}),_c('div',{staticClass:"footer"},[_c('el-button',{attrs:{"size":"small","icon":"el-icon-refresh-right"},on:{"click":_vm.handleReset}},[_vm._v("重置")]),_c('el-button',{attrs:{"icon":"el-icon-search","type":"primary","size":"small"},on:{"click":_vm.handleSearch}},[_vm._v("查询")])],1)],1):_vm._e(),(!_vm.noSearch && _vm.showReset)?_c('el-button',_vm._b({attrs:{"icon":"el-icon-refresh-right","type":"default","size":"small"},on:{"click":_vm.handleReset}},'el-button',_vm.resetBtnProps,false),[_vm._v(_vm._s(_vm.resetBtnText))]):_vm._e(),_vm._t("after"),(_vm.isCollapse)?_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.showAll = !_vm.showAll}}},[_vm._v(" "+_vm._s(_vm.word)+" "),_c('i',{class:_vm.showAll ? 'el-icon-arrow-up ' : 'el-icon-arrow-down'})]):_vm._e()],2)]},proxy:true}],null,true),model:{value:(_vm.localQuery),callback:function ($$v) {_vm.localQuery=$$v},expression:"localQuery"}}),_vm._t("col-after")],2)}
var srcvue_type_template_id_e6caa1ca_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomSearch/src/index.vue?vue&type=template&id=e6caa1ca&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cdd5fda-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomSearch/src/MoreSearch.vue?vue&type=template&id=b7082a80&
var MoreSearchvue_type_template_id_b7082a80_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fragment',[_c('el-button',_vm._b({style:(_vm.btnStyle),attrs:{"icon":"el-icon-s-operation","size":"small"},on:{"click":_vm.btnClick}},'el-button',_vm.btnOptions,false),[_vm._v(" "+_vm._s(_vm.btnText)+" "),_c('custom-drawer',{attrs:{"title":_vm.title,"drawer-width":_vm.drawerWidth,"drawer-options":_vm.drawerOptions},model:{value:(_vm.showVisible),callback:function ($$v) {_vm.showVisible=$$v},expression:"showVisible"}},[_vm._t("default")],2)],1)],1)}
var MoreSearchvue_type_template_id_b7082a80_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomSearch/src/MoreSearch.vue?vue&type=template&id=b7082a80&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cdd5fda-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomDrawer/src/index.vue?vue&type=template&id=27a898bd&
var srcvue_type_template_id_27a898bd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-drawer',_vm._g(_vm._b({attrs:{"append-to-body":"","visible":_vm.showVisible,"placement":_vm.placement,"custom-class":"moreSearchDrawer","size":(_vm.drawerWidth + "px"),"show-close":false},on:{"close":function($event){_vm.showVisible = false}}},'el-drawer',_vm.drawerOptions,false),_vm.$listeners),[_c('div',{staticClass:"drawerHeader",attrs:{"slot":"title"},slot:"title"},[_c('span',[_vm._v(_vm._s(_vm.title))]),_c('i',{staticClass:"el-icon-close drawerClose",on:{"click":function($event){_vm.showVisible = false}}})]),_c('el-scrollbar',{staticStyle:{"height":"100%"}},[_vm._t("default")],2)],1)}
var srcvue_type_template_id_27a898bd_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomDrawer/src/index.vue?vue&type=template&id=27a898bd&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomDrawer/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CustomDrawer_srcvue_type_script_lang_js_ = ({
  name: "CustomDrawer",
  model: {
    prop: "visible",
    event: "update:visible",
  },
  props: {
    drawerWidth: {
      type: Number,
      default: 400,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: "right",
    },
    drawerOptions: {
      type: Object,
      default: () => {
        return {};
      },
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    showVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
    },
  },
  data() {
    return {};
  },
});

// CONCATENATED MODULE: ./packages/CustomDrawer/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_CustomDrawer_srcvue_type_script_lang_js_ = (CustomDrawer_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/CustomDrawer/src/index.vue?vue&type=style&index=0&lang=scss&
var CustomDrawer_srcvue_type_style_index_0_lang_scss_ = __webpack_require__("c293");

// CONCATENATED MODULE: ./packages/CustomDrawer/src/index.vue






/* normalize component */

var CustomDrawer_src_component = normalizeComponent(
  packages_CustomDrawer_srcvue_type_script_lang_js_,
  srcvue_type_template_id_27a898bd_render,
  srcvue_type_template_id_27a898bd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CustomDrawer_src = (CustomDrawer_src_component.exports);
// CONCATENATED MODULE: ./packages/CustomDrawer/index.js


/* istanbul ignore next */
CustomDrawer_src.install = function (Vue) {
  Vue.component(CustomDrawer_src.name, CustomDrawer_src);
};

/* harmony default export */ var CustomDrawer = (CustomDrawer_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomSearch/src/MoreSearch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var MoreSearchvue_type_script_lang_js_ = ({
  components: { Fragment: Fragment, CustomDrawer: CustomDrawer },
  model: {
    prop: "visible",
    event: "update:visible",
  },
  props: {
    drawerWidth: {
      type: Number,
      default: 400,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    drawerOptions: {
      type: Object,
      default: () => {
        return {
          placement: "right",
        };
      },
    },
    title: {
      type: String,
      default: "",
    },
    btnStyle: {
      type: Object,
      default: () => {
        return {
          backgroundColor: "#f28b3c",
          color: "white",
          borderColor: "#f28b3c",
        };
      },
    },
    btnOptions: {
      type: Object,
      default: () => {},
    },
    btnText: {
      type: String,
      default: "高级查询",
    },
  },
  computed: {
    showVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    btnClick() {
      this.$emit("click");
      this.showVisible = true;
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomSearch/src/MoreSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_MoreSearchvue_type_script_lang_js_ = (MoreSearchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/CustomSearch/src/MoreSearch.vue





/* normalize component */

var MoreSearch_component = normalizeComponent(
  src_MoreSearchvue_type_script_lang_js_,
  MoreSearchvue_type_template_id_b7082a80_render,
  MoreSearchvue_type_template_id_b7082a80_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MoreSearch = (MoreSearch_component.exports);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { CustomForm: CustomForm, MoreSearch: MoreSearch },
  model: {
    prop: "query",
    event: "change",
  },
  props: {
    isCollapse: {
      type: Boolean,
      required: false,
      default: true,
    },
    isShowMoreBtn: {
      type: Boolean,
      required: false,
      default: true,
    },
    showNum: {
      type: [Number, String],
      default: 2,
    },
    showReset: {
      type: Boolean,
      default: true,
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
      showMoreBtn: false,
      localQuery: {},
      showAll: true, //是否展开全部
    };
  },
  computed: {
    word() {
      const { showAll } = this;
      return showAll ? "收起" : "展开";
    },
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
  mounted() {},
  methods: {
    handleSearch() {
      this.search();
      this.showMoreBtn = false;
    },
    search() {
      this.$emit("search");
    },
    updateQuery() {
      if (!lodash_es_isEqual(this.query, this.localQuery)) {
        this.localQuery = lodash_es_cloneDeep(this.query);
      }
    },
    handleReset() {
      this.$refs.dataForm.resetFields();
      this.$emit("reset");
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomSearch/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_CustomSearch_srcvue_type_script_lang_js_ = (CustomSearch_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/CustomSearch/src/index.vue?vue&type=style&index=0&lang=scss&
var CustomSearch_srcvue_type_style_index_0_lang_scss_ = __webpack_require__("65a2");

// EXTERNAL MODULE: ./packages/CustomSearch/src/index.vue?vue&type=style&index=1&id=e6caa1ca&lang=scss&scoped=true&
var srcvue_type_style_index_1_id_e6caa1ca_lang_scss_scoped_true_ = __webpack_require__("86e8");

// CONCATENATED MODULE: ./packages/CustomSearch/src/index.vue







/* normalize component */

var CustomSearch_src_component = normalizeComponent(
  packages_CustomSearch_srcvue_type_script_lang_js_,
  srcvue_type_template_id_e6caa1ca_scoped_true_render,
  srcvue_type_template_id_e6caa1ca_scoped_true_staticRenderFns,
  false,
  null,
  "e6caa1ca",
  null
  
)

/* harmony default export */ var CustomSearch_src = (CustomSearch_src_component.exports);
// CONCATENATED MODULE: ./packages/CustomSearch/index.js


/* istanbul ignore next */
CustomSearch_src.install = function (Vue) {
  Vue.component(CustomSearch_src.name, CustomSearch_src);
};

/* harmony default export */ var CustomSearch = (CustomSearch_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cdd5fda-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomAdvancedSearch/src/index.vue?vue&type=template&id=2c1af4b4&scoped=true&
var srcvue_type_template_id_2c1af4b4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('custom-drawer',{attrs:{"title":_vm.title,"placement":"right","drawer-width":_vm.drawerWidth,"drawer-options":_vm.drawerOptions},model:{value:(_vm.showVisible),callback:function ($$v) {_vm.showVisible=$$v},expression:"showVisible"}},[_c('custom-form',{ref:"dataForm",attrs:{"is-row":_vm.isRow,"columns":_vm.searchColumn,"form-options":_vm.formProcessOptions},model:{value:(_vm.localQuery),callback:function ($$v) {_vm.localQuery=$$v},expression:"localQuery"}}),(_vm.showFooter)?_c('div',{staticClass:"footer"},[_c('el-button',{attrs:{"size":"small","icon":"el-icon-refresh-right"},on:{"click":_vm.handleReset}},[_vm._v("重置")]),_c('el-button',{attrs:{"icon":"el-icon-search","type":"primary","size":"small"},on:{"click":_vm.handleSearch}},[_vm._v("查询")])],1):_vm._t("footer")],2)}
var srcvue_type_template_id_2c1af4b4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CustomAdvancedSearch/src/index.vue?vue&type=template&id=2c1af4b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CustomAdvancedSearch/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var CustomAdvancedSearch_srcvue_type_script_lang_js_ = ({
  name: "CustomAdvancedSearch",
  components: { CustomDrawer: CustomDrawer, CustomForm: CustomForm },
  model: {
    prop: "query",
    event: "change",
  },
  props: {
    isRow: {
      type: Boolean,
      default: false,
    },
    formOptions: {
      type: Object,
      default: () => {},
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
    showFooter: {
      type: Boolean,
      default: true,
    },
    drawerWidth: {
      type: Number,
      default: 400,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    drawerOptions: {
      type: Object,
      default: () => {
        return {};
      },
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    searchColumn() {
      if (this.searchColumns) {
        return this.searchColumns;
      } else if (this.columns) {
        return filterObject(this.columns, (column) => column.showInSearch);
      }
      return {};
    },
    formProcessOptions() {
      const { ...rest } = this.formOptions || {};
      return {
        inline: false,
        labelWidth: "80px",
        ...(rest || {}),
      };
    },
    showVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
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
  data() {
    return {
      localQuery: {},
    };
  },
  methods: {
    handleSearch() {
      this.search();
      this.showVisible = false;
    },
    search() {
      this.$emit("search");
    },
    updateQuery() {
      if (!lodash_es_isEqual(this.query, this.localQuery)) {
        this.localQuery = lodash_es_cloneDeep(this.query);
      }
    },
    handleReset() {
      this.$refs.dataForm.resetFields();
      this.$emit("reset");
    },
  },
});

// CONCATENATED MODULE: ./packages/CustomAdvancedSearch/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_CustomAdvancedSearch_srcvue_type_script_lang_js_ = (CustomAdvancedSearch_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/CustomAdvancedSearch/src/index.vue?vue&type=style&index=0&id=2c1af4b4&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_2c1af4b4_lang_scss_scoped_true_ = __webpack_require__("60a8");

// CONCATENATED MODULE: ./packages/CustomAdvancedSearch/src/index.vue






/* normalize component */

var CustomAdvancedSearch_src_component = normalizeComponent(
  packages_CustomAdvancedSearch_srcvue_type_script_lang_js_,
  srcvue_type_template_id_2c1af4b4_scoped_true_render,
  srcvue_type_template_id_2c1af4b4_scoped_true_staticRenderFns,
  false,
  null,
  "2c1af4b4",
  null
  
)

/* harmony default export */ var CustomAdvancedSearch_src = (CustomAdvancedSearch_src_component.exports);
// CONCATENATED MODULE: ./packages/CustomAdvancedSearch/index.js


/* istanbul ignore next */
CustomAdvancedSearch_src.install = function (Vue) {
  Vue.component(CustomAdvancedSearch_src.name, CustomAdvancedSearch_src);
};

/* harmony default export */ var CustomAdvancedSearch = (CustomAdvancedSearch_src);

// CONCATENATED MODULE: ./packages/index.js









const config = __webpack_require__("9224");

const components = [
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
  CustomAdvancedSearch,
  CustomDrawer,
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
  utils: utils_namespaceObject,
  install: packages_install,
  CustomDialog: CustomDialog,
  CustomForm: CustomForm,
  CustomPagination: CustomPagination,
  CustomSearch: CustomSearch,
  CustomTable: CustomTable,
  CustomAdvancedSearch: CustomAdvancedSearch,
  CustomDrawer: CustomDrawer,
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });