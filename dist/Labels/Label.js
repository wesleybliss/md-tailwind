!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(){return function(){"use strict";var e={4229:function(e){e.exports=require("prop-types")},9297:function(e){e.exports=require("react")},5282:function(e){e.exports=require("react/jsx-runtime")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){r.r(n),r.d(n,{default:function(){return u}}),r(9297);var e=r(4229),t=r.n(e),o=r(5282),l={blueGray:"bg-blue-gray-100",gray:"bg-gray-100",brown:"bg-brown-100",deepOrange:"bg-deep-orange-100",orange:"bg-orange-100",amber:"bg-amber-100",yellow:"bg-yellow-100",lime:"bg-lime-100",lightGreen:"bg-light-green-100",green:"bg-green-100",teal:"bg-teal-100",cyan:"bg-cyan-100",lightBlue:"bg-light-blue-100",blue:"bg-blue-100",indigo:"bg-indigo-100",deepPurple:"bg-deep-purple-100",purple:"bg-purple-100",pink:"bg-pink-100",red:"bg-red-100"},i={blueGray:"text-blue-gray-700",gray:"text-gray-700",brown:"text-brown-700",deepOrange:"text-deep-orange-700",orange:"text-orange-700",amber:"text-amber-700",yellow:"text-yellow-700",lime:"text-lime-700",lightGreen:"text-light-green-700",green:"text-green-700",teal:"text-teal-700",cyan:"text-cyan-700",lightBlue:"text-light-blue-700",blue:"text-blue-700",indigo:"text-indigo-700",deepPurple:"text-deep-purple-700",purple:"text-purple-700",pink:"text-pink-700",red:"text-red-700"};function u(e){var t=e.children,r=e.color,n=e.className;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"max-w-max flex items-center justify-between py-1 px-3 rounded-full ".concat(l[r]," last:mr-0 mr-1 transition-all duration-300 ").concat(n),children:(0,o.jsx)("span",{className:"text-xs font-semibold uppercase ".concat(i[r]),children:t})})})}u.propTypes={children:t().node.isRequired,color:t().string.isRequired}}(),n}()}));