/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// require(\"./asteroid.js\");\n// require(\"./bullet.js\");\n// require(\"./game_view.js\");\n// require(\"./game.js\");\n// require(\"./moving_object.js\");\n// require(\"./ship.js\");\n// require(\"./utils.js\");\n// const Game = require(\"./game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    \n    const canvasEl = document.getElementById(\"game-canvas\");\n    canvasEl.width = 1000;\n    canvasEl.height = 1000;\n    \n    const ctx = canvasEl.getContext(\"2d\");\n    \n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 1000, 1000);\n    console.log(\"webpack\");\n\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;