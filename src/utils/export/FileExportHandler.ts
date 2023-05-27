import { write, utils, writeFile } from "xlsx";
export default class FileExportHandler {

  static exportFile = (
    data: string,
    downloadFileName: string = "report.zip",
    type: string = "application/zip"
  ) => {
    let newContent = "";
    for (let i = 0; i < data.length; i++) {
      newContent += String.fromCharCode(data.charCodeAt(i) & 0xff);
    }
    let bytes = new Uint8Array(newContent.length);
    for (let i = 0; i < newContent.length; i++) {
      bytes[i] = newContent.charCodeAt(i);
    }
    let blob = new Blob([bytes], { type: type });
    let a = document.createElement("a");
    document.body.appendChild(a);
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = downloadFileName;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  };

  static exportDomTable = (
    tableId: string,
    fileName: string,
    filetype?: string
  ) => {
    var dl;
    var fn;
    var type = filetype ? filetype : "xlsx";
    var elt = document.getElementById(tableId);
    var wb = utils.table_to_book(elt);
    return dl
      ? write(wb, {
          // bookType: type,
          bookType: "xlsx",
          bookSST: true,
          type: "base64",
        })
      : writeFile(wb, fn || fileName + "." + (type || "xlsx"));
  };
}
