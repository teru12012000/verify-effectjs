import { Effect } from "effect"

export const divideEffect = (
    numA: number,
    numB: number,
): Effect.Effect<number, Error> =>
    numB === 0 ? Effect.fail(new Error("")) : Effect.succeed(numA / numB)
