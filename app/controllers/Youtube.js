Alloy.Globals.Close = $.Close;

Alloy.Globals.GlobalLoad = 
	function(LocSearch){
	SearchStart(LocSearch) ; 
	//GlobalLoad() ;
	}

function SearchStart(LocSearch) {

		
		
		//Alloy.Globals.LastSearch = LocSearch;
		// we make sure we have a real string 
		debugger ;
		Ti.API.log(LocSearch) ; 
		YoutubeJson(LocSearch, ModelStore);

	//}

}

function YoutubeJson(search, callback) {
	var url = 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=' + search + '&max-results=5';
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", url);
	xhr.send();
	xhr.onload = function(e) {

		Ti.API.log(this.responseText); debugger ;
		var Json = JSON.parse(this.responseText);

		callback(Json.data);
	}
}

function ModelStore(dat) {
	var data = dat.items; //debugger ;
	
	Ti.API.log(data[1].title);

	for (var x in data) {
	// Every JSON object is turned into a model , their isn't a youtube Rest API 
		var Video = Alloy.createModel('Youtube', {
			Name : data[x].title,
		//	Duration : data[x].duration,
			VidID : data[x].id,
			ImageURL : data[x].thumbnail.sqDefault,
			Duration : data[x].thumbnail.hqDefault
			// can't add a collum to a model once created, using  Duration collum for now 
		});
		//TI.API.log(data[x].thumbnail.sqDefault) ;
		// youtube is being weird with this image , so log and debug
			//	var imageString = data[x].thumbnail.sqDefault ;
				//TI.API.log(imageString) ; 
				//debugger ; 
		
		/*
		"Name":"string",
		"Duration":"string",
		"ImageURL":"string",
		"VideoURL":"string",
		'VidID' : "string",

		*/

		// data[x].name ;
		Ti.API.log(Video.get('ImageURL')) ; 
		Ti.API.log(Video.get('Name'));
		// run sometype of compare to filter out duplicates when adding

		Alloy.Collections.Youtube.add(Video);

		Video.save();
	}

	FillTable();
	Alloy.Globals.CoverUpdate() ; 
	// once thats done , go ahead and  run a function that basically takes out models and makes a nice row for each of them

}

function FillTable() {
	// pull the data from the collection , use it to make nice rows 
	var TableRows = [];

	for (var x in Alloy.Collections.Youtube.models) {
		var arg = {
			Model : Alloy.Collections.Youtube.models[x].attributes,
			Window : $.WinMain
		}; //debugger ;
		// pass all the data we need into NiceRow when we create it
		var Row = Alloy.createController('NiceRow', arg).getView(); // debugger ;
		// Row.NiceRow() ;
		// now add each row to the array it self . 
		TableRows.push(Row);
	}

	$.MainTable.setData(TableRows);
}


