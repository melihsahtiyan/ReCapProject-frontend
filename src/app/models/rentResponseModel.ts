import { Rent } from "./rent";
import { ResponseModel } from "./responseModel";

export interface RentResoponseModel extends ResponseModel{
    data:Rent[]
}