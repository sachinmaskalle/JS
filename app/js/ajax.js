function Dataloader() {
}
Dataloader.prototype.getData = function (url, callback) {
    var xhr = new XMLHttpRequest();
    var DEFAULT_METHOD = 'GET';
    var HTTP_OK = 200;
    var HTTP_READY = 4;

    xhr.onreadystatechange = function () {

        if (xhr.status === HTTP_OK && xhr.readyState === HTTP_READY) {
            var parsedBody = JSON.parse(xhr.responseText);
        }

        if (typeof callback === 'function') {
            callback(parsedBody);
        }
    };

    xhr.open(DEFAULT_METHOD, url, true);
    xhr.send();
};

var $ = new Dataloader();

$.getData('/app/data/customers.json', function (data) {
    if (data) {
        for (var index in data) {
            var item = data[index];

            console.log(item.id + ', ' + item.name + ', ' + item.address);
        }
    }
});
