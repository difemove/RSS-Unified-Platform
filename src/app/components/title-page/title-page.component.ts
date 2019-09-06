import { Component, OnInit } from '@angular/core';
import { DataChangeService } from 'src/app/Services/data-change.service';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {
  titleAPP:string="";
  appIndexSelected:number;
  showTitle:boolean;

  constructor(private dcs:DataChangeService) { }
  
  ngOnInit() {
    this.showTitle=true;
    this.getAppIndexSelected();

  }

  getAppIndexSelected (){
    this.dcs.emitterTabIndex.subscribe((appIndexSelected:number)=>this.appIndexSelected=this.appIndexSelected);
  }

  getTitleApp():void{
    this.showTitle=false;
    switch (this.appIndexSelected){
      case 0 :{
        this.titleAPP="Ticket Template";
      }
        
      case 1: {
        this.titleAPP ="Ticket Description";
      }
        
      case 2: {
        this.titleAPP ="Useful Links";
      }
      default : {
        this.titleAPP ="";
      }
      this.titleAPP= "-"+this.titleAPP + "-";
    }
    

  }


}
