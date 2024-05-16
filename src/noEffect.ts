import { divideNoEffect } from "./divide"

export const noEffect = async () => {
    console.log("not use effect")

    try {
        const numA: number = divideNoEffect(25, 5)

        console.log(numA)

        const numB: number = divideNoEffect(25, 0)

        console.log(numB)
    } catch (err) {
        console.log(err)
    }
}
