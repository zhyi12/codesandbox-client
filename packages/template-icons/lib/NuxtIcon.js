"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NuxtIconLight = exports.NuxtIconDark = exports.NuxtIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _SVGIcon = require("./SVGIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var NuxtIcon = function NuxtIcon(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.84071 27.2566L9.76991 27.115C9.62832 26.8319 9.62832 26.5487 9.69911 26.1947H2.0531L13.3805 6.08849L18.1239 14.6549L19.6814 13.5221L14.9381 4.95575C14.8673 4.81416 14.3009 3.9646 13.3805 3.9646C12.9558 3.9646 12.3186 4.10619 11.823 5.02655L0.353981 25.3451C0.283185 25.5575 -0.21239 26.4779 0.212388 27.2566C0.495574 27.6814 0.920353 28.1062 1.9115 28.1062H11.5398C10.5487 28.1062 10.0531 27.6814 9.84071 27.2566Z",
    fill: "#00C58E"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M31.646 25.4159L22.4425 8.84956C22.3009 8.70796 21.8053 7.78761 20.885 7.78761C20.4602 7.78761 19.823 8 19.3274 8.84956L18.1239 10.8319V14.6549L20.885 9.9115L30.0177 26.1947H26.5487C26.6067 26.5317 26.5572 26.8785 26.4071 27.1858L26.3363 27.2566C25.9115 28.0354 24.8496 28.1062 24.708 28.1062H30.0885C30.3009 28.1062 31.292 28.0354 31.7876 27.2566C32 26.9027 32.1416 26.2655 31.646 25.4159Z",
    fill: "#108775"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M26.6195 27.2566V27.1858L26.6903 27.0442C26.7611 26.7611 26.8319 26.4779 26.7611 26.1947L26.4779 25.3451L19.2566 12.7434L18.1947 10.8319H18.1239L17.0619 12.7434L9.8407 25.3451L9.55752 26.1947C9.48896 26.5547 9.53863 26.9272 9.69911 27.2566C9.9823 27.6814 10.4071 28.1062 11.3982 28.1062H24.8496C25.0619 28.1062 26.1239 28.0354 26.6195 27.2566ZM18.1239 14.6549L24.708 26.1947H11.5398L18.1239 14.6549Z",
    fill: "white"
  }));
};

exports.NuxtIcon = NuxtIcon;

var NuxtIconDark = function NuxtIconDark(_ref2) {
  var props = _extends({}, _ref2);

  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5768 25.388L10.5148 25.264C10.3909 25.0162 10.3909 24.7683 10.4529 24.4584H3.76017L13.6753 6.85909L17.8273 14.3574L19.1906 13.3659L15.0386 5.86757C14.9767 5.74363 14.4809 5 13.6753 5C13.3035 5 12.7458 5.12394 12.312 5.92954L2.2729 23.7148C2.21093 23.9007 1.77715 24.7063 2.14896 25.388C2.39684 25.7598 2.76866 26.1316 3.63623 26.1316H12.0641C11.1965 26.1316 10.7627 25.7598 10.5768 25.388Z",
    fill: "black",
    fillOpacity: "0.6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M29.6634 23.7768L21.6074 9.2759C21.4835 9.15196 21.0497 8.34636 20.2441 8.34636C19.8722 8.34636 19.3145 8.53227 18.8807 9.2759L17.8273 11.011V14.3574L20.2441 10.2054L28.2381 24.4584H25.2016C25.2525 24.7535 25.2091 25.057 25.0777 25.326L25.0157 25.388C24.6439 26.0696 23.7144 26.1316 23.5904 26.1316H28.3001C28.486 26.1316 29.3536 26.0696 29.7874 25.388C29.9733 25.0781 30.0972 24.5204 29.6634 23.7768Z",
    fill: "black",
    fillOpacity: "0.2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M25.2636 25.388V25.326L25.3256 25.2021C25.3875 24.9542 25.4495 24.7063 25.3875 24.4584L25.1397 23.7148L18.8188 12.6842L17.8892 11.011H17.8273L16.8977 12.6842L10.5768 23.7148L10.3289 24.4584C10.2689 24.7735 10.3124 25.0996 10.4529 25.388C10.7008 25.7598 11.0726 26.1316 11.9402 26.1316H23.7144C23.9003 26.1316 24.8298 26.0696 25.2636 25.388ZM17.8273 14.3574L23.5904 24.4584H12.0641L17.8273 14.3574Z",
    fill: "black"
  }));
};

exports.NuxtIconDark = NuxtIconDark;

var NuxtIconLight = function NuxtIconLight(_ref3) {
  var props = _extends({}, _ref3);

  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5768 25.388L10.5148 25.264C10.3909 25.0162 10.3909 24.7683 10.4529 24.4584H3.76017L13.6753 6.85909L17.8273 14.3574L19.1906 13.3659L15.0386 5.86757C14.9767 5.74363 14.4809 5 13.6753 5C13.3035 5 12.7458 5.12394 12.312 5.92954L2.2729 23.7148C2.21093 23.9007 1.77715 24.7063 2.14896 25.388C2.39684 25.7598 2.76866 26.1316 3.63623 26.1316H12.0641C11.1965 26.1316 10.7627 25.7598 10.5768 25.388Z",
    fill: "white",
    fillOpacity: "0.6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M29.6634 23.7768L21.6074 9.2759C21.4835 9.15196 21.0497 8.34636 20.2441 8.34636C19.8722 8.34636 19.3145 8.53227 18.8807 9.2759L17.8273 11.011V14.3574L20.2441 10.2054L28.2381 24.4584H25.2016C25.2525 24.7535 25.2091 25.057 25.0777 25.326L25.0157 25.388C24.6439 26.0696 23.7144 26.1316 23.5904 26.1316H28.3001C28.486 26.1316 29.3536 26.0696 29.7874 25.388C29.9733 25.0781 30.0972 24.5204 29.6634 23.7768Z",
    fill: "white",
    fillOpacity: "0.2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M25.2636 25.388V25.326L25.3256 25.2021C25.3875 24.9542 25.4495 24.7063 25.3875 24.4584L25.1397 23.7148L18.8188 12.6842L17.8892 11.011H17.8273L16.8977 12.6842L10.5768 23.7148L10.3289 24.4584C10.2689 24.7735 10.3124 25.0996 10.4529 25.388C10.7008 25.7598 11.0726 26.1316 11.9402 26.1316H23.7144C23.9003 26.1316 24.8298 26.0696 25.2636 25.388ZM17.8273 14.3574L23.5904 24.4584H12.0641L17.8273 14.3574Z",
    fill: "white"
  }));
};

exports.NuxtIconLight = NuxtIconLight;