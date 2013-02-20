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
	
	// resets the collection
	//	if($.Save.value){
	//Alloy.Collections.Youtube.reset();

	//Alloy.Collections.Youtube.fetch() ;
	Ti.API.log('trying to reset');
	//Alloy.Collections.Youtube._reset() ;
	// do i have to fetch again ??
	//Alloy.Collections.Youtube.sync(); // sync gives us an error ...the documentation gets weird here
	// sync SHOULD sync the emptied collection , it does not 
	// at least according to the backbone docs 
	Alloy.Collections.Youtube._reset(); debugger ;
	Alloy.Collections.Youtube.sync({
		//success : ResetA()
	});
	// reset and sync , then go and kick it

}

function Reset() {

	Alloy.Collections.Youtube.fetch({
	//	success : function() {	}
	}); 
	while (0 < Alloy.Collections.Youtube.length) {
					debugger ;
					// have to use while , for loops don't completely empty this 
			var Name = Alloy.Collections.Youtube.models[0].attributes.Name ; 
				
 				Alloy.Collections.Youtube.models[0].destroy();
			Ti.API.log( Name +'  Deleted')  ; 
			
			}
	
	debugger ;
}

