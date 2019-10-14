'use strict';
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var coatColor = document.querySelector('.wizard-coat');
  var eyesColor = document.querySelector('.wizard-eyes');
  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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
  var getRandomName = function (name, surname) {
      var randomName = name[getRandomNumber(0,  name.length)];
      var randomSurname = surname[getRandomNumber(0, surname.length)];
      return randomName + ' ' + randomSurname;
    };
  var getRandomColor = function (color) {
      return color[getRandomNumber(0, color.length)];
    };
  var colorize = function (element, color, name) {
     element.addEventListener('click', function () {
       var randomColor = getRandomColor(color);
       if (element.tagName.toLowerCase() === 'div') {
         element.style.background = randomColor;
       } else {
          element.style.fill = randomColor;
       }
       setup.querySelector('input[name="' + name + '"]').value = randomColor;
     })
    };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

colorize(fireballColor, randomStats.fireballColor, 'fireball-color');
colorize(coatColor, randomStats.coatColor, 'coat-color');
colorize(eyesColor, randomStats.eyesColor, 'eyes-color');

  for (var i = 0; i < 4; i++) {
    var fragment = document.createDocumentFragment();
    var wizard = {
      name: getRandomName(randomStats.name, randomStats.surname),
      coatColor: getRandomColor(randomStats.coatColor),
      eyesColor: getRandomColor(randomStats.eyesColor)
    };
  fragment.appendChild(renderWizard(wizard));
  similarListElement.appendChild(fragment);
  }
})();
