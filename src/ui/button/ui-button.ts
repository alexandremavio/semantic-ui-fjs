import {TriggerEvent} from "../commons/trigger-event";
export class UiButton{
  private color:string;
  private tabIndex:number;
  private icon:string;
  private globalVariable:string;
  private animationClass:string;
  private animation:string;
  private hiddenContentLabel:string;
  private hiddenContentIcon:string;
  private disabled:boolean;
  private click:TriggerEvent;
  private visibleContentIcon:string;
  private labeled:boolean;
  private labeledClass:string;
  private labeledLeft:boolean;
  private labeledButtonIcon:string;
  private labeledButtonLabel:string;
  private labeledLabel:string;

  private labeledButtonColor:string;
  private labeledLabelColor:string;
  private labeledLabelPosition:string;



  constructor() {
    this.color="";
    this.globalVariable="";
    this.labeledClass="";
    this.icon="";
    this.tabIndex=0;
    this.animation="";
    this.hiddenContentLabel="";
    this.hiddenContentIcon="";
    this.animationClass="";
    this.visibleContentIcon="";
    this.labeled=false;
    this.labeledLeft=false;
    this.labeledButtonIcon="";
    this.labeledButtonLabel="";
    this.labeledLabel="";



    this.click = new TriggerEvent();
  }
  onClick(){
    this.click.fire();
  }

  set setLabeled(labeled:boolean){
    if (labeled===true) {
      this.labeledClass=" labeled";
    }
    this.labeled=labeled;
  }

  set setLabeledLeft(labeledLeft:boolean){
    if (this.labeled===true) {
      if (labeledLeft===true) {
        this.labeledClass=" left labeled";
      }
    }
    this.labeledLeft=labeledLeft;
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
