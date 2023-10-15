import * as fn from "./index"

test("returns uuid version 4", () => {
    expect(typeof(fn.genUUID4())).toBe("string")
})

test("test if given value is string", () => {
    expect(fn.isString("hi")).toBe(true)
})

test("returns the length of string", () => {
    expect(typeof(fn.getLength("hi"))).toBe("number")
})

test("replace given string with something", () => {
    expect(typeof(fn.replaceWith("hi", "h", "ello"))).toBe("string")
})

test("test if given value is uuid", () => {
    expect(fn.isUUID4("hi")).toBe(false)
})

test("generates random string", () => {
    expect(typeof(fn.genRandStr(10))).toBe("string")
})

test("reverts string", () => {
    expect(typeof (fn.revStr("hello"))).toBe("string")
})

test("truncates string to ...", () => {
    expect(typeof (fn.truncStr("Lorem ipsum dolor sit amet", 10))).toBe("string")
})

test("capitalizes first letter of string", () => {
    expect(typeof (fn.capFirstL("hello"))).toBe("string")
})

test("capitalizes whole string", () => {
    expect(typeof (fn.capStr("Lorem ipsum dolor sit amet"))).toBe("string")
})