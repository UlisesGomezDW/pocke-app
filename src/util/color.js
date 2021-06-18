import { ORANGE, PINK, YELLOW, BLUE, PURPLE, RED } from "./../constants/colors"
import { getRandomNumber } from "./../util/numbers"

export const COLORS = [ORANGE, PINK, YELLOW, BLUE, PURPLE, RED]

export function getRandomColor() {
    const number = getRandomNumber({ min: 0, max: 5 })
    return COLORS[number]
}
