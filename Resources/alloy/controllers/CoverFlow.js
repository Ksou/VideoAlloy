function Controller() {
    function CoverUpdate() {
        var Images = [], VidIDs = [], MaxImages = 10;
        Alloy.Collections.Youtube.length < 10 && (MaxImages = Alloy.Collections.Youtube.length);
        for (var x = 0; x < MaxImages; x++) {
            var ImageM = Alloy.Collections.Youtube.models[x].attributes.HQimage || Alloy.Collections.Youtube.models[x].attributes.ImageURL, VidID = Alloy.Collections.Youtube.models[x].attributes.VidID;
            Images.push(ImageM);
            VidIDs.push(VidID);
        }
        $.CoverFlow.width = Titanium.UI.FILL;
        $.CoverFlow.height = Titanium.UI.FILL;
        $.CoverFlow.setImages(Images);
        $.CoverFlow.addEventListener("click", function(e) {
            if (e.index) {
                var win = $.window, webView = Ti.UI.createWebView({
                    url: "http://www.youtube.com/embed/" + VidIDs[e.index] + "?autoplay=1&autohide=1&cc_load_policy=0&color=white&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0"
                });
                win.add(webView);
                Alloy.Globals.Close.visible = !0;
                win.setRightNavButton($.Close);
                $.Close.addEventListener("click", function() {
                    $.Close.visible = !1;
                    win.remove(webView);
                    win.setRightNavButton(null);
                });
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.window = A$(Ti.UI.createWindow({
        id: "window",
        title: " Cover Flow "
    }), "Window", null);
    $.addTopLevelView($.__views.window);
    $.__views.Close = A$(Ti.UI.createButton({
        id: "Close",
        visible: "false",
        title: "Close"
    }), "Button", $.__views.window);
    $.__views.window.add($.__views.Close);
    $.__views.CoverFlow = A$(Ti.UI.iOS.createCoverFlowView({
        height: "300dp",
        width: "300dp",
        id: "CoverFlow",
        backgroundColor: "black"
    }), "CoverFlowView", $.__views.window);
    $.__views.window.add($.__views.CoverFlow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.CoverUpdate = function() {
        CoverUpdate();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;