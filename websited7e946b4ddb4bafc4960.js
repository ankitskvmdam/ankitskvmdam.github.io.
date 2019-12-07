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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ankdev/magic/scripts/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ankdev/magic/scripts/handleScreen.js":
/*!**********************************************!*\
  !*** ./ankdev/magic/scripts/handleScreen.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction handleChange() {\n  const html = document.getElementsByTagName(\"HTML\")[0];\n\n  if (window.innerWidth > 1280) {\n    html.style.fontSize = 16 / 1280 * window.innerWidth + 'px';\n  } else {\n    html.style.fontSize = \"16px\";\n  }\n}\n\nfunction handleScreen() {\n  window.addEventListener('resize', handleChange);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleScreen);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmtkZXYvbWFnaWMvc2NyaXB0cy9oYW5kbGVTY3JlZW4uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbmtkZXYvbWFnaWMvc2NyaXB0cy9oYW5kbGVTY3JlZW4uanM/NmRhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKXtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJIVE1MXCIpWzBdXG4gICAgaWYoIHdpbmRvdy5pbm5lcldpZHRoID4gMTI4MCl7XG4gICAgICAgIGh0bWwuc3R5bGUuZm9udFNpemUgPSAoMTYvMTI4MCkgKiB3aW5kb3cuaW5uZXJXaWR0aCArICdweCdcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiXG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTY3JlZW4oKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlQ2hhbmdlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVTY3JlZW47Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ankdev/magic/scripts/handleScreen.js\n");

/***/ }),

/***/ "./ankdev/magic/scripts/index.jsx":
/*!****************************************!*\
  !*** ./ankdev/magic/scripts/index.jsx ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheet_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheet/main.scss */ \"./ankdev/magic/stylesheet/main.scss\");\n/* harmony import */ var _stylesheet_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheet_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _handleScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleScreen */ \"./ankdev/magic/scripts/handleScreen.js\");\n\n\nconst light = document.getElementById(\"light\");\nconst dark = document.getElementById(\"dark\");\nconst body = document.getElementsByTagName(\"BODY\")[0];\n\nfunction changeTheme(event) {\n  light.classList.remove('active');\n  dark.classList.remove('active');\n  body.classList.remove(\"theme-dark\", \"theme-light\");\n\n  switch (event.currentTarget.id) {\n    case \"light\":\n      light.classList.add('active');\n      body.classList.add(\"theme-light\");\n      break;\n\n    default:\n      dark.classList.add(\"active\");\n      body.classList.add(\"theme-dark\");\n  }\n}\n\nfunction init() {\n  body.classList.add(\"theme-dark\");\n  light.addEventListener('click', changeTheme);\n  dark.addEventListener('click', changeTheme);\n  Object(_handleScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\ninit();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmtkZXYvbWFnaWMvc2NyaXB0cy9pbmRleC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbmtkZXYvbWFnaWMvc2NyaXB0cy9pbmRleC5qc3g/OWNmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXNoZWV0L21haW4uc2Nzc1wiXG5pbXBvcnQgaGFuZGxlU2NyZWVuIGZyb20gXCIuL2hhbmRsZVNjcmVlblwiXG5cbmNvbnN0IGxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWdodFwiKVxuY29uc3QgZGFyayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya1wiKVxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXVxuXG5mdW5jdGlvbiBjaGFuZ2VUaGVtZShldmVudCl7XG4gICAgbGlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICBkYXJrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwidGhlbWUtZGFya1wiLCBcInRoZW1lLWxpZ2h0XCIpXG4gICAgXG4gICAgc3dpdGNoKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpe1xuICAgICAgICBjYXNlIFwibGlnaHRcIjogXG4gICAgICAgICAgICBsaWdodC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwidGhlbWUtbGlnaHRcIilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkYXJrLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcInRoZW1lLWRhcmtcIilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJ0aGVtZS1kYXJrXCIpXG5cbiAgICBsaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRoZW1lKVxuICAgIGRhcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUaGVtZSlcbiAgICBoYW5kbGVTY3JlZW4oKVxufVxuXG5pbml0KCkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ankdev/magic/scripts/index.jsx\n");

/***/ }),

/***/ "./ankdev/magic/stylesheet/main.scss":
/*!*******************************************!*\
  !*** ./ankdev/magic/stylesheet/main.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmtkZXYvbWFnaWMvc3R5bGVzaGVldC9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbmtkZXYvbWFnaWMvc3R5bGVzaGVldC9tYWluLnNjc3M/MWM2NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ankdev/magic/stylesheet/main.scss\n");

/***/ })

/******/ });