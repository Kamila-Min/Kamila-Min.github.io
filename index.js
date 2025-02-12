/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/index.less":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/index.less ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../public/assets/fonts/GTEestiProDisplay-Regular.eot */ "./public/assets/fonts/GTEestiProDisplay-Regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../public/assets/fonts/GTEestiProDisplay-Regular.ttf */ "./public/assets/fonts/GTEestiProDisplay-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../public/assets/fonts/GTEestiProDisplay-Regular.woff */ "./public/assets/fonts/GTEestiProDisplay-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../public/assets/fonts/GTEestiProDisplay-Regular.woff2 */ "./public/assets/fonts/GTEestiProDisplay-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "GT Eesti Pro";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff2");
}
html,
body {
  height: 100%;
  font-family: Arial, sans-serif;
  margin: 0;
}
@media (orientation: portrait) {
  .progress-bar-index {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .progress-bar-index__progress-container {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 5dvh;
  }
  .progress-bar-index__states-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5dvw;
  }
}
@media (orientation: landscape) {
  .progress-bar-index {
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
  }
  .progress-bar-index__progress-container {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5dvw;
  }
  .progress-bar-index__states-container {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 5dvw;
  }
}
.progress-ring {
  width: 50%;
  height: 50%;
}
.progress-ring__background {
  fill: none;
  stroke: #e0e0e0;
  stroke-width: 7;
}
.progress-ring__fill {
  fill: none;
  stroke-width: 7;
  stroke-linecap: butt;
  transform: rotate(-90deg);
  transform-origin: center;
  stroke: #005cfe;
  transition: stroke-dashoffset 0.3s ease;
}
.hidden {
  visibility: hidden;
}
.animated {
  animation: progress-rotate 2s linear infinite;
}
@keyframes progress-rotate {
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(270deg);
  }
}
.states {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.states__wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'GT Eesti Pro', sans-serif;
}
.value {
  position: relative;
  display: inline-block;
  text-align: center;
  outline: none;
  width: 26px;
  height: 14px;
  margin-right: 20px;
  border-radius: 20px;
  border-width: 2px;
  border-color: black;
  padding: 5px;
  font-family: 'GT Eesti Pro', sans-serif;
}
.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin-right: 20px;
}
.toggle__input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggle__input:checked + .toggle__slider {
  background-color: #005cfe;
}
.toggle__input:checked + .toggle__slider::before {
  transform: translateX(16px);
}
.toggle__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 20px;
  transition: 0.4s;
}
.toggle__slider::before {
  content: "";
  position: absolute;
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  border-radius: 250%;
  transition: 0.4s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
`, "",{"version":3,"sources":["webpack://./src/styles/common/fonts.less","webpack://./src/styles/index.less","webpack://./src/styles/components/general-block.less","webpack://./src/styles/components/progress-ring.less","webpack://./src/styles/components/states.less","webpack://./src/styles/components/states-block.less","webpack://./src/styles/components/toggle.less"],"names":[],"mappings":"AAAA;EACC,2BAAA;EACA,4CAAA;EACA,qPAAA;ACCD;ACJA;;EACI,YAAA;EACA,8BAAA;EACA,SAAA;ADOJ;ACJA;EACI;IACI,WAAA;IACA,YAAA;IACA,UAAA;EDMN;ECJM;IACI,WAAA;IACA,WAAA;IACA,aAAA;IACA,uBAAA;IACA,qBAAA;IACA,mBAAA;EDMV;ECHM;IACI,WAAA;IACA,aAAA;IACA,uBAAA;IACA,gBAAA;EDKV;AACF;ACDA;EACI;IACI,WAAA;IACA,YAAA;IACA,UAAA;IACA,aAAA;EDGN;ECDM;IACI,UAAA;IACA,YAAA;IACA,aAAA;IACA,yBAAA;IACA,mBAAA;IACA,kBAAA;EDGV;ECAM;IACI,YAAA;IACA,aAAA;IACA,mBAAA;IACA,iBAAA;EDEV;AACF;AErDA;EACI,UAAA;EACA,WAAA;AFuDJ;AErDI;EACI,UAAA;EACA,eAAA;EACA,eAAA;AFuDR;AEpDI;EACI,UAAA;EACA,eAAA;EACA,oBAAA;EACA,yBAAA;EACA,wBAAA;EACA,eAAA;EACA,uCAAA;AFsDR;AGvEA;EACI,kBAAA;AHyEJ;AGtEA;EACI,6CAAA;AHwEJ;AGrEA;EACI;IACI,yBAAA;EHuEN;EGrEE;IACI,yBAAA;EHuEN;AACF;AIrFA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;AJuFJ;AIrFI;EACI,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,uCAAA;AJuFR;AInFA;EACI,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,uCAAA;AJqFJ;AK/GA;EACI,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;ALiHJ;AK/GI;EACI,UAAA;EACA,QAAA;EACA,SAAA;ALiHR;AK/GI;EACI,yBAAA;ALiHR;AK/GI;EACI,2BAAA;ALiHR;AK9GI;EACI,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;ALgHR;AK9GI;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,wCAAA;ALgHR","sourcesContent":["@font-face {\n\tfont-family: \"GT Eesti Pro\";\n\tsrc: url(\"/public/assets/fonts/GTEestiProDisplay-Regular.eot\");\n\tsrc: url(\"/public/assets/fonts/GTEestiProDisplay-Regular.eot?#iefix\") format(\"embedded-opentype\"),\n\t\turl(\"/public/assets/fonts/GTEestiProDisplay-Regular.ttf\") format(\"truetype\"),\n\t\turl(\"/public/assets/fonts/GTEestiProDisplay-Regular.woff\") format(\"woff\"),\n\t\turl(\"/public/assets/fonts/GTEestiProDisplay-Regular.woff2\") format(\"woff2\");\n}","@font-face {\n  font-family: \"GT Eesti Pro\";\n  src: url(\"/public/assets/fonts/GTEestiProDisplay-Regular.eot\");\n  src: url(\"/public/assets/fonts/GTEestiProDisplay-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/public/assets/fonts/GTEestiProDisplay-Regular.ttf\") format(\"truetype\"), url(\"/public/assets/fonts/GTEestiProDisplay-Regular.woff\") format(\"woff\"), url(\"/public/assets/fonts/GTEestiProDisplay-Regular.woff2\") format(\"woff2\");\n}\nhtml,\nbody {\n  height: 100%;\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\n@media (orientation: portrait) {\n  .progress-bar-index {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n  }\n  .progress-bar-index__progress-container {\n    height: 50%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    margin-bottom: 5dvh;\n  }\n  .progress-bar-index__states-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-top: 5dvw;\n  }\n}\n@media (orientation: landscape) {\n  .progress-bar-index {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    display: flex;\n  }\n  .progress-bar-index__progress-container {\n    width: 50%;\n    height: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin-right: 5dvw;\n  }\n  .progress-bar-index__states-container {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    margin-left: 5dvw;\n  }\n}\n.progress-ring {\n  width: 50%;\n  height: 50%;\n}\n.progress-ring__background {\n  fill: none;\n  stroke: #e0e0e0;\n  stroke-width: 7;\n}\n.progress-ring__fill {\n  fill: none;\n  stroke-width: 7;\n  stroke-linecap: butt;\n  transform: rotate(-90deg);\n  transform-origin: center;\n  stroke: #005cfe;\n  transition: stroke-dashoffset 0.3s ease;\n}\n.hidden {\n  visibility: hidden;\n}\n.animated {\n  animation: progress-rotate 2s linear infinite;\n}\n@keyframes progress-rotate {\n  from {\n    transform: rotate(-90deg);\n  }\n  to {\n    transform: rotate(270deg);\n  }\n}\n.states {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n}\n.states__wrapper {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-family: 'GT Eesti Pro', sans-serif;\n}\n.value {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  outline: none;\n  width: 26px;\n  height: 14px;\n  margin-right: 20px;\n  border-radius: 20px;\n  border-width: 2px;\n  border-color: black;\n  padding: 5px;\n  font-family: 'GT Eesti Pro', sans-serif;\n}\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 24px;\n  margin-right: 20px;\n}\n.toggle__input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle__input:checked + .toggle__slider {\n  background-color: #005cfe;\n}\n.toggle__input:checked + .toggle__slider::before {\n  transform: translateX(16px);\n}\n.toggle__slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  border-radius: 20px;\n  transition: 0.4s;\n}\n.toggle__slider::before {\n  content: \"\";\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  border-radius: 250%;\n  transition: 0.4s;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n","html, body {\n    height: 100%;\n    font-family: Arial, sans-serif;\n    margin: 0;\n}\n\n@media (orientation: portrait) {\n    .progress-bar-index {\n        width: 100%;\n        height: 100%;\n        padding: 0;\n\n        &__progress-container {\n            height: 50%;\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: flex-end;\n            margin-bottom: 5dvh;\n        }\n\n        &__states-container {\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            margin-top: 5dvw;\n        }\n    }\n}\n\n@media (orientation: landscape) {\n    .progress-bar-index {\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        display: flex;\n\n        &__progress-container {\n            width: 50%;\n            height: 100%;\n            display: flex;\n            justify-content: flex-end;\n            align-items: center;\n            margin-right: 5dvw;\n        }\n\n        &__states-container {\n            height: 100%;\n            display: flex;\n            align-items: center;\n            margin-left: 5dvw;\n        }\n    }\n}",".progress-ring {\n    width: 50%;\n    height: 50%;\n\n    &__background {\n        fill: none;\n        stroke: #e0e0e0;\n        stroke-width: 7;\n    }\n\n    &__fill {\n        fill: none;\n        stroke-width: 7;\n        stroke-linecap: butt;\n        transform: rotate(-90deg);\n        transform-origin: center;\n        stroke: @blue;\n        transition: stroke-dashoffset 0.3s ease;\n    }\n}",".hidden {\n    visibility: hidden;\n}\n\n.animated {\n    animation: progress-rotate 2s linear infinite;\n}\n\n@keyframes progress-rotate {\n    from {\n        transform: rotate(-90deg);\n    }\n    to {\n        transform: rotate(270deg);\n      }\n}",".states {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n\n    &__wrapper {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        font-family: @regular-font;\n    }\n}\n\n.value {\n    position: relative;\n    display: inline-block;\n    text-align: center;\n    outline: none;\n    width: 26px;\n    height: 14px;\n    margin-right: 20px;\n    border-radius: 20px;\n    border-width: 2px;\n    border-color: black;\n    padding: 5px;\n    font-family: @regular-font;\n}",".toggle {\n    position: relative;\n    display: inline-block;\n    width: 40px;\n    height: 24px;\n    margin-right: 20px;\n    \n    &__input {\n        opacity: 0;\n        width: 0;\n        height: 0;        \n    }\n    &__input:checked + .toggle__slider {\n        background-color: @blue;\n    }\n    &__input:checked + .toggle__slider::before {\n        transform: translateX(16px);\n    }\n\n    &__slider {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: #ccc;\n        border-radius: 20px;\n        transition: 0.4s;        \n    }\n    &__slider::before {\n        content: \"\";\n        position: absolute;\n        height: 20px;\n        width: 20px;\n        left: 2px;\n        bottom: 2px;\n        background-color: white;\n        border-radius: 250%;\n        transition: 0.4s;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.less":
/*!*******************************!*\
  !*** ./src/styles/index.less ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/index.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/shared/progressbar.js":
/*!***********************************!*\
  !*** ./src/shared/progressbar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar)
/* harmony export */ });
class ProgressBar {
  constructor({
    container,
    progressContainerSelector, 
    progressSelector, 
    inputSelector, 
    animateSelector, 
    hideSelector 
  }) {
    this.container = document.querySelector(container);

    this.progressContainer = this.container.querySelector(progressContainerSelector);
    this.progressBar = this.container.querySelector(progressSelector);
    this.progressInput = this.container.querySelector(inputSelector);    
    this.animateToggle = this.container.querySelector(animateSelector);
    this.hideToggle = this.container.querySelector(hideSelector);
    this.animationInterval = null;

    this.init();
}

init() {
    this.progressInput.addEventListener("input", (event) => {
        this.updateProgress(event.target.value);
    });
    
    this.progressBar.style.strokeDasharray = 2 * Math.PI * this.progressBar.getAttribute("r");
    this.progressBar.style.strokeDashoffset = 2 * Math.PI * this.progressBar.getAttribute("r");
  
    this.updateProgress(this.progressInput.value);

    if (this.animateToggle) {
        this.animateToggle.addEventListener("change", (event) => {
            if (event.target.checked) {
                this.progressBar.classList.add("animated");
            } else {
                this.progressBar.classList.remove("animated");
            }
        });
    }
    
    if (this.hideToggle) {
        this.hideToggle.addEventListener("change", (event) => {
            if (event.target.checked) {
                this.progressContainer.classList.add("hidden");
            } else {
                this.progressContainer.classList.remove("hidden");
            }
        });
    }
}

updateProgress(value) {
    let radius = this.progressBar.getAttribute("r");
    let circumference = 2 * Math.PI * radius;
    let offset = Math.max(0, circumference - (value / 100) * circumference);
    this.progressBar.style.strokeDashoffset = offset;
}
}



/***/ }),

/***/ "./public/assets/fonts/GTEestiProDisplay-Regular.eot":
/*!***********************************************************!*\
  !*** ./public/assets/fonts/GTEestiProDisplay-Regular.eot ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d75269faa814e3880f22.eot";

/***/ }),

/***/ "./public/assets/fonts/GTEestiProDisplay-Regular.ttf":
/*!***********************************************************!*\
  !*** ./public/assets/fonts/GTEestiProDisplay-Regular.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e3500657ff00a57a825.ttf";

/***/ }),

/***/ "./public/assets/fonts/GTEestiProDisplay-Regular.woff":
/*!************************************************************!*\
  !*** ./public/assets/fonts/GTEestiProDisplay-Regular.woff ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28d2ff20eefcc6b72184.woff";

/***/ }),

/***/ "./public/assets/fonts/GTEestiProDisplay-Regular.woff2":
/*!*************************************************************!*\
  !*** ./public/assets/fonts/GTEestiProDisplay-Regular.woff2 ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61ef9b745152af65a285.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.less */ "./src/styles/index.less");
/* harmony import */ var _shared_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/progressbar */ "./src/shared/progressbar.js");



document.addEventListener("DOMContentLoaded", () => {
    const progressbar = new _shared_progressbar__WEBPACK_IMPORTED_MODULE_1__.ProgressBar({
        container: ".progress-bar-index",
        progressContainerSelector: ".progress-bar-index__progress-container",
        progressSelector: ".progress-ring__fill",
        inputSelector: ".value",
        animateSelector: ".animate",
        hideSelector: ".hide",
    });

    console.log (progressbar);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxrTUFBcUU7QUFDakgsNENBQTRDLGtNQUFxRTtBQUNqSCw0Q0FBNEMsb01BQXNFO0FBQ2xILDRDQUE0QyxzTUFBdUU7QUFDbkgsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0Isa0NBQWtDLGlCQUFpQjtBQUMzSCx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLG1DQUFtQyxxQ0FBcUMsbUNBQW1DLDRCQUE0QixtQ0FBbUMsd0JBQXdCLG1DQUFtQztBQUNsUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1WUFBdVksV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FB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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDdUI7QUFDbkQ7QUFDQTtBQUNBLDRCQUE0Qiw0REFBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2dyZXNzLWJsb2NrX3Rlc3QtdGFzay1vem9uLy4vc3JjL3N0eWxlcy9pbmRleC5sZXNzIiwid2VicGFjazovL3Byb2dyZXNzLWJsb2NrX3Rlc3QtdGFzay1vem9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9ncmVzcy1ibG9ja190ZXN0LXRhc2stb3pvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3MtYmxvY2tfdGVzdC10YXNrLW96b24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9ncmVzcy1ibG9ja190ZXN0LXRhc2stb3pvbi8uL3NyYy9zdHlsZXMvaW5kZXgubGVzcz9iZGI2Iiwid2VicGFjazovL3Byb2dyZXNzLWJsb2NrX3Rlc3QtdGFzay1vem9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2dyZXNzLWJsb2NrX3Rlc3QtdGFzay1vem9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9ncmVzcy1ibG9ja190ZXN0LXRhc2stb3pvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9ncmVzcy1ibG9ja190ZXN0LXRhc2stb3pvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9ncmVzcy1ibG9ja190ZXN0LXRhc2stb3pvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2dyZXNzLWJsb2NrX3Rlc3QtdGFzay1vem9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3MtYmxvY2tfdGVzdC10YXNrLW96b24vLi9zcmMvc2hhcmVkL3Byb2dyZXNzYmFyLmpzIiwid2VicGFjazovL3Byb2dyZXNzLWJsb2NrX3Rlc3QtdGFzay1vem9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2dyZXNzLWJsb2NrX3Rlc3QtdGFzay1vem9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2dyZXNzLWJsb2NrX3Rlc3QtdGFzay1vem9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9ncmVzcy1ibG9ja190ZXN0LXRhc2stb3pvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2dyZXNzLWJsb2NrX3Rlc3QtdGFzay1vem9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3MtYmxvY2tfdGVzdC10YXNrLW96b24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9ncmVzcy1ibG9ja190ZXN0LXRhc2stb3pvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9ncmVzcy1ibG9ja190ZXN0LXRhc2stb3pvbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9ncmVzcy1ibG9ja190ZXN0LXRhc2stb3pvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3MtYmxvY2tfdGVzdC10YXNrLW96b24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9wdWJsaWMvYXNzZXRzL2ZvbnRzL0dURWVzdGlQcm9EaXNwbGF5LVJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3B1YmxpYy9hc3NldHMvZm9udHMvR1RFZXN0aVByb0Rpc3BsYXktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvcHVibGljL2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvRGlzcGxheS1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvcHVibGljL2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvRGlzcGxheS1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR1QgRWVzdGkgUHJvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwid29mZlwiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xufVxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLnByb2dyZXNzLWJhci1pbmRleCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLnByb2dyZXNzLWJhci1pbmRleF9fcHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1ZHZoO1xuICB9XG4gIC5wcm9ncmVzcy1iYXItaW5kZXhfX3N0YXRlcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNWR2dztcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5wcm9ncmVzcy1iYXItaW5kZXgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnByb2dyZXNzLWJhci1pbmRleF9fcHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDVkdnc7XG4gIH1cbiAgLnByb2dyZXNzLWJhci1pbmRleF9fc3RhdGVzLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNWR2dztcbiAgfVxufVxuLnByb2dyZXNzLXJpbmcge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbn1cbi5wcm9ncmVzcy1yaW5nX19iYWNrZ3JvdW5kIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjZTBlMGUwO1xuICBzdHJva2Utd2lkdGg6IDc7XG59XG4ucHJvZ3Jlc3MtcmluZ19fZmlsbCB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZS13aWR0aDogNztcbiAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgc3Ryb2tlOiAjMDA1Y2ZlO1xuICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAwLjNzIGVhc2U7XG59XG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmFuaW1hdGVkIHtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcy1yb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBwcm9ncmVzcy1yb3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB9XG59XG4uc3RhdGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5zdGF0ZXNfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnR1QgRWVzdGkgUHJvJywgc2Fucy1zZXJpZjtcbn1cbi52YWx1ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1mYW1pbHk6ICdHVCBFZXN0aSBQcm8nLCBzYW5zLXNlcmlmO1xufVxuLnRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4udG9nZ2xlX19pbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG4udG9nZ2xlX19pbnB1dDpjaGVja2VkICsgLnRvZ2dsZV9fc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWNmZTtcbn1cbi50b2dnbGVfX2lucHV0OmNoZWNrZWQgKyAudG9nZ2xlX19zbGlkZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcbn1cbi50b2dnbGVfX3NsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4udG9nZ2xlX19zbGlkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbGVmdDogMnB4O1xuICBib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1MCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tbW9uL2ZvbnRzLmxlc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXgubGVzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL2dlbmVyYWwtYmxvY2subGVzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLXJpbmcubGVzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL3N0YXRlcy5sZXNzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvc3RhdGVzLWJsb2NrLmxlc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy90b2dnbGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNDLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxxUEFBQTtBQ0NEO0FDSkE7O0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBRE9KO0FDSkE7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFRE1OO0VDSk07SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RURNVjtFQ0hNO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0VES1Y7QUFDRjtBQ0RBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0VER047RUNETTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFREdWO0VDQU07SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RURFVjtBQUNGO0FFckRBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUZ1REo7QUVyREk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUZ1RFI7QUVwREk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtBRnNEUjtBR3ZFQTtFQUNJLGtCQUFBO0FIeUVKO0FHdEVBO0VBQ0ksNkNBQUE7QUh3RUo7QUdyRUE7RUFDSTtJQUNJLHlCQUFBO0VIdUVOO0VHckVFO0lBQ0kseUJBQUE7RUh1RU47QUFDRjtBSXJGQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBSnVGSjtBSXJGSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUp1RlI7QUluRkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBSnFGSjtBSy9HQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FMaUhKO0FLL0dJO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FMaUhSO0FLL0dJO0VBQ0kseUJBQUE7QUxpSFI7QUsvR0k7RUFDSSwyQkFBQTtBTGlIUjtBSzlHSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUxnSFI7QUs5R0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUxnSFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJHVCBFZXN0aSBQcm9cXFwiO1xcblxcdHNyYzogdXJsKFxcXCIvcHVibGljL2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvRGlzcGxheS1SZWd1bGFyLmVvdFxcXCIpO1xcblxcdHNyYzogdXJsKFxcXCIvcHVibGljL2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvRGlzcGxheS1SZWd1bGFyLmVvdD8jaWVmaXhcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksXFxuXFx0XFx0dXJsKFxcXCIvcHVibGljL2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvRGlzcGxheS1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSxcXG5cXHRcXHR1cmwoXFxcIi9wdWJsaWMvYXNzZXRzL2ZvbnRzL0dURWVzdGlQcm9EaXNwbGF5LVJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLFxcblxcdFxcdHVybChcXFwiL3B1YmxpYy9hc3NldHMvZm9udHMvR1RFZXN0aVByb0Rpc3BsYXktUmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XCIsXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR1QgRWVzdGkgUHJvXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvcHVibGljL2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvRGlzcGxheS1SZWd1bGFyLmVvdFxcXCIpO1xcbiAgc3JjOiB1cmwoXFxcIi9wdWJsaWMvYXNzZXRzL2ZvbnRzL0dURWVzdGlQcm9EaXNwbGF5LVJlZ3VsYXIuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCIvcHVibGljL2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvRGlzcGxheS1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFxcXCIvcHVibGljL2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvRGlzcGxheS1SZWd1bGFyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFxcXCIvcHVibGljL2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvRGlzcGxheS1SZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xcbiAgLnByb2dyZXNzLWJhci1pbmRleCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAucHJvZ3Jlc3MtYmFyLWluZGV4X19wcm9ncmVzcy1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDVkdmg7XFxuICB9XFxuICAucHJvZ3Jlc3MtYmFyLWluZGV4X19zdGF0ZXMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA1ZHZ3O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gIC5wcm9ncmVzcy1iYXItaW5kZXgge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLnByb2dyZXNzLWJhci1pbmRleF9fcHJvZ3Jlc3MtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVkdnc7XFxuICB9XFxuICAucHJvZ3Jlc3MtYmFyLWluZGV4X19zdGF0ZXMtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNWR2dztcXG4gIH1cXG59XFxuLnByb2dyZXNzLXJpbmcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG4ucHJvZ3Jlc3MtcmluZ19fYmFja2dyb3VuZCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjZTBlMGUwO1xcbiAgc3Ryb2tlLXdpZHRoOiA3O1xcbn1cXG4ucHJvZ3Jlc3MtcmluZ19fZmlsbCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLXdpZHRoOiA3O1xcbiAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgc3Ryb2tlOiAjMDA1Y2ZlO1xcbiAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMC4zcyBlYXNlO1xcbn1cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmFuaW1hdGVkIHtcXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3Mtcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuQGtleWZyYW1lcyBwcm9ncmVzcy1yb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICB9XFxufVxcbi5zdGF0ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLnN0YXRlc19fd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnR1QgRWVzdGkgUHJvJywgc2Fucy1zZXJpZjtcXG59XFxuLnZhbHVlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogMjZweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LWZhbWlseTogJ0dUIEVlc3RpIFBybycsIHNhbnMtc2VyaWY7XFxufVxcbi50b2dnbGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbi50b2dnbGVfX2lucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuLnRvZ2dsZV9faW5wdXQ6Y2hlY2tlZCArIC50b2dnbGVfX3NsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Y2ZlO1xcbn1cXG4udG9nZ2xlX19pbnB1dDpjaGVja2VkICsgLnRvZ2dsZV9fc2xpZGVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xcbn1cXG4udG9nZ2xlX19zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4udG9nZ2xlX19zbGlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbGVmdDogMnB4O1xcbiAgYm90dG9tOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1MCU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXCIsXCJodG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcXG4gICAgLnByb2dyZXNzLWJhci1pbmRleCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgICAgICAmX19wcm9ncmVzcy1jb250YWluZXIge1xcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVkdmg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmX19zdGF0ZXMtY29udGFpbmVyIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVkdnc7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAgIC5wcm9ncmVzcy1iYXItaW5kZXgge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgICZfX3Byb2dyZXNzLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1ZHZ3O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJl9fc3RhdGVzLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNWR2dztcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcIi5wcm9ncmVzcy1yaW5nIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuXFxuICAgICZfX2JhY2tncm91bmQge1xcbiAgICAgICAgZmlsbDogbm9uZTtcXG4gICAgICAgIHN0cm9rZTogI2UwZTBlMDtcXG4gICAgICAgIHN0cm9rZS13aWR0aDogNztcXG4gICAgfVxcblxcbiAgICAmX19maWxsIHtcXG4gICAgICAgIGZpbGw6IG5vbmU7XFxuICAgICAgICBzdHJva2Utd2lkdGg6IDc7XFxuICAgICAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgICAgICBzdHJva2U6IEBibHVlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMC4zcyBlYXNlO1xcbiAgICB9XFxufVwiLFwiLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1yb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLXJvdGF0ZSB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgICAgIH1cXG59XCIsXCIuc3RhdGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgJl9fd3JhcHBlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBAcmVndWxhci1mb250O1xcbiAgICB9XFxufVxcblxcbi52YWx1ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IEByZWd1bGFyLWZvbnQ7XFxufVwiLFwiLnRvZ2dsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIFxcbiAgICAmX19pbnB1dCB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBoZWlnaHQ6IDA7ICAgICAgICBcXG4gICAgfVxcbiAgICAmX19pbnB1dDpjaGVja2VkICsgLnRvZ2dsZV9fc2xpZGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBibHVlO1xcbiAgICB9XFxuICAgICZfX2lucHV0OmNoZWNrZWQgKyAudG9nZ2xlX19zbGlkZXI6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XFxuICAgIH1cXG5cXG4gICAgJl9fc2xpZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC40czsgICAgICAgIFxcbiAgICB9XFxuICAgICZfX3NsaWRlcjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBsZWZ0OiAycHg7XFxuICAgICAgICBib3R0b206IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjUwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFByb2dyZXNzQmFyIHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBjb250YWluZXIsXHJcbiAgICBwcm9ncmVzc0NvbnRhaW5lclNlbGVjdG9yLCBcclxuICAgIHByb2dyZXNzU2VsZWN0b3IsIFxyXG4gICAgaW5wdXRTZWxlY3RvciwgXHJcbiAgICBhbmltYXRlU2VsZWN0b3IsIFxyXG4gICAgaGlkZVNlbGVjdG9yIFxyXG4gIH0pIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMucHJvZ3Jlc3NDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHByb2dyZXNzQ29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5wcm9ncmVzc0JhciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IocHJvZ3Jlc3NTZWxlY3Rvcik7XHJcbiAgICB0aGlzLnByb2dyZXNzSW5wdXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGlucHV0U2VsZWN0b3IpOyAgICBcclxuICAgIHRoaXMuYW5pbWF0ZVRvZ2dsZSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYW5pbWF0ZVNlbGVjdG9yKTtcclxuICAgIHRoaXMuaGlkZVRvZ2dsZSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoaGlkZVNlbGVjdG9yKTtcclxuICAgIHRoaXMuYW5pbWF0aW9uSW50ZXJ2YWwgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcblxyXG5pbml0KCkge1xyXG4gICAgdGhpcy5wcm9ncmVzc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdGhpcy5wcm9ncmVzc0Jhci5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSAyICogTWF0aC5QSSAqIHRoaXMucHJvZ3Jlc3NCYXIuZ2V0QXR0cmlidXRlKFwiclwiKTtcclxuICAgIHRoaXMucHJvZ3Jlc3NCYXIuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IDIgKiBNYXRoLlBJICogdGhpcy5wcm9ncmVzc0Jhci5nZXRBdHRyaWJ1dGUoXCJyXCIpO1xyXG4gIFxyXG4gICAgdGhpcy51cGRhdGVQcm9ncmVzcyh0aGlzLnByb2dyZXNzSW5wdXQudmFsdWUpO1xyXG5cclxuICAgIGlmICh0aGlzLmFuaW1hdGVUb2dnbGUpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmhpZGVUb2dnbGUpIHtcclxuICAgICAgICB0aGlzLmhpZGVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxudXBkYXRlUHJvZ3Jlc3ModmFsdWUpIHtcclxuICAgIGxldCByYWRpdXMgPSB0aGlzLnByb2dyZXNzQmFyLmdldEF0dHJpYnV0ZShcInJcIik7XHJcbiAgICBsZXQgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogcmFkaXVzO1xyXG4gICAgbGV0IG9mZnNldCA9IE1hdGgubWF4KDAsIGNpcmN1bWZlcmVuY2UgLSAodmFsdWUgLyAxMDApICogY2lyY3VtZmVyZW5jZSk7XHJcbiAgICB0aGlzLnByb2dyZXNzQmFyLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBvZmZzZXQ7XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJvZ3Jlc3NCYXIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXgubGVzc1wiXHJcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi9zaGFyZWQvcHJvZ3Jlc3NiYXInO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NiYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoe1xyXG4gICAgICAgIGNvbnRhaW5lcjogXCIucHJvZ3Jlc3MtYmFyLWluZGV4XCIsXHJcbiAgICAgICAgcHJvZ3Jlc3NDb250YWluZXJTZWxlY3RvcjogXCIucHJvZ3Jlc3MtYmFyLWluZGV4X19wcm9ncmVzcy1jb250YWluZXJcIixcclxuICAgICAgICBwcm9ncmVzc1NlbGVjdG9yOiBcIi5wcm9ncmVzcy1yaW5nX19maWxsXCIsXHJcbiAgICAgICAgaW5wdXRTZWxlY3RvcjogXCIudmFsdWVcIixcclxuICAgICAgICBhbmltYXRlU2VsZWN0b3I6IFwiLmFuaW1hdGVcIixcclxuICAgICAgICBoaWRlU2VsZWN0b3I6IFwiLmhpZGVcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nIChwcm9ncmVzc2Jhcik7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==