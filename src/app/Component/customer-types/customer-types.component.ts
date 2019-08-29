import { Component, OnInit } from '@angular/core';
import customerTypesJson from '../../../assets/customerTypes.json';
import { CustomerType } from 'src/app/models/customer-type.js';

@Component({
  selector: 'app-customer-types',
  templateUrl: './customer-types.component.html',
  styleUrls: ['./customer-types.component.css']
})
export class CustomerTypesComponent implements OnInit {
  selectedValue: string;
  customerTypes: CustomerType[];
  constructor() { }

  ngOnInit() {
    this.customerTypes= customerTypesJson;
   

  }

}