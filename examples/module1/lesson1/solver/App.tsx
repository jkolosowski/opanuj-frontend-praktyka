import { useState } from 'react';
import Button from './components/Button';
import {
  add,
  subtract,
  multiply,
  divide,
  type CalculationResult,
} from './utils/calculations';

const App = () => {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);

  const [result, setResult] = useState(0);
  const [error, setError] = useState('');

  const calculateResult = (
    func: (a: number, b: number) => CalculationResult
  ) => {
    const calcResult = func(firstInput, secondInput);
    setResult(calcResult.error ? 0 : calcResult.result);
    setError(calcResult.error || '');
  };

  const parseInput = (value: string): number =>
    value === '' ? 0 : parseFloat(value);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstInput}
          onChange={(e) => setFirstInput(parseInput(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondInput}
          onChange={(e) => setSecondInput(parseInput(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculateResult(add)}>+</Button>
        <Button onClick={() => calculateResult(subtract)}>-</Button>
        <Button onClick={() => calculateResult(multiply)}>*</Button>
        <Button onClick={() => calculateResult(divide)}>/</Button>
      </div>
      <div>Result: {result}</div>
      {error && <span>{error}</span>}
    </div>
  );
};

export default App;
