"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-bigint";
exports.ids = ["vendor-chunks/is-bigint"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-bigint/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-bigint/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar hasBigInts = __webpack_require__(/*! has-bigints */ \"(ssr)/./node_modules/has-bigints/index.js\")();\n\nif (hasBigInts) {\n\tvar bigIntValueOf = BigInt.prototype.valueOf;\n\tvar tryBigInt = function tryBigIntObject(value) {\n\t\ttry {\n\t\t\tbigIntValueOf.call(value);\n\t\t\treturn true;\n\t\t} catch (e) {\n\t\t}\n\t\treturn false;\n\t};\n\n\tmodule.exports = function isBigInt(value) {\n\t\tif (\n\t\t\tvalue === null\n\t\t\t|| typeof value === 'undefined'\n\t\t\t|| typeof value === 'boolean'\n\t\t\t|| typeof value === 'string'\n\t\t\t|| typeof value === 'number'\n\t\t\t|| typeof value === 'symbol'\n\t\t\t|| typeof value === 'function'\n\t\t) {\n\t\t\treturn false;\n\t\t}\n\t\tif (typeof value === 'bigint') {\n\t\t\treturn true;\n\t\t}\n\n\t\treturn tryBigInt(value);\n\t};\n} else {\n\tmodule.exports = function isBigInt(value) {\n\t\treturn  false && 0;\n\t};\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtYmlnaW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLDhEQUFhOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsU0FBUyxNQUFLLElBQUksQ0FBSztBQUN2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy9pcy1iaWdpbnQvaW5kZXguanM/ODA0OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNCaWdJbnRzID0gcmVxdWlyZSgnaGFzLWJpZ2ludHMnKSgpO1xuXG5pZiAoaGFzQmlnSW50cykge1xuXHR2YXIgYmlnSW50VmFsdWVPZiA9IEJpZ0ludC5wcm90b3R5cGUudmFsdWVPZjtcblx0dmFyIHRyeUJpZ0ludCA9IGZ1bmN0aW9uIHRyeUJpZ0ludE9iamVjdCh2YWx1ZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRiaWdJbnRWYWx1ZU9mLmNhbGwodmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0JpZ0ludCh2YWx1ZSkge1xuXHRcdGlmIChcblx0XHRcdHZhbHVlID09PSBudWxsXG5cdFx0XHR8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG5cdFx0XHR8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xuXHRcdFx0fHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuXHRcdFx0fHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuXHRcdFx0fHwgdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJ1xuXHRcdFx0fHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdiaWdpbnQnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ5QmlnSW50KHZhbHVlKTtcblx0fTtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCaWdJbnQodmFsdWUpIHtcblx0XHRyZXR1cm4gZmFsc2UgJiYgdmFsdWU7XG5cdH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-bigint/index.js\n");

/***/ })

};
;