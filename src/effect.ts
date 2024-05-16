import { Effect } from "effect"
import { divideEffect } from "./divide"

export const effect = () => {
    console.log("use effect.js")

    Effect.try({
        try: () => {
            Effect.runSync(
                divideEffect(25, 5).pipe(
                    Effect.map((result) => console.log(result)),
                ),
            )

            Effect.runSync(
                divideEffect(25, 0).pipe(
                    Effect.map((result) => console.log(result)),
                ),
            )
        },
        catch: (err) => {
            console.log(err)
        },
    })
}
