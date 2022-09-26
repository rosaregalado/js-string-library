"use strict";
exports.__esModule = true;
exports.camelCase = void 0;
var capitalize_js_1 = require("./capitalize.js");
// Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str) {
    var words = str.split(' ');
    var camel = words.map(function (word, i) {
        if (i = 0) {
            return word.toLowerCase();
        }
        else {
            return (0, capitalize_js_1.capitalize)(word);
        }
    });
    // join words on empty str
    return camel.join('');
}
exports.camelCase = camelCase;
