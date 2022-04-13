export class ResponseDto {
  public readonly statusCode: number;
  public readonly body: object;

  constructor(statusCode: number, body: object = {}) {
    this.statusCode = statusCode;
    this.body = body;
  }
}
