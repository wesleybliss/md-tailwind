!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(function(){return function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:function(){return l}});var n=require("@babel/runtime/helpers/slicedToArray"),r=e.n(n),o=require("react"),a=require("classnames"),u=e.n(a),i=require("react/jsx-runtime"),l=function(e){var t=e.className,n=e.dropdownClassName,a=e.items,l=e.onChange,s=(0,o.useRef)(),c=(0,o.useState)(""),f=r()(c,2),d=f[0],p=f[1],m=(0,o.useState)(""),v=r()(m,2),y=v[0],b=(v[1],(0,o.useState)(!1)),h=r()(b,2),x=h[0],g=h[1],j=d?a.filter((function(e){var t=e.label.toLowerCase(),n=e.value.toLowerCase(),r=d.toLowerCase();return t.includes(r)||n.includes(r)})):a;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("input",{className:t,ref:s,value:d,placeholder:y,onChange:function(e){p(e.target.value),e.target.value&&e.target.value.length&&g(!0)},tabIndex:"0"}),d&&(0,i.jsx)("span",{className:"absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer",onClick:function(e){e.preventDefault(),p("")},children:"✕"}),d&&x&&(0,i.jsx)("div",{className:u()(n,{hidden:!d||!x}),onClick:function(e){p(e),g(!1)},onBlur:function(){return g(!1)},tabIndex:"0",children:(0,i.jsxs)("ul",{className:"py-1",children:[j.map((function(e,t){return(0,i.jsx)("li",{className:"px-3 py-2 cursor-pointer hover:bg-gray-200",onClick:(n=e,function(){l(n)}),children:e.title},"select-search-result-".concat(t));var n})),!j.length&&(0,i.jsx)("li",{className:"px-3 py-2 text-center",children:"No Matching Results"})]})})]})};return t}()}));