"use strict";
exports.__esModule = true;
exports.validate = void 0;
exports.validate = function (input) {
    var isValid = input.checkValidity();
    if (!isValid) {
        var message = 'foo';
        input.setCustomValidity(message);
    }
};
