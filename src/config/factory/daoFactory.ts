import { IUserModel } from "../../models/dao/interface/user";
import { UserSchema } from './../../models/schema/userSchema';
import { Model } from "mongoose";
import { ITypeModel } from "../../models/dao/interface/type";
import { TypeSchema } from "../../models/schema/typeSchema";
import { IItemModel } from "../../models/dao/interface/item";
import { ItemSchema } from "../../models/schema/itemSchema";
import { IType } from "../../models/model/type";
import { IItem } from "../../models/model/item";
import { IUser } from "../../models/model/user";
import { Server } from "../../server";

export class DaoFactory
{
    private static _instance: DaoFactory;
    private userDAO: Model<IUserModel>;
    private typeDAO: Model<ITypeModel>;
    private itemDAO: Model<IItemModel>;

    private constructor()
    {
        this.userDAO = Server.dbConnection.model("users", UserSchema);
        this.typeDAO = Server.dbConnection.model("types", TypeSchema);
        this.itemDAO = Server.dbConnection.model("items", ItemSchema);
    }

    public static get Instance()
    {
        // Do you need arguments? Make it a regular method instead.
        return this._instance || (this._instance = new this());
    }

    public getUserDAO(): Model<IUserModel>{
        return this.userDAO;
    }

    public getTypeDAO(): Model<ITypeModel>{
        return this.typeDAO;
    }

    public getItemDAO(): Model<IItemModel>{
        return this.itemDAO;
    }

    public createTypeModel(type: IType): ITypeModel{
        return new this.typeDAO(type);
    }

    public createUserModel(user: IUser): IUserModel{
        return new this.userDAO(user);
    }

    public createItemModel(item: IItem): IItemModel{
        return new this.itemDAO(item);
    }
}
