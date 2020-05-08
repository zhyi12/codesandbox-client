"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebAssemblyIconLight = exports.WebAssemblyIconDark = exports.WebAssemblyIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _SVGIcon = require("./SVGIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var WebAssemblyIcon = function WebAssemblyIcon(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M29.1519 28.575H26.9521L26.23 26.0525H22.4193L21.8638 28.575H19.7316L22.4756 17.246H25.8197L29.1519 28.575ZM24.6413 20.0386H23.7501L22.8254 24.1959H25.7041L24.6413 20.0386Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.3824 28.575H15.2772L13.7186 20.8636H13.6916L12.0107 28.575H9.86508L7.42377 17.246H9.54269L10.9933 24.9573H11.0203L12.7684 17.246H14.7523L16.3234 25.0526H16.3505L18.005 17.246H20.0835L17.3824 28.575Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.6613 0H32V31.9996H0V0H12.3387C12.3363 0.0573061 12.3303 0.113909 12.3303 0.171918C12.3303 2.19873 13.9732 3.84197 16 3.84197C18.0268 3.84197 19.67 2.19873 19.67 0.171918C19.67 0.113909 19.6641 0.0573061 19.6613 0ZM26.9521 28.575H29.1519L25.8197 17.246H22.4756L19.7316 28.575H21.8639L22.4193 26.0525H26.23L26.9521 28.575ZM15.2772 28.575H17.3824L20.0835 17.246H18.005L16.3505 25.0526H16.3234L14.7523 17.246H12.7684L11.0203 24.9573H10.9933L9.54269 17.246H7.42378L9.86508 28.575H12.0107L13.6916 20.8636H13.7187L15.2772 28.575ZM23.7501 20.0386H24.6413L25.7041 24.1959H22.8254L23.7501 20.0386Z",
    fill: "#654FF0"
  }));
};

exports.WebAssemblyIcon = WebAssemblyIcon;

var WebAssemblyIconDark = function WebAssemblyIconDark(_ref2) {
  var props = _extends({}, _ref2);

  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M31 1H19.4324C19.4333 1.01858 19.4346 1.03709 19.4359 1.05559C19.4383 1.09059 19.4407 1.1256 19.4407 1.16117C19.4407 3.06131 17.9001 4.60185 16 4.60185C14.0999 4.60185 12.5597 3.06131 12.5597 1.16117C12.5597 1.1269 12.5619 1.09316 12.5641 1.05944C12.5654 1.03965 12.5667 1.01987 12.5676 1H1V30.9997H31V1ZM22.0181 25.4242L21.4974 27.7891H19.4984L22.0709 17.1681H25.206L28.3299 27.7891H26.2676L25.5906 25.4242H22.0181ZM19.8283 17.1681L17.296 27.7891H15.3223L13.8612 20.5597H13.8359L12.2601 27.7891H10.2485L7.95978 17.1681H7.95979H9.94628L11.3062 24.3975H11.3316L12.9703 17.1681H14.8303L16.3032 24.4868H16.3286L17.8797 17.1681H19.8283ZM23.2657 19.7862L22.3989 23.6837H25.0976L24.1012 19.7862H23.2657Z",
    fill: "black"
  }));
};

exports.WebAssemblyIconDark = WebAssemblyIconDark;

var WebAssemblyIconLight = function WebAssemblyIconLight(_ref3) {
  var props = _extends({}, _ref3);

  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M31 1H19.4324C19.4333 1.01858 19.4346 1.03709 19.4359 1.05559C19.4383 1.09059 19.4407 1.1256 19.4407 1.16117C19.4407 3.06131 17.9001 4.60185 16 4.60185C14.0999 4.60185 12.5597 3.06131 12.5597 1.16117C12.5597 1.1269 12.5619 1.09316 12.5641 1.05944C12.5654 1.03965 12.5667 1.01987 12.5676 1H1V30.9997H31V1ZM22.0181 25.4242L21.4974 27.7891H19.4984L22.0709 17.1681H25.206L28.3299 27.7891H26.2676L25.5906 25.4242H22.0181ZM19.8283 17.1681L17.296 27.7891H15.3223L13.8612 20.5597H13.8359L12.2601 27.7891H10.2485L7.95978 17.1681H7.95979H9.94628L11.3062 24.3975H11.3316L12.9703 17.1681H14.8303L16.3032 24.4868H16.3286L17.8797 17.1681H19.8283ZM23.2657 19.7862L22.3989 23.6837H25.0976L24.1012 19.7862H23.2657Z",
    fill: "white"
  }));
};

exports.WebAssemblyIconLight = WebAssemblyIconLight;