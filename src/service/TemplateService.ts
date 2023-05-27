// import { Config, APIs } from "../json/JsonHandler";
// import ExportService from "../utils/export/ExportService";

// export default class TemplateService {

//     constructor() {}

//     public downloadTemplate = async function(templateId : number, templateName : string) {

//         var templateAPIs = APIs.urls.EGNCMain.Template;
// 		var url = Config.EGNC_backend + templateAPIs.base + templateId + templateAPIs.extensions.download;
//         var response = await ExportService.exportFileGet(url, {}, templateName, "application/octet-stream");

//         return response;
//     }

// }
