(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  document.querySelector('.wizard-coat').addEventListener('click', function (evt) {
    evt.target.style.fill =
    setup.querySelector('input[name="coat-color"]').value =
    window.util.getRandomColor(window.util.randomStats.coatColor);
  });

  document.querySelector('.wizard-eyes').addEventListener('click', function (evt) {
    evt.target.style.fill =
    setup.querySelector('input[name="eyes-color"]').value =
    window.util.getRandomColor(window.util.randomStats.eyesColor);
  });

  document.querySelector('.setup-fireball-wrap').addEventListener('click', function (evt) {
    evt.target.parentElement.style.backgroundColor =
    setup.querySelector('input[name="fireball-color"]').value =
    window.util.getRandomColor(window.util.randomStats.fireballColor);
  });
/*
window.util.colorize(document.querySelector('.setup-fireball-wrap'), window.util.randomStats.fireballColor);
window.util.colorize(document.querySelector('.wizard-coat'), window.util.randomStats.coatColor);
window.util.colorize(document.querySelector('.wizard-eyes'), window.util.randomStats.eyesColor);
*/
  for (var i = 0; i < 4; i++) {
    var fragment = document.createDocumentFragment();
    var wizard = {
      name: window.util.getRandomName(window.util.randomStats.name, window.util.randomStats.surname),
      coatColor: window.util.getRandomColor(window.util.randomStats.coatColor),
      eyesColor: window.util.getRandomColor(window.util.randomStats.eyesColor)
    };
  fragment.appendChild(renderWizard(wizard));
  similarListElement.appendChild(fragment);
  }
})();
