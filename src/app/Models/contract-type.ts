import { CategoryContract } from './category-contract';

export class ContractType {
   contractDescription:String;
    code:String;
    categories:CategoryContract[];

   /*
   public get ContractDescription() : String {
       return this.contractDescription;
   }
    public get Code(): String {
        return this.code;
    }
    public get Categories(): CategoryContract[] {
        return this.categories;
    }
    public set ContractDescription(s:String) {
        this.contractDescription=s;
    }
    public set Code(c:String) {
        this.code=c;
    }
    public set Categories(c:CategoryContract[])  {
        this.categories= c;
    }
    */
}
