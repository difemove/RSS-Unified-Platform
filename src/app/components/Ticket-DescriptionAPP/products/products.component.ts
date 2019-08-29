import { Component, OnInit,Input,Output, HostBinding } from '@angular/core';
import { Product } from 'src/app/Models/product';
import{ DataChangeService} from '../../../Services/data-change.service';
import {ContractTypesComponent} from '../contract-types/contract-types.component';
import { ContractType } from 'src/app/Models/contract-type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:Product[];
@Output() selectedValue: String;

  constructor(private dcs:DataChangeService) { 
    
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
    this.getProducts();
  }

  public setProducts(p:Product[]):void{
    this.products=p;

  }
  getProducts(): void {
    this.dcs.emitterProducts.subscribe((products: Product[])=>this.products=products);
  }

 /* selectValue(p:Product):void{
    this.selectedValue=p.code;
    this.emitProductCode(this.selectedValue);
  }*/
  
  selectValue(p: String): void {
    this.selectedValue = p;
    this.emitProductCode(this.selectedValue);
  }
  public emitProductCode(code:String){
    this.dcs.loadProductCode(code);
  }
}
