import { TypeVO } from "./typeVO";
import { AbstractVO } from "./abstractVO";

export class ItemVO extends AbstractVO {
    private name: String;
    private description: String;
    private price: Number;
    private typeVO: TypeVO;

    constructor(id?: Number){
        super(id);
    }

    public getName(): String{
        return this.name;
    }

    public setName(name: String): void{
        this.name = name;
    }

    public getDescription(): String{
        return this.description;
    }

    public setDescription(description: String): void{
        this.description = description;
    }

    public getPrice(): Number{
        return this.price;
    }

    public setPrice(price: Number): void{
        this.price = price;
    }

    public getTypeVO(): TypeVO{
        return this.typeVO;
    }

    public setTypeVO(typeVO: TypeVO): void{
        this.typeVO = typeVO;
    }
}