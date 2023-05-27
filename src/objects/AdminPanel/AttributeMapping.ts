export const SELECT_TYPE_LIST = ["TEXT", "LIST", "NUMBER"]
export class Attribute {
    public name: string;
    public wfid: number[];
    public type: string 
    public readonly: boolean;
    public required: boolean;
    public possibleValues: string[];

    constructor () { this.name = ""; this.wfid = []; this.type = ""; this.readonly = undefined; 
        this.required = undefined; this.possibleValues = [] }
}
export class MappedAttribute extends Attribute {
    public attributeName: string;

    constructor () {
        super();
        this.attributeName = ""
    }
}

export class AttributeObject {
    public attribute1: Attribute
    public attribute2: Attribute
    public attribute3: Attribute
    public attribute4: Attribute
    public attribute5: Attribute
    public attribute6?: Attribute   //additional attributes that won't show
    public attribute7?: Attribute
    public attribute8?: Attribute
    public attribute9?: Attribute
    public attribute10?: Attribute

    constructor(jsonObject: Object) {
        for (let i = 1; i <= 10; i++) {
          const attributeName = `attribute${i}`;
          this[attributeName] = jsonObject[attributeName] ? jsonObject[attributeName] : new Attribute();
        }
    }
}
