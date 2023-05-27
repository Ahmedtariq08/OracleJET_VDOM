// import RestUtil from "../../utils/rest/RestUtil";
// import { Config, APIs } from "../../json/JsonHandler";
// import { Response } from "../../utils/generic/Response";
// import { Message } from "../../utils/generic/Message";
// import { isValidUrl } from "../../utils/generic/Generic";
// const restUtils = new RestUtil();
// const extensions = APIs.urls.Attachments.extensions;

// export type Attachment = {
//     fileUUID: string,
//     fileName: string, 
//     fileType: string, 
//     fileExtension?: string,
// }

// type acceptedFileTypes = "IMPORT_FILE"|"OTHER_FILE"|"CERTIFICATE_OF_COMPLIANCE"
// type acceptedApiSelections = "COMPOSITION"|"DECLARATION"

// export class AttachmentService {
//     private BaseUrl: string;
//     private FileType: acceptedFileTypes;
//     private DownloadUrl: string;
//     private UploadUrl: string;
//     private LoadUrl: string;
//     private DeleteUrl: string;
    
//     constructor(fileType: acceptedFileTypes, apiSelection: acceptedApiSelections) {
//         this.BaseUrl = Config.ATTACHMENT_backend + APIs.urls.Attachments.base;
//         this.FileType = fileType;
//         if (apiSelection == "COMPOSITION") {
//             this.LoadUrl = this.BaseUrl;
//             this.DownloadUrl = this.BaseUrl + extensions.download;
//             this.UploadUrl = this.BaseUrl;
//             this.DeleteUrl = this.BaseUrl;
//         } else {
//             this.LoadUrl = this.BaseUrl + extensions.declaration;
//             this.DownloadUrl = this.BaseUrl + extensions.download;
//             this.UploadUrl = this.BaseUrl + extensions.declaration;
//             this.DeleteUrl = this.BaseUrl + + extensions.declaration;
//         }
//     }

//     public getFileTypes = async () => {
//         var url = this.BaseUrl + extensions.types;
//         var response: string[] = await restUtils.get(url);
//         return response;
//     }

//     //Pass bundleId/AffectedObjectId
//     public loadAttachments = async (id: string) : Promise<Response> => {
//         let result = new Response();
//         var url = `${this.LoadUrl}/${id}`
//         var response = await restUtils.get(url);
//         if (response) {
//             result.data = response as Attachment[];
//         }
//         return result;
//     };

//     public downloadAttachment = async (attachment: Attachment) : Promise<Response> => {
//         let result = new Response(); 
//         const errorMessage = new Message("error", "Unable to download file."); 
//         var url =`${this.DownloadUrl}/${attachment.fileUUID}`
//         var S3uRL: string = await restUtils.getTextResponse(url);
//         if (S3uRL && isValidUrl(S3uRL)) {
//             //Check if file can be downloaded
//             try {
//                 let fetchResponse  = await fetch(S3uRL, {method: "GET", redirect: 'follow'});
//                 if (fetchResponse.ok) {
//                     window.open(S3uRL as string, "_blank"); 
//                 } else if (fetchResponse.status == 403) {
//                     result.message = new Message("error", "Access Denied.")
//                 } else {
//                     result.message = errorMessage;
//                 }
//             } catch (e) {
//                 result.message = errorMessage
//             }
//         } else {
//             result.message = errorMessage
//         }
//         return result;
//     }

//     //Pass bundleId/AffectedObjectId
//     public deleteAttachment = async (attachment: Attachment, id: string) : Promise<Response> => {
//         let result = new Response();
//         var url = `${this.DeleteUrl}/${id}/${attachment.fileUUID}?extension=${attachment.fileExtension}`
//         let response = await restUtils.deleteWithTextResponse(url);
//         if (response) {
//             result.data = response;
//             result.message = new Message("confirmation", "Attachment deleted successfully.");
//         } else {
//             result.error = true;
//             result.message = new Message("error", "Unable to delete attachment.");
//         }
//         return result;
//     }

//     //Pass bundleId/AffectedObjectId
//     public uploadAttachmentListener = (files: FileList, id: string, setMessages: (messages: Message[]) => void) => {
//         Array.prototype.map.call(files, (file: File) => {
//           // send file to backend
//           var data = new FormData();
//           var fileType = this.FileType;
//           var regexToExtractExtension = /(?:\.([^.]+))?$/;
//           var extension = regexToExtractExtension.exec(file.name)[1];
//           data.append('file', file);
//           data.append('fileName', file.name);
//           data.append('fileExtension', extension);
//           data.append('fileType', fileType);
         
//           // Create XMLHttpRequest and open it to the endpoint you want to upload.
//           var request = new XMLHttpRequest();
//           let url = `${this.UploadUrl}/${id}`;
//           request.open("POST", url, true);
//           request.withCredentials = true;
//           request.onload = function (event) {
//             switch (request.status) {
//                 case 201:
//                     setMessages([new Message("confirmation", "File uploaded successfully.")]);
//                     break;
//                 case 401:
//                     setMessages([new Message("error", "Session expired.")]);
//                     break;
//                 case 403:
//                     setMessages([new Message("error", "You do not have access, please contact admin.")]);
//                     break;
//                 default:
//                     setMessages([new Message("error", "Upload failed.")]);
//                     break;
//             }
//           };
    
//           request.upload.addEventListener("progress", function (evt) {
//             //To track the file progress from your console
//             if (evt.lengthComputable) {
//               var percentComplete = Math.round((evt.loaded / evt.total) * 100);
//               if (percentComplete <= 10) {
//                 setMessages([new Message("info", "Uploading your file...")]);
//               }
//             }
//           }, false);
    
//           request.onerror = function () {
//             setMessages([new Message("error", "Upload failed.")]);
//           };
//           request.send(data);
//           return file.name;
//         });
//     }
  

// }