// capitalize first char of given string uppercase
function capitalize(str: string): string {
  const arr: string[] = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    return arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  } 
  const capitalized: string = arr.join(" ");
  return capitalized;
}
console.log(capitalize("world"))

export {
  capitalize
}