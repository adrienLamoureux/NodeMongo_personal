import { Document } from "mongoose";
import { IType } from "../../model/type";

export interface ITypeModel extends IType, Document {
  //custom methods for your model would be defined here 
}