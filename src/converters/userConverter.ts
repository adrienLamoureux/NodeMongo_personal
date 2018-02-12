import { UserVO } from "../models/vo/userVO";
import { ItemConverter } from "./itemConverter";
import { DaoFactory } from "../config/factory/daoFactory";
import { IUser } from "../models/model/user";
import { IUserModel } from "../models/dao/interface/user";

export class UserConverter {
    
    public static convertUserVOListToUserModelList(userVOList: Array<UserVO>): Array<IUserModel>{
        var userModelList = [];    
        userVOList.forEach(userVO => {
            userModelList.push(UserConverter.convertUserVOToUserModel(userVO));
        });
        return userModelList;
    }
    
    public static convertUserVOToUserModel(userVO: UserVO): IUserModel {
        let user: IUser = {
            firstName: userVO.getFirstName(),
            lastName: userVO.getLastName(),
            items: ItemConverter.convertItemVOListToItemModelList(userVO.getItemVOList()),
            age: userVO.getAge()
        }; 
        return DaoFactory.Instance.createUserModel(user); 
    }
    
    public static convertUserModelListToUserVOList(userModelList: Array<IUserModel>): Array<UserVO> {
        var userVOList = [];
        userModelList.forEach(userModel => {
            userVOList.push(UserConverter.convertUserModelToUserVO(userModel));
        });
        return userVOList;
    }
   
    public static convertUserModelToUserVO(userModel: IUserModel): UserVO {
        var userVO: UserVO = new UserVO(userModel.id);
        userVO.setFirstName(userModel.firstName);
        userVO.setLastName(userModel.lastName);
        userVO.setAge(userModel.age);
        userVO.setItemVOList(ItemConverter.convertItemModelListToItemVOList(userModel.items));
        return userVO;
    }

}
