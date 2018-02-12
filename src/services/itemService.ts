import { IItemService } from './interface/itemService';
import { ItemVO } from '../models/vo/itemVO';
import { DaoFactory } from '../config/factory/daoFactory';
import { IItemModel } from '../models/dao/interface/item';
import { Model } from "mongoose";
import { ItemConverter } from '../converters/itemConverter';
import { ItemSchema } from '../models/schema/itemSchema';
import { ITypeService } from './interface/typeService';
import { ServiceFactory } from '../config/factory/serviceFactory';
import { TypeService } from './typeService';
import { TypeConverter } from '../converters/typeConverter';

export class ItemService implements IItemService {

    protected itemDAO: Model<IItemModel>;
    protected typeService: ITypeService;

    constructor(){
        this.itemDAO = DaoFactory.Instance.getItemDAO();
    }

    public getItemList(): Promise<Array<ItemVO>>{
        return this.itemDAO.find().populate('type').exec().then((data) => ItemConverter.convertItemModelListToItemVOList(data));
    }
    
    public getItemById(id: Number): Promise<ItemVO>{
        return this.itemDAO.findById(id).populate('type').exec().then((data) => ItemConverter.convertItemModelToItemVO(data));
    }

    public addItem(itemVO: ItemVO): Promise<ItemVO>{
        return this.itemDAO.create(ItemConverter.convertItemVOToItemModel(itemVO)).then((data) => ItemConverter.convertItemModelToItemVO(data));
    }

    public updateItem(id: Number, itemVO: ItemVO): Promise<ItemVO>{
        return this.itemDAO.findOneAndUpdate({_id: id}, ItemConverter.convertItemVOToItemModel(itemVO)).populate('type').exec().then((data) => ItemConverter.convertItemModelToItemVO(data));
    }

    public deleteItemById(id: Number): Promise<void>{
        return this.itemDAO.deleteOne({_id: id}).exec();
    }
    
    public resetItemList(): Promise<Array<ItemVO>>{
        return this.itemDAO.deleteMany({}).exec()
            .then((data: void) => this.itemDAO.insertMany(ItemConverter.convertItemVOListToItemModelList(this.getDefaultItemList()))
                .then((data: Array<IItemModel>) => ItemConverter.convertItemModelListToItemVOList(data))
            )
        ;
    }

    public getDefaultItemList(): Array<ItemVO>{
        var itemList: Array<ItemVO> = new Array<ItemVO>();
        var item1 = new ItemVO();
        item1.setName("book");
        item1.setDescription("Book object");
        item1.setPrice(1);
        //item1.setTypeVO(TypeConverter.convertTypeModelToTypeVO(ServiceFactory.Instance.getTypeService().getTypeByAppId(ServiceFactory.Instance.getTypeService().getDefaultTypeList().pop().getAppId())));
        itemList.push(item1);
        return itemList;
    }
    

} 