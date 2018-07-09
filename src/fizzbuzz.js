export function convertFizzBuzz(toBeConverted) {
  console.log(`${toBeConverted} should be converted `);

  let split = toBeConverted.split(" ");
  const returnValue = split
    .map(value => (value.indexOf("3") >= 0) ? "lucky": value) //Contains 3 should be lucky
    .map(value => (value %15 === 0) ? "fizzbuzz": value) //Map values %15 to fizzbuzz -- needs to be first
    .map(value => (value %3 === 0) ? "fizz" : value)  // Map values % 3 to fizz
    .map(value => (value %5 === 0) ? "buzz" : value) // Map values % 5 to buzz
    .join(" ");

  return returnValue;
};