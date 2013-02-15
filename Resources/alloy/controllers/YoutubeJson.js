function Controller() {
    function YoutubeJson(search, callback) {
        var url = "https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=" + search, xhr = Ti.Network.createHTTPClient();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = function(e) {
            Ti.API.log(this.responseText);
            debugger;
            var Json = JSON.parse(this.responseText);
            callback(Json);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    module.exports = YoutubeJson;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;