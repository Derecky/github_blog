export type City = {
    id: number,
    name: string,
    province: 'AL' | 'SP' | 'SC',
}

export type Province = {
    id: number,
    name: string,
    code: string,
    cities: string[],
}
