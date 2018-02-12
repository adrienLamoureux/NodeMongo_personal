import { UserService } from "../../services/userService";
import { TypeService } from "../../services/typeService";
import { IUserService } from "../../services/interface/userService";
import { ITypeService } from "../../services/interface/typeService";
import { IItemService } from "../../services/interface/itemService";
import { ItemService } from "../../services/itemService";

export class ServiceFactory
{
    private static _instance: ServiceFactory;
    private userService: IUserService;
    private typeService: ITypeService;
    private itemService: IItemService;

    private constructor()
    {
        this.userService = new UserService();
        this.typeService = new TypeService();
        this.itemService = new ItemService();
    }

    public static get Instance()
    {
        // Do you need arguments? Make it a regular method instead.
        return this._instance || (this._instance = new this());
    }

    public getUserService(): IUserService{
        return this.userService;
    }

    public getTypeService(): ITypeService{
        return this.typeService;
    }

    public getItemService(): IItemService{
        return this.itemService;
    }
}