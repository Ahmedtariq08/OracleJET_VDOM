import * as ko from 'knockout';
export type AffectedObjectCategory = "Item" | "MPN" | "Part Group" | "Specification" | "Child Specification";

export class HomogeneousDeclaration {

	private id: string;
	private status: string;
	private filled: string;
	private parent: string;
	private errorMsg: string;
	private partGroup: string;
	private errorIcon: boolean;
	private itemNumber: number;
	private declarationId: number;
	private errorSeverity: string;
	private specification: string;
	private specificationId: number;
	private displayMpnField: boolean;
	private manufacturerName: string;
	private manufacturerNumber: string;
	private declaredCompliance: string;
	private calculatedCompliance: string;
	private manufacturerPartNumber: string;
	private category: AffectedObjectCategory;
	private children: ko.ObservableArray<HomogeneousDeclaration>;
	private validationType: string;
	
	constructor(
        id: string,
        status: string,
        filled: string,
        parent: string,
        errorMsg: string,
        errorIcon: boolean,
        partGroup: string,
        itemNumber: number,
        declarationId: number,
        errorSeverity: string,
        specification: string,
        specificationId: number,
		displayMpnField: boolean,
        manufacturerName: string,
        manufacturerNumber: string,
        declaredCompliance: string,
        calculatedCompliance: string,
        manufacturerPartNumber: string,
		category: AffectedObjectCategory,
		children: ko.ObservableArray<HomogeneousDeclaration>,
		validationType: string
    ) {

        this.id = id;
        this.status = status;
        this.filled = filled;
        this.parent = parent;
        this.category = category;
        this.children = children;
        this.errorMsg = errorMsg;
        this.errorIcon = errorIcon;
        this.partGroup = partGroup;
        this.itemNumber = itemNumber;
        this.declarationId = declarationId;
        this.errorSeverity = errorSeverity;
        this.specification = specification;
		this.displayMpnField = displayMpnField;
        this.specificationId = specificationId;
        this.manufacturerName = manufacturerName;
        this.manufacturerNumber = manufacturerNumber;
        this.manufacturerPartNumber = manufacturerPartNumber;
        this.declaredCompliance = declaredCompliance;
        this.calculatedCompliance = calculatedCompliance;
        this.validationType = validationType;
    }

	public getId = (): string => {
		return this.id;
	}
	public setId = (value: string) => {
        this.id = value;
    }
	public getStatus = (): string => {
		return this.status;
	}
	public setStatus = (value: string) => {
        this.status = value;
    }
	public getFilled = (): string => {
		return this.filled;
	}
	public setFilled = (value: string) => {
        this.filled = value;
    }
	public getParent = (): string => {
		return this.parent;
	}
	public setParent = (value: string) => {
        this.parent = value;
    }
	public getErrorMsg = (): string => {
		return this.errorMsg;
	}
	public setErrorMsg = (value: string) => {
        this.errorMsg = value;
    }
	public getErrorIcon = (): boolean => {
		return this.errorIcon;
	}
	public setErrorIcon = (value: boolean) => {
        this.errorIcon = value;
    }
	public getPartGroup = (): string => {
		return this.partGroup;
	}
	public setPartGroup = (value: string) => {
        this.partGroup = value;
    }
	public getItemNumber = (): number => {
		return this.itemNumber;
	}
	public setItemNumber = (value: number) => {
        this.itemNumber = value;
    }
	public getDeclarationId = (): number => {
		return this.declarationId;
	}
	public setDeclarationId = (value: number) => {
        this.declarationId = value;
    }
	public getErrorSeverity = (): string => {
		return this.errorSeverity;
	}
	public setErrorSeverity = (value: string) => {
        this.errorSeverity = value;
    }
	public getSpecification = (): string => {
		return this.specification;
	}
	public setSpecification = (value: string) => {
        this.specification = value;
    }
	public getSpecificationId = (): number => {
		return this.specificationId;
	}
	public setSpecificationId = (value: number) => {
        this.specificationId = value;
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
	public getDisplayMpnField = (): boolean => {
		return this.displayMpnField;
	}
	public setDisplayMpnField = (value: boolean) => {
        this.displayMpnField = value;
    }
	public getDeclaredCompliance = (): string => {
		return this.declaredCompliance;
	}
	public setDeclaredCompliance = (value: string) => {
        this.declaredCompliance = value;
    }
	public getCalculatedCompliance = (): string => {
		return this.calculatedCompliance;
	}
	public setCalculatedCompliance = (value: string) => {
        this.calculatedCompliance = value;
    }
	public getManufacturerPartNumber = (): string => {
		return this.manufacturerPartNumber;
	}
	public setManufacturerPartNumber = (value: string) => {
        this.manufacturerPartNumber = value;
    }
	public getCategory = (): AffectedObjectCategory => {
		return this.category;
	}
	public setCategory = (value: AffectedObjectCategory) => {
        this.category = value;
    }
	public getChildren = (): ko.ObservableArray<HomogeneousDeclaration> => {
		return this.children;
	}
	public setChildren = (value: ko.ObservableArray<HomogeneousDeclaration>) => {
        this.children = value;
    }
    public getValidationType = (): string => {
        return this.validationType;
    }
    public setValidationType = (value: string) => {
        this.validationType = value;
    }
}