var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.Youtube = Alloy.createCollection("Youtube");

Alloy.Globals.Close = null;

Alloy.Globals.SearchString = "DJ Krush";

Alloy.Globals.LastSearch = null;

Alloy.Globals.GlobalLoad = null;

Alloy.createController("index");