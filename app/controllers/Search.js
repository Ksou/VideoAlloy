ResetCurrent();
// get rid of anything in the collection on load . 

function Search() {
	// grad the search string and run it though to the search function , GlobalLoad/PreLoad

	//if()
	Alloy.Globals.Load = $.Load.value;
	var SearchString = $.SearchMe.value;
	debugger ;
	Alloy.Globals.GlobalLoad(SearchString)
	//Alloy.Globals.GlobalLoad ;
	//debugger ;
}

function ResetA() {
	/*
// this does not work , 
	Ti.API.log('trying to reset');
	
	//Alloy.Collections.Youtube.sync(); // sync gives us an error ...the documentation gets weird here
	// sync SHOULD sync the emptied collection , it does not
	// at least according to the backbone docs
	Alloy.Collections.Youtube._reset(); debugger ;
	Alloy.Collections.Youtube.sync({
		//success : ResetA()
	});
	// reset and sync , then go and kick it
*/
}

function AskReset() {
	// we trigger a dialog to ask what models to delete
	var AlertAsk = Ti.UI.createAlertDialog({
		buttonNames : ['All', 'Current', 'Cancel'],
		// 3 options , 
		cancel : [2],
		message : 'Which models would you like to reset ?',
		title : 'Reset'
	});
	AlertAsk.addEventListener('click', function(e) {
		if (e.index == 0) {
			ResetAll();
		}
		if (e.index == 1) {
			ResetCurrent();
		}

	});
	AlertAsk.show(); //debugger ;
}

function ResetAll() {
	// reset everything	, including the data on the server?( need to figure out how to do this via ACS)
	Alloy.Collections.Youtube.fetch({
		//	success : function() {	}
	});debugger ; 
	while (0 < Alloy.Collections.Youtube.length) { //debugger ;
		// have to use while , for loops don't completely empty this
		var Name = Alloy.Collections.Youtube.models[0].attributes.Name;
// to get rid of the models in persistent storage I have to destory them 
		Alloy.Collections.Youtube.models[0].destroy();
		Ti.API.log(Name + '  Deleted');

	}

}

function ResetCurrent() {
	//Alloy.Collections.Youtube.fetch() ; 
	// this only resets the collection  in memory 
	Alloy.Collections.Youtube._reset();
	debugger ; 
}
