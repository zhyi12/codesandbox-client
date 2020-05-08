"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpoIconLight = exports.ExpoIconDark = exports.ExpoIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _SVGIcon = require("./SVGIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ExpoIcon = function ExpoIcon(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 27.1829C0.0579266 27.8911 0.30637 28.6013 0.957418 29.5547C1.72959 30.6854 3.0582 31.3068 4.02735 30.3099C4.68134 29.6371 11.7531 17.2755 15.1611 12.5913C15.5703 12.0131 16.4156 12.0131 16.825 12.5913C20.2331 17.2755 27.3048 29.6371 27.9588 30.3099C28.9277 31.3068 30.2566 30.6854 31.0287 29.5547C31.789 28.4414 32 27.6598 32 26.8258C32 26.2577 20.9865 5.76148 19.8774 4.05542C18.8107 2.41448 18.4849 2.05756 16.6811 2L15.305 2C13.5011 2.05756 13.1754 2.41448 12.1085 4.05542C11.0227 5.72604 0.439216 25.4143 0 26.7649L0 27.1829Z",
    fill: "#1173B6"
  }));
};

exports.ExpoIcon = ExpoIcon;

var ExpoIconDark = function ExpoIconDark(_ref2) {
  var props = _extends({}, _ref2);

  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 24.8608C2.05028 25.4755 2.26595 26.092 2.83111 26.9196C3.50142 27.9012 4.65476 28.4406 5.49605 27.5752C6.06377 26.9912 12.2026 16.2603 15.161 12.1941C15.5162 11.6921 16.2501 11.6921 16.6055 12.1941C19.5639 16.2603 25.7027 26.9912 26.2704 27.5752C27.1115 28.4406 28.2651 27.9012 28.9354 26.9196C29.5953 25.9532 29.7785 25.2747 29.7785 24.5507C29.7785 24.0576 20.2179 6.26526 19.2551 4.78426C18.3292 3.3598 18.0463 3.04997 16.4805 3H15.286C13.72 3.04997 13.4373 3.3598 12.5112 4.78426C11.5685 6.2345 2.38127 23.3255 2 24.4979V24.8608Z",
    fill: "black"
  }));
};

exports.ExpoIconDark = ExpoIconDark;

var ExpoIconLight = function ExpoIconLight(_ref3) {
  var props = _extends({}, _ref3);

  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 24.8608C2.05028 25.4755 2.26595 26.092 2.83111 26.9196C3.50142 27.9012 4.65476 28.4406 5.49605 27.5752C6.06377 26.9912 12.2026 16.2603 15.161 12.1941C15.5162 11.6921 16.2501 11.6921 16.6055 12.1941C19.5639 16.2603 25.7027 26.9912 26.2704 27.5752C27.1115 28.4406 28.2651 27.9012 28.9354 26.9196C29.5953 25.9532 29.7785 25.2747 29.7785 24.5507C29.7785 24.0576 20.2179 6.26526 19.2551 4.78426C18.3292 3.3598 18.0463 3.04997 16.4805 3H15.286C13.72 3.04997 13.4373 3.3598 12.5112 4.78426C11.5685 6.2345 2.38127 23.3255 2 24.4979V24.8608Z",
    fill: "white"
  }));
};

exports.ExpoIconLight = ExpoIconLight;