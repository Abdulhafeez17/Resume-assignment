"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupInput = void 0;
var zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
console.log("hi there");
