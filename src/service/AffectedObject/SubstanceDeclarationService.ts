// import RestUtil from "../../utils/rest/RestUtil";
// import { Config, APIs } from "../../json/JsonHandler";
// import ExportService from "../../utils/export/ExportService";
// import SubstanceDeclaration from "../../objects/SubstanceDeclaration";

// export default class SubstanceDeclarationService {

//     constructor() { }
//     restUtil = new RestUtil();

//     public getComposition = async (declarationId : number) => {
        
//         var affectedObjectAPIs = APIs.urls.EGNCMain.AffectedObject;
//         var url = Config.EGNC_backend + affectedObjectAPIs.base + declarationId + affectedObjectAPIs.extensions.composition.base;
//         var response = await this.restUtil.get(url);
//         return response;
//     }

//     public setListPayloadForSaveComposition = (row: SubstanceDeclaration, request: any[]) => {
//         var data = {};
//         data['mass'] = row.getMass();
//         data['rowId'] = row.getRowId();
//         data['casNumber'] = row.getCasNumber();
//         data['childLevel'] = row.getChildLevel();
//         data['massMeasure'] = row.getMassMeasure();
//         data['declaredPPM'] = row.getDeclaredPPM();
//         data['thresholdPPM'] = row.getThresholdPPM();
//         data['substanceName'] = row.getSubstanceName();
//         data['substanceType'] = row.getSubstanceType();
//         data['overThreshold'] = row.getOverThreshold();

//         let exemptions = row.getAppliedExemption();
//         if (exemptions?.length > 0)
//             data['exemptions'] = exemptions.join(";");

//         request.push(data);
//         return request;
//     }
    
//     public saveComposition = async (substanceDeclarationList: Array<SubstanceDeclaration>, affectedObject: any, EXEMPT: string) => {

//         let request: any[] = [];
//         substanceDeclarationList.forEach(row => {
//             request = this.setListPayloadForSaveComposition(row, request);
//             row.getChildren()?.()?.forEach(child => {
//                 request = this.setListPayloadForSaveComposition(child, request);
//             });
//         });

//         var obj = {};
//         obj['list'] = request;
//         obj['fmdMass'] = affectedObject.mass;
//         obj['unit'] = affectedObject.massMeasure;
//         obj['attribute1'] = affectedObject.attribute1;
//         obj['attribute2'] = affectedObject.attribute2;
//         obj['attribute3'] = affectedObject.attribute3;
//         obj['attribute4'] = affectedObject.attribute4;
//         obj['attribute5'] = affectedObject.attribute5;
//         obj['specificationId'] = affectedObject.specificationId;

//         var declaredCompliance = affectedObject.declaredCompliance;
//         if (declaredCompliance) {
//             if (declaredCompliance == EXEMPT) {
//                 obj['exemptions'] = affectedObject.exemptionIds.join(";");
//             }
//             else {
//                 obj['declaredCompliance'] = declaredCompliance;
//             }
//         }

//         var affectedObjectAPIs = APIs.urls.EGNCMain.AffectedObject;
//         var url = Config.EGNC_backend + affectedObjectAPIs.base + affectedObject.declarationId + affectedObjectAPIs.extensions.composition.base + affectedObjectAPIs.extensions.composition.extensions.save;
        
//         var response = await this.restUtil.post(url, obj);
//         return response;

//     }

//     public downloadTemplate = async function(affectedObjectId: number, templateId : number, templateName : string) {

//         var affectedObjectAPIs = APIs.urls.EGNCMain.AffectedObject;
//         var url = Config.EGNC_backend + affectedObjectAPIs.base + affectedObjectId + affectedObjectAPIs.extensions.template + '/' + templateId;
//         var response = await ExportService.exportFileGet(url, null, templateName.replace(/(?:\.([^.]+))?$/.exec(templateName)[0], ''), "application/zip");

//         return response;
//     }
// }