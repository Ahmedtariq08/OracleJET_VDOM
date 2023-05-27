// import RestUtil from "../../utils/rest/RestUtil";
// // import { Config, APIs } from "../json/JsonHandler";
// import DeclarationService from "./DeclarationService";
// import { CMRTDeclaration } from "../../objects/CMRTDeclaration";
// import { Message, Severity } from "../../utils/generic/Message";
// import { Constants} from "../../json/constants"
// export default class CMRTDeclarationService {

//     constructor() { }
//     restUtil = new RestUtil();
// 	declarationService = new DeclarationService();

// 	public getAffectedObjects = async (bundleId : number) => {

// 		let response = await this.declarationService.getAffectedObjects(bundleId);
// 		response = this.parseAffectedObjects(response);
//         return response;
//     }

// 	public parseAffectedObjects = (products: any) => {
// 		let reponseArray: CMRTDeclaration[] = [];
// 		products.forEach(product =>{
//             if (product.company)
//                 reponseArray.push(new CMRTDeclaration(product.company, product.declarationId, product.company, null, null,null,null,Constants.CATEGORY.COMPANY));
//             else {
//                 let declarationRow = new CMRTDeclaration(null, product.declarationId, product.manufacturerName, product.manufacturerNumber, product.manufacturerPartNumber,product.partGroup?product.partGroup.partGroupName:null,null,product.partGroup?Constants.CATEGORY.PART_GROUP:Constants.CATEGORY.PRODUCT);
//                 declarationRow.setId(product.mpn ? product.manufacturerPartNumber + product.manufacturerNumber : product.partGroup.id)
//                 reponseArray.push(declarationRow);
//             }
// 		 } );
// 			return reponseArray;
// 	}

// 	public addAffectedObject = (isAddAll: boolean, searchDataProvider: any[], products: CMRTDeclaration[], selectedRows, DeclarationScope: string,category:string) => {
// 		if (DeclarationScope==Constants.DECLARATION_SCOPE.COMPANY) {
// 			let manufacturerName = searchDataProvider.filter(e => e.id == selectedRows[0])[0].manufacturerName;
// 			products = [new CMRTDeclaration(manufacturerName, null, manufacturerName, "null", manufacturerName,null,DeclarationScope,category)];
//  		}
// 		else {
// 			if (isAddAll) {
// 				searchDataProvider.forEach(data => {
// 				  	if (!this.checkIfAffectedObjectExistsAlready(products, data.id)) {
// 						products.push(new CMRTDeclaration(data.id, null, data.manufacturerName, data.manufacturerNumber, data.mpnOrGroupId,data.partGroupName,DeclarationScope,category));
// 					}
// 				});
// 			}
// 			else {
// 				selectedRows.forEach(selectedRow => {
// 					for (let i = 0; i < searchDataProvider.length; i++) {
// 						let data = searchDataProvider[i];
// 						if (selectedRow == data.id) {
// 							if (!this.checkIfAffectedObjectExistsAlready(products, data.id)) {
// 								products.push(new CMRTDeclaration(data.id, null, data.manufacturerName, data.manufacturerNumber, data.mpnOrGroupId,data.partGroupName,DeclarationScope,category));
// 							}
// 							break;
// 						}
// 					}          
// 				});
// 			}	  
// 		}
// 		return products;
// 	}

// 	public checkIfAffectedObjectExistsAlready = (affectedObjects: CMRTDeclaration[], id: string) => {
// 		for (var i = 0; i < affectedObjects.length; i++) {
// 		  if (affectedObjects[i].getId() == id) {
// 			return true;
// 		  }
// 		}
// 		return false;
// 	  };

// 	public getRedirectionPath = (data : any) => {

// 		return {
// 			path: "cmrt-block",
// 			params: { declarationId: data.declarationId }
// 		}
// 	}

// 	public isEmptyDeclaration = async function(bundleId : number) {
      
//         return await this.declarationService.isEmptyDeclaration(bundleId);
//     }

// 	public setAffectedObjectsPayload = (affectedObjects: CMRTDeclaration[], addedBy: string, declarationType: string, supplier: string, isScopeCompany: boolean) => {     
// 		let obj = {};
// 		let returnArray = [];
	
// 		if (isScopeCompany)
// 			affectedObjects.length > 0 && returnArray.push({ addedBy: addedBy, declarationType: declarationType, supplier: supplier, company: affectedObjects[0].getManufacturerName(), declarationId: affectedObjects[0].getDeclarationId() });
// 		else {
// 			affectedObjects.forEach(function (product) {
// 				obj = { addedBy: addedBy, declarationType: declarationType, supplier: supplier, declarationId: product.getDeclarationId(), manufacturerPartNumber: product.getCategory()==Constants.CATEGORY.PRODUCT?product.getManufacturerPartNumber():null, manufacturerNumber: product.getManufacturerNumber(),partGroupId:product.getCategory()==Constants.CATEGORY.PART_GROUP?product.getId():null };
// 				returnArray.push(obj);          
// 			});	
// 		}
// 		return returnArray;
// 	}
	
// 	public setDeclarationId = (key: string, declarationId: any, affectedObjects: CMRTDeclaration[]) => {
// 		const splitArray = key.split(", "); //  ", " NOT ","
// 		for (let i = 0; i < affectedObjects.length; i++) {
// 			if (affectedObjects[i].getManufacturerPartNumber() == splitArray[1].toString() 
// 				&& affectedObjects[i].getManufacturerNumber() == splitArray[0].toString()) {
// 				affectedObjects[i].setDeclarationId(declarationId);
// 				break;
// 			}
// 		}
// 	}

// 	public saveDeclaration = async (bundleId: number, description: any, updatedSupplier: string, affectedObjects: CMRTDeclaration[], addedBy: string, declarationType: string, tag: string, isScopeCompany: boolean) => {
// 		let descriptionUpdated = await this.declarationService.saveDeclarationDescription(bundleId, description, description.supplier != updatedSupplier, updatedSupplier);
// 		let affectedObjectsPayload = this.setAffectedObjectsPayload(affectedObjects, addedBy, declarationType, updatedSupplier, isScopeCompany);
// 		let msg = "Declaration saved successfully";
// 		let severity: Severity = "confirmation";
// 		let existingAffectedObjects = [];
// 		let errorList = [];
// 		let returnObj = {};
	
// 		let affectedObjectsUpdated = await this.declarationService.saveAffectedObjects(affectedObjectsPayload, bundleId) as any;
// 		!descriptionUpdated && errorList.unshift("General Information not saved. Please try later");
// 		let response = affectedObjectsUpdated.affectedObjects;
// 		let existing = affectedObjectsUpdated.alreadyExistingAffectedObjects;

//         if (Array.isArray(response)) {
// 			response.forEach(res => {
// 				for (const [key, value] of Object.entries(res)) {
// 					if (Number.isInteger(value)) {
// 						this.setDeclarationId(key, value, affectedObjects);
// 					}
// 					else if (value == "exists") {
// 						existingAffectedObjects.push(key);
// 						let existingDeclarationId = this.declarationService.getDeclarationIdOfExistingAffectedObject(key, existing);
// 						errorList.push(key + " already exists in declaration " + existingDeclarationId);
// 					}
// 				}
// 			});
// 		}
// 		else 
// 		  errorList.push(JSON.parse(response)[0].error);
  
// 		let hasErrors = errorList.length > 0;
// 		if (hasErrors) {
// 			severity = "error";
// 			msg = "Issues occurred while saving.";
// 			returnObj['serverError'] = errorList;
// 			// this.decodeErrorMessages(existingAffectedObjects, affectedObjects);
// 			existingAffectedObjects = [];
// 		}
	
// 		if ((tag == "Open to Supplier" || tag == "Open to Manager") && !hasErrors)
//         	returnObj = await this.declarationService.changeState(affectedObjects, addedBy, bundleId, tag, "", "next");
// 		else
// 			returnObj['messageArray'] = new Message(severity, msg);        
	
// 		return returnObj;
// 	  }
	
// }