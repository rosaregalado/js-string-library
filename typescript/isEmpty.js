"use strict";
exports.__esModule = true;
exports.isEmpty = void 0;
// returns true if input string is empty or only contains white spaces (spaces, line returns, tabs)
function isEmpty(str) {
    var trim = str.trim(); // remove spaces at the beginning or end
    // check if str empty
    if (trim.length === 0) {
        return true;
    }
    var whiteSpaces = ['\n', '\r', '\t'];
    // loop over remaining char
    for (var i = 0; i < str.length; i++) {
        if (whiteSpaces.includes(str[i])) {
            return false;
        }
        // return true
    }
    return true;
}
exports.isEmpty = isEmpty;
console.log(isEmpty('Abc def'));
