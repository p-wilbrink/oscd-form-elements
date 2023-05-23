import { LitElement, TemplateResult } from 'lit';

import { property, state } from 'lit/decorators.js';
import { isFormInputElement } from '../lib/foundation.js';
import { validate, ValidationResult } from '../lib/validation/validate.js';
import { ValidatorFn } from '../lib/validation/validator-fn.js';
import { IFormControl } from './iform-control.js';

export abstract class FormControl<T extends HTMLElement>
  extends LitElement
  implements IFormControl
{
  @property({
    type: String,
  })
  set value(value: string) {
    this._value = value;

    if (isFormInputElement(this.formControl)) {
      this.formControl.value = value;
    }
  }

  get value(): string {
    console.log('Getting value');
    return isFormInputElement(this.formControl)
      ? this.formControl.value
      : this._value;
  }

  private _value: string = '';

  @property({
    type: Boolean,
  })
  required: boolean = false;

  @property({
    type: Boolean,
    reflect: true,
  })
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  private _disabled: boolean = false;

  @property({
    type: String,
    reflect: true,
  })
  label?: string;

  @property({
    type: String,
  })
  helper: string = '';

  @property({
    type: String,
  })
  validationMessage: string = '';

  @property({
    type: Number,
  })
  min: number = -1;

  @property({
    type: Number,
  })
  max: number = -1;

  @property({
    type: Number,
  })
  minLength: number = -1;

  @property({
    type: Number,
  })
  maxLength: number = -1;

  @property({
    type: String,
  })
  suffix?: string;

  @property({
    type: Boolean,
  })
  helperPersistent: boolean = false;

  @state()
  get valid(): boolean {
    return isFormInputElement(this.formControl)
      ? this.formControl.checkValidity()
      : this.validate();
  }

  @property({
    type: Array,
  })
  validationRules: ValidatorFn[] = [];

  protected abstract validate(): boolean;

  public checkValidity(): boolean {
    if (isFormInputElement(this.formControl)) {
      return this.formControl.checkValidity();
    }

    return true;
  }

  public abstract setCustomValidity(validity: string): void;

  public reportValidity(): boolean {
    if (isFormInputElement(this.formControl)) {
      const validationResult: ValidationResult = validate(
        this.formControl,
        this.validationRules
      );
      if (!validationResult.valid) {
        this.setCustomValidity(validationResult.messages[0]);
      }

      this.formControl.reportValidity();
      return validationResult.valid;
    }

    const validationResult: ValidationResult = validate(
      this,
      this.validationRules
    );

    if (!validationResult.valid) {
      this.setCustomValidity(validationResult.messages[0]);
    }

    return validationResult.valid;
  }

  public get validity(): ValidityState | undefined {
    if (isFormInputElement(this.formControl)) {
      return this.formControl.validity;
    }

    return undefined;
  }

  protected abstract get formControl(): T;

  protected abstract renderFormControl(): TemplateResult;
}
