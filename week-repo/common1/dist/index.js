"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstEl = exports.isOdd = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
console.log("hi there");
function isOdd(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
exports.isOdd = isOdd;
function firstEl(arr) {
    return arr[0];
}
exports.firstEl = firstEl;
