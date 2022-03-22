/* * Copyright © 2022-2022 fangkang * Released under the MIT License. */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var type = require('packages/form/src/type');
var utils = require('src/utils');
var clipboard = _interopDefault(require('src/directive/clipboard/index.js'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

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

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

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
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? getRawTag(value)
    : objectToString(value);
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

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

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
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
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
var now = function() {
  return root.Date.now();
};

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

var script = {
  name: 'TableColumn',
  props: {
    child: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    clipboardSuccess: function clipboardSuccess() {
      this.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500
      });
    },
    getTagOptions: function getTagOptions(column, row) {
      var options = {};
      var tagOptions = column.tagOptions;

      if (typeof tagOptions === 'string') {
        options.type = tagOptions;
      }

      if (_typeof(tagOptions) === 'object') {
        options = tagOptions;
      } else if (typeof tagOptions === 'function') {
        options = tagOptions(row) || {};
      }

      return _objectSpread2({}, options);
    },
    formatShow: function formatShow(column, row, scope) {
      var showFormat = column.showFormat;

      if (showFormat && typeof showFormat === 'function') {
        return showFormat(row[column.key], row, scope);
      }

      if ([type.types.select, type.types.checkBox, type.types.radio].includes(column.type)) {
        var options = [];

        if (Array.isArray(column.options)) {
          options = column.options;
        } else if (typeof column.options === 'function') {
          options = column.options(row);
        }

        var option = options.find(function (item) {
          return String(item.value) === String(row[column.key]);
        });
        return option ? option.name : '';
      }

      return row[column.key];
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */ var __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-table-column",
    _vm._b(
      {
        key: _vm.child.key,
        attrs: {
          align: _vm.child.align || "center",
          label: _vm.child.tableLabel || _vm.child.label
        }
      },
      "el-table-column",
      _vm.child.tableColumnOption,
      false
    ),
    [
      _vm._l(_vm.child.children, function(item) {
        return [
          item.children && item.children.length
            ? [
                _c("table-column", {
                  key: item[_vm.key],
                  attrs: { child: item }
                })
              ]
            : [
                _c(
                  "el-table-column",
                  _vm._b(
                    {
                      key: item.key,
                      attrs: {
                        align: item.align || "center",
                        label: item.tableLabel || item.label
                      },
                      scopedSlots: _vm._u(
                        [
                          _vm.$slots[item.key + "Header"]
                            ? {
                                key: "header",
                                fn: function(scope) {
                                  return [
                                    _vm._t(item.key + "Header", null, {
                                      scope: scope
                                    })
                                  ]
                                }
                              }
                            : null,
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _vm._t(
                                  item.key,
                                  [
                                    item.copy
                                      ? _c("i", {
                                          directives: [
                                            {
                                              name: "clipboard",
                                              rawName: "v-clipboard:copy",
                                              value: scope.row[item.key],
                                              expression: "scope.row[item.key]",
                                              arg: "copy"
                                            },
                                            {
                                              name: "clipboard",
                                              rawName: "v-clipboard:success",
                                              value: _vm.clipboardSuccess,
                                              expression: "clipboardSuccess",
                                              arg: "success"
                                            }
                                          ],
                                          staticClass: "el-icon-copy-document",
                                          staticStyle: {
                                            cursor: "pointer",
                                            color: "#409eff",
                                            "margin-right": "5px"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !item.isTag
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.formatShow(
                                                item,
                                                scope.row,
                                                scope
                                              )
                                            )
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.isTag
                                      ? _c(
                                          "el-tag",
                                          _vm._b(
                                            {},
                                            "el-tag",
                                            _vm.getTagOptions(item, scope.row),
                                            false
                                          ),
                                          [
                                            _vm._v(
                                              "\n              " +
                                                _vm._s(
                                                  _vm.formatShow(
                                                    item,
                                                    scope.row,
                                                    scope
                                                  )
                                                ) +
                                                "\n            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  { scope: scope }
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    },
                    "el-table-column",
                    item.tableColumnOption,
                    false
                  )
                )
              ]
        ]
      })
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = "data-v-045db86f";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TableColumn = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var script$1 = {
  name: 'ElProTable',
  components: {
    TableColumn: TableColumn
  },
  directives: {
    clipboard: clipboard
  },
  props: {
    updateText: {
      type: String,
      default: '修改'
    },
    deleteText: {
      type: String,
      default: '删除'
    },
    // 是否多选
    selection: {
      type: Boolean,
      default: false
    },
    // 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
    reserveSelection: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    columns: {
      type: [Object, Array],
      required: false,
      default: function _default() {}
    },
    updateProps: {
      type: Function,
      required: false,
      default: function _default() {}
    },
    deleteProps: {
      type: Function,
      required: false,
      default: function _default() {}
    },
    tableColumns: {
      type: [Object, Array, null],
      required: false,
      default: null
    },
    tableOptions: {
      type: Object,
      required: false,
      default: function _default() {}
    },
    deleteFunc: {
      type: Function,
      required: false,
      default: function _default() {}
    },
    updateFunc: {
      type: Function,
      required: false,
      default: function _default() {}
    },
    operationOptions: {
      type: Object,
      required: false,
      default: function _default() {}
    },
    showOperation: {
      type: Boolean,
      required: false,
      default: true
    },
    autoHeight: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: function data() {
    return {
      tableHeight: '',
      debounceHeightListener: null
    };
  },
  computed: {
    tableColumn: function tableColumn() {
      var tableColumns = this.tableColumns,
          columns = this.columns;

      if (tableColumns) {
        return tableColumns;
      } else if (columns) {
        if (Array.isArray(columns)) {
          return columns.filter(function (column) {
            return column.showInTable;
          });
        } else {
          return utils.filterObject(columns, function (column) {
            return column.showInTable;
          });
        }
      }

      return {};
    },
    metadata: function metadata() {
      var tableColumn = this.tableColumn;

      if (Array.isArray(tableColumn)) {
        return tableColumn;
      } else {
        return Object.keys(tableColumn).map(function (key) {
          var item = tableColumn[key];
          var _item$label = item.label,
              label = _item$label === void 0 ? key : _item$label,
              _item$type = item.type,
              type$1 = _item$type === void 0 ? type.types.input : _item$type,
              _item$tableColumnOpti = item.tableColumnOption,
              tableColumnOption = _item$tableColumnOpti === void 0 ? {} : _item$tableColumnOpti,
              options = item.options;
          return _objectSpread2({}, item, {
            key: key,
            label: label,
            type: type$1,
            tableColumnOption: tableColumnOption,
            options: options
          });
        });
      }
    },
    tableSetting: function tableSetting() {
      var setting = _objectSpread2({
        data: this.data,
        highlightCurrentRow: true,
        style: 'width: 100%'
      }, this.tableOptions || {});

      if (this.tableHeight) {
        setting.height = this.tableHeight;
      }

      return setting;
    },
    processOperationOptions: function processOperationOptions() {
      return _objectSpread2({
        fixed: 'right',
        label: '操作',
        width: '150',
        align: 'center'
      }, this.operationOptions || {});
    },
    hasOperation: function hasOperation() {
      return this.tableOptions ? this.tableOptions.hasOperation :  this.deleteFunc || this.updateFunc;
    }
  },
  mounted: function mounted() {
    if (this.autoHeight) {
      this.setTableHeight();
      this.setChangeHeightListener();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.debounceHeightListener) {
      window.removeEventListener('resize', this.debounceHeightListener);
    }
  },
  methods: {
    getTagOptions: function getTagOptions(column, row) {
      var options = {};
      var tagOptions = column.tagOptions;

      if (typeof tagOptions === 'string') {
        options.type = tagOptions;
      }

      if (_typeof(tagOptions) === 'object') {
        options = tagOptions;
      } else if (typeof tagOptions === 'function') {
        options = tagOptions(row) || {};
      }

      return _objectSpread2({}, options);
    },
    clipboardSuccess: function clipboardSuccess() {
      this.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500
      });
    },
    handleDeleteFunc: function handleDeleteFunc(row, index) {
      var _this = this;

      this.$confirm('此操作将永久删除该行, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this.deleteFunc && _this.deleteFunc(row, index);
      }).catch(function (err) {
        console.log(err);
      });
    },
    setChangeHeightListener: function setChangeHeightListener() {
      if (!this.debounceHeightListener) {
        this.debounceHeightListener = debounce(this.setTableHeight, 100);
      }

      window.addEventListener('resize', this.debounceHeightListener);
    },
    setTableHeight: function setTableHeight() {
      var searchDom = document.querySelector('.el-pro-search');
      var appMainDom = document.querySelector('#el-pro-wrapper');

      if (searchDom && appMainDom) {
        var paginationDom = document.querySelector('.el-pro-pagination');
        var paginationDomHeight = paginationDom ? paginationDom.clientHeight : 0;
        this.tableHeight = appMainDom.offsetHeight - searchDom.clientHeight - paginationDomHeight - 50 + 'px';
      }
    },
    formatShow: function formatShow(column, row, scope) {
      var showFormat = column.showFormat;

      if (showFormat && typeof showFormat === 'function') {
        return showFormat(row[column.key], row, scope);
      }

      if ([type.types.select, type.types.checkBox, type.types.radio].includes(column.type)) {
        var options = [];

        if (Array.isArray(column.options)) {
          options = column.options;
        } else if (typeof column.options === 'function') {
          options = column.options(row);
        }

        var option = options.find(function (item) {
          return String(item.value) === String(row[column.key]);
        });
        return option ? option.name : '';
      }

      return row[column.key];
    }
  }
};

/* script */ var __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-table",
    _vm._g(
      _vm._b(
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          ref: "table"
        },
        "el-table",
        _vm.tableSetting,
        false
      ),
      _vm.$listeners
    ),
    [
      _vm.selection
        ? _c("el-table-column", {
            attrs: {
              type: "selection",
              align: "center",
              "reserve-selection": _vm.reserveSelection,
              width: "60"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.metadata, function(column) {
        return [
          column.children && column.children.length
            ? [
                _c("table-column", {
                  key: column.key,
                  attrs: { child: column }
                })
              ]
            : [
                _c(
                  "el-table-column",
                  _vm._b(
                    {
                      key: column.key,
                      attrs: {
                        align: column.align || "center",
                        label: column.tableLabel || column.label
                      },
                      scopedSlots: _vm._u(
                        [
                          _vm.$slots[column.key + "Header"]
                            ? {
                                key: "header",
                                fn: function(scope) {
                                  return [
                                    _vm._t(column.key + "Header", null, {
                                      scope: scope
                                    })
                                  ]
                                }
                              }
                            : null,
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _vm._t(
                                  column.key,
                                  [
                                    column.copy
                                      ? _c("i", {
                                          directives: [
                                            {
                                              name: "clipboard",
                                              rawName: "v-clipboard:copy",
                                              value: scope.row[column.key],
                                              expression:
                                                "scope.row[column.key]",
                                              arg: "copy"
                                            },
                                            {
                                              name: "clipboard",
                                              rawName: "v-clipboard:success",
                                              value: _vm.clipboardSuccess,
                                              expression: "clipboardSuccess",
                                              arg: "success"
                                            }
                                          ],
                                          staticClass: "el-icon-copy-document",
                                          staticStyle: {
                                            cursor: "pointer",
                                            color: "#409eff",
                                            "margin-right": "5px"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !column.isTag
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.formatShow(
                                                column,
                                                scope.row,
                                                scope
                                              )
                                            )
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    column.isTag
                                      ? _c(
                                          "el-tag",
                                          _vm._b(
                                            {},
                                            "el-tag",
                                            _vm.getTagOptions(
                                              column,
                                              scope.row
                                            ),
                                            false
                                          ),
                                          [
                                            _vm._v(
                                              "\n              " +
                                                _vm._s(
                                                  _vm.formatShow(
                                                    column,
                                                    scope.row,
                                                    scope
                                                  )
                                                ) +
                                                "\n            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  { scope: scope }
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    },
                    "el-table-column",
                    column.tableColumnOption,
                    false
                  )
                )
              ]
        ]
      }),
      _vm._v(" "),
      _vm.hasOperation && _vm.showOperation
        ? _c(
            "el-table-column",
            _vm._b(
              {
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _vm._t(
                            "operationColumn",
                            [
                              _c(
                                "div",
                                { staticClass: "operationContainer" },
                                [
                                  _vm._t("operationBefore", null, {
                                    scope: scope
                                  }),
                                  _vm._v(" "),
                                  _vm._t(
                                    "autoOperation",
                                    [
                                      _vm.updateFunc
                                        ? _c(
                                            "el-button",
                                            _vm._b(
                                              {
                                                attrs: {
                                                  size: "small",
                                                  type: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.updateFunc(
                                                      scope.row,
                                                      scope.$index
                                                    )
                                                  }
                                                }
                                              },
                                              "el-button",
                                              _vm.updateProps(
                                                scope.row,
                                                scope.$index
                                              ),
                                              false
                                            ),
                                            [
                                              _vm._v(
                                                "\n              " +
                                                  _vm._s(_vm.updateText) +
                                                  "\n            "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm._t("operationMiddle", null, {
                                        scope: scope
                                      }),
                                      _vm._v(" "),
                                      _vm.deleteFunc
                                        ? _c(
                                            "el-button",
                                            _vm._b(
                                              {
                                                attrs: {
                                                  size: "small",
                                                  type: "danger"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.handleDeleteFunc(
                                                      scope.row,
                                                      scope.$index
                                                    )
                                                  }
                                                }
                                              },
                                              "el-button",
                                              _vm.deleteProps(
                                                scope.row,
                                                scope.$index
                                              ),
                                              false
                                            ),
                                            [
                                              _vm._v(
                                                "\n              " +
                                                  _vm._s(_vm.deleteText) +
                                                  "\n            "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    { scope: scope }
                                  ),
                                  _vm._v(" "),
                                  _vm._t("operationAfter", null, {
                                    scope: scope
                                  })
                                ],
                                2
                              )
                            ],
                            { scope: scope }
                          )
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              },
              "el-table-column",
              _vm.processOperationOptions,
              false
            )
          )
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ElProTable = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

/* istanbul ignore next */

ElProTable.install = function (Vue) {
  Vue.component(ElProTable.name, ElProTable);
};

module.exports = ElProTable;
