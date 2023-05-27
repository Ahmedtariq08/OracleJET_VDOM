import RestUtil from "../utils/rest/RestUtil";
import { Config, APIs } from "../json/JsonHandler";

export default class WorkflowService {

    public getTemplatesOfWorkflow = async function(workflowId: number, validationType: string) {
        var templates: any[] = [];
        var workflowAPIs = APIs.urls.EGNCMain.Workflow;
		var url = Config.EGNC_backend + workflowAPIs.base + workflowId + workflowAPIs.extensions.template + "?validationType=" + validationType;
        var response = await RestUtil.get(url);
        response.forEach((res: { templateName: any; id: any; }) => templates.push({ label: res.templateName, value: res.id }));
        response.length == 0 && templates.push({ label: "No templates defined", value: -1 });
        return templates;
    }

    public getDeclarationTypes = async function(fetchEnabledOnly : boolean = true) {
        var declarations: any[] = [];
        var workflowAPIs = APIs.urls.EGNCMain.Workflow;
		var url = Config.EGNC_backend + workflowAPIs.base + (fetchEnabledOnly? "": "?fetchEnabledOnly=" + fetchEnabledOnly);
        var response = await RestUtil.get(url);
        response.forEach((res: { name: any; id: any; }) => declarations.push({ label: res.name, value: res.id }));
        return declarations;
    }

    public getDeclarationTypesWithSpecSupported = async function() {
        var declarations: any[] = [];
        var workflowAPIs = APIs.urls.EGNCMain.Workflow;
		var url = Config.EGNC_backend + workflowAPIs.base + '?id=';
        var response = await RestUtil.get(url);
        response.forEach((res: { name: any; id: any; specSupported: any; }) => declarations.push({ label: res.name, value: { id: res.id, specSupported: res.specSupported }}));
        return declarations;
    }

    public getValidationTypes = async function() {
        var validationStates: any[] = [];
        var workflowAPIs = APIs.urls.EGNCMain.Workflow;
		var url = Config.EGNC_backend + workflowAPIs.base + workflowAPIs.extensions.validationTypes;
        var response = await RestUtil.get(url);
        response.forEach((res: { validationType: any; id: any; }) => validationStates.push({ label: res.validationType, value: res.id }));
        return validationStates;
    }

    public getWorkflowStates = async function(workflowStateType?: string | undefined) {
        var workflowStates: any[] = [];
        var workflowAPIs = APIs.urls.EGNCMain.Workflow;
		var url = Config.EGNC_backend + workflowAPIs.base + workflowAPIs.extensions.stateTypes;
        workflowStateType && (url += '?workflowStateType=' + workflowStateType);
        var response = await RestUtil.get(url);
        response.forEach((stateType: { name: any; }) => workflowStates.push({ label: stateType.name, value: stateType.name }))
        return workflowStates;
    }
}
