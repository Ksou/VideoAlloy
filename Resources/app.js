var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.Youtube = Alloy.createCollection("YoutubeB");

Alloy.Globals.Close = null;

Alloy.Globals.GlobalLoad = function() {};

Alloy.Globals.CoverUpdate = function() {};

Alloy.Globals.Load = !1;

Alloy.createController("index");