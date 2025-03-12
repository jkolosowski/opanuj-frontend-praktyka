import { NUMBER_VALIDATORS } from './validation/tools';
import { validate } from './validation/validator';

function validator() {
  const input: HTMLInputElement = document.querySelector('input')!;
  const validateButton: HTMLElement =
    document.querySelector('#validation-btn')!;
  const clearInputButton: HTMLElement = document.querySelector('#cleanup-btn')!;
  const result: HTMLElement = document.querySelector('#result')!;

  validateButton.addEventListener('click', () => {
    const validationMessage = validate(input.value, NUMBER_VALIDATORS);
    result.innerHTML = validationMessage;
  });

  clearInputButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
