webpackHotUpdate_N_E("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _jsxFileName = \"/Users/guillermomartin/Coding/Udemy/The Modern React Bootcamp/react-nextjs/first-next/pages/post.js\",\n    _this = undefined;\n\nvar Post = function Post(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n    children: [\"You're looking at post #\", props.id]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, _this);\n}; // ===== getting the id from the query string using getInitialProps =====\n// getInitialProps receives and object (it can be called anything)\n// what's standard, though, is to grab the pieces you need\n\n\n_c = Post;\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    \"https://jsonplaceholder.typicode.com/comments?postId=1\";\n    var query;\n    return _Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref.query;\n            return _context.abrupt(\"return\", {\n              id: query.id\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post); // ===== retrieving ID using withRouter =====\n// import { withRouter } from \"next/router\";\n// const Post = (props) => {\n//   return (\n//     <h1>You're looking at post #{props.router.query.id}</h1>\n//   );\n// }\n// export default withRouter(Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC5qcz8xMjEyIl0sIm5hbWVzIjpbIlBvc3QiLCJwcm9wcyIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsc0JBQ0U7QUFBQSwyQ0FBNkJBLEtBQUssQ0FBQ0MsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQUpELEMsQ0FNQTtBQUNBO0FBQ0E7OztLQVJNRixJOztBQVNOQSxJQUFJLENBQUNHLGVBQUw7QUFBQSxtWUFBdUI7QUFHckI7QUFIcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxpQkFBVCxRQUFTQSxLQUFUO0FBQUEsNkNBRWQ7QUFBQ0YsZ0JBQUUsRUFBRUUsS0FBSyxDQUFDRjtBQUFYLGFBRmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT2VGLG1FQUFmLEUsQ0FHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoMT5Zb3UncmUgbG9va2luZyBhdCBwb3N0ICN7cHJvcHMuaWR9PC9oMT5cbiAgKTtcbn1cblxuLy8gPT09PT0gZ2V0dGluZyB0aGUgaWQgZnJvbSB0aGUgcXVlcnkgc3RyaW5nIHVzaW5nIGdldEluaXRpYWxQcm9wcyA9PT09PVxuLy8gZ2V0SW5pdGlhbFByb3BzIHJlY2VpdmVzIGFuZCBvYmplY3QgKGl0IGNhbiBiZSBjYWxsZWQgYW55dGhpbmcpXG4vLyB3aGF0J3Mgc3RhbmRhcmQsIHRob3VnaCwgaXMgdG8gZ3JhYiB0aGUgcGllY2VzIHlvdSBuZWVkXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgLy8gd2Ugbm93IGhhdmUgYWNjZXNzIHRvIFwiaWRcIiBpbnNpZGUgb2YgcHJvcHNcbiAgcmV0dXJuIHtpZDogcXVlcnkuaWR9O1xuICBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9jb21tZW50cz9wb3N0SWQ9MVwiXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuXG4vLyA9PT09PSByZXRyaWV2aW5nIElEIHVzaW5nIHdpdGhSb3V0ZXIgPT09PT1cbi8vIGltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxoMT5Zb3UncmUgbG9va2luZyBhdCBwb3N0ICN7cHJvcHMucm91dGVyLnF1ZXJ5LmlkfTwvaDE+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUG9zdCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ })

})