(function () {
  var KEYCODE_ENTER = 13;
  var KEYCODE_ESC = 27;
  var randomStats = {
    name: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    surname: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницая', 'Нионго', 'Ирвинг'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
    fireballColor: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  window.util = {
    KEYCODE_ENTER: KEYCODE_ENTER,
    KEYCODE_ESC: KEYCODE_ESC,
    randomStats: randomStats,
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === KEYCODE_ENTER) {
        action();
      }
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === KEYCODE_ESC) {
        action();
      }
    },
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    getRandomName: function (name, surname) {
      var randomName = name[window.util.getRandomNumber(0,  name.length)];
      var randomSurname = surname[window.util.getRandomNumber(0, surname.length)];
      return randomName + ' ' + randomSurname;
    },
    getRandomColor: function (color) {
      return color[window.util.getRandomNumber(0, color.length)];
    },
    colorize: function (element, color) {
     element.addEventListener('click', function () {
       var randomColor = window.util.getRandomColor(color);
       if (element.tagName.toLowerCase() === 'div') {
         element.style.background = randomColor;
       } else {
          element.style.fill = randomColor;
       }
     })
    }
   }
})();
