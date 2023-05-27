// import RestUtil from "../../utils/rest/RestUtil";
// import { Config, APIs } from "../../json/JsonHandler";
// import ExportService from "../../utils/export/ExportService";
// import { Message } from "../../utils/generic/Message";
// import { Response } from "../../utils/generic/Response";
// export default class AffectedObjectService {

//     private RestUtils: RestUtil;
//     private AffectedObjectAPIs: any;

//     constructor() {
//         this.RestUtils = new RestUtil();
//         this.AffectedObjectAPIs = APIs.urls.EGNCMain.AffectedObject;
//     }

//     public getComposition = async (affectedObjectId : number) => {

//         var url = Config.EGNC_backend + this.AffectedObjectAPIs.base + affectedObjectId + this.AffectedObjectAPIs.extensions.composition.base;
//         var response = await this.RestUtils.get(url);
//         return response;
//     }

//     public getAffectedObjectErrors = async (affectedObjectId : number) => {

//         var errorList = [];
// 		var url = Config.EGNC_backend + this.AffectedObjectAPIs.base + affectedObjectId + this.AffectedObjectAPIs.extensions.validationIssues;
//         var response = await this.RestUtils.get(url);
//         response.forEach(error =>  errorList.push(error.name));
//         return errorList;
//     }

//     public copyComposition = async (copyFromId : number, copyToId : number) => {
      
//         var url = Config.EGNC_backend + this.AffectedObjectAPIs.base + copyFromId + this.AffectedObjectAPIs.extensions.composition.base + this.AffectedObjectAPIs.extensions.composition.extensions.copy + "?copyToId=" + copyToId;
//         var response = await this.RestUtils.postWithTextResponse(url);
//         let result = new Response();
//         if (response){
//             let data = JSON.parse(response);
//             result.data = data;
//             result.message = new Message("confirmation", "Composition copied successfully.");
//         } else {
//             result.message = new Message("error", "Copy Composition Failed.");
//         }
//         return result;
//     }

//     public saveComposition = async (affectedObjectId: number, payload: any, isSavingBundle: boolean) => {

//         var url = Config.EGNC_backend;
//         isSavingBundle ? url += APIs.urls.EGNCMain.Declaration.base : url += this.AffectedObjectAPIs.base;
//         url += affectedObjectId + this.AffectedObjectAPIs.extensions.composition.base + this.AffectedObjectAPIs.extensions.composition.extensions.save;
//         var response = await this.RestUtils.post(url, payload);
//         return response;
//     }
    
//     public exportAffectedObject = async (affectedObjectId: number) => {
		
//         var url = Config.EGNC_backend + this.AffectedObjectAPIs.base + affectedObjectId + this.AffectedObjectAPIs.extensions.export;
//         await ExportService.exportFileGet(url, null);
//     }
    
// }