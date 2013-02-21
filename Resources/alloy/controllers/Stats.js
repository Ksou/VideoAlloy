function Controller() {
    function UpdateStats() {
        $.Local.text = Alloy.Collections.Youtube.length + " : Local models";
        var TempB = clone(Alloy.Collections.Youtube);
        TempB.fetch({
            success: function() {
                $.Total.text = TempB.length + " : Total models";
            }
        });
        debugger;
    }
    function StaticUpdate() {
        var TempB = Alloy.Collections.Youtube, y = 0;
        for (var i in TempB.config.columns) {
            y++;
            var topDis = 90 + y * 20;
            $.StatsWin.add(Ti.UI.createLabel({
                top: topDis,
                text: i + " : " + TempB.config.columns[i]
            }));
        }
        y += 2;
        for (var i in TempB.config.adapter) {
            y++;
            var topDis = 90 + y * 20;
            $.StatsWin.add(Ti.UI.createLabel({
                top: topDis,
                text: i + " : " + TempB.config.adapter[i]
            }));
        }
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
        top: "50dp",
        id: "Total"
    }), "Label", $.__views.StatsWin);
    $.__views.StatsWin.add($.__views.Total);
    $.__views.Local = A$(Ti.UI.createLabel({
        top: "75dp",
        id: "Local"
    }), "Label", $.__views.StatsWin);
    $.__views.StatsWin.add($.__views.Local);
    exports.destroy = function() {};
    _.extend($, $.__views);
    StaticUpdate();
    var clone = function() {
        function Clone() {}
        return function(obj) {
            Clone.prototype = obj;
            return new Clone;
        };
    }();
    __defers["$.__views.StatsWin!focus!UpdateStats"] && $.__views.StatsWin.on("focus", UpdateStats);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;