export class APIError extends Error {
  name = "APIError";

  constructor(message) {
    super(message);
  }
}
