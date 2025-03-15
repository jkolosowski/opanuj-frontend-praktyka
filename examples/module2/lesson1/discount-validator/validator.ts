export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }

  if (firstName.trim().length < 1) {
    errors.push('First name must be at least 1 character long');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (lastName.trim().length < 1) {
    errors.push('Last name must be at least 1 character long');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  if (isNaN(age)) {
    errors.push('Age must be a number');
  }

  return errors;
}
