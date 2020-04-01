(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuizCreateComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuizCreateComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {},
  props: ["quiz"],
  data: function data() {
    return {
      rounds: [{
        round: "",
        questions: [{
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }]
      }, {
        round: "",
        questions: [{
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }]
      }, {
        round: "",
        questions: [{
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }]
      }, {
        round: "",
        questions: [{
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }, {
          question: "",
          options: ["", "", "", ""],
          answer: ""
        }]
      }],
      page: 1,
      open: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      axios({
        method: "post",
        url: "/quiz/" + this.quiz + "/create-quiz/",
        data: {
          rounds: this.rounds
        }
      }).then(function (response) {
        _this.open = true;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuizCreateComponent.vue?vue&type=template&id=30625031&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuizCreateComponent.vue?vue&type=template&id=30625031& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6 mb-6"
      },
      [
        _vm.page == 1
          ? _c(
              "div",
              {
                staticClass:
                  "max-w-screen-xl mx-auto text-left py-4 px-4 sm:px-6 lg:py-4 lg:px-8"
              },
              [
                _c(
                  "h2",
                  {
                    staticClass:
                      "text-xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
                  },
                  [_vm._v("Create your rounds")]
                ),
                _vm._v(" "),
                _vm._l(_vm.rounds, function(round, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "my-4 relative rounded-md shadow-sm"
                    },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-sm text-xl mb-2 font-medium leading-5 text-gray-800",
                          attrs: { for: "name" }
                        },
                        [_vm._v(_vm._s("Round ".concat(index + 1)))]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.rounds[index].round,
                            expression: "rounds[index].round"
                          }
                        ],
                        staticClass:
                          "form-input block w-full sm:text-sm sm:leading-5",
                        attrs: {
                          id: "name",
                          placeholder: "Round ".concat(index + 1),
                          name: "name"
                        },
                        domProps: { value: _vm.rounds[index].round },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.rounds[index],
                              "round",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                }),
                _vm._v(" "),
                _c("div", { staticClass: "mt-8 flex justify-center" }, [
                  _c("div", { staticClass: "inline-flex rounded-md shadow" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",
                        on: {
                          click: function($event) {
                            _vm.page++
                          }
                        }
                      },
                      [_vm._v("Next")]
                    )
                  ])
                ])
              ],
              2
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.page == 2
          ? _c(
              "div",
              {
                staticClass:
                  "max-w-screen-xl mx-auto text-left py-4 px-4 sm:px-6 lg:py-4 lg:px-8"
              },
              [
                _c(
                  "h2",
                  {
                    staticClass:
                      "text-xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
                  },
                  [_vm._v("Create questions")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "text-gray-700 mt-4" }, [
                  _vm._v(
                    "There are four rounds of six multiple choice questions, fill in each question, the options and select the correct answer."
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.rounds, function(round, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "my-4 relative rounded-md shadow-sm"
                    },
                    [
                      _c(
                        "h3",
                        { staticClass: "text-lg text-gray-700 font-bold mb-6" },
                        [_vm._v("Round: " + _vm._s(_vm.rounds[index].round))]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.rounds[index].questions, function(
                        question,
                        i
                      ) {
                        return _c(
                          "div",
                          { key: i, staticClass: "mb-8 border-none" },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block text-sm text-xl mb-4 font-medium leading-5 text-gray-800 mt-4",
                                attrs: { for: "name" }
                              },
                              [_vm._v(_vm._s("Question ".concat(i + 1)))]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.rounds[index].questions[i].question,
                                  expression:
                                    "rounds[index].questions[i].question"
                                }
                              ],
                              staticClass:
                                "form-input block w-full sm:text-sm sm:leading-5",
                              attrs: {
                                id: "name",
                                placeholder: "Question ".concat(i + 1),
                                name: "name"
                              },
                              domProps: {
                                value: _vm.rounds[index].questions[i].question
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.rounds[index].questions[i],
                                    "question",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.rounds[index].questions, function(
                              option,
                              o
                            ) {
                              return _c(
                                "div",
                                {
                                  key: o,
                                  staticClass:
                                    "mt-4 flex flex-row items-center border-none"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.rounds[index].questions[i]
                                            .options[o],
                                        expression:
                                          "rounds[index].questions[i].options[o]"
                                      }
                                    ],
                                    staticClass:
                                      "form-input w-1/2 block sm:text-sm sm:leading-5 mr-4",
                                    attrs: {
                                      id: "name",
                                      placeholder: "Option ".concat(i + 1),
                                      name: "name"
                                    },
                                    domProps: {
                                      value:
                                        _vm.rounds[index].questions[i].options[
                                          o
                                        ]
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.rounds[index].questions[i]
                                            .options,
                                          o,
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.rounds[index].questions[i].answer,
                                        expression:
                                          "rounds[index].questions[i].answer"
                                      }
                                    ],
                                    staticClass: "mr-2",
                                    attrs: {
                                      id: "name",
                                      type: "radio",
                                      placeholder: "Question ".concat(o + 1)
                                    },
                                    domProps: {
                                      value: o,
                                      checked: _vm._q(
                                        _vm.rounds[index].questions[i].answer,
                                        o
                                      )
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.$set(
                                          _vm.rounds[index].questions[i],
                                          "answer",
                                          o
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Correct Answer")])
                                ]
                              )
                            })
                          ],
                          2
                        )
                      })
                    ],
                    2
                  )
                }),
                _vm._v(" "),
                _c("div", { staticClass: "mt-8 flex justify-center" }, [
                  _c("div", { staticClass: "inline-flex rounded-md shadow" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",
                        on: { click: _vm.submit }
                      },
                      [_vm._v("Save Quiz")]
                    )
                  ])
                ])
              ],
              2
            )
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.open,
            expression: "open"
          }
        ],
        staticClass:
          "fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
      },
      [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.open,
                expression: "open"
              }
            ],
            staticClass: "fixed inset-0 transition-opacity"
          },
          [
            _c("div", {
              staticClass: "absolute inset-0 bg-gray-500 opacity-75"
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.open,
                expression: "open"
              }
            ],
            staticClass:
              "bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
          },
          [
            _c("div", [
              _c(
                "div",
                {
                  staticClass:
                    "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-6 w-6 text-green-600",
                      attrs: {
                        stroke: "currentColor",
                        fill: "none",
                        viewBox: "0 0 24 24"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-5 sm:mt-6" }, [
              _c("span", { staticClass: "flex w-full rounded-md shadow-sm" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5",
                    attrs: { href: "/quiz/" + _vm.quiz.id }
                  },
                  [_vm._v("Go home")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-3 text-center sm:mt-5" }, [
      _c("h3", { staticClass: "text-lg leading-6 font-medium text-gray-900" }, [
        _vm._v("Quiz Created")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-2" }, [
        _c("p", { staticClass: "text-sm leading-5 text-gray-500" }, [
          _vm._v(
            "Your fellow quiz players in your quiz league can now play this quiz!"
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
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


/***/ }),

/***/ "./resources/js/components/QuizCreateComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/QuizCreateComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizCreateComponent_vue_vue_type_template_id_30625031___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizCreateComponent.vue?vue&type=template&id=30625031& */ "./resources/js/components/QuizCreateComponent.vue?vue&type=template&id=30625031&");
/* harmony import */ var _QuizCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizCreateComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/QuizCreateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuizCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizCreateComponent_vue_vue_type_template_id_30625031___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuizCreateComponent_vue_vue_type_template_id_30625031___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuizCreateComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuizCreateComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/QuizCreateComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./QuizCreateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuizCreateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuizCreateComponent.vue?vue&type=template&id=30625031&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/QuizCreateComponent.vue?vue&type=template&id=30625031& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizCreateComponent_vue_vue_type_template_id_30625031___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./QuizCreateComponent.vue?vue&type=template&id=30625031& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuizCreateComponent.vue?vue&type=template&id=30625031&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizCreateComponent_vue_vue_type_template_id_30625031___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizCreateComponent_vue_vue_type_template_id_30625031___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);