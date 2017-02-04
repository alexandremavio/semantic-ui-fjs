import {TriggerEvent} from "../commons/trigger-event";
export class UiButton{
  private color:string;
  private tabIndex:number;
  private icon:string;
  private globalVariable:string;
  private animationClass:string;
  private visibleContentLabel:string;
  private hiddenContentIcon:string;
  private disabled:boolean;
  private click:TriggerEvent;

  constructor() {
    this.color="";
    this.globalVariable="";
    this.icon="";
    this.tabIndex=0;
    this.animation="";
    this.visibleContentLabel="";
    this.hiddenContentIcon="";
    this.animationClass="";
    this.click = new TriggerEvent();
  }
  onClick(){
    this.click.fire();
  }
  setAnimation(animation:string){
    if (animation.toLowerCase()=="horizontal") {
      this.animationClass=" animated"
    } else if (animation.toLowerCase()=="vertical") {
      this.animationClass=" vertical animated"
    } else if (animation.toLowerCase()=="fade") {
      this.animationClass=" animated fade"
    }
    this.animation = animation;
  }
}
