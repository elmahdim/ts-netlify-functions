export enum HttpStatusCode {
  BadRequest = 400,
  MethodNotAllowed = 405,
  OK = 200,
}

export enum HttpMethods {
  POST = 'POST',
  GET = 'GET',
}

const response = (body: Record<string, unknown>, statusCode: number) => ({
  statusCode,
  body: JSON.stringify(body),
});

export function httpErrorResponse(
  payload = {},
  statusCode = HttpStatusCode.BadRequest
) {
  return response({ error: { ...payload } }, statusCode);
}

export function httpSuccessResponse(
  payload = {},
  statusCode = HttpStatusCode.OK
) {
  return response({ data: { status: 'OK', ...payload } }, statusCode);
}
