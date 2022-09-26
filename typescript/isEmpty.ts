// returns true if input string is empty or only contains white spaces (spaces, line returns, tabs)
function isEmpty(str: string): boolean {
  const trim: string = str.trim(); // remove spaces at the beginning or end
  // check if str empty
  if (trim.length === 0) {
    return true;
  }
  const whiteSpaces: string[] = ['\n', '\r', '\t']
  // loop over remaining char
  for (let i = 0; i < str.length; i++) {
    if (whiteSpaces.includes(str[i])) {
      return false
    }
    // return true
  }
  return true
}
console.log(isEmpty('Abc def'))

export {
  isEmpty
}