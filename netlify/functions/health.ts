import {
  Handler,
  HandlerEvent,
  HandlerContext,
  HandlerCallback,
} from '@netlify/functions';
import { httpSuccessResponse } from '../../utils/http';

export const handler: Handler = async function (
  event: HandlerEvent,
  context: HandlerContext,
  callback: HandlerCallback
) {
  return httpSuccessResponse();
};
