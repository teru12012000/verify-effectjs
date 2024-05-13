import { divideNoEffect } from "./divide"

export const noEffect = () => {
    console.log("not use effect")

    console.log("割り算：25÷5と25÷0")

    try {
        const numA: number = divideNoEffect(25, 5)

        console.log(numA)
    } catch (err) {
        console.log(err)
    }

    try {
        const numB: number = divideNoEffect(25, 0)

        console.log(numB)
    } catch (err) {
        console.log(err)
    }
}
