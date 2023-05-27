export class CMRTDeclaration {

	private id: string;
	private declarationId: number;
	private manufacturerName: string;
	private manufacturerNumber: string;
	private manufacturerPartNumber: string;
	private partGroupName:string;
	private declarationScope:string
	private category:string;

	
	constructor(
		id: string,
        declarationId: number,
        manufacturerName: string,
        manufacturerNumber: string,
        manufacturerPartNumber: string,
		partGroupName:string,
		declarationScope:string,
		category:string
    ) {
		this.id  = id;
        this.declarationId = declarationId;
        this.manufacturerName = manufacturerName;
        this.manufacturerNumber = manufacturerNumber;
        this.manufacturerPartNumber = manufacturerPartNumber;
		this.partGroupName=partGroupName;
		this.declarationScope=declarationScope;
		this.category=category;
    }

	public getId = (): string => {
		return this.id;
	}
	public setId = (value: string) => {
        this.id = value;
    }
	public getDeclarationId = (): number => {
		return this.declarationId;
	}
	public setDeclarationId = (value: number) => {
        this.declarationId = value;
    }
	public getManufacturerName = (): string => {
		return this.manufacturerName;
	}
	public setManufacturerName = (value: string) => {
        this.manufacturerName = value;
    }
	public getManufacturerNumber = (): string => {
		return this.manufacturerNumber;
	}
	public setManufacturerNumber = (value: string) => {
        this.manufacturerNumber = value;
    }
	public getManufacturerPartNumber = (): string => {
		return this.manufacturerPartNumber;
	}
	public setManufacturerPartNumber = (value: string) => {
        this.manufacturerPartNumber = value;
    }
	public getPartGroupName = (): string => {
		return this.partGroupName;
	}
	public setPartGroupName=(value:string)=>{
		this.partGroupName = value;
	}
	public getDeclarationScope=():string=>{
		return this.declarationScope;
	}
	public setDeclarationScope=(value:string)=>{
		this.declarationScope=value;
	}
	public getCategory=():string=>{
		return this.category;
	}
	public setCategory=(value:string)=>{
		this.category=value;
	}
}