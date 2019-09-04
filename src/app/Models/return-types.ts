import { ReturnReason } from './return-reason';

export interface ReturnType {
    code: number;
    type:string;
    returnReasons: ReturnReason[];

}

