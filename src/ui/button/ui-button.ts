import {TriggerEvent} from "../commons/trigger-event";
export class UiButton{
  private label:string;
  private color:string;
  private tabIndex:number;
  private icon:string;
  private globalVariable:string;
  private animated:string;
  private visibleContentLabel:string;
  private hiddenContentIcon:string;
  private disabled:boolean;
  private click:TriggerEvent;

  constructor() {
    this.label="Button";
    this.color="";
    this.globalVariable="";
    this.icon="";
    this.tabIndex=0;
    this.animated="";
    this.visibleContentLabel="";
    this.hiddenContentIcon="";
    this.click = new TriggerEvent();
  }
  onClick(){
    this.click.fire();
  }
  setAnimated(animated:string){
    console.log(`${this.animated} , ${animated}`);

    this.animated = animated;
  }
}
