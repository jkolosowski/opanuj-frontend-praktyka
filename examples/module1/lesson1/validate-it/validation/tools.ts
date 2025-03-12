const isEven = (input: number): boolean => input % 2 == 0;

const isGreaterThan =
  (boundary: number) =>
  (input: number): boolean =>
    input > boundary;

const isLessThan =
  (boundary: number) =>
  (input: number): boolean =>
    input < boundary;

export const isValidInteger = (value: string): boolean =>
  value != '' && Number.isInteger(Number(value));

export const NUMBER_VALIDATORS = [isEven, isGreaterThan(0), isLessThan(100)];
