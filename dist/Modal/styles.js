!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var t=o();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(self,(function(){return function(){"use strict";var e={4058:function(e){e.exports=require("classnames")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var a=o[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,{a:o}),o},t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){t.r(n),t.d(n,{useClasses:function(){return r}});var e=t(4058),o=t.n(e),r=function(e){var t=e.className,n=e.modalClassName,r=e.modalInnerClassName,a=e.overlayClassName,i=e.active,l=e.size,u=e.modalSize,s={};return s.wrapper=o()("mdtw-wrapper","grid","place-items-center","overflow-x-hidden","overflow-y-auto","fixed","inset-0","z-50","outline-none","focus:outline-none","transition-all","duration-500",{"opacity-100 pointer-events-auto":i,"opacity-0 pointer-events-none":!i},t),s.modal=o()("mdtw-modal","transform","w-auto","my-6","mx-auto","transition-all","duration-500",u,{"opacity-100 translate-y-0":i,"opacity-0 -translate-y-10":!i},n),s.modalInner=o()("mdtw-modalInner","flex","flex-col","w-full","outline-none","focus:outline-none","border-0","p-6",{"rounded-xl shadow-xl":"lg"===l,"rounded-lg shadow-lg":"lg"!==l},r),s.overlay=o()("mdtw-overlay","fixed","inset-0","z-40","bg-black","transition-all","duration-500",{"opacity-50 pointer-events-auto":i,"opacity-0 pointer-events-none":!i},a),s}}(),n}()}));