!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(self,(function(){return function(){"use strict";var e={7836:function(e){e.exports=require("@tippyjs/react")},4229:function(e){e.exports=require("prop-types")},9297:function(e){e.exports=require("react")},5282:function(e){e.exports=require("react/jsx-runtime")},973:function(e){e.exports=require("tippy.js")}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){t.r(n);var e=t(9297),r=t(4229),o=t.n(r),i=t(7836),u=t.n(i),c=t(973),a=t(5282),f=(0,e.forwardRef)((function(e,r){var t=e.children,n=e.className,o=e.placement;return(0,a.jsx)(u(),{content:t,placement:o,reference:r,trigger:"click",animation:"shift-away",arrow:c.roundArrow,className:"arrow-light ".concat(n),interactive:!0})}));f.defaultProps={className:null,placement:"top"},f.propTypes={children:o().node.isRequired,className:o().string,placement:o().string.isRequired},n.default=f}(),n}()}));