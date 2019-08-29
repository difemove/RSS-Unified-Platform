import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/Models/questions';
import { DataChangeService } from 'src/app/Services/data-change.service';

@Component({
  selector: 'app-warranties',
  templateUrl: './warranties.component.html',
  styleUrls: ['./warranties.component.css']
})
export class WarrantiesComponent implements OnInit {
  npsr:boolean;
  webex: boolean;
  specialist: boolean;
 /* questions:Questions;*/
 npsrSelected:String;
  npsrTypes:string[];
 
  
  constructor(private dcs:DataChangeService) { }
  
  ngOnInit() {
    this.npsr=false;
    this.webex=false;
    this.specialist=false;
    this.emitSelectionsBoolean();


    this.npsrTypes=["NPSR Pre-Authorized","NPSR In Review",
    "NPSR Rejected","Warranty","Warranty Repair", "Warranty Save"
  ];
  
 
   

  }
  public emitSelection(s: string) {
    switch(s){
     case 'webex':{
       this.webex=!this.webex;
       break;
      }
      case 'specialist': {
        this.specialist = !this.specialist;
        break;
      }
      case 'npsr':{
        this.npsr=!this.npsr;
        this.emitInformation('');
        break;
      }
    
    }
    this.dcs.loadNPSRCode(this.webex,this.specialist,this.npsr);

  }
  emitInformation(i: string) {
    this.dcs.loadInformation(i);
  }
  public emitSelectionsBoolean(){
    this.dcs.loadNPSRCode(this.webex,this.specialist,this.npsr);
  }

}
