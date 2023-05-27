import RestUtil from "../utils/rest/RestUtil";
import { Config, APIs } from "../json/JsonHandler";

export default class QuestionService {

    public getQuestions = async function(workflowId : number) {
        var QuestionAPIs = APIs.urls.EGNCMain.Question;
		var url = Config.EGNC_backend + QuestionAPIs.base + workflowId + '?version=6.22';
        var response = await RestUtil.get(url);
        return response;
    }

}
