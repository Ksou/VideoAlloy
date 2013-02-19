function Controller() {
    function Search() {
        var SearchString = $.SearchMe.value;
        debugger;
        Alloy.Globals.GlobalLoad(SearchString);
    }
    function Reset() {
        Alloy.Collections.Youtube.reset();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.Win = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "Win",
        title: "Search"
    }), "Window", null);
    $.addTopLevelView($.__views.Win);
    $.__views.__alloyId7 = A$(Ti.UI.createLabel({
        text: "Search here",
        top: "120dp",
        id: "__alloyId7"
    }), "Label", $.__views.Win);
    $.__views.Win.add($.__views.__alloyId7);
    $.__views.SearchMe = A$(Ti.UI.createTextField({
        id: "SearchMe",
        hintText: "Search"
    }), "TextField", $.__views.Win);
    $.__views.Win.add($.__views.SearchMe);
    $.__views.ButtonA = A$(Ti.UI.createButton({
        color: "black",
        title: "Search",
        width: "129dp",
        id: "ButtonA",
        bottom: "50dp"
    }), "Button", $.__views.Win);
    $.__views.Win.add($.__views.ButtonA);
    Search ? $.__views.ButtonA.on("click", Search) : __defers["$.__views.ButtonA!click!Search"] = !0;
    $.__views.Reset = A$(Ti.UI.createButton({
        color: "black",
        title: "Reset",
        width: "129dp",
        id: "Reset",
        top: "50dp"
    }), "Button", $.__views.Win);
    $.__views.Win.add($.__views.Reset);
    Reset ? $.__views.Reset.on("click", Reset) : __defers["$.__views.Reset!click!Reset"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.ButtonA!click!Search"] && $.__views.ButtonA.on("click", Search);
    __defers["$.__views.Reset!click!Reset"] && $.__views.Reset.on("click", Reset);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;