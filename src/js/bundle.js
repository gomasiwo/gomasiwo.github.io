!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=1)}([function(n,e){function t(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=t(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(2);t.n(r)},function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0;t(5)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){e=n.exports=t(0)(!1),e.i(t(4),""),e.push([n.i,"html, body {\n  position: relative;\n  width: 100vw;\n  height: 100vh; }\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n#main {\n  position: relative;\n  width: 100vmin;\n  height: 50vmin;\n  display: flex;\n  box-shadow: 0px 0px 20px 5px #c1c1c1;\n  font-size: 50px; }\n",""])},function(n,e,t){e=n.exports=t(0)(!1),e.push([n.i,'/*!\n * ress.css • v1.2.2\n * MIT License\n * github.com/filipelinhares/ress\n */\n\n/* # =================================================================\n   # Global selectors\n   # ================================================================= */\n\nhtml {\n  box-sizing: border-box;\n  overflow-y: scroll; /* All browsers without overlaying scrollbars */\n  -webkit-text-size-adjust: 100%; /* iOS 8+ */\n}\n\n*,\n::before,\n::after {\n  background-repeat: no-repeat; /* Set `background-repeat: no-repeat` to all elements */\n  box-sizing: inherit;\n}\n\n::before,\n::after {\n  text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */\n  vertical-align: inherit;\n}\n\n/* Remove margin, padding of all elements and set background-no-repeat as default */\n* {\n  padding: 0; /* Reset `padding` and `margin` of all elements */\n  margin: 0;\n}\n\n/* # =================================================================\n   # General elements\n   # ================================================================= */\n\n/* Add the correct display in iOS 4-7.*/\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nhr {\n  overflow: visible; /* Show the overflow in Edge and IE */\n}\n\n/*\n* Correct `block` display not defined for any HTML5 element in IE 8/9\n* Correct `block` display not defined for `details` or `summary` in IE 10/11\n* and Firefox\n* Correct `block` display not defined for `main` in IE 11\n*/\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\nsummary {\n  display: list-item; /* Add the correct display in all browsers */\n}\n\nsmall {\n  font-size: 80%; /* Set font-size to 80% in `small` elements */\n}\n\n[hidden],\ntemplate {\n  display: none; /* Add the correct display in IE */\n}\n\nabbr[title] {\n  border-bottom: 1px dotted; /* Add a bordered underline effect in all browsers */\n  text-decoration: none; /* Remove text decoration in Firefox 40+ */\n}\n\na {\n  background-color: transparent; /* Remove the gray background on active links in IE 10 */\n  -webkit-text-decoration-skip: objects; /* Remove gaps in links underline in iOS 8+ and Safari 8+ */\n}\n\na:active,\na:hover {\n  outline-width: 0; /* Remove the outline when hovering in all browsers */\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* Specify the font family of code elements */\n}\n\nb,\nstrong {\n  font-weight: bolder; /* Correct style set to `bold` in Edge 12+, Safari 6.2+, and Chrome 18+ */\n}\n\ndfn {\n  font-style: italic; /* Address styling not present in Safari and Chrome */\n}\n\n/* Address styling not present in IE 8/9 */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/* https://gist.github.com/unruthless/413930 */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* # =================================================================\n   # Forms\n   # ================================================================= */\n\ninput {\n  border-radius: 0;\n}\n\n/* Apply cursor pointer to button elements */\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"],\n[role="button"] {\n  cursor: pointer;\n}\n\n/* Replace pointer cursor in disabled elements */\n[disabled] {\n  cursor: default;\n}\n\n[type="number"] {\n  width: auto; /* Firefox 36+ */\n}\n\n[type="search"] {\n  -webkit-appearance: textfield; /* Safari 8+ */\n}\n\n[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; /* Safari 8 */\n}\n\ntextarea {\n  overflow: auto; /* Internet Explorer 11+ */\n  resize: vertical; /* Specify textarea resizability */\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* Specify font inheritance of form elements */\n}\n\noptgroup {\n  font-weight: bold; /* Restore the font weight unset by the previous rule. */\n}\n\nbutton {\n  overflow: visible; /* Address `overflow` set to `hidden` in IE 8/9/10/11 */\n}\n\n/* Remove inner padding and border in Firefox 4+ */\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: 0;\n  padding: 0;\n}\n\n/* Replace focus style removed in the border reset above */\nbutton:-moz-focusring,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  outline: 1px dotted ButtonText;\n}\n\nbutton,\nhtml [type="button"], /* Prevent a WebKit bug where (2) destroys native `audio` and `video`controls in Android 4 */\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */\n}\n\nbutton,\nselect {\n  text-transform: none; /* Firefox 40+, Internet Explorer 11- */\n}\n\n/* Remove the default button styling in all browsers */\nbutton,\ninput,\nselect,\ntextarea {\n  background-color: transparent;\n  border-style: none;\n  color: inherit;\n}\n\n/* Style select like a standard input */\nselect {\n  -moz-appearance: none; /* Firefox 36+ */\n  -webkit-appearance: none; /* Chrome 41+ */\n}\n\nselect::-ms-expand {\n  display: none; /* Internet Explorer 11+ */\n}\n\nselect::-ms-value {\n  color: currentColor; /* Internet Explorer 11+ */\n}\n\nlegend {\n  border: 0; /* Correct `color` not being inherited in IE 8/9/10/11 */\n  color: inherit; /* Correct the color inheritance from `fieldset` elements in IE */\n  display: table; /* Correct the text wrapping in Edge and IE */\n  max-width: 100%; /* Correct the text wrapping in Edge and IE */\n  white-space: normal; /* Correct the text wrapping in Edge and IE */\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS and Safari */\n  font: inherit; /* Change font properties to `inherit` in Chrome and Safari */\n}\n\n[type="search"] {\n  -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */\n  outline-offset: -2px; /* Correct the outline style in Safari */\n}\n\n/* # =================================================================\n   # Specify media element style\n   # ================================================================= */\n\nimg {\n  border-style: none; /* Remove border when inside `a` element in IE 8/9/10 */\n}\n\n/* Add the correct vertical alignment in Chrome, Firefox, and Opera */\nprogress {\n  vertical-align: baseline;\n}\n\nsvg:not(:root) {\n  overflow: hidden; /* Internet Explorer 11- */\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* Internet Explorer 11+, Windows Phone 8.1+ */\n}\n\n/* # =================================================================\n   # Accessibility\n   # ================================================================= */\n\n/* Hide content from screens but not screenreaders */\n@media screen {\n  [hidden~="screen"] {\n    display: inherit;\n  }\n  [hidden~="screen"]:not(:active):not(:focus):not(:target) {\n    position: absolute !important;\n    clip: rect(0 0 0 0) !important;\n  }\n}\n\n/* Specify the progress cursor of updating elements */\n[aria-busy="true"] {\n  cursor: progress;\n}\n\n/* Specify the pointer cursor of trigger elements */\n[aria-controls] {\n  cursor: pointer;\n}\n\n/* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */\n[aria-disabled] {\n  cursor: default;\n}\n\n/* # =================================================================\n   # Selection\n   # ================================================================= */\n\n/* Specify text selection background color and omit drop shadow */\n\n::-moz-selection {\n  background-color: #b3d4fc; /* Required when declaring ::selection */\n  color: #000;\n  text-shadow: none;\n}\n\n::selection {\n  background-color: #b3d4fc; /* Required when declaring ::selection */\n  color: #000;\n  text-shadow: none;\n}\n',""])},function(n,e,t){function r(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=b[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(d(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(d(r.parts[i],e));b[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s=i[1],l=i[2],c=i[3],d={css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(d):t.push(r[a]={id:a,parts:[d]})}return t}function i(n,e){var t=m(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),g.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=g.indexOf(n);e>=0&&g.splice(e,1)}function s(n){var e=document.createElement("style");return n.attrs.type="text/css",c(e,n.attrs),i(n,e),e}function l(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",c(e,n.attrs),i(n,e),e}function c(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function d(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var c=v++;t=y||(y=s(e)),r=u.bind(null,t,c,!1),o=u.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(e),r=f.bind(null,t,e),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),r=p.bind(null,t),o=function(){a(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function u(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function f(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var b={},h=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n){var e={};return function(t){if(void 0===e[t]){var r=n.call(this,t);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[t]=r}return e[t]}}(function(n){return document.querySelector(n)}),y=null,v=0,g=[],w=t(6);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=o(n,e);return r(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var s=t[a],l=b[s.id];l.refs--,i.push(l)}if(n){r(o(n,e),e)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete b[l.id]}}}};var x=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);