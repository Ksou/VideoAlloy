exports.definition = {

	config : {
		"columns" : {
			"Name" : "string",
			"Duration" : "string",
			"ImageURL" : "string",
			"VideoURL" : "string",
			"VidID" : "string",
			//"HQimage" : "string",
			// can't add collum !
		},
		"adapter" : {
		
		// changing type to 'sql_new' breaks it , wil investigate latter 
			"type" : "sql",
			"collection_name" : "Youtube"
		}
	},

	extendModel : function(Model) {
		_.extend(Model.prototype, {

			// extended functions go here

		});
		// end extend

		return Model;
	},

	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {

			// extended functions go here

		});
		// end extend

		return Collection;
	}
}

