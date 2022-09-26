import {capitalize} from './capitalize.js'

// Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str: string) {
  const words: string[] = str.split(' ')
  const camel: string[] = words.map((word, i) => {
    if (i = 0) {
      return word.toLowerCase();
    } else {
      return capitalize(word)
    }
  })
  // join words on empty str
  return camel.join('')
}

export {
  camelCase
}