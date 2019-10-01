'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var onCloseSetup = function (evt) {
  var currentElement = evt.target;
  var inputUserName = setup.querySelector('.setup-user-name');
    if (evt.keyCode ===  window.util.KEYCODE_ESC && currentElement !== inputUserName) {
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

  setupOpen.addEventListener('click', openSetupHandler);
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openSetupHandler);
  });

  setupClose.addEventListener('click', closeSetupHandler);
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, closeSetupHandler);
  });
})();
