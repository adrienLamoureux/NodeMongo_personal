import { IUserService } from './interface/userService';
import { UserVO } from '../models/vo/userVO';
import { DaoFactory } from '../config/factory/daoFactory';
import { IUserModel } from '../models/dao/interface/user';
import { Model } from "mongoose";
import { UserConverter } from '../converters/userConverter';
import { UserSchema } from '../models/schema/userSchema';

export class UserService implements IUserService {

    protected userDAO: Model<IUserModel>;

    constructor(){
        this.userDAO = DaoFactory.Instance.getUserDAO();
    }

    public getUserList(): Promise<Array<UserVO>>{
        return this.userDAO.find().populate('items').exec().then((data) => UserConverter.convertUserModelListToUserVOList(data));
    }
    
    public getUserById(id: Number): Promise<UserVO>{
        return this.userDAO.findById(id).populate('items').exec().then((data) => UserConverter.convertUserModelToUserVO(data))
    }
    
    public addUser(userVO: UserVO): Promise<UserVO>{
        return this.userDAO.create(UserConverter.convertUserVOToUserModel(userVO)).then((data) => UserConverter.convertUserModelToUserVO(data));
    }
    
    public updateUser(id: Number, userVO: UserVO): Promise<UserVO>{
        return this.userDAO.findOneAndUpdate({_id: id}, UserConverter.convertUserVOToUserModel(userVO)).populate('items').exec().then((data) => UserConverter.convertUserModelToUserVO(data));
    }
    
    public deleteUserById(id: Number): Promise<void>{
        return this.userDAO.deleteOne({_id: id}).exec();
    }
    
    public resetUserList(): Promise<Array<UserVO>>{
        return this.userDAO.deleteMany({}).exec()
            .then((data: void) => this.userDAO.insertMany(UserConverter.convertUserVOListToUserModelList(this.getDefaultUserList()))
                .then((data: Array<IUserModel>) => UserConverter.convertUserModelListToUserVOList(data))
            );
    }

    public getDefaultUserList(): Array<UserVO>{
        var userList: Array<UserVO> = new Array<UserVO>();
        var user1 = new UserVO();
        user1.setFirstName("toto");
        user1.setLastName("dupond");
        user1.setAge(30);
        userList.push(user1);
        var user2 = new UserVO();
        user2.setFirstName("titi");
        user2.setLastName("dupond");
        user2.setAge(30);
        userList.push(user2);
        var user3 = new UserVO();
        user3.setFirstName("toti");
        user3.setLastName("dupond");
        user3.setAge(15);
        userList.push(user3);
        return userList;
    }
    

} 