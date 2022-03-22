/* * Copyright © 2022-2022 fangkang * Released under the MIT License. */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.drawer = factory());
}(this, function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
    name: 'ElProDrawer',
    model: {
      prop: 'visible',
      event: 'update:visible'
    },
    props: {
      drawerWidth: {
        type: Number,
        default: 400
      },
      visible: {
        type: Boolean,
        default: false
      },
      placement: {
        type: String,
        default: 'right'
      },
      drawerOptions: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      title: {
        type: String,
        default: ''
      }
    },
    data: function data() {
      return {};
    },
    computed: {
      showVisible: {
        get: function get() {
          return this.visible;
        },
        set: function set(val) {
          this.$emit('update:visible', val);
        }
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

  /* script */
  var __vue_script__ = script;
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "el-drawer",
      _vm._g(
        _vm._b(
          {
            attrs: {
              "append-to-body": "",
              visible: _vm.showVisible,
              placement: _vm.placement,
              "custom-class": "el-pro-drawer",
              size: _vm.drawerWidth + "px",
              "show-close": false
            },
            on: {
              close: function($event) {
                _vm.showVisible = false;
              }
            }
          },
          "el-drawer",
          _vm.drawerOptions,
          false
        ),
        _vm.$listeners
      ),
      [
        _c(
          "div",
          {
            staticClass: "drawerHeader",
            attrs: { slot: "title" },
            slot: "title"
          },
          [
            _c("span", [_vm._v(_vm._s(_vm.title))]),
            _vm._v(" "),
            _c("i", {
              staticClass: "el-icon-close drawerClose",
              on: {
                click: function($event) {
                  _vm.showVisible = false;
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "el-scrollbar",
          { staticStyle: { height: "100%" } },
          [_vm._t("default")],
          2
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
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var ElProDrawer = normalizeComponent_1(
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

  ElProDrawer.install = function (Vue) {
    Vue.component(ElProDrawer.name, ElProDrawer);
  };

  return ElProDrawer;

}));
