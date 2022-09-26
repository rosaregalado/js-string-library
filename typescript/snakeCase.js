"use strict";
exports.__esModule = true;
exports.snakeCase = void 0;
function snakeCase(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
}
exports.snakeCase = snakeCase;
console.log(snakeCase('hello world'));
