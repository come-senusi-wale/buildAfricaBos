"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/proxy-compare";
exports.ids = ["vendor-chunks/proxy-compare"];
exports.modules = {

/***/ "(ssr)/./node_modules/proxy-compare/dist/index.modern.js":
/*!*********************************************************!*\
  !*** ./node_modules/proxy-compare/dist/index.modern.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   affectedToPathList: () => (/* binding */ w),\n/* harmony export */   createProxy: () => (/* binding */ a),\n/* harmony export */   getUntracked: () => (/* binding */ y),\n/* harmony export */   isChanged: () => (/* binding */ p),\n/* harmony export */   markToTrack: () => (/* binding */ h),\n/* harmony export */   replaceNewProxy: () => (/* binding */ O),\n/* harmony export */   trackMemo: () => (/* binding */ g)\n/* harmony export */ });\nconst e=Symbol(),t=Symbol(),r=\"a\",n=\"w\";let o=(e,t)=>new Proxy(e,t);const s=Object.getPrototypeOf,c=new WeakMap,l=e=>e&&(c.has(e)?c.get(e):s(e)===Object.prototype||s(e)===Array.prototype),f=e=>\"object\"==typeof e&&null!==e,i=e=>{if(Array.isArray(e))return Array.from(e);const t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(s(e),t)},u=e=>e[t]||e,a=(s,c,f,p)=>{if(!l(s))return s;let g=p&&p.get(s);if(!g){const e=u(s);g=(e=>Object.values(Object.getOwnPropertyDescriptors(e)).some(e=>!e.configurable&&!e.writable))(e)?[e,i(e)]:[e],null==p||p.set(s,g)}const[y,h]=g;let w=f&&f.get(y);return w&&w[1].f===!!h||(w=((o,s)=>{const c={f:s};let l=!1;const f=(e,t)=>{if(!l){let s=c[r].get(o);if(s||(s={},c[r].set(o,s)),e===n)s[n]=!0;else{let r=s[e];r||(r=new Set,s[e]=r),r.add(t)}}},i={get:(e,n)=>n===t?o:(f(\"k\",n),a(Reflect.get(e,n),c[r],c.c,c.t)),has:(t,n)=>n===e?(l=!0,c[r].delete(o),!0):(f(\"h\",n),Reflect.has(t,n)),getOwnPropertyDescriptor:(e,t)=>(f(\"o\",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(f(n),Reflect.ownKeys(e))};return s&&(i.set=i.deleteProperty=()=>!1),[i,c]})(y,!!h),w[1].p=o(h||y,w[0]),f&&f.set(y,w)),w[1][r]=c,w[1].c=f,w[1].t=p,w[1].p},p=(e,t,r,o)=>{if(Object.is(e,t))return!1;if(!f(e)||!f(t))return!0;const s=r.get(u(e));if(!s)return!0;if(o){const r=o.get(e);if(r&&r.n===t)return r.g;o.set(e,{n:t,g:!1})}let c=null;try{for(const r of s.h||[])if(c=Reflect.has(e,r)!==Reflect.has(t,r),c)return c;if(!0===s[n]){if(c=((e,t)=>{const r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])})(e,t),c)return c}else for(const r of s.o||[])if(c=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r),c)return c;for(const n of s.k||[])if(c=p(e[n],t[n],r,o),c)return c;return null===c&&(c=!0),c}finally{o&&o.set(e,{n:t,g:c})}},g=t=>!!l(t)&&e in t,y=e=>l(e)&&e[t]||null,h=(e,t=!0)=>{c.set(e,t)},w=(e,t,r)=>{const o=[],s=new WeakSet,c=(e,l)=>{if(s.has(e))return;f(e)&&s.add(e);const i=f(e)&&t.get(u(e));if(i){var a,p;if(null==(a=i.h)||a.forEach(e=>{const t=`:has(${String(e)})`;o.push(l?[...l,t]:[t])}),!0===i[n]){const e=\":ownKeys\";o.push(l?[...l,e]:[e])}else{var g;null==(g=i.o)||g.forEach(e=>{const t=`:hasOwn(${String(e)})`;o.push(l?[...l,t]:[t])})}null==(p=i.k)||p.forEach(t=>{r&&!(\"value\"in(Object.getOwnPropertyDescriptor(e,t)||{}))||c(e[t],l?[...l,t]:[t])})}else l&&o.push(l)};return c(e),o},O=e=>{o=e};\n//# sourceMappingURL=index.modern.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJveHktY29tcGFyZS9kaXN0L2luZGV4Lm1vZGVybi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0NBQXdDLDRCQUE0QixnS0FBZ0sseUNBQXlDLDRDQUE0QyxvQ0FBb0Msa0JBQWtCLHdCQUF3Qiw0QkFBNEIsa0JBQWtCLGtCQUFrQixPQUFPLGFBQWEsb0lBQW9JLGFBQWEsa0JBQWtCLG9DQUFvQyxTQUFTLEtBQUssU0FBUyxnQkFBZ0IsT0FBTyxrQkFBa0IsV0FBVyw4QkFBOEIsS0FBSyxXQUFXLGlDQUFpQyxJQUFJLDRQQUE0UCxnREFBZ0QsK0VBQStFLGVBQWUsMkJBQTJCLHlCQUF5QixvQkFBb0IsZUFBZSxNQUFNLGlCQUFpQix5QkFBeUIsU0FBUyxTQUFTLEVBQUUsV0FBVyxJQUFJLDJFQUEyRSxjQUFjLGNBQWMsZ0RBQWdELG9EQUFvRCxrQkFBa0IsNkhBQTZILHdEQUF3RCwwQkFBMEIsUUFBUSxZQUFZLFFBQVEsR0FBRyx3REFBd0QsV0FBVyxhQUFhLG1DQUFtQyxtQkFBbUIsZUFBZSwwQkFBMEIsTUFBTSxRQUFRLGdDQUFnQyxnQkFBZ0IsVUFBVSxHQUFHLHVCQUF1QixhQUFhLG1CQUFtQix1QkFBdUIsS0FBSyxNQUFNLDZCQUE2QixtQkFBbUIsVUFBVSxHQUFHLHVCQUF1QixFQUFFLDZCQUE2Qix1REFBdUQsMkJBQTJCLEVBQUUsbUJBQW1CLGNBQWMsT0FBTyxLQUE0STtBQUM3Z0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL3Byb3h5LWNvbXBhcmUvZGlzdC9pbmRleC5tb2Rlcm4uanM/NjdmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlPVN5bWJvbCgpLHQ9U3ltYm9sKCkscj1cImFcIixuPVwid1wiO2xldCBvPShlLHQpPT5uZXcgUHJveHkoZSx0KTtjb25zdCBzPU9iamVjdC5nZXRQcm90b3R5cGVPZixjPW5ldyBXZWFrTWFwLGw9ZT0+ZSYmKGMuaGFzKGUpP2MuZ2V0KGUpOnMoZSk9PT1PYmplY3QucHJvdG90eXBlfHxzKGUpPT09QXJyYXkucHJvdG90eXBlKSxmPWU9Plwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSxpPWU9PntpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBBcnJheS5mcm9tKGUpO2NvbnN0IHQ9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoZSk7cmV0dXJuIE9iamVjdC52YWx1ZXModCkuZm9yRWFjaChlPT57ZS5jb25maWd1cmFibGU9ITB9KSxPYmplY3QuY3JlYXRlKHMoZSksdCl9LHU9ZT0+ZVt0XXx8ZSxhPShzLGMsZixwKT0+e2lmKCFsKHMpKXJldHVybiBzO2xldCBnPXAmJnAuZ2V0KHMpO2lmKCFnKXtjb25zdCBlPXUocyk7Zz0oZT0+T2JqZWN0LnZhbHVlcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhlKSkuc29tZShlPT4hZS5jb25maWd1cmFibGUmJiFlLndyaXRhYmxlKSkoZSk/W2UsaShlKV06W2VdLG51bGw9PXB8fHAuc2V0KHMsZyl9Y29uc3RbeSxoXT1nO2xldCB3PWYmJmYuZ2V0KHkpO3JldHVybiB3JiZ3WzFdLmY9PT0hIWh8fCh3PSgobyxzKT0+e2NvbnN0IGM9e2Y6c307bGV0IGw9ITE7Y29uc3QgZj0oZSx0KT0+e2lmKCFsKXtsZXQgcz1jW3JdLmdldChvKTtpZihzfHwocz17fSxjW3JdLnNldChvLHMpKSxlPT09bilzW25dPSEwO2Vsc2V7bGV0IHI9c1tlXTtyfHwocj1uZXcgU2V0LHNbZV09ciksci5hZGQodCl9fX0saT17Z2V0OihlLG4pPT5uPT09dD9vOihmKFwia1wiLG4pLGEoUmVmbGVjdC5nZXQoZSxuKSxjW3JdLGMuYyxjLnQpKSxoYXM6KHQsbik9Pm49PT1lPyhsPSEwLGNbcl0uZGVsZXRlKG8pLCEwKTooZihcImhcIixuKSxSZWZsZWN0Lmhhcyh0LG4pKSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6KGUsdCk9PihmKFwib1wiLHQpLFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkpLG93bktleXM6ZT0+KGYobiksUmVmbGVjdC5vd25LZXlzKGUpKX07cmV0dXJuIHMmJihpLnNldD1pLmRlbGV0ZVByb3BlcnR5PSgpPT4hMSksW2ksY119KSh5LCEhaCksd1sxXS5wPW8oaHx8eSx3WzBdKSxmJiZmLnNldCh5LHcpKSx3WzFdW3JdPWMsd1sxXS5jPWYsd1sxXS50PXAsd1sxXS5wfSxwPShlLHQscixvKT0+e2lmKE9iamVjdC5pcyhlLHQpKXJldHVybiExO2lmKCFmKGUpfHwhZih0KSlyZXR1cm4hMDtjb25zdCBzPXIuZ2V0KHUoZSkpO2lmKCFzKXJldHVybiEwO2lmKG8pe2NvbnN0IHI9by5nZXQoZSk7aWYociYmci5uPT09dClyZXR1cm4gci5nO28uc2V0KGUse246dCxnOiExfSl9bGV0IGM9bnVsbDt0cnl7Zm9yKGNvbnN0IHIgb2Ygcy5ofHxbXSlpZihjPVJlZmxlY3QuaGFzKGUscikhPT1SZWZsZWN0Lmhhcyh0LHIpLGMpcmV0dXJuIGM7aWYoITA9PT1zW25dKXtpZihjPSgoZSx0KT0+e2NvbnN0IHI9UmVmbGVjdC5vd25LZXlzKGUpLG49UmVmbGVjdC5vd25LZXlzKHQpO3JldHVybiByLmxlbmd0aCE9PW4ubGVuZ3RofHxyLnNvbWUoKGUsdCk9PmUhPT1uW3RdKX0pKGUsdCksYylyZXR1cm4gY31lbHNlIGZvcihjb25zdCByIG9mIHMub3x8W10paWYoYz0hIVJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUscikhPSEhUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxyKSxjKXJldHVybiBjO2Zvcihjb25zdCBuIG9mIHMua3x8W10paWYoYz1wKGVbbl0sdFtuXSxyLG8pLGMpcmV0dXJuIGM7cmV0dXJuIG51bGw9PT1jJiYoYz0hMCksY31maW5hbGx5e28mJm8uc2V0KGUse246dCxnOmN9KX19LGc9dD0+ISFsKHQpJiZlIGluIHQseT1lPT5sKGUpJiZlW3RdfHxudWxsLGg9KGUsdD0hMCk9PntjLnNldChlLHQpfSx3PShlLHQscik9Pntjb25zdCBvPVtdLHM9bmV3IFdlYWtTZXQsYz0oZSxsKT0+e2lmKHMuaGFzKGUpKXJldHVybjtmKGUpJiZzLmFkZChlKTtjb25zdCBpPWYoZSkmJnQuZ2V0KHUoZSkpO2lmKGkpe3ZhciBhLHA7aWYobnVsbD09KGE9aS5oKXx8YS5mb3JFYWNoKGU9Pntjb25zdCB0PWA6aGFzKCR7U3RyaW5nKGUpfSlgO28ucHVzaChsP1suLi5sLHRdOlt0XSl9KSwhMD09PWlbbl0pe2NvbnN0IGU9XCI6b3duS2V5c1wiO28ucHVzaChsP1suLi5sLGVdOltlXSl9ZWxzZXt2YXIgZztudWxsPT0oZz1pLm8pfHxnLmZvckVhY2goZT0+e2NvbnN0IHQ9YDpoYXNPd24oJHtTdHJpbmcoZSl9KWA7by5wdXNoKGw/Wy4uLmwsdF06W3RdKX0pfW51bGw9PShwPWkuayl8fHAuZm9yRWFjaCh0PT57ciYmIShcInZhbHVlXCJpbihPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCl8fHt9KSl8fGMoZVt0XSxsP1suLi5sLHRdOlt0XSl9KX1lbHNlIGwmJm8ucHVzaChsKX07cmV0dXJuIGMoZSksb30sTz1lPT57bz1lfTtleHBvcnR7dyBhcyBhZmZlY3RlZFRvUGF0aExpc3QsYSBhcyBjcmVhdGVQcm94eSx5IGFzIGdldFVudHJhY2tlZCxwIGFzIGlzQ2hhbmdlZCxoIGFzIG1hcmtUb1RyYWNrLE8gYXMgcmVwbGFjZU5ld1Byb3h5LGcgYXMgdHJhY2tNZW1vfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1vZGVybi5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/proxy-compare/dist/index.modern.js\n");

/***/ })

};
;