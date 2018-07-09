import {expect} from 'chai';
import request from 'supertest';
import {convertFizzBuzz} from '../src/fizzbuzz';

describe("Fizzbuzz service", () => {
  it("should convert modulus 3 to fizz", (done) => {

    const result = convertFizzBuzz("1 9 6 8");
    expect(result).to.equal("1 fizz fizz 8");

    const result1 = convertFizzBuzz ("12 6 9");
    expect(result1).to.equal("fizz fizz fizz");
    done();
  });
  it("should convert modulus 5 to fizz buzz", (done) => {
    const result = convertFizzBuzz("1 5 5 8");
    expect(result).to.equal("1 buzz buzz 8");
    done();

  });
  it("should convert modulus 15 to fizz fizzbuzz", (done) =>  {
    const result = convertFizzBuzz ("1 15 45 60");
    expect(result).to.equal("1 fizzbuzz fizzbuzz fizzbuzz");
    done();
  });
  it("Should convert any item containing 3 to lucky", (done) => {
    const result = convertFizzBuzz ("1 4 30 31 44");
    expect(result).to.equal("1 4 lucky lucky 44");
    done();
  })
});