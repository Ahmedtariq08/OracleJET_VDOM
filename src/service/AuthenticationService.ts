import RestUtil from "../utils/rest/RestUtil";
import { Config, APIs } from "../json/JsonHandler";
import { Response } from "../utils/generic/Response";
import { Message } from "../utils/generic/Message";
const ParsedEgncUrl = APIs.urls.EGNCMain;
const ParsedAuthUrl = APIs.urls.User; 

export default class AuthenticationService {

    public getAssigneeList = async function(supplier: string) {
        var list: {value: any, label: any}[] = [];
        var userAPIs = APIs.urls.User;
        var url =  Config.AUTH_backend + userAPIs.base + userAPIs.extensions.getUsers + "?supplier=" + supplier;
        var response = await RestUtil.get(url);        
        response.forEach(res => list.push({ value: res.id, label: res.name }));
        return list;
    }

    //Test API call to check authorization
    public isUserSignedIn = async (userId = 1) => {
        let result = new Response();
        let url = Config.EGNC_backend + ParsedEgncUrl.Favourite.base + "?userId=" + userId + "&page=" + 0 + "&size=" + 30;
        let response = await fetch(url, {credentials: "include", method: 'GET',});
        if (response.status == 401) {
            // result.message = new Message("error", "Session expired.");
        } else if (response.status == 200) {
            result.data = "Authentication Successful.";
        }
        return result;
    }

    public getUserPermissions = async () => {
        let result = new Response();
        let url = Config.AUTH_backend + ParsedAuthUrl.base + ParsedAuthUrl.extensions.userPermissions;
        let response = await fetch(url, {credentials: "include", method: 'GET',});
        if (response.ok) {
            result.data = await response.json();
        } if (response.status == 401) {
            result.message = new Message("error", "Unauthorized User");
        } else {
            result.message = new Message("error", "Unable to access resource");
        }
        return result;
    }
    
    public logoutUser = async () => {
        let result = new Response();
        let url = Config.AUTH_backend + ParsedAuthUrl.base + ParsedAuthUrl.extensions.logout;
        let response = await RestUtil.postWithTextResponse(url);
        if (response == "Logged Out!") {
            result.data = response;
        } else {
            result.message = new Message("error", "Failed to logout");
        }
        return result;
    }

    public loginUser = async (username, password) => {
        let result = new Response();
        let data = {username: username, password: password};
        let url = Config.AUTH_backend + ParsedAuthUrl.base + ParsedAuthUrl.extensions.login;
        let response = await RestUtil.postWithTextResponse(url, data);
        try {
            var parsedResponse = JSON.parse(response);
            if (parsedResponse && parsedResponse.token) {
                result.data = true;
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
            let redirectionUrl = await RestUtil.getTextResponse(url);
             location.replace(redirectionUrl);
        }
        catch {
            result.message = new Message("error", errorMessage);
        }
        return result;
    }

    public getUsers = async () => {
        let url = Config.AUTH_backend + ParsedAuthUrl.base + ParsedAuthUrl.extensions.getUsers;
        let response = await RestUtil.get(url);
        const users = response.map((item) => ({ value: item.username, label: item.username }));
        return users;
    }

}
