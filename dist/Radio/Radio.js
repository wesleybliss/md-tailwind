!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(self,(function(){return function(){"use strict";var e={12:function(e){e.exports=require("@babel/runtime/helpers/defineProperty")},4755:function(e){e.exports=require("@babel/runtime/helpers/objectWithoutProperties")},4229:function(e){e.exports=require("prop-types")},9297:function(e){e.exports=require("react")},5282:function(e){e.exports=require("react/jsx-runtime")}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){t.r(o);var e=t(12),r=t.n(e),n=t(4755),i=t.n(n),a=(t(9297),t(4229)),l=t.n(a),u=t(5282),c=["className","color","text","id"];function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var p={blueGray:"mt-radio-blue-gray-500",gray:"mt-radio-gray-500",brown:"mt-radio-brown-500",deepOrange:"mt-radio-deep-orange-500",orange:"mt-radio-orange-500",amber:"mt-radio-amber-500",yellow:"mt-radio-yellow-600",lime:"mt-radio-lime-500",lightGreen:"mt-radio-light-green-500",green:"mt-radio-green-500",teal:"mt-radio-teal-500",cyan:"mt-radio-cyan-500",lightBlue:"mt-radio-light-blue-500",blue:"mt-radio-blue-500",indigo:"mt-radio-indigo-500",deepPurple:"mt-radio-deep-purple-500",purple:"mt-radio-purple-500",pink:"mt-radio-pink-500",red:"mt-radio-red-500"},f=function(e){var r=e.className,t=e.color,o=e.text,n=e.id,a=i()(e,c);return(0,u.jsxs)("div",{className:"flex items-center ".concat(r),children:[(0,u.jsx)("input",d(d({},a),{},{id:n,type:"radio",className:"mt-radio ".concat(p[t]," hidden overflow-hidden")})),(0,u.jsxs)("label",{htmlFor:n,className:"flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300",children:[(0,u.jsx)("span",{className:"relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"}),o]})]})};f.displayName="Radio",f.defaultProps={className:null,color:"lightBlue"},f.propTypes={className:l().string,color:l().string.isRequired,text:l().string.isRequired,id:l().string.isRequired},o.default=f}(),o}()}));