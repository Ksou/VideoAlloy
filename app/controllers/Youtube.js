Alloy.Globals.Close = $.Close;

Alloy.Globals.GlobalLoad = function(LocSearch) {
	SearchStart(LocSearch);
	//GlobalLoad() ;
}
function SearchStart(LocSearch) {

	//Alloy.Globals.LastSearch = LocSearch;
	// we make sure we have a real string
	debugger ;
	Ti.API.log(LocSearch);
	YoutubeJson(LocSearch, ModelStore);

	//}

}

function YoutubeJson(search, callback) {
	var url = 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=' + search + '&max-results=5&safeSearch=strict';
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", url);
	xhr.send();
	xhr.error = function(e){
	Ti.API.log('cant get JSON data') ; 	
		
	}
	xhr.onload = function(e) {

		Ti.API.log(this.responseText);
		debugger ;
		var Json = JSON.parse(this.responseText);

		callback(Json.data);
	}
}

function ModelStore(dat) {
	var data = dat.items;
	//debugger ;

	Ti.API.log(data[1].title);

	for (var x in data) {
		// Every JSON object is turned into a model , their isn't a youtube Rest API
		var Video = Alloy.createModel('YoutubeB', {
			Name : data[x].title,
			Duration : data[x].duration,
			VidID : data[x].id,
			ImageURL : data[x].thumbnail.sqDefault,
			HQimage : data[x].thumbnail.hqDefault
			
		});
		
		Ti.API.log(Video.get('ImageURL'));
		Ti.API.log(Video.get('Name'));
		// run sometype of compare to filter out duplicates when adding
		// if we want to load our last searches  

		
		
		Alloy.Collections.Youtube.add(Video);

		Video.save();
	}

		if (Alloy.Globals.Load == true) {
			// I ran into an Alloy Compiler bug here 
			// if(Alloy.Globals.Load) would run even if Alloy.Globals.Load = false
				
				
	
		debugger ; 
	var tempCollection =	  clone(Alloy.Collections.Youtube) ; 
	tempCollection.fetch() ;
			// lets clone this so we can keep our orignal collection
	//var 
	}
	FillTable(tempCollection);
	Alloy.Globals.CoverUpdate(tempCollection);
	// once thats done , go ahead and  run a function that basically takes out models and makes a nice row for each of them

}
var clone = (function(){ 
	// found this on stack , the built in backbone collection.clone function does not work !
  return function (obj) { Clone.prototype=obj; return new Clone() };
  function Clone(){}
}());


function FillTable(tempCollection) {
	// pull the data from the collection , use it to make nice rows
	if(tempCollection == null){
	tempCollection = Alloy.Collections.Youtube ; 
		
	}
	debugger ; 
	var TableRows = [];
	
	for (var x in tempCollection.models) {
		var arg = {
			Model : tempCollection.models[x].attributes,
			Window : $.WinMain
		};
		//debugger ;
		// pass all the data we need into NiceRow when we create it
		var Row = Alloy.createController('NiceRow', arg).getView();
		// debugger ;
		// Row.NiceRow() ;
		// now add each row to the array it self .
		TableRows.push(Row);
	}

	$.MainTable.setData(TableRows);
}



function Restore()
{// Restores the table without performing a search 
	//Alloy.Globals.Save  = true ; 
//Alloy.Globals.Collections.Youtube.fetch() ; 
if(Alloy.Collections.Youtube.models[0]){	
	// make sure it actually exist before doing anything 
FillTable();
Alloy.Globals.CoverUpdate() ; 
}
//


}