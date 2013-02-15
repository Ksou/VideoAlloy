function Controller() {
    function Search() {
        Alloy.Globals.SearchString = $.SearchMe.value;
        Alloy.Globals.GlobalLoad;
        debugger;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.Win = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "Win"
    }), "Window", null);
    $.addTopLevelView($.__views.Win);
    $.__views.__alloyId5 = A$(Ti.UI.createLabel({
        text: "Search here",
        top: "120dp",
        id: "__alloyId5"
    }), "Label", $.__views.Win);
    $.__views.Win.add($.__views.__alloyId5);
    $.__views.SearchMe = A$(Ti.UI.createTextField({
        id: "SearchMe",
        hintText: "Search"
    }), "TextField", $.__views.Win);
    $.__views.Win.add($.__views.SearchMe);
    $.__views.ButtonA = A$(Ti.UI.createButton({
        id: "ButtonA",
        bottom: "50dp"
    }), "Button", $.__views.Win);
    $.__views.Win.add($.__views.ButtonA);
    Search ? $.__views.ButtonA.on("click", Search) : __defers["$.__views.ButtonA!click!Search"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.ButtonA!click!Search"] && $.__views.ButtonA.on("click", Search);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;