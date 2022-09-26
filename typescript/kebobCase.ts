import {removeExtraSpaces} from './removeExtraSpaces.js'

// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase
function kebobCase(str: string): string {
  const lower: string = str.toLowerCase();
  const split: string[] = lower.split('');
  let filter: string[] = split.filter( (letter) => {
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
  let joined: string = filter.join('')
  joined = removeExtraSpaces(joined).split(' ').join('-')
  return joined;
}
console.log(kebobCase("Hello world"))

export {
  kebobCase
}