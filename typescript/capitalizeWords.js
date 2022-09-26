"use strict";
exports.__esModule = true;
exports.capitalizeWords = void 0;
var capitalize_1 = require("./capitalize");
// make the first char of each word uppercase
function capitalizeWords(str) {
    var words = str.split(' ');
    var capitalized = words.map(function (string) { return (0, capitalize_1.capitalize)(string); });
    return capitalized.join(' ');
}
exports.capitalizeWords = capitalizeWords;
console.log(capitalizeWords("hello world"));
