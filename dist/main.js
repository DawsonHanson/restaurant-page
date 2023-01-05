/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/game_sans_serif_7.ttf */ "./src/fonts/game_sans_serif_7.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/zerpixl-Regular.ttf */ "./src/fonts/zerpixl-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/coin-background.jpg */ "./src/imgs/coin-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *:before, *:after {\n  box-sizing: border-box;\n  padding: 0%;\n  margin: 0%;\n}\n\n@font-face {\n  font-family: 'sans7';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: 'zerpixl';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n  --light-blue: #a6c9c9;\n  --green: green;\n  --light-green: #c9e4ad;\n  --orange: #ffc440;\n  --light-orange: #fce59a;\n  --dark-orange: #f27a01;\n  --gold: gold;\n  --white: white;\n  --black: black;\n  --gradient: red, orange, yellow, green, blue, indigo, violet; \n}\n\nhtml { \n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat bottom center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\nbody {\n  display: grid;\n  height: 100vh;\n  grid-template: 56px 20px 2fr 20px 56px/ .6fr 2fr .6fr;\n}\n\nh1 {\n  font-family: 'sans7';\n  font-size: 3rem;\n  padding-top: 10px;\n}\n\nh2 {\n  font-family: 'sans7';\n  font-size: 1.6rem; \n  padding-top: 7px;\n}\n\nh3 {\n  font-size: 1.3rem;\n}\n\nh4 {\n  font-family: monospace;\n  font-size: 1rem;\n}\n\np, h3 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbutton {\n  all: unset;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  width: 86px;\n  height: 43px;\n  border-radius: 9px;\n  border: 3px solid var(--dark-orange);\n  color: var(--black);\n  background-color: var(--orange);\n}\n\nbutton:hover {\n  background-color: var(--light-orange);\n}\n\n.black-border {\n  border-color: var(--black);\n}\n\n.header, .footer {\n  background-color: var(--light-green);\n}\n\n.header {\n  display: flex;\n  grid-area: 1/ 1/ 2/ 4;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n}\n\n.footer {\n  grid-area: 5/ 1/ 6/ 4;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  grid-area: 3/ 2/ 4/ 3;\n  min-width: 776px;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 18px;\n  background-color: var(--light-blue);\n}\n\n.gradient-wrapper {\n  justify-self: center;\n  align-self: center;\n  height: 80%;\n  width: 80%;\n  padding: 8px;\n  border-radius: 18px;\n  background: linear-gradient(to right, var(--gradient));\n}\n\n.heading, .sub-heading, .review-block, .info-block, .menu-item-container, .contact-info {\n  height: 100%;\n  width: 100%;\n  border-radius: 18px;\n  color: var(--white);\n  background-color: var(--black);\n}\n\n.heading {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  align-items: center;\n  justify-items: center;\n  padding: 4px;\n}\n\n.heading > img {\n  height: 90%;\n  width: 90%;\n}\n\n.heading > img:first-child {\n  transform: rotate(-40deg);\n  justify-self: end;\n}\n\n.heading > img:last-child {\n  transform: rotate(40deg);\n  justify-self: start;\n}\n\n.sub-heading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n}\n\n.sub-heading > img {\n  height: 50%;\n  width: 10%;\n}\n\n.review-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 140px;\n  gap: 10px;\n  padding: 8px;\n}\n\n.review-block > img {\n  position: absolute;\n  align-self: center;\n  margin-top: -106px;\n  width: 108px;\n}\n\n.review-block > h3, .info-block > h3 {\n  font-family: 'zerpixl';\n}\n\n.info-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px;\n}\n\n.info-block > p {\n  align-self: center;\n}\n\n.menu-item-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n@keyframes border-pulsate {\n  14.2% {border-color: orange;}\n  28.4% {border-color: yellow;}\n  42.6% {border-color: green;}\n  56.8% {border-color: blue;}\n  71% {border-color: indigo;}\n  85.2% {border-color: violet;}\n}\n\n.menu-item-container > div:last-child > img, .contact-info > img {\n  width: 160px;\n  height: 160px;\n  border-radius: 6px;\n  border: 3px solid red;\n  animation: border-pulsate 10s infinite;\n}\n\n.menu-item-container > div:first-child, .menu-item-container > div:last-child {\n  gap: 10px;\n}\n\n.menu-item-container > div:first-child {\n  display: grid;\n}\n\n.menu-item-container > div:last-child {\n  display: flex;\n  align-items: center;\n}\n\n.menu-item-container > div:last-child > h4::first-letter {\n  color: var(--green);\n}\n\n.menu-item-container > div:last-child > h4 {\n  color: var(--gold);\n}\n\n.contact-info {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 1.8fr 160px;\n  padding: 8px;\n}\n\n.contact-info > img {\n  justify-self: end;\n}\n\n.contact-info > div {\n  display: grid;\n  gap: 3px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*, *:before, *:after {\n  box-sizing: border-box;\n  padding: 0%;\n  margin: 0%;\n}\n\n@font-face {\n  font-family: 'sans7';\n  src: url(./fonts/game_sans_serif_7.ttf);\n}\n\n@font-face {\n  font-family: 'zerpixl';\n  src: url(./fonts/zerpixl-Regular.ttf);\n}\n\n:root {\n  --light-blue: #a6c9c9;\n  --green: green;\n  --light-green: #c9e4ad;\n  --orange: #ffc440;\n  --light-orange: #fce59a;\n  --dark-orange: #f27a01;\n  --gold: gold;\n  --white: white;\n  --black: black;\n  --gradient: red, orange, yellow, green, blue, indigo, violet; \n}\n\nhtml { \n  background: url(./imgs/coin-background.jpg) no-repeat bottom center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\nbody {\n  display: grid;\n  height: 100vh;\n  grid-template: 56px 20px 2fr 20px 56px/ .6fr 2fr .6fr;\n}\n\nh1 {\n  font-family: 'sans7';\n  font-size: 3rem;\n  padding-top: 10px;\n}\n\nh2 {\n  font-family: 'sans7';\n  font-size: 1.6rem; \n  padding-top: 7px;\n}\n\nh3 {\n  font-size: 1.3rem;\n}\n\nh4 {\n  font-family: monospace;\n  font-size: 1rem;\n}\n\np, h3 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbutton {\n  all: unset;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  width: 86px;\n  height: 43px;\n  border-radius: 9px;\n  border: 3px solid var(--dark-orange);\n  color: var(--black);\n  background-color: var(--orange);\n}\n\nbutton:hover {\n  background-color: var(--light-orange);\n}\n\n.black-border {\n  border-color: var(--black);\n}\n\n.header, .footer {\n  background-color: var(--light-green);\n}\n\n.header {\n  display: flex;\n  grid-area: 1/ 1/ 2/ 4;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n}\n\n.footer {\n  grid-area: 5/ 1/ 6/ 4;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  grid-area: 3/ 2/ 4/ 3;\n  min-width: 776px;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 18px;\n  background-color: var(--light-blue);\n}\n\n.gradient-wrapper {\n  justify-self: center;\n  align-self: center;\n  height: 80%;\n  width: 80%;\n  padding: 8px;\n  border-radius: 18px;\n  background: linear-gradient(to right, var(--gradient));\n}\n\n.heading, .sub-heading, .review-block, .info-block, .menu-item-container, .contact-info {\n  height: 100%;\n  width: 100%;\n  border-radius: 18px;\n  color: var(--white);\n  background-color: var(--black);\n}\n\n.heading {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  align-items: center;\n  justify-items: center;\n  padding: 4px;\n}\n\n.heading > img {\n  height: 90%;\n  width: 90%;\n}\n\n.heading > img:first-child {\n  transform: rotate(-40deg);\n  justify-self: end;\n}\n\n.heading > img:last-child {\n  transform: rotate(40deg);\n  justify-self: start;\n}\n\n.sub-heading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n}\n\n.sub-heading > img {\n  height: 50%;\n  width: 10%;\n}\n\n.review-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 140px;\n  gap: 10px;\n  padding: 8px;\n}\n\n.review-block > img {\n  position: absolute;\n  align-self: center;\n  margin-top: -106px;\n  width: 108px;\n}\n\n.review-block > h3, .info-block > h3 {\n  font-family: 'zerpixl';\n}\n\n.info-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px;\n}\n\n.info-block > p {\n  align-self: center;\n}\n\n.menu-item-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n@keyframes border-pulsate {\n  14.2% {border-color: orange;}\n  28.4% {border-color: yellow;}\n  42.6% {border-color: green;}\n  56.8% {border-color: blue;}\n  71% {border-color: indigo;}\n  85.2% {border-color: violet;}\n}\n\n.menu-item-container > div:last-child > img, .contact-info > img {\n  width: 160px;\n  height: 160px;\n  border-radius: 6px;\n  border: 3px solid red;\n  animation: border-pulsate 10s infinite;\n}\n\n.menu-item-container > div:first-child, .menu-item-container > div:last-child {\n  gap: 10px;\n}\n\n.menu-item-container > div:first-child {\n  display: grid;\n}\n\n.menu-item-container > div:last-child {\n  display: flex;\n  align-items: center;\n}\n\n.menu-item-container > div:last-child > h4::first-letter {\n  color: var(--green);\n}\n\n.menu-item-container > div:last-child > h4 {\n  color: var(--gold);\n}\n\n.contact-info {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 1.8fr 160px;\n  padding: 8px;\n}\n\n.contact-info > img {\n  justify-self: end;\n}\n\n.contact-info > div {\n  display: grid;\n  gap: 3px;\n}"],"sourceRoot":""}]);
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDOM": () => (/* binding */ clearDOM),
/* harmony export */   "contactInfoBlock": () => (/* binding */ contactInfoBlock),
/* harmony export */   "heading": () => (/* binding */ heading),
/* harmony export */   "infoBlock": () => (/* binding */ infoBlock),
/* harmony export */   "menuItem": () => (/* binding */ menuItem),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "reviewBlock": () => (/* binding */ reviewBlock),
/* harmony export */   "subHeading": () => (/* binding */ subHeading)
/* harmony export */ });
const content = document.createElement('div')
content.classList.add('container')

const heading = (text, imgSrc) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let h1 = document.createElement('h1')
  let img1 = document.createElement('img')
  let img2 = document.createElement('img')
  h1.textContent = text
  img1.src = imgSrc
  img2.src = imgSrc
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('heading')
  element.appendChild(img1)
  element.appendChild(h1)
  element.appendChild(img2)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

const subHeading = (text, imgSrc) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let h2 = document.createElement('h2')
  let img = document.createElement('img')
  h2.textContent = text
  img.src = imgSrc
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('sub-heading')
  element.appendChild(h2)
  element.appendChild(img)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

const reviewBlock = (review, name, imgSrc) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let p = document.createElement('p')
  let h3 = document.createElement('h3')
  let img = document.createElement('img')
  p.textContent = review
  h3.textContent = name
  img.src = imgSrc
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('review-block')
  element.appendChild(img)
  element.appendChild(p)
  element.appendChild(h3)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

const infoBlock = (name, info) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let p = document.createElement('p')
  let h3 = document.createElement('h3')
  p.textContent = info
  h3.textContent = name
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('info-block')
  element.appendChild(h3)
  element.appendChild(p)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

const menuItem = (name, info, price, imgSrc) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let subElement1 = document.createElement('div')
  let subElement2 = document.createElement('div')
  let p = document.createElement('p')
  let h3 = document.createElement('h3')
  let h4 = document.createElement('h4')
  let img = document.createElement('img')
  p.textContent = info
  h3.textContent = name
  h4.textContent = `$${price}`
  img.src = imgSrc
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('menu-item-container')
  subElement1.appendChild(h3)
  subElement1.appendChild(p)
  subElement2.appendChild(h4)
  subElement2.appendChild(img)
  element.appendChild(subElement1)
  element.appendChild(subElement2)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

const contactInfoBlock = (name, position, number, email, imgSrc) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let contactInfo = document.createElement('div')
  let p1 = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')
  let h3 = document.createElement('h3')
  let img = document.createElement('img')
  p1.textContent = position
  p2.textContent = number
  p3.textContent = email
  h3.textContent = name
  img.src = imgSrc
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('contact-info')
  contactInfo.appendChild(p1)
  contactInfo.appendChild(p2)
  contactInfo.appendChild(p3)
  element.appendChild(h3)
  element.appendChild(contactInfo)
  element.appendChild(img)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

const render = () => {
  document.body.appendChild(content)
}

const clearDOM = () => {
  let element = document.querySelector('.container');
  while (element.lastElementChild) {
    element.removeChild(element.lastElementChild)
  }
}

/***/ }),

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/controller.svg */ "./src/imgs/controller.svg");
/* harmony import */ var _imgs_skarbrand_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/skarbrand.png */ "./src/imgs/skarbrand.png");
/* harmony import */ var _imgs_cortana_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/cortana.png */ "./src/imgs/cortana.png");
/* harmony import */ var _imgs_yoshi_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/yoshi.png */ "./src/imgs/yoshi.png");
/* harmony import */ var _imgs_gordon_freeman_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/gordon-freeman.png */ "./src/imgs/gordon-freeman.png");







const contactPage = () => {

  (0,_components__WEBPACK_IMPORTED_MODULE_0__.clearDOM)()

  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.heading)('Contact Us', _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.contactInfoBlock)('Skarbrand', 'Chef', '(123) 444-5554', 'ExiledOne@RealEmail.com', _imgs_skarbrand_png__WEBPACK_IMPORTED_MODULE_2__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.contactInfoBlock)('Cortana', 'Manager', '(123) 444-5555', 'MasterAI@RealEmail.com', _imgs_cortana_png__WEBPACK_IMPORTED_MODULE_3__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.contactInfoBlock)('Yoshi', 'Waiter', '(123) 444-5556', 'GreenDinosaur@RealEmail.com', _imgs_yoshi_png__WEBPACK_IMPORTED_MODULE_4__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.contactInfoBlock)('Gordon Freeman', 'Maintenance', '(123) 444-5557', 'BlackMesaScientist@RealEmail.com', _imgs_gordon_freeman_png__WEBPACK_IMPORTED_MODULE_5__)
}

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/controller.svg */ "./src/imgs/controller.svg");
/* harmony import */ var _imgs_gamer_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/gamer.svg */ "./src/imgs/gamer.svg");




const homePage = () => {

  (0,_components__WEBPACK_IMPORTED_MODULE_0__.clearDOM)()
  
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.heading)('Gamer Eats', _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.reviewBlock)('When it was 3 in the morning and my stomach started rumbling, I knew immediately that Gamer Eats was the place for me! I was greeted by very friendly staff, service was quick and the food was amazing.', 'Awesome Pro Gamer', _imgs_gamer_svg__WEBPACK_IMPORTED_MODULE_2__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.infoBlock)('Hours', 'Here at Gamer Eats we are proud to announce our new 24/7 hours of operation, as no matter the time nor day we want to serve the pro-gamer in everyone!')
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.infoBlock)('Location', '#1337 Who-Knows Blvd SE, Calgary AB, W1A S2D')
}


/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/controller.svg */ "./src/imgs/controller.svg");
/* harmony import */ var _imgs_gem_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/gem.svg */ "./src/imgs/gem.svg");
/* harmony import */ var _imgs_coffee_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/coffee.jpg */ "./src/imgs/coffee.jpg");
/* harmony import */ var _imgs_mtndew_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/mtndew.png */ "./src/imgs/mtndew.png");
/* harmony import */ var _imgs_energy_drink_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/energy-drink.jpg */ "./src/imgs/energy-drink.jpg");
/* harmony import */ var _imgs_doritos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/doritos.png */ "./src/imgs/doritos.png");
/* harmony import */ var _imgs_toast_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/toast.jpg */ "./src/imgs/toast.jpg");
/* harmony import */ var _imgs_pizza_pop_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgs/pizza-pop.png */ "./src/imgs/pizza-pop.png");
/* harmony import */ var _imgs_bagel_bites_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imgs/bagel-bites.png */ "./src/imgs/bagel-bites.png");
/* harmony import */ var _imgs_cheese_puffs_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imgs/cheese-puffs.jpg */ "./src/imgs/cheese-puffs.jpg");
/* harmony import */ var _imgs_chicken_nuggets_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imgs/chicken-nuggets.png */ "./src/imgs/chicken-nuggets.png");
/* harmony import */ var _imgs_fruit_veg_platter_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./imgs/fruit-veg-platter.jpg */ "./src/imgs/fruit-veg-platter.jpg");














const menuPage = () => {
  
  (0,_components__WEBPACK_IMPORTED_MODULE_0__.clearDOM)()

  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.heading)('Menu', _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_1__)

  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.subHeading)('Beverages', _imgs_gem_svg__WEBPACK_IMPORTED_MODULE_2__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Coffee', 'Can\'t go wrong with good ol coffee, mix in a bunch of sugar and you\'ll be good for hours.', '3.99', _imgs_coffee_jpg__WEBPACK_IMPORTED_MODULE_3__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Mountain Dew\u2122', 'Glorious Mountain Dew in either original, Code Red, Voltage or Baja Blast flavors.', '4.99', _imgs_mtndew_png__WEBPACK_IMPORTED_MODULE_4__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Energy Drinks', 'We offer Monster, RedBull and RedRain. Who doesn\'t love a good energy drink.', '6.99', _imgs_energy_drink_jpg__WEBPACK_IMPORTED_MODULE_5__)

  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.subHeading)('Sides', _imgs_gem_svg__WEBPACK_IMPORTED_MODULE_2__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Doritos\u2122', 'A classic bag of original Doritos, pairs wonderfully with our selection of Mountain Dew.', '5.99', _imgs_doritos_png__WEBPACK_IMPORTED_MODULE_6__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Toast', '2 slices of bread toasted to you\'r liking, with condiment options of jam, butter, peanut butter and Nutella spread.', '2.99', _imgs_toast_jpg__WEBPACK_IMPORTED_MODULE_7__)

  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.subHeading)('Main Dishes', _imgs_gem_svg__WEBPACK_IMPORTED_MODULE_2__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Pizza Pops\u2122', '2 Good old Pizza Pops microwaved to perfection, quick and easy so you can get back to what you love doing most, gaming!', '4.99', _imgs_pizza_pop_png__WEBPACK_IMPORTED_MODULE_8__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Bagel Bites\u2122', '10 classic cheese and pepperoni Bagel Bites, enough to hold over any pro gamer.', '6.99', _imgs_bagel_bites_png__WEBPACK_IMPORTED_MODULE_9__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Cheese Puffs', 'With our home made four cheese blend and various spices, these 12 cheesy doughy things are the perfect meal replacement for on the go gamers.', '10.99', _imgs_cheese_puffs_jpg__WEBPACK_IMPORTED_MODULE_10__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Chicken Nuggets', 'From freezer to oven to you\'r plate, you\'ll get 8 perfectly breaded chicken nugget patties that just cant\'t be beat! Comes with a choice of dipping sauce.', '8.99', _imgs_chicken_nuggets_png__WEBPACK_IMPORTED_MODULE_11__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Fruits & Vegetables', 'Scary and foreign to many gamers, this plate of finely selected fruits and vegetables will aid in gaming ability. By helping one\'s eye sight and preventing scurvy! Comes with a glass of water... you should probably drink it.', '6.99', _imgs_fruit_veg_platter_jpg__WEBPACK_IMPORTED_MODULE_12__)
}

/***/ }),

/***/ "./src/fonts/game_sans_serif_7.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/game_sans_serif_7.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1df39ac9316fa8b926a.ttf";

/***/ }),

/***/ "./src/fonts/zerpixl-Regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/zerpixl-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69e5ed17946dd0ced7cc.ttf";

/***/ }),

/***/ "./src/imgs/bagel-bites.png":
/*!**********************************!*\
  !*** ./src/imgs/bagel-bites.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71fba88da634ec70c8a9.png";

/***/ }),

/***/ "./src/imgs/cheese-puffs.jpg":
/*!***********************************!*\
  !*** ./src/imgs/cheese-puffs.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4f76ca7a560ed09616f.jpg";

/***/ }),

/***/ "./src/imgs/chicken-nuggets.png":
/*!**************************************!*\
  !*** ./src/imgs/chicken-nuggets.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd9af8268c9779f0b0dc.png";

/***/ }),

/***/ "./src/imgs/coffee.jpg":
/*!*****************************!*\
  !*** ./src/imgs/coffee.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6bb047f7606badd44ee.jpg";

/***/ }),

/***/ "./src/imgs/coin-background.jpg":
/*!**************************************!*\
  !*** ./src/imgs/coin-background.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f38b60080c8bdfafd028.jpg";

/***/ }),

/***/ "./src/imgs/controller.svg":
/*!*********************************!*\
  !*** ./src/imgs/controller.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b63beb8eb42e79338519.svg";

/***/ }),

/***/ "./src/imgs/cortana.png":
/*!******************************!*\
  !*** ./src/imgs/cortana.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bf055a53d9b993af299.png";

/***/ }),

/***/ "./src/imgs/doritos.png":
/*!******************************!*\
  !*** ./src/imgs/doritos.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efed98f29ade23858cba.png";

/***/ }),

/***/ "./src/imgs/energy-drink.jpg":
/*!***********************************!*\
  !*** ./src/imgs/energy-drink.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbe954cebcd42d56bc06.jpg";

/***/ }),

/***/ "./src/imgs/fruit-veg-platter.jpg":
/*!****************************************!*\
  !*** ./src/imgs/fruit-veg-platter.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "898560fe216b467a5788.jpg";

/***/ }),

/***/ "./src/imgs/gamer.svg":
/*!****************************!*\
  !*** ./src/imgs/gamer.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49d35bd916c3c08e371e.svg";

/***/ }),

/***/ "./src/imgs/gem.svg":
/*!**************************!*\
  !*** ./src/imgs/gem.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "747f01d446e88c7de0f7.svg";

/***/ }),

/***/ "./src/imgs/gordon-freeman.png":
/*!*************************************!*\
  !*** ./src/imgs/gordon-freeman.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b803750f8f09b293cd29.png";

/***/ }),

/***/ "./src/imgs/mtndew.png":
/*!*****************************!*\
  !*** ./src/imgs/mtndew.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c57d920dfac6a197517.png";

/***/ }),

/***/ "./src/imgs/pizza-pop.png":
/*!********************************!*\
  !*** ./src/imgs/pizza-pop.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46661ed4778c5ed150cb.png";

/***/ }),

/***/ "./src/imgs/skarbrand.png":
/*!********************************!*\
  !*** ./src/imgs/skarbrand.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9805f00c0338552e6609.png";

/***/ }),

/***/ "./src/imgs/toast.jpg":
/*!****************************!*\
  !*** ./src/imgs/toast.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03278652640cf76b51b2.jpg";

/***/ }),

/***/ "./src/imgs/yoshi.png":
/*!****************************!*\
  !*** ./src/imgs/yoshi.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "182ca9d6c62e271db137.png";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/components.js");






const runPage = (function() {

  const headerElement = document.createElement('div')
  headerElement.classList.add('header')
  document.body.appendChild(headerElement)

  const footerElement = document.createElement('div')
  footerElement.classList.add('footer')
  document.body.appendChild(footerElement)

  const init = function() {
    _createElements()
    _bindEvents()
    ;(0,_components__WEBPACK_IMPORTED_MODULE_4__.render)()
    ;(0,_home_page__WEBPACK_IMPORTED_MODULE_1__.homePage)()
  }

  const _btn = function(text, i) {
    let btn = document.createElement('button')
    btn.id = `btn${i}`
    btn.textContent = text
    if (btn.id == 'btn1') {
      btn.classList.add('black-border')
    }
    headerElement.appendChild(btn)
  }

  const _createElements = function() {
    _btn('Home', 1)
    _btn('Menu', 2)
    _btn('Contact', 3)
  }

  const _changeButtonBorder = function (a, b, c) {
    document.getElementById(`btn${a}`).classList.add('black-border')
    document.getElementById(`btn${b}`).classList.remove('black-border')
    document.getElementById(`btn${c}`).classList.remove('black-border')
  }

  const _homeFunc = function () {
    ;(0,_home_page__WEBPACK_IMPORTED_MODULE_1__.homePage)()
    _changeButtonBorder(1, 2, 3)
  }

  const _menuFunc = function () {
    ;(0,_menu_page__WEBPACK_IMPORTED_MODULE_2__.menuPage)()
    _changeButtonBorder(2, 1, 3)
  }

  const _contactFunc = function () {
    ;(0,_contact_page__WEBPACK_IMPORTED_MODULE_3__.contactPage)()
    _changeButtonBorder(3, 1, 2)
  }


  const _bindEvents = function() {
    document.getElementById('btn1').addEventListener('click', _homeFunc)
    document.getElementById('btn2').addEventListener('click', _menuFunc)
    document.getElementById('btn3').addEventListener('click', _contactFunc)
  }
  
  return { init }

})();

runPage.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMsbUlBQThDO0FBQzFGLDRDQUE0QyxpSUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGdFQUFnRSwyQkFBMkIsZ0JBQWdCLGVBQWUsR0FBRyxnQkFBZ0IseUJBQXlCLHlEQUF5RCxHQUFHLGdCQUFnQiwyQkFBMkIseURBQXlELEdBQUcsV0FBVywwQkFBMEIsbUJBQW1CLDJCQUEyQixzQkFBc0IsNEJBQTRCLDJCQUEyQixpQkFBaUIsbUJBQW1CLG1CQUFtQixrRUFBa0UsR0FBRyxXQUFXLCtGQUErRixtQ0FBbUMsZ0NBQWdDLDhCQUE4QiwyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQixrQkFBa0IsMERBQTBELEdBQUcsUUFBUSx5QkFBeUIsb0JBQW9CLHNCQUFzQixHQUFHLFFBQVEseUJBQXlCLHVCQUF1QixxQkFBcUIsR0FBRyxRQUFRLHNCQUFzQixHQUFHLFFBQVEsMkJBQTJCLG9CQUFvQixHQUFHLFdBQVcscURBQXFELEdBQUcsWUFBWSxlQUFlLHFEQUFxRCx1QkFBdUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIseUNBQXlDLHdCQUF3QixvQ0FBb0MsR0FBRyxrQkFBa0IsMENBQTBDLEdBQUcsbUJBQW1CLCtCQUErQixHQUFHLHNCQUFzQix5Q0FBeUMsR0FBRyxhQUFhLGtCQUFrQiwwQkFBMEIsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsYUFBYSwwQkFBMEIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQiwwQkFBMEIscUJBQXFCLGNBQWMsa0JBQWtCLHdCQUF3Qix3Q0FBd0MsR0FBRyx1QkFBdUIseUJBQXlCLHVCQUF1QixnQkFBZ0IsZUFBZSxpQkFBaUIsd0JBQXdCLDJEQUEyRCxHQUFHLDZGQUE2RixpQkFBaUIsZ0JBQWdCLHdCQUF3Qix3QkFBd0IsbUNBQW1DLEdBQUcsY0FBYyxrQkFBa0IsdUNBQXVDLHdCQUF3QiwwQkFBMEIsaUJBQWlCLEdBQUcsb0JBQW9CLGdCQUFnQixlQUFlLEdBQUcsZ0NBQWdDLDhCQUE4QixzQkFBc0IsR0FBRywrQkFBK0IsNkJBQTZCLHdCQUF3QixHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLDRCQUE0QixpQkFBaUIsR0FBRyx3QkFBd0IsZ0JBQWdCLGVBQWUsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsc0JBQXNCLGNBQWMsaUJBQWlCLEdBQUcseUJBQXlCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLGlCQUFpQixHQUFHLDBDQUEwQywyQkFBMkIsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsYUFBYSxpQkFBaUIsR0FBRyxxQkFBcUIsdUJBQXVCLEdBQUcsMEJBQTBCLGtCQUFrQix3QkFBd0IsbUNBQW1DLGlCQUFpQixHQUFHLCtCQUErQixXQUFXLHNCQUFzQixXQUFXLHNCQUFzQixXQUFXLHFCQUFxQixXQUFXLG9CQUFvQixTQUFTLHNCQUFzQixXQUFXLHNCQUFzQixHQUFHLHNFQUFzRSxpQkFBaUIsa0JBQWtCLHVCQUF1QiwwQkFBMEIsMkNBQTJDLEdBQUcsbUZBQW1GLGNBQWMsR0FBRyw0Q0FBNEMsa0JBQWtCLEdBQUcsMkNBQTJDLGtCQUFrQix3QkFBd0IsR0FBRyw4REFBOEQsd0JBQXdCLEdBQUcsZ0RBQWdELHVCQUF1QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLDJDQUEyQyxpQkFBaUIsR0FBRyx5QkFBeUIsc0JBQXNCLEdBQUcseUJBQXlCLGtCQUFrQixhQUFhLEdBQUcsT0FBTyxpRkFBaUYsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxL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ckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2lCO0FBQ0E7QUFDTTtBQUNQOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQU07QUFDVixJQUFJLHFEQUFRO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixFQUFFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLEVBQUU7QUFDcEMsa0NBQWtDLEVBQUU7QUFDcEMsa0NBQWtDLEVBQUU7QUFDcEM7O0FBRUE7QUFDQSxJQUFJLHFEQUFRO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLElBQUkscURBQVE7QUFDWjtBQUNBOztBQUVBO0FBQ0EsSUFBSSwyREFBVztBQUNmO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVgsQ0FBQzs7QUFFRCxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9nYW1lX3NhbnNfc2VyaWZfNy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3plcnBpeGwtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvY29pbi1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgbWFyZ2luOiAwJTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3NhbnM3JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3plcnBpeGwnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWxpZ2h0LWJsdWU6ICNhNmM5Yzk7XFxuICAtLWdyZWVuOiBncmVlbjtcXG4gIC0tbGlnaHQtZ3JlZW46ICNjOWU0YWQ7XFxuICAtLW9yYW5nZTogI2ZmYzQ0MDtcXG4gIC0tbGlnaHQtb3JhbmdlOiAjZmNlNTlhO1xcbiAgLS1kYXJrLW9yYW5nZTogI2YyN2EwMTtcXG4gIC0tZ29sZDogZ29sZDtcXG4gIC0td2hpdGU6IHdoaXRlO1xcbiAgLS1ibGFjazogYmxhY2s7XFxuICAtLWdyYWRpZW50OiByZWQsIG9yYW5nZSwgeWVsbG93LCBncmVlbiwgYmx1ZSwgaW5kaWdvLCB2aW9sZXQ7IFxcbn1cXG5cXG5odG1sIHsgXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyIGZpeGVkOyBcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZTogNTZweCAyMHB4IDJmciAyMHB4IDU2cHgvIC42ZnIgMmZyIC42ZnI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnc2FuczcnO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiAnc2FuczcnO1xcbiAgZm9udC1zaXplOiAxLjZyZW07IFxcbiAgcGFkZGluZy10b3A6IDdweDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbnAsIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogODZweDtcXG4gIGhlaWdodDogNDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWRhcmstb3JhbmdlKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtb3JhbmdlKTtcXG59XFxuXFxuLmJsYWNrLWJvcmRlciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmhlYWRlciwgLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtYXJlYTogMS8gMS8gMi8gNDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTRweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDUvIDEvIDYvIDQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBncmlkLWFyZWE6IDMvIDIvIDQvIDM7XFxuICBtaW4td2lkdGg6IDc3NnB4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG59XFxuXFxuLmdyYWRpZW50LXdyYXBwZXIge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1ncmFkaWVudCkpO1xcbn1cXG5cXG4uaGVhZGluZywgLnN1Yi1oZWFkaW5nLCAucmV2aWV3LWJsb2NrLCAuaW5mby1ibG9jaywgLm1lbnUtaXRlbS1jb250YWluZXIsIC5jb250YWN0LWluZm8ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4uaGVhZGluZyA+IGltZyB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5oZWFkaW5nID4gaW1nOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmhlYWRpbmcgPiBpbWc6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nID4gaW1nIHtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxuLnJldmlldy1ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTQwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5yZXZpZXctYmxvY2sgPiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTEwNnB4O1xcbiAgd2lkdGg6IDEwOHB4O1xcbn1cXG5cXG4ucmV2aWV3LWJsb2NrID4gaDMsIC5pbmZvLWJsb2NrID4gaDMge1xcbiAgZm9udC1mYW1pbHk6ICd6ZXJwaXhsJztcXG59XFxuXFxuLmluZm8tYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uaW5mby1ibG9jayA+IHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuQGtleWZyYW1lcyBib3JkZXItcHVsc2F0ZSB7XFxuICAxNC4yJSB7Ym9yZGVyLWNvbG9yOiBvcmFuZ2U7fVxcbiAgMjguNCUge2JvcmRlci1jb2xvcjogeWVsbG93O31cXG4gIDQyLjYlIHtib3JkZXItY29sb3I6IGdyZWVuO31cXG4gIDU2LjglIHtib3JkZXItY29sb3I6IGJsdWU7fVxcbiAgNzElIHtib3JkZXItY29sb3I6IGluZGlnbzt9XFxuICA4NS4yJSB7Ym9yZGVyLWNvbG9yOiB2aW9sZXQ7fVxcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkID4gaW1nLCAuY29udGFjdC1pbmZvID4gaW1nIHtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogMTYwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBhbmltYXRpb246IGJvcmRlci1wdWxzYXRlIDEwcyBpbmZpbml0ZTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6Zmlyc3QtY2hpbGQsIC5tZW51LWl0ZW0tY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkID4gaDQ6OmZpcnN0LWxldHRlciB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkID4gaDQge1xcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS44ZnIgMTYwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5jb250YWN0LWluZm8gPiBpbWcge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5jb250YWN0LWluZm8gPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogM3B4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxpRkFBeUU7RUFDekUsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTyxvQkFBb0IsQ0FBQztFQUM1QixPQUFPLG9CQUFvQixDQUFDO0VBQzVCLE9BQU8sbUJBQW1CLENBQUM7RUFDM0IsT0FBTyxrQkFBa0IsQ0FBQztFQUMxQixLQUFLLG9CQUFvQixDQUFDO0VBQzFCLE9BQU8sb0JBQW9CLENBQUM7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgbWFyZ2luOiAwJTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3NhbnM3JztcXG4gIHNyYzogdXJsKC4vZm9udHMvZ2FtZV9zYW5zX3NlcmlmXzcudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3plcnBpeGwnO1xcbiAgc3JjOiB1cmwoLi9mb250cy96ZXJwaXhsLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1ibHVlOiAjYTZjOWM5O1xcbiAgLS1ncmVlbjogZ3JlZW47XFxuICAtLWxpZ2h0LWdyZWVuOiAjYzllNGFkO1xcbiAgLS1vcmFuZ2U6ICNmZmM0NDA7XFxuICAtLWxpZ2h0LW9yYW5nZTogI2ZjZTU5YTtcXG4gIC0tZGFyay1vcmFuZ2U6ICNmMjdhMDE7XFxuICAtLWdvbGQ6IGdvbGQ7XFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tYmxhY2s6IGJsYWNrO1xcbiAgLS1ncmFkaWVudDogcmVkLCBvcmFuZ2UsIHllbGxvdywgZ3JlZW4sIGJsdWUsIGluZGlnbywgdmlvbGV0OyBcXG59XFxuXFxuaHRtbCB7IFxcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1ncy9jb2luLWJhY2tncm91bmQuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciBmaXhlZDsgXFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGU6IDU2cHggMjBweCAyZnIgMjBweCA1NnB4LyAuNmZyIDJmciAuNmZyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ3NhbnM3JztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LWZhbWlseTogJ3NhbnM3JztcXG4gIGZvbnQtc2l6ZTogMS42cmVtOyBcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5wLCBoMyB7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDg2cHg7XFxuICBoZWlnaHQ6IDQzcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW9yYW5nZSk7XFxufVxcblxcbi5ibGFjay1ib3JkZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5oZWFkZXIsIC5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IDEvIDEvIDIvIDQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE0cHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiA1LyAxLyA2LyA0O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1hcmVhOiAzLyAyLyA0LyAzO1xcbiAgbWluLXdpZHRoOiA3NzZweDtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxufVxcblxcbi5ncmFkaWVudC13cmFwcGVyIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JhZGllbnQpKTtcXG59XFxuXFxuLmhlYWRpbmcsIC5zdWItaGVhZGluZywgLnJldmlldy1ibG9jaywgLmluZm8tYmxvY2ssIC5tZW51LWl0ZW0tY29udGFpbmVyLCAuY29udGFjdC1pbmZvIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLmhlYWRpbmcgPiBpbWcge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uaGVhZGluZyA+IGltZzpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5oZWFkaW5nID4gaW1nOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5zdWItaGVhZGluZyA+IGltZyB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5yZXZpZXctYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ucmV2aWV3LWJsb2NrID4gaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC0xMDZweDtcXG4gIHdpZHRoOiAxMDhweDtcXG59XFxuXFxuLnJldmlldy1ibG9jayA+IGgzLCAuaW5mby1ibG9jayA+IGgzIHtcXG4gIGZvbnQtZmFtaWx5OiAnemVycGl4bCc7XFxufVxcblxcbi5pbmZvLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmluZm8tYmxvY2sgPiBwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgYm9yZGVyLXB1bHNhdGUge1xcbiAgMTQuMiUge2JvcmRlci1jb2xvcjogb3JhbmdlO31cXG4gIDI4LjQlIHtib3JkZXItY29sb3I6IHllbGxvdzt9XFxuICA0Mi42JSB7Ym9yZGVyLWNvbG9yOiBncmVlbjt9XFxuICA1Ni44JSB7Ym9yZGVyLWNvbG9yOiBibHVlO31cXG4gIDcxJSB7Ym9yZGVyLWNvbG9yOiBpbmRpZ287fVxcbiAgODUuMiUge2JvcmRlci1jb2xvcjogdmlvbGV0O31cXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCA+IGltZywgLmNvbnRhY3QtaW5mbyA+IGltZyB7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbiAgYW5pbWF0aW9uOiBib3JkZXItcHVsc2F0ZSAxMHMgaW5maW5pdGU7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyID4gZGl2OmZpcnN0LWNoaWxkLCAubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCA+IGg0OjpmaXJzdC1sZXR0ZXIge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCA+IGg0IHtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuOGZyIDE2MHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uY29udGFjdC1pbmZvID4gaW1nIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDNweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXG5cbmV4cG9ydCBjb25zdCBoZWFkaW5nID0gKHRleHQsIGltZ1NyYykgPT4ge1xuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBsZXQgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGxldCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgaDEudGV4dENvbnRlbnQgPSB0ZXh0XG4gIGltZzEuc3JjID0gaW1nU3JjXG4gIGltZzIuc3JjID0gaW1nU3JjXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ3JhZGllbnQtd3JhcHBlcicpXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nMSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChoMSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbWcyKVxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcilcbn1cblxuZXhwb3J0IGNvbnN0IHN1YkhlYWRpbmcgPSAodGV4dCwgaW1nU3JjKSA9PiB7XG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICBoMi50ZXh0Q29udGVudCA9IHRleHRcbiAgaW1nLnNyYyA9IGltZ1NyY1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2dyYWRpZW50LXdyYXBwZXInKVxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N1Yi1oZWFkaW5nJylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChoMilcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbWcpXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKVxufVxuXG5leHBvcnQgY29uc3QgcmV2aWV3QmxvY2sgPSAocmV2aWV3LCBuYW1lLCBpbWdTcmMpID0+IHtcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIHAudGV4dENvbnRlbnQgPSByZXZpZXdcbiAgaDMudGV4dENvbnRlbnQgPSBuYW1lXG4gIGltZy5zcmMgPSBpbWdTcmNcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdncmFkaWVudC13cmFwcGVyJylcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZXZpZXctYmxvY2snKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGltZylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChwKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGgzKVxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcilcbn1cblxuZXhwb3J0IGNvbnN0IGluZm9CbG9jayA9IChuYW1lLCBpbmZvKSA9PiB7XG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIHAudGV4dENvbnRlbnQgPSBpbmZvXG4gIGgzLnRleHRDb250ZW50ID0gbmFtZVxuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2dyYWRpZW50LXdyYXBwZXInKVxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luZm8tYmxvY2snKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGgzKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHApXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKVxufVxuXG5leHBvcnQgY29uc3QgbWVudUl0ZW0gPSAobmFtZSwgaW5mbywgcHJpY2UsIGltZ1NyYykgPT4ge1xuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IHN1YkVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IHN1YkVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICBwLnRleHRDb250ZW50ID0gaW5mb1xuICBoMy50ZXh0Q29udGVudCA9IG5hbWVcbiAgaDQudGV4dENvbnRlbnQgPSBgJCR7cHJpY2V9YFxuICBpbWcuc3JjID0gaW1nU3JjXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ3JhZGllbnQtd3JhcHBlcicpXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpXG4gIHN1YkVsZW1lbnQxLmFwcGVuZENoaWxkKGgzKVxuICBzdWJFbGVtZW50MS5hcHBlbmRDaGlsZChwKVxuICBzdWJFbGVtZW50Mi5hcHBlbmRDaGlsZChoNClcbiAgc3ViRWxlbWVudDIuYXBwZW5kQ2hpbGQoaW1nKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHN1YkVsZW1lbnQxKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHN1YkVsZW1lbnQyKVxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcilcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RJbmZvQmxvY2sgPSAobmFtZSwgcG9zaXRpb24sIG51bWJlciwgZW1haWwsIGltZ1NyYykgPT4ge1xuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBsZXQgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgcDEudGV4dENvbnRlbnQgPSBwb3NpdGlvblxuICBwMi50ZXh0Q29udGVudCA9IG51bWJlclxuICBwMy50ZXh0Q29udGVudCA9IGVtYWlsXG4gIGgzLnRleHRDb250ZW50ID0gbmFtZVxuICBpbWcuc3JjID0gaW1nU3JjXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ3JhZGllbnQtd3JhcHBlcicpXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJylcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocDEpXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHAyKVxuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwMylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChoMylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWN0SW5mbylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbWcpXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKVxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXG59XG5cbmV4cG9ydCBjb25zdCBjbGVhckRPTSA9ICgpID0+IHtcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIHdoaWxlIChlbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZClcbiAgfVxufSIsImltcG9ydCB7IGhlYWRpbmcsIGNsZWFyRE9NLCBjb250YWN0SW5mb0Jsb2NrIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXG5pbXBvcnQgY29udHJvbGxlckltZyBmcm9tICcuL2ltZ3MvY29udHJvbGxlci5zdmcnXG5pbXBvcnQgc2thcmJyYW5kSW1nIGZyb20gJy4vaW1ncy9za2FyYnJhbmQucG5nJ1xuaW1wb3J0IGNvcnRhbmFJbWcgZnJvbSAnLi9pbWdzL2NvcnRhbmEucG5nJ1xuaW1wb3J0IHlvc2hpSW1nIGZyb20gJy4vaW1ncy95b3NoaS5wbmcnXG5pbXBvcnQgZ29yZG9uRnJlZW1hbkltZyBmcm9tICcuL2ltZ3MvZ29yZG9uLWZyZWVtYW4ucG5nJ1xuXG5leHBvcnQgY29uc3QgY29udGFjdFBhZ2UgPSAoKSA9PiB7XG5cbiAgY2xlYXJET00oKVxuXG4gIGhlYWRpbmcoJ0NvbnRhY3QgVXMnLCBjb250cm9sbGVySW1nKVxuICBjb250YWN0SW5mb0Jsb2NrKCdTa2FyYnJhbmQnLCAnQ2hlZicsICcoMTIzKSA0NDQtNTU1NCcsICdFeGlsZWRPbmVAUmVhbEVtYWlsLmNvbScsIHNrYXJicmFuZEltZylcbiAgY29udGFjdEluZm9CbG9jaygnQ29ydGFuYScsICdNYW5hZ2VyJywgJygxMjMpIDQ0NC01NTU1JywgJ01hc3RlckFJQFJlYWxFbWFpbC5jb20nLCBjb3J0YW5hSW1nKVxuICBjb250YWN0SW5mb0Jsb2NrKCdZb3NoaScsICdXYWl0ZXInLCAnKDEyMykgNDQ0LTU1NTYnLCAnR3JlZW5EaW5vc2F1ckBSZWFsRW1haWwuY29tJywgeW9zaGlJbWcpXG4gIGNvbnRhY3RJbmZvQmxvY2soJ0dvcmRvbiBGcmVlbWFuJywgJ01haW50ZW5hbmNlJywgJygxMjMpIDQ0NC01NTU3JywgJ0JsYWNrTWVzYVNjaWVudGlzdEBSZWFsRW1haWwuY29tJywgZ29yZG9uRnJlZW1hbkltZylcbn0iLCJpbXBvcnQgeyBoZWFkaW5nLCByZXZpZXdCbG9jaywgaW5mb0Jsb2NrLCBjbGVhckRPTSB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxuaW1wb3J0IGNvbnRyb2xsZXJJbWcgZnJvbSAnLi9pbWdzL2NvbnRyb2xsZXIuc3ZnJ1xuaW1wb3J0IGdhbWVySW1nIGZyb20gJy4vaW1ncy9nYW1lci5zdmcnXG5cbmV4cG9ydCBjb25zdCBob21lUGFnZSA9ICgpID0+IHtcblxuICBjbGVhckRPTSgpXG4gIFxuICBoZWFkaW5nKCdHYW1lciBFYXRzJywgY29udHJvbGxlckltZylcbiAgcmV2aWV3QmxvY2soJ1doZW4gaXQgd2FzIDMgaW4gdGhlIG1vcm5pbmcgYW5kIG15IHN0b21hY2ggc3RhcnRlZCBydW1ibGluZywgSSBrbmV3IGltbWVkaWF0ZWx5IHRoYXQgR2FtZXIgRWF0cyB3YXMgdGhlIHBsYWNlIGZvciBtZSEgSSB3YXMgZ3JlZXRlZCBieSB2ZXJ5IGZyaWVuZGx5IHN0YWZmLCBzZXJ2aWNlIHdhcyBxdWljayBhbmQgdGhlIGZvb2Qgd2FzIGFtYXppbmcuJywgJ0F3ZXNvbWUgUHJvIEdhbWVyJywgZ2FtZXJJbWcpXG4gIGluZm9CbG9jaygnSG91cnMnLCAnSGVyZSBhdCBHYW1lciBFYXRzIHdlIGFyZSBwcm91ZCB0byBhbm5vdW5jZSBvdXIgbmV3IDI0LzcgaG91cnMgb2Ygb3BlcmF0aW9uLCBhcyBubyBtYXR0ZXIgdGhlIHRpbWUgbm9yIGRheSB3ZSB3YW50IHRvIHNlcnZlIHRoZSBwcm8tZ2FtZXIgaW4gZXZlcnlvbmUhJylcbiAgaW5mb0Jsb2NrKCdMb2NhdGlvbicsICcjMTMzNyBXaG8tS25vd3MgQmx2ZCBTRSwgQ2FsZ2FyeSBBQiwgVzFBIFMyRCcpXG59XG4iLCJpbXBvcnQgeyBoZWFkaW5nLCBzdWJIZWFkaW5nLCBtZW51SXRlbSwgY2xlYXJET00gfSBmcm9tIFwiLi9jb21wb25lbnRzXCJcbmltcG9ydCBjb250cm9sbGVySW1nIGZyb20gJy4vaW1ncy9jb250cm9sbGVyLnN2ZydcbmltcG9ydCBnZW1JbWcgZnJvbSAnLi9pbWdzL2dlbS5zdmcnXG5pbXBvcnQgY29mZmVlSW1nIGZyb20gJy4vaW1ncy9jb2ZmZWUuanBnJ1xuaW1wb3J0IG10bmRld0ltZyBmcm9tICcuL2ltZ3MvbXRuZGV3LnBuZydcbmltcG9ydCBlbmVyZ3lEcmlua0ltZyBmcm9tICcuL2ltZ3MvZW5lcmd5LWRyaW5rLmpwZydcbmltcG9ydCBkb3JpdG9zSW1nIGZyb20gJy4vaW1ncy9kb3JpdG9zLnBuZydcbmltcG9ydCB0b2FzdEltZyBmcm9tICcuL2ltZ3MvdG9hc3QuanBnJ1xuaW1wb3J0IHBpenphUG9wSW1nIGZyb20gJy4vaW1ncy9waXp6YS1wb3AucG5nJ1xuaW1wb3J0IGJhZ2VsQml0ZXNJbWcgZnJvbSAnLi9pbWdzL2JhZ2VsLWJpdGVzLnBuZydcbmltcG9ydCBjaGVlc2VQdWZmc0ltZyBmcm9tICcuL2ltZ3MvY2hlZXNlLXB1ZmZzLmpwZydcbmltcG9ydCBjaGlja2VuTnVnZ2V0c0ltZyBmcm9tICcuL2ltZ3MvY2hpY2tlbi1udWdnZXRzLnBuZydcbmltcG9ydCBmcnVpdFZlZ1BsYXR0ZXJJbWcgZnJvbSAnLi9pbWdzL2ZydWl0LXZlZy1wbGF0dGVyLmpwZydcblxuZXhwb3J0IGNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xuICBcbiAgY2xlYXJET00oKVxuXG4gIGhlYWRpbmcoJ01lbnUnLCBjb250cm9sbGVySW1nKVxuXG4gIHN1YkhlYWRpbmcoJ0JldmVyYWdlcycsIGdlbUltZylcbiAgbWVudUl0ZW0oJ0NvZmZlZScsICdDYW5cXCd0IGdvIHdyb25nIHdpdGggZ29vZCBvbCBjb2ZmZWUsIG1peCBpbiBhIGJ1bmNoIG9mIHN1Z2FyIGFuZCB5b3VcXCdsbCBiZSBnb29kIGZvciBob3Vycy4nLCAnMy45OScsIGNvZmZlZUltZylcbiAgbWVudUl0ZW0oJ01vdW50YWluIERld1xcdTIxMjInLCAnR2xvcmlvdXMgTW91bnRhaW4gRGV3IGluIGVpdGhlciBvcmlnaW5hbCwgQ29kZSBSZWQsIFZvbHRhZ2Ugb3IgQmFqYSBCbGFzdCBmbGF2b3JzLicsICc0Ljk5JywgbXRuZGV3SW1nKVxuICBtZW51SXRlbSgnRW5lcmd5IERyaW5rcycsICdXZSBvZmZlciBNb25zdGVyLCBSZWRCdWxsIGFuZCBSZWRSYWluLiBXaG8gZG9lc25cXCd0IGxvdmUgYSBnb29kIGVuZXJneSBkcmluay4nLCAnNi45OScsIGVuZXJneURyaW5rSW1nKVxuXG4gIHN1YkhlYWRpbmcoJ1NpZGVzJywgZ2VtSW1nKVxuICBtZW51SXRlbSgnRG9yaXRvc1xcdTIxMjInLCAnQSBjbGFzc2ljIGJhZyBvZiBvcmlnaW5hbCBEb3JpdG9zLCBwYWlycyB3b25kZXJmdWxseSB3aXRoIG91ciBzZWxlY3Rpb24gb2YgTW91bnRhaW4gRGV3LicsICc1Ljk5JywgZG9yaXRvc0ltZylcbiAgbWVudUl0ZW0oJ1RvYXN0JywgJzIgc2xpY2VzIG9mIGJyZWFkIHRvYXN0ZWQgdG8geW91XFwnciBsaWtpbmcsIHdpdGggY29uZGltZW50IG9wdGlvbnMgb2YgamFtLCBidXR0ZXIsIHBlYW51dCBidXR0ZXIgYW5kIE51dGVsbGEgc3ByZWFkLicsICcyLjk5JywgdG9hc3RJbWcpXG5cbiAgc3ViSGVhZGluZygnTWFpbiBEaXNoZXMnLCBnZW1JbWcpXG4gIG1lbnVJdGVtKCdQaXp6YSBQb3BzXFx1MjEyMicsICcyIEdvb2Qgb2xkIFBpenphIFBvcHMgbWljcm93YXZlZCB0byBwZXJmZWN0aW9uLCBxdWljayBhbmQgZWFzeSBzbyB5b3UgY2FuIGdldCBiYWNrIHRvIHdoYXQgeW91IGxvdmUgZG9pbmcgbW9zdCwgZ2FtaW5nIScsICc0Ljk5JywgcGl6emFQb3BJbWcpXG4gIG1lbnVJdGVtKCdCYWdlbCBCaXRlc1xcdTIxMjInLCAnMTAgY2xhc3NpYyBjaGVlc2UgYW5kIHBlcHBlcm9uaSBCYWdlbCBCaXRlcywgZW5vdWdoIHRvIGhvbGQgb3ZlciBhbnkgcHJvIGdhbWVyLicsICc2Ljk5JywgYmFnZWxCaXRlc0ltZylcbiAgbWVudUl0ZW0oJ0NoZWVzZSBQdWZmcycsICdXaXRoIG91ciBob21lIG1hZGUgZm91ciBjaGVlc2UgYmxlbmQgYW5kIHZhcmlvdXMgc3BpY2VzLCB0aGVzZSAxMiBjaGVlc3kgZG91Z2h5IHRoaW5ncyBhcmUgdGhlIHBlcmZlY3QgbWVhbCByZXBsYWNlbWVudCBmb3Igb24gdGhlIGdvIGdhbWVycy4nLCAnMTAuOTknLCBjaGVlc2VQdWZmc0ltZylcbiAgbWVudUl0ZW0oJ0NoaWNrZW4gTnVnZ2V0cycsICdGcm9tIGZyZWV6ZXIgdG8gb3ZlbiB0byB5b3VcXCdyIHBsYXRlLCB5b3VcXCdsbCBnZXQgOCBwZXJmZWN0bHkgYnJlYWRlZCBjaGlja2VuIG51Z2dldCBwYXR0aWVzIHRoYXQganVzdCBjYW50XFwndCBiZSBiZWF0ISBDb21lcyB3aXRoIGEgY2hvaWNlIG9mIGRpcHBpbmcgc2F1Y2UuJywgJzguOTknLCBjaGlja2VuTnVnZ2V0c0ltZylcbiAgbWVudUl0ZW0oJ0ZydWl0cyAmIFZlZ2V0YWJsZXMnLCAnU2NhcnkgYW5kIGZvcmVpZ24gdG8gbWFueSBnYW1lcnMsIHRoaXMgcGxhdGUgb2YgZmluZWx5IHNlbGVjdGVkIGZydWl0cyBhbmQgdmVnZXRhYmxlcyB3aWxsIGFpZCBpbiBnYW1pbmcgYWJpbGl0eS4gQnkgaGVscGluZyBvbmVcXCdzIGV5ZSBzaWdodCBhbmQgcHJldmVudGluZyBzY3VydnkhIENvbWVzIHdpdGggYSBnbGFzcyBvZiB3YXRlci4uLiB5b3Ugc2hvdWxkIHByb2JhYmx5IGRyaW5rIGl0LicsICc2Ljk5JywgZnJ1aXRWZWdQbGF0dGVySW1nKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gJy4vaG9tZS1wYWdlJztcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSAnLi9tZW51LXBhZ2UnO1xuaW1wb3J0IHsgY29udGFjdFBhZ2UgfSBmcm9tICcuL2NvbnRhY3QtcGFnZSc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5jb25zdCBydW5QYWdlID0gKGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudClcblxuICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZm9vdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3RlckVsZW1lbnQpXG5cbiAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIF9jcmVhdGVFbGVtZW50cygpXG4gICAgX2JpbmRFdmVudHMoKVxuICAgIHJlbmRlcigpXG4gICAgaG9tZVBhZ2UoKVxuICB9XG5cbiAgY29uc3QgX2J0biA9IGZ1bmN0aW9uKHRleHQsIGkpIHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidG4uaWQgPSBgYnRuJHtpfWBcbiAgICBidG4udGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgaWYgKGJ0bi5pZCA9PSAnYnRuMScpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdibGFjay1ib3JkZXInKVxuICAgIH1cbiAgICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKGJ0bilcbiAgfVxuXG4gIGNvbnN0IF9jcmVhdGVFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIF9idG4oJ0hvbWUnLCAxKVxuICAgIF9idG4oJ01lbnUnLCAyKVxuICAgIF9idG4oJ0NvbnRhY3QnLCAzKVxuICB9XG5cbiAgY29uc3QgX2NoYW5nZUJ1dHRvbkJvcmRlciA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJ0biR7YX1gKS5jbGFzc0xpc3QuYWRkKCdibGFjay1ib3JkZXInKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG4ke2J9YCkuY2xhc3NMaXN0LnJlbW92ZSgnYmxhY2stYm9yZGVyJylcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnRuJHtjfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2JsYWNrLWJvcmRlcicpXG4gIH1cblxuICBjb25zdCBfaG9tZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaG9tZVBhZ2UoKVxuICAgIF9jaGFuZ2VCdXR0b25Cb3JkZXIoMSwgMiwgMylcbiAgfVxuXG4gIGNvbnN0IF9tZW51RnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBtZW51UGFnZSgpXG4gICAgX2NoYW5nZUJ1dHRvbkJvcmRlcigyLCAxLCAzKVxuICB9XG5cbiAgY29uc3QgX2NvbnRhY3RGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnRhY3RQYWdlKClcbiAgICBfY2hhbmdlQnV0dG9uQm9yZGVyKDMsIDEsIDIpXG4gIH1cblxuXG4gIGNvbnN0IF9iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bjEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9ob21lRnVuYylcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuMicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX21lbnVGdW5jKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4zJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfY29udGFjdEZ1bmMpXG4gIH1cbiAgXG4gIHJldHVybiB7IGluaXQgfVxuXG59KSgpO1xuXG5ydW5QYWdlLmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=