import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataChangeService } from 'src/app/Services/data-change.service';

@Component({
  selector: 'app-ticket-description',
  templateUrl: './ticket-description.component.html',
  styleUrls: ['./ticket-description.component.css']
})
export class TicketDescriptionComponent implements OnInit {

 ticketDescription:string;
 customerCode:String;
 contractCode:string;
 productCode:string;
 NPSRCode:string;
 information:string;
@Output() descriptionEmitter: EventEmitter<String>= new EventEmitter;

  constructor(private dcs:DataChangeService) { }

  ngOnInit() {
    this.getCodes();
  }

  getCodes(){
    this.dcs.emitterCustomerCode.subscribe((customerCode: String)=>this.customerCode=customerCode);
    this.dcs.emitterContractCode.subscribe((contractCode: string) => this.contractCode = contractCode);
    this.dcs.emitterProductCode.subscribe((productCode: string) => this.productCode = productCode);
    this.dcs.emitterNPSRCode.subscribe((NPSRCode: string) => this.NPSRCode = NPSRCode);
    this.dcs.emitterInformation.subscribe((information: string)=>this.information=information);
  }
  




}


