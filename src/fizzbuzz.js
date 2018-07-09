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

export function summary(toBeSummarized) {
  console.log(`${toBeSummarized} should be summarized `);
  let split = toBeSummarized.split(" ");
  const returnValue = split
    .reduce((acc, curr) => {
      switch (curr) {
        case "fizz":
          acc["fizz"] = acc["fizz"]+1;
          break;
        case "buzz":
          acc["buzz"] = acc["buzz"]+1;
          break;
        case "fizzbuzz":
          acc["fizzbuzz"] = acc["fizzbuzz"]+1;
          break;
        case "lucky":
          acc["lucky"] = acc["lucky"]+1;
          break;
        default:
          acc["integer"] = acc["integer"]+1;
          break;
      }
      return acc;

    }, {"fizz": 0, "buzz": 0, "fizzbuzz": 0, "lucky": 0, "integer": 0})
  return returnValue;
}