'use strict';
(function () {
  var wizards = [];
  var colorCoat;
  var colorEyes;
  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');
  /*
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

colorize(fireballColor, randomStats.fireballColor, 'fireball-color');
colorize(coatColor, randomStats.coatColor, 'coat-color');
colorize(eyesColor, randomStats.eyesColor, 'eyes-color');
*/
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === colorCoat) {
      rank += 2;
    }
    if (wizard.colorEyes === colorEyes) {
      rank += 1;
    }
    return rank;
  };

  var compareNames = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(wizards.slice().sort(function (left, right) {
      var diff =  getRank(right) - getRank(left);
      if (diff === 0) {
        diff = compareNames(left.name, right.name);
      }
      return diff;
    }));
  };

  var loadSuccess = function (data) {
    wizards = data;
    updateWizards();
  };

  var loadError = function (msg) {
    var block = document.createElement('div');
    block.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    block.style.position = 'absolute';
    block.style.left = 0;
    block.style.right = 0;
    block.style.fontSize = '30px';
    block.textContent = msg;
    document.body.insertAdjacentElement('afterbegin', block);
  };

  window.wizard.onCoatChange = window.debounce(function (color) {
    colorCoat = color;
    updateWizards();
  });

  window.wizard.onEyesChange = window.debounce(function (color) {
    colorEyes = color;
    updateWizards();
  });

  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, loadError);
  evt.preventDefault();
  });

  window.load(loadSuccess, loadError);
})();
