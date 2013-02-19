var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.Youtube = Alloy.createCollection("Youtube");

Alloy.Globals.Close = null;

Alloy.Globals.LastSearch = null;

Alloy.Globals.GlobalLoad = function() {};

Alloy.Globals.CoverUpdate = function() {};

Alloy.createController("index");