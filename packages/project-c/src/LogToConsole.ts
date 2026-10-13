import { Logger } from "./Logger";

export class LogToConsole implements Logger {
  public log(message: string): void {
    console.log(message);
  }
}
