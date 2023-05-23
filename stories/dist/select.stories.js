"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Regular = void 0;
var lit_1 = require("lit");
var if_defined_js_1 = require("lit/directives/if-defined.js");
require("../dist/src/select/oscd-select.js");
exports["default"] = {
    title: 'OscdSelect',
    component: 'oscd-select',
    argTypes: {
        value: { control: 'text' },
        maybeValue: { control: 'text' },
        label: { control: 'text' },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
        nullable: { control: 'boolean' },
        minLength: { control: 'range' },
        maxLength: { control: 'range' },
        helper: { control: 'text' },
        validationMessage: { control: 'text' },
        defaultValue: { control: 'text' }
    }
};
var Template = function (_a) {
    var label = _a.label, value = _a.value, maybeValue = _a.maybeValue, disabled = _a.disabled, required = _a.required, nullable = _a.nullable, minLength = _a.minLength, maxLength = _a.maxLength, helper = _a.helper, validationMessage = _a.validationMessage, defaultValue = _a.defaultValue, slot = _a.slot;
    return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  <oscd-select\n    .label=", "\n    .value=", "\n    .maybeValue=", "\n    .defaultValue=", "\n    ?disabled=", "\n    ?required=", "\n    ?nullable=", "\n    minLength=", "\n    maxLength=", "\n    helper=", "\n    .validationMessage=", "\n    style=\"max-width:200px; display:block;\"\n    >", "</oscd-select\n  >\n"], ["\n  <oscd-select\n    .label=", "\n    .value=", "\n    .maybeValue=", "\n    .defaultValue=", "\n    ?disabled=", "\n    ?required=", "\n    ?nullable=", "\n    minLength=", "\n    maxLength=", "\n    helper=", "\n    .validationMessage=", "\n    style=\"max-width:200px; display:block;\"\n    >", "</oscd-select\n  >\n"])), label, value, maybeValue || '', defaultValue || '', disabled, required, nullable, if_defined_js_1.ifDefined(minLength), if_defined_js_1.ifDefined(maxLength), helper || '', validationMessage || '', slot);
};
exports.Regular = Template.bind({});
exports.Regular.args = {
    label: 'Storybook',
    value: 'Test Value',
    disabled: false,
    required: false,
    minLength: -1,
    maxLength: -1,
    helper: 'Helper text',
    validationMessage: 'Validation Message',
    slot: lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<mwc-list-item value=\"1\">1</mwc-list-item\n    ><mwc-list-item value=\"2\">2</mwc-list-item>"], ["<mwc-list-item value=\"1\">1</mwc-list-item\n    ><mwc-list-item value=\"2\">2</mwc-list-item>"])))
};
var templateObject_1, templateObject_2;
