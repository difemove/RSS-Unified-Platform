import { Component, OnInit, Output } from '@angular/core';
import { DataChangeService } from 'src/app/Services/data-change.service';

@Component({
  selector: 'app-aditional-information',
  templateUrl: './aditional-information.component.html',
  styleUrls: ['./aditional-information.component.css']
})
export class AditionalInformationComponent implements OnInit {
 information:String;
isNPSR:boolean;
  constructor(private dcs:DataChangeService) { }

  ngOnInit() {
    this.getIsNPSR();
    this.getInformation();
  }
  
  getIsNPSR(){
    this.dcs.emitterIfNPSR.subscribe((isNPSR: boolean)=>this.isNPSR=isNPSR);
  }
  getInformation(){
    this.dcs.emitterInformation.subscribe((information: String)=>this.information=information);
  }
  public emitInformation(information:String){
    this.information=information;
    this.dcs.loadInformation(this.information);
  }
  public checkNPSR():boolean{
    if(this.isNPSR){
      this.information = '';
      this.emitInformation(this.information);
    }
    
    return this.isNPSR;
  }
}
