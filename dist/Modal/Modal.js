!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var a=n();for(var o in a)("object"==typeof exports?exports:e)[o]=a[o]}}(self,(function(){return function(){"use strict";var e={8226:function(e,n,a){a.d(n,{useClasses:function(){return t}});var o=a(4058),r=a.n(o),t=function(e){var n=e.className,a=e.modalClassName,o=e.modalInnerClassName,t=e.overlayClassName,s=e.active,l=e.size,i=e.modalSize,u={};return u.wrapper=r()("mdtw-modal-wrapper","grid","place-items-center","overflow-x-hidden","overflow-y-auto","fixed","inset-0","z-50","outline-none","focus:outline-none","transition-all","duration-500",{"opacity-100 pointer-events-auto":s,"opacity-0 pointer-events-none":!s},n),u.modal=r()("mdtw-modal","transform","w-auto","my-6","mx-auto","transition-all","duration-500",i,{"opacity-100 translate-y-0":s,"opacity-0 -translate-y-10":!s},a),u.modalInner=r()("mdtw-modal-inner","flex","flex-col","w-full","outline-none","focus:outline-none","border-0","p-6",{"rounded-xl shadow-xl":"lg"===l,"rounded-lg shadow-lg":"lg"!==l},o),u.overlay=r()("mdtw-modal-overlay","fixed","inset-0","z-40","bg-black","transition-all","duration-500",{"opacity-50 pointer-events-auto":s,"opacity-0 pointer-events-none":!s},t),u}},4058:function(e){e.exports=require("classnames")},4229:function(e){e.exports=require("prop-types")},9297:function(e){e.exports=require("react")},5282:function(e){e.exports=require("react/jsx-runtime")},7698:function(e){e.exports=require("tailwindcss/tailwind.css")}},n={};function a(o){var r=n[o];if(void 0!==r)return r.exports;var t=n[o]={exports:{}};return e[o](t,t.exports,a),t.exports}a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,{a:n}),n},a.d=function(e,n){for(var o in n)a.o(n,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){a.r(o),a(9297);var e=a(4229),n=a.n(e),r=a(8226),t=(a(7698),a(5282)),s={sm:"max-w-sm",lg:"max-w-6xl"},l=function(e){var n=e.children,a=e.makeClasses,o=e.className,l=e.modalClassName,i=e.modalInnerClassName,u=e.overlayClassName,d=e.size,c=e.active,m=e.toggler,f=s[d]||"max-w-3xl",p=a((0,r.useClasses)({className:o,modalClassName:l,modalInnerClassName:i,overlayClassName:u,size:d,modalSize:f,active:c}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:p.wrapper,onClick:m,children:(0,t.jsx)("div",{className:p.modal,children:(0,t.jsx)("div",{className:p.modalInner,onClick:function(e){return e.stopPropagation()},children:n})})}),(0,t.jsx)("div",{className:p.overlay})]})};l.defaultProps={makeClasses:function(e){return e},className:null,modalClassName:null,modalInnerClassName:null,overlayClassName:null,size:"regular",active:!1,toggler:function(){}},l.propTypes={children:n().node.isRequired,makeClasses:n().func.isRequired,className:n().string,modalClassName:n().string,modalInnerClassName:n().string,overlayClassName:n().string,size:n().string.isRequired,active:n().bool.isRequired,toggler:n().func.isRequired},o.default=l}(),o}()}));