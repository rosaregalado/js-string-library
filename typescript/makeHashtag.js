"use strict";
exports.__esModule = true;
var capitalize_js_1 = require("./capitalize.js");
// convert str to hashtag
// input: 'Amazing bongo drums for sale'
// output: ['#amazing', '#bongo', '#drums']
function makeHashTag(str) {
    var arr = str.split(' ');
    // sort by length
    var sorted = arr.sort(function (a, b) { return b.length - a.length; });
    //capitalize sorted words
    sorted = sorted.map(function (word) { return (0, capitalize_js_1.capitalize)(word); });
    // use first 3 words
    var firstThree = sorted.slice(0, 3);
    return firstThree;
}
console.log(makeHashTag('Amazing bongo drums for sale'));
