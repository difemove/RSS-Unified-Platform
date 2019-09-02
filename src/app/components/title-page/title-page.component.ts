import { Component, OnInit } from '@angular/core';
import { DataChangeService } from 'src/app/Services/data-change.service';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {
  
  appIndexSelected:number;
  showTitle:boolean;

  constructor(private dcs:DataChangeService) { }
  
  ngOnInit() {
    this.showTitle=true;
    this.getAppIndexSelected;
  }

  getAppIndexSelected (){
    this.dcs.emitterTabIndex.subscribe((appIndexSelected:number)=>this.appIndexSelected=this.appIndexSelected);
  }

  getTitleApp():string{
    switch (this.appIndexSelected){
      case 0 :{
        return "Ticket Template";
      }
        
      case 1: {
        return "Ticket Description";
      }
        
      case 2: {
        return "Useful Links";
      }
      default : {
        return "";
      }
    }
   

  }


}
