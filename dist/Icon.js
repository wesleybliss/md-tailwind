!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=require("@babel/runtime/helpers/defineProperty"),r=e.n(t),n=require("@babel/runtime/helpers/objectWithoutProperties"),i=e.n(n),l=(require("react"),require("prop-types")),o=e.n(l),a=require("react/jsx-runtime"),c=["family","name","color","size"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={white:"text-white",blueGray:"text-blue-gray-500",gray:"text-gray-500",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"},p={xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl"},b=function(e){var t,r=e.family,n=e.name,l=e.color,o=e.size,x=i()(e,c);return"material-icons"===r?t=(0,a.jsx)("span",s(s({},x),{},{className:"".concat(r," ").concat(u[l]," ").concat(o?p[o]:"text-base"," leading-none"),children:n})):"font-awesome"===r&&(t=(0,a.jsx)("i",s(s({},x),{},{className:"".concat(n," ").concat(u[l]," ").concat(p[o])}))),t};b.displayName="Icon",b.defaultProps={family:"material-icons",size:"base"},b.propTypes={family:o().string.isRequired,name:o().string.isRequired,color:o().string,size:o().string.isRequired}}();