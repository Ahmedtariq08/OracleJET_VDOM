// import { Config, APIs } from "../json/JsonHandler";
// import { Message } from "../utils/generic/Message";

// export default class ImportFileService {

//   constructor() { }

//   public uploadFile = (url: string, data: any) => {
  
//     var request = new XMLHttpRequest();
//     return new Promise(resolve => {
//       request.open("POST", url, true);
//       request.withCredentials = true;
      
//       request.onload = () => resolve({
//         status: request.status,
//         response: request.responseText
//       });

//       request.onerror = () => resolve({
//         status: request.status,
//         response: request.responseText,
//       });

//       request.send(data);
//     });
//   };
  
//   public importFile = async (file: File, isUploadOnBundle: boolean, payload: any) => {

//     var fileAPIs = APIs.urls.EGNCMain.File;
//     var url = Config.EGNC_backend + fileAPIs.base;
//     var regexToExtractExtension = /(?:\.([^.]+))?$/;
//     var extension = regexToExtractExtension.exec(file.name)[1].toLowerCase();
// 		isUploadOnBundle && ( url += fileAPIs.extensions.bundle);
// 		url += extension;

//     let request = (await this.uploadFile(url, payload)) as any;
//     if (request.status == 200) {
//       request.message = new Message("confirmation", "File loaded successfully.");
//       // call backend function
//       if (request.response) {
//         request.response = JSON.parse(request.response);
//       }
//       else
//         request.message = new Message("error", "File parsing failed.");
//     }
//     else if (request.status == 401)
//       request.message = new Message("error", "Session expired.");
//     else if (request.status == 403)
//       request.message = new Message("error", "You do not have access, please contact admin.");
//     return request;
//   }
// }