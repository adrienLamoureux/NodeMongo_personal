import { Model } from "mongoose";
import { IUserModel } from "./user";
import { ITypeModel } from "./type";
import { IItemModel } from "./item";

//List of collections loaded from the table
export interface IModel {
    user: Model<IUserModel>;
    type: Model<ITypeModel>;
    item: Model<IItemModel>;
}