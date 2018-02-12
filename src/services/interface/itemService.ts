import { ItemVO } from "../../models/vo/itemVO";
import { IModel } from "../../models/dao/interface/model";

export interface IItemService {
        
    getItemList(): Promise<Array<ItemVO>>;
    
    getItemById(id: Number): Promise<ItemVO>;
    
    addItem(itemVO: ItemVO): Promise<ItemVO>;

    updateItem(id: Number, itemVO: ItemVO): Promise<ItemVO>;

    deleteItemById(id: Number): Promise<void>;
    
    resetItemList(): Promise<Array<ItemVO>>;

    getDefaultItemList(): Array<ItemVO>;
}