// removes all extra spaces in a string
function removeExtraSpaces(str: string): string {
  const removeWhiteSpace: string = str.trim();
  const splitStr: string[] = removeWhiteSpace.split(' ');
  const filter: string[] = splitStr.filter((word) => word !== '');
  return filter.join(' ')
}
console.log(removeExtraSpaces("  Hello  World! "))

export {
  removeExtraSpaces
}