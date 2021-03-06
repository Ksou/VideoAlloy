var args = arguments[0] || {};
//debugger ;
var Win = args.Window || '';
var Model = args.Model || '';
NiceRow(Model, Win);
// this returns a nice row , we grab all the data out here and pass it in

function NiceRow(model, win) {
	//var args = arguments[0] || {} ;

	// take all the data we have and use it for said row
	// ok , so appearently we get a free "alloy_id" field
	$.Title.text = model.Name;
	$.Pic.image = model.ImageURL;
	$.NiceRow.addEventListener('click', function() {
		// create the webview with the embeded video ,
		var webView = Ti.UI.createWebView({
			url : 'http://www.youtube.com/embed/' + model.VidID + '?autoplay=1&autohide=1&cc_load_policy=0&color=white&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0'
		});

		win.add(webView);
		Alloy.Globals.Close.visible = true;

		win.setRightNavButton(Alloy.Globals.Close);
		Alloy.Globals.Close.addEventListener('click', function() {
			Alloy.Globals.Close.visible = false;

			win.remove(webView);
			//webView.close() ;
			win.setRightNavButton(null);
		});
	});

}
