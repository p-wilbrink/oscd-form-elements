export interface IFormControl {
  value: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  helper?: string;
  validationMessage?: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  suffix?: string;
  helperPersistent?: boolean;
}
