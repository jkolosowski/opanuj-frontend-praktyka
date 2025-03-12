import { isValidInteger } from './tools';

export const validate = (
  input: string,
  tools: ((input: number) => boolean)[]
) => {
  if (!isValidInteger(input)) return 'Invalid - empty or non integer';

  const isValidRangeInteger = tools.every((tool) => tool(Number(input)));
  if (!isValidRangeInteger) return 'Invalid number';

  return 'Valid number';
};
