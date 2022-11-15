const hello = require("./public/hello");
describe("My Hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World");
  });
});