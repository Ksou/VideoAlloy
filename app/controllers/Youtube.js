function PreLoad() {
	//Alloy.Gloabls.MainWin = $.WinMain ;
	// gets all the JSON DATA( don't think youtube has a rest API)
	// YoutubeJson = require('app/controllers/YoutubeJson');
	YoutubeJson('DJ Krush', ModelStore);
}

function ModelStore(dat) {
	var data = dat.items; debugger ;
	//	alert(data[1].title) ;
	// stores JSON as models and then  creates nice table rows and adds them to the table
	Ti.API.log(data[1].title);

	for (var x in data) {
		var Video = Alloy.createModel('Youtube', {
			Name : data[x].title,
			Duration : data[x].duration,
			VidID : data[x].id,
			ImageURL : data[x].sqDefault
		});
		/*
		"Name":"string",
		"Duration":"string",
		"ImageURL":"string",
		"VideoURL":"string",
		'VidID' : "string",

		*/

		// data[x].name ;
		Ti.API.log(Video.get('Name'));
		// run sometype of compare to filter out duplicates when adding

		Alloy.Collections.Youtube.add(Video);

		Video.save();
	}

	FillTable();
	// once thats done , go ahead and  run a function that basically takes out models and makes a nice row for each of them

}

function FillTable() {
	// pull the data from the collection , use it
	var TableRows = [];

	for (var x in Alloy.Collections.Youtube.models) {
		var arg = {
			Model : Alloy.Collections.Youtube.models[x].attributes,
			Window : $.WinMain
		}; debugger ;
		// pass all the data we need into NiceRow when we create it
		var Row = Alloy.createController('NiceRow', arg).getView(); debugger ;
		// Row.NiceRow() ;
		TableRows.push(Row);
	}

	$.MainTable.setData(TableRows);
}

function YoutubeJson(search, callback) {
	var url = 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=' + search;
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", url);
	xhr.send();
	xhr.onload = function(e) {

		Ti.API.log(this.responseText); debugger ;
		var Json = JSON.parse(this.responseText);

		callback(Json.data);
	}
}
