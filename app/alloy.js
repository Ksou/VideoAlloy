// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
//Alloy.Gloabls.MainWin  ;
Alloy.Collections.Youtube = Alloy.createCollection('Youtube');
Alloy.Globals.Close = null;
//Alloy.Globals.SearchString = "DJ Krush";
Alloy.Globals.LastSearch = null;
Alloy.Globals.GlobalLoad = function(){} ; 
// basically I just make sure to never repeat the same search 2 times in a row 
Alloy.Globals.CoverUpdate = function(){} ; 
