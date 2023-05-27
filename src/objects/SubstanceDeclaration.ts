export default class SubstanceDeclaration {

    private icon: string;
    private mass: string;
    private rowId: number;
    private unknown: boolean;
	private casNumber: string;
	private resultMass: number;
    private exemptions: object;
	private childLevel: number;
    private massMeasure: string;
    private declaredPPM: string;
    private thresholdPPM: string;
    private substanceName: string;
    private overThreshold: string;
    private substanceType: string;
    private errorSeverity: string;
	private calculatedPPM: number;
	private calculatedMass: number;
	private conversionFactor: number;
    private appliedExemption: number[];
    private declaredCompliance: number;
    private calculatedCompliance: number;
	private parent: SubstanceDeclaration;
	private children: ko.ObservableArray<SubstanceDeclaration>;

	public getIcon() {
		return this.icon;
	}

	public setIcon(icon: string) {
		this.icon = icon;
	}

	public getCasNumber() {
		return this.casNumber;
	}

	public setCasNumber(casNumber: string) {
		this.casNumber = casNumber;
	}

	public getMass() {
		return this.mass;
	}

	public setMass(mass: string) {
		this.mass = mass;
	}

	public getResultMass() {
		return this.resultMass;
	}

	public setResultMass(resultMass: number) {
		this.resultMass = resultMass;
	}

	public getRowId() {
		return this.rowId;
	}

	public setRowId(rowId: number) {
		this.rowId = rowId;
	}

	public getUnknown() {
		return this.unknown;
	}

	public setUnknown(unknown: boolean) {
		this.unknown = unknown;
	}

	public getChildLevel() {
		return this.childLevel;
	}

	public setChildLevel(childLevel: number) {
		this.childLevel = this.childLevel;
	}

	public getExemptions() {
		return this.exemptions;
	}

	public setExemptions(exemptions: object) {
		this.exemptions = exemptions;
	}

	public getMassMeasure() {
		return this.massMeasure;
	}

	public setMassMeasure(massMeasure: string) {
		this.massMeasure = massMeasure;
	}

	public getDeclaredPPM() {
		return this.declaredPPM;
	}

	public setDeclaredPPM(declaredPPM: string) {
		this.declaredPPM = declaredPPM;
	}

	public getThresholdPPM() {
		return this.thresholdPPM;
	}

	public setThresholdPPM(thresholdPPM: string) {
		this.thresholdPPM = thresholdPPM;
	}

	public getCalculatedMass() {
		return this.calculatedMass;
	}

	public setCalculatedMass(calculatedMass: number) {
		this.calculatedMass = calculatedMass;
	}

	public getCalculatedPPM() {
		return this.calculatedPPM;
	}

	public setCalculatedPPM(calculatedPPM: number) {
		this.calculatedPPM = calculatedPPM;
	}

	public getConversionFactor() {
		return this.conversionFactor;
	}

	public setConversionFactor(conversionFactor: number) {
		this.conversionFactor = conversionFactor;
	}

	public getSubstanceName() {
		return this.substanceName;
	}

	public setSubstanceName(substanceName: string) {
		this.substanceName = substanceName;
	}

	public getOverThreshold() {
		return this.overThreshold;
	}

	public setOverThreshold(overThreshold: string) {
		this.overThreshold = overThreshold;
	}

	public getSubstanceType() {
		return this.substanceType;
	}

	public setSubstanceType(substanceType: string) {
		this.substanceType = substanceType;
	}

	public getErrorSeverity() {
		return this.errorSeverity;
	}

	public setErrorSeverity(errorSeverity: string) {
		this.errorSeverity = errorSeverity;
	}

	public getAppliedExemption() {
		return this.appliedExemption;
	}

	public setAppliedExemption(appliedExemption: number[]) {
		this.appliedExemption = appliedExemption;
	}

	public getDeclaredCompliance() {
		return this.declaredCompliance;
	}

	public setDeclaredCompliance(declaredCompliance: number) {
		this.declaredCompliance = declaredCompliance;
	}

	public getCalculatedCompliance() {
		return this.calculatedCompliance;
	}

	public setCalculatedCompliance(calculatedCompliance: number) {
		this.calculatedCompliance = calculatedCompliance;
	}

	public getParent() {
		return this.parent;
	}

	public setParent(parent: SubstanceDeclaration) {
		this.parent = parent;
	}

	public getChildren = (): ko.ObservableArray<SubstanceDeclaration> => {
		return this.children;
	}

	public setChildren = (value: ko.ObservableArray<SubstanceDeclaration>) => {
        this.children = value;
    }


    constructor(
        icon_: string,
        mass_: string,
        rowId_: number,
		unknown_: boolean,
        exemptions_: object,
		resultMass_: number,
        childLevel_: number,
        massMeasure_: string,
        declaredPPM_: string,
        thresholdPPM_: string,
        substanceName_: string,
        overThreshold_: string,
        substanceType_: string,
        errorSeverity_: string,
        appliedExemption_: number[],
        declaredCompliance_: number,
        calculatedCompliance_: number,
		casNumber_: string,
		conversionFactor_: number,
		calculatedPPM_: number,
		calculatedMass_: number,
		parent_: SubstanceDeclaration,
		children: ko.ObservableArray<SubstanceDeclaration>
	) {

        this.icon = icon_;
        this.mass = mass_;
        this.rowId = rowId_;
		this.parent = parent_;
		this.unknown = unknown_;
        this.children = children;
		this.casNumber = casNumber_;
		this.childLevel = childLevel_;
		this.resultMass = resultMass_;
        this.exemptions = exemptions_;
        this.massMeasure = massMeasure_;
        this.declaredPPM = declaredPPM_;
        this.thresholdPPM = thresholdPPM_;
        this.overThreshold = overThreshold_;
        this.substanceName = substanceName_;
        this.substanceType = substanceType_;
        this.errorSeverity = errorSeverity_;
		this.calculatedPPM = calculatedPPM_;
		this.calculatedMass = calculatedMass_;
        this.appliedExemption = appliedExemption_;
		this.conversionFactor = conversionFactor_;
        this.declaredCompliance = declaredCompliance_;
        this.calculatedCompliance = calculatedCompliance_;
    }
}