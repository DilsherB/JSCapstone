"use strict";
(self["webpackChunkapi_based_webapp"] = self["webpackChunkapi_based_webapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: Arial, sans-serif;\r\n  padding: 5px;\r\n  text-transform: capitalize;\r\n}\r\n.logo {\r\n  width: 300px;\r\n  height: 50px;\r\n  background: linear-gradient(to right, #fde100 50%, #ffffff 50%);\r\n  font-family: 'Press Start 2P', cursive;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  color: #f42c2c;\r\n  text-shadow: 2px 2px #000000;\r\n  border-radius: 10px;\r\n  box-shadow: 3px 3px #000000;\r\n  margin: 0;\r\n  margin-left: 30px;\r\n  line-height: 50px;\r\n}\r\nh1 {\r\n  margin-bottom: 20px;\r\n}\r\nnav {\r\n  position: fixed;\r\n  display: flex;\r\n  top: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n  background-color: #333;\r\n  color: #fff;\r\n  width: 97%;\r\n  opacity: 0.8;\r\n}\r\n\r\nnav a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  margin: 0 1rem;\r\n}\r\n\r\nnav a:hover {\r\n  color: #ccc;\r\n}\r\n.nav-items{\r\n  font-size: 20px;\r\n  margin-right: 10%;\r\n}\r\n#pokemon ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 20px;\r\n}\r\n#pokemon li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  height: 400px;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n}\r\n\r\n#pokemon li:hover {\r\n  border-color: #f9f9f9;\r\n  cursor: pointer;\r\n}\r\n\r\n#pokemon li .item-name {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#pokemon li .item-image {\r\n  height: 120px;\r\n  width: 120px;\r\n  object-fit: cover;\r\n  margin-top: 10px;\r\n}\r\n\r\n.like-button {\r\n  position: relative;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  color: #333;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n .badge {\r\n  position: absolute;\r\n  top: -10px;\r\n  right: -20px;\r\n  background-color: red;\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  border-radius: 50%;\r\n  padding: 5px;\r\n  min-width: 20px;\r\n  text-align: center;\r\n}\r\n\r\nli .like-button:hover {\r\n  background-color: #eee;\r\n}\r\n.like-comment{\r\n  display:flex;\r\n}\r\n.like-comment button{\r\n margin: 5px;\r\n}\r\n#type-abilities {\r\n  margin-top: 5%;\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n#type-abilities li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size:32px;\r\n  margin-bottom: 35px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#type-abilities li:hover {\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.pokemon-name {\r\n  font-weight: bold;\r\n}\r\n\r\n.pokemon-types,\r\n.pokemon-abilities {\r\n  font-size: 0.8em;\r\n  color: #666;\r\n}\r\n\r\n#stats {\r\n  font-size:  32px;\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n#stats li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 35px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#stats li:hover {\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.pokemon-name {\r\n  font-weight: bold;\r\n}\r\n\r\n.pokemon-stats {\r\n  font-size: 0.8em;\r\n  color: #666;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,YAAY;EACZ,0BAA0B;AAC5B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,+DAA+D;EAC/D,sCAAsC;EACtC,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,4BAA4B;EAC5B,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;EACT,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,aAAa;EACb,MAAM;EACN,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,UAAU;EACV,YAAY;AACd;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,aAAa;EACb,qCAAqC;EACrC,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;CAEC;EACC,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,YAAY;AACd;AACA;CACC,WAAW;AACZ;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb","sourcesContent":["body {\r\n  font-family: Arial, sans-serif;\r\n  padding: 5px;\r\n  text-transform: capitalize;\r\n}\r\n.logo {\r\n  width: 300px;\r\n  height: 50px;\r\n  background: linear-gradient(to right, #fde100 50%, #ffffff 50%);\r\n  font-family: 'Press Start 2P', cursive;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  color: #f42c2c;\r\n  text-shadow: 2px 2px #000000;\r\n  border-radius: 10px;\r\n  box-shadow: 3px 3px #000000;\r\n  margin: 0;\r\n  margin-left: 30px;\r\n  line-height: 50px;\r\n}\r\nh1 {\r\n  margin-bottom: 20px;\r\n}\r\nnav {\r\n  position: fixed;\r\n  display: flex;\r\n  top: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n  background-color: #333;\r\n  color: #fff;\r\n  width: 97%;\r\n  opacity: 0.8;\r\n}\r\n\r\nnav a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  margin: 0 1rem;\r\n}\r\n\r\nnav a:hover {\r\n  color: #ccc;\r\n}\r\n.nav-items{\r\n  font-size: 20px;\r\n  margin-right: 10%;\r\n}\r\n#pokemon ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 20px;\r\n}\r\n#pokemon li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  height: 400px;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n}\r\n\r\n#pokemon li:hover {\r\n  border-color: #f9f9f9;\r\n  cursor: pointer;\r\n}\r\n\r\n#pokemon li .item-name {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#pokemon li .item-image {\r\n  height: 120px;\r\n  width: 120px;\r\n  object-fit: cover;\r\n  margin-top: 10px;\r\n}\r\n\r\n.like-button {\r\n  position: relative;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  color: #333;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n .badge {\r\n  position: absolute;\r\n  top: -10px;\r\n  right: -20px;\r\n  background-color: red;\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  border-radius: 50%;\r\n  padding: 5px;\r\n  min-width: 20px;\r\n  text-align: center;\r\n}\r\n\r\nli .like-button:hover {\r\n  background-color: #eee;\r\n}\r\n.like-comment{\r\n  display:flex;\r\n}\r\n.like-comment button{\r\n margin: 5px;\r\n}\r\n#type-abilities {\r\n  margin-top: 5%;\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n#type-abilities li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size:32px;\r\n  margin-bottom: 35px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#type-abilities li:hover {\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.pokemon-name {\r\n  font-weight: bold;\r\n}\r\n\r\n.pokemon-types,\r\n.pokemon-abilities {\r\n  font-size: 0.8em;\r\n  color: #666;\r\n}\r\n\r\n#stats {\r\n  font-size:  32px;\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n#stats li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 35px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#stats li:hover {\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.pokemon-name {\r\n  font-weight: bold;\r\n}\r\n\r\n.pokemon-stats {\r\n  font-size: 0.8em;\r\n  color: #666;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_showPokemon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showPokemon.js */ "./src/modules/showPokemon.js");
/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navbar.js */ "./src/modules/navbar.js");
/* harmony import */ var _modules_abilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/abilities */ "./src/modules/abilities.js");
/* harmony import */ var _modules_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/stats */ "./src/modules/stats.js");





(0,_modules_navbar_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_modules_showPokemon_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_abilities__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_modules_stats__WEBPACK_IMPORTED_MODULE_4__["default"])()

/***/ }),

/***/ "./src/modules/abilities.js":
/*!**********************************!*\
  !*** ./src/modules/abilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function showAbilities() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0"
  );
  const data = await response.json();

  const abilitiesList = document.querySelector("#type-abilities");

  const promises = data.results.map((pokemon) => {
    return fetch(pokemon.url).then((res) => res.json());
  });

  const pokemonDataArray = await Promise.all(promises);

  pokemonDataArray.forEach((pokemonData) => {
    const abilities = pokemonData.abilities
      .map((ability) => ability.ability.name)
      .join(", ");
    const types = pokemonData.types.map((type) => type.type.name).join(", ");

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="pokemon-name">Name: ${pokemonData.name}</span>
      <span class="pokemon-types">Type: ${types}</span>
      <span class="pokemon-abilities">Abilities: ${abilities}</span>
    `;
    abilitiesList.appendChild(listItem);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAbilities);


/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pokemonsNav = document.querySelector('.pokemon-nav')
const typeNav = document.querySelector('.type-nav')
const statsNav = document.querySelector('.stats-nav')
const pokemonsDisplay = document.querySelector('#pokemon')
const typesDisplay = document.querySelector('#type-abilities')
const statsDisplay = document.querySelector('#stats')
const navbarHandler = () => {
    // Default State of the homepage
    pokemonsDisplay.style.display = "block";
    typesDisplay.style.display = "none";
    statsDisplay.style.display = "none"
    //Adding event listner to the pokemon nav item
    pokemonsNav.addEventListener('click',()=>{
        pokemonsDisplay.style.display = "block";
        typesDisplay.style.display = "none";
        statsDisplay.style.display = "none"
    })
    //Adding event listner to the types & abilities nav item
    typeNav.addEventListener('click',()=>{
        pokemonsDisplay.style.display = "none";
        typesDisplay.style.display = "block";
        statsDisplay.style.display = "none"
    })
    //Adding event listner to the stats nav item
    statsNav.addEventListener('click',()=>{
        pokemonsDisplay.style.display = "none";
        typesDisplay.style.display = "none";
        statsDisplay.style.display = "block"
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbarHandler);


/***/ }),

/***/ "./src/modules/showPokemon.js":
/*!************************************!*\
  !*** ./src/modules/showPokemon.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0";
const INVOLVE_API =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNcbFL1NPb8wUFbHRoP3/likes?item_id=";
async function showPokemon() {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  const likeableItems = document.getElementById("likeable-items");

  const promises = data.results.map((pokemon) => {
    return fetch(pokemon.url).then((res) => res.json());
  });

  const pokemonDataArray = await Promise.all(promises);

  pokemonDataArray.forEach((pokemonData) => {
    const listItem = createListItem(pokemonData);
    likeableItems.appendChild(listItem);
  });
}

function createListItem(pokemonData) {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <img class="item-image" src="${pokemonData.sprites.front_default}">
        <span class="item-name">Name: ${pokemonData.name}</span>
        <span class="item-name">Weight: ${pokemonData.weight}</span>
        <div class = "like-comment">
        <button class = "comments">Comment</button>
        <button class="like-button">
          Like <span class="badge">0</span>
        </button></div>
      `;
  const likeButton = listItem.querySelector(".like-button");
  const likeCount = listItem.querySelector(".badge");
  likeButton.addEventListener("click", async () => {
    try {
        const response = await fetch(`${INVOLVE_API}${pokemonData.id}`,{
          method: 'POST',
        });
        const data = await response.json();

        const item = data.find((item) => item.item_id === pokemonData.id);
        if (item && item.likes !== undefined) {
          const newLikesCount = item.likes + 1; // increment likes count
          likeCount.textContent = newLikesCount;
        } else {
          throw new Error("Error: 'likes' property not found in API response.");
        }
    } catch (error) {
      throw new Error(error);
    }
  });

  return listItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPokemon);


/***/ }),

/***/ "./src/modules/stats.js":
/*!******************************!*\
  !*** ./src/modules/stats.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function showStats() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0"
    );
    const data = await response.json();
  
    const statsList = document.querySelector("#stats");
  
    const promises = data.results.map((pokemon) => {
      return fetch(pokemon.url).then((res) => res.json());
    });
  
    const pokemonDataArray = await Promise.all(promises);
  
    pokemonDataArray.forEach((pokemonData) => {
      const stats = pokemonData.stats
        .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
        .join(", ");
  
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span class="pokemon-name">${pokemonData.name} :-</span>
        <span class="pokemon-stats">${stats}</span>
      `;
      statsList.appendChild(listItem);
    });
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showStats);
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUQzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGVBQWUsSUFBSSxlQUFlO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGtCQUFrQjtBQUN2RCxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxFQUFFLGlFQUFlLFNBQVMsRUFBQztBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvYWJpbGl0aWVzLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL3Nob3dQb2tlbW9uLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9zdGF0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcbi5sb2dvIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZkZTEwMCA1MCUsICNmZmZmZmYgNTAlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmNDJjMmM7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMDAwMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggIzAwMDAwMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcbmgxIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcbm5hdiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdG9wOiAwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiA5NyU7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbm5hdiBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG4ubmF2LWl0ZW1ze1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxyXFxufVxcclxcbiNwb2tlbW9uIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBncmlkLWdhcDogMjBweDtcXHJcXG59XFxyXFxuI3Bva2Vtb24gbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNwb2tlbW9uIGxpOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2Y5ZjlmOTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Bva2Vtb24gbGkgLml0ZW0tbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNwb2tlbW9uIGxpIC5pdGVtLWltYWdlIHtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiAuYmFkZ2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIHJpZ2h0OiAtMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgbWluLXdpZHRoOiAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5saSAubGlrZS1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuLmxpa2UtY29tbWVudHtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG59XFxyXFxuLmxpa2UtY29tbWVudCBidXR0b257XFxyXFxuIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG4jdHlwZS1hYmlsaXRpZXMge1xcclxcbiAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3R5cGUtYWJpbGl0aWVzIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOjMycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jdHlwZS1hYmlsaXRpZXMgbGk6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1uYW1lIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi10eXBlcyxcXHJcXG4ucG9rZW1vbi1hYmlsaXRpZXMge1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMge1xcclxcbiAgZm9udC1zaXplOiAgMzJweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMgbGk6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1uYW1lIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1zdGF0cyB7XFxyXFxuICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwrREFBK0Q7RUFDL0Qsc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsTUFBTTtFQUNOLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztDQUVDO0VBQ0Msa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcbi5sb2dvIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZkZTEwMCA1MCUsICNmZmZmZmYgNTAlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmNDJjMmM7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMDAwMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggIzAwMDAwMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcbmgxIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcbm5hdiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdG9wOiAwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiA5NyU7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbm5hdiBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG4ubmF2LWl0ZW1ze1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxyXFxufVxcclxcbiNwb2tlbW9uIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBncmlkLWdhcDogMjBweDtcXHJcXG59XFxyXFxuI3Bva2Vtb24gbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNwb2tlbW9uIGxpOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2Y5ZjlmOTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Bva2Vtb24gbGkgLml0ZW0tbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNwb2tlbW9uIGxpIC5pdGVtLWltYWdlIHtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiAuYmFkZ2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIHJpZ2h0OiAtMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgbWluLXdpZHRoOiAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5saSAubGlrZS1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuLmxpa2UtY29tbWVudHtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG59XFxyXFxuLmxpa2UtY29tbWVudCBidXR0b257XFxyXFxuIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG4jdHlwZS1hYmlsaXRpZXMge1xcclxcbiAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3R5cGUtYWJpbGl0aWVzIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOjMycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jdHlwZS1hYmlsaXRpZXMgbGk6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1uYW1lIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi10eXBlcyxcXHJcXG4ucG9rZW1vbi1hYmlsaXRpZXMge1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMge1xcclxcbiAgZm9udC1zaXplOiAgMzJweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMgbGk6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1uYW1lIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1zdGF0cyB7XFxyXFxuICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xyXG5pbXBvcnQgc2hvd1Bva2Vtb24gZnJvbSAnLi9tb2R1bGVzL3Nob3dQb2tlbW9uLmpzJztcclxuaW1wb3J0IG5hdmJhckhhbmRsZXIgZnJvbSAnLi9tb2R1bGVzL25hdmJhci5qcyc7XHJcbmltcG9ydCBzaG93QWJpbGl0aWVzIGZyb20gJy4vbW9kdWxlcy9hYmlsaXRpZXMnO1xyXG5pbXBvcnQgc2hvd1N0YXRzIGZyb20gJy4vbW9kdWxlcy9zdGF0cyc7XHJcbm5hdmJhckhhbmRsZXIoKVxyXG5zaG93UG9rZW1vbigpO1xyXG5zaG93QWJpbGl0aWVzKClcclxuc2hvd1N0YXRzKCkiLCJhc3luYyBmdW5jdGlvbiBzaG93QWJpbGl0aWVzKCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD02Jm9mZnNldD0wXCJcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGFiaWxpdGllc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R5cGUtYWJpbGl0aWVzXCIpO1xyXG5cclxuICBjb25zdCBwcm9taXNlcyA9IGRhdGEucmVzdWx0cy5tYXAoKHBva2Vtb24pID0+IHtcclxuICAgIHJldHVybiBmZXRjaChwb2tlbW9uLnVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcG9rZW1vbkRhdGFBcnJheSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcbiAgcG9rZW1vbkRhdGFBcnJheS5mb3JFYWNoKChwb2tlbW9uRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgYWJpbGl0aWVzID0gcG9rZW1vbkRhdGEuYWJpbGl0aWVzXHJcbiAgICAgIC5tYXAoKGFiaWxpdHkpID0+IGFiaWxpdHkuYWJpbGl0eS5uYW1lKVxyXG4gICAgICAuam9pbihcIiwgXCIpO1xyXG4gICAgY29uc3QgdHlwZXMgPSBwb2tlbW9uRGF0YS50eXBlcy5tYXAoKHR5cGUpID0+IHR5cGUudHlwZS5uYW1lKS5qb2luKFwiLCBcIik7XHJcblxyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicG9rZW1vbi1uYW1lXCI+TmFtZTogJHtwb2tlbW9uRGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwb2tlbW9uLXR5cGVzXCI+VHlwZTogJHt0eXBlc308L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicG9rZW1vbi1hYmlsaXRpZXNcIj5BYmlsaXRpZXM6ICR7YWJpbGl0aWVzfTwvc3Bhbj5cclxuICAgIGA7XHJcbiAgICBhYmlsaXRpZXNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0FiaWxpdGllcztcclxuIiwiY29uc3QgcG9rZW1vbnNOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9rZW1vbi1uYXYnKVxyXG5jb25zdCB0eXBlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR5cGUtbmF2JylcclxuY29uc3Qgc3RhdHNOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtbmF2JylcclxuY29uc3QgcG9rZW1vbnNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bva2Vtb24nKVxyXG5jb25zdCB0eXBlc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZS1hYmlsaXRpZXMnKVxyXG5jb25zdCBzdGF0c0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHMnKVxyXG5jb25zdCBuYXZiYXJIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgLy8gRGVmYXVsdCBTdGF0ZSBvZiB0aGUgaG9tZXBhZ2VcclxuICAgIHBva2Vtb25zRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgdHlwZXNEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHN0YXRzRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgIC8vQWRkaW5nIGV2ZW50IGxpc3RuZXIgdG8gdGhlIHBva2Vtb24gbmF2IGl0ZW1cclxuICAgIHBva2Vtb25zTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIHBva2Vtb25zRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHR5cGVzRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgc3RhdHNEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgfSlcclxuICAgIC8vQWRkaW5nIGV2ZW50IGxpc3RuZXIgdG8gdGhlIHR5cGVzICYgYWJpbGl0aWVzIG5hdiBpdGVtXHJcbiAgICB0eXBlTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIHBva2Vtb25zRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdHlwZXNEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc3RhdHNEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgfSlcclxuICAgIC8vQWRkaW5nIGV2ZW50IGxpc3RuZXIgdG8gdGhlIHN0YXRzIG5hdiBpdGVtXHJcbiAgICBzdGF0c05hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBwb2tlbW9uc0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHR5cGVzRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgc3RhdHNEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgIH0pXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhckhhbmRsZXI7XHJcbiIsImNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9NiZvZmZzZXQ9MFwiO1xyXG5jb25zdCBJTlZPTFZFX0FQSSA9XHJcbiAgXCJodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9lTmNiRkwxTlBiOHdVRmJIUm9QMy9saWtlcz9pdGVtX2lkPVwiO1xyXG5hc3luYyBmdW5jdGlvbiBzaG93UG9rZW1vbigpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEJBU0VfVVJMKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBjb25zdCBsaWtlYWJsZUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWtlYWJsZS1pdGVtc1wiKTtcclxuXHJcbiAgY29uc3QgcHJvbWlzZXMgPSBkYXRhLnJlc3VsdHMubWFwKChwb2tlbW9uKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2gocG9rZW1vbi51cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBva2Vtb25EYXRhQXJyYXkgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gIHBva2Vtb25EYXRhQXJyYXkuZm9yRWFjaCgocG9rZW1vbkRhdGEpID0+IHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlTGlzdEl0ZW0ocG9rZW1vbkRhdGEpO1xyXG4gICAgbGlrZWFibGVJdGVtcy5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKHBva2Vtb25EYXRhKSB7XHJcbiAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcclxuICAgIDxpbWcgY2xhc3M9XCJpdGVtLWltYWdlXCIgc3JjPVwiJHtwb2tlbW9uRGF0YS5zcHJpdGVzLmZyb250X2RlZmF1bHR9XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLW5hbWVcIj5OYW1lOiAke3Bva2Vtb25EYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1uYW1lXCI+V2VpZ2h0OiAke3Bva2Vtb25EYXRhLndlaWdodH08L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGlrZS1jb21tZW50XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiY29tbWVudHNcIj5Db21tZW50PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpa2UtYnV0dG9uXCI+XHJcbiAgICAgICAgICBMaWtlIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj4wPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICBgO1xyXG4gIGNvbnN0IGxpa2VCdXR0b24gPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmxpa2UtYnV0dG9uXCIpO1xyXG4gIGNvbnN0IGxpa2VDb3VudCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYmFkZ2VcIik7XHJcbiAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0lOVk9MVkVfQVBJfSR7cG9rZW1vbkRhdGEuaWR9YCx7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0gZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IHBva2Vtb25EYXRhLmlkKTtcclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLmxpa2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld0xpa2VzQ291bnQgPSBpdGVtLmxpa2VzICsgMTsgLy8gaW5jcmVtZW50IGxpa2VzIGNvdW50XHJcbiAgICAgICAgICBsaWtlQ291bnQudGV4dENvbnRlbnQgPSBuZXdMaWtlc0NvdW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvcjogJ2xpa2VzJyBwcm9wZXJ0eSBub3QgZm91bmQgaW4gQVBJIHJlc3BvbnNlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbGlzdEl0ZW07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dQb2tlbW9uO1xyXG4iLCJhc3luYyBmdW5jdGlvbiBzaG93U3RhdHMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD02Jm9mZnNldD0wXCJcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gICAgY29uc3Qgc3RhdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0c1wiKTtcclxuICBcclxuICAgIGNvbnN0IHByb21pc2VzID0gZGF0YS5yZXN1bHRzLm1hcCgocG9rZW1vbikgPT4ge1xyXG4gICAgICByZXR1cm4gZmV0Y2gocG9rZW1vbi51cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IHBva2Vtb25EYXRhQXJyYXkgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgXHJcbiAgICBwb2tlbW9uRGF0YUFycmF5LmZvckVhY2goKHBva2Vtb25EYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXRzID0gcG9rZW1vbkRhdGEuc3RhdHNcclxuICAgICAgICAubWFwKChzdGF0KSA9PiBgJHtzdGF0LnN0YXQubmFtZX06ICR7c3RhdC5iYXNlX3N0YXR9YClcclxuICAgICAgICAuam9pbihcIiwgXCIpO1xyXG4gIFxyXG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicG9rZW1vbi1uYW1lXCI+JHtwb2tlbW9uRGF0YS5uYW1lfSA6LTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInBva2Vtb24tc3RhdHNcIj4ke3N0YXRzfTwvc3Bhbj5cclxuICAgICAgYDtcclxuICAgICAgc3RhdHNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBzaG93U3RhdHM7XHJcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9