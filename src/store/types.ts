export type TInitialState = {
    wallet: {
        total: number,
        inDay: number,
        payDay: Date,
        daysPayday: number,
    },
    walletChanges: IChange[],
}

export type IChange = {
    date: Date,
    waste: number,
    remainder: number,
}