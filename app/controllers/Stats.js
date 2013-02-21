/*
 Alloy.Collections.Youtube.addEventListener('change', function(){

 debugger ;

 });
 */
StaticUpdate() ; 
// Static Update gets stats on the nature of the table itself , only runs once . 
function UpdateStats() {
	// here we just update various stats about the collection
	$.Local.text = Alloy.Collections.Youtube.length + ' : Local models';
	// go and fetch it , then see what the length is
	// [ERROR] :  Error triggering 'focus' event: TypeError: 'undefined' is not a function (evaluating 'Alloy.Collections.Youtube.clone()')
	// can't clone ??? how much of Backbone is missing from Alloy ???
	//var TempCollection = Alloy.Collections.Youtube;
	var TempB = _.clone(Alloy.Collections.Youtube);
	
	TempB.fetch({
	success : function(){
	$.Total.text = TempB.length + ' : Total models';	
		
	},	
	error : function (){
		
	$.Total.text = ('Error , can not load models ')	 ; 
		
	}
	});
	//clone the collection , so i can fetch and read its length
	

	
	
	debugger ;
	// reset the collection
	//Alloy.Collections.Youtube.reset() ;
}
function StaticUpdate(){
// this function updates issue stats about our database , 
// Columns , Adapter type , ect 
		$.Columns.font = {fontWeight :'bold'} ; 
	// we're just reading info , no need to clone it here 
	var TempB = Alloy.Collections.Youtube; 
		// start at 90 , and go down 20  for each one
	// print out all the collum names , this is dynamic , so if you add a few colums they'll be added to this 
	var y = 0 ; 
	for (var i in TempB.config.columns ) {
		y++ ; 
	// 
	var topDis = 90 + (y*25) ; 
		$.StatsWin.add(Ti.UI.createLabel({
			
			top : topDis,
		
			text :  i +" : " + TempB.config.columns[i]
		}));

	}
	
		//var y = 0 ; 
		y = y +  2 ; // add a few spaces 
		$.StatsWin.add(Ti.UI.createLabel({
			font : {fontWeight : 'bold'}, 
		top : 90 + ((y-.5)*25), 	
		text : 'Adapter Stats'	
		}));
		
		// here we do the same thing for the adapter as well , we get the type , collection name , ID , and db_name
	for (var i in TempB.config.adapter ) {
		y++ ; 
	// 
	var topDis = 90 + (y*25) ; 
		$.StatsWin.add(Ti.UI.createLabel({
			
			top : topDis,
		
			text :  i +" : " + TempB.config.adapter[i]
		}));

	}
}

