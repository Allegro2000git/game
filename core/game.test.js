import {Game} from "./game"
import {GameStatuses} from "./game-statuses";
import {GenerateRandomNumberUtility} from "./generateRandomNumberUtility";

describe('game', () => {
    it('game chould be created and return status', () => {
        const numberUtil = new GenerateRandomNumberUtility()
        const game = new Game(numberUtil)
        expect(game.status).toBe(GameStatuses.SETTING)
    })

    it('game chould be created and return status', async () => {
        const numberUtil = new GenerateRandomNumberUtility()
        const game = new Game(numberUtil)
        await game.start()
        expect(game.status).toBe(GameStatuses.IN_PROGRESS)
    })

    it('google should be in the Grid after start', async () => {
        const numberUtil = new GenerateRandomNumberUtility()
        for (let i = 0; i < 100; i++) {
            const game = new Game(numberUtil)
            expect(game.googlePosition).toBeNull()
            await game.start()
            expect(game.googlePosition.x).toBeLessThan(game.gridSize.columnsCount)
            expect(game.googlePosition.x).toBeGreaterThanOrEqual(0)
            expect(game.googlePosition.y).toBeLessThan(game.gridSize.rowsCount)
            expect(game.googlePosition.y).toBeGreaterThanOrEqual(0)
        }
    })

    it('google should be in the Grid but in new position after jump', async () => {
        const numberUtil = new GenerateRandomNumberUtility()
        const game = new Game(numberUtil)
        game.googleJumpInterval = 1
        await game.start()

        for (let i = 0; i < 100; i++) {
            const prevGooglePosition = game.googlePosition;
            await delay(1)
            const currentGooglePosition = game.googlePosition;
            expect(prevGooglePosition).not.toEqual(currentGooglePosition)

        }
    })
})

const delay = (ms) => new Promise((res) => setTimeout(res,ms))