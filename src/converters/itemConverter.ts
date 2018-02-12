import { ItemVO } from "../models/vo/itemVO";
import { TypeConverter } from "../converters/typeConverter";
import { TypeVO } from "../models/vo/typeVO";
import { IItem } from "../models/model/item";
import { DaoFactory } from "../config/factory/daoFactory";
import { IItemModel } from "../models/dao/interface/item";

export class ItemConverter {
    
    public static convertItemVOListToItemModelList(itemVOList: Array<ItemVO>): Array<IItemModel>{
        var itemModelList = [];    
        itemVOList.forEach(itemVO => {
            itemModelList.push(ItemConverter.convertItemVOToItemModel(itemVO));
        });
        return itemModelList;
    }
    
    public static convertItemVOToItemModel(itemVO: ItemVO): IItemModel {
        let item: IItem = {
            name: itemVO.getName(),
            description: itemVO.getDescription(),
            price: itemVO.getPrice(),
            type: TypeConverter.convertTypeVOToTypeModel(itemVO.getTypeVO())
        }; 
        return DaoFactory.Instance.createItemModel(item);
    }
    
    public static convertItemModelListToItemVOList(itemModelList: Array<IItemModel>): Array<ItemVO> {
        var itemVOList = [];
        itemModelList.forEach(itemModel => {
            itemVOList.push(ItemConverter.convertItemModelToItemVO(itemModel));
        });
        return itemVOList;
    }
   
    public static convertItemModelToItemVO(itemModel: IItemModel): ItemVO {
        var itemVO: ItemVO = new ItemVO(itemModel.id);
        itemVO.setName(itemModel.name);
        itemVO.setDescription(itemModel.description);
        itemVO.setPrice(itemModel.price);
        return itemVO;
    }

}
