import { Component, OnInit,Output } from '@angular/core';
import {ContractType} from '../../Models/contract-type'
import { Product } from 'src/app/Models/product';
import { CategoryContract } from 'src/app/Models/category-contract';
import contractTypesJson from '../../../assets/contractTypes.json';
import { ProductsComponent } from '../products/products.component';
import 'rxjs/Rx';
import { Observable } from 'rxjs'; 
import { DataChangeService } from '../../Services/data-change.service';
import {  of } from 'rxjs';
@Component({
  selector: 'app-contract-types',
  templateUrl: './contract-types.component.html',
  styleUrls: ['./contract-types.component.css']
})

export class ContractTypesComponent implements OnInit {
@Output() selectedValue: ContractType;

  contractTypes:ContractType[];
 

  constructor(dcs:DataChangeService) {
    
    
   }

  ngOnInit() {

    
    this.contractTypes = contractTypesJson;
    /* this.selectedValue=this.contractTypes[0]; */
    console.log(JSON.stringify(this));
  }


  public loadProducts(selectedValue:ContractType):Product[]{
    let productsSelector:Product[]=[];
    if(selectedValue !== null){
      try{
        this.selectedValue = selectedValue;
        for (let index = 0; index < this.selectedValue.categories.length; index++) {
          const categories= this.selectedValue.categories[index];
          for (let index = 0; index < categories.products.length; index++) {
            productsSelector.push(categories.products[index]);
            console.log(JSON.stringify(productsSelector));
          }
        }
        
        console.log(JSON.stringify(selectedValue));
        
        return productsSelector;
      }catch(e){
        console.log('Error: ',e);

      }
      
      
    }
    return productsSelector;
    


  }
 
}
