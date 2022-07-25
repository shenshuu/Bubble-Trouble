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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('.game-canvas');\n  const sizes = {\n    width: window.innerWidth,\n    height: window.innerHeight\n  };\n  canvas.width = sizes.width;\n  canvas.height = sizes.height;\n  const ctx = canvas.getContext('2d');\n  let player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    position: {\n      x: canvas.width / 2 - 75,\n      y: canvas.height - 150\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    },\n    ctx: ctx\n  });\n  const keys = {\n    a: {\n      pressed: false\n    },\n    d: {\n      pressed: false\n    },\n    w: {\n      pressed: false\n    },\n    ArrowLeft: {\n      pressed: false\n    },\n    ArrowRight: {\n      pressed: false\n    },\n    ArrowUp: {\n      pressed: false\n    }\n  };\n\n  function animate() {\n    window.requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    player.update(canvas);\n    player.velocity.x = 0;\n\n    if (keys.a.pressed && player.lastKey === 'a') {\n      player.velocity.x = -2;\n    } else if (keys.ArrowLeft.pressed && player.lastKey === 'ArrowLeft') {\n      player.velocity.x = -2;\n    } else if (keys.d.pressed && player.lastKey === 'd') {\n      player.velocity.x = 2;\n    } else if (keys.ArrowRight.pressed && player.lastKey === 'ArrowRight') {\n      player.velocity.x = 2;\n    }\n  }\n\n  animate();\n  window.addEventListener('keydown', event => {\n    console.log(event.key);\n\n    switch (event.key) {\n      case 'd':\n        keys.d.pressed = true;\n        player.lastKey = 'd';\n        break;\n\n      case 'a':\n        keys.a.pressed = true;\n        player.lastKey = 'a';\n        break;\n\n      case 'w':\n        keys.w.pressed = true;\n        player.lastKey = 'w';\n        break;\n\n      case 'ArrowLeft':\n        keys.ArrowLeft.pressed = true;\n        player.lastKey = 'ArrowLeft';\n        break;\n\n      case 'ArrowRight':\n        keys.ArrowRight.pressed = true;\n        player.lastKey = 'ArrowRight';\n        break;\n    }\n  });\n  window.addEventListener('keyup', event => {\n    switch (event.key) {\n      case 'a':\n        keys.a.pressed = false;\n        break;\n\n      case 'd':\n        keys.d.pressed = false;\n        break;\n\n      case 'w':\n        keys.w.pressed = false;\n        break;\n\n      case 'ArrowLeft':\n        keys.ArrowLeft.pressed = false;\n        break;\n\n      case 'ArrowRight':\n        keys.ArrowRight.pressed = false;\n        break;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFMO1FBQ0lGLElBQUksQ0FBQ0ssU0FBTCxDQUFlSCxPQUFmLEdBQXlCLEtBQXpCO1FBQ0E7O01BQ0osS0FBSyxZQUFMO1FBQ0lGLElBQUksQ0FBQ00sVUFBTCxDQUFnQkosT0FBaEIsR0FBMEIsS0FBMUI7UUFDQTtJQWZSO0VBaUJILENBbEJEO0FBb0JILENBN0ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLXRyb3VibGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gJy4vc2NyaXB0cy9wbGF5ZXInO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNhbnZhcycpO1xuICAgIGNvbnN0IHNpemVzID0ge3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9O1xuICAgIGNhbnZhcy53aWR0aCA9IHNpemVzLndpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplcy5oZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgXG5cbiAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcih7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICB4OiBjYW52YXMud2lkdGggLyAyIC0gNzUsXG4gICAgICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTUwXG4gICAgICAgIH0sXG4gICAgICAgIHZlbG9jaXR5OiB7eDogMCwgeTogMH0sXG4gICAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICBhOiB7cHJlc3NlZDogZmFsc2V9LFxuICAgICAgICBkOiB7cHJlc3NlZDogZmFsc2V9LFxuICAgICAgICB3OiB7cHJlc3NlZDogZmFsc2V9LFxuICAgICAgICBBcnJvd0xlZnQ6IHtwcmVzc2VkOiBmYWxzZX0sXG4gICAgICAgIEFycm93UmlnaHQ6IHtwcmVzc2VkOiBmYWxzZX0sXG4gICAgICAgIEFycm93VXA6IHtwcmVzc2VkOiBmYWxzZX1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHBsYXllci51cGRhdGUoY2FudmFzKTtcblxuICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDA7XG4gICAgICAgIGlmIChrZXlzLmEucHJlc3NlZCAmJiBwbGF5ZXIubGFzdEtleSA9PT0gJ2EnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IC0yO1xuICAgICAgICB9IGVsc2UgaWYgKGtleXMuQXJyb3dMZWZ0LnByZXNzZWQgJiYgcGxheWVyLmxhc3RLZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IC0yO1xuICAgICAgICB9IGVsc2UgaWYgKGtleXMuZC5wcmVzc2VkICYmIHBsYXllci5sYXN0S2V5ID09PSAnZCcpIHtcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlzLkFycm93UmlnaHQucHJlc3NlZCAmJiBwbGF5ZXIubGFzdEtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYW5pbWF0ZSgpO1xuICAgIFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5KTtcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSAnZCc6IFxuICAgICAgICAgICAgICAgIGtleXMuZC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdEtleSA9ICdkJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIGtleXMuYS5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdEtleSA9ICdhJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgICAgIGtleXMudy5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdEtleSA9ICd3JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd0xlZnQucHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcGxheWVyLmxhc3RLZXkgPSAnQXJyb3dMZWZ0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIGtleXMuQXJyb3dSaWdodC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdEtleSA9ICdBcnJvd1JpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIGtleXMuYS5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICBrZXlzLmQucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAga2V5cy53LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd0xlZnQucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd1JpZ2h0LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG4gIFxufSlcbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwic2l6ZXMiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJwbGF5ZXIiLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJrZXlzIiwiYSIsInByZXNzZWQiLCJkIiwidyIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJBcnJvd1VwIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInVwZGF0ZSIsImxhc3RLZXkiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nclass Player {\n  constructor(_ref) {\n    let {\n      position,\n      velocity,\n      ctx\n    } = _ref;\n    this.position = position;\n    this.velocity = velocity;\n    this.attackBox = {\n      position: this.position,\n      width: 10,\n      height: -window.innerHeight\n    };\n    this.lastKey = \"\";\n    this.ctx = ctx;\n  }\n\n  draw() {\n    this.ctx.fillStyle = 'green';\n    this.ctx.fillRect(this.position.x, this.position.y, 50, 150);\n    this.ctx.fillStyle = 'blue';\n    this.ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);\n  }\n\n  update() {\n    this.draw();\n    if (this.position.x + this.velocity.x + 100 >= window.innerWidth) this.velocity.x = 0;\n    this.position.x += this.velocity.x;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLE1BQU4sQ0FBYTtFQUN4QkMsV0FBVyxPQUE0QjtJQUFBLElBQTNCO01BQUNDLFFBQUQ7TUFBV0MsUUFBWDtNQUFxQkM7SUFBckIsQ0FBMkI7SUFDbkMsS0FBS0YsUUFBTCxHQUFnQkEsUUFBaEI7SUFDQSxLQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLEtBQUtFLFNBQUwsR0FBaUI7TUFDYkgsUUFBUSxFQUFFLEtBQUtBLFFBREY7TUFFYkksS0FBSyxFQUFFLEVBRk07TUFHYkMsTUFBTSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0M7SUFISCxDQUFqQjtJQUtBLEtBQUtDLE9BQUwsR0FBZSxFQUFmO0lBQ0EsS0FBS04sR0FBTCxHQUFXQSxHQUFYO0VBQ0g7O0VBRURPLElBQUksR0FBRztJQUNILEtBQUtQLEdBQUwsQ0FBU1EsU0FBVCxHQUFxQixPQUFyQjtJQUNBLEtBQUtSLEdBQUwsQ0FBU1MsUUFBVCxDQUFrQixLQUFLWCxRQUFMLENBQWNZLENBQWhDLEVBQW1DLEtBQUtaLFFBQUwsQ0FBY2EsQ0FBakQsRUFBb0QsRUFBcEQsRUFBd0QsR0FBeEQ7SUFDQSxLQUFLWCxHQUFMLENBQVNRLFNBQVQsR0FBcUIsTUFBckI7SUFDQSxLQUFLUixHQUFMLENBQVNTLFFBQVQsQ0FDSSxLQUFLUixTQUFMLENBQWVILFFBQWYsQ0FBd0JZLENBRDVCLEVBRUksS0FBS1QsU0FBTCxDQUFlSCxRQUFmLENBQXdCYSxDQUY1QixFQUdJLEtBQUtWLFNBQUwsQ0FBZUMsS0FIbkIsRUFJSSxLQUFLRCxTQUFMLENBQWVFLE1BSm5CO0VBTUg7O0VBRURTLE1BQU0sR0FBRztJQUNMLEtBQUtMLElBQUw7SUFDQSxJQUFJLEtBQUtULFFBQUwsQ0FBY1ksQ0FBZCxHQUFrQixLQUFLWCxRQUFMLENBQWNXLENBQWhDLEdBQW9DLEdBQXBDLElBQTJDTixNQUFNLENBQUNTLFVBQXRELEVBQ0ksS0FBS2QsUUFBTCxDQUFjVyxDQUFkLEdBQWtCLENBQWxCO0lBQ0osS0FBS1osUUFBTCxDQUFjWSxDQUFkLElBQW1CLEtBQUtYLFFBQUwsQ0FBY1csQ0FBakM7RUFDSDs7QUE5QnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLXRyb3VibGUvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHtwb3NpdGlvbiwgdmVsb2NpdHksIGN0eH0pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgIHRoaXMuYXR0YWNrQm94ID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgICBoZWlnaHQ6IC13aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0S2V5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDUwLCAxNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICAgdGhpcy5hdHRhY2tCb3gucG9zaXRpb24ueCwgXG4gICAgICAgICAgICB0aGlzLmF0dGFja0JveC5wb3NpdGlvbi55LFxuICAgICAgICAgICAgdGhpcy5hdHRhY2tCb3gud2lkdGgsXG4gICAgICAgICAgICB0aGlzLmF0dGFja0JveC5oZWlnaHRcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy52ZWxvY2l0eS54ICsgMTAwID49IHdpbmRvdy5pbm5lcldpZHRoKSBcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgfVxufVxuXG4iXSwibmFtZXMiOlsiUGxheWVyIiwiY29uc3RydWN0b3IiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwiY3R4IiwiYXR0YWNrQm94Iiwid2lkdGgiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImxhc3RLZXkiLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ4IiwieSIsInVwZGF0ZSIsImlubmVyV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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