!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=require("@babel/runtime/helpers/defineProperty"),r=e.n(t),n=require("@babel/runtime/helpers/objectWithoutProperties"),i=e.n(n),o=(require("react"),require("prop-types")),l=e.n(o),a=require("react/jsx-runtime"),c=["children","color","footer","cite"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={white:"text-gray-200",blueGray:"text-blue-gray-700",gray:"text-gray-700",brown:"text-brown-700",deepOrange:"text-deep-orange-700",orange:"text-orange-700",amber:"text-amber-700",yellow:"text-yellow-600",lime:"text-lime-700",lightGreen:"text-light-green-700",green:"text-green-700",teal:"text-teal-700",cyan:"text-cyan-700",lightBlue:"text-light-blue-700",blue:"text-blue-700",indigo:"text-indigo-700",deepPurple:"text-deep-purple-700",purple:"text-purple-700",pink:"text-pink-700",red:"text-red-700"},g={white:"text-white",blueGray:"text-blue-gray-800",gray:"text-gray-800",brown:"text-brown-800",deepOrange:"text-deep-orange-800",orange:"text-orange-800",amber:"text-amber-800",yellow:"text-yellow-800",lime:"text-lime-800",lightGreen:"text-light-green-800",green:"text-green-800",teal:"text-teal-800",cyan:"text-cyan-800",lightBlue:"text-light-blue-800",blue:"text-blue-800",indigo:"text-indigo-800",deepPurple:"text-deep-purple-800",purple:"text-purple-800",pink:"text-pink-800",red:"text-red-800"};function b(e){var t=e.children,r=e.color,n=e.footer,o=e.cite,l=i()(e,c);return(0,a.jsxs)("div",p(p({},l),{},{className:"mb-2",children:[(0,a.jsx)("p",{className:"".concat(x[r]," text-base font-light leading-relaxed mt-0 mb-2"),children:t}),(0,a.jsxs)("footer",{className:"block ".concat(g[r]),children:["- ",n," ",(0,a.jsx)("cite",{children:o})]})]}))}b.defaultProps={color:"blueGray"},b.propTypes={children:l().node.isRequired,color:l().string.isRequired,footer:l().string.isRequired,cite:l().string.isRequired}}();