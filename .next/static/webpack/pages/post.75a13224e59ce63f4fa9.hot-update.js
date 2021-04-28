webpackHotUpdate_N_E("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/guillermomartin/Coding/Udemy/The Modern React Bootcamp/react-nextjs/first-next/pages/post.js\",\n    _this = undefined;\n\n\n\nvar Post = function Post(props) {\n  var allComments = props.comments.map(function (comment) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      children: comment.email\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      children: [\"Comments for post #\", props.id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), allComments]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n}; // ===== getting the id from the query string using getInitialProps =====\n// getInitialProps receives and object (it can be called anything)\n// what's standard, though, is to grab the pieces you need\n\n\n_c = Post;\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var query, response, data;\n    return _Users_guillermomartin_Coding_Udemy_The_Modern_React_Bootcamp_react_nextjs_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref.query;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"https://jsonplaceholder.typicode.com/comments?postId=1\");\n\n          case 3:\n            response = _context.sent;\n            data = response.data;\n            console.log(data[0]); // we now have access to \"id\" and comments inside of props\n\n            return _context.abrupt(\"return\", {\n              id: query.id,\n              comments: data\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post); // ===== retrieving ID using withRouter =====\n// import { withRouter } from \"next/router\";\n// const Post = (props) => {\n//   return (\n//     <h1>You're looking at post #{props.router.query.id}</h1>\n//   );\n// }\n// export default withRouter(Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC5qcz8xMjEyIl0sIm5hbWVzIjpbIlBvc3QiLCJwcm9wcyIsImFsbENvbW1lbnRzIiwiY29tbWVudHMiLCJtYXAiLCJjb21tZW50IiwiZW1haWwiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsTUFBTUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFBQyxPQUFPO0FBQUEsd0JBQzVDO0FBQUEsZ0JBQUlBLE9BQU8sQ0FBQ0M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDRDO0FBQUEsR0FBMUIsQ0FBcEI7QUFJQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsd0NBQXdCTCxLQUFLLENBQUNNLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdMLFdBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQVpELEMsQ0FjQTtBQUNBO0FBQ0E7OztLQWhCTUYsSTs7QUFpQk5BLElBQUksQ0FBQ1EsZUFBTDtBQUFBLG1ZQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsaUJBQVQsUUFBU0EsS0FBVDtBQUFBO0FBQUEsbUJBQ0VDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSx3REFBVixDQURGOztBQUFBO0FBQ2ZDLG9CQURlO0FBRWJDLGdCQUZhLEdBRUpELFFBRkksQ0FFYkMsSUFGYTtBQUdyQkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUMsQ0FBRCxDQUFoQixFQUhxQixDQUtyQjs7QUFMcUIsNkNBTWQ7QUFBQ04sZ0JBQUUsRUFBRUUsS0FBSyxDQUFDRixFQUFYO0FBQWVKLHNCQUFRLEVBQUVVO0FBQXpCLGFBTmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV2ViLG1FQUFmLEUsQ0FHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBhbGxDb21tZW50cyA9IHByb3BzLmNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcbiAgICA8cD57Y29tbWVudC5lbWFpbH08L3A+XG4gICkpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNvbW1lbnRzIGZvciBwb3N0ICN7cHJvcHMuaWR9PC9oMT5cbiAgICAgIHthbGxDb21tZW50c31cbiAgICA8L2Rpdj5cbiAgICBcbiAgKTtcbn1cblxuLy8gPT09PT0gZ2V0dGluZyB0aGUgaWQgZnJvbSB0aGUgcXVlcnkgc3RyaW5nIHVzaW5nIGdldEluaXRpYWxQcm9wcyA9PT09PVxuLy8gZ2V0SW5pdGlhbFByb3BzIHJlY2VpdmVzIGFuZCBvYmplY3QgKGl0IGNhbiBiZSBjYWxsZWQgYW55dGhpbmcpXG4vLyB3aGF0J3Mgc3RhbmRhcmQsIHRob3VnaCwgaXMgdG8gZ3JhYiB0aGUgcGllY2VzIHlvdSBuZWVkXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHM/cG9zdElkPTFcIik7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XG4gIGNvbnNvbGUubG9nKGRhdGFbMF0pO1xuXG4gIC8vIHdlIG5vdyBoYXZlIGFjY2VzcyB0byBcImlkXCIgYW5kIGNvbW1lbnRzIGluc2lkZSBvZiBwcm9wc1xuICByZXR1cm4ge2lkOiBxdWVyeS5pZCwgY29tbWVudHM6IGRhdGF9O1xuICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuXG5cbi8vID09PT09IHJldHJpZXZpbmcgSUQgdXNpbmcgd2l0aFJvdXRlciA9PT09PVxuLy8gaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyBjb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGgxPllvdSdyZSBsb29raW5nIGF0IHBvc3QgI3twcm9wcy5yb3V0ZXIucXVlcnkuaWR9PC9oMT5cbi8vICAgKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQb3N0KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ })

})