(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ReactBeaconFullsteak = factory());
}(this, (function () { 'use strict';

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var React = require("react");

  function ReactBeaconFullsteak (props) {
    var className = props.className,
        rest = objectWithoutProperties(props, ["className"]);

    return React.createElement(
      "div",
      _extends({ className: className }, rest),
      "🍔"
    );
  }

  return ReactBeaconFullsteak;

})));
