export class TriggerEvent{
  public fire:Function;
  constructor(){
    this.fire = ()=>{};
  }
  trigger(fn:Function){
    this.fire = fn;
  }
  delegate(fn:Function){
    this.fire = fn;
  }
}
