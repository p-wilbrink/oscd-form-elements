import { html, TemplateResult } from 'lit';

import { IFormControl } from '../form-control/iform-control.js';
import { IOptionalFormControl } from '../form-control/ioptional-form-control.js';

export type FormControlType = 'textfield' | 'select' | 'checkbox';

export const newTextfield = (
  blueprint: IOptionalFormControl
): TemplateResult => html`<oscd-textfield
  .value=${blueprint.value}
  .defaultValue=${blueprint.defaultValue || ''}
></oscd-textfield>`;

export const newSelect = (
  blueprint: IOptionalFormControl
): TemplateResult => html`<oscd-select
  .value=${blueprint.value}
  .defaultValue=${blueprint.defaultValue || ''}
></oscd-select>`;

export const newCheckbox = (
  blueprint: IOptionalFormControl
): TemplateResult => html`<oscd-checkbox
  .value=${blueprint.value}
  .defaultValue=${blueprint.defaultValue || ''}
></oscd-checkbox>`;

export const newFormControl = (
  type: FormControlType,
  blueprint: IFormControl
): TemplateResult => {
  let result: TemplateResult = html``;

  switch (type) {
    case 'textfield':
      result = newTextfield(blueprint as IOptionalFormControl);
      break;
    case 'select':
      result = newSelect(blueprint as IOptionalFormControl);
      break;
    case 'checkbox':
      result = newCheckbox(blueprint as IOptionalFormControl);
      break;
    default:
      result = html``;
      break;
  }

  return result;
};

export interface FormInputElement<T> {
  checkValidity(): boolean;
  reportValidity(): boolean;
  validity: ValidityState;
  value: T;
  setCustomValidity(error: string): void;
}

export const isFormInputElement = (
  element: any
): element is FormInputElement<any> =>
  element &&
  'checkValidity' in element &&
  'reportValidity' in element &&
  'validity' in element &&
  'value' in element &&
  'setCustomValidity' in element;
