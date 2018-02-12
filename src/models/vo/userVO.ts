import { AbstractVO } from "./abstractVO";
import { ItemVO } from "./itemVO";

export class UserVO extends AbstractVO {
    private firstName: String;
    private lastName: String;
    private age: Number;
    private itemVOList: Array<ItemVO>;

    constructor(id?: Number){
        super(id);
    }

    public getFirstName(): String{
        return this.firstName;
    }

    public setFirstName(firstName: String): void{
        this.firstName = firstName;
    }

    public getLastName(): String{
        return this.lastName;
    }

    public setLastName(lastName: String): void{
        this.lastName = lastName;
    }

    public getAge(): Number{
        return this.age;
    }

    public setAge(age: Number): void{
        this.age = age;
    }

    public getItemVOList(): Array<ItemVO>{
        return this.itemVOList;
    }

    public setItemVOList(itemVOList: Array<ItemVO>): void{
        this.itemVOList = itemVOList;
    }

}