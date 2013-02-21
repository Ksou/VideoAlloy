Alloy.Globals.CoverUpdate = function(tempCollection) {

	CoverUpdate(tempCollection);

};

function CoverUpdate(tempCollection) {

	/*if(tempCollection == null)
	{
	tempCollection = Alloy.Collections.Youtube ; 	
		
	}*/
	// updates the coverflow
	// pull the data from the collection , use it to fill the coverview
	var Images = [];
	var VidIDs = [];
	// more then 10 and it crashes or becomes slow 
var MaxImages  = 10; 	
	if(tempCollection.length < 10)
	{
		MaxImages =tempCollection.length 
		
	}
	for (var x = 0 ;  x < MaxImages ; x++  ) {
		// figure out way
		// we can't always get  a HQimage, so while its prefered we have a || to load the imageURL instead
		// the simulator crashes after 15 coverview images or so , lowering to SQ
		
		var ImageM = tempCollection.models[x].attributes.HQimage || tempCollection.models[x].attributes.ImageURL;
		
		//var ImageM = Alloy.Collections.Youtube.models[x].attributes.ImageURL;
		//var textIm =  Ti.UI.createLabel({text : Alloy.Collections.Youtube.models[x].attributes.Name}) ;
		// go ahead and add the text label to the image ,
		//	ImageM.add(textIm) ;
		var VidID = tempCollection.models[x].attributes.VidID;
		Images.push(ImageM);
		VidIDs.push(VidID);
	}
	$.CoverFlow.width = Titanium.UI.FILL ;
	$.CoverFlow.height = Titanium.UI.FILL;
	$.CoverFlow.setImages(Images);
	//

	///

	$.CoverFlow.addEventListener('click', function(e) {
		// if you don't have an index  number do nothing !
		if (e.index) {

			var win = $.window;
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

