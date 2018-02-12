import { UserVO } from "../../models/vo/userVO";
import { IModel } from "../../models/dao/interface/model";

export interface IUserService {
        
    getUserList(): Promise<Array<UserVO>>;
    
    getUserById(id: Number): Promise<UserVO>;
    
    addUser(userVO: UserVO): Promise<UserVO>;
    
    updateUser(id: Number, userVO: UserVO): Promise<UserVO>;
    
    deleteUserById(id: Number): Promise<void>;
    
    resetUserList(): Promise<Array<UserVO>>;

    getDefaultUserList(): Array<UserVO>;

}