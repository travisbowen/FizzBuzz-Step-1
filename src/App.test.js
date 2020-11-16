import { fizzBuzz } from "./App";

test("fizzbuzz function map over and check for all 4 possibilities", () => {
	const testArray = fizzBuzz([1, 3, 5, 15]);
	expect(testArray[0]).toBe(1);
	expect(testArray[1]).toBe("fizz");
	expect(testArray[2]).toBe("buzz");
	expect(testArray[3]).toBe("fizzbuzz");
});
