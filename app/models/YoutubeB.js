exports.definition = {
	// had to create a new model to use sql_lite
	config: {
		"columns": {
			"Name":"string",
			"Duration":"string",
			"VidID":"string",
			"ImageURL":"string",
			"HQimage":"string"
		},
		"adapter": {
			"type": "sql_new",
			"collection_name": "YoutubeB"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
						
			// extended functions go here

		}); // end extend
		
		return Model;
	},
	
	
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			
			// extended functions go here			
			
		}); // end extend
		
		return Collection;
	}
		
}

