import { Console, Effect } from "effect"
import { divideEffect } from "./divide"

export const effect = () => {
    console.log("use effect.js")

    console.log("割り算：25÷5と25÷0")

    try {
        console.log(divideEffect(25, 5))
    } catch (err) {
        console.log(err)
    }

    try {
        console.log(divideEffect(25, 0))
    } catch (err) {
        console.log(err)
    }
}
