import { IFormControl } from './iform-control.js';

export interface IOptionalFormControl extends IFormControl {
  nullable?: boolean;
  maybeValue: string | undefined;
  defaultValue?: string;
  null?: boolean;
}
