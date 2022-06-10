const btnLogin = document.getElementById('btn-login');
const emailInput = document.getElementById('input-email1');
const passwordInput = document.getElementById('input-password');
const form = document.getElementById('evaluation-form');
const hiddenForm = document.getElementById('form-data');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputSelect = document.getElementById('house');
const inputCheckbox = document.getElementsByClassName('checkbox');
const inputContent = document.getElementsByClassName('subject');
const inputRate = document.getElementsByClassName('rate');
const inputTextArea = document.getElementById('textarea');
const checkboxArray = [];
const rateArray = [];
const contentArray = [];

function alertLogin() {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', alertLogin);

function verifyCheck(event) {
  const btnSubmit = document.getElementById('submit-btn');
  if (event.target.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
function checkStatus() {
  const check = document.getElementById('agreement');
  check.addEventListener('click', verifyCheck);
}
checkStatus();

function count() {
  const textArea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  const counterNumber = 500 - textArea.value.length;
  counter.innerText = counterNumber;
  textArea.addEventListener('input', count);
}

count();

function getRateValue() {
  for (let i = 0; i < inputRate.length; i += 1) {
    if (inputRate[i].checked === true) {
      rateArray.push(inputRate[i].value);
    }
  }
  return rateArray;
}

function getContentValue() {
  for (let i = 0; i < inputContent.length; i += 1) {
    if (inputContent[i].checked === true) {
      contentArray.push(inputContent[i].value);
    }
  }
  return contentArray;
}

function getCheckboxValue() {
  for (let i = 0; i < inputCheckbox.length; i += 1) {
    if (inputCheckbox[i].checked === true) {
      checkboxArray.push(inputCheckbox[i].value);
    }
  }
  return checkboxArray;
}

function generateFormData(e) {
  e.preventDefault();
  form.style.display = 'none';
  hiddenForm.style.display = 'flex';
  hiddenForm.innerText = `
  Nome: ${inputName.value} ${inputLastName.value}
  Email: ${inputEmail.value}
  Casa: ${inputSelect.value}
  Família: ${getCheckboxValue()}
  Matérias: ${getContentValue().join(', ')}
  Avaliação: ${getRateValue()}
  Observações: ${inputTextArea.value}`;
}

form.addEventListener('submit', generateFormData);
