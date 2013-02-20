function Controller() {
    function UpdateStats() {
        $.Local.text = Alloy.Collections.Youtube.length + "Local models";
        Alloy.Collections.Youtube.fetch();
        $.Total.text = Alloy.Collections.Youtube.length + "Total models";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.StatsWin = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "StatsWin",
        title: "Stats"
    }), "Window", null);
    $.addTopLevelView($.__views.StatsWin);
    UpdateStats ? $.__views.StatsWin.on("focus", UpdateStats) : __defers["$.__views.StatsWin!focus!UpdateStats"] = !0;
    $.__views.Total = A$(Ti.UI.createLabel({
        top: "100dp",
        id: "Total"
    }), "Label", $.__views.StatsWin);
    $.__views.StatsWin.add($.__views.Total);
    $.__views.Local = A$(Ti.UI.createLabel({
        top: "150dp",
        id: "Local"
    }), "Label", $.__views.StatsWin);
    $.__views.StatsWin.add($.__views.Local);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.StatsWin!focus!UpdateStats"] && $.__views.StatsWin.on("focus", UpdateStats);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;