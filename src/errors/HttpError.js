export const HttpError = class HttpError extends Error {
  static messages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict",
    422: "Unprocessable Entity",
    429: "Too Many Requests",
    500: "Internal Server Error",
    503: "Service Unavailable",
  };

  name = "HttpError";

  constructor(statusCode) {
    super(HttpError.messages[statusCode] || "Unknown Error");

    this.statusCode = statusCode;
  }
};
