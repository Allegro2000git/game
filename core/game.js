import {GameStatuses} from "./game-statuses";

export class Game {
    #status = GameStatuses.SETTING
    #googlePosition = null
    #numberUtility// = new GenerateRandomNumberUtility()

    constructor(somethingSimilarToNumberUtility) {
        this.#numberUtility = somethingSimilarToNumberUtility // must have method: getRandomIntegerNumber
    }

    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4
        },
        googleJumpInterval: 1000
    }

    /**
     *
     * @param {number} newValue - The new interval value to set. Must be a positive number.
     * @throws {TypeError} If newValue is not a number.
     * @throws {TypeError} If newValue is less than or equal to 0.
     */

    set googleJumpInterval(newValue) {
        if (typeof newValue !== 'number') {
            throw new TypeError('Arguments must be number')
        }
        if (newValue <= 0) {
            throw new TypeError('Interval must be number')
        }
        this.#settings.googleJumpInterval = newValue
    }

    start() {
        if (this.#status !== GameStatuses.SETTING) {
            throw new Error('Game must be in Settings before Start')
        }
        this.#status = GameStatuses.IN_PROGRESS

        this.#makeGoogleJump()

        setInterval(() => {
            this.#makeGoogleJump()
        }, this.#settings.googleJumpInterval)
    }

    #makeGoogleJump() {
        const newPosition = {
            x: this.#numberUtility.getRandomIntegerNumber(0, this.#settings.gridSize.columnsCount),
            y: this.#numberUtility.getRandomIntegerNumber(0, this.#settings.gridSize.columnsCount),
        }
        if (newPosition.x === this.googlePosition?.x && newPosition.y === this.googlePosition?.y) {
            this.#makeGoogleJump()
            return
        }
        this.#googlePosition = newPosition
    }

    get status() {
        return this.#status
    }

    get googlePosition() {
        return this.#googlePosition
    }

    get gridSize() {
        return this.#settings.gridSize
    }
}
