type SubstanceType = "Substance" | "SubstanceGroup";
export type Entity = "item" | "manufacturer" | "part group" | "specification";

export class Substance {
    private substanceId: string;
    private substanceName: string;
    private substanceDes: string;
    private casNumber: string;
    private substanceType: SubstanceType;
    private conversionFactor?: number;
    
    constructor(jsonObject: Object) {
        for (let prop in jsonObject) {
            this[prop] = jsonObject[prop];
        }
    }

    public getSubstanceId = ():string => {
        return this.substanceId;
    }
    public setSubstanceId = (value: string) => {
        this.substanceId = value;
    }
    public getSubstanceName = ():string =>  {
        return this.substanceName;
    }
    public setSubstanceName = (value: string) => {
        this.substanceName = value;
    }
    public getSubstanceDes = ():string =>  {
        return this.substanceDes;
    }
    public setSubstanceDes = (value: string) => {
        this.substanceDes = value;
    }
    public getCasNumber = ():string =>  {
        return this.casNumber;
    }
    public setCasNumber = (value: string) => {
        this.casNumber = value;
    }
    public getSubstanceType = ():SubstanceType =>  {
        return this.substanceType;
    }
    public setSubstanceType = (value: SubstanceType) =>{
        this.substanceType = value;
    }
    public getConversionFactor = ():number =>   {
        return this.conversionFactor;
    }
    public setConversionFactor = (value: number) => {
        this.conversionFactor = value;
    }
}

export class SubstanceBatchRequest {
    private substanceId: string;
    private conversionFactor: number;
    
    constructor(substanceId: string, conversionFactor: number){
        this.substanceId = substanceId;
        this.conversionFactor = conversionFactor
    }

    public getSubstanceId = ():string =>  {
        return this.substanceId;
    }
    public setSubstanceId = (value: string) => {
        this.substanceId = value;
    }
    public getConversionFactor = ():number =>  {
        return this.conversionFactor;
    }
    public setConversionFactor = (value: number) =>  {
        this.conversionFactor = value;
    }

}