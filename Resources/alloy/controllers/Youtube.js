function Controller() {
    function SearchStart(LocSearch) {
        debugger;
        Ti.API.log(LocSearch);
        YoutubeJson(LocSearch, ModelStore);
    }
    function YoutubeJson(search, callback) {
        var url = "https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=" + search + "&max-results=5", xhr = Ti.Network.createHTTPClient();
        xhr.open("GET", url);
        xhr.send();
        xhr.error = function(e) {
            Ti.API.log("cant get JSON data");
        };
        xhr.onload = function(e) {
            Ti.API.log(this.responseText);
            debugger;
            var Json = JSON.parse(this.responseText);
            callback(Json.data);
        };
    }
    function ModelStore(dat) {
        var data = dat.items;
        Ti.API.log(data[1].title);
        for (var x in data) {
            var Video = Alloy.createModel("YoutubeB", {
                Name: data[x].title,
                Duration: data[x].duration,
                VidID: data[x].id,
                ImageURL: data[x].thumbnail.sqDefault,
                HQimage: data[x].thumbnail.hqDefault
            });
            Ti.API.log(Video.get("ImageURL"));
            Ti.API.log(Video.get("Name"));
            Alloy.Globals.Load && Alloy.Collections.Youtube.fetch();
            Alloy.Collections.Youtube.add(Video);
            Video.save();
        }
        FillTable();
        Alloy.Globals.CoverUpdate();
    }
    function FillTable() {
        var TableRows = [];
        for (var x in Alloy.Collections.Youtube.models) {
            var arg = {
                Model: Alloy.Collections.Youtube.models[x].attributes,
                Window: $.WinMain
            }, Row = Alloy.createController("NiceRow", arg).getView();
            TableRows.push(Row);
        }
        $.MainTable.setData(TableRows);
    }
    function Restore() {
        Alloy.Globals.Collections.Youtube.fetch();
        if (Alloy.Collections.Youtube.models[0]) {
            FillTable();
            Alloy.Globals.CoverUpdate();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.WinMain = A$(Ti.UI.createWindow({
        id: "WinMain",
        title: "Youtube"
    }), "Window", null);
    $.addTopLevelView($.__views.WinMain);
    $.__views.Close = A$(Ti.UI.createButton({
        id: "Close",
        visible: "false",
        title: "Close"
    }), "Button", $.__views.WinMain);
    $.__views.WinMain.add($.__views.Close);
    $.__views.MainTable = A$(Ti.UI.createTableView({
        id: "MainTable"
    }), "TableView", $.__views.WinMain);
    $.__views.WinMain.add($.__views.MainTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.Close = $.Close;
    Alloy.Globals.GlobalLoad = function(LocSearch) {
        SearchStart(LocSearch);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;