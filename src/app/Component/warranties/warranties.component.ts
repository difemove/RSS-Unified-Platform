import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/Models/questions';

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
 
  
  constructor() { }
  
  ngOnInit() {
    this.npsr=true;
    this.webex=false;
    this.specialist=false;
    this.npsrTypes=["NPSR Pre-Authorized","NPSR In Review",
    "NPSR Rejected","Warranty","Warranty Repair", "Warranty Save"
  ];
  

   

  }

}
