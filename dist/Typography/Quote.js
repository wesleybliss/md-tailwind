!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(){return function(){"use strict";var e={12:function(e){e.exports=require("@babel/runtime/helpers/defineProperty")},4755:function(e){e.exports=require("@babel/runtime/helpers/objectWithoutProperties")},4229:function(e){e.exports=require("prop-types")},9297:function(e){e.exports=require("react")},5282:function(e){e.exports=require("react/jsx-runtime")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){r.r(n),r.d(n,{default:function(){return d}});var e=r(12),t=r.n(e),o=r(4755),i=r.n(o),l=(r(9297),r(4229)),u=r.n(l),c=r(5282),p=["children","color","footer","cite"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={white:"text-gray-200",blueGray:"text-blue-gray-700",gray:"text-gray-700",brown:"text-brown-700",deepOrange:"text-deep-orange-700",orange:"text-orange-700",amber:"text-amber-700",yellow:"text-yellow-600",lime:"text-lime-700",lightGreen:"text-light-green-700",green:"text-green-700",teal:"text-teal-700",cyan:"text-cyan-700",lightBlue:"text-light-blue-700",blue:"text-blue-700",indigo:"text-indigo-700",deepPurple:"text-deep-purple-700",purple:"text-purple-700",pink:"text-pink-700",red:"text-red-700"},f={white:"text-white",blueGray:"text-blue-gray-800",gray:"text-gray-800",brown:"text-brown-800",deepOrange:"text-deep-orange-800",orange:"text-orange-800",amber:"text-amber-800",yellow:"text-yellow-800",lime:"text-lime-800",lightGreen:"text-light-green-800",green:"text-green-800",teal:"text-teal-800",cyan:"text-cyan-800",lightBlue:"text-light-blue-800",blue:"text-blue-800",indigo:"text-indigo-800",deepPurple:"text-deep-purple-800",purple:"text-purple-800",pink:"text-pink-800",red:"text-red-800"};function d(e){var t=e.children,r=e.color,n=e.footer,o=e.cite,l=i()(e,p);return(0,c.jsxs)("div",x(x({},l),{},{className:"mb-2",children:[(0,c.jsx)("p",{className:"".concat(s[r]," text-base font-light leading-relaxed mt-0 mb-2"),children:t}),(0,c.jsxs)("footer",{className:"block ".concat(f[r]),children:["- ",n," ",(0,c.jsx)("cite",{children:o})]})]}))}d.defaultProps={color:"blueGray"},d.propTypes={children:u().node.isRequired,color:u().string.isRequired,footer:u().string.isRequired,cite:u().string.isRequired}}(),n}()}));