exports.definition = {
    config: {
        columns: {
            Name: "string",
            Duration: "string",
            VidID: "string",
            ImageURL: "string",
            HQimage: "string"
        },
        adapter: {
            type: "sql_new",
            collection_name: "YoutubeB"
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

model = Alloy.M("YoutubeB", exports.definition, [ function(migration) {
    migration.name = "YoutubeB";
    migration.id = "2013012015420";
    migration.up = function(db) {};
    migration.down = function(db) {};
} ]);

collection = Alloy.C("YoutubeB", exports.definition, model);

exports.Model = model;

exports.Collection = collection;