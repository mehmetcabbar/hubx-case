import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface NumberState {
    index: number
}

const initialState: NumberState = {
    index: 0,
}

export const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        changeIndex: (state, action: PayloadAction<number>) => {
            state.index = action.payload
        }
    },
})

export const { changeIndex } = numberSlice.actions
export default numberSlice.reducer