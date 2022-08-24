import { createSlice } from "@reduxjs/toolkit"
import { getLocalStorage } from "../helpers/getLocalStorage"
import { IChange, TInitialState } from "./types"

const local_wallet = getLocalStorage('wallet');
const local_changes = getLocalStorage('wallet_changes');
console.log(local_changes, 'local_changes');

const initialState: TInitialState = {
    wallet: {
        total: local_wallet ? Number(local_wallet.total) : 0,
        inDay: local_wallet ? Number(local_wallet.inDay) : 0,
        payDay: local_wallet ? new Date(local_wallet.payDay) : new Date(),
        daysPayday: local_wallet ? local_wallet.daysPayday : 0,
    },
    walletChanges: local_changes ? local_changes : [] as IChange[]
}

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setMain(state, action) {
            state = {
                ...action.payload
            }
            localStorage.setItem('wallet', JSON.stringify(action.payload));
        },
        setChanges(state, action) {
            state = action.payload
            localStorage.setItem('wallet_changes', JSON.stringify(action.payload));
        }
    },
})


const { actions, reducer } = walletSlice

export const { setMain, setChanges } = actions

export default reducer