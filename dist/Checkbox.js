!function(){"use strict";var e={n:function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,{a:t}),t},d:function(r,t){for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},o:function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}},r=require("@babel/runtime/helpers/defineProperty"),t=e.n(r),o=require("@babel/runtime/helpers/objectWithoutProperties"),c=e.n(o),n=(require("react"),require("prop-types")),i=e.n(n),l=require("react/jsx-runtime"),a=["color","text","id"];function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?b(Object(o),!0).forEach((function(r){t()(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var s={blueGray:"mt-checkbox-blue-gray-500",gray:"mt-checkbox-gray-500",brown:"mt-checkbox-brown-500",deepOrange:"mt-checkbox-deep-orange-500",orange:"mt-checkbox-orange-500",amber:"mt-checkbox-amber-500",yellow:"mt-checkbox-yellow-600",lime:"mt-checkbox-lime-500",lightGreen:"mt-checkbox-light-green-500",green:"mt-checkbox-green-500",teal:"mt-checkbox-teal-500",cyan:"mt-checkbox-cyan-500",lightBlue:"mt-checkbox-light-blue-500",blue:"mt-checkbox-blue-500",indigo:"mt-checkbox-indigo-500",deepPurple:"mt-checkbox-deep-purple-500",purple:"mt-checkbox-purple-500",pink:"mt-checkbox-pink-500",red:"mt-checkbox-red-500"};function p(e){var r=e.color,t=e.text,o=e.id,n=c()(e,a);return(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("input",u(u({},n),{},{id:o,type:"checkbox",className:"mt-checkbox ".concat(s[r]," hidden overflow-hidden")})),(0,l.jsxs)("label",{htmlFor:o,className:"flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300",children:[(0,l.jsx)("span",{className:"relative w-5 h-5 inline-block mr-2 rounded border border-gray-500 transition-all duration-300"}),t]})]})}p.defaultProps={color:"lightBlue"},p.propTypes={color:i().string.isRequired,text:i().string.isRequired,id:i().string.isRequired}}();