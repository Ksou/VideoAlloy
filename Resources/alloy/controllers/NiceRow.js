function Controller() {
    function NiceRow(model, win) {
        debugger;
        $.Title.text = model.Name;
        $.Pic.image = model.Name.ImageURL;
        $.PlayButton.addEventListener("click", function() {
            var webView = Ti.UI.createWebView({
                url: "http://www.youtube.com/embed/" + model.VidID + "?autoplay=1&autohide=1&cc_load_policy=0&color=white&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0"
            });
            win.add(webView);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.NiceRow = A$(Ti.UI.createTableViewRow({
        id: "NiceRow"
    }), "TableViewRow", null);
    $.addTopLevelView($.__views.NiceRow);
    $.__views.PlayButton = A$(Ti.UI.createButton({
        id: "PlayButton"
    }), "Button", $.__views.NiceRow);
    $.__views.NiceRow.add($.__views.PlayButton);
    $.__views.Title = A$(Ti.UI.createLabel({
        id: "Title"
    }), "Label", $.__views.NiceRow);
    $.__views.NiceRow.add($.__views.Title);
    $.__views.Pic = A$(Ti.UI.createImageView({
        id: "Pic"
    }), "ImageView", $.__views.NiceRow);
    $.__views.NiceRow.add($.__views.Pic);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    debugger;
    var Win = args.Window || "", Model = args.Model || "";
    NiceRow(Model, Win);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;