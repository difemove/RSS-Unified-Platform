import { Injectable, Output, EventEmitter } from '@angular/core';
import { Product } from '../Models/product';
import { ProductsComponent } from '../components/Ticket-DescriptionAPP/products/products.component';
import { Observable, of, concat } from 'rxjs';
import { ContractType } from '../Models/contract-type';
import { CategoryContract } from '../Models/category-contract';

@Injectable({
  providedIn: 'root'
})
export class DataChangeService {
  
  @Output() change: EventEmitter<boolean>= new EventEmitter();
  @Output() emitterProducts: EventEmitter<Product[]>= new EventEmitter();
  @Output() emitterProductCode: EventEmitter<String>= new EventEmitter();
  @Output() emitterContractCode: EventEmitter<String>= new EventEmitter();
  @Output() emitterInformation: EventEmitter<String>= new EventEmitter();
  @Output() emitterCustomerCode: EventEmitter<String>= new EventEmitter();
  @Output() emitterNPSRCode: EventEmitter<String>= new EventEmitter();
 @Output() emitterIfNPSR: EventEmitter<boolean>= new EventEmitter();
@Output() emitterTabIndex: EventEmitter<number>= new EventEmitter();
 

  constructor() {

   }

   getProducts(c:ContractType):Observable<Product[]>{
    let products:Product[]=[];
    products=this.loadProducts(c);
     this.emitterProducts.emit(products);
    return of(products);
   }

  public loadProducts(selectedValue: ContractType): Product[] {
    let productsSelector: Product[] = [];
    if (selectedValue !== null) {
      try {
        
        for (let index = 0; index < selectedValue.categories.length; index++) {
          const categories = selectedValue.categories[index];
          productsSelector=this.loadProductsCategories(categories,productsSelector);
        }
      
        /*console.log(JSON.stringify(selectedValue));*/

        return productsSelector;
      } catch (e) {
        console.log('Error: ', e);

      }
    }

  }
 public loadProductsCategories(c:CategoryContract, p:Product[]): Product[]{
        
        for (let index = 0; index < c.products.length; index++) {
          p.push(c.products[index]);
          /*console.log(JSON.stringify(p));*/
        
        }
        return p;
      }
      


  loadProductsEmitter(c:ContractType){
  let products:Product[]=[];
    products=this.loadProducts(c);
    this.emitterProducts.emit(products);
  }

  loadProductCode(p:String){
    this.emitterProductCode.emit(p);
  }

  loadContractCode(p: String) {
    this.emitterContractCode.emit(p);
    console.log(p);
  }

  loadInformation(p: String) {
    this.emitterInformation.emit(p);
  }

  loadCustomerCode(p: String) {
    this.emitterCustomerCode.emit(p);
  }
  loadNPSRCode(w:boolean,s:boolean,n:boolean) {
    let ws: string = (w)?'Y':'N';
    let ss: string = (s) ? 'Y' : 'N';
    let ns: string = (n) ? 'Y' : 'N';
    let result: string= ws.concat(ss.concat(ns));

    this.emitterNPSRCode.emit(result);
    this.emitterIfNPSR.emit(n);
  }

  loadTabSelected(n:number):void{
    this.emitterTabIndex.emit(n);
  }

}
