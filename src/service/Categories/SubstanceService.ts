// import  RestUtil  from "../../utils/rest/RestUtil";
// import { APIs, Config } from "../../json/JsonHandler";
// import { Message } from "../../utils/generic/Message";
// import { Response } from "../../utils/generic/Response";
// import { DateTimeUtil } from "../../utils/generic/DateTimeUtil";
// import { Substance, SubstanceBatchRequest, Entity } from "../../objects/Substance";

//  /**
//    * @Returns Response Object { 
//    *    data: [data object in case of success],
//    *    error: [error object in case of error],
//    *    message: [message object to be shown in message array]
//    * }.
//    *
//    * @Note
//    * Appends Internal Server Error in case of any exception caught
//    */
// export default class SubstanceService {

//     private SubstanceUrl;
//     private RestUtils: RestUtil;
//     private DateTimeUtils: DateTimeUtil;

//     constructor() {
//         this.RestUtils = new RestUtil();
//         this.DateTimeUtils = new DateTimeUtil();
//         this.SubstanceUrl = APIs.urls.EGNCMain.Substance;
//     }

//     public createSubstance =  async (data) => {
//         let url = Config.EGNC_backend + this.SubstanceUrl.base;
//         let result = new Response();
//         let substanceType = data.substanceType;
//         substanceType == "Substance Group" && (data['casNumber'] = '');
//         try {
//             let response = await this.RestUtils.post(url, data);
//             if (response == "-1") {
//                 result.message = new Message("error", `${substanceType} creation Failed.`, `This ${substanceType} already exists.`)
//             } else if (response != "false"){
//                 result.message = new Message("confirmation", `${substanceType} created successfully.`);
//                 result.data = response;
//             } else {
//                 result.message = new Message("error", `${substanceType} creation Failed.`);
//             }
//         } catch (error) {
//             result.message = new Message("error", Response.Server_Error);
//         }
//         return result;
//     } 

//     public getDescription = async (substanceId: string) => {
//         var url = Config.EGNC_backend + this.SubstanceUrl.base + substanceId;
//         var response = new Response();
//         try {
//             var data = await this.RestUtils.get(url);
//             if (!data.error) {
//                 response.data = new Substance(data);
//             } else {
//                 response.error = data;
//                 response.message = new Message("error", data.error);
//             } 
//         } catch (error) {
//             response.error = data;
//             response.message = new Message("error", Response.Server_Error);
//         }
//         return response;
//     }

//     public getSubstances = async (substanceId: string) => {
//         var url = Config.EGNC_backend + this.SubstanceUrl.base + substanceId + this.SubstanceUrl.extensions.substances;
//         var response = await this._getSubstancesCall(url);
//         return response;
//     }



//   public getSubstancesOfSubstanceGroup = async (subGroupName: string, substanceName: string, casNumber: string) => {    
//         var url = Config.EGNC_backend + this.SubstanceUrl.base + this.SubstanceUrl.extensions.selectAndAddForGroup + "?substanceGroupName=" + subGroupName;
//         url += "&substanceName=" + (substanceName ? substanceName : "");
//         url += "&casNumber=" + (casNumber ? casNumber : "");
//         var response = await this._getSubstancesCall(url);
//         return response;
//     };

//     public getExportSubstancesApi = (substanceId: string) => {
//         var url = Config.EGNC_backend + this.SubstanceUrl.base + substanceId + this.SubstanceUrl.extensions.substances + "?format=csv";
//         return { url: url, method: "GET"};
//     }

//     public advanceSearch = async (body) => {
//         var response = new Response();
//         var url = Config.EGNC_backend + this.SubstanceUrl.base + this.SubstanceUrl.extensions.search;
//         var data = (await this.RestUtils.post(url, body)).result;
//         if (!data.error) {
//             response.data = data;
//         } else {
//             response.error = data;
//             response.message = new Message("error", Response.Server_Error);
//         }
//         return response;
//     }
    
//     public getSubstancesForSelectAndAddForSpec = async (substanceName: string) => {        
//         var url = Config.EGNC_backend + this.SubstanceUrl.base + this.SubstanceUrl.extensions.selectAndAddForSpec + "?substanceName=" + substanceName;
//         var response = await this._getSubstancesCall(url);
//         return response;
//     }

//     public getSubstanceWhereUsed = async (entity: Entity, page: number, size: number, substance: Substance) => {
//         var body = {
//             entity: entity,
//             page: page,
//             size: size,
//             substanceName: substance.getSubstanceName(),
//             substanceType: substance.getSubstanceType()
//         }
//          // TODO: remove it if not needed //// we need substanceID in payload only in the case of specification
//          if (entity === "specification") {
//             body['substanceId'] = substance.getSubstanceId();
//         }
//         var url = Config.EGNC_backend + this.SubstanceUrl.base + this.SubstanceUrl.extensions.whereuse;
//         var response = new Response();
//         try {
//             var data =  await this.RestUtils.post(url, body);
//             if (!data.error) {
//                 data.forEach(row => {
//                     row.comply_by_date = row.comply_by_date ? this.DateTimeUtils.dateTimeToDate(row.comply_by_date) : null;
//                     row.effective_from = row.effective_from ? this.DateTimeUtils.dateTimeToDate(row.effective_from) : null;
//                     row.effective_till = row.effective_till ? this.DateTimeUtils.dateTimeToDate(row.effective_till) : null;                        
//                 });
//                 response.data = data;
//             } else {
//                 response.error = data;
//             }
//         } catch (error) {
//             response.error = data;
//         }
//         return response;
//     }

//     public overrideSubstanceGroup = async (substance: Substance, substances: Substance[]) => {
//         var url =  Config.EGNC_backend + this.SubstanceUrl.base + this.SubstanceUrl.extensions.override;
//         var response = new Response();
//         try {
//             var substanceBatches: SubstanceBatchRequest[] = [];
//             substances.forEach(substance => {
//                 let substanceToAdd: Substance = (substance instanceof Substance) ? substance : new Substance(substance); 
//                 substanceBatches.push(new SubstanceBatchRequest(substanceToAdd.getSubstanceId(), substanceToAdd.getConversionFactor()))});
//             var data = await this.RestUtils.post(url, {substanceGroup: substance, substances: substanceBatches});
//             if (!data.error) {
//                 response.data = data;
//                 response.message = new Message("confirmation", "Substance Group Updated successfully.");
//             } else {
//                 response.error = data;
//                 response.message = new Message("error", "Substance Group Updation Failed.");
//             }
//         } catch (error) {
//             response.error = data;
//             response.message = new Message("error", Response.Server_Error);
//         }
//         return response;
//     }

//     public updateSubstanceGroupDesc = async (substanceGroupId: string, substance: Substance) => {
//         var url = Config.EGNC_backend + this.SubstanceUrl.base + substanceGroupId;
//         var response: string = await this.RestUtils.putWithTextResponse(url, substance);
//         return response;
//     }

//     public updateSubstanceDesc = async (substanceId: string, substance: Substance) => {
//         let result = new Response();
//         let response = await this.updateSubstanceGroupDesc(substanceId, substance);
//         if (response == "true"){
//             result.message = new Message("confirmation", "Substance Updated successfully.");
//         } else {
//             result.message = new Message("error", "Substance Updation failed.");
//         }
//         return result;
//     }

//     private _parseSubstances = (response: Object[]) => {
//         var substances: Substance[] = [];
//         response.forEach(element => {substances.push(new Substance(element))});
//         return substances;
//     }

//     private _getSubstancesCall = async (url: string) => {
//         var response = new Response();
//         try {
//             var data = await this.RestUtils.get(url);
//             if (!data.error) {
//                 response.data = this._parseSubstances(data);
//             } else {
//                 response.error = data;
//                 response.message = new Message("error", data.error);
//             } 
//         } catch (error) {
//             response.error = data;
//             response.message = new Message("error", Response.Server_Error);
//         }
//         return response;
//     }
// }