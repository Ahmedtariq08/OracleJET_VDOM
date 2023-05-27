export class Smelter {

	public smelterId: string;
	public metal: string;
	public metalId?: number | null;
	public smelterName: string;
	public lookups: string[];
	public favourite?: boolean;
	public country: string;
	public source: string;
	public city: string;
	public street: string;
	public state: string | null;
	public status: string | null;
	public statusId?: number | null; 
	
	constructor(
		smelterId: string,
		metal: string,
		smelterName: string,
		lookups: string[],
		country: string,
		source: string,
		city: string,
		street: string,
		state?: string,
		status?: string,
		metalId?: number,
		statusId?: number,
		favourite?: boolean
    ) {

		this.smelterId = smelterId;
        this.metal = metal;
        this.smelterName = smelterName;
		this.lookups = lookups;
        this.country = country;
        this.source = source;
        this.city = city;
        this.street = street;
        this.state = state;
        this.status = status;
		this.metalId = metalId;
		this.statusId = statusId;
		this.favourite = favourite
    }
}