import "eliorcohen/semantic-ui/dist/semantic.min.css!";
import "eliorcohen/semantic-ui/dist/semantic.min";

export class InitApp{
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
