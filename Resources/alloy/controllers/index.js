function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createTabGroup({
        id: "index"
    }), "TabGroup", null);
    $.__views.__alloyId2 = Alloy.createController("Youtube", {
        id: "__alloyId2"
    });
    $.__views.__alloyId1 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId2.getViewEx({
            recurse: !0
        }),
        title: "Youtube",
        id: "__alloyId1"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId4 = Alloy.createController("Search", {
        id: "__alloyId4"
    });
    $.__views.__alloyId3 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId4.getViewEx({
            recurse: !0
        }),
        title: "Search",
        id: "__alloyId3"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId3);
    $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;