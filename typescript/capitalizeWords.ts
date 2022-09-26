import {capitalize} from './capitalize'

// make the first char of each word uppercase
function capitalizeWords(str: string): string {
  const words: string[] = str.split(' ')
  const capitalized: string[] = words.map(string => capitalize(string))
  return capitalized.join(' ')
}
console.log(capitalizeWords("hello world"))

export {
  capitalizeWords
}