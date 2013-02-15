function Controller() {
    function PreLoad() {
        YoutubeJson("DJ Krush", ModelStore);
    }
    function ModelStore(dat) {
        var data = dat.items;
        debugger;
        Ti.API.log(data[1].title);
        for (var x in data) {
            var Video = Alloy.createModel("Youtube", {
                Name: data[x].title,
                Duration: data[x].duration,
                VidID: data[x].id,
                ImageURL: data[x].sqDefault
            });
            Ti.API.log(Video.get("Name"));
            Alloy.Collections.Youtube.add(Video);
            Video.save();
        }
        FillTable();
    }
    function FillTable() {
        var TableRows = [];
        for (var x in Alloy.Collections.Youtube.models) {
            var arg = {
                Model: Alloy.Collections.Youtube.models[x].attributes,
                Window: $.WinMain
            };
            debugger;
            var Row = Alloy.createController("NiceRow", arg).getView();
            debugger;
            TableRows.push(Row);
        }
        $.MainTable.setData(TableRows);
    }
    function YoutubeJson(search, callback) {
        var url = "https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=" + search, xhr = Ti.Network.createHTTPClient();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = function(e) {
            Ti.API.log(this.responseText);
            debugger;
            var Json = JSON.parse(this.responseText);
            callback(Json.data);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.WinMain = A$(Ti.UI.createWindow({
        id: "WinMain"
    }), "Window", null);
    $.addTopLevelView($.__views.WinMain);
    PreLoad ? $.__views.WinMain.on("open", PreLoad) : __defers["$.__views.WinMain!open!PreLoad"] = !0;
    $.__views.MainTable = A$(Ti.UI.createTableView({
        id: "MainTable"
    }), "TableView", $.__views.WinMain);
    $.__views.WinMain.add($.__views.MainTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.WinMain!open!PreLoad"] && $.__views.WinMain.on("open", PreLoad);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;