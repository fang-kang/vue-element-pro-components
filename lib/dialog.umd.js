/* * Copyright © 2022-2022 fangkang * Released under the MIT License. */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.dialog = factory());
}(this, function () { 'use strict';

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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
    name: 'ElProDialog',
    model: {
      prop: 'visible',
      event: 'update:visible'
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      cancelBtnText: {
        type: String,
        default: '取消'
      },
      confirmBtnText: {
        type: String,
        default: '确定'
      },
      cancelBtnProps: {
        type: Object,
        required: false,
        default: function _default() {
          return {};
        }
      },
      confirmBtnProps: {
        type: Object,
        required: false,
        default: function _default() {
          return {};
        }
      },
      dialogOptions: {
        type: Object,
        required: false,
        default: function _default() {
          return {};
        }
      },
      visible: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      btnLoading: {
        type: Boolean,
        default: false
      },
      showAction: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        fullscreen: false
      };
    },
    computed: {
      showBtnLoading: {
        get: function get() {
          return this.btnLoading;
        },
        set: function set(val) {
          this.$emit('update:btnLoading', val);
        }
      },
      showVisible: {
        get: function get() {
          return this.visible;
        },
        set: function set(val) {
          this.$emit('update:visible', val);
        }
      },
      showLoading: {
        get: function get() {
          return this.loading;
        },
        set: function set(val) {
          this.$emit('update:loading', val);
        }
      },
      dialogProcessOptions: function dialogProcessOptions() {
        return _objectSpread2({
          closeOnClickModal: true,
          top: '10vh',
          width: '60%',
          destroyOnClose: false,
          appendToBody: true,
          lockScroll: true,
          showFullscreen: false,
          draggable: false,
          center: false
        }, this.dialogOptions || {});
      }
    },
    mounted: function mounted() {
      var draggable = this.dialogProcessOptions.draggable;

      if (draggable) {
        this.initDraggable();
      }
    },
    methods: {
      handleOk: function handleOk() {
        this.$emit('ok');
      },
      handleCancel: function handleCancel() {
        this.showVisible = false;
        this.$emit('cancel');
      },
      processDrag: function processDrag() {
        var dragDom = document.querySelector('.el-pro-dialog');
        var dialogHeaderEl = document.querySelector('.el-pro-dialog .el-dialog__header');
        var fullscreen = this.fullscreen;
        var draggable = this.dialogProcessOptions.draggable; // 全屏的时候需要重新定义left top

        if (fullscreen && draggable) {
          dragDom.style.cssText += ";left:0px;top:0px;";
          dialogHeaderEl.style.cssText += ';cursor:default;user-select:none;';
        } else if (!fullscreen && draggable) {
          dialogHeaderEl.style.cssText += ';cursor:move;user-select:none;';
        }

        if (draggable) {
          dragDom.style.cssText += ";left:0px;top:0px;";
        }
      },
      closed: function closed() {
        var draggable = this.dialogProcessOptions.draggable;
        this.fullscreen = false;

        if (draggable) {
          this.processDrag();
        }

        this.$emit('closed');
      },
      toggleFull: function toggleFull() {
        this.fullscreen = !this.fullscreen;
        this.processDrag();
      },
      initDraggable: function initDraggable() {
        this.$nextTick(function () {
          var dragDom = document.querySelector('.el-pro-dialog');
          var dialogHeaderEl = document.querySelector('.el-pro-dialog .el-dialog__header');
          dialogHeaderEl.style.cssText += ';cursor:move;user-select:none;';
          var sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);

          dialogHeaderEl.onmousedown = function (e) {
            var disX = e.clientX - dialogHeaderEl.offsetLeft;
            var disY = e.clientY - dialogHeaderEl.offsetTop;
            var dragDomWidth = dragDom.offsetWidth;
            var dragDomHeight = dragDom.offsetHeight;
            var screenWidth = document.documentElement.clientWidth;
            var screenHeight = document.documentElement.clientHeight;
            var minDragDomLeft = dragDom.offsetLeft;
            var maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;
            var minDragDomTop = dragDom.offsetTop;
            var maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight;
            var styleLeftStr = sty.left;
            var styleTopStr = sty.top;
            if (!styleLeftStr || !styleTopStr) return;
            var styleLeft;
            var styleTop; // Format may be "##%" or "##px"

            if (styleLeftStr.includes('%')) {
              styleLeft = +screenWidth * (+styleLeftStr.replace(/%/g, '') / 100);
              styleTop = +screenHeight * (+styleTopStr.replace(/%/g, '') / 100);
            } else {
              styleLeft = +styleLeftStr.replace(/px/g, '');
              styleTop = +styleTopStr.replace(/px/g, '');
            }

            document.onmousemove = function (e) {
              var left = e.clientX - disX;
              var top = e.clientY - disY; // Handle edge cases

              if (-left > minDragDomLeft) {
                left = -minDragDomLeft;
              } else if (left > maxDragDomLeft) {
                left = maxDragDomLeft;
              }

              if (-top > minDragDomTop) {
                top = -minDragDomTop;
              } else if (top > maxDragDomTop) {
                top = maxDragDomTop;
              } // 移动当前元素


              dragDom.style.left = "".concat(left + styleLeft, "px");
              dragDom.style.top = "".concat(top + styleTop, "px");
            };

            document.onmouseup = function () {
              document.onmousemove = null;
              document.onmouseup = null;
            };
          };
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

  /* script */
  var __vue_script__ = script;
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "el-dialog",
      _vm._g(
        _vm._b(
          {
            ref: "dialogRef",
            attrs: {
              "custom-class": "el-pro-dialog",
              fullscreen: _vm.dialogProcessOptions.fullscreen || _vm.fullscreen,
              visible: _vm.showVisible
            },
            on: {
              "update:visible": function($event) {
                _vm.showVisible = $event;
              },
              closed: _vm.closed
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "title",
                  fn: function() {
                    return [
                      _vm.$slots.title
                        ? _vm._t("title")
                        : _c(
                            "div",
                            {
                              staticClass: "el-pro-dialog__header",
                              class: [
                                _vm.dialogProcessOptions.center
                                  ? "justify-content-c"
                                  : ""
                              ]
                            },
                            [
                              _vm._t("nameBefore"),
                              _vm._v(" "),
                              _vm._t("title", [
                                _c(
                                  "span",
                                  { staticStyle: { "font-size": "18px" } },
                                  [_vm._v(_vm._s(_vm.title))]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._t("nameAfter"),
                              _vm._v(" "),
                              _vm.dialogProcessOptions.showFullscreen
                                ? _c("i", {
                                    staticClass: "dialog__icon",
                                    class: _vm.fullscreen
                                      ? "el-icon-minus"
                                      : "el-icon-full-screen",
                                    on: { click: _vm.toggleFull }
                                  })
                                : _vm._e()
                            ],
                            2
                          )
                    ]
                  },
                  proxy: true
                },
                _vm.$slots.footer && !_vm.showAction
                  ? {
                      key: "footer",
                      fn: function() {
                        return [_vm._t("footer")]
                      },
                      proxy: true
                    }
                  : null
              ],
              null,
              true
            )
          },
          "el-dialog",
          _vm.dialogProcessOptions,
          false
        ),
        _vm.$listeners
      ),
      [
        _vm._v(" "),
        _c(
          "el-scrollbar",
          {
            directives: [
              {
                name: "loading",
                rawName: "v-loading",
                value: _vm.showLoading,
                expression: "showLoading"
              }
            ],
            class:
              _vm.fullscreen && _vm.$slots.footer
                ? "el-pro-dialog__content--footer"
                : _vm.fullscreen && !_vm.$slots.footer
                ? "el-pro-dialog__content--fullscreen"
                : "el-pro-dialog__content"
          },
          [_c("div", { staticClass: "content__wrap" }, [_vm._t("default")], 2)]
        ),
        _vm._v(" "),
        _vm.showAction
          ? _c(
              "div",
              { attrs: { slot: "footer" }, slot: "footer" },
              [
                _vm._t("beforeFooter"),
                _vm._v(" "),
                _c(
                  "el-button",
                  _vm._b(
                    { attrs: { size: "small" }, on: { click: _vm.handleCancel } },
                    "el-button",
                    _vm.cancelBtnProps,
                    false
                  ),
                  [_vm._v("\n      " + _vm._s(_vm.cancelBtnText) + "\n    ")]
                ),
                _vm._v(" "),
                _vm._t("middleFooter"),
                _vm._v(" "),
                _c(
                  "el-button",
                  _vm._b(
                    {
                      attrs: {
                        type: "primary",
                        size: "small",
                        loading: _vm.showBtnLoading
                      },
                      on: { click: _vm.handleOk }
                    },
                    "el-button",
                    _vm.confirmBtnProps,
                    false
                  ),
                  [_vm._v("\n      " + _vm._s(_vm.confirmBtnText) + "\n    ")]
                ),
                _vm._v(" "),
                _vm._t("afterFooter")
              ],
              2
            )
          : _vm._e()
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
    

    
    var ElProDialog = normalizeComponent_1(
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

  ElProDialog.install = function (Vue) {
    Vue.component(ElProDialog.name, ElProDialog);
  };

  return ElProDialog;

}));
