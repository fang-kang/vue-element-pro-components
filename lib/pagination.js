/* * Copyright © 2022-2022 fangkang * Released under the MIT License. */
'use strict';

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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'ElProPagination',
  model: {
    prop: 'pagination',
    event: 'update:pagination'
  },
  props: {
    paginationOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    customProps: {
      type: Object,
      default: function _default() {
        return {
          page: 'page',
          pageSize: 'pageSize'
        };
      }
    },
    customStyle: {
      type: Object,
      default: function _default() {}
    },
    paginationStyle: {
      type: Object,
      default: function _default() {}
    },
    pagination: {
      type: Object,
      required: true,
      default: function _default() {
        var _ref;

        return _ref = {}, _defineProperty(_ref, this.customProps.page, 1), _defineProperty(_ref, this.customProps.pageSize, 10), _ref;
      }
    },
    pageSizes: {
      type: Array,
      required: false,
      default: function _default() {
        return [10, 20, 30, 50, 100];
      }
    },
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    page: function page() {
      return this.customProps.page;
    },
    pageSize: function pageSize() {
      return this.customProps.pageSize;
    },
    paginationProcessOptions: function paginationProcessOptions() {
      return _objectSpread2({
        layout: 'total, sizes, prev, pager, next, jumper',
        background: true
      }, this.paginationOptions || {});
    }
  },
  methods: {
    handleSizeChange: function handleSizeChange(pageSize) {
      this.$emit('update:pagination', _objectSpread2({}, this.pagination, _defineProperty({}, this.customProps.pageSize, pageSize)));
      this.refresh();
    },
    handleCurrentChange: function handleCurrentChange(page) {
      this.$emit('update:pagination', _objectSpread2({}, this.pagination, _defineProperty({}, this.customProps.page, page)));
      this.refresh();
    },
    refresh: function refresh() {
      var _this = this;

      this.$nextTick(function () {
        _this.$emit('onLoad');
      });
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
    "div",
    { staticClass: "el-pro-pagination", style: _vm.customStyle },
    [
      _c(
        "el-pagination",
        _vm._b(
          {
            style: _vm.paginationStyle,
            attrs: {
              "current-page": _vm.pagination[_vm.page],
              "page-sizes": _vm.pageSizes,
              "page-size": _vm.pagination[_vm.pageSize],
              total: _vm.total
            },
            on: {
              "size-change": _vm.handleSizeChange,
              "current-change": _vm.handleCurrentChange
            }
          },
          "el-pagination",
          _vm.paginationProcessOptions,
          false
        )
      )
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = "data-v-b16b9ba2";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ElProPagination = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

/* istanbul ignore next */

ElProPagination.install = function (Vue) {
  Vue.component(ElProPagination.name, ElProPagination);
};

module.exports = ElProPagination;
