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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// require(\"./asteroid.js\");\n// require(\"./bullet.js\");\n// require(\"./game_view.js\");\n// require(\"./game.js\");\n// require(\"./ship.js\");\n// require(\"./utils.js\");\n// const Game = require(\"./game.js\");\n\n\nconst Proto = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = Proto.MovingObject;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    \n    const canvasEl = document.getElementById(\"game-canvas\");\n    canvasEl.width = 1000;\n    canvasEl.height = 1000;\n    \n    const ctx = canvasEl.getContext(\"2d\");\n    \n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 1000, 1000);\n    console.log(\"webpack\");\n\n    n = new Proto.MovingObject();\n    n.draw(ctx);\n\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject() {\n    this.pos = [30, 30];\n    this.vel = [10, 10];\n    this.radius = 5;\n    this.color = \"#00FF00\";\n}\n\nMovingObject.prototype.draw = function (ctx) {\n\n    ctx.beginPath();\n    ctx.arc(30, 30, 5, 0, 2 * Math.PI);\n    ctx.fillStyle = \"green\";\n    ctx.fill();\n    ctx.strokeStyle = \"green\";\n    ctx.lineWidth = 2;\n    ctx.stroke()\n};\n\n\n// MovingObject.prototype.move = function () {\n\n// };\n\n\n// MovingObject.prototype.isCollidedWith = function(otherMovingObject){\n\n// };\n\n\nmodule.exports = {MovingObject}\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;