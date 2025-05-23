// Validator encapsulating business logic, without any dependencies on the outside world.
import {
  MESSAGE_ERROR_INVALID_INPUT,
  MESSAGE_ERROR_INVALID_INT,
  MESSAGE_SUCCESS_VALID_INT,
} from './messages';
import { isValidInteger } from './methods';
import type { NumericValidationMethod } from './methods';

export function validate(
  input: string,
  validators: NumericValidationMethod[]
): string {
  if (!isValidInteger(input)) {
    return MESSAGE_ERROR_INVALID_INPUT;
  }

  const isValidRangeInteger = validators.every((validateFn) =>
    validateFn(Number(input))
  );

  if (!isValidRangeInteger) {
    return MESSAGE_ERROR_INVALID_INT;
  }

  return MESSAGE_SUCCESS_VALID_INT;
}
