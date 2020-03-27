(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuizComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuizComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.startCountdown();
    this.prepareAnswers();
  },
  props: ["round", "quiz", "master"],
  data: function data() {
    var _ref;

    return _ref = {
      number_of_questions: this.round.questions.length,
      question_number: 1,
      seconds: 60,
      selected_answer: null,
      next_round: parseInt(this.round.id) + 1
    }, _defineProperty(_ref, "selected_answer", null), _defineProperty(_ref, "answers", []), _ref;
  },
  methods: {
    startCountdown: function startCountdown() {
      var _this = this;

      if (this.question_number <= this.number_of_questions) {
        if (this.seconds > 0) {
          setTimeout(function () {
            _this.seconds -= 1;

            _this.startCountdown();
          }, 1000);
        } else {
          this.storeAnswer(this.question_number - 1, this.selected_answer);
          this.selected_answer = null;
          this.question_number++;
          this.seconds = 60;
          this.startCountdown();
        }
      }
    },
    storeAnswer: function storeAnswer(answerIndex, selectedAnswer) {
      this.answers[answerIndex].answer = selectedAnswer;
    },
    prepareAnswers: function prepareAnswers() {
      var _this2 = this;

      this.round.questions.map(function (question) {
        _this2.answers.push({
          question: question.id,
          answer: 0
        });
      });
    },
    submitAnswers: function submitAnswers() {
      var _this3 = this;

      axios({
        method: "post",
        url: "/quiz/" + this.quiz + "/quiz-master/" + this.master + "/round/" + this.round.id,
        data: {
          answers: this.answers
        }
      }).then(function (response) {
        window.location.replace("/quiz/" + _this3.quiz + "/quiz-master/" + _this3.master + "/round/" + _this3.next_round);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuizComponent.vue?vue&type=template&id=91549c66&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuizComponent.vue?vue&type=template&id=91549c66& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c("h1", { staticClass: "text-xl text-gray-600 mb-4" }, [
      _c("span", { staticClass: "font-bold text-2xl text-gray-700" }, [
        _vm._v("Round:")
      ]),
      _vm._v("\n    " + _vm._s(_vm.round.name) + "\n  ")
    ]),
    _vm._v(" "),
    this.question_number <= this.number_of_questions
      ? _c("h3", { staticClass: "text-xl text-gray-600 mb-4" }, [
          _c("span", { staticClass: "font-bold text-xl text-gray-700" }, [
            _vm._v("Question:")
          ]),
          _vm._v(
            "\n    " +
              _vm._s(_vm.question_number) +
              "/" +
              _vm._s(_vm.number_of_questions) +
              "\n  "
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.question_number > _vm.number_of_questions
      ? _c("div", [
          _c(
            "div",
            {
              staticClass:
                "bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
                },
                [
                  _c(
                    "h2",
                    {
                      staticClass:
                        "text-3xl leading-loose font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.round.name) +
                          " Round\n          "
                      ),
                      _c("br"),
                      _vm._v("Complete!\n        ")
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-8 flex justify-center" }, [
                    _c(
                      "div",
                      { staticClass: "inline-flex rounded-md shadow" },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",
                            on: { click: _vm.submitAnswers }
                          },
                          [_vm._v("Next Round")]
                        )
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        ])
      : _c(
          "div",
          _vm._l(_vm.round.questions, function(question, index) {
            return _c("div", { key: question.id }, [
              index + 1 == _vm.question_number
                ? _c(
                    "div",
                    {
                      staticClass:
                        "bg-gray-100 rounded-lg px-4 py-5 border-gray-200 sm:px-6"
                    },
                    [
                      _c(
                        "h3",
                        {
                          staticClass:
                            "text-lg leading-6 font-medium text-gray-800"
                        },
                        [_vm._v(_vm._s(question.question))]
                      ),
                      _vm._v(" "),
                      _vm._l(question.options, function(option) {
                        return _c(
                          "div",
                          {
                            key: option.id,
                            staticClass: "flex items-center mr-4 my-4"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "flex items-center text-base text-gray-600",
                                attrs: { for: "radio1" }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.selected_answer,
                                      expression: "selected_answer"
                                    }
                                  ],
                                  staticClass: "mr-2 mb-1",
                                  attrs: { type: "radio", id: "one" },
                                  domProps: {
                                    value: option.id,
                                    checked: _vm._q(
                                      _vm.selected_answer,
                                      option.id
                                    )
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.selected_answer = option.id
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n            " +
                                    _vm._s(option.option) +
                                    "\n          "
                                )
                              ]
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e()
            ])
          }),
          0
        ),
    _vm._v(" "),
    this.question_number <= this.number_of_questions
      ? _c(
          "div",
          {
            staticClass:
              "rounded-full h-20 w-20 bg-red-700 flex justify-center items-center text-white font-bold text-2xl mt-10"
          },
          [_vm._v(_vm._s(_vm.seconds))]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "text-gray-600 font-medium mt-6 leading-loose" },
      [
        _c("span", { staticClass: "text-xl" }, [
          _vm._v("Go and grab a drink... 🍻🍷🍹")
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(
          "When everyone is ready click the button below to continue to the next round!\n        "
        )
      ]
    )
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

/***/ "./resources/js/components/QuizComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/QuizComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizComponent_vue_vue_type_template_id_91549c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizComponent.vue?vue&type=template&id=91549c66& */ "./resources/js/components/QuizComponent.vue?vue&type=template&id=91549c66&");
/* harmony import */ var _QuizComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/QuizComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuizComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizComponent_vue_vue_type_template_id_91549c66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuizComponent_vue_vue_type_template_id_91549c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuizComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuizComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/QuizComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./QuizComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuizComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuizComponent.vue?vue&type=template&id=91549c66&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/QuizComponent.vue?vue&type=template&id=91549c66& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizComponent_vue_vue_type_template_id_91549c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./QuizComponent.vue?vue&type=template&id=91549c66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuizComponent.vue?vue&type=template&id=91549c66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizComponent_vue_vue_type_template_id_91549c66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizComponent_vue_vue_type_template_id_91549c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);