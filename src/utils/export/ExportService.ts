import * as $ from "jquery";
import FileExportHandler from "./FileExportHandler";

export default class ExportService {
    constructor () {}

    static exportFile = async (url: string, data: object) => {
        await ExportService.exportFileAPI(url, data, "POST");
    }

    static exportFileGet = async (url: string, data: object, fileName?: string, type?: string) => {
        await ExportService.exportFileAPI(url, data, "GET", fileName, type);
    }

    static exportFileAPI = async (url: string, data: object, method: string, fileName?: string, type?: string) => {

      var ajaxReq: any = {};
      ajaxReq.url = url;
      ajaxReq.type = method;
      ajaxReq.dataType = 'text';
      ajaxReq.mimeType = 'text/plain; charset=x-user-defined';
      ajaxReq.headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      };
      if (method == "POST") {
        ajaxReq.data = JSON.stringify(data);
      }
      ajaxReq.success = function (data) {
        FileExportHandler.exportFile(data, fileName, type);
      };
      await $.ajax(ajaxReq);
    }

    static exportFileComponent = async (url: string, method: string, data?: object) => {
      await $.ajax({
        url: url,
        type: method,
        dataType: "text",
        mimeType: "text/plain; charset=x-user-defined",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
        success: function (data) {
          FileExportHandler.exportFile(data);
        },
      });
    };
  
    static exportDomTable = (
      tableId: string,
      fileName: string,
      filetype?: string
    ) => {
      FileExportHandler.exportDomTable(tableId, fileName, filetype);
    };
}