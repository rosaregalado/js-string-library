"use strict";
exports.__esModule = true;
exports.capitalize = void 0;
// capitalize first char of given string uppercase
function capitalize(str) {
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        return arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var capitalized = arr.join(" ");
    return capitalized;
}
exports.capitalize = capitalize;
console.log(capitalize("world"));
