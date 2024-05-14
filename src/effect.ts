import { Console, Effect } from "effect"
import { divideEffect } from "./divide"

export const effect = () => {
    console.log("use effect.js")

    console.log("割り算：25÷5と25÷0")

    try {
        Effect.runSync(
            divideEffect(25, 5).pipe(
                Effect.map((result) => console.log(result)),
            ),
        )
    } catch (err) {
        console.log(err)
    }

    try {
        Effect.runSync(
            divideEffect(25, 0).pipe(
                Effect.map((result) => console.log(result)),
            ),
        )
    } catch (err) {
        console.log("エラー")
    }
}
