// Creates a new type of error adding the code

class HttpError extends Error {
  code: number;
  constructor(msg: string, code: number) {
    super(msg);
    this.code = code;
  }
}

export default HttpError;
