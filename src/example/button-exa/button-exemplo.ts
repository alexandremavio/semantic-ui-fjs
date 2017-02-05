export class ButtonExemplo{
    private title: string;
    private disableAll:boolean;
    private refresh:Function;
    constructor(){
	   this.title = "FerrugemJS";
    }
    private test(){
      alert('opbs');
      this.disableAll = true;
      this.refresh();
    }
}
