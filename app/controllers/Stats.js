/*
Alloy.Collections.Youtube.addEventListener('change', function(){
	
debugger ; 	
	
});
*/
function UpdateStats(){
// here we just update various stats about the collection 	
$.Local.text =  Alloy.Collections.Youtube.length + 'Local models' ; 
// go and fetch it , then see what the length is 
//Alloy.Collections.Youtube.fetch() ;

//$.Total.text  = Alloy.Collections.Youtube.length + 'Total models' ; 
	
}
