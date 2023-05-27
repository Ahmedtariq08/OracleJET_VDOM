import { Message } from "./Message";
export class Response {
    public static Server_Error: string = "Internal Server Error.";
    public data: Object;
    public error: Object;
    public message: Message;
  }