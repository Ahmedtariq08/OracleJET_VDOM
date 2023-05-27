import { APIs, Config } from "../../json/JsonHandler";
import { AttributeObject, MappedAttribute } from "../../objects/AdminPanel/AttributeMapping";
import { Response } from "../../utils/generic/Response";
import RestUtil from "../../utils/rest/RestUtil";
const attributeMappingAPIs = APIs.urls.EGNCMain.Preference;

export default class AttributeMappingService {

    /*Creates mapping array to be shown, sets boolean values undefined if name is not present in attribute*/
    private mapAttributeObjectToArray = (attributeObject: AttributeObject) : MappedAttribute[] => {
        let mappedArray: MappedAttribute[] = [];
        for (const [key, value] of Object.entries(attributeObject)){
            let obj: MappedAttribute = {...value, attributeName: key};
            if (!obj.name) {
                obj.readonly = undefined;
                obj.required = undefined
            }
            mappedArray.push(obj);
        } 
        return mappedArray;
    }

    public getAttributeMapping = async(entity: string) => {
        let result = new Response();
        try {
            let url = Config.EGNC_backend + attributeMappingAPIs.base + attributeMappingAPIs.extensions.attributeMapping + entity;
            let response = await RestUtil.get(url);
            if (response.error) {
                result.error = response.error;
            } else {
                let mappedAttributes = this.mapAttributeObjectToArray(new AttributeObject(response));
                result.data = mappedAttributes as MappedAttribute[];
            }
        } catch (error) {
            result.data = this.mapAttributeObjectToArray(new AttributeObject({}));
        }
        return result;
    }
}