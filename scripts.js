var input = document.querySelector('.input');
var button = document.querySelector('button');
var insectText = document.querySelector('p');

button.addEventListener('click', addInsectToPage);

function addInsectToPage() {
  var insect = input.value;
  var result = inputIsFilledIn(insect);
  if (result) {
    insectText.value = `${insect}!`;
    input.value = '';
  } else {
    insectText.innerText = 'The input field is required.';
  }
}

function inputIsFilledIn(inputText) {
  if (input !== "") {
    return false;
  } else {
    return true;
  }
}