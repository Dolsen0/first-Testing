import { sum } from '../src/index.js'
import { sumEr } from '../src/index.js'
import { multiply } from '../src/index.js'


it("should add 2 numbers and return the sum", () => {
    //Arrange
    const a = 4, b = 5, expected = 9

    //Act
    const actual = sum(a, b)

    //Assert
    expect(actual).toBe(expected)
})

it("It should add a number and a string and return an error", () => {
    //Arrange
    const a = 4, b = 5, expected = 9

    //Act
    const actual = sumEr(a, b)

    //Assert
    expect(actual).toContain(expected)
})

fit("It should multply 2 numbers and return the result.", ()=> {
    //Arrange
    const a = 3, b = 5, expected = 15

    //Act
    const actual = multiply(a, b)
    
    //Assert
    expect(actual).toBe(expected)
})