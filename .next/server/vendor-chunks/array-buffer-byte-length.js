"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/array-buffer-byte-length";
exports.ids = ["vendor-chunks/array-buffer-byte-length"];
exports.modules = {

/***/ "(ssr)/./node_modules/array-buffer-byte-length/index.js":
/*!********************************************************!*\
  !*** ./node_modules/array-buffer-byte-length/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\nvar $byteLength = callBound('ArrayBuffer.prototype.byteLength', true);\n\nvar isArrayBuffer = __webpack_require__(/*! is-array-buffer */ \"(ssr)/./node_modules/is-array-buffer/index.js\");\n\n/** @type {import('.')} */\nmodule.exports = function byteLength(ab) {\n\tif (!isArrayBuffer(ab)) {\n\t\treturn NaN;\n\t}\n\treturn $byteLength ? $byteLength(ab) : ab.byteLength;\n}; // in node < 0.11, byteLength is an own nonconfigurable property\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXJyYXktYnVmZmVyLWJ5dGUtbGVuZ3RoL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGdCQUFnQixtQkFBTyxDQUFDLHdFQUFxQjtBQUM3Qzs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyxzRUFBaUI7O0FBRTdDLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvYXJyYXktYnVmZmVyLWJ5dGUtbGVuZ3RoL2luZGV4LmpzPzhmZGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xudmFyICRieXRlTGVuZ3RoID0gY2FsbEJvdW5kKCdBcnJheUJ1ZmZlci5wcm90b3R5cGUuYnl0ZUxlbmd0aCcsIHRydWUpO1xuXG52YXIgaXNBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJ2lzLWFycmF5LWJ1ZmZlcicpO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLicpfSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBieXRlTGVuZ3RoKGFiKSB7XG5cdGlmICghaXNBcnJheUJ1ZmZlcihhYikpIHtcblx0XHRyZXR1cm4gTmFOO1xuXHR9XG5cdHJldHVybiAkYnl0ZUxlbmd0aCA/ICRieXRlTGVuZ3RoKGFiKSA6IGFiLmJ5dGVMZW5ndGg7XG59OyAvLyBpbiBub2RlIDwgMC4xMSwgYnl0ZUxlbmd0aCBpcyBhbiBvd24gbm9uY29uZmlndXJhYmxlIHByb3BlcnR5XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/array-buffer-byte-length/index.js\n");

/***/ })

};
;