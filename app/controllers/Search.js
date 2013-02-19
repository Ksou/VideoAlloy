function Search() {
	// grad the search string and run it though to the search function , GlobalLoad/PreLoad

	//if()

	var SearchString = $.SearchMe.value; debugger ;
	Alloy.Globals.GlobalLoad(SearchString)
	//Alloy.Globals.GlobalLoad ;
	//debugger ;
}

function Reset() {
	// resets the collection
	Alloy.Collections.Youtube.reset();

}

