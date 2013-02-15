exports.definition = {
    config: {
        columns: {
            Name: "string",
            Duration: "string",
            ImageURL: "string",
            VideoURL: "string",
            VidID: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "Youtube"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Youtube", exports.definition, []);

collection = Alloy.C("Youtube", exports.definition, model);

exports.Model = model;

exports.Collection = collection;