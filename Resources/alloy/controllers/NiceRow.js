function Controller() {
    function NiceRow(model, win) {
        $.Title.text = model.Name;
        $.Pic.image = model.ImageURL;
        $.Pic.addEventListener("click", function() {
            var webView = Ti.UI.createWebView({
                url: "http://www.youtube.com/embed/" + model.VidID + "?autoplay=1&autohide=1&cc_load_policy=0&color=white&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0"
            });
            win.add(webView);
            Alloy.Globals.Close.visible = !0;
            win.setRightNavButton(Alloy.Globals.Close);
            Alloy.Globals.Close.addEventListener("click", function() {
                Alloy.Globals.Close.visible = !1;
                win.remove(webView);
                win.setRightNavButton(null);
            });
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.NiceRow = A$(Ti.UI.createTableViewRow({
        height: "80dp",
        backgroundColor: "#e6e6e6",
        borderRadius: "3",
        id: "NiceRow"
    }), "TableViewRow", null);
    $.addTopLevelView($.__views.NiceRow);
    $.__views.Title = A$(Ti.UI.createLabel({
        right: "125dp",
        left: "30dp",
        id: "Title"
    }), "Label", $.__views.NiceRow);
    $.__views.NiceRow.add($.__views.Title);
    $.__views.Pic = A$(Ti.UI.createImageView({
        right: "10dp",
        bottom: "5dp",
        id: "Pic"
    }), "ImageView", $.__views.NiceRow);
    $.__views.NiceRow.add($.__views.Pic);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {}, Win = args.Window || "", Model = args.Model || "";
    NiceRow(Model, Win);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;