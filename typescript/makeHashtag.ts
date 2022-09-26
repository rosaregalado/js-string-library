import {capitalize} from './capitalize.js'

// convert str to hashtag
// input: 'Amazing bongo drums for sale'
// output: ['#amazing', '#bongo', '#drums']

function makeHashTag(str: string): string[] {
  let arr: string[] = str.split(' ')
  // sort by length
  let sorted: string[] = arr.sort((a, b) => b.length - a.length)
  //capitalize sorted words
  sorted = sorted.map((word) => capitalize(word))

  // use first 3 words
  const firstThree: string[] = sorted.slice(0,3)
  return firstThree
}
console.log(makeHashTag('Amazing bongo drums for sale'))