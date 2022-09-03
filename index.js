// capitalize first char of given string uppercase
function capitalize(str) {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    return arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  } 
  const capitalized = arr.join(" ");
  return capitalized;
}
console.log(capitalize("world"))


// make all characters uppercase
function allCaps(str) {
  const capitalized = str.toUpperCase();
  return capitalized;
}
console.log(allCaps("world"))


// make the first char of each word uppercase
function capitalizeWords(str) {
  const words = str.split(' ')
  const capitalized = words.map(string => capitalize(string))
  return capitalized.join(' ')
}
console.log(capitalizeWords("hello world"))


// removes all extra spaces in a string
function removeExtraSpaces(str) {
  const removeWhiteSpace = str.trim();
  const splitStr = str.split(' ');
  return splitStr.join('')
}
console.log("  Hello   World! ")


// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase
function kebobCase(str) {
  const lower = str.toLowerCase();
  const split = lower.split('');
  let filter = split.filter( (letter) => {
    const code = letter.charCodeAt(0);
    if (code === 32 || code === 45) {
      return true;
    } else if (code >= 48 && code <= 57) {
      return true;
    } else if (code > 96 && code < 123) {
      return true
    }
    return false
  })
  let joined = filter.join('')
  joined = removeExtraSpaces(joined).split(' ').join('-')
  return joined;
}
console.log(kebobCase("Hello world"))


// Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
function snakeCase(str) {
  return str.replace(/\s+/g, '_').toLowerCase();
}
console.log(snakeCase('hello world'))


// Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str) {
  const words = str.split(' ')
  const camel = words.map((word, i) => {
    if (i = 0) {
      return word.toLowerCase();
    } else {
      return capitalize(word)
    }
  })
  // join words on empty str
  return camel.join('')
}


// shift() will take the first character of a string and move to the end of a string
function shift(str) {
  const first = str[0]
  return str.slice(1) + first
}
console.log(shift('hello world'))


// convert str to hashtag
// input: 'Amazing bongo drums for sale'
// output: ['#amazing', '#bongo', '#drums']

function makeHashTag(str) {
  let arr = str.split(' ')
  // sort by length
  let sorted = arr.sort((a, b) => b.length - a.length)
  //capitalize sorted words
  sorted = sorted.map((word) => capitalize(word))

  // use first 3 words
  const firstThree = sorted.slice(0,3)
  return firstThree
}
console.log(makeHashTag('Amazing bongo drums for sale'))


// returns true if input string is empty or only contains white spaces (spaces, line returns, tabs)
function isEmpty(str) {
  const trim = str.trim(); // remove spaces at the beginning or end
  // check if str empty
  if (trim.length === 0) {
    return true;
  }
  const whiteSpaces = ['\n', '\r', '\t']
  // loop over remaining char
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== whiteSpaces) {
      return false
    }
    return true
  }
}
console.log(isEmpty('Abc def'))


module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kebobCase = kebobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
module.exports.makeHashTag = makeHashTag
module.exports.isEmpty = isEmpty