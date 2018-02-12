export class AbstractVO {
    private id: Number;

    constructor(id?: Number) {
        id ? this.id = id: this.id = null;
    }

    public getId(): Number {
        return this.id;
    }

    public setId(id: Number): void {
        this.id = id;
    }
}