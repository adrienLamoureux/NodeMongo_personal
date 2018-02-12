import { IItem } from "./item";
import { IItemModel } from "../dao/interface/item";

// Define the collection model
export interface IUser {
    firstName?: String;
    lastName?: String;
    age?: Number;
    items?: Array<IItemModel>;
  }