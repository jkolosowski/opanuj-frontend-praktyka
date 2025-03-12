export type CalculationResult = {
  result: number;
  error?: string;
};

export const add = (num1: number, num2: number): CalculationResult => ({
  result: num1 + num2,
});

export const subtract = (num1: number, num2: number): CalculationResult => ({
  result: num1 - num2,
});

export const multiply = (num1: number, num2: number): CalculationResult => ({
  result: num1 * num2,
});

export const divide = (num1: number, num2: number): CalculationResult => ({
  result: num1 / num2,
  error: num2 === 0 ? 'Cannot divide by zero' : undefined,
});
