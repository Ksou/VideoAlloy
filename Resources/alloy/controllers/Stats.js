function Controller() {
    function UpdateStats() {
        $.Local.text = Alloy.Collections.Youtube.length + " : Local models";
        var TempB = _.clone(Alloy.Collections.Youtube);
        TempB.fetch({
            success: function() {
                $.Total.text = TempB.length + " : Total models";
            },
            error: function() {
                $.Total.text = "Error , can not load models ";
            }
        });
        debugger;
    }
    function StaticUpdate() {
        $.Columns.font = {
            fontWeight: "bold"
        };
        var TempB = Alloy.Collections.Youtube, y = 0;
        for (var i in TempB.config.columns) {
            y++;
            var topDis = 90 + y * 25;
            $.StatsWin.add(Ti.UI.createLabel({
                top: topDis,
                text: i + " : " + TempB.config.columns[i]
            }));
        }
        y += 2;
        $.StatsWin.add(Ti.UI.createLabel({
            font: {
                fontWeight: "bold"
            },
            top: 90 + (y - 0.5) * 25,
            text: "Adapter Stats"
        }));
        for (var i in TempB.config.adapter) {
            y++;
            var topDis = 90 + y * 25;
            $.StatsWin.add(Ti.UI.createLabel({
                top: topDis,
                text: i + " : " + TempB.config.adapter[i]
            }));
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.StatsW = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "StatsW",
        title: "Stats"
    }), "Window", null);
    $.addTopLevelView($.__views.StatsW);
    UpdateStats ? $.__views.StatsW.on("focus", UpdateStats) : __defers["$.__views.StatsW!focus!UpdateStats"] = !0;
    $.__views.StatsWin = A$(Ti.UI.createScrollView({
        id: "StatsWin",
        showVerticalScrollIndicator: "true"
    }), "ScrollView", $.__views.StatsW);
    $.__views.StatsW.add($.__views.StatsWin);
    $.__views.Total = A$(Ti.UI.createLabel({
        top: "40dp",
        id: "Total"
    }), "Label", $.__views.StatsWin);
    $.__views.StatsWin.add($.__views.Total);
    $.__views.Local = A$(Ti.UI.createLabel({
        top: "65dp",
        id: "Local"
    }), "Label", $.__views.StatsWin);
    $.__views.StatsWin.add($.__views.Local);
    $.__views.Columns = A$(Ti.UI.createLabel({
        top: "93dp",
        text: "Column  : type",
        id: "Columns"
    }), "Label", $.__views.StatsWin);
    $.__views.StatsWin.add($.__views.Columns);
    exports.destroy = function() {};
    _.extend($, $.__views);
    StaticUpdate();
    __defers["$.__views.StatsW!focus!UpdateStats"] && $.__views.StatsW.on("focus", UpdateStats);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;