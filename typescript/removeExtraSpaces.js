"use strict";
exports.__esModule = true;
exports.removeExtraSpaces = void 0;
// removes all extra spaces in a string
function removeExtraSpaces(str) {
    var removeWhiteSpace = str.trim();
    var splitStr = removeWhiteSpace.split(' ');
    var filter = splitStr.filter(function (word) { return word !== ''; });
    return filter.join(' ');
}
exports.removeExtraSpaces = removeExtraSpaces;
console.log(removeExtraSpaces("  Hello  World! "));
