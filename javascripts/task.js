var window = self;
self.onmessage = function (evt) {
    var message = {};
    importScripts("/gifken/javascripts/gifken-client.min.js");

    var gif = gifken.Gif.parse(evt.data.buffer);
    message["srcs"] = [];
    gif.split(true).forEach(function (i) {
        var blob = gifken.GifPresenter.writeToBlob(i.writeToArrayBuffer());
        message["srcs"].push(URL.createObjectURL(blob));
    });
    self.postMessage(message);
};
