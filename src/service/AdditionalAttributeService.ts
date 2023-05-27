// import RestUtil from "../utils/rest/RestUtil";
// import ArrayDataProvider = require('ojs/ojarraydataprovider');
// import { Config, APIs, Constants, reorderColumnData, addFieldsData } from "../json/JsonHandler";
// const odd = "odd_attr";
// const even = "even_attr"
// export default class AdditionalAttributeService {

//   constructor() { }
//   restUtil = new RestUtil();
//   additionalAttributeDataProvider = new ArrayDataProvider([], { idAttribute: "id" });

//   public getAttributeMapping = async function (category: string, category_label: string, data: any) {
//     var count = 0;
//     if (!reorderColumnData[category_label].isAdditionalAttributesMapped) {
//       var preferenceAPIs = APIs.urls.EGNCMain.Preference;
//       var url = Config.EGNC_backend + preferenceAPIs.base + preferenceAPIs.extensions.attributeMapping + category;
//       var response = await this.restUtil.get(url);

//       try {
//         Object.keys(response).forEach(function (key) {
//           count++;
//           if (response[key].name) {
//             var attributesArray = new Object();
//             attributesArray['Id'] = key;
//             attributesArray['Object'] = category_label;
//             attributesArray['Name'] = response[key].name;
//             attributesArray['wfid'] = response[key].wfid;
//             attributesArray['type'] = response[key]. type;
//             attributesArray['readonly'] = response[key].readonly;
//             if (response[key].possibleValues) {
//               attributesArray['selection'] = 'SINGLE';
//               if(!response[key].required)
//                   response[key].possibleValues.unshift("");
//               attributesArray['possibleValues'] = response[key].possibleValues;
//             }
//             addFieldsData[category_label].push(attributesArray);
//             reorderColumnData[category_label].AllColumns.push(attributesArray);
//             reorderColumnData[category_label].columnsToBeAdded.push(attributesArray);
//             reorderColumnData[category_label].isAdditionalAttributesMapped = true;
//           }
//         });
//         addFieldsData[category_label].attrCount = count;
//       } 
//       catch (err) { }
//     }
//     addFieldsData[category_label].additionalAttributes = mappingAttributes(data, addFieldsData[category_label]);
//     return new ArrayDataProvider(addFieldsData[category_label].additionalAttributes, { keyAttributes: "value" });
//   };

//   public AttributeConstructor = function (index, general_attr_array, attr_pos, id, name, value, type, readonly, originalValue, possibleValues, selection, required, onclick, min, disabled, isWriteable, mass, massMeasure, wfid, badgeType?) {
//     var obj = { Id: id, Name: name, Value: value, type: type, readonly: readonly, originalValue: originalValue, possibleValues: possibleValues, selection: selection, required: required, onclick: onclick, min: min, disabled: disabled, isWriteable: isWriteable, mass: mass, massMeasure: massMeasure, wfid: wfid, badgeType: badgeType };
//     !general_attr_array[index] && (general_attr_array[index] = {});
//     general_attr_array[index][attr_pos] = obj;
//     return general_attr_array;
//   };

//   public getValueOfAttributes = function(id, attribute, dataProvider: ko.Observable) {
//     var attrs;
//     attrs = dataProvider().data;
//     for (var i = 0; i < attrs.length; i++) {
//       if (attrs[i].odd_attr.Id == id) {
//         return attrs[i].odd_attr[attribute];
//       }
//       else if (attrs[i].even_attr && attrs[i].even_attr.Id == id) {
//         return attrs[i].even_attr[attribute];
//       }
//     }
//   };

//   public setValueOfAttributes = function(id, attribute, newValue, dataProvider: ko.Observable) {
//     var attrs;
//     attrs = dataProvider().data;
//     for (var i = 0; i < attrs.length; i++) {
//       if (attrs[i].odd_attr.Id == id) {
//         attrs[i].odd_attr[attribute] = newValue;
//         break;
//       }
//       else if (attrs[i].even_attr && attrs[i].even_attr.Id == id) {
//         attrs[i].even_attr[attribute] = newValue;
//         break;
//       }
//     }
//     dataProvider(new ArrayDataProvider(attrs)); 
//   };

//   public removeAttributeByName = (dataProvider, name: string) => {
//     let result;
//     if (dataProvider.data && Array.isArray(dataProvider.data)){
//       try {
//         let allAttributes: any[] = [];
//         dataProvider.data.forEach(attr => {
//           if (attr[odd]) {
//             allAttributes.push(attr[odd]);
//           } 
//           if (attr[even]) {
//             allAttributes.push(attr[even])
//           }
//         });
//         let filteredAttrs = allAttributes.filter(obj => obj?.Name !== name);
//         let orderedAttrs = loadGeneralAttributes(filteredAttrs);
//         result = new ArrayDataProvider(orderedAttrs);
//       } catch (error) {
//         result = dataProvider
//       }
//     } else {
//       result = dataProvider
//     }
//     return result;
//   }

// }

// function mappingAttributes(data: any, category_addfields_data: string) {
//   var attrArray = [];
//   var oddAttrFilled = 0;
//   var attrCurrentCount = 0;
//   var obj = new Object();
//   Object.assign(data, getAttributeLabel(data, Constants.ATTRIBUTE1, data.attribute1, category_addfields_data, attrArray, oddAttrFilled, attrCurrentCount, obj));
//   Object.assign(data, getAttributeLabel(data, Constants.ATTRIBUTE2, data.attribute2, category_addfields_data, data.attrArray, data.oddAttrFilled, data.attrCurrentCount, data.obj));
//   Object.assign(data, getAttributeLabel(data, Constants.ATTRIBUTE3, data.attribute3, category_addfields_data, data.attrArray, data.oddAttrFilled, data.attrCurrentCount, data.obj));
//   Object.assign(data, getAttributeLabel(data, Constants.ATTRIBUTE4, data.attribute4, category_addfields_data, data.attrArray, data.oddAttrFilled, data.attrCurrentCount, data.obj));
//   Object.assign(data, getAttributeLabel(data, Constants.ATTRIBUTE5, data.attribute5, category_addfields_data, data.attrArray, data.oddAttrFilled, data.attrCurrentCount, data.obj));
//   Object.assign(data, getAttributeLabel(data, Constants.ATTRIBUTE6, data.attribute6, category_addfields_data, data.attrArray, data.oddAttrFilled, data.attrCurrentCount, data.obj));
//   return attrArray;
// }

// function getAttributeLabel(data: any, attribute_label: string, attribute_value: string, category_addfields_data: any, attrArray: any[], oddAttrFilled: number, attrCurrentCount: number, obj: any) {
//   var is_found = false;
//   var data = { ...data };
//   var returnObj = new Object();
//   for (var i = category_addfields_data.length - 1; i >= 0; i--) {
//     if (category_addfields_data[i].Id === attribute_label) {
//       data[attribute_label] = category_addfields_data[i];
//       data[attribute_label].Value = attribute_value;
//       data[attribute_label].wfid = data[attribute_label].wfid;
//       var arr = [];
//       is_found = true;
//       var possibleValues = data[attribute_label].possibleValues;
//       if (possibleValues) {
//         if (possibleValues.length !== undefined) {
//           for (var j = 0; j < possibleValues.length; j++) {
//             arr.push({ value: possibleValues[j], label: possibleValues[j] });
//           }
//         }
//         else {
//           for (var j = 0; j < possibleValues.data.length; j++) {
//             arr.push(possibleValues.data[j]);
//           }
//         }
//         data[attribute_label].possibleValues = new ArrayDataProvider(arr, { keyAttributes: "value" });
//       }
//     }
//     if (is_found === true) {
//       var returnObj = new Object(pushToAttributesArray(data, attribute_label, attrArray, oddAttrFilled, attrCurrentCount, obj, category_addfields_data.attrCount));
//       return returnObj;
//     }
//   }
//   return returnObj;
// }

// function pushToAttributesArray(data: any, attribute_label: string, attrArray: any[], oddAttrFilled: number, attrCurrentCount: number, obj: any, totalAttrCount: number) {
//   if (data[attribute_label] !== null) {
//     var attr = { Id: attribute_label, Name: data[attribute_label].Name, Value: data[attribute_label].Value, possibleValues: data[attribute_label].possibleValues, type: data[attribute_label].type, readonly: data[attribute_label].readonly, wfid: data[attribute_label].wfid, originalValue: data[attribute_label].Value, selection: "SINGLE", required: false };
//     if (oddAttrFilled == 0) {
//       obj.odd_attr = attr;
//       oddAttrFilled++;
//       if (totalAttrCount-1 === attrCurrentCount) {
//         attrArray.push(obj);   
//       }
//     }
//     else {
//       obj.even_attr = attr;
//       oddAttrFilled = 0;     // reset
//       attrArray.push(obj);
//       obj = new Object();
//     }
//     attrCurrentCount++;
//   }
//   data.obj = obj;
//   data.attrArray = attrArray;
//   data.oddAttrFilled = oddAttrFilled;
//   data.attrCurrentCount = attrCurrentCount;
//   // return { attrArray, oddAttrFilled, attrCurrentCount, obj };
//   return data;
// }

// export type InfoAttribute = {
//   Id: string, 
//   Name: string, 
//   Value: any, 
//   type: string, 
//   readonly: boolean, 
//   originalValue: any, 
//   possibleValues?: any, 
//   selection?: any, 
//   required?: boolean, 
//   onclick?: any, 
//   min?: number, 
//   disabled?: any, 
//   isWriteable?: any, 
//   mass?: any, 
//   massMeasure?: any, 
//   wfid?: any, 
//   badgeType?: any
// }

// /* Provide Array in sequence of display */
// export const loadGeneralAttributes = (attributes: InfoAttribute[]) => {
//   let generalAttrs = [];
//   for ( let i = 0; i < attributes.length; i += 2){
//       let oddAttr = attributes[i];
//       let evenAttr = attributes[i + 1];
//       let map = new Map();
//       if (oddAttr) { map.set(odd, oddAttr)};
//       if (evenAttr) { map.set(even, evenAttr)};
//       generalAttrs.push(Object.fromEntries(map));
//   }
//   return generalAttrs;
// }



