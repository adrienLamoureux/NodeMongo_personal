import { TypeVO } from "../models/vo/typeVO";
import { IType } from "../models/model/type";
import { DaoFactory } from "../config/factory/daoFactory";
import { ITypeModel } from "../models/dao/interface/type";

export class TypeConverter {
    
    public static convertTypeVOListToTypeModelList(typeVOList: Array<TypeVO>): Array<ITypeModel>{
        var typeModelList = [];    
        typeVOList.forEach(typeVO => {
            typeModelList.push(TypeConverter.convertTypeVOToTypeModel(typeVO));
        });
        return typeModelList;
    }
    
    public static convertTypeVOToTypeModel(typeVO: TypeVO): ITypeModel {
        let type: IType = {
            name: typeVO.getName(),
            description: typeVO.getDescription(),
            appId: typeVO.getAppId()
        }; 
        return DaoFactory.Instance.createTypeModel(type); 
    }
    
    public static convertTypeModelListToTypeVOList(typeModelList: Array<ITypeModel>): Array<TypeVO> {
        var typeVOList = [];
        typeModelList.forEach(typeModel => {
            typeVOList.push(TypeConverter.convertTypeModelToTypeVO(typeModel));
        });
        return typeVOList;
    }
   
    public static convertTypeModelToTypeVO(typeModel: ITypeModel): TypeVO {
        var typeVO: TypeVO = new TypeVO(typeModel.id);
        typeVO.setName(typeModel.name);
        typeVO.setDescription(typeModel.description);
        typeVO.setAppId(typeModel.appId);
        return typeVO;
    }

}
