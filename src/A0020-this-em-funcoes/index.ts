import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessages(this);
  console.log('ENVIANDO...');

  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(this)) console.log('Formulário enviado');
});

function checkForEmptyFields(...inputs: Array<HTMLInputElement>): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Este campo não pode ficar vazio');
  });
}

function showErrorMessage(input: HTMLInputElement, message: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = message;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => {
    item.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'E-mail inválido!');
}

function checkEqualPasswords(input: HTMLInputElement, input2: HTMLInputElement): void {
  if (input.value !== input2.value) {
    showErrorMessage(input, 'A confirmação da senha está incorreta');
    showErrorMessage(input2, 'A confirmação da senha está incorreta');
  }
}

function shouldSendForm(form: HTMLFormElement): boolean {
  return form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).length > 0 ? false : true;
}
