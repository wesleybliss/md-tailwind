!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var n=r();for(var t in n)("object"==typeof exports?exports:e)[t]=n[t]}}(self,(function(){return function(){"use strict";var e={7676:function(e,r,n){var t=n(9297),o=n(4229),a=n.n(o),i=n(7836),u=n.n(i),c=n(973),s=n(5282),l=(0,t.forwardRef)((function(e,r){var n=e.children,t=e.className,o=e.placement;return(0,s.jsx)(u(),{content:n,placement:o,reference:r,trigger:"click",animation:"shift-away",arrow:c.roundArrow,className:"arrow-light ".concat(t),interactive:!0})}));l.displayName="Popover",l.defaultProps={className:null,placement:"top"},l.propTypes={children:a().node.isRequired,className:a().string,placement:a().string.isRequired},r.default=l},8462:function(e,r,n){n(9297);var t=n(4229),o=n.n(t),a=n(5282),i=function(e){var r=e.children,n=e.className;return(0,a.jsx)("div",{className:"text-gray-700 font-normal px-4 pb-4 ".concat(n),children:r})};i.displayName="PopoverBody",i.propTypes={children:o().node.isRequired,className:o().string},r.default=i},994:function(e,r,n){n(9297);var t=n(4229),o=n.n(t),a=n(5282),i=function(e){var r=e.children,n=e.className;return(0,a.jsx)("div",{className:"bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg shadow-xl ".concat(n),children:r})};i.displayName="PopoverContainer",i.defaultProps={className:null},i.propTypes={children:o().node.isRequired,className:o().string},r.default=i},3810:function(e,r,n){n(9297);var t=n(4229),o=n.n(t),a=n(5282),i=function(e){var r=e.children,n=e.className;return(0,a.jsx)("div",{className:"text-gray-900 p-4 pb-2 uppercase font-bold ".concat(n),children:r})};i.displayName="PopoverHeader",i.defaultProps={className:null},i.propTypes={children:o().node.isRequired,className:o().string},r.default=i},7836:function(e){e.exports=require("@tippyjs/react")},4229:function(e){e.exports=require("prop-types")},9297:function(e){e.exports=require("react")},5282:function(e){e.exports=require("react/jsx-runtime")},973:function(e){e.exports=require("tippy.js")}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};return function(){n.r(t),n.d(t,{PopoverBody:function(){return e.default},PopoverContainer:function(){return r.default},PopoverHeader:function(){return o.default},Popover:function(){return a.default}});var e=n(8462),r=n(994),o=n(3810),a=n(7676);t.default=a.default}(),t}()}));