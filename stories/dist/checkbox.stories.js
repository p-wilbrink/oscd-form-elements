"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Regular = void 0;
var lit_1 = require("lit");
require("../dist/src/checkbox/oscd-checkbox.js");
exports["default"] = {
    title: 'OscdCheckbox',
    component: 'oscd-checkbox',
    argTypes: {
        label: { control: 'text' },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
        nullable: { control: 'boolean' },
        helper: { control: 'text' },
        validationMessage: { control: 'text' },
        checked: { control: 'boolean' }
    }
};
var Template = function (_a) {
    var label = _a.label, disabled = _a.disabled, required = _a.required, nullable = _a.nullable, helper = _a.helper, validationMessage = _a.validationMessage, checked = _a.checked, slot = _a.slot;
    return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  <oscd-checkbox\n    .label=", "\n    ?disabled=", "\n    ?required=", "\n    ?nullable=", "\n    helper=", "\n    .validationMessage=", "\n    ?checked=", "\n    style=\"max-width:200px; display:block;\"\n    >", "</oscd-checkbox\n  >\n"], ["\n  <oscd-checkbox\n    .label=", "\n    ?disabled=", "\n    ?required=", "\n    ?nullable=", "\n    helper=", "\n    .validationMessage=", "\n    ?checked=", "\n    style=\"max-width:200px; display:block;\"\n    >", "</oscd-checkbox\n  >\n"])), label, disabled, required, nullable, helper || '', validationMessage || '', checked, slot);
};
exports.Regular = Template.bind({});
exports.Regular.args = {
    label: 'Storybook',
    disabled: false,
    required: false,
    helper: 'Helper text',
    validationMessage: 'Validation Message',
    slot: lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<mwc-list-item value=\"1\">1</mwc-list-item\n    ><mwc-list-item value=\"2\">2</mwc-list-item>"], ["<mwc-list-item value=\"1\">1</mwc-list-item\n    ><mwc-list-item value=\"2\">2</mwc-list-item>"])))
};
var templateObject_1, templateObject_2;
