class Utilities {
  constructor() { }
  toTransport(inputObject) {
    processResult = inputObject;
    if (typeof inputObject === "object")
      processResult = JSON.stringify(inputObject);
    return encodeURIComponent(processResult);
  }
}
