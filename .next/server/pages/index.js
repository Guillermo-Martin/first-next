module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/guillermomartin/Coding/Udemy/The Modern React Bootcamp/react-nextjs/first-next/pages/index.js\";\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  static async getInitialProps(ctx) {\n    // console.log(\"inside of get initialprops\");\n    // const res = await fetch('https://api.github.com/repos/vercel/next.js')\n    // const json = await res.json()\n    // return { stars: json.stargazers_count }\n    // // make an API call using axios, and save the response into a variable\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://jsonplaceholder.typicode.com/posts\"); // // get the data from the response\n\n    const {\n      data\n    } = response; // return an object; the key will be the name of the prop that you'll now have access to\n\n    return {\n      posts: data\n    };\n  }\n\n  render() {\n    // map through the data and create an li for each post\n    const allPosts = this.props.posts.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: post.title\n    }, post.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this));\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Our Index Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: allPosts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // ===== NOTES =====\n// const Index = () => {\n//   console.log(\"Running index component!\");\n//   return (\n//     <div>\n//       <h1>Our Index Page</h1>\n//     </div>\n//   );\n// }\n// or without curly braces (equivalent to above)\n// const Index = () => (\n//   <div>\n//     <h1>Our Index Page</h1>\n//   </div>\n// );\n// ===== getInitialProps as a class-based component =====\n// class Index extends Component {\n//   static async getInitialProps(ctx) {\n//     console.log(\"inside of get initialprops\");\n//     const res = await fetch('https://api.github.com/repos/vercel/next.js')\n//     const json = await res.json()\n//     return { stars: json.stargazers_count }\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <h1>Our Index Page</h1>\n//       </div>\n//     );\n//   }\n// }\n// ===== getInitialProps as a functional component =====\n// function Page({ stars }) {\n//   return <div>Next stars: {stars}</div>\n// }\n// Index.getInitialProps = async (ctx) => {\n//   // const res = await fetch('https://api.github.com/repos/vercel/next.js')\n//   // const json = await res.json()\n//   // return { stars: json.stargazers_count }\n//   const response = await axios.get(\"https://jsonplaceholder.typicode.com/posts\");\n//   const { data } = response;\n//   console.log(data[0]);\n// }\n// export default Page//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsImRhdGEiLCJwb3N0cyIsInJlbmRlciIsImFsbFBvc3RzIiwicHJvcHMiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxLQUFOLFNBQW9CQywrQ0FBcEIsQ0FBOEI7QUFDNUIsZUFBYUMsZUFBYixDQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsNENBQVYsQ0FBdkIsQ0FQZ0MsQ0FTaEM7O0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQVdILFFBQWpCLENBVmdDLENBWWhDOztBQUNBLFdBQU87QUFBRUksV0FBSyxFQUFFRDtBQUFULEtBQVA7QUFDRDs7QUFFREUsUUFBTSxHQUFHO0FBQ1A7QUFDQSxVQUFNQyxRQUFRLEdBQUcsS0FBS0MsS0FBTCxDQUFXSCxLQUFYLENBQWlCSSxHQUFqQixDQUFxQkMsSUFBSSxpQkFDeEM7QUFBQSxnQkFBbUJBLElBQUksQ0FBQ0M7QUFBeEIsT0FBU0QsSUFBSSxDQUFDRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEZSxDQUFqQjtBQUlBLHdCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUEsa0JBQ0dMO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBU0Q7O0FBaEMyQjs7QUFtQ2ZWLG9FQUFmLEUsQ0FHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImluc2lkZSBvZiBnZXQgaW5pdGlhbHByb3BzXCIpO1xuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3ZlcmNlbC9uZXh0LmpzJylcbiAgICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIC8vIHJldHVybiB7IHN0YXJzOiBqc29uLnN0YXJnYXplcnNfY291bnQgfVxuXG4gICAgLy8gLy8gbWFrZSBhbiBBUEkgY2FsbCB1c2luZyBheGlvcywgYW5kIHNhdmUgdGhlIHJlc3BvbnNlIGludG8gYSB2YXJpYWJsZVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xuXG4gICAgLy8gLy8gZ2V0IHRoZSBkYXRhIGZyb20gdGhlIHJlc3BvbnNlXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcbiAgICBcbiAgICAvLyByZXR1cm4gYW4gb2JqZWN0OyB0aGUga2V5IHdpbGwgYmUgdGhlIG5hbWUgb2YgdGhlIHByb3AgdGhhdCB5b3UnbGwgbm93IGhhdmUgYWNjZXNzIHRvXG4gICAgcmV0dXJuIHsgcG9zdHM6IGRhdGEgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBtYXAgdGhyb3VnaCB0aGUgZGF0YSBhbmQgY3JlYXRlIGFuIGxpIGZvciBlYWNoIHBvc3RcbiAgICBjb25zdCBhbGxQb3N0cyA9IHRoaXMucHJvcHMucG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgPGxpIGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9saT5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+T3VyIEluZGV4IFBhZ2U8L2gxPlxuICAgICAgICB7LyogcmVuZGVyIHRoZSBwb3N0cyAqL31cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHthbGxQb3N0c31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuLy8gPT09PT0gTk9URVMgPT09PT1cbi8vIGNvbnN0IEluZGV4ID0gKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgaW5kZXggY29tcG9uZW50IVwiKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aDE+T3VyIEluZGV4IFBhZ2U8L2gxPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuXG4vLyBvciB3aXRob3V0IGN1cmx5IGJyYWNlcyAoZXF1aXZhbGVudCB0byBhYm92ZSlcbi8vIGNvbnN0IEluZGV4ID0gKCkgPT4gKFxuLy8gICA8ZGl2PlxuLy8gICAgIDxoMT5PdXIgSW5kZXggUGFnZTwvaDE+XG4vLyAgIDwvZGl2PlxuLy8gKTtcblxuXG4vLyA9PT09PSBnZXRJbml0aWFsUHJvcHMgYXMgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQgPT09PT1cbi8vIGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBvZiBnZXQgaW5pdGlhbHByb3BzXCIpO1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3ZlcmNlbC9uZXh0LmpzJylcbi8vICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuLy8gICAgIHJldHVybiB7IHN0YXJzOiBqc29uLnN0YXJnYXplcnNfY291bnQgfVxuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDE+T3VyIEluZGV4IFBhZ2U8L2gxPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfVxuXG4vLyA9PT09PSBnZXRJbml0aWFsUHJvcHMgYXMgYSBmdW5jdGlvbmFsIGNvbXBvbmVudCA9PT09PVxuLy8gZnVuY3Rpb24gUGFnZSh7IHN0YXJzIH0pIHtcbi8vICAgcmV0dXJuIDxkaXY+TmV4dCBzdGFyczoge3N0YXJzfTwvZGl2PlxuLy8gfVxuXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4vLyAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3ZlcmNlbC9uZXh0LmpzJylcbi8vICAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbi8vICAgLy8gcmV0dXJuIHsgc3RhcnM6IGpzb24uc3RhcmdhemVyc19jb3VudCB9XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xuLy8gICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhWzBdKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });