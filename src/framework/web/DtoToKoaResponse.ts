import { ResponseDto } from "./ResponseDto";
import { ExtendableContext } from "koa";

export default (ctx: ExtendableContext, dto: ResponseDto) => {
  ctx.response.status = dto.statusCode;
  ctx.response.body = dto.body;
};
