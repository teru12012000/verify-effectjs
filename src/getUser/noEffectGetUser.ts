import type { HPType } from "./type"

export const noEffectGetUser = async (): Promise<HPType[]> => {
    const res = await fetch(
        "https://potterapi-fedeperin.vercel.app/es/characters",
    )

    const data = (await res.json()) as HPType[]

    return data
}
