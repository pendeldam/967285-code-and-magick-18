(function () {
  var coatColor = document.querySelector('.wizard-coat');
  var eyesColor = document.querySelector('.wizard-eyes');
  var randomStats = {
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green', 'orange', 'purple']
  };
  var wizard = {
    onCoatChange: function () {},
    onEyesChange: function () {}
  };
  var getRandomNumber = function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    };
  var getRandomColor = function (color) {
      return color[getRandomNumber(0, color.length)];
    };

  coatColor.addEventListener('click', function () {
    var randomColor = getRandomColor(randomStats.coatColor);
    this.style.fill = randomColor;
    wizard.onCoatChange(randomColor)
  });

  eyesColor.addEventListener('click', function () {
    var randomColor = getRandomColor(randomStats.eyesColor);
    this.style.fill = randomColor;
    wizard.onEyesChange(randomColor);
  });

  return window.wizard = wizard;
})();
