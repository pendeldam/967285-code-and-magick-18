document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];

var randomStats = {
  name: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surname: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
};

var getRandomColor = function (color) {
  return color[Math.floor(Math.random() * color.length)];
};

var getRandomName = function (name, surname) {
  var randomName = name[Math.floor(Math.random() * name.length)];
  var randomSurname = surname[Math.floor(Math.random() * surname.length)];
  return randomName + ' ' + randomSurname;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

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
