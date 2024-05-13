import { Console, Effect } from "effect"

export const effect = () => {
    const program = Console.log("Hello, World!")

    Effect.runSync(program)
}
