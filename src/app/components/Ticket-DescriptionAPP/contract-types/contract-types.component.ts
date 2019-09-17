import { Component, OnInit,Output, HostListener } from '@angular/core';
import {ContractType} from '../../../Models/contract-type'
import { Product } from 'src/app/Models/product';
import { CategoryContract } from 'src/app/Models/category-contract';
import contractTypesJson from '../../../../assets/contractTypes.json';
import { ProductsComponent } from '../products/products.component';

import { Observable,of } from 'rxjs'; 
import { DataChangeService } from '../../../Services/data-change.service';

@Component({
  selector: 'app-contract-types',
  templateUrl: './contract-types.component.html',
  styleUrls: ['./contract-types.component.css']
})

export class ContractTypesComponent implements OnInit {
  
@Output() selectedValue: ContractType;


  contractTypes:ContractType[];
 

  constructor(private dcs:DataChangeService) {
    
    
   }

  ngOnInit() {

    
    this.contractTypes = contractTypesJson;
 
  }
  
  public loadProducts(selectedValue:ContractType):void{
    
   this.dcs.loadProductsEmitter(selectedValue);
   this.emitSelectedValue(selectedValue);   

  }
  public emitSelectedValue(c:ContractType){
    this.dcs.loadContractCode(c.code);
  }
 
}
