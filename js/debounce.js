(function () {
  var interval = 500;

  window.debounce = function (cb) {
    var timeout = null;

    return function () {
      var params = arguments;

      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(function () {
        cb.apply(null, params);
      }, interval);
    };
  };
})();
