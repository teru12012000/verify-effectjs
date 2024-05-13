export const divideNoEffect = (numA: number, numB: number) => {
    if (numB === 0) throw new Error("Cannot divide by zero")

    return numA / numB
}
