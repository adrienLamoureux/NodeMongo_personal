import { AbstractVO } from "./abstractVO";

export class TypeVO extends AbstractVO {
    private name: String;
    private description: String;
    private appId: Number;

    constructor(id?: Number, appId?: Number){
        super(id);
        this.appId = appId;
    }

    public getName(): String{
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public getDescription(): String {
        return this.description;
    }

    public setDescription(description: String): void {
        this.description = description;
    }

    public getAppId(): Number {
        return this.appId;
    }

    public setAppId(appId: Number): void {
        this.appId = appId;
    }
    
}