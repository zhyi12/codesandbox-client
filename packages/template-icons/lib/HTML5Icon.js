

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTML5IconLight = exports.HTML5IconDark = exports.HTML5Icon = void 0;

const _react = _interopRequireDefault(require("react"));

const _SVGIcon = require("./SVGIcon");

const _useUniqueId = require("./useUniqueId");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const HTML5Icon = function HTML5Icon(_ref) {
  const props = { ..._ref};

  const id = (0, _useUniqueId.useUniqueId)();
  return /* #__PURE__ */_react.default.createElement(_SVGIcon.SVGIcon, props, /* #__PURE__ */_react.default.createElement("g", {
    clipPath: "url(#HTML5_Clip0_".concat(id, ")")
  }, /* #__PURE__ */_react.default.createElement("path", {
    d: "M30.216 0L27.6454 28.7967L16.0907 32L4.56783 28.8012L2 0H30.216Z",
    fill: "#E44D26"
  }), /* #__PURE__ */_react.default.createElement("path", {
    d: "M16.108 29.5515L25.4447 26.963L27.6415 2.35497H16.108V29.5515Z",
    fill: "#F16529"
  }), /* #__PURE__ */_react.default.createElement("path", {
    d: "M11.1109 9.4197H16.108V5.88731H7.25053L7.33509 6.83499L8.20327 16.5692H16.108V13.0369H11.4338L11.1109 9.4197Z",
    fill: "#EBEBEB"
  }), /* #__PURE__ */_react.default.createElement("path", {
    d: "M11.907 18.3354H8.36111L8.856 23.8818L16.0917 25.8904L16.108 25.8859V22.2108L16.0925 22.2149L12.1585 21.1527L11.907 18.3354Z",
    fill: "#EBEBEB"
  }), /* #__PURE__ */_react.default.createElement("path", {
    d: "M16.0958 16.5692H20.4455L20.0354 21.1504L16.0958 22.2138V25.8887L23.3373 23.8817L23.3904 23.285L24.2205 13.9855L24.3067 13.0369H16.0958V16.5692Z",
    fill: "white"
  }), /* #__PURE__ */_react.default.createElement("path", {
    d: "M16.0958 9.41105V9.41969H24.6281L24.6989 8.62572L24.8599 6.83499L24.9444 5.88731H16.0958V9.41105Z",
    fill: "white"
  })), /* #__PURE__ */_react.default.createElement("defs", null, /* #__PURE__ */_react.default.createElement("clipPath", {
    id: "HTML5_Clip0_".concat(id)
  }, /* #__PURE__ */_react.default.createElement("rect", {
    width: "32",
    height: "32",
    fill: "white"
  }))));
};

exports.HTML5Icon = HTML5Icon;

const HTML5IconDark = function HTML5IconDark(_ref2) {
  const props = { ..._ref2};

  return /* #__PURE__ */_react.default.createElement(_SVGIcon.SVGIcon, props, /* #__PURE__ */_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M25.7224 27.5145L28 2H3L5.27515 27.5185L15.4847 30.3527L25.7224 27.5145ZM7.65209 7.2163H15.4892H15.5H23.3292L23.2544 8.05596L23.1118 9.64259L23.049 10.3461H15.5H11.0725L11.3585 13.551H15.5H22.7642L22.6878 14.3914L21.9524 22.631L21.9053 23.1598L15.5 24.935V24.9355L15.4856 24.9395L9.07456 23.1598L8.63609 18.2456H11.7779L12.0007 20.7417L15.4863 21.6829L15.4892 21.6822V21.6819L18.9798 20.7398L19.3431 16.6807H15.4892H8.49624L7.72701 8.05596L7.65209 7.2163Z",
    fill: "black",
    fillOpacity: "0.4"
  }), /* #__PURE__ */_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.7726 25.8899L15.5 28.1833V24.935L21.9053 23.1598L21.9524 22.631L22.6878 14.3914L22.7642 13.551H15.5V10.3461H23.049L23.1118 9.64259L23.2544 8.05596L23.3292 7.2163H15.5V4.08656H25.7189L23.7726 25.8899ZM15.5 16.6807V21.679L18.9798 20.7398L19.3431 16.6807H15.5Z",
    fill: "black"
  }));
};

exports.HTML5IconDark = HTML5IconDark;

const HTML5IconLight = function HTML5IconLight(_ref3) {
  const props = { ..._ref3};

  return /* #__PURE__ */_react.default.createElement(_SVGIcon.SVGIcon, props, /* #__PURE__ */_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M25.7224 27.5145L28 2H3L5.27515 27.5185L15.4847 30.3527L25.7224 27.5145ZM7.65209 7.2163H15.4892H15.5H23.3292L23.2544 8.05596L23.1118 9.64259L23.049 10.3461H15.5H11.0725L11.3585 13.551H15.5H22.7642L22.6878 14.3914L21.9524 22.631L21.9053 23.1598L15.5 24.935V24.9355L15.4856 24.9395L9.07456 23.1598L8.63609 18.2456H11.7779L12.0007 20.7417L15.4863 21.6829L15.4892 21.6822V21.6819L18.9798 20.7398L19.3431 16.6807H15.4892H8.49624L7.72701 8.05596L7.65209 7.2163Z",
    fill: "white",
    fillOpacity: "0.4"
  }), /* #__PURE__ */_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.7726 25.8899L15.5 28.1833V24.935L21.9053 23.1598L21.9524 22.631L22.6878 14.3914L22.7642 13.551H15.5V10.3461H23.049L23.1118 9.64259L23.2544 8.05596L23.3292 7.2163H15.5V4.08656H25.7189L23.7726 25.8899ZM15.5 16.6807V21.679L18.9798 20.7398L19.3431 16.6807H15.5Z",
    fill: "white"
  }), /* #__PURE__ */_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M25.7224 27.5145L28 2H3L5.27515 27.5185L15.4847 30.3527L25.7224 27.5145ZM7.65209 7.2163H15.4892H15.5H23.3292L23.2544 8.05596L23.1118 9.64259L23.049 10.3461H15.5H11.0725L11.3585 13.551H15.5H22.7642L22.6878 14.3914L21.9524 22.631L21.9053 23.1598L15.5 24.935V24.9355L15.4856 24.9395L9.07456 23.1598L8.63609 18.2456H11.7779L12.0007 20.7417L15.4863 21.6829L15.4892 21.6822V21.6819L18.9798 20.7398L19.3431 16.6807H15.4892H8.49624L7.72701 8.05596L7.65209 7.2163Z",
    fill: "white",
    fillOpacity: "0.4"
  }), /* #__PURE__ */_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.7726 25.8899L15.5 28.1833V24.935L21.9053 23.1598L21.9524 22.631L22.6878 14.3914L22.7642 13.551H15.5V10.3461H23.049L23.1118 9.64259L23.2544 8.05596L23.3292 7.2163H15.5V4.08656H25.7189L23.7726 25.8899ZM15.5 16.6807V21.679L18.9798 20.7398L19.3431 16.6807H15.5Z",
    fill: "white"
  }));
};

exports.HTML5IconLight = HTML5IconLight;