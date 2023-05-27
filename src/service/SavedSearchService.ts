import RestUtil from "../utils/rest/RestUtil";
import { Config, APIs } from "../json/JsonHandler";
import { Response } from "../utils/generic/Response";
import { Message } from "../utils/generic/Message";
const savedSearchAPIs = APIs.urls.EGNCMain.Preference;

export default class SavedSearchService {
    
    public saveSearch = async (data) => {
        let url = Config.EGNC_backend + savedSearchAPIs.base;
        let result = new Response();
        try {
            let response = await RestUtil.postWithTextResponse(url, data);
            if (parseInt(response) !== -1) {
            result.message = new Message("confirmation", "Search saved Successfully.");
            result.data = parseInt(response);
            } else {
                result.message = new Message("error", "Save Search Failed.", response);
            }
        } catch (error) {
            result.message = new Message("error", Response.Server_Error);
        }
        return result;
    }

    public getAllSavedSearches = async (userId, entity) => {
        let url = Config.EGNC_backend + savedSearchAPIs.base + savedSearchAPIs.extensions.getUserSearches 
            + "?userId=" + userId + "&entity=" + entity;
        let result = new Response();
        try {
            let response = await RestUtil.get(url);
            let searchArr = (response.searches) ? response.searches.map(search => (
                {id: search.id, label: search.search_name, system_search: search.system_search})) : undefined;
            let defaultSearch = (response.default.length > 0) ? response.default[0] : undefined; 
            result.data = { searchArray: searchArr, defaultSearch: defaultSearch};
        } catch (error) {
            result.message = new Message("error", Response.Server_Error);
        }
        return result;
    }

    public deleteSavedSearch = async (deleteId) => {
        let url = Config.EGNC_backend + savedSearchAPIs.base + deleteId;
        let result = new Response();
        try {
            let response = await RestUtil.deleteWithTextResponse(url);
            if (response === "Preference delete successfully!") {
                result.data = response;
                result.message = new Message("confirmation", "Saved Search deleted successfully.");
            } else {
                result.message = new Message("error", "Saved Search deletion Failed.", response);
            }
        } catch (error) {
            result.message = new Message("error", Response.Server_Error);
        }
        return result;
    }

    public setAsSystemSearch = async (search_id, tag: "set" | "unset", userId, entity) => {
        let isSet: boolean = tag === "set";
        let result: Response = new Response();
        let url = Config.EGNC_backend + savedSearchAPIs.base + savedSearchAPIs.extensions.system + "?userId=" + userId + "&entity=" + entity;
        url = (isSet) ? url.concat("&setValue=" + search_id) : url.concat("&id=" + search_id);
        let responseMessage = (isSet) ? "Default/System search updated" : "default/system search delete successfully!";
        let successMessage = `System Search ${tag} successfully.`
        let failedMessage = `System Search ${tag} failed.`;
        let response = await (isSet ? RestUtil.postWithTextResponse(url): RestUtil.deleteWithTextResponse(url));
        if (response == responseMessage) {
            result.message = new Message("confirmation", successMessage);
            result.data = response;
        } else {
            result.message = new Message("error", failedMessage, response);
        }
        return result;
    }

    public setSearchAsDefault = async (search_id, tag: "set" | "unset", userId, entity) => {
        let isSet: boolean = tag === "set";
        let result: Response = new Response();
        let url = Config.EGNC_backend + savedSearchAPIs.base + savedSearchAPIs.extensions.default + "?userId=" + userId + "&entity=" + entity;
        url = (isSet) ? url.concat("&setValue=" + search_id) : url;
        let responseMessage = (isSet) ? "Default search updated" : "Default search delete successfully!";
        let successMessage = `Default Search ${tag} successfully.`
        let failedMessage = `Default Search ${tag} failed.`;
        let response = await (isSet ? RestUtil.postWithTextResponse(url) : RestUtil.deleteWithTextResponse(url));
        if (response == responseMessage) {
            result.message = new Message("confirmation", successMessage);
            result.data = response;
        } else {
            result.message = new Message("error", failedMessage, response);
        }
        return result;
    }

    public updateSavedSearchName = async (updateId, searchName) => {
        let url = Config.EGNC_backend + savedSearchAPIs.base + updateId + "?searchName=" + searchName;
        let result: Response = new Response();
        let response = await RestUtil.putWithTextResponse(url);
        if (response === "Preference updated successfully!"){
            result.message = new Message("confirmation", "Settings updated successfully.");
            result.data = response;
        } else {
            result.message = new Message("error", "Settings updation Failed.");
        }
        return result;
    }
}