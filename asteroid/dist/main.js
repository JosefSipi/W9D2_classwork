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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n// import \"Util\";\n\nfunction Asteroid (options) {\n    options = options || {};\n    options.pos = options.pos || Util.randomVec(5);\n    options.color = \"gray\";\n    options.radius = 20;\n    options.vel = Util.randomVec(5);\n    MovingObject.call(this, options);\n}\n\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// require(\"./bullet.js\");\n// require(\"./game_view.js\");\n// require(\"./game.js\");\n// require(\"./ship.js\");\n// const Game = require(\"./game.js\");\n\n\n__webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n__webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n// const Asteroid = require(\"./asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    \n    const canvasEl = document.getElementById(\"game-canvas\");\n    canvasEl.width = 1000;\n    canvasEl.height = 1000;\n    \n    const ctx = canvasEl.getContext(\"2d\");\n    \n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 1000, 1000);\n    console.log(\"webpack\");\n\n    \n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    });\n\n    mo.draw(ctx);\n    mo.move(ctx);\n\n    const ast = new Asteroid();\n    ast.draw(ctx);\n    \n    // n.move(ctx);\n    \n    // a = new Asteroid;\n    // a.draw(ctx)\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.strokeStyle = this.color;\n    ctx.lineWidth = 2;\n    ctx.stroke()\n};\n\n\nMovingObject.prototype.move = function (ctx) {\n    let posx = this.pos[0];\n    let posy = this.pos[1];\n    let velx = this.vel[0];\n    let vely = this.vel[1];\n\n    this.pos = [posx + velx, posy + vely];\n    this.draw(ctx);\n\n};\n\n\n// MovingObject.prototype.isCollidedWith = function(otherMovingObject){\n\n// };\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("\nconst Util = {\n    inherits(childClass, parentClass){\n        let Surrogate = function() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    scale (vec, m) {\n            return [vec[0] * m, vec[1] * m];\n    }\n};\n\n\n\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

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