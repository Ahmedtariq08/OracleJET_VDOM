import RestUtil from "../../utils/rest/RestUtil";
import { Config, APIs } from "../../json/JsonHandler";
import { Response } from "../../utils/generic/Response";
import { Message } from "../../utils/generic/Message";
import { getUserPermissions, clearUserPermissionsFromStorage } from "./Permissions";
import { DashboardService } from "../DashboardService";
const dashboardService = new DashboardService();

export default class AuthenticationService {

    private RestUtils: RestUtil;
    private ParsedEgncUrl;
    private ParsedAuthUrl;

    constructor() {
        this.RestUtils = new RestUtil();
        this.ParsedEgncUrl = APIs.urls.EGNCMain;
        this.ParsedAuthUrl = APIs.urls.User;      
    }

    public getAssigneeList = async function(supplier: string) {
        var list = [];
        var userAPIs = APIs.urls.User;
        var url =  Config.AUTH_backend + userAPIs.base + userAPIs.extensions.getUsers + "?supplier=" + supplier;
        
        var response = await this.RestUtils.get(url);        
        response.forEach(res => list.push({ value: res.id, label: res.name }));
        return list;
    }

    //Test API call to check authorization
    public isUserSignedIn = async () : Promise<boolean> => {
        let url = Config.AUTH_backend + this.ParsedAuthUrl.base + this.ParsedAuthUrl.extensions.userPermissions;
        let response = await fetch(url, {credentials: "include", method: 'GET',});
        return response.ok;
    }

    //NOTE - This function is used only for app controller, will be removed when refactored
    public getUserPermissions = async () => {
        return await getUserPermissions();
    }

    //NOTE - This function is used in appController userPermissions to set sidebar, will be removed when refactored
    public getSideBarPages = () => {
        return dashboardService.getConveyorBeltCards();
    }

    public logoutUser = async () => {
        let result = new Response();
        let url = Config.AUTH_backend + this.ParsedAuthUrl.base + this.ParsedAuthUrl.extensions.logout;
        let response = await this.RestUtils.postWithTextResponse(url);
        if (response == "Logged Out!") {
            result.data = response;
            clearUserPermissionsFromStorage();
        } else {
            result.message = new Message("error", "Failed to logout");
        }
        return result;
    }

    public loginUser = async (username: string, password: string) => {
        let result = new Response();
        let data = {username: username, password: password};
        let url = Config.AUTH_backend + this.ParsedAuthUrl.base + this.ParsedAuthUrl.extensions.login;
        let response = await this.RestUtils.postWithTextResponse(url, data);
        try {
            var parsedResponse = JSON.parse(response);
            if (parsedResponse && parsedResponse.token) {
                let response = await getUserPermissions(); //Will wait to set permissions
                if (response.data) {
                    result.data = true;
                } else {
                    result.message = new Message("error", `Unable to retrieve permissions for ${username}`)
                }
            }
        } catch {
            result.message = new Message("error", response);
        }
        return result;
    }

    public loginSSO  = async() => {
        let result = new Response();
        let errorMessage = "No Company SSO is configured";
        try {
            const thirdPartyAuth = APIs.urls.ThirdPartyAuth;
            let url = Config.AUTH_backend + thirdPartyAuth.base + thirdPartyAuth.extensions.sso + thirdPartyAuth.extensions.authorize;
            let redirectionUrl = await this.RestUtils.getTextResponse(url);
             location.replace(redirectionUrl);
        }
        catch {
            result.message = new Message("error", errorMessage);
        }
        return result;
    }

    public getUsers = async () => {
        let url = Config.AUTH_backend + this.ParsedAuthUrl.base + this.ParsedAuthUrl.extensions.getUsers;
        let response = await this.RestUtils.get(url);
        const users = response.map((item) => ({ value: item.username, label: item.username }));
        return users;
    }

}
