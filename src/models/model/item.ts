import { IType } from "./type";

// Define the collection model
export interface IItem {
    name?: String;
    description?: String;
    price?: Number;
    type?: IType;
  }