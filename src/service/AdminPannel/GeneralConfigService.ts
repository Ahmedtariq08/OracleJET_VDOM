import RestUtil from "../../utils/rest/RestUtil";
import { Config, APIs} from "../../json/JsonHandler";
import { Response } from "../../utils/generic/Response";
import { Cloud } from "../../objects/AdminPanel/GeneralConfig";
import { Message } from "../../utils/generic/Message";

export type yesNo = "yes"|"no"
export class GeneralConfigService{

    private thirdPartyApi = APIs.urls.ThirdPartyAuth;
    private preference = APIs.urls.EGNCMain.Preference;
    private severityMap = new Map<string,yesNo>([["MAJOR", "yes"], ["MINOR", "no"]]);

    private updateMessage = (type: "success"|"error", value: string) => {
        return type == "success" ? new Message("confirmation", `${value} updated successfully.`) :  
            new Message("error", `Unable to update ${value}`);
    }

    public getOracleCloudLink = async () => {
        let url = Config.AUTH_backend + this.thirdPartyApi.base + this.thirdPartyApi.extensions.cloud;
        let response: Cloud = await RestUtil.get(url);
        return response;
    }

    public updateCloudLink = async (cloud: Cloud) => {
        let result = new Response();
        let url = Config.AUTH_backend + this.thirdPartyApi.base + this.thirdPartyApi.extensions.cloud;
        let response = await RestUtil.put(url, cloud);
        if (response == true) {
            result.message = this.updateMessage("success", "Cloud Link");
            result.data = true;
        } else {
            result.message = this.updateMessage("error", "Cloud Link");
            result.error = true;
        }
        return result;
    }

    public getThresholdTolerance = async () => {
        let url = Config.EGNC_backend + this.preference.base + this.preference.extensions.thresholdTolerance;
        let response = await RestUtil.get(url);
        return response as number;
    }

    public updateThresholdTolerance = async (tolerance: number) => {
        let result = new Response();
        let url = Config.EGNC_backend + this.preference.base + this.preference.extensions.thresholdTolerance;
        let response = await RestUtil.put(url,  {value: tolerance});
        if (response == tolerance) {
            result.message = this.updateMessage("success", "Threshold Tolerance");
            result.data = true;
        } else {
            result.message = this.updateMessage("error", "Threshold Tolerance");
            result.error = true;
        }
        return result;
    }

    public getUnknownSubstanceSeverityPrevention = async () => {
        let url = Config.EGNC_backend + this.preference.base + this.preference.extensions.unknownSubstanceSeverity;
        let response = await RestUtil.getTextResponse(url);
        return this.severityMap.get(response);
    }

    public updateUnknownSubstanceSeverityPrevention = async (prevent: yesNo) => {
        let result = new Response();
        let url = Config.EGNC_backend + this.preference.base + this.preference.extensions.unknownSubstanceSeverity;
        let response = await RestUtil.putWithTextResponse(url,  {value: prevent});
        if (response == prevent) {
            let placeholder = prevent == "yes" ? "will" : "will not";
            result.message = new Message("confirmation", `Declaration submission ${placeholder} be prevented on unknown substance presence.`);
            result.data = true;
        } else {
            result.message = new Message("error", "Unable to update value.");
            result.error = true;
        }
        return result;
    }

    public getCompanyName = async () => {
        let url = Config.EGNC_backend + this.preference.base + this.preference.extensions.companyName;
        let response = await RestUtil.getTextResponse(url);
        return response;
    }

    public updateCompanyName = async (companyName: string) => {
        let result = new Response();
        let url = Config.EGNC_backend + this.preference.base + this.preference.extensions.companyName;
        let response = await RestUtil.putWithTextResponse(url,  {value: companyName});
        if (response == companyName) {
            result.message = this.updateMessage("success", "Company Name");
            result.data = true;
        } else {
            result.message = this.updateMessage("error", "Company Name");
            result.error = true;
        }
        return result;
    }

    public getFollowUpDays = async () => {
        let url = Config.EGNC_backend + this.preference.base + this.preference.extensions.followUpDays;
        let response = await RestUtil.getTextResponse(url);
        return response ? parseInt(response) : null;
    }

    public updateFollowUpDays = async (followUp: number) => {
        let result = new Response();
        let url = Config.EGNC_backend + this.preference.base + this.preference.extensions.followUpDays;
        let response = await RestUtil.putWithTextResponse(url,  {value: followUp});
        if (parseInt(response) == followUp) {
            result.message = this.updateMessage("success", "Follow up days");
            result.data = true;
        } else {
            result.message = this.updateMessage("error", "Follow up days");
            result.error = true;
        }
        return result;
    }

    
    
    
   
}