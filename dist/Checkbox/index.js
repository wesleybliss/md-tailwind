!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(){return function(){"use strict";var e={2654:function(e,t,r){var n=r(12),o=r.n(n),c=r(4755),i=r.n(c),l=(r(9297),r(4229)),s=r.n(l),u=r(4058),a=r.n(u),p=r(5282),f=["className","color","text","id","checked"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={blueGray:"mt-checkbox-blue-gray-500",gray:"mt-checkbox-gray-500",brown:"mt-checkbox-brown-500",deepOrange:"mt-checkbox-deep-orange-500",orange:"mt-checkbox-orange-500",amber:"mt-checkbox-amber-500",yellow:"mt-checkbox-yellow-600",lime:"mt-checkbox-lime-500",lightGreen:"mt-checkbox-light-green-500",green:"mt-checkbox-green-500",teal:"mt-checkbox-teal-500",cyan:"mt-checkbox-cyan-500",lightBlue:"mt-checkbox-light-blue-500",blue:"mt-checkbox-blue-500",indigo:"mt-checkbox-indigo-500",deepPurple:"mt-checkbox-deep-purple-500",purple:"mt-checkbox-purple-500",pink:"mt-checkbox-pink-500",red:"mt-checkbox-red-500"},m=function(e){e.className;var t=e.color,r=e.text,n=e.id,o=e.checked,c=i()(e,f);return(0,p.jsxs)("div",{className:"flex items-center",children:[(0,p.jsx)("input",d(d({},c),{},{id:n,type:"checkbox",checked:o,className:"mt-checkbox ".concat(x[t]," hidden overflow-hidden")})),r&&(0,p.jsxs)("label",{htmlFor:n,className:"flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300",children:[(0,p.jsx)("span",{className:"relative flex justify-center items-center content-center w-5 h-5 inline-block mr-2 rounded border border-gray-500 transition-all duration-300",children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:a()("fill-current","w-3","h-3","text-blue-600","pointer-events-none",{hidden:!o}),version:"1.1",viewBox:"0 0 17 12",children:(0,p.jsx)("g",{fill:"none","fill-rule":"evenodd",children:(0,p.jsx)("g",{transform:"translate(-9 -11)",fill:"#1F73F1","fill-rule":"nonzero",children:(0,p.jsx)("path",{d:"m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"})})})})}),r]})]})};m.defaultProps={className:null,color:"lightBlue",text:null},m.propTypes={className:s().string,color:s().string.isRequired,text:s().string,id:s().string.isRequired},t.default=m},12:function(e){e.exports=require("@babel/runtime/helpers/defineProperty")},4755:function(e){e.exports=require("@babel/runtime/helpers/objectWithoutProperties")},4058:function(e){e.exports=require("classnames")},4229:function(e){e.exports=require("prop-types")},9297:function(e){e.exports=require("react")},5282:function(e){e.exports=require("react/jsx-runtime")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){r.r(n),r.d(n,{Checkbox:function(){return e.default}});var e=r(2654);n.default=e.default}(),n}()}));