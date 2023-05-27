// import RestUtil from "../../utils/rest/RestUtil";
// import { Config, APIs } from "../../json/JsonHandler";
// import { Response } from "../../utils/generic/Response";
// import Specification from "../../objects/Specification";
// import { DateTimeUtil } from "../../utils/generic/DateTimeUtil";
// import { Message } from "../../utils/generic/Message";

// export default class SpecificationService {

//   private RestUtils: RestUtil;
//   private DateTimeUtils: DateTimeUtil;
//   private specificationAPIs = APIs.urls.EGNCMain.Specification;

//   constructor() { 
//     this.RestUtils = new RestUtil();
//     this.DateTimeUtils = new DateTimeUtil();
//   }

//   public createSpecification = async (data) => {
//     data.rollupEngine = "PPMRollup";
//     data.complyByDate = this.DateTimeUtils.dateFormatterForRequest(data.complyByDate);
//     data.effectiveTill = this.DateTimeUtils.dateFormatterForRequest(data.effectiveTill);
//     data.effectiveFrom = this.DateTimeUtils.dateFormatterForRequest(data.effectiveFrom);

//     let url = Config.EGNC_backend + this.specificationAPIs.base;
//     let result = new Response();
//     try {
//       let response = await this.RestUtils.post(url, data);
//       if (response) {
//         result.message = new Message("confirmation", "Specification created successfully.");
//         result.data = response.specificationId;
//       } else {
//         result.message = new Message("error", "Specification creation failed.");
//       }
//     } catch (error) {
//       result.message = new Message("error", Response.Server_Error);
//     }
//     return result;
//   }

//   public advanceSearch = async (data) => {
//     var url = Config.EGNC_backend + this.specificationAPIs.base + this.specificationAPIs.extensions.search;
//     var response = (await this.RestUtils.post(url, data)).result;
//     return response;
//   };

//   public getSpecificationById = async (specificationId : string) => {    
//     var url = Config.EGNC_backend + this.specificationAPIs.base + specificationId;
//     var response = await this.RestUtils.get(url);

//     response.complyByDate = response.complyByDate ? this.DateTimeUtils.dateTimeToDate(response.complyByDate) : null;
//     response.effectiveFrom = response.effectiveFrom ? this.DateTimeUtils.dateTimeToDate(response.effectiveFrom) : null;
//     response.effectiveTill = response.effectiveTill ? this.DateTimeUtils.dateTimeToDate(response.effectiveTill) : null;
//     return response;
//   };

//   public getAllSpecifications = async () => {    
//     var url = Config.EGNC_backend + this.specificationAPIs.base;
//     var response = await this.RestUtils.get(url);
//     let specificaionMap = new Map();

//     response.forEach(item => {
//       if (!specificaionMap.get(item.specification_id))
//         specificaionMap.set(item.specification_id, { label: item.specification_name, value: item.specification_id });
//     });
    
//     const specifications = [...specificaionMap.values()];
//     return specifications;
//   };

//   public getEnabledOnlySpecifications = async (wfid?) => {
//     let specificaionMap = new Map();
//     var url = Config.EGNC_backend + this.specificationAPIs.base + "?enabledOnly=true";
//     wfid && (url += ("&wfid=" + wfid));
//     var response = await this.RestUtils.get(url);

//     response.forEach(item => {
//       if (!specificaionMap.get(item.specification_id))
//         // doing this to avoid looping to extract specification name from id
//         specificaionMap.set(item.specification_id, { label: item.specification_name, value: { value: item.specification_id, label: item.specification_name }});
//     });
    
//     const specifications = [...specificaionMap.values()];
//     return specifications;
//   };

//   public getSubstancesOfSpecification = async (specificationId : string, params?: Map<string, string>) => {    

//     var url = new URL(Config.EGNC_backend + this.specificationAPIs.base + specificationId + this.specificationAPIs.extensions.substances);
//     params.forEach((value, key) => url.searchParams.append(key, value));
//     return await this.RestUtils.get(url.toString());
//   };

//   public getExemptionsOfSpecification = async (specificationId : string) => {    

//     var url = Config.EGNC_backend + this.specificationAPIs.base + specificationId + this.specificationAPIs.extensions.exemptions;
//     return await this.RestUtils.get(url);
//   };

//   public getChildrenOfSpecification = async (specificationId : string) => {    

//     var url = Config.EGNC_backend + this.specificationAPIs.base + specificationId + this.specificationAPIs.extensions.children;
//     return await this.RestUtils.get(url);
//   };

//   public overrideSpecification = async (specification: any, substanceData: any, exemptionData: any, childSpecData: any) => {

//     var substances = {};
//     var exemptions = [];
//     var data = new Object();
//     var childSpecifications = [];

//     var egcSpecification = {
//       "group": specification.group,
//       "locked": specification.locked,
//       "status" : specification.status,
//      "rollupEngine":null,
//       "description": specification.description,
//       "specificationId": specification.specificationId,
//       "specificationName": specification.specificationName,
//       "complyByDate": this.DateTimeUtils.dateFormatterForRequest(specification.complyByDate),
//       "effectiveFrom": this.DateTimeUtils.dateFormatterForRequest(specification.effectiveFrom),
//       "effectiveTill": this.DateTimeUtils.dateFormatterForRequest(specification.effectiveTill)
//     };

//     substanceData.forEach(substance => {
//       var subId = substance.substanceId;
//       var arr = [];
//       arr.push(substance.threshold);

//       var exemptionIdsOfCurrentSubstance = substance.exemptionIds;
//       if (exemptionIdsOfCurrentSubstance) {
//         for (var i = 0; i < exemptionIdsOfCurrentSubstance.length; i++)
//           arr.push(substance.exemptionIds[i]);
//       }
//       Object.assign(substances, { [subId]: arr });
//     });

//     exemptionData.forEach(exemption => {
//       exemptions.push(exemption.id);
//       Object.assign(exemptions, exemptions);
//     });
    
//     childSpecData.forEach(childSpecification => {
//       childSpecifications.push(childSpecification.specificationId);
//       Object.assign(childSpecifications, childSpecifications);
//     });

//     data['exemptions'] = exemptions;
//     data['substances'] = [substances];
//     data['egcSpecification'] = egcSpecification;
//     data['childSpecifications'] = childSpecifications;
//     var url = Config.EGNC_backend + this.specificationAPIs.base + this.specificationAPIs.extensions.overrideSpecification;
    
//     let response = await this.RestUtils.postWithTextResponse(url, data);
//     return response == "true";
//   }

//   public toggleStatus = async (specificationId : string) => {    

//     var url = Config.EGNC_backend + this.specificationAPIs.base + specificationId + this.specificationAPIs.extensions.toggleActive;
//     return await this.RestUtils.putWithTextResponse(url);
//   };

//   public getExportEndpoint = (specificationId : string) => {    

//     return Config.EGNC_backend + this.specificationAPIs.base + specificationId + this.specificationAPIs.extensions.substances + APIs.urls.Export.csvFormat;
//   };
// }
