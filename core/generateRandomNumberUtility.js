/**
 * *Utility class for generating random integers wthin a cpecified range
 */

export class GenerateRandomNumberUtility {
    /**
     *
     * @param {number} from - The lower bound of the range (inclusive),
     * @param {number} to - The upper bound of the range (exclusive),
     * @returns {number} A random integer in the range (from,to)
     * @throws {TypeError} If either argument is not a number.
     * @throws {RangeError} If from is not less than to.
     */
    getRandomIntegerNumber(from,to) {
        if (typeof from !== 'number' || typeof to !== "number") {
            throw new TypeError('Arguments must be numbers')
        }
        if (from >= to) {
            throw new RangeError('from must be less than to')
        }
        return Math.floor(Math.random() * (to - from)) + from
    }
}