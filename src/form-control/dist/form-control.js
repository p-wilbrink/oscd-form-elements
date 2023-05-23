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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormControl = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
var foundation_js_1 = require("../lib/foundation.js");
var validate_js_1 = require("../lib/validation/validate.js");
var FormControl = /** @class */ (function (_super) {
    __extends(FormControl, _super);
    function FormControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = '';
        _this.required = false;
        _this._disabled = false;
        _this.helper = '';
        _this.validationMessage = '';
        _this.min = -1;
        _this.max = -1;
        _this.minLength = -1;
        _this.maxLength = -1;
        _this.helperPersistent = false;
        _this.validationRules = [];
        return _this;
    }
    Object.defineProperty(FormControl.prototype, "value", {
        get: function () {
            return foundation_js_1.isFormInputElement(this.formControl)
                ? this.formControl.value
                : this._value;
        },
        set: function (value) {
            this._value = value;
            if (foundation_js_1.isFormInputElement(this.formControl)) {
                this.formControl.value = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "valid", {
        get: function () {
            return foundation_js_1.isFormInputElement(this.formControl)
                ? this.formControl.checkValidity()
                : this.validate();
        },
        enumerable: false,
        configurable: true
    });
    FormControl.prototype.checkValidity = function () {
        if (foundation_js_1.isFormInputElement(this.formControl)) {
            return this.formControl.checkValidity();
        }
        return true;
    };
    FormControl.prototype.reportValidity = function () {
        if (foundation_js_1.isFormInputElement(this.formControl)) {
            var validationResult_1 = validate_js_1.validate(this.formControl, this.validationRules);
            if (!validationResult_1.valid) {
                this.setCustomValidity(validationResult_1.messages[0]);
            }
            this.formControl.reportValidity();
            return validationResult_1.valid;
        }
        var validationResult = validate_js_1.validate(this, this.validationRules);
        if (!validationResult.valid) {
            this.setCustomValidity(validationResult.messages[0]);
        }
        return validationResult.valid;
    };
    Object.defineProperty(FormControl.prototype, "validity", {
        get: function () {
            if (foundation_js_1.isFormInputElement(this.formControl)) {
                return this.formControl.validity;
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        decorators_js_1.property({
            type: String
        })
    ], FormControl.prototype, "value");
    __decorate([
        decorators_js_1.property({
            type: Boolean
        })
    ], FormControl.prototype, "required");
    __decorate([
        decorators_js_1.property({
            type: Boolean,
            reflect: true
        })
    ], FormControl.prototype, "disabled");
    __decorate([
        decorators_js_1.property({
            type: String,
            reflect: true
        })
    ], FormControl.prototype, "label");
    __decorate([
        decorators_js_1.property({
            type: String
        })
    ], FormControl.prototype, "helper");
    __decorate([
        decorators_js_1.property({
            type: String
        })
    ], FormControl.prototype, "validationMessage");
    __decorate([
        decorators_js_1.property({
            type: Number
        })
    ], FormControl.prototype, "min");
    __decorate([
        decorators_js_1.property({
            type: Number
        })
    ], FormControl.prototype, "max");
    __decorate([
        decorators_js_1.property({
            type: Number
        })
    ], FormControl.prototype, "minLength");
    __decorate([
        decorators_js_1.property({
            type: Number
        })
    ], FormControl.prototype, "maxLength");
    __decorate([
        decorators_js_1.property({
            type: String
        })
    ], FormControl.prototype, "suffix");
    __decorate([
        decorators_js_1.property({
            type: Boolean
        })
    ], FormControl.prototype, "helperPersistent");
    __decorate([
        decorators_js_1.state()
    ], FormControl.prototype, "valid");
    __decorate([
        decorators_js_1.property({
            type: Array
        })
    ], FormControl.prototype, "validationRules");
    return FormControl;
}(lit_1.LitElement));
exports.FormControl = FormControl;
