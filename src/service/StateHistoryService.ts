import RestUtil from "../utils/rest/RestUtil";
import StateHistory from "../objects/StateHistory";
import { Config, APIs } from "../json/JsonHandler";
import { DateTimeUtil } from "../utils/generic/DateTimeUtil";

export default class StateHistoryService {
    public getStateHistory = async function(bundleId : number) {

        var history: StateHistory[] = [];
        var StateHistoryAPIs = APIs.urls.EGNCMain.StateHistory;
		var url = Config.EGNC_backend + StateHistoryAPIs.base + '?id=' + bundleId;
        var response = await RestUtil.get(url);
        
        response.forEach((res: { comments: string; modifyBy: string; modifyDate: any; workflowStateName: number; }) => 
            history.push(new StateHistory(res.comments, res.modifyBy, DateTimeUtil.dateFormatter(res.modifyDate), res.workflowStateName))
        );
        return history;
    }

}
