!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=require("@babel/runtime/helpers/defineProperty"),r=e.n(t),n=require("@babel/runtime/helpers/objectWithoutProperties"),o=e.n(n),i=(require("react"),require("prop-types")),l=e.n(i),c=require("react/jsx-runtime"),u=["children","color"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={white:"text-white",blueGray:"text-blue-gray-500",gray:"text-gray-900",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"};function s(e){var t=e.children,r=e.color,n=o()(e,u);return(0,c.jsx)("h1",p(p({},n),{},{className:"".concat(b[r]," text-3xl font-serif font-bold leading-normal mt-0 mb-2"),children:t}))}s.defaultProps={color:"gray"},s.propTypes={children:l().node.isRequired,color:l().string.isRequired}}();