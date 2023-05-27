import RestUtil from "../utils/rest/RestUtil";
import { Config, APIs } from "../json/JsonHandler";
import { Message } from "../utils/generic/Message";
import { Response } from "../utils/generic/Response";

export default class BomService {
    private bomAPIs = APIs.urls.Bom;

    constructor() {}

    public getSmelterReportData = async (itemId : String) => {  
        let result = new Response();
        let url = Config.BOM_backend + this.bomAPIs.base + this.bomAPIs.extensions.getBomSmelter + itemId;
        let response = await RestUtil.get(url);
        if (response.error) {
            result.error = response.error
        } else {
            result.data = response;
        }
        return result;
    }

}