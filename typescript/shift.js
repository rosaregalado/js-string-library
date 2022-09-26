"use strict";
exports.__esModule = true;
exports.shift = void 0;
// shift() will take the first character of a string and move to the end of a string
function shift(str) {
    var first = str[0];
    return str.slice(1) + first;
}
exports.shift = shift;
console.log(shift('hello world'));
