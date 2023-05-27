// import RestUtil from "../utils/rest/RestUtil";
// import SubstanceService from "./Categories/SubstanceService";
// import ExemptionService from "./Categories/ExemptionService";
// import { Message } from "../utils/generic/Message";
// import { Response } from "../utils/generic/Response";
// import { Config, APIs } from "../json/JsonHandler";
// import SpecificationService from "./Categories/SpecificationService";

// /**
//    * @Returns Response Object { 
//    *    data: [data object in case of success],
//    *    error: [error object in case of error],
//    *    message: [message object to be shown in message array]
//    * }.
//    *
//    * @Usage
//    * Functions used in API calls on select-and-add component
//    */
// export default class SearchService {
//     private ParsedEgncUrl;
//     private RestUtils: RestUtil;
//     private SubstanceService: SubstanceService;
//     private ExemptionService: ExemptionService;
//     private SpecificationService: SpecificationService;
    
//     constructor() {
//       this.RestUtils = new RestUtil();
//       this.ParsedEgncUrl = APIs.urls.EGNCMain;
//       this.SubstanceService = new SubstanceService();
//       this.ExemptionService = new ExemptionService();
//       this.SpecificationService = new SpecificationService();
//     }

//     public searchItems = async (page, size, params?: Map<string, string>) => {
//         let response = new Response();
//         try {
//             var url = new URL(Config.EGNC_backend + this.ParsedEgncUrl.Item.base + this.ParsedEgncUrl.Item.extensions.getItem);
//             url.searchParams.append('page', page);
//             url.searchParams.append('size', size);
//             params.forEach((value, key) =>  {
//                 if (value) {url.searchParams.append(key, value)}
//             });
//             let apiResponse = await this.RestUtils.get(url.toString());
//             let resultArray = [];
//             apiResponse.forEach(element => {
//                 resultArray.push({ id: element.itemId, itemId: element.itemId, mpnOrGroupId: element.itemId, itemNumber: element.itemNumber, itemClass: element.itemClass, lifeCyclePhase: element.lifeCyclePhase, });
//             });
//             response.data =  resultArray;
//         } catch (error){
//             response.error = error;
//             response.message = new Message("error", "Unable to fetch Items");
//         }
//         return response;
//     }

//     public searchMpns = async (page, size, params?: Map<string, string>) => {
//         let response = new Response();
//         try {
//             var url = new URL(Config.EGNC_backend + this.ParsedEgncUrl["Manufacturer Part"].base + this.ParsedEgncUrl["Manufacturer Part"].extensions.getMPNs);
//             url.searchParams.append('page', page);
//             url.searchParams.append('size', size);
//             url.searchParams.append('fetchWithoutPartGroup', "true");
//             !params.has('manufacturerName') ? params.set('manufacturerName', '') : undefined;
//             !params.has('manufacturerPartNumber') ? params.set('manufacturerPartNumber', '') : undefined;
//             var data = Object.fromEntries(params);
//             let apiResponse = await this.RestUtils.post(url.toString(), data);
//             let resultArray = [];
//             apiResponse.forEach(element => {
//                 resultArray.push({ id: element.manufacturerPartNumber + element.manufacturerNumber, mpnOrGroupId: element.manufacturerPartNumber, manufacturerPartNumber: element.manufacturerPartNumber, manufacturerNumber: element.manufacturerNumber, manufacturerName: element.manufacturerName, manufacturerLifecycle: element.manufacturerLifecycle, manufacturerDes: element.manufacturerDes, insertionDate: element.insertionDate, mrtSupplierContact: element.cmrtSupplierContact, });
//             });
//             response.data =  resultArray;
//         } catch (error){
//             response.error = error;
//             response.message = new Message("error", "Unable to fetch Mpns");
//         }
//         return response;
//     }

//     public searchPartGroups = async (page, size, params?: Map<string, string>) => {
//         let response = new Response();
//         try {
//             var url = new URL(Config.EGNC_backend + this.ParsedEgncUrl["Part Group"].base);
//             url.searchParams.append('page', page);
//             url.searchParams.append('size', size);
//             params.forEach((value, key) =>  {
//                 if (value) {url.searchParams.append(key, value)}
//             });
//             let apiResponse = await this.RestUtils.get(url.toString());
//             let resultArray = [];
//             apiResponse.forEach(element => {
//                 resultArray.push({ id: element.id, partGroupId: element.id, mpnOrGroupId: element.id, partGroupName: element.partGroupName, description: element.description, type: element.type, });
//             });
//             response.data =  resultArray;
//         } catch (error){
//             response.error = error;
//             response.message = new Message("error", "Unable to fetch Part Groups");
//         }
//         return response;
//     }

//     public searchCompanies = async (page, size, params?: Map<string, string>) => {
//         let response = new Response();
//         try {
//             var url = new URL(Config.EGNC_backend + this.ParsedEgncUrl["Manufacturer Part"].base + this.ParsedEgncUrl["Manufacturer Part"].extensions.getCompanies);
//             url.searchParams.append('page', page);
//             url.searchParams.append('size', size);
//             !params.has('manufacturerName') ? params.set('manufacturerName', '') : undefined;
//             var data = Object.fromEntries(params);
//             let apiResponse = await this.RestUtils.post(url.toString(), data);
//             let resultArray = [];
//             apiResponse.forEach(element => {
//                 resultArray.push({ id: element, manufacturerName: element, mpnOrGroupId: element});
//             });
//             response.data =  resultArray;
//         } catch (error){
//             response.error = error;
//             response.message = new Message("error", "Unable to fetch Companies");
//         }
//         return response;
//     }

//     public searchSubstances = async (page, size, params?: Map<string, string>) => {
//         var data = Object.fromEntries(params);
//         data.page = page;
//         data.size = size;
//         return await this.SubstanceService.advanceSearch(data);
//     }

//     public searchExemptions = async (page, size, params?: Map<string, string>) => {
//         let response = new Response();
//         var data = Object.fromEntries(params);
//         var exemptionName = data.exemptionName ? data.exemptionName : "";
//         try {
//             response.data = await this.ExemptionService.getExemptionsForSelectAndAdd(exemptionName);
//         } catch (error) {
//             response.error = error;
//             response.message = new Message("error", "Unable to fetch Exemptions");
//         }
//         return response;
//     }

//     public searchSpecifications = async (page, size, params?: Map<string, string>) => {
//         let response = new Response();
//         var data = Object.fromEntries(params);
//         data.page = page;
//         data.size = size;
//         try {
//             response.data = await this.SpecificationService.advanceSearch(data);
//         } catch (error) {
//             response.error = error;
//             response.message = new Message("error", "Unable to fetch Specifications");
//         }
//         return response;
//     }

//     public searchSubstancesOfSubstanceGroup = async (page, size, params?: Map<string, string>) => {
//         let casNumber = params.get('casNumber');
//         let subGroupName = params.get('substanceGroup');
//         let substanceName = params.get('substanceName');
//         params.delete('casNumber');
//         params.delete('substanceName');
//         params.delete('substanceGroup');
//         const data = await this.SubstanceService.getSubstancesOfSubstanceGroup(subGroupName, substanceName, casNumber);
//         return data;
//     }
// }