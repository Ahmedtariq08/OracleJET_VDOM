// import { APIs, Config, Constants } from "../../json/JsonHandler";
// import { DateTimeUtil } from "../../utils/generic/DateTimeUtil";
// import { Message } from "../../utils/generic/Message";
// import { Response } from "../../utils/generic/Response";
// import RestUtil from "../../utils/rest/RestUtil";
// import AdditionalAttributeService from "../AdditionalAttributeService";

// export default class DeclarationService {

//     private RestUtils: RestUtil;
//     private DateTimeUtils: DateTimeUtil;
//     private AdditionalAttributeService: AdditionalAttributeService;
//     private declarationAPIs;

//     constructor() {
//       this.RestUtils = new RestUtil();
//       this.DateTimeUtils = new DateTimeUtil();
//       this.AdditionalAttributeService = new AdditionalAttributeService();
//       this.declarationAPIs = APIs.urls.EGNCMain.Declaration;; 
//     }

//     public createDeclaration = async (data) => {
//       !data.supplier && (data.supplier = '');
//       data.dueDate = this.DateTimeUtils.dateFormatterForRequest(data.dueDate);

//       let url = Config.EGNC_backend + this.declarationAPIs.base;
//       let result = new Response();
//       let response = await this.RestUtils.post(url, data);
//       if (response !== -1) {
//         result.message = new Message("confirmation", "Declaration created successfully.");
//         result.data = response;
//       }
//       else {
//         result.message = new Message("error", "Declaration creation Failed");
//       }
//       return result;
//     }

//     public deleteDeclaration = async (deleteId, userId) => {
//       let url = Config.EGNC_backend + this.declarationAPIs.base + deleteId + "?userId=" + userId;
//       let result = new Response();
//       let response = await this.RestUtils.deleteWithTextResponse(url);
//       if (response == "deletion successful") {
//         result.data = response;
//         result.message = new Message("confirmation", "Deleted Successfully");
//       }
//       else {
//         result.message = new Message("error", "Deletion Failed", response);
//       }
//       return result;
//     }

//     public getAffectedObjects = async (bundleId : number) => {
//       var url = Config.EGNC_backend + this.declarationAPIs.base + bundleId + this.declarationAPIs.extensions.affectedObjects;
//       var response = await this.RestUtils.get(url);
//       return response;
//     }

//     public isEmptyDeclaration = async function(bundleId : number) {
//       var url = Config.EGNC_backend + this.declarationAPIs.base + bundleId + this.declarationAPIs.extensions.isEmptyDeclaration;
//       var response = await this.RestUtils.get(url);
//       return response == "true";
//     }
    
//     public getDeclaration = async function(bundleId: number) {
//       var url = Config.EGNC_backend + this.declarationAPIs.base + bundleId;
//       var response = await this.RestUtils.get(url);
//       var attributes = await this.AdditionalAttributeService.getAttributeMapping("declaration", "Declaration", response);
//       if (response.workflowName != Constants.CMRT_DECLARATION) {    //enable declaration scope only for CMRT
//         attributes = this.AdditionalAttributeService.removeAttributeByName(attributes, Constants.DECLARATION_SCOPE_NAME);
//       }
//       response.status = response.currentMovableWorkflowStateType?.name;
//       response.createdDate = this.DateTimeUtils.dateFormatter(response.createdDate);
//       response.dueDate = response.dueDate ? this.DateTimeUtils.dateTimeToDate(response.dueDate) : null;
//       response.respondByDate = response.respondByDate ? this.DateTimeUtils.dateTimeToDate(response.respondByDate) : null;
      
//       return { response, additionalAttributes: attributes };
//     }

//     public saveDeclarationDescription = async function(bundleId: number, declaration: any, isSupplierUpdated: boolean, updatedSupplier: string) {
      
//       var data = new Object();
//       var url = Config.EGNC_backend + this.declarationAPIs.base + bundleId;

//       data['scope'] = declaration[Constants.DECSCOPE_ATTRID];
//       data['assignee'] = declaration.assignee;
//       data['attribute1'] = declaration.attribute1;
//       data['attribute2'] = declaration.attribute2;
//       data['attribute3'] = declaration.attribute3;
//       data['attribute4'] = declaration.attribute4;
//       data['attribute5'] = declaration.attribute5;
//       data['attribute6'] = declaration.attribute6;
//       isSupplierUpdated && (data['supplier'] = updatedSupplier);
//       data['declarationDescription'] = declaration.declarationDescription;
//       data['dueDate'] = this.DateTimeUtils.dateFormatterForRequest(declaration.dueDate);
//       data['respondByDate'] = this.DateTimeUtils.dateFormatterForRequest(declaration.respondByDate);

//       return await this.RestUtils.put(url, data);
//     }

//     public saveAffectedObjects = async function(payload: any, bundleId: any) {
//       var url = Config.EGNC_backend + this.declarationAPIs.base + bundleId + this.declarationAPIs.extensions.requestCompliance;
//       return await this.RestUtils.post(url, payload);
//     }

//     public changeState = async function (affectedObjects: any[], addedBy: string, bundleId: number, title: string, comments: string, action: string) {
//       let returnObj = {};
//       if (affectedObjects.length > 0) {
//         let successMsg = "Request sent to Supplier";
//         title == "Open to Manager" && (successMsg = "Request sent for Approval");

//         var data = new Object();
//         data['action'] = action;
//         data['comments'] = comments;
//         data['lastModifiedBy'] = addedBy;
//         var url = Config.EGNC_backend + this.declarationAPIs.base + bundleId + this.declarationAPIs.extensions.state;
        
//         let response = await this.RestUtils.put(url, data);

//       //   let response = await this.declarationService.changeState(addedBy, bundleId, comments, action);
//         if (response.length == 0) {
//           returnObj['lockIt'] = true;
//           returnObj['isOpenToSupplier'] = true;
//           returnObj['messageArray'] = new Message("confirmation", successMsg);
//         }
//         else {
//           returnObj['serverError'] = response;
//         }
//       }
//       else {
//         returnObj['messageArray'] = new Message("error", "Empty List!", "Please add Mfr. Part or Part Family first.");
//       }
//       return returnObj;
//     }


//     // public changeState = async function (addedBy: string, bundleId: number, comments: string, action: string) {
       
//     //     var data = new Object();
//     //     data['action'] = action;
//     //     data['comments'] = comments;
//     //     data['lastModifiedBy'] = addedBy;
//     //     var declarationAPIs = APIs.urls.EGNCMain.Declaration;
//     //     var url = Config.EGNC_backend + declarationAPIs.base + bundleId + declarationAPIs.extensions.state;
        
//     //     return await this.RestUtils.put(url, data);
//     // }

//     public computeCompliance = async (itemId, specificationId) => {
      
//       let result = new Response();
//       let JobsUrl = APIs.urls.EGNCMain.Job;
//       let url = Config.EGNC_backend + JobsUrl.base + JobsUrl.extensions.calculateCompliance + itemId + '/' + specificationId;

//       let response = await this.RestUtils.postWithTextResponse(url);
//       if (response === "true") {
//         result.message = new Message("confirmation", "Processing rollups as background job.");
//         result.data = response;
//       }
//       else
//         result.message = new Message("error", "Error occurred");
        
//       return result;
//     }

//     public requestComplianceAPI = async (payload) => {
        
//       let result = new Response();
//       let url = Config.EGNC_backend + this.declarationAPIs.base + "-1" + this.declarationAPIs.extensions.requestCompliance;
//       let response = await this.RestUtils.post(url, payload);
      
//       const affectedObjects = Array.isArray(response.affectedObjects) ? response.affectedObjects : JSON.parse(response.affectedObjects);
//       const errors = affectedObjects[0].error;
      
//       if (errors)
//         result.message = new Message("error", errors);
//       else {
//         for (let res = 0; res < response.affectedObjects.length; res++) {
//           for (const [key, value] of Object.entries(response.affectedObjects[res])) {
//             if (value === "exists") {
//               result.message = new Message("error", `An open Declaration already exists for the Manufacturer Parts: ${key}.`);
//               break;
//             }
//           }
//         }
//         if (response.bundleId !== -1 && response.bundleId !== "List is empty!") {
//           result.data = response;
//         }
//       }
//       return result;
//     }

//     public requestCompliance = async(amls, declarationType, specification, user, supplier) => {
//       let payload = [];
//       let isPayloadCorrect = true;
//       const specificationId = specification.value;
//       const specificationName = specification.label;

//       amls.forEach(mpn => {
//         let data = {};
//         data['supplier'] = supplier;
//         data['declarationRequestedBy'] = user;
//         data['specification'] = specificationName;
//         data['specificationId'] = specificationId;
//         data['declarationType'] = declarationType.id;
//         data['manufacturerName'] = mpn.manufacturerName;
//         data['manufacturerNumber'] = mpn.manufacturerNumber;
//         data['manufacturerPartNumber'] = mpn.manufacturerPartNumber;

//         isPayloadCorrect &&= data['declarationRequestedBy'] && data['manufacturerPartNumber'] && data['manufacturerNumber'] && data['manufacturerName'] && data['declarationType'];
//         if (declarationType.specSupported) {
//           isPayloadCorrect &&= data['specificationId'] && data['specification'];
//         }
//         else
//           data['specificationId'] = null;

//         payload.push(data);
//       });

//       if (isPayloadCorrect)
//         return await this.requestComplianceAPI(payload);
//     }

//     // not being used for now, but will use this function in declaration-block in future
//     public getGeneralAttributes = function (response: any, isManager: boolean, openConfirmUpdateSupplierModal: () => any, getAssigneeList: () => any) {
//         var i = 0;
//         var general_attr_array = [];
//         var todaysDate = new Date().toISOString().split('T')[0];
//         this.AdditionalAttributeService.AttributeConstructor(i, general_attr_array, 'odd_attr', 'workflowName', 'Declaration Type', response.workflowName, 'TEXT', true, response.workflowName, null, null, null, null, null, null, null, null, null);
//         this.AdditionalAttributeService.AttributeConstructor(i++, general_attr_array, 'even_attr', 'createdBy', 'Created By', response.createdBy, 'TEXT', true, response.createdBy, null, null, null, null, null, null, null, null, null);
        
//         this.AdditionalAttributeService.AttributeConstructor(i, general_attr_array, 'odd_attr', 'status', 'Status', response.status, 'TEXT', true, response.status, null, null, null, null, null, null, null, null, null);
//         this.AdditionalAttributeService.AttributeConstructor(i++, general_attr_array, 'even_attr', 'createdDate', 'Creation Date', response.createdDate, 'DATE', true, response.createdDate, null, null, null, null, null, null, null, null, null);
       
//         this.AdditionalAttributeService.AttributeConstructor(i, general_attr_array, 'odd_attr', 'supplier', 'Supplier', response.supplier, 'LIST', false, response.supplier, null, 'SINGLE', false, openConfirmUpdateSupplierModal, null, null, false, null, null);
//         this.AdditionalAttributeService.AttributeConstructor(i++, general_attr_array, 'even_attr', 'declarationDescription', 'Declaration Description', response.declarationDescription, 'TEXT', false, response.declarationDescription, null, null, null, null, null, null, null, null, null);
        
//         this.AdditionalAttributeService.AttributeConstructor(i, general_attr_array, 'odd_attr', 'dueDate', 'Due Date', response.dueDate, 'DATE', false, response.dueDate, null, null, null, null, todaysDate, null, null, null, null);
//         this.AdditionalAttributeService.AttributeConstructor(i++, general_attr_array, 'even_attr', 'respondByDate', 'Respond By Date', response.respondByDate, 'DATE', !isManager, response.respondByDate, null, null, null, null, todaysDate, null, null, null, null);
        
//         this.AdditionalAttributeService.AttributeConstructor(i, general_attr_array, 'odd_attr', 'assignee', 'Assigned To', response.assignee, 'LIST', !isManager, response.assignee, null, 'SINGLE', false, getAssigneeList, null, !response.supplier, false, null, null);
//         return general_attr_array;
//     }

//     public getDeclarationIdOfExistingAffectedObject = function (affectedObject: any, alreadyExistingAffectedObjects: any[]) {
//       for (let iter = 0; iter <= alreadyExistingAffectedObjects?.length; iter++) {
//         for (const [key, value] of Object.entries(alreadyExistingAffectedObjects[iter])) {
//           if (affectedObject == key) {
//             return value;
//           }
//         }
//       }
//     }
// }