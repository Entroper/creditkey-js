"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../styles/index.sass"));

var _platform = require("../../utils/platform");

var _modal = _interopRequireDefault(require("./modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(key, label, type, size, slug, styles) {
  if (size === void 0) {
    size = "medium";
  }

  if (slug === void 0) {
    slug = "";
  }

  var host = (0, _platform.pdpHost)(_platform.api);

  var logo_url = function logo_url(s) {
    return 'https://s3-us-west-2.amazonaws.com/creditkey-assets/sdk/ck-logo-white-' + s + '.svg';
  };

  var buttonClass;

  switch (size) {
    case 'small':
      buttonClass = "is-small";
      break;

    case 'medium':
      buttonClass = "is-normal";
      break;

    case 'large':
      buttonClass = "is-fullwidth";
      break;
  }

  switch (type) {
    case "checkout":
      return "<span class=\"creditkey\"><a class=\"button is-link " + buttonClass + "\" style=\"" + styles + "\">\n          <img src=\"" + logo_url(size) + "\" class=\"ck-logo-" + size + "\" />\n          " + label + "\n        </a>\n        <a href=\"" + slug + "\" class=\"terms\" target=\"_new\">See Terms</a>\n      </span>";
      break;

    case "pdp":
      return "<span class=\"creditkey\"><a href=\"" + host + "/apply/start/" + key + "\" target=\"_new\" class=\"button is-link " + buttonClass + "\" style=\"" + styles + "\">\n          <span class=\"pdp\">" + label + "</span> <span style=\"padding: 0 5px 0 0;\">with</span>\n          <img src=\"" + logo_url(size) + "\" class=\"ck-logo-" + size + " \"/>\n        </a>\n      </span>";
      break;

    case "modal-pdp":
      return "<span class=\"creditkey\"><a onclick=\"modal(" + host + "/apply/start/" + key + ")\" class=\"button is-link " + buttonClass + "\" style=\"" + styles + "\">\n          <span class=\"pdp\">" + label + "</span> <span style=\"padding: 0 5px 0 0;\">with</span>\n          <img src=\"" + logo_url(size) + "\" class=\"ck-logo-" + size + " \"/>\n        </a>\n      </span>";
      break;

    default:
      return "<span class=\"creditkey\"><a class=\"button is-link " + buttonClass + "\" style=\"" + styles + "\">\n          <img src=\"" + logo_url(size) + "\" class=\"ck-logo-" + size + "\" />\n          " + label + "\n        </a>\n        <a href=\"" + slug + "\" class=\"terms\" target=\"_new\">See Terms</a>\n      </span>";
  }
};

var _default = Button;
exports["default"] = _default;
module.exports = exports.default;