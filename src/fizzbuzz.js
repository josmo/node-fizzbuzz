export function convertFizzBuzz(toBeConverted) {
  console.log(`${toBeConverted} should be converted `);

  let split = toBeConverted.split(" ");
  const returnValue = split
    .map(value => {
      if (value.indexOf("3") >= 0) return "lucky"; //contains 3 return lucky
      if (value %15 === 0) return "fizzbuzz"; // Modulus 15 return fizzbuzz
      if (value %3 === 0) return "fizz"; //Modulus 3 return fizz
      if (value %5 === 0) return "buzz"; //Modulus 5 return buzz
      return value;
    })
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
          acc["fizz"]++;
          break;
        case "buzz":
          acc["buzz"]++;
          break;
        case "fizzbuzz":
          acc["fizzbuzz"]++;
          break;
        case "lucky":
          acc["lucky"]++;
          break;
        default:
          acc["integer"]++;
          break;
      }
      return acc;

    }, {"fizz": 0, "buzz": 0, "fizzbuzz": 0, "lucky": 0, "integer": 0});
  return returnValue;
}