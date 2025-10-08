import {GenerateRandomNumberUtility} from "./generateRandomNumberUtility";

describe('GenerateRandomNumberUtility', () => {
    const utility = new GenerateRandomNumberUtility()

    test('should generate a number within tge given range', () => {
        const from = 10
        const to = 20
        const result = utility.getRandomIntegerNumber(from,to)
        expect(result).toBeGreaterThanOrEqual(from)
        expect(result).toBeLessThan(to)
    });

    test('should throw a TypeError if arguments are not numbers', () => {
        expect(() => utility.getRandomIntegerNumber('10', 20)).toThrow(TypeError)
        expect(() => utility.getRandomIntegerNumber(10, '20')).toThrow(TypeError)
    });

    test('should throw a RangeError if from is not less than to', () => {
        expect(() => utility.getRandomIntegerNumber(20, 10)).toThrow(RangeError)
        expect(() => utility.getRandomIntegerNumber(10, 10)).toThrow(RangeError)
    });

    test('should handle edge cases property', () => {
        expect(utility.getRandomIntegerNumber(0,1)).toBe(0)

        const largeFrom = -1000000
        const largeTo = 1000000
        const largeResult = utility.getRandomIntegerNumber(largeFrom, largeTo);
        expect(largeResult).toBeGreaterThanOrEqual(largeFrom)
        expect(largeResult).toBeLessThan(largeTo)

        const negativeFrom = -10
        const negativeTo = -5
        const negativeResult = utility.getRandomIntegerNumber(negativeFrom, negativeTo)
        expect(negativeResult).toBeGreaterThanOrEqual(negativeFrom)
        expect(negativeResult).toBeLessThan(negativeTo)
    })
})