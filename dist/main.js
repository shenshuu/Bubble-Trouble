/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('.game-canvas');\n  const sizes = {\n    width: window.innerWidth,\n    height: window.innerHeight\n  };\n  canvas.width = sizes.width;\n  canvas.height = sizes.height;\n  const ctx = canvas.getContext('2d');\n  let player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    position: {\n      x: canvas.width / 2 - 75,\n      y: canvas.height - 150\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    },\n    ctx: ctx\n  });\n  const keys = {\n    a: {\n      pressed: false\n    },\n    d: {\n      pressed: false\n    }\n  };\n  let lastKey = \"\";\n\n  function animate() {\n    window.requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    player.update(canvas);\n    player.velocity.x = 0;\n\n    if (keys.a.pressed) {\n      player.velocity.x = -1;\n    } else if (keys.d.pressed) {\n      player.velocity.x = 1;\n    }\n  }\n\n  animate();\n  window.addEventListener('keydown', event => {\n    console.log(event.key);\n\n    switch (event.key) {\n      case 'd':\n        keys.d.pressed = true;\n        lastKey = 'd';\n        break;\n\n      case 'a':\n        keys.a.pressed = true;\n        lastKey = 'a';\n        break;\n    }\n  });\n  window.addEventListener('keyup', event => {\n    switch (event.key) {\n      case 'a':\n        keys.a.pressed = false;\n        break;\n\n      case 'd':\n        keys.d.pressed = false;\n        break;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXBFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2J1YmJsZS10cm91YmxlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuL3NjcmlwdHMvcGxheWVyJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jYW52YXMnKTtcbiAgICBjb25zdCBzaXplcyA9IHt3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0fTtcbiAgICBjYW52YXMud2lkdGggPSBzaXplcy53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZXMuaGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuXG4gICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgeDogY2FudmFzLndpZHRoIC8gMiAtIDc1LFxuICAgICAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE1MFxuICAgICAgICB9LFxuICAgICAgICB2ZWxvY2l0eToge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfSxcbiAgICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgIGE6IHtwcmVzc2VkOiBmYWxzZX0sXG4gICAgICAgIGQ6IHtwcmVzc2VkOiBmYWxzZX0gXG4gICAgfVxuXG4gICAgbGV0IGxhc3RLZXkgPSBcIlwiO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBwbGF5ZXIudXBkYXRlKGNhbnZhcyk7XG5cbiAgICAgICAgcGxheWVyLnZlbG9jaXR5LnggPSAwO1xuICAgICAgICBpZiAoa2V5cy5hLnByZXNzZWQpIHtcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5cy5kLnByZXNzZWQpIHtcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhbmltYXRlKCk7XG4gICAgXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5rZXkpO1xuICAgICAgICBzd2l0Y2goZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdkJzogXG4gICAgICAgICAgICAgICAga2V5cy5kLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxhc3RLZXkgPSAnZCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBrZXlzLmEucHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGFzdEtleSA9ICdhJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIGtleXMuYS5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICBrZXlzLmQucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcbiAgXG59KVxuIl0sIm5hbWVzIjpbIlBsYXllciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJzaXplcyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsInBsYXllciIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImtleXMiLCJhIiwicHJlc3NlZCIsImQiLCJsYXN0S2V5IiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInVwZGF0ZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\n// export default class Player {\n//     constructor(canvas, ctx) {\n//         this.dim = {width: 100, height: 150};\n//         this.position = {x: canvas.width / 2 - this.dim.width / 2, y: canvas.height - this.dim.height};\n//         this.velocity = 0\n//         this.canvas = canvas;\n//         this.ctx = ctx;\n//         this.init();\n//     }\n//     drawPlayer() {\n//         this.ctx.fillStyle = 'green';\n//         this.ctx.fillRect(this.position.x, this.position.y, this.dim.width, this.dim.height);\n//     }\n//     update() {\n//         this.drawPlayer();\n//         this.position.x += this.velocity;\n//     }\n//     animate() {\n//         requestAnimationFrame(animate)\n//         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n//         this.update();\n//     }\n//     init() {\n//         let keys = {\n//             left: {pressed: false},\n//             right: {pressed: false}\n//         }\n//         window.addEventListener('keydown', (e) => {\n//             let key = e.key \n//             switch(key) {\n//                 case 'a': \n//                     keys.left.pressed = true;\n//                 case 'd': \n//                     keys.right.pressed = true;\n//             }\n//             if (keys.left.pressed) {\n//                 this.velocity = -1;\n//                 this.animate();\n//                 keys.right.pressed = false;\n//             } else if (keys.right.pressed) {\n//                 this.velocity = 1;\n//                 this.animate();\n//                 keys.left.pressed = false;\n//             }\n//         })\n//         window.addEventListener('keyup', () => {\n//             console.log(keys);\n//             keys.left.pressed = false;\n//             keys.right.pressed = false;\n//         })\n//     }\n// }\nclass Player {\n  constructor(_ref) {\n    let {\n      position,\n      velocity,\n      ctx\n    } = _ref;\n    this.position = position;\n    this.velocity = velocity;\n    this.ctx = ctx;\n  }\n\n  draw() {\n    this.ctx.fillStyle = 'green';\n    this.ctx.fillRect(this.position.x, this.position.y, 50, 150);\n  }\n\n  update() {\n    this.draw();\n    if (this.position.x + this.velocity.x + 100 >= window.innerWidth) this.velocity.x = 0;\n    this.position.x += this.velocity.x;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsTUFBTUEsTUFBTixDQUFhO0VBQ3hCQyxXQUFXLE9BQTRCO0lBQUEsSUFBM0I7TUFBQ0MsUUFBRDtNQUFXQyxRQUFYO01BQXFCQztJQUFyQixDQUEyQjtJQUNuQyxLQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0EsS0FBS0MsR0FBTCxHQUFXQSxHQUFYO0VBQ0g7O0VBRURDLElBQUksR0FBRztJQUNILEtBQUtELEdBQUwsQ0FBU0UsU0FBVCxHQUFxQixPQUFyQjtJQUNBLEtBQUtGLEdBQUwsQ0FBU0csUUFBVCxDQUFrQixLQUFLTCxRQUFMLENBQWNNLENBQWhDLEVBQW1DLEtBQUtOLFFBQUwsQ0FBY08sQ0FBakQsRUFBb0QsRUFBcEQsRUFBd0QsR0FBeEQ7RUFDSDs7RUFFREMsTUFBTSxHQUFHO0lBQ0wsS0FBS0wsSUFBTDtJQUNBLElBQUksS0FBS0gsUUFBTCxDQUFjTSxDQUFkLEdBQWtCLEtBQUtMLFFBQUwsQ0FBY0ssQ0FBaEMsR0FBb0MsR0FBcEMsSUFBMkNHLE1BQU0sQ0FBQ0MsVUFBdEQsRUFDSSxLQUFLVCxRQUFMLENBQWNLLENBQWQsR0FBa0IsQ0FBbEI7SUFDSixLQUFLTixRQUFMLENBQWNNLENBQWQsSUFBbUIsS0FBS0wsUUFBTCxDQUFjSyxDQUFqQztFQUNIOztBQWpCdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtdHJvdWJsZS8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4vLyAgICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbi8vICAgICAgICAgdGhpcy5kaW0gPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxNTB9O1xuLy8gICAgICAgICB0aGlzLnBvc2l0aW9uID0ge3g6IGNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLmRpbS53aWR0aCAvIDIsIHk6IGNhbnZhcy5oZWlnaHQgLSB0aGlzLmRpbS5oZWlnaHR9O1xuLy8gICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMFxuLy8gICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbi8vICAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4vLyAgICAgICAgIHRoaXMuaW5pdCgpO1xuLy8gICAgIH1cblxuLy8gICAgIGRyYXdQbGF5ZXIoKSB7XG4vLyAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4vLyAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLmRpbS53aWR0aCwgdGhpcy5kaW0uaGVpZ2h0KTtcbi8vICAgICB9XG5cbi8vICAgICB1cGRhdGUoKSB7XG4vLyAgICAgICAgIHRoaXMuZHJhd1BsYXllcigpO1xuLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eTtcbi8vICAgICB9XG5cbi8vICAgICBhbmltYXRlKCkge1xuLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbi8vICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuLy8gICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuLy8gICAgIH1cblxuLy8gICAgIGluaXQoKSB7XG5cbi8vICAgICAgICAgbGV0IGtleXMgPSB7XG4vLyAgICAgICAgICAgICBsZWZ0OiB7cHJlc3NlZDogZmFsc2V9LFxuLy8gICAgICAgICAgICAgcmlnaHQ6IHtwcmVzc2VkOiBmYWxzZX1cbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbi8vICAgICAgICAgICAgIGxldCBrZXkgPSBlLmtleSBcbi8vICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcbi8vICAgICAgICAgICAgICAgICBjYXNlICdhJzogXG4vLyAgICAgICAgICAgICAgICAgICAgIGtleXMubGVmdC5wcmVzc2VkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgICAgICBjYXNlICdkJzogXG4vLyAgICAgICAgICAgICAgICAgICAgIGtleXMucmlnaHQucHJlc3NlZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBpZiAoa2V5cy5sZWZ0LnByZXNzZWQpIHtcblxuLy8gICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAtMTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbi8vICAgICAgICAgICAgICAgICBrZXlzLnJpZ2h0LnByZXNzZWQgPSBmYWxzZTtcblxuLy8gICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlzLnJpZ2h0LnByZXNzZWQpIHtcblxuLy8gICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAxO1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuLy8gICAgICAgICAgICAgICAgIGtleXMubGVmdC5wcmVzc2VkID0gZmFsc2U7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4gICAgICAgIFxuLy8gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlzKTtcbi8vICAgICAgICAgICAgIGtleXMubGVmdC5wcmVzc2VkID0gZmFsc2U7XG4vLyAgICAgICAgICAgICBrZXlzLnJpZ2h0LnByZXNzZWQgPSBmYWxzZTtcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3Ioe3Bvc2l0aW9uLCB2ZWxvY2l0eSwgY3R4fSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDUwLCAxNTApO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnZlbG9jaXR5LnggKyAxMDAgPj0gd2luZG93LmlubmVyV2lkdGgpIFxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJjdHgiLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ4IiwieSIsInVwZGF0ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtdHJvdWJsZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;