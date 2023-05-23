"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OscdCheckbox = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
// eslint-disable-next-line import/no-duplicates
require("@material/mwc-checkbox");
var optional_form_control_js_1 = require("../form-control/optional-form-control.js");
var OscdCheckbox = /** @class */ (function (_super) {
    __extends(OscdCheckbox, _super);
    function OscdCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultChecked = false;
        _this.initChecked = false;
        _this.deactivateCheckbox = false;
        return _this;
    }
    // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
    OscdCheckbox.prototype.setCustomValidity = function (validity) {
        // Do nothing
    };
    // eslint-disable-next-line class-methods-use-this
    OscdCheckbox.prototype.reportValidity = function () {
        return true;
    };
    Object.defineProperty(OscdCheckbox.prototype, "checked", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.checked) !== null && _b !== void 0 ? _b : this.initChecked;
        },
        set: function (value) {
            if (this.formControl)
                this.formControl.checked = value;
            else
                this.initChecked = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OscdCheckbox.prototype, "formFieldLabel", {
        get: function () {
            return this.helper ? this.helper + " (" + this.label + ")" : this.label || '';
        },
        enumerable: false,
        configurable: true
    });
    // eslint-disable-next-line class-methods-use-this
    OscdCheckbox.prototype.validate = function () {
        return true;
    };
    OscdCheckbox.prototype.renderFormControl = function () {
        return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<mwc-checkbox\n      ?checked=", "\n      ?disabled=", "\n      ?required=", "\n      .label=", "\n      .helper=", "\n      .validationMessage=", "\n    ></mwc-checkbox>"], ["<mwc-checkbox\n      ?checked=", "\n      ?disabled=", "\n      ?required=", "\n      .label=", "\n      .helper=", "\n      .validationMessage=", "\n    ></mwc-checkbox>"])), this.checked, this.deactivateCheckbox || this.disabled, this.required, this.label || '', this.helper, this.validationMessage);
    };
    OscdCheckbox.prototype.enable = function () {
        if (this.nulled === null)
            return;
        this.checked = this.nulled === 'true';
        this.nulled = null;
        this.deactivateCheckbox = false;
    };
    OscdCheckbox.prototype.disable = function () {
        if (this.nulled !== null)
            return;
        this.nulled = this.checked.toString();
        this.checked = this.defaultChecked;
        this.deactivateCheckbox = true;
    };
    OscdCheckbox.prototype.firstUpdated = function () {
        this.requestUpdate();
    };
    OscdCheckbox.styles = lit_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    :host {\n      --mdc-checkbox-checked-color: var(\n        --oscd-color-checkbox-background,\n        var(--oscd-color-secondary)\n      );\n    }\n  "], ["\n    :host {\n      --mdc-checkbox-checked-color: var(\n        --oscd-color-checkbox-background,\n        var(--oscd-color-secondary)\n      );\n    }\n  "])));
    __decorate([
        decorators_js_1.property({ type: Boolean })
    ], OscdCheckbox.prototype, "defaultChecked");
    __decorate([
        decorators_js_1.query('mwc-checkbox')
    ], OscdCheckbox.prototype, "formControl");
    __decorate([
        decorators_js_1.state()
    ], OscdCheckbox.prototype, "checked");
    __decorate([
        decorators_js_1.state()
    ], OscdCheckbox.prototype, "deactivateCheckbox");
    __decorate([
        decorators_js_1.state()
    ], OscdCheckbox.prototype, "formFieldLabel");
    return OscdCheckbox;
}(optional_form_control_js_1.OptionalFormControl));
exports.OscdCheckbox = OscdCheckbox;
var templateObject_1, templateObject_2;
