/*
 Alloy.Collections.Youtube.addEventListener('change', function(){

 debugger ;

 });
 */
function UpdateStats() {
	// here we just update various stats about the collection
	$.Local.text = Alloy.Collections.Youtube.length + 'Local models';
	// go and fetch it , then see what the length is
	// [ERROR] :  Error triggering 'focus' event: TypeError: 'undefined' is not a function (evaluating 'Alloy.Collections.Youtube.clone()')
	// can't clone ??? how much of Backbone is missing from Alloy ???
	//var TempCollection = Alloy.Collections.Youtube;
 	var TempB =	clone(Alloy.Collections.Youtube);

	TempB.fetch() ; 
	//clone the collection , so i can fetch and read its length
	$.Total.text = TempB.length + 'Total models';
	// reset the collection
	//Alloy.Collections.Youtube.reset() ;
}

var clone = (function(){ 
	// found this on stack , the built in backbone collection.clone function does not work !
  return function (obj) { Clone.prototype=obj; return new Clone() };
  function Clone(){}
}());
