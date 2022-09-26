"use strict";
exports.__esModule = true;
exports.kebobCase = void 0;
var removeExtraSpaces_js_1 = require("./removeExtraSpaces.js");
// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase
function kebobCase(str) {
    var lower = str.toLowerCase();
    var split = lower.split('');
    var filter = split.filter(function (letter) {
        var code = letter.charCodeAt(0);
        if (code === 32 || code === 45) {
            return true;
        }
        else if (code >= 48 && code <= 57) {
            return true;
        }
        else if (code > 96 && code < 123) {
            return true;
        }
        return false;
    });
    var joined = filter.join('');
    joined = (0, removeExtraSpaces_js_1.removeExtraSpaces)(joined).split(' ').join('-');
    return joined;
}
exports.kebobCase = kebobCase;
console.log(kebobCase("Hello world"));
