import { Component, OnInit,Input,Output } from '@angular/core';
import { Product } from 'src/app/Models/product';
import{ DataChangeService} from '../../Services/data-change.service';
import {ContractTypesComponent} from '../contract-types/contract-types.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
@Input() products:Product[];

  constructor(dcs:DataChangeService) { 
    
  }

  ngOnInit() {
    
    this.setProducts(
      [
        {
          productDescription:"prod1",
          code:"cod"
        }
      ]
    )

    this.subscription = this.ss.getEmittedValue()
      .subscribe(item => this.onMain = item);
  }
public setProducts(p:Product[]):void{
  this.products=p;

}

}
