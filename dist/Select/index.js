!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(){return function(){"use strict";var e={3692:function(e,t,r){r.d(t,{default:function(){return c}});var n=require("@babel/runtime/helpers/slicedToArray"),o=r.n(n),a=require("react"),u=require("classnames"),i=r.n(u),l=require("react/jsx-runtime"),s=function(e){var t=e.className,r=e.dropdownClassName,n=e.items,u=e.onChange,s=(0,a.useRef)(),c=(0,a.useState)(""),f=o()(c,2),d=f[0],p=f[1],v=(0,a.useState)(""),m=o()(v,2),x=m[0],y=(m[1],(0,a.useState)(!1)),b=o()(y,2),h=b[0],g=b[1],j=d?n.filter((function(e){var t=e.label.toLowerCase(),r=e.value.toLowerCase(),n=d.toLowerCase();return t.includes(n)||r.includes(n)})):n;return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("input",{className:t,ref:s,value:d,placeholder:x,onChange:function(e){p(e.target.value),e.target.value&&e.target.value.length&&g(!0)},tabIndex:"0"}),d&&(0,l.jsx)("span",{className:"absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer",onClick:function(e){e.preventDefault(),p("")},children:"✕"}),d&&h&&(0,l.jsx)("div",{className:i()(r,{hidden:!d||!h}),onClick:function(e){p(e),g(!1)},onBlur:function(){return g(!1)},tabIndex:"0",children:(0,l.jsxs)("ul",{className:"py-1",children:[j.map((function(e,t){return(0,l.jsx)("li",{className:"px-3 py-2 cursor-pointer hover:bg-gray-200",onClick:(r=e,function(){u(r)}),children:e.title},"select-search-result-".concat(t));var r})),!j.length&&(0,l.jsx)("li",{className:"px-3 py-2 text-center",children:"No Matching Results"})]})})]})};s.displayName="Select";var c=s}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){r.r(n),r.d(n,{Select:function(){return e.default}});var e=r(3692);n.default=e.default}(),n}()}));