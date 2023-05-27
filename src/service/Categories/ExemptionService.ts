// import RestUtil from "../../utils/rest/RestUtil";
// import { Config, APIs } from "../../json/JsonHandler";
// import { Message } from "../../utils/generic/Message";
// import { Response } from "../../utils/generic/Response";
// import { DateTimeUtil } from "../../utils/generic/DateTimeUtil";
// import { Exemption } from "../../objects/Exemption";

// export default class ExemptionService {

//   private RestUtils: RestUtil;
//   private DateTimeUtils: DateTimeUtil;
//   private exemptionAPIs = APIs.urls.EGNCMain.Exemption;

//   constructor() { 
//     this.RestUtils = new RestUtil();
//     this.DateTimeUtils = new DateTimeUtil();
//   }

//   public createExemption = async (data) => {
//     let url = Config.EGNC_backend + this.exemptionAPIs.base;
//     if(data && data.expirationDate)
//     data.expirationDate = this.DateTimeUtils.dateFormatterForRequest(data.expirationDate);
//     let result = new Response();
//     try {
//       let response = await this.RestUtils.post(url, data);
//       if (response == "-1") {
//           result.message = new Message("error", `Exemption creation Failed.`, `This Exemption already exists.`)
//       } else if (response != "false"){
//           result.message = new Message("confirmation", `Exemption created successfully.`);
//           result.data = response;
//       } else {
//           result.message = new Message("error", `Exemption creation Failed.`);
//       }
//     } catch (error) {
//         result.message = new Message("error", Response.Server_Error);
//     }
//     return result;
//   }

//   public deleteExemption = async (deleteKey, userId) => {
//     let url = Config.EGNC_backend + this.exemptionAPIs.base + deleteKey + "?userId=" + userId;
//     let result = new Response();
//     try {
//       let response = await this.RestUtils.deleteWithTextResponse(url);
//       if (response == 'Exemption deleted') {
//           result.message = new Message("confirmation", "Exemption deleted successfully.");
//           result.data = response;
//       } else {
//           result.message = new Message("error", "Exemption deletion Failed.");
//       }
//     } catch (error) {
//         result.message = new Message("error", Response.Server_Error);
//     }
//     return result;
//   }

//   public getExemptionsForSelectAndAdd = async (exemptionName: string) => {
   
//     var url = Config.EGNC_backend + this.exemptionAPIs.base + "?exemptionName=" + exemptionName;    
//     return (await this.RestUtils.get(url));
//   };

//   public loadExemptionData = async (exemptionId) => {
//     let url = Config.EGNC_backend + this.exemptionAPIs.base + this.exemptionAPIs.extensions.search;
//     let data = {page: 0, size: 1, id: encodeURIComponent(parseInt(exemptionId))};
//     let result = new Response();
//     let response = await this.RestUtils.post(url, data);
//     if (response.result) {
//       let exemption: Exemption = response.result[0];
//       result.data = exemption as Exemption;
//     }
//     return result;
//   }

//   public saveWholeExemption = async (exemption: Exemption) => {
//     let url = Config.EGNC_backend + this.exemptionAPIs.base + encodeURIComponent(exemption.id);
//     let body: Exemption = {...exemption};
//     body.expirationDate = this.DateTimeUtils.dateFormatterForRequest(body.expirationDate);
//     let result = new Response();
//     let response = await this.RestUtils.putWithTextResponse(url, body);
//     if (response = "Exemption update  success") {
//       result.message = new Message("confirmation", "Exemption updated successfully.");
//       result.data = exemption;
//     } else {
//       result.message = new Message("error", "Could not update Exemption.");
//     }
//     return result;
//   }
// }
