var BaseBehaviour=require("BaseBehaviour");
var BaseGame=require("BaseGame");

var Language={AUTO:0,CN:1,EN:2};

var App=cc.Class({
	extends:BaseBehaviour,
	
	statics:{
		CHANGE_LANGUAGE:"changeLanguage",
		PAUSE_OR_RESUME:"pauseOrResume",
		instance:null
	},
	
	properties:{
		m_language:{default:Language.AUTO,type:cc.Enum(Language),displayName:"Language",tooltip:"AUTO:运行时根据系统语言决定是CN/EN \nCN:中文\nEN:英文"},
		language:{visible:false, get:function(){return this.m_language;}},
		
		m_isFirstOpen:{default:false,serializable:false,visible:false},
		isFirstOpen:{visible:false, get:function(){return this.m_isFirstOpen;}},
		
		m_isPause:{default:false,serializable:false},
		isPause:{visible:false,get:function(){return this.m_isPause;}},
		
		games:{default:[],type:[BaseGame],tooltip:"游戏列表"}
	},
	
	onLoad:function(){
		App.instance=this;
		this.initFirstOpenApp();

		if(this.m_language==Language.AUTO){
			this.initLanguage();
		}
	},
	
	initFirstOpenApp:function(){
		const key="isFirstOpenApp";
		this.m_isFirstOpen=cc.sys.localStorage.getItem(key,1)==1;
		if(this.m_isFirstOpen) {
			cc.sys.localStorage.setItem(key,0);
		}
	},
	
	initLanguage:function(){
		var isCN=cc.sys.language==cc.sys.LANGUAGE_CHINESE;
		this.m_language=isCN?Language.CN:Language.EN;
		//改变语言事件
		this.node.dispatchEvent(new cc.Event.EventCustom(App.CHANGE_LANGUAGE,false));
	},
	
	setPause:function(isPause){
		if(this.m_isPause==isPause)return;
		this.m_isPause=isPause;
		
		if(this.m_isPause)cc.game.pause();
		else cc.game.resume();
		
		this.node.dispatchEvent(new cc.Event.EventCustom(App.PAUSE_OR_RESUME,false));
	},
	
	getGame:function(index=0){
		return this.games[index];
	},
	
	onDestroy:function(){
		
	}
	
});

module.exports.App=App;
module.exports.Language=Language;