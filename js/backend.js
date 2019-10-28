(function () {
  window.load = function (onLoad, onError) {
    var url = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Error ' + xhr.status);
      }
    });
    xhr.timeout = 10000;
    xhr.open('get', url);
    xhr.send();
  };

  window.save = function (data, onLoad, onError) {
    var url = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad();
      } else {
        onError('Error ' + xhr.status);
      }
    });
    xhr.timeout = 10000;
    xhr.open('post', url);
    xhr.send(data);
  };
})();