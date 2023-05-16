import { FormInputElement } from './foundation.js';

export type ValidationMessage = string | (() => string);

export interface ValidationMessages {
  badInput?: ValidationMessage;
  patternMismatch?: ValidationMessage;
  rangeOverflow?: ValidationMessage;
  rangeUnderflow?: ValidationMessage;
  stepMismatch?: ValidationMessage;
  tooLong?: ValidationMessage;
  tooShort?: ValidationMessage;
  typeMismatch?: ValidationMessage;
  valueMissing?: ValidationMessage;
  custom?: {
    [customError: string]: ValidationMessage;
  };
}

const getValidationMessage = (
  validity: ValidityState,
  validationMessages: ValidationMessages
): ValidationMessage | undefined => {
  let validationMessage: ValidationMessage | undefined = 'DEFAULT_ERROR';

  if (validity.badInput) {
    validationMessage = validationMessages.badInput;
  }

  if (validity.patternMismatch) {
    validationMessage = validationMessages.patternMismatch;
  }

  if (validity.rangeOverflow) {
    validationMessage = validationMessages.rangeOverflow;
  }

  if (validity.rangeUnderflow) {
    validationMessage = validationMessages.rangeUnderflow;
  }

  if (validity.stepMismatch) {
    validationMessage = validationMessages.stepMismatch;
  }

  if (validity.tooLong) {
    validationMessage = validationMessages.tooLong;
  }

  if (validity.tooShort) {
    validationMessage = validationMessages.tooShort;
  }

  if (validity.typeMismatch) {
    validationMessage = validationMessages.typeMismatch;
  }

  if (validity.valueMissing) {
    validationMessage = validationMessages.valueMissing;
  }

  if (validity.customError) {
    validationMessage = validationMessages.custom?.a;
  }

  return validationMessage;
};

export const validate = <T = any>(
  input: FormInputElement<T>,
  validationMessages: ValidationMessages
): void => {
  const isValid = input.checkValidity();

  if (!isValid) {
    const validationMessage: ValidationMessage =
      getValidationMessage(input.validity, validationMessages) ||
      'DEFAULT_ERROR';

    const message: string =
      typeof validationMessage === 'string'
        ? validationMessage
        : validationMessage();

    input.setCustomValidity(message);
  }
};
