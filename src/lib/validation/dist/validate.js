"use strict";
exports.__esModule = true;
exports.validate = void 0;
exports.validate = function (valueAccessor, rules) {
    var errors = rules
        .map(function (rule) { return rule(valueAccessor); })
        .filter(function (x) { return x; })
        .map(function (x) { return x; });
    return {
        valid: errors.length === 0,
        messages: errors
    };
};
