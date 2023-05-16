import { LitElement, TemplateResult } from 'lit';

import { property, state } from 'lit/decorators.js';
import { isFormInputElement } from '../lib/foundation.js';
import { IFormControl } from './iform-control.js';

export abstract class FormControl<T extends HTMLElement>
  extends LitElement
  implements IFormControl
{
  @property({
    type: String,
  })
  value: string = '';

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

  @property({ type: Array })
  reservedValues: string[] = [];

  @state()
  get valid(): boolean {
    return isFormInputElement(this.formControl)
      ? this.formControl.checkValidity()
      : this.validate();
  }

  protected abstract validate(): boolean;

  public checkValidity(): boolean {
    if (
      this.reservedValues &&
      this.reservedValues.some(array => array === this.value)
    ) {
      this.setCustomValidity('textfield.unique');
      return false;
    }
    this.setCustomValidity('');

    if (isFormInputElement(this.formControl)) {
      this.formControl.checkValidity();
    }

    return true;
  }

  public abstract setCustomValidity(validity: string): void;

  public reportValidity(): boolean {
    const res = this.checkValidity();

    return isFormInputElement(this.formControl)
      ? this.formControl.reportValidity()
      : res;
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
