'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var dialogHandler = setup.querySelector('.upload');
  var KEYCODE_ENTER = 13;
  var KEYCODE_ESC = 27;

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var dragged = false;
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (evt) {
      evt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - evt.clientX,
        y: startCoords.y - evt.clientY
      };

      startCoords.x = evt.clientX;
      startCoords.y = evt.clientY;

      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
    };

    var onMouseUp = function (evt) {
      evt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var isEnterPress = function (evt, action) {
    if (evt.keyCode === KEYCODE_ENTER) {
      action();
    }
  };

  var isEscPress = function (evt, action) {
    if (evt.keyCode === KEYCODE_ESC) {
      action();
    }
  };

  var onCloseSetup = function (evt) {
  var currentElement = evt.target;
  var inputUserName = setup.querySelector('.setup-user-name');
    if (evt.keyCode ===  KEYCODE_ESC && currentElement !== inputUserName) {
      closeSetupHandler();
    }
  };

  var openSetupHandler = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onCloseSetup);
  };

  var closeSetupHandler = function () {
  setup.classList.add('hidden');
  setup.style.top = '';
  setup.style.left = '';
  document.removeEventListener('keydown', onCloseSetup);
  };

  setupOpen.addEventListener('click', openSetupHandler);
  setupOpen.addEventListener('keydown', function (evt) {
    isEnterPress(evt, openSetupHandler);
  });

  setupClose.addEventListener('click', closeSetupHandler);
  setupClose.addEventListener('keydown', function (evt) {
    isEscPress(evt, closeSetupHandler);
  });
})();
