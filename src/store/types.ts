export type TInitialState = {
    wallet: {
        total: number,
        inDay: number,
        payDay: number | Date,
        daysPayday: number,
    }
}