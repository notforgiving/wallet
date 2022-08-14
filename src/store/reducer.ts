import { createSlice } from "@reduxjs/toolkit"
import { getLocalStorage } from "../helpers/getLocalStorage"
import { TInitialState } from "./types"

const local = getLocalStorage('wallet');

const initialState: TInitialState = {
    wallet: {
        total: local.total | 0,
        inDay: local.inDay | 0,
        payDay: local.payDay ? new Date(local.payDay) : new Date().getTime(),
        daysPayday: local.daysPayday | 0,
    }
}

const postsSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setData(state, action) {
            state.wallet = {
                ...action.payload
            }
            localStorage.setItem('wallet', JSON.stringify(action.payload));
        },
    },
})


const { actions, reducer } = postsSlice

export const { setData } = actions

export default reducer