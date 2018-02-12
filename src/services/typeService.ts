import { ITypeService } from './interface/typeService';
import { TypeVO } from '../models/vo/typeVO';
import { DaoFactory } from '../config/factory/daoFactory';
import { ITypeModel } from '../models/dao/interface/type';
import { Model } from "mongoose";
import { TypeConverter } from '../converters/typeConverter';
import { TypeSchema } from '../models/schema/typeSchema';

export class TypeService implements ITypeService {

    protected typeDAO: Model<ITypeModel>;

    constructor(){
        this.typeDAO = DaoFactory.Instance.getTypeDAO();
    }

    public getTypeList(): Promise<Array<TypeVO>>{
        return this.typeDAO.find().exec().then((data: Array<ITypeModel>) => TypeConverter.convertTypeModelListToTypeVOList(data));
    }
    
    public getTypeById(id: Number): Promise<TypeVO>{
        return this.typeDAO.findById(id).exec().then((data: ITypeModel) => TypeConverter.convertTypeModelToTypeVO(data));
    }

    public getTypeByAppId(appId: Number): Promise<TypeVO>{
        return this.typeDAO.findOne({appId: appId}).exec().then((data: ITypeModel) => TypeConverter.convertTypeModelToTypeVO(data));
    }
    
    public addType(typeVO: TypeVO): Promise<TypeVO>{
        return this.typeDAO.create(TypeConverter.convertTypeVOToTypeModel(typeVO)).then((data: ITypeModel) => TypeConverter.convertTypeModelToTypeVO(data));
    }

    public deleteTypeById(id: Number): Promise<void>{
        return this.typeDAO.deleteOne({_id: id}).exec();
    }
    
    public resetTypeList(): Promise<Array<TypeVO>>{
        return this.typeDAO.deleteMany({}).exec()
            .then((data: void) => this.typeDAO.insertMany(TypeConverter.convertTypeVOListToTypeModelList(this.getDefaultTypeList()))
                .then((data: Array<ITypeModel>) => TypeConverter.convertTypeModelListToTypeVOList(data))
            )
        ;
    }

    public getDefaultTypeList(): Array<TypeVO>{
        var typeList: Array<TypeVO> = new Array<TypeVO>();
        var type1 = new TypeVO();
        type1.setName("book");
        type1.setDescription("Book object");
        type1.setAppId(1);
        typeList.push(type1);
        return typeList;
    }
    

} 