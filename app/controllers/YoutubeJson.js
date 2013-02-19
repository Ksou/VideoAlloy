/**
 * @author Sam S.
 */

function YoutubeJson(search, callback) {
	var url = 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=' + search;
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", url);
	xhr.send();
	xhr.onload = function(e) {

		Ti.API.log(this.responseText);
		debugger ;
		var Json = JSON.parse(this.responseText);

		callback(Json);
	}
}

module.exports = YoutubeJson;
