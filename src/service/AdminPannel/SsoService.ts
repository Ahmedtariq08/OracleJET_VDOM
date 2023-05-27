import RestUtil from "../../utils/rest/RestUtil";
import { Config, APIs} from "../../json/JsonHandler";
import { Response } from "../../utils/generic/Response";
import { SSO } from "../../objects/AdminPanel/SSO";
import { Message } from "../../utils/generic/Message";

export class SsoService {
    private thirdPartyApis = APIs.urls.ThirdPartyAuth;

    public getSSO = async() => {
        let url = Config.AUTH_backend + this.thirdPartyApis.base + this.thirdPartyApis.extensions.sso;
        let response = await RestUtil.get(url);
        return response as SSO;
    }

    public updateSSO = async (sso: SSO) => {
        let result = new Response();
        let url = Config.AUTH_backend + this.thirdPartyApis.base + this.thirdPartyApis.extensions.sso;
        let response = await RestUtil.putWithTextResponse(url, sso);
        if (response == "true"){
            result.data = true;
            result.message = new Message("confirmation", "Single Sign-On updated successfully.");
        } else {
            result.message = new Message("error", "Unable to update Single Sign-On.");
            result.error = true;
        }
        return result;
    }
}