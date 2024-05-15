import { divideNoEffect } from "./divide"
import { noEffectGetUser } from "./getUser"

export const noEffect = async () => {
    console.log("not use effect")

    console.log("割り算：25÷5と25÷0")

    try {
        const numA: number = divideNoEffect(25, 5)

        console.log(numA)

        const numB: number = divideNoEffect(25, 0)

        console.log(numB)
    } catch (err) {
        console.log(err)
    }

    const data = await noEffectGetUser().then((res) => {
        console.log("no effect get api")

        console.log(res)
    })
}
