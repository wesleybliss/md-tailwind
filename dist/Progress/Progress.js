!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var n=r();for(var t in n)("object"==typeof exports?exports:e)[t]=n[t]}}(self,(function(){return function(){"use strict";var e={4229:function(e){e.exports=require("prop-types")},9297:function(e){e.exports=require("react")},5282:function(e){e.exports=require("react/jsx-runtime")}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var g=r[t]={exports:{}};return e[t](g,g.exports,n),g.exports}n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};return function(){n.r(t),n.d(t,{default:function(){return l}}),n(9297);var e=n(4229),r=n.n(e),o=n(5282),g={blueGray:"bg-blue-gray-200",gray:"bg-gray-200",brown:"bg-brown-200",deepOrange:"bg-deep-orange-200",orange:"bg-orange-200",amber:"bg-amber-200",yellow:"bg-yellow-200",lime:"bg-lime-200",lightGreen:"bg-light-green-200",green:"bg-green-200",teal:"bg-teal-200",cyan:"bg-cyan-200",lightBlue:"bg-light-blue-200",blue:"bg-blue-200",indigo:"bg-indigo-200",deepPurple:"bg-deep-purple-200",purple:"bg-purple-200",pink:"bg-pink-200",red:"bg-red-200"},i={blueGray:"bg-blue-gray-500",gray:"bg-gray-500",brown:"bg-brown-500",deepOrange:"bg-deep-orange-500",orange:"bg-orange-500",amber:"bg-amber-500",yellow:"bg-yellow-600",lime:"bg-lime-500",lightGreen:"bg-light-green-500",green:"bg-green-500",teal:"bg-teal-500",cyan:"bg-cyan-500",lightBlue:"bg-light-blue-500",blue:"bg-blue-500",indigo:"bg-indigo-500",deepPurple:"bg-deep-purple-500",purple:"bg-purple-500",pink:"bg-pink-500",red:"bg-red-500"};function l(e){var r=e.color,n=e.value,t=e.percentage;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"overflow-hidden ".concat(t?"h-6":"h-2"," flex rounded ").concat(g[r]),children:(0,o.jsx)("div",{style:{width:"".concat(n,"%")},className:"flex justify-center items-center rounded text-xs font-medium ".concat(i[r]," text-white"),children:t?"".concat(n,"% Completed"):""})})})}l.defaultProps={color:"lightBlue",percentage:!1},l.propTypes={color:r().string.isRequired,value:r().string.isRequired,percentage:r().bool.isRequired}}(),t}()}));