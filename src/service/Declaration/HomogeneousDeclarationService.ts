// import * as ko from 'knockout';
// import RestUtil from "../../utils/rest/RestUtil";
// import { Constants } from "../../json/JsonHandler";
// import { Message, Severity } from "../../utils/generic/Message";
// import DeclarationService from "./DeclarationService";
// import { HomogeneousDeclaration, AffectedObjectCategory } from "../../objects/HomogeneousDeclaration";

// export default class HomogeneousDeclarationService {

//   constructor() { }
//   restUtil = new RestUtil();
// 	declarationService = new DeclarationService();

// 	public getDeclaration = async (bundleId: number) => {

//     let response = await this.declarationService.getDeclaration(bundleId);
//     return response;
//   }

//   public getAffectedObjects = async (bundleId: number) => {

// 		let data = [];
// 		let response = await this.declarationService.getAffectedObjects(bundleId);

//     response.forEach(row => {
// 			let mpnExistsFlag = false;
//       for (let i = 0; i < data.length; i++) {
//         mpnExistsFlag = false;
//         var Id = data[i].getId();
//         if (Id == row.manufacturerPartNumber + row.manufacturerNumber || Id == row.partGroupId || Id == row.itemId) {
//           mpnExistsFlag = true;
//           let specification;
//           let oldChildren = data[i].children; // old children
//           if (Id == row.manufacturerPartNumber + row.manufacturerNumber) {
//             specification = new HomogeneousDeclaration(row.manufacturerPartNumber + row.manufacturerNumber, row.status, row.filled, Id, null, null, null, null, row.declarationId, row.errorSeverity, row.specificationName, row.specificationId, true, row.manufacturerName, row.manufacturerNumber, row.declaredCompliance, row.calculatedCompliance, row.manufacturerPartNumber, "Specification", null, row.validationType);
//             oldChildren = this.getAffectedObjectHierarchy(row.parentAffectedObjectId, data, row.manufacturerPartNumber + row.manufacturerNumber, specification, oldChildren);
//           }
//           else if (Id == row.partGroup?.id) {
//             specification = new HomogeneousDeclaration(row.partGroup.id, row.status, row.filled, row.partGroupId, null, false, row.partGroup.partGroupName, null, row.declarationId, row.errorSeverity, row.specificationName, row.specificationId, false, null, null, row.declaredCompliance, row.calculatedCompliance, row.partGroup.id, "Specification", null, row.validationType);
//             oldChildren = this.getAffectedObjectHierarchy(row.parentAffectedObjectId, data, row.partGroup.id, specification, oldChildren);
//           }
//           else if (Id == row.egcItem?.itemId) {
//             specification = new HomogeneousDeclaration(row.egcItem.itemId, row.status, row.filled, row.egcItem.itemId, null, false, null, row.egcItem.itemNumber, row.declarationId, row.errorSeverity, row.specificationName, row.specificationId, false, null, null, row.declaredCompliance, row.calculatedCompliance, row.egcItem.itemId, "Specification", null, row.validationType);
//             oldChildren = this.getAffectedObjectHierarchy(row.parentAffectedObjectId, data, row.egcItem.itemId, specification, oldChildren);
//           }
//           data[i].children = oldChildren; // new child added
//           break;
//         }
//       }

//       if (!mpnExistsFlag) {
//         let child = [];
//         if (row.manufacturerPartNumber) {
//           child.push(new HomogeneousDeclaration(row.manufacturerPartNumber + row.manufacturerNumber, row.status, row.filled, row.manufacturerPartNumber + row.manufacturerNumber, null, false, null, null, row.declarationId, row.errorSeverity, row.specificationName, row.specificationId, true, row.manufacturerName, row.manufacturerNumber, row.declaredCompliance, row.calculatedCompliance, row.manufacturerPartNumber, "Specification", null, row.validationType));
//           data.push(new HomogeneousDeclaration(row.manufacturerPartNumber + row.manufacturerNumber, null, row.filled, null, null, false, null, null, null, row.errorSeverity, null, null, true, row.manufacturerName, row.manufacturerNumber, null, null, row.manufacturerPartNumber, "MPN", ko.observableArray(child), null));
//         }
//         else if (row.egcItem?.itemId) {
//           child.push(new HomogeneousDeclaration(row.egcItem.itemId, row.status, row.filled, row.egcItem.itemId, null, false, null, row.egcItem.itemNumber, row.declarationId, row.errorSeverity, row.specificationName, row.specificationId, false, null, null, row.declaredCompliance, row.calculatedCompliance, row.egcItem.itemId, "Specification", null, row.validationType));
//           data.push(new HomogeneousDeclaration(row.egcItem.itemId, null, row.filled, null, null, false, null, row.egcItem.itemNumber, null, row.errorSeverity, null, null, false, null, null, null, null, row.egcItem.itemId, "Item", ko.observableArray(child), null));
//         }
//         else {                
//           child.push(new HomogeneousDeclaration(row.partGroup.id, row.status, row.filled, row.partGroupId, null, false, row.partGroup.partGroupName, null, row.declarationId, row.errorSeverity, row.specificationName, row.specificationId, false, null, null, row.declaredCompliance, row.calculatedCompliance, row.partGroup.id, "Specification", null, row.validationType));
//           data.push(new HomogeneousDeclaration(row.partGroup.id, null, row.filled, null, null, false, row.partGroup.partGroupName, null, null, row.errorSeverity, null, null, false, null, null, null, null, row.partGroupId, "Part Group", ko.observableArray(child), null));
//         }
//       }
//     });

//     return data;
//   }

//   public findParentSpecification = (parentAffectedObjectId: number, affectedObjects: HomogeneousDeclaration[], id: any) => {
//     for (let spec_i = 0; spec_i < affectedObjects.length; spec_i++) {
//       if (affectedObjects[spec_i].getId() === id) {
//         let specifications = affectedObjects[spec_i].getChildren()?.();
//         if (specifications) {
//           for (let spec_j = 0; spec_j < specifications.length; spec_j++) {
//             if (specifications[spec_j].getDeclarationId() == parentAffectedObjectId) {
//               return specifications[spec_j];
//             }
//           }
//         }  
//       }
//     }
//   }

//   public getAffectedObjectHierarchy = (parentAffectedObjectId: number, affectedObjects: HomogeneousDeclaration[], id: any, specification: HomogeneousDeclaration, oldChildren: HomogeneousDeclaration[]) => {
//     if (parentAffectedObjectId) {
//       let parentSpec = this.findParentSpecification(parentAffectedObjectId, affectedObjects, id);
//       let childSpecs = parentSpec.getChildren()?.();
//       specification.setCategory("Child Specification");
//       childSpecs ? childSpecs.push(specification) : childSpecs = [specification];
//       parentSpec.setChildren(ko.observableArray(childSpecs));
//     }
//     else
//       oldChildren.push(specification);
//     return oldChildren;
//   }

// 	public getRedirectionPath = (affectedObject: HomogeneousDeclaration, parent: HomogeneousDeclaration) => {

// 		let path;
// 		let pathMap = { "Item": "itemNumber", "Part Group": "partGroup", "MPN": "manufacturerPartNumber"	};
//         path = affectedObject.getValidationType() == Constants.PartLevel ? "class-c" : "class-d";
// 		let params = { declarationId: affectedObject.getDeclarationId(), specification: affectedObject.getSpecification() };
		
//         let category = pathMap[parent?.getCategory()];
// 		params[category] = affectedObject[category];
// 		return { path: path, params: params };
// 	}
	
//   // Copy Constructor
//   public copy = (other: HomogeneousDeclaration): HomogeneousDeclaration => {
//     return new HomogeneousDeclaration(
//         other.getId(),
//         other.getStatus(),
//         other.getFilled(),
//         other.getParent(),
//         other.getErrorMsg(),
//         other.getErrorIcon(),
//         other.getPartGroup(),
//         other.getItemNumber(),
//         other.getDeclarationId(),
//         other.getErrorSeverity(),
//         other.getSpecification(),
//         other.getSpecificationId(),
//         other.getCategory()=='MPN',
//         other.getManufacturerName(),
//         other.getManufacturerNumber(),
//         other.getDeclaredCompliance(),
//         other.getCalculatedCompliance(),
//         other.getManufacturerPartNumber(),
//         other.getCategory(),
//         other.getChildren(),
//         other.getValidationType()
//     );
//   }

//   public pushChildren = (affectedObject: HomogeneousDeclaration, specification: HomogeneousDeclaration, parentChildSpecMap: Map<number,any>) => {

//     if (parentChildSpecMap.has(specification.getSpecificationId())) {
//       let children: HomogeneousDeclaration[] = [];
//       let childSpecs = parentChildSpecMap.get(specification.getSpecificationId());
      
//       childSpecs.forEach(childSpec => {
//         let specificationRow = this.copy(specification);
//         specificationRow.setSpecification(childSpec.name);
//         specificationRow.setSpecificationId(childSpec.id);
//         specificationRow.setCategory("Child Specification");
//         specificationRow.setDisplayMpnField(affectedObject.getCategory() == 'MPN');
//         children.push(specificationRow);
//       });
//       specification.setChildren(ko.observableArray(children));
//     }

//     let children = affectedObject.getChildren() ? affectedObject.getChildren() : ko.observableArray([]);
//     children.push(specification);
//     affectedObject.setErrorIcon(false);  // because now child spec has been added
//     affectedObject.setChildren(children);
//   };

//   public addSpecificationToAffectedObject = (affectedObject: HomogeneousDeclaration, specification: any, parentChildSpecMap: Map<number,any>) => {

//       let specificationRow = this.copy(affectedObject);
//       specificationRow.setChildren(null);
//       specificationRow.setErrorIcon(null);
//       specificationRow.setStatus("Draft");
//       specificationRow.setCategory("Specification");
//       specificationRow.setParent(affectedObject.getId());
//       specificationRow.setSpecification(specification.name);
//       specificationRow.setSpecificationId(specification.id);
//       specificationRow.setValidationType(specification.validationType);
//       this.pushChildren(affectedObject, specificationRow, parentChildSpecMap);
//   }

//   public checkIfAffectedObjectExistsAlready = (affectedObjects: HomogeneousDeclaration[], id: string) => {
//     for (var i = 0; i < affectedObjects.length; i++) {
//       if (affectedObjects[i].getId() == id) {
//         return true;
//       }
//     }
//     return false;
//   };

//   public checkIfSpecOfAnAffectedObjectExistsAlready = (affectedObject: HomogeneousDeclaration, specification: any) => {
//     if (affectedObject) {
//       var children = affectedObject.getChildren()?.();
//       if (children) {
//         for (var i = 0; i < children.length; i++) {
//           if (children[i].getSpecificationId() == specification.id) {
//             return true;
//           }
//         }  
//       }
//       return false;
//     }
//   };

//   public addMutipleSpecificationsToMultipleAffectedObjects = (affectedObjectsToBeAdded: HomogeneousDeclaration[], allAddedAffectedObjects: HomogeneousDeclaration[], specifications: any[], parentChildSpecMap: Map<number,any>) => {
//     affectedObjectsToBeAdded.forEach(affectedObject => {
//       for (let i = 0; i < allAddedAffectedObjects.length; i++) {
//         let id = affectedObject[1];
//         if (id == allAddedAffectedObjects[i].getId()) {
//           specifications.forEach(spec => {
//             var existsAlready = this.checkIfSpecOfAnAffectedObjectExistsAlready(allAddedAffectedObjects[i], spec);
//             if (!existsAlready) {
//               this.addSpecificationToAffectedObject(allAddedAffectedObjects[i], spec, parentChildSpecMap);
//             }
//           });
//           break;
//         }
//       }
//     });
//   }


//   public addAffectedObject = (isAddAll: boolean, searchDataProvider: any[], affectedObjects: HomogeneousDeclaration[], selectedRows, category: AffectedObjectCategory) => {
//     let errorMsg = "You must add atleast 1 specification or delete this affected object.";
    
//     if (isAddAll) {
//       searchDataProvider.forEach(data => {
//         if (!this.checkIfAffectedObjectExistsAlready(affectedObjects, data.id)) {
//           affectedObjects.push(new HomogeneousDeclaration(data.id, null, null, null, errorMsg, true, data.partGroupName, data.itemNumber, null, null, null, null, category == 'MPN', data.manufacturerName, data.manufacturerNumber, null, null, data.mpnOrGroupId, category, null, null));
//         }
//       });
//     }
//     else {
//       selectedRows.forEach(selectedRow => {
//         for (let i = 0; i < searchDataProvider.length; i++) {
//           let data = searchDataProvider[i];
//           if (selectedRow == data.id) {
//             if (!this.checkIfAffectedObjectExistsAlready(affectedObjects, data.id)) {
//               affectedObjects.push(new HomogeneousDeclaration(data.id, null, null, null, errorMsg, true, data.partGroupName, data.itemNumber, null, null, null, null, category == 'MPN', data.manufacturerName, data.manufacturerNumber, null, null, data.mpnOrGroupId, category, null, null));
//             }  
//             break;
//           }
//         }          
//       });
//     }
//     return affectedObjects;
//   }

//   public removeAffectedObject = (affectedObjects: HomogeneousDeclaration[], selectedRow: HomogeneousDeclaration) => {
//     return ko.utils.arrayFilter(affectedObjects, function (affectedObject) {
//       return affectedObject.getManufacturerPartNumber() != selectedRow.getManufacturerPartNumber();
//     });
//   }

//   public removeSpecificationFromAffectedObject = (affectedObjects: HomogeneousDeclaration[], selectedRow: HomogeneousDeclaration) => {
//     for (let i = 0; i < affectedObjects.length; i++) {
//       if (affectedObjects[i].getId() == selectedRow.getParent()) {
//         var children = ko.utils.arrayFilter(affectedObjects[i].getChildren()?.(), function (childSpec) {
//           return childSpec.getSpecificationId() != selectedRow.getSpecificationId();
//         });
//         affectedObjects[i].setChildren(ko.observableArray(children));
//         break;
//       }
//     }
   
//     this.setParentErrorIfNoSpecificationLeft(affectedObjects, selectedRow);
//   }

//   public setParentErrorIfNoSpecificationLeft = (affectedObjects: HomogeneousDeclaration[], selectedRow: HomogeneousDeclaration) => {
//     for (let i = 0; i < affectedObjects.length; i++) {
//       if (affectedObjects[i].getId() == selectedRow.getParent()) {
//         const children = affectedObjects[i].getChildren();
//         if (children?.().length > 0) {
//           affectedObjects[i].setErrorIcon(false);
//           affectedObjects[i].setErrorMsg(null);
//         }
//         // deleting the Only child will trigger an error msg on parent affected object as well
//         else {
//           delete affectedObjects[i]['children'];
//           affectedObjects[i].setErrorIcon(true);
//           affectedObjects[i].setErrorMsg("This affected object will be deleted if no specification added.");
//         }
//       }
//     }
//   }

//   public setAffectedObjectsPayload = (affectedObjects: HomogeneousDeclaration[], addedBy: string, declarationType: string, supplier: string) => {
      
//     let obj = {};
//     let returnArray = [];

//     affectedObjects.forEach(function (affectedObject) {
//       affectedObject.getChildren()?.().forEach(function (spec) {
//         obj = { specification: spec.getSpecification(), specificationId: spec.getSpecificationId(), addedBy: addedBy, declarationType: declarationType, supplier: supplier, manufacturerPartNumber: affectedObject.getManufacturerPartNumber(), manufacturerNumber: affectedObject.getManufacturerNumber(), partGroupName: affectedObject.getPartGroup(), itemNumber: affectedObject.getItemNumber(), declarationId: spec.getDeclarationId() };
//         if (affectedObject.getItemNumber() || affectedObject.getPartGroup()) {
//           if (affectedObject.getPartGroup()) {
//             obj['partGroupId'] = obj['manufacturerPartNumber'];
//             delete obj['supplier'];
//           }
//           else if (affectedObject.getItemNumber()) {
//             obj['itemId'] = obj['manufacturerPartNumber'];
//           }
//           delete obj['manufacturerPartNumber'];
//         }
//         returnArray.push(obj);          
//       });
//     });
//     return returnArray;
//   }
  
//   public setDeclarationId = (key: string, declarationId: any, affectedObjects: HomogeneousDeclaration[]) => {
//     const splitArray = key.split(", "); //  ", " NOT ","
//     for (let i = 0; i < affectedObjects.length; i++) {
//       if (affectedObjects[i].getManufacturerPartNumber().toString() == splitArray[1].toString()) {
//         let children = affectedObjects[i].getChildren()?.();
//         if (children) {
//           for (let j = 0; j < children.length; j++) {
//             if (children[j].getSpecification() == splitArray[2]) {
//               children[j].setDeclarationId(parseInt(declarationId));
//               break;
//             }
//             else {
//               let childSpecs = children[j].getChildren()?.();
//               if (childSpecs) {
//                 for (let k = 0; k < childSpecs.length; k++) {
//                   if (childSpecs[k].getSpecification() == splitArray[2]) {
//                     childSpecs[k].setDeclarationId(parseInt(declarationId));
//                     break;
//                   }
//                 }
//               }
//             }
//           }
//           break;
//         }
//       }
//     }
//   }

//   public decodeErrorMessages = (existingAffectedObjects: string[], affectedObjects: HomogeneousDeclaration[]) => {
//     existingAffectedObjects.forEach(key => {
//       const splitArray = key.split(", "); //  ", " NOT ","
//       for (let i = 0; i < affectedObjects.length; i++) {
//         if (affectedObjects[i].getManufacturerPartNumber().toString() == splitArray[1]) {
//           affectedObjects[i].setErrorIcon(true);
//           affectedObjects[i].setErrorMsg("This affected object already exists in another declaration with this specification.");
//           // set specification children error as well
//           let specifications = affectedObjects[i].getChildren()();
//           for (let j = 0; j < specifications.length; j++) {
//             if (specifications[j].getSpecification() == splitArray[2]) {
//               specifications[j].setErrorIcon(true);
//               specifications[j].setErrorMsg("This affected object already exists in another declaration with this specification.");
//             }
//           }
//           break;
//         }
//       }
//     });
//   }

//   public checkIfAnyAffectedObjectExistsHavingNullSpecification = (affectedObjects: HomogeneousDeclaration[]) => {
//     let errorExists = false;
//     for (let i = 0; i < affectedObjects.length; i++) {
//       if (!affectedObjects[i].getChildren()) {
//         errorExists = true;
//       }
//     }
//     return errorExists;
//   };

//   public saveDeclaration = async (bundleId: number, description: any, updatedSupplier: string, affectedObjects: HomogeneousDeclaration[], addedBy: string, declarationType: string, tag: string) => {
//     let descriptionUpdated = await this.declarationService.saveDeclarationDescription(bundleId, description, description.supplier != updatedSupplier, updatedSupplier);
//     let affectedObjectsPayload = this.setAffectedObjectsPayload(affectedObjects, addedBy, declarationType, updatedSupplier);
//     let msg = "Declaration saved successfully";
//     let severity: Severity = "confirmation";
//     let existingAffectedObjects = [];
//     let errorList = [];
//     let returnObj = {};

//     if (!this.checkIfAnyAffectedObjectExistsHavingNullSpecification(affectedObjects)) {
//       let affectedObjectsUpdated = await this.declarationService.saveAffectedObjects(affectedObjectsPayload, bundleId) as any;
//       !descriptionUpdated && errorList.unshift("General Information not saved. Please try later");
//       let response = affectedObjectsUpdated.affectedObjects;
//       let existing = affectedObjectsUpdated.alreadyExistingAffectedObjects;
//       if (Array.isArray(response)) {
//         response.forEach(res => {

//           for (const [key, value] of Object.entries(res)) {
//             if (Number.isInteger(value)) {
//               this.setDeclarationId(key, value, affectedObjects);
//             }
//             else if (value == "exists") {
//               existingAffectedObjects.push(key);
//               let existingDeclarationId = this.declarationService.getDeclarationIdOfExistingAffectedObject(key, existing);
//               errorList.push(key + " already exists in declaration " + existingDeclarationId);
//             }
//           }
//         });
//       }
//       else 
//         errorList.push(JSON.parse(response)[0].error);
  
//       let hasErrors = errorList.length > 0;
//       if (hasErrors) {
//         severity = "error";
//         msg = "Issues occurred while saving.";
//         returnObj['serverError'] = errorList;

//         this.decodeErrorMessages(existingAffectedObjects, affectedObjects);
//         existingAffectedObjects = [];
//       }
  
//       if (tag == "Open to Supplier" && !hasErrors)
//         returnObj = await this.declarationService.changeState(affectedObjects, addedBy, bundleId, tag, "", "next");
//       else
//         returnObj['messageArray'] = new Message(severity, msg);        
//     }
//     else
//       returnObj['messageArray'] = new Message("info", "Save failed.", "Please provide specifications for every affected object added.");

//     return returnObj;
//   }

// }