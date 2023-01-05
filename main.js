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
___CSS_LOADER_EXPORT___.push([module.id, "*, *:before, *:after {\n  box-sizing: border-box;\n  padding: 0%;\n  margin: 0%;\n}\n\n@font-face {\n  font-family: 'sans7';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: 'zerpixl';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n  --light-blue: #a6c9c9;\n  --green: green;\n  --light-green: #c9e4ad;\n  --orange: #ffc440;\n  --light-orange: #fce59a;\n  --dark-orange: #f27a01;\n  --gold: gold;\n  --white: white;\n  --black: black;\n  --gradient: red, orange, yellow, green, blue, indigo, violet; \n}\n\nhtml { \n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat bottom center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\nbody {\n  display: grid;\n  height: 100vh;\n  grid-template: 56px 20px 2fr 20px 56px/ .6fr 2fr .6fr;\n}\n\nh1 {\n  font-family: 'sans7';\n  font-size: 3rem;\n  padding-top: 10px;\n}\n\nh2 {\n  font-family: 'sans7';\n  font-size: 1.6rem; \n  padding-top: 7px;\n}\n\nh3 {\n  font-size: 1.3rem;\n}\n\nh4 {\n  font-family: monospace;\n  font-size: 1rem;\n}\n\np, h3 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbutton {\n  all: unset;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  width: 86px;\n  height: 43px;\n  border-radius: 9px;\n  border: 3px solid var(--dark-orange);\n  color: var(--black);\n  background-color: var(--orange);\n}\n\nbutton:hover {\n  background-color: var(--light-orange);\n}\n\n.black-border {\n  border-color: var(--black);\n}\n\n.header, .footer {\n  background-color: var(--light-green);\n}\n\n.header {\n  display: flex;\n  grid-area: 1/ 1/ 2/ 4;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n}\n\n.footer {\n  grid-area: 5/ 1/ 6/ 4;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  grid-area: 3/ 2/ 4/ 3;\n  min-width: 776px;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 18px;\n  background-color: var(--light-blue);\n}\n\n.gradient-wrapper {\n  justify-self: center;\n  align-self: center;\n  height: 80%;\n  width: 80%;\n  padding: 8px;\n  border-radius: 18px;\n  background: linear-gradient(to right, var(--gradient));\n}\n\n.heading, .sub-heading, .review-block, .info-block, .menu-item-container, .contact-info {\n  height: 100%;\n  width: 100%;\n  border-radius: 18px;\n  color: var(--white);\n  background-color: var(--black);\n}\n\n.heading {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  align-items: center;\n  justify-items: center;\n  padding: 4px;\n}\n\n.heading > img {\n  height: 90%;\n  width: 90%;\n}\n\n.heading > img:first-child {\n  transform: rotate(-40deg);\n  justify-self: end;\n}\n\n.heading > img:last-child {\n  transform: rotate(40deg);\n  justify-self: start;\n}\n\n.sub-heading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n}\n\n.sub-heading > img {\n  height: 50%;\n  width: 10%;\n}\n\n.review-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 140px;\n  gap: 10px;\n  padding: 8px;\n}\n\n.review-block > h3, .info-block > h3 {\n  font-family: 'zerpixl';\n}\n\n.info-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px;\n}\n\n.info-block > p {\n  align-self: center;\n}\n\n.menu-item-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n@keyframes border-pulsate {\n  14.2% {border-color: orange;}\n  28.4% {border-color: yellow;}\n  42.6% {border-color: green;}\n  56.8% {border-color: blue;}\n  71% {border-color: indigo;}\n  85.2% {border-color: violet;}\n}\n\n.menu-item-container > div:last-child > img, .contact-info > img {\n  width: 160px;\n  height: 160px;\n  border-radius: 6px;\n  border: 3px solid red;\n  animation: border-pulsate 10s infinite;\n}\n\n.menu-item-container > div:first-child, .menu-item-container > div:last-child {\n  gap: 10px;\n}\n\n.menu-item-container > div:first-child {\n  display: grid;\n}\n\n.menu-item-container > div:last-child {\n  display: flex;\n  align-items: center;\n}\n\n.menu-item-container > div:last-child > h4::first-letter {\n  color: var(--green);\n}\n\n.menu-item-container > div:last-child > h4 {\n  color: var(--gold);\n}\n\n.contact-info {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 1.8fr 160px;\n  padding: 8px;\n}\n\n.contact-info > img {\n  justify-self: end;\n}\n\n.contact-info > div {\n  display: grid;\n  gap: 3px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*, *:before, *:after {\n  box-sizing: border-box;\n  padding: 0%;\n  margin: 0%;\n}\n\n@font-face {\n  font-family: 'sans7';\n  src: url(./fonts/game_sans_serif_7.ttf);\n}\n\n@font-face {\n  font-family: 'zerpixl';\n  src: url(./fonts/zerpixl-Regular.ttf);\n}\n\n:root {\n  --light-blue: #a6c9c9;\n  --green: green;\n  --light-green: #c9e4ad;\n  --orange: #ffc440;\n  --light-orange: #fce59a;\n  --dark-orange: #f27a01;\n  --gold: gold;\n  --white: white;\n  --black: black;\n  --gradient: red, orange, yellow, green, blue, indigo, violet; \n}\n\nhtml { \n  background: url(./imgs/coin-background.jpg) no-repeat bottom center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\nbody {\n  display: grid;\n  height: 100vh;\n  grid-template: 56px 20px 2fr 20px 56px/ .6fr 2fr .6fr;\n}\n\nh1 {\n  font-family: 'sans7';\n  font-size: 3rem;\n  padding-top: 10px;\n}\n\nh2 {\n  font-family: 'sans7';\n  font-size: 1.6rem; \n  padding-top: 7px;\n}\n\nh3 {\n  font-size: 1.3rem;\n}\n\nh4 {\n  font-family: monospace;\n  font-size: 1rem;\n}\n\np, h3 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbutton {\n  all: unset;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  width: 86px;\n  height: 43px;\n  border-radius: 9px;\n  border: 3px solid var(--dark-orange);\n  color: var(--black);\n  background-color: var(--orange);\n}\n\nbutton:hover {\n  background-color: var(--light-orange);\n}\n\n.black-border {\n  border-color: var(--black);\n}\n\n.header, .footer {\n  background-color: var(--light-green);\n}\n\n.header {\n  display: flex;\n  grid-area: 1/ 1/ 2/ 4;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n}\n\n.footer {\n  grid-area: 5/ 1/ 6/ 4;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  grid-area: 3/ 2/ 4/ 3;\n  min-width: 776px;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 18px;\n  background-color: var(--light-blue);\n}\n\n.gradient-wrapper {\n  justify-self: center;\n  align-self: center;\n  height: 80%;\n  width: 80%;\n  padding: 8px;\n  border-radius: 18px;\n  background: linear-gradient(to right, var(--gradient));\n}\n\n.heading, .sub-heading, .review-block, .info-block, .menu-item-container, .contact-info {\n  height: 100%;\n  width: 100%;\n  border-radius: 18px;\n  color: var(--white);\n  background-color: var(--black);\n}\n\n.heading {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  align-items: center;\n  justify-items: center;\n  padding: 4px;\n}\n\n.heading > img {\n  height: 90%;\n  width: 90%;\n}\n\n.heading > img:first-child {\n  transform: rotate(-40deg);\n  justify-self: end;\n}\n\n.heading > img:last-child {\n  transform: rotate(40deg);\n  justify-self: start;\n}\n\n.sub-heading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n}\n\n.sub-heading > img {\n  height: 50%;\n  width: 10%;\n}\n\n.review-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 140px;\n  gap: 10px;\n  padding: 8px;\n}\n\n.review-block > h3, .info-block > h3 {\n  font-family: 'zerpixl';\n}\n\n.info-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px;\n}\n\n.info-block > p {\n  align-self: center;\n}\n\n.menu-item-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n@keyframes border-pulsate {\n  14.2% {border-color: orange;}\n  28.4% {border-color: yellow;}\n  42.6% {border-color: green;}\n  56.8% {border-color: blue;}\n  71% {border-color: indigo;}\n  85.2% {border-color: violet;}\n}\n\n.menu-item-container > div:last-child > img, .contact-info > img {\n  width: 160px;\n  height: 160px;\n  border-radius: 6px;\n  border: 3px solid red;\n  animation: border-pulsate 10s infinite;\n}\n\n.menu-item-container > div:first-child, .menu-item-container > div:last-child {\n  gap: 10px;\n}\n\n.menu-item-container > div:first-child {\n  display: grid;\n}\n\n.menu-item-container > div:last-child {\n  display: flex;\n  align-items: center;\n}\n\n.menu-item-container > div:last-child > h4::first-letter {\n  color: var(--green);\n}\n\n.menu-item-container > div:last-child > h4 {\n  color: var(--gold);\n}\n\n.contact-info {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 1.8fr 160px;\n  padding: 8px;\n}\n\n.contact-info > img {\n  justify-self: end;\n}\n\n.contact-info > div {\n  display: grid;\n  gap: 3px;\n}"],"sourceRoot":""}]);
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

const reviewBlock = (review, name) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let p = document.createElement('p')
  let h3 = document.createElement('h3')
  p.textContent = review
  h3.textContent = name
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('review-block')
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



const homePage = () => {

  (0,_components__WEBPACK_IMPORTED_MODULE_0__.clearDOM)()
  
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.heading)('Gamer Eats', _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.reviewBlock)('When it was 3 in the morning and my stomach started rumbling, I knew immediately that Gamer Eats was the place for me! I was greeted by very friendly staff, service was quick and the food was amazing.', 'Awesome Pro Gamer')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLCtDQUErQywyQkFBMkIsZ0JBQWdCLGVBQWUsR0FBRyxnQkFBZ0IseUJBQXlCLDRDQUE0QyxHQUFHLGdCQUFnQiwyQkFBMkIsMENBQTBDLEdBQUcsV0FBVywwQkFBMEIsbUJBQW1CLDJCQUEyQixzQkFBc0IsNEJBQTRCLDJCQUEyQixpQkFBaUIsbUJBQW1CLG1CQUFtQixrRUFBa0UsR0FBRyxXQUFXLCtFQUErRSxtQ0FBbUMsZ0NBQWdDLDhCQUE4QiwyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQixrQkFBa0IsMERBQTBELEdBQUcsUUFBUSx5QkFBeUIsb0JBQW9CLHNCQUFzQixHQUFHLFFBQVEseUJBQXlCLHVCQUF1QixxQkFBcUIsR0FBRyxRQUFRLHNCQUFzQixHQUFHLFFBQVEsMkJBQTJCLG9CQUFvQixHQUFHLFdBQVcscURBQXFELEdBQUcsWUFBWSxlQUFlLHFEQUFxRCx1QkFBdUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIseUNBQXlDLHdCQUF3QixvQ0FBb0MsR0FBRyxrQkFBa0IsMENBQTBDLEdBQUcsbUJBQW1CLCtCQUErQixHQUFHLHNCQUFzQix5Q0FBeUMsR0FBRyxhQUFhLGtCQUFrQiwwQkFBMEIsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsYUFBYSwwQkFBMEIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQiwwQkFBMEIscUJBQXFCLGNBQWMsa0JBQWtCLHdCQUF3Qix3Q0FBd0MsR0FBRyx1QkFBdUIseUJBQXlCLHVCQUF1QixnQkFBZ0IsZUFBZSxpQkFBaUIsd0JBQXdCLDJEQUEyRCxHQUFHLDZGQUE2RixpQkFBaUIsZ0JBQWdCLHdCQUF3Qix3QkFBd0IsbUNBQW1DLEdBQUcsY0FBYyxrQkFBa0IsdUNBQXVDLHdCQUF3QiwwQkFBMEIsaUJBQWlCLEdBQUcsb0JBQW9CLGdCQUFnQixlQUFlLEdBQUcsZ0NBQWdDLDhCQUE4QixzQkFBc0IsR0FBRywrQkFBK0IsNkJBQTZCLHdCQUF3QixHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLDRCQUE0QixpQkFBaUIsR0FBRyx3QkFBd0IsZ0JBQWdCLGVBQWUsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsc0JBQXNCLGNBQWMsaUJBQWlCLEdBQUcsMENBQTBDLDJCQUEyQixHQUFHLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0QixhQUFhLGlCQUFpQixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRywwQkFBMEIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsaUJBQWlCLEdBQUcsK0JBQStCLFdBQVcsc0JBQXNCLFdBQVcsc0JBQXNCLFdBQVcscUJBQXFCLFdBQVcsb0JBQW9CLFNBQVMsc0JBQXNCLFdBQVcsc0JBQXNCLEdBQUcsc0VBQXNFLGlCQUFpQixrQkFBa0IsdUJBQXVCLDBCQUEwQiwyQ0FBMkMsR0FBRyxtRkFBbUYsY0FBYyxHQUFHLDRDQUE0QyxrQkFBa0IsR0FBRywyQ0FBMkMsa0JBQWtCLHdCQUF3QixHQUFHLDhEQUE4RCx3QkFBd0IsR0FBRyxnREFBZ0QsdUJBQXVCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsMkNBQTJDLGlCQUFpQixHQUFHLHlCQUF5QixzQkFBc0IsR0FBRyx5QkFBeUIsa0JBQWtCLGFBQWEsR0FBRyxtQkFBbUI7QUFDdG1XO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIa0U7QUFDakI7QUFDRjtBQUNKO0FBQ0o7QUFDaUI7O0FBRWpEOztBQUVQLEVBQUUscURBQVE7O0FBRVYsRUFBRSxxREFBTyxlQUFlLGlEQUFhO0FBQ3JDLEVBQUUsOERBQWdCLG1FQUFtRSxnREFBWTtBQUNqRyxFQUFFLDhEQUFnQixtRUFBbUUsOENBQVU7QUFDL0YsRUFBRSw4REFBZ0IscUVBQXFFLDRDQUFRO0FBQy9GLEVBQUUsOERBQWdCLHdGQUF3RixxREFBZ0I7QUFDMUg7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQndFO0FBQ3ZCOztBQUUxQzs7QUFFUCxFQUFFLHFEQUFRO0FBQ1Y7QUFDQSxFQUFFLHFEQUFPLGVBQWUsaURBQWE7QUFDckMsRUFBRSx5REFBVztBQUNiLEVBQUUsdURBQVM7QUFDWCxFQUFFLHVEQUFTO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYc0U7QUFDckI7QUFDZDtBQUNNO0FBQ0E7QUFDVztBQUNUO0FBQ0o7QUFDTztBQUNJO0FBQ0U7QUFDTTtBQUNHOztBQUV0RDtBQUNQO0FBQ0EsRUFBRSxxREFBUTs7QUFFVixFQUFFLHFEQUFPLFNBQVMsaURBQWE7O0FBRS9CLEVBQUUsd0RBQVUsY0FBYywwQ0FBTTtBQUNoQyxFQUFFLHNEQUFRLGtIQUFrSCw2Q0FBUztBQUNySSxFQUFFLHNEQUFRLHFIQUFxSCw2Q0FBUztBQUN4SSxFQUFFLHNEQUFRLDJHQUEyRyxtREFBYzs7QUFFbkksRUFBRSx3REFBVSxVQUFVLDBDQUFNO0FBQzVCLEVBQUUsc0RBQVEsc0hBQXNILDhDQUFVO0FBQzFJLEVBQUUsc0RBQVEsMElBQTBJLDRDQUFROztBQUU1SixFQUFFLHdEQUFVLGdCQUFnQiwwQ0FBTTtBQUNsQyxFQUFFLHNEQUFRLHdKQUF3SixnREFBVztBQUM3SyxFQUFFLHNEQUFRLGlIQUFpSCxrREFBYTtBQUN4SSxFQUFFLHNEQUFRLDJLQUEySyxvREFBYztBQUNuTSxFQUFFLHNEQUFRLDZMQUE2TCx1REFBaUI7QUFDeE4sRUFBRSxzREFBUSxxUUFBcVEseURBQWtCO0FBQ2pTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNpQjtBQUNBO0FBQ007QUFDUDs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFNO0FBQ1YsSUFBSSxxREFBUTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsRUFBRTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxFQUFFO0FBQ3BDLGtDQUFrQyxFQUFFO0FBQ3BDLGtDQUFrQyxFQUFFO0FBQ3BDOztBQUVBO0FBQ0EsSUFBSSxxREFBUTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHFEQUFRO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLElBQUksMkRBQVc7QUFDZjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYLENBQUM7O0FBRUQsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvZ2FtZV9zYW5zX3NlcmlmXzcudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy96ZXJwaXhsLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2NvaW4tYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwJTtcXG4gIG1hcmdpbjogMCU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdzYW5zNyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICd6ZXJwaXhsJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1ibHVlOiAjYTZjOWM5O1xcbiAgLS1ncmVlbjogZ3JlZW47XFxuICAtLWxpZ2h0LWdyZWVuOiAjYzllNGFkO1xcbiAgLS1vcmFuZ2U6ICNmZmM0NDA7XFxuICAtLWxpZ2h0LW9yYW5nZTogI2ZjZTU5YTtcXG4gIC0tZGFyay1vcmFuZ2U6ICNmMjdhMDE7XFxuICAtLWdvbGQ6IGdvbGQ7XFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tYmxhY2s6IGJsYWNrO1xcbiAgLS1ncmFkaWVudDogcmVkLCBvcmFuZ2UsIHllbGxvdywgZ3JlZW4sIGJsdWUsIGluZGlnbywgdmlvbGV0OyBcXG59XFxuXFxuaHRtbCB7IFxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciBmaXhlZDsgXFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGU6IDU2cHggMjBweCAyZnIgMjBweCA1NnB4LyAuNmZyIDJmciAuNmZyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ3NhbnM3JztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LWZhbWlseTogJ3NhbnM3JztcXG4gIGZvbnQtc2l6ZTogMS42cmVtOyBcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5wLCBoMyB7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDg2cHg7XFxuICBoZWlnaHQ6IDQzcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW9yYW5nZSk7XFxufVxcblxcbi5ibGFjay1ib3JkZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5oZWFkZXIsIC5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IDEvIDEvIDIvIDQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE0cHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiA1LyAxLyA2LyA0O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1hcmVhOiAzLyAyLyA0LyAzO1xcbiAgbWluLXdpZHRoOiA3NzZweDtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxufVxcblxcbi5ncmFkaWVudC13cmFwcGVyIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JhZGllbnQpKTtcXG59XFxuXFxuLmhlYWRpbmcsIC5zdWItaGVhZGluZywgLnJldmlldy1ibG9jaywgLmluZm8tYmxvY2ssIC5tZW51LWl0ZW0tY29udGFpbmVyLCAuY29udGFjdC1pbmZvIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLmhlYWRpbmcgPiBpbWcge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uaGVhZGluZyA+IGltZzpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5oZWFkaW5nID4gaW1nOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5zdWItaGVhZGluZyA+IGltZyB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5yZXZpZXctYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ucmV2aWV3LWJsb2NrID4gaDMsIC5pbmZvLWJsb2NrID4gaDMge1xcbiAgZm9udC1mYW1pbHk6ICd6ZXJwaXhsJztcXG59XFxuXFxuLmluZm8tYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uaW5mby1ibG9jayA+IHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuQGtleWZyYW1lcyBib3JkZXItcHVsc2F0ZSB7XFxuICAxNC4yJSB7Ym9yZGVyLWNvbG9yOiBvcmFuZ2U7fVxcbiAgMjguNCUge2JvcmRlci1jb2xvcjogeWVsbG93O31cXG4gIDQyLjYlIHtib3JkZXItY29sb3I6IGdyZWVuO31cXG4gIDU2LjglIHtib3JkZXItY29sb3I6IGJsdWU7fVxcbiAgNzElIHtib3JkZXItY29sb3I6IGluZGlnbzt9XFxuICA4NS4yJSB7Ym9yZGVyLWNvbG9yOiB2aW9sZXQ7fVxcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkID4gaW1nLCAuY29udGFjdC1pbmZvID4gaW1nIHtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogMTYwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBhbmltYXRpb246IGJvcmRlci1wdWxzYXRlIDEwcyBpbmZpbml0ZTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6Zmlyc3QtY2hpbGQsIC5tZW51LWl0ZW0tY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkID4gaDQ6OmZpcnN0LWxldHRlciB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkID4gaDQge1xcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS44ZnIgMTYwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5jb250YWN0LWluZm8gPiBpbWcge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5jb250YWN0LWluZm8gPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogM3B4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0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QUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgbWFyZ2luOiAwJTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3NhbnM3JztcXG4gIHNyYzogdXJsKC4vZm9udHMvZ2FtZV9zYW5zX3NlcmlmXzcudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3plcnBpeGwnO1xcbiAgc3JjOiB1cmwoLi9mb250cy96ZXJwaXhsLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1ibHVlOiAjYTZjOWM5O1xcbiAgLS1ncmVlbjogZ3JlZW47XFxuICAtLWxpZ2h0LWdyZWVuOiAjYzllNGFkO1xcbiAgLS1vcmFuZ2U6ICNmZmM0NDA7XFxuICAtLWxpZ2h0LW9yYW5nZTogI2ZjZTU5YTtcXG4gIC0tZGFyay1vcmFuZ2U6ICNmMjdhMDE7XFxuICAtLWdvbGQ6IGdvbGQ7XFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tYmxhY2s6IGJsYWNrO1xcbiAgLS1ncmFkaWVudDogcmVkLCBvcmFuZ2UsIHllbGxvdywgZ3JlZW4sIGJsdWUsIGluZGlnbywgdmlvbGV0OyBcXG59XFxuXFxuaHRtbCB7IFxcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1ncy9jb2luLWJhY2tncm91bmQuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciBmaXhlZDsgXFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGU6IDU2cHggMjBweCAyZnIgMjBweCA1NnB4LyAuNmZyIDJmciAuNmZyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ3NhbnM3JztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LWZhbWlseTogJ3NhbnM3JztcXG4gIGZvbnQtc2l6ZTogMS42cmVtOyBcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5wLCBoMyB7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDg2cHg7XFxuICBoZWlnaHQ6IDQzcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW9yYW5nZSk7XFxufVxcblxcbi5ibGFjay1ib3JkZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5oZWFkZXIsIC5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IDEvIDEvIDIvIDQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE0cHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiA1LyAxLyA2LyA0O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1hcmVhOiAzLyAyLyA0LyAzO1xcbiAgbWluLXdpZHRoOiA3NzZweDtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxufVxcblxcbi5ncmFkaWVudC13cmFwcGVyIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JhZGllbnQpKTtcXG59XFxuXFxuLmhlYWRpbmcsIC5zdWItaGVhZGluZywgLnJldmlldy1ibG9jaywgLmluZm8tYmxvY2ssIC5tZW51LWl0ZW0tY29udGFpbmVyLCAuY29udGFjdC1pbmZvIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLmhlYWRpbmcgPiBpbWcge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uaGVhZGluZyA+IGltZzpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5oZWFkaW5nID4gaW1nOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5zdWItaGVhZGluZyA+IGltZyB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5yZXZpZXctYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ucmV2aWV3LWJsb2NrID4gaDMsIC5pbmZvLWJsb2NrID4gaDMge1xcbiAgZm9udC1mYW1pbHk6ICd6ZXJwaXhsJztcXG59XFxuXFxuLmluZm8tYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uaW5mby1ibG9jayA+IHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuQGtleWZyYW1lcyBib3JkZXItcHVsc2F0ZSB7XFxuICAxNC4yJSB7Ym9yZGVyLWNvbG9yOiBvcmFuZ2U7fVxcbiAgMjguNCUge2JvcmRlci1jb2xvcjogeWVsbG93O31cXG4gIDQyLjYlIHtib3JkZXItY29sb3I6IGdyZWVuO31cXG4gIDU2LjglIHtib3JkZXItY29sb3I6IGJsdWU7fVxcbiAgNzElIHtib3JkZXItY29sb3I6IGluZGlnbzt9XFxuICA4NS4yJSB7Ym9yZGVyLWNvbG9yOiB2aW9sZXQ7fVxcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkID4gaW1nLCAuY29udGFjdC1pbmZvID4gaW1nIHtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogMTYwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBhbmltYXRpb246IGJvcmRlci1wdWxzYXRlIDEwcyBpbmZpbml0ZTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6Zmlyc3QtY2hpbGQsIC5tZW51LWl0ZW0tY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkID4gaDQ6OmZpcnN0LWxldHRlciB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkID4gaDQge1xcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS44ZnIgMTYwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5jb250YWN0LWluZm8gPiBpbWcge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5jb250YWN0LWluZm8gPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogM3B4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblxuZXhwb3J0IGNvbnN0IGhlYWRpbmcgPSAodGV4dCwgaW1nU3JjKSA9PiB7XG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIGxldCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgbGV0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICBoMS50ZXh0Q29udGVudCA9IHRleHRcbiAgaW1nMS5zcmMgPSBpbWdTcmNcbiAgaW1nMi5zcmMgPSBpbWdTcmNcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdncmFkaWVudC13cmFwcGVyJylcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbWcxKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGgxKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGltZzIpXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKVxufVxuXG5leHBvcnQgY29uc3Qgc3ViSGVhZGluZyA9ICh0ZXh0LCBpbWdTcmMpID0+IHtcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGgyLnRleHRDb250ZW50ID0gdGV4dFxuICBpbWcuc3JjID0gaW1nU3JjXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ3JhZGllbnQtd3JhcHBlcicpXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3ViLWhlYWRpbmcnKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGgyKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGltZylcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KVxuICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpXG59XG5cbmV4cG9ydCBjb25zdCByZXZpZXdCbG9jayA9IChyZXZpZXcsIG5hbWUpID0+IHtcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgcC50ZXh0Q29udGVudCA9IHJldmlld1xuICBoMy50ZXh0Q29udGVudCA9IG5hbWVcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdncmFkaWVudC13cmFwcGVyJylcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZXZpZXctYmxvY2snKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHApXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDMpXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKVxufVxuXG5leHBvcnQgY29uc3QgaW5mb0Jsb2NrID0gKG5hbWUsIGluZm8pID0+IHtcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgcC50ZXh0Q29udGVudCA9IGluZm9cbiAgaDMudGV4dENvbnRlbnQgPSBuYW1lXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ3JhZGllbnQtd3JhcHBlcicpXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5mby1ibG9jaycpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDMpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQocClcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KVxuICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpXG59XG5cbmV4cG9ydCBjb25zdCBtZW51SXRlbSA9IChuYW1lLCBpbmZvLCBwcmljZSwgaW1nU3JjKSA9PiB7XG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgc3ViRWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgc3ViRWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIHAudGV4dENvbnRlbnQgPSBpbmZvXG4gIGgzLnRleHRDb250ZW50ID0gbmFtZVxuICBoNC50ZXh0Q29udGVudCA9IGAkJHtwcmljZX1gXG4gIGltZy5zcmMgPSBpbWdTcmNcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdncmFkaWVudC13cmFwcGVyJylcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJylcbiAgc3ViRWxlbWVudDEuYXBwZW5kQ2hpbGQoaDMpXG4gIHN1YkVsZW1lbnQxLmFwcGVuZENoaWxkKHApXG4gIHN1YkVsZW1lbnQyLmFwcGVuZENoaWxkKGg0KVxuICBzdWJFbGVtZW50Mi5hcHBlbmRDaGlsZChpbWcpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ViRWxlbWVudDEpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ViRWxlbWVudDIpXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKVxufVxuXG5leHBvcnQgY29uc3QgY29udGFjdEluZm9CbG9jayA9IChuYW1lLCBwb3NpdGlvbiwgbnVtYmVyLCBlbWFpbCwgaW1nU3JjKSA9PiB7XG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGxldCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICBwMS50ZXh0Q29udGVudCA9IHBvc2l0aW9uXG4gIHAyLnRleHRDb250ZW50ID0gbnVtYmVyXG4gIHAzLnRleHRDb250ZW50ID0gZW1haWxcbiAgaDMudGV4dENvbnRlbnQgPSBuYW1lXG4gIGltZy5zcmMgPSBpbWdTcmNcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdncmFkaWVudC13cmFwcGVyJylcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKVxuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwMSlcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocDIpXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHAzKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGgzKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGltZylcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KVxuICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudClcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFyRE9NID0gKCkgPT4ge1xuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgd2hpbGUgKGVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0RWxlbWVudENoaWxkKVxuICB9XG59IiwiaW1wb3J0IHsgaGVhZGluZywgY2xlYXJET00sIGNvbnRhY3RJbmZvQmxvY2sgfSBmcm9tIFwiLi9jb21wb25lbnRzXCJcbmltcG9ydCBjb250cm9sbGVySW1nIGZyb20gJy4vaW1ncy9jb250cm9sbGVyLnN2ZydcbmltcG9ydCBza2FyYnJhbmRJbWcgZnJvbSAnLi9pbWdzL3NrYXJicmFuZC5wbmcnXG5pbXBvcnQgY29ydGFuYUltZyBmcm9tICcuL2ltZ3MvY29ydGFuYS5wbmcnXG5pbXBvcnQgeW9zaGlJbWcgZnJvbSAnLi9pbWdzL3lvc2hpLnBuZydcbmltcG9ydCBnb3Jkb25GcmVlbWFuSW1nIGZyb20gJy4vaW1ncy9nb3Jkb24tZnJlZW1hbi5wbmcnXG5cbmV4cG9ydCBjb25zdCBjb250YWN0UGFnZSA9ICgpID0+IHtcblxuICBjbGVhckRPTSgpXG5cbiAgaGVhZGluZygnQ29udGFjdCBVcycsIGNvbnRyb2xsZXJJbWcpXG4gIGNvbnRhY3RJbmZvQmxvY2soJ1NrYXJicmFuZCcsICdDaGVmJywgJygxMjMpIDQ0NC01NTU0JywgJ0V4aWxlZE9uZUBSZWFsRW1haWwuY29tJywgc2thcmJyYW5kSW1nKVxuICBjb250YWN0SW5mb0Jsb2NrKCdDb3J0YW5hJywgJ01hbmFnZXInLCAnKDEyMykgNDQ0LTU1NTUnLCAnTWFzdGVyQUlAUmVhbEVtYWlsLmNvbScsIGNvcnRhbmFJbWcpXG4gIGNvbnRhY3RJbmZvQmxvY2soJ1lvc2hpJywgJ1dhaXRlcicsICcoMTIzKSA0NDQtNTU1NicsICdHcmVlbkRpbm9zYXVyQFJlYWxFbWFpbC5jb20nLCB5b3NoaUltZylcbiAgY29udGFjdEluZm9CbG9jaygnR29yZG9uIEZyZWVtYW4nLCAnTWFpbnRlbmFuY2UnLCAnKDEyMykgNDQ0LTU1NTcnLCAnQmxhY2tNZXNhU2NpZW50aXN0QFJlYWxFbWFpbC5jb20nLCBnb3Jkb25GcmVlbWFuSW1nKVxufSIsImltcG9ydCB7IGhlYWRpbmcsIHJldmlld0Jsb2NrLCBpbmZvQmxvY2ssIGNsZWFyRE9NIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXG5pbXBvcnQgY29udHJvbGxlckltZyBmcm9tICcuL2ltZ3MvY29udHJvbGxlci5zdmcnXG5cbmV4cG9ydCBjb25zdCBob21lUGFnZSA9ICgpID0+IHtcblxuICBjbGVhckRPTSgpXG4gIFxuICBoZWFkaW5nKCdHYW1lciBFYXRzJywgY29udHJvbGxlckltZylcbiAgcmV2aWV3QmxvY2soJ1doZW4gaXQgd2FzIDMgaW4gdGhlIG1vcm5pbmcgYW5kIG15IHN0b21hY2ggc3RhcnRlZCBydW1ibGluZywgSSBrbmV3IGltbWVkaWF0ZWx5IHRoYXQgR2FtZXIgRWF0cyB3YXMgdGhlIHBsYWNlIGZvciBtZSEgSSB3YXMgZ3JlZXRlZCBieSB2ZXJ5IGZyaWVuZGx5IHN0YWZmLCBzZXJ2aWNlIHdhcyBxdWljayBhbmQgdGhlIGZvb2Qgd2FzIGFtYXppbmcuJywgJ0F3ZXNvbWUgUHJvIEdhbWVyJylcbiAgaW5mb0Jsb2NrKCdIb3VycycsICdIZXJlIGF0IEdhbWVyIEVhdHMgd2UgYXJlIHByb3VkIHRvIGFubm91bmNlIG91ciBuZXcgMjQvNyBob3VycyBvZiBvcGVyYXRpb24sIGFzIG5vIG1hdHRlciB0aGUgdGltZSBub3IgZGF5IHdlIHdhbnQgdG8gc2VydmUgdGhlIHByby1nYW1lciBpbiBldmVyeW9uZSEnKVxuICBpbmZvQmxvY2soJ0xvY2F0aW9uJywgJyMxMzM3IFdoby1Lbm93cyBCbHZkIFNFLCBDYWxnYXJ5IEFCLCBXMUEgUzJEJylcbn1cbiIsImltcG9ydCB7IGhlYWRpbmcsIHN1YkhlYWRpbmcsIG1lbnVJdGVtLCBjbGVhckRPTSB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxuaW1wb3J0IGNvbnRyb2xsZXJJbWcgZnJvbSAnLi9pbWdzL2NvbnRyb2xsZXIuc3ZnJ1xuaW1wb3J0IGdlbUltZyBmcm9tICcuL2ltZ3MvZ2VtLnN2ZydcbmltcG9ydCBjb2ZmZWVJbWcgZnJvbSAnLi9pbWdzL2NvZmZlZS5qcGcnXG5pbXBvcnQgbXRuZGV3SW1nIGZyb20gJy4vaW1ncy9tdG5kZXcucG5nJ1xuaW1wb3J0IGVuZXJneURyaW5rSW1nIGZyb20gJy4vaW1ncy9lbmVyZ3ktZHJpbmsuanBnJ1xuaW1wb3J0IGRvcml0b3NJbWcgZnJvbSAnLi9pbWdzL2Rvcml0b3MucG5nJ1xuaW1wb3J0IHRvYXN0SW1nIGZyb20gJy4vaW1ncy90b2FzdC5qcGcnXG5pbXBvcnQgcGl6emFQb3BJbWcgZnJvbSAnLi9pbWdzL3BpenphLXBvcC5wbmcnXG5pbXBvcnQgYmFnZWxCaXRlc0ltZyBmcm9tICcuL2ltZ3MvYmFnZWwtYml0ZXMucG5nJ1xuaW1wb3J0IGNoZWVzZVB1ZmZzSW1nIGZyb20gJy4vaW1ncy9jaGVlc2UtcHVmZnMuanBnJ1xuaW1wb3J0IGNoaWNrZW5OdWdnZXRzSW1nIGZyb20gJy4vaW1ncy9jaGlja2VuLW51Z2dldHMucG5nJ1xuaW1wb3J0IGZydWl0VmVnUGxhdHRlckltZyBmcm9tICcuL2ltZ3MvZnJ1aXQtdmVnLXBsYXR0ZXIuanBnJ1xuXG5leHBvcnQgY29uc3QgbWVudVBhZ2UgPSAoKSA9PiB7XG4gIFxuICBjbGVhckRPTSgpXG5cbiAgaGVhZGluZygnTWVudScsIGNvbnRyb2xsZXJJbWcpXG5cbiAgc3ViSGVhZGluZygnQmV2ZXJhZ2VzJywgZ2VtSW1nKVxuICBtZW51SXRlbSgnQ29mZmVlJywgJ0NhblxcJ3QgZ28gd3Jvbmcgd2l0aCBnb29kIG9sIGNvZmZlZSwgbWl4IGluIGEgYnVuY2ggb2Ygc3VnYXIgYW5kIHlvdVxcJ2xsIGJlIGdvb2QgZm9yIGhvdXJzLicsICczLjk5JywgY29mZmVlSW1nKVxuICBtZW51SXRlbSgnTW91bnRhaW4gRGV3XFx1MjEyMicsICdHbG9yaW91cyBNb3VudGFpbiBEZXcgaW4gZWl0aGVyIG9yaWdpbmFsLCBDb2RlIFJlZCwgVm9sdGFnZSBvciBCYWphIEJsYXN0IGZsYXZvcnMuJywgJzQuOTknLCBtdG5kZXdJbWcpXG4gIG1lbnVJdGVtKCdFbmVyZ3kgRHJpbmtzJywgJ1dlIG9mZmVyIE1vbnN0ZXIsIFJlZEJ1bGwgYW5kIFJlZFJhaW4uIFdobyBkb2VzblxcJ3QgbG92ZSBhIGdvb2QgZW5lcmd5IGRyaW5rLicsICc2Ljk5JywgZW5lcmd5RHJpbmtJbWcpXG5cbiAgc3ViSGVhZGluZygnU2lkZXMnLCBnZW1JbWcpXG4gIG1lbnVJdGVtKCdEb3JpdG9zXFx1MjEyMicsICdBIGNsYXNzaWMgYmFnIG9mIG9yaWdpbmFsIERvcml0b3MsIHBhaXJzIHdvbmRlcmZ1bGx5IHdpdGggb3VyIHNlbGVjdGlvbiBvZiBNb3VudGFpbiBEZXcuJywgJzUuOTknLCBkb3JpdG9zSW1nKVxuICBtZW51SXRlbSgnVG9hc3QnLCAnMiBzbGljZXMgb2YgYnJlYWQgdG9hc3RlZCB0byB5b3VcXCdyIGxpa2luZywgd2l0aCBjb25kaW1lbnQgb3B0aW9ucyBvZiBqYW0sIGJ1dHRlciwgcGVhbnV0IGJ1dHRlciBhbmQgTnV0ZWxsYSBzcHJlYWQuJywgJzIuOTknLCB0b2FzdEltZylcblxuICBzdWJIZWFkaW5nKCdNYWluIERpc2hlcycsIGdlbUltZylcbiAgbWVudUl0ZW0oJ1BpenphIFBvcHNcXHUyMTIyJywgJzIgR29vZCBvbGQgUGl6emEgUG9wcyBtaWNyb3dhdmVkIHRvIHBlcmZlY3Rpb24sIHF1aWNrIGFuZCBlYXN5IHNvIHlvdSBjYW4gZ2V0IGJhY2sgdG8gd2hhdCB5b3UgbG92ZSBkb2luZyBtb3N0LCBnYW1pbmchJywgJzQuOTknLCBwaXp6YVBvcEltZylcbiAgbWVudUl0ZW0oJ0JhZ2VsIEJpdGVzXFx1MjEyMicsICcxMCBjbGFzc2ljIGNoZWVzZSBhbmQgcGVwcGVyb25pIEJhZ2VsIEJpdGVzLCBlbm91Z2ggdG8gaG9sZCBvdmVyIGFueSBwcm8gZ2FtZXIuJywgJzYuOTknLCBiYWdlbEJpdGVzSW1nKVxuICBtZW51SXRlbSgnQ2hlZXNlIFB1ZmZzJywgJ1dpdGggb3VyIGhvbWUgbWFkZSBmb3VyIGNoZWVzZSBibGVuZCBhbmQgdmFyaW91cyBzcGljZXMsIHRoZXNlIDEyIGNoZWVzeSBkb3VnaHkgdGhpbmdzIGFyZSB0aGUgcGVyZmVjdCBtZWFsIHJlcGxhY2VtZW50IGZvciBvbiB0aGUgZ28gZ2FtZXJzLicsICcxMC45OScsIGNoZWVzZVB1ZmZzSW1nKVxuICBtZW51SXRlbSgnQ2hpY2tlbiBOdWdnZXRzJywgJ0Zyb20gZnJlZXplciB0byBvdmVuIHRvIHlvdVxcJ3IgcGxhdGUsIHlvdVxcJ2xsIGdldCA4IHBlcmZlY3RseSBicmVhZGVkIGNoaWNrZW4gbnVnZ2V0IHBhdHRpZXMgdGhhdCBqdXN0IGNhbnRcXCd0IGJlIGJlYXQhIENvbWVzIHdpdGggYSBjaG9pY2Ugb2YgZGlwcGluZyBzYXVjZS4nLCAnOC45OScsIGNoaWNrZW5OdWdnZXRzSW1nKVxuICBtZW51SXRlbSgnRnJ1aXRzICYgVmVnZXRhYmxlcycsICdTY2FyeSBhbmQgZm9yZWlnbiB0byBtYW55IGdhbWVycywgdGhpcyBwbGF0ZSBvZiBmaW5lbHkgc2VsZWN0ZWQgZnJ1aXRzIGFuZCB2ZWdldGFibGVzIHdpbGwgYWlkIGluIGdhbWluZyBhYmlsaXR5LiBCeSBoZWxwaW5nIG9uZVxcJ3MgZXllIHNpZ2h0IGFuZCBwcmV2ZW50aW5nIHNjdXJ2eSEgQ29tZXMgd2l0aCBhIGdsYXNzIG9mIHdhdGVyLi4uIHlvdSBzaG91bGQgcHJvYmFibHkgZHJpbmsgaXQuJywgJzYuOTknLCBmcnVpdFZlZ1BsYXR0ZXJJbWcpXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSAnLi9ob21lLXBhZ2UnO1xuaW1wb3J0IHsgbWVudVBhZ2UgfSBmcm9tICcuL21lbnUtcGFnZSc7XG5pbXBvcnQgeyBjb250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdC1wYWdlJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmNvbnN0IHJ1blBhZ2UgPSAoZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJFbGVtZW50KVxuXG4gIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBmb290ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyRWxlbWVudClcblxuICBjb25zdCBpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgX2NyZWF0ZUVsZW1lbnRzKClcbiAgICBfYmluZEV2ZW50cygpXG4gICAgcmVuZGVyKClcbiAgICBob21lUGFnZSgpXG4gIH1cblxuICBjb25zdCBfYnRuID0gZnVuY3Rpb24odGV4dCwgaSkge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ0bi5pZCA9IGBidG4ke2l9YFxuICAgIGJ0bi50ZXh0Q29udGVudCA9IHRleHRcbiAgICBpZiAoYnRuLmlkID09ICdidG4xJykge1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2JsYWNrLWJvcmRlcicpXG4gICAgfVxuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKVxuICB9XG5cbiAgY29uc3QgX2NyZWF0ZUVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgX2J0bignSG9tZScsIDEpXG4gICAgX2J0bignTWVudScsIDIpXG4gICAgX2J0bignQ29udGFjdCcsIDMpXG4gIH1cblxuICBjb25zdCBfY2hhbmdlQnV0dG9uQm9yZGVyID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnRuJHthfWApLmNsYXNzTGlzdC5hZGQoJ2JsYWNrLWJvcmRlcicpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJ0biR7Yn1gKS5jbGFzc0xpc3QucmVtb3ZlKCdibGFjay1ib3JkZXInKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG4ke2N9YCkuY2xhc3NMaXN0LnJlbW92ZSgnYmxhY2stYm9yZGVyJylcbiAgfVxuXG4gIGNvbnN0IF9ob21lRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBob21lUGFnZSgpXG4gICAgX2NoYW5nZUJ1dHRvbkJvcmRlcigxLCAyLCAzKVxuICB9XG5cbiAgY29uc3QgX21lbnVGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIG1lbnVQYWdlKClcbiAgICBfY2hhbmdlQnV0dG9uQm9yZGVyKDIsIDEsIDMpXG4gIH1cblxuICBjb25zdCBfY29udGFjdEZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29udGFjdFBhZ2UoKVxuICAgIF9jaGFuZ2VCdXR0b25Cb3JkZXIoMywgMSwgMilcbiAgfVxuXG5cbiAgY29uc3QgX2JpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuMScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2hvbWVGdW5jKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4yJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfbWVudUZ1bmMpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bjMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jb250YWN0RnVuYylcbiAgfVxuICBcbiAgcmV0dXJuIHsgaW5pdCB9XG5cbn0pKCk7XG5cbnJ1blBhZ2UuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==