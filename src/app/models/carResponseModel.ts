import { Car } from "./car";
import { ResponseModel } from "./responseModel";

export interface CarResoponseModel extends ResponseModel{
    data:Car[]
}