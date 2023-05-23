"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.isFormInputElement = exports.newFormControl = exports.newCheckbox = exports.newSelect = exports.newTextfield = void 0;
var lit_1 = require("lit");
exports.newTextfield = function (blueprint) { return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<oscd-textfield\n  .value=", "\n  .defaultValue=", "\n></oscd-textfield>"], ["<oscd-textfield\n  .value=", "\n  .defaultValue=", "\n></oscd-textfield>"])), blueprint.value, blueprint.defaultValue || ''); };
exports.newSelect = function (blueprint) { return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<oscd-select\n  .value=", "\n  .defaultValue=", "\n></oscd-select>"], ["<oscd-select\n  .value=", "\n  .defaultValue=", "\n></oscd-select>"])), blueprint.value, blueprint.defaultValue || ''); };
exports.newCheckbox = function (blueprint) { return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<oscd-checkbox\n  .value=", "\n  .defaultValue=", "\n></oscd-checkbox>"], ["<oscd-checkbox\n  .value=", "\n  .defaultValue=", "\n></oscd-checkbox>"])), blueprint.value, blueprint.defaultValue || ''); };
exports.newFormControl = function (type, blueprint) {
    var result = lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
    switch (type) {
        case 'textfield':
            result = exports.newTextfield(blueprint);
            break;
        case 'select':
            result = exports.newSelect(blueprint);
            break;
        case 'checkbox':
            result = exports.newCheckbox(blueprint);
            break;
        default:
            result = lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
            break;
    }
    return result;
};
exports.isFormInputElement = function (element) {
    return element &&
        'checkValidity' in element &&
        'reportValidity' in element &&
        'validity' in element &&
        'value' in element &&
        'setCustomValidity' in element;
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
