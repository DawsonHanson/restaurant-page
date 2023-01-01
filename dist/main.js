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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/coin-background.jpg */ "./src/imgs/coin-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *:before, *:after {\n  box-sizing: border-box;\n  padding: 0%;\n  margin: 0%;\n}\n\n:root {\n  --light-blue: #a6c9c9;\n  --green: green;\n  --light-green: #c9e4ad;\n  --orange: #ffc440;\n  --light-orange: #fce59a;\n  --dark-orange: #f27a01;\n  --gold: gold;\n  --white: white;\n  --black: black;\n  --gradient: red, orange, yellow, green, blue, indigo, violet; \n}\n\nhtml { \n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat bottom center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\nbody {\n  display: grid;\n  height: 100vh;\n  grid-template: 56px 20px 2fr 20px 56px/ .6fr 2fr .6fr;\n}\n\nbutton {\n  all: unset;\n  text-align: center;\n  width: 86px;\n  height: 43px;\n  border-radius: 9px;\n  border: 3px solid var(--dark-orange);\n  color: var(--black);\n  background-color: var(--orange);\n}\n\nbutton:hover {\n  background-color: var(--light-orange);\n}\n\nbutton:focus {\n  border-color: var(--black);\n}\n\n.header, .footer {\n  background-color: var(--light-green);\n}\n\n.header {\n  display: flex;\n  grid-area: 1/ 1/ 2/ 4;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n}\n\n.footer {\n  grid-area: 5/ 1/ 6/ 4;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  grid-area: 3/ 2/ 4/ 3;\n  gap: 16px;\n  padding: 8px;\n  border-radius: 18px;\n  background-color: var(--light-blue);\n}\n\n.gradient-wrapper {\n  justify-self: center;\n  align-self: center;\n  height: 80%;\n  width: 80%;\n  padding: 8px;\n  border-radius: 18px;\n  background: linear-gradient(to right, var(--gradient));\n}\n\n.heading, .sub-heading, .menu-item-container {\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  border-radius: 18px;\n  color: var(--white);\n  background-color: var(--black);\n}\n\n.heading {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  justify-items: center;\n  padding: 4px;\n}\n\n.heading > img {\n  height: 90%;\n  width: 90%;\n}\n\n.heading > img:first-child {\n  transform: rotate(-40deg);\n  justify-self: end;\n}\n\n.heading > img:last-child {\n  transform: rotate(40deg);\n  justify-self: start;\n}\n\n.sub-heading {\n  display: flex;\n  justify-content: center;\n  padding: 4px;\n}\n\n.sub-heading > img {\n  height: 50%;\n  width: 10%;\n}\n\n.menu-item-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n.menu-item-container > div:last-child > img {\n  width: 140px;\n  height: 140px;\n  border-radius: 6px;\n  border: 2px solid var(--dark-orange);\n}\n\n.menu-item-container > div:first-child, .menu-item-container > div:last-child {\n  gap: 10px;\n}\n\n.menu-item-container > div:first-child {\n  display: grid;\n}\n\n.menu-item-container > div:last-child {\n  display: flex;\n  align-items: center;\n}\n\n.menu-item-container > div:last-child > h4::first-letter {\n  color: var(--green);\n}\n\n.menu-item-container > div:last-child > h4 {\n  color: var(--gold);\n}\n\n.place-holder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n  align-self: center;\n  height: 100%;\n  width: 100%;\n  padding: 4px;\n  color: var(--white);\n  background-color: var(--black);\n  border-radius: 18px;\n}\n\n.place-holder > img {\n  width: 40%;\n  height: 40%;\n}\n\n.contact-info {\n  display: grid;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,sBAAsB;EACtB,iBAAiB;EACjB,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,cAAc;EACd,cAAc;EACd,4DAA4D;AAC9D;;AAEA;EACE,iFAAyE;EACzE,8BAA8B;EAC9B,2BAA2B;EAC3B,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,qDAAqD;AACvD;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;EACT,YAAY;EACZ,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,sDAAsD;AACxD;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;AACf","sourcesContent":["*, *:before, *:after {\n  box-sizing: border-box;\n  padding: 0%;\n  margin: 0%;\n}\n\n:root {\n  --light-blue: #a6c9c9;\n  --green: green;\n  --light-green: #c9e4ad;\n  --orange: #ffc440;\n  --light-orange: #fce59a;\n  --dark-orange: #f27a01;\n  --gold: gold;\n  --white: white;\n  --black: black;\n  --gradient: red, orange, yellow, green, blue, indigo, violet; \n}\n\nhtml { \n  background: url(./imgs/coin-background.jpg) no-repeat bottom center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\nbody {\n  display: grid;\n  height: 100vh;\n  grid-template: 56px 20px 2fr 20px 56px/ .6fr 2fr .6fr;\n}\n\nbutton {\n  all: unset;\n  text-align: center;\n  width: 86px;\n  height: 43px;\n  border-radius: 9px;\n  border: 3px solid var(--dark-orange);\n  color: var(--black);\n  background-color: var(--orange);\n}\n\nbutton:hover {\n  background-color: var(--light-orange);\n}\n\nbutton:focus {\n  border-color: var(--black);\n}\n\n.header, .footer {\n  background-color: var(--light-green);\n}\n\n.header {\n  display: flex;\n  grid-area: 1/ 1/ 2/ 4;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n}\n\n.footer {\n  grid-area: 5/ 1/ 6/ 4;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  grid-area: 3/ 2/ 4/ 3;\n  gap: 16px;\n  padding: 8px;\n  border-radius: 18px;\n  background-color: var(--light-blue);\n}\n\n.gradient-wrapper {\n  justify-self: center;\n  align-self: center;\n  height: 80%;\n  width: 80%;\n  padding: 8px;\n  border-radius: 18px;\n  background: linear-gradient(to right, var(--gradient));\n}\n\n.heading, .sub-heading, .menu-item-container {\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  border-radius: 18px;\n  color: var(--white);\n  background-color: var(--black);\n}\n\n.heading {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  justify-items: center;\n  padding: 4px;\n}\n\n.heading > img {\n  height: 90%;\n  width: 90%;\n}\n\n.heading > img:first-child {\n  transform: rotate(-40deg);\n  justify-self: end;\n}\n\n.heading > img:last-child {\n  transform: rotate(40deg);\n  justify-self: start;\n}\n\n.sub-heading {\n  display: flex;\n  justify-content: center;\n  padding: 4px;\n}\n\n.sub-heading > img {\n  height: 50%;\n  width: 10%;\n}\n\n.menu-item-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n.menu-item-container > div:last-child > img {\n  width: 140px;\n  height: 140px;\n  border-radius: 6px;\n  border: 2px solid var(--dark-orange);\n}\n\n.menu-item-container > div:first-child, .menu-item-container > div:last-child {\n  gap: 10px;\n}\n\n.menu-item-container > div:first-child {\n  display: grid;\n}\n\n.menu-item-container > div:last-child {\n  display: flex;\n  align-items: center;\n}\n\n.menu-item-container > div:last-child > h4::first-letter {\n  color: var(--green);\n}\n\n.menu-item-container > div:last-child > h4 {\n  color: var(--gold);\n}\n\n.place-holder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n  align-self: center;\n  height: 100%;\n  width: 100%;\n  padding: 4px;\n  color: var(--white);\n  background-color: var(--black);\n  border-radius: 18px;\n}\n\n.place-holder > img {\n  width: 40%;\n  height: 40%;\n}\n\n.contact-info {\n  display: grid;\n}"],"sourceRoot":""}]);
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
  let h2 = document.createElement('h1')
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
  element.classList.add('place-holder')
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
  element.classList.add('place-holder')
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
  element.classList.add('place-holder')
  contactInfo.classList.add('contact-info')
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
/* harmony import */ var _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/food-template.png */ "./src/imgs/food-template.png");
/* harmony import */ var _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/controller.svg */ "./src/imgs/controller.svg");




const contactPage = () => {

  (0,_components__WEBPACK_IMPORTED_MODULE_0__.clearDOM)()

  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.heading)('Contact Us', _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_2__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.contactInfoBlock)('Skarbrand', 'Chef', '(123) 444-5554', 'ExiledOne@RealEmail.com', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.contactInfoBlock)('Cortana', 'Manager', '(123) 444-5555', 'MasterAI@RealEmail.com', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.contactInfoBlock)('Yoshi', 'Waiter', '(123) 444-5556', 'GreenDinosaur@RealEmail.com', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.contactInfoBlock)('Gordon Freeman', 'Maintenance', '(123) 444-5557', 'BlackMesaScientist@RealEmail.com', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
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
  
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.heading)('Eats For Gamers', _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.reviewBlock)('When it was 3 in the morning and my stomach started rumbling, I knew immediately that Eats For Gamers was the place for me! I was greeted by very friendly staff, service was quick and the food was amazing.', 'Awesome Pro Gamer')
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.infoBlock)('Hours', 'Here at Eats For Gamers we are proud to announce our new 24/7 hours of operation, as no matter the time nor day we want to serve the pro-gamer in everyone!')
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
/* harmony import */ var _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/food-template.png */ "./src/imgs/food-template.png");
/* harmony import */ var _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/controller.svg */ "./src/imgs/controller.svg");
/* harmony import */ var _imgs_gem_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/gem.svg */ "./src/imgs/gem.svg");





const menuPage = () => {
  
  (0,_components__WEBPACK_IMPORTED_MODULE_0__.clearDOM)()

  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.heading)('Menu', _imgs_controller_svg__WEBPACK_IMPORTED_MODULE_2__)

  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.subHeading)('Beverages', _imgs_gem_svg__WEBPACK_IMPORTED_MODULE_3__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Coffee', 'Can\'t go wrong with good ol coffee, mix in a bunch of sugar and you\'ll be good for hours.', '3.99', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Mountain Dew', 'Glorious Mountain Dew in either original, Code Red, Voltage or Baja Blast flavors.', '4.99', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Energy Drinks', 'We offer Monster, RedBull and RedRain. Who doesn\'t love a good energy drink.', '6.99', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)

  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.subHeading)('Sides', _imgs_gem_svg__WEBPACK_IMPORTED_MODULE_3__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Doritos', 'A classic bag of original Doritos, pairs wonderfully with our selection of Mountain Dew.', '5.99', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Toast', '2 slices of bread toasted to you\'r liking, with condiment options of jam, butter, peanut butter and Nutella spread.', '2.99', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)

  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.subHeading)('Main Dishes', _imgs_gem_svg__WEBPACK_IMPORTED_MODULE_3__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Pizza Pops', '2 Good old Pizza Pops microwaved to perfection, quick and easy so you can get back to what you love doing most, gaming!', '4.99', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Bagel Bites', '10 classic cheese and pepperoni Bagel Bites, enough to hold over any pro gamer.', '6.99', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Cheese Puffs', 'With our home made four cheese blend and various spices, these 12 cheesy doughy things are the perfect meal replacement for on the go gamers.', '10.99', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Chicken Nuggets', 'From freezer to oven to you\'r plate, you\'ll get 8 perfectly breaded chicken nugget patties that just cant\'t be beat! Comes with a choice of dipping sauce.', '8.99', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
  ;(0,_components__WEBPACK_IMPORTED_MODULE_0__.menuItem)('Fruits & Vegetables', 'Scary and foreign to many gamers, this plate of finely selected fruits and vegetables will aid in gaming ability. By helping one\'s eye sight and preventing scurvy! Comes with a glass of water... you should probably drink it.', '6.99', _imgs_food_template_png__WEBPACK_IMPORTED_MODULE_1__)
}

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

/***/ "./src/imgs/food-template.png":
/*!************************************!*\
  !*** ./src/imgs/food-template.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "979b7befdb86b83b9d2c.png";

/***/ }),

/***/ "./src/imgs/gem.svg":
/*!**************************!*\
  !*** ./src/imgs/gem.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "747f01d446e88c7de0f7.svg";

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
    headerElement.appendChild(btn)
  }

  const _createElements = function() {
    _btn('Home', 1)
    _btn('Menu', 2)
    _btn('Contact', 3)
  }

  const _bindEvents = function() {
    document.getElementById('btn1').addEventListener('click', _home_page__WEBPACK_IMPORTED_MODULE_1__.homePage)
    document.getElementById('btn2').addEventListener('click', _menu_page__WEBPACK_IMPORTED_MODULE_2__.menuPage)
    document.getElementById('btn3').addEventListener('click', _contact_page__WEBPACK_IMPORTED_MODULE_3__.contactPage)
  }
  
  return { init }

})();

runPage.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNpQjtBQUNBO0FBQ007QUFDUDs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFNO0FBQ1YsSUFBSSxxREFBUTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsRUFBRTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUE4RCxnREFBUTtBQUN0RSw4REFBOEQsZ0RBQVE7QUFDdEUsOERBQThELHNEQUFXO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXOztBQUVYLENBQUM7O0FBRUQsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy9jb2luLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgbWFyZ2luOiAwJTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1ibHVlOiAjYTZjOWM5O1xcbiAgLS1ncmVlbjogZ3JlZW47XFxuICAtLWxpZ2h0LWdyZWVuOiAjYzllNGFkO1xcbiAgLS1vcmFuZ2U6ICNmZmM0NDA7XFxuICAtLWxpZ2h0LW9yYW5nZTogI2ZjZTU5YTtcXG4gIC0tZGFyay1vcmFuZ2U6ICNmMjdhMDE7XFxuICAtLWdvbGQ6IGdvbGQ7XFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tYmxhY2s6IGJsYWNrO1xcbiAgLS1ncmFkaWVudDogcmVkLCBvcmFuZ2UsIHllbGxvdywgZ3JlZW4sIGJsdWUsIGluZGlnbywgdmlvbGV0OyBcXG59XFxuXFxuaHRtbCB7IFxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciBmaXhlZDsgXFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGU6IDU2cHggMjBweCAyZnIgMjBweCA1NnB4LyAuNmZyIDJmciAuNmZyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA4NnB4O1xcbiAgaGVpZ2h0OiA0M3B4O1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1vcmFuZ2UpO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5oZWFkZXIsIC5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IDEvIDEvIDIvIDQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE0cHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiA1LyAxLyA2LyA0O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1hcmVhOiAzLyAyLyA0LyAzO1xcbiAgZ2FwOiAxNnB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4uZ3JhZGllbnQtd3JhcHBlciB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWdyYWRpZW50KSk7XFxufVxcblxcbi5oZWFkaW5nLCAuc3ViLWhlYWRpbmcsIC5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLmhlYWRpbmcgPiBpbWcge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uaGVhZGluZyA+IGltZzpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5oZWFkaW5nID4gaW1nOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nID4gaW1nIHtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCA+IGltZyB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1vcmFuZ2UpO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCwgLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQgPiBoNDo6Zmlyc3QtbGV0dGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQgPiBoNCB7XFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxufVxcblxcbi5wbGFjZS1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG59XFxuXFxuLnBsYWNlLWhvbGRlciA+IGltZyB7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiA0MCU7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztFQUNkLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLGlGQUF5RTtFQUN6RSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsU0FBUztFQUNULFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMCU7XFxuICBtYXJnaW46IDAlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWxpZ2h0LWJsdWU6ICNhNmM5Yzk7XFxuICAtLWdyZWVuOiBncmVlbjtcXG4gIC0tbGlnaHQtZ3JlZW46ICNjOWU0YWQ7XFxuICAtLW9yYW5nZTogI2ZmYzQ0MDtcXG4gIC0tbGlnaHQtb3JhbmdlOiAjZmNlNTlhO1xcbiAgLS1kYXJrLW9yYW5nZTogI2YyN2EwMTtcXG4gIC0tZ29sZDogZ29sZDtcXG4gIC0td2hpdGU6IHdoaXRlO1xcbiAgLS1ibGFjazogYmxhY2s7XFxuICAtLWdyYWRpZW50OiByZWQsIG9yYW5nZSwgeWVsbG93LCBncmVlbiwgYmx1ZSwgaW5kaWdvLCB2aW9sZXQ7IFxcbn1cXG5cXG5odG1sIHsgXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWdzL2NvaW4tYmFja2dyb3VuZC5qcGcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyIGZpeGVkOyBcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZTogNTZweCAyMHB4IDJmciAyMHB4IDU2cHgvIC42ZnIgMmZyIC42ZnI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDg2cHg7XFxuICBoZWlnaHQ6IDQzcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW9yYW5nZSk7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmhlYWRlciwgLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtYXJlYTogMS8gMS8gMi8gNDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTRweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDUvIDEvIDYvIDQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBncmlkLWFyZWE6IDMvIDIvIDQvIDM7XFxuICBnYXA6IDE2cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxufVxcblxcbi5ncmFkaWVudC13cmFwcGVyIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JhZGllbnQpKTtcXG59XFxuXFxuLmhlYWRpbmcsIC5zdWItaGVhZGluZywgLm1lbnUtaXRlbS1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4uaGVhZGluZyA+IGltZyB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5oZWFkaW5nID4gaW1nOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmhlYWRpbmcgPiBpbWc6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcgPiBpbWcge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogMTAlO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkID4gaW1nIHtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLW9yYW5nZSk7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyID4gZGl2OmZpcnN0LWNoaWxkLCAubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCA+IGg0OjpmaXJzdC1sZXR0ZXIge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCA+IGg0IHtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG59XFxuXFxuLnBsYWNlLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbn1cXG5cXG4ucGxhY2UtaG9sZGVyID4gaW1nIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblxuZXhwb3J0IGNvbnN0IGhlYWRpbmcgPSAodGV4dCwgaW1nU3JjKSA9PiB7XG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIGxldCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgbGV0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICBoMS50ZXh0Q29udGVudCA9IHRleHRcbiAgaW1nMS5zcmMgPSBpbWdTcmNcbiAgaW1nMi5zcmMgPSBpbWdTcmNcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdncmFkaWVudC13cmFwcGVyJylcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbWcxKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGgxKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGltZzIpXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKVxufVxuXG5leHBvcnQgY29uc3Qgc3ViSGVhZGluZyA9ICh0ZXh0LCBpbWdTcmMpID0+IHtcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGgyLnRleHRDb250ZW50ID0gdGV4dFxuICBpbWcuc3JjID0gaW1nU3JjXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ3JhZGllbnQtd3JhcHBlcicpXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3ViLWhlYWRpbmcnKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGgyKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGltZylcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KVxuICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpXG59XG5cbmV4cG9ydCBjb25zdCByZXZpZXdCbG9jayA9IChyZXZpZXcsIG5hbWUpID0+IHtcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgcC50ZXh0Q29udGVudCA9IHJldmlld1xuICBoMy50ZXh0Q29udGVudCA9IG5hbWVcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdncmFkaWVudC13cmFwcGVyJylcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwbGFjZS1ob2xkZXInKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHApXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDMpXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKVxufVxuXG5leHBvcnQgY29uc3QgaW5mb0Jsb2NrID0gKG5hbWUsIGluZm8pID0+IHtcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgcC50ZXh0Q29udGVudCA9IGluZm9cbiAgaDMudGV4dENvbnRlbnQgPSBuYW1lXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ3JhZGllbnQtd3JhcHBlcicpXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxhY2UtaG9sZGVyJylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChoMylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChwKVxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcilcbn1cblxuZXhwb3J0IGNvbnN0IG1lbnVJdGVtID0gKG5hbWUsIGluZm8sIHByaWNlLCBpbWdTcmMpID0+IHtcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBzdWJFbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBzdWJFbGVtZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgbGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgcC50ZXh0Q29udGVudCA9IGluZm9cbiAgaDMudGV4dENvbnRlbnQgPSBuYW1lXG4gIGg0LnRleHRDb250ZW50ID0gYCQke3ByaWNlfWBcbiAgaW1nLnNyYyA9IGltZ1NyY1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2dyYWRpZW50LXdyYXBwZXInKVxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKVxuICBzdWJFbGVtZW50MS5hcHBlbmRDaGlsZChoMylcbiAgc3ViRWxlbWVudDEuYXBwZW5kQ2hpbGQocClcbiAgc3ViRWxlbWVudDIuYXBwZW5kQ2hpbGQoaDQpXG4gIHN1YkVsZW1lbnQyLmFwcGVuZENoaWxkKGltZylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChzdWJFbGVtZW50MSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChzdWJFbGVtZW50MilcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KVxuICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpXG59XG5cbmV4cG9ydCBjb25zdCBjb250YWN0SW5mb0Jsb2NrID0gKG5hbWUsIHBvc2l0aW9uLCBudW1iZXIsIGVtYWlsLCBpbWdTcmMpID0+IHtcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBsZXQgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgbGV0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIHAxLnRleHRDb250ZW50ID0gcG9zaXRpb25cbiAgcDIudGV4dENvbnRlbnQgPSBudW1iZXJcbiAgcDMudGV4dENvbnRlbnQgPSBlbWFpbFxuICBoMy50ZXh0Q29udGVudCA9IG5hbWVcbiAgaW1nLnNyYyA9IGltZ1NyY1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2dyYWRpZW50LXdyYXBwZXInKVxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BsYWNlLWhvbGRlcicpXG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHAxKVxuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwMilcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocDMpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDMpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKVxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcilcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxufVxuXG5leHBvcnQgY29uc3QgY2xlYXJET00gPSAoKSA9PiB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICB3aGlsZSAoZWxlbWVudC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQpXG4gIH1cbn0iLCJpbXBvcnQgeyBoZWFkaW5nLCBjbGVhckRPTSwgY29udGFjdEluZm9CbG9jayB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxuaW1wb3J0IHRlbXBJbWcgZnJvbSAnLi9pbWdzL2Zvb2QtdGVtcGxhdGUucG5nJ1xuaW1wb3J0IGNvbnRyb2xsZXJJbWcgZnJvbSAnLi9pbWdzL2NvbnRyb2xsZXIuc3ZnJ1xuXG5leHBvcnQgY29uc3QgY29udGFjdFBhZ2UgPSAoKSA9PiB7XG5cbiAgY2xlYXJET00oKVxuXG4gIGhlYWRpbmcoJ0NvbnRhY3QgVXMnLCBjb250cm9sbGVySW1nKVxuICBjb250YWN0SW5mb0Jsb2NrKCdTa2FyYnJhbmQnLCAnQ2hlZicsICcoMTIzKSA0NDQtNTU1NCcsICdFeGlsZWRPbmVAUmVhbEVtYWlsLmNvbScsIHRlbXBJbWcpXG4gIGNvbnRhY3RJbmZvQmxvY2soJ0NvcnRhbmEnLCAnTWFuYWdlcicsICcoMTIzKSA0NDQtNTU1NScsICdNYXN0ZXJBSUBSZWFsRW1haWwuY29tJywgdGVtcEltZylcbiAgY29udGFjdEluZm9CbG9jaygnWW9zaGknLCAnV2FpdGVyJywgJygxMjMpIDQ0NC01NTU2JywgJ0dyZWVuRGlub3NhdXJAUmVhbEVtYWlsLmNvbScsIHRlbXBJbWcpXG4gIGNvbnRhY3RJbmZvQmxvY2soJ0dvcmRvbiBGcmVlbWFuJywgJ01haW50ZW5hbmNlJywgJygxMjMpIDQ0NC01NTU3JywgJ0JsYWNrTWVzYVNjaWVudGlzdEBSZWFsRW1haWwuY29tJywgdGVtcEltZylcbn0iLCJpbXBvcnQgeyBoZWFkaW5nLCByZXZpZXdCbG9jaywgaW5mb0Jsb2NrLCBjbGVhckRPTSB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxuaW1wb3J0IGNvbnRyb2xsZXJJbWcgZnJvbSAnLi9pbWdzL2NvbnRyb2xsZXIuc3ZnJ1xuXG5leHBvcnQgY29uc3QgaG9tZVBhZ2UgPSAoKSA9PiB7XG5cbiAgY2xlYXJET00oKVxuICBcbiAgaGVhZGluZygnRWF0cyBGb3IgR2FtZXJzJywgY29udHJvbGxlckltZylcbiAgcmV2aWV3QmxvY2soJ1doZW4gaXQgd2FzIDMgaW4gdGhlIG1vcm5pbmcgYW5kIG15IHN0b21hY2ggc3RhcnRlZCBydW1ibGluZywgSSBrbmV3IGltbWVkaWF0ZWx5IHRoYXQgRWF0cyBGb3IgR2FtZXJzIHdhcyB0aGUgcGxhY2UgZm9yIG1lISBJIHdhcyBncmVldGVkIGJ5IHZlcnkgZnJpZW5kbHkgc3RhZmYsIHNlcnZpY2Ugd2FzIHF1aWNrIGFuZCB0aGUgZm9vZCB3YXMgYW1hemluZy4nLCAnQXdlc29tZSBQcm8gR2FtZXInKVxuICBpbmZvQmxvY2soJ0hvdXJzJywgJ0hlcmUgYXQgRWF0cyBGb3IgR2FtZXJzIHdlIGFyZSBwcm91ZCB0byBhbm5vdW5jZSBvdXIgbmV3IDI0LzcgaG91cnMgb2Ygb3BlcmF0aW9uLCBhcyBubyBtYXR0ZXIgdGhlIHRpbWUgbm9yIGRheSB3ZSB3YW50IHRvIHNlcnZlIHRoZSBwcm8tZ2FtZXIgaW4gZXZlcnlvbmUhJylcbiAgaW5mb0Jsb2NrKCdMb2NhdGlvbicsICcjMTMzNyBXaG8tS25vd3MgQmx2ZCBTRSwgQ2FsZ2FyeSBBQiwgVzFBIFMyRCcpXG59XG4iLCJpbXBvcnQgeyBoZWFkaW5nLCBzdWJIZWFkaW5nLCBtZW51SXRlbSwgY2xlYXJET00gfSBmcm9tIFwiLi9jb21wb25lbnRzXCJcbmltcG9ydCB0ZW1wSW1nIGZyb20gJy4vaW1ncy9mb29kLXRlbXBsYXRlLnBuZydcbmltcG9ydCBjb250cm9sbGVySW1nIGZyb20gJy4vaW1ncy9jb250cm9sbGVyLnN2ZydcbmltcG9ydCBnZW1JbWcgZnJvbSAnLi9pbWdzL2dlbS5zdmcnXG5cbmV4cG9ydCBjb25zdCBtZW51UGFnZSA9ICgpID0+IHtcbiAgXG4gIGNsZWFyRE9NKClcblxuICBoZWFkaW5nKCdNZW51JywgY29udHJvbGxlckltZylcblxuICBzdWJIZWFkaW5nKCdCZXZlcmFnZXMnLCBnZW1JbWcpXG4gIG1lbnVJdGVtKCdDb2ZmZWUnLCAnQ2FuXFwndCBnbyB3cm9uZyB3aXRoIGdvb2Qgb2wgY29mZmVlLCBtaXggaW4gYSBidW5jaCBvZiBzdWdhciBhbmQgeW91XFwnbGwgYmUgZ29vZCBmb3IgaG91cnMuJywgJzMuOTknLCB0ZW1wSW1nKVxuICBtZW51SXRlbSgnTW91bnRhaW4gRGV3JywgJ0dsb3Jpb3VzIE1vdW50YWluIERldyBpbiBlaXRoZXIgb3JpZ2luYWwsIENvZGUgUmVkLCBWb2x0YWdlIG9yIEJhamEgQmxhc3QgZmxhdm9ycy4nLCAnNC45OScsIHRlbXBJbWcpXG4gIG1lbnVJdGVtKCdFbmVyZ3kgRHJpbmtzJywgJ1dlIG9mZmVyIE1vbnN0ZXIsIFJlZEJ1bGwgYW5kIFJlZFJhaW4uIFdobyBkb2VzblxcJ3QgbG92ZSBhIGdvb2QgZW5lcmd5IGRyaW5rLicsICc2Ljk5JywgdGVtcEltZylcblxuICBzdWJIZWFkaW5nKCdTaWRlcycsIGdlbUltZylcbiAgbWVudUl0ZW0oJ0Rvcml0b3MnLCAnQSBjbGFzc2ljIGJhZyBvZiBvcmlnaW5hbCBEb3JpdG9zLCBwYWlycyB3b25kZXJmdWxseSB3aXRoIG91ciBzZWxlY3Rpb24gb2YgTW91bnRhaW4gRGV3LicsICc1Ljk5JywgdGVtcEltZylcbiAgbWVudUl0ZW0oJ1RvYXN0JywgJzIgc2xpY2VzIG9mIGJyZWFkIHRvYXN0ZWQgdG8geW91XFwnciBsaWtpbmcsIHdpdGggY29uZGltZW50IG9wdGlvbnMgb2YgamFtLCBidXR0ZXIsIHBlYW51dCBidXR0ZXIgYW5kIE51dGVsbGEgc3ByZWFkLicsICcyLjk5JywgdGVtcEltZylcblxuICBzdWJIZWFkaW5nKCdNYWluIERpc2hlcycsIGdlbUltZylcbiAgbWVudUl0ZW0oJ1BpenphIFBvcHMnLCAnMiBHb29kIG9sZCBQaXp6YSBQb3BzIG1pY3Jvd2F2ZWQgdG8gcGVyZmVjdGlvbiwgcXVpY2sgYW5kIGVhc3kgc28geW91IGNhbiBnZXQgYmFjayB0byB3aGF0IHlvdSBsb3ZlIGRvaW5nIG1vc3QsIGdhbWluZyEnLCAnNC45OScsIHRlbXBJbWcpXG4gIG1lbnVJdGVtKCdCYWdlbCBCaXRlcycsICcxMCBjbGFzc2ljIGNoZWVzZSBhbmQgcGVwcGVyb25pIEJhZ2VsIEJpdGVzLCBlbm91Z2ggdG8gaG9sZCBvdmVyIGFueSBwcm8gZ2FtZXIuJywgJzYuOTknLCB0ZW1wSW1nKVxuICBtZW51SXRlbSgnQ2hlZXNlIFB1ZmZzJywgJ1dpdGggb3VyIGhvbWUgbWFkZSBmb3VyIGNoZWVzZSBibGVuZCBhbmQgdmFyaW91cyBzcGljZXMsIHRoZXNlIDEyIGNoZWVzeSBkb3VnaHkgdGhpbmdzIGFyZSB0aGUgcGVyZmVjdCBtZWFsIHJlcGxhY2VtZW50IGZvciBvbiB0aGUgZ28gZ2FtZXJzLicsICcxMC45OScsIHRlbXBJbWcpXG4gIG1lbnVJdGVtKCdDaGlja2VuIE51Z2dldHMnLCAnRnJvbSBmcmVlemVyIHRvIG92ZW4gdG8geW91XFwnciBwbGF0ZSwgeW91XFwnbGwgZ2V0IDggcGVyZmVjdGx5IGJyZWFkZWQgY2hpY2tlbiBudWdnZXQgcGF0dGllcyB0aGF0IGp1c3QgY2FudFxcJ3QgYmUgYmVhdCEgQ29tZXMgd2l0aCBhIGNob2ljZSBvZiBkaXBwaW5nIHNhdWNlLicsICc4Ljk5JywgdGVtcEltZylcbiAgbWVudUl0ZW0oJ0ZydWl0cyAmIFZlZ2V0YWJsZXMnLCAnU2NhcnkgYW5kIGZvcmVpZ24gdG8gbWFueSBnYW1lcnMsIHRoaXMgcGxhdGUgb2YgZmluZWx5IHNlbGVjdGVkIGZydWl0cyBhbmQgdmVnZXRhYmxlcyB3aWxsIGFpZCBpbiBnYW1pbmcgYWJpbGl0eS4gQnkgaGVscGluZyBvbmVcXCdzIGV5ZSBzaWdodCBhbmQgcHJldmVudGluZyBzY3VydnkhIENvbWVzIHdpdGggYSBnbGFzcyBvZiB3YXRlci4uLiB5b3Ugc2hvdWxkIHByb2JhYmx5IGRyaW5rIGl0LicsICc2Ljk5JywgdGVtcEltZylcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tICcuL2hvbWUtcGFnZSc7XG5pbXBvcnQgeyBtZW51UGFnZSB9IGZyb20gJy4vbWVudS1wYWdlJztcbmltcG9ydCB7IGNvbnRhY3RQYWdlIH0gZnJvbSAnLi9jb250YWN0LXBhZ2UnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuY29uc3QgcnVuUGFnZSA9IChmdW5jdGlvbigpIHtcblxuICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpXG5cbiAgY29uc3QgZm9vdGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZvb3RlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXJFbGVtZW50KVxuXG4gIGNvbnN0IGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBfY3JlYXRlRWxlbWVudHMoKVxuICAgIF9iaW5kRXZlbnRzKClcbiAgICByZW5kZXIoKVxuICAgIGhvbWVQYWdlKClcbiAgfVxuXG4gIGNvbnN0IF9idG4gPSBmdW5jdGlvbih0ZXh0LCBpKSB7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuLmlkID0gYGJ0biR7aX1gXG4gICAgYnRuLnRleHRDb250ZW50ID0gdGV4dFxuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKVxuICB9XG5cbiAgY29uc3QgX2NyZWF0ZUVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgX2J0bignSG9tZScsIDEpXG4gICAgX2J0bignTWVudScsIDIpXG4gICAgX2J0bignQ29udGFjdCcsIDMpXG4gIH1cblxuICBjb25zdCBfYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4xJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lUGFnZSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuMicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVBhZ2UpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bjMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRhY3RQYWdlKVxuICB9XG4gIFxuICByZXR1cm4geyBpbml0IH1cblxufSkoKTtcblxucnVuUGFnZS5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9