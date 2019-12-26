var BaseGame=require("BaseGame");
var App=require("App").App;
var Language=require("App").Language;

var Game=cc.Class({
	extends:BaseGame,
	
	properties:{
		
	},
	
	onLoad:function(){
		cc.log("Game::onLoad();");
		cc.log(App.instance);
		cc.log(Language.AUTO);
	}
});

module.exports=Game;