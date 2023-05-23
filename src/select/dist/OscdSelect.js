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
exports.OscdSelect = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
// eslint-disable-next-line import/no-duplicates
require("@material/mwc-select");
var optional_form_control_js_1 = require("../form-control/optional-form-control.js");
var OscdSelect = /** @class */ (function (_super) {
    __extends(OscdSelect, _super);
    function OscdSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OscdSelect.prototype.setCustomValidity = function (validity) {
        this.formControl.setCustomValidity(validity);
    };
    OscdSelect.prototype.reportValidity = function () {
        return this.formControl.reportValidity();
    };
    Object.defineProperty(OscdSelect.prototype, "formFieldLabel", {
        // eslint-disable-next-line class-methods-use-this
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    OscdSelect.prototype.validate = function () {
        return this.formControl.checkValidity();
    };
    OscdSelect.prototype.renderFormControl = function () {
        var _this = this;
        return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<mwc-select\n      .value=", "\n      ?disabled=", "\n      ?required=", "\n      min=", "\n      max=", "\n      minLength=", "\n      maxLength=", "\n      .label=", "\n      .helper=", "\n      .validationMessage=", "\n      @selected=", "\n      ><slot></slot\n    ></mwc-select>"], ["<mwc-select\n      .value=", "\n      ?disabled=", "\n      ?required=", "\n      min=", "\n      max=", "\n      minLength=", "\n      maxLength=", "\n      .label=", "\n      .helper=", "\n      .validationMessage=", "\n      @selected=",
            "\n      ><slot></slot\n    ></mwc-select>"])), this.value, this.disabled, this.required, this.min, this.max, this.minLength, this.maxLength, this.label || '', this.helper, this.validationMessage, function () {
            _this.value = _this.formControl.value;
        });
    };
    __decorate([
        decorators_js_1.query('mwc-select')
    ], OscdSelect.prototype, "formControl");
    __decorate([
        decorators_js_1.state()
    ], OscdSelect.prototype, "formFieldLabel");
    return OscdSelect;
}(optional_form_control_js_1.OptionalFormControl));
exports.OscdSelect = OscdSelect;
var templateObject_1;
