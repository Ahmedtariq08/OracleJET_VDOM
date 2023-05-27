export default class Specification {

    private specificationId: string;
    private declarationId: string;
    private affectedObjectId: string;
    private specificationName: string;
    private complianceStatus: string;
    private addedDate: string;
    private releasedDate: string;
    private lastModifiedDate: string;
    private complyByDate: string;
    private effectiveFrom: string;
    private effectiveTill: string;
    private calculatedCompliance: string;
    private declaredCompliance: string;
    private exemptions: string[];

    constructor(
        specificationId_: string,
        declarationId_: string,
        affectedObjectId_: string,
        specificationName_: string,
        complianceStatus_: string,
        addedDate_: string,
        releasedDate_: string,
        lastModifiedDate_: string,
        complyByDate_: string,
        effectiveFrom_: string,
        effectiveTill_: string,
        calculatedCompliance_: string,
        declaredCompliance_: string,
        exemptions_: string[]
    ) {

        this.specificationId = specificationId_;
        this.declarationId = declarationId_;
        this.affectedObjectId = affectedObjectId_;
        this.specificationName = specificationName_;
        this.complianceStatus = complianceStatus_;
        this.addedDate = addedDate_;
        this.releasedDate = releasedDate_;
        this.lastModifiedDate = lastModifiedDate_;
        this.complyByDate = complyByDate_;
        this.effectiveFrom = effectiveFrom_;
        this.effectiveTill = effectiveTill_;
        this.calculatedCompliance = calculatedCompliance_;
        this.declaredCompliance = declaredCompliance_;
        this.exemptions = exemptions_;
    }
}