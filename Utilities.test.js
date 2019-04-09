const Utilities = require("./Utilities");
const utils = new Utilities();
test("if Utilities.toTransport() return encoded string", () => {
    let input = {
        name: "chris",
        email: "chris@gmail.com"
    }
    let result = utils.toTransport(input);
    expect(result).toBe(encodeURIComponent(JSON.stringify(input)));
})