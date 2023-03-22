export enum MessageType {
  ROUTE = "ROUTE",
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
}

export interface PostMessage {
  type: MessageType;
  message: string;
}
