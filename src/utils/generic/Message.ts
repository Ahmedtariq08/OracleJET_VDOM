export type Severity = "error"|"warning"|"confirmation"|"info"|"none";
export class Message {

  private detail: string;
  private summary: string;
  private timestamp: string;
  private severity: Severity;
  private autoTimeout: number;

  constructor(severity: Severity, summary: string, detail?: string, autoTimeout?: number, timestamp?: string) {
    this.detail = detail;
    this.summary = summary;
    this.severity = severity;
    this.autoTimeout = (severity != "error") ? 5000 : -1;
    this.timestamp = (timestamp) ? timestamp : new Date().toISOString();
  }
}