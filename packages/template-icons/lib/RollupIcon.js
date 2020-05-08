"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RollupIconLight = exports.RollupIconDark = exports.RollupIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _SVGIcon = require("./SVGIcon");

var _useUniqueId = require("./useUniqueId");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var RollupIcon = function RollupIcon(_ref) {
  var props = _extends({}, _ref);

  var id = (0, _useUniqueId.useUniqueId)();
  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#Rollup_Clip0_".concat(id, ")")
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M28.4374 10.5146C28.4374 8.63436 27.945 6.87167 27.0776 5.34401C24.7778 2.97698 19.7751 2.42859 18.5328 5.33282C17.257 8.3098 20.676 11.6225 22.1701 11.3595C24.0727 11.0238 21.8344 6.65903 21.8344 6.65903C24.7442 12.1429 24.0727 10.4642 18.8126 15.5004C13.5525 20.5367 8.18055 31.1631 7.39714 31.6108C7.36356 31.6332 7.32999 31.65 7.29082 31.6667H27.9226C28.2863 31.6667 28.5214 31.2806 28.3591 30.9561L22.9647 20.2793C22.8472 20.0498 22.9311 19.7644 23.155 19.6357C26.311 17.8227 28.4374 14.4204 28.4374 10.5146Z",
    fill: "url(#Rollup_Paint0_Linear_".concat(id, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M28.4374 10.5146C28.4374 8.63436 27.945 6.87167 27.0776 5.34401C24.7778 2.97698 19.7751 2.42859 18.5328 5.33282C17.257 8.3098 20.676 11.6225 22.1701 11.3595C24.0727 11.0238 21.8344 6.65903 21.8344 6.65903C24.7442 12.1429 24.0727 10.4642 18.8126 15.5004C13.5525 20.5367 8.18055 31.1631 7.39714 31.6108C7.36356 31.6332 7.32999 31.65 7.29082 31.6667H27.9226C28.2863 31.6667 28.5214 31.2806 28.3591 30.9561L22.9647 20.2793C22.8472 20.0498 22.9311 19.7644 23.155 19.6357C26.311 17.8227 28.4374 14.4204 28.4374 10.5146Z",
    fill: "url(#Rollup_Paint1_Linear_".concat(id, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.39713 31.6108C8.18054 31.1631 13.5525 20.5311 18.8126 15.4948C24.0727 10.4586 24.7442 12.1373 21.8343 6.65343C21.8343 6.65343 10.6987 22.2658 6.66967 29.988",
    fill: "url(#Rollup_Paint2_Linear_".concat(id, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.96397 17.6212C16.4847 3.79397 17.4696 2.40061 21.3867 2.40061C23.4459 2.40061 25.522 3.32951 26.865 4.98028C25.0352 2.03128 21.7952 0.0559582 18.0852 0H5.3099C5.0413 0 4.82306 0.218237 4.82306 0.486837V26.2388C5.58409 24.2747 6.87672 21.4656 8.96397 17.6212Z",
    fill: "url(#Rollup_Paint3_Linear_".concat(id, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.8126 15.4948C13.5525 20.5311 8.18055 31.1631 7.39713 31.6108C6.61372 32.0585 5.2987 32.1144 4.59922 31.331C3.85498 30.4972 2.69664 29.1486 8.96396 17.6212C16.4847 3.79397 17.4696 2.4006 21.3867 2.4006C23.4459 2.4006 25.522 3.32951 26.865 4.98028C26.9377 5.09779 27.0105 5.2209 27.0832 5.34401C24.7833 2.97697 19.7807 2.42858 18.5384 5.33281C17.2626 8.30979 20.6816 11.6225 22.1757 11.3595C24.0783 11.0238 21.8399 6.65902 21.8399 6.65902C24.7442 12.1373 24.0727 10.4586 18.8126 15.4948Z",
    fill: "url(#Rollup_Paint4_Linear_".concat(id, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    opacity: "0.3",
    d: "M9.5795 18.2368C17.1003 4.4095 18.0851 3.01614 22.0022 3.01614C23.6978 3.01614 25.4045 3.64847 26.7027 4.79002C25.3597 3.25676 23.3676 2.4006 21.3867 2.4006C17.4696 2.4006 16.4847 3.79396 8.96396 17.6212C2.69664 29.1486 3.85498 30.4972 4.59922 31.331C4.70554 31.4485 4.82865 31.5492 4.95735 31.6331C4.30264 30.6819 4.01166 28.4715 9.5795 18.2368Z",
    fill: "url(#Rollup_Paint5_Linear_".concat(id, ")")
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "Rollup_Paint0_Linear_".concat(id),
    x1: "12.9632",
    y1: "17.0086",
    x2: "21.695",
    y2: "18.1474",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "#FF6533"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.157",
    stopColor: "#FF5633"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.434",
    stopColor: "#FF4333"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.714",
    stopColor: "#FF3733"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "#FF3333"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "Rollup_Paint1_Linear_".concat(id),
    x1: "11.6154",
    y1: "14.1519",
    x2: "28.989",
    y2: "21.6678",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "#BF3338"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "#FF3333"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "Rollup_Paint2_Linear_".concat(id),
    x1: "12.1192",
    y1: "16.5108",
    x2: "14.8553",
    y2: "17.8243",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "#FF6533"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.157",
    stopColor: "#FF5633"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.434",
    stopColor: "#FF4333"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.714",
    stopColor: "#FF3733"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "#FF3333"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "Rollup_Paint3_Linear_".concat(id),
    x1: "16.1888",
    y1: "20.5566",
    x2: "15.2399",
    y2: "10.9592",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "#FF6533"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.157",
    stopColor: "#FF5633"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.434",
    stopColor: "#FF4333"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.714",
    stopColor: "#FF3733"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "#FF3333"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "Rollup_Paint4_Linear_".concat(id),
    x1: "13.2797",
    y1: "16.3459",
    x2: "16.7573",
    y2: "17.7903",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "#FBB040"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "#FB8840"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "Rollup_Paint5_Linear_".concat(id),
    x1: "16.537",
    y1: "4.12177",
    x2: "11.2033",
    y2: "39.5083",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "white"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "white",
    stopOpacity: "0"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "Rollup_Clip0_".concat(id)
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "32",
    height: "32",
    fill: "white"
  }))));
};

exports.RollupIcon = RollupIcon;

var RollupIconDark = function RollupIconDark(_ref2) {
  var props = _extends({}, _ref2);

  var id = (0, _useUniqueId.useUniqueId)();
  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    d: "M25.8949 11.5601C25.8949 10.0294 25.494 8.59436 24.7879 7.35067C22.9155 5.42363 18.8428 4.97717 17.8314 7.34156C16.7927 9.76516 19.5762 12.4621 20.7926 12.248C22.3415 11.9746 20.5193 8.42125 20.5193 8.42125C22.8882 12.8858 22.3415 11.5191 18.0592 15.6192C13.7769 19.7193 9.40346 28.3704 8.76567 28.7349C8.73833 28.7531 8.711 28.7668 8.67911 28.7805H25.4758C25.7719 28.7805 25.9633 28.4661 25.8312 28.2019L21.4395 19.5097C21.3438 19.3229 21.4122 19.0906 21.5944 18.9858C24.1638 17.5098 25.8949 14.7399 25.8949 11.5601Z",
    fill: "black",
    fillOpacity: "0.6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.76567 28.7349C9.40346 28.3704 13.7769 19.7147 18.0592 15.6146C22.3415 11.5145 22.8882 12.8812 20.5193 8.41667C20.5193 8.41667 11.4535 21.1269 8.17343 27.4138",
    fill: "black"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.0413 17.3458C16.1641 6.08874 16.9658 4.95438 20.1548 4.95438C21.8313 4.95438 23.5214 5.71062 24.6148 7.05453C23.1251 4.6537 20.4874 3.04556 17.467 3H7.06641C6.84774 3 6.67007 3.17767 6.67007 3.39634V24.3615C7.28964 22.7624 8.34199 20.4755 10.0413 17.3458Z",
    fill: "black",
    fillOpacity: "0.8"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.0592 15.6146C13.7769 19.7147 9.40346 28.3705 8.76567 28.7349C8.12788 29.0994 7.0573 29.1449 6.48784 28.5071C5.88194 27.8283 4.93892 26.7304 10.0413 17.3458C16.1641 6.08874 16.9658 4.95438 20.1548 4.95438C21.8313 4.95438 23.5214 5.71062 24.6148 7.05453C24.674 7.1502 24.7332 7.25043 24.7925 7.35065C22.9201 5.42361 18.8473 4.97715 17.836 7.34154C16.7973 9.76515 19.5808 12.4621 20.7972 12.248C22.3461 11.9746 20.5238 8.42123 20.5238 8.42123C22.8882 12.8812 22.3415 11.5145 18.0592 15.6146Z",
    fill: "black"
  }), /*#__PURE__*/_react.default.createElement("path", {
    opacity: "0.3",
    d: "M10.5424 17.8469C16.6652 6.58986 17.467 5.4555 20.6559 5.4555C22.0363 5.4555 23.4258 5.97029 24.4827 6.89964C23.3893 5.65139 21.7675 4.95438 20.1548 4.95438C16.9658 4.95438 16.1641 6.08873 10.0413 17.3458C4.93892 26.7304 5.88194 27.8283 6.48784 28.5071C6.5744 28.6028 6.67462 28.6848 6.7794 28.7531C6.24639 27.9786 6.0095 26.1792 10.5424 17.8469Z",
    fill: "url(#paint0_linear-".concat(id, ")")
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "paint0_linear-".concat(id),
    x1: "16.2066",
    y1: "6.3556",
    x2: "11.8643",
    y2: "35.1644",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "white"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "white",
    stopOpacity: "0"
  }))));
};

exports.RollupIconDark = RollupIconDark;

var RollupIconLight = function RollupIconLight(_ref3) {
  var props = _extends({}, _ref3);

  var id = (0, _useUniqueId.useUniqueId)();
  return /*#__PURE__*/_react.default.createElement(_SVGIcon.SVGIcon, props, /*#__PURE__*/_react.default.createElement("path", {
    d: "M25.8949 11.5601C25.8949 10.0294 25.494 8.59436 24.7879 7.35067C22.9155 5.42363 18.8428 4.97717 17.8314 7.34156C16.7927 9.76516 19.5762 12.4621 20.7926 12.248C22.3415 11.9746 20.5193 8.42125 20.5193 8.42125C22.8882 12.8858 22.3415 11.5191 18.0592 15.6192C13.7769 19.7193 9.40346 28.3704 8.76567 28.7349C8.73833 28.7531 8.711 28.7668 8.67911 28.7805H25.4758C25.7719 28.7805 25.9633 28.4661 25.8312 28.2019L21.4395 19.5097C21.3438 19.3229 21.4122 19.0906 21.5944 18.9858C24.1638 17.5098 25.8949 14.7399 25.8949 11.5601Z",
    fill: "white",
    fillOpacity: "0.6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.76567 28.7349C9.40346 28.3704 13.7769 19.7147 18.0592 15.6146C22.3415 11.5145 22.8882 12.8812 20.5193 8.41667C20.5193 8.41667 11.4535 21.1269 8.17343 27.4138",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.0413 17.3458C16.1641 6.08874 16.9658 4.95438 20.1548 4.95438C21.8313 4.95438 23.5214 5.71062 24.6148 7.05453C23.1251 4.6537 20.4874 3.04556 17.467 3H7.06641C6.84774 3 6.67007 3.17767 6.67007 3.39634V24.3615C7.28964 22.7624 8.34199 20.4755 10.0413 17.3458Z",
    fill: "white",
    fillOpacity: "0.8"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.0592 15.6146C13.7769 19.7147 9.40346 28.3705 8.76567 28.7349C8.12788 29.0994 7.0573 29.1449 6.48784 28.5071C5.88194 27.8283 4.93892 26.7304 10.0413 17.3458C16.1641 6.08874 16.9658 4.95438 20.1548 4.95438C21.8313 4.95438 23.5214 5.71062 24.6148 7.05453C24.674 7.1502 24.7332 7.25043 24.7925 7.35065C22.9201 5.42361 18.8473 4.97715 17.836 7.34154C16.7973 9.76515 19.5808 12.4621 20.7972 12.248C22.3461 11.9746 20.5238 8.42123 20.5238 8.42123C22.8882 12.8812 22.3415 11.5145 18.0592 15.6146Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    opacity: "0.3",
    d: "M10.5424 17.8469C16.6652 6.58986 17.467 5.4555 20.6559 5.4555C22.0363 5.4555 23.4258 5.97029 24.4827 6.89964C23.3893 5.65139 21.7675 4.95438 20.1548 4.95438C16.9658 4.95438 16.1641 6.08873 10.0413 17.3458C4.93892 26.7304 5.88194 27.8283 6.48784 28.5071C6.5744 28.6028 6.67462 28.6848 6.7794 28.7531C6.24639 27.9786 6.0095 26.1792 10.5424 17.8469Z",
    fill: "url(#paint0_linear-".concat(id, ")")
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "paint0_linear-".concat(id),
    x1: "16.2066",
    y1: "6.3556",
    x2: "11.8643",
    y2: "35.1644",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "white"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "white",
    stopOpacity: "0"
  }))));
};

exports.RollupIconLight = RollupIconLight;