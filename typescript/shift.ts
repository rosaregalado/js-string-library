// shift() will take the first character of a string and move to the end of a string
function shift(str: string) {
  const first: string = str[0]
  return str.slice(1) + first
}
console.log(shift('hello world'))

export {
  shift
}
