export type City = {
    id: number,
    name: string,
    province: 'AL' | 'SP' | 'SC',
}

export type State = {
    id: number,
    name: string,
    code: string,
    cities: string[],
}
