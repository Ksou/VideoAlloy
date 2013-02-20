function Controller() {
    function Search() {
        Alloy.Globals.Load = $.Load.value;
        var SearchString = $.SearchMe.value;
        debugger;
        Alloy.Globals.GlobalLoad(SearchString);
    }
    function ResetA() {}
    function AskReset() {
        var AlertAsk = Ti.UI.createAlertDialog({
            buttonNames: [ "All", "Current", "Cancel" ],
            cancel: [ 2 ],
            message: "Which models would you like to reset ?",
            title: "Reset"
        });
        AlertAsk.addEventListener("click", function(e) {
            e.index == 0 && ResetAll();
            e.index == 1 && ResetCurrent();
        });
        AlertAsk.show();
    }
    function ResetAll() {
        Alloy.Collections.Youtube.fetch({});
        debugger;
        while (0 < Alloy.Collections.Youtube.length) {
            var Name = Alloy.Collections.Youtube.models[0].attributes.Name;
            Alloy.Collections.Youtube.models[0].destroy();
            Ti.API.log(Name + "  Deleted");
        }
    }
    function ResetCurrent() {
        Alloy.Collections.Youtube._reset();
        debugger;
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
    $.__views.Load = A$(Ti.UI.createSwitch({
        title: "Save",
        value: "false",
        color: "black",
        bottom: "50dp",
        width: "89dp",
        id: "Load"
    }), "Switch", $.__views.Win);
    $.__views.Win.add($.__views.Load);
    $.__views.titleL = A$(Ti.UI.createLabel({
        text: "Load Previous ?",
        bottom: "25dp",
        id: "titleL"
    }), "Label", $.__views.Win);
    $.__views.Win.add($.__views.titleL);
    $.__views.__alloyId9 = A$(Ti.UI.createLabel({
        text: "Search here",
        top: "120dp",
        id: "__alloyId9"
    }), "Label", $.__views.Win);
    $.__views.Win.add($.__views.__alloyId9);
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
        bottom: "100dp"
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
    AskReset ? $.__views.Reset.on("click", AskReset) : __defers["$.__views.Reset!click!AskReset"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    ResetCurrent();
    __defers["$.__views.ButtonA!click!Search"] && $.__views.ButtonA.on("click", Search);
    __defers["$.__views.Reset!click!AskReset"] && $.__views.Reset.on("click", AskReset);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;