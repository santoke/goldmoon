import { Constructable, Container } from "typedi";

export function Logger() {
  return function (object: Constructable<never>, propertyName: string, index?: number) {
    const logger = new ConsoleLogger();
    Container.registerHandler({ object, propertyName, index, value: () => logger });
  };
}

export interface LoggerInterface {
  info(message: string): void;
  warning(message: string): void;
  error(message: string): void;
}

export class ConsoleLogger implements LoggerInterface {
  error(message: string): void {
    console.log(`Error, ${message}`);
  }

  info(message: string): void {
    console.log(`Info, ${message}`);
  }

  warning(message: string): void {
    console.log(`Warning, ${message}`);
  }
}
