Alloy.Globals.CoverUpdate = function(){
	
	CoverUpdate() ; 
	
	
} ; 

function CoverUpdate(){
	
	
	// pull the data from the collection , use it to fill the coverview 
	var Images = [];
	var VidIDs = []
	for (var x in Alloy.Collections.Youtube.models) {

	var ImageM  =	 Alloy.Collections.Youtube.models[x].attributes.Duration ; 
var VidID = Alloy.Collections.Youtube.models[x].attributes.VidID ; 
	Images.push(ImageM) ; 
	VidIDs.push(VidID) ;
	}
	$.CoverFlow.width = Titanium.UI.FILL ;
	$.CoverFlow.height = Titanium.UI.FILL ; 
	$.CoverFlow.setImages(Images);
	// 

///

	$.CoverFlow.addEventListener('click', function(e) {
	// if you don't have an index  number do nothing !	
		if(e.index){
		
	var  win = $.window ; 
		// create the webview with the embeded video ,
		var webView = Ti.UI.createWebView({
			url : 'http://www.youtube.com/embed/' + VidIDs[e.index] + '?autoplay=1&autohide=1&cc_load_policy=0&color=white&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0'
		});

		win.add(webView);
		Alloy.Globals.Close.visible = true;
			// add the right nav button so we ca
		win.setRightNavButton($.Close);
		$.Close.addEventListener('click', function() {
			$.Close.visible = false;

			win.remove(webView);
			//webView.close() ;
			win.setRightNavButton(null);
		});
	
	}	
	});


//
}
	
	
	

