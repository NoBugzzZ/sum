"use strict";
exports.__esModule = true;
var sum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, curr) { return prev + curr; }, 0);
};
exports["default"] = sum;
