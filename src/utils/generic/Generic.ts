/* Generic functions to be used across application */

export const areObjectsEqual = (obj1, obj2) =>
  Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every(key => obj1[key] === obj2[key]);

export const removeFunctionsFromObject = (object: Object) => {
  let descriptorObj: Object = Object.getOwnPropertyDescriptors(object);
  let outputMap: Map<string, any> = new Map();
  for (const [key, value] of Object.entries(descriptorObj)){
    if (value.hasOwnProperty('value') && typeof value['value'] !== "function"){
      outputMap.set(key, object[key]); 
    }
  }
  return Object.fromEntries(outputMap);
}

export const objectHasAllPropertiesOfClass = (object: Object, yourClass: any) => {
  const classWithOnlyProperties = removeFunctionsFromObject(new yourClass());
  return Object.keys(classWithOnlyProperties).every((key) => object[key] !== undefined)
}

export const ignoreAllCharacters = (event) => {
  let charCode = event.which ? event.which : event.keyCode;
  let char = String.fromCharCode(charCode);
  let replacedValue = char.replace(/[^]/g, "");
  if (char !== replacedValue) {
    event.preventDefault();
  }
};

export const eatNonNumbers = (event) => {
  let charCode = event.which ? event.which : event.keyCode;
  let char = String.fromCharCode(charCode);
  // Only allow "+0123456789" (and non-display characters)
  let replacedValue = char.replace(/[^0-9\+]/g, "");
  if (char !== replacedValue) {
    event.preventDefault();
  }
};

export const createColumnMappingForExport = (columns) => {
  return columns.reduce((columnMapping, column) => {
    columnMapping[column.Id] = column.Name ?? column.headerText;
    return columnMapping;
  }, {});
};

export const getYesNoString = (attr: boolean) => {
	if (typeof attr == "boolean") {
		return attr == true ? "Yes" : "No";
	} else {
		return ""
	}
}

export const isValidUrl = (urlString: string) => {
  try { 
    return Boolean(new URL(urlString)); 
  }
  catch(e){ 
    return false; 
  }
}