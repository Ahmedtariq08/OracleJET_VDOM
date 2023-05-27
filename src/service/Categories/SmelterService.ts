// import RestUtil from "../../utils/rest/RestUtil";
// import { Smelter } from "../../objects/Smelter";
// import { Message } from "../../utils/generic/Message";
// import { Config, APIs } from "../../json/JsonHandler";
// import { Response } from "../../utils/generic/Response";

// export default class SmelterService {

//   constructor() { }
//   restUtil = new RestUtil();

//   public createSmelter = async (data) => {
   
//     let result = new Response();
//     var smelterAPIs = APIs.urls.EGNCMain.Smelter;
//     var url = Config.EGNC_backend + smelterAPIs.base;
//     try {
//       let response = await this.restUtil.post(url, data);
//       if (response == "-1") {
//           result.message = new Message("error", `Smelter creation Failed.`, `This Smelter already exists.`)
//       } else if (response != "false"){
//           result.message = new Message("confirmation", `Smelter created successfully.`);
//           result.data = response;
//       } else {
//           result.message = new Message("error", `Smelter creation Failed.`);
//       }
//     } catch (error) {
//         result.message = new Message("error", Response.Server_Error);
//     }
//     return result;
//   };

//   public getMetals = async () => {    
//     var metalArray = [];
//     var smelterAPIs = APIs.urls.EGNCMain.Smelter;
//     var url = Config.EGNC_backend + smelterAPIs.base + smelterAPIs.extensions.metal;
    
//     var metals = await this.restUtil.get(url);
//     metals.forEach(res => metalArray.push({ label: res.metal, value: res.id }));
//     return metalArray;
//   };

//   public getSmelterById = async (smelterId : string) => {    
//     var smelterAPIs = APIs.urls.EGNCMain.Smelter;
//     var url = Config.EGNC_backend + smelterAPIs.base + smelterId;
//     let response: Smelter = await this.restUtil.get(url);
//     return response;
//   };

//   public getSmelterLookup = async () => {    
//     var lookups =[];
//     var smelterAPIs = APIs.urls.EGNCMain.Smelter;
//     var url = Config.EGNC_backend + smelterAPIs.base + smelterAPIs.extensions.lookups;
//     const response = await this.restUtil.get(url);
//     response.forEach(lookup => lookups.push({ label: lookup, value: lookup }));
//     return lookups;
//   };

//   public getLookupsOfMetal = async (metalId?: string) => {    
//     var smelterAPIs = APIs.urls.EGNCMain.Smelter;
//     var url = Config.EGNC_backend + smelterAPIs.base + smelterAPIs.extensions.lookups;
//     metalId && (url += '?metalId=' + metalId);
//     return await this.restUtil.get(url);
//   };

//   public getSmelterStatuses = async () => {    
//     var statuses = [];
//     var smelterAPIs = APIs.urls.EGNCMain.Smelter;
//     var url = Config.EGNC_backend + smelterAPIs.base + smelterAPIs.extensions.status;
    
//     var response = await this.restUtil.get(url);
//     response.forEach(status => statuses.push({ label: status.status, value: status.id }));
//     return statuses;
//   };

//   public advanceSearch = async (page: number, size: number, smelterId: number, smelterName: string, metal: number[], lookup: [string, string]) => {
//     var body = new Object();
//     body['page'] = page;
//     body['size'] = size;
//     metal && (body['metal'] = metal);
//     lookup && (body['smelterLookup'] = lookup);
//     smelterId && (body['smelterId'] = smelterId);
//     smelterName && (body['smelterName'] = smelterName);
    
//     var smelterAPIs = APIs.urls.EGNCMain.Smelter;
//     var url = Config.EGNC_backend + smelterAPIs.base + smelterAPIs.extensions.search;
//     return (await this.restUtil.post(url, body)).result;
//   };

//   public updateSmelter = async (smelter: Smelter) => {
//     let result = new Response();
//     var smelterAPIs = APIs.urls.EGNCMain.Smelter;
//     var url = Config.EGNC_backend + smelterAPIs.base;
//     let response = await this.restUtil.put(url, smelter);
//     if (!response.error){
//       result.data = response;
//       result.message = new Message("confirmation", "Smelter updated successfully.")
//     } else {
//       result.error = response;
//       result.message = new Message("error", "Unable to update Smelter");
//     }
//     return result;
//   }

//   public getSmelterWhereUsed = async (data: Object) => {
//     let result = new Response();
//     let parsedEGNCUrl = APIs.urls.EGNCMain;
//     var whereUsedUrl = Config.EGNC_backend + parsedEGNCUrl.Smelter.base + parsedEGNCUrl.Smelter.extensions.whereuse;
//     var response = await this.restUtil.post(whereUsedUrl, data);
//     if (!response.error){
//       result.data = response;
//     } else {
//       result.error = response;
//       result.message = new Message("error", "Unable to fetch where used for affected object.")
//     }
//     return result;
//   }

//   public getSmelterWhereUsedFromEntity = async (smelterId: string, entity: string) => {
//     let result = new Response();
//     let parsedEGNCUrl = APIs.urls.EGNCMain;
//     let data = {page: 0, size: -1, smelterID: smelterId, entity: entity};
//     var whereUsedUrl = Config.EGNC_backend + parsedEGNCUrl.Smelter.base + parsedEGNCUrl.Smelter.extensions.whereuse;
//     var response = await this.restUtil.post(whereUsedUrl, data);
//     if (!response.error){
//       result.data = response;
//     } else {
//       result.error = response;
//       result.message = new Message("error", `Unable to fetch where used for ${entity}`);
//     }
//     return result;
//   }

//   public getExportWhereUsedEndpoint = () => {
//     let parsedEGNCUrl = APIs.urls.EGNCMain;
//     return Config.EGNC_backend + parsedEGNCUrl.Smelter.base + parsedEGNCUrl.Smelter.extensions.whereuse + APIs.urls.Export.csvFormat;
//   };

//   public getExportLookupsEndpoint = (smelterId : string) => {
//     let parsedEGNCUrl = APIs.urls.EGNCMain;
//     let url = Config.EGNC_backend + parsedEGNCUrl.Smelter.base + smelterId + parsedEGNCUrl.Smelter.extensions.lookups + APIs.urls.Export.csvFormat;
//     return {url: url, method: 'GET'}
//   };
// }
