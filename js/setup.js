document.querySelector('.setup-similar').classList.remove('hidden');
var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];
var KEYCODE_ESC = 27;
var KEYCODE_ENTER = 13;

var randomStats = {
  name: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surname: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
  fireballColor: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getRandomColor = function (color) {
  return color[getRandomNumber(0, color.length)];
};

var getRandomName = function (name, surname) {
  var randomName = name[getRandomNumber(0,  name.length)];
  var randomSurname = surname[getRandomNumber(0, surname.length)];
  return randomName + ' ' + randomSurname;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var onCloseSetup = function (evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    closeSetupHandler();
  }
};

var openSetupHandler = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onCloseSetup);
};

var closeSetupHandler = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onCloseSetup);
};

document.querySelector('.setup-open').addEventListener('click', openSetupHandler);
setup.querySelector('.setup-close').addEventListener('click', closeSetupHandler);

document.querySelector('.setup-open').addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ENTER) {
    openSetupHandler();
  }
});

setup.querySelector('.setup-close').addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ENTER) {
    closeSetupHandler();
  }
});

setup.querySelector('.setup-user-name').addEventListener('focus', function () {
  document.removeEventListener('keydown', onCloseSetup);
});

document.querySelector('.wizard-coat').addEventListener('click', function (evt) {
    evt.target.style.fill = setup.querySelector('input[name="coat-color"]').value = getRandomColor(randomStats.coatColor);
});

document.querySelector('.wizard-eyes').addEventListener('click', function (evt) {
  evt.target.style.fill = setup.querySelector('input[name="eyes-color"]').value = getRandomColor(randomStats.eyesColor);
});

document.querySelector('.setup-fireball-wrap').addEventListener('click', function (evt) {
  evt.target.parentElement.style.backgroundColor = setup.querySelector('input[name="fireball-color"]').value = getRandomColor(randomStats.fireballColor);
});

for (var i = 0; i < 4; i++) {
  var wizard = {
    name: getRandomName(randomStats.name, randomStats.surname),
    coatColor: getRandomColor(randomStats.coatColor),
    eyesColor: getRandomColor(randomStats.eyesColor)
  };
  wizards.push(wizard);
}

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);
