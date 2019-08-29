import { Component, OnInit } from '@angular/core';
import customerTypesJson from '../../../../assets/customerTypes.json';
import { CustomerType } from 'src/app/models/customer-type.js';
import { DataChangeService } from 'src/app/Services/data-change.service.js';

@Component({
  selector: 'app-customer-types',
  templateUrl: './customer-types.component.html',
  styleUrls: ['./customer-types.component.css']
})
export class CustomerTypesComponent implements OnInit {
  selectedValue: string;
  customerTypes: CustomerType[];
  constructor(private dcs:DataChangeService) { }

  ngOnInit() {
    this.customerTypes= customerTypesJson;
   

  }
  public emitCustomerCode(code:string){
    this.dcs.loadCustomerCode(code);
  }
}