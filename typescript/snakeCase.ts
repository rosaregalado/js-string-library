function snakeCase(str) {
  return str.replace(/\s+/g, '_').toLowerCase();
}
console.log(snakeCase('hello world'))

export {
  snakeCase
}