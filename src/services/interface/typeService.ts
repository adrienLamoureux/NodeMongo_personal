import { TypeVO } from "../../models/vo/typeVO";
import { IModel } from "../../models/dao/interface/model";

export interface ITypeService {
        
    getTypeList(): Promise<Array<TypeVO>>;
    
    getTypeById(id: Number): Promise<TypeVO>;

    getTypeByAppId(appId: Number): Promise<TypeVO>;
    
    addType(typeVO: TypeVO): Promise<TypeVO>;
        
    deleteTypeById(id: Number): Promise<void>;
    
    resetTypeList(): Promise<Array<TypeVO>>;

    getDefaultTypeList(): Array<TypeVO>;
}