import BaseBehaviour from "../framework/core/BaseBehaviour";
import App from "../framework/core/App";


const {ccclass, property} = cc._decorator;

@ccclass
export default class HelloWorld extends BaseBehaviour{
	protected onLoad():void{
		cc.log("HelloWord::onLoad();");
		cc.log(App.instance.getGame());
	}
}